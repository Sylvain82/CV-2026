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

  const projets = D.projets || [];
  const projetCard = (p, court) =>
    cardHtml({
      titre: p.titre,
      texte: (court && p.resume) || p.description,
      image: p.image,
      icone: p.icone,
      tags: p.tags,
      lien: p.lien,
    });
  fill("projets-accueil", projets.filter((p) => p.accueil).map((p) => projetCard(p, true)).join(""));
  fill("projets-metier", projets.filter((p) => p.categorie === "metier").map((p) => projetCard(p)).join(""));
  fill("projets-formation", projets.filter((p) => p.categorie === "formation").map((p) => projetCard(p)).join(""));

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
})();
