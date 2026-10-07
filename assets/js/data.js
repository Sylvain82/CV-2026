/* ==========================================================================
   CONTENU DU SITE
   --------------------------------------------------------------------------
   C'est le seul fichier à modifier pour mettre à jour le site :
   expériences, formation, compétences et projets.
   Les pages HTML se remplissent automatiquement à partir de ces données.
   ========================================================================== */

window.SITE_DATA = {
  contact: {
    nom: "Sylvain Garrigues",
    titre: "Technicien méthodes aéronautique & automatisation des processus",
    email: "sylvain.garrigues31@gmail.com",
    linkedin: "https://www.linkedin.com/in/sylvain-garrigues/",
    github: "https://github.com/Sylvain82",
    localisation: "Tarn-et-Garonne (82) · Toulouse",
  },

  /* Expériences : de la plus récente à la plus ancienne.
     - "accueil: true" : affichée aussi dans le parcours résumé de la page d'accueil
     - "resume" : texte court pour l'accueil ; "description" : texte complet du CV */
  experiences: [
    {
      poste: "Technicien méthodes",
      entreprise: "JVAeroservices",
      lieu: "Montauban (82)",
      periode: "Depuis 2022",
      image: "assets/img/expliseat.webp",
      accueil: true,
      resume:
        "Gammes de travail pour les chantiers du site (Airbus, Dassault, Inmarsat…) et développement d'outils internes pour automatiser le suivi de production.",
      description:
        "De retour chez JVAeroservices, je reprends la fonction de technicien méthodes. En parallèle, je développe des outils internes pour automatiser le suivi de production : tableaux de bord Excel/VBA alimentés par SILOG, numérisation et classement automatique des documents en Python, application web de gestion des commandes. Je m'appuie sur les assistants IA (Claude) pour accélérer le développement et j'intègre l'IA dans certains outils, par exemple pour lire et classer des documents.",
    },
    {
      poste: "Préparateur technique programme A320",
      entreprise: "Expleo",
      lieu: "site Airbus Toulouse",
      periode: "2021 – 2022",
      image: "assets/img/a320cargo.jpg",
      accueil: true,
      resume:
        "Application en production des modifications du bureau d'études sur l'aménagement des soutes (planchers, roller tracks, filets…).",
      description:
        "Au sein du bureau de préparation cabine, j'analyse les modifications de plans émises par le bureau d'études et leur impact en production, sur l'aménagement des soutes (planchers, roller tracks, filets…).",
    },
    {
      poste: "Licence Concepteur d'applications & stage développeur web",
      entreprise: "AP Formation / Shopephemere",
      lieu: "Toulouse",
      periode: "2020 – 2021",
      accueil: false,
      description:
        "Formation complémentaire vers le développement, avec un stage chez Shopephemere : développement de sites e-commerce sous Prestashop, en front-end et en back-end.",
    },
    {
      poste: "Technicien méthodes",
      entreprise: "JVAeroservices",
      lieu: "Montauban (82)",
      periode: "2018 – 2020",
      accueil: false,
      description:
        "Je participe à la mise en place d'une ligne de production de sièges ultra-légers destinés au transport régional (ATR, Dassault notamment), parmi les plus légers du marché.",
    },
    {
      poste: "Coordinateur technique programme A350",
      entreprise: "AAA",
      lieu: "site Airbus Toulouse",
      periode: "2014 – 2018",
      image: "assets/img/a350.jpg",
      accueil: true,
      resume:
        "Lancement du programme : coordination des services du détachement de Saint-Nazaire pour solder les travaux restants dans les délais.",
      description:
        "J'intègre le programme A350 pour son lancement, comme coordinateur technique du détachement de Saint-Nazaire. Je séquence les interventions des équipes logistique et qualité, en veillant au respect des échéances pour les travaux non réalisés dans les usines de Saint-Nazaire.",
    },
    {
      poste: "Préparateur & support technique programme A380",
      entreprise: "AAA",
      lieu: "site Airbus Toulouse",
      periode: "2004 – 2014",
      image: "assets/img/a380.jpg",
      accueil: true,
      resume:
        "Lancement du programme au sein du service de rattrapages électriques : traitement des non-conformités et application des modifications sur les harnais.",
      description:
        "Préparateur sur la partie électrique du programme (installation des harnais) au sein du service de rattrapages électriques : je fais appliquer en production les modifications de gammes transmises par le bureau d'études et je traite les non-conformités.",
    },
  ],

  formation: [
    {
      titre: "Licence Concepteur d'applications",
      ecole: "AP Formation, Toulouse",
      periode: "2021",
      description: "7 mois en e-learning : front-end (HTML, CSS, JavaScript), back-end (PHP Symfony, MySQL).",
    },
    {
      titre: "Formation Catia V5",
      ecole: "IUT Génie mécanique Paul Sabatier, Toulouse",
      periode: "2003",
      description: "Formation de 3 mois, dont un stage de 6 semaines chez Molex (Villemur-sur-Tarn).",
    },
    {
      titre: "BTS Mécanique et Automatismes Industriels",
      ecole: "Lycée Antoine Bourdelle, Montauban (82)",
      periode: "2002",
      description: "",
    },
  ],

  certifications: [
    {
      titre: "Certification bronze en Management de projet par le flux",
      organisme: "AGILEA, Toulouse",
      periode: "2022",
      lien: "https://www.agilea-group.com/management-de-projet-par-le-flux",
    },
  ],

  competences: [
    {
      titre: "Méthodes & industrialisation",
      items: ["Gammes de travail", "Analyse des modifications BE", "Part 21G / 145", "Catia V5", "Lecture de plans", "Anglais technique"],
    },
    {
      titre: "ERP & outils Airbus",
      items: ["SILOG", "SAP (fonctionnel)", "Nomenclatures / BOM", "ACPnG", "CIRCE"],
    },
    {
      titre: "Développement & automatisation",
      items: ["Python", "VBA / Excel", "React", "FastAPI", "PostgreSQL", "JavaScript", "PHP / Symfony", "Git"],
    },
    {
      titre: "IA & assistants de code",
      items: ["Claude", "Claude Code", "API Claude (vision, analyse de documents)", "Prompt engineering", "Relecture et test du code généré"],
    },
    {
      titre: "Organisation",
      items: ["Management par le flux", "Gestion de projet", "Trello"],
    },
  ],

  /* Projets.
     - categorie : "metier" (outils métier) ou "formation" (projets de formation)
     - accueil : true pour l'afficher dans "Projets récents" sur l'accueil
     - image (facultatif) : sinon l'icône est utilisée
     - lien (facultatif) : la carte devient cliquable */
  projets: [
    {
      titre: "Tirage au sort pour l'équipe",
      categorie: "metier",
      icone: "🎲",
      tags: ["JavaScript", "Firebase", "GitHub Actions"],
      description:
        "Petite application web interne : tirage au sort équitable, données synchronisées en temps réel avec Firebase et notifications automatiques via GitHub Actions.",
      lien: "https://github.com/Sylvain82/tirage",
    },
    {
      titre: "Clone de Trello",
      categorie: "formation",
      image: "assets/img/trello.png",
      tags: ["JavaScript"],
      description: "Tableau de tâches en glisser-déposer, inspiré de Trello, en JavaScript natif.",
      lien: "https://sylvain82.github.io/trellow/",
    },
    {
      titre: "DataFoot",
      categorie: "formation",
      image: "assets/img/ballon.jpg",
      tags: ["API", "JavaScript"],
      description: "Site de statistiques sur le football alimenté par une API externe.",
      lien: "https://statfoot-c218f3cfcd48.herokuapp.com/",
    },
    {
      titre: "Carnet de voyages en parallax",
      categorie: "formation",
      image: "assets/img/travel.jpg",
      tags: ["HTML", "CSS"],
      description: "Exercice de mise en page : défilement en parallax en HTML/CSS.",
      lien: "voyages.html",
    },
    {
      titre: "Lecteur vidéo",
      categorie: "formation",
      image: "assets/img/play.jpg",
      tags: ["JavaScript"],
      description: "Lecteur vidéo avec contrôles entièrement recodés en JavaScript.",
      lien: "lecteur.html",
    },
  ],
};
