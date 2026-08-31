import type { ResumeData } from '../types/resume';

export const resume: ResumeData = {
  name: '刘云',
  title: '高级前端工程师',
  gender: '男',
  birth: '1987.11',
  location: '',
  summary: '全栈偏前端。做数据平台，也把 AI 接到自己的工具链和工作里。',
  links: {
    email: 'liuyun.dev@qq.com',
    github: 'https://github.com/yun8711',
    website: ''
  },
  experience: [
    {
      org: '科杰科技',
      role: '高级前端工程师',
      period: '2022.7 - 至今',
      highlights: [
        '多套数据产品并行时，规范不齐、重复劳动多。主导前端基建，落地 eslint / stylelint / commitlint 和 pnpm，单项目开发效率提高约 10% 到 30%。',
        '数据资产、数据服务、AI 门户要同屏协同。用 qiankun 做成宿主与子应用，避免巨石仓拖垮迭代。',
        'AI 平台和可信数据空间的技术栈与标品不同，硬套微前端会失控。做成独立应用，用 iframe 接到现有产品。',
        '工时填报和统计缺可靠后端。主导 Spring Boot + MySQL 服务端，把流程从表格里拆出来。',
        '模型写 Vue 2 组件时常编造 API。把组件文档做成 MCP，让 Cursor 按文档查 props 和页面模板。'
      ]
    },
    {
      org: '山西星枫智控',
      role: '前端工程师',
      period: '2020.10 - 2022.6',
      highlights: [
        '原系统数据层和业务层耦在一起，改一处容易伤全局。提出逻辑层重构，把数据访问从页面逻辑里拆开。',
        '报表和大屏靠手写页面，交付慢。封装表格和图表，做成可配置的低代码模块。',
        '工艺流程和权限靠改代码才能调。做成可视化配置，权限按 RBAC 落地。'
      ]
    },
    {
      org: '山西尊光网络',
      role: '技术主管',
      period: '2018.12 - 2020.10',
      highlights: [
        '要同时覆盖 App 端的社交、内容和商城。落地 uni-app，带 5 人团队把宠居从选型做到可发布。',
        '复杂列表和交互在端上容易卡。用 weex / nvue 做性能优化。',
        '话题能力要对齐用户已有的微博习惯。实现输入框里的 # 与 @。'
      ]
    },
    {
      org: '山西顺达胜业',
      role: '技术主管',
      period: '2016.7 - 2018.11',
      highlights: [
        '前端还停在 jQuery，协作靠口头约定。带 12 人迁到 Vue，并推动后端 Spring Boot、Redis 和 Git。',
        '项目没有完整研发节奏。补上立项到验收的流程，用禅道管理，并建立规范与考核。',
        '儿童发展评估查询慢，智能家居要对接多厂商协议。上 Redis 和负载均衡，并打通 LoRa / Zigbee / MQTT 与管理平台。'
      ]
    }
  ],
  education: [
    {
      school: '山西大同大学',
      major: '采矿工程',
      degree: '统招本科',
      period: '2007.9 - 2011.6'
    }
  ],
  projects: [
    {
      name: 'yun-elp',
      blurb: '基于 Element Plus 的 Vue 3 业务组件库。封装业务向组件与工具，而不是再造一套基础组件。',
      highlights: [
        'pnpm monorepo，支持全量、按需与自动导入，含主题、i18n 与文档站，npm 发布 yun-elp。',
        '另发 yun-elp-mcp，把组件 API 接到 Cursor，按文档查询 props 与用法。'
      ],
      stack: ['Vue 3', 'TypeScript', 'Element Plus', 'MCP'],
      href: 'https://yun8711.github.io/yun-elp/'
    },
    {
      name: 'yun-admin-vue3',
      blurb: 'Vue 3 后台管理模板，默认把 yun-elp 作为业务组件来源，用来落地组件库的真实接入方式。',
      highlights: [
        'TypeScript、Vite、Element Plus、Pinia 与 Vue Router，样式使用 UnoCSS。',
        '接入 VoerkaI18n。质量工具为 ESLint、Stylelint 与 oxfmt。'
      ],
      stack: ['Vue 3', 'yun-elp', 'UnoCSS', 'Vite'],
      href: 'https://github.com/yun8711/yun-admin-vue3'
    },
    {
      name: 'yun-vscode-tools',
      blurb: 'VS Code / Cursor 扩展，把文件定位、压缩和提交编辑收进编辑器，少切出终端。',
      highlights: [
        '资源管理器标题栏定位当前文件，并关掉自动 reveal，避免目录树跟着跳。',
        '右键复制文件到剪贴板（macOS）、编辑未推送提交说明、递归打 zip / tar.gz。'
      ],
      stack: ['TypeScript', 'VS Code', 'Cursor'],
      href: 'https://github.com/yun8711/yun-vscode-tools'
    },
    {
      name: 'account',
      blurb: '本地优先的个人记账 App，目标平台 Android。数据只放本机 SQLite，不做登录和云同步。',
      highlights: [
        '基于 UniApp + Vue 3（unibest）开发。',
        '转账记成单条记录，月报排除转账，避免收支虚高。'
      ],
      stack: ['UniApp', 'Vue 3', 'SQLite', 'Android'],
      href: 'https://github.com/yun8711/account'
    },
    {
      name: 'element-ui-mcp',
      blurb: 'Element UI 2.15.14 的 MCP Server，给仍在维护 Vue 2 项目的人用 AI 查组件文档。',
      highlights: [
        '支持列出、搜索组件，以及 props、events 和文档示例，共 6 个查询接口。',
        '从官方文档抽取信息，减少模型在 Vue 2 栈上凭记忆补全。'
      ],
      stack: ['MCP', 'TypeScript', 'Element UI', 'Vue 2'],
      href: 'https://github.com/yun8711/element-ui-mcp'
    },
    {
      name: 'fe-monitor',
      blurb: '浏览器端前端监控 SDK。采集错误、性能、请求和访问，按远程配置决定是否上报。',
      highlights: [
        '覆盖 JS 错误、Vue 2 / Vue 3 错误、HTTP、PV、点击、性能与页面崩溃。',
        '支持开发环境是否上报，以及 session 中的分支信息。'
      ],
      stack: ['TypeScript', 'Vite', 'Vue'],
      href: 'https://github.com/yun8711/fe-monitor'
    },
    {
      name: 'yun-kit',
      blurb: '前端 CLI，命令 yk。面向旧项目改造和交付，而不只是初始化空仓库。',
      highlights: [
        '脚手架与模板库分离，可接多套业务模板，改模板不必重新发布 CLI。',
        '工程配置注入、源码脱敏与压缩从业务仓拆出去，减少脚本侵入。'
      ],
      stack: ['Node.js', 'CLI', 'npm'],
      href: 'https://github.com/yun8711/yun-kit'
    },
    {
      name: 'niuma',
      blurb: '个人研发工作的控制平面。在本地统一看项目、记忆库、知识库和异步任务。',
      highlights: [
        '用 manifest 注册仓库，扫描 Git 状态、记忆文件与 Wiki，并提供 doctor 健康检查。',
        'Web 用 Vue 3 + yun-elp，服务端 Fastify。可提交 shell、Agent、LLM 任务。'
      ],
      stack: ['Vue 3', 'Fastify', 'yun-elp', 'TypeScript'],
      wip: true
    },
    {
      name: 'wow-rag',
      blurb: '面向长期使用的魔兽世界知识库，做文档沉淀和 RAG 问答。',
      highlights: [
        '后端规划为 Python FastAPI + SQLite + Chroma，前端用 React 做浏览和问答。',
        '当前私有开发中，先打通入库、检索与带引用的问答。'
      ],
      stack: ['Python', 'FastAPI', 'React', 'RAG'],
      wip: true
    }
  ],
  skills: [
    {
      label: '前端',
      blurb: '会把复杂业务做成可维护的前端。也对工程化本身感兴趣：组件库、微前端、脚手架，要做到能发布、能复用。',
      highlights: [
        '主栈 Vue 2 / Vue 3，TypeScript 为默认语言。qiankun 宿主与子应用是日常，也写过 uni-app。',
        '了解 React，能独立完成页面和站点。构建以 Webpack、Vite 为主。',
        '持续关注组件封装和低代码。在控制系统里做过可视化配置，开源里做 yun-elp。'
      ],
      items: ['Vue 2', 'Vue 3', 'TypeScript', 'React', 'qiankun', 'uni-app', 'Vite', 'Webpack']
    },
    {
      label: '工程与服务端',
      blurb: '兴趣在把个人经验和团队痛点收成工具，而不是只写业务页。服务端能独立扛中小型系统。',
      highlights: [
        'Node.js 写 CLI、MCP 与脚手架。在团队里推过 pnpm，以及 eslint / stylelint / commitlint。',
        '主导过 Spring Boot + MySQL 的工时系统。熟悉 Docker 与 Nginx 部署。',
        '还在补 Python 与 FastAPI，用自己的项目练检索和问答链路。'
      ],
      items: ['Node.js', 'pnpm', 'Docker', 'MySQL', 'Java', 'Spring Boot', 'Nginx']
    },
    {
      label: 'AI 应用',
      blurb: '我对 AI 不是旁观。日常用 Cursor 写代码，更在意怎么把文档、规范和任务接到模型上，让它少编、能复查。',
      highlights: [
        '为 yun-elp 和 Element UI 写 MCP，把 props、事件和示例交给 Cursor 按文档查询。工作里也把标品组件文档接到同一条链路上。',
        '写 Agent Skill，把 OpenAPI 转接口、国际化标注这类重复流程做成可重复跑的步骤。',
        '业余做 niuma：本地控制平面，统一项目、记忆库和知识库，并能下发 Agent / LLM 任务。',
        'wow-rag 用 RAG 做自己会用的知识问答。接下来更想把检索增强和 Agent 工作流做扎实，让模型和文档、代码仓真正连上。'
      ],
      items: ['MCP', 'Agent Skill', 'Cursor', 'RAG']
    }
  ]
};
