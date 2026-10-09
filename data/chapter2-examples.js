/* ---------------- 中值定理例题（中值证明例1–24，本文件当前含 1–24） ----------------
   来源：题面《高数强化合订本数三》书印 107-118（PDF=书印+5）；
         答案：答案合订本手写区 PDF 119-140（书印 117-138），一页一至三例，例7 跨两页。
   规范：第一章例题 id 用「数列例N」、第二章例题 id 用「中值证明例N」（编号分段命名，互不冲突）；
         app.js qnoKey 已加 /^中值证明例(\d+)$/ → [1001, N] 自然序。
   页码一律按数三册书印页。原书手写均有完整过程，故全部不标（补充过程）；
   仅中值证明例10（罗尔收尾）、中值证明例11（费马收尾）、中值证明例15（分点选取）、中值证明例24（法一反证/法二理顺）
   为补全并注明；中值证明例21（I）手写不等号笔误、中值证明例23法三系数笔误已复核更正并注明。
-------------------------------------------------------------- */

window.SEED_PROBLEMS = window.SEED_PROBLEMS || [];

  window.SEED_PROBLEMS.push({
    "id": "中值证明例1",
    "originalNo": "中值证明例1",
    "chapter": "2",
    "pageNo": "107",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$0 \\lt a \\lt b$，且 $f(a)=f(b)=0$，证明：\n（I）至少存在一点 $\\xi \\in (a,b)$，使得 $2f(\\xi)+\\xi f'(\\xi)=0$；\n（II）至少存在一点 $\\eta \\in (a,b)$，使得 $2\\eta f(\\eta)-f'(\\eta)=0$．",
    "answerHTML": "<b>证：</b>\n（I）令 $F(x)=x^2 f(x)$，则 $F'(x)=2x f(x)+x^2 f'(x)$．由题意 $F(a)=a^2 f(a)=0$，$F(b)=b^2 f(b)=0$，由罗尔定理，存在 $\\xi \\in (a,b)$，使得\n$$F'(\\xi)=2\\xi f(\\xi)+\\xi^2 f'(\\xi)=\\xi\\left[2f(\\xi)+\\xi f'(\\xi)\\right]=0,$$\n又 $\\xi \\in (a,b)$，$\\xi \\ne 0$，故 $2f(\\xi)+\\xi f'(\\xi)=0$．\n（II）令 $G(x)=\\mathrm{e}^{-x^2} f(x)$，由题意 $G(a)=G(b)=0$，且\n$$G'(x)=-2x\\mathrm{e}^{-x^2} f(x)+\\mathrm{e}^{-x^2} f'(x)=-\\mathrm{e}^{-x^2}\\left[2x f(x)-f'(x)\\right],$$\n由罗尔定理，存在 $\\eta \\in (a,b)$，使得 $G'(\\eta)=-\\mathrm{e}^{-\\eta^2}\\left[2\\eta f(\\eta)-f'(\\eta)\\right]=0$，故 $2\\eta f(\\eta)-f'(\\eta)=0$．\n【思路】（I）由 $2f(x)+x f'(x)=0$，两边除以 $x f(x)$ 得 $\\dfrac{2}{x}+\\dfrac{f'(x)}{f(x)}=0$，积分得 $2\\ln x+\\ln f(x)=C$，即 $\\ln\\left[x^2 f(x)\\right]=C$，故令 $F(x)=x^2 f(x)$；（还原法）（II）由 $f'(x)-2x f(x)=0$（微分方程法）解得 $f(x)=C\\mathrm{e}^{x^2}$，即 $\\mathrm{e}^{-x^2} f(x)=C$，故令 $G(x)=\\mathrm{e}^{-x^2} f(x)$．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例2",
    "originalNo": "中值证明例2",
    "chapter": "2",
    "pageNo": "107",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$0 \\lt a \\lt b$，且 $f(a)=0$，证明：至少存在一点 $\\xi \\in (a,b)$，使得 $a f(\\xi)+(\\xi-b) f'(\\xi)=0$．",
    "answerHTML": "<b>证：</b>要证 $f'(\\xi)+\\dfrac{a}{\\xi-b} f(\\xi)=0$，属于 $f'(\\xi)+g(\\xi) f(\\xi)=0$ 型，此处 $g(x)=\\dfrac{a}{x-b}$．\n令 $F(x)=\\mathrm{e}^{\\int \\frac{a}{x-b} \\mathrm{d}x} f(x)=\\mathrm{e}^{a\\ln(x-b)} f(x)=(x-b)^a f(x)$，\n由题意 $F(a)=(a-b)^a f(a)=0$，$F(b)=(b-b)^a f(b)=0$，由罗尔定理，存在 $\\xi \\in (a,b)$，使得\n$$F'(\\xi)=(\\xi-b)^{a-1}\\left[a f(\\xi)+(\\xi-b) f'(\\xi)\\right]=0,$$\n由于 $\\xi \\in (a,b)$，故 $(\\xi-b) \\ne 0$，得证．\n【注】「万能构造」的来历：由 $f'(x)+g(x) f(x)=0$（可分离变量：$\\dfrac{f'(x)}{f(x)}+g(x)=0$）积分得 $\\ln f(x)+\\int g(x)\\,\\mathrm{d}x=C$，即 $\\mathrm{e}^{\\int g(x)\\mathrm{d}x} f(x)=C$，故凡证 $f'(\\xi)+g(\\xi) f(\\xi)=0$，就令 $F(x)=\\mathrm{e}^{\\int g(x)\\mathrm{d}x} f(x)$，再找 $F$ 的两个零点用罗尔定理．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例3",
    "originalNo": "中值证明例3",
    "chapter": "2",
    "pageNo": "108",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $f(0)=f(1)$，试证存在 $\\xi \\in (0,1)$，使 $f''(\\xi)=\\dfrac{2f'(\\xi)}{1-\\xi}$．",
    "answerHTML": "<b>证：</b>要证 $f''(\\xi)=\\dfrac{2f'(\\xi)}{1-\\xi}$，即 $f''(x)+\\dfrac{2}{x-1} f'(x)=0$ 有零点．\n构造 $F(x)=\\mathrm{e}^{\\int \\frac{2}{x-1} \\mathrm{d}x} f'(x)=\\mathrm{e}^{2\\ln(x-1)} f'(x)=(x-1)^2 f'(x)$，找 $F(x)$ 的两个零点（或相等的点）：\n$F(1)=0$；又由 $f(0)=f(1)$ 及罗尔定理，存在 $\\eta \\in (0,1)$，使 $f'(\\eta)=0$，即 $F(\\eta)=0$．\n在 $[\\eta,1]$ 上对 $F(x)$ 用罗尔定理，存在 $\\xi \\in (\\eta,1) \\subset (0,1)$，使 $F'(\\xi)=0$，即\n$$2(\\xi-1) f'(\\xi)+(\\xi-1)^2 f''(\\xi)=0,$$\n约去 $\\xi-1 \\ne 0$，得 $f''(\\xi)=\\dfrac{2f'(\\xi)}{1-\\xi}$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例4",
    "originalNo": "中值证明例4",
    "chapter": "2",
    "pageNo": "108",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设函数 $f(x)$ 在 $[0,1]$ 上具有连续导数，且 $f(0)=0$，证明：存在 $\\xi \\in (0,1)$，使得\n$2\\xi \\int_0^1 f(x)\\,\\mathrm{d}x-f(\\xi)=0$．",
    "answerHTML": "<b>证：</b>设 $F(x)=\\int_0^x f(t)\\,\\mathrm{d}t$，要证 $2x F(1)-F'(x)=0$ 有零点，按「求导还原」构造 $\\varphi(x)=x^2 F(1)-F(x)$，则\n$\\varphi(1)=F(1)-F(1)=0$，$\\varphi(0)=0-F(0)=0$．\n对 $\\varphi(x)$ 在 $[0,1]$ 上用罗尔定理，存在 $\\xi \\in (0,1)$，使得\n$$\\varphi'(\\xi)=2\\xi F(1)-F'(\\xi)=2\\xi \\int_0^1 f(x)\\,\\mathrm{d}x-f(\\xi)=0,$$\n得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例5",
    "originalNo": "中值证明例5",
    "chapter": "2",
    "pageNo": "109",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 和 $g(x)$ 在 $[a,b]$ 上均有二阶导数且 $g(x) \\ne 0$，$g''(x) \\ne 0$，又 $f(a)=f(b)=g(a)=g(b)=0$，\n证明：存在 $\\xi \\in (a,b)$，使得 $\\dfrac{f(\\xi)}{g(\\xi)}=\\dfrac{f''(\\xi)}{g''(\\xi)}$．",
    "answerHTML": "<b>证：</b>即证 $f(\\xi) g''(\\xi)=g(\\xi) f''(\\xi)$，亦即 $f''(x) g(x)-f(x) g''(x)=0$ 有零点（「隔代」：结论隔了一代，先降次凑辅助函数）．\n$$\\left[f'(x) g(x)\\right]'=f''(x) g(x)+f'(x) g'(x), \\qquad \\left[f(x) g'(x)\\right]'=f'(x) g'(x)+f(x) g''(x),$$\n两式相减恰好消去 $f'(x) g'(x)$，故构造 $\\varphi(x)=f'(x) g(x)-f(x) g'(x)$，则 $\\varphi'(x)=f''(x) g(x)-f(x) g''(x)$．\n由题意 $\\varphi(a)=f'(a) g(a)-f(a) g'(a)=0$，$\\varphi(b)=f'(b) g(b)-f(b) g'(b)=0$，由罗尔定理，存在 $\\xi \\in (a,b)$，使得 $\\varphi'(\\xi)=0$，即\n$$f''(\\xi) g(\\xi)-f(\\xi) g''(\\xi)=0,$$\n又 $g(\\xi) \\ne 0$，$g''(\\xi) \\ne 0$，故 $\\dfrac{f(\\xi)}{g(\\xi)}=\\dfrac{f''(\\xi)}{g''(\\xi)}$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例6",
    "originalNo": "中值证明例6",
    "chapter": "2",
    "pageNo": "109",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 与 $g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=g(b)=0$，证明：至少存在一点 $\\xi \\in (a,b)$，使得 $f'(\\xi) \\int_\\xi^b g(t)\\,\\mathrm{d}t+g'(\\xi) \\int_a^\\xi f(t)\\,\\mathrm{d}t=0$．",
    "answerHTML": "<b>证：</b>令 $G(x)=\\int_b^x g(t)\\,\\mathrm{d}t$，$F(x)=\\int_a^x f(t)\\,\\mathrm{d}t$，则 $G'(x)=g(x)$，$F'(x)=f(x)$，且 $G(b)=0$，$F(a)=0$．要证原式，即\n$$-f'(x) G(x)+g'(x) F(x)=0$$\n有零点（其中 $-G(x)=\\int_x^b g(t)\\,\\mathrm{d}t$）．\n构造 $\\varphi(x)=G'(x) F(x)-F'(x) G(x)$，则 $\\varphi'(x)=g'(x) F(x)-f'(x) G(x)$．\n由题意 $\\varphi(a)=G'(a) F(a)-F'(a) G(a)=0$（$F(a)=0$，$F'(a)=f(a)=0$），$\\varphi(b)=G'(b) F(b)-F'(b) G(b)=0$（$G(b)=0$，$G'(b)=g(b)=0$），\n由罗尔定理，存在 $\\xi \\in (a,b)$，使 $\\varphi'(\\xi)=0$，即 $f'(\\xi) \\int_\\xi^b g(t)\\,\\mathrm{d}t+g'(\\xi) \\int_a^\\xi f(t)\\,\\mathrm{d}t=0$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例7",
    "originalNo": "中值证明例7",
    "chapter": "2",
    "pageNo": "110",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 上二阶可导，且 $f(a)=f(b)=0$，$\\int_a^b f(x)\\,\\mathrm{d}x=0$．求证：\n（1）在 $(a,b)$ 内至少有一点 $\\xi$，使得 $f'(\\xi)=f(\\xi)$；\n（2）在 $(a,b)$ 内至少有一点 $\\eta$，使得 $f''(\\eta)=f(\\eta)$．",
    "answerHTML": "<b>证：</b>（1）要证 $f'(\\xi)-f(\\xi)=0$．构造 $g(x)=\\mathrm{e}^{-x} f(x)$，则 $g(a)=g(b)=0$，由罗尔定理，存在 $\\xi \\in (a,b)$ 使 $g'(\\xi)=\\mathrm{e}^{-\\xi}\\left[f'(\\xi)-f(\\xi)\\right]=0$，得证．\n（2）法一：要证 $f''(x)-f(x)=0$．要记 $f''(x) g(x)-f(x) g''(x)=0$ 时，构造 $\\varphi(x)=f'(x) g(x)-f(x) g'(x)$．令 $g(x)=\\mathrm{e}^x$，$g'(x)=g''(x)=\\mathrm{e}^x$，则 $\\varphi(x)=f'(x) \\mathrm{e}^x-f(x) \\mathrm{e}^x=\\mathrm{e}^x\\left[f'(x)-f(x)\\right]$，$\\varphi'(x)=\\mathrm{e}^x\\left[f''(x)-f(x)\\right]$．故只需找 $f'(x)-f(x)$ 的两个相等的点：由（1）构造 $h(x)=\\mathrm{e}^{-x} f(x)$，$h'(x)=\\mathrm{e}^{-x}\\left[f'(x)-f(x)\\right]$ 与 $\\varphi(x)$ 有相同的零点，而 $h(x)$ 有三个零点：$a$，$b$，以及由 $\\int_a^b f(x)\\,\\mathrm{d}x=0$（积分零点定理）知存在的 $x_0 \\in (a,b)$ 使 $f(x_0)=0$．对 $h(x)$ 两次用罗尔定理，得 $h'$ 有两个零点，即 $\\varphi$ 有两个零点，再对 $\\varphi$ 用罗尔定理，存在 $\\eta \\in (a,b)$ 使 $\\varphi'(\\eta)=0$，即 $f''(\\eta)=f(\\eta)$，得证．\n法二（微分方程法）：由 $f''(x)-f(x)=0$，特征方程 $r^2-1=0$，$r= \\pm 1$，形式通解 $f(x)=C_1 \\mathrm{e}^x+C_2 \\mathrm{e}^{-x}$，$f'(x)=C_1 \\mathrm{e}^x-C_2 \\mathrm{e}^{-x}$，则 $f(x)+f'(x)=2C_1 \\mathrm{e}^x$，$\\mathrm{e}^{-x}\\left[f(x)+f'(x)\\right]=2C_1$（常数）．故令 $F(x)=\\mathrm{e}^{-x}\\left[f(x)+f'(x)\\right]$，则\n$$F'(x)=-\\mathrm{e}^{-x}\\left[f(x)+f'(x)\\right]+\\mathrm{e}^{-x}\\left[f'(x)+f''(x)\\right]=\\mathrm{e}^{-x}\\left[f''(x)-f(x)\\right],$$\n故只需证 $F'(\\eta)=0$，即找 $F(x)$ 的两个零点：$F$ 的零点即 $f(x)+f'(x)=0$ 的点，即 $h(x)=\\mathrm{e}^x f(x)$ 的驻点（$h'(x)=\\mathrm{e}^x\\left[f(x)+f'(x)\\right]$），而 $h(x)$ 与（1）中 $g(x)=\\mathrm{e}^{-x} f(x)$ 一样有三个零点 $a$，$x_0$，$b$，故 $h'$ 有两个零点，$F$ 有两个零点，罗尔定理得 $F'(\\eta)=0$，即 $f''(\\eta)=f(\\eta)$．\n【变形题】特征方程为 $r^2-3r+2=0$ 时，同法证明 $f''(\\eta)-3f'(\\eta)+2f(\\eta)=0$．由形式通解 $f(x)=C_1 \\mathrm{e}^x+C_2 \\mathrm{e}^{2x}$，$f'(x)=C_1 \\mathrm{e}^x+2C_2 \\mathrm{e}^{2x}$，得 $f'(x)-f(x)=C_2 \\mathrm{e}^{2x}$，即 $\\mathrm{e}^{-2x}\\left[f'(x)-f(x)\\right]=C_2$（常数），故令 $\\varphi(x)=\\mathrm{e}^{-2x}\\left[f'(x)-f(x)\\right]$，则 $\\varphi'(x)=\\mathrm{e}^{-2x}\\left[f''(x)-3f'(x)+2f(x)\\right]$；构造 $h(x)=\\mathrm{e}^{-x} f(x)$，$h'(x)=\\mathrm{e}^{-x}\\left[f'(x)-f(x)\\right]$ 与 $\\varphi$ 共零点，$h$ 的三个零点 $a$，$x_0$，$b$ 给出 $\\varphi$ 的两个零点，罗尔定理得 $\\varphi'(\\eta)=0$，即 $f''(\\eta)-3f'(\\eta)+2f(\\eta)=0$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例8",
    "originalNo": "中值证明例8",
    "chapter": "2",
    "pageNo": "110",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设奇函数 $f(x)$ 在 $[-1,1]$ 上二阶可导，且 $f(1)=1$，证明：\n（1）至少存在一点 $\\xi \\in (0,1)$，使得 $f'(\\xi)=1$；\n（2）至少存在一点 $\\eta \\in (-1,1)$，使得 $f''(\\eta)+f'(\\eta)=1$．",
    "answerHTML": "<b>证：</b>（1）由 $f(x)$ 为奇函数得 $f(0)=0$，又 $f(1)=1$，由拉格朗日中值定理，存在 $\\xi \\in (0,1)$，使 $f'(\\xi)=\\dfrac{f(1)-f(0)}{1-0}=1$．\n（2）要证 $f''(x)+f'(x)-1=0$，即 $\\left[f'(x)-1\\right]'+\\left[f'(x)-1\\right]=0$（万能构造型）．构造 $\\varphi(x)=\\mathrm{e}^x\\left[f'(x)-1\\right]$，则 $\\varphi'(x)=\\mathrm{e}^x\\left[f''(x)+f'(x)-1\\right]$．\n由（1）取 $\\xi \\in (0,1)$ 使 $f'(\\xi)=1$，则 $\\varphi(\\xi)=0$；又 $f(x)$ 为奇函数 $\\Rightarrow$ $f'(x)$ 为偶函数，故 $f'(-\\xi)=f'(\\xi)=1$，$\\varphi(-\\xi)=0$．\n在 $[-\\xi,\\xi]$ 上对 $\\varphi(x)$ 用罗尔定理，存在 $\\eta \\in (-\\xi,\\xi) \\subset (-1,1)$，使 $\\varphi'(\\eta)=0$，即 $f''(\\eta)+f'(\\eta)=1$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例9",
    "originalNo": "中值证明例9",
    "chapter": "2",
    "pageNo": "111",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 和 $g(x)$ 在 $[a,b]$ 二阶可导，$f(a)=f(b)=g(a)=0$，\n证明：存在 $\\xi \\in (a,b)$，使得 $f''(\\xi) g(\\xi)+2f'(\\xi) g'(\\xi)+f(\\xi) g''(\\xi)=0$．",
    "answerHTML": "<b>证：</b>记 $h(x)=f(x) g(x)$，则 $h(a)=f(a) g(a)=0$，$h(b)=f(b) g(b)=0$，由罗尔定理，存在 $\\eta \\in (a,b)$，使\n$$h'(\\eta)=f'(\\eta) g(\\eta)+f(\\eta) g'(\\eta)=0.$$\n构造 $\\varphi(x)=f'(x) g(x)+f(x) g'(x)$（即 $h'(x)$），则 $\\varphi'(x)=f''(x) g(x)+2f'(x) g'(x)+f(x) g''(x)$，且\n$$\\varphi(a)=f'(a) g(a)+f(a) g'(a)=0 \\quad \\left(g(a)=0,\\ f(a)=0\\right),$$\n又 $\\varphi(\\eta)=0$，在 $[a,\\eta]$ 上对 $\\varphi(x)$ 用罗尔定理，存在 $\\xi \\in (a,\\eta) \\subset (a,b)$，使 $\\varphi'(\\xi)=0$，即 $f''(\\xi) g(\\xi)+2f'(\\xi) g'(\\xi)+f(\\xi) g''(\\xi)=0$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例10",
    "originalNo": "中值证明例10",
    "chapter": "2",
    "pageNo": "111",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设函数 $f(x)$，$g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内具有二阶导数且存在相等的最大值，$f(a)=g(a)$，$f(b)=g(b)$，证明：存在 $\\xi \\in (a,b)$，使得 $f''(\\xi)=g''(\\xi)$．",
    "answerHTML": "<b>证：</b>要证 $f''(x)-g''(x)=0$．构造 $\\varphi(x)=f(x)-g(x)$，则 $\\varphi(a)=f(a)-g(a)=0$，$\\varphi(b)=f(b)-g(b)=0$．\n设 $f$ 与 $g$ 的最大值相等，记 $\\max=f(x_1)=g(x_2)$．\n（1） 若两函数在同一点取得最大值，即 $f(x_0)=g(x_0)=\\max$，则 $\\varphi(x_0)=0$；\n（2） 若两函数不在同一点取得最大值，则 $f(x_1) \\gt g(x_1)$，$f(x_2) \\lt g(x_2)$，即 $\\varphi(x_1) \\gt 0$，$\\varphi(x_2) \\lt 0$，由零点定理，存在介于 $x_1$ 与 $x_2$ 之间的 $x_0$，使 $\\varphi(x_0)=0$．\n于是 $\\varphi$ 在 $[a,b]$ 上有三个零点 $a$，$x_0$，$b$，在 $[a,x_0]$ 与 $[x_0,b]$ 上分别用罗尔定理，得 $\\varphi'(\\eta_1)=\\varphi'(\\eta_2)=0$，再在 $[\\eta_1,\\eta_2]$ 上用罗尔定理，存在 $\\xi \\in (a,b)$，使 $\\varphi''(\\xi)=0$，即 $f''(\\xi)=g''(\\xi)$，得证．\n【易错提醒】（1）（2）中的最大值点须在 $(a,b)$ 内取得（若在端点取得，$f(x_1) \\gt g(x_1)$ 不再成立）．原书手写证至 $\\varphi(x_0)=0$，最后两次罗尔为补全收尾．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例11",
    "originalNo": "中值证明例11",
    "chapter": "2",
    "pageNo": "112",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上有连续导数，$f(1)=1$，$f(c)=1$，其中 $c \\in (0,1)$。证明：\n（I）存在 $\\xi \\in (0,1)$，使得 $f'(\\xi)=0$；\n（II）存在 $\\eta \\in (0,1)$，使得 $f'(\\eta)=f(\\eta)-f(0)$．",
    "answerHTML": "<b>证：</b>\n（I）由 $f(1)=f(c)=1$，在 $[c,1]$ 上用罗尔定理，得 $\\exists\\ \\xi \\in (c,1) \\subset (0,1)$，使 $f'(\\xi)=0$．\n（II）构造 $\\varphi(x)=\\mathrm{e}^{-x}\\left[f(x)-f(0)\\right]$，则 $\\varphi(0)=0$，$\\varphi(c)=\\mathrm{e}^{-c}\\left[1-f(0)\\right]$，$\\varphi(1)=\\mathrm{e}^{-1}\\left[1-f(0)\\right]$，且\n$$\\varphi'(x)=\\mathrm{e}^{-x}\\left[f'(x)-f(x)+f(0)\\right]=\\mathrm{e}^{-x}\\left\\{\\left[f(x)-f(0)\\right]'-\\left[f(x)-f(0)\\right]\\right\\}.$$\n分三种情形讨论（原书手写：（1） $\\varphi(\\xi)=\\varphi'(\\xi)=0$；（2） $\\varphi(\\xi) \\gt 0$；（3） $\\varphi(\\xi) \\lt 0$）：\n（1） 若 $f(0)=1$：则 $\\varphi(c)=\\varphi(1)=0$，在 $[c,1]$ 上用罗尔定理，存在 $\\eta \\in (c,1)$ 使 $\\varphi'(\\eta)=0$；\n（2） 若 $f(0) \\lt 1$：$\\varphi(c)=\\mathrm{e}^{-c}\\left[1-f(0)\\right] \\gt \\mathrm{e}^{-1}\\left[1-f(0)\\right]=\\varphi(1) \\gt 0=\\varphi(0)$，故 $\\varphi$ 在 $(0,1)$ 内部某点 $\\xi$ 取得最大值 $\\varphi(\\xi) \\gt 0$，由费马引理 $\\varphi'(\\xi)=0$；\n（3） 若 $f(0) \\gt 1$：$\\varphi(c) \\lt \\varphi(1) \\lt 0=\\varphi(0)$，故 $\\varphi$ 在 $(0,1)$ 内部某点 $\\xi$ 取得最小值 $\\varphi(\\xi) \\lt 0$，由费马引理 $\\varphi'(\\xi)=0$．\n三种情形均有 $\\eta=\\xi \\in (0,1)$ 使 $\\varphi'(\\eta)=\\mathrm{e}^{-\\eta}\\left[f'(\\eta)-f(\\eta)+f(0)\\right]=0$，即 $f'(\\eta)=f(\\eta)-f(0)$，得证．\n【注】原书手写给出构造 $\\varphi(x)=\\mathrm{e}^{-x}\\left[f(x)-f(0)\\right]$ 及（1）（2）（3）三种情形的思路，费马引理收尾为补全．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例12",
    "originalNo": "中值证明例12",
    "chapter": "2",
    "pageNo": "112",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)=1$，试证存在 $\\xi,\\eta \\in (a,b)$ 使 $\\mathrm{e}^{\\xi-\\eta}\\left[f(\\eta)+f'(\\eta)\\right]=1$．",
    "answerHTML": "<b>证：</b>（分离）要证 $\\mathrm{e}^{\\eta}\\left[f(\\eta)+f'(\\eta)\\right]=\\mathrm{e}^{\\xi}$．\n（从复杂入手）注意到 $\\left[\\mathrm{e}^{x}f(x)\\right]'=\\mathrm{e}^{x}\\left[f(x)+f'(x)\\right]$，对 $g(x)=\\mathrm{e}^{x}f(x)$ 在 $[a,b]$ 上用拉格朗日中值定理：存在 $\\eta \\in (a,b)$，使\n$$\\frac{\\mathrm{e}^{b}f(b)-\\mathrm{e}^{a}f(a)}{b-a}=\\mathrm{e}^{\\eta}\\left[f(\\eta)+f'(\\eta)\\right].$$\n又 $f(a)=f(b)=1$，故 $\\mathrm{e}^{b}f(b)-\\mathrm{e}^{a}f(a)=\\mathrm{e}^{b}-\\mathrm{e}^{a}$；再对 $h(x)=\\mathrm{e}^{x}$ 在 $[a,b]$ 上用拉格朗日中值定理：存在 $\\xi \\in (a,b)$，使 $\\dfrac{\\mathrm{e}^{b}-\\mathrm{e}^{a}}{b-a}=\\mathrm{e}^{\\xi}$．\n于是 $\\mathrm{e}^{\\eta}\\left[f(\\eta)+f'(\\eta)\\right]=\\dfrac{\\mathrm{e}^{b}-\\mathrm{e}^{a}}{b-a}=\\mathrm{e}^{\\xi}$，即 $\\mathrm{e}^{\\xi-\\eta}\\left[f(\\eta)+f'(\\eta)\\right]=1$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例13",
    "originalNo": "中值证明例13",
    "chapter": "2",
    "pageNo": "113",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=1$，$f(1)=\\mathrm{e}$，证明：存在 $\\xi \\in \\left(0,\\dfrac{1}{2}\\right)$，$\\eta \\in \\left(\\dfrac{1}{2},1\\right)$，使得 $f'(\\xi)+f'(\\eta)=\\mathrm{e}^{\\xi}+\\mathrm{e}^{\\eta}$．",
    "answerHTML": "<b>证：</b>即证 $f'(\\xi)-\\mathrm{e}^{\\xi}=-\\left[f'(\\eta)-\\mathrm{e}^{\\eta}\\right]$．构造 $\\varphi(x)=f(x)-\\mathrm{e}^{x}$，在 $\\left[0,\\dfrac{1}{2}\\right]$ 与 $\\left[\\dfrac{1}{2},1\\right]$ 上分别用拉格朗日中值定理：\n$$\\varphi\\left(\\dfrac{1}{2}\\right)-\\varphi(0)=\\dfrac{1}{2}\\varphi'(\\xi)=\\dfrac{1}{2}\\left(f'(\\xi)-\\mathrm{e}^{\\xi}\\right) \\qquad (1)$$\n$$\\varphi(1)-\\varphi\\left(\\dfrac{1}{2}\\right)=\\dfrac{1}{2}\\varphi'(\\eta)=\\dfrac{1}{2}\\left(f'(\\eta)-\\mathrm{e}^{\\eta}\\right) \\qquad (2)$$\n其中 $\\varphi(0)=f(0)-\\mathrm{e}^{0}=1-1=0$，$\\varphi(1)=f(1)-\\mathrm{e}=0$．\n（1）+（2） $\\Rightarrow\\ 0=\\dfrac{1}{2}\\left[f'(\\xi)-\\mathrm{e}^{\\xi}\\right]+\\dfrac{1}{2}\\left[f'(\\eta)-\\mathrm{e}^{\\eta}\\right]$，即 $f'(\\xi)+f'(\\eta)=\\mathrm{e}^{\\xi}+\\mathrm{e}^{\\eta}$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例14",
    "originalNo": "中值证明例14",
    "chapter": "2",
    "pageNo": "113",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0$，$f(1)=1$，证明：至少存在不同的两点 $\\xi_1,\\xi_2 \\in (0,1)$，使得 $f'(\\xi_1)f'(\\xi_2)=1$．",
    "answerHTML": "<b>证：</b>在 $(0,1)$ 内取分点 $c$（取法见后）．在 $[0,c]$ 与 $[c,1]$ 上分别用拉格朗日中值定理：\n$$f'(\\xi_1)=\\frac{f(c)-f(0)}{c-0}=\\frac{f(c)}{c}, \\qquad f'(\\xi_2)=\\frac{f(1)-f(c)}{1-c}=\\frac{1-f(c)}{1-c},$$\n于是 $f'(\\xi_1)f'(\\xi_2)=\\dfrac{f(c)}{c} \\cdot \\dfrac{1-f(c)}{1-c}$．\n要使上式 $=1$，即 $\\dfrac{f(c)-f^{2}(c)}{c-c^{2}}=1$，整理得 $\\left[f(c)-c\\right]\\left[1-f(c)-c\\right]=0$，即 $f(c)=c$ 或 $f(c)=1-c$．\n（原书手写注：取 $f(c)=c$ 不合适——内点解并无保证；）令 $f(c)=1-c$：令 $g(x)=f(x)+x-1$，则 $g(0)=f(0)-1=-1 \\lt 0$，$g(1)=f(1)+1-1=1 \\gt 0$，由零点定理，存在 $c \\in (0,1)$ 使 $g(c)=0$，即 $f(c)=1-c$．\n对此分点 $c$：$f'(\\xi_1)f'(\\xi_2)=\\dfrac{1-c}{c} \\cdot \\dfrac{c}{1-c}=1$，且 $\\xi_1 \\in (0,c)$，$\\xi_2 \\in (c,1)$，故 $\\xi_1 \\ne \\xi_2$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例15",
    "originalNo": "中值证明例15",
    "chapter": "2",
    "pageNo": "114",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上可导，且 $f(0)=0$，$f(1)=1$，证明：在 $(0,1)$ 内存在不同的两点 $\\xi,\\eta$，使得 $\\dfrac{1}{f'(\\xi)}+\\dfrac{1}{f'(\\eta)}=2$．",
    "answerHTML": "<b>证：</b>取分点 $c \\in (0,1)$（取法见后）．在 $[0,c]$ 与 $[c,1]$ 上分别用拉格朗日中值定理：\n$$f'(\\xi)=\\frac{f(c)-f(0)}{c-0}=\\frac{f(c)}{c}, \\qquad f'(\\eta)=\\frac{f(1)-f(c)}{1-c}=\\frac{1-f(c)}{1-c},$$\n$$\\frac{1}{f'(\\xi)}+\\frac{1}{f'(\\eta)}=\\frac{c}{f(c)}+\\frac{1-c}{1-f(c)}=\\frac{c\\left[1-f(c)\\right]+(1-c)f(c)}{f(c)-f^{2}(c)}.$$\n要使上式 $=2$：$c-cf(c)+f(c)-cf(c)=2\\left[f(c)-f^{2}(c)\\right]$，整理得 $2f^{2}(c)-(2c+1)f(c)+c=0$，即 $\\left[2f(c)-1\\right]\\left[f(c)-c\\right]=0$，故 $f(c)=c$ 或 $f(c)=\\dfrac{1}{2}$．\n（补全收尾）取 $f(c)=\\dfrac{1}{2}$：令 $g(x)=f(x)-\\dfrac{1}{2}$，则 $g(0)=-\\dfrac{1}{2} \\lt 0$，$g(1)=\\dfrac{1}{2} \\gt 0$，由零点定理存在 $c \\in (0,1)$ 使 $f(c)=\\dfrac{1}{2}$（若 $f(c)=c$ 恰有内点解亦可；但内点解并无保证，如 $f(x)=x^{2}$，故用零点定理取 $f(c)=\\dfrac{1}{2}$ 最稳妥——原书手写止于 $f(c)=c$ 或 $f(c)=\\dfrac{1}{2}$）．\n对此分点 $c$：$\\dfrac{1}{f'(\\xi)}+\\dfrac{1}{f'(\\eta)}=\\dfrac{c}{1/2}+\\dfrac{1-c}{1/2}=2c+2(1-c)=2$，且 $\\xi \\in (0,c)$，$\\eta \\in (c,1)$，故 $\\xi \\ne \\eta$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例16",
    "originalNo": "中值证明例16",
    "chapter": "2",
    "pageNo": "114",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "证明：若 $f'(x_0)=f''(x_0)=\\cdots=f^{(n-1)}(x_0)=0$，$f^{(n)}(x_0) \\ne 0$（$n \\ge 2$），则当 $n$ 为偶数时 $f(x)$ 在 $x_0$ 处有极值．其中 $f^{(n)}(x_0) \\gt 0$ 时极小，$f^{(n)}(x_0) \\lt 0$ 时极大；当 $n$ 为奇数时 $f(x)$ 在 $x_0$ 处无极值．",
    "answerHTML": "<b>证：</b>【极值与拐点的第三个充要条件】用带佩亚诺余项的泰勒公式：\n$$f(x)=f(x_0)+f'(x_0)(x-x_0)+\\cdots+\\frac{f^{(n-1)}(x_0)}{(n-1)!}(x-x_0)^{n-1}+\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^{n}+o\\left((x-x_0)^{n}\\right).$$\n由 $f'(x_0)=f''(x_0)=\\cdots=f^{(n-1)}(x_0)=0$，得\n$$f(x)-f(x_0)=\\left[\\frac{f^{(n)}(x_0)}{n!}+o(1)\\right](x-x_0)^{n}$$\n（在 $x_0$ 的充分小邻域内，方括号与 $\\dfrac{f^{(n)}(x_0)}{n!}$ 同号）．\n当 $n$ 为偶数、$f^{(n)}(x_0) \\gt 0$ 时：$f(x)-f(x_0) \\gt 0$（$x \\ne x_0$），$\\therefore f(x) \\gt f(x_0)$，$\\therefore$ 取极小值；\n当 $n$ 为偶数、$f^{(n)}(x_0) \\lt 0$ 时：同理 $f(x)-f(x_0) \\lt 0$，$\\therefore$ 取极大值；\n当 $n$ 为奇数时：$(x-x_0)^{n}$ 变号，两侧 $f(x)-f(x_0)$ 随之变号（或正或负），$\\therefore$ 无极值．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例17",
    "originalNo": "中值证明例17",
    "chapter": "2",
    "pageNo": "115",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $(a,b)$ 内有 $f''(x) \\lt 0$，证明：当 $n \\ge 2$ 时，若 $x_1,x_2,\\cdots,x_n \\in (a,b)$，且 $x_{i-1} \\lt x_i$（$i=2,3,\\cdots,n$），则有\n$$f\\left(\\frac{x_1+x_2+\\cdots+x_n}{n}\\right) \\gt \\frac{f(x_1)+f(x_2)+\\cdots+f(x_n)}{n}.$$",
    "answerHTML": "<b>证：</b>【凹凸性的几何意义】令 $\\dfrac{x_1+x_2+\\cdots+x_n}{n}$ 记为 $x_0$，则 $nx_0=x_1+x_2+\\cdots+x_n$．\n$$f(x_1)=f(x_0)+f'(x_0)(x_1-x_0)+\\frac{f''(\\xi_1)}{2!}(x_1-x_0)^{2},$$\n由 $f''(x) \\lt 0$，其中 $\\dfrac{f''(\\xi_1)}{2!}(x_1-x_0)^{2} \\lt 0$（$x_1 \\ne x_0$ 时），$\\therefore f(x_1) \\lt f(x_0)+f'(x_0)(x_1-x_0)$．\n同理可得 $f(x_2) \\lt f(x_0)+f'(x_0)(x_2-x_0)$，$\\cdots$，$f(x_n) \\lt f(x_0)+f'(x_0)(x_n-x_0)$．\n诸式相加：\n$$f(x_1)+f(x_2)+\\cdots+f(x_n) \\lt nf(x_0)+f'(x_0)\\left[x_1+x_2+\\cdots+x_n-nx_0\\right]=nf(x_0)$$\n（$\\because nx_0=x_1+x_2+\\cdots+x_n$）．$\\therefore f(x_0) \\gt \\dfrac{f(x_1)+f(x_2)+\\cdots+f(x_n)}{n}$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例18",
    "originalNo": "中值证明例18",
    "chapter": "2",
    "pageNo": "115",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上具有二阶导数，且 $|f(x)| \\le a$，$|f''(x)| \\le b$，其中 $a$，$b$ 都是非负常数，$c$ 是 $(0,1)$ 内任一点．\n（1）写出 $f(x)$ 在点 $c$ 处带拉格朗日型余项的一阶泰勒公式；\n（2）证明：$|f'(c)| \\le 2a+\\dfrac{b}{2}$．",
    "answerHTML": "（1）$$f(x)=f(c)+f'(c)(x-c)+\\frac{f''(\\xi)}{2!}(x-c)^{2},$$其中 $\\xi$ 介于 $c$ 与 $x$ 之间．\n（2）<b>证：</b>在（1）中分别取 $x=0$ 与 $x=1$：\n$$f(0)=f(c)-f'(c) \\cdot c+\\frac{f''(\\xi_1)}{2}c^{2} \\qquad (1)$$\n$$f(1)=f(c)+f'(c)(1-c)+\\frac{f''(\\xi_2)}{2}(1-c)^{2} \\qquad (2)$$\n（2）$-$（1）得 $f(1)-f(0)=f'(c)+\\dfrac{f''(\\xi_2)}{2}(1-c)^{2}-\\dfrac{f''(\\xi_1)}{2}c^{2}$，即\n$$f'(c)=f(1)-f(0)+\\frac{f''(\\xi_1)}{2}c^{2}-\\frac{f''(\\xi_2)}{2}(1-c)^{2}.$$\n利用 $|a+b| \\le |a|+|b|$：\n$$|f'(c)| \\le |f(0)|+|f(1)|+\\frac{b}{2}c^{2}+\\frac{b}{2}(1-c)^{2} \\le 2a+\\frac{b}{2}\\left[c^{2}+(1-c)^{2}\\right].$$\n$\\therefore\\ c^{2}+(1-c)^{2} \\le \\left[c+(1-c)\\right]^{2}=1$，$\\therefore\\ |f'(c)| \\le 2a+\\dfrac{b}{2}$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例19",
    "originalNo": "中值证明例19",
    "chapter": "2",
    "pageNo": "116",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设函数 $f(x)$ 在闭区间 $[-1,1]$ 上具有三阶连续导数，且 $f(-1)=0$，$f(1)=1$，$f'(0)=0$，证明：在开区间 $(-1,1)$ 内至少存在一点 $\\xi$，使 $f'''(\\xi)=3$．",
    "answerHTML": "<b>证：</b>将 $f(x)$ 在 $x_0=0$ 处展开（带拉格朗日余项的二阶泰勒公式）：\n$$f(x)=f(0)+f'(0)x+\\frac{f''(0)}{2!}x^{2}+\\frac{f'''(\\xi)}{3!}x^{3}.$$\n分别取 $x=-1$ 与 $x=1$：\n$$f(-1)=f(0)-f'(0)+\\frac{f''(0)}{2}-\\frac{f'''(\\xi_1)}{6}=0 \\qquad (1)$$\n$$f(1)=f(0)+f'(0)+\\frac{f''(0)}{2}+\\frac{f'''(\\xi_2)}{6}=1 \\qquad (2)$$\n（2）$-$（1）得 $f(1)-f(-1)=\\dfrac{1}{6}\\left[f'''(\\xi_1)+f'''(\\xi_2)\\right]=1$（$f'(0)=0$），$\\therefore f'''(\\xi_1)+f'''(\\xi_2)=6$．\n根据介值定理：在开区间 $(-1,1)$ 内至少存在一点 $\\xi$，使 $f'''(\\xi)=\\dfrac{f'''(\\xi_1)+f'''(\\xi_2)}{2}=3$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例20",
    "originalNo": "中值证明例20",
    "chapter": "2",
    "pageNo": "116",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上二阶可导，$f(0)=f(1)=0$，$\\max\\limits_{0 \\le x \\le 1} f(x)=2$．试证存在点 $\\xi \\in (0,1)$ 使 $f''(\\xi) \\le -16$．",
    "answerHTML": "<b>证：</b>设 $\\max\\limits_{x \\in [0,1]} f(x)=f(c)=2$，则 $c \\in (0,1)$（$f(0)=f(1)=0 \\lt 2$，最大值只能在内部取得），且由费马引理 $f'(c)=0$．\n由泰勒公式 $f(x)=f(c)+f'(c)(x-c)+\\dfrac{f''(\\xi)}{2!}(x-c)^{2}$，分别取 $x=0$ 与 $x=1$：\n$$f(0)=f(c)-f'(c) \\cdot c+\\frac{f''(\\xi_1)}{2}c^{2} \\qquad (1)$$\n$$f(1)=f(c)+f'(c)(1-c)+\\frac{f''(\\xi_2)}{2}(1-c)^{2} \\qquad (2)$$\n化简得：$0=2+\\dfrac{f''(\\xi_1)}{2}c^{2}$，即 $f''(\\xi_1)=-\\dfrac{4}{c^{2}}$；$0=2+\\dfrac{f''(\\xi_2)}{2}(1-c)^{2}$，即 $f''(\\xi_2)=-\\dfrac{4}{(1-c)^{2}}$．\n由介值定理（$f''$ 作为导函数具有介值性），一定存在 $\\xi_3$ 介于 $\\xi_1$ 与 $\\xi_2$ 之间，使\n$$f''(\\xi_3)=\\frac{f''(\\xi_1)+f''(\\xi_2)}{2}=-4\\left[\\frac{1}{c^{2}}+\\frac{1}{(1-c)^{2}}\\right].$$\n即证 $-4\\left[\\dfrac{1}{c^{2}}+\\dfrac{1}{(1-c)^{2}}\\right] \\le -16$，即 $\\dfrac{1}{c^{2}}+\\dfrac{1}{(1-c)^{2}} \\ge 4$．\n令 $c=\\sin^{2}\\theta$，则\n$$\\frac{1}{c^{2}}+\\frac{1}{(1-c)^{2}}=\\frac{\\left(\\sin^{2}\\theta+\\cos^{2}\\theta\\right)^{2}}{\\sin^{4}\\theta}+\\frac{\\left(\\sin^{2}\\theta+\\cos^{2}\\theta\\right)^{2}}{\\cos^{4}\\theta}$$\n$$=1+\\frac{\\cos^{4}\\theta}{\\sin^{4}\\theta}+\\frac{2\\cos^{2}\\theta}{\\sin^{2}\\theta}+1+\\frac{\\sin^{4}\\theta}{\\cos^{4}\\theta}+\\frac{2\\sin^{2}\\theta}{\\cos^{2}\\theta}.$$\n由 $a^{2}+b^{2} \\ge 2ab$：$\\dfrac{\\cos^{4}\\theta}{\\sin^{4}\\theta}+\\dfrac{\\sin^{4}\\theta}{\\cos^{4}\\theta} \\ge 2$，且 $\\dfrac{2\\cos^{2}\\theta}{\\sin^{2}\\theta}+\\dfrac{2\\sin^{2}\\theta}{\\cos^{2}\\theta} \\ge 4$，\n$\\therefore\\ \\dfrac{1}{c^{2}}+\\dfrac{1}{(1-c)^{2}} \\ge 8 \\ge 4$，得证．\n即：存在点 $\\xi=\\xi_3 \\in (0,1)$，使 $f''(\\xi) \\le -16$．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例21",
    "originalNo": "中值证明例21",
    "chapter": "2",
    "pageNo": "117",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[a,b]$ 上有二阶连续导数，且 $f(a)=f(b)=0$，$M=\\max\\limits_{a \\le x \\le b}\\left|f''(x)\\right|$．\n（I）证明：$\\max\\limits_{a \\le x \\le b}|f(x)| \\le \\dfrac{1}{8}M(b-a)^{2}$；\n（II）证明：$\\max\\limits_{a \\le x \\le b}|f'(x)| \\le \\dfrac{1}{2}M(b-a)$．",
    "answerHTML": "（I）<b>证：</b>【泰勒】令 $\\max\\limits_{a \\le x \\le b}|f(x)|$ 记作 $|f(x_0)|$．若 $|f(x_0)|=0$ 则 $f \\equiv 0$，不等式显然；否则 $x_0 \\in (a,b)$，由费马引理 $f'(x_0)=0$．\n由泰勒公式 $f(x)=f(x_0)+f'(x_0)(x-x_0)+\\dfrac{f''(\\xi)}{2!}(x-x_0)^{2}$，分别取 $x=a$ 与 $x=b$：\n$$0=f(a)=f(x_0)+f'(x_0)(a-x_0)+\\frac{f''(\\xi_1)}{2}(a-x_0)^{2} \\qquad (1)$$\n$$0=f(b)=f(x_0)+f'(x_0)(b-x_0)+\\frac{f''(\\xi_2)}{2}(b-x_0)^{2} \\qquad (2)$$\n由 $f'(x_0)=0$：$|f(x_0)|=\\dfrac{|f''(\\xi_1)|}{2}(a-x_0)^{2} \\le \\dfrac{M}{2}(a-x_0)^{2}$，同理 $|f(x_0)| \\le \\dfrac{M}{2}(b-x_0)^{2}$．\n若 $x_0=\\dfrac{a+b}{2}$，代入（1）式得 $|f(x_0)| \\le \\dfrac{M}{2}\\left(\\dfrac{b-a}{2}\\right)^{2}=\\dfrac{1}{8}M(b-a)^{2}$；\n若 $x_0 \\in \\left[a,\\dfrac{a+b}{2}\\right]$，则 $(a-x_0)^{2} \\le \\left(a-\\dfrac{a+b}{2}\\right)^{2}$，代入（1）式得 $|f(x_0)| \\le \\dfrac{1}{8}M(b-a)^{2}$；\n若 $x_0 \\in \\left(\\dfrac{a+b}{2},b\\right]$，则 $(b-x_0)^{2} \\le \\left(b-\\dfrac{a+b}{2}\\right)^{2}$，代入（2）式得 $|f(x_0)| \\le \\dfrac{1}{8}M(b-a)^{2}$．\n综上：$\\max\\limits_{a \\le x \\le b}|f(x)| \\le \\dfrac{1}{8}M(b-a)^{2}$，得证．\n【注】原书手写中间情形的不等号写作「$\\ge$」，应为「$\\le$」（$x_0$ 越靠近 $a$，$(a-x_0)^{2}$ 越小），系笔误（书页上亦标注「视频讲解笔误」），已按正确方向录入．\n（II）<b>证：</b>令 $|f'(\\xi_1)|=\\max\\limits_{a \\le x \\le b}|f'(x)|$．将 $f(x)$ 在 $\\xi_1$ 处展开：\n$$f(x)=f(\\xi_1)+f'(\\xi_1)(x-\\xi_1)+\\frac{f''(\\eta)}{2!}(x-\\xi_1)^{2}.$$\n则 $0=f(a)=f(\\xi_1)+f'(\\xi_1)(a-\\xi_1)+\\dfrac{f''(\\eta_1)}{2!}(a-\\xi_1)^{2}$ —— （3）\n$\\ 0=f(b)=f(\\xi_1)+f'(\\xi_1)(b-\\xi_1)+\\dfrac{f''(\\eta_2)}{2!}(b-\\xi_1)^{2}$ —— （4）\n由（3）$-$（4）得：$(b-a)f'(\\xi_1)=\\dfrac{f''(\\eta_1)}{2}(a-\\xi_1)^{2}-\\dfrac{f''(\\eta_2)}{2}(b-\\xi_1)^{2}$．\n利用 $|a-b| \\le |a|+|b|$：\n$$(b-a)\\left|f'(\\xi_1)\\right| \\le \\frac{M}{2}\\left[(a-\\xi_1)^{2}+(b-\\xi_1)^{2}\\right] \\le \\frac{M}{2}(b-a)^{2},$$\n（其中 $(a-\\xi_1)^{2}+(b-\\xi_1)^{2} \\le (b-a)^{2}$：令 $t=\\xi_1-a \\in [0,b-a]$，左端 $=t^{2}+(b-a-t)^{2} \\le (b-a)^{2}$）\n$\\therefore\\ |f'(\\xi_1)| \\le \\dfrac{M}{2}(b-a)$，即 $\\max\\limits_{a \\le x \\le b}|f'(x)| \\le \\dfrac{1}{2}M(b-a)$，得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例22",
    "originalNo": "中值证明例22",
    "chapter": "2",
    "pageNo": "117",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[a,b]$（$b \\gt a$）上二阶可导，且 $f(a) \\ge f(b)=0$，$f''(x) \\le 0$．证明：$f(x) \\le \\dfrac{2}{b-a}\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$．",
    "answerHTML": "<b>证：</b>即证 $\\max\\limits_{a \\le x \\le b}f(x) \\le \\dfrac{2}{b-a}\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$．\n<b>法一：</b>∵ $f(x)$ 在 $[a,b]$ 上二阶可导，$f''(x) \\le 0$，∴ $f(x)$ 为凸函数．\n（1）当最大值在区间内部取得时：∵ $f''(x) \\le 0$，假设 $f(x)$ 上的点存在于弦 $l$ 下方，则总能得出 $f''(x) \\gt 0$，与已知矛盾，∴ $f(x)$ 上所有点均在弦 $l$ 上方．\n$$\\int_a^b f(x)\\,\\mathrm{d}x \\ \\ge\\ \\frac{f(a)+f(x_0)}{2}(x_0-a)+\\frac{f(x_0)+f(b)}{2}(b-x_0) \\ \\ge\\ \\frac{f(x_0)}{2}(x_0-a)+\\frac{f(x_0)}{2}(b-x_0)=\\frac{b-a}{2}f(x_0),$$\n∴ $f(x_0) \\le \\dfrac{2}{b-a}\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$，即证．\n（2）当最大值在 $a$ 点取得时：同理 $f(x)$ 上所有点均在弦 $l$ 上方，\n$$\\int_a^b f(x)\\,\\mathrm{d}x \\ \\ge\\ \\frac{f(a)+0}{2}(b-a)=\\frac{b-a}{2}f(a),$$\n∴ $f(a) \\le \\dfrac{2}{b-a}\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$，即证．（最大值在 $b$ 点取得时 $f(b)=0 \\ge f(a) \\ge f(x)$，即 $f \\equiv 0$，显然）\n<b>法二：</b>设最大值点为 $x_0$．将 $f(x_0)$ 在 $x$ 处展开：\n$$f(x_0)=f(x)+f'(x)(x_0-x)+\\frac{f''(\\xi)}{2!}(x_0-x)^{2},$$\n∴ $f(x_0) \\le f(x)+f'(x)(x_0-x)$．\n两边积分得：\n$$(b-a)f(x_0) \\le \\int_a^b f(x)\\,\\mathrm{d}x+\\int_a^b (x_0-x)\\,\\mathrm{d}f(x)=\\int_a^b f(x)\\,\\mathrm{d}x+(x_0-x)f(x)\\Big|_a^b-\\int_a^b f(x)\\,\\mathrm{d}(x_0-x)$$\n$$=\\int_a^b f(x)\\,\\mathrm{d}x+\\left[(x_0-b)f(b)-(x_0-a)f(a)\\right]+\\int_a^b f(x)\\,\\mathrm{d}x=2\\int_a^b f(x)\\,\\mathrm{d}x-(x_0-a)f(a).$$\n∵ $f(a) \\ge 0$，则 $(x_0-a)f(a) \\ge 0$，∴ $(b-a)f(x_0) \\le 2\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$，\n∴ $f(x_0) \\le \\dfrac{2}{b-a}\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$，即得证．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例23",
    "originalNo": "中值证明例23",
    "chapter": "2",
    "pageNo": "118",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "已知函数 $f(x)$ 在 $[0,1]$ 上具有 2 阶导数，且 $f(0)=0$，$f(1)=1$，$\\displaystyle\\int_0^1 f(x)\\,\\mathrm{d}x=1$，证明：\n（I）存在 $\\xi \\in (0,1)$，使得 $f'(\\xi)=0$；\n（II）存在 $\\eta \\in (0,1)$，使得 $f''(\\eta) \\lt -2$．",
    "answerHTML": "（I）<b>证：</b><b>法一：</b>∵ $\\displaystyle\\int_0^1 f(x)\\,\\mathrm{d}x=1$，由积分中值定理，存在点 $c \\in (0,1)$，$f(c)=1=f(1)$，由罗尔定理可得存在 $\\xi \\in (c,1) \\subset (0,1)$，$f'(\\xi)=0$．\n<b>法二：</b>【费马定理】∵ $f(x)$ 连续且 $f(0)=0$，$\\displaystyle\\int_0^1 f(x)\\,\\mathrm{d}x=1$，∴ 在 $(0,1)$ 内一定存在使 $f(x)$ 大于 1 的点（否则 $f(x) \\le 1$ 且不恒为 1，积分将小于 1），记 $f(m)=M=\\max\\limits_{[0,1]}f(x) \\gt 1$．又 ∵ $f(0)=0$，$f(1)=1$，由费马引理得 $f'(m)=0$，$m$ 一定是极值点（$m \\in (0,1)$）．\n（II）<b>法一：</b>【泰勒】由（I）法二之 $f'(m)=0$，将 $f(0)$ 在 $m$ 处展开：\n$$f(0)=f(m)+f'(m)(0-m)+\\frac{f''(\\xi)}{2!}(0-m)^{2},$$\n$$0=M+\\frac{f''(\\xi)}{2}m^{2}, \\qquad f''(\\xi)=-\\frac{2M}{m^{2}}.$$\n由 $m \\in (0,1)$，$M \\gt 0$，∴ $-2M \\lt 0$，$0 \\lt m^{2} \\lt 1$，∴ $f''(\\xi) \\lt -2M \\lt -2$，得证．\n<b>法二：</b>【拉格朗日】即证 $f''(\\eta)+2 \\lt 0$．令 $g(x)=f(x)+x^{2}$，取（I）中的分点 $c \\in (0,1)$（$f(c)=1$）：$g(0)=f(0)+0=0$，$g(c)=f(c)+c^{2}=1+c^{2}$，$g(1)=f(1)+1=2$．\n$$g'(\\xi_1)=\\frac{g(c)-g(0)}{c-0}=\\frac{1+c^{2}}{c}=c+\\frac{1}{c}, \\qquad g'(\\xi_2)=\\frac{g(1)-g(c)}{1-c}=\\frac{2-1-c^{2}}{1-c}=1+c,$$\n由 $c \\in (0,1)$，则 $\\dfrac{1}{c} \\gt 1$，∴ $g'(\\xi_1) \\gt g'(\\xi_2)$．对 $g'$ 在 $[\\xi_1,\\xi_2]$ 上用拉格朗日中值定理：\n$$g''(\\eta)=\\frac{g'(\\xi_2)-g'(\\xi_1)}{\\xi_2-\\xi_1} \\lt 0,$$\n即 $f''(\\eta)+2 \\lt 0$，$f''(\\eta) \\lt -2$，得证．\n<b>法三：</b>【构造多项式】令 $p(x)=ax^{2}+bx+C$．∵ $f(0)=0$，∴ $C=0$，$p(x)=ax^{2}+bx$；∵ $f(1)=1$，∴ $a+b=1$；∵ $\\displaystyle\\int_0^1 f(x)\\,\\mathrm{d}x=1=\\int_0^1(ax^{2}+bx)\\,\\mathrm{d}x$，∴ $\\dfrac{a}{3}+\\dfrac{b}{2}=1$．解得 $a=-3$，$b=4$，∴ $p(x)=-3x^{2}+4x$．\n令 $g(x)=f(x)-p(x)$，则对于 $g(x)$ 而言，有 $g(0)=0$，$g(1)=0$，$\\displaystyle\\int_0^1 g(x)\\,\\mathrm{d}x=0$．\n若 $g \\equiv 0$，则 $f=p$，$f''(x)=-6 \\lt -2$，结论显然；否则由 $g$ 连续、$\\displaystyle\\int_0^1 g=0$ 知 $g$ 在 $(0,1)$ 内变号，由零点定理存在两个内点 $\\zeta_1,\\zeta_2$ 使 $g(\\zeta_1)=g(\\zeta_2)=0$，由罗尔定理得 $g'(\\eta)=0$（$\\eta$ 介于 $\\zeta_1$ 与 $\\zeta_2$ 之间）．\n∵ $g''(\\eta)=f''(\\eta)-p''(\\eta)=f''(\\eta)+6=0$，∴ $f''(\\eta)=-6 \\lt -2$，得证．\n【注】原书手写法三末两行写作 $f''(\\eta)+3=0$、$f''(\\eta)=-3$——由 $p(x)=-3x^{2}+4x$ 应有 $p''=-6$（系数 $a=-3$ 已按 700dpi 复核），系笔误（书页上亦标注「视频讲解笔误」），不影响结论，已按正确值录入；法三中 $g$ 有两个内点零点的说明为补全．"
  });

  window.SEED_PROBLEMS.push({
    "id": "中值证明例24",
    "originalNo": "中值证明例24",
    "chapter": "2",
    "pageNo": "118",
    "type": "解答",
    "isRealExam": false,
    "problemHTML": "设 $f(x)$ 在 $[0,1]$ 上有二阶连续导数，且 $f(1)=1$，$\\displaystyle\\int_0^1 f(x)\\,\\mathrm{d}x=\\dfrac{1}{2}$，证明：\n（I）方程 $f(x)=x$ 在 $(0,1)$ 内至少有一个实根 $x_0$；\n（II）若 $f(0) \\lt 0$，且对任意的 $x \\in (x_0,1)$，有 $f''(x) \\gt 0$，则至少存在一点 $\\eta \\in (0,1)$，使 $f''(\\eta)=0$．",
    "answerHTML": "（I）<b>证：</b>令 $p(x)=f(x)-x$，则 $p(1)=f(1)-1=0$，且\n$$\\int_0^1 p(x)\\,\\mathrm{d}x=\\int_0^1\\left[f(x)-x\\right]\\mathrm{d}x=\\dfrac{1}{2}-\\dfrac{1}{2}=0.$$\n若 $p(x)$ 在 $(0,1)$ 内恒正或恒负（不恒为 0），则由连续性积分不可能为 0；故 $p$ 在 $(0,1)$ 内变号或 $p \\equiv 0$，无论哪种情形均有 $p(x_0)=0$，$x_0 \\in (0,1)$，即 $f(x)=x$ 在 $(0,1)$ 内至少有一个实根 $x_0$．\n（II）<b>法一：</b>对 $f(x)$：先证一定存在 $\\xi$ 使 $f''(\\xi) \\lt 0$——反设 $f''(x) \\ge 0$ 于 $(0,1)$，则 $p(x)=f(x)-x$ 满足 $p''(x) \\ge 0$（凸），由割线斜率递增：\n$$p'(x_0) \\ge \\frac{p(x_0)-p(0)}{x_0-0}=\\frac{-f(0)}{x_0} \\gt 0, \\qquad p'(x_0) \\le \\frac{p(1)-p(x_0)}{1-x_0}=0,$$\n矛盾．故一定存在 $\\xi$ 使 $f''(\\xi) \\lt 0$；\n且对任意 $x \\in (x_0,1)$ 有 $f''(x) \\gt 0$，即一定有一点 $a$ 满足 $f''(a) \\gt 0$，$\\xi$ 与 $a$ 一定不重合．\n又 ∵ $f(x)$ 在 $[0,1]$ 上有二阶连续导数，由零点定理得一定存在一点 $\\eta$ 介于 $\\xi$ 与 $a$ 之间（$\\eta \\in (0,1)$），使 $f''(\\eta)=0$．\n<b>法二：</b>对 $p(x)=f(x)-x$，则 $p(0)=f(0) \\lt 0$；对任意 $x \\in (x_0,1)$，$p''(\\xi)=f''(\\xi) \\gt 0$，即 $p$ 在 $[x_0,1]$ 上为凸函数，而 $p(x_0)=p(1)=0$，故 $p$ 在 $(x_0,1)$ 内部某点 $\\xi_0$ 处取得最小值 $p(\\xi_0) \\lt 0$（若 $p \\equiv 0$ 于 $[x_0,1]$，则 $f''=0$ 于该区间，结论显然）．\n$x \\in (0,x_0)$ 时，由拉格朗日中值定理可得\n$$p'(\\xi_1)=\\frac{p(x_0)-p(0)}{x_0-0} \\gt 0;$$\n$x \\in (x_0,\\xi_0)$ 时，由拉格朗日中值定理可得\n$$p'(\\xi_2)=\\frac{p(\\xi_0)-p(x_0)}{\\xi_0-x_0} \\lt 0.$$\n则由零点定理（$p'$ 连续）得 $p'(\\xi_3)=0$（$\\xi_3$ 介于 $\\xi_1$ 与 $\\xi_2$ 之间），且在最小值点 $\\xi_0$ 处由费马引理 $p'(\\xi_0)=0$．由罗尔定理得 $p''(\\eta)=0$（$\\eta$ 介于 $\\xi_3$ 与 $\\xi_0$ 之间），即 $f''(\\eta)=0$，得证．\n【注】原书手写法一仅有零星要点（「一定存在 $f''(\\xi) \\lt 0$」「$a$ 与 $x_0$ 不重合」「由零点定理得 $f''(\\eta)=0$」），反证与凸性论证为补全；法二的框架与结论照原书，两处零点的得出方式已理顺．"
  });
