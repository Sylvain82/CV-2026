/* ==========================================================================
   Comportements communs : thème clair/sombre, menu mobile, rendu des données
   ========================================================================== */
(function () {
  "use strict";

  const D = window.SITE_DATA || {};

  /* ---------- Utilitaires ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const isExternal = (url) => /^https?:\/\//.test(url || "");

  const tagsHtml = (tags) =>
    tags && tags.length ? `<ul class="tags" aria-label="Technologies">${tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";

  const fill = (name, html) => {
    document.querySelectorAll(`[data-render="${name}"]`).forEach((el) => (el.innerHTML = html));
  };

  /* ---------- Icônes (traits 24×24, style homogène) ---------- */
  const ICONS = {
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    sparkles: '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-6"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    kanban: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v7M12 7v4M16 7v9"/>',
    camera: '<path d="m22 8-6 4 6 4z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="15.5" cy="15.5" r="1.2"/>',
    cart: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  };
  const icon = (name, cls = "") =>
    ICONS[name]
      ? `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`
      : "";

  /* Icônes des blocs « Ce que j'apporte » (accueil) */
  document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));

  /* ---------- Thème clair / sombre ---------- */
  const root = document.documentElement;
  const themeBtn = document.querySelector("[data-theme-toggle]");

  function currentTheme() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function updateThemeButton() {
    if (!themeBtn) return;
    const dark = currentTheme() === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Passer au thème clair" : "Passer au thème sombre");
    themeBtn.setAttribute("title", dark ? "Thème clair" : "Thème sombre");
    themeBtn.dataset.state = dark ? "dark" : "light";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* stockage indisponible */ }
      updateThemeButton();
    });
    updateThemeButton();
  }

  /* ---------- Menu mobile ---------- */
  const navBtn = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Lien actif dans le menu ---------- */
  const page = document.body.dataset.page;
  document.querySelectorAll("#nav a[data-page]").forEach((a) => {
    if (a.dataset.page === page) a.setAttribute("aria-current", "page");
  });

  /* ---------- Année du pied de page ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Bouton imprimer ---------- */
  document.querySelectorAll("[data-print]").forEach((b) => b.addEventListener("click", () => window.print()));

  /* ---------- Rendu : cartes ---------- */
  function cardHtml({ titre, sousTitre, badge, texte, image, icone, tags, lien }) {
    const media = image
      ? `<img class="card__media" src="${esc(image)}" alt="" loading="lazy" width="320" height="200">`
      : icone
      ? `<div class="card__media card__media--icon" aria-hidden="true">${esc(icone)}</div>`
      : "";
    const titleInner = lien
      ? `<a class="card__link" href="${esc(lien)}"${isExternal(lien) ? ' target="_blank" rel="noopener"' : ""}>${esc(titre)}</a>`
      : esc(titre);
    return `
      <article class="card${lien ? " card--link" : ""}">
        ${media}
        <div class="card__body">
          ${badge ? `<p class="card__badge">${esc(badge)}</p>` : ""}
          <h3 class="card__title">${titleInner}</h3>
          ${sousTitre ? `<p class="card__subtitle">${esc(sousTitre)}</p>` : ""}
          <p>${esc(texte)}</p>
          ${tagsHtml(tags)}
          ${lien ? `<p class="card__more" aria-hidden="true">Voir le projet ${isExternal(lien) ? "↗" : "→"}</p>` : ""}
        </div>
      </article>`;
  }

  const xp = D.experiences || [];
  fill(
    "experiences-accueil",
    xp.filter((e) => e.accueil).map((e) =>
      cardHtml({
        titre: e.poste,
        sousTitre: `${e.entreprise} · ${e.lieu}`,
        badge: e.periode,
        texte: e.resume || e.description,
        image: e.image,
      })
    ).join("")
  );

  /* ---------- Rendu : projets (grille de cartes verticales) ---------- */
  const projets = D.projets || [];

  function projetHtml(p, court) {
    const media = p.image
      ? `<img class="pcard__media" src="${esc(p.image)}" alt="Aperçu : ${esc(p.titre)}" loading="lazy" width="960" height="600">`
      : `<div class="pcard__media pcard__media--icon" aria-hidden="true">${icon(p.icone || "sparkles")}</div>`;

    const actions = [];
    if (p.lien) {
      const ext = isExternal(p.lien);
      const gh = /github\.com/.test(p.lien);
      const label = gh ? "Code source" : ext ? "Voir le site" : "Voir la démo";
      actions.push(
        `<a class="pbtn pbtn--primary" href="${esc(p.lien)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${gh ? icon("github") : ""}${label}${icon(ext ? "external" : "arrow")}</a>`
      );
    }
    if (p.code) {
      actions.push(`<a class="pbtn" href="${esc(p.code)}" target="_blank" rel="noopener">${icon("github")}Code source</a>`);
    }

    return `
      <article class="pcard" data-tags="${esc((p.tags || []).join("|"))}">
        ${media}
        <div class="pcard__body">
          <h3 class="pcard__title">${esc(p.titre)}</h3>
          <p class="pcard__text">${esc((court && p.resume) || p.description)}</p>
          <button class="pcard__more" type="button" aria-expanded="false" hidden>Lire la suite</button>
          ${tagsHtml(p.tags)}
          ${actions.length ? `<div class="pcard__actions">${actions.join("")}</div>` : ""}
        </div>
      </article>`;
  }

  fill("projets-accueil", projets.filter((p) => p.accueil).map((p) => projetHtml(p, true)).join(""));
  fill("projets-metier", projets.filter((p) => p.categorie === "metier").map((p) => projetHtml(p)).join(""));
  fill("projets-perso", projets.filter((p) => p.categorie === "perso").map((p) => projetHtml(p)).join(""));
  fill("projets-formation", projets.filter((p) => p.categorie === "formation").map((p) => projetHtml(p)).join(""));

  /* « Lire la suite » : affiché seulement si le texte est coupé */
  function setupReadMore() {
    document.querySelectorAll(".pcard").forEach((card) => {
      const text = card.querySelector(".pcard__text");
      const btn = card.querySelector(".pcard__more");
      if (!text || !btn || card.classList.contains("is-open")) return;
      btn.hidden = text.scrollHeight <= text.clientHeight + 2;
    });
  }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".pcard__more");
    if (!btn) return;
    const card = btn.closest(".pcard");
    const open = card.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Réduire" : "Lire la suite";
  });
  setupReadMore();
  window.addEventListener("resize", setupReadMore);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setupReadMore);

  /* Filtres par technologie (technos présentes dans au moins 2 projets) */
  const filtersEl = document.querySelector("[data-render='filtres-projets']");
  if (filtersEl) {
    const count = {};
    projets.forEach((p) => (p.tags || []).forEach((t) => (count[t] = (count[t] || 0) + 1)));
    const techs = Object.keys(count).filter((t) => count[t] >= 2).sort((a, b) => count[b] - count[a] || a.localeCompare(b, "fr"));
    filtersEl.innerHTML = ["Tous", ...techs]
      .map((t, i) => `<button type="button" class="chip" data-filter="${i ? esc(t) : ""}" aria-pressed="${i === 0}">${esc(t)}</button>`)
      .join("");
    filtersEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      const f = btn.dataset.filter;
      filtersEl.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      document.querySelectorAll(".pcard").forEach((c) => {
        c.hidden = !!f && !c.dataset.tags.split("|").includes(f);
      });
      document.querySelectorAll("[data-projets-section]").forEach((sec) => {
        sec.hidden = !sec.querySelector(".pcard:not([hidden])");
      });
      setupReadMore();
    });
  }

  /* ---------- Rendu : CV ---------- */
  const timelineItem = (titre, meta, periode, texte) => `
    <li class="timeline__item">
      <div class="timeline__head">
        <h3>${esc(titre)}</h3>
        <span class="timeline__period">${esc(periode)}</span>
      </div>
      <p class="timeline__meta">${esc(meta)}</p>
      ${texte ? `<p>${esc(texte)}</p>` : ""}
    </li>`;

  fill("experiences", xp.map((e) => timelineItem(e.poste, `${e.entreprise} · ${e.lieu}`, e.periode, e.description)).join(""));
  fill("formation", (D.formation || []).map((f) => timelineItem(f.titre, f.ecole, f.periode, f.description)).join(""));
  fill(
    "certifications",
    (D.certifications || []).map((c) => `
      <li>
        <strong>${c.lien ? `<a href="${esc(c.lien)}" target="_blank" rel="noopener">${esc(c.titre)}</a>` : esc(c.titre)}</strong>
        <span class="muted"> — ${esc(c.organisme)}, ${esc(c.periode)}</span>
      </li>`).join("")
  );
  fill(
    "competences",
    (D.competences || []).map((g) => `
      <div class="skills__group">
        <h3>${esc(g.titre)}</h3>
        ${tagsHtml(g.items)}
      </div>`).join("")
  );

  /* ---------- Coordonnées (en-tête du CV imprimé) ---------- */
  const c = D.contact || {};
  fill(
    "contact-cv",
    `<li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
     <li><a href="${esc(c.linkedin)}">${esc((c.linkedin || "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a></li>
     <li><a href="${esc(c.github)}">${esc((c.github || "").replace(/^https?:\/\//, ""))}</a></li>
     <li>${esc(c.localisation)}</li>`
  );

  /* ---------- Apparition douce au défilement ---------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    const items = document.querySelectorAll(".pcard, .feature, .card, .stat, .timeline__item");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
