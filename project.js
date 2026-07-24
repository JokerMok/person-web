function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "assistant";
  const project = window.PROJECTS[id] || window.PROJECTS.assistant;
  const lang = window.ZHENYI_I18N.currentLanguage();
  const t = (value) => window.ZHENYI_I18N.localized(value, lang);

  document.title = `${t(project.name)} | Zhenyi`;
  document.querySelector("#projectType").textContent = t(project.type);
  document.querySelector("#projectName").textContent = t(project.name);
  document.querySelector("#projectSummary").textContent = t(project.summary);
  document.querySelector("#projectChallenge").textContent = t(project.challenge);
  document.querySelector("#projectApproach").textContent = t(project.approach);

  const visualSection = document.querySelector("#projectVisualSection");
  const projectImage = document.querySelector("#projectImage");
  if (project.image) {
    visualSection.hidden = false;
    projectImage.src = project.image;
    projectImage.alt = t(project.imageAlt);
    document.querySelector("#projectImageLabel").textContent = t(project.mediaLabel);
  } else {
    visualSection.hidden = true;
    projectImage.removeAttribute("src");
    projectImage.alt = "";
  }

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

  window.ZHENYI_MOTION?.refresh();
}

document.addEventListener("DOMContentLoaded", renderProject);
document.addEventListener("zhenyi-language-change", renderProject);
