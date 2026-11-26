import { CONTACT_EMAIL, DOCS_URL, GITHUB_ISSUES_URL, GITHUB_URL } from '../config';
import type { Dict } from './en';

const de: Dict = {
  lang: 'de',
  meta: {
    title: 'SlidePilot – PDF-Präsentationen auf Mac, iPad und iPhone',
    description:
      'Präsentiere PDF-Folien mit Notizen, Timer, Zeiger und Zeichnen. Gemacht für LaTeX Beamer. Fernsteuerung von jedem Gerät. Kostenlos und Open Source.',
  },
  nav: {
    features: 'Funktionen',
    remote: 'Fernsteuerung',
    pricing: 'Preise',
    faq: 'FAQ',
    docs: 'Doku',
    donate: 'Spenden',
    download: 'Download',
    menu: 'Menü',
    language: 'Sprache',
  },
  hero: {
    title: 'Präsentiere deine Folien.<br>Behalte die Kontrolle.',
    appStoreSmall: 'Laden im',
    appStoreBig: 'App Store',
    donate: 'Spenden',
    github: 'oder für Mac von GitHub laden',
  },
  showcase: {
    alt: 'Referentenansicht von SlidePilot mit Timer, Uhr, Notizen, aktueller und nächster Folie',
  },
  illo: {
    current: 'Aktuell',
    next: 'Nächste',
    notes: 'Notizen',
    countdown: 'Countdown',
    noteTitle: 'Intro',
    noteIntro: 'Gastgebern danken',
    noteItems: ['Keplers erstes Gesetz', 'Ellipse zeigen', 'Publikum fragen'],
  },
  features: {
    eyebrow: 'Referentenansicht',
    title: 'Alles, was du auf der Bühne brauchst.',
    lead: 'Das Publikum sieht deine Folien. Du siehst alles andere.',
    presenter: { title: 'Dein Layout', text: 'Aktuelle Folie, nächste Folie und Notizen – angeordnet, wie du willst.' },
    timer: { title: 'Zeit im Blick', text: 'Ein Countdown, der dich rechtzeitig warnt.' },
    pointer: { title: 'Zeiger', text: 'Punkt, Kreis oder Mauszeiger für das Publikum.' },
    drawing: {
      title: 'Zeichnen auf Folien',
      text: 'Mit Maus, Finger oder Apple Pencil. Auf Wunsch als PDF exportieren.',
      alt: 'Zeichnen auf einer Folie in SlidePilot',
    },
    curtain: { title: 'Vorhang', text: 'Schwarzer Bildschirm für Pausen und Fragen.' },
    navigator: { title: 'Folienübersicht', text: 'Mit einem Klick zu jeder Folie.' },
    notes: { title: 'Notizen', text: 'Formatierte Notizen zu jeder Folie.' },
  },
  latex: {
    eyebrow: 'Gemacht für LaTeX',
    title: 'Gebaut für Beamer. Stark mit jedem PDF.',
    notes: {
      title: 'Beamer-Notizen auf dem zweiten Bildschirm',
      text: 'Mit <code>show notes on second screen</code> siehst du die Notizen, das Publikum nur die Folien.',
      you: 'Du',
      audience: 'Publikum',
    },
    reload: {
      title: 'Lädt beim Kompilieren neu',
      text: 'Das PDF aktualisiert sich, du bleibst auf derselben Folie.',
      status: 'Neu geladen · Folie 12',
    },
    links: {
      title: 'Links und Videos',
      text: 'Interne Links, Weblinks und eingebettete Videos funktionieren.',
    },
  },
  remote: {
    eyebrow: 'Fernsteuerung',
    title: 'Dein iPhone ist die Fernbedienung.',
    lead: 'Steuere die Präsentation auf Mac oder iPad mit einem anderen Gerät. Ohne zusätzliche App.',
    points: [
      { title: 'Einmal koppeln', text: 'Danach verbinden sich die Geräte von selbst.' },
      { title: 'Lokal und verschlüsselt', text: 'Direkt über dein Netzwerk. Kein Server, kein Konto.' },
      { title: 'Alles in der Hand', text: 'Folien, Notizen und Timer auf deinem Handy.' },
    ],
    pairing: 'Kopplungscode',
    alt: 'SlidePilot auf dem iPhone steuert eine Präsentation',
  },
  devices: {
    eyebrow: 'Eine App, jedes Gerät',
    title: 'Für Mac, iPad und iPhone.',
    mac: { title: 'Mac', text: 'Tastenkürzel, Presenter und externe Bildschirme.' },
    ipad: { title: 'iPad', text: 'Per Kabel oder AirPlay, Zeichnen mit Apple Pencil.' },
    iphone: { title: 'iPhone', text: 'Präsentieren aus der Hosentasche oder fernsteuern.' },
  },
  privacy: {
    title: 'Deine Folien bleiben deine.',
    text: 'Kein Konto, kein Tracking, kein Server. Alles bleibt auf deinen Geräten.',
  },
  pricing: {
    eyebrow: 'Preise',
    title: 'Zwei Wege zu SlidePilot.',
    lead: 'Beide sind kostenlos und Open Source.',
    source: 'Quellcode auf GitHub',
    appStore: {
      label: 'App Store',
      price: 'Kostenlos',
      priceNote: '+ einmalig Pro',
      text: 'Alles auf deinem Bildschirm ohne Limit. Publikum und Fernsteuerung kannst du 3 Minuten testen, Pro schaltet sie frei.',
      items: ['Mac, iPad und iPhone', 'Automatische Updates', 'Familienfreigabe'],
      cta: 'Im App Store laden',
      recommended: 'Empfohlen',
    },
    github: {
      label: 'GitHub',
      price: 'Kostenlos',
      priceNote: 'ohne Limit',
      text: 'Die Mac-App mit allen Funktionen. Installation und Updates machst du selbst.',
      items: ['Nur für Mac', 'Updates selbst laden'],
      cta: 'Von GitHub laden',
    },
    support: {
      title: 'SlidePilot unterstützen:',
      buy: 'Pro kaufen',
      donate: 'Spenden',
      share: 'Weitererzählen',
      shareText: 'SlidePilot – die PDF-Präsentations-App für Mac, iPad und iPhone, gemacht für LaTeX Beamer.',
      copied: 'Link kopiert',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Fragen & Antworten',
    groups: [
      {
        title: 'Über SlidePilot',
        items: [
          {
            q: 'Was ist SlidePilot?',
            a: 'Eine Präsentations-App für PDF-Folien. Das Publikum sieht deine Folien, du siehst aktuelle und nächste Folie, deine Notizen und die Zeit.',
          },
          {
            q: 'Müssen meine Folien mit LaTeX Beamer erstellt sein?',
            a: 'Nein. SlidePilot funktioniert mit jedem PDF. Beamer-Präsentationen bekommen nur Extras, etwa Notizen auf dem zweiten Bildschirm.',
          },
          {
            q: 'Auf welchen Geräten läuft SlidePilot?',
            a: 'Mac mit macOS 26, iPad mit iPadOS 26 und iPhone mit iOS 26 oder neuer.',
          },
          {
            q: 'Ist SlidePilot eine native App?',
            a: 'Ja. Sie ist in Swift und SwiftUI geschrieben und nutzt auf jeder Plattform die Bedienelemente des Systems.',
          },
        ],
      },
      {
        title: 'Preis & Unterstützung',
        items: [
          {
            q: 'Wie viel kostet SlidePilot?',
            a: 'SlidePilot ist Open Source und es gibt zwei Wege:<br><strong>GitHub:</strong> Die Mac-App ist kostenlos, mit allen Funktionen ohne Limit. Installation und Updates machst du selbst.<br><strong>App Store:</strong> kostenlos auf Mac, iPad und iPhone. Präsentieren für das Publikum und die Fernsteuerung kannst du jeweils 3 Minuten testen; ein einmaliger In-App-Kauf (SlidePilot Pro) schaltet sie auf all deinen Geräten frei, mit automatischen Updates und Familienfreigabe.',
          },
          {
            q: 'Was bedeutet die 3-Minuten-Testversion?',
            a: 'In der App-Store-Version ohne Pro läuft jede Ausgabe für das Publikum und jede Fernsteuerung 3 Minuten. Alles auf deinem eigenen Bildschirm funktioniert ohne Limit.',
          },
          {
            q: 'Wie kann ich SlidePilot unterstützen?',
            a: 'Kaufe SlidePilot Pro im App Store, <a href="{donate}">spende</a> oder erzähl einfach anderen von SlidePilot. Danke!',
          },
        ],
      },
      {
        title: 'SlidePilot nutzen',
        items: [
          {
            q: 'Wie funktioniert die Fernsteuerung?',
            a: 'Installiere SlidePilot auf beiden Geräten, öffne in den Einstellungen „Fernsteuerung“ und bestätige auf beiden Bildschirmen denselben Code. Die Geräte verbinden sich direkt über das lokale Netzwerk.',
          },
          {
            q: 'Sammelt SlidePilot Daten?',
            a: 'Nein. Es gibt kein Konto, keine Analyse und keinen Server. Deine PDFs, Notizen und Zeichnungen bleiben auf deinen Geräten.',
          },
          {
            q: 'Welche Sprachen unterstützt SlidePilot?',
            a: 'Deutsch, Englisch und Französisch.',
          },
          {
            q: 'Wo bekomme ich Hilfe oder melde einen Fehler?',
            a: `Schau in die <a href="${DOCS_URL}">Dokumentation</a>, eröffne ein Issue auf <a href="${GITHUB_ISSUES_URL}">GitHub</a> oder schreib an <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
          },
          {
            q: 'Ist SlidePilot Open Source?',
            a: `Ja, unter der GNU General Public License v3.0. Der Quellcode liegt auf <a href="${GITHUB_URL}">GitHub</a>.`,
          },
        ],
      },
    ],
  },
  cta: {
    title: 'Bereit für deinen nächsten Vortrag?',
    text: 'Lade SlidePilot und probier es mit deinen eigenen Folien aus.',
  },
  footer: {
    tagline: 'Die PDF-Präsentations-App für Mac, iPad und iPhone.',
    product: 'Produkt',
    resources: 'Ressourcen',
    legal: 'Rechtliches',
    contact: 'Kontakt',
    docs: 'Dokumentation',
    github: 'GitHub',
    changelog: 'Changelog',
    issues: 'Fehler melden',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    rights: 'Alle Rechte vorbehalten.',
  },
  donate: {
    metaTitle: 'Spenden – SlidePilot',
    metaDescription: 'Unterstütze die Entwicklung von SlidePilot mit einer Spende.',
    eyebrow: 'SlidePilot unterstützen',
    title: 'Halte SlidePilot in der Luft.',
    lead: 'SlidePilot wird in der Freizeit entwickelt und ist Open Source. Wenn dir die App auf der Bühne hilft, sorgt eine kleine Spende dafür, dass sie weiterlebt und für alle frei bleibt.',
    button: 'Mit PayPal spenden',
    secure: 'Du wirst zu PayPal weitergeleitet. Jeder Betrag ist willkommen.',
    whereTitle: 'Wohin deine Spende geht',
    where: [
      { title: 'Entwicklung', text: 'Neue Funktionen, Fehlerbehebungen und Updates für neue Versionen von macOS, iPadOS und iOS.' },
      { title: 'Laufende Kosten', text: 'Apple Developer Program, Domain und Testgeräte.' },
      { title: 'Frei bleiben', text: 'Der Gratis-Download für Mac auf GitHub bleibt kostenlos und ohne Limit.' },
    ],
    otherTitle: 'Weitere Wege zu helfen',
    other: [
      { title: 'SlidePilot Pro kaufen', text: 'Schalte Pro im App Store auf Mac, iPad und iPhone frei.', cta: 'App Store' },
      { title: 'Weitererzählen', text: 'Empfiehl SlidePilot Kolleg:innen, Studierenden und Freund:innen.', cta: 'Link kopieren' },
      { title: 'Mitmachen', text: 'Melde Fehler, schlage Ideen vor oder schick einen Pull Request.', cta: 'GitHub' },
    ],
    thanks: 'Danke für deine Unterstützung!',
  },
  legal: {
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    translationNote: '',
    germanVersion: 'Deutsche Fassung',
    updated: 'Stand',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Folie gibt es nicht. Vielleicht ist sie beim letzten Kompilieren verschwunden.',
    back: 'Zur Startseite',
  },
};

export default de;
