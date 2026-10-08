export type ProductSlug =
  | "pos"
  | "waiter-ordering"
  | "qr-ordering"
  | "kitchen-display"
  | "online-ordering"
  | "inventory"
  | "cash-book"
  | "datev-export"
  | "analytics";

export interface ProductContent {
  slug: ProductSlug;
  eyebrow: { en: string; de: string };
  title: { en: string; de: string };
  lede: { en: string; de: string };
  metaTitle: { en: string; de: string };
  metaDescription: { en: string; de: string };
  heroImage?: string;
  heroAlt?: { en: string; de: string };
  highlights?: { value: { en: string; de: string }; label: { en: string; de: string } }[];
  features: { en: string[]; de: string[] };
  sections: {
    heading: { en: string; de: string };
    body: { en: string; de: string };
    bullets?: { en: string[]; de: string[] };
    image?: string;
    imageAlt?: { en: string; de: string };
  }[];
  faq: { q: { en: string; de: string }; a: { en: string; de: string } }[];
}

export const products: Record<ProductSlug, ProductContent> = {
  pos: {
    slug: "pos",
    eyebrow: { en: "POS system", de: "Kassensystem" },
    title: {
      en: "The cloud POS for restaurants, cafés and takeaways.",
      de: "Das Cloud-Kassensystem für Restaurant, Café und Imbiss.",
    },
    lede: {
      en: "Table service, counter sales, delivery and kitchen display in one app — on tablets, smartphones and Sunmi POS devices. TSE-ready with fiskaly, with Z-reports, DATEV and GoBD exports built in, and an AI assistant that sets up your menu, tables and printers for you.",
      de: "Tischservice, Thekenverkauf, Lieferung und Küchenmonitor in einer App — auf Tablets, Smartphones und Sunmi-Kassen. TSE-fähig mit fiskaly, mit Z-Bericht, DATEV- und GoBD-Export und einem KI-Assistenten, der Speisekarte, Tische und Drucker für Sie einrichtet.",
    },
    metaTitle: {
      en: "Cloud POS System for Restaurants & Takeaways | GastroPos",
      de: "Cloud-Kassensystem für Gastronomie & Imbiss | GastroPos",
    },
    metaDescription: {
      en: "TSE-ready cloud POS for restaurants, cafés and takeaways: table service, counter mode, kitchen display, delivery, Z-reports, DATEV and GoBD export — on Android, iOS, Windows and Sunmi devices.",
      de: "TSE-fähiges Cloud-Kassensystem für Restaurant, Café und Imbiss: Tischservice, Thekenkasse, Küchenmonitor, Lieferung, Z-Bericht, DATEV- und GoBD-Export — auf Android, iOS, Windows und Sunmi-Geräten.",
    },
    heroImage: "pos-hero.webp",
    heroAlt: {
      en: "GastroPos on a tablet, a Sunmi countertop POS and a handheld POS with receipt printer",
      de: "GastroPos auf einem Tablet, einer Sunmi-Theken-Kasse und einem Handheld mit Bondrucker",
    },
    highlights: [
      {
        value: { en: "fiskaly TSE", de: "fiskaly-TSE" },
        label: {
          en: "Cloud TSE, DSFinV-K and Austrian RKSV",
          de: "Cloud-TSE, DSFinV-K und RKSV für Österreich",
        },
      },
      {
        value: { en: "Android · iOS · Windows", de: "Android · iOS · Windows" },
        label: {
          en: "Tablets, phones and Sunmi / iMin devices",
          de: "Tablets, Smartphones und Sunmi- / iMin-Geräte",
        },
      },
      {
        value: { en: "SKR03 · 04 · 07", de: "SKR03 · 04 · 07" },
        label: { en: "DATEV export plus GoBD archive", de: "DATEV-Export und GoBD-Archiv" },
      },
      {
        value: { en: "AI assistant", de: "KI-Assistent" },
        label: {
          en: "Menu import from a photo, orders by voice",
          de: "Speisekarte per Foto, Bestellung per Sprache",
        },
      },
    ],
    features: {
      en: [
        "Table service with areas, live table status and order history per table",
        "Counter mode for quick sales — tap a price, scan a barcode, done",
        "Sizes, extras, required choices, removed ingredients and notes per item",
        "Separate or combined payment, split tables, move items between tables",
        "Kitchen display and kitchen printers routed by category",
        "Receipt printers via Wi-Fi/LAN, Bluetooth or USB, cash drawer via printer",
        "Card terminals via ZVT, SumUp or Zettle",
        "Correct VAT for eat-in and takeaway on every receipt",
        "Fixed roles for admin, assistant manager, waiter, kitchen, courier and tax advisor",
        "Optional offline checkout in counter mode — synced automatically",
      ],
      de: [
        "Tischservice mit Bereichen, Live-Tischstatus und Bestellverlauf pro Tisch",
        "Thekenmodus für den Schnellverkauf — Preis antippen, Barcode scannen, fertig",
        "Größen, Extras, Pflichtauswahl, „ohne“-Zutaten und Wünsche pro Artikel",
        "Getrennt oder zusammen zahlen, Tische teilen, Artikel umbuchen",
        "Küchenmonitor und Küchendrucker nach Kategorie",
        "Bondrucker über WLAN/LAN, Bluetooth oder USB, Kassenschublade über den Drucker",
        "Kartenterminals über ZVT, SumUp oder Zettle",
        "Richtige Mehrwertsteuer für Im-Haus- und Außer-Haus-Verkauf auf jedem Beleg",
        "Feste Rollen für Admin, Schichtleitung, Service, Küche, Fahrer und Steuerberater",
        "Optionales Offline-Kassieren im Thekenmodus — automatische Nachsynchronisierung",
      ],
    },
    sections: [
      {
        heading: {
          en: "Table service that keeps up with a full house",
          de: "Tischservice, der auch bei vollem Haus mithält",
        },
        body: {
          en: "Every table shows its status at a glance — free, ordered, ready, served — with the running total and the time of the first order. Waiters add items on a tablet or smartphone, pick sizes and extras in one dialog and send the order to the kitchen with a single tap.",
          de: "Jeder Tisch zeigt auf einen Blick seinen Status — frei, bestellt, bereit, serviert — mit laufender Summe und Uhrzeit der ersten Bestellung. Der Service nimmt Bestellungen auf dem Tablet oder Smartphone auf, wählt Größe und Extras in einem Dialog und schickt alles mit einem Tipp an die Küche.",
        },
        bullets: {
          en: [
            "Required choices (e.g. dough, size) can't be forgotten",
            "Extras with surcharge per size, ingredients removed with “without”",
            "“Add with AI”: dictate the order instead of typing it",
          ],
          de: [
            "Pflichtauswahl (z. B. Teig, Größe) kann nicht vergessen werden",
            "Extras mit Aufpreis je Größe, Zutaten per „ohne“ abbestellen",
            "„Mit KI hinzufügen“: Bestellung diktieren statt tippen",
          ],
        },
        image: "pos-tables.webp",
        imageAlt: {
          en: "Option dialog for a pizza on a tablet next to a handheld showing the order",
          de: "Optionsdialog einer Pizza auf dem Tablet neben einem Handheld mit der Bestellung",
        },
      },
      {
        heading: {
          en: "Counter mode for quick sales",
          de: "Thekenmodus für den schnellen Verkauf",
        },
        body: {
          en: "For takeaways, cafés and bakeries: no tables, just sell. Tap a price and the item is on the receipt; scan a barcode with a USB scanner or the camera. Open-price items, quick cash or card buttons and the full payment dialog are one tap away — ideal on a Sunmi countertop POS with built-in printer.",
          de: "Für Imbiss, Café und Bäckerei: ohne Tische, einfach verkaufen. Preis antippen und der Artikel steht auf dem Bon; Barcodes per Scanner oder Kamera erfassen. Freie Preise, „Bar passend“ und „Karte“ sowie der vollständige Bezahldialog sind nur einen Tipp entfernt — ideal auf einer Sunmi-Theken-Kasse mit eingebautem Drucker.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT rate",
            "Change, discount, tip and vouchers in one payment dialog",
            "Optional offline checkout if the internet drops",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit dem richtigen Steuersatz",
            "Rückgeld, Rabatt, Trinkgeld und Gutscheine in einem Bezahldialog",
            "Optionales Offline-Kassieren bei Internetausfall",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog of the counter mode on a Sunmi-style countertop POS",
          de: "Bezahldialog des Thekenmodus auf einer Sunmi-Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Splitting the bill without the maths",
          de: "Rechnung teilen ohne Kopfrechnen",
        },
        body: {
          en: "Guests pay together or separately: select items one by one and move them to a separate bill, split a payment across cash and card, or split and merge whole tables. The receipt prints on the printer you assigned — at the bar, at the counter or on the handheld.",
          de: "Gäste zahlen zusammen oder getrennt: Artikel einzeln auswählen und auf eine eigene Rechnung legen, einen Betrag auf Bar und Karte aufteilen oder ganze Tische teilen und zusammenlegen. Die Rechnung druckt auf dem zugewiesenen Drucker — an der Bar, an der Theke oder am Handheld.",
        },
        bullets: {
          en: [
            "Card payment via ZVT terminal, SumUp or Zettle",
            "Digital receipt via QR code or email",
            "Business receipt and company invoice on request",
          ],
          de: [
            "Kartenzahlung über ZVT-Terminal, SumUp oder Zettle",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Bewirtungsbeleg und Firmenrechnung auf Wunsch",
          ],
        },
        image: "pos-split.webp",
        imageAlt: {
          en: "Separate payment: items selected for a second bill on a tablet",
          de: "Getrennt zahlen: Artikel für eine zweite Rechnung auf dem Tablet ausgewählt",
        },
      },
      {
        heading: {
          en: "Compliant in Germany and Austria",
          de: "Rechtssicher in Deutschland und Österreich",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (Austria: RKSV) — no TSE hardware needed. Z-reports can be created automatically at a time of your choice and sent to your tax advisor; DATEV (SKR03/04/07), GoBD archive and DSFinV-K exports are available at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Österreich: RKSV) — ganz ohne TSE-Hardware. Z-Berichte entstehen auf Wunsch automatisch zur gewünschten Uhrzeit und gehen per E-Mail an Ihren Steuerberater; DATEV- (SKR03/04/07), GoBD- und DSFinV-K-Exporte sind jederzeit abrufbar.",
        },
        bullets: {
          en: [
            "Cancellations as signed counter-receipts — originals stay untouched",
            "Digital cash book with gap-free numbering",
            "Separate tax advisor login",
          ],
          de: [
            "Stornos als signierte Gegenbelege — Originale bleiben unverändert",
            "Digitales Kassenbuch mit lückenloser Nummerierung",
            "Eigener Zugang für den Steuerberater",
          ],
        },
        image: "pos-compliance.webp",
        imageAlt: {
          en: "List of Z-reports with totals and details on a tablet",
          de: "Liste der Z-Berichte mit Summen und Details auf dem Tablet",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Which devices does GastroPos run on?",
          de: "Auf welchen Geräten läuft GastroPos?",
        },
        a: {
          en: "On Android and iOS tablets and smartphones, on Windows and in the browser. Sunmi and iMin POS devices are supported including their built-in receipt printer and customer display.",
          de: "Auf Android- und iOS-Tablets und -Smartphones, unter Windows und im Browser. Sunmi- und iMin-Kassen werden inklusive eingebautem Bondrucker und Kundendisplay unterstützt.",
        },
      },
      {
        q: { en: "Is GastroPos TSE-compliant?", de: "Ist GastroPos TSE-konform?" },
        a: {
          en: "Yes. GastroPos uses the fiskaly cloud TSE, which is booked as an add-on and activated in the settings — no hardware needed. DSFinV-K exports are retrieved directly from fiskaly. In Austria, RKSV is supported.",
          de: "Ja. GastroPos nutzt die fiskaly Cloud-TSE, die als Zusatzfunktion gebucht und in den Einstellungen aktiviert wird — ganz ohne Hardware. DSFinV-K-Exporte werden direkt bei fiskaly abgerufen. In Österreich wird die RKSV unterstützt.",
        },
      },
      {
        q: { en: "What hardware do I need?", de: "Welche Hardware brauche ich?" },
        a: {
          en: "A tablet or smartphone is enough to start. Add an ESC/POS receipt printer (Wi-Fi/LAN, Bluetooth or USB), a cash drawer connected to the printer, a barcode scanner and a card terminal (ZVT, SumUp or Zettle) as needed — or use an all-in-one Sunmi device.",
          de: "Zum Start genügt ein Tablet oder Smartphone. Nach Bedarf kommen ein ESC/POS-Bondrucker (WLAN/LAN, Bluetooth oder USB), eine Kassenschublade am Drucker, ein Barcode-Scanner und ein Kartenterminal (ZVT, SumUp oder Zettle) hinzu — oder Sie nutzen ein All-in-one-Gerät von Sunmi.",
        },
      },
      {
        q: {
          en: "Can I keep selling if the internet goes down?",
          de: "Kann ich bei Internetausfall weiter verkaufen?",
        },
        a: {
          en: "In counter mode, yes — if “Allow offline checkout” is enabled. The receipts are stored on the device and transmitted automatically once the connection is back. Table service and the kitchen display need an internet connection.",
          de: "Im Thekenmodus ja — wenn „Offline kassieren erlauben“ eingeschaltet ist. Die Belege werden auf dem Gerät gespeichert und automatisch übertragen, sobald die Verbindung wieder steht. Tischservice und Küchenmonitor benötigen eine Internetverbindung.",
        },
      },
      {
        q: { en: "What does the AI do?", de: "Was macht die KI?" },
        a: {
          en: "It reads your menu from photos or a PDF and creates categories, products and prices. The assistant creates tables and areas, sets up and tests printers, takes orders by voice, and answers questions about the system.",
          de: "Sie liest Ihre Speisekarte aus Fotos oder einem PDF und legt Kategorien, Produkte und Preise an. Der Assistent erstellt Tische und Bereiche, richtet Drucker ein und testet sie, nimmt Bestellungen per Sprache auf und beantwortet Fragen zum System.",
        },
      },
      {
        q: {
          en: "Which languages does the app support?",
          de: "Welche Sprachen unterstützt die App?",
        },
        a: {
          en: "The POS app is available in German, English and Turkish. The guest QR ordering page additionally speaks Arabic, Spanish and French.",
          de: "Die Kassen-App gibt es auf Deutsch, Englisch und Türkisch. Die QR-Bestellseite für Gäste spricht zusätzlich Arabisch, Spanisch und Französisch.",
        },
      },
    ],
  },
  "waiter-ordering": {
    slug: "waiter-ordering",
    eyebrow: {
      en: "Waiter ordering",
      de: "Mobile Bestellaufnahme",
    },
    title: {
      en: "Take orders at the table — and send them straight to the kitchen.",
      de: "Bestellungen am Tisch aufnehmen — und direkt in die Küche schicken.",
    },
    lede: {
      en: "Your service team takes orders on a smartphone, tablet or Sunmi handheld, sends them to the kitchen display or kitchen printer with one tap and collects payment right at the table.",
      de: "Ihr Service nimmt Bestellungen auf dem Smartphone, Tablet oder Sunmi-Handheld auf, schickt sie mit einem Tipp an Küchenmonitor oder Küchendrucker und kassiert direkt am Tisch.",
    },
    metaTitle: {
      en: "Mobile Waiter Ordering on Phone & Handheld | GastroPos",
      de: "Mobile Bestellaufnahme für den Service | GastroPos",
    },
    metaDescription: {
      en: "Take orders tableside on Android and iOS phones, tablets and Sunmi handhelds. Send to the kitchen, get notified when food is ready, split and pay at the table.",
      de: "Bestellungen am Tisch auf Android- und iOS-Smartphones, Tablets und Sunmi-Handhelds aufnehmen, an die Küche senden, Abholbereit-Meldungen erhalten, getrennt zahlen.",
    },
    heroImage: "waiter-hero.webp",
    heroAlt: {
      en: "GastroPos on a tablet and two handhelds: table overview, notifications and order entry",
      de: "GastroPos auf Tablet und zwei Handhelds: Tischübersicht, Mitteilungen und Bestellaufnahme",
    },
    highlights: [
      {
        value: {
          en: "Phone & handheld",
          de: "Smartphone & Handheld",
        },
        label: {
          en: "Android, iOS and Sunmi devices with printer",
          de: "Android, iOS und Sunmi-Geräte mit Drucker",
        },
      },
      {
        value: {
          en: "1 tap",
          de: "1 Tipp",
        },
        label: {
          en: "from the table to the kitchen",
          de: "vom Tisch in die Küche",
        },
      },
      {
        value: {
          en: "Live alerts",
          de: "Live-Meldungen",
        },
        label: {
          en: "order ready, waiter called, bill requested",
          de: "abholbereit, Kellner gerufen, Rechnung gewünscht",
        },
      },
      {
        value: {
          en: "By voice",
          de: "Per Sprache",
        },
        label: {
          en: "“Add with AI” takes the order for you",
          de: "„Mit KI hinzufügen“ nimmt die Bestellung auf",
        },
      },
    ],
    features: {
      en: [
        "Runs on Android and iOS phones and tablets and on Sunmi handhelds",
        "Table overview by area with live status, total and time of the first order",
        "Sizes, extras, required choices, “without” ingredients and notes",
        "Courses: group items into courses for the kitchen",
        "Notifications with red badge: order ready, waiter called, bill requested",
        "Claim a notification so colleagues know you are on it",
        "Pay together or separately, split across cash and card",
        "Move items or whole tables, split and merge tables",
      ],
      de: [
        "Läuft auf Android- und iOS-Smartphones und -Tablets sowie auf Sunmi-Handhelds",
        "Tischübersicht nach Bereichen mit Live-Status, Summe und Uhrzeit der ersten Bestellung",
        "Größen, Extras, Pflichtauswahl, „ohne“-Zutaten und Wünsche",
        "Gänge: Artikel für die Küche nach Gängen gruppieren",
        "Mitteilungen mit rotem Zähler: abholbereit, Kellner gerufen, Rechnung angefordert",
        "Mitteilungen übernehmen, damit Kollegen wissen, wer sich kümmert",
        "Zusammen oder getrennt zahlen, Betrag auf Bar und Karte aufteilen",
        "Artikel oder ganze Tische umbuchen, Tische teilen und zusammenlegen",
      ],
    },
    sections: [
      {
        heading: {
          en: "The order goes where it belongs — immediately",
          de: "Die Bestellung landet sofort da, wo sie hingehört",
        },
        body: {
          en: "Waiters pick the table, add items from the menu and tap “Send”. Drinks print at the bar, food appears on the kitchen display — routed by category. No walking to the register, no handwritten tickets.",
          de: "Der Service wählt den Tisch, fügt Artikel aus der Speisekarte hinzu und tippt auf „Senden“. Getränke drucken an der Bar, Speisen erscheinen auf dem Küchenmonitor — sortiert nach Kategorie. Kein Weg zur Kasse, keine handgeschriebenen Bons.",
        },
        bullets: {
          en: [
            "Tap a price to add an item instantly, long-press for details",
            "Review screen before sending — change quantity, price or note",
            "Print routing per category and print job",
          ],
          de: [
            "Preis antippen fügt sofort hinzu, lange drücken zeigt Details",
            "Prüfansicht vor dem Senden — Menge, Preis oder Wunsch ändern",
            "Druck-Routing nach Kategorie und Druckauftrag",
          ],
        },
        image: "waiter-order.webp",
        imageAlt: {
          en: "Menu and order review on two handhelds",
          de: "Speisekarte und Bestellübersicht auf zwei Handhelds",
        },
      },
      {
        heading: {
          en: "Never miss a ready plate or a waving guest",
          de: "Kein fertiges Gericht und kein winkender Gast wird übersehen",
        },
        body: {
          en: "When the kitchen marks an order as ready, or a guest calls a waiter or asks for the bill via QR code, everyone on duty gets a notification. A waiter claims it with one tap — the others see who is handling it.",
          de: "Meldet die Küche eine Bestellung als fertig oder ruft ein Gast per QR-Code den Kellner oder die Rechnung, bekommt der ganze Service eine Mitteilung. Ein Tipp auf „Übernehmen“ — und alle sehen, wer sich kümmert.",
        },
        bullets: {
          en: [
            "Red counter on the bell shows open notifications",
            "“Served” directly from the notification",
            "Bill requests show the preferred payment method",
          ],
          de: [
            "Roter Zähler an der Glocke zeigt offene Mitteilungen",
            "„Serviert“ direkt aus der Mitteilung",
            "Rechnungswunsch zeigt die gewünschte Zahlungsart",
          ],
        },
        image: "waiter-notify.webp",
        imageAlt: {
          en: "Notifications panel with ready orders and guest requests",
          de: "Mitteilungen mit abholbereiten Bestellungen und Gästewünschen",
        },
      },
      {
        heading: {
          en: "Payment at the table",
          de: "Kassieren direkt am Tisch",
        },
        body: {
          en: "Every waiter device is a complete till. Take payment together or separately, add a tip or discount, redeem vouchers and print the receipt on the handheld or on the assigned printer. Card payments run on a ZVT terminal, SumUp or Zettle.",
          de: "Jedes Service-Gerät ist eine vollwertige Kasse. Zusammen oder getrennt kassieren, Trinkgeld oder Rabatt erfassen, Gutscheine einlösen und den Beleg am Handheld oder am zugewiesenen Drucker drucken. Kartenzahlungen laufen über ZVT-Terminal, SumUp oder Zettle.",
        },
        bullets: {
          en: [
            "Every receipt signed by the fiskaly TSE (add-on)",
            "Digital receipt via QR code or email",
            "Tips recorded per waiter",
          ],
          de: [
            "Jeder Beleg mit fiskaly-TSE signiert (Zusatzfunktion)",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Trinkgeld pro Kellner erfasst",
          ],
        },
        image: "waiter-pay.webp",
        imageAlt: {
          en: "Payment dialog with change, discount and tip",
          de: "Bezahldialog mit Rückgeld, Rabatt und Trinkgeld",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do I need special handhelds?",
          de: "Brauche ich spezielle Handhelds?",
        },
        a: {
          en: "No. Any current Android or iOS smartphone works. If you want a printer in the waiter’s hand, Sunmi handhelds with a built-in receipt printer are supported.",
          de: "Nein. Jedes aktuelle Android- oder iOS-Smartphone funktioniert. Wer einen Drucker in der Hand des Kellners möchte, nutzt ein Sunmi-Handheld mit eingebautem Bondrucker.",
        },
      },
      {
        q: {
          en: "Where do the orders go?",
          de: "Wohin gehen die Bestellungen?",
        },
        a: {
          en: "To the kitchen display and/or the kitchen and bar printers — depending on the category of each item.",
          de: "An den Küchenmonitor und/oder an Küchen- und Bardrucker — je nach Kategorie des Artikels.",
        },
      },
      {
        q: {
          en: "Can several waiters work on the same table?",
          de: "Können mehrere Kellner am selben Tisch arbeiten?",
        },
        a: {
          en: "Yes. All devices are synchronised in real time, so every waiter sees the current state of every table.",
          de: "Ja. Alle Geräte sind in Echtzeit synchronisiert — jeder sieht den aktuellen Stand jedes Tisches.",
        },
      },
      {
        q: {
          en: "Can guests split the bill?",
          de: "Können Gäste getrennt zahlen?",
        },
        a: {
          en: "Yes. Select the items one by one and move them to a separate bill, or split one amount across cash and card.",
          de: "Ja. Artikel einzeln auswählen und auf eine eigene Rechnung legen oder einen Betrag auf Bar und Karte aufteilen.",
        },
      },
    ],
  },
  "qr-ordering": {
    slug: "qr-ordering",
    eyebrow: {
      en: "QR self-ordering",
      de: "Selbstbestellung per QR-Code",
    },
    title: {
      en: "Guests order from their own phone — no app needed.",
      de: "Gäste bestellen vom eigenen Handy — ganz ohne App.",
    },
    lede: {
      en: "Every table gets its own QR code. Guests open your menu in the browser — no app — order with sizes and extras, and the order lands on your kitchen display and POS like any other order.",
      de: "Jeder Tisch bekommt seinen eigenen QR-Code. Gäste öffnen Ihre Speisekarte im Browser — ohne App —, bestellen mit Größen und Extras, und die Bestellung landet wie jede andere auf Küchenmonitor und Kasse.",
    },
    metaTitle: {
      en: "QR Code Table Ordering for Restaurants | GastroPos",
      de: "QR-Code-Bestellung am Tisch für die Gastronomie | GastroPos",
    },
    metaDescription: {
      en: "QR self-ordering: unique code per table, menu in the browser, sizes and extras, call waiter, request bill, allergens, six guest languages — connected to POS and kitchen display.",
      de: "Selbstbestellung per QR-Code: eigener Code pro Tisch, Speisekarte im Browser, Größen und Extras, Kellner rufen, Rechnung anfordern, Allergene, sechs Sprachen — direkt mit Kasse und Küchenmonitor verbunden.",
    },
    heroImage: "qr-hero.webp",
    heroAlt: {
      en: "Table QR code in the POS and the guest ordering page on two smartphones",
      de: "Tisch-QR-Code in der Kasse und die Bestellseite für Gäste auf zwei Smartphones",
    },
    highlights: [
      {
        value: {
          en: "No app",
          de: "Ohne App",
        },
        label: {
          en: "opens in any mobile browser",
          de: "öffnet in jedem Handy-Browser",
        },
      },
      {
        value: {
          en: "6 languages",
          de: "6 Sprachen",
        },
        label: {
          en: "DE, EN, TR, AR, ES, FR — automatic",
          de: "DE, EN, TR, AR, ES, FR — automatisch",
        },
      },
      {
        value: {
          en: "1 QR per table",
          de: "1 QR pro Tisch",
        },
        label: {
          en: "renew at any time",
          de: "jederzeit erneuerbar",
        },
      },
      {
        value: {
          en: "Allergens",
          de: "Allergene",
        },
        label: {
          en: "shown on every dish",
          de: "bei jedem Gericht sichtbar",
        },
      },
    ],
    features: {
      en: [
        "Unique QR code per table — download, print or renew",
        "Guest home screen: order, my orders, call waiter, bill please",
        "Menu with categories, search, descriptions and photos",
        "Sizes, required choices, extras and removed ingredients",
        "Ingredients, allergens and additives per dish",
        "Guest interface follows the phone language (6 languages)",
        "Optional: approve orders before they reach the kitchen",
        "Optional: anonymous ordering or verification by phone",
        "Optional: new QR code after payment",
        "Your colours on the ordering page",
      ],
      de: [
        "Eigener QR-Code pro Tisch — herunterladen, drucken oder erneuern",
        "Startseite für Gäste: bestellen, meine Bestellungen, Kellner rufen, Rechnung bitte",
        "Speisekarte mit Kategorien, Suche, Beschreibungen und Fotos",
        "Größen, Pflichtauswahl, Extras und abbestellte Zutaten",
        "Zutaten, Allergene und Zusatzstoffe pro Gericht",
        "Oberfläche folgt der Handy-Sprache (6 Sprachen)",
        "Optional: Bestellungen vor dem Küchenversand freigeben",
        "Optional: anonym bestellen oder per Telefon verifizieren",
        "Optional: neuer QR-Code nach der Zahlung",
        "Ihre Farben auf der Bestellseite",
      ],
    },
    sections: [
      {
        heading: {
          en: "Scan, browse, order — like a native app",
          de: "Scannen, stöbern, bestellen — wie eine App",
        },
        body: {
          en: "Guests see your menu with categories and search, open a dish for details, choose size, dough or extras and add it to the cart. Prices and surcharges come straight from your POS menu — change them once, they are correct everywhere.",
          de: "Gäste sehen Ihre Speisekarte mit Kategorien und Suche, öffnen ein Gericht, wählen Größe, Teig oder Extras und legen es in den Warenkorb. Preise und Aufpreise kommen direkt aus Ihrer Kassen-Speisekarte — einmal ändern, überall richtig.",
        },
        bullets: {
          en: [
            "Required choices are enforced",
            "Allergens and additives on every dish",
            "Dark mode for evening service",
          ],
          de: [
            "Pflichtauswahl wird erzwungen",
            "Allergene und Zusatzstoffe bei jedem Gericht",
            "Dunkler Modus für den Abendservice",
          ],
        },
        image: "qr-guest.webp",
        imageAlt: {
          en: "Guest menu and dish customisation on two smartphones",
          de: "Speisekarte und Gericht-Anpassung auf zwei Smartphones",
        },
      },
      {
        heading: {
          en: "Call the waiter, ask for the bill",
          de: "Kellner rufen, Rechnung anfordern",
        },
        body: {
          en: "The guest home screen has big buttons for “Call waiter” and “Bill, please” — including the preferred payment method. Your team gets a notification on every device and claims it with one tap. Guests pay as usual through your staff.",
          de: "Die Startseite hat große Schaltflächen für „Kellner rufen“ und „Rechnung bitte“ — inklusive gewünschter Zahlungsart. Ihr Team bekommt auf jedem Gerät eine Mitteilung und übernimmt sie mit einem Tipp. Bezahlt wird wie gewohnt beim Personal.",
        },
        bullets: {
          en: [
            "“My orders” shows what has been ordered",
            "Table number attached automatically",
            "Digital receipts for the guest",
          ],
          de: [
            "„Meine Bestellungen“ zeigt alles Bestellte",
            "Tischnummer automatisch zugeordnet",
            "Digitale Belege für den Gast",
          ],
        },
        image: "qr-hub.webp",
        imageAlt: {
          en: "Guest home screen with order, call waiter and bill buttons",
          de: "Startseite für Gäste mit Bestellen, Kellner rufen und Rechnung",
        },
      },
      {
        heading: {
          en: "You stay in control",
          de: "Sie behalten die Kontrolle",
        },
        body: {
          en: "Switch self-ordering on in the settings and print the QR code of each table from Master data → Tables. Decide whether guests may order anonymously, whether staff approve orders first and whether the QR code is renewed after payment.",
          de: "Schalten Sie die Selbstbestellung in den Einstellungen ein und drucken Sie den QR-Code jedes Tisches unter Stammdaten → Tische. Legen Sie fest, ob Gäste anonym bestellen dürfen, ob das Personal Bestellungen zuerst freigibt und ob der QR-Code nach der Zahlung erneuert wird.",
        },
        bullets: {
          en: [
            "Approval display for staff",
            "Renew a code instantly — the old one stops working",
            "Hide categories or dishes from self-ordering",
          ],
          de: [
            "Freigabe-Ansicht für das Personal",
            "Code sofort erneuern — der alte wird ungültig",
            "Kategorien oder Gerichte in der Selbstbestellung ausblenden",
          ],
        },
        image: "qr-admin.webp",
        imageAlt: {
          en: "Self-service settings in the POS",
          de: "Selbstbedienungs-Einstellungen in der Kasse",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do guests need to install an app?",
          de: "Müssen Gäste eine App installieren?",
        },
        a: {
          en: "No. The menu opens in the phone’s browser directly from the QR scan.",
          de: "Nein. Die Speisekarte öffnet sich direkt nach dem Scan im Browser des Handys.",
        },
      },
      {
        q: {
          en: "Can guests pay on their phone?",
          de: "Können Gäste am Handy bezahlen?",
        },
        a: {
          en: "Not yet. Guests request the bill and choose cash or card; your staff collect the payment at the table.",
          de: "Noch nicht. Gäste fordern die Rechnung an und wählen Bar oder Karte; kassiert wird vom Personal am Tisch.",
        },
      },
      {
        q: {
          en: "Which languages does the guest page support?",
          de: "Welche Sprachen hat die Gästeseite?",
        },
        a: {
          en: "German, English, Turkish, Arabic, Spanish and French — chosen automatically from the phone settings. Dish names and descriptions appear as you entered them.",
          de: "Deutsch, Englisch, Türkisch, Arabisch, Spanisch und Französisch — automatisch nach Handy-Einstellung. Gerichtnamen und Beschreibungen erscheinen so, wie Sie sie angelegt haben.",
        },
      },
      {
        q: {
          en: "What if a QR code is copied or misused?",
          de: "Was, wenn ein QR-Code kopiert oder missbraucht wird?",
        },
        a: {
          en: "Renew it in the table’s self-order settings — the old code stops working immediately. You can also renew codes automatically after each payment.",
          de: "Erneuern Sie ihn in der Selbstbestellungseinstellung des Tisches — der alte Code ist sofort ungültig. Auf Wunsch geschieht das nach jeder Zahlung automatisch.",
        },
      },
    ],
  },
  "kitchen-display": {
    slug: "kitchen-display",
    eyebrow: {
      en: "Kitchen display",
      de: "Küchenmonitor",
    },
    title: {
      en: "The kitchen display that replaces paper tickets.",
      de: "Der Küchenmonitor, der Papierbons ersetzt.",
    },
    lede: {
      en: "Orders from the table, the counter, QR self-ordering and the webshop appear on screen the moment they are sent — oldest first, with a timer that turns amber and red. Cooks mark items ready, and the waiter is notified instantly.",
      de: "Bestellungen vom Tisch, von der Theke, aus der QR-Selbstbestellung und dem Webshop erscheinen sofort auf dem Bildschirm — älteste zuerst, mit einem Timer, der gelb und rot wird. Die Küche meldet „fertig“, der Service wird sofort benachrichtigt.",
    },
    metaTitle: {
      en: "Kitchen Display System (KDS) for Restaurants | GastroPos",
      de: "Küchenmonitor (KDS) für die Gastronomie | GastroPos",
    },
    metaDescription: {
      en: "Kitchen display for restaurants and takeaways: orders from all channels, colour timer, category filter per screen, courses, ready notifications to waiters.",
      de: "Küchenmonitor für Restaurant und Imbiss: Bestellungen aus allen Kanälen, Farb-Timer, Kategorie-Filter pro Bildschirm, Gänge, Abholbereit-Meldung an den Service.",
    },
    heroImage: "kds-hero.webp",
    heroAlt: {
      en: "Kitchen display on a tablet and a second screen",
      de: "Küchenmonitor auf einem Tablet und einem zweiten Bildschirm",
    },
    highlights: [
      {
        value: {
          en: "All channels",
          de: "Alle Kanäle",
        },
        label: {
          en: "table, counter, QR and webshop",
          de: "Tisch, Theke, QR und Webshop",
        },
      },
      {
        value: {
          en: "5 / 10 min",
          de: "5 / 10 Min.",
        },
        label: {
          en: "amber and red timer",
          de: "gelber und roter Timer",
        },
      },
      {
        value: {
          en: "Per screen",
          de: "Pro Bildschirm",
        },
        label: {
          en: "own category filter",
          de: "eigener Kategorie-Filter",
        },
      },
      {
        value: {
          en: "Live",
          de: "Live",
        },
        label: {
          en: "ready notification to waiters",
          de: "Abholbereit-Meldung an den Service",
        },
      },
    ],
    features: {
      en: [
        "Orders sorted by arrival — oldest first",
        "Timer per order: amber after 5, red after 10 minutes",
        "Delivery and pickup orders timed against their due time",
        "Category filter per screen — grill, pizza, bar, desserts",
        "Items grouped by course",
        "“Cooking” and “Ready” views, mark ready or served",
        "Call waiters from the kitchen, print table items",
        "New-order sound with volume, dark/light mode, font size",
        "As many screens as you need, synchronised in real time",
      ],
      de: [
        "Bestellungen nach Eingang sortiert — älteste zuerst",
        "Timer pro Bestellung: gelb nach 5, rot nach 10 Minuten",
        "Liefer- und Abholbestellungen nach Zielzeit getaktet",
        "Kategorie-Filter pro Bildschirm — Grill, Pizza, Bar, Desserts",
        "Artikel nach Gängen gruppiert",
        "Ansichten „In Zubereitung“ und „Fertig“, fertig oder serviert melden",
        "Kellner aus der Küche rufen, Tisch-Artikel drucken",
        "Ton bei neuer Bestellung mit Lautstärke, Hell/Dunkel, Schriftgröße",
        "Beliebig viele Bildschirme, in Echtzeit synchronisiert",
      ],
    },
    sections: [
      {
        heading: {
          en: "One screen for every order",
          de: "Ein Bildschirm für jede Bestellung",
        },
        body: {
          en: "Whether a waiter sends it, a guest orders by QR code or a customer orders in your webshop — every order appears on the kitchen display with table or pickup name, items, extras, removed ingredients and notes.",
          de: "Ob vom Kellner gesendet, per QR-Code bestellt oder im Webshop aufgegeben — jede Bestellung erscheint auf dem Küchenmonitor mit Tisch oder Abholname, Artikeln, Extras, abbestellten Zutaten und Wünschen.",
        },
        bullets: {
          en: [
            "Extras in blue, removed ingredients in red",
            "Timer shows how long a table has been waiting",
            "Search and statistics bar with open tables and items",
          ],
          de: [
            "Extras in Blau, abbestellte Zutaten in Rot",
            "Timer zeigt, wie lange ein Tisch schon wartet",
            "Suche und Statusleiste mit offenen Tischen und Artikeln",
          ],
        },
        image: "kds-board.webp",
        imageAlt: {
          en: "Kitchen display with an order and its items",
          de: "Küchenmonitor mit einer Bestellung und ihren Artikeln",
        },
      },
      {
        heading: {
          en: "Ready — and the waiter knows",
          de: "Fertig — und der Service weiß Bescheid",
        },
        body: {
          en: "Tap an item or a whole order as ready. It moves to the “Ready” view and every waiter device shows a notification. Mark it served when it has left the pass.",
          de: "Ein Tipp meldet einen Artikel oder die ganze Bestellung als fertig. Sie wandert in die Ansicht „Fertig“, und jedes Service-Gerät zeigt eine Mitteilung. Ist das Essen raus, wird es als serviert markiert.",
        },
        bullets: {
          en: [
            "Each screen filters its own categories",
            "Works on any tablet, monitor or Sunmi device",
            "Kitchen printers can run in parallel",
          ],
          de: [
            "Jeder Bildschirm filtert seine eigenen Kategorien",
            "Läuft auf jedem Tablet, Monitor oder Sunmi-Gerät",
            "Küchendrucker können parallel laufen",
          ],
        },
        image: "kds-ready.webp",
        imageAlt: {
          en: "Kitchen display with items marked",
          de: "Küchenmonitor mit markierten Artikeln",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Which hardware do I need?",
          de: "Welche Hardware brauche ich?",
        },
        a: {
          en: "Any tablet or touchscreen device that runs the GastroPos app — Android, iOS, Windows or a Sunmi device. Mount it where the cooks can tap it.",
          de: "Jedes Tablet oder Touch-Gerät, auf dem die GastroPos-App läuft — Android, iOS, Windows oder ein Sunmi-Gerät. Montieren Sie es dort, wo die Küche es antippen kann.",
        },
      },
      {
        q: {
          en: "Can I use several screens?",
          de: "Kann ich mehrere Bildschirme nutzen?",
        },
        a: {
          en: "Yes, as many as you like. Each screen has its own category filter, e.g. one for pizza, one for the grill and one for the bar.",
          de: "Ja, beliebig viele. Jeder Bildschirm hat seinen eigenen Kategorie-Filter, z. B. einen für Pizza, einen für den Grill und einen für die Bar.",
        },
      },
      {
        q: {
          en: "Can I still use kitchen printers?",
          de: "Kann ich weiterhin Küchendrucker nutzen?",
        },
        a: {
          en: "Yes. Printers are routed by category and can be used instead of or in addition to the display.",
          de: "Ja. Drucker werden nach Kategorie angesteuert und können statt oder zusätzlich zum Monitor laufen.",
        },
      },
      {
        q: {
          en: "Does the kitchen display need internet?",
          de: "Braucht der Küchenmonitor Internet?",
        },
        a: {
          en: "Yes. Orders reach the display through the cloud in real time, so a stable Wi-Fi connection is required.",
          de: "Ja. Bestellungen kommen in Echtzeit über die Cloud auf den Monitor, daher ist ein stabiles WLAN nötig.",
        },
      },
    ],
  },
  "online-ordering": {
    slug: "online-ordering",
    eyebrow: {
      en: "Online ordering",
      de: "Online-Bestellung",
    },
    title: {
      en: "Your own webshop for delivery and pickup.",
      de: "Ihr eigener Webshop für Lieferung und Abholung.",
    },
    lede: {
      en: "Guests order from your branded ordering page and pay online or on delivery. Orders arrive in the POS delivery system with a sound, print in the kitchen when accepted and are delivered by your own drivers.",
      de: "Gäste bestellen auf Ihrer eigenen Bestellseite und zahlen online oder bei Lieferung. Bestellungen kommen mit Signalton im Liefersystem der Kasse an, drucken nach dem Annehmen in der Küche und werden von Ihren eigenen Fahrern ausgeliefert.",
    },
    metaTitle: {
      en: "Online Ordering & Delivery Webshop for Restaurants | GastroPos",
      de: "Online-Bestellsystem & Liefer-Webshop für Restaurants | GastroPos",
    },
    metaDescription: {
      en: "Restaurant webshop for delivery and pickup: delivery zones by postcode or distance, card, Klarna, PayPal or cash, tips, discount codes, own drivers — no commission per order.",
      de: "Webshop für Lieferung und Abholung: Liefergebiete nach PLZ oder Entfernung, Karte, Klarna, PayPal oder bar, Trinkgeld, Rabattcodes, eigene Fahrer — ohne Provision pro Bestellung.",
    },
    heroImage: "online-hero.webp",
    heroAlt: {
      en: "GastroPos webshop of a pizzeria on a tablet and two smartphones",
      de: "GastroPos-Webshop einer Pizzeria auf Tablet und zwei Smartphones",
    },
    highlights: [
      {
        value: {
          en: "0 % commission",
          de: "0 % Provision",
        },
        label: {
          en: "per order from GastroPos",
          de: "pro Bestellung von GastroPos",
        },
      },
      {
        value: {
          en: "Card · Klarna · PayPal",
          de: "Karte · Klarna · PayPal",
        },
        label: {
          en: "plus cash and pay on site",
          de: "plus bar und Zahlung vor Ort",
        },
      },
      {
        value: {
          en: "PLZ or km",
          de: "PLZ oder km",
        },
        label: {
          en: "delivery zones with own fees",
          de: "Liefergebiete mit eigenen Gebühren",
        },
      },
      {
        value: {
          en: "Own drivers",
          de: "Eigene Fahrer",
        },
        label: {
          en: "assign, navigate, mark delivered",
          de: "zuweisen, navigieren, zustellen",
        },
      },
    ],
    features: {
      en: [
        "Ordering page with your logo, intro text, colour and background images",
        "Delivery and pickup — or pickup only",
        "Delivery zones by postcode or distance: minimum order, fee, free from",
        "Payment: card via Stripe, Klarna, PayPal, cash or card on delivery",
        "ASAP or a chosen time today",
        "Tips at checkout",
        "Discount codes: % or €, minimum order, usage limit, weekdays, validity",
        "Opening hours, holidays, closed today, “no delivery until”",
        "Pause single products, sold-out items are hidden",
        "Order history and “order again” on the guest’s device",
        "Caller ID for phone orders (FRITZ!Box, add-on)",
      ],
      de: [
        "Bestellseite mit Logo, Einführungstext, Farbe und Hintergrundbildern",
        "Lieferung und Abholung — oder nur Abholung",
        "Liefergebiete nach PLZ oder Entfernung: Mindestbestellwert, Gebühr, gratis ab",
        "Bezahlung: Karte über Stripe, Klarna, PayPal, bar oder mit Karte bei Lieferung",
        "So schnell wie möglich oder Wunschzeit am selben Tag",
        "Trinkgeld im Checkout",
        "Rabattcodes: % oder €, Mindestwert, Einlöselimit, Wochentage, Gültigkeit",
        "Lieferzeiten, Feiertage, heute geschlossen, „keine Lieferung bis“",
        "Einzelne Produkte pausieren, ausverkaufte werden ausgeblendet",
        "Bestellhistorie und „erneut bestellen“ auf dem Gerät des Gastes",
        "Anruferkennung für Telefonbestellungen (FRITZ!Box, Zusatzfunktion)",
      ],
    },
    sections: [
      {
        heading: {
          en: "A shop that looks like your restaurant",
          de: "Ein Shop im Look Ihres Restaurants",
        },
        body: {
          en: "Guests open your ordering page on their phone or computer, choose delivery or pickup, browse the menu with photos and descriptions and see your discount codes right away. Logo, intro text, main colour and background images come from your delivery settings.",
          de: "Gäste öffnen Ihre Bestellseite am Handy oder Computer, wählen Lieferung oder Abholung, stöbern in der Speisekarte mit Fotos und Beschreibungen und sehen Ihre Rabattcodes sofort. Logo, Einführungstext, Hauptfarbe und Hintergrundbilder stammen aus Ihren Liefer-Einstellungen.",
        },
        bullets: {
          en: [
            "Open/closed status and closing time at a glance",
            "Search and categories for the whole menu",
            "Dark mode and order history on the guest’s device",
          ],
          de: [
            "Geöffnet-Status und Schließzeit auf einen Blick",
            "Suche und Kategorien über die ganze Speisekarte",
            "Dunkler Modus und Bestellhistorie auf dem Gerät des Gastes",
          ],
        },
        image: "online-shop.webp",
        imageAlt: {
          en: "GastroPos webshop of a pizzeria on two smartphones",
          de: "GastroPos-Webshop einer Pizzeria auf zwei Smartphones",
        },
      },
      {
        heading: {
          en: "Orders arrive where you work",
          de: "Bestellungen kommen dort an, wo Sie arbeiten",
        },
        body: {
          en: "New webshop orders appear in the POS delivery system with a signal tone — with items, extras, pickup or delivery time, payment status and customer details. Accept them with one tap: the kitchen ticket and delivery slip print automatically.",
          de: "Neue Webshop-Bestellungen erscheinen mit Signalton im Liefersystem der Kasse — mit Artikeln, Extras, Abhol- oder Lieferzeit, Zahlungsstatus und Kundendaten. Mit einem Tipp angenommen, drucken Küchenbon und Lieferschein automatisch.",
        },
        bullets: {
          en: [
            "Phone orders entered in the same screen",
            "Delivery slip with a Google Maps QR code",
            "Webshop orders also appear on the kitchen display",
          ],
          de: [
            "Telefonbestellungen im selben Bildschirm erfassen",
            "Lieferschein mit Google-Maps-QR-Code",
            "Webshop-Bestellungen erscheinen auch auf dem Küchenmonitor",
          ],
        },
        image: "online-orders.webp",
        imageAlt: {
          en: "Delivery system with a new webshop order",
          de: "Liefersystem mit einer neuen Webshop-Bestellung",
        },
      },
      {
        heading: {
          en: "Your own drivers, without the chaos",
          de: "Eigene Fahrer, ohne Chaos",
        },
        body: {
          en: "Assign orders to your drivers. In the app, drivers see their deliveries on a map, start navigation in their maps app, call the customer and mark the order as delivered.",
          de: "Weisen Sie Bestellungen Ihren Fahrern zu. In der App sehen Fahrer ihre Touren auf der Karte, starten die Navigation in ihrer Karten-App, rufen den Kunden an und melden die Zustellung.",
        },
        bullets: {
          en: ["Driver role with its own view", "Payment at the door", "Delivery history per day"],
          de: [
            "Fahrer-Rolle mit eigener Ansicht",
            "Bezahlung an der Haustür",
            "Lieferhistorie pro Tag",
          ],
        },
        image: "online-delivery.webp",
        imageAlt: {
          en: "Orders out for delivery with drivers",
          de: "Bestellungen in Lieferung mit Fahrern",
        },
      },
      {
        heading: {
          en: "Set it up once",
          de: "Einmal einrichten",
        },
        body: {
          en: "In the delivery settings you define what guests can do: open or closed today, delivery on or off, tips, payment methods, the start page of your shop, delivery times, holidays, delivery zones, product availability and discount codes.",
          de: "In den Liefer-Einstellungen legen Sie fest, was Gäste können: heute geöffnet oder geschlossen, Lieferung an oder aus, Trinkgeld, Zahlungsarten, die Startseite Ihres Shops, Lieferzeiten, Feiertage, Liefergebiete, Produktverfügbarkeit und Rabattcodes.",
        },
        bullets: {
          en: [
            "Payments go directly to your Stripe or PayPal account",
            "Webshop has its own menu, separate from the POS menu",
            "Extra fees fixed or in %, optionally only for online payment",
          ],
          de: [
            "Zahlungen gehen direkt auf Ihr Stripe- oder PayPal-Konto",
            "Eigene Webshop-Speisekarte, getrennt von der Kassen-Speisekarte",
            "Zusatzgebühren fix oder in %, optional nur bei Online-Zahlung",
          ],
        },
        image: "online-settings.webp",
        imageAlt: {
          en: "General delivery settings in the POS",
          de: "Allgemeine Liefer-Einstellungen in der Kasse",
        },
      },
      {
        heading: {
          en: "Delivery zones that pay off",
          de: "Liefergebiete, die sich rechnen",
        },
        body: {
          en: "Define zones by postcode or by distance in kilometres — each with its own minimum order, delivery fee and free-delivery threshold.",
          de: "Legen Sie Gebiete nach Postleitzahl oder Entfernung in Kilometern fest — jedes mit eigenem Mindestbestellwert, eigener Liefergebühr und Grenze für kostenlose Lieferung.",
        },
        bullets: {
          en: [
            "Guests outside your zones are told before ordering",
            "Pickup always possible",
            "Changes take effect immediately",
          ],
          de: [
            "Gäste außerhalb Ihrer Gebiete erfahren es vor der Bestellung",
            "Abholung immer möglich",
            "Änderungen wirken sofort",
          ],
        },
        image: "online-zones.webp",
        imageAlt: {
          en: "Delivery zones by distance",
          de: "Liefergebiete nach Entfernung",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Does GastroPos take a commission per order?",
          de: "Nimmt GastroPos eine Provision pro Bestellung?",
        },
        a: {
          en: "No. You pay your GastroPos plan plus the normal fees of your payment provider (Stripe or PayPal). The money goes directly to your account.",
          de: "Nein. Sie zahlen Ihr GastroPos-Paket plus die üblichen Gebühren Ihres Zahlungsanbieters (Stripe oder PayPal). Das Geld geht direkt auf Ihr Konto.",
        },
      },
      {
        q: {
          en: "Which payment methods can guests use?",
          de: "Welche Zahlungsarten können Gäste nutzen?",
        },
        a: {
          en: "Card via Stripe (Apple Pay and Google Pay appear on Stripe’s payment page where available), Klarna, PayPal, cash on delivery and card payment at your terminal on site. You switch each method on or off.",
          de: "Karte über Stripe (Apple Pay und Google Pay erscheinen auf der Stripe-Zahlungsseite, wo verfügbar), Klarna, PayPal, Barzahlung bei Lieferung und Kartenzahlung am Terminal vor Ort. Jede Zahlungsart schalten Sie einzeln an oder aus.",
        },
      },
      {
        q: {
          en: "Can guests pre-order?",
          de: "Können Gäste vorbestellen?",
        },
        a: {
          en: "Yes, for a chosen time on the same day — also while you are still closed, if you open later that day.",
          de: "Ja, für eine Wunschzeit am selben Tag — auch wenn Sie noch geschlossen haben und später am Tag öffnen.",
        },
      },
      {
        q: {
          en: "Do guests need an account?",
          de: "Brauchen Gäste ein Kundenkonto?",
        },
        a: {
          en: "No. Guests order without registering. Their contact details and order history are remembered on their device, and they can repeat an order with one tap.",
          de: "Nein. Gäste bestellen ohne Registrierung. Kontaktdaten und Bestellhistorie bleiben auf ihrem Gerät gespeichert, eine Bestellung lässt sich mit einem Tipp wiederholen.",
        },
      },
      {
        q: {
          en: "What about Lieferando, Wolt and Uber Eats?",
          de: "Was ist mit Lieferando, Wolt und Uber Eats?",
        },
        a: {
          en: "Your own webshop runs alongside these platforms. Customers from all channels are stored in your customer list. Ask us about the current status of the platform integrations.",
          de: "Ihr eigener Webshop läuft parallel zu diesen Plattformen. Kunden aus allen Kanälen landen in Ihrer Kundenliste. Fragen Sie uns nach dem aktuellen Stand der Plattform-Anbindungen.",
        },
      },
    ],
  },
  inventory: {
    slug: "inventory",
    eyebrow: {
      en: "Stock & availability",
      de: "Bestand & Verfügbarkeit",
    },
    title: {
      en: "Know what’s left — and stop selling what’s gone.",
      de: "Wissen, was noch da ist — und nichts verkaufen, was weg ist.",
    },
    lede: {
      en: "Keep a stock count per product, get an email when it runs low and mark items sold out — on the POS, in QR self-ordering and in the webshop at the same time. Allergens and additives are stored with every product.",
      de: "Führen Sie einen Bestand pro Produkt, erhalten Sie eine E-Mail bei niedrigem Bestand und markieren Sie Artikel als ausverkauft — gleichzeitig an der Kasse, in der QR-Selbstbestellung und im Webshop. Allergene und Zusatzstoffe sind bei jedem Produkt hinterlegt.",
    },
    metaTitle: {
      en: "Stock, Sold-Out & Allergens for Restaurants | GastroPos",
      de: "Bestand, Ausverkauft & Allergene für die Gastronomie | GastroPos",
    },
    metaDescription: {
      en: "Simple stock management for restaurants: stock per product, low-stock email, sold-out on POS, QR ordering and webshop, 14 allergens and additives per product.",
      de: "Einfache Bestandsführung für die Gastronomie: Bestand pro Produkt, E-Mail bei niedrigem Bestand, Ausverkauft an Kasse, QR-Bestellung und Webshop, 14 Allergene und Zusatzstoffe pro Produkt.",
    },
    heroImage: "inventory-hero.webp",
    heroAlt: {
      en: "Product editor with prices and stock on a tablet",
      de: "Produkteditor mit Preisen und Bestand auf einem Tablet",
    },
    highlights: [
      {
        value: {
          en: "Per product",
          de: "Pro Produkt",
        },
        label: {
          en: "stock count — or unlimited",
          de: "Bestand — oder unbegrenzt",
        },
      },
      {
        value: {
          en: "Email alert",
          de: "E-Mail-Warnung",
        },
        label: {
          en: "when stock runs low",
          de: "bei niedrigem Bestand",
        },
      },
      {
        value: {
          en: "1 switch",
          de: "1 Schalter",
        },
        label: {
          en: "sold out everywhere",
          de: "überall ausverkauft",
        },
      },
      {
        value: {
          en: "14 allergens",
          de: "14 Allergene",
        },
        label: {
          en: "plus additives per product",
          de: "plus Zusatzstoffe pro Produkt",
        },
      },
    ],
    features: {
      en: [
        "Stock count per product, empty means unlimited",
        "Low-stock warning by email from a threshold you set",
        "Option: mark as sold out when stock runs out",
        "“Available” switch directly in the product list",
        "Sold-out items blocked at the POS and in QR ordering, hidden in the webshop",
        "Pause single products in the webshop temporarily",
        "14 main allergens and additives per product",
        "Ingredients for “without” requests",
      ],
      de: [
        "Bestand pro Produkt, leer bedeutet unbegrenzt",
        "Warnung per E-Mail ab einer selbst gewählten Schwelle",
        "Option: als ausverkauft markieren, wenn nichts mehr da ist",
        "Schalter „Verfügbar“ direkt in der Produktliste",
        "Ausverkaufte Artikel an Kasse und QR-Bestellung gesperrt, im Webshop ausgeblendet",
        "Einzelne Produkte im Webshop vorübergehend pausieren",
        "14 Hauptallergene und Zusatzstoffe pro Produkt",
        "Zutaten für „ohne“-Wünsche",
      ],
    },
    sections: [
      {
        heading: {
          en: "Sold out — everywhere, with one switch",
          de: "Ausverkauft — überall, mit einem Schalter",
        },
        body: {
          en: "The last tiramisu is gone? Switch off “Available” in the product list. The dish is immediately blocked at the POS and in QR self-ordering and disappears from the webshop. Switch it back on when it is available again.",
          de: "Das letzte Tiramisu ist weg? Schalter „Verfügbar“ in der Produktliste aus — das Gericht ist sofort an der Kasse und in der QR-Selbstbestellung gesperrt und verschwindet aus dem Webshop. Wieder einschalten, sobald es nachgeliefert ist.",
        },
        bullets: {
          en: [
            "Visible to the whole team at once",
            "No more disappointed guests",
            "Works for every product and size",
          ],
          de: [
            "Für das ganze Team sofort sichtbar",
            "Keine enttäuschten Gäste mehr",
            "Funktioniert für jedes Produkt",
          ],
        },
        image: "inventory-soldout.webp",
        imageAlt: {
          en: "Product list with availability switches",
          de: "Produktliste mit Verfügbarkeits-Schaltern",
        },
      },
      {
        heading: {
          en: "Stock and warnings",
          de: "Bestand und Warnungen",
        },
        body: {
          en: "Enter the current stock for products you want to track and a warning level. GastroPos emails you when the stock falls below it and can mark the product as sold out when it runs out.",
          de: "Geben Sie für Produkte, die Sie verfolgen möchten, den aktuellen Bestand und eine Warnschwelle ein. GastroPos schickt Ihnen eine E-Mail, wenn der Bestand darunter fällt, und kann das Produkt bei null als ausverkauft markieren.",
        },
        bullets: {
          en: [
            "Ideal for daily specials, cakes or bottled drinks",
            "Leave empty for unlimited products",
            "Adjust stock with + / − in seconds",
          ],
          de: [
            "Ideal für Tagesgerichte, Kuchen oder Flaschengetränke",
            "Leer lassen für unbegrenzte Produkte",
            "Bestand mit + / − in Sekunden anpassen",
          ],
        },
        image: "inventory-webshop.webp",
        imageAlt: {
          en: "Product availability in the webshop settings",
          de: "Produktverfügbarkeit in den Webshop-Einstellungen",
        },
      },
      {
        heading: {
          en: "Allergens and additives, correctly labelled",
          de: "Allergene und Zusatzstoffe richtig gekennzeichnet",
        },
        body: {
          en: "Select the 14 main allergens and any additives for each product from a list. They are shown to guests in QR self-ordering and in the digital menu — the labelling you are legally required to provide.",
          de: "Wählen Sie für jedes Produkt die 14 Hauptallergene und Zusatzstoffe aus einer Liste. Gäste sehen sie in der QR-Selbstbestellung und in der digitalen Speisekarte — die Kennzeichnung, die Sie gesetzlich schulden.",
        },
        bullets: {
          en: [
            "Ingredients become “without” options",
            "Special requests as quick buttons",
            "Hide products from waiter or self-order menus",
          ],
          de: [
            "Zutaten werden zu „ohne“-Optionen",
            "Sonderwünsche als Schnellauswahl",
            "Produkte im Kellner- oder Selbstbestellungsmenü ausblenden",
          ],
        },
        image: "inventory-allergens.webp",
        imageAlt: {
          en: "Product editor with ingredients and allergens",
          de: "Produkteditor mit Zutaten und Allergenen",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is this a full inventory system with recipes?",
          de: "Ist das eine Warenwirtschaft mit Rezepturen?",
        },
        a: {
          en: "No. GastroPos tracks stock per product — ideal for items you sell as a whole, like cakes, specials or bottles. Recipes, ingredient stock and suppliers are not part of GastroPos.",
          de: "Nein. GastroPos führt den Bestand pro Produkt — ideal für Artikel, die Sie als Ganzes verkaufen, wie Kuchen, Tagesgerichte oder Flaschen. Rezepturen, Zutatenbestände und Lieferanten sind nicht Teil von GastroPos.",
        },
      },
      {
        q: {
          en: "Do I have to track stock for every product?",
          de: "Muss ich für jedes Produkt einen Bestand führen?",
        },
        a: {
          en: "No. Leave the stock empty and the product is unlimited. Track only what really runs out.",
          de: "Nein. Bleibt der Bestand leer, ist das Produkt unbegrenzt. Führen Sie nur das, was wirklich ausgehen kann.",
        },
      },
      {
        q: {
          en: "Where do guests see allergens?",
          de: "Wo sehen Gäste die Allergene?",
        },
        a: {
          en: "In QR self-ordering and the digital menu on every dish. Your staff see them in the product details at the POS.",
          de: "In der QR-Selbstbestellung und der digitalen Speisekarte bei jedem Gericht. Ihr Personal sieht sie in den Produktdetails an der Kasse.",
        },
      },
    ],
  },
  "cash-book": {
    slug: "cash-book",
    eyebrow: {
      en: "Digital cash book",
      de: "Digitales Kassenbuch",
    },
    title: {
      en: "The cash book that writes itself.",
      de: "Das Kassenbuch, das sich selbst führt.",
    },
    lede: {
      en: "Every cash sale and cash refund is booked automatically. Deposits and withdrawals — bank transfer, purchases, private withdrawal — take seconds. Entries can’t be changed or deleted, only reversed, and flow into the Z-report, DATEV and the GoBD archive.",
      de: "Jede Barzahlung und jede Bar-Erstattung wird automatisch gebucht. Ein- und Auszahlungen — Bank, Wareneinkauf, Privatentnahme — sind in Sekunden erfasst. Einträge lassen sich nicht ändern oder löschen, nur stornieren, und fließen in Z-Bericht, DATEV und GoBD-Archiv.",
    },
    metaTitle: {
      en: "Digital Cash Book for Restaurants (GoBD) | GastroPos",
      de: "Digitales Kassenbuch für die Gastronomie (GoBD) | GastroPos",
    },
    metaDescription: {
      en: "Digital cash book: automatic cash sales, deposits and withdrawals with purposes, gap-free numbering, reversal instead of deletion, DATEV accounts per purpose, GoBD archive.",
      de: "Digitales Kassenbuch: automatische Barumsätze, Ein- und Auszahlungen mit Zweck, lückenlose Nummerierung, Storno statt Löschen, DATEV-Konto pro Zweck, GoBD-Archiv.",
    },
    heroImage: "cashbook-hero.webp",
    heroAlt: {
      en: "Cash book with balance and entries on a tablet",
      de: "Kassenbuch mit Kassenstand und Buchungen auf einem Tablet",
    },
    highlights: [
      {
        value: {
          en: "Automatic",
          de: "Automatisch",
        },
        label: {
          en: "cash sales and refunds",
          de: "Barumsätze und Erstattungen",
        },
      },
      {
        value: {
          en: "Gap-free",
          de: "Lückenlos",
        },
        label: {
          en: "numbered, no edit, no delete",
          de: "nummeriert, nicht änder- oder löschbar",
        },
      },
      {
        value: {
          en: "DATEV account",
          de: "DATEV-Konto",
        },
        label: {
          en: "per purpose",
          de: "pro Buchungszweck",
        },
      },
      {
        value: {
          en: "Live balance",
          de: "Live-Kassenstand",
        },
        label: {
          en: "always up to date",
          de: "immer aktuell",
        },
      },
    ],
    features: {
      en: [
        "Cash sales and cash refunds booked automatically",
        "Deposits and withdrawals with purpose, tax rate and supplier",
        "Receipt number and date of the supplier receipt",
        "Predefined purposes: bank, private, purchases, postage, tips payout …",
        "Gap-free numbering and running cash balance",
        "No editing, no deleting — reversal with reason only",
        "Excel export, DATEV export and GoBD archive",
        "Deposits and withdrawals shown on the Z-report",
        "Cash drawer openings are logged",
      ],
      de: [
        "Barverkäufe und Bar-Erstattungen automatisch gebucht",
        "Ein- und Auszahlungen mit Zweck, Steuersatz und Lieferant",
        "Belegnummer und -datum des Fremdbelegs",
        "Vordefinierte Zwecke: Bank, Privat, Wareneinkauf, Porto, Trinkgeld-Auszahlung …",
        "Lückenlose Nummerierung und laufender Kassenstand",
        "Kein Ändern, kein Löschen — nur Storno mit Begründung",
        "Excel-Export, DATEV-Export und GoBD-Archiv",
        "Ein- und Auszahlungen im Z-Bericht ausgewiesen",
        "Öffnungen der Kassenschublade werden protokolliert",
      ],
    },
    sections: [
      {
        heading: {
          en: "Cash sales book themselves",
          de: "Barumsätze buchen sich selbst",
        },
        body: {
          en: "Every cash payment at the POS appears in the cash book automatically, and every cash refund after a cancellation is booked out. Your current cash balance is always visible at the top.",
          de: "Jede Barzahlung an der Kasse erscheint automatisch im Kassenbuch, jede Bar-Erstattung nach einem Storno wird ausgebucht. Der aktuelle Kassenstand steht immer oben.",
        },
        bullets: {
          en: [
            "Filter by period",
            "Each entry shows employee and device",
            "Excel export with one tap",
          ],
          de: [
            "Filter nach Zeitraum",
            "Jeder Eintrag zeigt Mitarbeiter und Gerät",
            "Excel-Export mit einem Tipp",
          ],
        },
        image: "cashbook-list.webp",
        imageAlt: {
          en: "Cash book list with balance, deposits and withdrawals",
          de: "Kassenbuch mit Kassenstand, Ein- und Auszahlungen",
        },
      },
      {
        heading: {
          en: "Deposits and withdrawals in seconds",
          de: "Ein- und Auszahlungen in Sekunden",
        },
        body: {
          en: "Bought parsley at the market or took cash to the bank? Choose withdrawal, the purpose, the amount and — if needed — tax rate, supplier and receipt number. Purposes are linked to your DATEV accounts.",
          de: "Petersilie auf dem Markt gekauft oder Bargeld zur Bank gebracht? Auszahlung wählen, Zweck, Betrag und — bei Bedarf — Steuersatz, Lieferant und Belegnummer eintragen. Die Zwecke sind mit Ihren DATEV-Konten verknüpft.",
        },
        bullets: {
          en: [
            "Several positions per entry",
            "Purposes and accounts configurable",
            "Keep the paper receipt with the entry number",
          ],
          de: [
            "Mehrere Positionen pro Buchung",
            "Zwecke und Konten konfigurierbar",
            "Papierbeleg mit der Buchungsnummer ablegen",
          ],
        },
        image: "cashbook-entry.webp",
        imageAlt: {
          en: "Dialog for a new cash book entry",
          de: "Dialog für eine neue Kassenbuch-Buchung",
        },
      },
      {
        heading: {
          en: "Audit-proof by design",
          de: "Prüfungssicher von Anfang an",
        },
        body: {
          en: "Entries are numbered without gaps and can’t be edited or deleted. A mistake is corrected by a reversal with a mandatory reason. Deposits and withdrawals appear on the Z-report, and the cash book is part of the DATEV export and the GoBD archive for tax audits.",
          de: "Einträge sind lückenlos nummeriert und können weder geändert noch gelöscht werden. Fehler werden per Storno mit Pflicht-Begründung korrigiert. Ein- und Auszahlungen stehen im Z-Bericht, und das Kassenbuch ist Teil des DATEV-Exports und des GoBD-Archivs für die Betriebsprüfung.",
        },
        bullets: {
          en: [
            "Z-report with deposits, withdrawals and drawer openings",
            "Tax advisor login for the books",
            "GoBD/GDPdU archive for the auditor",
          ],
          de: [
            "Z-Bericht mit Ein-, Auszahlungen und Schubladen-Öffnungen",
            "Steuerberater-Zugang für die Buchhaltung",
            "GoBD-/GDPdU-Archiv für den Prüfer",
          ],
        },
        image: "cashbook-z.webp",
        imageAlt: {
          en: "Z-reports with totals and details",
          de: "Z-Berichte mit Summen und Details",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do I still need a paper cash book?",
          de: "Brauche ich noch ein Kassenbuch auf Papier?",
        },
        a: {
          en: "GastroPos keeps the cash book digitally with gap-free numbering and without delete or edit. Discuss with your tax advisor how you file supplier receipts.",
          de: "GastroPos führt das Kassenbuch digital, lückenlos nummeriert und ohne Lösch- oder Änderungsmöglichkeit. Wie Sie Fremdbelege ablegen, besprechen Sie am besten mit Ihrem Steuerberater.",
        },
      },
      {
        q: {
          en: "Can I correct a wrong entry?",
          de: "Kann ich eine falsche Buchung korrigieren?",
        },
        a: {
          en: "Yes, by reversing it with a reason. The original entry and the reversal both remain visible — exactly as tax audits require.",
          de: "Ja, durch ein Storno mit Begründung. Originalbuchung und Storno bleiben beide sichtbar — so, wie es die Betriebsprüfung erwartet.",
        },
      },
      {
        q: {
          en: "Does my tax advisor get the cash book?",
          de: "Bekommt mein Steuerberater das Kassenbuch?",
        },
        a: {
          en: "Yes. Cash book entries are included in the DATEV export with the accounts of their purposes, and your advisor can get a login of their own.",
          de: "Ja. Kassenbuch-Buchungen sind mit den Konten ihrer Zwecke im DATEV-Export enthalten, und Ihr Steuerberater kann einen eigenen Zugang erhalten.",
        },
      },
      {
        q: {
          en: "How are tips handled?",
          de: "Wie werden Trinkgelder behandelt?",
        },
        a: {
          en: "Tips are recorded per invoice and per waiter. A cash tip payout is booked with the purpose “Tips payout”.",
          de: "Trinkgelder werden pro Rechnung und pro Kellner erfasst. Eine Bar-Auszahlung von Trinkgeld wird mit dem Zweck „Trinkgelder Auszahlung“ gebucht.",
        },
      },
    ],
  },
  "datev-export": {
    slug: "datev-export",
    eyebrow: {
      en: "DATEV & tax advisor",
      de: "DATEV & Steuerberater",
    },
    title: {
      en: "DATEV export your tax advisor can import directly.",
      de: "DATEV-Export, den Ihr Steuerberater direkt importiert.",
    },
    lede: {
      en: "Create a DATEV booking batch for any period in a few clicks — with the right revenue accounts per VAT rate and payment method, SKR03, SKR04 or SKR07. Z-reports go to your tax advisor automatically by email.",
      de: "Erstellen Sie für jeden Zeitraum mit wenigen Klicks einen DATEV-Buchungsstapel — mit den richtigen Erlöskonten je Steuersatz und Zahlungsart, SKR03, SKR04 oder SKR07. Z-Berichte gehen automatisch per E-Mail an Ihren Steuerberater.",
    },
    metaTitle: {
      en: "DATEV Export for Restaurants (SKR03/04/07) | GastroPos",
      de: "DATEV-Export für die Gastronomie (SKR03/04/07) | GastroPos",
    },
    metaDescription: {
      en: "DATEV EXTF booking batch with SKR03, SKR04 or SKR07, accounts per VAT rate and payment method, cash book included, GoBD archive, DSFinV-K and Z-report emails to your tax advisor.",
      de: "DATEV-Buchungsstapel (EXTF) mit SKR03, SKR04 oder SKR07, Konten je Steuersatz und Zahlungsart, inklusive Kassenbuch, GoBD-Archiv, DSFinV-K und Z-Bericht-Mails an den Steuerberater.",
    },
    heroImage: "datev-hero.webp",
    heroAlt: {
      en: "DATEV export and account settings on a tablet",
      de: "DATEV-Export und Kontenrahmen-Einstellungen auf einem Tablet",
    },
    highlights: [
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
          en: "Z-report email",
          de: "Z-Bericht-Mail",
        },
        label: {
          en: "daily, weekly or monthly",
          de: "täglich, wöchentlich oder monatlich",
        },
      },
      {
        value: {
          en: "GoBD archive",
          de: "GoBD-Archiv",
        },
        label: {
          en: "for the tax auditor",
          de: "für die Betriebsprüfung",
        },
      },
    ],
    features: {
      en: [
        "DATEV booking batch (EXTF) for any period within a fiscal year",
        "SKR03, SKR04 or SKR07 with standard accounts",
        "Own accounts per VAT rate and per payment method",
        "Correct split of eat-in and takeaway VAT",
        "Bookings per invoice or summed per day",
        "Advisor and client number, fiscal year start",
        "Cash book entries included, booked to their purpose accounts",
        "Send the export by email or download it",
        "GoBD/GDPdU archive and DSFinV-K export (with TSE)",
        "Automatic Z-report emails and a login for your tax advisor",
      ],
      de: [
        "DATEV-Buchungsstapel (EXTF) für jeden Zeitraum innerhalb eines Wirtschaftsjahres",
        "SKR03, SKR04 oder SKR07 mit Standardkonten",
        "Eigene Konten je Steuersatz und je Zahlungsart",
        "Richtige Aufteilung von Im-Haus- und Außer-Haus-Steuer",
        "Buchungen pro Rechnung oder pro Tag zusammengefasst",
        "Berater- und Mandantennummer, Wirtschaftsjahresbeginn",
        "Kassenbuch enthalten, auf die Konten der Zwecke gebucht",
        "Export per E-Mail senden oder herunterladen",
        "GoBD-/GDPdU-Archiv und DSFinV-K-Export (mit TSE)",
        "Automatische Z-Bericht-Mails und Zugang für den Steuerberater",
      ],
    },
    sections: [
      {
        heading: {
          en: "From period to booking batch in a minute",
          de: "Vom Zeitraum zum Buchungsstapel in einer Minute",
        },
        body: {
          en: "Choose last month or any period, enter advisor and client number once, pick SKR03, SKR04 or SKR07 and create the export. The file is ready shortly afterwards in the export list — download it or send it to your tax advisor by email.",
          de: "Wählen Sie den letzten Monat oder einen beliebigen Zeitraum, tragen Sie einmalig Berater- und Mandantennummer ein, wählen Sie SKR03, SKR04 oder SKR07 und erstellen Sie den Export. Kurz darauf liegt die Datei in der Exportliste — zum Herunterladen oder Versenden per E-Mail.",
        },
        bullets: {
          en: [
            "One booking per invoice, VAT rate and payment method",
            "Split bills are divided pro rata",
            "Cancellations as separate bookings",
          ],
          de: [
            "Eine Buchung pro Rechnung, Steuersatz und Zahlungsart",
            "Geteilte Rechnungen werden anteilig aufgeteilt",
            "Stornos als eigene Buchungen",
          ],
        },
        image: "datev-export.webp",
        imageAlt: {
          en: "DATEV export screen",
          de: "DATEV-Export-Bildschirm",
        },
      },
      {
        heading: {
          en: "Your accounts, your way",
          de: "Ihre Konten, Ihre Zuordnung",
        },
        body: {
          en: "If no accounts are set, GastroPos uses the standard accounts of your chart, e.g. 8400/8300 for 19 %/7 % revenue in SKR03. Adjust payment accounts, revenue accounts per VAT rate and cash book purposes so the export matches your tax advisor’s bookkeeping.",
          de: "Ohne eigene Einstellungen nutzt GastroPos die Standardkonten Ihres Kontenrahmens, z. B. 8400/8300 für 19 %/7 % Erlöse im SKR03. Passen Sie Zahlungskonten, Erlöskonten je Steuersatz und Kassenbuch-Zwecke so an, dass der Export zur Buchhaltung Ihres Steuerberaters passt.",
        },
        bullets: {
          en: [
            "Payment accounts for cash, card and every payment type",
            "Revenue accounts with booking key per VAT rate",
            "Austrian VAT rates included",
          ],
          de: [
            "Zahlungskonten für Bar, Karte und jede Zahlungsart",
            "Erlöskonten mit Buchungsschlüssel je Steuersatz",
            "Österreichische Steuersätze inklusive",
          ],
        },
        image: "datev-accounts.webp",
        imageAlt: {
          en: "DATEV account settings",
          de: "DATEV-Kontorahmen-Einstellungen",
        },
      },
      {
        heading: {
          en: "Your tax advisor stays informed — automatically",
          de: "Ihr Steuerberater bleibt automatisch informiert",
        },
        body: {
          en: "Create Z-reports automatically at a time of your choice and send them to your tax advisor daily, weekly or monthly by email — with a summary and a link to the PDF. Your advisor can also get a login of their own.",
          de: "Erstellen Sie Z-Berichte automatisch zu einer Uhrzeit Ihrer Wahl und senden Sie sie täglich, wöchentlich oder monatlich per E-Mail an Ihren Steuerberater — mit Zusammenfassung und Link zum PDF. Ihr Steuerberater kann zusätzlich einen eigenen Zugang bekommen.",
        },
        bullets: {
          en: [
            "Reminder when the last Z-report is too old",
            "Days without sales are skipped",
            "Z-reports as Excel, CSV or ZIP",
          ],
          de: [
            "Erinnerung, wenn der letzte Z-Bericht zu alt ist",
            "Tage ohne Umsatz werden übersprungen",
            "Z-Berichte als Excel, CSV oder ZIP",
          ],
        },
        image: "datev-advisor.webp",
        imageAlt: {
          en: "Day-end settings with automatic Z-report and email to the tax advisor",
          de: "Tagesabschluss-Einstellungen mit automatischem Z-Bericht und Mail an den Steuerberater",
        },
      },
      {
        heading: {
          en: "Ready for the tax audit",
          de: "Bereit für die Betriebsprüfung",
        },
        body: {
          en: "For an audit, export the GoBD archive: all invoices, positions, payments, taxes and the cash book as an archive with index.xml for the auditor’s software. With the fiskaly TSE add-on, the DSFinV-K export is available too.",
          de: "Für die Betriebsprüfung exportieren Sie das GoBD-Archiv: alle Rechnungen, Positionen, Zahlungen, Steuern und das Kassenbuch als Archiv mit index.xml für die Prüfsoftware. Mit der Zusatzfunktion fiskaly-TSE steht auch der DSFinV-K-Export bereit.",
        },
        bullets: {
          en: [
            "Data carrier transfer according to GDPdU",
            "Exports kept in the export list",
            "Austria: RKSV export",
          ],
          de: [
            "Datenträgerüberlassung nach GDPdU",
            "Exporte bleiben in der Exportliste",
            "Österreich: RKSV-Export",
          ],
        },
        image: "datev-gobd.webp",
        imageAlt: {
          en: "GoBD export screen",
          de: "GoBD-Export-Bildschirm",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Does GastroPos connect directly to DATEV Unternehmen online?",
          de: "Gibt es eine direkte Verbindung zu DATEV Unternehmen online?",
        },
        a: {
          en: "No. GastroPos creates a DATEV booking batch file (EXTF) that your tax advisor imports into DATEV. You can send it by email straight from GastroPos.",
          de: "Nein. GastroPos erstellt eine DATEV-Buchungsstapel-Datei (EXTF), die Ihr Steuerberater in DATEV importiert. Sie können sie direkt aus GastroPos per E-Mail senden.",
        },
      },
      {
        q: {
          en: "Which charts of accounts are supported?",
          de: "Welche Kontenrahmen werden unterstützt?",
        },
        a: {
          en: "SKR03, SKR04 and SKR07. Every account can be overridden in the DATEV account settings.",
          de: "SKR03, SKR04 und SKR07. Jedes Konto lässt sich in den DATEV-Kontorahmen-Einstellungen überschreiben.",
        },
      },
      {
        q: {
          en: "What does my tax advisor receive automatically?",
          de: "Was bekommt mein Steuerberater automatisch?",
        },
        a: {
          en: "Z-reports by email — daily, weekly or monthly — with a summary and a PDF link. DATEV exports are created on demand and sent by you.",
          de: "Z-Berichte per E-Mail — täglich, wöchentlich oder monatlich — mit Zusammenfassung und PDF-Link. DATEV-Exporte erstellen und versenden Sie bei Bedarf.",
        },
      },
      {
        q: {
          en: "Is the DSFinV-K export included?",
          de: "Ist der DSFinV-K-Export enthalten?",
        },
        a: {
          en: "The DSFinV-K export comes from the fiskaly TSE, which is booked as an add-on (15 € per month). DATEV and GoBD exports are included in every plan.",
          de: "Der DSFinV-K-Export kommt aus der fiskaly-TSE, die als Zusatzfunktion gebucht wird (15 € pro Monat). DATEV- und GoBD-Exporte sind in jedem Paket enthalten.",
        },
      },
    ],
  },
  analytics: {
    slug: "analytics",
    eyebrow: {
      en: "Analytics",
      de: "Auswertungen",
    },
    title: {
      en: "See how your business is doing — live, for any period.",
      de: "Sehen, wie Ihr Betrieb läuft — live, für jeden Zeitraum.",
    },
    lede: {
      en: "Revenue, orders, average ticket, peak hours and best sellers at a glance — compared with the previous period. Eleven analyses by hour, day, product, category, employee, table, customer and payment method.",
      de: "Umsatz, Bestellungen, Ø Bonwert, Stoßzeiten und Bestseller auf einen Blick — im Vergleich zum Vorzeitraum. Elf Auswertungen nach Stunde, Tag, Produkt, Kategorie, Mitarbeiter, Tisch, Kunde und Zahlungsart.",
    },
    metaTitle: {
      en: "Restaurant Analytics & Sales Reports | GastroPos",
      de: "Auswertungen & Umsatzstatistik für die Gastronomie | GastroPos",
    },
    metaDescription: {
      en: "Restaurant analytics: revenue, orders, average ticket, cooking and waiting times, sales by hour, day, product, category, employee, table and payment method, best and least sellers.",
      de: "Auswertungen für die Gastronomie: Umsatz, Bestellungen, Ø Bonwert, Koch- und Wartezeiten, Umsatz nach Stunde, Tag, Produkt, Kategorie, Mitarbeiter, Tisch und Zahlungsart, Bestseller und Ladenhüter.",
    },
    heroImage: "analytics-hero.webp",
    heroAlt: {
      en: "Statistics dashboard and revenue per hour on a tablet",
      de: "Statistik-Dashboard und Umsatz pro Stunde auf einem Tablet",
    },
    highlights: [
      {
        value: {
          en: "11 analyses",
          de: "11 Auswertungen",
        },
        label: {
          en: "from dashboard to least sellers",
          de: "vom Dashboard bis zum Ladenhüter",
        },
      },
      {
        value: {
          en: "Any period",
          de: "Jeder Zeitraum",
        },
        label: {
          en: "with comparison to the previous one",
          de: "mit Vergleich zum Vorzeitraum",
        },
      },
      {
        value: {
          en: "Peak hour",
          de: "Stoßstunde",
        },
        label: {
          en: "revenue per hour of the day",
          de: "Umsatz pro Tagesstunde",
        },
      },
      {
        value: {
          en: "Excel",
          de: "Excel",
        },
        label: {
          en: "export of product rankings",
          de: "Export der Produkt-Ranglisten",
        },
      },
    ],
    features: {
      en: [
        "Dashboard: orders, revenue, average ticket, discounts, cancellations",
        "Average cooking and waiting time",
        "Trend compared with the previous period",
        "Revenue by hour and by day",
        "Revenue by product, category, employee, table, customer and payment method",
        "Pie chart, bar chart or list",
        "Best sellers and least sellers with Excel export",
        "Product variations (sizes, extras) on request",
        "Quick periods: today, 7 days, this month, 30 days",
      ],
      de: [
        "Dashboard: Bestellungen, Umsatz, Ø Bonwert, Rabatte, Stornos",
        "Durchschnittliche Koch- und Wartezeit",
        "Trend im Vergleich zum Vorzeitraum",
        "Umsatz nach Stunde und nach Tag",
        "Umsatz nach Produkt, Kategorie, Mitarbeiter, Tisch, Kunde und Zahlungsart",
        "Torten-, Balkendiagramm oder Liste",
        "Bestseller und Ladenhüter mit Excel-Export",
        "Produktvariationen (Größen, Extras) auf Wunsch",
        "Schnellauswahl: heute, 7 Tage, dieser Monat, 30 Tage",
      ],
    },
    sections: [
      {
        heading: {
          en: "The day at a glance",
          de: "Der Tag auf einen Blick",
        },
        body: {
          en: "The dashboard shows the number of orders, revenue with average per order, cooking and waiting time, discounts and cancellations — plus revenue by hour, the top 5 products and the payment mix.",
          de: "Das Dashboard zeigt Bestellzahl, Umsatz mit Durchschnitt pro Bestellung, Koch- und Wartezeit, Rabatte und Stornos — dazu Umsatz nach Uhrzeit, die Top-5-Produkte und die Verteilung der Zahlungsarten.",
        },
        bullets: {
          en: [
            "Any period with start and end time",
            "Compared with the previous period",
            "Available to administrators",
          ],
          de: [
            "Beliebiger Zeitraum mit Start- und Endzeit",
            "Im Vergleich zum Vorzeitraum",
            "Für Administratoren verfügbar",
          ],
        },
        image: "analytics-dashboard.webp",
        imageAlt: {
          en: "Statistics dashboard",
          de: "Statistik-Dashboard",
        },
      },
      {
        heading: {
          en: "What sells — and what doesn’t",
          de: "Was läuft — und was nicht",
        },
        body: {
          en: "Revenue by product or category shows the share of each item in your total revenue, as a chart or list. The best and least seller lists rank products by quantity — export them to Excel for your menu planning.",
          de: "Umsatz nach Produkt oder Kategorie zeigt den Anteil jedes Artikels am Gesamtumsatz, als Diagramm oder Liste. Bestseller- und Ladenhüter-Listen sortieren nach Stückzahl — als Excel-Export für Ihre Speisekartenplanung.",
        },
        bullets: {
          en: [
            "Top product and average per product",
            "Sizes and extras as separate lines",
            "Search by product or category",
          ],
          de: [
            "Top-Produkt und Durchschnitt pro Produkt",
            "Größen und Extras als eigene Zeilen",
            "Suche nach Produkt oder Kategorie",
          ],
        },
        image: "analytics-products.webp",
        imageAlt: {
          en: "Revenue by product",
          de: "Umsatz nach Produkten",
        },
      },
      {
        heading: {
          en: "Plan staff around your peaks",
          de: "Personal nach Stoßzeiten planen",
        },
        body: {
          en: "Revenue per hour and per day reveals your peak hour, your best day and the share of weekend revenue — so you plan staff and prep for the hours that really count.",
          de: "Umsatz pro Stunde und pro Tag zeigt Ihre Stoßstunde, Ihren besten Tag und den Wochenend-Anteil — so planen Sie Personal und Vorbereitung für die Stunden, die wirklich zählen.",
        },
        bullets: {
          en: [
            "Peak hour and active hours",
            "Best day and average per day",
            "Waiter sales report for each shift",
          ],
          de: [
            "Stoßstunde und aktive Stunden",
            "Bester Tag und Durchschnitt pro Tag",
            "Kellner-Umsatzbericht für jede Schicht",
          ],
        },
        image: "analytics-hours.webp",
        imageAlt: {
          en: "Revenue per hour",
          de: "Umsatz pro Stunde",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Are analytics included?",
          de: "Sind die Auswertungen inklusive?",
        },
        a: {
          en: "Yes, in every plan. They are available to administrators.",
          de: "Ja, in jedem Paket. Sie stehen Administratoren zur Verfügung.",
        },
      },
      {
        q: {
          en: "Can I export the data?",
          de: "Kann ich die Daten exportieren?",
        },
        a: {
          en: "Best seller and least seller lists can be exported to Excel. Z-reports can be exported as Excel or CSV, and the DATEV export covers your bookkeeping.",
          de: "Bestseller- und Ladenhüter-Listen lassen sich als Excel exportieren. Z-Berichte gibt es als Excel oder CSV, für die Buchhaltung gibt es den DATEV-Export.",
        },
      },
      {
        q: {
          en: "Why do analytics differ from my Z-report?",
          de: "Warum weichen Auswertungen vom Z-Bericht ab?",
        },
        a: {
          en: "Analytics use exactly the period you choose, while a Z-report covers everything since the previous Z-report. For accounting, the Z-report is what counts.",
          de: "Auswertungen nutzen genau den gewählten Zeitraum, ein Z-Bericht umfasst alles seit dem letzten Z-Bericht. Für die Buchhaltung zählt der Z-Bericht.",
        },
      },
      {
        q: {
          en: "Do analytics show margins or food cost?",
          de: "Zeigen die Auswertungen Margen oder Wareneinsatz?",
        },
        a: {
          en: "No. GastroPos analyses revenue and quantities; purchase prices and recipes are not stored.",
          de: "Nein. GastroPos wertet Umsätze und Mengen aus; Einkaufspreise und Rezepturen werden nicht erfasst.",
        },
      },
    ],
  },
};
