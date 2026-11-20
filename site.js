const COPY = {
  skip: { zh: "跳到正文", en: "Skip to content" },
  projects: { zh: "项目", en: "Projects" },
  contact: { zh: "联系", en: "Contact" },
  allProjects: { zh: "全部项目", en: "All projects" },
  allProducts: { zh: "全部独立产品", en: "All independent products" },
  allGames: { zh: "全部游戏作品", en: "All games" },
  enterprise: { zh: "企业案例", en: "Enterprise cases" },
  products: { zh: "独立产品", en: "Independent products" },
  games: { zh: "游戏作品", en: "Games" },
  name: { zh: "莫臻轩", en: "Zhenxuan Mo" },
  introName: { zh: "我是莫臻轩", en: "Zhenxuan Mo" },
  role: { zh: "做企业 AI 产品", en: "I build enterprise AI products" },
  bioFocus: {
    zh: "做软件产品 11 年，主要做企业 AI 和行业应用。",
    en: "11 years in software product. I now focus on enterprise AI and industry tools."
  },
  bioIndependent: {
    zh: "也独立开发工具和游戏。",
    en: "I also build independent tools and games."
  },
  featured: { zh: "精选项目", en: "Selected work" },
  practice: { zh: "工作方式", en: "How I work" },
  practiceText: {
    zh: "我先和用户走一遍实际流程，弄清哪一步值得用 AI。涉及业务规则、权限和准确数据的地方先定清楚，再用能操作的页面和能打开的结果文件来验证。",
    en: "I start by walking through the real workflow with users. Then I define where AI can help, what the rules and permissions are, and how to verify the work in a usable interface or file."
  },
  contactTitle: { zh: "联系我", en: "Get in touch" },
  contactText: {
    zh: "想聊企业 AI、产品合作，或申请小优行业 AI 工作台的测试账号，可以发邮件或加微信。",
    en: "Email me or add me on WeChat to discuss enterprise AI, work together, or request a Xiaoyou test account."
  },
  wechat: { zh: "微信", en: "WeChat" }
};

const PROJECT_GROUPS = {
  enterprise: ["workbench", "compliance"],
  products: ["formatter", "beadgrid", "parentvoice", "hairstyle", "account-center"],
  games: ["forge", "endless", "kings-call"]
};

const HOME_COLLECTIONS = {
  products: ["formatter", "beadgrid", "parentvoice"],
  games: ["forge", "endless", "kings-call"]
};

const FEATURED = [
  {
    id: "workbench",
    action: { zh: "进入网页试点", en: "Open web pilot" },
    insetImage: "images/projects/workbench-office.png"
  },
  {
    id: "compliance",
    title: { zh: "AI 视频智能合规监管平台", en: "AI Video Compliance" },
    action: { zh: "登录平台", en: "Platform sign-in" }
  },
  { id: "beadgrid", title: { zh: "豆格工坊", en: "BeadGrid Studio" } }
];

function currentLanguage() {
  return localStorage.getItem("zhenyi-language") === "en" ? "en" : "zh";
}

function localized(value, lang) {
  return typeof value === "string" ? value : value?.[lang] || value?.zh || "";
}

function featuredCard({ id, title, action, insetImage }, t, loading = "eager") {
  const project = window.PROJECTS[id];
  const link = project.links?.[0];
  return `<article class="featured-card" data-featured-id="${id}">
      <a class="featured-detail" href="project.html?id=${id}" aria-labelledby="featured-${id}">
        <span class="featured-media">
          <span class="featured-window">
            <img src="${project.image}" alt="${t(project.imageAlt)}" loading="${loading}" decoding="async"${insetImage ? ' fetchpriority="high"' : ""}>
          </span>
          ${insetImage ? `<span class="featured-inset"><img src="${insetImage}" alt="" decoding="async"></span>` : ""}
        </span>
        <h3 id="featured-${id}">${t(title || project.name)}<span aria-hidden="true">→</span></h3>
      </a>
      <p>${t(project.heroShort || project.short)}</p>
      <div class="featured-actions">
        ${link ? `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${t(action || link.label)} <span aria-hidden="true">↗</span></a>` : ""}
        ${project.accessNote ? `<a class="account-note" href="#contact">${t(project.accessNote)}</a>` : ""}
      </div>
    </article>`;
}

function renderHome(lang) {
  const root = document.querySelector("#featuredProjects");
  if (!root) return;
  const t = value => localized(value, lang);
  root.innerHTML = FEATURED.map(project => featuredCard(project, t)).join("");

  document.querySelectorAll("[data-home-collection]").forEach(collection => {
    const [lead, ...related] = HOME_COLLECTIONS[collection.dataset.homeCollection];
    const items = related.map(id => {
      const project = window.PROJECTS[id];
      return `<li>
        <a class="collection-item" href="project.html?id=${id}" aria-labelledby="collection-${id}">
          <img src="${project.image}" alt="" loading="lazy" decoding="async">
          <span class="collection-item-copy">
            <span id="collection-${id}" class="collection-item-name">${t(project.name)}</span>
            <span class="collection-item-description">${t(project.heroShort || project.short)}</span>
          </span>
          <span class="collection-item-arrow" aria-hidden="true">→</span>
        </a>
      </li>`;
    }).join("");
    collection.innerHTML = featuredCard({ id: lead }, t, "lazy") + `<ul class="collection-list">${items}</ul>`;
  });
}

function renderDirectory(lang) {
  const t = value => localized(value, lang);
  document.querySelectorAll("[data-project-group]").forEach(list => {
    list.innerHTML = PROJECT_GROUPS[list.dataset.projectGroup].map(id => {
      const project = window.PROJECTS[id];
      return `<li><a class="index-row" data-project-id="${id}" href="project.html?id=${id}" aria-labelledby="index-${id}" aria-describedby="index-description-${id} index-status-${id}">
        <span class="index-media">${project.image ? `<img src="${project.image}" alt="${t(project.imageAlt)}" loading="lazy" decoding="async">` : ""}</span>
        <span class="index-copy">
          <span class="index-name" id="index-${id}">${t(project.name)}</span>
          <span class="index-description" id="index-description-${id}">${t(project.short)}</span>
        </span>
        <span class="index-status" id="index-status-${id}">${t(project.status)}</span>
        <span class="index-arrow" aria-hidden="true">→</span>
      </a></li>`;
    }).join("");
  });
}

function setLanguage(lang) {
  localStorage.setItem("zhenyi-language", lang);
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-copy]").forEach(node => {
    const value = COPY[node.dataset.copy];
    if (value) node.textContent = localized(value, lang);
  });
  document.querySelectorAll("[data-lang-button]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.langButton === lang));
  });

  renderHome(lang);
  renderDirectory(lang);
  if (document.body.dataset.page === "home") document.title = localized(COPY.name, lang) + " · 臻一";
  if (document.body.dataset.page === "directory") document.title = localized(COPY.allProjects, lang) + " · 臻一";
  document.dispatchEvent(new CustomEvent("zhenyi-language-change", { detail: { lang } }));
}

function redirectLegacySection() {
  if (document.body.dataset.page !== "home") return false;
  const oldTargets = { "#enterprise": "#enterprise", "#lab": "#products", "#archive": "" };
  const hash = window.location.hash;
  if (!Object.hasOwn(oldTargets, hash)) return false;
  window.location.replace("projects.html" + oldTargets[hash]);
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  if (redirectLegacySection()) return;
  window.addEventListener("hashchange", redirectLegacySection);
  document.querySelectorAll("[data-lang-button]").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });
  setLanguage(currentLanguage());
});

window.ZHENYI_I18N = { currentLanguage, localized, setLanguage };
window.ZHENYI_PROJECT_GROUPS = PROJECT_GROUPS;
