/* ================================================================
   db.js · 数学错题本 IndexedDB（精简版）
   只两张表：problems（题目 + 答案 + 正误标记）、status（正误，独立于题目本体）。
   正误放独立表的好处：切换正误只改一行很小的记录，不动大字段的题目记录。
   沿用英语项目 ekz-db.js 的三个踩坑注释：
   1. deleteDatabase 会被同标签页任何还开着的连接卡成onblocked -> 删库前先 close()
   2. 写事务必须同时挂 onabort，否则非 error 的中止会让 Promise 永不 settle
   3. 读事务只能在 request.onsuccess 里取值，不能在 transaction.oncomplete 反查
   ================================================================ */
(function () {
  'use strict';
  const NAME = 'study-math-v3';
  const STORES = ['problems', 'status'];
  let cached = null;

  function close() {
    if (!cached) return Promise.resolve();
    try { cached.close(); } catch (_) {}
    cached = null;
    return Promise.resolve();
  }

  function open() {
    if (cached) return Promise.resolve(cached);
    return new Promise((res, rej) => {
      const r = indexedDB.open(NAME, 1);
      r.onupgradeneeded = () => {
        const db = r.result;
        STORES.forEach(s => {
          if (!db.objectStoreNames.contains(s)) {
            db.createObjectStore(s, { keyPath: 'id' });
          }
        });
      };
      r.onsuccess = () => {
        cached = r.result;
        cached.onclose = () => { cached = null; };
        cached.onversionchange = () => { try { cached.close(); } catch (_) {} cached = null; };
        res(cached);
      };
      r.onerror = () => rej(r.error);
      r.onblocked = () => rej(new Error('数据库被其他标签页占用，请关掉其它页面后重试'));
    });
  }

  /* 写事务：必须同时挂 onabort */
  function tx(db, mode, store, run) {
    return new Promise((res, rej) => {
      let t;
      try { t = db.transaction(store, mode); }
      catch (e) { rej(e); return; }
      t.oncomplete = () => res();
      t.onerror = () => rej(t.error);
      t.onabort = () => rej(t.error || new DOMException('事务被中止', 'AbortError'));
      try { run(t.objectStore(store)); }
      catch (e) { try { t.abort(); } catch (_) {} rej(e); }
    });
  }

  /* 读事务：值只能在 request.onsuccess 里取 */
  function req(db, mode, store, run) {
    return new Promise((res, rej) => {
      let t;
      try { t = db.transaction(store, mode); }
      catch (e) { rej(e); return; }
      let out;
      const rq = run(t.objectStore(store));
      if (rq && 'onsuccess' in rq) {
        rq.onsuccess = () => { out = rq.result; };
        rq.onerror = () => rej(rq.error);
      }
      t.oncomplete = () => res(out);
      t.onerror = () => rej(t.error);
      t.onabort = () => rej(t.error || new DOMException('事务被中止', 'AbortError'));
    });
  }

  /* 公式落库前还原成 $...$ 源码（用 rich-note 的 deflateMathHtml） */
  function flatten(html) {
    if (html == null) return '';
    const s = String(html);
    if (window.__richNote && typeof window.__richNote.deflateMathHtml === 'function') {
      try { return window.__richNote.deflateMathHtml(s); } catch (_) {}
    }
    return s;
  }

  /* ---------------- problems ---------------- */
  async function allProblems() {
    const db = await open();
    return (await req(db, 'readonly', 'problems', st => st.getAll())) || [];
  }
  async function getProblem(id) {
    const db = await open();
    return await req(db, 'readonly', 'problems', st => st.get(id));
  }
  async function putProblem(rec) {
    const db = await open();
    const r = Object.assign({}, rec);
    r.problemHTML = flatten(r.problemHTML);
    r.answerHTML  = flatten(r.answerHTML);
    r.updatedAt   = r.updatedAt || Date.now();
    r.createdAt   = r.createdAt || r.updatedAt;
    await tx(db, 'readwrite', 'problems', st => st.put(r));
    return r;
  }
  async function putProblems(recs) {
    const db = await open();
    for (const rec of recs) {
      const r = Object.assign({}, rec);
      r.problemHTML = flatten(r.problemHTML);
      r.answerHTML  = flatten(r.answerHTML);
      r.updatedAt   = r.updatedAt || Date.now();
      r.createdAt   = r.createdAt || r.updatedAt;
      await tx(db, 'readwrite', 'problems', st => st.put(r));
    }
    return recs.length;
  }
  async function countProblems() {
    const db = await open();
    return await req(db, 'readonly', 'problems', st => st.count());
  }
  /* 清空题目表（保留 status 正误表），用于按种子重灌 */
  async function clearProblems() {
    const db = await open();
    if ((await req(db, 'readonly', 'problems', st => st.count())) || 0) {
      await tx(db, 'readwrite', 'problems', st => st.clear());
    }
    return;
  }

  /* ---------------- status（正误：空=未做/ '对' / '错'） ---------------- */
  async function allStatus() {
    const db = await open();
    const rows = (await req(db, 'readonly', 'status', st => st.getAll())) || [];
    const m = {};
    rows.forEach(r => { if (r && r.id && r.st) m[r.id] = r.st; });
    return m;
  }
  /* st 为空字符串时删除记录（= 未做） */
  async function setStatus(id, st) {
    const db = await open();
    if (!st) await tx(db, 'readwrite', 'status', st2 => st2.delete(id));
    else     await tx(db, 'readwrite', 'status', st2 => st2.put({ id: id, st: st, at: Date.now() }));
  }
  async function clearStatus() {
    const db = await open();
    const n = (await req(db, 'readonly', 'status', st => st.count())) || 0;
    if (n) await tx(db, 'readwrite', 'status', st => st.clear());
    return n;
  }

  /* ---------------- 备份：整库导出 / 导入 ---------------- */
  async function exportAll() {
    const db = await open();
    const problems = await req(db, 'readonly', 'problems', st => st.getAll());
    const status   = await req(db, 'readonly', 'status',   st => st.getAll());
    return {
      app: 'Study-Math', version: 3, exportedAt: new Date().toISOString(),
      problems: problems || [], status: status || [],
    };
  }
  /* 导入：合并不覆盖（同 id 已存在则跳过） */
  async function importAll(data) {
    if (!data || data.app !== 'Study-Math') throw new Error('不是数学错题本的备份文件');
    const db = await open();
    const existP = new Set((await req(db, 'readonly', 'problems', st => st.getAllKeys())) || []);
    let added = 0, skipped = 0;
    for (const rec of data.problems || []) {
      if (!rec || !rec.id) continue;
      if (existP.has(rec.id)) { skipped++; continue; }
      await tx(db, 'readwrite', 'problems', st => st.put(rec));
      added++;
    }
    for (const rec of data.status || []) {
      if (!rec || !rec.id || !rec.st) continue;
      await tx(db, 'readwrite', 'status', st => st.put(rec));
    }
    return { added: added, skipped: skipped };
  }

  async function destroy() {
    await close();
    return new Promise((res, rej) => {
      const r = indexedDB.deleteDatabase(NAME);
      r.onsuccess = () => res(true);
      r.onerror = () => rej(r.error);
      r.onblocked = () => rej(new Error('仍有其他标签页开着数据库，无法删除'));
    });
  }

  window.MDB = {
    open: open, close: close, destroy: destroy,
    allProblems: allProblems, getProblem: getProblem,
    putProblem: putProblem, putProblems: putProblems, countProblems: countProblems, clearProblems: clearProblems,
    allStatus: allStatus, setStatus: setStatus, clearStatus: clearStatus,
    exportAll: exportAll, importAll: importAll,
  };
})();
