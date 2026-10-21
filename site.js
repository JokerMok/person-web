const SITE_COPY = {
  navEnterprise: { zh: "企业实践", en: "Enterprise" },
  navLab: { zh: "产品实验", en: "Lab" },
  navMethod: { zh: "方法", en: "Method" },
  navArchive: { zh: "档案", en: "Archive" },
  navContact: { zh: "联系", en: "Contact" },
  heroKicker: { zh: "臻一人工智能实验室", en: "ZHENYI AI PRODUCT LAB" },
  heroTitleA: { zh: "持续做真实产品的", en: "BUILDING REAL" },
  heroTitleB: { zh: "AI 实验室主理人", en: "AI PRODUCTS" },
  heroCopy: {
    zh: "我是莫臻轩，一名 B 端 AI 产品经理。做了 11 年软件产品，现在更愿意把时间花在真实业务里：把一个说不清的问题，做成团队能用的 AI 产品。",
    en: "I’m Zhenxuan Mo, a B2B AI product manager with 11 years in software products. I now focus on AI products grounded in real business and product experiments people can actually try."
  },
  heroPrimary: { zh: "查看项目", en: "View projects" },
  heroSecondary: { zh: "联系合作", en: "Work with me" },
  heroNoteTitle: { zh: "当前身份", en: "CURRENT ROLE" },
  heroNoteText: {
    zh: "我现在做两件事：在业务里做 AI 产品，也自己把想法做到能运行。",
    en: "B2B AI product manager running an independent lab that continuously ships real products."
  },
  proofExperience: { zh: "11 年产品经验", en: "11 years in product" },
  proofExperienceText: { zh: "长期处理复杂业务、系统流程和跨团队交付。", en: "Complex business systems, workflows, and cross-team delivery." },
  proofRole: { zh: "B 端 AI 产品经理", en: "B2B AI PM" },
  proofRoleText: { zh: "把业务问题拆成可评审、可开发、可验收的产品。", en: "Turning business problems into reviewable, buildable, and testable products." },
  proofLab: { zh: "真实产品实验室", en: "Real product lab" },
  proofLabText: { zh: "每个精选项目都有 Demo、原型或可核对的交付物。", en: "Every selected project has a demo, prototype, or verifiable artifact." },
  enterpriseTitle: { zh: "企业 AI 实践", en: "Enterprise AI Work" },
  enterpriseText: { zh: "这里放的是我真正参与过的企业项目：先把问题捋清楚，再把产品做出来，最后留下能评审、能验收的东西。", en: "These are enterprise projects I actually worked on: frame the problem, build the product, and leave behind something teams can review and accept." },
  labTitle: { zh: "AI Lab 精选", en: "Selected Lab Work" },
  labText: { zh: "有些来自工作，有些只是我想验证的想法。共同点是：我会把它们做到能运行。", en: "Some started at work, some started as questions I wanted to test. The common thread is that I build them into something runnable." },
  methodTitle: { zh: "我的方法论", en: "My Methodology" },
  methodText: { zh: "我不先问“要不要上 AI”，先问问题卡在哪、手里有什么证据、谁来接住结果。", en: "I do not start with “should we use AI?” I start with where the work gets stuck, what evidence exists, and who owns the outcome." },
  archiveTitle: { zh: "更多项目案例", en: "More Project Cases" },
  contactTitle: { zh: "如果你手上也有一个难而具体的问题，来聊聊。", en: "If you have a difficult, concrete problem in front of you, let’s talk." },
  contactText: { zh: "可以聊企业 AI 项目、产品合作，或者一个还没想清楚、但值得一起拆开的想法。", en: "I’m open to enterprise AI projects, product partnerships, or an idea that is not fully formed yet but worth unpacking together." },
  contactButton: { zh: "发送邮件", en: "Send email" },
  method1Title: { zh: "先把问题讲明白", en: "Frame the problem" },
  method1Text: { zh: "谁在什么时候卡住了？现在的办法为什么不够用？", en: "Who gets stuck, when does it happen, and why is the current way not enough?" },
  method2Title: { zh: "把边界画出来", en: "Set the boundaries" },
  method2Text: { zh: "哪些交给 AI，哪些交给规则、数据和人，先分开。", en: "Separate what belongs to AI, rules, data, and people." },
  method3Title: { zh: "先做一个能用的版本", en: "Build a usable version" },
  method3Text: { zh: "真实页面、真实流程，跑一遍就知道哪里不对。", en: "Run a real page through a real flow and the weak spots show up." },
  method4Title: { zh: "拿证据做决定", en: "Decide with evidence" },
  method4Text: { zh: "结果、异常、失败路径都看过，再决定要不要继续投。", en: "Look at outcomes, exceptions, and failure paths before investing more." }
};

const groups = {
  enterprise: ["assistant", "compliance", "admin"],
  lab: ["skilllens", "hairstyle", "parentvoice", "endless", "disorder"],
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

function renderProjects(lang) {
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
