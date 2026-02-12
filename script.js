const { PROFILE, featuredProjects, moreProjects, EXPERIENCE, EDUCATION, COURSES } =
  window.PORTFOLIO_DATA || {};

function $(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHref(id, href) {
  const el = $(id);
  if (el) el.href = href;
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function typeLabel(t) {
  return t === "course" ? "Curso" : "Proyecto";
}

function certTypeLabel(t) {
  const v = String(t || "").toLowerCase().trim();
  if (v === "diploma") return "Diploma";
  if (v === "certificado" || v === "certificate") return "Certificado";
  if (v === "curso" || v === "course") return "Curso";
  if (v === "taller" || v === "workshop") return "Taller";
  return "Curso";
}

function buildTechIcons(techList) {
  return (techList || [])
    .map((t) => `<i class="${escapeHtml(t.icon)}" title="${escapeHtml(t.name)}"></i>`)
    .join("");
}

function buildTechPills(list) {
  return (list || []).map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join("");
}

setText("year", String(new Date().getFullYear()));

const aboutBio = $("aboutBio");
if (aboutBio && PROFILE?.bio) aboutBio.textContent = PROFILE.bio;

const aboutChips = $("aboutChips");
if (aboutChips) {
  aboutChips.innerHTML = (PROFILE?.chips || [])
    .map((c) => `<span class="pill">${escapeHtml(c)}</span>`)
    .join("");
}

function renderSkillsIcons(profile) {
  const wrap = $("skillsIcons");
  if (!wrap) return;

  const items = profile?.skillsIcons || [];
  wrap.innerHTML = items
    .map(
      (s) => `
      <span class="skill-pill" title="${escapeHtml(s.label)}">
        <i class="${escapeHtml(s.icon)}" aria-hidden="true"></i>
        <span>${escapeHtml(s.label)}</span>
      </span>
    `
    )
    .join("");
}
renderSkillsIcons(PROFILE);

const waLink = `https://wa.me/${PROFILE?.whatsappPhone || ""}?text=${encodeURIComponent(
  "Hola Paola, vi tu portafolio 🙂"
)}`;

const mailLink = `mailto:${PROFILE?.email || ""}?subject=${encodeURIComponent(
  "Contacto desde tu portafolio"
)}`;

setHref("btnWhats", waLink);
setHref("btnMail", mailLink);
setHref("btnLinked", PROFILE?.linkedin || "#");
setHref("cardWhats", waLink);
setHref("cardMail", mailLink);
setHref("cardLinked", PROFILE?.linkedin || "#");

const menuBtn = $("menuBtn");
const navLinks = $("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const featuredGrid = $("featuredGrid");
const featuredSearch = $("featuredSearch");
const moreGrid = $("moreGrid");
const moreSearch = $("moreSearch");
const moreFilter = $("moreFilter");

function projectCardHTML(p) {
  const hasMedia = !!p.media;
  const imgSrc =
    p.media?.type === "image" && p.media?.src ? p.media.src : "asset/img/placeholder.jpg";

  return `
    <article class="card" data-id="${escapeHtml(p.id)}" tabindex="0" role="button"
      aria-label="Abrir ${escapeHtml(p.title)}">
      <div class="card-media" style="${hasMedia ? "" : "display:none;"}">
        <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(p.media?.alt || p.title)}" loading="lazy" />
      </div>
      <div class="card-body">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start;">
          <h3 class="card-title">${escapeHtml(p.title)}</h3>
          <span class="badge">${typeLabel(p.type)}</span>
        </div>
        <p class="card-sub">${escapeHtml(p.subtitle || "")}</p>
        <div class="tech">${buildTechIcons(p.tech)}</div>
      </div>
    </article>
  `;
}

const allProjects = [...(featuredProjects || []), ...(moreProjects || [])];

function renderGrid(gridEl, data, query, filter) {
  if (!gridEl) return;

  const q = (query || "").trim().toLowerCase();
  const f = filter || "all";

  const filtered = (data || []).filter((p) => {
    const matchFilter = f === "all" ? true : p.type === f;
    const blob = `${p.title} ${p.subtitle || ""} ${p.description || ""} ${p.role || ""}`.toLowerCase();
    const matchSearch = q ? blob.includes(q) : true;
    return matchFilter && matchSearch;
  });

  gridEl.innerHTML = filtered.map(projectCardHTML).join("");

  gridEl.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });
}

if (featuredSearch) {
  featuredSearch.addEventListener("input", () => {
    renderGrid(featuredGrid, featuredProjects, featuredSearch.value, "all");
  });
}
renderGrid(featuredGrid, featuredProjects, "", "all");

function rerenderMore() {
  renderGrid(moreGrid, moreProjects, moreSearch?.value || "", moreFilter?.value || "all");
}
if (moreSearch) moreSearch.addEventListener("input", rerenderMore);
if (moreFilter) moreFilter.addEventListener("change", rerenderMore);
rerenderMore();

const experienceList = $("experienceList");
if (experienceList) {
  experienceList.innerHTML = (EXPERIENCE || [])
    .map(
      (exp) => `
      <article class="panel">
        <h3 style="margin:0 0 6px;">${escapeHtml(exp.role)}</h3>
        <p class="muted" style="margin:0 0 10px;">${escapeHtml(exp.company)} • ${escapeHtml(exp.period)}</p>

        <ul class="highlights">
          ${(exp.description || []).map((d) => `<li>${escapeHtml(d)}</li>`).join("")}
        </ul>

        ${exp.tech?.length ? `<div class="chips">${buildTechPills(exp.tech)}</div>` : ""}
      </article>
    `
    )
    .join("");
}

const educationList = $("educationList");
if (educationList) {
  educationList.innerHTML = (EDUCATION || [])
    .map(
      (e) => `
      <div class="panel">
        <h3 style="margin:0 0 6px;">${escapeHtml(e.title)}</h3>
        <p class="muted" style="margin:0;">${escapeHtml(e.period)} • ${escapeHtml(e.institution)}</p>
        ${e.note ? `<p class="muted" style="margin:6px 0 0;">${escapeHtml(e.note)}</p>` : ""}
        <div class="chips" style="margin-top:10px;">
          <span class="badge">Educación</span>
        </div>
      </div>
    `
    )
    .join("");
}

const certsList = $("certsList");
if (certsList) {
  certsList.innerHTML = (COURSES || [])
    .map(
      (c) => `
      <div class="panel">
        <h3 style="margin:0 0 6px;">${escapeHtml(c.title)}</h3>
        <p class="muted" style="margin:0;">${escapeHtml(c.year)} • ${escapeHtml(c.institution)}</p>
        <div class="chips" style="margin-top:10px;">
          <span class="badge">${escapeHtml(certTypeLabel(c.type))}</span>
        </div>
      </div>
    `
    )
    .join("");
}

const modalOverlay = $("modalOverlay");
const modalCloseBtn = $("modalCloseBtn");
const modalMedia = $("modalMedia");
const modalTitle = $("modalTitle");
const modalClient = $("modalClient");
const modalDesc = $("modalDesc");
const modalRole = $("modalRole");
const modalTech = $("modalTech");
const modalHighlights = $("modalHighlights");
const modalActions = $("modalActions");
const modalNotice = $("modalNotice");

function openModal(projectId) {
  const p = allProjects.find((x) => x.id === projectId);
  if (!p || !modalOverlay) return;

  if (modalMedia) {
    modalMedia.innerHTML = "";
    if (p.media?.type === "video") {
      const video = document.createElement("video");
      video.src = p.media.src;
      video.controls = true;
      video.playsInline = true;
      modalMedia.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = p.media?.src || "asset/img/placeholder.jpg";
      img.alt = p.media?.alt || p.title;
      img.loading = "lazy";
      modalMedia.appendChild(img);
    }
  }

  if (modalTitle) modalTitle.textContent = p.title;

  if (modalClient) {
    modalClient.textContent = p.subtitle || "";
    modalClient.style.display = p.subtitle ? "inline-flex" : "none";
  }

  if (modalDesc) modalDesc.textContent = p.description || "";
  if (modalRole) modalRole.textContent = p.role || "";
  if (modalTech) modalTech.innerHTML = buildTechIcons(p.tech);

  if (modalHighlights) {
    modalHighlights.innerHTML = (p.highlights || []).map((h) => `<li>${escapeHtml(h)}</li>`).join("");
  }

  if (modalNotice) {
    if (p.visibility === "private") {
      modalNotice.hidden = false;
      modalNotice.textContent =
        "Este proyecto es privado. Para proteger información, no se muestra el código ni enlaces al repositorio.";
    } else {
      modalNotice.hidden = true;
      modalNotice.textContent = "";
    }
  }

  if (modalActions) {
    modalActions.innerHTML = "";
    const actions = [];

    if (p.visibility !== "private" && p.links?.repo) {
      actions.push({ label: "Repositorio", href: p.links.repo, primary: true });
    }
    if (p.links?.live) actions.push({ label: "Sitio", href: p.links.live, primary: false });
    if (p.links?.video) actions.push({ label: "Video", href: p.links.video, primary: false });

    if (p.visibility === "private") {
      const priv = document.createElement("span");
      priv.className = "badge";
      priv.textContent = "Privado";
      modalActions.appendChild(priv);
    }

    if (actions.length === 0) {
      const span = document.createElement("span");
      span.className = "badge";
      span.textContent = "Sin links";
      modalActions.appendChild(span);
    } else {
      actions.forEach((a) => {
        const link = document.createElement("a");
        link.className = `btn ${a.primary ? "primary" : "ghost"}`.trim();
        link.href = a.href;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = a.label;
        modalActions.appendChild(link);
      });
    }
  }

  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay?.classList.contains("open")) closeModal();
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}
