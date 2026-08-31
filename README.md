# Resume

个人在线简历（Vite + React + TypeScript + Tailwind），目标部署到 GitHub Pages。

设计规范：[`design-system/MASTER.md`](design-system/MASTER.md)。AI 协作见 [`AGENTS.md`](AGENTS.md)。

## 开发

```bash
pnpm install
pnpm dev
```

本地开发地址：<http://localhost:5173/resume/>（`base` 与 GitHub Pages 项目页一致）。

## 构建

```bash
pnpm build
pnpm preview
```

## 改内容

在 `src/data/resume.ts` 填写姓名、经历、作品链接和技能。不要把履历写进组件。

## 部署（GitHub Pages）

推送到 `main` 后，GitHub Actions 会构建并发布。地址：<https://yun8711.github.io/resume/>

前置条件：

1. Settings → Pages → Source 选 **GitHub Actions**
2. Settings → Pages 中有名为 `github-pages` 的 environment，并允许默认分支部署
3. 仓库名是 `resume`（对应 `vite.config.ts` 里的 `base: '/resume/'`）
