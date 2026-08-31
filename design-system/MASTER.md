# Resume Design System

面向招聘方的单页个人简历。读者在 30 秒内应看清：是谁、能做什么、作品在哪。

**Reading:** developer resume for recruiters (fullstack / AI 应用研发), dark-tech + engineer-minimal, Tailwind v4 + Geist.

## Dials

- `DESIGN_VARIANCE: 6`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 5`

## Theme

锁定深色。不要做浅色区块，不要跟 `prefers-color-scheme` 自动翻成浅色。

| Token | Value | 用途 |
| --- | --- | --- |
| `--color-bg-0` | `#141612` | 页面底 |
| `--color-bg-1` | `#1b1f1c` | 略抬升（nav） |
| `--color-ink` | `#e7ebe3` | 正文 |
| `--color-muted` | `#9aa394` | 次要文字 |
| `--color-accent` | `#c5d65c` | 唯一强调色 |
| `--color-line` | `rgb(231 235 227 / 0.12)` | 分割线 |
| `--font-sans` | Geist Variable | 标题与正文 |
| `--font-mono` | Geist Mono Variable | 技术栈、日期、code |

强调色只用于：主 CTA 底、文字链、技能 chip 边、focus ring。不要给标题上色，不要外发光。

圆角：CTA / chip / 图标按钮用 `rounded-full`。其余全部直角。

禁止：`#000`、`#fff`、紫蓝霓虹、serif、Inter、Google Fonts `<link>`。

## Type

- 姓名：`text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05]`
- 区块标题：`text-xl md:text-2xl font-semibold tracking-tight`
- 正文：`text-base leading-relaxed max-w-[65ch] text-ink`
- 次要：`text-sm text-muted`
- 技术栈：`font-mono text-xs text-muted`

## Layout

容器：`mx-auto w-full max-w-[1080px] px-4 md:px-6`。

| 区块 | 布局家族 | 规则 |
| --- | --- | --- |
| Nav | 单行 64px | 左姓名，中锚点（技能 / 作品 / 经历 / 教育），右 GitHub。桌面必须一行。 |
| Hero | 紧凑双栏 | `md:grid-cols-[auto_minmax(0,1fr)]`。姓名只占字宽，岗位、个人信息、简介、CTA 紧贴右侧，不要给姓名单独留一列空白。移动端单列。首屏必须看到 GitHub 与 Email。不要个人站点。副文不超过 20 个词。 |
| 技能 | 时间线 | 与经历同一套 `md:grid-cols-[8rem_1fr]`。左分组名，右一句定位（会什么 + 感兴趣什么）+ 3-4 条实践 + 关键词 chip。AI 组写热情与落地。不要三列等卡片。紧接 Hero。 |
| 作品 | 稀疏列表 | 名称 + 一句定位 + 2 条要点 + 技术栈。公开项外链，开发中私有项无外链、胶囊标「开发中」。不用卡片网格。 |
| 经历 | 时间线 | `md:grid-cols-[8rem_1fr]`，左时间右职责。每条写清问题与处理方式，不写流水账。 |
| 教育 | 时间线 | 与经历同一套 `md:grid-cols-[8rem_1fr]`。学校 + 专业，不要卡片。 |
| Footer | 单行 meta | 年份 + GitHub。不要版本号。 |

区块之间用 `border-t border-line`，列表行只用一侧分割线。

Eyebrow（uppercase + tracking）整页最多 1 个。默认不用。

## Motion

只做 `transform` / `opacity`。CSS 即可，不要上 Motion / GSAP。

- 首屏姓名与简介：一次 enter（约 600ms，`cubic-bezier(0.16, 1, 0.3, 1)`）
- 链接 hover：`-translate-y-px`；`:active`：`scale-[0.98]`
- `@media (prefers-reduced-motion: reduce)` 时全部关掉

## Content

事实只写在 `src/data/resume.ts`。不要在组件里写死经历/项目/技能。

- 技能 3 组。每组一句定位（会什么，对什么感兴趣），3-4 条实践。AI 组写热情与落地，不写空泛形容词。chip 只作关键词。
- 经历每条写清遇到的问题和处理方式，不写流水账职责。
- 作品条数以 `src/data/resume.ts` 为准。每条一句定位加 2 条要点。公开项必须有可点链接；开发中的私有项无外链，用胶囊标「开发中」
- 不编造日期、公司名、指标
- 用户可见文案禁止 em dash（`—` / `–`），用逗号、句号或连字符 `-`
- 一行里间隔号 `·` 最多 1 次
- 图标只用 `@phosphor-icons/react`，`weight="regular"`。不要手绘 SVG，不要 Lucide

## Anti-patterns

不要：居中大英雄区、三列等卡片、玻璃拟态、假终端/假仪表盘、滚动提示、区块编号、版本号页脚、城市天气条、装饰性状态点、渐变大标题、外发光、emoji。

可选头像：仅当存在 `public/portrait.jpg` 时再显示。不要生成假人像。

## z-index

`base 0` / `nav 10` / `skip-link 20`。不要再发明别的层。
