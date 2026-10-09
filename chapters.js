/* ==========================================================================
   章节配置 —— 大章节 ONLY，按科目分组
   口径：高数来自《高数强化答案合订本》PDF 目录一级标题（13 章，取数三要的 8 章）；
        线代 / 概率论按**数三考纲**给（用户 2026-10-06 20:20 要求侧栏要有这两科）。

   数三不学的高数章节（保留在 num3:false 里，日后要加数一内容时改true 即可）：
     4 向量代数与空间解析几何 / 9 物理应用（仅数一、二）
     10 数一冷门考点专项 / 11 三重积分 / 12 线面积分
   ========================================================================== */
window.SUBJECTS = [
  { key:'高数', chapters:[
    { no:'1',  title:'函数与极限',           num3: true  },
    { no:'2',  title:'一元微分学',           num3: true  },
    { no:'3',  title:'一元积分学',           num3: true  },
    { no:'4',  title:'向量代数与空间解析几何', num3: false },
    { no:'5',  title:'多元微分学',           num3: true  },
    { no:'6',  title:'二重积分',             num3: true  },
    { no:'7',  title:'常微分方程',           num3: true  },
    { no:'8',  title:'无穷级数',             num3: true  },
    { no:'9',  title:'物理应用（仅数一、二）', num3: false },
    { no:'10', title:'数一冷门考点专项',      num3: false },
    { no:'11', title:'三重积分',             num3: false },
    { no:'12', title:'线面积分',             num3: false },
    { no:'13', title:'数三专项',             num3: true  },
  ]},
  /* 线代：按数三考纲（6 章）——待用户给线代讲义后按实际目录校准 */
  { key:'线代', chapters:[
    { no:'L1', title:'行列式',num3: true  },
    { no:'L2', title:'矩阵',             num3: true  },
    { no:'L3', title:'向量组',           num3: true  },
    { no:'L4', title:'线性方程组',       num3: true  },
    { no:'L5', title:'特征值与特征向量', num3: true  },
    { no:'L6', title:'二次型',           num3: true  },
  ]},
  /* 概率论：按数三考纲（6 章）——待用户给概率论讲义后按实际目录校准 */
  { key:'概率论', chapters:[
    { no:'P1', title:'随机事件与概率',   num3: true  },
    { no:'P2', title:'随机变量及其分布', num3: true  },
    { no:'P3', title:'多维随机变量',     num3: true  },
    { no:'P4', title:'随机变量的数字特征', num3: true },
    { no:'P5', title:'大数定律与中心极限定理', num3: true },
    { no:'P6', title:'数理统计基础',     num3: true  },
  ]},
];

/* 扁平化：只留数三章节（侧栏/ 筛选 / 编辑器下拉都用这个） */
window.CHAPTERS = (function () {
  const out = [];
  window.SUBJECTS.forEach(sub => {
    sub.chapters.forEach(c => {
      if (c.num3 !== false) out.push({ no: c.no, title: c.title, subject: sub.key });
    });
  });
  return out;
})();

/* 全集索引（含num3:false 的，备份/导入时认章节号用） */
window.CHAPTER_INDEX = (function () {
  const m = {};
  window.SUBJECTS.forEach(sub => {
    sub.chapters.forEach(c => { m[c.no] = { no: c.no, title: c.title, subject: sub.key }; });
  });
  return m;
})();

/* 兼容：题目若仍带 section 字段（形如 '1.2'），取其所属大章节 */
window.chapterOf = function (problem) {
  if (!problem) return '';
  if (problem.chapter && window.CHAPTER_INDEX[problem.chapter]) return problem.chapter;
  const sec = problem.section;
  if (sec && window.CHAPTER_INDEX[sec]) return sec;
  if (sec) { const m = String(sec).match(/^(\d+)/); if (m) return m[1]; }
  return '';
};
