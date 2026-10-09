/* ================================================================
   app.js · 数学错题本主逻辑（精简版）
   只保留：章节导航 / 三个筛选 / 点题目展开答案 / 收藏 / 自然数排序。
   已去掉：编辑、笔记、组卷、新增、导入导出、灯箱。
   ⚠️ 公式已做「渲染缓存 + 视口懒渲染」：renderGrid 里不要再对已渲染卡片
      做全量 KaTeX 排版（否则会重新卡顿）。新增/改动渲染逻辑先看 renderCache / IntersectionObserver。
   ================================================================ */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

  const state = {
    problems: [],
    status: {},          // {id: '对' | '错'}，不在表里= 未做
    view: [],
    chapter: 'all',
    fExam: '', fType: '', fStat: '',
  };

  /* 一键展开/收起：当前是否处于「全部展开」状态 */
  let allExpanded = false;

  /* ---------------------------------------------------- 工具 */
  function esc(s) {
    return window.safeText ? window.safeText(s == null ? '' : String(s))
                           : String(s == null ? '' : s)
                                 .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function nl2br(s) {
    return String(s == null ? '' : s).replace(/\r\n?/g, '\n').replace(/\n/g, '<br>');
  }
  function renderMath(root) {
    if (window.__richNote && window.__richNote.renderMathIn) {
      try { window.__richNote.renderMathIn(root); } catch (_) {}
    }
  }

  /* ---------------------------------------------------- 公式渲染缓存 + 懒渲染
     题库公式极多（全书约 1700+ 个 $...$），renderGrid 每次重建网格都会对所有卡片的
     题目与答案重新跑一遍 KaTeX（katex.renderToString 同步跑在主线程）。切章节 / 改筛选 /
     首屏「全部」时一次性 typeset 几百上千个公式 → 主线程被卡住，页面明显顿挫。
     治法：
       ① 已排版好的公式 HTML 按「题目id + 字段」缓存，重复出现直接复用，不再 typeset；
       ② 首屏只渲染视口附近卡片的公式，其余用 IntersectionObserver 滚动到再渲染。 */
  const renderCache = new Map();            // key: id + ':' + ('q'|'a') -> 渲染后的 innerHTML
  let mathObserver = null;
  function ensureMathObserver() {
    if (mathObserver) mathObserver.disconnect();
    if (!('IntersectionObserver' in window)) return null;
    mathObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        const el = en.target;
        mathObserver.unobserve(el);
        renderMathLazy(el);
      });
    }, { root: null, rootMargin: '300px 0px', threshold: 0 });
    return mathObserver;
  }
  /* 已渲染过的直接回填缓存；否则真正 typeset 并写入缓存。 */
  function renderMathLazy(el) {
    if (!el || el.dataset.mathDone) return;
    const key = el.dataset.mathId + ':' + el.dataset.mathField;
    if (renderCache.has(key)) {
      el.innerHTML = renderCache.get(key);
      el.dataset.mathDone = '1';
      return;
    }
    renderMath(el);
    renderCache.set(key, el.innerHTML);
    el.dataset.mathDone = '1';
  }
  /* 输出某字段 HTML：已缓存则用渲染好的，否则给原始文本（稍后懒渲染）。 */
  function fieldHTML(id, field, raw) {
    const key = id + ':' + field;
    return renderCache.has(key) ? renderCache.get(key) : raw;
  }
  /* 正误状态 -> CSS 类名。
     ⚠️ 类名必须纯 ASCII：`.st-btn.v-对` 这种中文类名在部分浏览器里匹配失败。 */
  function statusClass(st) {
    return st === '对' ? 'v-ok' : st === '错' ? 'v-no' : '';
  }
  /* 正误状态 -> 按钮上显示的文案（库里存 '对'/'错'，界面显示「正确」「错误」） */
  function statusText(st) {
    return st === '对' ? '正确' : st === '错' ? '错误' : '未做';
  }
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('on'), 1700);
  }

  /* ---------------------------------------------------- 自然数排序
     题号形如 "1.1" / "1.10"：按两级数字比，不能直接字符串比
     （否则 "1.10" 会排在 "1.1" 前面）。 */
  function qnoKey(no) {
    const s = String(no == null ? '' : no).trim();
    /* 数列证明例N（第一章数列极限证明专题）：排在所有 1.x 之后，且按 N 的数字自然序
       （否则字符串比会把「数列证明例10」排到「数列证明例2」前面）。 */
    const ex = s.match(/^数列证明例\s*(\d+)$/);
    if (ex) return [1000, parseInt(ex[1], 10) || 0, s];
    /* 中值证明例N（中值定理例题，数三册书印 107-118）：排在 N.x 与数列证明例N 之后，
       且按 N 的数字自然序。 */
    const zv = s.match(/^中值证明例\s*(\d+)$/);
    if (zv) return [1001, parseInt(zv[1], 10) || 0, s];
    /* 积分证明例N（第三章积分证明题专题）：排在 N.x、数列证明例N、中值证明例N 之后。 */
    const jf = s.match(/^积分证明例\s*(\d+)$/);
    if (jf) return [1002, parseInt(jf[1], 10) || 0, s];
    const m = s.match(/^(\d+)(?:\.(\d+))?/);
    if (!m) return [9999, 9999, s];
    return [parseInt(m[1], 10) || 0, parseInt(m[2], 10) || 0, s];
  }
  function cmpQno(a, b) {
    const ka = qnoKey(a), kb = qnoKey(b);
    for (let i = 0; i < 2; i++) {
      if (ka[i] !== kb[i]) return ka[i] - kb[i];
    }
    return ka[2] < kb[2] ? -1 : (ka[2] > kb[2] ? 1 : 0);
  }
  function sortProblems(list) {
    return list.slice().sort((a, b) => {
      /* 先按所属大章节自然序（数字章在前，L/P 章节在后） */
      const ca = window.chapterOf(a), cb = window.chapterOf(b);
      const na = /^\d/.test(ca), nb = /^\d/.test(cb);
      if (na !== nb) return na ? -1 : 1;
      if (na && nb) {
        const ka = qnoKey(ca), kb = qnoKey(cb);
        if (ka[0] !== kb[0]) return ka[0] - kb[0];
      } else if (ca !== cb) {
        /* 同为 L/P 时按 L1<L2<P1<P2 的字母序 */
        return ca < cb ? -1 : (ca > cb ? 1 : 0);
      }
      return cmpQno(a.originalNo || a.id, b.originalNo || b.id);
    });
  }

  /* ---------------------------------------------------- 侧栏 */
  function buildSide() {
    const side = $('#side');
    let h = '<div class="side-title">章节</div>';
    (window.SUBJECTS || []).forEach(sub => {
      const list = (sub.chapters || []).filter(c => c.num3 !== false);
      if (!list.length) return;
      const total = state.problems.filter(
        p => list.some(c => window.chapterOf(p) === c.no)).length;
      const isAllSubj = state.chapter === '@' + sub.key;
      h += '<button class="nav-i nav-subj' + (isAllSubj ? ' act' : '') +
           '" data-ch="@' + esc(sub.key) + '">' + esc(sub.key) +
           '<span class="cnt">' + (total || '') + '</span></button>';
      list.forEach(c => {
        h += '<button class="nav-i nav-sub' + (state.chapter === c.no ? ' act' : '') +
             '" data-ch="' + c.no + '">' + esc(c.no + ' ' + c.title) +
             '<span class="cnt" data-cnt="' + c.no + '"></span></button>';
      });
    });
    side.innerHTML = h;
    $$('.nav-i', side).forEach(btn => {
      btn.addEventListener('click', () => {
        state.chapter = btn.dataset.ch;
        buildSide();
        applyFilter();
      });
    });
  }
  function updateCounts() {
    $$('[data-cnt]').forEach(el => {
      const n = state.problems.filter(p => window.chapterOf(p) === el.dataset.cnt).length;
      el.textContent = n || '';
    });
  }

  function chapterMatch(p, ch) {
    if (ch === 'all') return true;
    if (ch && ch.charAt(0) === '@') {
      const info = window.CHAPTER_INDEX[window.chapterOf(p)];
      return !!(info && info.subject === ch.slice(1));
    }
    return window.chapterOf(p) === ch;
  }

  /* ---------------------------------------------------- 筛选 */
  function applyFilter() {
    let list = state.problems;
    if (state.chapter !== 'all') list = list.filter(p => chapterMatch(p, state.chapter));
    if (state.fExam !== '') {
      const want = state.fExam === '1';
      list = list.filter(p => !!p.isRealExam === want);
    }
    if (state.fType) list = list.filter(p => p.type === state.fType);
    if (state.fStat === '__none') list = list.filter(p => !state.status[p.id]);
    else if (state.fStat)       list = list.filter(p => state.status[p.id] === state.fStat);
    state.view = sortProblems(list);
    renderGrid();
    renderStats();
    /* 列表换了，全展开状态复位（否则按钮文案与实际不符） */
    if (allExpanded) {
      allExpanded = false;
      const eb = $('#btnExpand');
      if (eb) eb.textContent = '全部展开';
    }
    updateCounts();
  }

  function renderStats() {
    const v = state.view;
    const ok   = v.filter(p => state.status[p.id] === '对').length;
    const bad  = v.filter(p => state.status[p.id] === '错').length;
    const undone = v.length - ok - bad;
    const real = v.filter(p => p.isRealExam).length;
    $('#stats').innerHTML = '共 <b>' + v.length + '</b> 题 · 未做 <b>' + undone +
      '</b> · 正确 <b>' + ok + '</b> · 错误 <b>' + bad + '</b> · 真题 <b>' + real + '</b>';
  }

  /* ---------------------------------------------------- 卡片 */
  function cardHTML(p) {
    const id = p.id;
    const st = state.status[id] || '未做';
    const tags = [];
    if (p.pageNo)    tags.push('<span class="tg tg-p">P' + esc(p.pageNo) + '</span>');
    if (p.type)       tags.push('<span class="tg tg-t">' + esc(p.type) + '</span>');
    if (p.isRealExam) tags.push('<span class="tg tg-e">真题</span>');
    return '' +
    '<article class="card" data-id="' + esc(id) + '">' +
      '<div class="c-h">' +
        '<span class="c-no">【' + esc(p.originalNo || p.id) + '】</span>' +
        tags.join('') +
        '<span class="c-acts">' +
          '<span class="st-wrap">' +
            '<button class="st-btn ' + statusClass(st) + '" data-act="stat" ' +
              'title="标记做题结果" aria-haspopup="listbox" aria-expanded="false">' +
              esc(statusText(st)) +
            '</button>' +
            '<span class="st-menu" role="listbox">' +
              '<button class="mi mi-none' + (st === '未做' ? ' cur' : '') + '" data-set="">未做</button>' +
              '<button class="mi mi-ok' + (st === '对' ? ' cur' : '') + '" data-set="对">正确</button>' +
              '<button class="mi mi-no' + (st === '错' ? ' cur' : '') + '" data-set="错">错误</button>' +
            '</span>' +
          '</span>' +
        '</span>' +
      '</div>' +
      '<div class="c-q" data-act="toggle" role="button" tabindex="0" aria-expanded="false">' +
        '<span class="q-text" data-math-id="' + esc(id) + '" data-math-field="q">' + fieldHTML(id, 'q', nl2br(p.problemHTML)) + '</span>' +
        '<span class="hint">(点击展开答案)</span>' +
      '</div>' +
      '<div class="c-a" data-role="answer" data-math-id="' + esc(id) + '" data-math-field="a">' + fieldHTML(id, 'a', nl2br(p.answerHTML)) + '</div>' +
    '</article>';
  }

  function renderGrid() {
    const grid = $('#grid');
    if (!state.view.length) {
      grid.innerHTML = '<div class="empty"><b>这里还没有题</b>换个章节或筛选条件看看。</div>';
      return;
    }
    const showDivider = state.chapter === 'all' || state.chapter.charAt(0) === '@';
    let h = '', lastCh = null;
    state.view.forEach(p => {
      const ch = window.chapterOf(p);
      if (showDivider && ch !== lastCh) {
        const info = window.CHAPTER_INDEX[ch];
        h += '<div class="divider"><span class="dv-name">' +
             esc(info ? (info.no + ' ' + info.title) : ch) + '</span></div>';
        lastCh = ch;
      }
      h += cardHTML(p);
    });
    grid.innerHTML = h;
    const obs = ensureMathObserver();
    $$('.card', grid).forEach(card => {
      const q = card.querySelector('.q-text');
      const a = card.querySelector('[data-role="answer"]');
      [q, a].forEach(function (el) {
        if (!el) return;
        const key = el.dataset.mathId + ':' + el.dataset.mathField;
        if (renderCache.has(key)) return;          // 已渲染，跳过
        if (obs) obs.observe(el); else renderMathLazy(el);
      });
    });
  }

  /* ---------------------------------------------------- 交互 */
  /* 关掉所有正误菜单 */
  function closeMenus(except) {
    $$('.st-menu.on').forEach(m => {
      if (m !== except) m.classList.remove('on');
    });
    $$('.st-btn[aria-expanded="true"]').forEach(b => {
      if (!except || b.nextElementSibling !== except) b.setAttribute('aria-expanded', 'false');
    });
  }

  /* 把按钮刷成某个状态 */
  function paintStatus(card, st) {
    const btn = card.querySelector('.st-btn');
    if (!btn) return;
    btn.className = 'st-btn ' + statusClass(st);
    btn.textContent = statusText(st);
    $$('.mi', card).forEach(mi => {
      const target = mi.dataset.set || '未做';
      mi.classList.toggle('cur', target === st);
    });
  }

  document.addEventListener('click', function (e) {
    /* 点菜单里的某个选项 */
    const mi = e.target.closest && e.target.closest('.mi');
    if (mi) {
      e.stopPropagation();
      const wrap = mi.closest('.st-wrap');
      const card = mi.closest('.card');
      const id = card.dataset.id;
      const val = mi.dataset.set || '';
      if (val) state.status[id] = val; else delete state.status[id];
      window.MDB.setStatus(id, val);
      paintStatus(card, val || '未做');
      closeMenus();
      renderStats();
      if (state.fStat) applyFilter();
      return;
    }

    /* 点状态钮：开 / 合菜单 */
    const sb = e.target.closest && e.target.closest('.st-btn');
    if (sb) {
      e.stopPropagation();
      const menu = sb.nextElementSibling;
      const willOpen = !menu.classList.contains('on');
      closeMenus(willOpen ? menu : null);
      menu.classList.toggle('on', willOpen);
      sb.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      return;
    }

    /* 点别处：收起所有菜单 + 正常展开答案 */
    if (!(e.target.closest && e.target.closest('.st-menu'))) closeMenus();

    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    const btn = e.target.closest('[data-act]');
    if (!btn || btn.dataset.act !== 'toggle') return;

    const ans = card.querySelector('[data-role="answer"]');
    if (!ans) return;
    const open = !ans.classList.contains('open');
    ans.classList.toggle('open', open);
    card.querySelector('.c-q').setAttribute('aria-expanded', open ? 'true' : 'false');
    card.querySelector('.hint').textContent = open ? '(点击收起答案)' : '(点击展开答案)';
    /* 展开时若公式还没渲染，立刻排一下（避免裸 $...$ 一闪） */
    if (open && !ans.dataset.mathDone) renderMathLazy(ans);
  });

  /* 键盘：Enter/空格也能展开 */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const q = e.target.closest && e.target.closest('.c-q[data-act="toggle"]');
    if (!q) return;
    e.preventDefault();
    q.click();
  });

  /* ---------------------------------------------------- 顶栏 */
  $('#fExam').addEventListener('change', e => { state.fExam = e.target.value; applyFilter(); });
  $('#fType').addEventListener('change', e => { state.fType = e.target.value; applyFilter(); });
  $('#fStat').addEventListener('change', e => { state.fStat = e.target.value; applyFilter(); });

  /* ---------------------------------------------------- 备份 */
  async function doExport() {
    const data = await window.MDB.exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '数学错题本备份-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    toast('已导出 ' + data.problems.length + ' 题');
  }
  function doImport() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.json,application/json';
    inp.onchange = async () => {
      const f = inp.files && inp.files[0];
      if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        const r = await window.MDB.importAll(data);
        const [ps, ss] = await Promise.all([window.MDB.allProblems(), window.MDB.allStatus()]);
        state.problems = ps; state.status = ss || {};
        buildSide(); applyFilter();
        toast('导入 ' + r.added + ' 题，跳过重复 ' + r.skipped + ' 题');
      } catch (e) { toast('导入失败：' + e.message); }
    };
    inp.click();
  }
  async function doWipe() {
    const n = Object.keys(state.status).length;
    if (!n) { toast('现在所有题都是「未做」'); return; }
    if (!confirm('确定清空全部正误标记？\n\n共 ' + n + ' 道题被标记过，会全部恢复成「未做」。\n题目与答案不受影响。')) return;
    try {
      const k = await window.MDB.clearStatus();
      state.status = {};
      applyFilter();
      toast('已清空 ' + k + ' 条正误标记，题目都还在');
    } catch (e) { toast('清空失败：' + e.message); }
  }

  /* ---- 一键展开/收起（照搬经济学 9my-cards 的 expandAllBtn） ---- */
  $('#btnExpand').addEventListener('click', function () {
    allExpanded = !allExpanded;
    $$('.card').forEach(card => {
      const ans = card.querySelector('[data-role="answer"]');
      if (!ans) return;
      ans.classList.toggle('open', allExpanded);
      const q = card.querySelector('.c-q');
      if (q) q.setAttribute('aria-expanded', allExpanded ? 'true' : 'false');
      const hint = card.querySelector('.hint');
      if (hint) hint.textContent = allExpanded ? '(点击收起答案)' : '(点击展开答案)';
    });
    this.textContent = allExpanded ? '全部收起' : '全部展开';
  });

  $('#btnExport').addEventListener('click', doExport);
  $('#btnImport').addEventListener('click', doImport);
  $('#btnWipe').addEventListener('click', doWipe);

  /* ---------------------------------------------------- 启动 */
  (async function init() {
    try {
      await window.MDB.open();
      const seed = window.SEED_PROBLEMS || [];
      const ver = window.SEED_VERSION || 1;
      const applied = Number(localStorage.getItem('studyMathSeedVer') || 0);
      /* 版本不一致（首次安装 / 题库被修正 / 新增题目）就按种子重灌 problems 表，
         保证浏览器里「所见即种子」。注意：正误标记在独立的 status 表，不受影响。 */
      if (seed.length && applied !== ver) {
        await window.MDB.clearProblems();
        await window.MDB.putProblems(seed);
        localStorage.setItem('studyMathSeedVer', String(ver));
        toast('题库已同步：共 ' + seed.length + ' 道（含修正与新增）');
      }
      const [problems, ss] = await Promise.all([
        window.MDB.allProblems(), window.MDB.allStatus()
      ]);
      state.problems = problems;
      state.status = ss || {};
      buildSide();
      applyFilter();
    } catch (e) {
      $('#grid').innerHTML = '<div class="empty"><b>数据库打不开</b>' + esc(e.message) + '</div>';
    }
  })();

  window.__APP = state;
})();
