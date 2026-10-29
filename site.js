const SITE_COPY = {
  featuredTitle: { zh: "近期重点项目", en: "Selected projects" },
  navEnterprise: { zh: "企业实践", en: "Enterprise" },
  navLab: { zh: "工具与游戏", en: "Tools & Games" },
  navMethod: { zh: "方法", en: "Method" },
  navArchive: { zh: "其他项目", en: "Other projects" },
  navContact: { zh: "联系", en: "Contact" },
  heroKicker: { zh: "臻一人工智能实验室", en: "ZHENYI AI PRODUCT LAB" },
  heroTitleA: { zh: "我是莫臻轩", en: "I’M ZHENXUAN MO" },
  heroTitleB: { zh: "做企业 AI 产品", en: "I BUILD AI PRODUCTS" },
  heroCopy: {
    zh: "我做了 11 年软件产品，现在主要做企业 AI 工作台和行业应用，也开发工具和游戏。",
    en: "I’ve spent 11 years in software product work. I now focus on enterprise AI workspaces and industry applications, and also build tools and games."
  },
  heroPrimary: { zh: "查看项目", en: "View projects" },
  heroSecondary: { zh: "联系我", en: "Get in touch" },
  heroNoteTitle: { zh: "当前身份", en: "CURRENT ROLE" },
  heroNoteText: {
    zh: "做企业 AI 产品，也开发独立工具和游戏。",
    en: "I work on enterprise AI and build independent tools and games."
  },
  proofExperience: { zh: "11 年产品经验", en: "11 years in product" },
  proofExperienceText: { zh: "从需求梳理、流程设计到跨团队交付。", en: "Requirements, workflow design, and delivery across teams." },
  proofRole: { zh: "B 端 AI 产品经理", en: "B2B AI PM" },
  proofRoleText: { zh: "先弄清业务，再决定 AI 能做哪一部分。", en: "Understand the work, then decide where AI can help." },
  proofLab: { zh: "独立产品开发", en: "Independent projects" },
  proofLabText: { zh: "工具、小程序和游戏，边做边验证。", en: "Tools, mini programs, and games, tested as they develop." },
  enterpriseTitle: { zh: "企业 AI 实践", en: "Enterprise AI Work" },
  enterpriseText: { zh: "我主要负责产品规划、业务规则和交互设计。具体做到哪一步，写在各项目里。", en: "My work focuses on product planning, business rules, and interaction design. Each case shows its current stage." },
  labTitle: { zh: "工具与游戏", en: "Tools & Games" },
  labText: { zh: "我自己做的工具、小程序和游戏。有些已经上线，有些还在测试。", en: "Tools, mini programs, and games I build. Some are live; others are still in testing." },
  methodTitle: { zh: "我怎么做产品", en: "How I work" },
  methodText: { zh: "先找到具体问题，做出一个能试的版本，再看结果。", en: "Find a specific problem, build something to try, and check the result." },
  archiveTitle: { zh: "其他项目", en: "Other projects" },
  contactTitle: { zh: "有项目想聊，联系我。", en: "Have a project in mind?" },
  contactText: { zh: "企业 AI 需求、产品合作，或者想试试小优工作台，都可以给我发邮件或加微信。", en: "Email me or add me on WeChat to discuss enterprise AI, work together on a product, or request a Xiaoyou test account." },
  contactButton: { zh: "发送邮件", en: "Send email" },
  method1Title: { zh: "先看工作怎么做", en: "Understand the work" },
  method1Text: { zh: "谁要用，现在怎么做，哪一步最费时间或最容易出错。", en: "Who uses it, how they work now, and where time is lost or mistakes happen." },
  method2Title: { zh: "分清 AI 该做什么", en: "Decide where AI helps" },
  method2Text: { zh: "需要精确计算的交给工具，需要判断的保留依据，重要决定由人确认。", en: "Use tools for exact calculations, retain evidence for judgments, and keep people responsible for important decisions." },
  method3Title: { zh: "把流程做出来", en: "Build the workflow" },
  method3Text: { zh: "用页面和原型走一遍任务，把异常和失败也放进去。", en: "Walk through a task in working pages and prototypes, including exceptions and failures." },
  method4Title: { zh: "核对实际结果", en: "Check the result" },
  method4Text: { zh: "看生成的文件、查引用来源，也看失败后能不能继续。", en: "Open the output files, check the sources, and see whether work can resume after a failure." }
};

const groups = {
  enterprise: ["workbench", "compliance", "assistant", "admin"],
  lab: ["beadgrid", "skilllens", "hairstyle", "parentvoice", "endless", "disorder"],
  archive: ["fatemirror", "video", "monitoring"]
};

function currentLanguage() {
  return localStorage.getItem("zhenyi-language") || "zh";
}

function localized(value, lang) {
  return typeof value === "string" ? value : value?.[lang] || value?.zh || "";
}

function applyCopy(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const value = SITE_COPY[node.dataset.copy];
    if (value) node.textContent = localized(value, lang);
  });
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const active = button.dataset.langButton === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function projectMedia(project, id, lang, loading = "lazy") {
  if (!project.image) {
    return `<div class="project-placeholder" aria-hidden="true"><span>${localized(project.type, lang)}</span></div>`;
  }
  return `
    <figure class="project-media">
      <img src="${project.image}" alt="${localized(project.imageAlt, lang)}" loading="${loading}" decoding="async" style="view-transition-name: project-${id}">
      <figcaption>${localized(project.mediaLabel, lang)}</figcaption>
    </figure>`;
}

function enterpriseCard(id, index, lang) {
  const project = window.PROJECTS[id];
  const name = localized(project.name, lang);
  return `
    <a class="case-card case-card-${index}" href="project.html?id=${id}" aria-label="${name}" style="--order:${index}">
      <div class="case-media-wrap">
        ${projectMedia(project, id, lang, index === 1 ? "eager" : "lazy")}
      </div>
      <div class="case-copy">
        <div class="case-meta">
          <span class="card-index">0${index}</span>
          <span>${localized(project.type, lang)}</span>
          <span class="project-status">${localized(project.status, lang)}</span>
        </div>
        <h3>${name}</h3>
        <p>${localized(project.short, lang)}</p>
        <span class="case-link"><i aria-hidden="true">↗</i>${lang === "zh" ? "查看完整案例" : "View case study"}</span>
      </div>
    </a>`;
}

function labCard(id, index, lang) {
  const project = window.PROJECTS[id];
  const name = localized(project.name, lang);
  return `
    <a class="lab-card lab-card-${index}" href="project.html?id=${id}" aria-label="${name}" style="--order:${index}">
      ${projectMedia(project, id, lang)}
      <div class="lab-card-copy">
        <div><span class="card-index">0${index}</span><span class="project-status">${localized(project.status, lang)}</span></div>
        <h3>${name}</h3>
        <p>${localized(project.short, lang)}</p>
      </div>
      <span class="lab-arrow" aria-hidden="true">↗</span>
    </a>`;
}

function renderFeaturedProjects(lang) {
  const root = document.querySelector("#featuredProjects");
  if (!root) return;
  root.innerHTML = ["workbench", "compliance", "beadgrid"].map((id) => {
    const project = window.PROJECTS[id];
    const t = (value) => localized(value, lang);
    const link = project.links[0];
    return `<article class="featured-project" data-featured-id="${id}">
      <a class="featured-image" href="project.html?id=${id}" aria-label="${t(project.name)}">
        <img src="${project.image}" alt="${t(project.imageAlt)}" width="320" height="216" loading="eager" decoding="async">
      </a>
      <div class="featured-copy">
        <div class="featured-meta"><span>${t(project.heroStatus)}</span></div>
        <h2><a href="project.html?id=${id}">${t(project.name)}</a></h2>
        <p>${t(project.heroShort)}</p>
        <div class="featured-links">
          <a href="project.html?id=${id}">${lang === "zh" ? "了解项目" : "View project"}<span aria-hidden="true">↗</span></a>
          <a href="${link.href}" target="_blank" rel="noopener noreferrer">${t(link.label)}<span aria-hidden="true">↗</span></a>
        </div>
        ${project.accessNote ? `<a class="featured-access" href="#contact">${t(project.accessNote)}<span aria-hidden="true"> →</span></a>` : ""}
      </div>
    </article>`;
  }).join("");
}

function renderProjects(lang) {
  renderFeaturedProjects(lang);
  const enterprise = document.querySelector("#enterpriseProjects");
  const lab = document.querySelector("#labProjects");
  const archive = document.querySelector("#archiveProjects");
  if (enterprise) {
    enterprise.innerHTML = groups.enterprise
      .map((id, i) => enterpriseCard(id, i + 1, lang))
      .join("");
  }
  if (lab) {
    lab.innerHTML = groups.lab
      .map((id, i) => labCard(id, i + 1, lang))
      .join("");
  }
  if (archive) {
    archive.innerHTML = groups.archive.map((id, i) => {
      const project = window.PROJECTS[id];
      return `
        <a class="archive-item" href="project.html?id=${id}">
          <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
          <span class="archive-type">${localized(project.type, lang)}</span>
          <strong>${localized(project.name, lang)}</strong>
          <p>${localized(project.short, lang)}</p>
          <i aria-hidden="true">↗</i>
        </a>`;
    }).join("");
  }
}

function setLanguage(lang) {
  localStorage.setItem("zhenyi-language", lang);
  applyCopy(lang);
  renderProjects(lang);
  document.dispatchEvent(new CustomEvent("zhenyi-language-change", { detail: { lang } }));
  window.ZHENYI_MOTION?.refresh();
}

const motionState = {
  observer: null,
  reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  finePointer: window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  frame: 0,
  scrollFrame: 0
};

function animateCount(node) {
  if (node.dataset.counted === "true") return;
  const match = node.textContent.trim().match(/^(\d+)(.*)$/);
  if (!match) return;
  node.dataset.counted = "true";
  const target = Number(match[1]);
  const suffix = match[2];
  const startedAt = performance.now();
  const duration = 720;
  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function observeMotionElements() {
  if (motionState.reduced || !motionState.observer) return;
  const selectors = [
    ".section-head",
    ".case-card",
    ".lab-card",
    ".method-step",
    ".archive-item",
    ".contact-grid",
    ".project-facts",
    ".project-visual",
    ".detail-block",
    ".module"
  ].join(",");

  document.querySelectorAll(selectors).forEach((node) => {
    if (node.dataset.motionBound === "true") return;
    node.dataset.motionBound = "true";
    node.classList.add("reveal-item");
    node.style.setProperty("--reveal-delay", `${Math.min(Number(node.style.getPropertyValue("--order")) || 0, 5) * 55}ms`);
    motionState.observer.observe(node);
  });
}

function bindDepthMotion() {
  if (!motionState.finePointer || motionState.reduced) return;
  document.querySelectorAll(".case-card, .lab-card, .hero-frame").forEach((card) => {
    if (card.dataset.pointerBound === "true") return;
    card.dataset.pointerBound = "true";
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -2.6;
      const ry = ((x / rect.width) - 0.5) * 3.2;
      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);
      card.style.setProperty("--tilt-x", `${rx.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${ry.toFixed(2)}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function bindMagneticButtons() {
  if (!motionState.finePointer || motionState.reduced) return;
  document.querySelectorAll(".button").forEach((button) => {
    if (button.dataset.magneticBound === "true") return;
    button.dataset.magneticBound = "true";
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--mag-x", `${(event.clientX - rect.left - rect.width / 2) * 0.13}px`);
      button.style.setProperty("--mag-y", `${(event.clientY - rect.top - rect.height / 2) * 0.18}px`);
    });
    button.addEventListener("pointerleave", () => {
      button.style.setProperty("--mag-x", "0px");
      button.style.setProperty("--mag-y", "0px");
    });
  });
}

function refreshMotion() {
  window.requestAnimationFrame(() => {
    observeMotionElements();
    bindDepthMotion();
    bindMagneticButtons();
  });
}

function updateScene() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
  const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.25);
  document.documentElement.style.setProperty("--scroll-progress", progress);
  document.documentElement.style.setProperty("--hero-scroll", heroProgress.toFixed(4));
}

function requestSceneUpdate() {
  cancelAnimationFrame(motionState.scrollFrame);
  motionState.scrollFrame = requestAnimationFrame(updateScene);
}

function initMotion() {
  if (motionState.reduced) {
    document.documentElement.classList.add("motion-reduced");
    return;
  }

  document.documentElement.classList.add("motion-ready");
  motionState.observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      if (entry.target.matches(".proof-row")) {
        entry.target.querySelectorAll(".proof strong").forEach(animateCount);
      }
      motionState.observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  const proofRow = document.querySelector(".proof-row");
  if (proofRow) motionState.observer.observe(proofRow);

  if (motionState.finePointer) {
    window.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(motionState.frame);
      motionState.frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
        document.documentElement.style.setProperty("--scene-x", `${(event.clientX / window.innerWidth - 0.5) * 12}px`);
        document.documentElement.style.setProperty("--scene-y", `${(event.clientY / window.innerHeight - 0.5) * 10}px`);
      });
    }, { passive: true });
  }

  refreshMotion();
  requestAnimationFrame(() => document.documentElement.classList.add("motion-loaded"));
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const update = () => setLanguage(button.dataset.langButton);
      if (!motionState.reduced && document.startViewTransition) document.startViewTransition(update);
      else update();
    });
  });
  setLanguage(currentLanguage());
  updateScene();
  window.addEventListener("scroll", requestSceneUpdate, { passive: true });
  window.addEventListener("resize", requestSceneUpdate, { passive: true });
  initMotion();
});

window.ZHENYI_I18N = { currentLanguage, localized, setLanguage };
window.ZHENYI_MOTION = { refresh: refreshMotion };
