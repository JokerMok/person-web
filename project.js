const carouselState = { index: 0, total: 0 };

function renderCarousel(project, lang, t) {
  const section = document.querySelector("#projectVisualSection");
  const root = document.querySelector("#projectCarousel");
  const track = document.querySelector("#projectCarouselTrack");
  const caption = document.querySelector("#projectCarouselCaption");
  const count = document.querySelector("#carouselCount");
  const previous = document.querySelector("#carouselPrev");
  const next = document.querySelector("#carouselNext");
  const slides = project.image
    ? [{ image: project.image, imageAlt: project.imageAlt, caption: project.mediaLabel }, ...(project.gallery || [])]
    : [{ placeholder: true, caption: { zh: "暂无公开截图", en: "No public screenshot yet" } }];

  section.hidden = false;
  carouselState.total = slides.length;
  carouselState.index = Math.min(carouselState.index, slides.length - 1);
  root.setAttribute("aria-label", `${t(project.name)} ${lang === "zh" ? "项目截图轮播" : "project screenshot carousel"}`);
  track.innerHTML = slides.map((slide, index) => {
    if (slide.placeholder) {
      return `<div class="carousel-slide"><div class="carousel-placeholder"><strong>${t(slide.caption)}</strong><span>${lang === "zh" ? "后续补充真实项目画面" : "Real project screens can be added later"}</span></div></div>`;
    }
    const mode = slide.mode === "crop" ? " carousel-slide--crop" : "";
    const position = slide.position ? ` style="--object-position:${slide.position}"` : "";
    return `<figure class="carousel-slide${mode}"><img src="${slide.image}" alt="${t(slide.imageAlt)}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async"${position}></figure>`;
  }).join("");

  const update = () => {
    track.style.setProperty("--carousel-index", carouselState.index);
    const active = slides[carouselState.index];
    caption.textContent = t(active.caption || project.mediaLabel || project.type);
    count.textContent = `${String(carouselState.index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    previous.disabled = slides.length < 2 || carouselState.index === 0;
    next.disabled = slides.length < 2 || carouselState.index === slides.length - 1;
    previous.setAttribute("aria-label", lang === "zh" ? "上一张" : "Previous screenshot");
    next.setAttribute("aria-label", lang === "zh" ? "下一张" : "Next screenshot");
    root.classList.toggle("is-single", slides.length < 2);
  };

  previous.onclick = () => {
    carouselState.index = Math.max(0, carouselState.index - 1);
    update();
  };
  next.onclick = () => {
    carouselState.index = Math.min(slides.length - 1, carouselState.index + 1);
    update();
  };
  root.onkeydown = (event) => {
    if (event.key === "ArrowLeft") previous.click();
    if (event.key === "ArrowRight") next.click();
  };
  update();
}

function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "assistant";
  const project = window.PROJECTS[id] || window.PROJECTS.assistant;
  const lang = window.ZHENYI_I18N.currentLanguage();
  const t = (value) => window.ZHENYI_I18N.localized(value, lang);

  document.body.dataset.projectId = id;
  document.title = `${t(project.name)} | Zhenyi`;
  document.querySelector("#projectType").textContent = t(project.type);
  document.querySelector("#projectName").textContent = t(project.name);
  document.querySelector("#projectSummary").textContent = t(project.summary);
  document.querySelector("#projectChallenge").textContent = t(project.challenge);
  document.querySelector("#projectApproach").textContent = t(project.approach);

  const launch = document.querySelector("#projectLaunch");
  if (project.launch?.qr) {
    launch.hidden = false;
    const launchQr = document.querySelector("#projectLaunchQr");
    launchQr.src = project.launch.qr;
    launchQr.alt = t(project.launch.alt);
    document.querySelector("#projectLaunchLabel").textContent = t(project.launch.label);
    document.querySelector("#projectLaunchText").textContent = t(project.launch.text);
  } else {
    launch.hidden = true;
  }

  const projectIds = Object.keys(window.PROJECTS);
  const currentIndex = Math.max(projectIds.indexOf(id), 0);
  document.querySelector("#projectNumber").textContent = `CASE / ${String(currentIndex + 1).padStart(2, "0")}`;
  document.querySelector("#storyRailText").textContent = lang === "zh"
    ? "问题、产品决策与交付证据。"
    : "Problem, product decisions, and delivery evidence.";

  renderCarousel(project, lang, t);

  const facts = document.querySelector("#projectFacts");
  facts.innerHTML = project.facts.length
    ? project.facts.map((fact) => `<div class="fact"><span>${t(fact.label)}</span><strong>${t(fact.value)}</strong></div>`).join("")
    : `<div class="fact"><span>${lang === "zh" ? "状态" : "Status"}</span><strong>${t(project.status)}</strong></div>`;

  document.querySelector("#projectEvidence").innerHTML = project.evidence
    .map((item) => `<li>${t(item)}</li>`)
    .join("");

  const moduleSection = document.querySelector("#moduleSection");
  if (project.modules?.length) {
    moduleSection.hidden = false;
    document.querySelector("#moduleTitle").textContent = lang === "zh" ? "产品线包含什么" : "What the suite includes";
    document.querySelector("#moduleIndex").textContent = "04 / SUITE";
    document.querySelector("#moduleIntro").textContent = lang === "zh"
      ? "这些能力属于同一条企业 AI 助手产品线，不作为互不相关的项目重复展示。"
      : "These capabilities belong to one enterprise AI product suite rather than separate, unrelated projects.";
    document.querySelector("#moduleList").innerHTML = project.modules
      .map((module, index) => `
        <article class="module">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${t(module.name)}</strong>
          <p>${t(module.text)}</p>
        </article>`)
      .join("");
  } else {
    moduleSection.hidden = true;
  }

  const labels = {
    challenge: lang === "zh" ? "要解决的问题" : "The problem",
    approach: lang === "zh" ? "怎么做" : "The approach",
    evidence: lang === "zh" ? "已有产物" : "Evidence",
    back: lang === "zh" ? "返回项目列表" : "Back to projects",
    contact: lang === "zh" ? "联系合作" : "Get in touch"
  };
  Object.entries(labels).forEach(([key, value]) => {
    const target = document.querySelector(`[data-project-label="${key}"]`);
    if (target) target.textContent = value;
  });

  const nextId = projectIds[(currentIndex + 1) % projectIds.length];
  const nextProject = window.PROJECTS[nextId];
  const nextLink = document.querySelector("#nextProject");
  nextLink.href = `project.html?id=${nextId}`;
  document.querySelector("#nextProjectLabel").textContent = lang === "zh" ? "下一个项目" : "Next case";
  document.querySelector("#nextProjectName").textContent = t(nextProject.name);

  window.ZHENYI_MOTION?.refresh();
}

document.addEventListener("DOMContentLoaded", renderProject);
document.addEventListener("zhenyi-language-change", renderProject);
