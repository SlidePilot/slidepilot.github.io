import { CONTACT_EMAIL, DOCS_URL, GITHUB_ISSUES_URL, GITHUB_URL } from '../config';

const en = {
  lang: 'en',
  meta: {
    title: 'SlidePilot – PDF presenter for Mac, iPad and iPhone',
    description:
      'Present PDF slides with notes, timer, pointer and drawing. Made for LaTeX Beamer. Remote control from any device. Free and open source.',
  },
  nav: {
    features: 'Features',
    remote: 'Remote',
    pricing: 'Open Source',
    faq: 'FAQ',
    docs: 'Docs',
    donate: 'Donate',
    download: 'Download',
    menu: 'Menu',
    language: 'Language',
  },
  hero: {
    title: 'Present your slides.<br>Stay in control.',
    appStoreSmall: 'Download on the',
    appStoreBig: 'App Store',
    donate: 'Donate',
    github: 'or download for Mac from GitHub',
  },
  showcase: {
    alt: 'SlidePilot presenter view with timer, clock, notes, current and next slide',
  },
  illo: {
    current: 'Current',
    next: 'Next',
    notes: 'Notes',
    countdown: 'Countdown',
    noteTitle: 'Intro',
    noteIntro: 'thank the hosts',
    noteItems: ['Kepler’s first law', 'Show the ellipse', 'Ask the audience'],
  },
  features: {
    eyebrow: 'Presenter view',
    title: 'Everything you need on stage.',
    lead: 'Your audience sees your slides. You see everything else.',
    presenter: { title: 'Your layout', text: 'Current slide, next slide and notes – arranged the way you like.' },
    timer: { title: 'Keep track of time', text: 'A countdown that warns you in time.' },
    pointer: { title: 'Pointer', text: 'Dot, circle or cursor for your audience.' },
    drawing: {
      title: 'Draw on slides',
      text: 'With mouse, finger or Apple Pencil. Export as PDF if you like.',
      alt: 'Drawing on a slide in SlidePilot',
    },
    curtain: { title: 'Curtain', text: 'A black screen for breaks and questions.' },
    navigator: { title: 'Slide overview', text: 'Jump to any slide with one click.' },
    notes: { title: 'Notes', text: 'Formatted notes for every slide.' },
  },
  latex: {
    eyebrow: 'Made for LaTeX',
    title: 'Built for Beamer. Great with any PDF.',
    notes: {
      title: 'Beamer notes on the second screen',
      text: 'With <code>show notes on second screen</code> you see the notes and your audience only the slides.',
      you: 'You',
      audience: 'Audience',
    },
    reload: {
      title: 'Reloads when you compile',
      text: 'The PDF updates and you stay on the same slide.',
      status: 'Reloaded · slide 12',
    },
    links: {
      title: 'Links and videos',
      text: 'Internal links, web links and embedded videos just work.',
    },
  },
  remote: {
    eyebrow: 'Remote control',
    title: 'Your iPhone is the remote.',
    lead: 'Control the presentation on your Mac or iPad from another device. No extra app needed.',
    points: [
      { title: 'Pair once', text: 'After that, your devices connect on their own.' },
      { title: 'Local and encrypted', text: 'Directly over your network. No server, no account.' },
      { title: 'All in your hand', text: 'Slides, notes and timer on your phone.' },
    ],
    pairing: 'Pairing code',
    alt: 'SlidePilot on iPhone controlling a presentation',
  },
  devices: {
    eyebrow: 'One app, every device',
    title: 'For Mac, iPad and iPhone.',
    mac: { title: 'Mac', text: 'Keyboard shortcuts, clickers and external displays.' },
    ipad: { title: 'iPad', text: 'Cable or AirPlay, drawing with Apple Pencil.' },
    iphone: { title: 'iPhone', text: 'Present from your pocket or use it as a remote.' },
  },
  privacy: {
    title: 'Your slides stay yours.',
    text: 'No account, no tracking, no server. Everything stays on your devices.',
  },
  pricing: {
    eyebrow: 'Download',
    title: 'Open to everyone. Fairly funded.',
    lead: 'Get SlidePilot from the App Store or download the Mac app straight from GitHub. The source code is open.',
    source: 'View on GitHub',
    appStore: {
      label: 'App Store',
      price: 'Try it free',
      priceNote: 'Pro as a one-time purchase',
      text: 'Everything on your own screen is unlimited. Try the audience output and remote control for 3 minutes each, Pro unlocks them for good.',
      items: ['Mac, iPad and iPhone', 'Automatic updates', 'Family Sharing'],
      cta: 'Get it on the App Store',
      recommended: 'Recommended',
    },
    github: {
      label: 'GitHub',
      price: 'Free for Mac',
      priceNote: 'no limits',
      text: 'The Mac app with every feature. You install and update it yourself.',
      items: ['Every feature', 'Manual updates'],
      cta: 'Download from GitHub',
    },
    support: {
      title: 'Support SlidePilot:',
      buy: 'Buy Pro',
      donate: 'Donate',
      share: 'Tell others',
      shareText: 'SlidePilot – the PDF presentation app for Mac, iPad and iPhone, made for LaTeX Beamer.',
      copied: 'Link copied',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions & answers',
    groups: [
      {
        title: 'About SlidePilot',
        items: [
          {
            q: 'What is SlidePilot?',
            a: 'A presenter app for PDF slides. The audience sees your slides; you see the current and next slide, your notes and the time.',
          },
          {
            q: 'Do my slides have to be made with LaTeX Beamer?',
            a: 'No. SlidePilot works with any PDF. Beamer decks just get extras, such as notes on the second screen.',
          },
          {
            q: 'Which devices does SlidePilot run on?',
            a: 'Mac with macOS 26, iPad with iPadOS 26 and iPhone with iOS 26 or later.',
          },
          {
            q: 'Is SlidePilot a native app?',
            a: 'Yes. It is written in Swift and SwiftUI and uses the system’s own controls on every platform.',
          },
        ],
      },
      {
        title: 'Price & support',
        items: [
          {
            q: 'How much does SlidePilot cost?',
            a: 'SlidePilot is open source and has two ways to get it:<br><strong>GitHub:</strong> the Mac app is free with every feature unlimited. You install and update it yourself.<br><strong>App Store:</strong> free on Mac, iPad and iPhone. Presenting to an audience screen and remote control can be tried for 3 minutes at a time; a one-time in-app purchase (SlidePilot Pro) unlocks them on all your devices, with automatic updates and Family Sharing.',
          },
          {
            q: 'What does the 3-minute trial mean?',
            a: 'In the App Store version without Pro, each audience output or remote session runs for 3 minutes. Everything on your own screen keeps working without a limit.',
          },
          {
            q: 'How can I support SlidePilot?',
            a: 'Buy SlidePilot Pro in the App Store, <a href="{donate}">make a donation</a>, or simply tell others about SlidePilot. Thank you!',
          },
        ],
      },
      {
        title: 'Using SlidePilot',
        items: [
          {
            q: 'How does the remote control work?',
            a: 'Install SlidePilot on both devices, open Remote in the settings and confirm the same code on both screens. The devices connect directly over the local network.',
          },
          {
            q: 'Does SlidePilot collect any data?',
            a: 'No. There is no account, no analytics and no server. Your PDFs, notes and drawings stay on your devices.',
          },
          {
            q: 'Which languages does SlidePilot support?',
            a: 'English, German and French.',
          },
          {
            q: 'Where can I get help or report a bug?',
            a: `Have a look at the <a href="${DOCS_URL}">documentation</a>, open an issue on <a href="${GITHUB_ISSUES_URL}">GitHub</a> or write to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
          },
          {
            q: 'Is SlidePilot open source?',
            a: `Yes, under the GNU General Public License v3.0. The source code is on <a href="${GITHUB_URL}">GitHub</a>.`,
          },
        ],
      },
    ],
  },
  cta: {
    title: 'Ready for your next talk?',
    text: 'Download SlidePilot and try it with your own slides.',
  },
  footer: {
    tagline: 'The PDF presenter for Mac, iPad and iPhone.',
    product: 'Product',
    resources: 'Resources',
    legal: 'Legal',
    contact: 'Contact',
    docs: 'Documentation',
    github: 'GitHub',
    changelog: 'Changelog',
    issues: 'Report an issue',
    imprint: 'Imprint',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    rights: 'All rights reserved.',
  },
  donate: {
    metaTitle: 'Donate – SlidePilot',
    metaDescription: 'Support the development of SlidePilot with a donation.',
    eyebrow: 'Support SlidePilot',
    title: 'Keep SlidePilot flying.',
    lead: 'SlidePilot is developed in free time and is open source. If it helps you on stage, a small donation helps keep it alive and free for everyone.',
    button: 'Donate with PayPal',
    secure: 'You will be forwarded to PayPal. Any amount is welcome.',
    whereTitle: 'Where your donation goes',
    where: [
      { title: 'Development', text: 'New features, bug fixes and updates for new versions of macOS, iPadOS and iOS.' },
      { title: 'Running costs', text: 'Apple Developer Program, domain and testing devices.' },
      { title: 'Staying free', text: 'The free Mac download on GitHub stays free and without limits.' },
    ],
    otherTitle: 'Other ways to help',
    other: [
      { title: 'Buy SlidePilot Pro', text: 'Unlock Pro in the App Store on Mac, iPad and iPhone.', cta: 'App Store' },
      { title: 'Tell others', text: 'Recommend SlidePilot to colleagues, students and friends.', cta: 'Copy link' },
      { title: 'Contribute', text: 'Report bugs, suggest ideas or send a pull request.', cta: 'GitHub' },
    ],
    thanks: 'Thank you for your support!',
  },
  legal: {
    imprint: 'Imprint',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    translationNote: 'This is a translation for your convenience. Only the German version is legally binding.',
    germanVersion: 'German version',
    updated: 'Last updated',
  },
  notFound: {
    title: 'Page not found',
    text: 'This slide does not exist. Maybe it was removed in the last compile.',
    back: 'Back to the start',
  },
};

export default en;
export type Dict = typeof en;
