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
    pricing: 'Pricing',
    faq: 'FAQ',
    docs: 'Docs',
    donate: 'Donate',
    download: 'Download',
    menu: 'Menu',
    language: 'Language',
  },
  hero: {
    badge: 'SlidePilot 2 · now on Mac, iPad and iPhone',
    title: 'Present your slides.<br>Stay in control.',
    subtitle:
      'The presenter for PDF slides, made for LaTeX Beamer. Notes, timer, pointer and drawing on every device, with remote control built in.',
    appStoreSmall: 'Download on the',
    appStoreBig: 'App Store',
    donate: 'Donate',
    github: 'or download for Mac from GitHub',
    note: 'Free download · Open source · macOS 26, iPadOS 26, iOS 26',
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
    lead: 'The audience sees your slides. You see what comes next, your notes and the time. Without a single distraction.',
    presenter: {
      title: 'Your layout, your way',
      text: 'Combine current slide, next slide and notes side by side, exactly the way you like.',
    },
    timer: {
      title: 'Never lose track of time',
      text: 'Clock, stopwatch or a countdown that warns you twice before the time is up.',
    },
    pointer: {
      title: 'Point at what matters',
      text: 'Show a dot, circle, target, cursor or your own design on the audience screen.',
    },
    drawing: {
      title: 'Draw on your slides',
      text: 'Annotate live with mouse, finger or Apple Pencil. Keep the drawings or export them as PDF.',
      alt: 'Drawing on a slide in SlidePilot',
    },
    curtain: {
      title: 'Pause with a curtain',
      text: 'Black or white screen in one click, for questions or a break.',
    },
    navigator: {
      title: 'Jump anywhere',
      text: 'The slide navigator shows thumbnails of every page. One click and you are there.',
    },
    notes: {
      title: 'Notes for every slide',
      text: 'Write rich-text notes, with lists and formatting. They stay with your PDF.',
    },
  },
  latex: {
    eyebrow: 'Made for LaTeX',
    title: 'Built for Beamer. Great with any PDF.',
    lead: 'SlidePilot understands how LaTeX decks are made, so your workflow stays as fast as your compiler.',
    notes: {
      title: 'Beamer notes on the second screen',
      text: 'Use <code>\\setbeameroption{show notes on second screen}</code>. SlidePilot shows you the notes half and the audience the slide half, detected from the PDF keyword <code>SP-Right</code>, <code>SP-Left</code>, <code>SP-Top</code> or <code>SP-Bottom</code>.',
      you: 'You',
      audience: 'Audience',
    },
    reload: {
      title: 'Reloads when you recompile',
      text: 'Fix a typo, run latexmk, and SlidePilot reloads the PDF and stays on the same slide.',
      status: 'Reloaded · still on slide 12',
    },
    links: {
      title: 'Links and videos just work',
      text: 'Internal links, web links and videos embedded with Beamer work during the talk.',
    },
  },
  remote: {
    eyebrow: 'Remote control',
    title: 'Every device is a remote.',
    lead: 'Control the presentation on your Mac or iPad from your iPhone, or from any other device with SlidePilot. No extra app needed.',
    points: [
      { title: 'Pair once', text: 'Confirm the same code on both screens. Trusted devices reconnect by themselves.' },
      { title: 'Encrypted & local', text: 'Devices talk directly over your local network. No server, no account.' },
      { title: 'See what matters', text: 'Slides, notes and timer on your phone, while you walk around the room.' },
    ],
    pairing: 'Pairing code',
    alt: 'SlidePilot on iPhone, controlling a presentation',
  },
  devices: {
    eyebrow: 'One app, every device',
    title: 'At home on Mac, iPad and iPhone.',
    lead: 'A native app for each platform, designed for macOS 26, iPadOS 26 and iOS 26.',
    mac: { title: 'Mac', text: 'Presenter and presentation window, keyboard shortcuts and clickers.' },
    ipad: { title: 'iPad', text: 'External display by cable or AirPlay, drawing with Apple Pencil.' },
    iphone: { title: 'iPhone', text: 'Present from your pocket or use it as a remote. Ready for iPhone Duo.' },
    extras: [
      'External display & AirPlay',
      'Keyboard shortcuts & clickers',
      'VoiceOver & Dynamic Type',
      'Light and dark mode',
      'English, German, French',
      'Several PDFs at once',
    ],
  },
  privacy: {
    title: 'Your slides stay yours.',
    text: 'No account, no tracking, no data collected. Your PDFs, notes and drawings never leave your devices.',
    items: ['No account', 'No tracking', 'No server', 'Open source'],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Free. Open. Fair.',
    lead: 'SlidePilot is open source and free to download. You decide how you get it and how you support it.',
    github: {
      label: 'GitHub',
      title: 'Free download for Mac',
      price: 'Free',
      text: 'The full Mac app, without any limits. Download it from GitHub and install it yourself.',
      items: ['Every feature, unlimited', 'Mac only', 'Updates: download new versions yourself'],
      cta: 'Download from GitHub',
    },
    appStore: {
      label: 'App Store',
      title: 'SlidePilot with Pro',
      price: 'Free + one-time Pro',
      text: 'Free on Mac, iPad and iPhone. Everything on your own screen is unlimited. Presenting to an audience and remote control can be tried for 3 minutes at a time.',
      items: ['One purchase for Mac, iPad and iPhone', 'Automatic updates from the App Store', 'Family Sharing included'],
      cta: 'Get it on the App Store',
      recommended: 'Easiest',
    },
    openSource: {
      label: 'Open source',
      title: 'Built in the open',
      price: 'GPL-3.0',
      text: 'The complete source code is on GitHub. Read it, build it, improve it.',
      items: ['No tracking, no ads', 'Issues and ideas welcome', 'Pull requests welcome'],
      cta: 'View on GitHub',
    },
    support: {
      title: 'Want to support SlidePilot?',
      text: 'Buy Pro in the App Store, make a donation, or simply tell your colleagues. Every bit helps keep SlidePilot alive.',
      buy: 'Buy Pro',
      donate: 'Donate',
      share: 'Tell others',
      shareText: 'SlidePilot – the PDF presenter for Mac, iPad and iPhone, made for LaTeX Beamer.',
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
