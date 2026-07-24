window.PROJECTS = {
  assistant: {
    featured: true,
    group: "enterprise",
    image: "images/projects/enterprise-ai-assistant-real.jpg",
    imageAlt: {
      zh: "小优助手 1.3 客服接诊 SOP 辅助交互原型，展示问题识别、SOP 匹配、客服话术与处理结果",
      en: "Xiaoyou Assistant 1.3 interactive support prototype showing issue recognition, SOP matching, response guidance, and case outcomes"
    },
    mediaLabel: { zh: "真实交互原型", en: "Live interaction prototype" },
    type: { zh: "企业 AI 产品线", en: "Enterprise AI Product Line" },
    name: { zh: "企业 AI 助手产品线", en: "Enterprise AI Assistant Suite" },
    short: {
      zh: "围绕识别、检索、诊断和业务规则，做了五个面向具体业务的企业智能体。",
      en: "A practical suite of enterprise agents for recognition, retrieval, diagnosis, and rule-based decisions."
    },
    status: { zh: "持续迭代", en: "In active development" },
    summary: {
      zh: "这条产品线来自真实企业业务。每个智能体都对应一个明确问题，也有自己的知识来源、人工复核和验收边界。",
      en: "This suite grew out of real enterprise workflows. Each agent addresses a defined problem with traceable knowledge, human review, and explicit acceptance boundaries."
    },
    facts: [
      { label: { zh: "角色", en: "Role" }, value: { zh: "产品规划、规则设计、原型与验收", en: "Product planning, rule design, prototyping, and acceptance" } },
      { label: { zh: "形态", en: "Format" }, value: { zh: "智能体、知识库、业务工作流", en: "Agents, knowledge bases, and business workflows" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "真实交互原型截图", en: "Live prototype screenshot" } }
    ],
    challenge: {
      zh: "企业智能体最容易卡在三个地方：知识不可靠、结论没有出处、异常情况没人接手。",
      en: "Enterprise agents tend to fail in three places: unreliable knowledge, conclusions without evidence, and exceptions with no human owner."
    },
    approach: {
      zh: "先把问题、数据和责任边界说清楚，再设计检索、规则比对、证据链和转人工流程。产品交付以可评审、可测试为准。",
      en: "The work starts by defining the problem, data, and ownership boundaries, then designs retrieval, rule checks, evidence chains, and human handoff. Deliverables must be reviewable and testable."
    },
    evidence: [
      { zh: "多状态交互原型与产品需求文档", en: "Multi-state prototypes and product requirements" },
      { zh: "知识库、参数表和验收用例", en: "Knowledge bases, parameter tables, and acceptance cases" },
      { zh: "异常诊断证据链和降级规则", en: "Diagnostic evidence chains and fallback rules" }
    ],
    modules: [
      {
        name: { zh: "固废识别与行情报价", en: "Material Recognition & Market Pricing" },
        text: { zh: "识别固废品类，匹配行情数据并完成估值；缺少可靠行情时明确返回无法估价。", en: "Recognizes material categories, matches market data, and estimates value; returns an explicit no-estimate result when reliable pricing is unavailable." }
      },
      {
        name: { zh: "业务异常诊断与证据链", en: "Exception Diagnosis & Evidence Chain" },
        text: { zh: "核对本地台账、同步事件和外部平台状态，让客服看到结论来自哪里、还缺什么证据。", en: "Checks local ledgers, sync events, and external platform states so support teams can see where a conclusion came from and what evidence is missing." }
      },
      {
        name: { zh: "政策采集与审核", en: "Policy Collection & Review" },
        text: { zh: "采集政策信息，保留来源并进入人工审核，不让未经确认的内容直接影响业务。", en: "Collects policy information with source traceability and routes it through human review before business use." }
      },
      {
        name: { zh: "销售知识库与方案检索", en: "Sales Knowledge & Solution Retrieval" },
        text: { zh: "整理 2,582 份、34.64GB 销售资料，转换为可导入的文本与表格知识库，并保留转换台账。", en: "Processed 2,582 files totaling 34.64GB into import-ready text and tabular knowledge bases with a conversion ledger." }
      },
      {
        name: { zh: "技术参数与投标校验", en: "Technical Parameter & Bid Compliance" },
        text: { zh: "从资料中检索产品参数，按规则比对客户要求，并在依据不足时转人工确认。", en: "Retrieves product parameters, checks them against customer requirements, and escalates to human review when evidence is insufficient." }
      }
    ]
  },
  compliance: {
    group: "enterprise",
    image: "images/projects/ai-video-compliance.webp",
    imageAlt: {
      zh: "工业现场称重行为识别效果，标注称重显示器、危险废物与地磅区域",
      en: "Industrial weighing recognition showing the weight display, material, and scale area"
    },
    mediaLabel: { zh: "视觉算法场景效果", en: "Computer vision scenario" },
    type: { zh: "企业 AI 系统", en: "Enterprise AI System" },
    name: { zh: "AI 视频智能合规监管平台", en: "AI Video Compliance Platform" },
    short: {
      zh: "把视频事件、业务台账和人工复核接成一条可追溯的处理链。",
      en: "Connects video events, business ledgers, and human review into a traceable compliance loop."
    },
    status: { zh: "一期原型", en: "Phase-one prototype" },
    summary: {
      zh: "平台面向工业现场的视频监管场景。算法事件需要进入业务台账，经过复核并留下证据。",
      en: "Designed for industrial video supervision, the platform focuses on turning algorithm events into reviewed, ledger-linked, and traceable business records."
    },
    facts: [
      { label: { zh: "交付", en: "Delivery" }, value: { zh: "PRD、53 页原型、架构与验收规范", en: "PRD, 53-page prototype, architecture, and acceptance rules" } },
      { label: { zh: "角色", en: "Role" }, value: { zh: "产品规划与评审推进", en: "Product planning and review facilitation" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "已脱敏", en: "Sanitized case study" } }
    ],
    challenge: {
      zh: "视觉算法可以报出事件，但如果点位、业务台账、复核责任和证据规则没有接上，告警很快会变成新的信息噪声。",
      en: "Visual algorithms can raise events, but without point mapping, ledger links, review ownership, and evidence rules, alerts quickly become another source of noise."
    },
    approach: {
      zh: "一期范围包括事件进入、点位映射、台账校验、人工复核、证据留存和结果回写。",
      en: "Phase one is limited to the regulator’s essential loop: event intake, point mapping, ledger validation, human review, evidence retention, and result write-back."
    },
    evidence: [
      { zh: "53 份原型页面与本地 SVG 资源", en: "53 prototype pages with local SVG assets" },
      { zh: "PRD、时序图、数据流与领域图", en: "PRD, sequence diagrams, data flows, and domain models" },
      { zh: "试点准入、供应商边界与 PoC 验收规范", en: "Pilot entry, vendor boundary, and PoC acceptance rules" }
    ]
  },
  admin: {
    group: "enterprise",
    image: "images/projects/ruoyi-agent-admin.svg",
    imageAlt: {
      zh: "基于 RuoYi-AI 的企业智能体管理后台脱敏界面示意",
      en: "Sanitized enterprise agent administration interface based on RuoYi-AI"
    },
    mediaLabel: { zh: "脱敏界面示意", en: "Sanitized interface overview" },
    type: { zh: "企业管理后台", en: "Enterprise Admin System" },
    name: { zh: "企业智能体管理后台", en: "Enterprise Agent Administration" },
    short: {
      zh: "基于 RuoYi-AI 框架，统一管理智能体配置、知识库、调用日志和用户反馈。",
      en: "Built on RuoYi-AI to manage agent configurations, knowledge bases, call logs, and user feedback."
    },
    status: { zh: "MVP 设计", en: "MVP design" },
    summary: {
      zh: "项目基于 RuoYi-AI 框架扩展企业智能体管理能力。产品工作集中在后台入口、字段口径、启停规则、日志和反馈处理。",
      en: "This project extends the RuoYi-AI framework for enterprise agent operations. Product work focuses on navigation, field definitions, enable/disable rules, logs, and feedback loops."
    },
    facts: [
      { label: { zh: "框架", en: "Framework" }, value: { zh: "RuoYi-AI", en: "RuoYi-AI" } },
      { label: { zh: "数据", en: "Data" }, value: { zh: "智能体配置、调用日志、对话反馈", en: "Agent config, call logs, and conversation feedback" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "已脱敏", en: "Sanitized case study" } }
    ],
    challenge: {
      zh: "智能体数量增加后，配置、知识来源和调用情况散落在不同位置，运营人员很难判断哪个版本正在使用、哪里出了问题。",
      en: "As the number of agents grows, configurations, knowledge sources, and usage records become fragmented, making version and issue tracking difficult."
    },
    approach: {
      zh: "沿用 RuoYi-AI 的技术底座，补充企业日常要用的管理入口和字段规则，不重复建设框架已有能力。",
      en: "The design keeps the RuoYi-AI foundation and adds the enterprise management views and field rules that are actually needed instead of rebuilding existing framework capabilities."
    },
    evidence: [
      { zh: "后台信息架构和低保真原型", en: "Admin information architecture and low-fidelity prototype" },
      { zh: "agentConfig、agentCallLog、conversationFeedback 字段口径", en: "Field definitions for agentConfig, agentCallLog, and conversationFeedback" },
      { zh: "启停、版本、日志与反馈验收规则", en: "Enablement, version, logging, and feedback acceptance rules" }
    ]
  },
  skilllens: {
    group: "lab",
    image: "images/projects/skilllens.svg",
    imageAlt: {
      zh: "SkillLens 中文技能图鉴界面示意，展示搜索、中文用途、调用方法与健康状态",
      en: "SkillLens interface overview with search, Chinese guidance, invocation examples, and health status"
    },
    mediaLabel: { zh: "产品界面示意", en: "Product interface overview" },
    type: { zh: "macOS 本地应用", en: "macOS Local App" },
    name: { zh: "SkillLens｜加强版 Skill 管理器", en: "SkillLens | Advanced Skill Manager" },
    short: {
      zh: "在 Mac 上查找和管理已安装的 Skills，用中文讲清楚每个 Skill 能做什么、怎么用。",
      en: "Find and manage installed Skills on Mac, with clear Chinese explanations of what each Skill does and how to use it."
    },
    status: { zh: "1.0.0 已验收", en: "Version 1.0.0 verified" },
    summary: {
      zh: "Skill 数量增加后，问题是看不懂、找不到，也不知道什么时候该用。SkillLens 把扫描、搜索、中文说明和健康检查放进一个本地应用。",
      en: "As Skill libraries grow, the real problem is understanding what exists and when to use it. SkillLens combines scanning, search, Chinese guidance, and health checks in one local app."
    },
    facts: [
      { label: { zh: "技术", en: "Stack" }, value: { zh: "SwiftUI、本地优先", en: "SwiftUI, local-first" } },
      { label: { zh: "交付", en: "Delivery" }, value: { zh: "应用、验证程序与 DMG", en: "App, verifier, and DMG" } },
      { label: { zh: "边界", en: "Boundary" }, value: { zh: "默认只读", en: "Read-only by default" } }
    ],
    challenge: {
      zh: "用户 Skill、项目 Skill 和插件 Skill 分散在不同目录，英文说明和依赖信息也不容易快速看懂。",
      en: "User, project, and plugin Skills live in different directories, while English descriptions and dependencies are hard to scan quickly."
    },
    approach: {
      zh: "统一扫描本地目录，建立可搜索索引，再生成中文用途、调用方法和依赖说明。默认不执行脚本，也不修改原文件。",
      en: "The app scans local directories into a searchable index, then adds Chinese usage and dependency guidance. It does not execute scripts or modify source files by default."
    },
    evidence: [
      { zh: "统一目录扫描与全文搜索", en: "Unified directory scanning and full-text search" },
      { zh: "中文用途、调用示例与健康状态", en: "Chinese guidance, invocation examples, and health status" },
      { zh: "Release 构建、验证程序和 DMG 完整性检查", en: "Release build, verifier, and DMG integrity check" }
    ]
  },
  hairstyle: {
    group: "lab",
    image: "images/projects/hairstyle-studio.webp",
    imageAlt: {
      zh: "发型镜产品首页，展示同一人物的三种发型预览",
      en: "AI Hairstyle Studio homepage showing three hairstyle previews for the same person"
    },
    mediaLabel: { zh: "产品 Demo", en: "Product demo" },
    type: { zh: "AI 消费产品", en: "AI Consumer Product" },
    name: { zh: "发型镜｜AI Hairstyle Studio", en: "AI Hairstyle Studio" },
    short: {
      zh: "上传照片，提前看看不同发型的效果。",
      en: "Upload a photo and preview different hairstyles before making a change."
    },
    status: { zh: "真人内测整改中", en: "Private testing" },
    summary: {
      zh: "这是一个面向个人用户和理发门店的发型预览产品。Demo 已跑通上传、选择、生成、历史记录和后台管理，公开收费前仍在补真人样本评测。",
      en: "A hairstyle preview product for individuals and salons. The demo covers upload, selection, generation, history, and operations, while real-person evaluation continues before any public paid release."
    },
    facts: [
      { label: { zh: "技术", en: "Stack" }, value: { zh: "Next.js、AI 图像生成", en: "Next.js and AI image generation" } },
      { label: { zh: "形态", en: "Format" }, value: { zh: "用户端与运营后台", en: "Consumer app and operations console" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "本地 Demo 可用", en: "Local demo available" } }
    ],
    challenge: {
      zh: "生成一张图不难。产品难点是照片隐私、任务排队、失败重试、模型成本和用户权益。",
      en: "Generating one image is easy. The product challenge lies in photo privacy, queues, retries, model costs, and user entitlements."
    },
    approach: {
      zh: "把生成能力放进完整任务流程，并为个人用户、门店和管理员设计不同权限。未完成真人样本评测前不开放收费。",
      en: "Generation is placed inside a complete task flow with distinct permissions for individuals, salons, and administrators. Paid access remains closed until real-person evaluation is complete."
    },
    evidence: [
      { zh: "上传、选择、生成和历史记录流程", en: "Upload, selection, generation, and history flow" },
      { zh: "持久化任务队列与失败状态", en: "Persistent task queue and failure states" },
      { zh: "额度、套餐、隐私与发布门禁", en: "Credits, plans, privacy, and release gates" }
    ]
  },
  parentvoice: {
    group: "lab",
    image: "images/projects/parent-voice-scene.webp",
    imageAlt: {
      zh: "父母声场景伴读小程序中的家庭场景插画",
      en: "Home-scene artwork used in the Parent Voice reading mini program"
    },
    mediaLabel: { zh: "产品场景素材", en: "In-product scene artwork" },
    type: { zh: "亲子教育小程序", en: "Family Learning Mini Program" },
    name: { zh: "父母声｜场景伴读小程序", en: "Parent Voice | Scene Reading" },
    short: {
      zh: "用父母熟悉的声音，陪孩子在生活场景中识字和跟读。",
      en: "Uses a familiar parent voice to help children learn words through everyday scenes."
    },
    status: { zh: "Demo 已公开提交", en: "Public demo submitted" },
    summary: {
      zh: "项目围绕亲子伴读设计，把场景卡片、识字、语音和短时学习节奏放进一个微信小程序 Demo。",
      en: "A WeChat mini-program demo for parent-child reading that combines scene cards, word learning, voice, and short learning sessions."
    },
    facts: [
      { label: { zh: "平台", en: "Platform" }, value: { zh: "微信小程序", en: "WeChat Mini Program" } },
      { label: { zh: "场景", en: "Use case" }, value: { zh: "亲子识字与伴读", en: "Parent-child word learning" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "可运行 Demo", en: "Playable demo" } }
    ],
    challenge: {
      zh: "儿童识字不适合一次塞入太多内容。学习动作需要短、清楚，而且每一步都有反馈。",
      en: "Early word learning should not overload children. Each learning action needs to be short, clear, and immediately acknowledged."
    },
    approach: {
      zh: "按厨房、动物、交通等生活场景组织卡片，通过语音和轻量互动完成一次短学习，再让孩子自然切换到下一个场景。",
      en: "Cards are organized around everyday scenes such as kitchens, animals, and transport, using voice and lightweight interactions to complete short sessions."
    },
    evidence: [
      { zh: "场景、卡片、学习和语音页面", en: "Scene, card, learning, and voice screens" },
      { zh: "语音授权、音频管理与云函数", en: "Voice consent, audio management, and cloud functions" },
      { zh: "快速上手、演示页与公开提交", en: "Quick start, demo page, and public submission" }
    ]
  },
  endless: {
    group: "lab",
    image: "images/projects/final-city-surge.webp",
    imageAlt: {
      zh: "无尽防线科幻肉鸽游戏运行画面",
      en: "Final City Surge sci-fi roguelite gameplay"
    },
    mediaLabel: { zh: "实机运行画面", en: "Gameplay capture" },
    type: { zh: "独立游戏", en: "Independent Game" },
    name: { zh: "无尽防线｜Final City Surge", en: "Final City Surge" },
    short: {
      zh: "2.5D 科幻肉鸽游戏。围绕高密度战斗、随机构筑和武器进化，完成三分钟一局的完整体验。",
      en: "A 2.5D sci-fi roguelite built around dense combat, randomized builds, and weapon evolution in three-minute runs."
    },
    status: { zh: "可玩商业切片", en: "Playable commercial slice" },
    summary: {
      zh: "面向网页游戏平台和 Android 的科幻刷怪肉鸽。当前版本已经有完整单局、升级构筑、事件、Boss、局外强化和中英文切换。",
      en: "A sci-fi horde roguelite for web game platforms and Android. The current slice includes full runs, build choices, events, bosses, meta upgrades, and Chinese-English switching."
    },
    facts: [
      { label: { zh: "引擎", en: "Engine" }, value: { zh: "Cocos Creator 3.8.8", en: "Cocos Creator 3.8.8" } },
      { label: { zh: "平台", en: "Platforms" }, value: { zh: "Web Desktop、Web Mobile、Android", en: "Web Desktop, Web Mobile, Android" } },
      { label: { zh: "单局", en: "Run" }, value: { zh: "180 秒", en: "180 seconds" } }
    ],
    challenge: {
      zh: "短局肉鸽需要在几分钟内给出足够多的战斗变化，同时守住移动端性能和网页首包大小。",
      en: "A short-session roguelite must create enough combat variation within minutes while staying within mobile performance and web bundle budgets."
    },
    approach: {
      zh: "用六阶段波次、随机升级、五类事件和两场 Boss 战组织单局节奏，并让 Web 与 Android 共用 TypeScript 玩法逻辑。",
      en: "Runs are structured with six wave stages, randomized upgrades, five event types, and two boss fights, with TypeScript gameplay logic shared across web and Android."
    },
    evidence: [
      { zh: "6 种武器、11 种被动与武器进化", en: "Six weapons, eleven passives, and weapon evolution" },
      { zh: "桌面键鼠与手机横屏触控", en: "Desktop keyboard and mobile landscape touch controls" },
      { zh: "主界面、军械库、设置、结算与本地成长", en: "Home, armory, settings, results, and local progression" }
    ]
  },
  disorder: {
    group: "lab",
    image: "images/projects/divine-order-fracture.webp",
    imageAlt: {
      zh: "神位失序横屏战术卡牌游戏主界面",
      en: "Divine Order: Fracture landscape tactical card game interface"
    },
    mediaLabel: { zh: "可玩版本界面", en: "Playable build" },
    type: { zh: "独立游戏", en: "Independent Game" },
    name: { zh: "神位失序", en: "Divine Order: Fracture" },
    short: {
      zh: "以封神后时代为背景的横屏战术卡牌游戏。",
      en: "A landscape tactical card game set in an original post-Fengshen era."
    },
    status: { zh: "可玩版本", en: "Playable vertical slice" },
    summary: {
      zh: "项目采用原创的封神后时代设定。玩家在横屏战场上部署单位、管理卡组并推进 PVE 章节，战斗结果会回到主城养成系统。",
      en: "Set in an original post-Fengshen era, players deploy units on a landscape battlefield, manage decks, and progress through PVE chapters that feed back into a persistent home-city system."
    },
    facts: [
      { label: { zh: "引擎", en: "Engine" }, value: { zh: "Cocos Creator 3.8.8", en: "Cocos Creator 3.8.8" } },
      { label: { zh: "类型", en: "Genre" }, value: { zh: "PVE 战术卡牌", en: "PVE tactical card game" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "完整系统外壳与可玩流程", en: "Full system shell with playable flow" } }
    ],
    challenge: {
      zh: "战术卡牌不只需要一场能玩的战斗，还要让卡牌、编队、装备、关卡和奖励形成长期目标。",
      en: "A tactical card game needs more than one playable battle; cards, formations, equipment, stages, and rewards must form a coherent long-term loop."
    },
    approach: {
      zh: "先打通主城、战斗和成长系统，再分阶段实装卡牌、装备、副本、挑战塔和 Boss 规则。",
      en: "The project first connected the city-to-battle-to-progression loop, then staged deeper implementations for cards, equipment, dungeons, tower challenges, and bosses."
    },
    evidence: [
      { zh: "主城、章节、卡牌、编队和主将装备", en: "Home city, chapters, cards, formations, and hero equipment" },
      { zh: "副本、挑战塔、Boss 与独立结算上下文", en: "Dungeons, tower challenges, bosses, and separate result contexts" },
      { zh: "九个主页面自动验收与本地存档流程", en: "Automated checks across nine main screens and local persistence" }
    ]
  },
  fatemirror: {
    group: "archive",
    type: { zh: "AI SaaS 实验", en: "AI SaaS Experiment" },
    name: { zh: "FateMirror", en: "FateMirror" },
    short: { zh: "带账号、额度、报告和支付设计的 AI 内容 SaaS。", en: "An AI content SaaS with accounts, quotas, reports, and payment design." },
    status: { zh: "持续优化", en: "In development" },
    summary: { zh: "一个完整 SaaS 产品实验，覆盖 AI 工作流、结果持久化、报告、账号数据导出与删除等产品链路。", en: "A full SaaS product experiment covering AI workflows, persistence, reports, and account data export and deletion." },
    facts: [],
    challenge: { zh: "把一次性 AI 生成做成可持续使用的产品。", en: "Turning one-off AI generation into a repeatable product." },
    approach: { zh: "围绕读取、报告、额度和账号数据建立完整产品流程。", en: "Built a complete flow around readings, reports, quotas, and account data." },
    evidence: [{ zh: "完整前后端与数据库结构", en: "Full-stack application and database schema" }]
  },
  video: {
    group: "archive",
    type: { zh: "AI 商业交付", en: "AI Commercial Delivery" },
    name: { zh: "AI 视频商业交付", en: "Commercial AI Video Delivery" },
    short: { zh: "用 AI 完成商品视频生产、排期和多平台内容复盘。", en: "AI-assisted product video production, delivery scheduling, and multi-platform review." },
    status: { zh: "已交付", en: "Delivered" },
    summary: { zh: "一次真实商业项目，覆盖素材整理、视频制作、交付排期和后续内容复盘。", en: "A real commercial engagement covering asset organization, video production, delivery scheduling, and content review." },
    facts: [],
    challenge: { zh: "在固定素材和交付期限内稳定生产多条商品视频。", en: "Producing multiple product videos reliably from fixed source material and deadlines." },
    approach: { zh: "拆分内容方向、制作批次和验收节点，持续跟踪剩余交付。", en: "Split production into content directions, batches, and acceptance checkpoints." },
    evidence: [{ zh: "交付排期、视频成品与项目复盘", en: "Delivery schedule, finished videos, and project review" }]
  },
  monitoring: {
    group: "archive",
    type: { zh: "本地自动化", en: "Local Automation" },
    name: { zh: "竞品监控周报", en: "Competitive Monitoring Weekly" },
    short: { zh: "定期整理竞品动态并生成结构化周报。", en: "Collects competitor updates and produces structured weekly reports." },
    status: { zh: "本地运行", en: "Running locally" },
    summary: { zh: "把竞品信息采集、结构化整理和周报输出迁移为本地自动化流程。", en: "A local automation workflow for competitor collection, structuring, and weekly report generation." },
    facts: [],
    challenge: { zh: "减少重复收集和手工排版，同时保留来源与复核入口。", en: "Reducing repetitive collection and formatting while keeping source traceability and review." },
    approach: { zh: "使用固定字段整理信息，再输出 PDF、PNG 和结构化数据。", en: "Uses fixed fields to structure information and outputs PDF, PNG, and structured data." },
    evidence: [{ zh: "结构化数据、PDF 与长图周报", en: "Structured data, PDF, and long-image reports" }]
  }
};
