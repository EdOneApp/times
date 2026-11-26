export const contact = {
  name: "Daniel Guedegbe",
  email: "danielguedegbe10027@gmail.com",
  phone: "+225 07 48 73 33 65",
  whatsapp: "https://wa.me/2250748733365",
};
export const modules = [
  {
    slug: "presences",
    icon: "clock",
    name: "Présences & pointages",
    status: "Documenté",
    short: "La journée commence. Le suivi aussi.",
    description:
      "Retrouvez les arrivées, les départs et les heures effectuées dans une lecture commune, avec les indicateurs de retard et d’absence.",
    features: [
      "Enregistrement des heures de début et de fin",
      "Suivi quotidien des présences",
      "Repérage des absences et retards",
      "Heures effectuées et heures prises en compte",
      "Identification des départs anticipés",
      "Consultation par employé et par date",
    ],
  },
  {
    slug: "horaires",
    icon: "calendar",
    name: "Horaires & heures supplémentaires",
    status: "Documenté",
    short: "Vos horaires. Vos règles de suivi.",
    description:
      "Paramétrez les heures de service et les marges de retard. Le suivi distingue le temps effectué des heures retenues par votre organisation.",
    features: [
      "Heure de début et de fin par service",
      "Marge de retard configurable",
      "Prise en compte des heures supplémentaires par service",
      "Suivi du temps effectué",
      "Repérage des écarts à l’arrivée et au départ",
      "Taux horaire associé au profil, selon le paramétrage",
    ],
  },
  {
    slug: "organisation",
    icon: "grid",
    name: "Entreprises & services",
    status: "Documenté",
    short: "Une organisation claire, dès le départ.",
    description:
      "Structurez les entreprises et leurs services pour rattacher les équipes et les règles d’horaires au bon périmètre.",
    features: [
      "Fiche entreprise : identité, contact et localité",
      "Logo et statut d’activité de l’entreprise",
      "Services associés à leur entreprise",
      "Horaires et marge propres à chaque service",
      "Activation ou désactivation des services",
      "Administration et filtres par entreprise ou service",
    ],
  },
  {
    slug: "equipes",
    icon: "people",
    name: "Employés & profils",
    status: "Documenté",
    short: "Des personnes, avant les lignes.",
    description:
      "Centralisez les profils des employés et leurs rattachements pour retrouver les informations utiles au suivi de présence.",
    features: [
      "Profils employés et coordonnées",
      "Photo et code de profil",
      "Rattachement à une entreprise et un service",
      "Compte utilisateur associé",
      "Indication de profil staff",
      "Recherche et filtres dans l’administration",
    ],
  },
  {
    slug: "reclamations",
    icon: "message",
    name: "Réclamations & justificatifs",
    status: "Documenté",
    short: "Un écart mérite une explication.",
    description:
      "Rassemblez les réclamations de présence et leurs pièces jointes pour les examiner avec le contexte nécessaire.",
    features: [
      "Réclamation rattachée à l’employé et à la date",
      "Description de la demande",
      "Ajout d’une image ou d’un document",
      "État validé ou non validé",
      "Dates de création et de mise à jour",
      "Recherche et suivi administratif des demandes",
    ],
  },
  {
    slug: "rapports",
    icon: "chart",
    name: "Rapports de présence",
    status: "Documenté",
    short: "Du quotidien à la vue d’ensemble.",
    description:
      "Consultez et présentez les données de présence pour faciliter le suivi de vos équipes et préparer vos échanges internes.",
    features: [
      "Rapports de présence",
      "Vue des heures et des écarts",
      "Filtrage par date et par profil",
      "Lecture des retards et des absences",
      "Génération de rapports PDF décrite dans le projet",
      "Administration des données de suivi",
    ],
  },
  {
    slug: "plannings",
    icon: "calendar",
    name: "Plannings & campagnes de suivi",
    status: "Extension proposée",
    short: "Préparer demain, ensemble.",
    description:
      "Un prolongement possible du socle existant : construire des plannings d’équipe et des circuits de validation adaptés à votre activité. Disponibilité à confirmer lors du cadrage.",
    features: [
      "Étude des roulements et affectations",
      "Planification par équipe et établissement",
      "Gestion des changements de planning",
      "Notifications à définir avec les équipes",
      "Circuits de validation des modifications",
      "Règles de suivi adaptées aux différents métiers",
    ],
  },
  {
    slug: "integrations",
    icon: "code",
    name: "Intégrations & automatisations",
    status: "Extension proposée",
    short: "Le temps rejoint vos autres outils.",
    description:
      "Étudiez les connexions à votre environnement RH ou paie. Ces extensions ne sont pas attestées dans le socle documenté et sont définies sur devis.",
    features: [
      "Étude d’exports vers vos outils de paie",
      "Correspondance des formats et des identifiants",
      "Définition d’une éventuelle API",
      "Automatisations de reporting à cadrer",
      "Règles d’accès et historique à concevoir",
      "Tests de rapprochement avant tout usage réel",
    ],
  },
];
export const solutions = [
  {
    slug: "pme",
    name: "PME & équipes terrain",
    headline: "Moins de fichiers. Plus de visibilité.",
    text: "Une base commune pour suivre les équipes, les services et les heures travaillées, sans perdre le contexte de chaque journée.",
    needs: [
      "Des profils employés regroupés",
      "Des horaires de service lisibles",
      "Un suivi des présences quotidien",
      "Des rapports pour vos échanges d’équipe",
    ],
  },
  {
    slug: "ressources-humaines",
    name: "Responsables RH",
    headline: "Le bon contexte. Avant la bonne décision.",
    text: "Rassemblez les données de présence et les réclamations pour préparer vos vérifications. Les décisions restent prises par les personnes responsables.",
    needs: [
      "Retards et absences à vérifier",
      "Réclamations accompagnées de leur contexte",
      "Temps effectué et temps retenu distincts",
      "Rapports pour préparer le suivi RH",
    ],
  },
  {
    slug: "multi-entreprises",
    name: "Directions & groupes",
    headline: "Plusieurs services. Un même repère.",
    text: "Organisez les entreprises, leurs services et les profils associés pour retrouver les bons périmètres de suivi.",
    needs: [
      "Des entreprises et services structurés",
      "Un rattachement clair des employés",
      "Des règles d’horaires par service",
      "Un accompagnement pour cadrer les vues consolidées",
    ],
  },
];
export const resources = [
  {
    slug: "organiser-le-suivi",
    tag: "ORGANISATION",
    title: "Structurer son suivi de présence",
    intro:
      "Un bon suivi commence par des règles compréhensibles et des données bien rangées.",
    sections: [
      {
        title: "Partir de l’organisation réelle",
        body: "Recensez vos entreprises, vos services et les personnes qui y travaillent. Vérifiez les rattachements avant de paramétrer les horaires.",
      },
      {
        title: "Expliquer les repères",
        body: "Les horaires attendus, les marges et les étapes de correction doivent être compris par les équipes. Un tableau ne remplace pas une règle clairement communiquée.",
      },
      {
        title: "Prévoir les vérifications",
        body: "Organisez un moment pour relire les écarts, comprendre les oublis et examiner les réclamations avant d’utiliser les rapports dans vos processus internes.",
      },
    ],
  },
  {
    slug: "lire-les-ecarts",
    tag: "HEURES & HORAIRES",
    title: "Lire un écart sans perdre son contexte",
    intro:
      "Temps travaillé, retard et départ anticipé sont des informations différentes.",
    sections: [
      {
        title: "Distinguer les indicateurs",
        body: "Une durée de présence ne décrit pas, à elle seule, la situation d’un employé. Conservez les heures d’arrivée et de départ, les pauses et les horaires attendus.",
      },
      {
        title: "Préciser la marge",
        body: "Une marge de retard peut servir de repère opérationnel. Sa signification et son application doivent être définies par votre organisation, puis validées par les personnes compétentes.",
      },
      {
        title: "Garder une lecture humaine",
        body: "Une anomalie peut venir d’un oubli ou d’un changement d’organisation. Aucune démonstration de ce site ne décide d’une sanction ni ne calcule une paie réglementaire.",
      },
    ],
  },
  {
    slug: "traiter-les-reclamations",
    tag: "ÉCOUTE & VÉRIFICATION",
    title: "Donner une place aux réclamations",
    intro: "Un suivi plus utile laisse aussi la place à l’explication.",
    sections: [
      {
        title: "Conserver le contexte",
        body: "Associez la date, l’employé concerné et une description claire. Les justificatifs éventuels doivent rester dans un environnement adapté, jamais dans une démonstration publique.",
      },
      {
        title: "Clarifier le traitement",
        body: "Définissez qui reçoit la demande, qui l’examine et comment la réponse est communiquée. La disponibilité d’un circuit avancé doit être confirmée dans votre projet.",
      },
      {
        title: "Préparer le déploiement",
        body: "Le projet documente les réclamations et leurs états. Les droits d’accès détaillés, les durées de conservation et les procédures de protection des données doivent être définis avant un usage réel.",
      },
    ],
  },
];
