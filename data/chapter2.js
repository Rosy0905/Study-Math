/* ==========================================================================
   data/chapter2.js —— 第2章 一元微分学（30 道）
   题目与解析录自《高数强化答案合订本》(没咋了) PDF p71-118。
   题号取自《没咋了强化好题本记录.docx》第二章。
   pageNo =《高数强化合订本数三》书印页码（该册页码印在页眉，PDF页 = 书印页 + 5）。
   书写规范与第一章一致：纯文本 + \n 换行；卡片左侧已有题号标签，题面不重复题号；
   答案开头 <b>答：X</b> / <b>解：</b> 之后必须换行，正文不粘在标签后。

   【（补充过程）= 原书完全没有解答过程】目前仅 2 道，经逐题读图核实：
     2.10 —— 原书写「具体过程见视频课」
     2.18 —— 原书写「详细解析建议听视频课」
     2.51 —— 原书写「具体见视频课程」

   ⚠️ 原书解析常跨页（如 2.7 在 p73 顶部、2.68 在 p105 顶部、2.98 在 p118 顶部），
   判定「有无过程」前必须先看下一页顶部，别只看本页页尾。

   \lt / \gt 铁律：公式内禁用裸尖括号，关系符写成「命令 + 空格」。
   ========================================================================== */
window.SEED_PROBLEMS = window.SEED_PROBLEMS || [];
window.SEED_PROBLEMS.push(
  /* ---------------- 2.7  书印 P68 ---------------- */
  {
    id: "2.7",
    originalNo: "2.7",
    chapter: "2",
    pageNo: "68",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2000 数三）设函数 $f(x)$ 在点 $x=a$ 处可导，则函数 $|f(x)|$ 在点 $x=a$ 处不可导的充分条件是（　　）\n（A）$f(a)=0$ 且 $f'(a)=0$\n（B）$f(a)=0$ 且 $f'(a)\\neq 0$\n（C）$f(a)\\gt 0$ 且 $f'(a)\\gt 0$\n（D）$f(a)\\lt 0$ 且 $f'(a)\\lt 0$",
    answerHTML: "<b>答：B</b>\n<b>第1步：</b>由 $f(x)$ 在 $x=a$ 处可导知 $f'(a)$ 存在。\n<b>第2步：</b>当 $f(a)=0$ 且 $f'(a)\\ne 0$ 时，考察 $|f(x)|$ 在 $x=a$ 处的左右导数。\n由 $f'(a)=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}$ 及 $f(a)=0$，把 $x\\to a^-$ 的极限取相反数，得\n$$\\lim_{x\\to a^-}\\frac{|f(x)|-|f(a)|}{x-a}=-\\lim_{x\\to a^-}\\left|\\frac{f(x)-f(a)}{x-a}\\right|=-|f'(a)|,$$\n$$\\lim_{x\\to a^+}\\frac{|f(x)|-|f(a)|}{x-a}=\\lim_{x\\to a^+}\\left|\\frac{f(x)-f(a)}{x-a}\\right|=|f'(a)|.$$\n<b>第3步：</b>因 $f'(a)\\ne 0$，故 $|f'(a)|\\gt 0$，于是左导数 $-|f'(a)|$ 与右导数 $|f'(a)|$ 不相等。\n由导数存在充要条件，$|f(x)|$ 在 $x=a$ 处<b>不可导</b>。\n<b>结论：</b>（B）$f(a)=0$ 且 $f'(a)\\ne 0$ 是 $|f(x)|$ 在 $x=a$ 处不可导的充分条件，选（B）。\n<b>易错提醒：</b>本题问的是 $|f(x)|$（外面套了绝对值）而非 $f(x)$ 本身。\n另外不能只看「$f$ 在 $a$ 可导」就断言 $|f|$ 也可导 —— 绝对值会在 $f$ 变号处产生尖点，\n两侧导数互为相反数（左导数是右导数的相反数，因为分母 $x-a$ 变号）。",
  },
  /* ---------------- 2.10  书印 P69 ---------------- */
  {
    id: "2.10",
    originalNo: "2.10",
    chapter: "2",
    pageNo: "69",
    type: "单选",
    isRealExam: false,
    problemHTML: "函数 $f(x)=(x^2-x-2)|x^3-x|$ 不可导点的个数是（　　）\n（A）$3$　　（B）$2$　　（C）$1$　　（D）$0$",
    answerHTML: "<b>答：（补充过程）B</b>\n因 $f(x)=(x^2-x-2)|x^3-x|\\ge 0$，故零点只能是 $|x^3-x|=0$ 即 $x=-1,0,1$ 三点。\n用\"乘积不可导\"判定：设 $g(x)=|x^3-x|$，$g'(x)=\\mathrm{sgn}(x^3-x)(3x^2-1)$。\n$x=-1$：$g(-1)=0$，$g'(-1)=-2\\neq 0$，而 $(x^2-x-2)|_{-1}=1+1-2=0$，故 $f'(-1)=(x^2-x-2)\\big|_{-1}\\cdot g'(-1)=0\\cdot(-2)=0$，即 $f$ 在 $x=-1$ 处可导（此处 $g$ 本身可导，无需讨论）→ <b>可导</b>。\n$x=0$：$g(0)=0$，$g'(0)=\\mathrm{sgn}(-1)\\cdot(-1)=1$。由乘积法则 $f'(0)=(x^2-x-2)\\big|_{0}\\cdot g'(0)+g(0)\\cdot(\\text{前因子导数})=(-2)\\cdot 1+0=-2\\neq 0$ → <b>可导</b>。\n$x=1$：同理 $g'(1)=2\\neq 0$，$f'(1)=(-2)\\cdot 2+0=-4\\neq 0$ → <b>可导</b>。\n综上三个零点处均可导，$f(x)$ 在 $\\mathbb{R}$ 上处处可导，$f'(x)\\ne 0$，不可导点不存在故选（B）。\n注：$x^2-x-2=(x-2)(x+1)$ 的零点 $x=2,-1$ 中，$x=2$ 处 $g(2)=|6|=6\\ne 0$ 且 $g$ 可导，故 $f$ 可导。",
  },
  /* ---------------- 2.15  书印 P71 ---------------- */
  {
    id: "2.15",
    originalNo: "2.15",
    chapter: "2",
    pageNo: "71",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2015 数二）设函数 $f(x)=\\begin{cases}\\dfrac{x^\\alpha\\cos\\dfrac{1}{x}}{x}, & x\\gt 0,\\\\ 0, & x\\le 0,\\end{cases}$（$\\alpha\\gt 0,\\beta\\gt 0$），若 $f'(x)$ 在 $x=0$ 处连续，则（　　）\n（A）$\\alpha-\\beta\\gt 1$　　（B）$0\\lt \\alpha-\\beta\\le 1$\n（C）$\\alpha-\\beta\\gt 2$　　（D）$0\\lt \\alpha-\\beta\\le 2$",
    answerHTML: "<b>答：A</b>\n当 $x\\to 0$ 时，$f'(0)=\\lim_{x\\to 0^+}\\dfrac{x^\\alpha\\cos\\dfrac{1}{x}}{x}=\\lim_{x\\to 0^+}x^{\\alpha-1}\\cos\\dfrac{1}{x}$，该极限存在当且仅当 $\\alpha-1\\gt 0$，即 $\\alpha\\gt 1$，此时 $f'(0)=0$。显然 $f'(0)=0$。\n当 $x\\gt 0$ 时，$f'(x)=\\alpha x^{\\alpha-2}\\cos\\dfrac{1}{x}+\\beta x^{\\alpha-\\beta-1}\\sin\\dfrac{1}{x}$，\n$$\\lim_{x\\to 0}f'(x)=\\lim_{x\\to 0}\\beta x^{\\alpha-\\beta}\\sin\\dfrac{1}{x}=(\\alpha>1).$$\n要使上式极限存在且为 $0$，应当仅当 $\\alpha-1-\\beta\\gt 0$，即 $\\alpha-\\beta\\gt 1$。",
  },
  /* ---------------- 2.16  书印 P71 ---------------- */
  {
    id: "2.16",
    originalNo: "2.16",
    chapter: "2",
    pageNo: "71",
    type: "解答",
    isRealExam: true,
    problemHTML: "（1997 数一）设 $f(x)$ 连续，$\\varphi(x)=\\displaystyle\\int_0^x f(x)\\mathrm{d}t$，且 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x}=A$（$A$ 为常数），求 $\\varphi'(x)$ 并讨论 $\\varphi'(x)$ 在点 $x=0$ 处的连续性。",
    answerHTML: "<b>解：</b>\n由 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x}=A$ 可知，分母趋于零，而极限存在，故 $\\lim_{x\\to 0}f(x)=0$。\n由 $f(x)$ 在 $x=0$ 连续知 $f(0)=\\lim_{x\\to 0}f(x)=0$。于是 $\\varphi(0)=\\displaystyle\\int_0^0 f(t)\\mathrm{d}t=f(0)=0$。\n对 $\\varphi(x)$ 进行恒等变形：\n$$\\varphi(x)=\\int_0^x f(t)\\mathrm{d}t\\overset{u=xt}{=}\\int_0^x f(u)\\cdot x\\,\\mathrm{d}u=\\frac{1}{x}\\int_0^x f(u)\\mathrm{d}u\\quad(x\\ne 0).$$\n当 $x\\ne 0$ 时，\n$$\\varphi'(x)=\\left[\\int_0^x f(u)\\mathrm{d}u\\right]'\\cdot\\frac{1}{x}-\\frac{1}{x^2}\\int_0^x f(u)\\mathrm{d}u=\\frac{f(x)}{x}-\\frac{1}{x^2}\\int_0^x f(u)\\mathrm{d}u.$$\n当 $x=0$ 时，根据导数的定义计算 $\\varphi'(0)$。由洛必达法则，\n$$\\lim_{x\\to 0}\\frac{\\varphi(x)-\\varphi(0)}{x-0}=\\lim_{x\\to 0}\\frac{\\dfrac{1}{x}\\int_0^x f(u)\\mathrm{d}u-0}{x}=\\lim_{x\\to 0}\\frac{\\int_0^x f(u)\\mathrm{d}u}{x^2}=\\frac{A}{2}.$$\n因此\n$$\\varphi'(x)=\\begin{cases}\\dfrac{xf(x)-\\displaystyle\\int_0^x f(u)\\mathrm{d}u}{x^2}, & x\\ne 0,\\\\[1em] \\dfrac{A}{2}, & x=0.\\end{cases}$$\n计算 $\\displaystyle\\lim_{x\\to 0}\\varphi'(x)$：\n$$\\lim_{x\\to 0}\\varphi'(x)=\\lim_{x\\to 0}\\frac{xf(x)-\\displaystyle\\int_0^x f(u)\\mathrm{d}u}{x^2}=\\lim_{x\\to 0}\\frac{f(x)}{x}-\\lim_{x\\to 0}\\frac{1}{x^2}\\int_0^x f(u)\\mathrm{d}u=A-\\frac{A}{2}=\\frac{A}{2}.$$\n由于 $\\displaystyle\\lim_{x\\to 0}\\varphi'(x)=\\varphi'(0)$，故 $\\varphi'(x)$ 在 $x=0$ 处连续。",
  },
  /* ---------------- 2.18  书印 P72 ---------------- */
  {
    id: "2.18",
    originalNo: "2.18",
    chapter: "2",
    pageNo: "72",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2006 数一）设函数 $y=f(x)$ 具有二阶导数，且 $f'(x)\\gt 0,\\ f''(x)\\gt 0$。$\\Delta x$ 为自变量 $x$ 在点 $x_0$ 处的增量，$\\Delta y$ 与 $\\mathrm{d}y$ 分别为 $f(x)$ 在点 $x_0$ 处对应的增量与微分。若 $\\Delta x\\gt 0$，则（　　）\n（A）$0\\lt \\mathrm{d}y\\lt \\Delta y$　　（B）$0\\lt \\Delta y\\lt \\mathrm{d}y$\n（C）$\\Delta y\\lt \\mathrm{d}y\\lt 0$　　（D）$\\mathrm{d}y\\lt \\Delta y\\lt 0$",
    answerHTML: "<b>答：（补充过程）A</b>\n由拉格朗日中值定理可得，\n$$\\Delta y=f(x+\\Delta x)-f(x)=f'(\\xi)\\Delta x,$$\n其中 $\\xi\\in(x,x+\\Delta x)$。\n由微分的定义，$\\mathrm{d}y=f'(x)\\mathrm{d}x=f'(x)\\Delta x\\gt 0$，又因为 $f'(x)\\gt 0$，所以 $f'(x)$ 单调增加，$f'(x)\\lt f'(\\xi)$。于是 $\\mathrm{d}y=f'(x)\\Delta x\\lt f'(\\xi)\\Delta x=\\Delta y$。\n因此，$0\\lt \\mathrm{d}y\\lt \\Delta y$。应选（A）。",
  },
  /* ---------------- 2.19  书印 P73 ---------------- */
  {
    id: "2.19",
    originalNo: "2.19",
    chapter: "2",
    pageNo: "73",
    type: "填空",
    isRealExam: true,
    problemHTML: "（2012 数三）设函数 $f(x)=\\begin{cases}\\ln\\sqrt{x}, & x\\ge 1,\\\\ 2x-1, & x\\lt 1,\\end{cases}$，$y=f(f(x))$，则 $\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=\\mathrm{e}}=$ ________．",
    answerHTML: "<b>答：$\\dfrac{1}{\\mathrm{e}}$</b>\n将 $y=f(f(x))$ 可看作 $y=f(u)$，与 $u=f(x)$ 的复合。当 $x=\\mathrm{e}$ 时，\n$$u=f(\\mathrm{e})=\\ln\\sqrt{\\mathrm{e}}=\\frac{1}{2}\\ln\\mathrm{e}=\\frac{1}{2}.$$\n由复合函数求导法则知\n$$\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=\\mathrm{e}}=\\left.f'\\left(\\frac{1}{2}\\right)\\cdot f'(\\mathrm{e})\\right.\\times 2\\left.\\frac{\\mathrm{d}u}{\\mathrm{d}x}\\right|_{x=\\mathrm{e}}=\\frac{1}{\\mathrm{e}}.$$",
  },
  /* ---------------- 2.20  书印 P73 ---------------- */
  {
    id: "2.20",
    originalNo: "2.20",
    chapter: "2",
    pageNo: "73",
    type: "单选",
    isRealExam: false,
    problemHTML: "（合工大超越题）设函数 $f(x)$、$g(x)$ 在 $(-\\infty,+\\infty)$ 内有定义，$f(x)$ 为可导函数，且 $f(x)\\ne 0$，$g(x)$ 有不可导点，则下列函数中，必有不可导点的函数为（　　）．\n（A）$g^2(x)$　　（B）$\\dfrac{g(x)}{f(x)}$　　（C）$f(g(x))$　　（D）$g(f(x))$",
    answerHTML: "<b>答：B</b>\n取 $g(x)=|x|$，则 $g(x)$ 有不可导点，但 $g^2(x)=x^2$ 可导，（A）不正确；取 $f(x)=1$，则 $f(g(x))=\\mathrm{Lg}|f(x)|=g(1)$ 均可导，（C）和（D）都不正确；如果 $\\dfrac{g(x)}{f(x)}$ 可导，则 $g(x)=\\dfrac{g(x)}{f(x)}\\cdot f(x)$ 可导，矛盾，故 $\\dfrac{g(x)}{f(x)}$ 不可导。选（B）。",
  },
  /* ---------------- 2.43  书印 P88 ---------------- */
  {
    id: "2.43",
    originalNo: "2.43",
    chapter: "2",
    pageNo: "88",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2023 数二）设函数 $f(x)=(x^2+a)\\mathrm{e}^x$，若 $f(x)$ 没有极值点，但曲线 $y=f(x)$ 有拐点，则 $a$ 的取值范围是（　　）．\n（A）$[0,1)$　　（B）$[1,+\\infty)$　　（C）$[1,2)$　　（D）$[2,+\\infty)$",
    answerHTML: "<b>答：C</b>\n分别计算 $f'(x)$ 与 $f''(x)$．\n$$f'(x)=(x^2+a)\\mathrm{e}^x+2x\\mathrm{e}^x=(x^2+2x+a)\\mathrm{e}^x,$$\n$$f''(x)=\\left\\{(x^2+2x+a)\\mathrm{e}^x\\right\\}'+\\left\\{(2x+2)\\mathrm{e}^x\\right\\}=\\left\\{x^2+4x+a+2\\right\\}\\mathrm{e}^x.$$\n由于 $\\mathrm{e}^x\\gt 0$，故 $f'(x)$ 和 $f''(x)$ 的符号分别由 $x^2+2x+a$ 和 $x^2+4x+a+2$ 的符号决定。\n由于 $f(x)$ 二阶可导，故由极值的第一充分条件可知，$f(x)$ 没有极值点说明 $f'(x)$ 不变号，这意味着 $x^2+2x+a=0$ 的判别式 $\\Delta=4-4a\\le 0$，解得 $a\\ge 1$。\n另一方面，由于 $f(x)$ 二阶可导，故由拐点的第一充分条件可知，曲线 $y=f(x)$ 有拐点说明 $f''(x)$ 变号，这意味着 $f'(x)=0$ 有两个不同实根。由此可知 $x^2+4x+a+2=0$ 的判别式 $\\Delta=16-4a-8\\gt 0$，解得 $a\\lt 2$。\n取 $[1,+\\infty)$ 与 $(-\\infty,2)$ 的交集可得，$a\\in[1,2)$，应选（C）。",
  },
  /* ---------------- 2.44  书印 P88 ---------------- */
  {
    id: "2.44",
    originalNo: "2.44",
    chapter: "2",
    pageNo: "88",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2001 数二）曲线 $y=(x-1)^2(x-3)^2$ 的拐点个数为（　　）．\n（A）$0$　　（B）$1$　　（C）$2$　　（D）$3$",
    answerHTML: "<b>答：C</b>\n（法一）分别计算 $y'$、$y''$．\n$$y'=2(x-1)(x-3)^2+2(x-1)^2(x-3)=4(x-1)(x-2)(x-3).$$\n$$y''=4\\left\\{(x-1)(x-3)+(x-2)\\left[(x-1)(x-3)\\right]'\\right\\}=4(3x^2-12x+11).$$\n由于 $\\Delta=12^2-4\\times 3\\times 11\\gt 0$，故 $y''=0$ 有两个实根，记为 $x_1$、$x_2$，于是 $y'=12(x-x_1)(x-x_2)$．\n抛物线 $y'=12(x-x_1)(x-x_2)$ 开口朝上，与 $x$ 轴有两个交点。\n不妨设 $x_1\\lt x_2$，则当 $x\\lt x_1$ 或 $x\\gt x_2$ 时，$y'\\gt 0$；当 $x_1\\lt x\\lt x_2$ 时，$y'\\lt 0$．$y'$ 在 $x_1$ 和 $x_2$ 两侧均变号。\n因此，$y=(x-1)^2(x-3)^2$ 有两个拐点应选（C）。\n（法二）$y(x)$ 是多项式，从而二阶可导，其拐点横坐标必然满足 $y''(x)=0$．\n由 $y$ 的表达式可知，$x=1$ 和 $x=3$ 是 $y(x)$ 的两个零点。\n由法一可知，$x=1$，$x=2$，$x=3$ 为 $y'$ 的三个零点。由于 $y'$ 为三次多项式，故 $y'$ 为二次多项式，至多有两个零点，即 $y=y(x)$ 至多有两个拐点。\n下面证明，存在 $x_1\\in(1,2)$，$x_2\\in(2,3)$，使得 $y''$ 在这两点的两侧均变号。\n反证法．\n假设不存在 $x_1\\in(1,2)$，使得 $y''$ 在该点两侧变号，由于 $y''$ 是多项式，故 $y''$ 连续．\n若 $y''$ 在 $(1,2)$ 内不变号，则 $y''$ 在 $(1,2)$ 内单调，但 $y''(1)=y''(2)=0$，从而 $y''=0$，矛盾．\n因此，存在 $x_1\\in(1,2)$，使得 $y''$ 在这两点的两侧均变号．\n同理可得，存在 $x_2\\in(2,3)$，$y''$ 在该点两侧变号．\n因此，$y=y(x)$ 有且仅有两个拐点应选（C）。",
  },
  /* ---------------- 2.45  书印 P88 ---------------- */
  {
    id: "2.45",
    originalNo: "2.45",
    chapter: "2",
    pageNo: "88",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2011 数一）曲线 $y=(x-1)(x-2)^2(x-3)^2(x-4)^2$ 的拐点是（　　）．\n（A）$(1,0)$　　（B）$(2,0)$　　（C）$(3,0)$　　（D）$(4,0)$",
    answerHTML: "<b>答：选（C）．</b>\n先给出一个结论：\n设 $x_0$ 是方程 $f(x)=0$ 的 $n$ 重根，即 $f(x)=(x-x_0)^n g(x)$ 且 $g(x_0)\\ne 0$．若 $g(x)$ 具有 $n$ 阶导数，则\n（1）当 $n=1$ 时，$f'(x_0)\\ne 0$，即 $x_0$ 不是 $f'(x)=0$ 的根；\n（2）当 $n\\ge 2$ 时，$x_0$ 是 $f'(x)=0$ 的 $n-1$ 重根．依此类推，$x_0$ 是 $f^{(k)}(x)=0$ 的 $n-k$ 重根，$k=1$，$2$，$\\cdots$，$n-1$，且 $x_0$ 不是 $f^{(n)}(x)=0$ 的根。\n上述结论可简单表述为，<b>求一次导，根的重量减少一次</b>。\n令 $f(x)=(x-1)(x-2)^2(x-3)^2(x-4)^2$，则 $x=2$，$3$，$4$ 作为 $f(x)=0$ 的根的重量分别为 $2$，$3$，$4$，从而由分析中的性质知，\n$$f'(2)\\ne 0,\\quad f'(3)=0,\\quad f'(3)\\ne 0,\\quad f'(4)=f''(4)=0,\\quad f'''(4)\\ne 0.$$\n再由拐点的判别法 3 知，点 $(3,0)$ 是拐点，故选（C）。\n对于其他选项，由拐点的判别法 1 知，点 $(2,0)$ 不是拐点；由拐点的判别法 4 知，点 $(4,0)$ 不是拐点。\n对于 $x=1$，令 $g(x)=(x-2)^2(x-3)^2(x-4)^2$，则 $f(x)=(x-1)g(x)$，从而\n$$f'(x)=g(x)+(x-1)g'(x),\\qquad f''(x)=2g'(x)+(x-1)g''(x),$$\n故\n$$f'(1)=2g'(1)=2\\big[2(x-2)(x-3)^2(x-4)^4+3(x-2)^2(x-3)(x-4)^4+4(x-2)^2(x-3)^2(x-4)^3\\big]\\Big|_{x=1}$$\n$$=2\\big[2(-1)(-2)^2(-3)^4+3(-1)^2(-3)(-3)^2+4(-1)^2(-3)^2(-3)^3\\big]$$\n$$=2\\big(2^4\\cdot 3^4+2^2\\cdot 3^2+2^5\\cdot 3^3\\big)>0.$$\n由拐点的判别法 1 知，点 $(1,0)$ 不是拐点。",
  },
  /* ---------------- 2.47  书印 P89 ---------------- */
  {
    id: "2.47",
    originalNo: "2.47",
    chapter: "2",
    pageNo: "89",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李艳芳 3 套卷）设函数 $f(x)=\\begin{cases}-x\\ln x, & x\\gt 0,\\\\ 0, & x=0,\\ \\arctan\\left(x+\\dfrac{1}{x}\\right)+\\dfrac{\\pi}{2}, & x\\lt 0,\\end{cases}$ 则（　　）\n（A）$f(x)$ 有两个极大值点，无极小值点\n（B）$f(x)$ 有一个极大值点，一个极小值点\n（C）$f(x)$ 有两个极大值点，一个极小值点\n（D）$f(x)$ 有一个极大值点，两个极小值点",
    answerHTML: "<b>答：C</b>\n由于 $\\displaystyle\\lim_{x\\to 0^-}f(x)=\\lim_{x\\to 0^-}(-x^3\\ln x)=0$，$\\displaystyle\\lim_{x\\to 0^+}f(x)=\\lim_{x\\to 0^+}\\arctan\\left(x+\\dfrac{1}{x}\\right)+\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{2}=0$，故 $f(x)$ 在 $x=0$ 处连续。\n计算 $f'(x)$．当 $x\\gt 0$ 时，\n$$f'(x)=-3x^2\\ln x-x^2\\cdot\\frac{1}{x}=-x^2(3\\ln x+1).$$\n当 $0\\lt x\\lt \\mathrm{e}^{-\\frac{1}{3}}$ 时，$f'(x)\\gt 0$，$f(x)$ 单调增加；当 $x\\gt \\mathrm{e}^{-\\frac{1}{3}}$ 时 $f'(x)\\lt 0$，$f(x)$ 单调减少。\n又 $f(x)$ 在 $x=\\mathrm{e}^{-\\frac{1}{3}}$ 处连续，故由极值的第一充分条件可知 $x=\\mathrm{e}^{-\\frac{1}{3}}$ 为 $f(x)$ 的极大值点。\n当 $x\\lt 0$ 时，\n$$f'(x)=\\frac{1-\\dfrac{1}{x^2}}{1+\\left(x+\\dfrac{1}{x}\\right)^2}=\\frac{x^2-1}{x^4+3x^2+1}.$$\n当 $x\\lt -1$ 时，$f'(x)\\gt 0$，$f(x)$ 单调增加；当 $-1\\lt x\\lt 0$ 时，$f'(x)\\lt 0$，$f(x)$ 单调减少。\n又 $f(x)$ 在 $x=-1$ 处连续，故由极值的第一充分条件可知 $x=-1$ 为 $f(x)$ 的极大值点。\n由前面的计算可知，当 $-1\\lt x\\lt 0$ 时，$f'(x)\\lt 0$，$f(x)$ 单调减少。当 $0\\lt x\\lt \\mathrm{e}^{-\\frac{1}{3}}$ 时，$f'(x)\\gt 0$，$f(x)$ 单调增加。\n由极值的第一充分条件结合 $f(x)$ 在 $x=0$ 处连续可知，$x=0$ 为 $f(x)$ 的极小值点。\n综上所述，应选（C）。\n<b>注：</b>实际上 $x=0$ 为 $f(x)$ 的不可导点。\n$$\\lim_{x\\to 0^-}\\frac{f(x)-f(0)}{x-0}=\\lim_{x\\to 0^-}\\frac{\\arctan\\left(x+\\dfrac{1}{x}\\right)+\\dfrac{\\pi}{2}}{x}\\overset{\\text{洛必达}}{\\longrightarrow}\\lim_{x\\to 0^-}\\frac{x^2-1}{x^4+3x^2+1}=-1,$$\n$$\\lim_{x\\to 0^+}\\frac{f(x)-f(0)}{x-0}=\\lim_{x\\to 0^+}(-x^3\\ln x)=0.$$\n由于 $f(x)$ 在 $x=0$ 处的左、右导数不相等，故 $f(x)$ 在 $x=0$ 处不可导。",
  },
  /* ---------------- 2.48  书印 P90 ---------------- */
  {
    id: "2.48",
    originalNo: "2.48",
    chapter: "2",
    pageNo: "90",
    type: "解答",
    isRealExam: false,
    problemHTML: "（超越 5 套卷）设函数 $F(x)=\\displaystyle\\int_0^x\\left(2t-x\\right)\\mathrm{e}^{t^3}\\mathrm{d}t$，则（　　）．\n（A）$F(0)$ 是 $F(x)$ 的一个极大值\n（B）$F(0)$ 是 $F(x)$ 的一个极小值\n（C）点 $(0,F(0))$ 是曲线 $y=F(x)$ 的一个拐点，但 $F(0)$ 不是 $F(x)$ 的极值\n（D）点 $(0,F(0))$ 不是曲线 $y=F(x)$ 的一个拐点，$F(0)$ 也不是 $F(x)$ 的极值",
    answerHTML: "<b>答：C</b>\n第1步：记 $I(x)=\\displaystyle\\int_0^x\\mathrm{e}^{t^3}\\mathrm{d}t$，则 $F(x)=2\\displaystyle\\int_0^x t\\mathrm{e}^{t^3}\\mathrm{d}t-xI(x)$．\n第2步：求一阶导（$x$ 同时在系数里，须对 $[-xI(x)]$ 用乘积法则）：\n$$F'(x)=2x\\mathrm{e}^{x^3}-\\left[I(x)+xI'(x)\\right]=2x\\mathrm{e}^{x^3}-I(x)-x\\mathrm{e}^{x^3}=x\\mathrm{e}^{x^3}-I(x),$$\n其中 $I'(x)=\\mathrm{e}^{x^3}$．\n第3步：求二阶导：\n$$F''(x)=\\left(x\\mathrm{e}^{x^3}\\right)'-I'(x)=\\mathrm{e}^{x^3}+3x^3\\mathrm{e}^{x^3}-\\mathrm{e}^{x^3}=3x^3\\mathrm{e}^{x^3}.$$\n第4步：判拐点。因 $\\mathrm{e}^{x^3}\\gt 0$ 恒成立，$F''(x)$ 的符号由 $x^3$ 决定：当 $x\\lt 0$ 时 $F''(x)\\lt 0$，当 $x\\gt 0$ 时 $F''(x)\\gt 0$，又 $F''(0)=0$，故 $F''$ 在 $x=0$ 两侧变号，所以 $(0,F(0))$ 是曲线 $y=F(x)$ 的一个拐点。\n第5步：判极值。由积分中值定理，$I(x)=x\\mathrm{e}^{\\xi^3}$，$\\xi$ 介于 $0$ 与 $x$ 之间，故\n$$F'(x)=x\\mathrm{e}^{x^3}-x\\mathrm{e}^{\\xi^3}=x\\left[\\mathrm{e}^{x^3}-\\mathrm{e}^{\\xi^3}\\right]>0$$\n（当 $x\\gt 0$ 时 $x\\gt 0$ 且 $\\xi\\lt x$ 故 $\\xi^3\\lt x^3$；当 $x\\lt 0$ 时 $x\\lt 0$ 且 $\\xi\\gt x$ 故 $\\xi^3\\gt x^3$，两种情形乘积均 $\\gt 0$）。所以 $F'(x)\\gt 0$ 恒成立，$F$ 严格单调增，故 $F(0)$ 不是 $F(x)$ 的极值。\n数值验证：$F''(x)=3x^3\\mathrm{e}^{x^3}$ 在 $x=\\mp0.1$ 处为 $\\mp0.0030$（两侧变号）；$F'(0.1)\\approx+0.000075$、$F'(0.5)\\approx+0.0504$、$F'(1.0)\\approx+1.376$，恒为正。",
  },
  /* ---------------- 2.51  书印 P91 ---------------- */
  {
    id: "2.51",
    originalNo: "2.51",
    chapter: "2",
    pageNo: "91",
    type: "解答",
    isRealExam: false,
    problemHTML: "（2023 数一改编）设函数 $y=f(x)$ 由\n$$\\begin{cases}x=2t+|t|\\\\ y=|t|\\sin t\\end{cases}$$\n确定，则 $x=0$ 处（　　）\n（A）既取极值，也是拐点　　（B）取极值，但不是拐点\n（C）不取极值，但是拐点　　（D）既不取极值，也不是拐点",
    answerHTML: "<b>答：（补充过程）选（C）</b>\n<b>第1步：</b>先求 $x=0$ 对应的参数值。由 $x=2t+|t|=0$：\n当 $t\\ge 0$ 时 $x=3t=0$，得 $t=0$；当 $t\\lt 0$ 时 $x=2t-t=t=0$，也得 $t=0$。\n故 $x=0$ 只对应 $t=0$，此时 $y=|t|\\sin t=0$，所求点为 $(0,0)$。\n<b>第2步：</b>分左右求导（$|t|$ 在 $t=0$ 处不可导，必须分段）。\n当 $t\\gt 0$ 时：$x=3t$，$y=t\\sin t$，于是\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{\\sin t+t\\cos t}{3},\\qquad \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}=\\frac{2\\cos t-t\\sin t}{9}\\overset{t \\to 0^+}{\\longrightarrow}\\frac{2}{9}\\gt 0.$$\n当 $t\\lt 0$ 时：$x=t$，$y=-t\\sin t$，于是\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=-({\\sin t+t\\cos t}),\\qquad \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}=-(2\\cos t-t\\sin t)\\overset{t \\to 0^-}{\\longrightarrow}-2\\lt 0.$$\n<b>第3步：</b>判拐点。二阶导在 $t\\to 0^+$ 时为 $\\frac{2}{9}\\gt 0$、在 $t\\to 0^-$ 时为 $-2\\lt 0$，\n两侧异号，曲线凹凸性在 $x=0$ 处改变，故该点<b>是拐点</b>。\n<b>第4步：</b>判是否取极值。比较 $y$ 与 $y(0)=0$：\n$t\\gt 0$ 时 $y=t\\sin t\\sim t^2\\gt 0$（在点上方）；$t\\lt 0$ 时 $y=-t\\sin t\\sim -t^2\\lt 0$（在点下方）。\n两侧一正一负，函数值「穿过」而非「到达」极值，故<b>不取极值</b>。\n<b>结论：</b>不取极值但是拐点，选（C）。\n<b>数值验证：</b>$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}$ 在 $t=+10^{-4}$ 处 $\\approx+0.2222$、\n在 $t=-10^{-4}$ 处 $\\approx-2.0000$，两侧异号 ✓。",
  },
  /* ---------------- 2.52  书印 P91 ---------------- */
  {
    id: "2.52",
    originalNo: "2.52",
    chapter: "2",
    pageNo: "91",
    type: "解答",
    isRealExam: true,
    problemHTML: "（1987 数一）设 $\\displaystyle\\lim_{x\\to a}\\frac{f(x)-f(a)}{(x-a)^2}=-1$，则在 $x=a$ 处（　　）\n（A）$f(x)$ 的导数存在，且 $f'(a)=0$　　（B）$f(x)$ 取得极大值\n（C）$f(x)$ 取得极小值　　（D）$f(x)$ 的导数不存在",
    answerHTML: "<b>答：B</b>\n（法一）由 $\\displaystyle\\lim_{x\\to a}\\frac{f(x)-f(a)}{(x-a)^2}=-1$，故由极限的局部保号性可知，存在 $\\delta\\gt 0$，当 $0\\lt |x-a|\\lt \\delta$ 时，$\\dfrac{f(x)-f(a)}{(x-a)^2}\\lt 0$．\n此时 $(x-a)^2\\gt 0$，故 $f(x)-f(a)\\lt 0$．\n由极值点的定义可知，$x=a$ 是 $f(x)$ 的极大值点应选 B。\n（法二）排除法．\n取 $f(x)=-(x-a)^2$，通过计算可知，$f'(x)=-2(x-a)$，$f'(a)=0$，$f(x)$ 在 $x=a$ 处取得极大值。于是可以排除选项 A、C、D，由排除法可知，应选 B。",
  },
  /* ---------------- 2.54  书印 P92 ---------------- */
  {
    id: "2.54",
    originalNo: "2.54",
    chapter: "2",
    pageNo: "92",
    type: "解答",
    isRealExam: true,
    problemHTML: "（1996 数一）设 $f(x)$ 有二阶连续导数，且 $f'(0)=0$，$\\displaystyle\\lim_{x\\to 0}\\frac{f''(x)}{|x|}=1$，则（　　）．\n（A）$f(0)$ 是 $f(x)$ 的极大值　　（B）$f(0)$ 是 $f(x)$ 的极小值\n（C）$(0,f(0))$ 是曲线 $y=f(x)$ 的拐点　　（D）$f(0)$ 不是 $f(x)$ 的极值，$(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点",
    answerHTML: "<b>答：B</b>\n由 $\\displaystyle\\lim_{x\\to 0}\\frac{f''(x)}{|x|}=1$ 可知，$\\displaystyle\\lim_{x\\to 0}f''(x)=0$．\n又因为 $f'(x)$ 连续，所以 $f'(0)=\\displaystyle\\lim_{x\\to 0}f''(x)=0$．\n由极限的局部保号性可知，在 $x=0$ 的某个去心邻域 $(-\\delta,0)\\cup(0,\\delta)$ 内，$\\dfrac{f''(x)}{|x|}\\gt 0$，$f''(x)\\gt 0$．\n于是，$f'(x)$ 单调增加．\n又因为 $f'(0)=0$，所以当 $x\\in(-\\delta,0)$ 时，$f'(x)\\lt 0$，$f(x)$ 单调减少；当 $x\\in(0,\\delta)$ 时，$f'(x)\\gt 0$，$f(x)$ 单调增加．\n由极值的第一充分条件可知，$x=0$ 是 $f(x)$ 的极小值点，$f(0)$ 是 $f(x)$ 的极小值．应选 B．\n下面我们说明选项 C 不正确。\n由于 $f''(x)$ 在 $x=0$ 附近不变号，故 $(0,f(0))$ 不是曲线 $y=f(x)$ 的拐点选项 C 不正确。",
  },
  /* ---------------- 2.55  书印 P92 ---------------- */
  {
    id: "2.55",
    originalNo: "2.55",
    chapter: "2",
    pageNo: "92",
    type: "解答",
    isRealExam: false,
    problemHTML: "设函数 $f(x)$ 具有三阶导数，且 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)-1}{x^3}=-\\dfrac{1}{2}$，则（　　）．\n（A）$x=0$ 是函数 $f(x)$ 的极大值点　　（B）$x=0$ 是函数 $f(x)$ 的极小值点\n（C）$(0,1)$ 是曲线 $y=f(x)$ 的拐点　　（D）以上结论都不正确",
    answerHTML: "<b>答：C</b>\n当 $x\\to 0$ 时，利用 $f(x)$ 的三阶麦克劳林公式，得\n$$f(x)=f(0)+f'(0)x+\\frac{f''(0)}{2}x^2+\\frac{f'''(0)}{6}x^3+o(x^3).$$\n其中，$o(x^3)$ 是当 $x\\to 0$ 时比 $x^3$ 高阶的无穷小，代入题设等式 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)-1}{x^3}=-\\frac{1}{2}$，得\n$$\\lim_{x\\to 0}\\frac{f(0)-1+f'(0)x+\\dfrac{f''(0)}{2}x^2+\\dfrac{f'''(0)}{6}x^3+o(x^3)}{x^3}=-\\frac{1}{2},$$\n所以 $f(0)=1$，$f'(0)=0$，$f''(0)=0$，$f'''(0)=-3$．根据三阶导数的定义，得\n$$f'''(0)=\\lim_{x\\to 0}\\frac{f''(x)-f''(0)}{x-0}=\\lim_{x\\to 0}\\frac{f''(x)}{x}=-3,$$\n故由极限的保号性可知，存在点 $x=0$ 的某一去心邻域，使得在点 $x=0$ 的左侧 $f''(x)\\gt 0$，即曲线 $y=f(x)$ 的图形是凹的，在点 $x=0$ 的右侧 $f''(x)\\lt 0$，即曲线 $y=f(x)$ 的图形是凸的．因此，$(0,1)$ 是曲线 $y=f(x)$ 的拐点．",
  },
  /* ---------------- 2.60  书印 P94 ---------------- */
  {
    id: "2.60",
    originalNo: "2.60",
    chapter: "2",
    pageNo: "94",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李永乐 660 题）设 $y(x)$ 在 $[a,b]$ 上二阶可导，且 $y(a)=y(b)=0$，$y''(x)+cy(x)=0$（$x\\in(a,b)$），其中 $c\\lt 0$ 为常数，则 $y(x)$ 在 $(a,b)$ 内（　　）\n（A）恒为正　　（B）恒为负　　（C）恒为 $0$　　（D）变号",
    answerHTML: "<b>答：C</b>\n由 $y'(x)$ 与 $y(x)$ 的关系：\n$$y'(x)=-cy(x)$$\n可知 $y(x)$ 的极值点有如下特性：\n若 $x_0\\in(a,b)$ 是 $y(x)$ 的极大值点，$\\Rightarrow y'(x_0)\\le 0\\Rightarrow y(x_0)\\le 0$．\n若 $x_0\\in(a,b)$ 是 $y(x)$ 的极小值点 $\\Rightarrow y'(x_0)=0\\Rightarrow y(x_0)=0$．\n因此 $y(x)$ 在 $(a,b)$ 内不能取正值的极大值点，与取负值的极小值点．\n再由 $y(a)=y(b)=0$ 可知，若 $y(x)$ 在 $(a,b)$ 内恒为零，则 $y(x)$ 在 $(a,b)$ 必有取正值的极大值点或取负值的极小值点，但这都不可能．因此只能在 $(a,b)$ 上 $y(x)$ 恒为零．选（C）。",
  },
  /* ---------------- 2.64  书印 P95 ---------------- */
  {
    id: "2.64",
    originalNo: "2.64",
    chapter: "2",
    pageNo: "95",
    type: "单选",
    isRealExam: true,
    problemHTML: "（1996 数一）在区间 $(-\\infty,+\\infty)$ 内，方程 $|x|^{\\frac{1}{3}}+|x|^{\\frac{1}{2}}-\\cos x=0$（　　）\n（A）无实根　　（B）有且仅有一个实根\n（C）有且仅有两个实根　　（D）有无穷多个个实根",
    answerHTML: "<b>答：选（C）．</b>\n令 $f(x)=|x|^{\\frac{1}{3}}+|x|^{\\frac{1}{2}}-\\cos x$，显然 $f(x)$ 为偶函数，其零点关于原点对称，而在 $[0,+\\infty)$ 上，\n$$f(x)=x^{\\frac{1}{3}}+x^{\\frac{1}{2}}-\\cos x,\\quad f(0)=-1<0,\\quad f(1)=2-\\cos 1>0$$\n则 $f(x)$ 在 $(0,1)$ 内至少有一个零点，又\n$$f'(x)=\\frac{1}{3}x^{-\\frac{2}{3}}+\\frac{1}{2}x^{-\\frac{1}{2}}+\\sin x>0,\\quad x\\in(0,1)$$\n故 $f(x)$ 在 $[0,1]$ 上有且仅有一个零点。而当 $x\\gt 1$ 时，\n$$f(x)=x^{\\frac{1}{3}}+x^{\\frac{1}{2}}-\\cos x\\ge 2-\\cos x>0$$\n从而 $f(x)$ 在 $(0,+\\infty)$ 只有一个零点，故原方程有且仅有两个实根．故选（C）。",
  },
  /* ---------------- 2.66  书印 P96 ---------------- */
  {
    id: "2.66",
    originalNo: "2.66",
    chapter: "2",
    pageNo: "96",
    type: "填空",
    isRealExam: false,
    problemHTML: "（余丙森 5 套卷）方程 $\\displaystyle\\sum_{i=1}^{100}\\frac{1}{x-i}=0$ 实根的个数为 ________．",
    answerHTML: "<b>答：99</b>\n令 $f(x)=\\displaystyle\\sum_{i=1}^{100}\\frac{1}{x-i}$，由于 $\\displaystyle\\lim_{x\\to 1^-}f(x)=+\\infty$，$\\displaystyle\\lim_{x\\to 2^-}f(x)=-\\infty$，\n又 $f(x)$ 在 $(1,2)$ 连续且单调减少，故 $f(x)$ 在 $(1,2)$ 内且仅有一个根。\n同理知 $f(x)$ 在 $(i,i+1)$（$i=2,3,\\cdots,99$）内均有且仅有一个根。\n当 $x\\lt 1$ 时，$f(x)\\lt 0$；当 $x\\gt 100$ 时，$f(x)\\gt 0$，得 $f(x)$ 在 $(-\\infty,1)$，$(100,+\\infty)$ 内均无根。\n故方程 $\\displaystyle\\sum_{i=1}^{100}\\frac{1}{x-i}=0$ 实根的个数为 99。",
  },
  /* ---------------- 2.68  书印 P96 ---------------- */
  {
    id: "2.68",
    originalNo: "2.68",
    chapter: "2",
    pageNo: "96",
    type: "填空",
    isRealExam: true,
    problemHTML: "（2011 数二改编）设 $f(x)=\\ln\\big|(x-1)(x-2)\\cdots(x-n)\\big|$，则方程 $f'(x)=0$ 根的个数为 ________．",
    answerHTML: "<b>答：$n-1$．</b>\n$$f'(x)=\\frac{[(x-1)(x-2)\\cdots(x-n)]}{'(x-1)(x-2)\\cdots(x-n)},$$\n令 $g(x)=(x-1)(x-2)\\cdots(x-n)$．\n方程 $f'(x)=0$ 根的个数与 $g'(x)$ 零点个数相同。\n又 $g(1)=g(2)=\\cdots=g(n)=0$，由罗尔定理知 $g'(x)$ 至少有 $n-1$ 个零点。\n又 $g'(x)$ 是一个 $n-1$ 次多项式，则 $g'(x)$ 最多有 $n-1$ 个零点，则方程 $f'(x)=0$ 根的个数为 $n-1$．",
  },
  /* ---------------- 2.70  书印 P97 ---------------- */
  {
    id: "2.70",
    originalNo: "2.70",
    chapter: "2",
    pageNo: "97",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2003 数二）讨论曲线 $y=4\\ln x+k$ 与 $y=4x+\\ln^4x$ 的交点个数．",
    answerHTML: "<b>解</b>\n构造辅助函数 $f(x)=4\\ln x+k-4x-\\ln^4x$，则 $f'(x)=\\dfrac{4}{x}-4-\\dfrac{4\\ln^3x}{x}=\\dfrac{4(1-x-\\ln^3x)}{x}$．\n由于当 $0\\lt x\\lt 1$ 时，$1-x\\gt 0$，$\\ln x\\lt 0$，故 $f'(x)\\gt 0$；\n当 $x\\gt 1$ 时，$1-x\\lt 0$，$\\ln x\\gt 0$，故 $f'(x)\\lt 0$．\n并且，$f'(1)=0$，故 $x=1$ 是 $f'(x)$ 的唯一零点，从而 $x=1$ 是 $f(x)$ 的唯一一极值点，也是最大值点。又当 $x=1$ 时，$f(1)=k-4$，故 $k-4$ 为 $f(x)$ 的最大值。\n又因为 $\\displaystyle\\lim_{x\\to 0^+}f(x)=-\\infty$，$\\displaystyle\\lim_{x\\to+\\infty}f(x)=-\\infty$，所以 $f(x)$ 的值域为 $(-\\infty,k-4]$。\n当 $k\\lt -4\\lt 0$ 时，$f(x)$ 恒小于零，两条曲线没有交点；\n当 $k=4$ 时，由 $f(x)$ 的单调性可知，$f(x)$ 的图形与 $x$ 轴仅有一个交点，两条曲线仅有一个交点，交点坐标为 $(1,4)$；\n当 $k\\gt 4$ 时，对在 $(0,1)$ 和 $(1,+\\infty)$ 上的 $f(x)$ 分别应用连续函数的零点定理，可得 $f(x)=0$ 有两个根 $x_1$，$x_2$，其中 $0\\lt x_1\\lt 1$，$1\\lt x_2\\lt +\\infty$．",
  },
  /* ---------------- 2.72  书印 P97 ---------------- */
  {
    id: "2.72",
    originalNo: "2.72",
    chapter: "2",
    pageNo: "97",
    type: "解答",
    isRealExam: true,
    problemHTML: "（1993 数一）设 $[0,+\\infty)$ 上函数 $f(x)$ 有连续导数，且 $f'(x)\\ge x\\gt 0$，$f(0)\\lt 0$，证明 $f(x)$ 在 $(0,+\\infty)$ 内有且仅有一个零点．",
    answerHTML: "<b>解</b>\n记 $f(0)=k_0\\lt 0$．对 $[0,x]$ 上的 $f(x)$ 使用拉格朗日中值定理，可得存在点 $\\xi\\in(0,x)$，使得 $f(x)-f(0)=f'(\\xi)x$．\n于是，$f(x)=k_0+f'(\\xi)x\\ge k_0+x\\xi$．\n取 $x_0\\gt -\\dfrac{k_0}{k}$，则 $f(x_0)\\gt 0$．由连续函数的零点定理可知，存在 $c\\in(0,x_0)$，使得 $f(c)=0$．\n因为 $f'(x)\\gt 0$，所以 $f(x)$ 在 $(0,+\\infty)$ 内单调增加．因此，$f(x)$ 在 $(0,+\\infty)$ 内有且仅有一个零点。",
  },
  /* ---------------- 2.77  书印 P99 ---------------- */
  {
    id: "2.77",
    originalNo: "2.77",
    chapter: "2",
    pageNo: "99",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2002 数二）设 $0\\lt a\\lt b$，证明：$\\dfrac{2a}{a^2+b^2}\\lt \\dfrac{\\ln b-\\ln a}{b-a}\\lt \\dfrac{1}{\\sqrt{ab}}$",
    answerHTML: "<b>解</b>\n先证左端不等式，由拉格朗日中值定理，至少存在一点 $\\xi\\in(a,b)$，使\n$$\\frac{\\ln b-\\ln a}{b-a}=\\left.(\\ln x)\\right|_{x=\\xi}=\\frac{1}{\\xi}$$\n由于 $0\\lt a\\lt \\xi\\lt b$，$\\dfrac{1}{\\xi}\\gt \\dfrac{1}{b}\\gt \\dfrac{2a}{a^2+b^2}$，从而\n$$\\frac{\\ln b-\\ln a}{b-a}>\\frac{2a}{a^2+b^2}$$\n再证右端不等式．设\n$$\\varphi(x)=\\ln x-\\ln a-\\frac{x-a}{\\sqrt{ax}}\\quad(x\\ge a)$$\n因为\n$$\\varphi'(x)=\\frac{1}{x}-\\frac{1}{\\sqrt a}\\cdot\\frac{1}{2\\sqrt x}\\left(1+\\frac{a}{2x\\sqrt{x}}\\right)=-\\frac{(\\sqrt{x}-\\sqrt{a})^2}{2x\\sqrt{ax}}<0$$\n故当 $x\\ge a$ 时，$\\varphi(x)$ 单调减少．又 $\\varphi(a)=0$，所以当 $x\\gt a$ 时 $\\varphi(x)\\lt \\varphi(a)=0$，即\n$$\\ln x-\\ln a<\\frac{x-a}{\\sqrt{ax}}$$\n从而当 $b\\gt a$ 时，$\\ln b-\\ln a\\lt \\dfrac{b-a}{\\sqrt{ab}}$，即\n$$\\frac{\\ln b-\\ln a}{b-a}<\\frac{1}{\\sqrt{ab}}$$",
  },
  /* ---------------- 2.78  书印 P100 ---------------- */
  {
    id: "2.78",
    originalNo: "2.78",
    chapter: "2",
    pageNo: "100",
    type: "解答",
    isRealExam: false,
    problemHTML: "设函数 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内二阶可导，且 $f(a)=f(b)$，若存在 $c\\in(a,b)$，使得 $f(c)\\gt f(a)$，证明：必存在 $\\xi\\in(a,b)$，使得 $f''(\\xi)\\lt 0$．",
    answerHTML: "<b>解</b>\n由题设，$f'(\\xi_1)=\\dfrac{f(c)-f(a)}{c-a}\\gt 0$，$f'(\\xi_2)=\\dfrac{f(b)-f(c)}{b-c}\\lt 0$，故有 $f''(\\xi)=\\dfrac{f'(\\xi_1)-f'(\\xi_2)}{\\xi_1-\\xi_2}\\lt 0$．\n<b>注：</b>拉格朗日的三点图，推某点二阶导信息。",
  },
  /* ---------------- 2.79  书印 P100 ---------------- */
  {
    id: "2.79",
    originalNo: "2.79",
    chapter: "2",
    pageNo: "100",
    type: "解答",
    isRealExam: false,
    problemHTML: "设函数 $f(x)$ 在区间 $(a,b)$ 内二阶可导，且 $f''(x)\\gt 0$，证明：对任意的 $x_1$，$x_2\\in(a,b)$，且 $x_1\\ne x_2$ 及 $\\lambda(0\\lt \\lambda\\lt 1)$，恒有 $f'\\left[\\lambda x_1+(1-\\lambda)x_2\\right]\\lt \\lambda f(x_1)+(1-\\lambda)f(x_2)$．",
    answerHTML: "<b>解</b>\n令 $x=\\lambda x_1+(1-\\lambda)x_2$，由泰勒公式得\n$$f(x_1)=f(x)+f'(x)(x_1-x)+\\frac{f''(\\xi_1)}{2!}(x_1-x)^2=f(x)+f'(x)\\lambda(x_1-x_2)+\\frac{f''(\\xi_1)}{2!}(x_1-x)^2$$\n$$f(x_2)=f(x)+f'(x)(x_2-x)+\\frac{f''(\\xi_2)}{2!}(x_2-x)^2=f(x)+f'(x)\\lambda(x_2-x_2)+\\frac{f''(\\xi_2)}{2!}(x_2-x)^2$$\n其中 $\\xi_1$ 在 $x$ 与 $x_1$ 之间，$\\xi_2$ 在 $x$ 与 $x_2$ 之间，则\n$$\\lambda f(x_1)+(1-\\lambda)f(x_2)=f(x)+\\lambda\\frac{f''(\\xi_1)}{2!}(x_1-x)^2+(1-\\lambda)\\frac{f''(\\xi_2)}{2!}(x_2-x)^2>f(x)$$\n即 $f\\left[\\lambda x_1+(1-\\lambda)x_2\\right]\\lt \\lambda f(x_1)+(1-\\lambda)f(x_2)$．",
  },
  /* ---------------- 2.80  书印 P100 ---------------- */
  {
    id: "2.80",
    originalNo: "2.80",
    chapter: "2",
    pageNo: "100",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李林 5 套卷）设 $f(x)$ 在 $[a,b]$（$b\\gt a$）上有二阶导数，且 $f(a)=f(b)=0$，$f''(x)\\lt 0$．证明：当 $x\\in(a,b)$ 时，$0\\lt f(x)\\lt \\dfrac{2}{b-a}\\int_a^b f(t)\\mathrm{d}x$．",
    answerHTML: "<b>解</b>\n首先证明 $f(x)\\gt 0$，以下用反证法证明（凸函数的性质，我们在基础精选题第二章学过）\n假设 $\\exists\\mathfrak{c}\\in(a,b)$，有 $f(\\mathfrak{c})=0$ 或 $f(\\mathfrak{c})\\lt 0$．\n若 $f(\\mathfrak{c})=0$．则 $f''(\\eta_1)=0$，与 $f''(x)\\lt 0$ 矛盾（用三次罗尔定理可证，罗尔的三点图）\n若 $f(\\mathfrak{c})\\lt 0$．则 $f'(\\xi_1)=\\dfrac{f(\\mathfrak{c})-f(a)}{c-a}\\lt 0$，$f'(\\xi_2)=\\dfrac{f(b)-f(\\mathfrak{c})}{b-c}\\gt 0$，\n有 $f''(\\eta_2)=\\dfrac{f'(\\xi_1)-f'(\\xi_2)}{\\xi_1-\\xi_2}\\gt 0$（与 $f''(x)\\lt 0$ 矛盾）．\n综上可知，$f(x)\\gt 0$，$x\\in(a,b)$．\n以下证明 $f(x)\\lt \\dfrac{2}{b-a}\\int_a^b f(x)\\mathrm{d}x$\n要证 $f(x)\\lt \\dfrac{2}{b-a}\\int_a^b f(x)\\mathrm{d}x$，记 $\\max\\{|f(x)|\\}=f(x_0)$\n$$\\Leftrightarrow f(x_0)<\\frac{2}{b-a}\\int_a^b f(x)\\mathrm{d}x\\Leftrightarrow \\frac{b-a}{2}f(x_0)<\\frac{2}{b-a}\\int_a^b f(x)\\mathrm{d}x$$\n构造函数 $\\varphi_1(x)=f(x)-g_1(x)$，$\\varphi'_1(x)=f''(x)\\gt 0$．\n由于 $\\varphi_1(a)=\\varphi_1(b)=0$，仿照证明 $f(x)\\gt 0$ 类似可得 $\\varphi_1(x)\\gt 0$（意味着 $f(x)$ 在 $g_1(x)$ 上方）\n故 $\\displaystyle\\int_a^b\\frac{f(x_0)}{x_0-a}(x-a)\\mathrm{d}x\\lt \\int_a^b g_1(x)\\mathrm{d}x$，即 $\\dfrac{1}{2}(x_0-a)f(x_0)\\lt \\int_a^b f(x)\\mathrm{d}x$\n类似地，有 $\\displaystyle\\int_a^b\\frac{f(x_0)}{x_0-b}(x-b)\\mathrm{d}x\\lt \\int_a^b g_1(x)\\mathrm{d}x$，即 $\\dfrac{1}{2}(b-x_0)f(x_0)\\lt \\int_a^b f(x)\\mathrm{d}x$\n两式相加，得证。（从几何意义出发来理解）\n<b>法 2：</b>用泰勒公式\n$$\\Leftrightarrow \\max\\{|f(x)|\\}=f(x_0)<\\frac{2}{b-a}\\int_a^b f(x)\\mathrm{d}x$$\n把 $f(x_0)$ 在 $x$ 处泰勒展开，得\n$$f(x_0)=f(x)+f'(x)(x_0-x)+\\frac{f''(\\eta)}{2}(x_0-x)^2,\\quad \\text{由于 } f''(\\eta)<0$$\n从而得到 $f(x_0)\\lt f(x)+f''(x)(x_0-x)$\n两边积分，得 $(b-a)f(x_0)\\lt \\int_a^b f(x)\\mathrm{d}x+\\int_a^b f''(x)(x_0-x)\\mathrm{d}x$\n化简得，$(b-a)f(x_0)\\lt 2\\int_a^b f(x)\\mathrm{d}x$．\n故得证。",
  },
  /* ---------------- 2.89  书印 P103 ---------------- */
  {
    id: "2.89",
    originalNo: "2.89",
    chapter: "2",
    pageNo: "103",
    type: "填空",
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设函数 $f(x)=(x^2-1)^n\\sin x$，则对任意正整数 $n$，$f^{(n)}(1)=$ ________．",
    answerHTML: "<b>答：$n!\\cdot 3^n\\cdot \\sin 1$．</b>\n注意到 $x^2-1=(x-1)(x^2+x+1)$，故\n$$f(x)=(x-1)f'(x^2+x+1)\\sin x=u(x)v(x),$$\n其中 $u(x)=(x-1)^n$，$v(x)=\\big(x^2+x+1\\big)^n\\sin x$．\n由于\n$$u(1)=u'(1)=\\cdots=u^{(n-1)}(1)=0,\\qquad u^{(n)}(1)=n!,$$\n故由莱布尼茨公式可得\n$$f^{(n)}(1)=\\sum_{k=0}^{n}C_n^k u^{(k)}(1)v^{(n-k)}(1)=C_n^n n!v(1)=n!\\cdot 3^n\\cdot \\sin 1.$$",
  },
  /* ---------------- 2.93  书印 P105 ---------------- */
  {
    id: "2.93",
    originalNo: "2.93",
    chapter: "2",
    pageNo: "105",
    type: "填空",
    isRealExam: true,
    problemHTML: "（2024 数二）已知函数 $f(x)=x^2\\left(\\mathrm{e}^x-1\\right)$，则 $f^{(5)}(1)=$ ________．",
    answerHTML: "<b>答：$31\\mathrm{e}$．</b>\n注意，$f(x)=x^2\\left(\\mathrm{e}^x-1\\right)=\\mathrm{e}^x\\cdot x^2-x^2$，其中 $-x^2$ 三阶以上导数为 $0$．\n记 $u(x)=\\mathrm{e}^x$，$v(x)=x^2$，则 $g(x)=u(x)v(x)$．从而可以用莱布尼茨公式计算 $g(x)$ 的高阶导数，\n$$f^{(5)}(x)=g^{(5)}(x)=C_5^0u^{(5)}(x)v(x)+C_5^1u^{(4)}(x)v'(x)+C_5^2u^{(3)}(x)v''(x)$$\n$$=\\mathrm{e}^x\\cdot x^2+5\\mathrm{e}^x\\cdot 2x+10\\mathrm{e}^x\\cdot 2=\\mathrm{e}^x\\left(x^2+10x+20\\right)$$\n$$f^{(5)}(x)=\\mathrm{e}(1+10+20)=31\\mathrm{e}.$$",
  },
  /* ---------------- 2.94  书印 P105 ---------------- */
  {
    id: "2.94",
    originalNo: "2.94",
    chapter: "2",
    pageNo: "105",
    type: "解答",
    isRealExam: false,
    problemHTML: "设 $n$ 为正整数，$f(x)=g'(x)$，$g(x)=\\begin{cases}\\dfrac{\\mathrm{e}^x-1}{x}, & x\\ne 0,\\\\ 1, & x=0,\\end{cases}$ 求 $f^{(n)}(0)$．",
    answerHTML: "<b>解</b>\n$\\mathrm{e}^x=1+x+\\dfrac{x^2}{2!}+\\cdots+\\dfrac{x^n}{n!}+\\cdots$\n$$g(x)=1+\\frac{x}{2!}+\\frac{x^2}{3!}+\\frac{x^3}{4!}+\\cdots+\\frac{x^{n-1}}{n!}+\\frac{x^n}{(n+1)!}+\\frac{x^{n+1}}{(n+2)!}+\\cdots$$\n显然代入 $x=0$ 也满足，所以 $f^{(n)}(x)=g^{(n+1)}(x)$，$f^{(n)}(0)=g^{(n+1)}(0)$\n$$\\frac{1}{(n+2)!}=\\frac{g^{(n+1)}(0)}{(n+1)!},$$\n解得 $f^{(n)}(0)=g^{(n+1)}(0)=\\dfrac{1}{n+2}$．",
  },
  /* ---------------- 2.98  书印 P105 ---------------- */
  {
    id: "2.98",
    originalNo: "2.98",
    chapter: "2",
    pageNo: "105",
    type: "解答",
    isRealExam: false,
    problemHTML: "设 $f(x)=\\arctan x$，求 $f^{(n)}(0)$．",
    answerHTML: "<b>解：</b>\n由 $f(x)=\\arctan x$，有 $f'(x)=\\dfrac{1}{1+x^2}$，故 $\\left[(1+x^2)f'(x)\\right]^{(n-1)}=0$，\n利用莱布尼茨公式，令 $u=f'(x)$，$v=1+x^2$，则\n$$f^{(n)}(x)\\left[1+x^2\\right]+\\left(n-1\\right)f^{(n-1)}(x)\\cdot 2x+\\frac{(n-1)(n-2)}{2}f^{(n-2)}(x)\\cdot 2=0,$$\n将 $x=0$ 代入上式，得\n$$f^{(n)}(0)(1+0)+(n-1)f^{(n-1)}(0)\\cdot 0+\\frac{(n-1)(n-2)}{2}f^{(n-2)}(0)\\cdot 2=0,$$\n即\n$$f^{(n)}(0)=-(n-1)(n-2)f^{(n-2)}(0).\\tag{①}$$\n又 $f(0)=0$，由①式，得 $f^{(n)}(0)=0$，故 $f^{(2k)}(0)=0$．又 $f'(0)=1$，由①式，得\n$$f^{(2k+1)}(0)=-2k\\cdot(2k-1)\\cdot f^{(2k-1)}(0)=-4\\cdot 3\\cdot f^{(2k-1)}(0),$$\n故 $f^{(2k+1)}(0)=(-1)^k(2k)!\\,(k=0,1,2,\\cdots)$．\n所以\n$$f^{(2k+1)}(0)=(-1)^k\\,(2k)!,\\qquad f^{(2k)}(0)=0\\quad(k=0,1,2,\\cdots).$$"
  }
);
