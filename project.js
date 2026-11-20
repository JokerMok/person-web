const carousel = { index: 0 };

function renderCarousel(project, lang, t) {
  const section = document.querySelector("#projectVisualSection");
  const slides = project.image
    ? [{ image: project.image, imageAlt: project.imageAlt, caption: project.mediaLabel }, ...(project.gallery || [])]
    : project.gallery || [];
  section.hidden = !slides.length;
  if (!slides.length) return;

  const root = document.querySelector("#projectCarousel");
  const track = document.querySelector("#projectCarouselTrack");
  const caption = document.querySelector("#projectCarouselCaption");
  const count = document.querySelector("#carouselCount");
  const previous = document.querySelector("#carouselPrev");
  const next = document.querySelector("#carouselNext");
  const expand = document.querySelector("#carouselExpand");
  const thumbnails = document.querySelector("#carouselThumbnails");
  const dialog = document.querySelector("#projectImageDialog");
  const dialogTitle = document.querySelector("#imageDialogTitle");
  const dialogImage = document.querySelector("#imageDialogImage");
  const dialogCount = document.querySelector("#imageDialogCount");
  const dialogPrevious = document.querySelector("#imageDialogPrev");
  const dialogNext = document.querySelector("#imageDialogNext");
  const close = document.querySelector("#imageDialogClose");
  const single = slides.length === 1;
  const zh = lang === "zh";

  root.setAttribute("aria-label", t(project.name) + (zh ? " 项目截图" : " project screenshots"));
  root.classList.toggle("is-single", single);
  thumbnails.hidden = single;
  thumbnails.setAttribute("aria-label", zh ? "截图缩略图" : "Screenshot thumbnails");
  document.querySelector("#imageDialogControls").hidden = single;
  close.setAttribute("aria-label", zh ? "关闭大图" : "Close full-size image");
  for (const button of [previous, dialogPrevious]) button.setAttribute("aria-label", zh ? "上一张" : "Previous screenshot");
  for (const button of [next, dialogNext]) button.setAttribute("aria-label", zh ? "下一张" : "Next screenshot");

  track.innerHTML = slides.map((slide, index) => {
    const mode = slide.mode === "crop" ? " carousel-slide--crop" : "";
    const position = slide.position ? ` style="--object-position:${slide.position}"` : "";
    return `<figure class="carousel-slide${mode}">
      <img src="${slide.image}" alt="${t(slide.imageAlt)}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async"${position}>
    </figure>`;
  }).join("");

  thumbnails.innerHTML = single ? "" : slides.map(slide =>
    `<button type="button"><img src="${slide.image}" alt="" loading="lazy" decoding="async"></button>`
  ).join("");
  const previewButtons = Array.from(thumbnails.children);
  const describe = slide => t(slide.caption || project.mediaLabel || slide.imageAlt) || t(project.name);
  previewButtons.forEach((button, index) => {
    button.setAttribute("aria-label", describe(slides[index]));
    button.onclick = () => selectSlide(index);
  });

  function updateDialog(slide) {
    dialogTitle.textContent = describe(slide);
    dialogCount.textContent = count.textContent;
    dialogImage.alt = t(slide.imageAlt);
    dialogImage.src = slide.image;
  }

  function selectSlide(index = carousel.index) {
    carousel.index = Math.max(0, Math.min(index, slides.length - 1));
    const slide = slides[carousel.index];
    const active = document.activeElement;
    track.style.setProperty("--carousel-index", carousel.index);
    caption.textContent = describe(slide);
    count.textContent = `${carousel.index + 1} / ${slides.length}`;
    previous.disabled = dialogPrevious.disabled = carousel.index === 0;
    next.disabled = dialogNext.disabled = carousel.index === slides.length - 1;
    Array.from(track.children).forEach((figure, index) => {
      figure.setAttribute("aria-hidden", String(index !== carousel.index));
    });
    track.children[carousel.index].querySelector("img").loading = "eager";
    previewButtons.forEach((button, index) => button.setAttribute("aria-pressed", String(index === carousel.index)));

    const controls = dialog.open ? [dialogPrevious, dialogNext] : [previous, next];
    if (controls.includes(active) && active.disabled) controls.find(button => !button.disabled)?.focus();

    if (dialog.open) updateDialog(slide);
  }

  previous.onclick = dialogPrevious.onclick = () => selectSlide(carousel.index - 1);
  next.onclick = dialogNext.onclick = () => selectSlide(carousel.index + 1);
  expand.onclick = () => {
    updateDialog(slides[carousel.index]);
    dialog.showModal();
  };
  close.onclick = () => dialog.close();
  dialog.onclose = () => expand.focus({ preventScroll: true });
  dialog.onclick = event => {
    if (event.target === dialog) dialog.close();
  };
  root.onkeydown = dialog.onkeydown = event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(carousel.index + (event.key === "ArrowLeft" ? -1 : 1));
    }
  };
  selectSlide();
}

function renderProject(event) {
  const { lang } = event.detail;
  const requested = new URLSearchParams(window.location.search).get("id");
  const id = Object.hasOwn(window.PROJECTS, requested) ? requested : "workbench";
  const project = window.PROJECTS[id];
  const t = value => window.ZHENYI_I18N.localized(value, lang);
  const $ = selector => document.querySelector(selector);
  const zh = lang === "zh";

  document.body.dataset.projectId = id;
  document.title = t(project.name) + " · 臻一";
  $('meta[name="description"]').content = t(project.summary);
  $("#projectType").textContent = t(project.type);
  $("#projectName").textContent = t(project.name);
  $("#projectSummary").textContent = t(project.summary);
  $("#projectChallenge").textContent = t(project.challenge);
  $("#projectApproach").textContent = t(project.approach);

  const actions = $("#projectActions");
  actions.hidden = !project.links?.length && !project.accessNote;
  actions.innerHTML = (project.links || []).map(link =>
    `<a class="button primary" href="${link.href}" target="_blank" rel="noopener noreferrer">${t(link.label)}<span aria-hidden="true">↗</span></a>`
  ).join("") + (project.accessNote
    ? `<a class="project-access-note" href="index.html#contact">${t(project.accessNote)}</a>`
    : "");

  $("#projectCurrent").hidden = !project.currentText;
  $("#projectCurrentTitle").textContent = t(project.currentTitle);
  $("#projectCurrentText").textContent = t(project.currentText);

  $("#projectLaunch").hidden = !project.launch?.qr;
  if (project.launch?.qr) {
    $("#projectLaunchQr").src = project.launch.qr;
    $("#projectLaunchQr").alt = t(project.launch.alt);
    $("#projectLaunchLabel").textContent = t(project.launch.label);
    $("#projectLaunchText").textContent = t(project.launch.text);
  }

  const facts = project.facts?.length ? project.facts : [{
    label: { zh: "状态", en: "Status" },
    value: project.status
  }];
  $("#projectFacts").innerHTML = facts.map(fact =>
    `<div class="fact"><dt>${t(fact.label)}</dt><dd>${t(fact.value)}</dd></div>`
  ).join("");
  $("#projectEvidence").innerHTML = (project.evidence || []).map(item => `<li>${t(item)}</li>`).join("");

  $("#moduleSection").hidden = !project.modules?.length;
  if (project.modules?.length) {
    $("#moduleTitle").textContent = t(project.modulesTitle) || (zh ? "产品线包含什么" : "What the suite includes");
    $("#moduleIntro").textContent = t(project.modulesIntro);
    const list = $("#moduleList");
    const open = list.childElementCount
      ? new Set(Array.from(list.querySelectorAll("details[open]"), item => item.dataset.module))
      : new Set(["0"]);
    list.innerHTML = project.modules.map((module, index) =>
      `<details class="module" data-module="${index}"${open.has(String(index)) ? " open" : ""}>
        <summary>${t(module.name)}</summary>
        <p>${t(module.text)}</p>
      </details>`
    ).join("");
  }

  const labels = {
    challenge: t(project.challengeTitle) || (zh ? "要解决的问题" : "The problem"),
    approach: t(project.approachTitle) || (zh ? "怎么做" : "The approach"),
    evidence: t(project.evidenceTitle) || (zh ? "已有成果" : "Evidence"),
    expand: zh ? "查看大图" : "View full size",
    back: zh ? "返回项目列表" : "Back to projects",
    contact: zh ? "联系合作" : "Get in touch"
  };
  document.querySelectorAll("[data-project-label]").forEach(node => {
    node.textContent = labels[node.dataset.projectLabel];
  });

  renderCarousel(project, lang, t);

  const groups = window.ZHENYI_PROJECT_GROUPS;
  const group = Object.keys(groups).find(key => groups[key].includes(id));
  $("[data-project-label='back']").href = "projects.html" + (group ? "#" + group : "");
  const ids = Object.values(groups).flat();
  const position = ids.indexOf(id);
  const nextId = position >= 0 ? ids[(position + 1) % ids.length] : null;
  $("#nextProject").href = nextId ? `project.html?id=${nextId}` : "projects.html";
  $("#nextProjectName").textContent = nextId ? t(window.PROJECTS[nextId].name) : (zh ? "全部项目" : "All projects");
  $("#nextProjectLabel").hidden = !nextId;
  $("#nextProjectLabel").textContent = zh ? "下一个项目" : "Next project";
}

document.addEventListener("zhenyi-language-change", renderProject);
