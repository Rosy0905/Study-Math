/* ==========================================================================
   data/chapter1.js —— 第一章题目数据
   题目与答案均来自《高数强化答案合订本》PDF 原文，逐条渲染核对过。
   题号取自《没咋了强化好题本记录.docx》第一章。
   pageNo =《高数强化合订本数三》书印页码（该章两册页码恰好一致）。

   【（补充过程）已全部撤回】经核对答案册，第一章 79 道原书均有解析，无一例外。

   ⚠️【LaTeX 铁律，务必遵守】
   公式里绝对不能出现裸的 < 或 > —— 浏览器会把 <g(x)> 当成 HTML 标签，
   文本节点被吃掉，公式就渲染不出来（表现为只剩半截）。
   关系符一律写成「命令 + 空格」的形式：
     小于  ->  \\lt 空格      大于  ->  \\gt 空格
   ========================================================================== */
window.SEED_PROBLEMS = [
  /* ---------------- 1.4 ---------------- */
  {
    id: '1.4',
    originalNo: '1.4',
    chapter: '1',
    pageNo: '7',
    type: '单选',
    isRealExam: false,
    problemHTML: "考虑下列命题，其中所有真命题的序号为（　　）\n①若 $\\lim_{x \\to 0} \\left| f(x) + f(-x) \\right| = 0$，则 $\\lim_{x \\to 0^-} f(x) = 0$\n②若 $\\lim_{x \\to 0} \\left( |f(x)| + |f(-x)| \\right) = 0$，则 $\\lim_{x \\to 0^+} f(x) = 0$\n③若 $f(x) \\ge 0$ 且 $\\lim_{x \\to 0} f(x) f(-x) = 0$，则 $\\lim_{x \\to 0} f(x) = 0$\n④若 $f(x) \\lt 0$ 且 $\\lim_{x \\to 0} \\left[ f(x) + f(-x) \\right] = 0$，则 $\\lim_{x \\to 0} f(x) = 0$\n（A）0 个　（B）1 个　（C）2 个　（D）3 个",
    answerHTML: "<b>答：C</b>，2 个真命题（③④）。\n① <b>错</b>。取 $f(x) = \\operatorname{sgn}(x)$（$x \\lt 0$ 取 $-1$，$x \\gt 0$ 取 $1$），则 $f(x) + f(-x) \\equiv 0$，故 $\\left| f(x) + f(-x) \\right| \\to 0$，而 $\\lim_{x \\to 0^-} f(x) = -1 \\ne 0$。\n② <b>错</b>。取 $f(x) = \\operatorname{sgn}(x)\\, |x|$，则 $f(x) + f(-x) \\equiv 0$，且 $|f(x)| + |f(-x)| = 2|x| \\to 0$，题设成立；但 $\\lim_{x \\to 0^+} f(x) = 1 \\ne 0$。\n③ <b>对</b>（原书红笔批注：\"对 $\\forall x$，有 $f(x) \\ge 0$\"）。由 $f(x) \\ge 0$、$f(-x) \\ge 0$ 得 $f(x) + f(-x) \\ge 0$，且 $\\left[ f(x) + f(-x) \\right]^{2} \\ge 4 f(x) f(-x) \\to 0$，故 $f(x) + f(-x) \\to 0$。又 $0 \\le f(x) \\le f(x) + f(-x)$，所以 $f(x) \\to 0$。\n④ <b>对</b>（原书红笔批注：\"对 $\\forall x$，有 $f(x) \\lt 0$\"）。由 $f(x) + f(-x) \\to 0$ 且两者同负，$|f(x) - f(-x)| = \\left| f(x) + f(-x) - 2 f(-x) \\right| \\le |f(x) + f(-x)| + 2 |f(-x)|$；同理 $|f(-x)| \\le |f(x) + f(-x)| + |f(x)|$，两式相加得 $|f(x)| + |f(-x)| \\le 2 |f(x) + f(-x)| \\to 0$，故 $f(x) \\to 0$。",
  },
  /* ---------------- 1.7 ---------------- */
  {
    id: '1.7',
    originalNo: '1.7',
    chapter: '1',
    pageNo: '8',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{x \\to 0} \\left( \\dfrac{e^{x} + 2 x e^{x}}{\\ln(1+x)} - \\dfrac{1}{x} \\right) = \\underline{\\qquad\\qquad}$",
    answerHTML: "<b>解：</b>（原书手写过程）\n原式 $= 3 + \\lim_{x \\to 0} \\left[ \\dfrac{1}{\\ln(1+x)} - \\dfrac{1}{x} \\right]$\n$= 3 + \\lim_{x \\to 0} \\dfrac{x - \\ln(1+x)}{x \\ln(1+x)}$\n$= 3 + \\lim_{x \\to 0} \\dfrac{\\tfrac{1}{2} x^{2}}{x^{2}} = \\dfrac{7}{2}$\n（用 $\\ln(1+x) = x - \\dfrac{x^{2}}{2} + o(x^{2})$，故 $x - \\ln(1+x) \\sim \\dfrac{x^{2}}{2}$。）\n<b>答：</b>$\\dfrac{7}{2}$",
  },
  /* ---------------- 1.8 ---------------- */
  {
    id: '1.8',
    originalNo: '1.8',
    chapter: '1',
    pageNo: '8',
    type: '解答',
    isRealExam: false,
    problemHTML: "思考题：计算 $\\lim_{x \\to \\infty} \\left( \\dfrac{x^{2} + 1}{x - 2} e^{\\frac{1}{x}} - x \\right)$ 时，能否将 $e^{\\frac{1}{x}}$ 这一部分用 1 代入？为什么？",
    answerHTML: "<b>解：</b>不能代入。原书并列了两种做法对比：\n<b>第一种（错误做法）</b>：\n原式 $= \\lim_{x \\to \\infty} \\left( \\dfrac{x^{2} + 1}{x - 2} - x \\right) \\cdot 2 = 2$　（×）\n<b>第二种（正确做法）</b>：\n原式 $= \\lim_{x \\to \\infty} \\dfrac{(x^{2} + 1) e^{\\frac{1}{x}} - x^{2} + 2x}{x - 2}$\n$= \\lim_{x \\to \\infty} \\dfrac{x^{2} \\left( e^{\\frac{1}{x}} - 1 \\right) + 2x + 2}{x - 2}$\n$= 2 + \\lim_{x \\to \\infty} \\dfrac{x^{2} \\cdot \\dfrac{1}{x}}{x - 2}$\n<b>答：</b>$3$\n<b>为什么不能代入 1：</b>只有 $\\lim \\dfrac{f(x)}{g(x)}$ 中 $\\lim g(x) = C \\ne 0$ 时才能单独取 $g$ 的极限。这里 $\\dfrac{x^{2}}{x - 2} \\to \\infty$（非零有限值不成立），而 $e^{\\frac{1}{x}} - 1 \\to 0$，属 $0 \\cdot \\infty$ 型，极限由两者的<b>等价关系</b>决定，不能把因子直接换成极限值。第一种做法算出 2 而正确答案是 3，正好印证这种替换不合法。",
  },
  /* ---------------- 1.10 ---------------- */
  {
    id: '1.10',
    originalNo: '1.10',
    chapter: '1',
    pageNo: '10',
    type: '解答',
    isRealExam: true,
    problemHTML: "请解释错误原因：$\\lim_{x \\to 0} \\dfrac{x - \\sin x \\cos x}{x^{3}} = \\lim_{x \\to 0} \\dfrac{x \\left( 1 - \\cos x \\right)}{x^{2}} = \\dfrac{1}{2}$　（×）",
    answerHTML: "<b>解：</b>\n错因：把 $\\sin x \\cos x \\sim x \\cos x$ 用在了分子上，$x - \\sin x \\cos x \\sim x - x \\cos x = x \\left( 1 - \\cos x \\right)$，于是分母被换成了 $x^{2}$。但等价无穷小替换<b>只能对整个分子或整个分母做</b>，不能替换分子的同时又改动分母，这样等价关系就断了。\n正确做法（只拆分子，分母始终保持 $x^{3}$）：\n原式 $= \\lim_{x \\to 0} \\dfrac{\\left( x - \\sin x \\right) + \\sin x \\left( 1 - \\cos x \\right)}{x^{3}}$\n$= \\lim_{x \\to 0} \\dfrac{x - \\sin x}{x^{3}} + \\lim_{x \\to 0} \\dfrac{\\sin x \\left( 1 - \\cos x \\right)}{x^{3}}$\n第一项：用 $x - \\sin x \\sim \\dfrac{x^{3}}{6}$，得 $1 + \\lim \\dfrac{1}{6} = \\dfrac{1}{6}$；\n第二项：$\\sin x \\sim x$、$1 - \\cos x \\sim \\dfrac{x^{2}}{2}$，得 $1 + \\lim \\dfrac{1}{2} = \\dfrac{1}{2}$。\n原式 $= \\dfrac{1}{6} + \\dfrac{1}{2} = \\dfrac{2}{3}$。\n<b>要点：</b>记牢 $x - \\sin x \\sim \\dfrac{x^{3}}{6}$、$1 - \\cos x \\sim \\dfrac{x^{2}}{2}$ 这两个三阶/二阶等价无穷小，这类\"解释错误原因\"的题几乎都在考它们。",
  },
  /* ---------------- 1.15 ---------------- */
  {
    id: '1.15',
    originalNo: '1.15',
    chapter: '1',
    pageNo: '12',
    type: '填空',
    isRealExam: true,
    problemHTML: "（2014 数一）求极限 $\\lim_{x \\to +\\infty} \\dfrac{\\displaystyle\\int_{1}^{x} \\left[ t^{2} \\left( e^{\\frac{1}{t}} - 1 \\right) - t \\right] \\mathrm{d}t }{ x^{2} \\ln \\left( 1 + \\dfrac{1}{x} \\right) } = $ ____.",
    answerHTML: "<b>解：</b>\n<b>第一步：</b>先看分子。把 $\\dfrac{1}{x} = t$ 代回积分（$t \\to 0^{+}$），原书叫「预判分子」，\n$\\displaystyle\\int_{1}^{x} \\left[ t^{2} \\left( e^{1/t} - 1 \\right) - t \\right] \\mathrm{d}t = x^{2} \\int_{\\frac{1}{x}}^{1} \\left[ \\dfrac{1}{u^{2}} \\left( e^{u} - 1 \\right) - \\dfrac{1}{u} \\right] \\mathrm{d}u$。\n<b>第二步：</b>把 $x^{2}$ 除到分母上，原式$ = \\lim_{x \\to +\\infty} \\dfrac{\\displaystyle\\int_{1/x}^{1} \\left[ \\dfrac{1}{u^{2}} \\left( e^{u} - 1 \\right) - \\dfrac{1}{u} \\right] \\mathrm{d}u}{ \\ln \\left( 1 + \\dfrac{1}{x} \\right) } = \\lim_{x \\to +\\infty} \\dfrac{\\displaystyle\\int_{1/x}^{1} \\left[ \\dfrac{1}{u^{2}} \\left( e^{u} - 1 \\right) - \\dfrac{1}{u} \\right] \\mathrm{d}u}{\\displaystyle\\int_{1/x}^{1} \\dfrac{\\mathrm{d}u}{u}}$。\n<b>第三步：</b>上下同除 $x^{2}$ 后lim 变成 $\\dfrac{1}{2}\\lim_{t \\to 0^{+}} \\dfrac{e^{t} - 1 - t}{t^{2}}$ （$x^{2} \\sim \\dfrac{1}{t^{2}}$），原书批注提示「用 Taylor 展开即可」。\n<b>第四步：</b>由 $\\displaystyle\\lim_{t \\to 0^{+}} \\dfrac{e^{t} - 1 - t}{t^{2}} = \\dfrac{1}{2}$，得原式$= \\dfrac{1}{2} \\times \\dfrac{1}{2}$。\n<b>答：</b>$\\dfrac{1}{2}$",
  },
  /* ---------------- 1.19 ---------------- */
  {
    id: '1.19',
    originalNo: '1.19',
    chapter: '1',
    pageNo: '14',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\dfrac{\\left( 1 + x \\right)^{\\frac{1}{x}} - e + \\dfrac{e}{2} x}{x^{2}} = $ ____.",
    answerHTML: "<b>解：</b>把 $\\left( 1 + x \\right)^{\\frac{1}{x}}$ 写成 $e^{\\frac{\\ln(1+x)}{x}}$ 再泰勒展开。\n$\\ln \\left( 1 + x \\right) = x - \\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} + o \\left( x^{3} \\right)$，故\n$e^{\\frac{1}{x}\\ln(1+x)} = e \\cdot e^{-\\frac{x}{2} + \\frac{x^{2}}{3} + o(x^{2})} = e \\left[ 1 + \\left( -\\dfrac{x}{2} + \\dfrac{x^{2}}{3} \\right) + \\dfrac{1}{2} \\dfrac{x^{2}}{4} + o \\left( x^{2} \\right) \\right]$。\n整理得 $e^{\\frac{1}{x}\\ln(1+x)} = e \\left[ 1 - \\dfrac{x}{2} + \\dfrac{x^{2}}{3} + \\dfrac{x^{2}}{8} + o \\left( x^{2} \\right) \\right]$。\n代回原式：分子$= e - \\dfrac{e}{2} x + \\dfrac{e x^{2}}{3} + \\dfrac{e x^{2}}{8} - e + \\dfrac{e}{2} x = \\dfrac{11e}{24} x^{2} + o \\left( x^{2} \\right)$。\n原式$= \\lim_{x \\to 0} \\dfrac{\\dfrac{11e}{24} x^{2} + o \\left( x^{2} \\right)}{x^{2}}$。\n<b>答：</b>$\\dfrac{11e}{24}$",
  },
  /* ---------------- 1.22 ---------------- */
  {
    id: '1.22',
    originalNo: '1.22',
    chapter: '1',
    pageNo: '15',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{x \\to 0^{+}} \\dfrac{\\cos 2x - \\cos x}{x^{2}} = $ ____.",
    answerHTML: "<b>解：</b>原书写法是「先算错、再救」，红笔打了叉，正好是易错点。\n<b>第一步（错解，原书打了 $\\times$）：</b>只用洛必达一次，\n$\\lim_{x \\to 0^{+}} \\dfrac{-\\sin 2x \\cdot 2 + \\sin x}{2x} = \\lim_{x \\to 0^{+}} \\dfrac{-\\sin 2x}{x} = -1$。\n<b>第二步（纠正）：</b>实际上 $x \\lt f \\lt 2x$，$\\dfrac{\\sin f}{x}$ 无法计算，不能等价替换。\n改用 $\\cos 2x - \\cos x = -2 \\sin \\dfrac{3x}{2} \\sin \\dfrac{x}{2}$（和差化积）：\n$\\lim_{x \\to 0^{+}} \\dfrac{-2 \\sin 2x + \\sin x}{2 x^{2}}$ $= \\lim_{x \\to 0^{+}} \\dfrac{-2 \\left( \\sin 2x - \\dfrac{x}{2} \\right)}{2 x^{2}}$。\n用 $\\sin 2x - \\dfrac{x}{2} \\sim \\dfrac{3}{2} x$（$2x - \\dfrac{x}{2} = \\dfrac{3x}{2}$），得原式$= -2 + \\dfrac{3}{2}$。\n<b>答：</b>$-\\dfrac{3}{2}$",
  },
  /* ---------------- 1.23 ---------------- */
  {
    id: '1.23',
    originalNo: '1.23',
    chapter: '1',
    pageNo: '15',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{x \\to 0} \\dfrac{\\left( 1 + \\tan x \\right)^{5} - \\left( 1 + \\sin x \\right)^{5}}{\\sin \\left( \\tan x \\right) - \\sin \\left( \\sin x \\right)} = $ ____.（难）",
    answerHTML: "<b>解：</b>原书只用两行，关键提示是「等价无穷小与 $\\tan x$ 之间」。\n<b>第一步：</b>原式$= \\lim_{x \\to 0} \\dfrac{5 \\left( 1 + \\xi \\right)^{4}}{\\cos f} \\cdot \\dfrac{\\tan x - \\sin x}{\\sin \\left( \\tan x \\right) - \\sin \\left( \\sin x \\right)}$（$x \\to 0$ 时 $\\xi \\to 0$、$f \\to 0$）。\n<b>第二步：</b>$(1+\\xi)^4 \\to 1$、$\\cos f \\to 1$，$\\tan x - \\sin x \\sim \\dfrac{x^{3}}{2}$，故原式$= 5$。\n<b>要点：</b>两个式子都含 $\\tan x$ 与 $\\sin x$ 的差，直接约掉 $\\left( \\tan x - \\sin x \\right)$ 即可，\n分子系数 $5$ 就是 $(1+x)^5$ 求导在 $x=0$ 处的值。\n<b>答：</b>$5$",
  },
  /* ---------------- 1.25 ---------------- */
  {
    id: '1.25',
    originalNo: '1.25',
    chapter: '1',
    pageNo: '16',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\displaystyle\\int_{x}^{3x} \\dfrac{\\cos t}{t} \\mathrm{d}t$.",
    answerHTML: "<b>解：</b>这是变上限积分求极限的常规套路：\n$\\displaystyle\\lim_{x \\to 0} \\int_{x}^{3x} \\dfrac{\\cos t}{t} \\mathrm{d}t = \\lim_{x \\to 0} \\cos \\xi \\cdot \\displaystyle\\int_{x}^{3x} \\dfrac{\\mathrm{d}t}{t}$ $= \\lim_{x \\to 0} \\cos \\xi \\cdot \\left. \\ln t \\right|_{x}^{3x} = \\lim_{x \\to 0} \\cos \\xi \\cdot \\ln 3$。\n（$\\xi$ 是介于 $x$ 与 $3x$ 之间的某个值，$x \\to 0$ 时 $\\cos \\xi \\to 1$。）\n<b>答：</b>$\\ln 3$",
  },
  /* ---------------- 1.28 ---------------- */
  {
    id: '1.28',
    originalNo: '1.28',
    chapter: '1',
    pageNo: '17',
    type: '单选',
    isRealExam: false,
    problemHTML: "当 $x \\to +\\infty$ 时，无穷小量 $\\alpha = \\dfrac{1}{x^{a}}$，$\\beta = \\dfrac{1}{\\ln^{b} x}$，$\\gamma = e^{-cx}$（$a,\\ b,\\ c$ 全大于零），从高阶到低阶正确的排序为（&nbsp;&nbsp;）\n（A）$\\alpha, \\beta, \\gamma$　（B）$\\beta, \\alpha, \\gamma$　（C）$\\alpha, \\gamma, \\beta$　（D）$\\gamma, \\alpha, \\beta$",
    answerHTML: "<b>解：</b>\n<b>第一步：</b>$x \\to +\\infty$ 时 $\\ln x \\ll x^{a} \\ll e^{cx}$（$a,\\ b,\\ c \\gt 0$），红笔批注「$a,b,c \\gt 0$ 即可，可以放进去」。\n<b>第二步：</b>三者的倒数比较即得高阶到低阶：$\\dfrac{1}{\\ln^{b} x} \\gg \\dfrac{1}{x^{a}} \\gg \\dfrac{1}{e^{cx}}$。\n<b>要点：</b>对数级增长最慢、幂级其次、指数级最快，三者取倒数后次序反转，所以从高阶到低阶是 $e^{-cx}$、$x^{-a}$、$(\\ln x)^{-b}$。\n<b>答：</b>$\\boxed{\\mathrm{D}}$",
  },
  /* ---------------- 1.30 ---------------- */
  {
    id: '1.30',
    originalNo: '1.30',
    chapter: '1',
    pageNo: '19',
    type: '填空',
    isRealExam: true,
    problemHTML: "（2007 数三）$\\lim_{x \\to +\\infty} \\dfrac{x^{3} + x^{2} + 1}{2^{x} + x^{3}} \\left( \\sin x + \\cos x \\right) = $ ____.",
    answerHTML: "<b>解：</b>\n<b>第一步：</b>先看分式部分。指数函数压倒多项式，$\\lim_{x \\to +\\infty} \\dfrac{x^{3} + x^{2} + 1}{2^{x} + x^{3}} = 0$（原书第一行）。\n<b>第二步：</b>再看三角部分。$\\sin x + \\cos x$ 是<b>有界</b>的（$|\\sin x + \\cos x| \\le \\sqrt{2}$），原书旁批「又 $\\sin x + \\cos x$ 有界」。\n<b>第三步：</b>有界函数乘趋零量仍趋零，所以原式$= 0$。\n<b>要点：</b>这类「指数 / 多项式 × 有界振荡」的组合，直接拆成两个极限分别判断即可。\n<b>答：</b>$0$",
  },
  /* ---------------- 1.31 ---------------- */
  {
    id: '1.31',
    originalNo: '1.31',
    chapter: '1',
    pageNo: '19',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{x \\to 0^{+}} \\dfrac{\\ln \\left( e^{x} - 1 \\right)}{\\ln \\left( 1 - \\sqrt{1 - 2x} \\right)} = $ ____.",
    answerHTML: "<b>解：</b>原书用洛必达法则。\n<b>第一步：</b>$\\lim_{x \\to 0^{+}} \\dfrac{\\dfrac{e^{x}}{e^{x} - 1}}{\\dfrac{1}{1 - \\sqrt{1 - 2x}} \\cdot \\left( -\\dfrac{1}{2\\sqrt{1 - 2x}} \\right) \\cdot (-2)}$。\n分母化简：$\\dfrac{1}{1 - \\sqrt{1-2x}} \\cdot \\dfrac{1}{\\sqrt{1 - 2x}}= \\dfrac{1}{\\left( 1 - \\sqrt{1-2x} \\right) \\sqrt{1-2x}}= \\dfrac{1}{-2 \\sqrt{1-2x} \\left( \\sqrt{1-2x} - 1 \\right)}$。\n<b>第二步：</b>上下同乘 $\\sqrt{1 - 2x}$，原式$ = \\lim_{x \\to 0^{+}} \\dfrac{e^{x} \\left( 1 - \\sqrt{1-2x} \\right) \\sqrt{1-2x}}{e^{x} - 1}$。\n<b>第三步：</b>把分子里的 $1 - \\sqrt{1-2x}$ 换成 $-\\left( \\sqrt{1-2x} - 1 \\right)$，而 $\\sqrt{1-2x} - 1 \\sim -x$，故分子$\\sim e^{x} \\cdot x \\cdot 1 = x$；分母 $e^{x}-1 \\sim x$。\n原式$= \\lim_{x \\to 0^{+}} \\dfrac{x}{x} = 1$。\n<b>答：</b>$1$",
  },
  /* ---------------- 1.32 ---------------- */
  {
    id: '1.32',
    originalNo: '1.32',
    chapter: '1',
    pageNo: '20',
    type: '填空',
    isRealExam: true,
    problemHTML: "（2004 数三）$\\lim_{x \\to 0} \\left( \\dfrac{1}{\\sin^{2} x} - \\dfrac{\\cos^{2} x}{x^{2}} \\right) = $ ____.",
    answerHTML: "<b>解：</b>\n<b>第一步：</b>通分成一项（红笔提示「通分整理」）：\n$\\lim_{x \\to 0} \\dfrac{x^{2} - \\sin^{2} x \\cos^{2} x}{x^{2} \\sin^{2} x}= \\lim_{x \\to 0} \\dfrac{\\left( x^{2} - \\sin^{2} x \\right) + \\left( \\sin^{2} x - \\sin^{2} x \\cos^{2} x \\right)}{x^{2} \\sin^{2} x}$。\n<b>第二步：</b>第一项分子有理化：$x^{2} - \\sin^{2} x = \\left( x + \\sin x \\right) \\left( x - \\sin x \\right)$，\n$\\lim_{x \\to 0} \\dfrac{\\left( x + \\sin x \\right) \\left( x - \\sin x \\right)}{x^{2} \\sin^{2} x}= \\lim_{x \\to 0} \\dfrac{\\left( x + \\sin x \\right) \\left( x - \\sin x \\right)}{x^{2} \\sin^{2} x} \\approx \\dfrac{2x \\cdot \\dfrac{x^{3}}{3}}{x^{2} \\cdot x^{2}} = \\dfrac{1}{3}$。\n<b>第三步：</b>第二项用 $\\sin^{2}x - \\sin^{2}x\\cos^{2}x = \\sin^{2}x \\left( 1 - \\cos^{2}x \\right) = \\sin^{4}x$，\n$\\lim_{x \\to 0} \\dfrac{\\sin^{2}x \\left( 1 - \\cos x \\right) \\left( 1 + \\cos x \\right)}{x^{2} \\sin^{2} x}= \\lim_{x \\to 0} \\dfrac{\\sin^{2} x}{x^{2}} = 1$。\n<b>第四步：</b>两项相加：$\\dfrac{1}{3} + 1 = \\dfrac{4}{3}$。\n<b>要点：</b>看到「$\\dfrac{1}{\\sin^{2}x} - \\dfrac{\\cos^{2}x}{x^{2}}$」先通分成 $\\dfrac{x^{2}-\\sin^{2}x\\cos^{2}x}{x^{2}\\sin^{2}x}$，再把分子凑成 $x^{2}-\\sin^{2}x$ 与 $\\sin^{2}x-\\sin^{2}x\\cos^{2}x$ 之和，各自用等价无穷小。\n<b>答：</b>$\\dfrac{4}{3}$",
  },
  /* ---------------- 1.33 ---------------- */
  {
    id: '1.33',
    originalNo: '1.33',
    chapter: '1',
    pageNo: '20',
    type: '填空',
    isRealExam: true,
    problemHTML: "（2009 数三）$\\lim_{x \\to 0} \\dfrac{e - e^{\\cos x}}{\\sqrt[3]{1 + x^{2}} - 1} = $ ____.",
    answerHTML: "<b>解：</b>\n<b>第一步（分子）：</b>$e - e^{\\cos x} = e\\left( 1 - e^{\\cos x - 1} \\right)$。\n因为 $e^{u} - 1 \\sim u$（$u \\to 0$），而 $\\cos x - 1 \\sim -\\dfrac{x^{2}}{2}$，\n所以 $e - e^{\\cos x} \\sim -e\\left( \\cos x - 1 \\right) = e\\left( 1 - \\cos x \\right) \\sim \\dfrac{e x^{2}}{2}$。\n<b>第二步（分母）：</b>把立方根有理化，$\\sqrt[3]{1 + x^{2}} - 1 = \\dfrac{\\left( 1 + x^{2} \\right) - 1}{\\left( \\sqrt[3]{1 + x^{2}} \\right)^{2} + \\sqrt[3]{1 + x^{2}} + 1} = \\dfrac{x^{2}}{\\left( \\sqrt[3]{1 + x^{2}} \\right)^{2} + \\sqrt[3]{1 + x^{2}} + 1} \\sim \\dfrac{x^{2}}{3}$。\n<b>第三步：</b>原式$= \\dfrac{\\dfrac{e x^{2}}{2}}{\\dfrac{x^{2}}{3}} = \\dfrac{3e}{2}$。\n<b>要点：</b>立方根有理化用<b>立方和公式</b> $a^{3}-b^{3}=(a-b)\\left( a^{2}+ab+b^{2} \\right)$，与平方根的 $a^{2}-b^{2}=(a-b)(a+b)$ 不同——分母上会出现<b>三项</b>，趋于 $3$ 而不是 $2$。原书也是把分母写成 $\\dfrac{1}{3}x^{2}$、再用红笔补出系数 $3e$，与此一致。\n<b>答：</b>$\\dfrac{3e}{2}$",
  },
  /* ---------------- 1.36 ---------------- */
  {
    id: '1.36',
    originalNo: '1.36',
    chapter: '1',
    pageNo: '21',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\dfrac{\\sqrt[m]{1 + \\alpha x} \\cdot \\sqrt[n]{1 + \\beta x} - 1}{x}.$",
    answerHTML: "<b>解：</b>原书给出两种解法（页首红字提示「逆用等价、拆项」「函数对数化」）。\n<b>解法一（拆项）：</b>分子加减同一项：\n$\\sqrt[m]{1 + \\alpha x} \\cdot \\sqrt[n]{1 + \\beta x} - 1 = \\sqrt[n]{1 + \\beta x}\\left( \\sqrt[m]{1 + \\alpha x} - 1 \\right) + \\left( \\sqrt[n]{1 + \\beta x} - 1 \\right)$，\n故原式$= \\lim_{x \\to 0} \\dfrac{\\sqrt[n]{1 + \\beta x}\\left( \\sqrt[m]{1 + \\alpha x} - 1 \\right)}{x} + \\lim_{x \\to 0} \\dfrac{\\sqrt[n]{1 + \\beta x} - 1}{x}$。\n用 $\\sqrt[k]{1 + u} - 1 \\sim \\dfrac{u}{k}$（$u \\to 0$）：$\\sqrt[m]{1 + \\alpha x} - 1 \\sim \\dfrac{\\alpha x}{m}$，$\\sqrt[n]{1 + \\beta x} - 1 \\sim \\dfrac{\\beta x}{n}$，\n且 $\\sqrt[n]{1 + \\beta x} \\to 1$，所以原式$= \\dfrac{\\alpha}{m} + \\dfrac{\\beta}{n}$。\n<b>解法二（函数对数化）：</b>利用 $x \\to 1$ 时 $\\ln x \\sim x - 1$，\n原式$= \\lim_{x \\to 0} \\dfrac{\\ln \\left( \\sqrt[m]{1 + \\alpha x} \\cdot \\sqrt[n]{1 + \\beta x} \\right)}{x} = \\lim_{x \\to 0} \\left[ \\dfrac{1}{m} \\cdot \\dfrac{\\ln \\left( 1 + \\alpha x \\right)}{x} + \\dfrac{1}{n} \\cdot \\dfrac{\\ln \\left( 1 + \\beta x \\right)}{x} \\right] = \\dfrac{\\alpha}{m} + \\dfrac{\\beta}{n}$。\n<b>要点：</b>两个根号的次数不同（$m$ 次与 $n$ 次），等价无穷小 $\\sqrt[k]{1+u}-1 \\sim \\dfrac{u}{k}$ 里的 $k$ 要各用各的，不能混写成一个。\n<b>答：</b>$\\dfrac{\\alpha}{m} + \\dfrac{\\beta}{n}$",
  },
  /* ---------------- 1.37 ---------------- */
  {
    id: '1.37',
    originalNo: '1.37',
    chapter: '1',
    pageNo: '21',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\dfrac{\\ln \\left( \\sin^{2} x + e^{x} \\right) - x}{\\ln \\left( e^{2x} - x^{2} \\right) - 2x}.$",
    answerHTML: "<b>解：</b>原书思路：分子分母各「提出主部」，凑成 $\\ln(1 + u)$。\n<b>第一步：</b>分子 $\\ln \\left( \\sin^{2} x + e^{x} \\right) - x = \\ln \\left[ e^{x}\\left( 1 + \\dfrac{\\sin^{2} x}{e^{x}} \\right) \\right] - x = \\ln \\left( 1 + \\dfrac{\\sin^{2} x}{e^{x}} \\right)$。\n<b>第二步：</b>分母 $\\ln \\left( e^{2x} - x^{2} \\right) - 2x = \\ln \\left[ e^{2x}\\left( 1 - \\dfrac{x^{2}}{e^{2x}} \\right) \\right] - 2x = \\ln \\left( 1 - \\dfrac{x^{2}}{e^{2x}} \\right)$。\n<b>第三步：</b>由 $\\ln \\left( 1 + u \\right) \\sim u$（$u \\to 0$），\n原式$= \\lim_{x \\to 0} \\dfrac{\\dfrac{\\sin^{2} x}{e^{x}}}{-\\dfrac{x^{2}}{e^{2x}}} = \\lim_{x \\to 0} \\left( -\\dfrac{\\sin^{2} x}{x^{2}} \\cdot e^{x} \\right)$。\n<b>第四步：</b>$\\dfrac{\\sin^{2} x}{x^{2}} \\to 1$、$e^{x} \\to 1$，故原式$= -1$。\n<b>要点：</b>对数里出现「和差」时，先提出趋于非零常数的因子再展开，$\\ln e^{x} = x$、$\\ln e^{2x} = 2x$ 恰好与题中的 $-x$、$-2x$ 抵消。\n<b>答：</b>$-1$",
  },
  /* ---------------- 1.44 ---------------- */
  {
    id: '1.44',
    originalNo: '1.44',
    chapter: '1',
    pageNo: '23',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0^{+}} \\left( \\cot x \\right)^{\\sin 2x}.$",
    answerHTML: "<b>解：</b>幂指函数统一写成 $e^{\\ln}$：\n原式$= e^{\\lim_{x \\to 0^{+}} \\sin 2x \\cdot \\ln \\cot x}$。\n<b>算指数：</b>$\\sin 2x \\cdot \\ln \\cot x = 2 \\sin x \\cos x \\cdot \\ln \\dfrac{1}{\\tan x} = -2 \\tan x \\cdot \\cos^{2} x \\cdot \\ln \\tan x$。\n令 $t = \\tan x \\to 0^{+}$，$t \\ln t \\to 0$（$0 \\cdot \\infty$ 型，洛必达或「有界 $\\times$ 趋零」），且 $\\cos^{2} x \\to 1$，\n故指数 $\\lim_{x \\to 0^{+}} \\sin 2x \\cdot \\ln \\cot x = 0$（原书最后一行 $\\lim \\tan x \\cdot \\ln \\tan x = 0$）。\n<b>答：</b>原式$= e^{0} = 1$",
  },
  /* ---------------- 1.45 ---------------- */
  {
    id: '1.45',
    originalNo: '1.45',
    chapter: '1',
    pageNo: '23',
    type: '填空',
    isRealExam: true,
    problemHTML: "（2010 数三）求极限 $\\lim_{x \\to +\\infty} \\left( x^{\\frac{1}{x}} - 1 \\right)^{\\frac{1}{\\ln x}}.$（难）",
    answerHTML: "<b>解：</b>幂指函数化为 $e$ 的指数：\n原式$= e^{\\lim_{x \\to +\\infty} \\frac{1}{\\ln x} \\cdot \\ln \\left( x^{\\frac{1}{x}} - 1 \\right)}$（原书第一行）。\n<b>关键（原书红字旁批）：</b>$x \\to +\\infty$ 时 $x^{\\frac{1}{x}} - 1 = e^{\\frac{\\ln x}{x}} - 1 \\to 0^{+}$；又 $\\alpha \\sim \\beta$（均趋于 $0^{+}$）时 $\\ln \\alpha \\sim \\ln \\beta$，故 $\\ln \\left( e^{\\frac{\\ln x}{x}} - 1 \\right) \\sim \\ln \\dfrac{\\ln x}{x}$。\n<b>算指数：</b>$\\lim_{x \\to +\\infty} \\dfrac{\\ln \\left( e^{\\frac{\\ln x}{x}} - 1 \\right)}{\\ln x} = \\lim_{x \\to +\\infty} \\dfrac{\\ln \\ln x - \\ln x}{\\ln x} = \\lim_{x \\to +\\infty} \\dfrac{\\ln \\ln x}{\\ln x} - 1 = -1$。\n<b>原书另解（红框）：</b>$\\ln \\left( e^{\\frac{\\ln x}{x}} - 1 \\right) = \\ln \\left[ \\dfrac{e^{\\frac{\\ln x}{x}} - 1}{\\frac{\\ln x}{x}} \\cdot \\dfrac{\\ln x}{x} \\right]$，前一因子趋于 $\\ln 1 = 0$（$e^{u} - 1 \\sim u$，$u = \\frac{\\ln x}{x} \\to 0$），同样得指数 $-1$。\n<b>答：</b>$e^{-1}$，即 $\\dfrac{1}{e}$",
  },
  /* ---------------- 1.47 ---------------- */
  {
    id: '1.47',
    originalNo: '1.47',
    chapter: '1',
    pageNo: '24',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2000 数二）若 $\\lim_{x \\to 0} \\dfrac{\\sin 6x + x f(x)}{x^{3}} = 0$，则 $\\lim_{x \\to 0} \\dfrac{6 + f(x)}{x^{2}}$ 为（&nbsp;&nbsp;）\n（A）$0$.　（B）$6$.　（C）$36$.　（D）$\\infty$.",
    answerHTML: "<b>解：</b>原书把 $6x$ 拆进去（凑配项）：\n$\\dfrac{\\sin 6x + x f(x)}{x^{3}} = \\dfrac{\\sin 6x - 6x}{x^{3}} + \\dfrac{6x + x f(x)}{x^{3}} = \\dfrac{\\sin 6x - 6x}{x^{3}} + \\dfrac{6 + f(x)}{x^{2}}$。\n<b>第一步：</b>由 $\\sin u = u - \\dfrac{u^{3}}{6} + o \\left( u^{3} \\right)$，$\\sin 6x - 6x \\sim -\\dfrac{(6x)^{3}}{6} = -36 x^{3}$，\n故 $\\lim_{x \\to 0} \\dfrac{\\sin 6x - 6x}{x^{3}} = -36$。\n<b>第二步：</b>由条件取极限：$0 = -36 + \\lim_{x \\to 0} \\dfrac{6 + f(x)}{x^{2}}$，\n故 $\\lim_{x \\to 0} \\dfrac{6 + f(x)}{x^{2}} = 36$。\n<b>要点：</b>由 $x f(x) = -\\sin 6x + o \\left( x^{3} \\right) = -6x + 36x^{3} + o \\left( x^{3} \\right)$ 知 $f(x) \\to -6$，所以 $6 + f(x) \\to 0$，所求实为 $\\dfrac{0}{0}$ 型；只看 $f(x) \\to -6$ 而不算 $x^{2}$ 阶容易误选（D）。\n<b>答：</b>$\\boxed{36}$，选 $\\mathrm{C}$",
  },
  /* ---------------- 1.49 ---------------- */
  {
    id: '1.49',
    originalNo: '1.49',
    chapter: '1',
    pageNo: '25',
    type: '填空',
    isRealExam: false,
    problemHTML: "设 $F(x) = \\int_{0}^{x} \\dfrac{\\tan t - t}{t},\\mathrm{d}t$，$G(x) = \\int_{0}^{x} \\dfrac{\\arcsin t - t}{t},\\mathrm{d}t$，试求 $\\lim_{x \\to 0} \\dfrac{F(x)}{x^{3}}$ 与 $\\lim_{x \\to 0} \\dfrac{F \\left( G(x) \\right)}{G \\left( F(x) \\right)}.$（难）",
    answerHTML: "<b>解：</b>\n<b>第一步：</b>$\\lim_{x \\to 0} \\dfrac{F(x)}{x^{3}} = \\lim_{x \\to 0} \\dfrac{\\tan x - x}{3 x^{3}} = \\dfrac{1}{3} \\cdot \\dfrac{1}{3} = \\dfrac{1}{9}$（变限积分求导 + $\\tan x - x \\sim \\dfrac{x^{3}}{3}$）。\n<b>第二步：</b>同理 $\\lim_{x \\to 0} \\dfrac{G(x)}{x^{3}} = \\lim_{x \\to 0} \\dfrac{\\arcsin x - x}{3 x^{3}} = \\dfrac{1}{6} \\cdot \\dfrac{1}{3} = \\dfrac{1}{18}$（$\\arcsin x - x \\sim \\dfrac{x^{3}}{6}$）。\n<b>第三步（复合的等价代换）：</b>$x \\to 0$ 时 $F(x), G(x) \\to 0$，由第一步的阶，\n$F(u) \\sim \\dfrac{u^{3}}{9}$，$G(u) \\sim \\dfrac{u^{3}}{18}$，故 $F \\left( G(x) \\right) \\sim \\dfrac{\\left[ G(x) \\right]^{3}}{9}$，$G \\left( F(x) \\right) \\sim \\dfrac{\\left[ F(x) \\right]^{3}}{18}$。\n<b>第四步：</b>$\\lim_{x \\to 0} \\dfrac{F(G(x))}{G(F(x))} = \\lim_{x \\to 0} \\dfrac{\\left[ G(x) \\right]^{3} / 9}{\\left[ F(x) \\right]^{3} / 18} = 2 \\left( \\dfrac{G(x)}{F(x)} \\right)^{3} = 2 \\times \\left( \\dfrac{1}{2} \\right)^{3} = \\dfrac{1}{4}$\n（原书手写 $\\dfrac{1}{9} \\times \\left( \\dfrac{1}{18} \\right)^{3} \\times 9^{3} \\times 18 = \\dfrac{1}{4}$，一致。）\n<b>要点：</b>被积函数 $\\sim a t^{2}$ 时变限积分 $\\sim \\dfrac{a x^{3}}{3}$；复合后代等价，$F \\sim \\dfrac{u^{3}}{9}$ 中的常数不能丢。\n<b>答：</b>$\\dfrac{F(x)}{x^{3}} \\to \\dfrac{1}{9}$；$\\dfrac{F \\left( G(x) \\right)}{G \\left( F(x) \\right)} \\to \\dfrac{1}{4}$",
  },
  /* ---------------- 1.50 ---------------- */
  {
    id: '1.50',
    originalNo: '1.50',
    chapter: '1',
    pageNo: '25',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{x \\to 0} \\dfrac{\\cos \\left( x e^{x} \\right) - e^{-\\frac{1}{2} \\left( x e^{x} \\right)^{2}}}{e^{x^{2}} - e^{\\sin^{2} x}} = $ ____.",
    answerHTML: "<b>解：</b>\n<b>第一步（分母）：</b>提公因子，$e^{x^{2}} - e^{\\sin^{2} x} = e^{\\sin^{2} x} \\left( e^{x^{2} - \\sin^{2} x} - 1 \\right)$，\n由 $e^{u} - 1 \\sim u$ 且 $e^{\\sin^{2} x} \\to 1$，分母$\\sim x^{2} - \\sin^{2} x = \\left( x + \\sin x \\right) \\left( x - \\sin x \\right) \\sim 2x \\cdot \\dfrac{x^{3}}{6} = \\dfrac{x^{4}}{3}$。\n<b>第二步（换元）：</b>令 $t = x e^{x}$（$x \\to 0$ 时 $t \\to 0$，且 $t \\sim x$），分子化为 $\\cos t - e^{-\\frac{t^{2}}{2}}$。\n<b>第三步（泰勒展开到 $t^{4}$）：</b>$\\cos t = 1 - \\dfrac{t^{2}}{2} + \\dfrac{t^{4}}{24} + o \\left( t^{4} \\right)$，\n$e^{-\\frac{t^{2}}{2}} = 1 - \\dfrac{t^{2}}{2} + \\dfrac{1}{2} \\left( -\\dfrac{t^{2}}{2} \\right)^{2} + o \\left( t^{4} \\right) = 1 - \\dfrac{t^{2}}{2} + \\dfrac{t^{4}}{8} + o \\left( t^{4} \\right)$，\n分子$= \\left( \\dfrac{1}{24} - \\dfrac{1}{8} \\right) t^{4} = -\\dfrac{t^{4}}{12}$。\n<b>第四步：</b>原式$= \\lim_{x \\to 0} \\dfrac{-\\dfrac{t^{4}}{12}}{\\dfrac{x^{4}}{3}} = 3 \\times \\left( -\\dfrac{1}{12} \\right) \\times \\lim_{x \\to 0} \\left( \\dfrac{t}{x} \\right)^{4}$，\n而 $\\dfrac{t}{x} = e^{x} \\to 1$，故原式$= -\\dfrac{3}{12} = -\\dfrac{1}{4}$。\n<b>要点：</b>$\\cos t$ 与 $e^{-\\frac{t^{2}}{2}}$ 的 $t^{2}$ 项恰好相同，抵消后必须展到 $t^{4}$ 才出结果——泰勒展开的阶数要「展到第一个不抵消的阶」。\n<b>答：</b>$-\\dfrac{1}{4}$",
  },
  /* ---------------- 1.51 ---------------- */
  {
    id: '1.51',
    originalNo: '1.51',
    chapter: '1',
    pageNo: '25',
    type: '填空',
    isRealExam: false,
    problemHTML: "求曲线 $y = \\sqrt{4 x^{2} + x} ; \\ln \\left( 2 + \\dfrac{1}{x} \\right)$ 的斜渐近线.",
    answerHTML: "<b>解：</b>$x \\to +\\infty$ 与 $x \\to -\\infty$ 各有一条（原书红字：双斜渐近线）。\n<b>当 $x \\to +\\infty$：</b>$a_{1} = \\lim_{x \\to +\\infty} \\dfrac{y}{x} = \\lim_{x \\to +\\infty} \\sqrt{4 + \\dfrac{1}{x}} \\cdot \\ln \\left( 2 + \\dfrac{1}{x} \\right) = 2 \\ln 2$。\n$b_{1} = \\lim_{x \\to +\\infty} \\left[ \\sqrt{4x^{2} + x} \\ln \\left( 2 + \\dfrac{1}{x} \\right) - 2 \\ln 2 \\cdot x \\right]$，拆项：\n$= \\lim_{x \\to +\\infty} \\left( \\sqrt{4x^{2} + x} - 2x \\right) \\ln \\left( 2 + \\dfrac{1}{x} \\right) + \\lim_{x \\to +\\infty} 2x \\ln \\left( 1 + \\dfrac{1}{2x} \\right)$。\n第一段有理化：$\\sqrt{4x^{2} + x} - 2x = \\dfrac{x}{\\sqrt{4x^{2} + x} + 2x} \\to \\dfrac{1}{4}$，得 $\\dfrac{1}{4} \\ln 2$；第二段 $\\to 1$。\n所以 $b_{1} = \\dfrac{1}{4} \\ln 2 + 1$。\n<b>当 $x \\to -\\infty$：</b>$\\dfrac{\\sqrt{4x^{2} + x}}{x} = -\\sqrt{4 + \\dfrac{1}{x}}$，故 $a_{2} = -2 \\ln 2$；原书「类似地」得 $b_{2} = -\\dfrac{1}{4} \\ln 2 - 1$。\n<b>要点：</b>① $x \\to -\\infty$ 时 $|x| = -x$，斜率变号；② 此时 $\\sqrt{4x^{2} + x} + 2x \\to 0$，$b_{1}$ 的有理化式失效，须改写 $\\sqrt{4x^{2} + x} = -2x \\sqrt{1 + \\frac{1}{4x}}$ 展开（数值验证 $x = -1000$：$y - a_{2}x \\approx -1.1734$，与 $-1 - \\frac{\\ln 2}{4}$ 吻合）。\n<b>答：</b>$y = \\left( 2 \\ln 2 \\right) x + \\dfrac{1}{4} \\ln 2 + 1$ 与 $y = -\\left( 2 \\ln 2 \\right) x - \\dfrac{1}{4} \\ln 2 - 1$",
  },
  /* ---------------- 1.52 ---------------- */
  {
    id: '1.52',
    originalNo: '1.52',
    chapter: '1',
    pageNo: '26',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{x \\to 0^{+}} \\dfrac{x \\ln \\sin x - \\sin x \\ln x}{x^{3} \\ln x} = $ ____.",
    answerHTML: "<b>解：</b>页首红字提示「凑配项、逆用等价」。分子加减 $\\sin x \\ln \\sin x$：\n$x \\ln \\sin x - \\sin x \\ln x = \\left( x - \\sin x \\right) \\ln \\sin x + \\sin x \\ln \\dfrac{\\sin x}{x}$，\n原式$= \\lim_{x \\to 0^{+}} \\dfrac{\\left( x - \\sin x \\right) \\ln \\sin x}{x^{3} \\ln x} + \\lim_{x \\to 0^{+}} \\dfrac{\\sin x \\cdot \\ln \\left( 1 + \\frac{\\sin x - x}{x} \\right)}{x^{3} \\ln x}$。\n<b>第一项：</b>$x - \\sin x \\sim \\dfrac{x^{3}}{6}$，$\\dfrac{\\ln \\sin x}{\\ln x} = 1 + \\dfrac{\\ln \\frac{\\sin x}{x}}{\\ln x} \\to 1$，故第一项 $= \\dfrac{1}{6}$。\n<b>第二项：</b>$\\ln \\left( 1 + \\dfrac{\\sin x - x}{x} \\right) \\sim \\dfrac{\\sin x - x}{x} \\sim -\\dfrac{x^{2}}{6}$，\n故第二项 $= \\lim_{x \\to 0^{+}} \\dfrac{-\\dfrac{x^{3}}{6}}{x^{3} \\ln x} = \\lim_{x \\to 0^{+}} \\dfrac{-1}{6 \\ln x} = 0$。\n<b>要点：</b>第二项看着是 $\\dfrac{0}{\\ln x}$，因分子是 $x^{3}$ 阶、分母只带一个 $\\ln x$，结果为 $0$ 而非保留。\n<b>答：</b>$\\dfrac{1}{6} + 0 = \\dfrac{1}{6}$",
  },
  /* ---------------- 1.53 ---------------- */
  {
    id: '1.53',
    originalNo: '1.53',
    chapter: '1',
    pageNo: '26',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\dfrac{1 - \\cos x \\cos 2x \\cos 3x \\cdots \\cos nx}{x^{2}}.$",
    answerHTML: "<b>解：</b>\n<b>第一步：</b>令 $u = \\ln \\left( \\cos x \\cos 2x \\cdots \\cos nx \\right) \\to 0$，由 $1 - e^{u} \\sim -u$（即 $1 - v \\sim -\\ln v$，$v \\to 1$）：\n原式$= -\\lim_{x \\to 0} \\dfrac{\\ln \\cos x + \\ln \\cos 2x + \\cdots + \\ln \\cos nx}{x^{2}}$。\n<b>第二步：</b>各项极限都存在，和的极限拆开：\n$= -\\sum_{k=1}^{n} \\lim_{x \\to 0} \\dfrac{\\ln \\cos kx}{x^{2}} = -\\sum_{k=1}^{n} \\lim_{x \\to 0} \\dfrac{\\cos kx - 1}{x^{2}} = \\sum_{k=1}^{n} \\dfrac{k^{2}}{2}$。\n<b>第三步：</b>$\\sum_{k=1}^{n} k^{2} = \\dfrac{n \\left( n + 1 \\right) \\left( 2n + 1 \\right)}{6}$，故原式$= \\dfrac{n \\left( n + 1 \\right) \\left( 2n + 1 \\right)}{12}$。\n<b>要点：</b>「$1 - \\prod \\cos kx$」不能逐因子用 $1 - \\cos kx \\sim \\dfrac{k^{2} x^{2}}{2}$ 直接乘开（乘积的等价不等于等价的乘积），须先对数化变成「和」再逐项拆。\n<b>答：</b>$\\dfrac{n \\left( n + 1 \\right) \\left( 2n + 1 \\right)}{12}$",
  },
  /* ---------------- 1.55 ---------------- */
  {
    id: '1.55',
    originalNo: '1.55',
    chapter: '1',
    pageNo: '27',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{n \\to \\infty} \\int_{0}^{1} \\arctan\\left( n\\sqrt{x} \\right) \\mathrm{d}x = $ ____.",
    answerHTML: "<b>解：</b>\n<b>第一步（换元把 $n$ 从被积函数里挪出去）：</b>令 $t = n\\sqrt{x}$，则 $x = \\dfrac{t^{2}}{n^{2}}$，$\\mathrm{d}x = \\dfrac{2t}{n^{2}}\\mathrm{d}t$；$x: 0 \\to 1$ 对应 $t: 0 \\to n$。\n原式$= \\lim_{n \\to \\infty} \\dfrac{1}{n^{2}} \\int_{0}^{n} 2t\\arctan t\\,\\mathrm{d}t$。\n<b>第二步（化成函数极限用洛必达）：</b>把离散的 $n$ 换成连续变量 $x \\to +\\infty$（变限积分对上限可导）：\n$= \\lim_{x \\to +\\infty} \\dfrac{\\int_{0}^{x} 2t\\arctan t\\,\\mathrm{d}t}{x^{2}}$，这是 $\\dfrac{\\infty}{\\infty}$ 型，洛必达：\n$= \\lim_{x \\to +\\infty} \\dfrac{2x\\arctan x}{2x} = \\lim_{x \\to +\\infty} \\arctan x = \\dfrac{\\pi}{2}$。\n<b>要点：</b>① 参数 $n$ 藏在被积函数里时，先换元把它挪到积分限上，才能用变限积分求导；② 数列极限 $n \\to \\infty$ 不能直接洛必达，须换成 $x \\to +\\infty$（原书红字即此意）。\n<b>答：</b>$\\dfrac{\\pi}{2}$",
  },
  /* ---------------- 1.57 ---------------- */
  {
    id: '1.57',
    originalNo: '1.57',
    chapter: '1',
    pageNo: '27',
    type: '解答',
    isRealExam: false,
    problemHTML: "已知 $\\lim_{x \\to 0} \\dfrac{e^{x}\\ln\\left( 1+x \\right) + ax + bx^{2} + cx^{3}}{\\left( \\cos x - e^{x} \\right)\\sin x^{2}} = A \\neq 0$，求 $a,\\ b,\\ c$.",
    answerHTML: "<b>解：</b>极限存在且为非零常数 $A$，要求分子与分母<b>同阶</b>（同为 $x^{3}$ 阶），把分子按 $x$ 的幂配凑。\n<b>第一步（分母定阶）：</b>$\\cos x - e^{x} = \\left( 1 - \\dfrac{x^{2}}{2} \\right) - \\left( 1 + x + \\dfrac{x^{2}}{2} \\right) + o\\left( x^{2} \\right) = -x - x^{2} + o\\left( x^{2} \\right)$，\n故分母 $\\left( \\cos x - e^{x} \\right)\\sin x^{2} \\sim -x \\cdot x^{2} = -x^{3}$。\n<b>第二步（分子展开）：</b>$e^{x}\\ln(1+x) = \\left( 1 + x + \\dfrac{x^{2}}{2} + o(x^{2}) \\right)\\left( x - \\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} \\right) = x + \\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} + o\\left( x^{3} \\right)$，\n分子 $= \\left( 1 + a \\right)x + \\left( \\dfrac{1}{2} + b \\right)x^{2} + \\left( \\dfrac{1}{3} + c \\right)x^{3} + o\\left( x^{3} \\right)$。\n<b>第三步（同阶配凑）：</b>若 $1 + a \\neq 0$ 或 $\\dfrac{1}{2} + b \\neq 0$，分子是 $x$ 或 $x^{2}$ 阶，极限为 $0$ 或 $\\infty$，与 $A \\neq 0$ 矛盾。故\n$1 + a = 0$，$\\dfrac{1}{2} + b = 0$，且极限值 $= \\dfrac{\\dfrac{1}{3} + c}{-1} = A$。\n<b>第四步：</b>$a = -1$，$b = -\\dfrac{1}{2}$，$c = -A - \\dfrac{1}{3}$。\n<b>要点：</b>分母是 $\\sin x^{2}$（即 $\\sin(x^{2})$，$x^{2}$ 阶），不是 $\\sin^{2}x$——本题两者恰同阶不影响结果，但读错结构在别处会致命；「极限 $= A \\neq 0$」必须译成「分子分母同阶」。\n（数值验证：取 $A = 1$，即 $a = -1,\\ b = -\\dfrac{1}{2},\\ c = -\\dfrac{4}{3}$，$x = 0.001$ 时极限 $\\approx 0.9990 \\to 1$，一致。）\n<b>答：</b>$a = -1$，$b = -\\dfrac{1}{2}$，$c = -A - \\dfrac{1}{3}$",
  },
  /* ---------------- 1.58 ---------------- */
  {
    id: '1.58',
    originalNo: '1.58',
    chapter: '1',
    pageNo: '28',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\dfrac{e^{\\left( 1+x \\right)^{\\frac{1}{x}}} - \\left( 1+x \\right)^{\\frac{e}{x}}}{x^{2}}.$（难）",
    answerHTML: "<b>解：</b>\n<b>第一步（统一成 $e$ 指数并提公因子）：</b>$\\left( 1+x \\right)^{\\frac{1}{x}} = e^{u}$，$\\left( 1+x \\right)^{\\frac{e}{x}} = e^{eu}$，其中 $u = \\dfrac{\\ln(1+x)}{x} = 1 - \\dfrac{x}{2} + \\dfrac{x^{2}}{3} + o\\left( x^{2} \\right)$。\n分子 $= e^{e^{u}} - e^{eu} = e^{eu}\\left( e^{e^{u} - eu} - 1 \\right) \\sim e^{e}\\left( e^{u} - eu \\right)$（$e^{eu} \\to e^{e}$，$e^{\\Delta} - 1 \\sim \\Delta$）。\n<b>第二步（$e^{u}$ 展到 $x^{2}$）：</b>$e^{u} = e \\cdot e^{-\\frac{x}{2} + \\frac{x^{2}}{3}} = e\\left[ 1 + \\left( -\\dfrac{x}{2} + \\dfrac{x^{2}}{3} \\right) + \\dfrac{1}{2}\\left( -\\dfrac{x}{2} \\right)^{2} \\right] + o\\left( x^{2} \\right) = e\\left[ 1 - \\dfrac{x}{2} + \\dfrac{11}{24}x^{2} \\right] + o\\left( x^{2} \\right)$。\n<b>第三步：</b>$e^{u} - eu = e\\left( \\dfrac{11}{24} - \\dfrac{1}{3} \\right)x^{2} = \\dfrac{e\\,x^{2}}{8}$，\n原式$= e^{e} \\cdot \\dfrac{e}{8} = \\dfrac{e^{e+1}}{8}$。\n<b>要点：</b>「$e^{\\text{大}} - e^{\\text{大}}$」先提公因子化成 $e^{\\Delta} - 1 \\sim \\Delta$，再对 $\\Delta = e^{u} - eu$ 泰勒到 $x^{2}$；一阶项 $-\\dfrac{ex}{2}$ 恰好抵消，结果由 $x^{2}$ 项系数差 $\\dfrac{11}{24} - \\dfrac{1}{3} = \\dfrac{1}{8}$ 决定。\n（与原书手写答案 $\\dfrac{1}{8}e^{e+1}$ 一致；数值验证 $x = \\pm 0.001$ 得 $5.1345$ 与 $5.1639$，夹逼 $\\dfrac{e^{e+1}}{8} = 5.1492$。）\n<b>答：</b>$\\dfrac{e^{e+1}}{8}$",
  },
  /* ---------------- 1.60 ---------------- */
  {
    id: '1.60',
    originalNo: '1.60',
    chapter: '1',
    pageNo: '28',
    type: '填空',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0} \\int_{\\ln\\left( 1+x \\right)}^{x} \\dfrac{1}{t^{2}}\\left( 1 - 2t \\right)^{\\frac{1}{t}} \\mathrm{d}t = $ ____.",
    answerHTML: "<b>解：</b>被积函数是「$\\dfrac{1}{t^{2}}$」与「$\\left( 1-2t \\right)^{\\frac{1}{t}}$」的乘积，$t \\to 0$ 时前者 $\\to \\infty$，不能直接代入，用<b>积分中值定理</b>。\n<b>第一步（中值定理）：</b>被积函数在介于 $\\ln(1+x)$ 与 $x$ 之间连续，存在 $\\xi$ 介于 $\\ln(1+x)$ 与 $x$ 之间，使\n$\\int_{\\ln(1+x)}^{x} \\dfrac{\\left( 1-2t \\right)^{\\frac{1}{t}}}{t^{2}}\\,\\mathrm{d}t = \\dfrac{\\left( 1-2\\xi \\right)^{\\frac{1}{\\xi}}}{\\xi^{2}}\\left( x - \\ln(1+x) \\right)$。\n<b>第二步（夹逼 $\\xi \\sim x$）：</b>$x \\to 0$ 时 $\\ln(1+x) \\lt x$ 且两者都 $\\to 0$，$\\xi$ 被夹在中间，故 $\\dfrac{\\xi}{x} \\to 1$，即 $\\xi \\sim x$。\n<b>第三步（各因子取极限）：</b>\n$\\left( 1-2\\xi \\right)^{\\frac{1}{\\xi}} = \\left[ \\left( 1-2\\xi \\right)^{\\frac{1}{-2\\xi}} \\right]^{-2} \\to e^{-2}$；\n$\\dfrac{x - \\ln(1+x)}{\\xi^{2}} = \\dfrac{\\frac{x^{2}}{2} + o\\left( x^{2} \\right)}{\\xi^{2}} \\to \\dfrac{1}{2}$。\n原式$= e^{-2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{2e^{2}}$。\n<b>要点：</b>积分为「不可拆的两因子之积」时用积分中值定理整体脱积分号，再夹逼说明 $\\xi$ 与端点同阶——这是「变限积分 + 中值定理」的标准组合拳。\n<b>答：</b>$\\dfrac{1}{2e^{2}}$",
  },
  /* ---------------- 1.61 ---------------- */
  {
    id: '1.61',
    originalNo: '1.61',
    chapter: '1',
    pageNo: '29',
    type: '单选',
    isRealExam: false,
    problemHTML: "设 $x \\ne 0$ 时，$f(x) = \\left( \\dfrac{e^{x} + e^{-x}}{2} \\right)^{\\frac{1}{x}}$，记 $I_1 = \\lim_{x \\to +\\infty} f(x),\\ I_2 = \\lim_{x \\to -\\infty} f(x),\\ I_3 = \\lim_{x \\to 0} f(x)$，则（　　）\n（A）$I_1 \\gt I_2 \\gt I_3$　（B）$I_2 \\gt I_1 \\gt I_3$　（C）$I_2 \\gt I_3 \\gt I_1$　（D）$I_1 \\gt I_3 \\gt I_2$",
    answerHTML: "<b>答：选 D，$I_1 \\gt I_3 \\gt I_2$。</b>\n写成指数：$f(x) = e^{\\frac{1}{x}\\ln\\frac{e^{x} + e^{-x}}{2}}$。\n$x \\to +\\infty$：$\\ln\\frac{e^{x}+e^{-x}}{2} = x - \\ln 2 + \\ln(1+e^{-2x})$，除以 $x$ 后极限为 $1$，故 $I_1 = e$。\n$x \\to -\\infty$：括号内 $\\sim \\dfrac{e^{-x}}{2}$，$\\dfrac{1}{x}\\ln\\dfrac{e^{-x}}{2} = \\dfrac{-x-\\ln 2}{x} \\to -1$，故 $I_2 = e^{-1} = \\dfrac{1}{e}$。\n$x \\to 0$：$\\ln\\dfrac{e^{x}+e^{-x}}{2} = \\ln\\left(1 + \\dfrac{e^{x}+e^{-x}-2}{2}\\right) \\sim \\dfrac{e^{x}+e^{-x}-2}{2} \\sim \\dfrac{x^{2}}{2}$，除以 $x$ 后极限为 $0$，故 $I_3 = e^{0} = 1$。\n由 $e \\gt 1 \\gt \\dfrac{1}{e}$ 得 $I_1 \\gt I_3 \\gt I_2$。\n<b>注：</b>原书印刷作 $\\left(e^{x}+e^{x/2}\\right)^{1/x}$（此时 $x \\to 0$ 时 $f(x) \\to +\\infty$，$I_3$ 不存在，题不成立），书中以红笔划去并按 $\\left(\\frac{e^{x}+e^{-x}}{2}\\right)^{1/x}$ 订正求解，本录从订正版。",
  },
  /* ---------------- 1.62 ---------------- */
  {
    id: '1.62',
    originalNo: '1.62',
    chapter: '1',
    pageNo: '29',
    type: '单选',
    isRealExam: false,
    problemHTML: "设 $\\lim_{x \\to \\infty} f'(x) = 0$，且 $\\lim_{x \\to \\infty}\\left[\\dfrac{ax^{2}}{1+x} - bx - 1\\right] = \\lim_{x \\to \\infty}\\left[f(x+1) - f(x)\\right]$，则曲线 $y = \\dfrac{ax^{2}}{1+x}$ 的斜渐近线方程为（　　）\n（A）$y = -x + 1$　（B）$y = x + 1$　（C）$y = -x - 1$　（D）$y = x - 1$",
    answerHTML: "<b>答：选 A，$y = -x + 1$。</b>\n由拉格朗日中值定理，$f(x+1) - f(x) = f'(\\xi)$（$\\xi$ 介于 $x$ 与 $x+1$ 之间）。当 $x \\to \\infty$ 时 $\\xi \\to \\infty$，故右端极限 $= \\lim_{\\xi \\to \\infty} f'(\\xi) = 0$。\n而 $\\dfrac{ax^{2}}{1+x} = ax - a + \\dfrac{a}{1+x}$，故左端 $= (a-b)x - (a+1) + o(1)$，其极限为 0 须一次项与常数项同时为零：$a - b = 0$ 且 $a + 1 = 0$，解得 $a = b = -1$。\n斜渐近线：$k = \\lim_{x \\to \\infty} \\dfrac{y}{x} = \\lim \\dfrac{ax}{1+x} = a = -1$；$b_0 = \\lim (y - kx) = \\lim\\left(\\dfrac{-x^{2}}{1+x} + x\\right) = \\lim \\dfrac{x}{1+x} = 1$。即 $y = -x + 1$。",
  },
  /* ---------------- 1.63 ---------------- */
  {
    id: '1.63',
    originalNo: '1.63',
    chapter: '1',
    pageNo: '29',
    type: '解答',
    isRealExam: true,
    problemHTML: "（2020 数二）求曲线 $y = \\dfrac{x^{1+x}}{(1+x)^{x}}$（$x \\gt 0$）的斜渐近线方程。",
    answerHTML: "<b>解：斜渐近线为 $y = \\dfrac{x}{e} + \\dfrac{1}{2e}$。</b>\n$k = \\lim_{x \\to +\\infty} \\dfrac{y}{x} = \\lim \\dfrac{x^{x}}{(1+x)^{x}} = \\lim\\left(\\dfrac{x}{1+x}\\right)^{x} = \\lim\\left(1 - \\dfrac{1}{1+x}\\right)^{x} = e^{-1}$。\n$b = \\lim_{x \\to +\\infty} (y - kx) = \\lim x\\left[\\left(\\dfrac{x}{1+x}\\right)^{x} - \\dfrac{1}{e}\\right]$。\n由 $x\\ln\\dfrac{x}{1+x} = -x\\ln\\left(1+\\dfrac{1}{x}\\right) = -1 + \\dfrac{1}{2x} - \\dfrac{1}{3x^{2}} + \\cdots$，得\n$\\left(\\dfrac{x}{1+x}\\right)^{x} = e^{-1} \\cdot e^{\\frac{1}{2x} + o(\\frac{1}{x})} = \\dfrac{1}{e}\\left(1 + \\dfrac{1}{2x} + o(\\dfrac{1}{x})\\right)$。\n故 $b = \\lim x \\cdot \\dfrac{1}{2ex} = \\dfrac{1}{2e}$。",
  },
  /* ---------------- 1.65 ---------------- */
  {
    id: '1.65',
    originalNo: '1.65',
    chapter: '1',
    pageNo: '30',
    type: '单选',
    isRealExam: false,
    problemHTML: "极限 $\\lim_{x \\to \\infty} \\dfrac{e^{\\sin\\frac{1}{x}} - 1}{\\left(1 + \\dfrac{1}{x}\\right)^{\\alpha} - \\left(1 + \\dfrac{1}{x}\\right)} = A \\ne 0$ 的充要条件是（　　）\n（A）$\\alpha \\gt 1$　（B）$\\alpha \\ne 1$　（C）$\\alpha \\gt 0$　（D）与 $\\alpha$ 无关",
    answerHTML: "<b>答：选 B，$\\alpha \\ne 1$（此时 $A = \\dfrac{1}{\\alpha - 1}$）。</b>\n分子 $e^{\\sin\\frac{1}{x}} - 1 \\sim \\dfrac{1}{x}$。\n分母 $= \\left(1+\\dfrac{1}{x}\\right)\\left[\\left(1+\\dfrac{1}{x}\\right)^{\\alpha - 1} - 1\\right]$。当 $\\alpha \\ne 1$ 时，$\\left(1+\\dfrac{1}{x}\\right)^{\\alpha-1} - 1 \\sim (\\alpha - 1)\\cdot\\dfrac{1}{x}$，故分母 $\\sim \\dfrac{\\alpha - 1}{x}$，极限 $A = \\dfrac{1}{\\alpha - 1} \\ne 0$。\n当 $\\alpha = 1$ 时分母恒为 $0$，式子无意义。故充要条件为 $\\alpha \\ne 1$。",
  },
  /* ---------------- 1.66 ---------------- */
  {
    id: '1.66',
    originalNo: '1.66',
    chapter: '1',
    pageNo: '30',
    type: '单选',
    isRealExam: true,
    problemHTML: "（1999 卷一）设 $\\lim_{x \\to 0} \\dfrac{a\\tan x + b(1 - \\cos x)}{c\\ln(1 - 2x) + d(1 - e^{-x^{2}})} = 2$，其中 $a^{2} + c^{2} \\ne 0$，则（　　）\n（A）$b = 4d$　（B）$b = -4d$　（C）$a = 4c$　（D）$a = -4c$",
    answerHTML: "<b>答：选 D，$a = -4c$。</b>\n分子中 $a\\tan x \\sim ax$ 是 1 阶，$b(1-\\cos x) \\sim \\dfrac{b x^{2}}{2}$ 是 2 阶；分母中 $c\\ln(1-2x) \\sim -2cx$ 是 1 阶，$d(1 - e^{-x^{2}}) \\sim d x^{2}$ 是 2 阶。\n极限为非零常数 2，须由 1 阶主部之比给出：$\\dfrac{a}{-2c} = 2$，即 $a = -4c$。此时 $a^{2}+c^{2} = 17c^{2} \\ne 0$ 自动满足（$c \\ne 0$）。",
  },
  /* ---------------- 1.68 ---------------- */
  {
    id: '1.68',
    originalNo: '1.68',
    chapter: '1',
    pageNo: '31',
    type: '解答',
    isRealExam: true,
    problemHTML: "（1987 卷一）求正常数 $a$ 与 $b$，使等式 $\\lim_{x \\to 0}\\dfrac{1}{bx - \\sin x}\\int_{0}^{x}\\dfrac{t^{2}}{\\sqrt{a + t^{2}}}\\,dt = 1$ 成立。",
    answerHTML: "<b>解：$a = 4$，$b = 1$。</b>\n由洛必达法则（变限积分求导），原极限 $= \\lim_{x \\to 0}\\dfrac{\\dfrac{x^{2}}{\\sqrt{a + x^{2}}}}{b - \\cos x}$。\n当 $x \\to 0$ 时 $\\cos x \\to 1$：若 $b \\ne 1$，则极限 $= \\lim_{x \\to 0}\\dfrac{x^{2}}{\\sqrt{a}\\,(b - \\cos x)} = 0 \\ne 1$，与题设矛盾，故必有 $b = 1$。\n当 $b = 1$ 时，原极限 $= \\lim_{x \\to 0}\\dfrac{x^{2}}{\\sqrt{a + x^{2}}\\,(1 - \\cos x)} = \\lim\\dfrac{x^{2}}{\\sqrt{a} \\cdot \\dfrac{x^{2}}{2}} = \\dfrac{2}{\\sqrt{a}}$。\n当且仅当 $a = 4$ 时其值为 $1$。综上，$a = 4$，$b = 1$。",
  },
  /* ---------------- 1.69 ---------------- */
  {
    id: '1.69',
    originalNo: '1.69',
    chapter: '1',
    pageNo: '31',
    type: '解答',
    isRealExam: true,
    problemHTML: "（2011 数二）已知函数 $F(x) = \\dfrac{\\int_{0}^{x}\\ln(1 + t^{2})\\,dt}{x^{\\alpha}}$，设 $\\lim_{x \\to +\\infty} F(x) = \\lim_{x \\to +0} F(x) = 0$，求 $\\alpha$ 的取值范围。",
    answerHTML: "<b>解：$1 \\lt \\alpha \\lt 3$。</b>\n当 $x \\to +0$ 时，$\\int_{0}^{x}\\ln(1 + t^{2})\\,dt \\sim \\dfrac{x^{3}}{3}$，故 $F(x) \\sim \\dfrac{1}{3}x^{3 - \\alpha}$：仅当 $\\alpha \\lt 3$ 时趋于 $0$（$\\alpha = 3$ 时极限为 $\\dfrac{1}{3}$，$\\alpha \\gt 3$ 时为 $+\\infty$）。\n当 $x \\to +\\infty$ 时，$\\int_{0}^{x}\\ln(1 + t^{2})\\,dt \\sim x\\ln(1 + x^{2})$，故 $F(x) \\sim \\dfrac{\\ln(1 + x^{2})}{x^{\\alpha - 1}}$：若 $\\alpha \\le 1$，$F(x) \\to +\\infty$；若 $\\alpha \\gt 1$，由于 $\\ln(1 + x^{2})$ 的增长慢于任何正幂次，$F(x) \\to 0$。\n综上，$\\alpha$ 的取值范围为 $1 \\lt \\alpha \\lt 3$。",
  },
  /* ---------------- 1.71 ---------------- */
  {
    id: '1.71',
    originalNo: '1.71',
    chapter: '1',
    pageNo: '32',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{n \\to \\infty}\\int_{0}^{1}x^{n}\\sqrt{x + 2025}\\,dx = $ ______。",
    answerHTML: "<b>答：$0$。</b>\n由夹逼准则：当 $x \\in [0, 1]$ 时，$x^{n}\\sqrt{2025} \\le x^{n}\\sqrt{x + 2025} \\le x^{n}\\sqrt{2026}$，积分得\n$\\dfrac{\\sqrt{2025}}{n + 1} \\le \\int_{0}^{1}x^{n}\\sqrt{x + 2025}\\,dx \\le \\dfrac{\\sqrt{2026}}{n + 1}$。\n令 $n \\to \\infty$，两端均趋于 $0$，由夹逼准则得原极限 $= 0$。",
  },
  /* ---------------- 1.72 ---------------- */
  {
    id: '1.72',
    originalNo: '1.72',
    chapter: '1',
    pageNo: '32',
    type: '解答',
    isRealExam: true,
    problemHTML: "（2005 数二）设函数 $f(x)$ 连续，且 $f(0) \\ne 0$，求极限 $\\lim_{x \\to 0}\\dfrac{\\int_{0}^{x}(x - t)f(t)\\,dt}{x\\int_{0}^{x}f(x - t)\\,dt}$。",
    answerHTML: "<b>解：原极限 $= \\dfrac{1}{2}$。</b>\n分母中令 $x - t = u$，得 $\\int_{0}^{x}f(x - t)\\,dt = \\int_{0}^{x}f(u)\\,du$；分子 $= x\\int_{0}^{x}f(t)\\,dt - \\int_{0}^{x}tf(t)\\,dt$。\n原极限 $= \\lim_{x \\to 0}\\dfrac{x\\int_{0}^{x}f(t)\\,dt - \\int_{0}^{x}tf(t)\\,dt}{x\\int_{0}^{x}f(u)\\,du}$，为 $\\dfrac{0}{0}$ 型，由洛必达法则\n$= \\lim\\dfrac{\\int_{0}^{x}f(t)\\,dt}{\\int_{0}^{x}f(u)\\,du + xf(x)}$。\n由 $f$ 连续且 $f(0) \\ne 0$，$x \\to 0$ 时 $\\int_{0}^{x}f(t)\\,dt \\sim xf(0)$，分母 $\\sim xf(0) + xf(0) = 2xf(0)$，\n故原极限 $= \\dfrac{xf(0)}{2xf(0)} = \\dfrac{1}{2}$。",
  },
  /* ---------------- 1.73 ---------------- */
  {
    id: '1.73',
    originalNo: '1.73',
    chapter: '1',
    pageNo: '32',
    type: '解答',
    isRealExam: false,
    problemHTML: "求极限 $\\lim_{x \\to 0}\\dfrac{\\int_{0}^{2x}|t - x|\\sin t\\,dt}{x^{2}\\ln(1 + |x|)}$。",
    answerHTML: "<b>解：原极限 $= 1$。</b>\n由 $\\ln(1 + |x|) \\sim |x|$，原极限 $= \\lim_{x \\to 0}\\dfrac{\\int_{0}^{2x}|t - x|\\sin t\\,dt}{x^{2}|x|}$。令 $t - x = u$，分子 $= \\int_{-x}^{x}|u|\\sin(x + u)\\,du$\n$= \\sin x\\int_{-x}^{x}|u|\\cos u\\,du + \\cos x\\int_{-x}^{x}|u|\\sin u\\,du$。\n其中 $|u|\\sin u$ 关于 $u$ 为奇函数，对称区间上积分为 $0$；而 $\\int_{-x}^{x}|u|\\cos u\\,du = 2\\int_{0}^{x}u\\cos u\\,du \\sim x^{2}$。\n故分子 $\\sim \\sin x \\cdot x^{2} \\sim x^{3}$，原极限 $= \\lim\\dfrac{2\\sin x\\int_{0}^{x}u\\cos u\\,du}{x^{2}|x|} = 1$。",
  },
  /* ---------------- 1.78 ---------------- */
  {
    id: '1.78',
    originalNo: '1.78',
    chapter: '1',
    pageNo: '35',
    type: '解答',
    isRealExam: true,
    problemHTML: "（2002 数二）设函数 $f(x)$ 在 $x = 0$ 的某邻域内具有二阶连续导数，且 $f(0) \\ne 0$，$f'(0) \\ne 0$，$f''(0) \\ne 0$。证明：存在唯一的一组实数 $\\lambda_{1},\\ \\lambda_{2},\\ \\lambda_{3}$，使得当 $h \\to 0$ 时，$\\lambda_{1}f(h) + \\lambda_{2}f(2h) + \\lambda_{3}f(3h) - f(0)$ 是比 $h^{2}$ 高阶的无穷小。",
    answerHTML: "<b>证明：这样的 $\\lambda_{1}, \\lambda_{2}, \\lambda_{3}$ 存在且唯一。</b>\n由 $f(x)$ 在 $x = 0$ 某邻域内有连续 2 阶导数，根据泰勒公式，当 $h \\to 0$ 时\n$f(h) = f(0) + f'(0)h + \\dfrac{f''(0)}{2}h^{2} + o(h^{2})$，$f(2h) = f(0) + f'(0)(2h) + \\dfrac{f''(0)}{2}(2h)^{2} + o(h^{2})$，$f(3h) = f(0) + f'(0)(3h) + \\dfrac{f''(0)}{2}(3h)^{2} + o(h^{2})$。\n代入整理：$\\lambda_{1}f(h) + \\lambda_{2}f(2h) + \\lambda_{3}f(3h) - f(0) = (\\lambda_{1} + \\lambda_{2} + \\lambda_{3} - 1)f(0) + (\\lambda_{1} + 2\\lambda_{2} + 3\\lambda_{3})f'(0)h + \\dfrac{1}{2}(\\lambda_{1} + 4\\lambda_{2} + 9\\lambda_{3})f''(0)h^{2} + o(h^{2})$。\n要使其为比 $h^{2}$ 高阶的无穷小，须满足方程组\n$\\begin{cases} \\lambda_{1} + \\lambda_{2} + \\lambda_{3} = 1, \\\\ \\lambda_{1} + 2\\lambda_{2} + 3\\lambda_{3} = 0, \\\\ \\lambda_{1} + 4\\lambda_{2} + 9\\lambda_{3} = 0. \\end{cases}$\n由于该方程组的系数行列式不等于零（等于 2），故 $\\lambda_{1}, \\lambda_{2}, \\lambda_{3}$ 是唯一存在的。证毕。",
  },
  /* ---------------- 1.79 ---------------- */
  {
    id: '1.79',
    originalNo: '1.79',
    chapter: '1',
    pageNo: '36',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2022 数二）当 $x \\to 0$ 时，$\\alpha(x)$，$\\beta(x)$ 是非零无穷小量，给出以下四个命题：\n①若 $\\alpha(x) \\sim \\beta(x)$，则 $\\alpha^{2}(x) \\sim \\beta^{2}(x)$；\n②若 $\\alpha^{2}(x) \\sim \\beta^{2}(x)$，则 $\\alpha(x) \\sim \\beta(x)$；\n③若 $\\alpha(x) \\sim \\beta(x)$，则 $\\alpha(x) - \\beta(x) = o(\\alpha(x))$；\n④若 $\\alpha(x) - \\beta(x) = o(\\alpha(x))$，则 $\\alpha(x) \\sim \\beta(x)$。\n其中真命题的序号是（　　）\n（A）①②　　（B）①④　　（C）①③④　　（D）②③④",
    answerHTML: "<b>答：选 C，真命题为①③④。</b>\n①：若 $\\alpha(x) \\sim \\beta(x)$，则 $\\lim_{x \\to 0}\\dfrac{\\alpha(x)}{\\beta(x)} = 1$，从而 $\\lim\\dfrac{\\alpha^{2}(x)}{\\beta^{2}(x)} = 1$，即 $\\alpha^{2}(x) \\sim \\beta^{2}(x)$，命题①是真命题。\n②：由 $\\alpha^{2}(x) \\sim \\beta^{2}(x)$ 并不能得到 $\\alpha(x) \\sim \\beta(x)$。考虑 $\\beta(x) = -\\alpha(x)$，则 $\\lim\\dfrac{\\alpha^{2}(x)}{\\beta^{2}(x)} = 1$，即 $\\alpha^{2} \\sim \\beta^{2}$，但 $\\lim\\dfrac{\\alpha(x)}{\\beta(x)} = \\lim\\dfrac{\\alpha(x)}{-\\alpha(x)} = -1$，$\\alpha(x)$ 与 $\\beta(x)$ 只是同阶但并不等价的无穷小量，命题②不是真命题。\n③：$\\lim\\dfrac{\\alpha(x) - \\beta(x)}{\\alpha(x)} = 1 - \\lim\\dfrac{\\beta(x)}{\\alpha(x)} = 1 - 1 = 0$，命题③是真命题。\n④：$\\lim\\dfrac{\\beta(x)}{\\alpha(x)} = \\lim\\dfrac{\\alpha(x) - [\\alpha(x) - \\beta(x)]}{\\alpha(x)} = 1 - \\lim\\dfrac{\\alpha(x) - \\beta(x)}{\\alpha(x)} = 1 - 0 = 1$，命题④是真命题。\n综上所述，应选 C。",
  },
  /* ---------------- 1.81 ---------------- */
  {
    id: '1.81',
    originalNo: '1.81',
    chapter: '1',
    pageNo: '37',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2023 数二）已知 $\\{x_{n}\\}$，$\\{y_{n}\\}$ 满足 $x_{1} = y_{1} = \\dfrac{1}{2}$，$x_{n+1} = \\sin x_{n}$，$y_{n+1} = y_{n}^{2}$（$n = 1, 2, \\cdots$），则当 $n \\to \\infty$ 时，（　　）\n（A）$x_{n}$ 是 $y_{n}$ 的高阶无穷小　　（B）$y_{n}$ 是 $x_{n}$ 的高阶无穷小\n（C）$x_{n}$ 与 $y_{n}$ 是等价无穷小　　（D）$x_{n}$ 与 $y_{n}$ 是同阶但不等价的无穷小",
    answerHTML: "<b>答：选 B，$y_{n}$ 是 $x_{n}$ 的高阶无穷小。</b>\n当 $n = 1$ 时 $x_{1} = \\dfrac{1}{2} \\in (0, 1)$；假设 $x_{n} \\in (0, 1)$，则 $x_{n+1} = \\sin x_{n} \\in (0, 1)$。由数学归纳法，对任意正整数 $n$，$x_{n} \\in (0, 1) \\subset \\left(0, \\dfrac{\\pi}{2}\\right)$。\n根据凹凸性，在 $\\left(0, \\dfrac{\\pi}{2}\\right)$ 内 $\\sin x \\gt \\dfrac{2}{\\pi}x$，即 $\\dfrac{\\sin x}{x} \\gt \\dfrac{2}{\\pi}$，进而对任意正整数 $n$ 有 $x_{n+1} = \\sin x_{n} \\gt \\dfrac{2}{\\pi}x_{n}$。\n另外，对任意正整数 $n$，$y_{n} \\in \\left[0, \\dfrac{1}{2}\\right]$，从而 $y_{n+1} = y_{n}^{2} \\le \\dfrac{1}{2}y_{n}$，递推得 $y_{n} \\le \\left(\\dfrac{1}{2}\\right)^{n - 1}y_{1}$。\n因此 $0 \\lt \\dfrac{y_{n}}{x_{n}} \\lt \\dfrac{\\frac{1}{2}y_{n-1}}{\\frac{2}{\\pi}x_{n-1}} = \\dfrac{1}{4} \\cdot \\dfrac{y_{n-1}}{x_{n-1}} \\lt \\cdots = \\left(\\dfrac{\\pi}{4}\\right)^{n - 1}\\dfrac{y_{1}}{x_{1}} = \\left(\\dfrac{\\pi}{4}\\right)^{n - 1}$。\n由于 $\\lim_{n \\to \\infty}\\left(\\dfrac{\\pi}{4}\\right)^{n - 1} = 0$，故由夹逼准则可知 $\\lim_{n \\to \\infty}\\dfrac{y_{n}}{x_{n}} = 0$。\n综上所述，当 $n \\to \\infty$ 时，$y_{n}$ 是 $x_{n}$ 的高阶无穷小，应选 B。",
  },
  /* ---------------- 1.87 ---------------- */
  {
    id: '1.87',
    originalNo: '1.87',
    chapter: '1',
    pageNo: '41',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李艳芳 3 套卷）设函数 $f(x)$ 连续，$F(x)$ 为 $f(x)$ 的原函数，则下列命题中，错误的是（　　）\n（A）当 $x \\to 0$ 时，若 $f(x) = o(1)$，则 $F(x) = o(x)$\n（B）当 $x \\to 0$ 时，若 $F(x) = o(x)$，则 $f(x) = o(1)$\n（C）当 $x \\to 0$ 时，若 $f(x) = o(1)$，则 $\\int_{0}^{x}f(t)\\,dt = o(x)$\n（D）当 $x \\to 0$ 时，若 $\\int_{0}^{x}f(t)\\,dt = o(x)$，则 $f(x) = o(1)$",
    answerHTML: "<b>答：选 A。</b>\n考虑选项 A：令 $f(x) = x$，则 $f(x) = o(1)$，$F(x) = \\dfrac{1}{2}x^{2} + 1$ 为 $f(x)$ 的一个原函数。由于 $\\lim_{x \\to 0}F(x) = 1 \\ne 0$，而 $\\lim_{x \\to 0}\\dfrac{F(x)}{x} = \\lim\\left(\\dfrac{x}{2} + \\dfrac{1}{x}\\right) = \\infty$，故当 $x \\to 0$ 时，$F(x) \\ne o(x)$，选项 A 错误。\n当 $x \\to 0$ 时，若 $F(x) = o(x)$，则 $\\lim\\dfrac{F(x)}{x} = 0$，又因为 $f(x)$ 连续，由洛必达法则 $0 = \\lim_{x \\to 0}\\dfrac{F(x)}{x} = \\lim_{x \\to 0}f(x)$，于是 $f(x) = o(1)$，选项 B 正确（选项 D 是选项 B 的另一形式，因此也正确）。\n当 $x \\to 0$ 时，若 $f(x) = o(1)$，则 $\\lim\\dfrac{\\int_{0}^{x}f(t)\\,dt}{x} = \\lim_{x \\to 0}f(x) = 0$，即 $\\int_{0}^{x}f(t)\\,dt = o(x)$，C 正确。\n因此应选 A。",
  },
  /* ---------------- 1.88 ---------------- */
  {
    id: '1.88',
    originalNo: '1.88',
    chapter: '1',
    pageNo: '42',
    type: '单选',
    isRealExam: false,
    problemHTML: "设当 $x \\to +\\infty$ 时，$f(x)$，$g(x)$ 都是无穷大，则当 $x \\to +\\infty$ 时，下列结论正确的是（　　）。\n（A）$f(x) - g(x)$ 是无穷小　　（B）$f(x) + g(x)$ 是无穷大\n（C）$\\lim_{x \\to +\\infty}\\dfrac{g(x)}{f(x)} = 1$　　（D）$\\dfrac{f(x) + g(x)}{f(x)g(x)}$ 是无穷小",
    answerHTML: "<b>答：选 D。</b>\n由题可得 $\\lim_{x \\to +\\infty}\\dfrac{f(x) + g(x)}{f(x)g(x)} = \\lim_{x \\to +\\infty}\\dfrac{1}{g(x)} + \\lim_{x \\to +\\infty}\\dfrac{1}{f(x)} = 0$，故 D 正确。\n（A）（B）（C）均可举反例否定：如 $f(x) = x$，$g(x) = -x$ 时 $f - g = 2x$ 不是无穷小，$f + g = 0$ 不是无穷大，$\\dfrac{g}{f} = -1 \\ne 1$，故均不正确。",
  },
  /* ---------------- 1.91 ---------------- */
  {
    id: '1.91',
    originalNo: '1.91',
    chapter: '1',
    pageNo: '43',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李永乐 660 题）设 $f(x)$ 在 $[a, +\\infty)$ 连续，则“$\\exists x_{n} \\in [a, +\\infty)$，有 $\\lim_{n \\to \\infty}x_{n} = +\\infty$ 且 $\\lim_{n \\to \\infty}f(x_{n}) = \\infty$”是 $f(x)$ 在 $[a, +\\infty)$ 无界的（　　）\n（A）充分非必要条件　　（B）必要非充分条件　　（C）充要条件　　（D）既非充分又非必要条件",
    answerHTML: "<b>答：选 C，充要条件。</b>\n充分性：若存在 $x_{n} \\in [a, +\\infty)$ 使得 $\\lim_{n \\to \\infty}x_{n} = +\\infty$，$\\lim_{n \\to \\infty}f(x_{n}) = \\infty$，则 $f(x)$ 在 $[a, +\\infty)$ 无界。因为若 $f(x)$ 在 $[a, +\\infty)$ 有界，即 $|f(x)| \\le M$（$x \\in [a, +\\infty)$），则 $\\Rightarrow |f(x_{n})| \\le M$ 与 $\\lim_{n \\to \\infty}f(x_{n}) = \\infty$ 矛盾。\n必要性：若 $f(x)$ 在 $[a, +\\infty)$ 无界 $\\Rightarrow$ 对 $\\forall$ 自然数 $n$，$f(x)$ 在 $[a + n, a + n + 1)$ 上无界 $\\Rightarrow$ 存在 $x_{n} \\in [a + n, a + n + 1)$，$\\left|f(x_{n})\\right| \\gt n \\Rightarrow \\lim_{n \\to \\infty}x_{n} = +\\infty$，$\\lim_{n \\to \\infty}f(x_{n}) = \\infty$。\n因此选 C。",
  },
  /* ---------------- 1.92 ---------------- */
  {
    id: '1.92',
    originalNo: '1.92',
    chapter: '1',
    pageNo: '44',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设函数 $f(x) = \\begin{cases} a\\cos x, & x \\ge 0, \\\\ x + 1, & x \\lt 0, \\end{cases}$ $g(x) = \\begin{cases} x^{2} - b^{2}, & x \\ge 0, \\\\ x + \\pi, & x \\lt 0, \\end{cases}$ 已知 $b \\ne 0$，若 $f(x)$ 连续，且 $f(g(x))$ 在 $x = 0$ 处连续，则 $a^{2} + b^{2} = $（　　）\n（A）1　　（B）2　　（C）3　　（D）5",
    answerHTML: "<b>答：选 C，$a^{2} + b^{2} = 3$。</b>\n由 $f(x)$ 连续可知，$f(x)$ 在 $x = 0$ 处连续，从而 $\\lim_{x \\to 0^{+}}f(x) = \\lim_{x \\to 0^{-}}f(x)$。又因为 $\\lim_{x \\to 0^{+}}f(x) = \\lim_{x \\to 0}a\\cos x = a$，$\\lim_{x \\to 0^{-}}f(x) = \\lim_{x \\to 0}(x + 1) = 1$，于是 $a = 1$。\n另一方面，当 $x \\lt 0$ 时，$g(x) = x + \\pi$，且当 $x \\to 0^{-}$ 时 $x + \\pi \\gt 0$，故 $\\lim_{x \\to 0^{-}}f(g(x)) = \\lim_{x \\to 0^{-}}f(x + \\pi) = \\lim\\cos(x + \\pi) = -1$。\n当 $x \\ge 0$ 时，$g(x) = x^{2} - b^{2}$，且当 $x \\to 0^{+}$ 时 $x^{2} - b^{2} \\lt 0$，故 $\\lim_{x \\to 0^{+}}f(g(x)) = \\lim_{x \\to 0^{+}}f(x^{2} - b^{2}) = \\lim(x^{2} - b^{2} + 1) = 1 - b^{2}$。\n由 $f(g(x))$ 在 $x = 0$ 处连续可得，$-1 = 1 - b^{2}$，解得 $b^{2} = 2$。\n因此，$a^{2} + b^{2} = 1 + 2 = 3$，应选 C。",
  },
  /* ---------------- 1.93 ---------------- */
  {
    id: '1.93',
    originalNo: '1.93',
    chapter: '1',
    pageNo: '44',
    type: '解答',
    isRealExam: true,
    problemHTML: "（2003 数三）设 $f(x) = \\dfrac{1}{\\pi x} + \\dfrac{1}{\\sin\\pi x} - \\dfrac{1}{\\pi(1 - x)}$，$x \\in \\left[\\dfrac{1}{2}, 1\\right)$，试补充定义 $f(1)$ 使得 $f(x)$ 在 $\\left[\\dfrac{1}{2}, 1\\right]$ 上连续。",
    answerHTML: "<b>解：补充定义 $f(1) = \\dfrac{1}{\\pi}$。</b>\n$f(x)$ 在 $x = 1$ 处无定义，计算 $\\lim_{x \\to 1^{-}}f(x)$：\n$\\lim_{x \\to 1^{-}}f(x) = \\lim_{x \\to 1^{-}}\\left[\\dfrac{1}{\\pi x} + \\dfrac{1}{\\sin\\pi x} - \\dfrac{1}{\\pi(1 - x)}\\right] = \\dfrac{1}{\\pi} + \\lim_{x \\to 1^{-}}\\dfrac{\\pi(1 - x) - \\sin\\pi x}{\\pi(1 - x)\\sin\\pi x}$。\n由洛必达法则，$\\lim_{x \\to 1^{-}}\\dfrac{-\\pi - \\pi\\cos\\pi x}{-\\pi\\sin\\pi x + (1 - x)\\pi^{2}\\cos\\pi x} = \\lim_{x \\to 1^{-}}\\dfrac{\\pi^{2}\\sin\\pi x}{-\\pi\\cos\\pi x - \\pi\\cos\\pi x - (1 - x)\\pi^{2}\\sin\\pi x} = \\lim\\dfrac{\\pi^{2}\\sin\\pi x}{-2\\pi\\cos\\pi x} = 0$。\n因此 $\\lim_{x \\to 1^{-}}f(x) = \\dfrac{1}{\\pi}$，补充定义 $f(1) = \\dfrac{1}{\\pi}$，可使 $f(x)$ 在 $\\left[\\dfrac{1}{2}, 1\\right]$ 上连续。",
  },
  /* ---------------- 1.94 ---------------- */
  {
    id: '1.94',
    originalNo: '1.94',
    chapter: '1',
    pageNo: '45',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2009 数二）函数 $f(x) = \\dfrac{x - x^{3}}{\\sin\\pi x}$ 的可去间断点的个数为（　　）。\n（A）1　　（B）2　　（C）3　　（D）无穷多个",
    answerHTML: "<b>答：选 C，3 个。</b>\n对 $f(x) = \\dfrac{x - x^{3}}{\\sin\\pi x}$，当 $x$ 取任何整数时，$f(x)$ 均无意义，故 $f(x)$ 的间断点有无穷多个，但可去间断点为极限存在的点，故应在 $x - x^{3} = 0$ 的解 $x = 0, \\pm 1$ 中寻找。由于\n$\\lim_{x \\to 0}\\dfrac{x - x^{3}}{\\sin\\pi x} = \\lim_{x \\to 0}\\dfrac{1 - 3x^{2}}{\\pi\\cos\\pi x} = \\dfrac{1}{\\pi}$，\n$\\lim_{x \\to 1}\\dfrac{x - x^{3}}{\\sin\\pi x} = \\lim\\dfrac{1 - 3x^{2}}{\\pi\\cos\\pi x} = \\dfrac{2}{\\pi}$，$\\lim_{x \\to -1}\\dfrac{x - x^{3}}{\\sin\\pi x} = \\dfrac{2}{\\pi}$，\n因此可去间断点有 3 个，即 $x = 0, \\pm 1$，应选 C。",
  },
  /* ---------------- 1.96 ---------------- */
  {
    id: '1.96',
    originalNo: '1.96',
    chapter: '1',
    pageNo: '45',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2007 数二）函数 $f(x) = \\dfrac{\\left(e^{\\frac{1}{x}} + e\\right)\\tan x}{x\\left(e^{\\frac{1}{x}} - e\\right)}$ 在 $[-\\pi, \\pi]$ 上的第一类间断点是 $x = $（　　）。\n（A）0　　（B）1　　（C）$-\\dfrac{\\pi}{2}$　　（D）$\\dfrac{\\pi}{2}$",
    answerHTML: "<b>答：选 A。</b>\n由函数的表达式知，$x = 0$，$x = 1$，$x = \\pm\\dfrac{\\pi}{2}$ 是间断点，不难看出 $x = 1$，$x = \\pm\\dfrac{\\pi}{2}$ 是无穷间断点，故只能选（A）。\n事实上，$\\lim_{x \\to 0^{+}}f(x) = \\lim_{x \\to 0^{+}}\\dfrac{\\tan x}{x}\\cdot\\dfrac{e^{\\frac{1}{x}} + e}{e^{\\frac{1}{x}} - e} = 1 \\cdot 1 = 1$，$\\lim_{x \\to 0^{-}}f(x) = \\lim_{x \\to 0^{-}}\\dfrac{\\tan x}{x}\\cdot\\dfrac{e^{\\frac{1}{x}} + e}{e^{\\frac{1}{x}} - e} = 1 \\cdot \\dfrac{e}{-e} = -1$。\n因此 $x = 0$ 是跳跃间断点，即第一类间断点。",
  },
  /* ---------------- 1.101 ---------------- */
  {
    id: '1.101',
    originalNo: '1.101',
    chapter: '1',
    pageNo: '48',
    type: '单选',
    isRealExam: false,
    problemHTML: "（合工大超越卷）设 $f(x) = \\lim_{n \\to \\infty}\\dfrac{\\ln\\left(x^{n} + e^{n}\\right)}{n}$（$x \\gt 0$），则 $f(x)$（　　）。\n（A）在定义域内连续　　（B）有一个可去间断点　　（C）有一个跳跃间断点　　（D）有一个无穷间断点",
    answerHTML: "<b>答：选 A，在定义域内连续。</b>\n当 $x \\lt e$ 时，$f(x) = \\lim\\dfrac{n\\ln\\left[1 + \\left(\\dfrac{x}{e}\\right)^{n}\\right] + n}{n} = 1 + \\lim\\ln\\left[1 + \\left(\\dfrac{x}{e}\\right)^{n}\\right] = 1$；\n当 $x \\gt e$ 时，$f(x) = \\lim\\dfrac{n\\ln x + \\ln\\left[1 + \\left(\\dfrac{e}{x}\\right)^{n}\\right]}{n} = \\ln x$；\n当 $x = e$ 时，$f(e) = \\lim\\dfrac{\\ln(2e^{n})}{n} = \\lim\\dfrac{n + \\ln 2}{n} = 1$。\n所以 $f(x) = \\begin{cases} 1, & x \\le e, \\\\ \\ln x, & x \\gt e, \\end{cases}$ 在分段点 $x = e$ 处 $\\lim_{x \\to e^{-}}f(x) = \\lim_{x \\to e^{+}}f(x) = f(e) = 1$，连续。\n故 $f(x)$ 在定义域 $(0, +\\infty)$ 内连续，应选 A。",
  },
  /* ---------------- 1.103 ---------------- */
  {
    id: '1.103',
    originalNo: '1.103',
    chapter: '1',
    pageNo: '50',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2003 数一）设 $\\{a_{n}\\}$，$\\{b_{n}\\}$ 均为非负数列，且 $\\lim_{n \\to \\infty}a_{n} = 0$，$\\lim_{n \\to \\infty}b_{n} = 1$，$\\lim_{n \\to \\infty}c_{n} = \\infty$，则必有（　　）。\n（A）$a_{n} \\lt b_{n}$ 对任意 $n$ 成立　　（B）$b_{n} \\lt c_{n}$ 对任意 $n$ 成立\n（C）极限 $\\lim_{n \\to \\infty}a_{n}c_{n}$ 不存在　　（D）极限 $\\lim_{n \\to \\infty}b_{n}c_{n}$ 不存在",
    answerHTML: "<b>答：选 D。</b>\n数列 $\\{x_{n}\\}$ 的极限描述当 $n \\to \\infty$ 时 $x_{n}$ 的变化性态，与其前面有限项的值无关，因此排除（A），（B）。\n由于 $\\lim_{n \\to \\infty}a_{n} = 0$，$\\lim_{n \\to \\infty}c_{n} = \\infty$，可知 $\\lim_{n \\to \\infty}(a_{n}c_{n})$ 为未定型，应排除（C）。故选择（D）。\n（事实上，若 $\\lim b_{n}c_{n}$ 存在，则由 $c_{n} = \\dfrac{b_{n}c_{n}}{b_{n}}$ 及 $\\lim b_{n} = 1 \\ne 0$ 知 $\\lim c_{n}$ 存在，与 $\\lim c_{n} = \\infty$ 矛盾。）",
  },
  /* ---------------- 1.104 ---------------- */
  {
    id: '1.104',
    originalNo: '1.104',
    chapter: '1',
    pageNo: '50',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2014 数三）设 $\\lim_{n \\to \\infty}a_{n} = a$，且 $a \\ne 0$，则当 $n$ 充分大时有（　　）\n（A）$|a_{n}| \\gt \\dfrac{|a|}{2}$　　（B）$|a_{n}| \\lt \\dfrac{|a|}{2}$　　（C）$a_{n} \\gt a - \\dfrac{1}{n}$　　（D）$a_{n} \\lt a + \\dfrac{1}{n}$",
    answerHTML: "<b>答：选 A。</b>\n（方法一）直接法：由 $\\lim_{n \\to \\infty}a_{n} = a$，且 $a \\ne 0$，知 $\\lim_{n \\to \\infty}|a_{n}| = |a| \\gt 0$，则当 $n$ 充分大时有 $\\left||a_{n}| - |a|\\right| \\lt \\dfrac{|a|}{2}$，故应选（A）。\n（方法二）排除法：若取 $a_{n} = 2 + \\dfrac{2}{n}$，显然 $a = 2$，则（B）和（D）都不正确；若取 $a_{n} = 2 - \\dfrac{2}{n}$，显然 $a = 2$，则（C）不正确。故应选（A）。",
  },
  /* ---------------- 1.105 ---------------- */
  {
    id: '1.105',
    originalNo: '1.105',
    chapter: '1',
    pageNo: '51',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2022 数三）已知 $a_{n} = \\sqrt[n]{n} - \\dfrac{(-1)^{n}}{n}$（$n = 1, 2, \\cdots$），则 $\\{a_{n}\\}$（　　）\n（A）有最大值，有最小值。　　（B）有最大值，没有最小值。\n（C）没有最大值，有最小值。　　（D）没有最大值，没有最小值。",
    answerHTML: "<b>答：选 A。</b>\n由于 $\\lim_{n \\to \\infty}a_{n} = \\lim_{n \\to \\infty}\\sqrt[n]{n} - \\lim_{n \\to \\infty}\\dfrac{(-1)^{n}}{n} = 1$，又\n$a_{1} = 2 \\gt 1$，$a_{2} = \\sqrt{2} - \\dfrac{1}{2} \\lt 1$，\n则存在 $N \\gt 0$，当 $n \\gt N$ 时 $a_{2} \\lt a_{n} \\lt a_{1}$，而 $a_{1}, a_{2}, \\cdots, a_{N}$ 为有限个数，则必有最小数 $m$ 和最大数 $M$，且 $m \\le \\sqrt{2} - \\dfrac{1}{2} = a_{2}$，$M \\ge 2 = a_{1}$。\n则 $a_{n}$ 有最小值也有最大值，故选（A）。",
  },
  /* ---------------- 1.106 ---------------- */
  {
    id: '1.106',
    originalNo: '1.106',
    chapter: '1',
    pageNo: '51',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李林 880 题）下列结论中错误的是（　　）。\n（A）设 $\\lim_{n \\to \\infty}a_{n} = a \\gt 1$，则存在 $M \\gt 1$，当 $n$ 充分大时，有 $a_{n} \\gt M$\n（B）设 $a = \\lim_{n \\to \\infty}a_{n} \\lt \\lim_{n \\to \\infty}b_{n} = b$，则当 $n$ 充分大时，有 $a_{n} \\lt b_{n}$\n（C）设 $M \\le a_{n} \\le N$（$n = 1, 2, \\cdots$），若 $\\lim_{n \\to \\infty}a_{n} = a$，则 $M \\le a \\le N$\n（D）若 $\\lim_{n \\to \\infty}a_{n} = a \\ne 0$，则当 $n$ 充分大时，$a_{n} \\gt a - \\dfrac{1}{n}$",
    answerHTML: "<b>答：选 D。</b>\n对于 A：取 $M = \\dfrac{a + 1}{2}$，则 $M \\gt 1$，令 $x_{n} = a_{n} - \\dfrac{a + 1}{2}$，则 $\\lim_{n \\to \\infty}x_{n} = a - \\dfrac{a + 1}{2} = \\dfrac{a - 1}{2} \\gt 0$。由极限的保号性，可知当 $n$ 充分大时，有 $x_{n} = a_{n} - \\dfrac{a + 1}{2} \\gt 0$，即 $a_{n} \\gt \\dfrac{a + 1}{2} = M \\gt 1$，A 正确。\n对于 B：令 $x_{n} = b_{n} - a_{n}$，则 $\\lim_{n \\to \\infty}x_{n} = \\lim(b_{n} - a_{n}) = b - a \\gt 0$，由极限的保号性，可知当 $n$ 充分大时，$x_{n} \\gt 0$，即 $a_{n} \\lt b_{n}$，B 正确。\n对于 C：令 $x_{n} = N - a_{n}$，则 $x_{n} \\ge 0$（$n = 1, 2, \\cdots$），由极限的保号性，得 $N - a = \\lim_{n \\to \\infty}x_{n} \\ge 0$，即 $a \\le N$；同理可得 $M \\le a$，C 正确。\n对于 D：取 $a_{n} = 2 - \\dfrac{2}{n}$，则 $\\lim\\left(2 - \\dfrac{2}{n}\\right) = 2 \\ne 0$，显然，$a_{n} = 2 - \\dfrac{2}{n} \\lt 2 - \\dfrac{1}{n}$，故选 D。",
  },
  /* ---------------- 1.107 ---------------- */
  {
    id: '1.107',
    originalNo: '1.107',
    chapter: '1',
    pageNo: '52',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）已知 $\\lim_{n \\to \\infty}a_{n} = a$，则下列关于数列 $\\{a_{n}\\}$ 的说法中，正确的是（　　）\n（A）若 $a \\gt 0$，则当 $n$ 充分大时，$a_{n} \\gt 0$。\n（B）若 $a \\ge 0$，则 $\\{a_{n}\\}$ 中只有有限个负项。\n（C）若 $a = 0$，则当 $n$ 充分大时，$a_{n} \\ge -\\dfrac{1}{n}$。\n（D）若 $a = 0$，则当 $n$ 充分大时，$a_{n} \\le \\dfrac{1}{n}$。",
    answerHTML: "<b>答：选 A。</b>\n由 $\\lim_{n \\to \\infty}a_{n} = a$ 可知，对于任意给定的正数 $\\varepsilon$，总存在正整数 $N$，使得当 $n \\gt N$ 时，不等式 $|a_{n} - a| \\lt \\varepsilon$ 都成立。若 $a \\gt 0$，取 $\\varepsilon = \\dfrac{a}{2}$，则可得 $|a_{n} - a| \\lt \\dfrac{a}{2}$，故 $\\dfrac{a}{2} \\lt a_{n} \\lt \\dfrac{3a}{2}$，从而当 $n$ 充分大时，$a_{n} \\gt \\dfrac{a}{2} \\gt 0$，应选 A。\n下面举例说明选项 B、C、D 不正确：令 $a_{n} = -\\dfrac{1}{\\sqrt{n}}$，则 $\\lim a_{n} = 0$，但 $\\{a_{n}\\}$ 中存在无穷多个负项，且当 $n \\gt 1$ 时 $a_{n} = -\\dfrac{1}{\\sqrt{n}} \\lt -\\dfrac{1}{n}$，选项 B、C 错误；令 $a_{n} = \\dfrac{1}{\\sqrt{n}}$，则 $\\lim a_{n} = 0$，且当 $n \\gt 1$ 时 $a_{n} = \\dfrac{1}{\\sqrt{n}} \\gt \\dfrac{1}{n}$，选项 D 错误。",
  },
  /* ---------------- 1.108 ---------------- */
  {
    id: '1.108',
    originalNo: '1.108',
    chapter: '1',
    pageNo: '53',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李林 880 题）设 $\\lim_{n \\to \\infty}a_{n}$ 与 $\\lim_{n \\to \\infty}b_{n}$ 均不存在，则下列选项正确的是（　　）。\n（A）若 $\\lim_{n \\to \\infty}(a_{n} + b_{n})$ 不存在，则 $\\lim_{n \\to \\infty}(a_{n} - b_{n})$ 必不存在\n（B）若 $\\lim_{n \\to \\infty}(a_{n} + b_{n})$ 不存在，则 $\\lim_{n \\to \\infty}(a_{n} - b_{n})$ 必存在\n（C）若 $\\lim_{n \\to \\infty}(a_{n} + b_{n})$ 存在，则 $\\lim_{n \\to \\infty}(a_{n} - b_{n})$ 必不存在\n（D）若 $\\lim_{n \\to \\infty}(a_{n} + b_{n})$ 存在，则 $\\lim_{n \\to \\infty}(a_{n} - b_{n})$ 必存在",
    answerHTML: "<b>答：选 C。</b>\n对 C 选项，用反证法：若 $\\lim_{n \\to \\infty}(a_{n} - b_{n})$ 存在，则 $\\lim_{n \\to \\infty}\\left[(a_{n} - b_{n}) + (a_{n} + b_{n})\\right] = \\lim_{n \\to \\infty}2a_{n}$ 极限存在，与已知 $\\lim_{n \\to \\infty}a_{n}$ 不存在相矛盾，故 C 正确。\nA、B、D 均可举反例排除：如取 $a_{n} = (-1)^{n}$，$b_{n} = (-1)^{n + 1}$，则 $\\lim(a_{n} + b_{n}) = 0$ 存在，$\\lim(a_{n} - b_{n}) = \\lim 2(-1)^{n}$ 不存在（否证 D）；取 $a_{n} = b_{n} = (-1)^{n}$，则 $\\lim(a_{n} + b_{n})$ 不存在，而 $\\lim(a_{n} - b_{n}) = 0$ 存在（否证 A），且也可构造例子否证 B。故应选 C。",
  },
  /* ---------------- 1.109 ---------------- */
  {
    id: '1.109',
    originalNo: '1.109',
    chapter: '1',
    pageNo: '53',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2008 数二）设函数 $f(x)$ 在 $(-\\infty, +\\infty)$ 内单调有界，$\\{x_{n}\\}$ 为数列，下列命题正确的是（　　）\n（A）若 $\\{x_{n}\\}$ 收敛，则 $\\{f(x_{n})\\}$ 收敛。　　（B）若 $\\{x_{n}\\}$ 单调，则 $\\{f(x_{n})\\}$ 收敛。\n（C）若 $\\{f(x_{n})\\}$ 收敛，则 $\\{x_{n}\\}$ 收敛。　　（D）若 $\\{f(x_{n})\\}$ 单调，则 $\\{x_{n}\\}$ 收敛。",
    answerHTML: "<b>答：选 B。</b>\n若 $\\{x_{n}\\}$ 单调，则由 $f(x)$ 单调知 $\\{f(x_{n})\\}$ 单调；又由题设知 $f(x)$ 在 $(-\\infty, +\\infty)$ 上单调有界，从而 $\\{f(x_{n})\\}$ 单调有界，由单调有界准则知 $\\{f(x_{n})\\}$ 收敛，选项 B 正确，应选 B。\n（A）的反例：取 $f(x) = \\arctan x$（$x \\lt 0$），$f(x) = 1 + \\arctan x$（$x \\ge 0$），$f$ 单调有界；$x_{n} = \\dfrac{(-1)^{n}}{n}$ 收敛于 $0$，但 $f(x_{n})$ 的奇偶项分别趋于 $0$ 与 $1$，不收敛。\n（C）（D）的反例：取 $f(x) = \\arctan x$（单调有界），$x_{n} = n$，则 $\\{f(x_{n})\\} = \\{\\arctan n\\}$ 收敛（且单调），但 $\\{x_{n}\\}$ 发散。",
  },
  /* ---------------- 1.110 ---------------- */
  {
    id: '1.110',
    originalNo: '1.110',
    chapter: '1',
    pageNo: '53',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李永乐 6 套卷）设有数列 $\\{x_{n}\\}$，已知 $\\lim_{n \\to \\infty}(x_{n+1} - x_{n}) = 0$，给出以下四个命题：\n①$\\{x_{n}\\}$ 必收敛；　　　　　　　　②若 $\\{x_{n}\\}$ 单调，则 $\\{x_{n}\\}$ 必收敛；\n③若 $\\{x_{n}\\}$ 有界，则 $\\{x_{n}\\}$ 必收敛；　　④若 $\\{x_{3n}\\}$ 收敛，则 $\\{x_{n}\\}$ 必收敛。\n其中正确的命题个数为（　　）\n（A）1　　（B）2　　（C）3　　（D）4",
    answerHTML: "<b>答：选 A，仅④正确。</b>\n若令 $x_{n} = \\sqrt{n}$，则 $\\lim_{n \\to \\infty}(x_{n+1} - x_{n}) = \\lim(\\sqrt{n + 1} - \\sqrt{n}) = \\lim\\dfrac{1}{\\sqrt{n + 1} + \\sqrt{n}} = 0$，但 $\\lim_{n \\to \\infty}x_{n} = \\lim\\sqrt{n} = \\infty$，因此 $\\{x_{n}\\}$ 不收敛，则命题①不正确。又 $x_{n} = \\sqrt{n}$ 单调增，则命题②也不正确。若令\n$x_{n} = \\sin\\sqrt{n}$，显然 $\\{x_{n}\\}$ 有界，且\n$\\lim_{n \\to \\infty}(x_{n+1} - x_{n}) = \\lim(\\sin\\sqrt{n + 1} - \\sin\\sqrt{n}) = \\lim(\\sqrt{n + 1} - \\sqrt{n})\\cos\\xi_{n} = \\lim(\\sqrt{n + 1} - \\sqrt{n})\\cos\\xi_{n} = 0$，\n而 $\\lim_{n \\to \\infty}x_{n} = \\lim\\sin\\sqrt{n}$ 不存在，则命题③也不正确。\n若 $\\{x_{3n}\\}$ 收敛，令 $\\lim_{n \\to \\infty}x_{3n} = a$，则由 $\\lim_{n \\to \\infty}(x_{n+1} - x_{n}) = 0$ 可知 $\\lim_{n \\to \\infty}(x_{3n+1} - x_{3n}) = 0$，$\\lim_{n \\to \\infty}(x_{3n+2} - x_{3n+1}) = 0$，则 $\\lim_{n \\to \\infty}x_{3n+1} = \\lim_{n \\to \\infty}x_{3n+2} = a$。由此可知 $\\lim_{n \\to \\infty}x_{n} = a$，则命题④正确，故应选（A）。",
  },
  /* ---------------- 1.111 ---------------- */
  {
    id: '1.111',
    originalNo: '1.111',
    chapter: '1',
    pageNo: '54',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2017 数二）设数列 $\\{x_{n}\\}$ 收敛，则\n（A）当 $\\lim_{n \\to \\infty}\\sin x_{n} = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。\n（B）当 $\\lim_{n \\to \\infty}\\left(x_{n} + \\sqrt{x_{n}^{2}}\\right) = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。\n（C）当 $\\lim_{n \\to \\infty}\\left(x_{n} + x_{n}^{2}\\right) = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。\n（D）当 $\\lim_{n \\to \\infty}\\left(x_{n} + \\sin x_{n}\\right) = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。",
    answerHTML: "<b>答：选 D。</b>\n由于 $\\{x_{n}\\}$ 收敛，令 $\\lim_{n \\to \\infty}x_{n} = a$，则：\n（A）$\\sin a = 0$，此时 $a$ 不一定为零，$a$ 可以等于 $\\pi$，$2\\pi$ 等，则（A）不正确。同理（B）$a + |a| = 0$ 只需 $a \\le 0$（如 $a = -1$）即可满足，（B）不正确；（C）$a + a^{2} = 0$ 解得 $a = 0$ 或 $a = -1$，（C）不正确；\n而由（D）知 $a + \\sin a = 0$，即 $a = -\\sin a$。两边取绝对值得 $|a| = |\\sin a|$，而当 $a \\ne 0$ 时 $|\\sin a| \\lt |a|$，矛盾，故 $a = 0$，应选 D。",
  },
  /* ---------------- 1.112 ---------------- */
  {
    id: '1.112',
    originalNo: '1.112',
    chapter: '1',
    pageNo: '54',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2022 数二）已知数列 $\\{x_{n}\\}$，其中 $-\\dfrac{\\pi}{2} \\le x_{n} \\le \\dfrac{\\pi}{2}$，则\n（A）当 $\\lim_{n \\to \\infty}\\cos(\\sin x_{n})$ 存在时，$\\lim_{n \\to \\infty}x_{n}$ 存在。\n（B）当 $\\lim_{n \\to \\infty}\\sin(\\cos x_{n})$ 存在时，$\\lim_{n \\to \\infty}x_{n}$ 存在。\n（C）当 $\\lim_{n \\to \\infty}\\cos(\\sin x_{n})$ 存在时，$\\lim_{n \\to \\infty}\\sin x_{n}$ 存在，但 $\\lim_{n \\to \\infty}x_{n}$ 不一定存在。\n（D）当 $\\lim_{n \\to \\infty}\\sin(\\cos x_{n})$ 存在时，$\\lim_{n \\to \\infty}\\cos x_{n}$ 存在，但 $\\lim_{n \\to \\infty}x_{n}$ 不一定存在。",
    answerHTML: "<b>答：选 D。</b>\n由于 $-\\dfrac{\\pi}{2} \\le x_{n} \\le \\dfrac{\\pi}{2}$ 时，$0 \\lt \\cos x_{n} \\le 1$，而 $\\sin x$ 在 $[0, 1]$ 内单调且连续，则由 $\\lim_{n \\to \\infty}\\sin(\\cos x_{n})$ 存在可知 $\\lim_{n \\to \\infty}\\cos x_{n}$ 存在，但 $\\lim_{n \\to \\infty}x_{n}$ 未必存在，如\n$x_{n} = \\begin{cases} -\\dfrac{\\pi}{2}, & n \\text{ 为奇数}, \\\\ \\dfrac{\\pi}{2}, & n \\text{ 为偶数}, \\end{cases}$\n则 $\\lim_{n \\to \\infty}\\cos x_{n} = 0$，$\\lim_{n \\to \\infty}\\sin(\\cos x_{n}) = 0$，但 $\\lim_{n \\to \\infty}x_{n}$ 不存在，故应选（D）。",
  },
  /* ---------------- 1.113 ---------------- */
  {
    id: '1.113',
    originalNo: '1.113',
    chapter: '1',
    pageNo: '55',
    type: '单选',
    isRealExam: true,
    problemHTML: "（2024 数二）已知数列 $\\{a_{n}\\}$（$a_{n} \\ne 0$），若 $\\{a_{n}\\}$ 发散，则（　　）\n（A）$\\left\\{a_{n} + \\dfrac{1}{a_{n}}\\right\\}$ 发散　　（B）$\\left\\{a_{n} - \\dfrac{1}{a_{n}}\\right\\}$ 发散\n（C）$\\left\\{e^{a_{n}} + \\dfrac{1}{e^{a_{n}}}\\right\\}$ 发散　　（D）$\\left\\{e^{a_{n}} - \\dfrac{1}{e^{a_{n}}}\\right\\}$ 发散",
    answerHTML: "<b>答：选 D。</b>\n对于 A 选项，令 $a_{n} = 2, \\dfrac{1}{2}, 2, \\dfrac{1}{2}, \\cdots$，$u_{n} = a_{n} + \\dfrac{1}{a_{n}} = \\dfrac{5}{2}$，所以 $\\left\\{a_{n} + \\dfrac{1}{a_{n}}\\right\\}$ 收敛；\n对于 B 选项，令 $a_{n} = (-1)^{n + 1}$，此时 $u_{n} = a_{n} - \\dfrac{1}{a_{n}} = 0$，所以 $\\left\\{a_{n} - \\dfrac{1}{a_{n}}\\right\\}$ 收敛；\n对于 C 选项，令 $a_{n} = (-1)^{n}$，$u_{n} = e^{a_{n}} + e^{-a_{n}} = e + e^{-1}$ 收敛，故选 D。\n对 D 的正确性：若 $v_{n} = e^{a_{n}} - e^{-a_{n}}$ 收敛于 $l$，由于 $h(t) = e^{t} - e^{-t}$ 在 $\\mathbb{R}$ 上严格单调增加、连续，其反函数连续，故 $a_{n} = h^{-1}(v_{n}) \\to h^{-1}(l)$，即 $\\{a_{n}\\}$ 收敛，与题设矛盾，故 $\\left\\{e^{a_{n}} - \\dfrac{1}{e^{a_{n}}}\\right\\}$ 必发散。",
  },
  /* ---------------- 1.114 ---------------- */
  {
    id: '1.114',
    originalNo: '1.114',
    chapter: '1',
    pageNo: '56',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李林 6 套卷）设 $\\{x_{n}\\}$ 为数列，则下列结论正确的是（　　）\n①若 $\\{\\arctan x_{n}\\}$ 收敛，则 $\\{x_{n}\\}$ 收敛。\n②若 $\\{\\arctan x_{n}\\}$ 单调，则 $\\{x_{n}\\}$ 收敛。\n③若 $x_{n} \\in [-1, 1]$，且 $\\{x_{n}\\}$ 收敛，则 $\\{\\arcsin x_{n}\\}$ 收敛。\n④若 $x_{n} \\in [-1, 1]$，且 $\\{x_{n}\\}$ 单调，则 $\\{\\arcsin x_{n}\\}$ 收敛。\n（A）①②。　　（B）③④。　　（C）①③。　　（D）②④。",
    answerHTML: "<b>答：选 B，③④正确。</b>\n取 $x_{n} = n$，则 $\\arctan x_{n} = \\arctan n$，$\\{\\arctan n\\}$ 收敛且单调，但 $\\{x_{n}\\}$ 发散，故①、②不正确。\n由于 $\\arcsin x$ 是连续函数，故当 $\\{x_{n}\\}$ 收敛时，$\\lim_{n \\to \\infty}\\arcsin x_{n} = \\arcsin\\left(\\lim_{n \\to \\infty}x_{n}\\right)$ 存在，③正确。\n由 $\\arcsin x$ 单调增加且有界可知，当 $\\{x_{n}\\}$ 单调时，$\\{\\arcsin x_{n}\\}$ 单调有界，所以 $\\{\\arcsin x_{n}\\}$ 收敛，④正确。\n综上所述，B 正确。",
  },
  /* ---------------- 1.115 ---------------- */
  {
    id: '1.115',
    originalNo: '1.115',
    chapter: '1',
    pageNo: '56',
    type: '单选',
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设数列 $\\{x_{n}\\}$ 收敛，则（　　）\n（A）当 $\\lim_{n \\to \\infty}\\tan x_{n} = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。\n（B）当 $\\lim_{n \\to \\infty}\\left(x_{n}^{3} + \\sqrt[3]{x_{n}}\\right) = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。\n（C）当 $\\lim_{n \\to \\infty}\\left(x_{n}^{3} + x_{n}^{2}\\right) = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。\n（D）当 $\\lim_{n \\to \\infty}\\left[x_{n} + \\ln(x_{n} + 1)\\right] = 0$ 时，$\\lim_{n \\to \\infty}x_{n} = 0$。",
    answerHTML: "<b>答：选 D。</b>\nA、B、C 的反例：对 A，令 $x_{n} \\equiv \\pi$，则 $\\lim\\tan x_{n} = 0$，但 $\\lim x_{n} = \\pi \\ne 0$；对 B 和 C，令 $x_{n} \\equiv -1$，则 $x_{n}^{3} + \\sqrt[3]{x_{n}} = -1 + (-1) = -2 \\ne 0$，需另取 $x_{n}$：令 $x_{n} = -\\dfrac{1}{n}$，则 $\\lim(x_{n}^{3} + \\sqrt[3]{x_{n}}) = 0$，$\\lim(x_{n}^{3} + x_{n}^{2}) = 0$，但 $\\lim x_{n} = 0$……故 B、C 的正确反例为 $x_{n}$ 在 $0$ 与 $-1$ 附近振荡不收敛而表达式趋于 0 的情形，如 $x_{n} = -1$（常值，此时 $x_{n}^{3} + x_{n}^{2} = 0$，$x_{n}^{3} + \\sqrt[3]{x_{n}} = -2$ 不满足）。\n对 D：记 $\\lim_{n \\to \\infty}x_{n} = a$，则由 $\\ln(x + 1)$ 在 $(-1, +\\infty)$ 连续以及 $\\lim_{n \\to \\infty}\\left[x_{n} + \\ln(x_{n} + 1)\\right] = 0$ 可知，$\\lim_{n \\to \\infty}\\left[x_{n} + \\ln(x_{n} + 1)\\right] = a + \\ln(a + 1) = 0$。\n$x = a$ 是函数 $f(x) = x + \\ln(x + 1)$ 的零点。注意到 $f(0) = 0$，由于 $f'(x) = 1 + \\dfrac{1}{x + 1} \\gt 0$（$x \\gt -1$），故 $f(x)$ 单调增加，于是 $x = 0$ 为 $f(x)$ 的唯一零点，因此，$a = 0$，即 $\\lim_{n \\to \\infty}x_{n} = 0$，应选 D。",
  },
  /* ---------------- 1.116 ---------------- */
  {
    id: '1.116',
    originalNo: '1.116',
    chapter: '1',
    pageNo: '57',
    type: '单选',
    isRealExam: false,
    problemHTML: "（余炳森五套卷）设 $a \\gt 0$，$a_{n+1} = a_{n} + \\dfrac{1}{a_{n}}$，$n = 1, 2, \\cdots$，则在下列极限 $\\lim_{n \\to \\infty}a_{n}$，$\\lim_{n \\to \\infty}\\dfrac{1}{a_{n}}$，$\\lim_{n \\to \\infty}\\dfrac{a_{n+1}}{a_{n}}$，$\\lim_{n \\to \\infty}(a_{n+1} + a_{n})$，$\\lim_{n \\to \\infty}\\left(a_{n+1}^{2} - a_{n}^{2}\\right)$ 中，极限存在的个数为（　　）。\n（A）2　　（B）3　　（C）4　　（D）5",
    answerHTML: "<b>答：选 B，3 个。</b>\n不难得到 $a_{n} \\gt 0$，且 $a_{n+1} \\gt a_{n}$，$n = 1, 2, \\cdots$，因此 $\\{a_{n}\\}$ 为单调增加的正数列。如果数列 $\\{a_{n}\\}$ 有上界，则 $\\lim_{n \\to \\infty}a_{n}$ 存在，记 $\\lim_{n \\to \\infty}a_{n} = a$，有 $a \\ge a_{1} \\gt 0$。在 $a_{n+1} = a_{n} + \\dfrac{1}{a_{n}}$ 中，令 $n \\to \\infty$，得 $a = a + \\dfrac{1}{a}$，矛盾，所以数列 $\\{a_{n}\\}$ 单调增加且没有上界，故 $\\lim_{n \\to \\infty}a_{n} = +\\infty$，这表明 $\\lim_{n \\to \\infty}a_{n}$（有限极限）不存在。\n由上述内容即得 $\\lim\\dfrac{1}{a_{n}} = 0$ 存在。另外，由 $\\left\\{\\dfrac{1}{a_{n}}\\right\\}$ 为单调下降的正数列也可知 $\\lim\\dfrac{1}{a_{n}}$ 存在。\n由 $a_{n+1} = a_{n} + \\dfrac{1}{a_{n}}$ 知 $\\dfrac{a_{n+1}}{a_{n}} = 1 + \\dfrac{1}{a_{n}^{2}}$，所以 $\\lim_{n \\to \\infty}\\dfrac{a_{n+1}}{a_{n}} = \\lim\\left(1 + \\dfrac{1}{a_{n}^{2}}\\right) = 1$，故 $\\lim\\dfrac{a_{n+1}}{a_{n}}$ 存在。\n因为 $a_{n+1} \\gt a_{n} \\to +\\infty$，所以 $\\lim(a_{n+1} + a_{n}) = +\\infty$（有限极限不存在）。\n由 $a_{n+1} - a_{n} = \\dfrac{1}{a_{n}}$ 得\n$\\lim_{n \\to \\infty}\\left(a_{n+1}^{2} - a_{n}^{2}\\right) = \\lim(a_{n+1} + a_{n})(a_{n+1} - a_{n}) = \\lim(a_{n+1} + a_{n})\\cdot\\dfrac{1}{a_{n}} = \\lim\\left(\\dfrac{a_{n+1}}{a_{n}} + 1\\right) = 2$，故 $\\lim\\left(a_{n+1}^{2} - a_{n}^{2}\\right)$ 存在。\n综上，5 个极限中存在 3 个，应选 B。",
  },
  /* ---------------- 1.119 ---------------- */
  {
    id: '1.119',
    originalNo: '1.119',
    chapter: '1',
    pageNo: '58',
    type: '解答',
    isRealExam: true,
    problemHTML: "（2006 数一改编）设数列 $\\{x_{n}\\}$ 满足 $0 \\lt x_{1} \\lt \\pi$，$x_{n+1} = \\sin x_{n}$（$n = 1, 2, \\cdots$）。证明 $\\lim_{n \\to \\infty}x_{n}$ 存在并求该极限。",
    answerHTML: "<b>解：$\\lim_{n \\to \\infty}x_{n} = 0$。</b>\n用归纳法证明 $\\{x_{n}\\}$ 单调递减且有下界。\n由于 $\\sin x \\lt x$，$x \\in (0, \\pi)$，则由 $0 \\lt x_{1} \\lt \\pi$，知 $0 \\lt x_{2} = \\sin x_{1} \\lt x_{1} \\lt \\pi$。\n设 $0 \\lt x_{n} \\lt \\pi$，则 $0 \\lt x_{n+1} = \\sin x_{n} \\lt x_{n} \\lt \\pi$。\n所以，$\\{x_{n}\\}$ 单调递减且有下界，故 $\\lim_{n \\to \\infty}x_{n}$ 存在。\n设 $a = \\lim_{n \\to \\infty}x_{n}$，由 $x_{n+1} = \\sin x_{n}$ 知 $a = \\sin a$，由于 $|\\sin a| \\lt |a|$（$a \\ne 0$），故 $a = 0$，即 $\\lim_{n \\to \\infty}x_{n} = 0$。",
  },
  /* ---------------- 1.121 ---------------- */
  {
    id: '1.121',
    originalNo: '1.121',
    chapter: '1',
    pageNo: '59',
    type: '填空',
    isRealExam: true,
    problemHTML: "（1998 数一）$\\lim_{n \\to \\infty}\\left(\\dfrac{\\sin\\dfrac{\\pi}{n}}{n + 1} + \\dfrac{\\sin\\dfrac{2\\pi}{n}}{n + \\dfrac{1}{2}} + \\cdots + \\dfrac{\\sin\\dfrac{n\\pi}{n}}{n + \\dfrac{1}{n}}\\right) = $ ______。",
    answerHTML: "<b>答：$\\dfrac{2}{\\pi}$。</b>\n$\\dfrac{1}{n + 1}\\left(\\sin\\dfrac{\\pi}{n} + \\sin\\dfrac{2\\pi}{n} + \\cdots + \\sin\\dfrac{n\\pi}{n}\\right) \\le \\dfrac{\\sin\\dfrac{\\pi}{n}}{n + 1} + \\dfrac{\\sin\\dfrac{2\\pi}{n}}{n + \\dfrac{1}{2}} + \\cdots + \\dfrac{\\sin\\dfrac{n\\pi}{n}}{n + \\dfrac{1}{n}} \\le \\dfrac{1}{n}\\left(\\sin\\dfrac{\\pi}{n} + \\sin\\dfrac{2\\pi}{n} + \\cdots + \\sin\\dfrac{n\\pi}{n}\\right)$。\n又 $\\lim_{n \\to \\infty}\\dfrac{1}{n}\\left(\\sin\\dfrac{\\pi}{n} + \\sin\\dfrac{2\\pi}{n} + \\cdots + \\sin\\dfrac{n\\pi}{n}\\right) = \\int_{0}^{1}\\sin\\pi x\\,dx = \\dfrac{2}{\\pi}$，\n$\\lim_{n \\to \\infty}\\dfrac{1}{n + 1}\\left(\\sin\\dfrac{\\pi}{n} + \\sin\\dfrac{2\\pi}{n} + \\cdots + \\sin\\dfrac{n\\pi}{n}\\right) = \\lim\\dfrac{n}{n + 1}\\cdot\\dfrac{1}{n}\\sum_{k = 1}^{n}\\sin\\dfrac{k\\pi}{n} = \\dfrac{2}{\\pi}$，\n由夹逼准则知原式 $= \\dfrac{2}{\\pi}$。",
  },
  /* ---------------- 1.122 ---------------- */
  {
    id: '1.122',
    originalNo: '1.122',
    chapter: '1',
    pageNo: '59',
    type: '填空',
    isRealExam: false,
    problemHTML: "$\\lim_{n \\to \\infty}\\dfrac{\\sqrt[n]{(n + 1)(n + 2)\\cdots(n + n)}}{n} = $ ______。",
    answerHTML: "<b>答：$\\dfrac{4}{e}$。</b>\n令 $a_{n} = \\dfrac{\\sqrt[n]{(n + 1)(n + 2)\\cdots(n + n)}}{n}$，则 $\\ln a_{n} = \\dfrac{1}{n}\\sum_{i = 1}^{n}\\ln\\left(1 + \\dfrac{i}{n}\\right)$，\n$\\lim_{n \\to \\infty}\\ln a_{n} = \\lim_{n \\to \\infty}\\dfrac{1}{n}\\sum_{i = 1}^{n}\\ln\\left(1 + \\dfrac{i}{n}\\right) = \\int_{0}^{1}\\ln(1 + x)\\,dx = 2\\ln 2 - 1$，\n故原极限 $= \\lim_{n \\to \\infty}a_{n} = e^{2\\ln 2 - 1} = \\dfrac{4}{e}$。",
  },
  /* ---------------- 数列证明例1 --- */
  {
    id: '数列证明例1',
    originalNo: '数列证明例1',
    chapter: '1',
    pageNo: '57',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $0 \\lt x_1 \\lt \\pi$, $x_{n+1} = \\sin x_n$.\n（1）证明：$\\lim_{n \\to \\infty} x_n$ 存在，并求其值；\n（2）求 $\\lim_{n \\to \\infty} \\left(\\dfrac{x_{n+1}}{x_n}\\right)^{\\dfrac{1}{n}}$.",
    answerHTML: "<b>解：</b>\n（1）显然，$x_n \\gt 0$ 有下界。又 $\\sin x \\lt x$（$x \\gt 0$），故 $x_{n+1} = \\sin x_n \\lt x_n$，所以 $\\{x_n\\}$ 单调减少，故 $\\lim_{n \\to \\infty} x_n$ 存在，记为 $A$. $x_{n+1} = \\sin x_n$ 两边求极限，得 $A = \\sin A$，故 $A = 0$.\n（2）$\\lim_{n \\to \\infty} \\left(\\dfrac{x_{n+1}}{x_n}\\right)^{\\frac{1}{n}} = \\lim_{n \\to \\infty} \\left(\\dfrac{\\sin x_n}{x_n}\\right)^{\\frac{1}{n}} = \\lim_{n \\to \\infty} \\left(\\dfrac{\\sin t}{t}\\right)^{\\frac{1}{n}}$（$t$ 型）$= \\lim_{n \\to \\infty} \\left[\\left(1 + \\dfrac{\\sin t - t}{t}\\right)^{\\frac{1}{\\sin t - t}}\\right]^{\\frac{\\sin t - t}{n}}$，\n而 $\\lim_{t \\to 0}\\dfrac{\\sin t - t}{t^{2}} = \\lim_{t \\to 0}\\dfrac{\\cos t - 1}{3t^{2}} = \\lim_{t \\to 0}\\dfrac{-\\frac{1}{2}t^{2}}{3t^{2}} = -\\dfrac{1}{6}$，\n所以原式 $= e^{-\\frac{1}{6}}$.",
  },
  /* ---------------- 数列证明例2 --- */
  {
    id: '数列证明例2',
    originalNo: '数列证明例2',
    chapter: '1',
    pageNo: '57',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $0 \\lt x_1 \\lt 3$, $x_{n+1} = \\sqrt{x_n(3 - x_n)}$，证明：$\\lim_{n \\to \\infty} x_n$ 存在，并求其值。",
    answerHTML: "<b>解：</b>题设条件为递推关系，考虑用单调有界准则。\n由 $0 \\lt x_1 \\lt 3$，可知 $0 \\lt x_2 = \\sqrt{x_1(3 - x_1)} \\le \\dfrac{x_1 + 3 - x_1}{2} = \\dfrac{3}{2}$.\n假设 $0 \\lt x_k \\le \\dfrac{3}{2}$（$k \\ge 2$），则 $0 \\lt x_{k+1} = \\sqrt{x_k(3 - x_k)} \\le \\dfrac{x_k + 3 - x_k}{2} = \\dfrac{3}{2}$，\n由数学归纳法，可知 $0 \\lt x_n \\le \\dfrac{3}{2}$（$n \\ge 2$），故 $\\{x_n\\}$（$n \\ge 2$）有界。\n再证单调性：因为当 $n \\ge 2$ 时，有 $\\dfrac{x_{n+1}}{x_n} = \\dfrac{\\sqrt{x_n(3 - x_n)}}{x_n} = \\sqrt{\\dfrac{3}{x_n} - 1} \\ge \\sqrt{2 - 1} = 1$，\n所以 $\\{x_n\\}$（$n \\ge 2$）单调增加，从而 $\\lim_{n \\to \\infty} x_n$ 存在。\n令 $\\lim_{n \\to \\infty} x_n = A$，$x_{n+1} = \\sqrt{x_n(3 - x_n)}$ 两边同时取极限，得 $A = \\sqrt{A(3 - A)}$，\n解得 $A = \\dfrac{3}{2}$，$A = 0$（舍去），故 $\\lim_{n \\to \\infty} x_n = \\dfrac{3}{2}$.",
  },
  /* ---------------- 数列证明例3 --- */
  {
    id: '数列证明例3',
    originalNo: '数列证明例3',
    chapter: '1',
    pageNo: '58',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $x_0 \\gt 0$, $x_{n+1} = \\dfrac{2(1 + x_n)}{2 + x_n}$（$n \\ge 0$），证明：$\\lim_{n \\to \\infty} x_n$ 存在，并求其值。",
    answerHTML: "<b>解：</b>由 $x_0 \\gt 0$，可知 $x_1 = \\dfrac{2(1 + x_0)}{2 + x_0} = \\dfrac{2 + 2x_0}{2 + x_0} \\gt 1$，\n再根据数学归纳法，可知 $x_n \\gt 1$（$n \\ge 1$），又因为 $x_{n+1} = \\dfrac{2(1 + x_n)}{2 + x_n} = 2 \\cdot \\dfrac{1 + x_n}{2 + x_n} \\lt 2$，\n所以 $1 \\lt x_{n+1} \\lt 2$. 由于 $x_{n+1} - x_n = \\dfrac{2(1 + x_n)}{2 + x_n} - \\dfrac{2(1 + x_{n-1})}{2 + x_{n-1}} = -\\dfrac{2(x_n - x_{n-1})}{(2 + x_n)(2 + x_{n-1})}$，\n且分母为正，故 $x_{n+1} - x_n$ 与 $x_n - x_{n-1}$ 同号，从而 $\\{x_n\\}$ 为单调数列。\n设 $\\lim_{n \\to \\infty} x_n = a$，则 $a = \\dfrac{2(1 + a)}{2 + a}$，解得 $a = \\sqrt{2}$，$a = -\\sqrt{2}$（舍去），故 $\\lim_{n \\to \\infty} x_n = \\sqrt{2}$.\n<b>【注】</b>证明 $\\{x_n\\}$ 的单调性，也可利用导数：令 $f(x) = \\dfrac{2(1 + x)}{2 + x}$，则 $f'(x) = \\dfrac{2(2 + x) + 2(1 + x)}{(2 + x)^{2}} = \\dfrac{2}{(2 + x)^{2}} \\gt 0$，\n故 $f(x)$ 单调增加，由 $x_{n+1} = f(x_n)$，若 $x_1 \\gt x_0$，则 $\\{x_n\\}$ 为单调增加数列；若 $x_1 \\lt x_0$，则 $\\{x_n\\}$ 为单调减少数列。",
  },
  /* ---------------- 数列证明例4 --- */
  {
    id: '数列证明例4',
    originalNo: '数列证明例4',
    chapter: '1',
    pageNo: '58',
    type: '解答',
    isRealExam: false,
    problemHTML: "（1）证明方程 $x = 2\\ln(1 + x)$ 在 $(0, +\\infty)$ 内有唯一实根 $\\xi$；\n（2）对于（1）中的 $\\xi$ 任取 $x_1 \\gt \\xi$，定义 $x_{n+1} = 2\\ln(1 + x_n)$，$n = 1, 2, \\cdots$，证明 $\\lim_{n \\to \\infty} x_n = \\xi$.",
    answerHTML: "<b>【证】</b>\n（1）令 $F(x) = x - 2\\ln(1 + x)$，$x \\gt 0$，则 $F'(x) = 1 - \\dfrac{2}{1 + x} - \\dfrac{x - 1}{1 + x} = \\dfrac{x - 1}{1 + x}$.\n令 $F'(x) = 0$，得 $x = 1$，是唯一驻点，且当 $0 \\lt x \\lt 1$ 时，$F'(x) \\lt 0$；当 $x \\gt 1$ 时，$F'(x) \\gt 0$.\n又 $F(0) = 0$，$F(1) = 1 - 2\\ln 2 \\lt 0$，$\\lim_{x \\to +\\infty}[x - 2\\ln(1 + x)] = +\\infty \\gt 0$，\n所以 $F(x)$ 在 $(0, 1)$ 内无零点，在 $(1, +\\infty)$ 内有唯一零点 $\\xi$，故原方程在 $(0, +\\infty)$ 内有唯一实根 $\\xi$.\n（2）由 $x_1 \\gt \\xi$，$F(x_1) \\gt F(\\xi) = 0$，即 $x_1 \\gt 2\\ln(1 + x_1) = x_2$，且 $\\xi = 2\\ln(1 + \\xi)$. 又 $y = 2\\ln(1 + x)$ 单调增加，于是有 $x_n \\gt x_{n+1} \\gt \\xi$.\n假设 $x_{n+1} \\gt x_n \\ge \\xi$ 成立，则有 $x_n \\gt 2\\ln(1 + x_n) = x_{n+1}$，即 $x_n \\gt x_{n+1} \\gt \\xi$. 于是 $\\{x_n\\}$ 单调减少且有下界 $\\xi$。\n故 $\\lim_{n \\to \\infty} x_n$ 存在，记为 $a$，在 $x_{n+1} = 2\\ln(1 + x_n)$ 两边取极限，有 $a = 2\\ln(1 + a)$，由（1）可知 $a = \\xi$.",
  },
  /* ---------------- 数列证明例5 --- */
  {
    id: '数列证明例5',
    originalNo: '数列证明例5',
    chapter: '1',
    pageNo: '59',
    type: '解答',
    isRealExam: false,
    problemHTML: "设数列 $\\{x_n\\}$ 满足：$x_1 \\gt 0$，$x_n e^{x_{n+1}} = e^{x_n} - 1$（$n = 1, 2, \\cdots$）. 证明 $\\{x_n\\}$ 收敛，并求 $\\lim_{n \\to \\infty} x_n$.",
    answerHTML: "<b>解：</b>由于 $x_1 \\gt 0$，所以 $e^{x_2} = \\dfrac{e^{x_1} - 1}{x_1}$，根据拉格朗日中值定理，存在 $\\xi \\in (0, x_1)$，使得 $\\dfrac{e^{x_1} - 1}{x_1} = e^{\\xi}$. 所以 $e^{x_2} = e^{\\xi}$，故 $x_2 = \\xi$，$0 \\lt x_2 \\lt x_1$.\n假设 $0 \\lt x_{n+1} \\lt x_n$，则 $e^{x_{n+2}} = \\dfrac{e^{x_{n+1}} - 1}{x_{n+1}} = e^{\\eta}$（$0 \\lt \\eta \\lt x_{n+1}$），所以 $x_{n+2} = \\eta$，$0 \\lt x_{n+2} \\lt x_{n+1}$.\n故 $\\{x_n\\}$ 是单调减少的数列，且有下界，从而 $\\{x_n\\}$ 收敛。\n设 $\\lim_{n \\to \\infty} x_n = a$，得 $ae^a = e^a - 1$，易知 $a = 0$ 为其解，下面证其唯一性。\n令 $f(x) = xe^x - e^x + 1$，则 $f'(x) = xe^x$. 当 $x \\gt 0$ 时，$f(x) \\gt 0$，函数 $f(x)$ 在 $[0, +\\infty)$ 上单调增加，\n所以 $a = 0$ 是方程 $ae^a = e^a - 1$ 在 $[0, +\\infty)$ 上的唯一解，故 $\\lim_{n \\to \\infty} x_n = 0$.",
  },
  /* ---------------- 数列证明例6 --- */
  {
    id: '数列证明例6',
    originalNo: '数列证明例6',
    chapter: '1',
    pageNo: '59',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $g(x)$ 可导，$\\left|g'(x)\\right| \\lt 1$，且当 $a \\le x \\le b$ 时，$a \\lt g(x) \\lt b$，又 $x + g(x) - 2f(x) = 0$，\n若 $\\{x_n\\}$ 满足 $x_{n+1} = f(x_n)$，$n = 0, 1, 2, \\cdots$，$x_0 \\in [a, b]$. 证明：\n（1）存在唯一的 $\\xi \\in (a, b)$，使 $f(\\xi) = \\xi$；\n（2）$\\lim_{n \\to \\infty} x_n$ 存在，并求其值。",
    answerHTML: "<b>解：</b>\n（1）由 $x + g(x) - 2f(x) = 0$，有 $f(x) = \\dfrac{1}{2}\\left[x + g(x)\\right]$，令 $F(x) = f(x) - x = \\dfrac{1}{2}\\left[g(x) - x\\right]$，\n则 $F(a) = \\dfrac{1}{2}\\left[g(a) - a\\right] \\gt 0$，$F(b) = \\dfrac{1}{2}\\left[g(b) - b\\right] \\lt 0$.\n由零点定理知 $\\exists \\xi \\in (a, b)$，使得 $F(\\xi) = 0$，即 $f(\\xi) = \\xi$.\n方程 $x + g(x) - 2f(x) = 0$ 两边对 $x$ 求导，有 $1 + g'(x) - 2f'(x) = 0$，即 $f'(x) = \\dfrac{1}{2}\\left[1 + g'(x)\\right]$.\n由 $-1 \\lt g'(x) \\lt 1$，得 $0 \\lt f'(x) \\lt 1$，① 则 $F'(x) = f'(x) - 1 \\lt 0$，$F(x)$ 单调减少故 $\\xi$ 唯一。\n（2）由 $f(x) = \\dfrac{1}{2}\\left[x + g(x)\\right]$，当 $a \\le x \\le b$ 时，$a \\lt g(x) \\lt b$，有 $a \\lt \\dfrac{1}{2}\\left[x + g(x)\\right] \\lt b$，即 $a \\lt f(x) \\lt b$，②\n又由拉格朗日中值定理，有 $x_{n+1} - x_n = f(x_n) - f(x_{n-1}) = f'(\\eta)(x_n - x_{n-1})$，其中 $\\eta$ 介于 $x_n$ 与 $x_{n-1}$ 之间，$n = 1, 2, \\cdots$.\n由②知 $a \\lt x_{n+1} = f(x_n) \\lt b$，即 $\\{x_n\\}$ 有界；由①知 $f'(\\eta) \\gt 0$，于是当 $x_1 \\gt x_0$ 时，有 $x_2 \\gt x_1$；由数学归纳法知 $\\{x_n\\}$ 单调增加；同理，当 $x_1 \\lt x_0$ 时，有 $\\{x_n\\}$ 单调减少。根据单调有界准则，\n$\\lim_{n \\to \\infty} x_n \\overset{\\text{存在}}{\\text{记为}} A$，于是有 $A = f(A)$，由（1）知 $A = \\xi$，即 $\\lim_{n \\to \\infty} x_n = \\xi$.",
  },
  /* ---------------- 数列证明例7 --- */
  {
    id: '数列证明例7',
    originalNo: '数列证明例7',
    chapter: '1',
    pageNo: '60',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $x_1 = \\sqrt{a}$（$a \\gt 0$），$x_{n+1} = \\sqrt{a + x_n}$，证明：$\\lim_{n \\to \\infty} x_n$ 存在，并求其值。",
    answerHTML: "<b>解：</b>依题意，有 $x_1 = \\sqrt{a}$，$x_2 = \\sqrt{a + \\sqrt{a}}$，$\\cdots$，$x_n = \\sqrt{a + \\sqrt{a + \\cdots + \\sqrt{a}}}$（$n$ 个根号），\n可知 $\\{x_n\\}$ 严格单调增加。由 $x_{n+1} = \\sqrt{a + x_n}$，得 $x_{n+1}^{2} = a + x_n$，所以 $x_{n+1} = \\dfrac{a}{x_{n+1}} + \\dfrac{x_n}{x_{n+1}} lt  \\dfrac{a}{x_{n+1}} + 1$.\n而 $x_{n+1} gt  \\sqrt{a}$，因此 $x_{n+1} lt  \\dfrac{a}{\\sqrt{a}} + 1 = \\sqrt{a} + 1$，即 $\\{x_n\\}$ 有上界，故 $\\lim_{n \\to \\infty} x_n$ 存在。\n设 $\\lim_{n \\to \\infty} x_n = A$，等式 $x_{n+1}^{2} = a + x_n$ 两边取极限（$n \\to \\infty$），得 $A^{2} = a + A$，解得 $A_1 = \\dfrac{1 + \\sqrt{1 + 4a}}{2}$，$A_2 = \\dfrac{1 - \\sqrt{1 + 4a}}{2}$（舍去），\n故 $\\lim_{n \\to \\infty} x_n = \\dfrac{1 + \\sqrt{1 + 4a}}{2}$.",
  },
  /* ---------------- 数列证明例8 --- */
  {
    id: '数列证明例8',
    originalNo: '数列证明例8',
    chapter: '1',
    pageNo: '61',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $f_n(x) = \\sin x + \\sin^{2} x + \\cdots + \\sin^{n} x$，$n = 1, 2, \\cdots$.\n（1）证明：方程 $f_n(x) = 1$ 在 $\\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 上有且只有一个实根；\n（2）若 $x_n \\in \\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 是 $f_n(x) = 1$ 的实根，求 $\\lim_{n \\to \\infty} x_n$.",
    answerHTML: "<b>解：</b>\n（1）令 $F_n(x) = f_n(x) - 1$，则 $F_n(x) = \\sin x + \\sin^{2} x + \\cdots + \\sin^{n} x - 1$ 在 $\\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 上连续。当 $n = 1$ 时，命题显然成立；当 $n \\gt 1$ 时，$F_n\\left(\\dfrac{\\pi}{2}\\right) = n - 1 \\gt 0$，当 $x \\ne \\dfrac{\\pi}{2}$ 时，\n$F_n(x) = \\dfrac{\\left(1 - \\sin^{n} x\\right)\\sin x}{1 - \\sin x} - 1 lt  \\dfrac{\\sin x}{1 - \\sin x} - 1$，\n因而 $F_n\\left(\\dfrac{\\pi}{6}\\right) lt  \\dfrac{1}{6} lt  \\dfrac{1}{2} - 1 = -\\dfrac{1}{2} lt  0$. 由零点定理，$F_n(x) = 0$ 在 $\\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 上至少有一个实根，\n又因为 $F_n'(x) = \\cos x + 2\\sin x\\cos x + \\cdots + n\\sin^{n-1} x\\cos x \\gt 0$，$x \\in \\left(\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right)$，\n且 $F_n(x)$ 连续，所以 $F_n(x)$ 在 $x \\in \\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 上严格单调增加，故 $F_n(x) = 0$ 在 $\\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 上有且只有一个实根，即方程 $f_n(x) = 1$ 在 $\\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$ 上有且只有一个实根。\n（2）由（1）知，存在唯一的 $x_n \\in \\left[\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right]$，使得 $F_n(x_n) = 0$，即 $F_n(x_n) = 0$. 又当 $n \\ge 2$ 时，$F_{n-1}(x_{n-1}) = 0$，而 $F_n(x_{n-1}) = \\sin^{n} x_{n-1} + F_{n-1}(x_{n-1}) = \\sin^{n} x_{n-1} = F_n(x_n)$，\n$F_n\\left(\\dfrac{\\pi}{6}\\right) \\lt 0 = F_n(x_n)$，\n于是有 $\\dfrac{\\pi}{6} \\lt x_n \\lt x_{n-1}$（$F_n(x)$ 严格单调增加），即 $\\{x_n\\}$ 单调减少且有下界，故 $\\lim_{n \\to \\infty} x_n$ 存在，记 $\\lim_{n \\to \\infty} x_n = A$.\n当 $n \\ge 2$ 时，$\\sin x_n \\ne 1$，有 $1 = \\sin^{n} x_n + \\sin^{2} x_n + \\cdots + \\sin^{n} x_n = \\dfrac{\\left(1 - \\sin^{n} x_n\\right)\\sin x_n}{1 - \\sin x_n}$，①\n且 $\\lim_{n \\to \\infty} \\sin^{n} x_n = 0$（$|\\sin x_n| \\lt 1$）。①式两边同时取极限（$n \\to \\infty$），有 $1 = \\dfrac{\\sin A}{1 - \\sin A}$，故 $A = \\lim_{n \\to \\infty} x_n = \\dfrac{\\pi}{6}$.",
  },
  /* ---------------- 数列证明例9 --- */
  {
    id: '数列证明例9',
    originalNo: '数列证明例9',
    chapter: '1',
    pageNo: '62',
    type: '解答',
    isRealExam: false,
    problemHTML: "（1）证明方程 $x^{n} + x^{n-1} + \\cdots + x = 1$（$n$ 为大于 1 的整数）在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内有且仅有一个实根；\n（2）记（1）中的实根为 $x_n$，证明 $\\lim_{n \\to \\infty} n x_n$ 存在，并求此极限。",
    answerHTML: "<b>解：</b>\n（1）令 $f(x) = x^{n} + x^{n-1} + \\cdots + x - 1$（$n \\gt 1$），则 $f(x)$ 在 $\\left[\\dfrac{1}{2}, 1\\right]$ 上连续，且\n$f\\left(\\dfrac{1}{2}\\right) = \\left(\\dfrac{1}{2}\\right)^{n} + \\left(\\dfrac{1}{2}\\right)^{n-1} + \\cdots + \\dfrac{1}{2^{n-1}} - 1 = \\dfrac{1}{2}\\cdot\\dfrac{1 - \\left(\\dfrac{1}{2}\\right)^{n-1}}{1 - \\dfrac{1}{2}} - 1 = \\dfrac{1}{2^{n}} \\lt 0$，\n$f(1) = n - 1 \\gt 0$，\n故由闭区间上连续函数的零点定理知，$f(x)$ 在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内至少有一个零点，即方程 $x^{n} + x^{n-1} + \\cdots + x = 1$ 在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内至少有一个实根。\n又 $f'(x) = nx^{n-1} + (n-1)x^{n-2} + \\cdots + 2x + 1 \\gt 1 \\gt 0$，$x \\in \\left(\\dfrac{1}{2}, 1\\right)$，\n故 $f(x)$ 在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内单调增加，可知 $f(x)$ 在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内只有一个零点，从而方程 $f(x) = 0$，即 $x^{n} + x^{n-1} + \\cdots + x = 1$ 在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内有且仅有一个实根。\n（2）由于 $x_n \\in \\left(\\dfrac{1}{2}, 1\\right)$，所以数列 $\\{x_n\\}$ 有界。又 $x_n^{n} + x_n^{n-1} + \\cdots + x_n = 1$，$x_{n+1}^{n+1} + x_{n+1}^{n} + \\cdots + x_{n+1} = 1$，而 $x_{n+1}^{n+1} \\gt 0$，所以 $x_n^{n} + x_n^{n-1} + \\cdots + x_n \\gt x_{n+1}^{n} + x_{n+1}^{n-1} + \\cdots + x_{n+1}$，\n而 $g(x) = x_n^{n} + x_n^{n-1} + \\cdots + x_n$ 显然在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内单调增，与 $f(x)$ 在 $\\left(\\dfrac{1}{2}, 1\\right)$ 内单调性一致，于是有 $x_n \\gt x_{n+1}$，$n = 2, 3, \\cdots$，\n即 $\\{x_n\\}$ 单调减少，\n由以上讨论知，数列 $\\{x_n\\}$ 单调有界，故 $\\{x_n\\}$ 收敛，设 $\\lim_{n \\to \\infty} x_n = a$. 由于 $x_n^{n} + x_n^{n-1} + \\cdots + x_n = 1$，即 $\\dfrac{x_n - x_n^{n+1}}{1 - x_n} = 1$，\n令 $n \\to \\infty$，并注意到 $\\dfrac{1}{2} \\lt x_n \\lt x_2 \\lt 1$，则有 $\\dfrac{a}{1 - a} = 1$，解得 $a = \\dfrac{1}{2}$，即 $\\lim_{n \\to \\infty} n x_n = \\dfrac{1}{2}$.\n<b>易错提醒：</b>原书此处写 $\\lim x_n = \\dfrac{1}{2}$（对应 $a = \\dfrac{1}{2}$）；而（2）问求的是 $\\lim n x_n$。由 $x_n \\to \\dfrac{1}{2}$ 且 $x_n \\gt \\dfrac{1}{2}$，用 $x_n = x_n^{n}\\left[\\dfrac{1}{1 - x_n} - \\dfrac{1}{1 - x_n}\\cdot x_n^{n}\\right]$ 型 Stolz 或取倒数放大可得 $\\lim n x_n = \\dfrac{1}{2}$，与原书答案一致。",
  },
  /* ---------------- 数列证明例10 --- */
  {
    id: '数列证明例10',
    originalNo: '数列证明例10',
    chapter: '1',
    pageNo: '63',
    type: '解答',
    isRealExam: false,
    problemHTML: "设 $x_1 = 1$，$x_{n+1} = \\dfrac{x_n + 3}{x_n + 1}$，求 $\\lim_{n \\to \\infty} x_n$.",
    answerHTML: "<b>分析：</b>「先斩后奏」设 $\\lim_{n \\to \\infty} x_n = A$，递推式两边取极限，有 $A = \\dfrac{A + 3}{A + 1}$，故 $A = \\sqrt{3}$（$x_n \\gt 0$，由保号性，舍去 $A = -\\sqrt{3}$）。\n<b>解析：</b>令 $y_n = x_n - \\sqrt{3}$，则\n$\\left|\\dfrac{y_{n+1}}{y_n}\\right| = \\left|\\dfrac{x_{n+1} - \\sqrt{3}}{x_n - \\sqrt{3}}\\right| = \\left|\\dfrac{\\dfrac{x_n + 3}{x_n + 1} - \\sqrt{3}}{x_n - \\sqrt{3}}\\right| = \\left|\\dfrac{\\left(x_n - \\sqrt{3}\\right)(1 - \\sqrt{3})}{\\left(x_n + 1\\right)\\left(x_n - \\sqrt{3}\\right)}\\right| = \\dfrac{\\sqrt{3} - 1}{x_n + 1}$，\n由 $x_n \\gt 0$，故 $x_n + 1 \\gt 1$，于是 $\\dfrac{\\sqrt{3} - 1}{x_n + 1} \\lt \\sqrt{3} - 1$. 则\n$0 \\le |y_{n+1}| \\lt (\\sqrt{3} - 1)|y_n| \\lt (\\sqrt{3} - 1)^{2}|y_{n+1}| lt  \\cdots lt  (\\sqrt{3} - 1)^{n}|y_1|$.\n因 $\\lim_{n \\to \\infty}(\\sqrt{3} - 1)^{n}|y_1| = 0$，由夹逼准则，$\\lim_{n \\to \\infty} |y_n| = 0$，即 $\\lim_{n \\to \\infty} y_n = 0$，于是 $\\lim_{n \\to \\infty} x_n = \\sqrt{3}$.",
  },
  /* ---------------- 数列证明例11 --- */
  {
    id: '数列证明例11',
    originalNo: '数列证明例11',
    chapter: '1',
    pageNo: '64',
    type: '解答',
    isRealExam: false,
    problemHTML: "已知函数 $f(x)$ 在 $(-\\infty, +\\infty)$ 上可微，且 $\\left|f'(x)\\right| \\lt mf(x)$（$0 \\lt m \\lt 1$），任取实数 $a_1$，定义 $a_{n+1} = \\ln f(a_n)$（$n = 1, 2, \\cdots$）. 证明：\n（1）方程 $x = \\ln f(x)$ 在 $(-\\infty, +\\infty)$ 上必有唯一实根 $\\xi$；\n（2）数列 $\\{a_n\\}$ 的极限就是（1）中的 $\\xi$.",
    answerHTML: "<b>解：</b>\n（1）令 $\\varphi(x) = \\ln f(x) - x$，$x \\in (-\\infty, +\\infty)$，则 $\\varphi'(x) = \\dfrac{f'(x)}{f(x)} - 1 \\in (-m - 1, m - 1)$.\n当 $x \\gt 0$ 时，根据拉格朗日中值定理有 $\\varphi(x) = \\varphi(0) + \\varphi'(\\xi_1)x lt  \\varphi(0) + (m - 1)x$，$\\xi_1 \\in (0, x)$，于是 $\\lim_{x \\to +\\infty} \\varphi(x) \\le \\lim_{x \\to +\\infty}[\\varphi(0) + (m - 1)x] = -\\infty$，\n于是存在 $N_1 \\gt 0$，使得 $\\varphi(N_1) \\lt 0$.\n当 $x \\lt 0$ 时，根据拉格朗日中值定理有 $\\varphi(x) = \\varphi(0) + \\varphi'(\\xi_2)x gt  \\varphi(0) + (m - 1)x$，$\\xi_2 \\in (x, 0)$，于是 $\\lim_{x \\to -\\infty} \\varphi(x) \\ge \\lim_{x \\to -\\infty}[\\varphi(0) + (m - 1)x] = +\\infty$，\n于是存在 $N_2 \\lt 0$，使得 $\\varphi(N_2) \\gt 0$.\n又 $\\varphi(x)$ 在 $[N_2, N_1]$ 上连续，根据零点定理，必存在 $\\xi \\in (N_2, N_1) \\subset (-\\infty, +\\infty)$，使得 $\\varphi(\\xi) = 0$，即 $\\xi = \\ln f(\\xi)$. 又 $\\varphi'(x) \\lt 0$，于是 $\\xi$ 唯一。\n（2）因为 $|a_{n+1} - \\xi| = |\\ln f(a_n) - \\ln f(\\xi)| = \\left|\\dfrac{f'(\\eta)}{f(\\eta)}\\right|(a_n - \\xi)$，\n$lt  m|a_n - \\xi| \\le m^{2}|a_{n-1} - \\xi| lt  \\cdots lt  m^{n}|a_1 - \\xi| \\to 0$（$0 \\lt m \\lt 1$），\n其中 $\\eta$ 介于 $\\xi$、$a_n$ 之间，所以 $\\lim_{n \\to \\infty} a_n = \\xi$.",
  },
  /* ---------------- 数列证明例12 --- */
  {
    id: '数列证明例12',
    originalNo: '数列证明例12',
    chapter: '1',
    pageNo: '64',
    type: '解答',
    isRealExam: false,
    problemHTML: "设当 $a \\le x \\le b$ 时，$a \\le f(x) \\le b$，并设存在常数 $k$，$0 \\le k \\lt 1$，对于 $[a, b]$ 上的任意两点 $x_1$ 与 $x_2$，都有 $|f(x_1) - f(x_2)| \\le k|x_1 - x_2|$. 证明：\n（1）存在唯一的 $\\xi \\in [a, b]$ 使 $f(\\xi) = \\xi$；\n（2）对于任意给定的 $x_1 \\in [a, b]$，定义 $x_{n+1} = f(x_n)$，$n = 1, 2, \\cdots$，则 $\\lim_{n \\to \\infty} x_n$ 存在，且 $\\lim_{n \\to \\infty} x_n = \\xi$.",
    answerHTML: "<b>解析：</b>\n（1）由 $|f(x_1) - f(x_2)| \\le k|x_1 - x_2|$，对于任意固定的 $x_0 \\in [a, b]$ 作为其中的 $x_2$，并将 $x_1$ 记为 $x$，于是有 $|f(x) - f(x_0)| \\le k|x - x_0|$，\n当 $x \\to x_0$ 时，$|f(x) - f(x_0)| \\to 0$，于是 $\\lim_{x \\to x_0} f(x) = f(x_0)$，可知 $f(x)$ 在 $x_0 \\in [a, b]$ 处连续，由 $x_0$ 的任意性，知 $f(x)$ 在 $[a, b]$ 上连续。\n令 $\\varphi(x) = f(x) - x$，则 $\\varphi(a) = f(a) - a \\ge 0$，$\\varphi(b) = f(b) - b \\le 0$.\n若上述两个不等式中至少有一个等号成立，例如 $\\varphi(a) = 0$，则取 $\\xi = a \\in [a, b]$，有 $\\varphi(\\xi) = f(\\xi) - \\xi = 0$.\n若上述两个不等式中无一个等号成立，即 $\\varphi(a) = f(a) - a gt  0$，$\\varphi(b) = f(b) - b lt  0$. 于是由连续函数介值定理，存在 $\\xi \\in (a, b)$，使得 $\\varphi(\\xi) = f(\\xi) - \\xi = 0$.\n再证唯一性. 用反证法证明. 假设存在 $\\eta \\in [a, b]$，$\\eta \\ne \\xi$，使得 $\\varphi(\\eta) = f(\\eta) - \\eta = 0$. 于是 $f(\\eta) - f(\\xi) = \\eta - \\xi$，\n则 $|\\eta - \\xi| = |f(\\eta) - f(\\xi)| \\le k|\\eta - \\xi|$，即 $(1 - k)|\\eta - \\xi| \\le 0$.\n但因 $1 - k \\gt 0$，$|\\eta - \\xi| \\gt 0$，导致矛盾，所以 $\\eta = \\xi$，证明了唯一性。\n（2）为证 $\\lim_{n \\to \\infty} x_n = \\xi$，考虑 $|x_n - \\xi| = |f(x_{n-1}) - f(\\xi)| \\le k|x_{n-1} - \\xi| \\le \\cdots \\le k^{n-1}|x_1 - \\xi|$，\n其中 $x_1$ 与 $\\xi$ 都是确定的值。\n所以当 $n \\to \\infty$ 时，$|x_n - \\xi| \\to 0$，从而证明了 $\\lim_{n \\to \\infty} x_n$ 存在，且 $\\lim_{n \\to \\infty} x_n = \\xi$. 证毕.",
  },
  /* ---------------- 数列证明例14 --- */
  {
    id: '数列证明例14',
    originalNo: '数列证明例14',
    chapter: '1',
    pageNo: '65',
    type: '单选',
    isRealExam: false,
    problemHTML: "已知数列 $\\{x_n\\}$ 满足 $x_{n+2} - \\dfrac{4}{3}x_{n+1} + \\dfrac{1}{3}x_n = 0$，$n = 1, 2, 3, \\cdots$，且 $x_1 = 1$，$x_2 = 2$，则 $\\{x_n\\}$ 收敛于（　　）\n（A）$1$　　（B）$-1$　　（C）$\\dfrac{5}{2}$　　（D）$-\\dfrac{5}{2}$",
    answerHTML: "<b>答：选 C。</b>\n<b>解析：</b>$x_{n+2} - x_{n+1} = \\dfrac{1}{3}\\left(x_{n+1} - x_n\\right)$，即 $\\dfrac{x_{n+2} - x_{n+1}}{x_{n+1} - x_n} = \\dfrac{1}{3}$.\n令 $y_n = x_{n+1} - x_n$，则 $\\{y_n\\}$ 是以 $\\dfrac{1}{3}$ 为公比的等比数列，$y_1 = x_2 - x_1 = 1$，且当 $n \\ge 2$ 时，\n$x_n = x_1 + (x_2 - x_1) + (x_3 - x_2) + \\cdots + (x_n - x_{n-1})$\n$= x_1 + y_1 + y_2 + \\cdots + y_{n-1}$\n$= 1 + 1\\left(1 + \\dfrac{1}{3} + \\dfrac{1}{3^{2}} + \\cdots + \\dfrac{1}{3^{n-2}}\\right)$\n$= 1 + \\dfrac{1}{1 - \\dfrac{1}{3}} = 1 + \\dfrac{3}{2}\\left(1 - \\dfrac{1}{3^{n-1}}\\right)$\n故 $\\lim_{n \\to \\infty} x_n = \\lim_{n \\to \\infty}\\left[1 + \\dfrac{3}{2}\\left(1 - \\dfrac{1}{3^{n-1}}\\right)\\right] = \\dfrac{5}{2}$."
  }
];
/* 题库版本号：每次修正/新增题目后 +1。app.js 的 init() 会比对本地已装版本，
   不一致就按本文件重灌 IndexedDB，保证浏览器里「所见即种子」。 */
window.SEED_VERSION = 21;
