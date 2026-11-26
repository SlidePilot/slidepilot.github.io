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
    badge: 'SlidePilot 2 · jetzt für Mac, iPad und iPhone',
    title: 'Präsentiere deine Folien.<br>Behalte die Kontrolle.',
    subtitle:
      'Die Präsentations-App für PDF-Folien, gemacht für LaTeX Beamer. Notizen, Timer, Zeiger und Zeichnen auf jedem Gerät, mit eingebauter Fernsteuerung.',
    appStoreSmall: 'Laden im',
    appStoreBig: 'App Store',
    donate: 'Spenden',
    github: 'oder für Mac von GitHub laden',
    note: 'Kostenloser Download · Open Source · macOS 26, iPadOS 26, iOS 26',
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
    lead: 'Das Publikum sieht deine Folien. Du siehst, was als Nächstes kommt, deine Notizen und die Zeit. Ohne jede Ablenkung.',
    presenter: {
      title: 'Dein Layout, wie du es willst',
      text: 'Kombiniere aktuelle Folie, nächste Folie und Notizen nebeneinander, genau so, wie es für dich passt.',
    },
    timer: {
      title: 'Die Zeit immer im Blick',
      text: 'Uhr, Stoppuhr oder ein Countdown, der dich zweimal warnt, bevor die Zeit abläuft.',
    },
    pointer: {
      title: 'Zeig, worauf es ankommt',
      text: 'Punkt, Kreis, Zielscheibe, Mauszeiger oder dein eigenes Design auf dem Bildschirm des Publikums.',
    },
    drawing: {
      title: 'Zeichne auf deinen Folien',
      text: 'Markiere live mit Maus, Finger oder Apple Pencil. Behalte die Zeichnungen oder exportiere sie als PDF.',
      alt: 'Zeichnen auf einer Folie in SlidePilot',
    },
    curtain: {
      title: 'Pause mit Vorhang',
      text: 'Schwarzer oder weißer Bildschirm mit einem Klick, für Fragen oder eine Pause.',
    },
    navigator: {
      title: 'Spring zu jeder Folie',
      text: 'Die Folienübersicht zeigt Miniaturen aller Seiten. Ein Klick und du bist da.',
    },
    notes: {
      title: 'Notizen zu jeder Folie',
      text: 'Schreibe formatierte Notizen mit Listen. Sie bleiben bei deinem PDF.',
    },
  },
  latex: {
    eyebrow: 'Gemacht für LaTeX',
    title: 'Gebaut für Beamer. Stark mit jedem PDF.',
    lead: 'SlidePilot versteht, wie LaTeX-Präsentationen entstehen. So bleibt dein Workflow so schnell wie dein Compiler.',
    notes: {
      title: 'Beamer-Notizen auf dem zweiten Bildschirm',
      text: 'Nutze <code>\\setbeameroption{show notes on second screen}</code>. SlidePilot zeigt dir die Notizhälfte und dem Publikum die Folienhälfte, erkannt am PDF-Schlüsselwort <code>SP-Right</code>, <code>SP-Left</code>, <code>SP-Top</code> oder <code>SP-Bottom</code>.',
      you: 'Du',
      audience: 'Publikum',
    },
    reload: {
      title: 'Lädt neu, wenn du kompilierst',
      text: 'Tippfehler korrigieren, latexmk starten – SlidePilot lädt das PDF neu und bleibt auf derselben Folie.',
      status: 'Neu geladen · weiter auf Folie 12',
    },
    links: {
      title: 'Links und Videos funktionieren',
      text: 'Interne Links, Weblinks und mit Beamer eingebettete Videos funktionieren im Vortrag.',
    },
  },
  remote: {
    eyebrow: 'Fernsteuerung',
    title: 'Jedes Gerät ist eine Fernbedienung.',
    lead: 'Steuere die Präsentation auf Mac oder iPad mit deinem iPhone oder einem anderen Gerät mit SlidePilot. Ohne zusätzliche App.',
    points: [
      { title: 'Einmal koppeln', text: 'Bestätige denselben Code auf beiden Bildschirmen. Vertraute Geräte verbinden sich von selbst.' },
      { title: 'Verschlüsselt & lokal', text: 'Die Geräte sprechen direkt über dein lokales Netzwerk. Kein Server, kein Konto.' },
      { title: 'Sieh, was zählt', text: 'Folien, Notizen und Timer auf deinem Handy, während du dich im Raum bewegst.' },
    ],
    pairing: 'Kopplungscode',
    alt: 'SlidePilot auf dem iPhone steuert eine Präsentation',
  },
  devices: {
    eyebrow: 'Eine App, jedes Gerät',
    title: 'Zu Hause auf Mac, iPad und iPhone.',
    lead: 'Eine native App für jede Plattform, gestaltet für macOS 26, iPadOS 26 und iOS 26.',
    mac: { title: 'Mac', text: 'Referenten- und Präsentationsfenster, Tastenkürzel und Presenter.' },
    ipad: { title: 'iPad', text: 'Externer Bildschirm per Kabel oder AirPlay, Zeichnen mit Apple Pencil.' },
    iphone: { title: 'iPhone', text: 'Präsentiere aus der Hosentasche oder nutze es als Fernbedienung. Bereit für iPhone Duo.' },
    extras: [
      'Externer Bildschirm & AirPlay',
      'Tastenkürzel & Presenter',
      'VoiceOver & dynamische Schrift',
      'Hell- und Dunkelmodus',
      'Deutsch, Englisch, Französisch',
      'Mehrere PDFs gleichzeitig',
    ],
  },
  privacy: {
    title: 'Deine Folien bleiben deine.',
    text: 'Kein Konto, kein Tracking, keine Datenerfassung. Deine PDFs, Notizen und Zeichnungen verlassen nie deine Geräte.',
    items: ['Kein Konto', 'Kein Tracking', 'Kein Server', 'Open Source'],
  },
  pricing: {
    eyebrow: 'Preise',
    title: 'Kostenlos. Offen. Fair.',
    lead: 'SlidePilot ist Open Source und kostenlos. Du entscheidest, wie du die App bekommst und wie du sie unterstützt.',
    github: {
      label: 'GitHub',
      title: 'Gratis-Download für Mac',
      price: 'Kostenlos',
      text: 'Die komplette Mac-App ohne jede Einschränkung. Lade sie von GitHub und installiere sie selbst.',
      items: ['Alle Funktionen, unbegrenzt', 'Nur für Mac', 'Updates: neue Versionen selbst laden'],
      cta: 'Von GitHub laden',
    },
    appStore: {
      label: 'App Store',
      title: 'SlidePilot mit Pro',
      price: 'Kostenlos + einmalig Pro',
      text: 'Kostenlos auf Mac, iPad und iPhone. Alles auf deinem eigenen Bildschirm ist unbegrenzt. Präsentieren für das Publikum und die Fernsteuerung kannst du jeweils 3 Minuten testen.',
      items: ['Ein Kauf für Mac, iPad und iPhone', 'Automatische Updates über den App Store', 'Inklusive Familienfreigabe'],
      cta: 'Im App Store laden',
      recommended: 'Am einfachsten',
    },
    openSource: {
      label: 'Open Source',
      title: 'Offen entwickelt',
      price: 'GPL-3.0',
      text: 'Der komplette Quellcode liegt auf GitHub. Lies ihn, baue ihn, verbessere ihn.',
      items: ['Kein Tracking, keine Werbung', 'Issues und Ideen willkommen', 'Pull Requests willkommen'],
      cta: 'Auf GitHub ansehen',
    },
    support: {
      title: 'Du möchtest SlidePilot unterstützen?',
      text: 'Kaufe Pro im App Store, spende oder erzähl einfach deinen Kolleg:innen davon. Jeder Beitrag hilft, SlidePilot am Leben zu halten.',
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
