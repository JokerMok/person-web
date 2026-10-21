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
    gallery: [
      {
        image: "images/projects/enterprise-ai-assistant-real.jpg",
        mode: "crop",
        position: "25% 48%",
        imageAlt: { zh: "小优助手左侧导航与异常会话列表局部", en: "Xiaoyou Assistant navigation and exception history detail" },
        caption: { zh: "入口与历史会话", en: "Entry and history" }
      },
      {
        image: "images/projects/enterprise-ai-assistant-real.jpg",
        mode: "crop",
        position: "76% 42%",
        imageAlt: { zh: "小优助手诊断编号、问题类型与话术内容局部", en: "Xiaoyou Assistant diagnosis, issue type, and response detail" },
        caption: { zh: "诊断与话术", en: "Diagnosis and response" }
      },
      {
        image: "images/projects/enterprise-ai-assistant-real.jpg",
        mode: "crop",
        position: "73% 88%",
        imageAlt: { zh: "小优助手处理结果与补充记录操作区局部", en: "Xiaoyou Assistant outcome and follow-up action detail" },
        caption: { zh: "处理结果", en: "Case outcome" }
      }
    ],
    type: { zh: "企业 AI 产品线", en: "Enterprise AI Product Line" },
    name: { zh: "企业 AI 助手产品线", en: "Enterprise AI Assistant Suite" },
    short: {
      zh: "围绕识别、检索、诊断和业务规则，把五个具体问题做成能接住业务的企业智能体。",
      en: "A practical suite of enterprise agents for recognition, retrieval, diagnosis, and rule-based decisions."
    },
    status: { zh: "持续迭代", en: "In active development" },
    summary: {
      zh: "这些项目都来自真实企业业务。我把一个大问题拆成几个能验证的环节：知识从哪里来，结论凭什么成立，出了异常谁来接。",
      en: "This suite grew out of real enterprise workflows. Each agent addresses a defined problem with traceable knowledge, human review, and explicit acceptance boundaries."
    },
    facts: [
      { label: { zh: "角色", en: "Role" }, value: { zh: "产品规划、规则设计、原型与验收", en: "Product planning, rule design, prototyping, and acceptance" } },
      { label: { zh: "形态", en: "Format" }, value: { zh: "智能体、知识库、业务工作流", en: "Agents, knowledge bases, and business workflows" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "真实交互原型截图", en: "Live prototype screenshot" } }
    ],
    challenge: {
      zh: "企业智能体真正难的，通常不是把答案说出来，而是知识不可靠、结论没出处，异常来了没人接。",
      en: "Enterprise agents tend to fail in three places: unreliable knowledge, conclusions without evidence, and exceptions with no human owner."
    },
    approach: {
      zh: "我先把问题、数据和责任边界捋清楚，再安排检索、规则比对、证据链和转人工。每一块都要能评审、能测试。",
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
    image: "images/projects/compliance-live.webp",
    imageAlt: {
      zh: "优废环保危废智能合规监管平台一期监管工作台真实原型",
      en: "Live supervision workspace from the YOFI hazardous-waste compliance platform prototype"
    },
    mediaLabel: { zh: "真实监管工作台原型", en: "Live supervision prototype" },
    gallery: [
      {
        image: "images/projects/compliance-scene-weighing.webp",
        imageAlt: { zh: "危废称重行为识别画面，标注称重显示器、危废袋和地磅区域", en: "Hazardous-waste weighing recognition with labels for the display, bag, and scale area" },
        caption: { zh: "称重行为识别", en: "Weighing recognition" }
      },
      {
        image: "images/projects/compliance-scene-label.webp",
        imageAlt: { zh: "危废标签识别场景效果", en: "Hazardous-waste label recognition scene" },
        caption: { zh: "标签识别与复核", en: "Label recognition and review" }
      }
    ],
    type: { zh: "企业 AI 系统", en: "Enterprise AI System" },
    name: { zh: "AI 视频智能合规监管平台", en: "AI Video Compliance Platform" },
    short: {
      zh: "让视频里发现的事件，真正进入台账、复核和后续处理。",
      en: "Connects video events, business ledgers, and human review into a traceable compliance loop."
    },
    status: { zh: "一期原型", en: "Phase-one prototype" },
    summary: {
      zh: "现场视频发现的事件，不能只停在告警里。它还要进台账、有人复核，最后留下能回看的证据。",
      en: "Designed for industrial video supervision, the platform focuses on turning algorithm events into reviewed, ledger-linked, and traceable business records."
    },
    facts: [
      { label: { zh: "交付", en: "Delivery" }, value: { zh: "PRD、53 页原型、架构与验收规范", en: "PRD, 53-page prototype, architecture, and acceptance rules" } },
      { label: { zh: "角色", en: "Role" }, value: { zh: "产品规划与评审推进", en: "Product planning and review facilitation" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "已脱敏", en: "Sanitized case study" } }
    ],
    challenge: {
      zh: "算法能报出事件，但点位、台账、复核责任和证据规则接不上，告警很快就会变成新的噪声。",
      en: "Visual algorithms can raise events, but without point mapping, ledger links, review ownership, and evidence rules, alerts quickly become another source of noise."
    },
    approach: {
      zh: "一期先把事件进入、点位映射、台账校验、人工复核、证据留存和结果回写这条链跑通。",
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
    image: "images/projects/admin-live.webp",
    imageAlt: {
      zh: "基于 RuoYi-AI 的企业智能体管理后台评审原型",
      en: "Enterprise agent administration review prototype based on RuoYi-AI"
    },
    mediaLabel: { zh: "RuoYi-AI 风格真实原型", en: "RuoYi-AI style live prototype" },
    gallery: [
      {
        image: "images/projects/admin-agent-list.webp",
        imageAlt: { zh: "优废智能体管理系统的智能体配置列表", en: "Agent configuration list in the enterprise admin console" },
        caption: { zh: "智能体配置列表", en: "Agent configuration list" }
      },
      {
        image: "images/projects/admin-op-log.webp",
        imageAlt: { zh: "优废智能体管理系统的调用日志页面", en: "Call log view in the enterprise admin console" },
        caption: { zh: "调用日志", en: "Call logs" }
      },
      {
        image: "images/projects/admin-chat.webp",
        imageAlt: { zh: "优废智能体管理系统的对话工作区", en: "Conversation workspace in the enterprise admin console" },
        caption: { zh: "对话工作区", en: "Conversation workspace" }
      }
    ],
    type: { zh: "企业管理后台", en: "Enterprise Admin System" },
    name: { zh: "企业智能体管理后台", en: "Enterprise Agent Administration" },
    short: {
      zh: "沿着 RuoYi-AI 的底座，把智能体配置、知识库、调用日志和反馈放到一个后台里。",
      en: "Built on RuoYi-AI to manage agent configurations, knowledge bases, call logs, and user feedback."
    },
    status: { zh: "MVP 设计", en: "MVP design" },
    summary: {
      zh: "这个项目没有另起炉灶，而是沿着 RuoYi-AI 补齐企业日常真正会用到的后台：入口、字段、启停、日志和反馈。",
      en: "This project extends the RuoYi-AI framework for enterprise agent operations. Product work focuses on navigation, field definitions, enable/disable rules, logs, and feedback loops."
    },
    facts: [
      { label: { zh: "框架", en: "Framework" }, value: { zh: "RuoYi-AI", en: "RuoYi-AI" } },
      { label: { zh: "数据", en: "Data" }, value: { zh: "智能体配置、调用日志、对话反馈", en: "Agent config, call logs, and conversation feedback" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "已脱敏", en: "Sanitized case study" } }
    ],
    challenge: {
      zh: "智能体一多，配置、知识来源和调用记录就会散开。运营人员常常不知道现在跑的是哪个版本，问题又卡在哪里。",
      en: "As the number of agents grows, configurations, knowledge sources, and usage records become fragmented, making version and issue tracking difficult."
    },
    approach: {
      zh: "我保留 RuoYi-AI 已经有的能力，只补企业后台真正缺的入口和字段规则，不重复造轮子。",
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
    image: "images/projects/skilllens-app.webp",
    imageAlt: {
      zh: "SkillLens 中文技能图鉴界面示意，展示搜索、中文用途、调用方法与健康状态",
      en: "SkillLens interface overview with search, Chinese guidance, invocation examples, and health status"
    },
    mediaLabel: { zh: "macOS 实机截图", en: "macOS app capture" },
    type: { zh: "macOS 本地应用", en: "macOS Local App" },
    name: { zh: "SkillLens｜加强版 Skill 管理器", en: "SkillLens | Advanced Skill Manager" },
    short: {
      zh: "在 Mac 上查找和管理已安装的 Skills，用中文讲清楚每个 Skill 能做什么、怎么用。",
      en: "Find and manage installed Skills on Mac, with clear Chinese explanations of what each Skill does and how to use it."
    },
    status: { zh: "1.0.0 已验收", en: "Version 1.0.0 verified" },
    summary: {
      zh: "Skill 一多，最先遇到的不是不会用，而是看不懂、找不到，也不知道什么时候该用。SkillLens 把扫描、搜索、中文说明和健康检查放进一个本地应用。",
      en: "As Skill libraries grow, the real problem is understanding what exists and when to use it. SkillLens combines scanning, search, Chinese guidance, and health checks in one local app."
    },
    facts: [
      { label: { zh: "技术", en: "Stack" }, value: { zh: "SwiftUI、本地优先", en: "SwiftUI, local-first" } },
      { label: { zh: "交付", en: "Delivery" }, value: { zh: "应用、验证程序与 DMG", en: "App, verifier, and DMG" } },
      { label: { zh: "边界", en: "Boundary" }, value: { zh: "默认只读", en: "Read-only by default" } }
    ],
    challenge: {
      zh: "用户 Skill、项目 Skill 和插件 Skill 分在不同目录，英文说明和依赖信息也不太适合拿来快速扫一眼。",
      en: "User, project, and plugin Skills live in different directories, while English descriptions and dependencies are hard to scan quickly."
    },
    approach: {
      zh: "我先统一扫描本地目录，做出可搜索的索引，再补上中文用途、调用方法和依赖说明。默认只读，不执行脚本，也不改原文件。",
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
      zh: "发型镜产品首页，展示三种发型参考与比较流程",
      en: "HairMirror product home showing three hairstyle references and the comparison flow"
    },
    mediaLabel: { zh: "真实产品 Demo", en: "Live product demo" },
    gallery: [
      {
        image: "images/projects/hairstyle-live.webp",
        imageAlt: { zh: "发型镜真实产品入口与角色选择页", en: "HairMirror live product entry and role selection" },
        caption: { zh: "产品入口与角色选择", en: "Entry and role selection" }
      }
    ],
    type: { zh: "AI 消费产品", en: "AI Consumer Product" },
    name: { zh: "发型镜｜AI Hairstyle Studio", en: "AI Hairstyle Studio" },
    short: {
      zh: "上传一张照片，先看看换个发型会是什么样。",
      en: "Upload a photo and preview different hairstyles before making a change."
    },
    status: { zh: "真人内测整改中", en: "Private testing" },
    summary: {
      zh: "这是给个人用户和理发门店用的发型预览产品。上传、选择、生成、历史记录和后台管理已经跑通，公开收费前还要把真人样本评测补完。",
      en: "A hairstyle preview product for individuals and salons. The demo covers upload, selection, generation, history, and operations, while real-person evaluation continues before any public paid release."
    },
    facts: [
      { label: { zh: "技术", en: "Stack" }, value: { zh: "Next.js、AI 图像生成", en: "Next.js and AI image generation" } },
      { label: { zh: "形态", en: "Format" }, value: { zh: "用户端与运营后台", en: "Consumer app and operations console" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "本地 Demo 可用", en: "Local demo available" } }
    ],
    challenge: {
      zh: "生成一张图不算难，难的是照片隐私、任务排队、失败重试、模型成本和用户权益都要接得住。",
      en: "Generating one image is easy. The product challenge lies in photo privacy, queues, retries, model costs, and user entitlements."
    },
    approach: {
      zh: "我把生成放进完整任务流程，再按个人用户、门店和管理员分开权限。真人样本评测没做完之前，不急着收费。",
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
    image: "images/projects/parentvoice-reading.webp",
    imageAlt: {
      zh: "父母声已上线微信小程序识字页，展示场景分类、点读卡片和学习进度",
      en: "Live Parent Voice WeChat mini program reading screen with scene filters, word cards, and progress"
    },
    mediaLabel: { zh: "已上线小程序截图", en: "Live mini-program capture" },
    launch: {
      qr: "images/projects/parentvoice-qr.webp",
      alt: { zh: "父母声场景伴读微信小程序二维码", en: "QR code for the Parent Voice Scene Reading WeChat mini program" },
      label: { zh: "现在可以体验", en: "Try it now" },
      text: { zh: "微信扫一扫，或搜索「父母声场景伴读」", en: "Scan in WeChat or search for “父母声场景伴读”" }
    },
    gallery: [
      {
        image: "images/projects/parentvoice-explore.webp",
        imageAlt: { zh: "父母声小程序探索场景页，包含 AI 标准音、拍照添加场景和精选场景", en: "Parent Voice scene explorer with standard AI voice, photo scene creation, and featured scenes" },
        caption: { zh: "探索生活场景", en: "Explore everyday scenes" }
      },
      {
        image: "images/projects/parentvoice-scene.webp",
        imageAlt: { zh: "父母声游乐园场景点读页，展示图片热点和语音引导", en: "Parent Voice amusement-park scene with image hotspots and voice guidance" },
        caption: { zh: "场景点读", en: "Scene-based reading" }
      },
      {
        image: "images/projects/parentvoice-card.webp",
        imageAlt: { zh: "父母声场景点读结果，显示中文词语、拼音和点读反馈", en: "Parent Voice scene reading result with the Chinese word, pinyin, and tap feedback" },
        caption: { zh: "词语与拼音反馈", en: "Word and pinyin feedback" }
      },
      {
        image: "images/projects/parentvoice-progress.webp",
        imageAlt: { zh: "父母声我的页面，展示连续学习、词语数量和场景进度", en: "Parent Voice profile screen with streaks, learned words, and scene progress" },
        caption: { zh: "学习记录", en: "Learning record" }
      },
      {
        image: "images/projects/parentvoice-voice.webp",
        imageAlt: { zh: "父母声声音设置页，展示 AI 标准女声和爸妈声音复刻入口", en: "Parent Voice voice settings with the standard AI voice and parent voice cloning entry" },
        caption: { zh: "爸妈声音复刻", en: "Parent voice cloning" }
      },
      {
        image: "images/projects/parentvoice-live.webp",
        imageAlt: { zh: "父母声产品介绍页，说明多语言点读和爸妈声音陪伴方向", en: "Parent Voice product page introducing multilingual reading and familiar parent voices" },
        caption: { zh: "产品方向与上线介绍", en: "Product direction and launch" }
      }
    ],
    type: { zh: "亲子教育小程序", en: "Family Learning Mini Program" },
    name: { zh: "父母声｜场景伴读小程序", en: "Parent Voice | Scene Reading" },
    short: {
      zh: "已经上线的微信小程序：用父母熟悉的声音，陪孩子在生活场景中识字和跟读。",
      en: "A live WeChat mini program that uses a familiar parent voice for everyday-scene reading practice."
    },
    status: { zh: "已上线｜微信小程序", en: "Live｜WeChat mini program" },
    summary: {
      zh: "它已经从 Demo 变成了可以直接搜索体验的微信小程序。孩子可以按生活场景点卡识字，家长可以录下自己的声音，也可以拍照把身边的东西加入词库。",
      en: "It has moved from a demo to a live WeChat mini program. Children can learn through everyday-scene cards, while parents can record a familiar voice or add objects from photos to the word library."
    },
    facts: [
      { label: { zh: "平台", en: "Platform" }, value: { zh: "微信小程序", en: "WeChat Mini Program" } },
      { label: { zh: "面向", en: "For" }, value: { zh: "2–6 岁儿童与家长", en: "Children aged 2–6 and parents" } },
      { label: { zh: "入口", en: "Find it" }, value: { zh: "微信搜索「父母声场景伴读」", en: "Search WeChat for “父母声场景伴读”" } }
    ],
    challenge: {
      zh: "很多识字产品能解决内容和发音，但孩子听到的往往是没有关系感的标准机器音；家长也很难每天抽出固定时间陪读。",
      en: "Many literacy products provide content and pronunciation, but the voice often feels distant and parents still struggle to find time for daily reading together."
    },
    approach: {
      zh: "先把闭环做短：家长录音，AI 复刻声音，孩子点卡，系统用熟悉的声音读词，再留下学习记录。第一版不堆课程和游戏，把最重要的体验先跑通。",
      en: "The first loop stays short: a parent records, AI creates a familiar voice, a child taps a card, the word is read aloud, and the session is recorded. The first release keeps the focus on this experience instead of adding heavy course or game systems."
    },
    evidence: [
      { zh: "场景化识字卡片、中文发音、拼音和英文", en: "Scene-based cards with Chinese pronunciation, pinyin, and English" },
      { zh: "爸妈声音复刻、拍照识字和学习记录", en: "Parent voice cloning, photo-based word capture, and learning records" },
      { zh: "已上线微信小程序，可搜索体验", en: "Live WeChat mini program available by search" }
    ]
  },
  endless: {
    group: "lab",
    image: "images/projects/final-city-surge.webp",
    imageAlt: {
      zh: "无尽防线科幻肉鸽游戏运行画面",
      en: "Final City Surge sci-fi roguelite gameplay"
    },
    mediaLabel: { zh: "实机运行与系统截图", en: "Gameplay and system captures" },
    gallery: [
      {
        image: "images/projects/endless-hub.webp",
        imageAlt: { zh: "无尽防线主界面", en: "Final City Surge home hub" },
        caption: { zh: "主界面", en: "Home hub" }
      },
      {
        image: "images/projects/endless-armory.webp",
        imageAlt: { zh: "无尽防线军械库界面", en: "Final City Surge armory" },
        caption: { zh: "军械库", en: "Armory" }
      },
      {
        image: "images/projects/endless-settings.webp",
        imageAlt: { zh: "无尽防线设置界面", en: "Final City Surge settings" },
        caption: { zh: "设置与本地化", en: "Settings and localization" }
      },
      {
        image: "images/projects/endless-result.webp",
        imageAlt: { zh: "无尽防线战斗结算界面", en: "Final City Surge run results" },
        caption: { zh: "战斗结算", en: "Run results" }
      }
    ],
    type: { zh: "独立游戏", en: "Independent Game" },
    name: { zh: "无尽防线｜Final City Surge", en: "Final City Surge" },
    short: {
      zh: "一款 2.5D 科幻肉鸽。三分钟一局，战斗够密，构筑会变，武器也能一路进化。",
      en: "A 2.5D sci-fi roguelite built around dense combat, randomized builds, and weapon evolution in three-minute runs."
    },
    status: { zh: "可玩商业切片", en: "Playable commercial slice" },
    summary: {
      zh: "这是给网页和 Android 做的科幻刷怪肉鸽。现在已经能完整打一局，也有升级构筑、事件、Boss、局外强化和中英文切换。",
      en: "A sci-fi horde roguelite for web game platforms and Android. The current slice includes full runs, build choices, events, bosses, meta upgrades, and Chinese-English switching."
    },
    facts: [
      { label: { zh: "引擎", en: "Engine" }, value: { zh: "Cocos Creator 3.8.8", en: "Cocos Creator 3.8.8" } },
      { label: { zh: "平台", en: "Platforms" }, value: { zh: "Web Desktop、Web Mobile、Android", en: "Web Desktop, Web Mobile, Android" } },
      { label: { zh: "单局", en: "Run" }, value: { zh: "180 秒", en: "180 seconds" } }
    ],
    challenge: {
      zh: "一局只有几分钟，战斗得有变化，移动端还不能卡，网页首包也不能太重。",
      en: "A short-session roguelite must create enough combat variation within minutes while staying within mobile performance and web bundle budgets."
    },
    approach: {
      zh: "我用六阶段波次、随机升级、五类事件和两场 Boss 战撑起一局节奏，Web 和 Android 共用 TypeScript 玩法逻辑。",
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
    image: "images/projects/disorder-home.webp",
    imageAlt: {
      zh: "神位失序横屏战术卡牌游戏主界面",
      en: "Divine Order: Fracture landscape tactical card game interface"
    },
    mediaLabel: { zh: "可玩版本实机截图", en: "Playable build captures" },
    gallery: [
      {
        image: "images/projects/disorder-campaign.webp",
        imageAlt: { zh: "神位失序征战章节页面", en: "Divine Order: Fracture campaign screen" },
        caption: { zh: "征战章节", en: "Campaign chapters" }
      },
      {
        image: "images/projects/disorder-cards.webp",
        imageAlt: { zh: "神位失序卡库页面", en: "Divine Order: Fracture card library" },
        caption: { zh: "卡库", en: "Card library" }
      },
      {
        image: "images/projects/disorder-deck.webp",
        imageAlt: { zh: "神位失序编队页面", en: "Divine Order: Fracture deck formation" },
        caption: { zh: "编队", en: "Formation" }
      },
      {
        image: "images/projects/disorder-adventure.webp",
        imageAlt: { zh: "神位失序历练页面", en: "Divine Order: Fracture adventure screen" },
        caption: { zh: "历练", en: "Adventure" }
      }
    ],
    type: { zh: "独立游戏", en: "Independent Game" },
    name: { zh: "神位失序", en: "Divine Order: Fracture" },
    short: {
      zh: "一款放在封神之后的横屏战术卡牌游戏，先把队伍和卡组搭起来，再上场见真章。",
      en: "A landscape tactical card game set in an original post-Fengshen era."
    },
    status: { zh: "可玩版本", en: "Playable vertical slice" },
    summary: {
      zh: "故事放在原创的封神后时代。玩家在横屏战场部署单位、管理卡组，打完一关再把结果带回主城继续养成。",
      en: "Set in an original post-Fengshen era, players deploy units on a landscape battlefield, manage decks, and progress through PVE chapters that feed back into a persistent home-city system."
    },
    facts: [
      { label: { zh: "引擎", en: "Engine" }, value: { zh: "Cocos Creator 3.8.8", en: "Cocos Creator 3.8.8" } },
      { label: { zh: "类型", en: "Genre" }, value: { zh: "PVE 战术卡牌", en: "PVE tactical card game" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "完整系统外壳与可玩流程", en: "Full system shell with playable flow" } }
    ],
    challenge: {
      zh: "战术卡牌不能只把一场战斗做出来，还得让卡牌、编队、装备、关卡和奖励彼此有关系，玩家才有继续玩的理由。",
      en: "A tactical card game needs more than one playable battle; cards, formations, equipment, stages, and rewards must form a coherent long-term loop."
    },
    approach: {
      zh: "我先把主城、战斗和成长这条线打通，再一段段补进卡牌、装备、副本、挑战塔和 Boss 规则。",
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
    image: "images/projects/fatemirror-home.webp",
    imageAlt: {
      zh: "FateMirror AI 自我探索 SaaS 首页，展示每日卡片、会员与账号边界",
      en: "FateMirror AI self-reflection SaaS home showing daily cards, membership, and account boundaries"
    },
    mediaLabel: { zh: "真实产品首页截图", en: "Live product home capture" },
    gallery: [
      {
        image: "images/projects/fatemirror-pricing.webp",
        imageAlt: { zh: "FateMirror 会员方案、额度和账号边界页面", en: "FateMirror membership plans, quotas, and account boundaries" },
        caption: { zh: "会员方案与账号边界", en: "Membership and account boundaries" }
      }
    ],
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
    image: "images/projects/video-product-page.jpg",
    imageAlt: {
      zh: "牡丹花苗微信小店商品页截图，用于 AI 商业视频交付的素材核验",
      en: "Peony product page used to verify source material for the commercial AI video delivery"
    },
    mediaLabel: { zh: "真实商品页与交付素材", en: "Live product page and delivery source" },
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
    image: "images/projects/monitoring-weekly-0727.webp",
    imageAlt: {
      zh: "优废环保竞品监控周报长图",
      en: "YOFI environmental competitor monitoring weekly report"
    },
    mediaLabel: { zh: "真实周报成品", en: "Delivered weekly report" },
    gallery: [
      {
        image: "images/projects/monitoring-weekly-0720.webp",
        imageAlt: { zh: "优废环保上一期竞品监控周报长图", en: "Previous YOFI competitor monitoring weekly report" },
        caption: { zh: "上一期周报", en: "Previous issue" }
      }
    ],
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
