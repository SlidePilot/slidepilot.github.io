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
    title: 'Présentez vos diapositives.<br>Gardez le contrôle.',
    appStoreSmall: 'Télécharger dans l’',
    appStoreBig: 'App Store',
    donate: 'Faire un don',
    github: 'ou télécharger pour Mac depuis GitHub',
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
    lead: 'Le public voit vos diapositives. Vous voyez tout le reste.',
    presenter: { title: 'Votre disposition', text: 'Diapositive actuelle, suivante et notes – disposées comme vous voulez.' },
    timer: { title: 'Le temps sous les yeux', text: 'Un compte à rebours qui vous prévient à temps.' },
    pointer: { title: 'Pointeur', text: 'Point, cercle ou curseur pour le public.' },
    drawing: {
      title: 'Dessiner sur les diapositives',
      text: 'À la souris, au doigt ou à l’Apple Pencil. Export PDF possible.',
      alt: 'Dessin sur une diapositive dans SlidePilot',
    },
    curtain: { title: 'Rideau', text: 'Un écran noir pour les pauses et les questions.' },
    navigator: { title: 'Aperçu des diapositives', text: 'Accédez à n’importe quelle diapositive en un clic.' },
    notes: { title: 'Notes', text: 'Des notes mises en forme pour chaque diapositive.' },
  },
  latex: {
    eyebrow: 'Conçu pour LaTeX',
    title: 'Pensé pour Beamer. Parfait avec tout PDF.',
    notes: {
      title: 'Notes Beamer sur le second écran',
      text: 'Avec <code>show notes on second screen</code>, vous voyez les notes et le public seulement les diapositives.',
      you: 'Vous',
      audience: 'Public',
    },
    reload: {
      title: 'Rechargement à la compilation',
      text: 'Le PDF se met à jour et vous restez sur la même diapositive.',
      status: 'Rechargé · diapo 12',
    },
    links: {
      title: 'Liens et vidéos',
      text: 'Liens internes, liens web et vidéos intégrées fonctionnent.',
    },
  },
  remote: {
    eyebrow: 'Télécommande',
    title: 'Votre iPhone est la télécommande.',
    lead: 'Pilotez la présentation sur Mac ou iPad depuis un autre appareil. Sans app supplémentaire.',
    points: [
      { title: 'Associer une fois', text: 'Ensuite, vos appareils se connectent tout seuls.' },
      { title: 'Local et chiffré', text: 'Directement via votre réseau. Ni serveur, ni compte.' },
      { title: 'Tout en main', text: 'Diapositives, notes et minuteur sur votre téléphone.' },
    ],
    pairing: 'Code d’association',
    alt: 'SlidePilot sur iPhone pilotant une présentation',
  },
  devices: {
    eyebrow: 'Une app, tous vos appareils',
    title: 'Pour Mac, iPad et iPhone.',
    mac: { title: 'Mac', text: 'Raccourcis clavier, télécommandes et écrans externes.' },
    ipad: { title: 'iPad', text: 'Par câble ou AirPlay, dessin à l’Apple Pencil.' },
    iphone: { title: 'iPhone', text: 'Présentez depuis votre poche ou pilotez à distance.' },
  },
  privacy: {
    title: 'Vos diapositives restent les vôtres.',
    text: 'Ni compte, ni suivi, ni serveur. Tout reste sur vos appareils.',
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: 'Ouvert à tous. Financé équitablement.',
    lead: 'SlidePilot est open source : l’app Mac est gratuite sur GitHub. L’App Store est plus pratique et couvre aussi l’iPad et l’iPhone. Pro finance la suite du développement.',
    source: 'Voir le code source',
    appStore: {
      label: 'App Store',
      price: 'Essai gratuit',
      priceNote: 'Pro en achat unique, sans abonnement',
      text: 'Tout ce qui s’affiche sur votre écran est illimité. La présentation sur projecteur ou écran externe et la télécommande sont à l’essai 3 minutes chacune, Pro les débloque définitivement.',
      items: ['Mac, iPad et iPhone', 'Mises à jour automatiques', 'Partage familial'],
      cta: 'Télécharger sur l’App Store',
    },
    github: {
      label: 'GitHub',
      price: 'Gratuit sur Mac',
      priceNote: 'sans limite',
      text: 'L’app Mac avec toutes les fonctions. Vous l’installez et la mettez à jour vous-même.',
      items: ['Toutes les fonctions', 'Mises à jour manuelles'],
      cta: 'Télécharger sur GitHub',
    },
    support: {
      title: 'Soutenir SlidePilot :',
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
