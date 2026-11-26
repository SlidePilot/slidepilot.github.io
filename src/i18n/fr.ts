import { CONTACT_EMAIL, DOCS_URL, GITHUB_ISSUES_URL, GITHUB_URL } from '../config';
import type { Dict } from './en';

const fr: Dict = {
  lang: 'fr',
  meta: {
    title: 'SlidePilot – Présentations PDF sur Mac, iPad et iPhone',
    description:
      'Présentez vos diapositives PDF avec notes, minuteur, pointeur et dessin. Conçu pour LaTeX Beamer. Télécommande depuis n’importe quel appareil. Gratuit et open source.',
  },
  nav: {
    features: 'Fonctions',
    remote: 'Télécommande',
    pricing: 'Tarifs',
    faq: 'FAQ',
    docs: 'Docs',
    donate: 'Faire un don',
    download: 'Télécharger',
    menu: 'Menu',
    language: 'Langue',
  },
  hero: {
    badge: 'SlidePilot 2 · désormais sur Mac, iPad et iPhone',
    title: 'Présentez vos diapositives.<br>Gardez le contrôle.',
    subtitle:
      'L’app de présentation pour diapositives PDF, conçue pour LaTeX Beamer. Notes, minuteur, pointeur et dessin sur tous vos appareils, avec télécommande intégrée.',
    appStoreSmall: 'Télécharger dans l’',
    appStoreBig: 'App Store',
    donate: 'Faire un don',
    github: 'ou télécharger pour Mac depuis GitHub',
    note: 'Téléchargement gratuit · Open source · macOS 26, iPadOS 26, iOS 26',
  },
  showcase: {
    alt: 'Vue présentateur de SlidePilot avec minuteur, horloge, notes, diapositive actuelle et suivante',
  },
  illo: {
    current: 'Actuelle',
    next: 'Suivante',
    notes: 'Notes',
    countdown: 'Minuteur',
    noteTitle: 'Intro',
    noteIntro: 'remercier les hôtes',
    noteItems: ['Première loi de Kepler', 'Montrer l’ellipse', 'Interroger le public'],
  },
  features: {
    eyebrow: 'Vue présentateur',
    title: 'Tout ce qu’il vous faut sur scène.',
    lead: 'Le public voit vos diapositives. Vous voyez la suite, vos notes et l’heure. Sans aucune distraction.',
    presenter: {
      title: 'Votre disposition, à votre façon',
      text: 'Combinez diapositive actuelle, diapositive suivante et notes côte à côte, comme vous le souhaitez.',
    },
    timer: {
      title: 'Toujours à l’heure',
      text: 'Horloge, chronomètre ou minuteur qui vous avertit deux fois avant la fin du temps.',
    },
    pointer: {
      title: 'Montrez l’essentiel',
      text: 'Un point, un cercle, une cible, un curseur ou votre propre modèle sur l’écran du public.',
    },
    drawing: {
      title: 'Dessinez sur vos diapositives',
      text: 'Annotez en direct à la souris, au doigt ou à l’Apple Pencil. Gardez les dessins ou exportez-les en PDF.',
      alt: 'Dessin sur une diapositive dans SlidePilot',
    },
    curtain: {
      title: 'Une pause avec le rideau',
      text: 'Écran noir ou blanc en un clic, pour les questions ou une pause.',
    },
    navigator: {
      title: 'Allez où vous voulez',
      text: 'Le navigateur affiche les miniatures de toutes les pages. Un clic et vous y êtes.',
    },
    notes: {
      title: 'Des notes pour chaque diapositive',
      text: 'Rédigez des notes en texte enrichi, avec des listes. Elles restent liées à votre PDF.',
    },
  },
  latex: {
    eyebrow: 'Conçu pour LaTeX',
    title: 'Pensé pour Beamer. Parfait avec tout PDF.',
    lead: 'SlidePilot comprend comment naissent les présentations LaTeX. Votre flux de travail reste aussi rapide que votre compilateur.',
    notes: {
      title: 'Notes Beamer sur le second écran',
      text: 'Utilisez <code>\\setbeameroption{show notes on second screen}</code>. SlidePilot vous montre la moitié notes et au public la moitié diapositive, détectées grâce au mot-clé PDF <code>SP-Right</code>, <code>SP-Left</code>, <code>SP-Top</code> ou <code>SP-Bottom</code>.',
      you: 'Vous',
      audience: 'Public',
    },
    reload: {
      title: 'Rechargement à chaque compilation',
      text: 'Corrigez une coquille, lancez latexmk : SlidePilot recharge le PDF et reste sur la même diapositive.',
      status: 'Rechargé · toujours sur la diapo 12',
    },
    links: {
      title: 'Liens et vidéos fonctionnent',
      text: 'Les liens internes, les liens web et les vidéos intégrées avec Beamer fonctionnent pendant l’exposé.',
    },
  },
  remote: {
    eyebrow: 'Télécommande',
    title: 'Chaque appareil devient une télécommande.',
    lead: 'Contrôlez la présentation sur Mac ou iPad depuis votre iPhone, ou depuis tout autre appareil avec SlidePilot. Aucune app supplémentaire.',
    points: [
      { title: 'Associer une fois', text: 'Confirmez le même code sur les deux écrans. Les appareils de confiance se reconnectent seuls.' },
      { title: 'Chiffré et local', text: 'Les appareils communiquent directement sur votre réseau local. Pas de serveur, pas de compte.' },
      { title: 'L’essentiel en main', text: 'Diapositives, notes et minuteur sur votre téléphone, pendant que vous vous déplacez.' },
    ],
    pairing: 'Code d’association',
    alt: 'SlidePilot sur iPhone contrôlant une présentation',
  },
  devices: {
    eyebrow: 'Une app, tous vos appareils',
    title: 'Chez soi sur Mac, iPad et iPhone.',
    lead: 'Une app native pour chaque plateforme, conçue pour macOS 26, iPadOS 26 et iOS 26.',
    mac: { title: 'Mac', text: 'Fenêtres présentateur et présentation, raccourcis clavier et télécommandes.' },
    ipad: { title: 'iPad', text: 'Écran externe par câble ou AirPlay, dessin à l’Apple Pencil.' },
    iphone: { title: 'iPhone', text: 'Présentez depuis votre poche ou utilisez-le comme télécommande. Prêt pour l’iPhone Duo.' },
    extras: [
      'Écran externe et AirPlay',
      'Raccourcis clavier et télécommandes',
      'VoiceOver et taille dynamique',
      'Modes clair et sombre',
      'Français, anglais, allemand',
      'Plusieurs PDF à la fois',
    ],
  },
  privacy: {
    title: 'Vos diapositives restent les vôtres.',
    text: 'Pas de compte, pas de suivi, aucune donnée collectée. Vos PDF, notes et dessins ne quittent jamais vos appareils.',
    items: ['Pas de compte', 'Pas de suivi', 'Pas de serveur', 'Open source'],
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: 'Gratuit. Ouvert. Équitable.',
    lead: 'SlidePilot est open source et gratuit. À vous de choisir comment l’obtenir et comment le soutenir.',
    github: {
      label: 'GitHub',
      title: 'Téléchargement gratuit pour Mac',
      price: 'Gratuit',
      text: 'L’app Mac complète, sans aucune limite. Téléchargez-la depuis GitHub et installez-la vous-même.',
      items: ['Toutes les fonctions, sans limite', 'Mac uniquement', 'Mises à jour : à télécharger vous-même'],
      cta: 'Télécharger sur GitHub',
    },
    appStore: {
      label: 'App Store',
      title: 'SlidePilot avec Pro',
      price: 'Gratuit + Pro en achat unique',
      text: 'Gratuit sur Mac, iPad et iPhone. Tout ce qui se passe sur votre écran est illimité. La présentation au public et la télécommande peuvent être essayées 3 minutes à chaque fois.',
      items: ['Un seul achat pour Mac, iPad et iPhone', 'Mises à jour automatiques via l’App Store', 'Partage familial inclus'],
      cta: 'Obtenir sur l’App Store',
      recommended: 'Le plus simple',
    },
    openSource: {
      label: 'Open source',
      title: 'Développé en toute transparence',
      price: 'GPL-3.0',
      text: 'Le code source complet est sur GitHub. Lisez-le, compilez-le, améliorez-le.',
      items: ['Pas de suivi, pas de publicité', 'Issues et idées bienvenues', 'Pull requests bienvenues'],
      cta: 'Voir sur GitHub',
    },
    support: {
      title: 'Envie de soutenir SlidePilot ?',
      text: 'Achetez Pro dans l’App Store, faites un don ou parlez-en simplement à vos collègues. Chaque geste aide SlidePilot à vivre.',
      buy: 'Acheter Pro',
      donate: 'Faire un don',
      share: 'En parler',
      shareText: 'SlidePilot – l’app de présentation PDF pour Mac, iPad et iPhone, conçue pour LaTeX Beamer.',
      copied: 'Lien copié',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions et réponses',
    groups: [
      {
        title: 'À propos de SlidePilot',
        items: [
          {
            q: 'Qu’est-ce que SlidePilot ?',
            a: 'Une app de présentation pour diapositives PDF. Le public voit vos diapositives ; vous voyez la diapositive actuelle et la suivante, vos notes et l’heure.',
          },
          {
            q: 'Mes diapositives doivent-elles être créées avec LaTeX Beamer ?',
            a: 'Non. SlidePilot fonctionne avec tout PDF. Les présentations Beamer profitent simplement de fonctions en plus, comme les notes sur le second écran.',
          },
          {
            q: 'Sur quels appareils SlidePilot fonctionne-t-il ?',
            a: 'Mac avec macOS 26, iPad avec iPadOS 26 et iPhone avec iOS 26 ou version ultérieure.',
          },
          {
            q: 'SlidePilot est-il une app native ?',
            a: 'Oui. Elle est écrite en Swift et SwiftUI et utilise les commandes du système sur chaque plateforme.',
          },
        ],
      },
      {
        title: 'Prix et soutien',
        items: [
          {
            q: 'Combien coûte SlidePilot ?',
            a: 'SlidePilot est open source et s’obtient de deux façons :<br><strong>GitHub :</strong> l’app Mac est gratuite, avec toutes les fonctions sans limite. Vous l’installez et la mettez à jour vous-même.<br><strong>App Store :</strong> gratuite sur Mac, iPad et iPhone. La présentation au public et la télécommande peuvent être essayées 3 minutes à chaque fois ; un achat intégré unique (SlidePilot Pro) les débloque sur tous vos appareils, avec mises à jour automatiques et partage familial.',
          },
          {
            q: 'Que signifie l’essai de 3 minutes ?',
            a: 'Dans la version App Store sans Pro, chaque sortie pour le public et chaque session de télécommande dure 3 minutes. Tout ce qui se passe sur votre propre écran reste illimité.',
          },
          {
            q: 'Comment soutenir SlidePilot ?',
            a: 'Achetez SlidePilot Pro dans l’App Store, <a href="{donate}">faites un don</a> ou parlez simplement de SlidePilot autour de vous. Merci !',
          },
        ],
      },
      {
        title: 'Utiliser SlidePilot',
        items: [
          {
            q: 'Comment fonctionne la télécommande ?',
            a: 'Installez SlidePilot sur les deux appareils, ouvrez « Télécommande » dans les réglages et confirmez le même code sur les deux écrans. Les appareils se connectent directement via le réseau local.',
          },
          {
            q: 'SlidePilot collecte-t-il des données ?',
            a: 'Non. Pas de compte, pas d’analyse, pas de serveur. Vos PDF, notes et dessins restent sur vos appareils.',
          },
          {
            q: 'Quelles langues SlidePilot prend-il en charge ?',
            a: 'Français, anglais et allemand.',
          },
          {
            q: 'Où trouver de l’aide ou signaler un bug ?',
            a: `Consultez la <a href="${DOCS_URL}">documentation</a>, ouvrez une issue sur <a href="${GITHUB_ISSUES_URL}">GitHub</a> ou écrivez à <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
          },
          {
            q: 'SlidePilot est-il open source ?',
            a: `Oui, sous licence GNU General Public License v3.0. Le code source est sur <a href="${GITHUB_URL}">GitHub</a>.`,
          },
        ],
      },
    ],
  },
  cta: {
    title: 'Prêt pour votre prochain exposé ?',
    text: 'Téléchargez SlidePilot et essayez-le avec vos propres diapositives.',
  },
  footer: {
    tagline: 'L’app de présentation PDF pour Mac, iPad et iPhone.',
    product: 'Produit',
    resources: 'Ressources',
    legal: 'Mentions légales',
    contact: 'Contact',
    docs: 'Documentation',
    github: 'GitHub',
    changelog: 'Notes de version',
    issues: 'Signaler un problème',
    imprint: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'Conditions d’utilisation',
    rights: 'Tous droits réservés.',
  },
  donate: {
    metaTitle: 'Faire un don – SlidePilot',
    metaDescription: 'Soutenez le développement de SlidePilot par un don.',
    eyebrow: 'Soutenir SlidePilot',
    title: 'Gardez SlidePilot en vol.',
    lead: 'SlidePilot est développé sur du temps libre et est open source. S’il vous aide sur scène, un petit don lui permet de continuer à vivre et de rester libre pour tous.',
    button: 'Faire un don avec PayPal',
    secure: 'Vous serez redirigé vers PayPal. Tout montant est le bienvenu.',
    whereTitle: 'À quoi sert votre don',
    where: [
      { title: 'Développement', text: 'Nouvelles fonctions, corrections et mises à jour pour les nouvelles versions de macOS, iPadOS et iOS.' },
      { title: 'Frais courants', text: 'Apple Developer Program, nom de domaine et appareils de test.' },
      { title: 'Rester libre', text: 'Le téléchargement Mac gratuit sur GitHub reste gratuit et sans limite.' },
    ],
    otherTitle: 'D’autres façons d’aider',
    other: [
      { title: 'Acheter SlidePilot Pro', text: 'Débloquez Pro dans l’App Store sur Mac, iPad et iPhone.', cta: 'App Store' },
      { title: 'En parler', text: 'Recommandez SlidePilot à vos collègues, étudiants et amis.', cta: 'Copier le lien' },
      { title: 'Contribuer', text: 'Signalez des bugs, proposez des idées ou envoyez une pull request.', cta: 'GitHub' },
    ],
    thanks: 'Merci pour votre soutien !',
  },
  legal: {
    imprint: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    translationNote: 'Cette traduction est fournie pour votre confort. Seule la version allemande fait foi.',
    germanVersion: 'Version allemande',
    updated: 'Dernière mise à jour',
  },
  notFound: {
    title: 'Page introuvable',
    text: 'Cette diapositive n’existe pas. Elle a peut-être disparu lors de la dernière compilation.',
    back: 'Retour à l’accueil',
  },
};

export default fr;
