export type ResourceSlug = "blog" | "help" | "pos-guide" | "tse-guide" | "datev-guide";

export interface ResourceContent {
  slug: ResourceSlug;
  eyebrow: { en: string; de: string };
  title: { en: string; de: string };
  lede: { en: string; de: string };
  metaTitle: { en: string; de: string };
  metaDescription: { en: string; de: string };
  heroImage?: string;
  heroAlt?: { en: string; de: string };
  highlights?: { value: { en: string; de: string }; label: { en: string; de: string } }[];
  sections: {
    heading: { en: string; de: string };
    body: { en: string; de: string };
    bullets?: { en: string[]; de: string[] };
    image?: string;
    imageAlt?: { en: string; de: string };
  }[];
  faq: { q: { en: string; de: string }; a: { en: string; de: string } }[];
}

export const resources: Record<ResourceSlug, ResourceContent> = {
  blog: {
    slug: "blog",
    eyebrow: {
      en: "Knowledge",
      de: "Wissen",
    },
    title: {
      en: "Guides for running a restaurant in Germany.",
      de: "Ratgeber für die Gastronomie in Deutschland.",
    },
    lede: {
      en: "Practical articles on VAT, the receipt obligation, the cash book and online ordering — plus in-depth guides on choosing a POS, the TSE and DATEV.",
      de: "Praxis-Artikel zu Mehrwertsteuer, Bonpflicht, Kassenbuch und Online-Bestellung — dazu ausführliche Ratgeber zu Kassenwahl, TSE und DATEV.",
    },
    metaTitle: {
      en: "Guides: POS, TSE & DATEV for Restaurants | GastroPos",
      de: "Gastro-Ratgeber: Kasse, Steuern, TSE & DATEV | GastroPos",
    },
    metaDescription: {
      en: "Guides on choosing a POS system, the German TSE obligation (KassenSichV) and DATEV exports for restaurants, plus the GastroPos user manual.",
      de: "Ratgeber für Gastronomen: 7 % Mehrwertsteuer auf Speisen, Bonpflicht und E-Bon, Bewirtungsbeleg, Kassenbuch, Aufbewahrungsfristen, Webshop und QR-Bestellung.",
    },
    heroImage: "analytics-hero.webp",
    heroAlt: {
      en: "GastroPos analytics on a tablet",
      de: "GastroPos-Auswertungen auf dem Tablet",
    },
    highlights: [
      {
        value: {
          en: "POS guide",
          de: "Kassen-Ratgeber",
        },
        label: {
          en: "what to look for",
          de: "worauf es ankommt",
        },
      },
      {
        value: {
          en: "TSE guide",
          de: "TSE-Ratgeber",
        },
        label: {
          en: "KassenSichV explained",
          de: "KassenSichV erklärt",
        },
      },
      {
        value: {
          en: "DATEV guide",
          de: "DATEV-Ratgeber",
        },
        label: {
          en: "for you and your tax advisor",
          de: "für Sie und Ihren Steuerberater",
        },
      },
      {
        value: {
          en: "User manual",
          de: "Bedienungsanleitung",
        },
        label: {
          en: "every module, step by step",
          de: "jedes Modul, Schritt für Schritt",
        },
      },
    ],
    sections: [
      {
        heading: {
          en: "How to choose a POS system",
          de: "So wählen Sie das richtige Kassensystem",
        },
        body: {
          en: "Compliance, devices, payments, offline behaviour, total cost and support — the questions to ask before you sign. Read the guide under Resources → POS guide.",
          de: "Rechtssicherheit, Geräte, Zahlungen, Offline-Verhalten, Gesamtkosten und Support — die Fragen, die Sie vor Vertragsabschluss stellen sollten. Zum Ratgeber unter Ressourcen → Kassen-Ratgeber.",
        },
      },
      {
        heading: {
          en: "The TSE obligation explained",
          de: "Die TSE-Pflicht erklärt",
        },
        body: {
          en: "What KassenSichV, TSE and DSFinV-K mean, how a cloud TSE works and what you have to report to the tax office. Read the guide under Resources → TSE guide.",
          de: "Was KassenSichV, TSE und DSFinV-K bedeuten, wie eine Cloud-TSE funktioniert und was Sie dem Finanzamt melden müssen. Zum Ratgeber unter Ressourcen → TSE-Ratgeber.",
        },
      },
      {
        heading: {
          en: "DATEV for restaurants",
          de: "DATEV für die Gastronomie",
        },
        body: {
          en: "Charts of accounts, VAT rates for eat-in and takeaway, and what your tax advisor really needs from your till. Read the guide under Resources → DATEV guide.",
          de: "Kontenrahmen, Steuersätze für Im Haus und Außer Haus und was Ihr Steuerberater wirklich von Ihrer Kasse braucht. Zum Ratgeber unter Ressourcen → DATEV-Ratgeber.",
        },
      },
      {
        heading: {
          en: "The GastroPos user manual",
          de: "Die GastroPos-Bedienungsanleitung",
        },
        body: {
          en: "Every module explained with annotated screenshots — from taking orders to the Z-report. Open it under Resources → Help Center.",
          de: "Jedes Modul mit markierten Screenshots erklärt — von der Bestellaufnahme bis zum Z-Bericht. Zu finden unter Ressourcen → Hilfe-Center.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can I suggest a topic?",
          de: "Kann ich ein Thema vorschlagen?",
        },
        a: {
          en: "Yes — tell us via the contact page which question you would like answered.",
          de: "Ja — schreiben Sie uns über die Kontaktseite, welche Frage wir beantworten sollen.",
        },
      },
    ],
  },
  help: {
    slug: "help",
    eyebrow: { en: "Help Center", de: "Hilfe-Center" },
    title: { en: "Help Center.", de: "Hilfe-Center." },
    lede: {
      en: "Step-by-step guides, video walkthroughs and answers to the most common operator questions. Can't find it? Email info@gastropos.ai and we will get back to you as soon as possible on business days.",
      de: "Schritt-für-Schritt-Anleitungen, Video-Tutorials und Antworten auf die häufigsten Fragen. Nicht gefunden? Schreiben Sie an info@gastropos.ai — wir melden uns werktags so schnell wie möglich.",
    },
    metaTitle: {
      en: "Help Center — GastroPos POS Support",
      de: "Hilfe-Center — GastroPos Kassen-Support",
    },
    metaDescription: {
      en: "Get help with GastroPos: setup guides, hardware compatibility, TSE activation, DATEV exports and troubleshooting.",
      de: "Hilfe für GastroPos: Einrichtung, Hardware-Kompatibilität, TSE-Aktivierung, DATEV-Exporte und Fehlerbehebung.",
    },
    sections: [],
    faq: [],
  },
  "pos-guide": {
    slug: "pos-guide",
    eyebrow: {
      en: "Guide",
      de: "Ratgeber",
    },
    title: {
      en: "How to choose the right POS system.",
      de: "So wählen Sie das richtige Kassensystem.",
    },
    lede: {
      en: "What a modern POS system must do for a restaurant, café or takeaway in Germany — and the questions to ask every provider before you sign.",
      de: "Was ein modernes Kassensystem für Restaurant, Café oder Imbiss in Deutschland können muss — und welche Fragen Sie jedem Anbieter vor Vertragsabschluss stellen sollten.",
    },
    metaTitle: {
      en: "Guide: How to Choose a POS System for Restaurants | GastroPos",
      de: "Ratgeber: Das richtige Kassensystem für die Gastronomie | GastroPos",
    },
    metaDescription: {
      en: "Checklist for choosing a restaurant POS in Germany: TSE, devices, payments, offline behaviour, total cost, exports, support and contract terms.",
      de: "Checkliste für die Wahl einer Gastro-Kasse in Deutschland: TSE, Geräte, Zahlungen, Offline-Verhalten, Gesamtkosten, Exporte, Support und Vertragslaufzeit.",
    },
    heroImage: "pos-hero.webp",
    heroAlt: {
      en: "GastroPos on tablet, countertop POS and handheld",
      de: "GastroPos auf Tablet, Theken-Kasse und Handheld",
    },
    highlights: [
      {
        value: {
          en: "TSE",
          de: "TSE",
        },
        label: {
          en: "required for every electronic till",
          de: "Pflicht für jede elektronische Kasse",
        },
      },
      {
        value: {
          en: "Devices",
          de: "Geräte",
        },
        label: {
          en: "use what fits your venue",
          de: "was zu Ihrem Betrieb passt",
        },
      },
      {
        value: {
          en: "Total cost",
          de: "Gesamtkosten",
        },
        label: {
          en: "fees, add-ons and payments",
          de: "Gebühren, Zusatzfunktionen, Zahlungen",
        },
      },
      {
        value: {
          en: "Exports",
          de: "Exporte",
        },
        label: {
          en: "DATEV, GoBD, DSFinV-K",
          de: "DATEV, GoBD, DSFinV-K",
        },
      },
    ],
    sections: [
      {
        heading: {
          en: "1. Compliance is not optional",
          de: "1. Rechtssicherheit ist Pflicht",
        },
        body: {
          en: "In Germany every electronic till needs a certified TSE, must issue receipts and must be able to export DSFinV-K data. Ask how the TSE is provided (cloud or hardware), what it costs and how cancellations and Z-reports are handled.",
          de: "In Deutschland braucht jede elektronische Kasse eine zertifizierte TSE, muss Belege ausgeben und DSFinV-Daten exportieren können. Fragen Sie, wie die TSE bereitgestellt wird (Cloud oder Hardware), was sie kostet und wie Stornos und Z-Berichte funktionieren.",
        },
        bullets: {
          en: [
            "Cancellations as signed counter-receipts",
            "Automatic Z-reports",
            "Digital receipts",
          ],
          de: ["Stornos als signierte Gegenbelege", "Automatische Z-Berichte", "Digitale Belege"],
        },
      },
      {
        heading: {
          en: "2. The right devices for your workflow",
          de: "2. Die richtigen Geräte für Ihren Ablauf",
        },
        body: {
          en: "Table service needs mobile devices for the waiters, counter sales need a fast countertop till, the kitchen needs a display or printer. Check which devices are supported — tablets, phones, all-in-one POS terminals like Sunmi — and which printers and card terminals work.",
          de: "Tischservice braucht mobile Geräte für den Service, der Thekenverkauf eine schnelle Theken-Kasse, die Küche einen Monitor oder Drucker. Prüfen Sie, welche Geräte unterstützt werden — Tablets, Smartphones, All-in-one-Kassen wie Sunmi — und welche Drucker und Kartenterminals funktionieren.",
        },
        bullets: {
          en: [
            "Receipt printers via Wi-Fi, Bluetooth or USB",
            "Card terminals (ZVT) or SumUp/Zettle",
            "Kitchen display or kitchen printer",
          ],
          de: [
            "Bondrucker über WLAN, Bluetooth oder USB",
            "Kartenterminals (ZVT) oder SumUp/Zettle",
            "Küchenmonitor oder Küchendrucker",
          ],
        },
      },
      {
        heading: {
          en: "3. What happens when the internet drops?",
          de: "3. Was passiert, wenn das Internet ausfällt?",
        },
        body: {
          en: "Cloud systems need a connection for real-time sync between devices. Ask exactly what still works offline, how receipts are handled and how the TSE behaves until the connection returns.",
          de: "Cloud-Systeme brauchen eine Verbindung für die Echtzeit-Synchronisation zwischen Geräten. Fragen Sie genau, was offline noch funktioniert, wie Belege behandelt werden und wie sich die TSE verhält, bis die Verbindung zurück ist.",
        },
      },
      {
        heading: {
          en: "4. Calculate the total cost",
          de: "4. Rechnen Sie die Gesamtkosten",
        },
        body: {
          en: "Add up the monthly plan, paid add-ons (e.g. TSE), hardware, card payment fees and any commission on online orders over two to three years. A low base price with many paid extras is often the most expensive option.",
          de: "Addieren Sie Paketpreis, kostenpflichtige Zusatzfunktionen (z. B. TSE), Hardware, Kartengebühren und eventuelle Provisionen auf Online-Bestellungen über zwei bis drei Jahre. Ein niedriger Grundpreis mit vielen Extras ist oft die teuerste Variante.",
        },
      },
      {
        heading: {
          en: "5. Exports for your tax advisor",
          de: "5. Exporte für Ihren Steuerberater",
        },
        body: {
          en: "Ask which DATEV format is delivered, which charts of accounts are supported, whether a GoBD archive can be exported and whether your tax advisor can get a login of their own.",
          de: "Fragen Sie, welches DATEV-Format geliefert wird, welche Kontenrahmen unterstützt werden, ob ein GoBD-Archiv exportiert werden kann und ob Ihr Steuerberater einen eigenen Zugang bekommt.",
        },
      },
      {
        heading: {
          en: "6. Switching from your current system",
          de: "6. Wechsel vom bisherigen System",
        },
        body: {
          en: "Plan the switch on a quiet day. The menu is the biggest task — ask whether the provider can import it, e.g. from photos or a PDF. Keep exporting and archiving the data of your old system: receipts must be kept for eight years, books and organisational documents for ten.",
          de: "Planen Sie den Wechsel an einem ruhigen Tag. Die Speisekarte ist die größte Aufgabe — fragen Sie, ob der Anbieter sie importieren kann, z. B. aus Fotos oder einem PDF. Exportieren und archivieren Sie die Daten Ihres alten Systems: Belege müssen acht Jahre, Bücher und Organisationsunterlagen zehn Jahre aufbewahrt werden.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Cloud or local installation?",
          de: "Cloud oder lokale Installation?",
        },
        a: {
          en: "For most restaurants a cloud POS is the practical choice: automatic updates, access from anywhere and no server to maintain. Check what still works offline.",
          de: "Für die meisten Betriebe ist eine Cloud-Kasse die praktische Wahl: automatische Updates, Zugriff von überall und kein eigener Server. Prüfen Sie, was offline noch funktioniert.",
        },
      },
      {
        q: {
          en: "What is the most overlooked cost?",
          de: "Welche Kosten werden am häufigsten übersehen?",
        },
        a: {
          en: "Card payment fees and paid add-ons such as the TSE. Compare the all-in monthly cost, not just the plan price.",
          de: "Kartengebühren und kostenpflichtige Zusatzfunktionen wie die TSE. Vergleichen Sie die gesamten Monatskosten, nicht nur den Paketpreis.",
        },
      },
      {
        q: {
          en: "How does GastroPos import my menu?",
          de: "Wie importiert GastroPos meine Speisekarte?",
        },
        a: {
          en: "With the AI menu import: take photos of your menu or upload a PDF, check the suggested categories, products and prices and import them. Customer data and historical sales from other systems are not imported.",
          de: "Mit dem KI-Import: Fotografieren Sie Ihre Speisekarte oder laden Sie ein PDF hoch, prüfen Sie die vorgeschlagenen Kategorien, Produkte und Preise und importieren Sie sie. Kundendaten und alte Umsätze aus anderen Systemen werden nicht übernommen.",
        },
      },
    ],
  },
  "tse-guide": {
    slug: "tse-guide",
    eyebrow: {
      en: "Compliance",
      de: "Rechtssicherheit",
    },
    title: {
      en: "The TSE guide for German cash registers.",
      de: "Der TSE-Ratgeber für Kassen in Deutschland.",
    },
    lede: {
      en: "What KassenSichV, TSE and DSFinV-K mean for your business, what you have to report to the tax office — and how the TSE works in GastroPos.",
      de: "Was KassenSichV, TSE und DSFinV-K für Ihren Betrieb bedeuten, was Sie dem Finanzamt melden müssen — und wie die TSE in GastroPos funktioniert.",
    },
    metaTitle: {
      en: "TSE Guide: KassenSichV, DSFinV-K & Cloud TSE | GastroPos",
      de: "TSE-Ratgeber: KassenSichV, DSFinV-K & Cloud-TSE | GastroPos",
    },
    metaDescription: {
      en: "TSE guide for German restaurants: what the KassenSichV requires, cloud vs hardware TSE, DSFinV-K, receipt obligation, registration and how GastroPos uses the fiskaly cloud TSE.",
      de: "TSE-Ratgeber für die Gastronomie: Was die KassenSichV verlangt, Cloud- vs. Hardware-TSE, DSFinV-K, Belegausgabepflicht, Meldepflicht und wie GastroPos die fiskaly Cloud-TSE nutzt.",
    },
    heroImage: "tse-hero.webp",
    heroAlt: {
      en: "TSE settings and Z-reports in GastroPos",
      de: "TSE-Einstellungen und Z-Berichte in GastroPos",
    },
    highlights: [
      {
        value: {
          en: "KassenSichV",
          de: "KassenSichV",
        },
        label: {
          en: "TSE required for electronic tills",
          de: "TSE-Pflicht für elektronische Kassen",
        },
      },
      {
        value: {
          en: "fiskaly",
          de: "fiskaly",
        },
        label: {
          en: "certified cloud TSE",
          de: "zertifizierte Cloud-TSE",
        },
      },
      {
        value: {
          en: "15 € / month",
          de: "15 € / Monat",
        },
        label: {
          en: "TSE add-on in GastroPos",
          de: "TSE-Zusatzfunktion in GastroPos",
        },
      },
      {
        value: {
          en: "DSFinV-K",
          de: "DSFinV-K",
        },
        label: {
          en: "export for the tax audit",
          de: "Export für die Kassenprüfung",
        },
      },
    ],
    sections: [
      {
        heading: {
          en: "What is the TSE?",
          de: "Was ist die TSE?",
        },
        body: {
          en: "The technical security system (TSE) signs every transaction of your till so that records cannot be changed unnoticed. The KassenSichV requires a certified TSE for electronic cash registers in Germany.",
          de: "Die Technische Sicherheitseinrichtung (TSE) signiert jeden Vorgang Ihrer Kasse, damit Aufzeichnungen nicht unbemerkt verändert werden können. Die KassenSichV schreibt für elektronische Kassen in Deutschland eine zertifizierte TSE vor.",
        },
      },
      {
        heading: {
          en: "Cloud TSE instead of a USB stick",
          de: "Cloud-TSE statt USB-Stick",
        },
        body: {
          en: "A hardware TSE is a stick or card in the device; a cloud TSE signs online, so there is nothing to lose or replace. GastroPos uses the certified cloud TSE from fiskaly. You book it as an add-on (15 € per month), enter your company master data and activate it in the settings — no hardware needed.",
          de: "Eine Hardware-TSE steckt als Stick oder Karte im Gerät; eine Cloud-TSE signiert online, es gibt nichts zu verlieren oder auszutauschen. GastroPos nutzt die zertifizierte Cloud-TSE von fiskaly. Sie buchen sie als Zusatzfunktion (15 € pro Monat), hinterlegen Ihre Firmenstammdaten und aktivieren sie in den Einstellungen — ganz ohne Hardware.",
        },
        bullets: {
          en: [
            "Every receipt and cancellation signed",
            "TSE data printed on the receipt",
            "Austria: RKSV supported",
          ],
          de: [
            "Jeder Beleg und jedes Storno signiert",
            "TSE-Daten auf dem Beleg",
            "Österreich: RKSV unterstützt",
          ],
        },
        image: "tse-settings.webp",
        imageAlt: {
          en: "TSE settings in GastroPos",
          de: "TSE-Einstellungen in GastroPos",
        },
      },
      {
        heading: {
          en: "DSFinV-K: the data for the tax audit",
          de: "DSFinV-K: die Daten für die Kassenprüfung",
        },
        body: {
          en: "DSFinV-K is the standard format in which tax auditors read your till data. In GastroPos, an administrator requests the DSFinV-K export from fiskaly in the TSE settings; it is ready for download shortly afterwards. For a full tax audit, GastroPos also provides a GoBD archive.",
          de: "Die DSFinV-K ist das Standardformat, in dem Prüfer die Daten Ihrer Kasse lesen. In GastroPos fordert ein Administrator den DSFinV-K-Export in den TSE-Einstellungen bei fiskaly an; kurz darauf steht er zum Download bereit. Für die Betriebsprüfung liefert GastroPos zusätzlich ein GoBD-Archiv.",
        },
      },
      {
        heading: {
          en: "Receipt obligation",
          de: "Belegausgabepflicht",
        },
        body: {
          en: "You must offer a receipt for every sale — on paper or digitally. GastroPos prints receipts or shows a QR code for the digital receipt, which guests can also receive by email.",
          de: "Sie müssen zu jedem Verkauf einen Beleg anbieten — auf Papier oder digital. GastroPos druckt Belege oder zeigt einen QR-Code für den digitalen Beleg, den Gäste auch per E-Mail erhalten können.",
        },
      },
      {
        heading: {
          en: "Reporting and fines",
          de: "Meldepflicht und Bußgelder",
        },
        body: {
          en: "Electronic tills and their TSE must be reported to the tax office. Running a till without a working TSE can result in fines of up to 25,000 €. Use a certified system, activate the TSE and keep your Z-reports and exports ready.",
          de: "Elektronische Kassen und ihre TSE müssen dem Finanzamt gemeldet werden. Eine Kasse ohne funktionierende TSE kann Bußgelder von bis zu 25.000 € nach sich ziehen. Nutzen Sie ein zertifiziertes System, aktivieren Sie die TSE und halten Sie Z-Berichte und Exporte bereit.",
        },
        image: "pos-compliance.webp",
        imageAlt: {
          en: "Z-reports on a tablet",
          de: "Z-Berichte auf dem Tablet",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do I legally need a TSE?",
          de: "Brauche ich gesetzlich eine TSE?",
        },
        a: {
          en: "If you use an electronic cash register in Germany: yes, with very few exceptions.",
          de: "Wenn Sie in Deutschland eine elektronische Kasse nutzen: ja, mit sehr wenigen Ausnahmen.",
        },
      },
      {
        q: {
          en: "Is the TSE included in GastroPos?",
          de: "Ist die TSE in GastroPos enthalten?",
        },
        a: {
          en: "The fiskaly cloud TSE is a separate add-on for 15 € per month. DATEV and GoBD exports are included in every plan.",
          de: "Die fiskaly Cloud-TSE ist eine eigene Zusatzfunktion für 15 € pro Monat. DATEV- und GoBD-Exporte sind in jedem Paket enthalten.",
        },
      },
      {
        q: {
          en: "Is a cloud TSE accepted by the tax office?",
          de: "Akzeptiert das Finanzamt eine Cloud-TSE?",
        },
        a: {
          en: "Yes. Certified cloud TSEs such as fiskaly are approved and sign transactions just like hardware modules.",
          de: "Ja. Zertifizierte Cloud-TSEs wie fiskaly sind zugelassen und signieren Vorgänge genauso wie Hardware-Module.",
        },
      },
      {
        q: {
          en: "How long must I keep the records?",
          de: "Wie lange muss ich die Aufzeichnungen aufbewahren?",
        },
        a: {
          en: "Receipts (including till receipts and Z-reports) for eight years, books, inventories and organisational documents such as the till manual for ten years (§ 147 AO). Export your Z-reports, DATEV and GoBD data regularly and archive them — your tax advisor will tell you the details.",
          de: "Buchungsbelege (auch Kassenbons und Z-Berichte) acht Jahre, Bücher, Inventare und Organisationsunterlagen wie die Kassen-Bedienungsanleitung zehn Jahre (§ 147 AO). Exportieren Sie Z-Berichte, DATEV- und GoBD-Daten regelmäßig und archivieren Sie sie — Details klärt Ihr Steuerberater.",
        },
      },
    ],
  },
  "datev-guide": {
    slug: "datev-guide",
    eyebrow: {
      en: "Accounting",
      de: "Buchhaltung",
    },
    title: {
      en: "DATEV for restaurants: what your tax advisor needs.",
      de: "DATEV für die Gastronomie: Was Ihr Steuerberater braucht.",
    },
    lede: {
      en: "How the DATEV export from your till works, which chart of accounts fits, how VAT rates are handled and how your tax advisor gets the data — explained with GastroPos as the example.",
      de: "Wie der DATEV-Export aus Ihrer Kasse funktioniert, welcher Kontenrahmen passt, wie Steuersätze behandelt werden und wie Ihr Steuerberater an die Daten kommt — am Beispiel von GastroPos.",
    },
    metaTitle: {
      en: "DATEV Guide for Restaurants (SKR03/04/07) | GastroPos",
      de: "DATEV-Ratgeber für die Gastronomie (SKR03/04/07) | GastroPos",
    },
    metaDescription: {
      en: "DATEV guide for restaurants: booking batch (EXTF), SKR03/SKR04/SKR07, VAT rates for eat-in and takeaway, payment accounts, Z-report emails and the tax advisor login.",
      de: "DATEV-Ratgeber für die Gastronomie: Buchungsstapel (EXTF), SKR03/SKR04/SKR07, Steuersätze Im Haus und Außer Haus, Zahlungskonten, Z-Bericht-Mails und Steuerberater-Zugang.",
    },
    heroImage: "datev-hero.webp",
    heroAlt: {
      en: "DATEV export in GastroPos",
      de: "DATEV-Export in GastroPos",
    },
    highlights: [
      {
        value: {
          en: "EXTF",
          de: "EXTF",
        },
        label: {
          en: "DATEV booking batch",
          de: "DATEV-Buchungsstapel",
        },
      },
      {
        value: {
          en: "SKR03 · 04 · 07",
          de: "SKR03 · 04 · 07",
        },
        label: {
          en: "standard charts of accounts",
          de: "Standard-Kontenrahmen",
        },
      },
      {
        value: {
          en: "Per VAT rate",
          de: "Je Steuersatz",
        },
        label: {
          en: "own revenue accounts",
          de: "eigene Erlöskonten",
        },
      },
      {
        value: {
          en: "Z-report email",
          de: "Z-Bericht-Mail",
        },
        label: {
          en: "automatic to your advisor",
          de: "automatisch an den Steuerberater",
        },
      },
    ],
    sections: [
      {
        heading: {
          en: "SKR03, SKR04 or SKR07?",
          de: "SKR03, SKR04 oder SKR07?",
        },
        body: {
          en: "Use the chart of accounts your tax advisor already books on. GastroPos supports SKR03, SKR04 and SKR07 with standard accounts, and every account can be overridden to match your advisor’s setup.",
          de: "Nutzen Sie den Kontenrahmen, auf dem Ihr Steuerberater bereits bucht. GastroPos unterstützt SKR03, SKR04 und SKR07 mit Standardkonten, und jedes Konto lässt sich an die Einrichtung Ihres Steuerberaters anpassen.",
        },
        image: "datev-accounts.webp",
        imageAlt: {
          en: "DATEV account settings",
          de: "DATEV-Kontorahmen-Einstellungen",
        },
      },
      {
        heading: {
          en: "VAT rates done right at the till",
          de: "Steuersätze schon an der Kasse richtig",
        },
        body: {
          en: "Eat-in and takeaway can carry different VAT rates. GastroPos applies the rate defined per product or category for eat-in and takeaway and books each receipt split by VAT rate to the matching revenue account. Getting it right at the till saves corrections later.",
          de: "Im Haus und Außer Haus können unterschiedliche Steuersätze gelten. GastroPos wendet den je Produkt oder Kategorie hinterlegten Satz für Im Haus und Außer Haus an und bucht jeden Beleg nach Steuersatz getrennt auf das passende Erlöskonto. Was an der Kasse stimmt, muss später nicht korrigiert werden.",
        },
      },
      {
        heading: {
          en: "Payment methods on their own accounts",
          de: "Zahlungsarten auf eigenen Konten",
        },
        body: {
          en: "Cash and card have standard accounts; every other payment type can get its own account in the DATEV settings. Cash book entries are booked to the accounts of their purposes. Tips are not posted separately in the export.",
          de: "Bar und Karte haben Standardkonten; jede weitere Zahlungsart kann in den DATEV-Einstellungen ein eigenes Konto bekommen. Kassenbuch-Buchungen laufen auf die Konten ihrer Zwecke. Trinkgelder werden im Export nicht separat gebucht.",
        },
      },
      {
        heading: {
          en: "How your tax advisor gets the data",
          de: "Wie Ihr Steuerberater an die Daten kommt",
        },
        body: {
          en: "Create the DATEV booking batch for any period and send it by email or download it — your advisor imports it into DATEV. Z-reports can be emailed automatically daily, weekly or monthly, and your advisor can get a login of their own.",
          de: "Erstellen Sie den DATEV-Buchungsstapel für einen beliebigen Zeitraum und senden Sie ihn per E-Mail oder laden Sie ihn herunter — Ihr Steuerberater importiert ihn in DATEV. Z-Berichte können täglich, wöchentlich oder monatlich automatisch per E-Mail verschickt werden, und Ihr Steuerberater kann einen eigenen Zugang bekommen.",
        },
        image: "datev-advisor.webp",
        imageAlt: {
          en: "Automatic Z-report email settings",
          de: "Einstellungen für automatische Z-Bericht-Mails",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is there a direct connection to DATEV Unternehmen online?",
          de: "Gibt es eine direkte Verbindung zu DATEV Unternehmen online?",
        },
        a: {
          en: "No. GastroPos creates a DATEV booking batch file (EXTF) that your advisor imports.",
          de: "Nein. GastroPos erstellt eine DATEV-Buchungsstapel-Datei (EXTF), die Ihr Steuerberater importiert.",
        },
      },
      {
        q: {
          en: "Can I export by day or by receipt?",
          de: "Kann ich pro Tag oder pro Beleg exportieren?",
        },
        a: {
          en: "Both: bookings can be created per invoice or summed per day, for any period within one fiscal year.",
          de: "Beides: Buchungen werden pro Rechnung erstellt oder pro Tag zusammengefasst, für jeden Zeitraum innerhalb eines Wirtschaftsjahres.",
        },
      },
      {
        q: {
          en: "Does the export include the cash book?",
          de: "Enthält der Export das Kassenbuch?",
        },
        a: {
          en: "Yes. Deposits and withdrawals are booked to the accounts of their purposes.",
          de: "Ja. Ein- und Auszahlungen werden auf die Konten ihrer Zwecke gebucht.",
        },
      },
    ],
  },
};
