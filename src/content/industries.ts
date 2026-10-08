export type IndustrySlug =
  | "restaurant"
  | "cafe"
  | "bar"
  | "bakery"
  | "food-truck"
  | "kiosk"
  | "retail"
  | "hair-salon"
  | "beauty-salon"
  | "service-business";

type Bilingual<T = string> = { en: T; de: T };

export interface IndustryContent {
  slug: IndustrySlug;
  eyebrow: Bilingual;
  title: Bilingual;
  lede: Bilingual;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  heroImage: string;
  heroAlt: Bilingual;
  highlights: { value: Bilingual; label: Bilingual }[];
  painPoints: Bilingual<string[]>;
  features: Bilingual<string[]>;
  sections: {
    heading: Bilingual;
    body: Bilingual;
    bullets: Bilingual<string[]>;
    image: string;
    imageAlt: Bilingual;
  }[];
  faq: { q: Bilingual; a: Bilingual }[];
}

export const industries: Record<IndustrySlug, IndustryContent> = {
  restaurant: {
    slug: "restaurant",
    eyebrow: {
      en: "Restaurants",
      de: "Restaurants",
    },
    title: {
      en: "The POS for restaurants with table service.",
      de: "Das Kassensystem für Restaurants mit Tischservice.",
    },
    lede: {
      en: "Tables by area, mobile ordering, kitchen display, separate bills, QR self-ordering, reservations and vouchers — in one system that is TSE-ready and delivers Z-reports and DATEV exports.",
      de: "Tische nach Bereichen, mobile Bestellaufnahme, Küchenmonitor, getrennte Rechnungen, QR-Selbstbestellung, Reservierungen und Gutscheine — in einem System, das TSE-fähig ist und Z-Berichte und DATEV-Exporte liefert.",
    },
    metaTitle: {
      en: "POS System for Restaurants | GastroPos",
      de: "Kassensystem für Restaurants | GastroPos",
    },
    metaDescription: {
      en: "Restaurant POS with table overview, mobile waiter ordering, kitchen display, split bills, QR self-ordering, reservations, vouchers, fiskaly TSE and DATEV export.",
      de: "Restaurant-Kasse mit Tischübersicht, mobiler Bestellaufnahme, Küchenmonitor, getrennten Rechnungen, QR-Selbstbestellung, Reservierungen, Gutscheinen, fiskaly-TSE und DATEV-Export.",
    },
    heroImage: "ind-restaurant.webp",
    heroAlt: {
      en: "GastroPos on a tablet, a countertop POS and a handheld in a restaurant setup",
      de: "GastroPos auf Tablet, Theken-Kasse und Handheld im Restaurant-Einsatz",
    },
    highlights: [
      {
        value: {
          en: "Tables & areas",
          de: "Tische & Bereiche",
        },
        label: {
          en: "live status per table",
          de: "Live-Status pro Tisch",
        },
      },
      {
        value: {
          en: "Kitchen display",
          de: "Küchenmonitor",
        },
        label: {
          en: "and kitchen printers by category",
          de: "und Küchendrucker nach Kategorie",
        },
      },
      {
        value: {
          en: "QR ordering",
          de: "QR-Bestellung",
        },
        label: {
          en: "order, call waiter, ask for the bill",
          de: "bestellen, Kellner rufen, Rechnung",
        },
      },
      {
        value: {
          en: "TSE · DATEV",
          de: "TSE · DATEV",
        },
        label: {
          en: "Z-report to your tax advisor",
          de: "Z-Bericht an den Steuerberater",
        },
      },
    ],
    painPoints: {
      en: [
        "Waiters walk back and forth to a fixed till",
        "Handwritten tickets get lost or misread in the kitchen",
        "Splitting the bill at a big table takes forever",
        "Guests wait to order or to pay",
        "Day-end and paperwork for the tax advisor eat your evening",
      ],
      de: [
        "Der Service läuft ständig zur festen Kasse",
        "Handzettel gehen in der Küche verloren oder werden falsch gelesen",
        "Getrennt zahlen am großen Tisch dauert ewig",
        "Gäste warten auf die Bestellung oder die Rechnung",
        "Tagesabschluss und Unterlagen für den Steuerberater kosten den Abend",
      ],
    },
    features: {
      en: [
        "Table overview by area with status, total and time",
        "Ordering on smartphone, tablet or Sunmi handheld",
        "Kitchen display and printers routed by category, courses",
        "Separate bills, split payments, move and merge tables",
        "QR self-ordering with call-waiter and bill request",
        "Reservations per table, vouchers, customer display",
        "fiskaly TSE (add-on), Z-reports, DATEV and GoBD export",
      ],
      de: [
        "Tischübersicht nach Bereichen mit Status, Summe und Zeit",
        "Bestellaufnahme auf Smartphone, Tablet oder Sunmi-Handheld",
        "Küchenmonitor und Drucker nach Kategorie, Gänge",
        "Getrennte Rechnungen, geteilte Zahlung, Tische umbuchen und zusammenlegen",
        "QR-Selbstbestellung mit Kellnerruf und Rechnungswunsch",
        "Reservierungen pro Tisch, Gutscheine, Kundendisplay",
        "fiskaly-TSE (Zusatzfunktion), Z-Berichte, DATEV- und GoBD-Export",
      ],
    },
    sections: [
      {
        heading: {
          en: "From the table to the kitchen in one tap",
          de: "Vom Tisch in die Küche mit einem Tipp",
        },
        body: {
          en: "Your team takes orders at the table with sizes, extras and notes and sends them to the kitchen display or kitchen printer. When the kitchen marks the order ready, every waiter is notified.",
          de: "Ihr Team nimmt Bestellungen mit Größen, Extras und Wünschen direkt am Tisch auf und schickt sie an Küchenmonitor oder Küchendrucker. Meldet die Küche „fertig“, bekommt der Service sofort eine Mitteilung.",
        },
        bullets: {
          en: [
            "Required choices can’t be forgotten",
            "Courses grouped for the kitchen",
            "Orders by voice with “Add with AI”",
          ],
          de: [
            "Pflichtauswahl kann nicht vergessen werden",
            "Gänge für die Küche gruppiert",
            "Bestellung per Sprache mit „Mit KI hinzufügen“",
          ],
        },
        image: "pos-tables.webp",
        imageAlt: {
          en: "Order entry on tablet and handheld",
          de: "Bestellaufnahme auf Tablet und Handheld",
        },
      },
      {
        heading: {
          en: "Pay together or separately",
          de: "Zusammen oder getrennt zahlen",
        },
        body: {
          en: "Select items one by one for a separate bill, split an amount between cash and card, take tips and redeem vouchers — at the table with a handheld or at the till.",
          de: "Artikel einzeln für eine eigene Rechnung auswählen, einen Betrag auf Bar und Karte aufteilen, Trinkgeld erfassen und Gutscheine einlösen — am Tisch mit dem Handheld oder an der Kasse.",
        },
        bullets: {
          en: [
            "ZVT terminals, SumUp or Zettle",
            "Business receipt and company invoice",
            "Tips per waiter",
          ],
          de: [
            "ZVT-Terminals, SumUp oder Zettle",
            "Bewirtungsbeleg und Firmenrechnung",
            "Trinkgeld pro Kellner",
          ],
        },
        image: "pos-split.webp",
        imageAlt: {
          en: "Separate payment on a tablet",
          de: "Getrennt zahlen auf dem Tablet",
        },
      },
      {
        heading: {
          en: "Reservations at a glance",
          de: "Reservierungen im Blick",
        },
        body: {
          en: "Enter reservations per table with time, party size and contact. The day view shows which table is booked when, and opening hours flag requests outside your opening times.",
          de: "Erfassen Sie Reservierungen pro Tisch mit Uhrzeit, Personenzahl und Kontakt. Die Tagesansicht zeigt, welcher Tisch wann belegt ist; Anfragen außerhalb der Öffnungszeiten werden markiert.",
        },
        bullets: {
          en: [
            "Day view and calendar",
            "Notes for allergies or occasions",
            "Entered by your staff",
          ],
          de: [
            "Tagesansicht und Kalender",
            "Notizen zu Allergien oder Anlässen",
            "Erfasst durch Ihr Personal",
          ],
        },
        image: "reservations.webp",
        imageAlt: {
          en: "Reservation day view",
          de: "Reservierungen in der Tagesansicht",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "Can guests order themselves?",
          de: "Können Gäste selbst bestellen?",
        },
        a: {
          en: "Yes, with QR self-ordering: each table gets its own QR code. Guests order, call the waiter or ask for the bill from their phone; payment is handled by your staff.",
          de: "Ja, mit der QR-Selbstbestellung: Jeder Tisch bekommt einen eigenen QR-Code. Gäste bestellen, rufen den Kellner oder bitten um die Rechnung vom Handy; kassiert wird vom Personal.",
        },
      },
      {
        q: {
          en: "Is there a floor plan?",
          de: "Gibt es einen Raumplan?",
        },
        a: {
          en: "Tables are shown as a grid per area (e.g. terrace, dining room) with live status — not as a drawn floor plan.",
          de: "Tische werden als Raster pro Bereich (z. B. Terrasse, Gastraum) mit Live-Status angezeigt — nicht als gezeichneter Raumplan.",
        },
      },
      {
        q: {
          en: "Can I take online reservations?",
          de: "Kann ich Online-Reservierungen annehmen?",
        },
        a: {
          en: "Reservations are entered by your staff in GastroPos; there is no public booking page.",
          de: "Reservierungen erfasst Ihr Personal in GastroPos; eine öffentliche Buchungsseite gibt es nicht.",
        },
      },
    ],
  },
  cafe: {
    slug: "cafe",
    eyebrow: {
      en: "Cafés",
      de: "Cafés",
    },
    title: {
      en: "Fast checkout for cafés — at the counter and at the table.",
      de: "Schnell kassieren im Café — an der Theke und am Tisch.",
    },
    lede: {
      en: "Counter mode for takeaway, table service for guests who stay, sizes and extras for every drink, the right VAT for eat-in and takeaway and a customer display that shows the order.",
      de: "Thekenmodus für To-go, Tischservice für Gäste, die bleiben, Größen und Extras für jedes Getränk, die richtige Mehrwertsteuer für Im Haus und Außer Haus und ein Kundendisplay, das die Bestellung zeigt.",
    },
    metaTitle: {
      en: "POS System for Cafés & Coffee Shops | GastroPos",
      de: "Kassensystem für Cafés | GastroPos",
    },
    metaDescription: {
      en: "Café POS: counter mode, table service, sizes and extras, eat-in/takeaway VAT, customer display, QR ordering, vouchers, fiskaly TSE and DATEV.",
      de: "Café-Kasse: Thekenmodus, Tischservice, Größen und Extras, Steuer Im Haus/Außer Haus, Kundendisplay, QR-Bestellung, Gutscheine, fiskaly-TSE und DATEV.",
    },
    heroImage: "ind-cafe.webp",
    heroAlt: {
      en: "Countertop POS and tablet with drink options",
      de: "Theken-Kasse und Tablet mit Getränke-Optionen",
    },
    highlights: [
      {
        value: {
          en: "1 tap",
          de: "1 Tipp",
        },
        label: {
          en: "per item at the counter",
          de: "pro Artikel an der Theke",
        },
      },
      {
        value: {
          en: "Sizes & extras",
          de: "Größen & Extras",
        },
        label: {
          en: "oat milk, extra shot, syrup",
          de: "Hafermilch, extra Shot, Sirup",
        },
      },
      {
        value: {
          en: "Eat-in / takeaway",
          de: "Im Haus / Außer Haus",
        },
        label: {
          en: "right VAT rate automatically",
          de: "richtiger Steuersatz automatisch",
        },
      },
      {
        value: {
          en: "Customer display",
          de: "Kundendisplay",
        },
        label: {
          en: "order and slideshow",
          de: "Bestellung und Slideshow",
        },
      },
    ],
    painPoints: {
      en: [
        "Queues at the counter during the morning rush",
        "Many drink variants with different surcharges",
        "Different VAT for to-go and eat-in",
        "Guests at tables need service too",
      ],
      de: [
        "Schlangen an der Theke im Morgengeschäft",
        "Viele Getränkevarianten mit unterschiedlichen Aufpreisen",
        "Unterschiedliche Steuer für To-go und Im Haus",
        "Gäste am Tisch wollen trotzdem bedient werden",
      ],
    },
    features: {
      en: [
        "Counter mode: tap a price, done",
        "Sizes, required choices and extras with surcharges",
        "Eat-in / takeaway switch with the right VAT",
        "Table service and QR self-ordering for guests who stay",
        "Customer display on Sunmi second screens",
        "Gift vouchers and discount codes",
        "Webshop for pickup orders",
      ],
      de: [
        "Thekenmodus: Preis antippen, fertig",
        "Größen, Pflichtauswahl und Extras mit Aufpreis",
        "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
        "Tischservice und QR-Selbstbestellung für Gäste, die bleiben",
        "Kundendisplay auf Sunmi-Zweitbildschirmen",
        "Gutscheine und Rabattcodes",
        "Webshop für Abholbestellungen",
      ],
    },
    sections: [
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Every drink exactly as ordered",
          de: "Jedes Getränk genau wie bestellt",
        },
        body: {
          en: "Create sizes such as small, medium and large and option groups such as milk or syrup — with a surcharge per size. Required choices make sure nothing is forgotten, and the order prints or appears on the kitchen display exactly as entered.",
          de: "Legen Sie Größen wie klein, mittel und groß an und Optionsgruppen wie Milch oder Sirup — mit Aufpreis je Größe. Pflichtauswahl sorgt dafür, dass nichts vergessen wird, und die Bestellung druckt oder erscheint genau so auf dem Küchenmonitor.",
        },
        bullets: {
          en: [
            "Extras in blue, removed ingredients in red",
            "Favourites for your best sellers",
            "Menu import from a photo with AI",
          ],
          de: [
            "Extras in Blau, abbestellte Zutaten in Rot",
            "Favoriten für Ihre Bestseller",
            "Speisekarte per Foto mit KI importieren",
          ],
        },
        image: "pos-tables.webp",
        imageAlt: {
          en: "Option dialog for a product",
          de: "Optionsdialog eines Produkts",
        },
      },
      {
        heading: {
          en: "A customer display that works for you",
          de: "Ein Kundendisplay, das für Sie arbeitet",
        },
        body: {
          en: "On devices with a second screen, guests see their order and the total while you type. Between orders, the display shows your own pictures or videos.",
          de: "Auf Geräten mit zweitem Bildschirm sehen Gäste ihre Bestellung und die Summe, während Sie tippen. Zwischen den Bestellungen zeigt das Display Ihre eigenen Bilder oder Videos.",
        },
        bullets: {
          en: [
            "Welcome and thank-you texts",
            "Full-screen or half-screen mode",
            "QR code for the digital receipt",
          ],
          de: [
            "Begrüßungs- und Danketexte",
            "Vollbild- oder Halbbildmodus",
            "QR-Code für den digitalen Beleg",
          ],
        },
        image: "customer-display.webp",
        imageAlt: {
          en: "Customer display settings with preview",
          de: "Kundendisplay-Einstellungen mit Vorschau",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "Can I use a scale for cakes by weight?",
          de: "Kann ich eine Waage für Kuchen nach Gewicht nutzen?",
        },
        a: {
          en: "No, GastroPos does not support scales. Sell cakes per piece or enter an open price.",
          de: "Nein, Waagen werden nicht unterstützt. Verkaufen Sie Kuchen pro Stück oder mit freiem Preis.",
        },
      },
      {
        q: {
          en: "Is there a loyalty programme?",
          de: "Gibt es ein Treueprogramm?",
        },
        a: {
          en: "There are no stamp cards or points. You can use gift vouchers and discount codes instead.",
          de: "Stempelkarten oder Punkte gibt es nicht. Stattdessen können Sie Gutscheine und Rabattcodes nutzen.",
        },
      },
      {
        q: {
          en: "Can guests pay with their phone?",
          de: "Können Gäste mit dem Handy bezahlen?",
        },
        a: {
          en: "Apple Pay and Google Pay work via your card terminal (ZVT, SumUp or Zettle). In the webshop, guests pay online.",
          de: "Apple Pay und Google Pay funktionieren über Ihr Kartenterminal (ZVT, SumUp oder Zettle). Im Webshop zahlen Gäste online.",
        },
      },
    ],
  },
  bar: {
    slug: "bar",
    eyebrow: {
      en: "Bars & pubs",
      de: "Bars & Kneipen",
    },
    title: {
      en: "Keep the tabs, the rounds and the bar printer under control.",
      de: "Deckel, Runden und Bardrucker im Griff.",
    },
    lede: {
      en: "Run every table or seat at the bar as an open tab, add rounds in seconds, print drinks at the bar and split the bill when guests leave — with TSE, tips per waiter and a clean day-end.",
      de: "Führen Sie jeden Tisch oder Thekenplatz als offenen Deckel, buchen Sie Runden in Sekunden, drucken Sie Getränke an der Bar und teilen Sie die Rechnung, wenn Gäste gehen — mit TSE, Trinkgeld pro Kellner und sauberem Tagesabschluss.",
    },
    metaTitle: {
      en: "POS System for Bars & Pubs | GastroPos",
      de: "Kassensystem für Bars & Kneipen | GastroPos",
    },
    metaDescription: {
      en: "Bar POS: open tabs per table or seat, quick rounds with favourites, bar printer routing, split bills, tips per waiter, QR call-waiter, fiskaly TSE and DATEV.",
      de: "Bar-Kasse: offene Deckel pro Tisch oder Platz, schnelle Runden mit Favoriten, Bardrucker, getrennte Rechnungen, Trinkgeld pro Kellner, QR-Kellnerruf, fiskaly-TSE und DATEV.",
    },
    heroImage: "ind-bar.webp",
    heroAlt: {
      en: "Tables with open tabs on a tablet and notifications on a handheld",
      de: "Tische mit offenen Deckeln auf dem Tablet und Mitteilungen auf dem Handheld",
    },
    highlights: [
      {
        value: {
          en: "Open tabs",
          de: "Offene Deckel",
        },
        label: {
          en: "per table or seat",
          de: "pro Tisch oder Platz",
        },
      },
      {
        value: {
          en: "Bar printer",
          de: "Bardrucker",
        },
        label: {
          en: "drinks routed by category",
          de: "Getränke nach Kategorie",
        },
      },
      {
        value: {
          en: "Split",
          de: "Teilen",
        },
        label: {
          en: "by item, cash and card",
          de: "nach Artikel, Bar und Karte",
        },
      },
      {
        value: {
          en: "Tips",
          de: "Trinkgeld",
        },
        label: {
          en: "per waiter in the report",
          de: "pro Kellner im Bericht",
        },
      },
    ],
    painPoints: {
      en: [
        "Tabs on paper get lost or argued about",
        "Rounds have to be typed in again and again",
        "Splitting at closing time causes chaos",
        "Tips and cash are hard to settle per shift",
      ],
      de: [
        "Deckel auf Papier gehen verloren oder werden diskutiert",
        "Runden müssen immer wieder neu eingetippt werden",
        "Getrennt zahlen zur Sperrstunde sorgt für Chaos",
        "Trinkgeld und Bargeld sind pro Schicht schwer abzurechnen",
      ],
    },
    features: {
      en: [
        "Tables or seats as open tabs with live total",
        "Favourites and quick access for your most ordered drinks",
        "Bar and kitchen printers routed by category",
        "Split by item, between cash and card, move and merge tables",
        "Waiter sales report and tips per employee",
        "QR self-ordering with call-waiter button",
        "fiskaly TSE, Z-report and cash book",
      ],
      de: [
        "Tische oder Plätze als offene Deckel mit Live-Summe",
        "Favoriten und Schnellzugriff für die meistbestellten Getränke",
        "Bar- und Küchendrucker nach Kategorie",
        "Teilen nach Artikel, zwischen Bar und Karte, Tische umbuchen und zusammenlegen",
        "Kellner-Umsatzbericht und Trinkgeld pro Mitarbeiter",
        "QR-Selbstbestellung mit Kellnerruf",
        "fiskaly-TSE, Z-Bericht und Kassenbuch",
      ],
    },
    sections: [
      {
        heading: {
          en: "Tabs that never get lost",
          de: "Deckel, die nie verloren gehen",
        },
        body: {
          en: "Every table — or every seat you set up as a table — collects its orders until the guest pays. The overview shows the running total and the time of the first order, so you always know who still has to pay.",
          de: "Jeder Tisch — oder jeder Platz, den Sie als Tisch anlegen — sammelt seine Bestellungen, bis der Gast zahlt. Die Übersicht zeigt die laufende Summe und die Uhrzeit der ersten Bestellung, damit Sie immer wissen, wer noch offen hat.",
        },
        bullets: {
          en: [
            "Move single items or whole tabs",
            "Split or merge tables",
            "Synchronised on every device",
          ],
          de: [
            "Einzelne Artikel oder ganze Deckel umbuchen",
            "Tische teilen oder zusammenlegen",
            "Auf allen Geräten synchron",
          ],
        },
        image: "pos-split.webp",
        imageAlt: {
          en: "Separate payment of a tab",
          de: "Getrennt zahlen eines Deckels",
        },
      },
      {
        heading: {
          en: "Guests call — you claim it",
          de: "Gäste rufen — Sie übernehmen",
        },
        body: {
          en: "With QR self-ordering, guests can order the next round or call a waiter from their phone. Your team gets a notification and claims it with one tap.",
          de: "Mit der QR-Selbstbestellung bestellen Gäste die nächste Runde oder rufen den Kellner vom Handy aus. Ihr Team erhält eine Mitteilung und übernimmt sie mit einem Tipp.",
        },
        bullets: {
          en: [
            "Bill requests with preferred payment method",
            "Orders can be approved before they reach the bar",
            "Guest page in six languages",
          ],
          de: [
            "Rechnungswunsch mit gewünschter Zahlungsart",
            "Bestellungen auf Wunsch vor dem Bardruck freigeben",
            "Gästeseite in sechs Sprachen",
          ],
        },
        image: "waiter-notify.webp",
        imageAlt: {
          en: "Notifications on a handheld",
          de: "Mitteilungen auf dem Handheld",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "Is there happy-hour pricing?",
          de: "Gibt es Happy-Hour-Preise?",
        },
        a: {
          en: "There is no automatic time-based pricing. You can create a happy-hour category that is only visible during set hours, or use discounts.",
          de: "Automatische zeitabhängige Preise gibt es nicht. Sie können eine Happy-Hour-Kategorie anlegen, die nur zu festen Zeiten sichtbar ist, oder Rabatte nutzen.",
        },
      },
      {
        q: {
          en: "Can I pre-authorise a card for a tab?",
          de: "Kann ich eine Karte für einen Deckel vorautorisieren?",
        },
        a: {
          en: "No. Card payments are taken at the end via your ZVT terminal, SumUp or Zettle.",
          de: "Nein. Kartenzahlungen werden am Ende über Ihr ZVT-Terminal, SumUp oder Zettle abgewickelt.",
        },
      },
      {
        q: {
          en: "Does GastroPos calculate pour cost?",
          de: "Berechnet GastroPos die Ausschank-Kosten?",
        },
        a: {
          en: "No. GastroPos analyses revenue and quantities, not purchase prices.",
          de: "Nein. GastroPos wertet Umsätze und Mengen aus, keine Einkaufspreise.",
        },
      },
    ],
  },
  bakery: {
    slug: "bakery",
    eyebrow: {
      en: "Bakeries",
      de: "Bäckereien",
    },
    title: {
      en: "Fast counter sales for bakeries — with pickup orders online.",
      de: "Schneller Thekenverkauf für Bäckereien — mit Online-Vorbestellung zur Abholung.",
    },
    lede: {
      en: "Sell at the counter in seconds, switch between eat-in and takeaway VAT, let customers order cakes and sandwiches online for pickup and mark sold-out items everywhere with one switch.",
      de: "Verkaufen Sie an der Theke in Sekunden, wechseln Sie zwischen Steuer Im Haus und Außer Haus, lassen Sie Kunden Kuchen und Brötchen online zur Abholung bestellen und markieren Sie Ausverkauftes überall mit einem Schalter.",
    },
    metaTitle: {
      en: "POS System for Bakeries | GastroPos",
      de: "Kassensystem für Bäckereien | GastroPos",
    },
    metaDescription: {
      en: "Bakery POS: counter mode with barcode and open prices, eat-in/takeaway VAT, webshop pickup orders, sold-out switch, allergens, vouchers, fiskaly TSE and DATEV.",
      de: "Bäckerei-Kasse: Thekenmodus mit Barcode und freien Preisen, Steuer Im Haus/Außer Haus, Webshop-Abholbestellungen, Ausverkauft-Schalter, Allergene, Gutscheine, fiskaly-TSE und DATEV.",
    },
    heroImage: "ind-bakery.webp",
    heroAlt: {
      en: "Countertop POS with receipt and product list on a tablet",
      de: "Theken-Kasse mit Bon und Produktliste auf dem Tablet",
    },
    highlights: [
      {
        value: {
          en: "Counter mode",
          de: "Thekenmodus",
        },
        label: {
          en: "tap, scan, pay",
          de: "tippen, scannen, kassieren",
        },
      },
      {
        value: {
          en: "Eat-in / takeaway",
          de: "Im Haus / Außer Haus",
        },
        label: {
          en: "right VAT rate automatically",
          de: "richtiger Steuersatz automatisch",
        },
      },
      {
        value: {
          en: "Pickup online",
          de: "Online-Abholung",
        },
        label: {
          en: "orders for later today",
          de: "Bestellungen für später am Tag",
        },
      },
      {
        value: {
          en: "Allergens",
          de: "Allergene",
        },
        label: {
          en: "per product",
          de: "pro Produkt",
        },
      },
    ],
    painPoints: {
      en: [
        "Morning queues need a fast till",
        "Eat-in coffee and takeaway rolls carry different VAT",
        "Customers want to order ahead and just pick up",
        "Sold-out products are still being offered",
      ],
      de: [
        "Morgendliche Schlangen brauchen eine schnelle Kasse",
        "Kaffee im Haus und Brötchen zum Mitnehmen haben unterschiedliche Steuer",
        "Kunden wollen vorbestellen und nur abholen",
        "Ausverkaufte Produkte werden weiter angeboten",
      ],
    },
    features: {
      en: [
        "Counter mode with favourites, barcode and open prices",
        "Eat-in / takeaway switch with the right VAT rate",
        "Webshop for pickup orders on the same day",
        "Sold-out switch for POS, QR and webshop",
        "Stock count per product with email warning",
        "Allergens and additives per product",
        "Gift vouchers, cash book, fiskaly TSE and DATEV",
      ],
      de: [
        "Thekenmodus mit Favoriten, Barcode und freien Preisen",
        "Umschalter Im Haus / Außer Haus mit richtigem Steuersatz",
        "Webshop für Abholbestellungen am selben Tag",
        "Ausverkauft-Schalter für Kasse, QR und Webshop",
        "Bestand pro Produkt mit E-Mail-Warnung",
        "Allergene und Zusatzstoffe pro Produkt",
        "Gutscheine, Kassenbuch, fiskaly-TSE und DATEV",
      ],
    },
    sections: [
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Order online, pick up at the counter",
          de: "Online bestellen, an der Theke abholen",
        },
        body: {
          en: "With the GastroPos webshop, customers order for pickup — as soon as possible or at a chosen time the same day — and pay online or at the counter. Orders arrive at the POS with a signal tone.",
          de: "Mit dem GastroPos-Webshop bestellen Kunden zur Abholung — so schnell wie möglich oder zu einer Wunschzeit am selben Tag — und zahlen online oder an der Theke. Bestellungen kommen mit Signalton an der Kasse an.",
        },
        bullets: {
          en: [
            "Card, Klarna, PayPal or pay on site",
            "Pickup only — delivery optional",
            "Notes for special requests",
          ],
          de: [
            "Karte, Klarna, PayPal oder Zahlung vor Ort",
            "Nur Abholung — Lieferung optional",
            "Notizen für Sonderwünsche",
          ],
        },
        image: "online-orders.webp",
        imageAlt: {
          en: "Online order in the delivery system",
          de: "Online-Bestellung im Liefersystem",
        },
      },
      {
        heading: {
          en: "Sold out means sold out",
          de: "Ausverkauft heißt ausverkauft",
        },
        body: {
          en: "When the last cheesecake is gone, switch off “Available” — it is blocked at the POS and hidden in the webshop at once. For items you bake in fixed quantities, keep a stock count and get an email when it runs low.",
          de: "Ist der letzte Käsekuchen weg, schalten Sie „Verfügbar“ aus — er ist sofort an der Kasse gesperrt und im Webshop ausgeblendet. Für Artikel in fester Stückzahl führen Sie einen Bestand und bekommen eine E-Mail, wenn er knapp wird.",
        },
        bullets: {
          en: [
            "One switch for all channels",
            "Allergens visible for customers",
            "Pause products in the webshop",
          ],
          de: [
            "Ein Schalter für alle Kanäle",
            "Allergene für Kunden sichtbar",
            "Produkte im Webshop pausieren",
          ],
        },
        image: "inventory-soldout.webp",
        imageAlt: {
          en: "Product list with availability switches",
          de: "Produktliste mit Verfügbarkeits-Schaltern",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can I connect a scale?",
          de: "Kann ich eine Waage anschließen?",
        },
        a: {
          en: "No, scales are not supported. Sell by piece or enter an open price.",
          de: "Nein, Waagen werden nicht unterstützt. Verkaufen Sie pro Stück oder mit freiem Preis.",
        },
      },
      {
        q: {
          en: "Can customers pre-order for another day?",
          de: "Können Kunden für einen anderen Tag vorbestellen?",
        },
        a: {
          en: "Online pre-orders are possible for a chosen time on the same day.",
          de: "Online-Vorbestellungen sind für eine Wunschzeit am selben Tag möglich.",
        },
      },
      {
        q: {
          en: "Can I invoice wholesale customers?",
          de: "Kann ich Großkunden Rechnungen stellen?",
        },
        a: {
          en: "Receipts can carry a business recipient (company invoice). Special wholesale prices or standing orders are not part of GastroPos.",
          de: "Belege können einen Firmenempfänger erhalten (Firmenrechnung). Großkundenpreise oder Daueraufträge sind nicht Teil von GastroPos.",
        },
      },
    ],
  },
  "food-truck": {
    slug: "food-truck",
    eyebrow: {
      en: "Food trucks",
      de: "Foodtrucks",
    },
    title: {
      en: "Your till fits in your pocket.",
      de: "Ihre Kasse passt in die Hosentasche.",
    },
    lede: {
      en: "Sell from a smartphone or a Sunmi handheld with a built-in printer, take card payments with SumUp, Zettle or a ZVT terminal and keep selling in counter mode even when the mobile connection drops.",
      de: "Verkaufen Sie vom Smartphone oder einem Sunmi-Handheld mit eingebautem Drucker, nehmen Sie Karten mit SumUp, Zettle oder ZVT-Terminal an und kassieren Sie im Thekenmodus weiter, auch wenn das Mobilnetz ausfällt.",
    },
    metaTitle: {
      en: "Mobile POS for Food Trucks | GastroPos",
      de: "Mobile Kasse für Foodtrucks | GastroPos",
    },
    metaDescription: {
      en: "Food truck POS on phone or Sunmi handheld, Bluetooth receipt printer, SumUp/Zettle/ZVT card payments, optional offline checkout, webshop pickup orders, fiskaly TSE.",
      de: "Foodtruck-Kasse auf Smartphone oder Sunmi-Handheld, Bluetooth-Bondrucker, Kartenzahlung mit SumUp/Zettle/ZVT, optionales Offline-Kassieren, Webshop-Abholung, fiskaly-TSE.",
    },
    heroImage: "ind-foodtruck.webp",
    heroAlt: {
      en: "Countertop POS and two handhelds with menu and order",
      de: "Theken-Kasse und zwei Handhelds mit Speisekarte und Bestellung",
    },
    highlights: [
      {
        value: {
          en: "Phone or handheld",
          de: "Smartphone oder Handheld",
        },
        label: {
          en: "with built-in printer",
          de: "mit eingebautem Drucker",
        },
      },
      {
        value: {
          en: "SumUp · Zettle · ZVT",
          de: "SumUp · Zettle · ZVT",
        },
        label: {
          en: "card payments",
          de: "Kartenzahlung",
        },
      },
      {
        value: {
          en: "Offline",
          de: "Offline",
        },
        label: {
          en: "optional in counter mode",
          de: "optional im Thekenmodus",
        },
      },
      {
        value: {
          en: "Pickup online",
          de: "Online-Abholung",
        },
        label: {
          en: "orders while you cook",
          de: "Bestellungen, während Sie kochen",
        },
      },
    ],
    painPoints: {
      en: [
        "Little space for hardware in the truck",
        "Mobile internet drops at events",
        "Card payments are expected everywhere",
        "Long queues at peak times",
      ],
      de: [
        "Wenig Platz für Hardware im Wagen",
        "Mobiles Internet bricht auf Events ab",
        "Kartenzahlung wird überall erwartet",
        "Lange Schlangen zur Stoßzeit",
      ],
    },
    features: {
      en: [
        "Runs on Android/iOS phones and Sunmi handhelds",
        "Bluetooth or built-in receipt printer",
        "Card payments via SumUp, Zettle or ZVT terminal",
        "Counter mode with favourites and open prices",
        "Optional offline checkout with automatic transfer",
        "Webshop for pickup orders",
        "fiskaly TSE, Z-report and DATEV",
      ],
      de: [
        "Läuft auf Android-/iOS-Smartphones und Sunmi-Handhelds",
        "Bluetooth- oder eingebauter Bondrucker",
        "Kartenzahlung über SumUp, Zettle oder ZVT-Terminal",
        "Thekenmodus mit Favoriten und freien Preisen",
        "Optionales Offline-Kassieren mit automatischer Übertragung",
        "Webshop für Abholbestellungen",
        "fiskaly-TSE, Z-Bericht und DATEV",
      ],
    },
    sections: [
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Orders by phone, ready when they arrive",
          de: "Vorbestellt per Handy, fertig bei Ankunft",
        },
        body: {
          en: "Share your webshop link on social media: guests order for pickup, pay online or on site, and the order appears on your POS with a signal tone.",
          de: "Teilen Sie Ihren Webshop-Link in den sozialen Medien: Gäste bestellen zur Abholung, zahlen online oder vor Ort, und die Bestellung erscheint mit Signalton an Ihrer Kasse.",
        },
        bullets: {
          en: [
            "Close the shop for today with one switch",
            "Pickup times in 15-minute steps",
            "Tips at checkout",
          ],
          de: [
            "Shop mit einem Schalter für heute schließen",
            "Abholzeiten im 15-Minuten-Takt",
            "Trinkgeld im Checkout",
          ],
        },
        image: "online-orders.webp",
        imageAlt: {
          en: "Online order in the delivery system",
          de: "Online-Bestellung im Liefersystem",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "What happens without internet?",
          de: "Was passiert ohne Internet?",
        },
        a: {
          en: "In counter mode you can enable “Allow offline checkout”: receipts are stored on the device and transferred automatically when the connection returns. Note that the cloud TSE can only sign once the device is online again.",
          de: "Im Thekenmodus können Sie „Offline kassieren erlauben“ aktivieren: Belege werden auf dem Gerät gespeichert und automatisch übertragen, sobald die Verbindung zurück ist. Beachten Sie, dass die Cloud-TSE erst wieder signieren kann, wenn das Gerät online ist.",
        },
      },
      {
        q: {
          en: "Can I take cards on the phone itself?",
          de: "Kann ich Karten direkt am Handy annehmen?",
        },
        a: {
          en: "Card payments run through a SumUp or Zettle reader or a ZVT terminal connected to GastroPos.",
          de: "Kartenzahlungen laufen über ein SumUp- oder Zettle-Lesegerät oder ein ZVT-Terminal, das mit GastroPos verbunden ist.",
        },
      },
      {
        q: {
          en: "I have several trucks — is there a group dashboard?",
          de: "Ich habe mehrere Trucks — gibt es ein gemeinsames Dashboard?",
        },
        a: {
          en: "All devices in one GastroPos account share the same menu and reports. Separate locations with their own reporting are not available.",
          de: "Alle Geräte eines GastroPos-Kontos teilen Speisekarte und Berichte. Getrennte Standorte mit eigenem Reporting gibt es nicht.",
        },
      },
    ],
  },
  kiosk: {
    slug: "kiosk",
    eyebrow: {
      en: "Kiosks & snack bars",
      de: "Kiosk & Imbiss",
    },
    title: {
      en: "Fast checkout for kiosks and snack bars.",
      de: "Schnell kassieren im Kiosk und Imbiss.",
    },
    lede: {
      en: "Counter mode with barcode scanner for packaged goods, quick keys for snacks and drinks, QR ordering at the tables and phone orders with caller ID — all TSE-ready.",
      de: "Thekenmodus mit Barcode-Scanner für verpackte Ware, Schnelltasten für Snacks und Getränke, QR-Bestellung an den Tischen und Telefonbestellungen mit Anruferkennung — alles TSE-fähig.",
    },
    metaTitle: {
      en: "POS System for Kiosks & Snack Bars | GastroPos",
      de: "Kassensystem für Kiosk & Imbiss | GastroPos",
    },
    metaDescription: {
      en: "POS for kiosks and snack bars: counter mode, barcode scanner, quick keys, QR table ordering, phone orders with caller ID, delivery, vouchers, fiskaly TSE.",
      de: "Kasse für Kiosk und Imbiss: Thekenmodus, Barcode-Scanner, Schnelltasten, QR-Bestellung am Tisch, Telefonbestellungen mit Anruferkennung, Lieferung, Gutscheine, fiskaly-TSE.",
    },
    heroImage: "ind-kiosk.webp",
    heroAlt: {
      en: "Countertop POS and QR ordering page on a smartphone",
      de: "Theken-Kasse und QR-Bestellseite auf dem Smartphone",
    },
    highlights: [
      {
        value: {
          en: "Barcode",
          de: "Barcode",
        },
        label: {
          en: "scanner or camera",
          de: "Scanner oder Kamera",
        },
      },
      {
        value: {
          en: "Quick keys",
          de: "Schnelltasten",
        },
        label: {
          en: "favourites and open prices",
          de: "Favoriten und freie Preise",
        },
      },
      {
        value: {
          en: "QR ordering",
          de: "QR-Bestellung",
        },
        label: {
          en: "at the tables",
          de: "an den Tischen",
        },
      },
      {
        value: {
          en: "Caller ID",
          de: "Anruferkennung",
        },
        label: {
          en: "for phone orders (add-on)",
          de: "für Telefonbestellungen (Zusatz)",
        },
      },
    ],
    painPoints: {
      en: [
        "Hundreds of packaged items with barcodes",
        "Snacks and drinks need to be fast",
        "Phone orders get mixed up",
        "Guests at the tables want to reorder",
      ],
      de: [
        "Hunderte verpackte Artikel mit Barcode",
        "Snacks und Getränke müssen schnell gehen",
        "Telefonbestellungen gehen durcheinander",
        "Gäste an den Tischen wollen nachbestellen",
      ],
    },
    features: {
      en: [
        "Counter mode with barcode scanner or camera",
        "Unknown barcode? Create the product on the spot",
        "Favourites, quick access and open prices",
        "QR self-ordering at the tables",
        "Phone orders and delivery with own drivers",
        "Caller ID via FRITZ!Box (add-on)",
        "fiskaly TSE, cash book and DATEV",
      ],
      de: [
        "Thekenmodus mit Barcode-Scanner oder Kamera",
        "Unbekannter Barcode? Produkt direkt anlegen",
        "Favoriten, Schnellzugriff und freie Preise",
        "QR-Selbstbestellung an den Tischen",
        "Telefonbestellungen und Lieferung mit eigenen Fahrern",
        "Anruferkennung über FRITZ!Box (Zusatzfunktion)",
        "fiskaly-TSE, Kassenbuch und DATEV",
      ],
    },
    sections: [
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "QR ordering instead of a self-service terminal",
          de: "QR-Bestellung statt Bestellterminal",
        },
        body: {
          en: "Instead of an expensive terminal, guests order from their own phone: they scan the QR code on the table, choose dishes with extras and the order goes straight to your kitchen.",
          de: "Statt eines teuren Terminals bestellen Gäste vom eigenen Handy: QR-Code am Tisch scannen, Gerichte mit Extras wählen, die Bestellung geht direkt in Ihre Küche.",
        },
        bullets: {
          en: [
            "No app, no extra hardware",
            "Allergens visible on every dish",
            "Payment at the counter",
          ],
          de: [
            "Keine App, keine zusätzliche Hardware",
            "Allergene bei jedem Gericht sichtbar",
            "Bezahlung an der Theke",
          ],
        },
        image: "qr-guest.webp",
        imageAlt: {
          en: "QR ordering page on two smartphones",
          de: "QR-Bestellseite auf zwei Smartphones",
        },
      },
      {
        heading: {
          en: "Phone orders without mix-ups",
          de: "Telefonbestellungen ohne Durcheinander",
        },
        body: {
          en: "Enter phone orders in the delivery system with the customer’s address. With caller ID, the caller’s customer record opens automatically. Assign deliveries to your drivers or prepare for pickup.",
          de: "Erfassen Sie Telefonbestellungen im Liefersystem mit der Adresse des Kunden. Mit Anruferkennung öffnet sich der Kunde des Anrufers automatisch. Lieferungen weisen Sie Ihren Fahrern zu oder bereiten sie zur Abholung vor.",
        },
        bullets: {
          en: [
            "Customer list with addresses",
            "Delivery slip with a map QR code",
            "Webshop for online orders",
          ],
          de: [
            "Kundenliste mit Adressen",
            "Lieferschein mit Karten-QR-Code",
            "Webshop für Online-Bestellungen",
          ],
        },
        image: "online-orders.webp",
        imageAlt: {
          en: "Order in the delivery system",
          de: "Bestellung im Liefersystem",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is there a self-service kiosk mode?",
          de: "Gibt es einen Kiosk-Modus für Selbstbedienung?",
        },
        a: {
          en: "No. For self-service, GastroPos uses QR ordering on the guests’ own phones.",
          de: "Nein. Für Selbstbedienung nutzt GastroPos die QR-Bestellung auf den Handys der Gäste.",
        },
      },
      {
        q: {
          en: "Can I sell lottery tickets or top-up cards?",
          de: "Kann ich Lotto oder Guthabenkarten verkaufen?",
        },
        a: {
          en: "You can sell any item with an open price. Special integrations for lottery or top-up providers do not exist.",
          de: "Sie können jeden Artikel mit freiem Preis verkaufen. Spezielle Anbindungen an Lotto- oder Guthaben-Anbieter gibt es nicht.",
        },
      },
      {
        q: {
          en: "Is there a bottle deposit (Pfand) function?",
          de: "Gibt es eine Pfand-Funktion?",
        },
        a: {
          en: "There is no dedicated deposit handling. Many shops create deposit as a separate product.",
          de: "Eine eigene Pfand-Verwaltung gibt es nicht. Viele Betriebe legen das Pfand als eigenen Artikel an.",
        },
      },
    ],
  },
  retail: {
    slug: "retail",
    eyebrow: {
      en: "Small shops",
      de: "Kleine Läden",
    },
    title: {
      en: "A simple, TSE-ready till for small shops.",
      de: "Eine einfache, TSE-fähige Kasse für kleine Läden.",
    },
    lede: {
      en: "Scan barcodes, sell with quick keys, keep a stock count per product and sell gift vouchers — with fiskaly TSE, cash book and DATEV export. Ideal for shops with a clear range of products.",
      de: "Barcodes scannen, mit Schnelltasten verkaufen, Bestand pro Produkt führen und Gutscheine verkaufen — mit fiskaly-TSE, Kassenbuch und DATEV-Export. Ideal für Läden mit überschaubarem Sortiment.",
    },
    metaTitle: {
      en: "Simple POS for Small Shops | GastroPos",
      de: "Einfache Kasse für kleine Läden | GastroPos",
    },
    metaDescription: {
      en: "Simple POS for small shops: barcode scanning, quick keys, stock per product, sold-out, gift vouchers, customer list, fiskaly TSE, cash book and DATEV export.",
      de: "Einfache Kasse für kleine Läden: Barcode-Scan, Schnelltasten, Bestand pro Produkt, Ausverkauft, Gutscheine, Kundenliste, fiskaly-TSE, Kassenbuch und DATEV-Export.",
    },
    heroImage: "ind-retail.webp",
    heroAlt: {
      en: "Countertop POS and product stock on a tablet",
      de: "Theken-Kasse und Produktbestand auf dem Tablet",
    },
    highlights: [
      {
        value: {
          en: "Barcode",
          de: "Barcode",
        },
        label: {
          en: "scanner or camera",
          de: "Scanner oder Kamera",
        },
      },
      {
        value: {
          en: "Stock",
          de: "Bestand",
        },
        label: {
          en: "per product with warning",
          de: "pro Produkt mit Warnung",
        },
      },
      {
        value: {
          en: "Vouchers",
          de: "Gutscheine",
        },
        label: {
          en: "as gift or credit",
          de: "als Geschenk oder Guthaben",
        },
      },
      {
        value: {
          en: "TSE · DATEV",
          de: "TSE · DATEV",
        },
        label: {
          en: "ready for the tax office",
          de: "bereit fürs Finanzamt",
        },
      },
    ],
    painPoints: {
      en: [
        "Old registers are not TSE-compliant",
        "Typing prices by hand causes mistakes",
        "Sold-out items are still on the shelf list",
        "Month-end bookkeeping takes hours",
      ],
      de: [
        "Alte Registrierkassen sind nicht TSE-konform",
        "Preise von Hand tippen führt zu Fehlern",
        "Ausverkaufte Artikel stehen noch auf der Liste",
        "Die Buchhaltung zum Monatsende kostet Stunden",
      ],
    },
    features: {
      en: [
        "Barcode scanner or camera, product created on unknown barcode",
        "Quick keys and open prices",
        "Stock per product with email warning",
        "Gift vouchers, also as store credit",
        "Customer list with addresses",
        "Cash book, Z-report, DATEV and GoBD",
      ],
      de: [
        "Barcode-Scanner oder Kamera, Produkt bei unbekanntem Barcode anlegen",
        "Schnelltasten und freie Preise",
        "Bestand pro Produkt mit E-Mail-Warnung",
        "Gutscheine, auch als Guthaben",
        "Kundenliste mit Adressen",
        "Kassenbuch, Z-Bericht, DATEV und GoBD",
      ],
    },
    sections: [
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Know what is in stock",
          de: "Wissen, was auf Lager ist",
        },
        body: {
          en: "Keep a stock count per product, get an email when it falls below your warning level and mark items sold out with one switch.",
          de: "Führen Sie einen Bestand pro Produkt, erhalten Sie eine E-Mail, wenn er unter Ihre Warnschwelle fällt, und markieren Sie Artikel mit einem Schalter als ausverkauft.",
        },
        bullets: {
          en: [
            "Leave empty for unlimited items",
            "Adjust with + / −",
            "Product list with availability switch",
          ],
          de: [
            "Leer lassen für unbegrenzte Artikel",
            "Mit + / − anpassen",
            "Produktliste mit Verfügbarkeits-Schalter",
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
          en: "Gift vouchers that sell themselves",
          de: "Gutscheine, die sich selbst verkaufen",
        },
        body: {
          en: "Sell value vouchers or vouchers for a specific service, send them by email with a QR code, check the balance and redeem them at the till — partly or completely. A liability report shows what is still open.",
          de: "Verkaufen Sie Wertgutscheine oder Gutscheine für eine bestimmte Leistung, versenden Sie sie per E-Mail mit QR-Code, prüfen Sie das Guthaben und lösen Sie sie an der Kasse ein — ganz oder teilweise. Ein Bericht zeigt, was noch offen ist.",
        },
        bullets: {
          en: [
            "Value and service vouchers",
            "Top up, void and check balance",
            "Redeem in the payment dialog",
          ],
          de: [
            "Wert- und Leistungsgutscheine",
            "Aufladen, sperren und Guthaben prüfen",
            "Einlösen direkt im Bezahldialog",
          ],
        },
        image: "vouchers.webp",
        imageAlt: {
          en: "Voucher overview on a tablet",
          de: "Gutschein-Übersicht auf dem Tablet",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can I manage sizes and colours per SKU?",
          de: "Kann ich Größen und Farben pro Artikelnummer verwalten?",
        },
        a: {
          en: "No. GastroPos manages products with price levels and options, but not size/colour variants with their own stock. It suits shops with a manageable range.",
          de: "Nein. GastroPos verwaltet Produkte mit Preisstufen und Optionen, aber keine Größen-/Farbvarianten mit eigenem Bestand. Es passt für Läden mit überschaubarem Sortiment.",
        },
      },
      {
        q: {
          en: "Can I print price labels?",
          de: "Kann ich Preisetiketten drucken?",
        },
        a: {
          en: "No, label printing is not supported.",
          de: "Nein, Etikettendruck wird nicht unterstützt.",
        },
      },
      {
        q: {
          en: "Is there an online shop integration (e.g. Shopify)?",
          de: "Gibt es eine Onlineshop-Anbindung (z. B. Shopify)?",
        },
        a: {
          en: "No. GastroPos has its own webshop for food ordering, but no connection to retail shop systems.",
          de: "Nein. GastroPos hat einen eigenen Webshop für Essensbestellungen, aber keine Anbindung an Shopsysteme.",
        },
      },
    ],
  },
  "hair-salon": {
    slug: "hair-salon",
    eyebrow: {
      en: "Hair salons & barbers",
      de: "Friseure & Barbershops",
    },
    title: {
      en: "A TSE-ready till for your salon — with gift vouchers.",
      de: "Eine TSE-fähige Kasse für Ihren Salon — mit Gutscheinen.",
    },
    lede: {
      en: "Create your services and products with prices, check out in seconds, sell value and service vouchers and record tips per employee. Every receipt is TSE-signed and lands in your DATEV export.",
      de: "Legen Sie Ihre Leistungen und Produkte mit Preisen an, kassieren Sie in Sekunden, verkaufen Sie Wert- und Leistungsgutscheine und erfassen Sie Trinkgeld pro Mitarbeiter. Jeder Beleg ist TSE-signiert und landet im DATEV-Export.",
    },
    metaTitle: {
      en: "POS for Hair Salons & Barbers | GastroPos",
      de: "Kasse für Friseure & Barbershops | GastroPos",
    },
    metaDescription: {
      en: "TSE-ready POS for hair salons and barbers: services and retail products, card payments, gift and service vouchers, tips per employee, e-receipts, DATEV export.",
      de: "TSE-fähige Kasse für Friseure und Barbershops: Leistungen und Verkaufsprodukte, Kartenzahlung, Wert- und Leistungsgutscheine, Trinkgeld pro Mitarbeiter, E-Belege, DATEV-Export.",
    },
    heroImage: "ind-salon.webp",
    heroAlt: {
      en: "Voucher overview on a tablet and payment on a countertop POS",
      de: "Gutschein-Übersicht auf dem Tablet und Bezahlung an der Theken-Kasse",
    },
    highlights: [
      {
        value: {
          en: "Services",
          de: "Leistungen",
        },
        label: {
          en: "and products on one receipt",
          de: "und Produkte auf einem Beleg",
        },
      },
      {
        value: {
          en: "Vouchers",
          de: "Gutscheine",
        },
        label: {
          en: "value or service",
          de: "Wert oder Leistung",
        },
      },
      {
        value: {
          en: "Tips",
          de: "Trinkgeld",
        },
        label: {
          en: "per employee",
          de: "pro Mitarbeiter",
        },
      },
      {
        value: {
          en: "fiskaly TSE",
          de: "fiskaly-TSE",
        },
        label: {
          en: "plus DATEV export",
          de: "plus DATEV-Export",
        },
      },
    ],
    painPoints: {
      en: [
        "Old registers are not TSE-compliant",
        "Gift vouchers on paper are hard to track",
        "Tips are counted by hand at the end of the day",
      ],
      de: [
        "Alte Registrierkassen sind nicht TSE-konform",
        "Papiergutscheine sind schwer nachzuverfolgen",
        "Trinkgeld wird abends von Hand ausgezählt",
      ],
    },
    features: {
      en: [
        "Services and retail products with prices",
        "Fast checkout with cash or card (ZVT, SumUp, Zettle)",
        "Value and service vouchers, also by email",
        "Tips recorded per employee",
        "Digital receipt via QR code or email",
        "fiskaly TSE, cash book and DATEV export",
      ],
      de: [
        "Leistungen und Verkaufsprodukte mit Preisen",
        "Schnell kassieren bar oder mit Karte (ZVT, SumUp, Zettle)",
        "Wert- und Leistungsgutscheine, auch per E-Mail",
        "Trinkgeld pro Mitarbeiter erfasst",
        "Digitaler Beleg per QR-Code oder E-Mail",
        "fiskaly-TSE, Kassenbuch und DATEV-Export",
      ],
    },
    sections: [
      {
        heading: {
          en: "Gift vouchers that sell themselves",
          de: "Gutscheine, die sich selbst verkaufen",
        },
        body: {
          en: "Sell value vouchers or vouchers for a specific service, send them by email with a QR code, check the balance and redeem them at the till — partly or completely. A liability report shows what is still open.",
          de: "Verkaufen Sie Wertgutscheine oder Gutscheine für eine bestimmte Leistung, versenden Sie sie per E-Mail mit QR-Code, prüfen Sie das Guthaben und lösen Sie sie an der Kasse ein — ganz oder teilweise. Ein Bericht zeigt, was noch offen ist.",
        },
        bullets: {
          en: [
            "Value and service vouchers",
            "Top up, void and check balance",
            "Redeem in the payment dialog",
          ],
          de: [
            "Wert- und Leistungsgutscheine",
            "Aufladen, sperren und Guthaben prüfen",
            "Einlösen direkt im Bezahldialog",
          ],
        },
        image: "vouchers.webp",
        imageAlt: {
          en: "Voucher overview on a tablet",
          de: "Gutschein-Übersicht auf dem Tablet",
        },
      },
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "Can customers book appointments online?",
          de: "Können Kunden online Termine buchen?",
        },
        a: {
          en: "No. GastroPos has no appointment calendar. Use your booking tool for appointments and GastroPos for checkout.",
          de: "Nein. GastroPos hat keinen Terminkalender. Nutzen Sie für Termine Ihr Buchungstool und GastroPos zum Kassieren.",
        },
      },
      {
        q: {
          en: "Can I calculate commission per employee?",
          de: "Kann ich Provisionen pro Mitarbeiter berechnen?",
        },
        a: {
          en: "There is no commission calculation. Revenue and tips per employee are available in the reports.",
          de: "Eine Provisionsberechnung gibt es nicht. Umsatz und Trinkgeld pro Mitarbeiter stehen in den Berichten.",
        },
      },
      {
        q: {
          en: "Do I need a TSE?",
          de: "Brauche ich eine TSE?",
        },
        a: {
          en: "Yes, every electronic till in Germany needs one. GastroPos uses the fiskaly cloud TSE, booked as an add-on for 15 € per month.",
          de: "Ja, jede elektronische Kasse in Deutschland braucht eine. GastroPos nutzt die fiskaly Cloud-TSE, buchbar als Zusatzfunktion für 15 € pro Monat.",
        },
      },
    ],
  },
  "beauty-salon": {
    slug: "beauty-salon",
    eyebrow: {
      en: "Beauty & cosmetics",
      de: "Kosmetik & Beauty",
    },
    title: {
      en: "Check out treatments and sell vouchers — compliant and simple.",
      de: "Behandlungen kassieren und Gutscheine verkaufen — einfach und rechtssicher.",
    },
    lede: {
      en: "Your treatments and care products in one till, gift vouchers for value or for a specific treatment, card payments and digital receipts — TSE-signed and ready for your tax advisor.",
      de: "Ihre Behandlungen und Pflegeprodukte in einer Kasse, Gutscheine über einen Wert oder eine bestimmte Behandlung, Kartenzahlung und digitale Belege — TSE-signiert und bereit für Ihren Steuerberater.",
    },
    metaTitle: {
      en: "POS for Beauty Salons & Spas | GastroPos",
      de: "Kasse für Kosmetikstudios & Spas | GastroPos",
    },
    metaDescription: {
      en: "TSE-ready POS for beauty salons and spas: treatments and products, value and service vouchers, card payments, tips per employee, e-receipts, DATEV export.",
      de: "TSE-fähige Kasse für Kosmetikstudios und Spas: Behandlungen und Produkte, Wert- und Leistungsgutscheine, Kartenzahlung, Trinkgeld pro Mitarbeiter, E-Belege, DATEV-Export.",
    },
    heroImage: "ind-beauty.webp",
    heroAlt: {
      en: "Creating a voucher on a tablet next to a countertop POS",
      de: "Gutschein erstellen auf dem Tablet neben einer Theken-Kasse",
    },
    highlights: [
      {
        value: {
          en: "Treatment vouchers",
          de: "Leistungsgutscheine",
        },
        label: {
          en: "for a specific treatment",
          de: "für eine bestimmte Behandlung",
        },
      },
      {
        value: {
          en: "By email",
          de: "Per E-Mail",
        },
        label: {
          en: "voucher with QR code",
          de: "Gutschein mit QR-Code",
        },
      },
      {
        value: {
          en: "Card payment",
          de: "Kartenzahlung",
        },
        label: {
          en: "ZVT, SumUp, Zettle",
          de: "ZVT, SumUp, Zettle",
        },
      },
      {
        value: {
          en: "fiskaly TSE",
          de: "fiskaly-TSE",
        },
        label: {
          en: "plus DATEV export",
          de: "plus DATEV-Export",
        },
      },
    ],
    painPoints: {
      en: [
        "Vouchers are your best seller — but hard to manage",
        "Partly redeemed vouchers need a clear balance",
        "Your till has to be TSE-compliant",
      ],
      de: [
        "Gutscheine sind Ihr Bestseller — aber schwer zu verwalten",
        "Teilweise eingelöste Gutscheine brauchen ein klares Guthaben",
        "Ihre Kasse muss TSE-konform sein",
      ],
    },
    features: {
      en: [
        "Treatments and care products with prices",
        "Value and service vouchers with balance",
        "Vouchers by email with QR code",
        "Card payments via ZVT, SumUp or Zettle",
        "Tips per employee, digital receipts",
        "fiskaly TSE, cash book and DATEV export",
      ],
      de: [
        "Behandlungen und Pflegeprodukte mit Preisen",
        "Wert- und Leistungsgutscheine mit Guthaben",
        "Gutscheine per E-Mail mit QR-Code",
        "Kartenzahlung über ZVT, SumUp oder Zettle",
        "Trinkgeld pro Mitarbeiter, digitale Belege",
        "fiskaly-TSE, Kassenbuch und DATEV-Export",
      ],
    },
    sections: [
      {
        heading: {
          en: "Vouchers for value or for a treatment",
          de: "Gutscheine über einen Wert oder eine Behandlung",
        },
        body: {
          en: "Create a value voucher or a service voucher for a specific treatment, send it by email with a QR code or print it. Redeem it at checkout — the remaining balance stays on the voucher.",
          de: "Erstellen Sie einen Wertgutschein oder einen Leistungsgutschein für eine bestimmte Behandlung, versenden Sie ihn per E-Mail mit QR-Code oder drucken Sie ihn. Beim Kassieren einlösen — das Restguthaben bleibt erhalten.",
        },
        bullets: {
          en: ["Optional expiry date", "Top up and void", "Report of open vouchers"],
          de: ["Optionales Ablaufdatum", "Aufladen und sperren", "Bericht über offene Gutscheine"],
        },
        image: "vouchers-create.webp",
        imageAlt: {
          en: "Creating a voucher",
          de: "Gutschein erstellen",
        },
      },
      {
        heading: {
          en: "Counter mode: tap, scan, pay",
          de: "Thekenmodus: tippen, scannen, kassieren",
        },
        body: {
          en: "Tap a price and the item is on the receipt, scan barcodes with a scanner or the camera, enter open prices for anything not on the menu. “Exact cash” and “Card” finish a sale in one tap; the full payment dialog handles change, discounts, tips and vouchers.",
          de: "Preis antippen und der Artikel steht auf dem Bon, Barcodes per Scanner oder Kamera erfassen, freie Preise für alles, was nicht auf der Karte steht. „Bar passend“ und „Karte“ schließen einen Verkauf mit einem Tipp ab; der Bezahldialog kann Rückgeld, Rabatt, Trinkgeld und Gutscheine.",
        },
        bullets: {
          en: [
            "Eat-in / takeaway switch with the right VAT",
            "Optional offline checkout",
            "Cash drawer and receipt printer via Wi-Fi, Bluetooth or USB",
          ],
          de: [
            "Umschalter Im Haus / Außer Haus mit richtiger Steuer",
            "Optionales Offline-Kassieren",
            "Kassenschublade und Bondrucker über WLAN, Bluetooth oder USB",
          ],
        },
        image: "pos-counter.webp",
        imageAlt: {
          en: "Payment dialog on a countertop POS",
          de: "Bezahldialog auf einer Theken-Kasse",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "Can customers book appointments online?",
          de: "Können Kunden online Termine buchen?",
        },
        a: {
          en: "No. GastroPos has no appointment calendar. Use your booking tool for appointments and GastroPos for checkout.",
          de: "Nein. GastroPos hat keinen Terminkalender. Nutzen Sie für Termine Ihr Buchungstool und GastroPos zum Kassieren.",
        },
      },
      {
        q: {
          en: "Can I calculate commission per employee?",
          de: "Kann ich Provisionen pro Mitarbeiter berechnen?",
        },
        a: {
          en: "There is no commission calculation. Revenue and tips per employee are available in the reports.",
          de: "Eine Provisionsberechnung gibt es nicht. Umsatz und Trinkgeld pro Mitarbeiter stehen in den Berichten.",
        },
      },
      {
        q: {
          en: "Do I need a TSE?",
          de: "Brauche ich eine TSE?",
        },
        a: {
          en: "Yes, every electronic till in Germany needs one. GastroPos uses the fiskaly cloud TSE, booked as an add-on for 15 € per month.",
          de: "Ja, jede elektronische Kasse in Deutschland braucht eine. GastroPos nutzt die fiskaly Cloud-TSE, buchbar als Zusatzfunktion für 15 € pro Monat.",
        },
      },
    ],
  },
  "service-business": {
    slug: "service-business",
    eyebrow: {
      en: "Service businesses",
      de: "Dienstleister",
    },
    title: {
      en: "A compliant till for service businesses — on any device.",
      de: "Eine rechtssichere Kasse für Dienstleister — auf jedem Gerät.",
    },
    lede: {
      en: "Create your services with prices, check out on a tablet or smartphone, issue digital receipts and company invoices, sell vouchers and hand your tax advisor a clean DATEV export.",
      de: "Legen Sie Ihre Leistungen mit Preisen an, kassieren Sie auf Tablet oder Smartphone, stellen Sie digitale Belege und Firmenrechnungen aus, verkaufen Sie Gutscheine und geben Sie Ihrem Steuerberater einen sauberen DATEV-Export.",
    },
    metaTitle: {
      en: "POS for Service Businesses | GastroPos",
      de: "Kasse für Dienstleister | GastroPos",
    },
    metaDescription: {
      en: "TSE-ready POS for service businesses: services with prices, checkout on tablet or phone, digital receipts, company invoices, vouchers, card payments, DATEV export.",
      de: "TSE-fähige Kasse für Dienstleister: Leistungen mit Preisen, Kassieren auf Tablet oder Smartphone, digitale Belege, Firmenrechnungen, Gutscheine, Kartenzahlung, DATEV-Export.",
    },
    heroImage: "ind-service.webp",
    heroAlt: {
      en: "Invoice list on a tablet and checkout on a handheld",
      de: "Rechnungsliste auf dem Tablet und Kassieren auf dem Handheld",
    },
    highlights: [
      {
        value: {
          en: "Any device",
          de: "Jedes Gerät",
        },
        label: {
          en: "tablet, phone or Sunmi",
          de: "Tablet, Smartphone oder Sunmi",
        },
      },
      {
        value: {
          en: "E-receipt",
          de: "E-Beleg",
        },
        label: {
          en: "via QR code or email",
          de: "per QR-Code oder E-Mail",
        },
      },
      {
        value: {
          en: "Company invoice",
          de: "Firmenrechnung",
        },
        label: {
          en: "with business recipient",
          de: "mit Firmenempfänger",
        },
      },
      {
        value: {
          en: "DATEV",
          de: "DATEV",
        },
        label: {
          en: "SKR03 · 04 · 07",
          de: "SKR03 · 04 · 07",
        },
      },
    ],
    painPoints: {
      en: [
        "Cash payments need a TSE-compliant till",
        "Customers want receipts by email",
        "Bookkeeping should be ready for the tax advisor",
      ],
      de: [
        "Barzahlungen brauchen eine TSE-konforme Kasse",
        "Kunden wollen Belege per E-Mail",
        "Die Buchhaltung soll für den Steuerberater bereit sein",
      ],
    },
    features: {
      en: [
        "Services as products with prices and VAT",
        "Checkout on tablet, phone or Sunmi handheld",
        "Digital receipt via QR code or email",
        "Company invoice with business recipient",
        "Vouchers, card payments, customer list",
        "fiskaly TSE, Z-report, DATEV and GoBD",
      ],
      de: [
        "Leistungen als Produkte mit Preis und Steuer",
        "Kassieren auf Tablet, Smartphone oder Sunmi-Handheld",
        "Digitaler Beleg per QR-Code oder E-Mail",
        "Firmenrechnung mit Firmenempfänger",
        "Gutscheine, Kartenzahlung, Kundenliste",
        "fiskaly-TSE, Z-Bericht, DATEV und GoBD",
      ],
    },
    sections: [
      {
        heading: {
          en: "Every receipt at hand",
          de: "Jeder Beleg griffbereit",
        },
        body: {
          en: "All receipts are listed with filters for period, payment method and type. Send a receipt as PDF or email, add a business recipient for a company invoice or show the e-receipt QR code.",
          de: "Alle Belege mit Filtern nach Zeitraum, Zahlungsart und Typ. Senden Sie einen Beleg als PDF oder E-Mail, ergänzen Sie einen Firmenempfänger für eine Firmenrechnung oder zeigen Sie den QR-Code des E-Belegs.",
        },
        bullets: {
          en: [
            "Search by number",
            "Cancellation as signed counter-receipt",
            "Revenue figures at the top",
          ],
          de: ["Suche nach Nummer", "Storno als signierter Gegenbeleg", "Umsatzkennzahlen oben"],
        },
        image: "invoices.webp",
        imageAlt: {
          en: "Invoice list with details",
          de: "Rechnungsliste mit Details",
        },
      },
      {
        heading: {
          en: "Gift vouchers that sell themselves",
          de: "Gutscheine, die sich selbst verkaufen",
        },
        body: {
          en: "Sell value vouchers or vouchers for a specific service, send them by email with a QR code, check the balance and redeem them at the till — partly or completely. A liability report shows what is still open.",
          de: "Verkaufen Sie Wertgutscheine oder Gutscheine für eine bestimmte Leistung, versenden Sie sie per E-Mail mit QR-Code, prüfen Sie das Guthaben und lösen Sie sie an der Kasse ein — ganz oder teilweise. Ein Bericht zeigt, was noch offen ist.",
        },
        bullets: {
          en: [
            "Value and service vouchers",
            "Top up, void and check balance",
            "Redeem in the payment dialog",
          ],
          de: [
            "Wert- und Leistungsgutscheine",
            "Aufladen, sperren und Guthaben prüfen",
            "Einlösen direkt im Bezahldialog",
          ],
        },
        image: "vouchers.webp",
        imageAlt: {
          en: "Voucher overview on a tablet",
          de: "Gutschein-Übersicht auf dem Tablet",
        },
      },
      {
        heading: {
          en: "Compliant from the first receipt",
          de: "Rechtssicher ab dem ersten Beleg",
        },
        body: {
          en: "Every receipt is signed by the fiskaly cloud TSE (add-on), cancellations are separate counter-receipts, and Z-reports can be created automatically. DATEV and GoBD exports are ready for your tax advisor at any time.",
          de: "Jeder Beleg wird von der fiskaly Cloud-TSE signiert (Zusatzfunktion), Stornos sind eigene Gegenbelege, Z-Berichte entstehen auf Wunsch automatisch. DATEV- und GoBD-Exporte sind jederzeit für Ihren Steuerberater bereit.",
        },
        bullets: {
          en: [
            "Correct VAT for eat-in and takeaway",
            "Digital receipt via QR code or email",
            "Login for your tax advisor",
          ],
          de: [
            "Richtige Mehrwertsteuer für Im Haus und Außer Haus",
            "Digitaler Beleg per QR-Code oder E-Mail",
            "Zugang für Ihren Steuerberater",
          ],
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
          en: "Can customers book appointments online?",
          de: "Können Kunden online Termine buchen?",
        },
        a: {
          en: "No. GastroPos has no appointment calendar. Use your booking tool for appointments and GastroPos for checkout.",
          de: "Nein. GastroPos hat keinen Terminkalender. Nutzen Sie für Termine Ihr Buchungstool und GastroPos zum Kassieren.",
        },
      },
      {
        q: {
          en: "Can I calculate commission per employee?",
          de: "Kann ich Provisionen pro Mitarbeiter berechnen?",
        },
        a: {
          en: "There is no commission calculation. Revenue and tips per employee are available in the reports.",
          de: "Eine Provisionsberechnung gibt es nicht. Umsatz und Trinkgeld pro Mitarbeiter stehen in den Berichten.",
        },
      },
      {
        q: {
          en: "Do I need a TSE?",
          de: "Brauche ich eine TSE?",
        },
        a: {
          en: "Yes, every electronic till in Germany needs one. GastroPos uses the fiskaly cloud TSE, booked as an add-on for 15 € per month.",
          de: "Ja, jede elektronische Kasse in Deutschland braucht eine. GastroPos nutzt die fiskaly Cloud-TSE, buchbar als Zusatzfunktion für 15 € pro Monat.",
        },
      },
    ],
  },
};
