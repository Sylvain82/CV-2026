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
        "De retour chez JVAeroservices, je reprends la fonction de technicien méthodes. En parallèle, je développe des outils internes pour automatiser le suivi de production : tableaux de bord Excel/VBA alimentés par SILOG. J'utilise de temps en temps Claude pour créer des macros Excel ou de petits programmes d'extraction de données.",
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
      items: ["VBA / Excel", "JavaScript", "PHP / Symfony", "Git"],
    },
    {
      titre: "IA & assistants de code",
      items: ["Claude", "Macros Excel assistées par IA", "Extraction de données", "Vision par ordinateur (analyse vidéo)"],
    },
    {
      titre: "Drone & photogrammétrie",
      items: ["Planification de vol de drone", "Grilles de points de passage GPS", "Calcul du GSD", "OpenDroneMap", "DJI Mini 4 Pro"],
    },
    {
      titre: "Organisation",
      items: ["Management par le flux", "Gestion de projet", "Trello"],
    },
  ],

  /* Projets.
     - categorie : "metier" (outils métier), "perso" (projets personnels) ou "formation" (projets de formation)
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
      titre: "Trellow – tableau Kanban d'équipe",
      categorie: "metier",
      image: "assets/img/trello.png",
      tags: ["JavaScript", "Firebase", "GitHub Actions"],
      description:
        "Tableau Kanban collaboratif inspiré de Trello, en un seul fichier HTML : glisser-déposer, présence et synchronisation en temps réel, limites WIP, récurrence, tableau de bord. L'application est protégée par connexion : le code et la documentation sont sur GitHub.",
      lien: "https://github.com/Sylvain82/trellow",
    },
    {
      titre: "Analyse de matchs de foot par vision par ordinateur",
      categorie: "perso",
      icone: "⚽",
      tags: ["Vision par ordinateur", "Roboflow Sports", "Statistiques", "Export Excel"],
      description:
        "Application locale qui analyse la vidéo d'un match : détection des joueurs avec le projet open source Roboflow Sports, projection sur le terrain, nettoyage des trajectoires, puis statistiques (largeur et profondeur des équipes, distances, vitesses, cartes de chaleur) et export Excel. Tout se calcule sur l'ordinateur : aucune vidéo n'est envoyée sur internet.",
      lien: "https://github.com/Sylvain82/analyse-match",
    },
    {
      titre: "Planification de vol de drone et cartographie",
      categorie: "perso",
      icone: "🚁",
      tags: ["DJI Mini 4 Pro", "Photogrammétrie", "OpenDroneMap", "GSD"],
      description:
        "Préparation de missions de cartographie par drone : calcul de la résolution au sol (GSD) selon l'altitude et la caméra, génération de grilles de points de passage GPS pour couvrir une zone avec le bon recouvrement, puis traitement des photos en carte et modèle 3D avec OpenDroneMap.",
    },
    {
      titre: "DataFoot — statistiques de football",
      categorie: "perso",
      image: "assets/img/ballon.jpg",
      tags: ["PHP / Symfony", "API", "JavaScript", "Docker"],
      description:
        "Site de statistiques de football : classements, matchs du jour, fiches de clubs et meilleurs buteurs, alimenté par l'API gratuite football-data.org. Les clés d'accès restent côté serveur et les réponses sont mises en cache. Hébergé gratuitement sur Render : la première ouverture après une période d'inactivité peut prendre environ une minute.",
      lien: "https://statfoot-1.onrender.com/",
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
