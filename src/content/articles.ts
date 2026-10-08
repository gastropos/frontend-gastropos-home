import type { ProductSlug } from "./products";

export interface Localized<T = string> {
  en: T;
  de: T;
}

export type ArticleBlock =
  | { type: "h2" | "p" | "note"; text: Localized }
  | { type: "ul"; items: Localized<string[]> };

export interface Article {
  slug: string;
  published: string;
  updated: string;
  readingMinutes: number;
  category: Localized;
  title: Localized;
  description: Localized;
  image: string;
  imageAlt: Localized;
  keywords: string[];
  takeaways: Localized<string[]>;
  body: ArticleBlock[];
  faq: { q: Localized; a: Localized }[];
  related: ProductSlug[];
}

export const articles: Article[] = [
  {
    slug: "mehrwertsteuer-gastronomie-2026",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 6,
    category: {
      en: "Tax",
      de: "Steuern",
    },
    title: {
      en: "7 % VAT on food in restaurants since 2026: what to change in your till",
      de: "7 % Mehrwertsteuer auf Speisen seit 2026: Was Sie in der Kasse umstellen müssen",
    },
    description: {
      en: "Since 1 January 2026, food served in German restaurants is permanently taxed at 7 %, drinks stay at 19 %. How to set up VAT rates, combo deals and takeaway correctly in your POS.",
      de: "Seit 1. Januar 2026 gilt für Speisen in der Gastronomie dauerhaft 7 % Mehrwertsteuer, Getränke bleiben bei 19 %. So stellen Sie Steuersätze, Menüs und Außer-Haus-Verkauf in der Kasse richtig ein.",
    },
    image: "datev-accounts.webp",
    imageAlt: {
      en: "VAT rates and DATEV accounts in GastroPos",
      de: "Steuersätze und DATEV-Konten in GastroPos",
    },
    keywords: [
      "Mehrwertsteuer Gastronomie 2026",
      "7 Prozent Speisen",
      "Umsatzsteuer Restaurant",
      "Kasse Steuersatz umstellen",
    ],
    takeaways: {
      en: [
        "Food served in restaurants: 7 % VAT permanently since 1 January 2026.",
        "Drinks remain at 19 % — with a few exceptions such as milk drinks with at least 75 % milk.",
        "Combo deals with food and drinks must be split between the two rates.",
        "Check every product's VAT rate in your till and your DATEV revenue accounts.",
      ],
      de: [
        "Speisen in der Gastronomie: seit 1. Januar 2026 dauerhaft 7 % Mehrwertsteuer.",
        "Getränke bleiben bei 19 % — mit wenigen Ausnahmen wie Milchgetränken mit mindestens 75 % Milchanteil.",
        "Menüs aus Speise und Getränk müssen auf beide Steuersätze aufgeteilt werden.",
        "Prüfen Sie den Steuersatz jedes Artikels in der Kasse und Ihre DATEV-Erlöskonten.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "What changed on 1 January 2026?",
          de: "Was hat sich am 1. Januar 2026 geändert?",
        },
      },
      {
        type: "p",
        text: {
          en: "The Bundestag passed the permanent reduction and the Bundesrat approved it on 19 December 2025. Since 1 January 2026, restaurant and catering services for food are taxed at the reduced rate of 7 % — in restaurants, cafés, food trucks, catering and communal catering. Drinks are explicitly excluded and stay at the standard rate of 19 %.",
          de: "Der Bundestag hat die dauerhafte Senkung beschlossen, der Bundesrat hat am 19. Dezember 2025 zugestimmt. Seit dem 1. Januar 2026 werden Restaurant- und Verpflegungsdienstleistungen für Speisen mit dem ermäßigten Satz von 7 % besteuert — im Restaurant, im Café, am Foodtruck, beim Catering und in der Gemeinschaftsverpflegung. Getränke sind ausdrücklich ausgenommen und bleiben beim Regelsatz von 19 %.",
        },
      },
      {
        type: "p",
        text: {
          en: "For many businesses this ended a years-long back and forth: the reduced rate had applied temporarily from mid-2020 to the end of 2023, and in 2024 and 2025 eat-in food was taxed at 19 % again. That means: until 2025 you had to distinguish between eat-in (19 %) and takeaway (7 %) for food. Since 2026, food is at 7 % in both cases.",
          de: "Für viele Betriebe endet damit ein jahrelanges Hin und Her: Der ermäßigte Satz galt befristet von Mitte 2020 bis Ende 2023, 2024 und 2025 wurden Speisen im Haus wieder mit 19 % besteuert. Das heißt: Bis 2025 mussten Sie bei Speisen zwischen Verzehr im Haus (19 %) und Außer-Haus-Verkauf (7 %) unterscheiden. Seit 2026 gilt für Speisen in beiden Fällen 7 %.",
        },
      },
      {
        type: "h2",
        text: {
          en: "What stays at 19 %?",
          de: "Was bleibt bei 19 %?",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "All drinks served — soft drinks, coffee, beer, wine, spirits.",
            "Exceptions: milk and milk-mix drinks with at least 75 % milk (for example many cappuccino or latte variants) and tap water can be taxed at 7 %. The exact recipe matters, so check it with your tax advisor.",
            "Non-food items you sell, such as merchandise or vouchers for specific services, follow their own rules.",
          ],
          de: [
            "Alle ausgeschenkten Getränke — Softdrinks, Kaffee, Bier, Wein, Spirituosen.",
            "Ausnahmen: Milch- und Milchmischgetränke mit mindestens 75 % Milchanteil (zum Beispiel viele Cappuccino- oder Latte-Varianten) und Leitungswasser können mit 7 % besteuert werden. Hier kommt es auf das genaue Rezept an — klären Sie das mit Ihrer Steuerberatung.",
            "Andere Waren, etwa Merchandise oder Gutscheine für bestimmte Leistungen, folgen eigenen Regeln.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Combo deals: splitting food and drinks",
          de: "Menüs und Kombi-Angebote: Speise und Getränk aufteilen",
        },
      },
      {
        type: "p",
        text: {
          en: "A lunch menu with a drink, a breakfast buffet with coffee or an all-inclusive package contains both rates. The total price has to be split between the 7 % part (food) and the 19 % part (drinks). Agree with your tax advisor which allocation method you use, document it and apply it consistently.",
          de: "Ein Mittagsmenü mit Getränk, ein Frühstücksbuffet mit Kaffee oder eine Pauschale enthalten beide Steuersätze. Der Gesamtpreis muss auf den 7-%-Anteil (Speise) und den 19-%-Anteil (Getränk) aufgeteilt werden. Stimmen Sie mit Ihrer Steuerberatung ab, welchen Aufteilungsmaßstab Sie verwenden, dokumentieren Sie ihn und wenden Sie ihn einheitlich an.",
        },
      },
      {
        type: "p",
        text: {
          en: "In practice it is often easiest to book combo deals as separate items in the till — the food at 7 % and the drink at 19 % — and show the discount on one of the items. That way the receipt, the TSE data and the DATEV export are right automatically.",
          de: "In der Praxis ist es oft am einfachsten, Menüs in der Kasse als getrennte Artikel zu buchen — die Speise mit 7 %, das Getränk mit 19 % — und den Preisvorteil bei einem der Artikel abzubilden. Dann stimmen Beleg, TSE-Daten und DATEV-Export automatisch.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Checklist for your till",
          de: "Checkliste für Ihre Kasse",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Go through the menu: every food item at 7 %, every drink at 19 % (except the milk exceptions).",
            "Remove separate eat-in and takeaway prices that only existed because of the tax rates — or keep them deliberately for price reasons.",
            "Check combo deals and decide on an allocation method.",
            "Compare the VAT rates with your DATEV revenue accounts so that each rate lands on the right account.",
            "After the first day: compare the Z-report with what you expect and send it to your tax advisor.",
          ],
          de: [
            "Speisekarte durchgehen: jede Speise auf 7 %, jedes Getränk auf 19 % (außer den Milch-Ausnahmen).",
            "Getrennte Im-Haus- und Außer-Haus-Preise entfernen, die es nur wegen der Steuersätze gab — oder bewusst aus Preisgründen behalten.",
            "Menüs und Kombi-Angebote prüfen und einen Aufteilungsmaßstab festlegen.",
            "Steuersätze mit den DATEV-Erlöskonten abgleichen, damit jeder Satz auf dem richtigen Konto landet.",
            "Nach dem ersten Tag: Z-Bericht mit Ihren Erwartungen vergleichen und an die Steuerberatung schicken.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "How GastroPos handles it",
          de: "So geht es mit GastroPos",
        },
      },
      {
        type: "p",
        text: {
          en: "In GastroPos each product has its own VAT rate, so food and drinks on the same receipt are taxed correctly. The DATEV export books revenue per VAT rate and payment type to the accounts you set in the DATEV settings (SKR03, SKR04 or SKR07), and the Z-report shows the totals per VAT rate.",
          de: "In GastroPos hat jeder Artikel seinen eigenen Steuersatz, sodass Speisen und Getränke auf demselben Beleg korrekt besteuert werden. Der DATEV-Export bucht die Umsätze je Steuersatz und Zahlungsart auf die Konten, die Sie in den DATEV-Einstellungen festlegen (SKR03, SKR04 oder SKR07), und der Z-Bericht zeigt die Summen je Steuersatz.",
        },
      },
      {
        type: "note",
        text: {
          en: "This article is general information, not tax or legal advice. Please clarify the details for your business with your tax advisor.",
          de: "Dieser Artikel ist eine allgemeine Information und keine Steuer- oder Rechtsberatung. Klären Sie die Details für Ihren Betrieb mit Ihrer Steuerberatung.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is food in restaurants taxed at 7 % in 2026?",
          de: "Gilt 2026 für Speisen im Restaurant 7 % Mehrwertsteuer?",
        },
        a: {
          en: "Yes. Since 1 January 2026, food served in restaurants, cafés and catering is permanently taxed at 7 %.",
          de: "Ja. Seit 1. Januar 2026 gilt für Speisen in Restaurants, Cafés und beim Catering dauerhaft der ermäßigte Satz von 7 %.",
        },
      },
      {
        q: {
          en: "Which VAT rate applies to drinks?",
          de: "Welcher Steuersatz gilt für Getränke?",
        },
        a: {
          en: "Drinks stay at 19 %. Exceptions are milk drinks with at least 75 % milk and tap water.",
          de: "Getränke bleiben bei 19 %. Ausnahmen sind Milchgetränke mit mindestens 75 % Milchanteil und Leitungswasser.",
        },
      },
      {
        q: {
          en: "Do I still need different eat-in and takeaway rates?",
          de: "Brauche ich noch getrennte Steuersätze für Im Haus und Außer Haus?",
        },
        a: {
          en: "Not for food, which is at 7 % either way since 2026. Drinks are at 19 % in both cases, apart from the exceptions.",
          de: "Für Speisen nicht — sie liegen seit 2026 in beiden Fällen bei 7 %. Getränke liegen, abgesehen von den Ausnahmen, ebenfalls in beiden Fällen bei 19 %.",
        },
      },
    ],
    related: ["datev-export", "pos"],
  },
  {
    slug: "bonpflicht-e-bon",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 5,
    category: {
      en: "Compliance",
      de: "Recht & Kasse",
    },
    title: {
      en: "Receipt obligation in Germany: when an e-receipt is enough",
      de: "Bonpflicht: Wann ein digitaler Beleg (E-Bon) ausreicht",
    },
    description: {
      en: "Since 2020 every electronic till in Germany must issue a receipt. What § 146a AO requires, when a digital receipt via QR code or email is allowed and which data it must contain.",
      de: "Seit 2020 muss jede elektronische Kasse einen Beleg ausgeben. Was § 146a AO verlangt, wann ein digitaler Beleg per QR-Code oder E-Mail erlaubt ist und welche Angaben er enthalten muss.",
    },
    image: "customer-display.webp",
    imageAlt: {
      en: "Customer display with e-receipt QR code",
      de: "Kundendisplay mit QR-Code für den digitalen Beleg",
    },
    keywords: ["Bonpflicht", "Belegausgabepflicht", "E-Bon", "digitaler Kassenbon", "§ 146a AO"],
    takeaways: {
      en: [
        "Anyone using an electronic till must issue a receipt for every sale (§ 146a (2) AO).",
        "The receipt can be paper or — with the guest's consent — electronic.",
        "Consent can be informal; the guest scanning a QR code is enough.",
        "The receipt must contain the TSE data, whether paper or digital.",
      ],
      de: [
        "Wer eine elektronische Kasse nutzt, muss für jeden Verkauf einen Beleg ausgeben (§ 146a Abs. 2 AO).",
        "Der Beleg kann auf Papier oder — mit Zustimmung des Gastes — elektronisch ausgegeben werden.",
        "Die Zustimmung ist formlos möglich; dass der Gast einen QR-Code scannt, genügt.",
        "Ob Papier oder digital: Der Beleg muss die TSE-Daten enthalten.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "What the receipt obligation means",
          de: "Was die Belegausgabepflicht bedeutet",
        },
      },
      {
        type: "p",
        text: {
          en: "Since 1 January 2020, anyone who records sales with an electronic recording system must issue a receipt to the customer for every transaction, directly at the time of the sale (§ 146a (2) AO). The guest does not have to take it — but you have to offer it.",
          de: "Seit 1. Januar 2020 muss jeder, der Verkäufe mit einem elektronischen Aufzeichnungssystem erfasst, dem Kunden für jeden Geschäftsvorfall einen Beleg zur Verfügung stellen — in unmittelbarem zeitlichem Zusammenhang mit dem Verkauf (§ 146a Abs. 2 AO). Der Gast muss den Beleg nicht mitnehmen, aber Sie müssen ihn anbieten.",
        },
      },
      {
        type: "p",
        text: {
          en: "An exemption from the obligation is possible only on application to the tax office, for example when selling to a large number of unknown people. In restaurants it is rarely granted, so plan for receipts.",
          de: "Eine Befreiung ist nur auf Antrag beim Finanzamt möglich, etwa beim Verkauf an eine Vielzahl nicht bekannter Personen. In der Gastronomie wird sie selten gewährt — planen Sie also mit Belegen.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Paper or digital?",
          de: "Papier oder digital?",
        },
      },
      {
        type: "p",
        text: {
          en: "The receipt can be printed or, with the recipient's consent, issued electronically (§ 6 KassenSichV). Consent does not need a form: if the guest scans a QR code to open the receipt, that is consent by conduct. The tax authorities do not prescribe the transmission method — a QR code on the display, a download link, email or NFC are all possible. The file must be in a common format such as PDF, PNG or JPG that can be opened with free software.",
          de: "Der Beleg kann gedruckt oder mit Zustimmung des Empfängers elektronisch ausgegeben werden (§ 6 KassenSichV). Die Zustimmung braucht kein Formular: Scannt der Gast einen QR-Code, um den Beleg zu öffnen, ist das eine Zustimmung durch schlüssiges Handeln. Den Übertragungsweg schreibt die Finanzverwaltung nicht vor — QR-Code auf dem Display, Download-Link, E-Mail oder NFC sind möglich. Die Datei muss in einem gängigen Format wie PDF, PNG oder JPG vorliegen, das sich mit kostenloser Software öffnen lässt.",
        },
      },
      {
        type: "h2",
        text: {
          en: "What a receipt must contain",
          de: "Was auf dem Beleg stehen muss",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Name and address of the business",
            "Date and time of the start and end of the transaction",
            "Quantity and type of the items or services",
            "Transaction number and serial number of the till or the TSE",
            "Amount per VAT rate and the VAT rate",
            "TSE signature data (signature counter, check value)",
          ],
          de: [
            "Name und Anschrift des Unternehmens",
            "Datum und Uhrzeit von Vorgangsbeginn und -ende",
            "Menge und Art der Waren oder Leistungen",
            "Transaktionsnummer und Seriennummer der Kasse oder der TSE",
            "Entgelt und Steuerbetrag je Steuersatz sowie der Steuersatz",
            "Signaturdaten der TSE (Signaturzähler, Prüfwert)",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "The QR code with the TSE data that many receipts show is voluntary. It makes checks easier, but the law does not require it.",
          de: "Der QR-Code mit den TSE-Daten, den viele Belege zeigen, ist freiwillig. Er erleichtert Prüfungen, gesetzlich vorgeschrieben ist er nicht.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Digital receipts with GastroPos",
          de: "Digitale Belege mit GastroPos",
        },
      },
      {
        type: "p",
        text: {
          en: "GastroPos can print the receipt, show it as a QR code on the customer display or send it by email. The guest opens the receipt on their phone — and can request a business receipt or fill in a Bewirtungsbeleg right there. With the fiskaly cloud TSE (add-on, 15 € per month), every receipt carries the TSE data.",
          de: "GastroPos kann den Beleg drucken, als QR-Code auf dem Kundendisplay anzeigen oder per E-Mail senden. Der Gast öffnet den Beleg auf dem Handy — und kann dort eine Firmenrechnung anfordern oder einen Bewirtungsbeleg ausfüllen. Mit der fiskaly Cloud-TSE (Zusatzmodul, 15 € pro Monat) trägt jeder Beleg die TSE-Daten.",
        },
      },
      {
        type: "note",
        text: {
          en: "This article is general information, not tax or legal advice. Please clarify the details for your business with your tax advisor.",
          de: "Dieser Artikel ist eine allgemeine Information und keine Steuer- oder Rechtsberatung. Klären Sie die Details für Ihren Betrieb mit Ihrer Steuerberatung.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do I have to print a receipt for every sale?",
          de: "Muss ich für jeden Verkauf einen Bon drucken?",
        },
        a: {
          en: "You have to issue a receipt for every sale, but it doesn't have to be printed. With the guest's consent a digital receipt is enough.",
          de: "Sie müssen für jeden Verkauf einen Beleg ausgeben, aber nicht unbedingt drucken. Mit Zustimmung des Gastes genügt ein digitaler Beleg.",
        },
      },
      {
        q: {
          en: "Is showing a QR code enough?",
          de: "Reicht es, einen QR-Code anzuzeigen?",
        },
        a: {
          en: "Yes, a QR code that leads to the receipt is an accepted way of issuing it electronically. The guest scanning it counts as consent.",
          de: "Ja, ein QR-Code, der zum Beleg führt, ist ein anerkannter Weg der elektronischen Ausgabe. Das Scannen gilt als Zustimmung.",
        },
      },
      {
        q: {
          en: "Does the guest have to take the receipt?",
          de: "Muss der Gast den Beleg mitnehmen?",
        },
        a: {
          en: "No. You must offer it; the guest may refuse it.",
          de: "Nein. Sie müssen ihn anbieten, der Gast darf ihn ablehnen.",
        },
      },
    ],
    related: ["pos", "kitchen-display"],
  },
  {
    slug: "bewirtungsbeleg",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 5,
    category: {
      en: "Compliance",
      de: "Recht & Kasse",
    },
    title: {
      en: "The Bewirtungsbeleg: required details and how guests fill it in digitally",
      de: "Bewirtungsbeleg: Pflichtangaben und digitale Ausfüllung durch den Gast",
    },
    description: {
      en: "Business guests need a machine-generated, TSE-secured receipt to deduct a business meal. Which details a Bewirtungsbeleg needs and how restaurants make it easy.",
      de: "Geschäftsgäste brauchen für den Betriebsausgabenabzug einen maschinell erstellten, TSE-gesicherten Beleg. Welche Angaben ein Bewirtungsbeleg braucht und wie Restaurants es ihren Gästen leicht machen.",
    },
    image: "counter-receipt.webp",
    imageAlt: {
      en: "Printed receipt from a GastroPos handheld",
      de: "Gedruckter Beleg von einem GastroPos-Handheld",
    },
    keywords: [
      "Bewirtungsbeleg",
      "Bewirtungsbeleg Pflichtangaben",
      "Bewirtungskosten absetzen",
      "Bewirtungsbeleg digital",
    ],
    takeaways: {
      en: [
        "Since 2023, only machine-generated, TSE-secured receipts are accepted for business meals when the restaurant uses an electronic till.",
        "The receipt must show the TSE data or the till's serial number and transaction number.",
        "The host adds participants and occasion — on paper or digitally.",
        "For receipts over 250 €, the name of the host must be on the receipt.",
      ],
      de: [
        "Seit 2023 werden für Bewirtungen nur maschinell erstellte, TSE-gesicherte Belege anerkannt, wenn das Restaurant eine elektronische Kasse nutzt.",
        "Der Beleg muss die TSE-Daten oder Seriennummer und Transaktionsnummer der Kasse zeigen.",
        "Teilnehmer und Anlass ergänzt der Gastgeber — auf Papier oder digital.",
        "Bei Belegen über 250 € muss der Name des Bewirtenden auf dem Beleg stehen.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "Why the restaurant's receipt matters",
          de: "Warum der Beleg des Restaurants entscheidend ist",
        },
      },
      {
        type: "p",
        text: {
          en: "Companies can deduct 70 % of the cost of a business meal. Since 1 January 2023, the tax authorities only accept a machine-generated, electronically recorded receipt secured by a TSE if the restaurant uses an electronic till (BMF letter of 30 June 2021). A handwritten receipt or a receipt without TSE data is then not enough for your guest.",
          de: "Unternehmen können 70 % der Kosten einer geschäftlichen Bewirtung als Betriebsausgabe abziehen. Seit 1. Januar 2023 erkennt die Finanzverwaltung nur noch maschinell erstellte, elektronisch aufgezeichnete und mit einer TSE gesicherte Belege an, wenn das Restaurant eine elektronische Kasse nutzt (BMF-Schreiben vom 30. Juni 2021). Ein handschriftlicher Beleg oder ein Beleg ohne TSE-Daten reicht Ihrem Gast dann nicht.",
        },
      },
      {
        type: "h2",
        text: {
          en: "What a Bewirtungsbeleg needs",
          de: "Was ein Bewirtungsbeleg braucht",
        },
      },
      {
        type: "p",
        text: {
          en: "From the restaurant (on the machine receipt):",
          de: "Vom Restaurant (auf dem maschinellen Beleg):",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Name and address of the restaurant",
            "Date of the meal",
            "Items consumed with prices, amount per VAT rate",
            "Transaction number and serial number of the till or TSE",
            "For amounts over 250 €: the name of the host",
          ],
          de: [
            "Name und Anschrift des Restaurants",
            "Tag der Bewirtung",
            "Verzehrte Speisen und Getränke mit Preisen, Beträge je Steuersatz",
            "Transaktionsnummer und Seriennummer der Kasse oder TSE",
            "Bei Beträgen über 250 €: Name des Bewirtenden",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "From the host (added afterwards):",
          de: "Vom Gastgeber (wird ergänzt):",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Names of all participants, including the host",
            "The specific business occasion",
            "Tip, if any, and signature",
          ],
          de: [
            "Namen aller Teilnehmer, einschließlich des Gastgebers",
            "Der konkrete geschäftliche Anlass",
            "Gegebenenfalls Trinkgeld und Unterschrift",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Digital instead of the paper form",
          de: "Digital statt Papierformular",
        },
      },
      {
        type: "p",
        text: {
          en: "The host's details can also be added digitally, as long as they are attached to the receipt in a tamper-proof way. That saves your staff from printing the second form at the table.",
          de: "Die Angaben des Gastgebers können auch digital ergänzt werden, solange sie unveränderbar mit dem Beleg verbunden sind. Das erspart Ihrem Service das Drucken des zweiten Formulars am Tisch.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Bewirtungsbeleg with GastroPos",
          de: "Bewirtungsbeleg mit GastroPos",
        },
      },
      {
        type: "p",
        text: {
          en: "With GastroPos, the guest scans the QR code of the e-receipt and fills in the Bewirtungsbeleg on their phone: participants, occasion, company details. The receipt carries the data of the fiskaly cloud TSE. Guests can also request a business invoice with their company address.",
          de: "Mit GastroPos scannt der Gast den QR-Code des digitalen Belegs und füllt den Bewirtungsbeleg direkt am Handy aus: Teilnehmer, Anlass, Firmendaten. Der Beleg trägt die Daten der fiskaly Cloud-TSE. Auf Wunsch fordert der Gast auch eine Firmenrechnung mit seiner Firmenadresse an.",
        },
      },
      {
        type: "note",
        text: {
          en: "This article is general information, not tax or legal advice. Please clarify the details for your business with your tax advisor.",
          de: "Dieser Artikel ist eine allgemeine Information und keine Steuer- oder Rechtsberatung. Klären Sie die Details für Ihren Betrieb mit Ihrer Steuerberatung.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is a handwritten Bewirtungsbeleg still valid?",
          de: "Gilt ein handschriftlicher Bewirtungsbeleg noch?",
        },
        a: {
          en: "Only if the restaurant has no electronic till. If it does, the tax office expects a machine-generated, TSE-secured receipt.",
          de: "Nur, wenn das Restaurant keine elektronische Kasse hat. Andernfalls erwartet das Finanzamt einen maschinell erstellten, TSE-gesicherten Beleg.",
        },
      },
      {
        q: {
          en: "How much of a business meal is deductible?",
          de: "Wie viel einer Bewirtung ist absetzbar?",
        },
        a: {
          en: "70 % of the appropriate costs are deductible as business expenses; the full input VAT can usually be reclaimed.",
          de: "70 % der angemessenen Kosten sind als Betriebsausgabe abziehbar; die Vorsteuer ist in der Regel voll abziehbar.",
        },
      },
    ],
    related: ["pos", "datev-export"],
  },
  {
    slug: "aufbewahrungsfristen-kassendaten",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 5,
    category: {
      en: "Compliance",
      de: "Recht & Kasse",
    },
    title: {
      en: "How long to keep till data: 8 or 10 years?",
      de: "Aufbewahrungsfristen für Kassendaten: 8 oder 10 Jahre?",
    },
    description: {
      en: "Since 2025, receipts only have to be kept for eight years instead of ten. What that means for till receipts, Z-reports, the cash book, TSE exports and the till manual.",
      de: "Seit 2025 müssen Buchungsbelege nur noch acht statt zehn Jahre aufbewahrt werden. Was das für Kassenbons, Z-Berichte, das Kassenbuch, TSE-Exporte und die Kassen-Bedienungsanleitung bedeutet.",
    },
    image: "datev-gobd.webp",
    imageAlt: {
      en: "GoBD archive export in GastroPos",
      de: "GoBD-Archiv-Export in GastroPos",
    },
    keywords: [
      "Aufbewahrungsfrist Kassenbon",
      "Aufbewahrungsfrist Z-Bon",
      "Kassendaten aufbewahren",
      "8 Jahre Buchungsbelege",
    ],
    takeaways: {
      en: [
        "Receipts (Buchungsbelege) — including till receipts and Z-reports — must be kept for 8 years since 2025.",
        "Books, inventories, annual accounts and organisational documents still have 10 years.",
        "The period starts at the end of the calendar year in which the document was created.",
        "Till data must remain readable and exportable for the whole period, even after changing systems.",
      ],
      de: [
        "Buchungsbelege — auch Kassenbons und Z-Berichte — müssen seit 2025 acht Jahre aufbewahrt werden.",
        "Für Bücher, Inventare, Jahresabschlüsse und Organisationsunterlagen bleibt es bei zehn Jahren.",
        "Die Frist beginnt mit dem Ende des Kalenderjahres, in dem die Unterlage entstanden ist.",
        "Kassendaten müssen über die gesamte Frist lesbar und exportierbar bleiben — auch nach einem Systemwechsel.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "What changed",
          de: "Was sich geändert hat",
        },
      },
      {
        type: "p",
        text: {
          en: "The Fourth Bureaucracy Relief Act (BEG IV) shortened the retention period for receipts in § 147 AO from ten to eight years. It applies to all receipts whose retention period had not yet expired on 1 January 2025. Banks, insurers and investment firms are treated differently, but that doesn't affect restaurants.",
          de: "Das Vierte Bürokratieentlastungsgesetz (BEG IV) hat die Aufbewahrungsfrist für Buchungsbelege in § 147 AO von zehn auf acht Jahre verkürzt. Sie gilt für alle Belege, deren Frist am 1. Januar 2025 noch nicht abgelaufen war. Für Banken, Versicherungen und Wertpapierinstitute gelten Sonderregeln — für die Gastronomie spielt das keine Rolle.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Which period applies to what?",
          de: "Welche Frist gilt wofür?",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "8 years: till receipts, invoices, Z-reports, cash book receipts, Bewirtungsbelege, card payment receipts",
            "10 years: the cash book as a book, inventories, annual accounts, as well as organisational documents of the till — e.g. the user manual, programming logs and the record of when the till was put into operation",
            "6 years: business letters that are not receipts",
          ],
          de: [
            "8 Jahre: Kassenbons, Rechnungen, Z-Berichte, Belege zum Kassenbuch, Bewirtungsbelege, Kartenzahlungsbelege",
            "10 Jahre: das Kassenbuch als Buch, Inventare, Jahresabschlüsse sowie Organisationsunterlagen der Kasse — z. B. Bedienungsanleitung, Programmierprotokolle und Nachweise zur Inbetriebnahme",
            "6 Jahre: Geschäftsbriefe, die keine Buchungsbelege sind",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "Example: a receipt from 15 March 2026 may be destroyed after 31 December 2034 at the earliest.",
          de: "Beispiel: Ein Kassenbon vom 15. März 2026 darf frühestens nach dem 31. Dezember 2034 vernichtet werden.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Electronic till data",
          de: "Elektronische Kassendaten",
        },
      },
      {
        type: "p",
        text: {
          en: "For electronic tills, keeping the paper is not enough: the individual records, the TSE data and the DSFinV-K export must stay available in machine-readable form for the whole period. That also applies when you change your POS provider — export your data before the old contract ends and archive it.",
          de: "Bei elektronischen Kassen reicht Papier nicht: Die Einzelaufzeichnungen, die TSE-Daten und der DSFinV-K-Export müssen über die gesamte Frist maschinell auswertbar verfügbar bleiben. Das gilt auch, wenn Sie den Kassenanbieter wechseln — exportieren Sie Ihre Daten vor Vertragsende und archivieren Sie sie.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Exports in GastroPos",
          de: "Exporte in GastroPos",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "DSFinV-K export from the fiskaly TSE (administrators, with the TSE add-on)",
            "GoBD archive as a ZIP with index.xml: cash book, invoices, items, payments, taxes",
            "DATEV booking batch (EXTF) for any date range",
            "Z-reports as Excel, CSV or ZIP",
          ],
          de: [
            "DSFinV-K-Export aus der fiskaly-TSE (Administratoren, mit TSE-Zusatzmodul)",
            "GoBD-Archiv als ZIP mit index.xml: Kassenbuch, Rechnungen, Positionen, Zahlungen, Steuern",
            "DATEV-Buchungsstapel (EXTF) für beliebige Zeiträume",
            "Z-Berichte als Excel, CSV oder ZIP",
          ],
        },
      },
      {
        type: "note",
        text: {
          en: "This article is general information, not tax or legal advice. Please clarify the details for your business with your tax advisor.",
          de: "Dieser Artikel ist eine allgemeine Information und keine Steuer- oder Rechtsberatung. Klären Sie die Details für Ihren Betrieb mit Ihrer Steuerberatung.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "How long do I have to keep Z-reports?",
          de: "Wie lange muss ich Z-Berichte aufbewahren?",
        },
        a: {
          en: "Z-reports are receipts, so eight years since 2025, counted from the end of the calendar year.",
          de: "Z-Berichte sind Buchungsbelege, also seit 2025 acht Jahre, gerechnet ab Ende des Kalenderjahres.",
        },
      },
      {
        q: {
          en: "Do I have to keep the till's user manual?",
          de: "Muss ich die Bedienungsanleitung der Kasse aufbewahren?",
        },
        a: {
          en: "Yes. It is part of the organisational documents and has to be kept for ten years.",
          de: "Ja. Sie gehört zu den Organisationsunterlagen und ist zehn Jahre aufzubewahren.",
        },
      },
    ],
    related: ["datev-export", "cash-book"],
  },
  {
    slug: "kassenbuch-gastronomie",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 6,
    category: {
      en: "Accounting",
      de: "Buchhaltung",
    },
    title: {
      en: "Keeping a cash book in a restaurant: rules and common mistakes",
      de: "Kassenbuch in der Gastronomie richtig führen: Regeln und typische Fehler",
    },
    description: {
      en: "What a GoBD-compliant cash book needs, how to record pay-ins, pay-outs and tips correctly and which mistakes tax auditors find most often.",
      de: "Was ein GoBD-konformes Kassenbuch braucht, wie Sie Einlagen, Entnahmen und Trinkgelder richtig erfassen und welche Fehler Betriebsprüfer am häufigsten finden.",
    },
    image: "cashbook-hero.webp",
    imageAlt: {
      en: "Digital cash book in GastroPos",
      de: "Digitales Kassenbuch in GastroPos",
    },
    keywords: [
      "Kassenbuch Gastronomie",
      "Kassenbuch GoBD",
      "digitales Kassenbuch",
      "Kassensturzfähigkeit",
    ],
    takeaways: {
      en: [
        "Record every cash movement daily, completely and in order.",
        "Entries must not be changed later — corrections are made by reversal with a reason.",
        "The cash balance must never be negative.",
        "Private withdrawals, deposits and tips paid out need their own entries.",
      ],
      de: [
        "Jede Barbewegung täglich, vollständig und in zeitlicher Reihenfolge erfassen.",
        "Einträge dürfen nachträglich nicht verändert werden — Korrekturen erfolgen per Storno mit Begründung.",
        "Der Kassenbestand darf nie negativ werden.",
        "Privatentnahmen, Einlagen und ausgezahlte Trinkgelder brauchen eigene Buchungen.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "Why the cash book is so important in restaurants",
          de: "Warum das Kassenbuch in der Gastronomie so wichtig ist",
        },
      },
      {
        type: "p",
        text: {
          en: "Restaurants handle a lot of cash. In a tax audit, the cash book is one of the first documents examined: if it is not complete and traceable, the tax office can estimate revenue — usually to your disadvantage.",
          de: "In der Gastronomie wird viel bar bezahlt. Bei einer Betriebsprüfung gehört das Kassenbuch zu den ersten Unterlagen, die geprüft werden: Ist es nicht vollständig und nachvollziehbar, darf das Finanzamt Umsätze schätzen — meist zu Ihrem Nachteil.",
        },
      },
      {
        type: "h2",
        text: {
          en: "The basic rules",
          de: "Die Grundregeln",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Daily: cash sales and cash movements are recorded each day.",
            "Complete: every pay-in and pay-out, including small amounts.",
            "In order: chronological, with gap-free numbering.",
            "Unchangeable: no deleting or overwriting; corrections by reversal entry.",
            "Supported by receipts: every entry has a receipt or an internal note.",
            "Countable: the actual cash must be able to match the book at any time (Kassensturzfähigkeit).",
          ],
          de: [
            "Täglich: Barumsätze und Barbewegungen werden jeden Tag erfasst.",
            "Vollständig: jede Einnahme und Ausgabe, auch Kleinbeträge.",
            "Geordnet: chronologisch, mit lückenloser Nummerierung.",
            "Unveränderbar: kein Löschen oder Überschreiben; Korrekturen per Storno-Buchung.",
            "Belegt: Zu jeder Buchung gibt es einen Beleg oder Eigenbeleg.",
            "Kassensturzfähig: Der tatsächliche Bargeldbestand muss jederzeit mit dem Buch abgleichbar sein.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Common mistakes",
          de: "Typische Fehler",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Negative cash balance — a clear sign of missing entries.",
            "Private withdrawals or deposits not recorded.",
            "Tips paid out to staff from the till without an entry.",
            "Purchases paid in cash (e.g. at the wholesaler) without a receipt.",
            "Excel lists that can be changed at any time — they are not considered tamper-proof.",
          ],
          de: [
            "Negativer Kassenbestand — ein klares Zeichen für fehlende Buchungen.",
            "Privatentnahmen oder -einlagen nicht erfasst.",
            "Trinkgelder an das Team aus der Kasse ausgezahlt, ohne Buchung.",
            "Bar bezahlte Einkäufe (z. B. im Großmarkt) ohne Beleg.",
            "Excel-Listen, die jederzeit geändert werden können — sie gelten nicht als unveränderbar.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "The digital cash book in GastroPos",
          de: "Das digitale Kassenbuch in GastroPos",
        },
      },
      {
        type: "p",
        text: {
          en: "In GastroPos, cash sales and cash refunds are journaled automatically. You record pay-ins and pay-outs with a purpose — e.g. bank transfer, private withdrawal, tips paid out, goods purchase or postage — with tax rate, supplier and receipt number. Entries cannot be edited or deleted; a reversal needs a reason. Numbering is gap-free and the running balance is always visible. Each purpose can have its own DATEV account, so the entries appear in the DATEV export.",
          de: "In GastroPos werden Barverkäufe und Bar-Erstattungen automatisch ins Kassenbuch übernommen. Einlagen und Ausgaben erfassen Sie mit einem Zweck — z. B. Von/An Bank, Privatentnahme, Trinkgeld-Auszahlung, Wareneinkauf oder Porto — mit Steuersatz, Lieferant und Belegnummer. Einträge lassen sich nicht bearbeiten oder löschen; ein Storno braucht eine Begründung. Die Nummerierung ist lückenlos, der laufende Bestand immer sichtbar. Jeder Zweck kann ein eigenes DATEV-Konto haben, sodass die Buchungen im DATEV-Export erscheinen.",
        },
      },
      {
        type: "note",
        text: {
          en: "This article is general information, not tax or legal advice. Please clarify the details for your business with your tax advisor.",
          de: "Dieser Artikel ist eine allgemeine Information und keine Steuer- oder Rechtsberatung. Klären Sie die Details für Ihren Betrieb mit Ihrer Steuerberatung.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is an Excel cash book allowed?",
          de: "Ist ein Kassenbuch in Excel erlaubt?",
        },
        a: {
          en: "Usually not, because entries can be changed without a trace. Use a system that logs changes or prevents them.",
          de: "In der Regel nicht, weil Einträge spurlos geändert werden können. Nutzen Sie ein System, das Änderungen protokolliert oder verhindert.",
        },
      },
      {
        q: {
          en: "How do I record tips in the cash book?",
          de: "Wie erfasse ich Trinkgeld im Kassenbuch?",
        },
        a: {
          en: "Card tips collected through the till and later paid out in cash are recorded as a pay-out with the purpose 'tips paid out'. Discuss the details with your tax advisor.",
          de: "Per Karte vereinnahmte Trinkgelder, die später bar ausgezahlt werden, erfassen Sie als Ausgabe mit dem Zweck „Trinkgeld-Auszahlung“. Details klären Sie mit Ihrer Steuerberatung.",
        },
      },
    ],
    related: ["cash-book", "datev-export"],
  },
  {
    slug: "eigener-webshop-restaurant",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 6,
    category: {
      en: "Delivery",
      de: "Lieferung",
    },
    title: {
      en: "Your own online shop for delivery and pickup: how to get started",
      de: "Eigener Webshop für Lieferung und Abholung: So starten Sie",
    },
    description: {
      en: "Why restaurants add their own ordering page alongside delivery platforms, which settings matter (zones, minimum order, opening hours, payment) and how to bring guests to your shop.",
      de: "Warum Restaurants neben Lieferplattformen eine eigene Bestellseite anbieten, welche Einstellungen wichtig sind (Liefergebiete, Mindestbestellwert, Öffnungszeiten, Zahlung) und wie Gäste zu Ihrem Shop finden.",
    },
    image: "online-hero.webp",
    imageAlt: {
      en: "GastroPos webshop of a pizzeria on a tablet and two phones",
      de: "GastroPos-Webshop einer Pizzeria auf Tablet und zwei Smartphones",
    },
    keywords: [
      "eigener Lieferservice Webshop",
      "Online-Bestellsystem Restaurant",
      "Restaurant Webshop",
      "Abholung online bestellen",
    ],
    takeaways: {
      en: [
        "Your own shop keeps the customer relationship and the order data with you.",
        "Define delivery zones with a minimum order and fee — by postcode or distance.",
        "Orders should land directly in the till and kitchen, not on an extra tablet.",
        "Promote the shop link on flyers, receipts, Google and social media.",
      ],
      de: [
        "Mit dem eigenen Shop bleiben Kundenbeziehung und Bestelldaten bei Ihnen.",
        "Legen Sie Liefergebiete mit Mindestbestellwert und Liefergebühr fest — nach Postleitzahl oder Entfernung.",
        "Bestellungen sollten direkt in Kasse und Küche landen, nicht auf einem zusätzlichen Tablet.",
        "Bewerben Sie den Shop-Link auf Flyern, Belegen, bei Google und in Social Media.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "Why your own ordering page?",
          de: "Warum eine eigene Bestellseite?",
        },
      },
      {
        type: "p",
        text: {
          en: "Delivery platforms bring reach, but they charge commission on every order and keep the contact to the guest. Your own shop is the channel for regulars: guests who already know you order directly, and you set prices, fees and promotions yourself.",
          de: "Lieferplattformen bringen Reichweite, berechnen aber auf jede Bestellung eine Provision und behalten den Kontakt zum Gast. Der eigene Shop ist der Kanal für Stammgäste: Wer Sie schon kennt, bestellt direkt — und Preise, Gebühren und Aktionen bestimmen Sie selbst.",
        },
      },
      {
        type: "h2",
        text: {
          en: "The most important settings",
          de: "Die wichtigsten Einstellungen",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Delivery zones by postcode or distance, each with a minimum order, delivery fee and free delivery threshold",
            "Delivery and pickup times per weekday, holidays and a short-term pause when the kitchen is full",
            "Payment methods: cash on delivery, card, PayPal, Klarna or payment on site",
            "Discount codes with validity, minimum order and usage limits",
            "Look: logo, intro text, main colour and photos of your dishes",
          ],
          de: [
            "Liefergebiete nach Postleitzahl oder Entfernung, jeweils mit Mindestbestellwert, Liefergebühr und Grenze für kostenlose Lieferung",
            "Liefer- und Abholzeiten je Wochentag, Feiertage und eine kurzfristige Pause, wenn die Küche voll ist",
            "Zahlungsarten: bar bei Lieferung, Karte, PayPal, Klarna oder Zahlung vor Ort",
            "Rabattcodes mit Gültigkeit, Mindestbestellwert und Nutzungslimit",
            "Auftritt: Logo, Einführungstext, Hauptfarbe und Fotos Ihrer Gerichte",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "From order to kitchen",
          de: "Von der Bestellung in die Küche",
        },
      },
      {
        type: "p",
        text: {
          en: "The biggest time-saver: online orders arrive directly in the till with a sound. Staff accept the order, the kitchen ticket is printed or shown on the kitchen display, and the delivery slip has a QR code for navigation. Your drivers see their orders and the route in the app.",
          de: "Die größte Zeitersparnis: Online-Bestellungen kommen mit Ton direkt in der Kasse an. Das Team nimmt die Bestellung an, der Küchenbon wird gedruckt oder auf dem Küchenmonitor angezeigt, und der Lieferschein trägt einen QR-Code für die Navigation. Ihre Fahrer sehen ihre Aufträge und die Route in der App.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Bringing guests to your shop",
          de: "Gäste zum Shop bringen",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Put the shop link in your Google Business Profile as the order link.",
            "Print a QR code on flyers, pizza boxes and receipts.",
            "Offer a discount code for the first direct order in your restaurant.",
            "Share the link in your social media bio.",
          ],
          de: [
            "Hinterlegen Sie den Shop-Link in Ihrem Google-Unternehmensprofil als Bestell-Link.",
            "Drucken Sie einen QR-Code auf Flyer, Pizzakartons und Belege.",
            "Bieten Sie im Restaurant einen Rabattcode für die erste Direktbestellung an.",
            "Teilen Sie den Link in Ihrer Social-Media-Bio.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "The GastroPos webshop",
          de: "Der GastroPos-Webshop",
        },
      },
      {
        type: "p",
        text: {
          en: "The GastroPos webshop runs on its own page for your restaurant and uses the same products and stock as your till. Sold-out items are hidden automatically. Guests don't need an account: their order history and contact details stay on their device, and they can repeat an order with one tap.",
          de: "Der GastroPos-Webshop läuft auf einer eigenen Seite für Ihr Restaurant und nutzt dieselben Artikel und Bestände wie Ihre Kasse. Ausverkaufte Artikel werden automatisch ausgeblendet. Gäste brauchen kein Konto: Bestellhistorie und Kontaktdaten bleiben auf ihrem Gerät, und eine Bestellung lässt sich mit einem Tipp wiederholen.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do guests need an account to order?",
          de: "Brauchen Gäste ein Konto zum Bestellen?",
        },
        a: {
          en: "No. In the GastroPos webshop guests order without registering; their details are remembered on their device.",
          de: "Nein. Im GastroPos-Webshop bestellen Gäste ohne Registrierung; ihre Daten werden auf ihrem Gerät gespeichert.",
        },
      },
      {
        q: {
          en: "Can guests pre-order for later?",
          de: "Können Gäste für später vorbestellen?",
        },
        a: {
          en: "Yes, for a time later the same day in 15-minute steps — even while you are still closed, if you open later that day.",
          de: "Ja, für eine Uhrzeit am selben Tag in 15-Minuten-Schritten — auch wenn Sie noch geschlossen haben, aber später am Tag öffnen.",
        },
      },
    ],
    related: ["online-ordering", "inventory"],
  },
  {
    slug: "qr-code-bestellung-restaurant",
    published: "2026-10-08",
    updated: "2026-10-08",
    readingMinutes: 5,
    category: {
      en: "Service",
      de: "Service",
    },
    title: {
      en: "QR code ordering at the table: benefits, limits and how to introduce it",
      de: "QR-Code-Bestellung am Tisch: Vorteile, Grenzen und Einführung",
    },
    description: {
      en: "How table ordering via QR code works, where it helps (busy hours, second rounds, language barriers) and how to introduce it without losing the personal touch.",
      de: "Wie die Bestellung per QR-Code am Tisch funktioniert, wo sie hilft (Stoßzeiten, Nachbestellungen, Sprachbarrieren) und wie Sie sie einführen, ohne den persönlichen Service zu verlieren.",
    },
    image: "qr-hero.webp",
    imageAlt: {
      en: "Guest ordering via QR code on a smartphone",
      de: "Gast bestellt per QR-Code am Smartphone",
    },
    keywords: [
      "QR-Code Bestellung Restaurant",
      "Tischbestellung QR",
      "digitale Speisekarte",
      "Self-Ordering Gastronomie",
    ],
    takeaways: {
      en: [
        "Each table gets its own QR code; orders arrive with the table number.",
        "Biggest benefit: second rounds and drinks without waiting for staff.",
        "Allergens and descriptions in the guest's language reduce questions.",
        "An approval step lets staff check orders before they go to the kitchen.",
      ],
      de: [
        "Jeder Tisch bekommt seinen eigenen QR-Code; Bestellungen kommen mit Tischnummer an.",
        "Größter Vorteil: Nachbestellungen und Getränke ohne Warten auf den Service.",
        "Allergene und Beschreibungen in der Sprache des Gastes reduzieren Rückfragen.",
        "Mit einer Freigabe prüft der Service Bestellungen, bevor sie in die Küche gehen.",
      ],
    },
    body: [
      {
        type: "h2",
        text: {
          en: "How it works",
          de: "So funktioniert es",
        },
      },
      {
        type: "p",
        text: {
          en: "A QR code is placed on every table. The guest scans it with the phone camera — no app needed — and sees the menu with photos, descriptions and allergens. Orders go straight to the till and the kitchen with the table number. Guests can also call staff or ask for the bill from their phone.",
          de: "Auf jedem Tisch steht ein QR-Code. Der Gast scannt ihn mit der Handykamera — ohne App — und sieht die Speisekarte mit Fotos, Beschreibungen und Allergenen. Bestellungen gehen mit Tischnummer direkt an Kasse und Küche. Außerdem kann der Gast den Service rufen oder die Rechnung anfordern.",
        },
      },
      {
        type: "h2",
        text: {
          en: "Where it helps",
          de: "Wo es hilft",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Busy hours: guests order the second round without waiting for staff.",
            "Fewer walks: staff spend time serving and advising instead of taking simple orders.",
            "Language barriers: the menu is shown in the guest's language.",
            "Allergens: guests can check ingredients and additives themselves.",
          ],
          de: [
            "Stoßzeiten: Gäste bestellen die zweite Runde, ohne auf den Service zu warten.",
            "Weniger Laufwege: Der Service hat mehr Zeit für Beratung statt für einfache Bestellungen.",
            "Sprachbarrieren: Die Speisekarte erscheint in der Sprache des Gastes.",
            "Allergene: Gäste prüfen Zutaten und Zusatzstoffe selbst.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Limits and how to handle them",
          de: "Grenzen und wie Sie damit umgehen",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Not every guest wants to order by phone — keep taking orders at the table as well.",
            "Prank or mistaken orders: use an approval step for new tables or at night.",
            "Payment: decide whether guests pay at the table with staff or at the counter.",
          ],
          de: [
            "Nicht jeder Gast möchte per Handy bestellen — nehmen Sie weiterhin auch am Tisch Bestellungen auf.",
            "Spaß- oder Fehlbestellungen: Nutzen Sie eine Freigabe für neue Tische oder am Abend.",
            "Bezahlung: Legen Sie fest, ob Gäste beim Service am Tisch oder an der Theke zahlen.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Introducing it step by step",
          de: "Schritt für Schritt einführen",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Start with drinks and desserts, where re-ordering matters most.",
            "Brief your team: QR ordering supports them, it does not replace them.",
            "Make the codes visible — table stands work better than stickers.",
            "Check after two weeks which tables and times use it most.",
          ],
          de: [
            "Starten Sie mit Getränken und Desserts, wo Nachbestellungen am wichtigsten sind.",
            "Briefen Sie Ihr Team: Die QR-Bestellung unterstützt den Service, sie ersetzt ihn nicht.",
            "Machen Sie die Codes sichtbar — Tischaufsteller funktionieren besser als Aufkleber.",
            "Prüfen Sie nach zwei Wochen, welche Tische und Zeiten sie am meisten nutzen.",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "QR ordering with GastroPos",
          de: "QR-Bestellung mit GastroPos",
        },
      },
      {
        type: "p",
        text: {
          en: "In GastroPos you generate a QR code per table and can renew it at any time. Guests order, call staff and request the bill (cash or card at the table). The guest app is available in German, English, Turkish, Arabic, Spanish and French. Optionally, orders wait for approval by staff before they go to the kitchen.",
          de: "In GastroPos erzeugen Sie für jeden Tisch einen QR-Code und können ihn jederzeit erneuern. Gäste bestellen, rufen den Service und fordern die Rechnung an (bar oder Karte am Tisch). Die Gäste-App gibt es auf Deutsch, Englisch, Türkisch, Arabisch, Spanisch und Französisch. Optional warten Bestellungen auf die Freigabe durch den Service, bevor sie in die Küche gehen.",
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
          en: "No. The menu opens in the phone's browser after scanning the QR code.",
          de: "Nein. Die Speisekarte öffnet sich nach dem Scannen im Browser des Handys.",
        },
      },
      {
        q: {
          en: "Can guests pay via the QR code?",
          de: "Können Gäste über den QR-Code bezahlen?",
        },
        a: {
          en: "In GastroPos guests request the bill via the QR code and pay staff in cash or by card; there is no in-app payment.",
          de: "In GastroPos fordern Gäste über den QR-Code die Rechnung an und zahlen beim Service bar oder mit Karte; eine Zahlung in der App gibt es nicht.",
        },
      },
    ],
    related: ["qr-ordering", "waiter-ordering"],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
