window.PROJECTS = {
  workbench: {
  "group": "enterprise",
  "image": "images/projects/workbench-office.png",
  "imageAlt": {
    "zh": "企业 AI 工作台网页试点，展示同一任务中修改表格并交付文件的办公样例",
    "en": "Enterprise AI web pilot showing a sample spreadsheet revised and delivered within one task"
  },
  "mediaLabel": {
    "zh": "网页试点 · 办公样例",
    "en": "Web pilot · sample office task"
  },
  "type": {
    "zh": "行业 AI 工作环境",
    "en": "Industry AI Workspace"
  },
  "name": {
    "zh": "小优行业 AI 工作台",
    "en": "Xiaoyou Industry AI Workspace"
  },
  "heroShort": {
    "zh": "查资料、算数据、写报告，在同一项任务里做。",
    "en": "Research, calculate, and write reports in the same task."
  },
  "heroStatus": {
    "zh": "网页试点",
    "en": "Web pilot"
  },
  "short": {
    "zh": "给企业员工用的 AI 工作台，把查资料、分析数据和编写材料接在同一项任务里。",
    "en": "An AI workspace for employees to research, analyze data, and prepare documents within one task."
  },
  "status": {
    "zh": "网页试点迭代中",
    "en": "Web pilot in progress"
  },
  "summary": {
    "zh": "给优废和客户企业员工用的行业 AI 工作台。把资料查询、业务分析、方案编写和材料核查放进同一项任务，再把结果做成文档、表格或演示材料。",
    "en": "An industry AI workspace for YOFI and its customer companies. It brings research, business analysis, proposals, and material review into one task, with results delivered as documents, spreadsheets, or presentations."
  },
  "links": [
    {
      "href": "https://zhenwork.shizibandu.icu/",
      "label": {
        "zh": "进入工作台",
        "en": "Open workspace"
      }
    }
  ],
  "accessNote": {
    "zh": "联系我可提供测试账号",
    "en": "Contact me for a test account"
  },
  "currentTitle": {
    "zh": "当前网页试点",
    "en": "Current web pilot"
  },
  "currentText": {
    "zh": "网页试点已验证文档与表格处理、成果预览和下载，以及授权业务数据查询。下方产品规划仍有待实现的部分，试用时以实际开放的能力为准。",
    "en": "The web pilot has verified document and spreadsheet processing, preview and download, and authorized business-data queries. Parts of the product plan below remain to be implemented; the trial is limited to capabilities actually available."
  },
  "facts": [
    {
      "label": {
        "zh": "定位",
        "en": "Positioning"
      },
      "value": {
        "zh": "一个工作台，多类专业工作",
        "en": "One workspace, many professional workflows"
      }
    },
    {
      "label": {
        "zh": "当前形态",
        "en": "Current format"
      },
      "value": {
        "zh": "企业网页试点",
        "en": "Enterprise web pilot"
      }
    },
    {
      "label": {
        "zh": "体验方式",
        "en": "Try it"
      },
      "value": {
        "zh": "联系我可提供测试账号",
        "en": "Contact me for a test account"
      }
    }
  ],
  "challenge": {
    "zh": "从查资料到交付一份报告，员工会用到行业知识、业务数据和办公工具。我希望这些步骤能在同一项任务里接着做，修改时还能找到原来的资料和统计口径。",
    "en": "Researching and delivering a report involves industry knowledge, business data, and office tools. I want those steps to continue within one task, with the original sources and reporting definitions available during revisions."
  },
  "approach": {
    "zh": "用户可以选专家、选示例任务，也可以直接说要做什么。工作台按任务调用检索、计算和文件工具，缺资料时先提示。业务系统继续保存业务记录、执行既定流程，工作台帮助员工读懂和使用这些信息。",
    "en": "Employees can choose an expert or example task, or describe what they need. The workspace calls retrieval, calculation, and file tools and flags missing material. Business systems continue to hold records and run established processes; the workspace helps employees understand and use that information."
  },
  "evidenceTitle": {
    "zh": "网页试点已验证的部分",
    "en": "Verified in the web pilot"
  },
  "evidence": [
    {
      "zh": "在网页任务中生成、修改和下载办公文件，并打开文件核对内容。",
      "en": "Office files generated, revised, downloaded, and opened to check their contents in web tasks."
    },
    {
      "zh": "预览成果、继续追问，重新打开会话后保留工作文件。",
      "en": "Artifact preview and follow-up work, with files retained when a session is reopened."
    },
    {
      "zh": "查询已授权的业务数据，并检查员工之间、不同资源之间的权限隔离。",
      "en": "Queries against authorized business data, with employee and resource permissions checked."
    }
  ],
  "modulesTitle": {
    "zh": "产品规划",
    "en": "Product plan"
  },
  "modulesIntro": {
    "zh": "下面是整体设计目标，尚未全部实现。每项工作能做到哪一步，取决于数据、权限和实际交付范围。",
    "en": "The following is the overall design plan, which is not yet fully implemented. Each workflow depends on available data, permissions, and the agreed delivery scope."
  },
  "modules": [
    {
      "name": {
        "zh": "谁来用，资料归谁管",
        "en": "Users and data access"
      },
      "text": {
        "zh": "优废内部员工做客户方案、产品选型、销售准备、客服、售后、培训和内部分析。客户企业员工做产废分析、资料核查、处置费用分析、政策查询和材料整理，管理人员在数据具备时查看经营情况、比较方案、准备汇报。企业管理员管理本企业人员、资料权限、可用能力、模型额度和配置。软件可以共用，客户资料、内部报价和销售策略分别授权。",
        "en": "YOFI teams prepare proposals, select products, support sales and customers, maintain services, train staff, and analyze internal work. Customer employees analyze waste and disposal costs, review materials, query policies, and prepare documents; managers compare options and report on operations when data permits. Administrators manage their company’s people, data access, capabilities, model allowances, and settings. Shared software keeps customer data, internal prices, and sales strategies separately authorized."
      }
    },
    {
      "name": {
        "zh": "办公能力和九类专业工作",
        "en": "Office tools and nine professional areas"
      },
      "text": {
        "zh": "文档、表格、演示材料、检索和文件处理继续保留。九类专业方向包括数据分析、产品选型、政策解读、销售、客服、售后运维、报告生成、知识检索和培训。员工按任务组合使用这些能力，资料和结果留在同一项工作里。",
        "en": "Documents, spreadsheets, presentations, search, and file processing remain available. The nine professional areas are data analysis, product selection, policy interpretation, sales, customer service, after-sales operations, reporting, knowledge retrieval, and training. They are combined around a task, keeping its sources and results together."
      }
    },
    {
      "name": {
        "zh": "这些能力怎样配合",
        "en": "How the capabilities work together"
      },
      "text": {
        "zh": "专家提供分析方法和判断要求，Skills 提供步骤、检查清单和模板，工具负责查询、计算、处理文件和连接业务系统。Harness 安排任务执行、保存过程，出错后处理失败，也支持接着修改。员工可以从专家、示例任务或自己的目标开始。",
        "en": "Experts provide methods and judgment criteria. Skills supply steps, checklists, and templates. Tools query, calculate, handle files, and connect business systems. Harness coordinates execution, retains its history, handles failures, and supports revisions. Employees can start with an expert, an example, or their own objective."
      }
    },
    {
      "name": {
        "zh": "有多少数据，分析到哪一步",
        "en": "Analysis depends on available data"
      },
      "text": {
        "zh": "固危废 AI 专员包括产废分析、资料核查、政策适用解释和检查材料准备。只有重量和业务记录时，先看产废结构、趋势和差异。补齐产量、合同、运输和结算数据，才能分析单位产废和成本变化。再有库存、库容、清运约束和计算工具，才比较清运方案。仅有重量数据时不承诺降本，验收工作站暂不纳入。",
        "en": "The solid and hazardous waste specialist covers generation analysis, material review, policy applicability, and inspection preparation. Weight and business records support structure, trends, and differences. Production, contract, transport, and settlement data are needed for unit-waste and cost analysis. Inventory, capacity, collection constraints, and calculation tools are needed to compare collection plans. Weight data alone does not justify savings claims. The acceptance workstation remains outside the plan."
      }
    },
    {
      "name": {
        "zh": "在同一项任务里继续修改",
        "en": "Revise within the same task"
      },
      "text": {
        "zh": "用户提出“分析这个月的产废情况，准备管理汇报”，工作台先确认企业、期间和范围，查找授权数据、提示缺项，再计算、检索，生成图表和报告或 PPT。之后可以按车间拆分、补上月数据或修正原因，同一任务保留资料、口径、引用和文件版本。对话、资料、进度、待确认事项和成果预览放在一起。",
        "en": "For “analyze this month’s waste and prepare a management report,” the workspace confirms company, period, and scope, retrieves authorized data, flags gaps, and calculates and researches before creating charts and a report or presentation. Revisions can split by workshop, add the previous month, or correct a cause. Sources, definitions, citations, and file versions stay with the task, alongside conversation, progress, pending decisions, and previews."
      }
    },
    {
      "name": {
        "zh": "资料分开，口径说清",
        "en": "Separate sources and define the data"
      },
      "text": {
        "zh": "公开行业资料、优废内部知识、客户资料和业务系统数据分开管理。同时约定字段含义、单位转换、统计节点和跨系统对象的对应关系。数据可以从上传文件、授权共享目录逐步接到业务 API。精确统计用查询和计算工具，政策与手册通过检索提供依据。缺数据就列出缺项，不让模型自行补全。",
        "en": "Keep public industry materials, YOFI internal knowledge, customer files, and business-system data separate. Define fields, units, reporting events, and cross-system mappings. Access can progress from uploads and authorized shared folders to APIs. Queries and calculation tools handle exact statistics; retrieval supplies policies and manuals. Missing data is listed rather than invented."
      }
    },
    {
      "name": {
        "zh": "桌面、网页、小程序和 API",
        "en": "Desktop, web, mini-program, and API"
      },
      "text": {
        "zh": "桌面端和网页端处理完整任务，小程序承接产品选型、查询和任务发起，其他业务系统可以通过 API 调用专业能力。每个入口都单独核验身份和数据权限，使用同一个专家也要遵守各自的数据范围。",
        "en": "Desktop and web handle complete tasks. A mini-program supports product selection, queries, and task initiation, while other business systems can call professional capabilities through APIs. Every entry point checks identity and permissions separately; using the same expert still requires the appropriate data access."
      }
    },
    {
      "name": {
        "zh": "谁管理，谁提供支持",
        "en": "Administration and support"
      },
      "text": {
        "zh": "客户管理员管理本企业的人员、资料、权限、能力和额度。优废维护产品版本、行业知识、专家和 Skills，提供部署、接入、培训和支持。服务人员访问客户文件需要明确授权。企业购买的是持续使用的工作台、行业能力和配套服务，套餐包含哪些支持、哪些接入或专业支持另计费，在实际交付中说清。",
        "en": "Customer administrators manage their company’s people, materials, permissions, capabilities, and allowances. YOFI maintains versions, industry knowledge, experts, and Skills and provides deployment, integration, training, and support. Service staff need explicit authorization to access customer files. Companies buy ongoing use of the workspace, industry capabilities, and supporting services; delivery agreements clarify included support and separately charged integration or specialist work."
      }
    }
  ]
},
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
      zh: "围绕固废识别、行情报价、政策检索和客服诊断，设计企业智能体。",
      en: "Enterprise agents designed around material recognition, market pricing, policy retrieval, and support diagnostics."
    },
    status: { zh: "持续迭代", en: "In active development" },
    summary: {
      zh: "这些业务有各自的数据和规则。我把它们拆成可评审的功能，逐项写清资料来源、判断依据和转人工条件。",
      en: "Each workflow has its own data and rules. I break them into reviewable functions, specifying sources, evidence, and when a person needs to take over."
    },
    facts: [
      { label: { zh: "角色", en: "Role" }, value: { zh: "产品规划、规则设计、原型与验收", en: "Product planning, rule design, prototyping, and acceptance" } },
      { label: { zh: "形态", en: "Format" }, value: { zh: "智能体、知识库、业务工作流", en: "Agents, knowledge bases, and business workflows" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "真实交互原型截图", en: "Live prototype screenshot" } }
    ],
    challenge: {
      zh: "回答用了什么资料，结论怎么得出，什么时候该转人工，客服需要看得明白。",
      en: "Support staff need to see which sources an answer uses, how the conclusion was reached, and when to involve a person."
    },
    approach: {
      zh: "先核对业务规则和数据来源，再设计检索、规则比对和异常处理。原型、需求文档和验收用例一起整理，方便业务和开发人员逐项核对。",
      en: "Check business rules and data sources before designing retrieval, rule checks, and exception handling. Keep prototypes, requirements, and acceptance cases together so business and engineering teams can review each function."
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
    "heroShort": {"zh": "视频告警之后，接着做台账核对和人工复核。", "en": "Follow video alerts with record checks and human review."},
    "heroStatus": {"zh": "需登录", "en": "Sign-in required"},
    "links": [{"href": "https://ipcadmin.ufei.center/#/login?redirect=/bigScreen/index", "label": {"zh": "访问平台", "en": "Visit platform"}}],
    "currentTitle": {"zh": "案例与在线入口", "en": "Case study and online access"},
    "currentText": {"zh": "本页展示脱敏的一期原型。在线平台需登录，具体功能和数据范围由账号权限决定。", "en": "This page shows sanitized phase-one prototypes. The online platform requires sign-in; account permissions determine its available functions and data."},
    short: {
      zh: "把视频告警、业务台账和人工复核接到同一条处理流程里。",
      en: "Connect video alerts, business records, and human review in one workflow."
    },
    status: { zh: "一期原型", en: "Phase-one prototype" },
    summary: {
      zh: "视频报出疑似违规后，监管人员还要核对点位、查台账、复核画面，再决定怎么处理。这个项目设计了从事件接入到结果回写的流程，并保留后续追查需要的证据。",
      en: "After a suspected violation is detected, staff need to identify the site, check records, review footage, and decide what to do. The project designs the process from event intake to result write-back, with evidence retained for later review."
    },
    facts: [
      { label: { zh: "交付", en: "Delivery" }, value: { zh: "PRD、53 页原型、架构与验收规范", en: "PRD, 53-page prototype, architecture, and acceptance rules" } },
      { label: { zh: "角色", en: "Role" }, value: { zh: "产品规划与评审推进", en: "Product planning and review facilitation" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "已脱敏", en: "Sanitized case study" } }
    ],
    challenge: {
      zh: "一条告警需要对应到具体点位和业务记录，也要有人复核、留下处理结果。缺了其中一项，监管人员仍得在多个系统里查找。",
      en: "An alert needs a specific site, linked business records, a reviewer, and a recorded outcome. Without those connections, staff still have to search across systems."
    },
    approach: {
      zh: "一期原型按事件接入、点位映射、台账校验、人工复核、证据留存和结果回写设计，逐步明确各环节由谁处理。",
      en: "The phase-one prototype covers event intake, site mapping, record validation, human review, evidence retention, and result write-back, with responsibility defined at each step."
    },
    evidence: [
      { zh: "53 页原型与配套图形资源", en: "53 prototype pages and supporting graphics" },
      { zh: "需求文档、时序图、数据流与领域图", en: "Requirements, sequence diagrams, data flows, and domain models" },
      { zh: "试点条件、供应商分工与 PoC 验收规范", en: "Pilot conditions, vendor responsibilities, and PoC acceptance criteria" }
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
      zh: "基于 RuoYi-AI，集中管理智能体配置、知识库、调用记录和用户反馈。",
      en: "An administration design based on RuoYi-AI for agent settings, knowledge bases, call records, and feedback."
    },
    status: { zh: "MVP 设计", en: "MVP design" },
    summary: {
      zh: "我基于 RuoYi-AI 做企业智能体后台设计，重点整理配置入口、字段含义、启停规则、调用日志和对话反馈。",
      en: "An enterprise agent administration design based on RuoYi-AI, focusing on configuration, field definitions, enablement rules, call logs, and conversation feedback."
    },
    facts: [
      { label: { zh: "框架", en: "Framework" }, value: { zh: "RuoYi-AI", en: "RuoYi-AI" } },
      { label: { zh: "数据", en: "Data" }, value: { zh: "智能体配置、调用日志、对话反馈", en: "Agent config, call logs, and conversation feedback" } },
      { label: { zh: "公开范围", en: "Disclosure" }, value: { zh: "已脱敏", en: "Sanitized case study" } }
    ],
    challenge: {
      zh: "运营人员需要知道启用了哪些智能体、各自使用哪份知识，出了问题能查到对应调用和反馈。",
      en: "Operators need to know which agents are enabled, which knowledge they use, and where to find the relevant calls and feedback when something goes wrong."
    },
    approach: {
      zh: "沿用已有框架，补充企业管理需要的页面和字段规则，再把启停、版本和反馈流程写成验收用例。",
      en: "Keep the existing framework, add the required enterprise views and field rules, and define acceptance cases for enablement, versions, and feedback."
    },
    evidence: [
      { zh: "后台信息架构和低保真原型", en: "Admin information architecture and low-fidelity prototype" },
      { zh: "agentConfig、agentCallLog、conversationFeedback 字段口径", en: "Field definitions for agentConfig, agentCallLog, and conversationFeedback" },
      { zh: "启停、版本、日志与反馈验收规则", en: "Enablement, version, logging, and feedback acceptance rules" }
    ]
  },
  beadgrid: {
  "group": "lab",
  "image": "images/projects/beadgrid-studio.png",
  "imageAlt": {
    "zh": "豆格工坊真实网页编辑器，展示拼豆图纸、工具栏、配色和尺寸设置",
    "en": "BeadGrid Studio web editor showing a bead pattern, editing tools, palette, and size settings"
  },
  "mediaLabel": {
    "zh": "在线产品 · 示例作品",
    "en": "Live product · sample project"
  },
  "type": {
    "zh": "在线创作工具",
    "en": "Online Creative Tool"
  },
  "name": {
    "zh": "豆格工坊 · 拼豆网站",
    "en": "BeadGrid Studio"
  },
  "heroShort": {
    "zh": "把图片做成拼豆图纸。",
    "en": "Make bead patterns from images."
  },
  "heroStatus": {
    "zh": "已上线",
    "en": "Live"
  },
  "short": {
    "zh": "上传图片，调网格和颜色，逐格修改，再导出图纸和用豆清单。",
    "en": "Upload an image, adjust its grid and colors, edit individual cells, and export a pattern and bead list."
  },
  "status": {
    "zh": "已上线",
    "en": "Live"
  },
  "summary": {
    "zh": "选一张图片，调整格数和配色，就能开始修改拼豆图纸。做好后保存作品，导出图纸和用豆清单，照着准备材料。",
    "en": "Choose an image, set the grid and palette, and edit the bead pattern. Save the project and export the pattern and bead list to prepare your materials."
  },
  "links": [
    {
      "href": "https://pindou.shizibandu.icu/",
      "label": {
        "zh": "在线体验",
        "en": "Try it online"
      }
    }
  ],
  "facts": [
    {
      "label": {
        "zh": "形态",
        "en": "Format"
      },
      "value": {
        "zh": "在线编辑器",
        "en": "Web editor"
      }
    },
    {
      "label": {
        "zh": "核心成果",
        "en": "Deliverables"
      },
      "value": {
        "zh": "图纸、用豆清单与采购 CSV",
        "en": "Patterns, bead lists, and purchasing CSV"
      }
    },
    {
      "label": {
        "zh": "状态",
        "en": "Status"
      },
      "value": {
        "zh": "已上线，保存与导出按账号权益使用",
        "en": "Live; saving and export use account entitlements"
      }
    }
  ],
  "challenge": {
    "zh": "动手拼之前，要知道用哪套色卡、多少颗豆，图纸也得看得清。改完一格，导出的颜色和数量都应该跟着变。",
    "en": "Before making a pattern, you need a palette, accurate bead quantities, and readable guides. Changes to individual cells should be reflected in exported colors and counts."
  },
  "approach": {
    "zh": "把图片转换、逐格编辑、作品保存和导出放在同一个在线编辑器里。除了图纸，也提供马赛克预览、拼板分区图和用豆清单。",
    "en": "Keep image conversion, cell editing, saving, and export in one web editor. Outputs include patterns, mosaic previews, assembly sections, and bead lists."
  },
  "evidence": [
    {
      "zh": "在网页里上传、编辑和保存，刷新后继续处理作品。",
      "en": "Upload, editing, and saving exercised in the web product, with projects retained after refresh."
    },
    {
      "zh": "实际下载图纸和清单图片，核对 JSON、CSV 与有效格数量。",
      "en": "Patterns and list images downloaded, with JSON, CSV, and active-cell counts checked."
    },
    {
      "zh": "统一账号登录，作品按账号隔离，导出按账号权益使用。尚未接入在线支付。",
      "en": "Unified sign-in, projects separated by account, and export entitlements. Online payment is not connected."
    }
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
      zh: "在 Mac 上找已安装的 Skills，看中文说明、调用方法和依赖情况。",
      en: "Find installed Skills on Mac and read their Chinese descriptions, usage examples, and dependencies."
    },
    status: { zh: "1.0.0 已验收", en: "Version 1.0.0 verified" },
    summary: {
      zh: "Skills 分散在用户、项目和插件目录里，装多了就容易忘记有哪些。SkillLens 把它们放进同一个搜索界面，用中文说明用途、调用方法和依赖情况。",
      en: "Skills live across user, project, and plugin directories, making them hard to keep track of. SkillLens puts them in one searchable view with Chinese descriptions, usage examples, and dependency information."
    },
    facts: [
      { label: { zh: "技术", en: "Stack" }, value: { zh: "SwiftUI、本地优先", en: "SwiftUI, local-first" } },
      { label: { zh: "交付", en: "Delivery" }, value: { zh: "应用、验证程序与 DMG", en: "App, verifier, and DMG" } },
      { label: { zh: "边界", en: "Boundary" }, value: { zh: "默认只读", en: "Read-only by default" } }
    ],
    challenge: {
      zh: "想找一个 Skill 时，往往要翻几个目录，再读英文说明，才能判断它能做什么、能不能用。",
      en: "Finding a Skill can mean checking several directories and reading English descriptions before deciding what it does and whether it can run."
    },
    approach: {
      zh: "扫描本地目录，建立搜索索引，再补充中文说明、调用示例和依赖检查。默认只读，不执行 Skill 脚本，也不修改原文件。",
      en: "Scan local directories, build a search index, and add Chinese guidance, usage examples, and dependency checks. The app is read-only by default and does not run Skill scripts or modify source files."
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
      zh: "给个人用户和理发门店做的发型预览工具。上传照片、选择发型、生成预览和查看历史记录已有可用 Demo，后台管理也已接入。公开收费前，还需要完成真人样本评测。",
      en: "A hairstyle preview tool for individuals and salons. A usable demo covers photo upload, style selection, generation, history, and administration. Real-person evaluation is still required before a public paid release."
    },
    facts: [
      { label: { zh: "技术", en: "Stack" }, value: { zh: "Next.js、AI 图像生成", en: "Next.js and AI image generation" } },
      { label: { zh: "形态", en: "Format" }, value: { zh: "用户端与运营后台", en: "Consumer app and operations console" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "本地 Demo 可用", en: "Local demo available" } }
    ],
    challenge: {
      zh: "用户上传的是自己的照片。除了生成效果，还要处理隐私、排队、失败重试、模型成本和使用额度。",
      en: "Users upload their own photos. Beyond image quality, the product needs privacy controls, queues, retries, model cost management, and usage allowances."
    },
    approach: {
      zh: "把上传、生成和历史记录连成一个任务流程，个人用户、门店和管理员分别授权。先补完真人样本评测，再考虑公开收费。",
      en: "Connect upload, generation, and history in one task flow, with separate permissions for individuals, salons, and administrators. Complete real-person evaluation before considering public paid access."
    },
    evidence: [
      { zh: "上传、选择、生成和历史记录页面", en: "Upload, selection, generation, and history screens" },
      { zh: "任务队列、进度保存和失败处理", en: "Task queue, retained progress, and failure handling" },
      { zh: "额度、套餐、隐私与上线前检查", en: "Allowances, plans, privacy, and pre-release checks" }
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
      zh: "让孩子听着父母的声音，点卡识字、跟读。微信小程序已上线。",
      en: "Word cards and reading practice in a parent’s voice. Available as a WeChat mini program."
    },
    status: { zh: "已上线｜微信小程序", en: "Live｜WeChat mini program" },
    summary: {
      zh: "孩子按生活场景点卡识字，家长可以录下自己的声音，也能拍照把身边的东西加入词库。微信搜索“父母声场景伴读”即可体验。",
      en: "Children explore word cards by everyday scene. Parents can record their voice or photograph nearby objects to add words. Search for “父母声场景伴读” in WeChat to try it."
    },
    facts: [
      { label: { zh: "平台", en: "Platform" }, value: { zh: "微信小程序", en: "WeChat Mini Program" } },
      { label: { zh: "面向", en: "For" }, value: { zh: "2 至 6 岁儿童与家长", en: "Children aged 2-6 and parents" } },
      { label: { zh: "入口", en: "Find it" }, value: { zh: "微信搜索「父母声场景伴读」", en: "Search WeChat for “父母声场景伴读”" } }
    ],
    challenge: {
      zh: "我想把父母的声音放进识字卡片，让孩子可以随时点开，听熟悉的声音读词。",
      en: "I wanted word cards to use a parent’s voice, so children could tap a card and hear a familiar voice read it."
    },
    approach: {
      zh: "家长录音后，AI 复刻声音，孩子点卡就能听词、跟读，并留下学习记录。第一版围绕这个使用过程设计。",
      en: "A parent records their voice, AI recreates it, and children tap cards to listen and read along. Learning history is retained. The first version is designed around that sequence."
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
      zh: "三分钟一局的 2.5D 科幻肉鸽，在战斗中升级、搭配被动，让武器进化。",
      en: "A three-minute 2.5D sci-fi roguelike with upgrades, passive builds, and weapon evolution during combat."
    },
    status: { zh: "可玩商业切片", en: "Playable commercial slice" },
    summary: {
      zh: "面向网页和 Android 的科幻肉鸽。已有可完整游玩的一局，包含升级构筑、随机事件、Boss、局外强化和中英文切换。",
      en: "A sci-fi roguelike for web and Android. A complete playable run includes build upgrades, random events, bosses, progression between runs, and Chinese and English interfaces."
    },
    facts: [
      { label: { zh: "引擎", en: "Engine" }, value: { zh: "Cocos Creator 3.8.8", en: "Cocos Creator 3.8.8" } },
      { label: { zh: "平台", en: "Platforms" }, value: { zh: "Web Desktop、Web Mobile、Android", en: "Web Desktop, Web Mobile, Android" } },
      { label: { zh: "单局", en: "Run" }, value: { zh: "180 秒", en: "180 seconds" } }
    ],
    challenge: {
      zh: "一局只有几分钟，要让战斗和升级有变化，也要控制手机性能开销和网页加载体积。",
      en: "A short run needs varied combat and upgrades while keeping mobile performance costs and web download size under control."
    },
    approach: {
      zh: "用六个阶段安排敌人波次，加入随机升级、五类事件和两场 Boss 战。Web 和 Android 共用 TypeScript 玩法逻辑。",
      en: "Arrange enemy waves across six stages, with random upgrades, five event types, and two boss fights. Web and Android share the TypeScript gameplay logic."
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
      zh: "以封神后时代为背景的横屏战术卡牌游戏。",
      en: "A landscape tactical card game set in an original era after the Investiture of the Gods."
    },
    status: { zh: "可玩版本", en: "Playable vertical slice" },
    summary: {
      zh: "玩家在横屏战场部署单位、安排卡组，打完关卡后回到主城养成。故事设在原创的封神后时代。",
      en: "Deploy units and manage a deck on a landscape battlefield, then return to the main city for progression. The story takes place in an original era after the Investiture of the Gods."
    },
    facts: [
      { label: { zh: "引擎", en: "Engine" }, value: { zh: "Cocos Creator 3.8.8", en: "Cocos Creator 3.8.8" } },
      { label: { zh: "类型", en: "Genre" }, value: { zh: "PVE 战术卡牌", en: "PVE tactical card game" } },
      { label: { zh: "状态", en: "Status" }, value: { zh: "完整系统外壳与可玩流程", en: "Full system shell with playable flow" } }
    ],
    challenge: {
      zh: "卡牌、编队、装备和关卡奖励需要一起设计，让一场战斗里的选择影响后续养成。",
      en: "Cards, formations, equipment, and rewards need to be designed together so decisions in battle matter for later progression."
    },
    approach: {
      zh: "先做主城、战斗和成长，再逐步加入卡牌、装备、副本、挑战塔和 Boss 规则。",
      en: "Build the main city, battles, and progression first, then add cards, equipment, dungeons, the challenge tower, and boss rules."
    },
    evidence: [
      { zh: "主城、章节、卡牌、编队和主将装备", en: "Main city, chapters, cards, formations, and commander equipment" },
      { zh: "副本、挑战塔和 Boss 战的独立结算", en: "Separate results for dungeons, challenge tower, and boss fights" },
      { zh: "九个主页面的自动检查与本地存档", en: "Automated checks for nine main screens and local saves" }
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
    short: { zh: "围绕 AI 报告做的 SaaS 实验，包含账号、额度和支付设计。", en: "A SaaS experiment built around AI reports, with account, allowance, and payment design." },
    status: { zh: "持续优化", en: "In development" },
    summary: { zh: "一个 AI 报告产品实验，用户可以生成、保存和查看报告，导出或删除自己的账号数据。产品设计也包含使用额度和支付规则。", en: "An AI-report product experiment. Users can generate, save, and view reports and export or delete their account data. The product design also covers usage allowances and payment rules." },
    facts: [],
    challenge: { zh: "生成一次结果之后，用户还需要保存、重看报告，也需要管理账号和数据。", en: "After generating a result, users need to save and revisit reports and manage their accounts and data." },
    approach: { zh: "围绕生成、保存、报告展示、使用额度和账号数据安排产品流程。", en: "Design the flow around generation, saving, report viewing, allowances, and account data." },
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
    short: { zh: "用 AI 制作商品视频，安排交付，再复盘多平台内容。", en: "Use AI to produce product videos, schedule delivery, and review content across platforms." },
    status: { zh: "已交付", en: "Delivered" },
    summary: { zh: "一次商品视频商业交付，从整理素材、制作视频到安排交付，也做了后续的内容复盘。", en: "A commercial product-video engagement covering source materials, production, delivery scheduling, and subsequent content review." },
    facts: [],
    challenge: { zh: "素材和期限已经确定，需要按时交出多条商品视频。", en: "Produce multiple product videos on time from fixed materials and a fixed deadline." },
    approach: { zh: "先确定内容方向，再分批制作和验收，按排期跟进剩余视频。", en: "Set the content direction, produce and review in batches, and track the remaining videos against the schedule." },
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
    short: { zh: "定期收集竞品消息，整理成能查回来源的周报。", en: "Collect competitor updates and prepare weekly reports with traceable sources." },
    status: { zh: "本地运行", en: "Running locally" },
    summary: { zh: "把竞品信息采集、整理和周报输出放到本地运行。内容和来源一起保留，方便回头核对。", en: "Run competitor-information collection, organization, and report generation locally, retaining both content and sources for later checking." },
    facts: [],
    challenge: { zh: "每周收集和排版有不少重复工作，自动处理后仍需要能找到原始来源。", en: "Weekly collection and layout involve repetitive work, but automated reports still need accessible original sources." },
    approach: { zh: "按固定字段整理信息，再生成 PDF、长图和结构化数据。", en: "Organize information into defined fields, then generate PDFs, long images, and structured data." },
    evidence: [{ zh: "结构化数据、PDF 与长图周报", en: "Structured data, PDF, and long-image reports" }]
  }
};
