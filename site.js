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
    zh: "我是莫臻轩，一名 B 端 AI 产品经理。过去 11 年一直在做软件产品，现在把更多时间放在真实业务里的 AI 产品，以及可以亲手体验的产品实验上。",
    en: "I’m Zhenxuan Mo, a B2B AI product manager with 11 years in software products. I now focus on AI products grounded in real business and product experiments people can actually try."
  },
  heroPrimary: { zh: "查看项目", en: "View projects" },
  heroSecondary: { zh: "联系合作", en: "Work with me" },
  heroNoteTitle: { zh: "当前身份", en: "CURRENT ROLE" },
  heroNoteText: {
    zh: "B 端 AI 产品经理，同时运营一间持续做真实产品的个人实验室。",
    en: "B2B AI product manager running an independent lab that continuously ships real products."
  },
  proofExperience: { zh: "11 年产品经验", en: "11 years in product" },
  proofExperienceText: { zh: "长期处理复杂业务、系统流程和跨团队交付。", en: "Complex business systems, workflows, and cross-team delivery." },
  proofRole: { zh: "B 端 AI 产品经理", en: "B2B AI PM" },
  proofRoleText: { zh: "把业务问题拆成可评审、可开发、可验收的产品。", en: "Turning business problems into reviewable, buildable, and testable products." },
  proofLab: { zh: "真实产品实验室", en: "Real product lab" },
  proofLabText: { zh: "每个精选项目都有 Demo、原型或可核对的交付物。", en: "Every selected project has a demo, prototype, or verifiable artifact." },
  enterpriseTitle: { zh: "企业 AI 实践", en: "Enterprise AI Work" },
  enterpriseText: { zh: "选取可公开的项目内容，重点放在问题怎么拆、产品怎么设计，以及最后交付了什么。", en: "These cases use material suitable for public viewing, with a focus on problem framing, product decisions, and concrete deliverables." },
  labTitle: { zh: "AI Lab 精选", en: "Selected Lab Work" },
  labText: { zh: "从本地工具、消费产品到两款游戏。项目都已经做出可运行版本。", en: "Local tools, consumer products, and two games. Every project has a working build." },
  methodTitle: { zh: "我的方法论", en: "My Methodology" },
  methodText: { zh: "我先判断问题、证据和交付边界，再决定是否需要 AI。", en: "I start with the problem, evidence, and delivery boundary, then decide whether AI belongs in the solution." },
  archiveTitle: { zh: "更多项目案例", en: "More Project Cases" },
  contactTitle: { zh: "如果你也在做一件难而具体的事，我们可以聊聊。", en: "If you’re building something difficult and concrete, let’s talk." },
  contactText: { zh: "可以聊企业 AI 项目、产品合作，也欢迎其他合作机会。", en: "I’m open to enterprise AI projects, product partnerships, and other forms of collaboration." },
  contactButton: { zh: "发送邮件", en: "Send email" },
  method1Title: { zh: "先把问题说清楚", en: "Frame the problem" },
  method1Text: { zh: "明确谁在什么场景里遇到问题，为什么现在的做法不够用。", en: "Define who has the problem, in what context, and why the current approach fails." },
  method2Title: { zh: "建立产品边界", en: "Set product boundaries" },
  method2Text: { zh: "分清 AI、规则、数据和人工分别负责什么。", en: "Decide what belongs to AI, rules, data, and human review." },
  method3Title: { zh: "尽快做出 Demo", en: "Build the demo early" },
  method3Text: { zh: "用真实页面和真实流程验证，不靠概念稿猜。", en: "Validate with real screens and flows instead of concept slides." },
  method4Title: { zh: "用证据验收", en: "Review with evidence" },
  method4Text: { zh: "检查结果、异常和失败路径，再决定是否继续投入。", en: "Review outcomes, exceptions, and failure paths before investing further." }
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

function projectCard(id, index, lang, featured = false) {
  const project = window.PROJECTS[id];
  const name = localized(project.name, lang);
  return `
    <a class="project-card${featured ? " featured" : ""}" href="project.html?id=${id}" aria-label="${name}">
      <div class="card-top">
        <span class="card-index">${String(index).padStart(2, "0")}</span>
        <span class="project-status">${localized(project.status, lang)}</span>
      </div>
      ${project.image ? `
        <figure class="project-media">
          <img src="${project.image}" alt="${localized(project.imageAlt, lang)}" loading="lazy" decoding="async">
          <figcaption>${localized(project.mediaLabel, lang)}</figcaption>
        </figure>` : ""}
      <h3>${name}</h3>
      <p class="card-copy">${localized(project.short, lang)}</p>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>`;
}

function renderProjects(lang) {
  const enterprise = document.querySelector("#enterpriseProjects");
  const lab = document.querySelector("#labProjects");
  const archive = document.querySelector("#archiveProjects");
  if (enterprise) {
    enterprise.innerHTML = groups.enterprise
      .map((id, i) => projectCard(id, i + 1, lang, i === 0))
      .join("");
  }
  if (lab) {
    lab.innerHTML = groups.lab
      .map((id, i) => projectCard(id, i + 1, lang, i === 3))
      .join("");
  }
  if (archive) {
    archive.innerHTML = groups.archive.map((id, i) => {
      const project = window.PROJECTS[id];
      return `
        <a class="archive-item" href="project.html?id=${id}">
          <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
          <strong>${localized(project.name, lang)}</strong>
          <p>${localized(project.short, lang)}</p>
          <span aria-hidden="true">↗</span>
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
  frame: 0
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
    ".project-card",
    ".method-step",
    ".archive-item",
    ".contact-grid",
    ".project-facts",
    ".project-visual",
    ".detail-block",
    ".module"
  ].join(",");

  document.querySelectorAll(selectors).forEach((node, index) => {
    if (node.dataset.motionBound === "true") return;
    node.dataset.motionBound = "true";
    node.classList.add("reveal-item");
    node.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 54}ms`);
    motionState.observer.observe(node);
  });
}

function bindCardMotion() {
  if (!motionState.finePointer || motionState.reduced) return;
  document.querySelectorAll(".project-card").forEach((card) => {
    if (card.dataset.pointerBound === "true") return;
    card.dataset.pointerBound = "true";
    card.addEventListener("pointermove", (event) => {
      card.classList.add("is-interacting");
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -5;
      const ry = ((x / rect.width) - 0.5) * 6;
      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);
      card.style.setProperty("--tilt-x", `${rx.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${ry.toFixed(2)}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-interacting");
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

function bindPageTransitions() {
  document.querySelectorAll('a[href]').forEach((link) => {
    if (link.dataset.transitionBound === "true") return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) return;
    link.dataset.transitionBound = "true";
    link.addEventListener("click", (event) => {
      if (motionState.reduced || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      document.documentElement.classList.add("page-leaving");
      sessionStorage.setItem("zhenyi-page-transition", "1");
      window.setTimeout(() => {
        window.location.href = link.href;
      }, 320);
    });
  });
}

function refreshMotion() {
  window.requestAnimationFrame(() => {
    observeMotionElements();
    bindCardMotion();
    bindMagneticButtons();
    bindPageTransitions();
  });
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

  const transition = document.createElement("div");
  transition.className = "page-transition";
  transition.setAttribute("aria-hidden", "true");
  transition.innerHTML = "<span></span><span></span><span></span>";
  document.body.appendChild(transition);
  if (sessionStorage.getItem("zhenyi-page-transition") === "1") {
    sessionStorage.removeItem("zhenyi-page-transition");
    document.documentElement.classList.add("page-entering");
    window.setTimeout(() => document.documentElement.classList.remove("page-entering"), 620);
  }

  if (motionState.finePointer) {
    const signal = document.createElement("div");
    signal.className = "signal-cursor";
    signal.setAttribute("aria-hidden", "true");
    document.body.appendChild(signal);

    window.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(motionState.frame);
      motionState.frame = requestAnimationFrame(() => {
        signal.style.setProperty("--cursor-x", `${event.clientX}px`);
        signal.style.setProperty("--cursor-y", `${event.clientY}px`);
        document.documentElement.style.setProperty("--scene-x", `${(event.clientX / window.innerWidth - 0.5) * 18}px`);
        document.documentElement.style.setProperty("--scene-y", `${(event.clientY / window.innerHeight - 0.5) * 14}px`);
      });
    }, { passive: true });
  }

  refreshMotion();
  requestAnimationFrame(() => document.documentElement.classList.add("motion-loaded"));
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });
  setLanguage(currentLanguage());

  const updateScrollProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    document.documentElement.style.setProperty("--scroll-progress", progress);
  };
  updateScrollProgress();
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  initMotion();
});

window.ZHENYI_I18N = { currentLanguage, localized, setLanguage };
window.ZHENYI_MOTION = { refresh: refreshMotion };
