# Site CV – Sylvain Garrigues

Site personnel en **HTML / CSS / JavaScript pur** : aucune installation, aucune compilation.

## Voir le site en local

Ouvrir `index.html` dans le navigateur suffit. Pour un rendu identique à la mise en ligne :

```bash
python -m http.server 8000   # puis http://localhost:8000
```

## Mettre à jour le contenu

Tout le contenu (expériences, formation, compétences, certifications, projets) est dans **`assets/js/data.js`**.
Les pages se remplissent automatiquement : ajouter un projet = ajouter un bloc `{ ... }` dans la liste `projets`.

| Contenu | Fichier |
|---|---|
| Expériences, formation, compétences, projets | `assets/js/data.js` |
| Textes de présentation (accueil, intro du CV) | `index.html`, `cv.html` |
| Couleurs, polices, mise en page, impression | `assets/css/style.css` |
| Image d'aperçu LinkedIn / Facebook | `assets/img/social_img.jpg` |

## CV en PDF

Sur la page CV, le bouton **« Télécharger en PDF »** ouvre l'impression du navigateur : choisir
« Enregistrer au format PDF ». Une mise en page A4 dédiée (sans menu, sur deux colonnes) est appliquée.

## Mise en ligne sur GitHub Pages

1. Pousser ces fichiers dans le dépôt **`CV-2026`**.
2. Dans *Settings → Pages*, choisir *Deploy from a branch*, branche `main`, dossier `/ (root)`, puis enregistrer.
3. Le site est en ligne sur https://sylvain82.github.io/CV-2026/ (compter une à deux minutes après chaque envoi).

Tous les liens internes sont relatifs : le site fonctionne aussi bien à la racine que dans un sous-dossier.
Si le site est publié à une autre adresse (par exemple dans un dépôt `sylvain82.github.io`), remplacer
`https://sylvain82.github.io/CV-2026/` dans les fichiers `.html`, `robots.txt` et `sitemap.xml`
(rechercher/remplacer).

## Ajouter un projet

Dans `assets/js/data.js`, ajouter un bloc dans la liste `projets` avec `categorie` : `"metier"`, `"perso"` ou `"formation"`.
Sans `lien`, la carte s'affiche sans bouton « Voir le projet ».
