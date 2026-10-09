/* ==========================================================================
   data/chapter5.js —— 第5章 多元微分学（按用户选中清单录制）
   清单（21 张卡）：5.4、5.5、5.6、5.7、5.8、5.9、5.11、5.13、
   5.21（书上基础精选题 15）、5.23（书上基础精选题 17）、5.27（书上基础精选题 21）、
   5.30、5.35、5.36、5.37、5.40、5.41、5.42、5.43、5.47、5.48

   录题口径：
   - 题面+答案 ——《高数强化答案合订本》PDF p233-259（印刷体解析）
   - 页码 ——《高数强化合订本数三》书印页码（用户指定：页码在数三册）
   - 编号 —— 5.21/5.23/5.27 为用户清单号（书上对应基础精选题 15/17/21）
   - 公式内禁裸尖括号（\lt / \gt + 空格）；JSON.stringify 序列化
   ========================================================================== */
window.SEED_PROBLEMS = window.SEED_PROBLEMS || [];
window.SEED_PROBLEMS.push(
  {
    id: "5.4",
    originalNo: "5.4",
    chapter: "5",
    pageNo: "194",
    type: "单选",
    isRealExam: false,
    problemHTML: "（超越 5 套卷）设 $f(x,y)$ 在点 $(0,0)$ 处连续，且 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-xy}{\\sqrt{x^2+y^2}}=a$，$a$ 为常数，则 $f(x,y)$ 在点 $(0,0)$ 处偏导数存在的充分必要条件是（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（A）$a=-1$</td><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（B）$a=0$</td><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（C）$a=1$</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$a$ 为任意实数</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>因为 $f(x,y)$ 在 $(0,0)$ 点连续，易得 $f(0,0)=0$，因为 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-xy}{\\sqrt{x^2+y^2}}=a$，所以\n$f(x,y)=xy+\\sqrt{x^2+y^2}\\left[a+\\alpha(x,y)\\right]$，其中 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\alpha(x,y)=0$．\n$$f_x'(0,0)=\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{x}=\\lim_{x\\to0}\\dfrac{x\\cdot 0+|x|\\cdot\\left[a+\\alpha(x,0)\\right]}{x},$$\n由于 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\alpha(x,y)=0$，所以 $\\displaystyle\\lim_{x\\to0}\\alpha(x,0)=0$，从而\n$$f_x'(0,0)=\\lim_{x\\to0}\\dfrac{|x|\\cdot a}{x}.$$\n若 $f_x'(0,0)$ 存在，则 $a=0$，反之，若 $a=0$，则 $f_x'(0,0)$ 存在，且 $f_x'(0,0)=0$．由对称性可知，若 $f_y'(0,0)$ 存在，则 $a=0$，反之，若 $a=0$，则 $f_y'(0,0)$ 存在，且 $f_y'(0,0)=0$．"
  },
  {
    id: "5.5",
    originalNo: "5.5",
    chapter: "5",
    pageNo: "195",
    type: "单选",
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设函数 $f(x,y)=\\begin{cases}\\dfrac{xy^2}{\\sqrt{x^2+y^2}}, & (x,y)\\neq(0,0),\\\\ 0, & (x,y)=(0,0),\\end{cases}$ 则下列命题中，正确的是（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（A）$f_{xy}''(0,0)$ 和 $f_{yx}''(0,0)$ 均不存在．</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）$f_{xy}''(0,0)$ 不存在，但 $f_{yx}''(0,0)$ 存在．</td></tr><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（C）$f_{xy}''(0,0)$ 存在，但 $f_{yx}''(0,0)$ 不存在．</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$f_{xy}''(0,0)$ 和 $f_{yx}''(0,0)$ 均存在．</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>先计算一阶偏导数．\n$$f_x'(0,0)=\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{x}=0,\\quad f_y'(0,0)=\\lim_{y\\to0}\\dfrac{f(0,y)-f(0,0)}{y}=0.$$\n当 $(x,y)\\neq(0,0)$ 时，\n$$f_x(x,y)=\\dfrac{y^2\\sqrt{x^2+y^2}-xy^2\\cdot\\dfrac{x}{\\sqrt{x^2+y^2}}}{x^2+y^2}=\\dfrac{x^2y^2+y^4-x^2y^2}{\\left(x^2+y^2\\right)^{3/2}}=\\dfrac{y^4}{\\left(x^2+y^2\\right)^{3/2}},$$\n$$f_y(x,y)=\\dfrac{2xy\\sqrt{x^2+y^2}-xy^2\\cdot\\dfrac{y}{\\sqrt{x^2+y^2}}}{x^2+y^2}=\\dfrac{2x^3y+2xy^3-xy^3}{\\left(x^2+y^2\\right)^{3/2}}=\\dfrac{2x^3y+xy^3}{\\left(x^2+y^2\\right)^{3/2}}.$$\n于是，\n$$f_{xy}''(0,0)=\\lim_{y\\to0}\\dfrac{f_x'(0,y)-f_x'(0,0)}{y}=\\lim_{y\\to0}\\dfrac{\\dfrac{y^4}{|y|^3}}{y}=\\lim_{y\\to0}\\dfrac{y}{|y|},$$\n不存在；\n$$f_{yx}''(0,0)=\\lim_{x\\to0}\\dfrac{f_y'(x,0)-f_y'(0,0)}{x}=\\lim_{x\\to0}\\dfrac{0-0}{x}=0,$$\n存在．\n因此，$f_{xy}''(0,0)$ 不存在，但 $f_{yx}''(0,0)$ 存在．应选 B．"
  },
  {
    id: "5.6",
    originalNo: "5.6",
    chapter: "5",
    pageNo: "195",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2020 数二）关于函数 $f(x,y)=\\begin{cases}xy, & xy\\neq0,\\\\ x, & y=0,\\\\ y, & x=0,\\end{cases}$ 下列结论中\n（1）$\\left.\\dfrac{\\partial f}{\\partial x}\\right|_{(0,0)}=1$；　（2）$\\left.\\dfrac{\\partial^2 f}{\\partial x\\partial y}\\right|_{(0,0)}=1$；　（3）$\\displaystyle\\lim_{(x,y)\\to(0,0)}f(x,y)=0$；　（4）$\\displaystyle\\lim_{y\\to0}\\lim_{x\\to0}f(x,y)=0$\n正确的个数为（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（A）4</td><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（B）3</td><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（C）2</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）1</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>根据偏导数的定义，\n$$\\left.\\dfrac{\\partial f}{\\partial x}\\right|_{(0,0)}=\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{x}=\\lim_{x\\to0}\\dfrac{x-0}{x}=1.$$\n（1）正确．\n根据偏导数的定义，\n$$\\left.\\dfrac{\\partial^2 f}{\\partial x\\partial y}\\right|_{(0,0)}=\\lim_{y\\to0}\\dfrac{\\left.\\dfrac{\\partial f(x,y)}{\\partial x}\\right|_{x=0}-\\left.\\dfrac{\\partial f(x,y)}{\\partial x}\\right|_{y=0}}{y-0}.$$\n但是根据定义，当 $y\\neq0$ 时，\n$$\\left.\\dfrac{\\partial f(x,y)}{\\partial x}\\right|_{x=0}=\\lim_{x\\to0}\\dfrac{f(x,y)-f(0,y)}{x}=\\lim_{x\\to0}\\dfrac{xy-y}{x}=\\infty,$$\n$\\left.\\dfrac{\\partial f(x,y)}{\\partial x}\\right|_{x=0}$ 不存在，$\\left.\\dfrac{\\partial^2 f}{\\partial x\\partial y}\\right|_{(0,0)}$ 当然也不存在．\n（2）不正确．\n根据 $f(x,y)$ 的定义，\n当 $xy\\neq0$ 时，$0\\leq|f(x,y)-0|=|xy|\\leq\\dfrac{x^2+y^2}{2}\\lt x^2+y^2$，当 $0\\lt x^2+y^2\\lt1$ 时，$x^2+y^2\\lt\\sqrt{x^2+y^2}$；\n当 $x=0$ 时，$0\\leq|f(x,y)-0|=|y|\\leq\\sqrt{x^2+y^2}$；\n当 $y=0$ 时，$0\\leq|f(x,y)-0|=|x|\\leq\\sqrt{x^2+y^2}$．\n而 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\sqrt{x^2+y^2}=0$，故 $\\displaystyle\\lim_{(x,y)\\to(0,0)}f(x,y)=0$．\n（3）正确．\n按照累次极限的顺序，先计算 $\\displaystyle\\lim_{x\\to0}f(x,y)$，再计算 $\\displaystyle\\lim_{y\\to0}\\lim_{x\\to0}f(x,y)$．根据累次极限的定义，只需考虑 $x\\neq0$，$y\\neq0$ 的情况．\n$$\\lim_{x\\to0}f(x,y)=\\lim_{x\\to0}xy=0,\\quad \\lim_{y\\to0}\\lim_{x\\to0}f(x,y)=\\lim_{y\\to0}0=0.$$\n（4）正确．\n因此，共有 3 个结论正确，应选 B．"
  },
  {
    id: "5.7",
    originalNo: "5.7",
    chapter: "5",
    pageNo: "196",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2007 数二）二元函数 $f(x,y)$ 在点 $(0,0)$ 处可微的一个充分条件是（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（A）$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\left[f(x,y)-f(0,0)\\right]=0$</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）$\\displaystyle\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{x}=0$，且 $\\displaystyle\\lim_{y\\to0}\\dfrac{f(0,y)-f(0,0)}{y}=0$</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（C）$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-f(0,0)}{\\sqrt{x^2+y^2}}=0$</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$\\displaystyle\\lim_{x\\to0}\\left[f_x'(x,0)-f_x'(0,0)\\right]=0$ 且 $\\displaystyle\\lim_{y\\to0}\\left[f_y'(0,y)-f_y'(0,0)\\right]=0$</td></tr></tbody></table>",
    answerHTML: "<b>答：C</b>\n<b>解：</b>事实上，由 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-f(0,0)}{\\sqrt{x^2+y^2}}=0$ 可得\n$$\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{x}=\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{\\sqrt{x^2+0^2}}\\cdot\\dfrac{\\sqrt{x^2}}{x}=0,$$\n即 $f_x'(0,0)=0$，\n同理有 $f_y'(0,0)=0$．从而\n$$\\lim_{\\rho\\to0}\\dfrac{\\left[f(\\Delta x,\\Delta y)-f(0,0)\\right]-\\left[f_x'(0,0)\\Delta x+f_y'(0,0)\\Delta y\\right]}{\\rho}$$\n$$=\\lim_{\\rho\\to0}\\dfrac{f(\\Delta x,\\Delta y)-f(0,0)}{\\rho}=\\lim_{\\rho\\to0}\\dfrac{f(\\Delta x,\\Delta y)-f(0,0)}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}=0.$$\n根据可微的判定条件可知函数 $f(x,y)$ 在点 $(0,0)$ 处可微，故应选（C）．"
  },
  {
    id: "5.8",
    originalNo: "5.8",
    chapter: "5",
    pageNo: "196",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2012 数一）如果 $f(x,y)$ 在 $(0,0)$ 处连续，那么下列命题正确的是（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（A）若极限 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{|x|+|y|}$ 存在，则 $f(x,y)$ 在 $(0,0)$ 处可微</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）若极限 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{x^2+y^2}$ 存在，则 $f(x,y)$ 在 $(0,0)$ 处可微</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（C）若 $f(x,y)$ 在 $(0,0)$ 处可微，则极限 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{|x|+|y|}$ 存在</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）若 $f(x,y)$ 在 $(0,0)$ 处可微，则极限 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{x^2+y^2}$ 存在</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>若假设 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{x^2+y^2}$ 存在，则有 $\\displaystyle\\lim_{(x,y)\\to(0,0)}f(x,y)=0$，\n又由 $f(x,y)$ 在 $(0,0)$ 处连续，可知 $f(0,0)=0$．\n$$f_x'(0,0)=\\lim_{x\\to0}\\dfrac{f(x,0)-f(0,0)}{x}=\\lim_{x\\to0}\\dfrac{f(x,0)}{x^2+0^2}\\cdot x=0,$$\n类似 $f_y'(0,0)=0$．\n于是\n$$\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-f(0,0)-\\left[f_x'(0,0)x+f_y'(0,0)y\\right]}{\\sqrt{x^2+y^2}}$$\n$$=\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{\\sqrt{x^2+y^2}}=\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{x^2+y^2}\\cdot\\sqrt{x^2+y^2}=0.$$\n由微分定义知 $f(x,y)$ 在 $(0,0)$ 处可微，故应选（B）．"
  },
  {
    id: "5.9",
    originalNo: "5.9",
    chapter: "5",
    pageNo: "197",
    type: "填空",
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设连续函数 $z=f(x,y)$ 满足 $\\displaystyle\\lim_{(x,y)\\to(1,2)}\\dfrac{f(x,y)+x-2y+3}{\\sqrt{(x-1)^2+(y-2)^2}}=0$，则 $\\left.\\mathrm dz\\right|_{(1,2)}=$ ________．",
    answerHTML: "<b>答：$-\\mathrm dx+2\\,\\mathrm dy$</b>\n<b>解：</b>由于 $\\displaystyle\\lim_{(x,y)\\to(1,2)}\\dfrac{f(x,y)+x-2y+3}{\\sqrt{(x-1)^2+(y-2)^2}}=0$ 且 $\\displaystyle\\lim_{(x,y)\\to(1,2)}\\sqrt{(x-1)^2+(y-2)^2}=0$，\n故 $\\displaystyle\\lim_{(x,y)\\to(1,2)}\\left[f(x,y)+x-2y+3\\right]=0$．\n又由 $f(x,y)$ 在 $(1,2)$ 处连续可知，$f(1,2)=\\displaystyle\\lim_{(x,y)\\to(1,2)}f(x,y)=\\displaystyle\\lim_{(x,y)\\to(1,2)}\\left(-x+2y-3\\right)=0$，故 $f(1,2)=0$．代入题设条件，可得\n$$\\lim_{(x,y)\\to(1,2)}\\dfrac{f(x,y)-f(1,2)+(x-1)-2(y-2)}{\\sqrt{(x-1)^2+(y-2)^2}}=0.$$\n因此，由函数 $f(x,y)$ 可微的定义可知，$f(x,y)$ 在点 $(1,2)$ 处可微且 $\\left.\\dfrac{\\partial f}{\\partial x}\\right|_{(1,2)}=-1$，$\\left.\\dfrac{\\partial f}{\\partial y}\\right|_{(1,2)}=2$，\n$$\\left.\\mathrm dz\\right|_{(1,2)}=-\\mathrm dx+2\\,\\mathrm dy.$$"
  },
  {
    id: "5.11",
    originalNo: "5.11",
    chapter: "5",
    pageNo: "197",
    type: "单选",
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设函数 $g(x,y)=\\begin{cases}0, & xy=0,\\\\ 1, & xy\\neq0,\\end{cases}$ 若函数 $F(x,y)=f(x,y)\\,g(x,y)$ 在点 $(0,0)$ 处可微，则 $f(x,y)$ 可能为（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（A）$y+\\cos xy$</td><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（B）$y+\\sin xy$</td><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（C）$\\sin y+xy$</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$x^2+y^2$</td></tr></tbody></table>",
    answerHTML: "<b>答：D</b>\n<b>解：</b>因为 $F(x,y)$ 在点 $(0,0)$ 处可微，所以\n$$F(x,y)=F(0,0)+xF_x'(0,0)+yF_y'(0,0)+o\\left(\\sqrt{x^2+y^2}\\right).$$\n在 $x$ 轴和 $y$ 轴上，$xy=0$，$g(x,y)=0$，从而 $F(x,0)=F(0,y)=0$．特别地，$F(0,0)=0$．由偏导数的定义可得\n$$F_x'(0,0)=\\lim_{x\\to0}\\dfrac{F(x,0)-F(0,0)}{x-0}=0,\\quad F_y'(0,0)=\\lim_{y\\to0}\\dfrac{F(0,y)-F(0,0)}{y-0}=0.$$\n于是 $F(x,y)=o\\left(\\sqrt{x^2+y^2}\\right)$．\n当点 $(x,y)$ 沿直线 $y=x$ 趋于点 $(0,0)$ 时，$xy\\neq0$，$g(x,y)=1$，\n$$f(x,y)=f(x,y)g(x,y)=F(x,y)=o\\left(\\sqrt{x^2+y^2}\\right)\\xrightarrow{\\;y=x\\;}o\\left(\\sqrt{x^2+x^2}\\right)=o(x).$$\n逐一考察四个选项中的函数．若 $x=y$，则它们分别变为 $x+\\cos x^2$，$x+\\sin x^2$，$\\sin x+x^2$，$2x^2$．\n$$\\lim_{x\\to0}\\left(x+\\cos x^2\\right)=0+\\cos0=1,$$\n$$\\lim_{x\\to0}\\dfrac{x+\\sin x^2}{x}=1+\\lim_{x\\to0}\\dfrac{\\sin x^2}{x}=1+\\lim_{x\\to0}\\dfrac{x^2}{x}=1,$$\n$$\\lim_{x\\to0}\\dfrac{\\sin x+x^2}{x}=\\lim_{x\\to0}\\dfrac{\\sin x}{x}+\\lim_{x\\to0}x=1,$$\n$$\\lim_{x\\to0}\\dfrac{2x^2}{x}=\\lim_{x\\to0}2x=0.$$\n只有选项 D 对应的 $2x^2$ 是 $o(x)$．因此，应选 D．"
  },
  {
    id: "5.13",
    originalNo: "5.13",
    chapter: "5",
    pageNo: "198",
    type: "填空",
    isRealExam: true,
    problemHTML: "（2020 数一）设函数 $f(x,y)=\\displaystyle\\int_0^{xy}\\mathrm e^{xt^2}\\,\\mathrm dt$，则 $\\left.\\dfrac{\\partial^2 f}{\\partial x\\partial y}\\right|_{(1,1)}=$ ________．",
    answerHTML: "<b>答：$4\\mathrm e$</b>\n<b>解：</b>$f(x,y)$ 有二阶连续偏导，利用 $\\dfrac{\\partial^2 f}{\\partial x\\partial y}=\\dfrac{\\partial^2 f}{\\partial y\\partial x}$．\n$$\\dfrac{\\partial f}{\\partial y}=x\\mathrm e^{x(xy)^2},$$\n$$\\dfrac{\\partial^2 f}{\\partial y\\partial x}=\\mathrm e^{x^3y^2}+x\\mathrm e^{x^3y^2}\\cdot 3x^2y^2,$$\n所求 $\\left.\\dfrac{\\partial^2 f}{\\partial x\\partial y}\\right|_{(1,1)}=\\left.\\dfrac{\\partial^2 f}{\\partial y\\partial x}\\right|_{(1,1)}=4\\mathrm e$．"
  },
  {
    id: "5.21",
    originalNo: "5.21",
    chapter: "5",
    pageNo: "200",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李永乐 660）设函数 $f(x,y)$ 可微，且 $f(1,2)=2$，$f_x'(1,2)=3$，$f_y'(1,2)=3$，$z(x)=f\\left(x,f(x,2x)\\right)$，求 $z'(1)$．",
    answerHTML: "<b>解：</b>$z'(x)=f_1'\\left(x,f(x,2x)\\right)+f_2'\\left(x,f(x,2x)\\right)\\left[f_1'(x,2x)+2f_2'(x,2x)\\right]$．\n由于 $f\\left(1,f(1,2)\\right)=f(1,2)$，$f_1'(1,2)=f_x'(1,2)=3$，$f_2'(1,2)=f_y'(1,2)=3$，\n$z'(1)=f_1'\\left(1,f(1,2)\\right)+f_2'\\left(1,f(1,2)\\right)\\left[f_1'(1,2)+2f_2'(1,2)\\right]=f_1'(1,2)+f_2'(1,2)\\left[f_1'(1,2)+2f_2'(1,2)\\right]$\n$=3+3\\times(3+2\\times3)=30$．\n<b>注意：</b>求解过程中不宜采用记号 $f_x'\\left(x,2f(x,2x)\\right)$，原因在于从这个记号无法区分开来究竟是表示函数 $z(x)=f\\left(x,2f(x,2x)\\right)$ 对 $x$ 的导数，还是表示 $f\\left(x,2f(x,2x)\\right)$ 对第一个位置求偏导．"
  },
  {
    id: "5.23",
    originalNo: "5.23",
    chapter: "5",
    pageNo: "201",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2005）设函数 $u(x,y)=\\varphi(x+y)+\\varphi(x-y)+\\displaystyle\\int_{x-y}^{x+y}\\psi(t)\\,\\mathrm dt$，其中函数 $\\varphi$ 具有二阶导数，$\\psi$ 具有一阶导数，则必有（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（A）$\\dfrac{\\partial^2 u}{\\partial x^2}=-\\dfrac{\\partial^2 u}{\\partial y^2}$</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）$\\dfrac{\\partial^2 u}{\\partial x^2}=\\dfrac{\\partial^2 u}{\\partial y^2}$</td></tr><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（C）$\\dfrac{\\partial^2 u}{\\partial x\\partial y}=\\dfrac{\\partial^2 u}{\\partial y^2}$</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$\\dfrac{\\partial^2 u}{\\partial x\\partial y}=\\dfrac{\\partial^2 u}{\\partial x^2}$</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>因为\n$$\\dfrac{\\partial u}{\\partial x}=\\varphi'(x+y)+\\varphi'(x-y)+\\psi(x+y)-\\psi(x-y),$$\n$$\\dfrac{\\partial u}{\\partial y}=\\varphi'(x+y)-\\varphi'(x-y)+\\psi(x+y)+\\psi(x-y),$$\n于是\n$$\\dfrac{\\partial^2 u}{\\partial x^2}=\\varphi''(x+y)+\\varphi''(x-y)+\\psi'(x+y)-\\psi'(x-y),$$\n$$\\dfrac{\\partial^2 u}{\\partial x\\partial y}=\\varphi''(x+y)-\\varphi''(x-y)+\\psi'(x+y)+\\psi'(x-y),$$\n$$\\dfrac{\\partial^2 u}{\\partial y^2}=\\varphi''(x+y)+\\varphi''(x-y)+\\psi'(x+y)-\\psi'(x-y),$$\n可得 $\\dfrac{\\partial^2 u}{\\partial x^2}=\\dfrac{\\partial^2 u}{\\partial y^2}$，应选（B）．"
  },
  {
    id: "5.27",
    originalNo: "5.27",
    chapter: "5",
    pageNo: "202",
    type: "解答",
    isRealExam: false,
    problemHTML: "设 $y=f(x,t)$，$t$ 是由方程 $F(x,y,t)=0$ 所确定的 $x,y$ 的函数，其中 $f,F$ 都具有一阶连续偏导数，求 $\\dfrac{\\mathrm dy}{\\mathrm dx}$．",
    answerHTML: "<b>解：</b>由已知条件，视为方程组 $\\begin{cases}y=f(x,t),\\\\ F(x,y,t)=0\\end{cases}$ 确定 $y=y(x)$，$t=t(x)$．\n方程两边同时对 $x$ 求导，得\n$$\\begin{cases}\\dfrac{\\mathrm dy}{\\mathrm dx}=f_x'+f_t'\\dfrac{\\mathrm dt}{\\mathrm dx},\\\\ F_x'+F_y'\\cdot\\dfrac{\\mathrm dy}{\\mathrm dx}+F_t'\\dfrac{\\mathrm dt}{\\mathrm dx}=0,\\end{cases}$$\n两式消去 $\\dfrac{\\mathrm dt}{\\mathrm dx}$，得 $\\dfrac{\\mathrm dy}{\\mathrm dx}=\\dfrac{f_x'F_t'-f_t'F_x'}{F_t'+f_t'F_y'}$．"
  },
  {
    id: "5.30",
    originalNo: "5.30",
    chapter: "5",
    pageNo: "204",
    type: "单选",
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设函数 $z(x,y)$ 具有二阶连续偏导数，则下列各项中的变换能将方程\n$$2\\dfrac{\\partial^2 z}{\\partial x^2}+\\dfrac{\\partial^2 z}{\\partial x\\partial y}-3\\dfrac{\\partial^2 z}{\\partial y^2}=0$$\n化简为 $\\dfrac{\\partial^2 z}{\\partial u\\partial v}=0$ 的是（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（A）$\\begin{cases}u=x+y,\\\\ v=-\\dfrac{2}{3}x+y,\\end{cases}$</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）$\\begin{cases}u=x-\\dfrac{2}{3}y,\\\\ v=x+y,\\end{cases}$</td></tr><tr><td style=\"padding:3px 32px 3px 0;vertical-align:top\">（C）$\\begin{cases}u=x-\\dfrac{2}{3}y,\\\\ v=\\dfrac{3}{2}x+y,\\end{cases}$</td><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$\\begin{cases}u=x+\\dfrac{2}{3}y,\\\\ v=-\\dfrac{3}{2}x+y.\\end{cases}$</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>观察选项知，可设 $\\begin{cases}u=x+by,\\\\ v=cx+y.\\end{cases}$ 将 $u$，$v$ 看作中间变量，分别计算 $\\dfrac{\\partial z}{\\partial x}$，$\\dfrac{\\partial z}{\\partial y}$，$\\dfrac{\\partial^2 z}{\\partial x^2}$，$\\dfrac{\\partial^2 z}{\\partial x\\partial y}$，$\\dfrac{\\partial^2 z}{\\partial y^2}$．\n$$\\dfrac{\\partial z}{\\partial x}=\\dfrac{\\partial z}{\\partial u}+c\\dfrac{\\partial z}{\\partial v},\\qquad \\dfrac{\\partial z}{\\partial y}=b\\dfrac{\\partial z}{\\partial u}+\\dfrac{\\partial z}{\\partial v},$$\n$$\\dfrac{\\partial^2 z}{\\partial x^2}=\\dfrac{\\partial^2 z}{\\partial u^2}+2c\\dfrac{\\partial^2 z}{\\partial u\\partial v}+c^2\\dfrac{\\partial^2 z}{\\partial v^2},$$\n$$\\dfrac{\\partial^2 z}{\\partial x\\partial y}=b\\dfrac{\\partial^2 z}{\\partial u^2}+(1+bc)\\dfrac{\\partial^2 z}{\\partial u\\partial v}+c\\dfrac{\\partial^2 z}{\\partial v^2},\\qquad \\dfrac{\\partial^2 z}{\\partial y^2}=b^2\\dfrac{\\partial^2 z}{\\partial u^2}+2b\\dfrac{\\partial^2 z}{\\partial u\\partial v}+\\dfrac{\\partial^2 z}{\\partial v^2}.$$\n代入 $2\\dfrac{\\partial^2 z}{\\partial x^2}+\\dfrac{\\partial^2 z}{\\partial x\\partial y}-3\\dfrac{\\partial^2 z}{\\partial y^2}=0$，可得\n$$(2+b-3b^2)\\dfrac{\\partial^2 z}{\\partial u^2}+(4c+1+bc-6b)\\dfrac{\\partial^2 z}{\\partial u\\partial v}+(2c^2+c-3)\\dfrac{\\partial^2 z}{\\partial v^2}=0.$$\n由已知条件，该方程可化简为 $\\dfrac{\\partial^2 z}{\\partial u\\partial v}=0$，故\n$$\\begin{cases}2+b-3b^2=0,\\\\ 4c+1+bc-6b\\neq0,\\\\ 2c^2+c-3=0.\\end{cases}$$\n解得 $b=1$ 或 $-\\dfrac{2}{3}$，$c=1$ 或 $-\\dfrac{3}{2}$．由此可排除选项 A、C、D．并且，选项 B 满足 $b=-\\dfrac{2}{3}$，$c=1$，且符合 $4c+1+bc-6b\\neq0$ 的要求．因此，应选 B．"
  },
  {
    id: "5.35",
    originalNo: "5.35",
    chapter: "5",
    pageNo: "206",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2022 数二）设可微函数 $f(u,v)$ 满足 $\\dfrac{\\partial f(u,v)}{\\partial u}-\\dfrac{\\partial f(u,v)}{\\partial v}=2(u-v)\\mathrm e^{-(u+v)}$，且 $f(u,0)=u^2\\mathrm e^{-u}$．\n（1）记 $g(x,y)=f(x,y-x)$，求 $\\dfrac{\\partial g}{\\partial x}$；\n（2）求 $f(u,v)$ 的表达式和极值．",
    answerHTML: "<b>解：</b>（1）$\\dfrac{\\partial g}{\\partial x}=f_1'(x,y-x)-f_2'(x,y-x)=2\\left[x-(y-x)\\right]\\mathrm e^{-(x+y-x)}=2(2x-y)\\mathrm e^{-y}$．\n（2）由（1）可得 $g(x,y)=2\\left(x^2-xy\\right)\\mathrm e^{-y}+C(y)$，\n又 $f(x,0)=g(x,x)=C(x)=x^2\\mathrm e^{-x}$，\n所以 $C(x)=x^2\\mathrm e^{-x}$，$g(x,y)=2\\left(x^2-xy\\right)\\mathrm e^{-y}+y^2\\mathrm e^{-y}=\\left(2x^2-2xy+y^2\\right)\\mathrm e^{-y}$．\n令 $x=u$，$y=u+v$，可得 $f(u,v)=-2uv\\mathrm e^{-(u+v)}+(u+v)^2\\mathrm e^{-(u+v)}=\\left(u^2+v^2\\right)\\mathrm e^{-(u+v)}$．\n令 $\\begin{cases}f_u'=\\left(2u-\\left(u^2+v^2\\right)\\right)\\mathrm e^{-(u+v)}=0,\\\\ f_v'=\\left(2v-\\left(u^2+v^2\\right)\\right)\\mathrm e^{-(u+v)}=0,\\end{cases}$ 解得 $(u,v)=(0,0)$ 或 $(1,1)$．\n在驻点 $(0,0)$ 处，$A=f_{uu}''(0,0)=2\\gt0$，$B=f_{uv}''(0,0)=0$，$C=f_{vv}''(0,0)=2$，$AC-B^2=4\\gt0$，于是 $f(0,0)=0$ 为极小值．\n在驻点 $(1,1)$ 处，$A=f_{uu}''(1,1)=0$，$B=f_{uv}''(1,1)=-2\\mathrm e^{-2}$，$C=f_{vv}''(1,1)=0$，$AC-B^2=-4\\mathrm e^{-4}\\lt0$，于是 $(1,1)$ 不是极值点．"
  },
  {
    id: "5.36",
    originalNo: "5.36",
    chapter: "5",
    pageNo: "208",
    type: "单选",
    isRealExam: false,
    problemHTML: "（李艳芳 900 题）设函数 $f(x,y)$ 连续，且 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{x^4+y^3-2x^2-y^2}=1$，则（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（A）点 $(0,0)$ 不是 $f(x,y)$ 的极值点．</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）点 $(0,0)$ 是 $f(x,y)$ 的极大值点．</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（C）点 $(0,0)$ 是 $f(x,y)$ 的极小值点．</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）不能确定点 $(0,0)$ 是否为 $f(x,y)$ 的极值点．</td></tr></tbody></table>",
    answerHTML: "<b>答：B</b>\n<b>解：</b>由于 $\\displaystyle\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)}{x^4+y^3-2x^2-y^2}=1$，故 $\\displaystyle\\lim_{(x,y)\\to(0,0)}f(x,y)=0$．又因为 $f(x,y)$ 连续，所以 $f(0,0)=0$．\n注意到 $x^4+y^3-2x^2-y^2=x^2\\left(x^2-2\\right)+y^2(y-1)$．当 $x^2+y^2\\lt1$ 且 $x^2+y^2\\neq0$ 时，$x^2\\left(x^2-2\\right)\\lt0$，$y^2(y-1)\\lt0$，从而 $x^2\\left(x^2-2\\right)+y^2(y-1)\\lt0$．\n由极限的局部保号性可知，存在 $\\delta\\gt0$，当 $0\\lt x^2+y^2\\lt\\delta$ 时，$f(x,y)\\lt0=f(0,0)$．\n因此，点 $(0,0)$ 为 $f(x,y)$ 的极大值点．应选 B．"
  },
  {
    id: "5.37",
    originalNo: "5.37",
    chapter: "5",
    pageNo: "208",
    type: "解答",
    isRealExam: true,
    problemHTML: "（2023 数一）求函数 $f(x,y)=\\left(y-x^2\\right)\\left(y-x^3\\right)$ 的极值．",
    answerHTML: "<b>解：</b>①计算 $f(x,y)$ 的驻点．\n$$f_x'(x,y)=-2x\\left(y-x^3\\right)-3x^2\\left(y-x^2\\right)=5x^4-3x^2y-2xy=x\\left(5x^3-3xy-2y\\right),$$\n$$f_y'(x,y)=y-x^3+y-x^2=2y-x^3-x^2.$$\n令 $\\begin{cases}x\\left(5x^3-3xy-2y\\right)=0,\\\\ 2y-x^3-x^2=0.\\end{cases}$ 由 $2y-x^3-x^2=0$ 可得 $y=\\dfrac{x^2(x+1)}{2}$．将其代入 $x\\left(5x^3-3xy-2y\\right)=0$ 可得\n$$x\\left[5x^3-\\dfrac{3x^3(x+1)}{2}-x^2(x+1)\\right]=0.$$\n整理可得 $x^3\\left(3x^2-5x+2\\right)=0$，即 $x^3(x-1)(3x-2)=0$．解得 $x=0$，$x=1$ 或 $x=\\dfrac{2}{3}$．由此可得 $f(x,y)$ 的全部驻点为 $(0,0)$，$(1,1)$，$\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$．\n②计算 $f(x,y)$ 的二阶偏导数．\n$$f_{xx}''(x,y)=5x^3-3xy-2y+x\\left(15x^2-3y\\right)=20x^3-6xy-2y=2\\left(10x^3-3xy-y\\right),$$\n$$f_{xy}''(x,y)=x(-3x-2)=-3x^2-2x,\\qquad f_{yy}''(x,y)=2.$$\n③计算 $AC-B^2$．\n（i）对点 $(0,0)$，$A=f_{xx}''(0,0)=0$，$B=f_{xy}''(0,0)=0$，$C=f_{yy}''(0,0)=2$，$AC-B^2=0$，无法由二元函数极值存在的充分条件判断该点是否为极值点．\n由 $f(x,y)$ 的表达式可知，$f(0,0)=0$．取 $y=2x^2$，当 $x$ 为充分小的正数时，\n$$f(x,y)=\\left(2x^2-x^2\\right)\\left(2x^2-x^3\\right)=x^4(2-x)\\gt0;$$\n取 $y=2x^3$，当 $x$ 为充分小的正数时，\n$$f(x,y)=\\left(2x^3-x^2\\right)\\left(2x^3-x^3\\right)=x^5(2x-1)\\lt0.$$\n因此，不论在点 $(0,0)$ 的多么小的邻域内，均既有 $f(x,y)\\gt0$ 的点，也有 $f(x,y)\\lt0$ 的点．根据极值点的定义，点 $(0,0)$ 不是 $f(x,y)$ 的极值点．\n（ii）对点 $(1,1)$，$A=f_{xx}''(1,1)=12$，$B=f_{xy}''(1,1)=-5$，$C=f_{yy}''(1,1)=2$，$AC-B^2=-1\\lt0$．由二元函数极值存在的充分条件可知，点 $(1,1)$ 不是 $f(x,y)$ 的极值点．\n（iii）对点 $\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$，$A=f_{xx}''\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)=\\dfrac{100}{27}$，$B=f_{xy}''\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)=-\\dfrac{8}{3}$，$C=f_{yy}''\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)=2$，$AC-B^2=\\dfrac{8}{27}\\gt0$，且 $A\\gt0$．由二元函数极值存在的充分条件可知，点 $\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$ 是 $f(x,y)$ 的极小值点．极小值为\n$$f\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)=\\left(\\dfrac{10}{27}-\\dfrac{4}{9}\\right)\\times\\left(\\dfrac{10}{27}-\\dfrac{8}{27}\\right)=-\\dfrac{4}{729}.$$"
  },
  {
    id: "5.40",
    originalNo: "5.40",
    chapter: "5",
    pageNo: "210",
    type: "单选",
    isRealExam: true,
    problemHTML: "（2014 数二）设 $u(x,y)$ 在平面有界闭区域 $D$ 上连续，在 $D$ 的内部具有二阶连续偏导数，且满足 $\\dfrac{\\partial^2 u}{\\partial x\\partial y}\\neq0$ 及 $\\dfrac{\\partial^2 u}{\\partial x^2}+\\dfrac{\\partial^2 u}{\\partial y^2}=0$，则（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（A）$u(x,y)$ 的最大值点和最小值点必定都在区域 $D$ 的边界上</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）$u(x,y)$ 的最大值点和最小值点必定都在区域 $D$ 的内部</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（C）$u(x,y)$ 的最大值点在区域 $D$ 的内部，最小值点在区域 $D$ 的边界上</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）$u(x,y)$ 的最小值点在区域 $D$ 的内部，最大值点在区域 $D$ 的边界上</td></tr></tbody></table>",
    answerHTML: "<b>答：A</b>\n<b>解：</b>由于 $u(x,y)$ 是有界闭区域 $D$ 上的连续函数，故 $u(x,y)$ 在 $D$ 上必有最大值和最小值．若 $u(x,y)$ 在区域 $D$ 的内部取得最大值或最小值，则该最值点是 $u(x,y)$ 的驻点．\n由题设，对区域 $D$ 内的任何一点，都有 $\\dfrac{\\partial^2 u}{\\partial x^2}+\\dfrac{\\partial^2 u}{\\partial y^2}=0$，故 $\\dfrac{\\partial^2 u}{\\partial x^2}\\cdot\\dfrac{\\partial^2 u}{\\partial y^2}\\leqslant0$，而 $\\dfrac{\\partial^2 u}{\\partial x\\partial y}\\neq0$，从而 $\\left(\\dfrac{\\partial^2 u}{\\partial x\\partial y}\\right)^2\\gt0$，因此 $\\dfrac{\\partial^2 u}{\\partial x^2}\\cdot\\dfrac{\\partial^2 u}{\\partial y^2}-\\left(\\dfrac{\\partial^2 u}{\\partial x\\partial y}\\right)^2\\lt0$．特别地，该不等式对区域 $D$ 内的驻点也成立．\n由二元函数极值存在的充分条件知，区域 $D$ 内的驻点都不是 $u(x,y)$ 的极值点．因此 $u(x,y)$ 的最大值和最小值都在 $D$ 的边界上取得．应选 A．"
  },
  {
    id: "5.41",
    originalNo: "5.41",
    chapter: "5",
    pageNo: "211",
    type: "单选",
    isRealExam: false,
    problemHTML: "（张宇 8 套卷）设 $f(x,y)$ 在有界闭区域 $D$ 上连续，在 $D$ 内有一阶偏导数．若 $f(x,y)$ 在 $D$ 的边界 $\\partial D$ 上的值均为 0，且 $\\dfrac{\\partial f(x,y)}{\\partial x}+\\dfrac{\\partial f(x,y)}{\\partial y}=f(x,y)$，则 $f(x,y)$ 符合（　　）\n<table style=\"border-collapse:collapse\"><tbody><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（A）在 $D$ 内有正的最大值</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（B）在 $D$ 内有负的最小值</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（C）只在 $D$ 的边界 $\\partial D$ 上取到最大值</td></tr><tr><td style=\"padding:3px 0 3px 0;vertical-align:top\">（D）在 $D$ 的边界 $\\partial D$ 上可以取到最小值</td></tr></tbody></table>",
    answerHTML: "<b>答：D</b>\n<b>解：</b>设在 $D$ 内存在 $(x_0,y_0)$，使得 $f(x_0,y_0)$ 为正的最大值．则 $f(x_0,y_0)\\gt0$，且 $f_x'(x_0,y_0)=0$，$f_y'(x_0,y_0)=0$．\n由题设条件得 $f_x'(x_0,y_0)+f_y'(x_0,y_0)=f(x_0,y_0)=0$，矛盾，故选项 A 不正确．同理，选项 B 也不正确．\n由上分析知，对于任意 $(x,y)\\in D$，有 $f(x,y)\\equiv0$，故 $f(x,y)$ 在 $D$ 的边界上和 $D$ 的内部处处为最大值，处处为最小值．选项 C 中\"只在 $D$ 的边界上取到最大值\"与内部处处取到最大值矛盾，不正确；选项 D 正确．应选 D．"
  },
  {
    id: "5.42",
    originalNo: "5.42",
    chapter: "5",
    pageNo: "211",
    type: "填空",
    isRealExam: true,
    problemHTML: "（2022 数一）当 $x\\geq0$，$y\\geq0$ 时，$x^2+y^2\\leq k\\mathrm e^{x+y}$ 恒成立，则 $k$ 的取值范围是________．",
    answerHTML: "<b>答：$\\left[4\\mathrm e^{-2},+\\infty\\right)$</b>\n<b>解：</b>原不等式等价于 $\\left(x^2+y^2\\right)\\mathrm e^{-(x+y)}\\leq k$．令 $f(x,y)=\\left(x^2+y^2\\right)\\mathrm e^{-(x+y)}$，只需 $k$ 不小于 $f(x,y)$ 在 $x\\geq0$，$y\\geq0$ 上的最大值．\n令 $\\begin{cases}f_x'=\\left(2x-x^2-y^2\\right)\\mathrm e^{-(x+y)}=0,\\\\ f_y'=\\left(2y-x^2-y^2\\right)\\mathrm e^{-(x+y)}=0,\\end{cases}$ 得 $\\begin{cases}x=0,\\\\y=0\\end{cases}$ 或 $\\begin{cases}x=1,\\\\y=1.\\end{cases}$\n当 $x=0$ 时，$f(0,y)=y^2\\mathrm e^{-y}$，最大值为 $4\\mathrm e^{-2}$；同理，$y=0$ 时，$f(x,0)=x^2\\mathrm e^{-x}$，最大值为 $4\\mathrm e^{-2}$．\n且 $\\displaystyle\\lim_{\\substack{x\\to+\\infty\\\\ y\\to+\\infty}}f(x,y)=\\lim_{\\substack{x\\to+\\infty\\\\ y\\to+\\infty}}\\dfrac{x^2+y^2}{\\mathrm e^{x+y}}=0$，$f(0,0)=0$，$f(1,1)=2\\mathrm e^{-2}$．\n因而 $f(x,y)$ 的最大值为 $4\\mathrm e^{-2}$，则有 $k\\geq4\\mathrm e^{-2}$，即 $k$ 的取值范围是 $\\left[4\\mathrm e^{-2},+\\infty\\right)$．"
  },
  {
    id: "5.43",
    originalNo: "5.43",
    chapter: "5",
    pageNo: "211",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李林 4 套卷）设当 $x\\geq0$，$y\\geq0$ 时，有 $\\left|x^2-y^2\\right|\\mathrm e^{-x^2-y^2}\\leq k$ 成立，求 $k$ 的最小值．",
    answerHTML: "<b>解：</b>$\\left|x^2-y^2\\right|\\mathrm e^{-x^2-y^2}\\leqslant k$ 等价于 $-k\\leqslant\\left(x^2-y^2\\right)\\mathrm e^{-x^2-y^2}\\leqslant k$．\n令 $f(x,y)=\\left(x^2-y^2\\right)\\mathrm e^{-x^2-y^2}$，求 $f(x,y)$ 在 $D=\\left\\{(x,y)\\mid x\\geqslant0,y\\geqslant0\\right\\}$ 上的最大值与最小值．\n由 $\\begin{cases}f_x'=-2\\mathrm e^{-x^2-y^2}x\\left(x^2-y^2-1\\right)=0,\\\\ f_y'=-2\\mathrm e^{-x^2-y^2}y\\left(x^2-y^2+1\\right)=0,\\end{cases}$ 得 $x=0$，$y=0$；$x=0$，$y=\\pm1$；$x=\\pm1$，$y=0$．故在 $D$ 内（即 $x\\gt0$，$y\\gt0$ 范围内）$f(x,y)$ 没有驻点．\n当 $x=0$ 时，$f(0,y)=-y^2\\mathrm e^{-y^2}$，由 $f_y'(0,y)=-2\\mathrm e^{-y^2}\\left(y-y^3\\right)=0$，得 $y=0$，$y=\\pm1$，由 $y\\geqslant0$，取 $(0,0)$，$(0,1)$．\n当 $y=0$ 时，$f(x,0)=x^2\\mathrm e^{-x^2}$，由 $f_x'(x,0)=2\\mathrm e^{-x^2}\\left(x-x^3\\right)=0$，得 $x=0$，$x=\\pm1$，由 $x\\geqslant0$，取 $(0,0)$，$(1,0)$．\n比较大小，$f(0,0)=0$，$f(0,1)=-\\mathrm e^{-1}$，$f(1,0)=\\mathrm e^{-1}$，故 $f(x,y)$ 在 $x\\geqslant0$，$y\\geqslant0$ 上的最大值为 $\\mathrm e^{-1}$，最小值为 $-\\mathrm e^{-1}$，所以 $k_{\\min}=\\mathrm e^{-1}$．"
  },
  {
    id: "5.47",
    originalNo: "5.47",
    chapter: "5",
    pageNo: "213",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李林 6 套卷）设函数 $f(x,y)$ 的全微分为 $\\mathrm df(x,y)=(2ax+by)\\,\\mathrm dx+(2by+ax)\\,\\mathrm dy$（$a$，$b$ 为常数），且 $f(0,0)=-3$，$f_x'(1,1)=3$．\n求：（1）$f(x,y)$；　　（2）点 $(-1,-1)$ 到曲线 $f(x,y)=0$ 上的点的距离的最大值．",
    answerHTML: "<b>解：</b>（1）由已知得，$f_x'=2ax+by$，$f_y'=2by+ax$，则 $f_{xy}''=b=f_{yx}''=a$，即 $a=b$．\n由 $f_x'(1,1)=3$，得 $2a+b=3$，故 $a=b=1$．从而\n$$\\mathrm df(x,y)=(2x+y)\\,\\mathrm dx+(2y+x)\\,\\mathrm dy=\\mathrm d\\left(x^2+y^2\\right)+\\mathrm d(xy)=\\mathrm d\\left(x^2+y^2+xy+c\\right),$$\n故 $f(x,y)=x^2+y^2+xy+c$，由 $f(0,0)=-3$，得 $c=-3$，即 $f(x,y)=x^2+y^2+xy-3$．\n（2）设 $(x,y)$ 为曲线 $f(x,y)=x^2+y^2+xy-3=0$ 上任意一点，则所求距离 $d=\\sqrt{(x+1)^2+(y+1)^2}$，本题要求 $(x+1)^2+(y+1)^2$ 在条件 $x^2+y^2+xy-3=0$ 下的最大值，用拉格朗日乘数法．\n令 $L=(1+x)^2+(1+y)^2+\\lambda\\left(x^2+y^2+xy-3\\right)$，则\n$$L_x=2(1+x)+\\lambda(2x+y)=0,\\qquad (1)$$\n$$L_y=2(1+y)+\\lambda(2y+x)=0,\\qquad (2)$$\n$$L_\\lambda=x^2+y^2+xy-3=0.\\qquad (3)$$\n由（1）与（2）消去 $\\lambda$，得 $(x-y)(x+y-1)=0$，从而 $x=y$ 或 $x+y=1$．\n当 $x=y$ 时，代入（3）式，解得 $x=y=\\pm1$；当 $x+y=1$ 时，代入（3）式，解得 $x=2$，$y=-1$ 或 $x=-1$，$y=2$．\n比较大小，因为 $d^2(1,1)=8$，$d^2(-1,-1)=0$，$d^2(2,-1)=d^2(-1,2)=9$，故所求最大值为 $\\sqrt9=3$．"
  },
  {
    id: "5.48",
    originalNo: "5.48",
    chapter: "5",
    pageNo: "213",
    type: "解答",
    isRealExam: false,
    problemHTML: "（李林 6 套卷）设第一象限内的函数 $f(x,y)$ 的全微分为 $\\mathrm df(x,y)=(6x+2y)\\,\\mathrm dx+(2x+6y)\\,\\mathrm dy$，且 $f(1,1)=8$．\n（1）求 $f(x,y)$；\n（2）在曲线 $f(x,y)=1$ 上求一点，使该点的切线与两坐标轴所围成的三角形面积最小，并求最小面积．",
    answerHTML: "<b>解：</b>（1）$\\mathrm df(x,y)=(6x+2y)\\,\\mathrm dx+(2x+6y)\\,\\mathrm dy=6x\\,\\mathrm dx+2y\\,\\mathrm dx+2x\\,\\mathrm dy+6y\\,\\mathrm dy=\\mathrm d\\left(3x^2+2xy+3y^2+C\\right)$，\n故 $f(x,y)=3x^2+2xy+3y^2+C$，由 $f(1,1)=8$，得 $C=0$．于是 $f(x,y)=3x^2+2xy+3y^2$．\n（2）设第一象限内曲线 $f(x,y)=1$ 上任一点为 $P(x,y)$．方程 $3x^2+2xy+3y^2=1$ 两边对 $x$ 求导，解得 $y'=-\\dfrac{3x+y}{x+3y}$．\n过点 $P$ 的切线方程为 $Y-y=-\\dfrac{3x+y}{x+3y}(X-x)$，切线与两个坐标轴的截距分别为 $x+\\dfrac{x+3y}{3x+y}\\cdot y$，$y+\\dfrac{3x+y}{x+3y}\\cdot x$，\n故三角形的面积为\n$$S=\\dfrac12\\left(x+\\dfrac{x+3y}{3x+y}\\cdot y\\right)\\left(y+\\dfrac{3x+y}{x+3y}\\cdot x\\right)=\\dfrac12\\cdot\\dfrac{1}{1+8xy}\\quad\\left(3x^2+2xy+3y^2=1\\right),$$\n故只需求 $xy$ 在条件 $3x^2+2xy+3y^2=1$ 下的最大值．令 $L=xy+\\lambda\\left(3x^2+2xy+3y^2-1\\right)$，则\n$$\\begin{cases}L_x=y+6\\lambda x+2\\lambda y=0,\\\\ L_y=x+2\\lambda x+6\\lambda y=0,\\\\ L_\\lambda=3x^2+2xy+3y^2-1=0.\\end{cases}$$\n解得 $x=y=\\dfrac{\\sqrt2}{4}$，所求点为 $P\\left(\\dfrac{\\sqrt2}{4},\\dfrac{\\sqrt2}{4}\\right)$．最小面积为\n$$S_{\\min}=\\dfrac12\\cdot\\dfrac{1}{1+8\\cdot\\dfrac{\\sqrt2}{4}\\cdot\\dfrac{\\sqrt2}{4}}=\\dfrac14.$$"
  }
);
