# Resume

个人在线简历（Vite + React + Tailwind v4），目标 GitHub Pages。

## 协作

1. 先读 [`design-system/MASTER.md`](design-system/MASTER.md)
2. 视觉、布局、文案禁令以该文件为准
3. Cursor 规则：`.cursor/rules/design-system.mdc`

## 改什么

| 要改 | 去哪 |
| --- | --- |
| 姓名、经历、教育、作品、技能、链接 | `src/data/resume.ts` |
| 数据结构 | `src/types/resume.ts` |
| 排版与组件 | `src/components/`、`src/App.tsx`、`src/index.css` |

页面顺序：技能 → 作品 → 经历 → 教育。不要把具体履历写进组件。不要新增设计系统或图标库。
