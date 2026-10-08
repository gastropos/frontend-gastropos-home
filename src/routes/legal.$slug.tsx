import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

type LegalSlug = "privacy" | "terms" | "impressum" | "cookies";

type Localized = { en: string; de: string };

type LegalSection = {
  heading: Localized;
  paragraphs: { en: string[]; de: string[] };
};

type LegalDoc = {
  title: Localized;
  meta: Localized;
  updated?: Localized;
  body?: Localized;
  sections?: LegalSection[];
};

const legal: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: {
      en: "Privacy Policy",
      de: "Datenschutzerklärung",
    },
    meta: {
      en: "Privacy policy of GastroPos (OrdersTracker UG): which data we process on our website, in the apps and for our customers, and your rights under the GDPR.",
      de: "Datenschutzerklärung von GastroPos (OrdersTracker UG): welche Daten wir auf der Webseite, in den Apps und für unsere Kunden verarbeiten und welche Rechte Sie nach der DSGVO haben.",
    },
    updated: {
      en: "As of October 2026 · Our legal documents are available in German only. The German version is legally binding.",
      de: "Stand: Oktober 2026",
    },
    sections: [
      {
        heading: {
          en: "1. Verantwortlicher",
          de: "1. Verantwortlicher",
        },
        paragraphs: {
          en: [
            "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) für diese Webseite, die GastroPos-Apps und die Verarbeitung der Daten unserer Kunden ist:",
            "OrdersTracker UG (haftungsbeschränkt)\nMarktstr. 10\n45355 Essen\nDeutschland\nE-Mail: info@gastropos.ai\nTelefon: +49 201 75934694",
            "Vertreten durch den Geschäftsführer Sinan Can.",
          ],
          de: [
            "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) für diese Webseite, die GastroPos-Apps und die Verarbeitung der Daten unserer Kunden ist:",
            "OrdersTracker UG (haftungsbeschränkt)\nMarktstr. 10\n45355 Essen\nDeutschland\nE-Mail: info@gastropos.ai\nTelefon: +49 201 75934694",
            "Vertreten durch den Geschäftsführer Sinan Can.",
          ],
        },
      },
      {
        heading: {
          en: "2. Allgemeines",
          de: "2. Allgemeines",
        },
        paragraphs: {
          en: [
            "Ihre personenbezogenen Daten im Sinne von Art. 4 Nr. 1 DSGVO (z. B. IP-Adresse, Name, E-Mail-Adresse, Zahlungsinformationen) verarbeiten wir nur gemäß den Bestimmungen des deutschen Datenschutzrechts und der DSGVO. Diese Erklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung.",
            "Die Verarbeitung ist insbesondere rechtmäßig, wenn Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO), wenn sie für die Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich ist (lit. b), wenn sie zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist (lit. c) oder wenn sie zur Wahrung unserer berechtigten Interessen erforderlich ist und Ihre Interessen nicht überwiegen (lit. f).",
            "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt. Wir sichern die Daten nach Art. 32 DSGVO durch geeignete technische und organisatorische Maßnahmen. Sollte es zu einer Verletzung des Schutzes personenbezogener Daten kommen, benachrichtigen wir die zuständige Aufsichtsbehörde nach Art. 33 DSGVO und die betroffenen Personen nach Art. 34 DSGVO.",
          ],
          de: [
            "Ihre personenbezogenen Daten im Sinne von Art. 4 Nr. 1 DSGVO (z. B. IP-Adresse, Name, E-Mail-Adresse, Zahlungsinformationen) verarbeiten wir nur gemäß den Bestimmungen des deutschen Datenschutzrechts und der DSGVO. Diese Erklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung.",
            "Die Verarbeitung ist insbesondere rechtmäßig, wenn Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO), wenn sie für die Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich ist (lit. b), wenn sie zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist (lit. c) oder wenn sie zur Wahrung unserer berechtigten Interessen erforderlich ist und Ihre Interessen nicht überwiegen (lit. f).",
            "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt. Wir sichern die Daten nach Art. 32 DSGVO durch geeignete technische und organisatorische Maßnahmen. Sollte es zu einer Verletzung des Schutzes personenbezogener Daten kommen, benachrichtigen wir die zuständige Aufsichtsbehörde nach Art. 33 DSGVO und die betroffenen Personen nach Art. 34 DSGVO.",
          ],
        },
      },
      {
        heading: {
          en: "3. Geltungsbereich und Daten Ihrer Gäste (Auftragsverarbeitung)",
          de: "3. Geltungsbereich und Daten Ihrer Gäste (Auftragsverarbeitung)",
        },
        paragraphs: {
          en: [
            "Diese Datenschutzerklärung gilt für unsere Webseite und unsere Apps. Falls Sie über Links auf andere Seiten gelangen, informieren Sie sich bitte dort über den Umgang mit Ihren Daten.",
            "Restaurants und andere Betriebe, die GastroPos nutzen, verarbeiten mit GastroPos personenbezogene Daten ihrer Gäste und Mitarbeiter, z. B. bei Bestellungen über den Webshop oder per QR-Code, bei Lieferungen und Reservierungen. Für diese Daten ist der jeweilige Betrieb Verantwortlicher; wir verarbeiten sie als Auftragsverarbeiter nach Art. 28 DSGVO ausschließlich nach dessen Weisung. Wenden Sie sich als Gast mit Fragen zu Ihren Daten bitte an den Betrieb, bei dem Sie bestellt haben.",
          ],
          de: [
            "Diese Datenschutzerklärung gilt für unsere Webseite und unsere Apps. Falls Sie über Links auf andere Seiten gelangen, informieren Sie sich bitte dort über den Umgang mit Ihren Daten.",
            "Restaurants und andere Betriebe, die GastroPos nutzen, verarbeiten mit GastroPos personenbezogene Daten ihrer Gäste und Mitarbeiter, z. B. bei Bestellungen über den Webshop oder per QR-Code, bei Lieferungen und Reservierungen. Für diese Daten ist der jeweilige Betrieb Verantwortlicher; wir verarbeiten sie als Auftragsverarbeiter nach Art. 28 DSGVO ausschließlich nach dessen Weisung. Wenden Sie sich als Gast mit Fragen zu Ihren Daten bitte an den Betrieb, bei dem Sie bestellt haben.",
          ],
        },
      },
      {
        heading: {
          en: "4. Hosting und Server-Logfiles",
          de: "4. Hosting und Server-Logfiles",
        },
        paragraphs: {
          en: [
            "Diese Webseite wird über Firebase Hosting der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ausgeliefert. Die Server der GastroPos-Plattform und die Datenbanken betreiben wir bei Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg, im Rechenzentrumsstandort Frankfurt am Main. Mit beiden Anbietern bestehen Verträge zur Auftragsverarbeitung.",
            "Beim Aufruf werden automatisch Informationen in Server-Logfiles gespeichert, die Ihr Browser übermittelt:\n– Browsertyp und Browserversion\n– verwendetes Betriebssystem\n– Referrer-URL\n– IP-Adresse bzw. Hostname des zugreifenden Rechners\n– Uhrzeit der Serveranfrage",
            "Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn konkrete Anhaltspunkte für eine rechtswidrige Nutzung bestehen.",
          ],
          de: [
            "Diese Webseite wird über Firebase Hosting der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ausgeliefert. Die Server der GastroPos-Plattform und die Datenbanken betreiben wir bei Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg, im Rechenzentrumsstandort Frankfurt am Main. Mit beiden Anbietern bestehen Verträge zur Auftragsverarbeitung.",
            "Beim Aufruf werden automatisch Informationen in Server-Logfiles gespeichert, die Ihr Browser übermittelt:\n– Browsertyp und Browserversion\n– verwendetes Betriebssystem\n– Referrer-URL\n– IP-Adresse bzw. Hostname des zugreifenden Rechners\n– Uhrzeit der Serveranfrage",
            "Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn konkrete Anhaltspunkte für eine rechtswidrige Nutzung bestehen.",
          ],
        },
      },
      {
        heading: {
          en: "5. Cookies und ähnliche Technologien",
          de: "5. Cookies und ähnliche Technologien",
        },
        paragraphs: {
          en: [
            "Wir setzen Cookies und vergleichbare Technologien (z. B. Local Storage) ein. Technisch erforderliche Speicherungen – etwa um Sie in der App angemeldet zu halten oder Ihre Spracheinstellung zu speichern – erfolgen auf Grundlage von § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.",
            "Nicht erforderliche Technologien, insbesondere zur Analyse (Microsoft Clarity, Abschnitt 6), setzen wir nur mit Ihrer Einwilligung ein (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
            "Sie können Ihren Browser so einstellen, dass keine Cookies gespeichert werden oder vor dem Speichern ein Hinweis erscheint. Die vollständige Deaktivierung kann dazu führen, dass nicht alle Funktionen nutzbar sind.",
          ],
          de: [
            "Wir setzen Cookies und vergleichbare Technologien (z. B. Local Storage) ein. Technisch erforderliche Speicherungen – etwa um Sie in der App angemeldet zu halten oder Ihre Spracheinstellung zu speichern – erfolgen auf Grundlage von § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.",
            "Nicht erforderliche Technologien, insbesondere zur Analyse (Microsoft Clarity, Abschnitt 6), setzen wir nur mit Ihrer Einwilligung ein (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
            "Sie können Ihren Browser so einstellen, dass keine Cookies gespeichert werden oder vor dem Speichern ein Hinweis erscheint. Die vollständige Deaktivierung kann dazu führen, dass nicht alle Funktionen nutzbar sind.",
          ],
        },
      },
      {
        heading: {
          en: "6. Analyse mit Microsoft Clarity",
          de: "6. Analyse mit Microsoft Clarity",
        },
        paragraphs: {
          en: [
            "Auf unserer Webseite, in den GastroPos-Apps und im Webshop nutzen wir Microsoft Clarity der Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Clarity erfasst, wie Besucher die Seiten nutzen (z. B. Mausbewegungen, Klicks, Scrollverhalten) und stellt dies in Form von Sitzungsaufzeichnungen und Heatmaps dar, damit wir die Bedienung verbessern können. Eingaben in Formularfelder werden maskiert.",
            "Die Verarbeitung erfolgt nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Eine Übermittlung in die USA ist möglich; Microsoft ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: https://privacy.microsoft.com/de-de/privacystatement",
          ],
          de: [
            "Auf unserer Webseite, in den GastroPos-Apps und im Webshop nutzen wir Microsoft Clarity der Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Clarity erfasst, wie Besucher die Seiten nutzen (z. B. Mausbewegungen, Klicks, Scrollverhalten) und stellt dies in Form von Sitzungsaufzeichnungen und Heatmaps dar, damit wir die Bedienung verbessern können. Eingaben in Formularfelder werden maskiert.",
            "Die Verarbeitung erfolgt nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Eine Übermittlung in die USA ist möglich; Microsoft ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: https://privacy.microsoft.com/de-de/privacystatement",
          ],
        },
      },
      {
        heading: {
          en: "7. Live-Chat mit Crisp",
          de: "7. Live-Chat mit Crisp",
        },
        paragraphs: {
          en: [
            "Auf unserer Webseite und in der App ist der Live-Chat von Crisp IM SAS, 2 Boulevard de Launay, 44100 Nantes, Frankreich, eingebunden. Über den Chat können Sie direkt mit unseren Mitarbeitern kommunizieren. Dabei werden die von Ihnen eingegebenen Nachrichten sowie technische Daten (z. B. IP-Adresse, Browser) verarbeitet. Auf unserer Webseite wird der Chat erst geladen, nachdem Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Die Verarbeitung Ihrer Chat-Nachrichten erfolgt zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b DSGVO, soweit es einen Vertrag betrifft, im Übrigen Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: https://crisp.chat/de/privacy/",
          ],
          de: [
            "Auf unserer Webseite und in der App ist der Live-Chat von Crisp IM SAS, 2 Boulevard de Launay, 44100 Nantes, Frankreich, eingebunden. Über den Chat können Sie direkt mit unseren Mitarbeitern kommunizieren. Dabei werden die von Ihnen eingegebenen Nachrichten sowie technische Daten (z. B. IP-Adresse, Browser) verarbeitet. Auf unserer Webseite wird der Chat erst geladen, nachdem Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Die Verarbeitung Ihrer Chat-Nachrichten erfolgt zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b DSGVO, soweit es einen Vertrag betrifft, im Übrigen Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: https://crisp.chat/de/privacy/",
          ],
        },
      },
      {
        heading: {
          en: "8. Schriftarten",
          de: "8. Schriftarten",
        },
        paragraphs: {
          en: [
            "Die auf dieser Webseite verwendeten Schriftarten werden lokal von unserem eigenen Webserver geladen. Es findet keine Verbindung zu Servern von Google oder anderen Schriftart-Anbietern statt.",
          ],
          de: [
            "Die auf dieser Webseite verwendeten Schriftarten werden lokal von unserem eigenen Webserver geladen. Es findet keine Verbindung zu Servern von Google oder anderen Schriftart-Anbietern statt.",
          ],
        },
      },
      {
        heading: {
          en: "9. Registrierung und Kundenkonto",
          de: "9. Registrierung und Kundenkonto",
        },
        paragraphs: {
          en: [
            "Für die Nutzung von GastroPos ist eine Registrierung erforderlich. Dabei werden die in der Eingabemaske angegebenen Daten (z. B. Name, Firma, Anschrift, E-Mail-Adresse, Telefonnummer) sowie die IP-Adresse und der Zeitpunkt der Registrierung gespeichert. Die Verarbeitung erfolgt zur Durchführung des Vertrags (Art. 6 Abs. 1 lit. b DSGVO); die Speicherung der IP-Adresse dient der Verhinderung von Missbrauch (Art. 6 Abs. 1 lit. f DSGVO). Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Durchführung des Vertrags erforderlich ist.",
          ],
          de: [
            "Für die Nutzung von GastroPos ist eine Registrierung erforderlich. Dabei werden die in der Eingabemaske angegebenen Daten (z. B. Name, Firma, Anschrift, E-Mail-Adresse, Telefonnummer) sowie die IP-Adresse und der Zeitpunkt der Registrierung gespeichert. Die Verarbeitung erfolgt zur Durchführung des Vertrags (Art. 6 Abs. 1 lit. b DSGVO); die Speicherung der IP-Adresse dient der Verhinderung von Missbrauch (Art. 6 Abs. 1 lit. f DSGVO). Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Durchführung des Vertrags erforderlich ist.",
          ],
        },
      },
      {
        heading: {
          en: "10. Nutzung der App Stores",
          de: "10. Nutzung der App Stores",
        },
        paragraphs: {
          en: [
            "Um die App herunterzuladen, benötigen Sie ein Konto beim jeweiligen App-Store-Betreiber. Auf diese Datenverarbeitung haben wir keinen Einfluss. Informationen: Apple App Store https://www.apple.com/de/legal/privacy/ · Google Play https://policies.google.com/privacy · Microsoft Store https://privacy.microsoft.com/de-de/privacystatement",
          ],
          de: [
            "Um die App herunterzuladen, benötigen Sie ein Konto beim jeweiligen App-Store-Betreiber. Auf diese Datenverarbeitung haben wir keinen Einfluss. Informationen: Apple App Store https://www.apple.com/de/legal/privacy/ · Google Play https://policies.google.com/privacy · Microsoft Store https://privacy.microsoft.com/de-de/privacystatement",
          ],
        },
      },
      {
        heading: {
          en: "11. Standortberechtigung (nur App)",
          de: "11. Standortberechtigung (nur App)",
        },
        paragraphs: {
          en: [
            "Die App bittet unter bestimmten Umständen um die Erlaubnis, den Standort zu bestimmen: bei der Verbindung mit Bluetooth-Druckern (vom Betriebssystem vorausgesetzt) und wenn sich ein Benutzer mit der Rolle „Kurier“ anmeldet, um Lieferungen auf der Karte anzuzeigen und dem Betrieb den Standort des Kuriers während der Auslieferung anzuzeigen. Der Zweck wird bei der Abfrage angegeben; Sie können die Berechtigung jederzeit in den Einstellungen Ihres Geräts widerrufen.",
          ],
          de: [
            "Die App bittet unter bestimmten Umständen um die Erlaubnis, den Standort zu bestimmen: bei der Verbindung mit Bluetooth-Druckern (vom Betriebssystem vorausgesetzt) und wenn sich ein Benutzer mit der Rolle „Kurier“ anmeldet, um Lieferungen auf der Karte anzuzeigen und dem Betrieb den Standort des Kuriers während der Auslieferung anzuzeigen. Der Zweck wird bei der Abfrage angegeben; Sie können die Berechtigung jederzeit in den Einstellungen Ihres Geräts widerrufen.",
          ],
        },
      },
      {
        heading: {
          en: "12. Technische Sicherheitseinrichtung (TSE)",
          de: "12. Technische Sicherheitseinrichtung (TSE)",
        },
        paragraphs: {
          en: [
            "Für Kassen in Deutschland ist eine zertifizierte technische Sicherheitseinrichtung gesetzlich vorgeschrieben (§ 146a AO, KassenSichV). Wir nutzen hierfür die Cloud-TSE der fiskaly GmbH, Wien, Österreich. Die Kassenvorgänge (z. B. Zeitpunkt, Beträge, Zahlungsart) werden zur Signatur an fiskaly übermittelt. Rechtsgrundlage ist die Erfüllung rechtlicher Verpflichtungen des Betriebs (Art. 6 Abs. 1 lit. c DSGVO); fiskaly ist für uns als Unterauftragsverarbeiter tätig.",
          ],
          de: [
            "Für Kassen in Deutschland ist eine zertifizierte technische Sicherheitseinrichtung gesetzlich vorgeschrieben (§ 146a AO, KassenSichV). Wir nutzen hierfür die Cloud-TSE der fiskaly GmbH, Wien, Österreich. Die Kassenvorgänge (z. B. Zeitpunkt, Beträge, Zahlungsart) werden zur Signatur an fiskaly übermittelt. Rechtsgrundlage ist die Erfüllung rechtlicher Verpflichtungen des Betriebs (Art. 6 Abs. 1 lit. c DSGVO); fiskaly ist für uns als Unterauftragsverarbeiter tätig.",
          ],
        },
      },
      {
        heading: {
          en: "13. Zahlungsabwicklung",
          de: "13. Zahlungsabwicklung",
        },
        paragraphs: {
          en: [
            "Zahlungen unserer Kunden für GastroPos sowie Online-Zahlungen von Gästen im Webshop werden über folgende Zahlungsdienstleister abgewickelt, an die die für die Zahlung erforderlichen Daten (z. B. Name, Betrag, Währung, Transaktionsnummer, gegebenenfalls Zahlungsmitteldaten) übermittelt werden:\n– Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland – https://stripe.com/de/privacy\n– PayPal (Europe) S.à r.l. et Cie, S.C.A., 22–24 Boulevard Royal, L-2449 Luxemburg – https://www.paypal.com/de/webapps/mpp/ua/privacy-full\n– Klarna Bank AB (publ), Sveavägen 46, 111 34 Stockholm, Schweden – https://www.klarna.com/de/datenschutz/",
            "Bei Kartenzahlungen vor Ort über ein Kartenterminal (ZVT, SumUp, Zettle) erfolgt die Zahlungsabwicklung durch den vom Betrieb gewählten Zahlungsdienstleister; GastroPos erhält nur das Ergebnis der Zahlung.",
            "Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Die Zahlungsdienstleister können eigene Prüfungen, z. B. zur Betrugsprävention, in eigener Verantwortung durchführen.",
          ],
          de: [
            "Zahlungen unserer Kunden für GastroPos sowie Online-Zahlungen von Gästen im Webshop werden über folgende Zahlungsdienstleister abgewickelt, an die die für die Zahlung erforderlichen Daten (z. B. Name, Betrag, Währung, Transaktionsnummer, gegebenenfalls Zahlungsmitteldaten) übermittelt werden:\n– Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland – https://stripe.com/de/privacy\n– PayPal (Europe) S.à r.l. et Cie, S.C.A., 22–24 Boulevard Royal, L-2449 Luxemburg – https://www.paypal.com/de/webapps/mpp/ua/privacy-full\n– Klarna Bank AB (publ), Sveavägen 46, 111 34 Stockholm, Schweden – https://www.klarna.com/de/datenschutz/",
            "Bei Kartenzahlungen vor Ort über ein Kartenterminal (ZVT, SumUp, Zettle) erfolgt die Zahlungsabwicklung durch den vom Betrieb gewählten Zahlungsdienstleister; GastroPos erhält nur das Ergebnis der Zahlung.",
            "Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Die Zahlungsdienstleister können eigene Prüfungen, z. B. zur Betrugsprävention, in eigener Verantwortung durchführen.",
          ],
        },
      },
      {
        heading: {
          en: "14. KI-Funktionen",
          de: "14. KI-Funktionen",
        },
        paragraphs: {
          en: [
            "Für KI-gestützte Funktionen – den Import der Speisekarte aus Fotos oder PDF-Dateien, den Assistenten in der App und die Bestellung per Sprache – übermitteln wir die jeweilige Eingabe (Bild, Dokument, Text oder Sprachaufnahme) an Anbieter von KI-Modellen: Google (Gemini), OpenAI und Anthropic. Die Anbieter verarbeiten die Daten als Auftragsverarbeiter, um das Ergebnis zu erzeugen, und nutzen sie nach ihren Vertragsbedingungen nicht zum Training ihrer Modelle. Eine Übermittlung in die USA ist möglich; sie erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von EU-Standardvertragsklauseln.",
            "Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Bitte geben Sie in KI-Funktionen keine sensiblen personenbezogenen Daten ein, die für die Aufgabe nicht erforderlich sind.",
          ],
          de: [
            "Für KI-gestützte Funktionen – den Import der Speisekarte aus Fotos oder PDF-Dateien, den Assistenten in der App und die Bestellung per Sprache – übermitteln wir die jeweilige Eingabe (Bild, Dokument, Text oder Sprachaufnahme) an Anbieter von KI-Modellen: Google (Gemini), OpenAI und Anthropic. Die Anbieter verarbeiten die Daten als Auftragsverarbeiter, um das Ergebnis zu erzeugen, und nutzen sie nach ihren Vertragsbedingungen nicht zum Training ihrer Modelle. Eine Übermittlung in die USA ist möglich; sie erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von EU-Standardvertragsklauseln.",
            "Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Bitte geben Sie in KI-Funktionen keine sensiblen personenbezogenen Daten ein, die für die Aufgabe nicht erforderlich sind.",
          ],
        },
      },
      {
        heading: {
          en: "15. E-Mail- und Nachrichtenversand",
          de: "15. E-Mail- und Nachrichtenversand",
        },
        paragraphs: {
          en: [
            "Systemnachrichten wie Bestellbestätigungen, Z-Berichte, Bestandswarnungen oder Rechnungen versenden wir über Twilio SendGrid. Für Bestätigungscodes und Benachrichtigungen per SMS oder WhatsApp nutzen wir Twilio. Anbieter ist Twilio Ireland Limited, 25–28 North Wall Quay, Dublin 1, Irland, mit Konzernmutter Twilio Inc., USA. Übermittelt werden die Empfängeradresse bzw. Telefonnummer und der Nachrichteninhalt. Eine Übermittlung in die USA ist möglich; Twilio ist unter dem EU-US Data Privacy Framework zertifiziert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
          ],
          de: [
            "Systemnachrichten wie Bestellbestätigungen, Z-Berichte, Bestandswarnungen oder Rechnungen versenden wir über Twilio SendGrid. Für Bestätigungscodes und Benachrichtigungen per SMS oder WhatsApp nutzen wir Twilio. Anbieter ist Twilio Ireland Limited, 25–28 North Wall Quay, Dublin 1, Irland, mit Konzernmutter Twilio Inc., USA. Übermittelt werden die Empfängeradresse bzw. Telefonnummer und der Nachrichteninhalt. Eine Übermittlung in die USA ist möglich; Twilio ist unter dem EU-US Data Privacy Framework zertifiziert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
          ],
        },
      },
      {
        heading: {
          en: "16. Fehleranalyse und Betriebsüberwachung",
          de: "16. Fehleranalyse und Betriebsüberwachung",
        },
        paragraphs: {
          en: [
            "Um Fehler schnell zu erkennen und zu beheben, nutzen wir Sentry (Functional Software, Inc., San Francisco, USA) und Datadog (Datadog, Inc., New York, USA). Dabei werden technische Daten wie Fehlermeldungen, Gerätetyp, Browser- bzw. App-Version, Zeitpunkt und gekürzte bzw. pseudonymisierte Kennungen verarbeitet. Rechtsgrundlage ist unser berechtigtes Interesse an einem stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Eine Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von EU-Standardvertragsklauseln.",
          ],
          de: [
            "Um Fehler schnell zu erkennen und zu beheben, nutzen wir Sentry (Functional Software, Inc., San Francisco, USA) und Datadog (Datadog, Inc., New York, USA). Dabei werden technische Daten wie Fehlermeldungen, Gerätetyp, Browser- bzw. App-Version, Zeitpunkt und gekürzte bzw. pseudonymisierte Kennungen verarbeitet. Rechtsgrundlage ist unser berechtigtes Interesse an einem stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Eine Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von EU-Standardvertragsklauseln.",
          ],
        },
      },
      {
        heading: {
          en: "17. Kontaktaufnahme",
          de: "17. Kontaktaufnahme",
        },
        paragraphs: {
          en: [
            "Wenn Sie uns per E-Mail, Telefon, Chat oder über das Demo-Formular kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Firma, Kontaktdaten, Anliegen) zur Bearbeitung Ihrer Anfrage. Das Demo-Formular öffnet Ihr E-Mail-Programm; die Daten werden erst mit dem Versand der E-Mail an uns übermittelt.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag zusammenhängt oder vorvertraglichen Maßnahmen dient, im Übrigen unser berechtigtes Interesse an der Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Die Daten bleiben bei uns, bis der Zweck entfällt oder Sie die Löschung verlangen; gesetzliche Aufbewahrungsfristen bleiben unberührt.",
          ],
          de: [
            "Wenn Sie uns per E-Mail, Telefon, Chat oder über das Demo-Formular kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Firma, Kontaktdaten, Anliegen) zur Bearbeitung Ihrer Anfrage. Das Demo-Formular öffnet Ihr E-Mail-Programm; die Daten werden erst mit dem Versand der E-Mail an uns übermittelt.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag zusammenhängt oder vorvertraglichen Maßnahmen dient, im Übrigen unser berechtigtes Interesse an der Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Die Daten bleiben bei uns, bis der Zweck entfällt oder Sie die Löschung verlangen; gesetzliche Aufbewahrungsfristen bleiben unberührt.",
          ],
        },
      },
      {
        heading: {
          en: "18. Weitergabe an Dritte und Übermittlung in Drittländer",
          de: "18. Weitergabe an Dritte und Übermittlung in Drittländer",
        },
        paragraphs: {
          en: [
            "Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn Sie eingewilligt haben, dies zur Erfüllung des Vertrags erforderlich ist, eine rechtliche Verpflichtung besteht oder wir die in dieser Erklärung genannten Dienstleister einsetzen. Dienstleister, die in unserem Auftrag tätig sind, haben wir nach Art. 28 DSGVO vertraglich verpflichtet.",
            "Soweit Daten in Länder außerhalb der EU bzw. des EWR übermittelt werden, geschieht dies nur bei Vorliegen eines Angemessenheitsbeschlusses (z. B. EU-US Data Privacy Framework für zertifizierte Unternehmen) oder geeigneter Garantien wie EU-Standardvertragsklauseln (Art. 44 ff. DSGVO).",
          ],
          de: [
            "Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn Sie eingewilligt haben, dies zur Erfüllung des Vertrags erforderlich ist, eine rechtliche Verpflichtung besteht oder wir die in dieser Erklärung genannten Dienstleister einsetzen. Dienstleister, die in unserem Auftrag tätig sind, haben wir nach Art. 28 DSGVO vertraglich verpflichtet.",
            "Soweit Daten in Länder außerhalb der EU bzw. des EWR übermittelt werden, geschieht dies nur bei Vorliegen eines Angemessenheitsbeschlusses (z. B. EU-US Data Privacy Framework für zertifizierte Unternehmen) oder geeigneter Garantien wie EU-Standardvertragsklauseln (Art. 44 ff. DSGVO).",
          ],
        },
      },
      {
        heading: {
          en: "19. Speicherdauer",
          de: "19. Speicherdauer",
        },
        paragraphs: {
          en: [
            "Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Daten des Kundenkontos speichern wir für die Dauer der Mitgliedschaft. Danach werden sie gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten bestehen – insbesondere handels- und steuerrechtliche Fristen von acht Jahren für Buchungsbelege und zehn Jahren für Bücher (§ 147 AO, § 257 HGB).",
          ],
          de: [
            "Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Daten des Kundenkontos speichern wir für die Dauer der Mitgliedschaft. Danach werden sie gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten bestehen – insbesondere handels- und steuerrechtliche Fristen von acht Jahren für Buchungsbelege und zehn Jahren für Bücher (§ 147 AO, § 257 HGB).",
          ],
        },
      },
      {
        heading: {
          en: "20. Sicherheit Ihrer Daten",
          de: "20. Sicherheit Ihrer Daten",
        },
        paragraphs: {
          en: [
            "Diese Webseite und unsere Apps übertragen Daten ausschließlich verschlüsselt (TLS), zu erkennen am Schloss-Symbol in der Adressleiste Ihres Browsers. Wir setzen darüber hinaus technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung und unbefugten Zugriff zu schützen, und verbessern diese entsprechend der technischen Entwicklung.",
          ],
          de: [
            "Diese Webseite und unsere Apps übertragen Daten ausschließlich verschlüsselt (TLS), zu erkennen am Schloss-Symbol in der Adressleiste Ihres Browsers. Wir setzen darüber hinaus technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung und unbefugten Zugriff zu schützen, und verbessern diese entsprechend der technischen Entwicklung.",
          ],
        },
      },
      {
        heading: {
          en: "21. Ihre Rechte",
          de: "21. Ihre Rechte",
        },
        paragraphs: {
          en: [
            "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Ihre Rechte ergeben sich insbesondere aus:\n– Art. 7 Abs. 3 DSGVO – Widerruf einer Einwilligung\n– Art. 15 DSGVO – Auskunft\n– Art. 16 DSGVO – Berichtigung\n– Art. 17 DSGVO – Löschung („Recht auf Vergessenwerden“)\n– Art. 18 DSGVO – Einschränkung der Verarbeitung\n– Art. 20 DSGVO – Datenübertragbarkeit\n– Art. 21 DSGVO – Widerspruch\n– Art. 77 DSGVO – Beschwerde bei einer Aufsichtsbehörde",
            "Widerspruchsrecht: Soweit wir Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen.",
            "Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die unter Abschnitt 1 genannte Stelle.",
          ],
          de: [
            "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Ihre Rechte ergeben sich insbesondere aus:\n– Art. 7 Abs. 3 DSGVO – Widerruf einer Einwilligung\n– Art. 15 DSGVO – Auskunft\n– Art. 16 DSGVO – Berichtigung\n– Art. 17 DSGVO – Löschung („Recht auf Vergessenwerden“)\n– Art. 18 DSGVO – Einschränkung der Verarbeitung\n– Art. 20 DSGVO – Datenübertragbarkeit\n– Art. 21 DSGVO – Widerspruch\n– Art. 77 DSGVO – Beschwerde bei einer Aufsichtsbehörde",
            "Widerspruchsrecht: Soweit wir Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen.",
            "Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die unter Abschnitt 1 genannte Stelle.",
          ],
        },
      },
      {
        heading: {
          en: "22. Zuständige Aufsichtsbehörde",
          de: "22. Zuständige Aufsichtsbehörde",
        },
        paragraphs: {
          en: [
            "Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, https://www.ldi.nrw.de. Sie können sich auch an die Aufsichtsbehörde Ihres Wohnorts wenden.",
          ],
          de: [
            "Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, https://www.ldi.nrw.de. Sie können sich auch an die Aufsichtsbehörde Ihres Wohnorts wenden.",
          ],
        },
      },
      {
        heading: {
          en: "23. Änderungen",
          de: "23. Änderungen",
        },
        paragraphs: {
          en: [
            "Wir passen diese Datenschutzerklärung an, wenn sich unsere Dienste oder die Rechtslage ändern. Es gilt die jeweils hier veröffentlichte Fassung.",
          ],
          de: [
            "Wir passen diese Datenschutzerklärung an, wenn sich unsere Dienste oder die Rechtslage ändern. Es gilt die jeweils hier veröffentlichte Fassung.",
          ],
        },
      },
    ],
  },
  terms: {
    title: {
      en: "Terms and Conditions",
      de: "Allgemeine Geschäftsbedingungen",
    },
    meta: {
      en: "General terms and conditions of OrdersTracker UG for the GastroPos cloud POS system for business customers.",
      de: "Allgemeine Geschäftsbedingungen der OrdersTracker UG für das Cloud-Kassensystem GastroPos für gewerbliche Kunden.",
    },
    updated: {
      en: "As of October 2026 · Our legal documents are available in German only. The German version is legally binding.",
      de: "Stand: Oktober 2026",
    },
    sections: [
      {
        heading: {
          en: "§ 1 Allgemeines, Geltungsbereich",
          de: "§ 1 Allgemeines, Geltungsbereich",
        },
        paragraphs: {
          en: [
            "(1) Die Plattform und die Apps GastroPos (vormals OrdersTracker) des Anbieters OrdersTracker UG (haftungsbeschränkt), Marktstr. 10, 45355 Essen (im Folgenden: Anbieter) bieten ein cloud-basiertes Kassensystem gegenüber gewerblichen Kunden (im Folgenden: Kunde) an, das speziell auf die Gastronomie ausgerichtet ist.",
            "(2) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Nutzung von GastroPos. Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich in Textform zu.",
            "(3) Das Angebot richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB. Der Kunde versichert, Unternehmer zu sein und nicht als Verbraucher (§ 13 BGB) zu handeln. Unternehmer ist jede natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die beim Abschluss des Vertrags in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.",
          ],
          de: [
            "(1) Die Plattform und die Apps GastroPos (vormals OrdersTracker) des Anbieters OrdersTracker UG (haftungsbeschränkt), Marktstr. 10, 45355 Essen (im Folgenden: Anbieter) bieten ein cloud-basiertes Kassensystem gegenüber gewerblichen Kunden (im Folgenden: Kunde) an, das speziell auf die Gastronomie ausgerichtet ist.",
            "(2) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Nutzung von GastroPos. Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich in Textform zu.",
            "(3) Das Angebot richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB. Der Kunde versichert, Unternehmer zu sein und nicht als Verbraucher (§ 13 BGB) zu handeln. Unternehmer ist jede natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die beim Abschluss des Vertrags in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.",
          ],
        },
      },
      {
        heading: {
          en: "§ 2 Vertragsschluss, Preise, Zahlung",
          de: "§ 2 Vertragsschluss, Preise, Zahlung",
        },
        paragraphs: {
          en: [
            "(1) Kunden können eine kostenlose oder eine kostenpflichtige Mitgliedschaft abschließen, um GastroPos zu nutzen. Hierzu werden verschiedene Pakete und Zusatzmodule (z. B. die Cloud-TSE) mit unterschiedlichen Leistungen angeboten. Der Vertrag kommt durch vollständigen Abschluss des Buchungsprozesses zustande. Davor muss der Kunde diesen AGB zustimmen und die Datenschutzerklärung zur Kenntnis nehmen. Hinsichtlich des genauen Leistungsumfangs wird auf die Leistungsbeschreibung auf der Webseite und in der App des Anbieters zum Zeitpunkt des Vertragsschlusses verwiesen.",
            "(2) Der Kunde hat die Wahl, monatlich oder jährlich zu zahlen. Die Gebühr ist im Voraus fällig. Die Zahlung erfolgt per Kreditkarte oder Lastschrift, soweit nicht anders vom Kunden ausgewählt. Kosten, die durch eine vom Kunden zu vertretende Rücklastschrift entstehen, trägt der Kunde. Der Anbieter kann die Freischaltung bis zum vollständigen Zahlungseingang verweigern. Bei Löschung des Kontos oder Einstellen der Nutzung durch den Kunden während der laufenden Abrechnungsperiode erfolgt keine anteilige Rückerstattung.",
            "(3) Es gelten die auf der Webseite bzw. in der App angegebenen Preise zum Zeitpunkt des Vertragsschlusses. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, soweit nicht anders ausgewiesen.",
            "(4) Kommt der Kunde mit der Zahlung in Verzug, ist der Anbieter berechtigt, Verzugszinsen nach den gesetzlichen Bestimmungen zu fordern. Weitergehende Ansprüche bleiben unberührt. Ist der Kunde mit einem Betrag von mindestens einer Monatsgebühr länger als 14 Tage in Verzug, kann der Anbieter den Zugang nach vorheriger Ankündigung in Textform bis zum Zahlungseingang sperren; der Zugriff auf Exporte nach § 6 Abs. 4 bleibt möglich.",
            "(5) Es besteht kein vertragliches Rücktrittsrecht und keine Stornierungsmöglichkeit für den Kunden. Ein gesetzliches Widerrufsrecht für Verbraucher besteht nicht, da das Angebot sich ausschließlich an Unternehmer richtet.",
            "(6) Der Vertragsschluss erfolgt in deutscher Sprache. Der Vertragstext wird unter Wahrung der datenschutzrechtlichen Bestimmungen gespeichert.",
          ],
          de: [
            "(1) Kunden können eine kostenlose oder eine kostenpflichtige Mitgliedschaft abschließen, um GastroPos zu nutzen. Hierzu werden verschiedene Pakete und Zusatzmodule (z. B. die Cloud-TSE) mit unterschiedlichen Leistungen angeboten. Der Vertrag kommt durch vollständigen Abschluss des Buchungsprozesses zustande. Davor muss der Kunde diesen AGB zustimmen und die Datenschutzerklärung zur Kenntnis nehmen. Hinsichtlich des genauen Leistungsumfangs wird auf die Leistungsbeschreibung auf der Webseite und in der App des Anbieters zum Zeitpunkt des Vertragsschlusses verwiesen.",
            "(2) Der Kunde hat die Wahl, monatlich oder jährlich zu zahlen. Die Gebühr ist im Voraus fällig. Die Zahlung erfolgt per Kreditkarte oder Lastschrift, soweit nicht anders vom Kunden ausgewählt. Kosten, die durch eine vom Kunden zu vertretende Rücklastschrift entstehen, trägt der Kunde. Der Anbieter kann die Freischaltung bis zum vollständigen Zahlungseingang verweigern. Bei Löschung des Kontos oder Einstellen der Nutzung durch den Kunden während der laufenden Abrechnungsperiode erfolgt keine anteilige Rückerstattung.",
            "(3) Es gelten die auf der Webseite bzw. in der App angegebenen Preise zum Zeitpunkt des Vertragsschlusses. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, soweit nicht anders ausgewiesen.",
            "(4) Kommt der Kunde mit der Zahlung in Verzug, ist der Anbieter berechtigt, Verzugszinsen nach den gesetzlichen Bestimmungen zu fordern. Weitergehende Ansprüche bleiben unberührt. Ist der Kunde mit einem Betrag von mindestens einer Monatsgebühr länger als 14 Tage in Verzug, kann der Anbieter den Zugang nach vorheriger Ankündigung in Textform bis zum Zahlungseingang sperren; der Zugriff auf Exporte nach § 6 Abs. 4 bleibt möglich.",
            "(5) Es besteht kein vertragliches Rücktrittsrecht und keine Stornierungsmöglichkeit für den Kunden. Ein gesetzliches Widerrufsrecht für Verbraucher besteht nicht, da das Angebot sich ausschließlich an Unternehmer richtet.",
            "(6) Der Vertragsschluss erfolgt in deutscher Sprache. Der Vertragstext wird unter Wahrung der datenschutzrechtlichen Bestimmungen gespeichert.",
          ],
        },
      },
      {
        heading: {
          en: "§ 3 Leistungen des Anbieters, Verfügbarkeit, Leistungen Dritter",
          de: "§ 3 Leistungen des Anbieters, Verfügbarkeit, Leistungen Dritter",
        },
        paragraphs: {
          en: [
            "(1) Der Anbieter stellt GastroPos als Software-as-a-Service über das Internet zur Verfügung. Der Anbieter ist um Aktualität bemüht und entwickelt GastroPos weiter; er ist berechtigt, Funktionen anzupassen, soweit der vereinbarte Leistungsumfang dadurch nicht wesentlich eingeschränkt wird. Ein Anspruch auf bestimmte neue Funktionen besteht nicht.",
            "(2) Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit. Ausgenommen sind Zeiten planmäßiger Wartung, die nach Möglichkeit außerhalb üblicher Geschäftszeiten in der Gastronomie durchgeführt und vorab angekündigt werden, sowie Störungen, die außerhalb des Einflussbereichs des Anbieters liegen (z. B. Störungen des Internets, der Internetverbindung des Kunden oder höhere Gewalt).",
            "(3) Der Anbieter gibt keine Gewähr, dass die App mit jedem Endgerät, Drucker oder Kartenterminal kompatibel ist. Für Beschaffung, Betrieb und Internetanbindung der Endgeräte ist der Kunde selbst verantwortlich.",
            "(4) Einzelne Funktionen beruhen auf Leistungen Dritter, insbesondere die technische Sicherheitseinrichtung (Cloud-TSE der fiskaly GmbH), Zahlungsdienste (z. B. Stripe, PayPal, Klarna, SumUp, Zettle) und Schnittstellen zu Lieferplattformen. Für diese Leistungen gelten ergänzend die Bedingungen des jeweiligen Anbieters, denen der Kunde gegebenenfalls gesondert zustimmen muss. Der Anbieter haftet nicht für Ausfälle oder Leistungsänderungen dieser Dritten, soweit er diese nicht zu vertreten hat.",
            "(5) KI-gestützte Funktionen (z. B. Import der Speisekarte aus Fotos oder PDF, Assistent, Sprachbestellung) liefern Vorschläge, die fehlerhaft sein können. Der Kunde ist verpflichtet, die Ergebnisse, insbesondere Preise, Steuersätze, Allergene und Zusatzstoffe, vor der Verwendung zu prüfen.",
          ],
          de: [
            "(1) Der Anbieter stellt GastroPos als Software-as-a-Service über das Internet zur Verfügung. Der Anbieter ist um Aktualität bemüht und entwickelt GastroPos weiter; er ist berechtigt, Funktionen anzupassen, soweit der vereinbarte Leistungsumfang dadurch nicht wesentlich eingeschränkt wird. Ein Anspruch auf bestimmte neue Funktionen besteht nicht.",
            "(2) Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit. Ausgenommen sind Zeiten planmäßiger Wartung, die nach Möglichkeit außerhalb üblicher Geschäftszeiten in der Gastronomie durchgeführt und vorab angekündigt werden, sowie Störungen, die außerhalb des Einflussbereichs des Anbieters liegen (z. B. Störungen des Internets, der Internetverbindung des Kunden oder höhere Gewalt).",
            "(3) Der Anbieter gibt keine Gewähr, dass die App mit jedem Endgerät, Drucker oder Kartenterminal kompatibel ist. Für Beschaffung, Betrieb und Internetanbindung der Endgeräte ist der Kunde selbst verantwortlich.",
            "(4) Einzelne Funktionen beruhen auf Leistungen Dritter, insbesondere die technische Sicherheitseinrichtung (Cloud-TSE der fiskaly GmbH), Zahlungsdienste (z. B. Stripe, PayPal, Klarna, SumUp, Zettle) und Schnittstellen zu Lieferplattformen. Für diese Leistungen gelten ergänzend die Bedingungen des jeweiligen Anbieters, denen der Kunde gegebenenfalls gesondert zustimmen muss. Der Anbieter haftet nicht für Ausfälle oder Leistungsänderungen dieser Dritten, soweit er diese nicht zu vertreten hat.",
            "(5) KI-gestützte Funktionen (z. B. Import der Speisekarte aus Fotos oder PDF, Assistent, Sprachbestellung) liefern Vorschläge, die fehlerhaft sein können. Der Kunde ist verpflichtet, die Ergebnisse, insbesondere Preise, Steuersätze, Allergene und Zusatzstoffe, vor der Verwendung zu prüfen.",
          ],
        },
      },
      {
        heading: {
          en: "§ 4 Pflichten des Kunden",
          de: "§ 4 Pflichten des Kunden",
        },
        paragraphs: {
          en: [
            "(1) Die Nutzung von GastroPos setzt eine Registrierung voraus. Bei der Registrierung sind wahrheitsgemäße Daten anzugeben. Für die Inhalte der vom Kunden eingegebenen Daten ist ausschließlich der Kunde verantwortlich.",
            "(2) Sollten die vom Kunden übermittelten Inhalte die Rechte Dritter verletzen, z. B. aus Urheberrecht, Wettbewerbsrecht oder Vertrauensschutz, stellt der Kunde den Anbieter von etwaigen Ansprüchen Dritter frei, soweit der Kunde die Rechtsverletzung zu vertreten hat. Diese Freistellung umfasst Ansprüche auf Schadensersatz, Unterlassung und Auskunft sowie die notwendigen Kosten der rechtlichen Verteidigung.",
            "(3) Die Parteien benachrichtigen sich gegenseitig unverzüglich, wenn Dritte Schutzrechtsverletzungen oder anderweitige Ansprüche im Rahmen der Vertragsbeziehung geltend machen.",
            "(4) Bei allen an den Anbieter übermittelten Daten geht der Anbieter davon aus, dass der Kunde im Besitz aller erforderlichen Urheber-, Marken- oder sonstigen Rechte ist. Eine Überprüfung durch den Anbieter erfolgt nicht.",
            "(5) Der Kunde verpflichtet sich, die von ihm übermittelten Daten richtig und aktuell zu halten und Änderungen unverzüglich anzuzeigen.",
            "(6) Dem Kunden wird für die Dauer der Mitgliedschaft ein einfaches, nicht übertragbares Recht zur Nutzung von GastroPos eingeräumt. Der Kunde darf die Nutzungsrechte weder veräußern noch Dritten überlassen. Das Nutzungsrecht steht unter der Bedingung der vollständigen Zahlung der Gebühren.",
            "(7) Der Anbieter erbringt keine Leistungen eines Steuerberaters oder Wirtschaftsprüfers. Die Verantwortung für die ordnungsgemäße Kassen- und Buchführung verbleibt beim Kunden. Dazu gehören insbesondere die Aktivierung und Nutzung der technischen Sicherheitseinrichtung (TSE), die Mitteilung des Kassensystems an das Finanzamt (§ 146a Abs. 4 AO), die richtige Zuordnung der Steuersätze, die Belegausgabe, der Tagesabschluss sowie die Aufbewahrung der steuerlich relevanten Daten und Unterlagen.",
            "(8) Für den Schutz seiner Endgeräte und Zugangsdaten gegen Missbrauch oder Fremdzugriff ist der Kunde selbst verantwortlich. Zugangsdaten und PINs sind geheim zu halten; Mitarbeiterzugänge sind mit den passenden Rollen anzulegen und bei Ausscheiden zu deaktivieren.",
            "(9) Der Kunde ist dafür verantwortlich, die steuerlich relevanten Daten regelmäßig über die in GastroPos bereitgestellten Exporte (z. B. DSFinV-K, GoBD-Archiv, DATEV, Z-Berichte) zu sichern, soweit er gesetzlich zur Aufbewahrung verpflichtet ist.",
          ],
          de: [
            "(1) Die Nutzung von GastroPos setzt eine Registrierung voraus. Bei der Registrierung sind wahrheitsgemäße Daten anzugeben. Für die Inhalte der vom Kunden eingegebenen Daten ist ausschließlich der Kunde verantwortlich.",
            "(2) Sollten die vom Kunden übermittelten Inhalte die Rechte Dritter verletzen, z. B. aus Urheberrecht, Wettbewerbsrecht oder Vertrauensschutz, stellt der Kunde den Anbieter von etwaigen Ansprüchen Dritter frei, soweit der Kunde die Rechtsverletzung zu vertreten hat. Diese Freistellung umfasst Ansprüche auf Schadensersatz, Unterlassung und Auskunft sowie die notwendigen Kosten der rechtlichen Verteidigung.",
            "(3) Die Parteien benachrichtigen sich gegenseitig unverzüglich, wenn Dritte Schutzrechtsverletzungen oder anderweitige Ansprüche im Rahmen der Vertragsbeziehung geltend machen.",
            "(4) Bei allen an den Anbieter übermittelten Daten geht der Anbieter davon aus, dass der Kunde im Besitz aller erforderlichen Urheber-, Marken- oder sonstigen Rechte ist. Eine Überprüfung durch den Anbieter erfolgt nicht.",
            "(5) Der Kunde verpflichtet sich, die von ihm übermittelten Daten richtig und aktuell zu halten und Änderungen unverzüglich anzuzeigen.",
            "(6) Dem Kunden wird für die Dauer der Mitgliedschaft ein einfaches, nicht übertragbares Recht zur Nutzung von GastroPos eingeräumt. Der Kunde darf die Nutzungsrechte weder veräußern noch Dritten überlassen. Das Nutzungsrecht steht unter der Bedingung der vollständigen Zahlung der Gebühren.",
            "(7) Der Anbieter erbringt keine Leistungen eines Steuerberaters oder Wirtschaftsprüfers. Die Verantwortung für die ordnungsgemäße Kassen- und Buchführung verbleibt beim Kunden. Dazu gehören insbesondere die Aktivierung und Nutzung der technischen Sicherheitseinrichtung (TSE), die Mitteilung des Kassensystems an das Finanzamt (§ 146a Abs. 4 AO), die richtige Zuordnung der Steuersätze, die Belegausgabe, der Tagesabschluss sowie die Aufbewahrung der steuerlich relevanten Daten und Unterlagen.",
            "(8) Für den Schutz seiner Endgeräte und Zugangsdaten gegen Missbrauch oder Fremdzugriff ist der Kunde selbst verantwortlich. Zugangsdaten und PINs sind geheim zu halten; Mitarbeiterzugänge sind mit den passenden Rollen anzulegen und bei Ausscheiden zu deaktivieren.",
            "(9) Der Kunde ist dafür verantwortlich, die steuerlich relevanten Daten regelmäßig über die in GastroPos bereitgestellten Exporte (z. B. DSFinV-K, GoBD-Archiv, DATEV, Z-Berichte) zu sichern, soweit er gesetzlich zur Aufbewahrung verpflichtet ist.",
          ],
        },
      },
      {
        heading: {
          en: "§ 5 Laufzeit, Kündigung",
          de: "§ 5 Laufzeit, Kündigung",
        },
        paragraphs: {
          en: [
            "(1) Monatliche Mitgliedschaft: Die kostenpflichtige Mitgliedschaft läuft auf unbestimmte Zeit und kann mit einer Frist von 4 Wochen zum Monatsende gekündigt werden.",
            "Jährliche Mitgliedschaft: Die kostenpflichtige Mitgliedschaft läuft zunächst ein Jahr und kann mit einer Frist von 4 Wochen zum Laufzeitende gekündigt werden. Erfolgt keine fristgerechte Kündigung, verlängert sich die Mitgliedschaft um jeweils ein weiteres Jahr.",
            "Zusatzmodule (z. B. Cloud-TSE) können mit denselben Fristen gesondert gekündigt werden. Bei Kündigung einer kostenpflichtigen Mitgliedschaft erfolgt ein Wechsel zur kostenlosen Mitgliedschaft, soweit diese angeboten wird.",
            "(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
            "(3) Die Kündigung bedarf der Textform (z. B. E-Mail) oder erfolgt über die dafür vorgesehene Funktion in der App. Maßgeblich ist der Zugang der Kündigungserklärung.",
          ],
          de: [
            "(1) Monatliche Mitgliedschaft: Die kostenpflichtige Mitgliedschaft läuft auf unbestimmte Zeit und kann mit einer Frist von 4 Wochen zum Monatsende gekündigt werden.",
            "Jährliche Mitgliedschaft: Die kostenpflichtige Mitgliedschaft läuft zunächst ein Jahr und kann mit einer Frist von 4 Wochen zum Laufzeitende gekündigt werden. Erfolgt keine fristgerechte Kündigung, verlängert sich die Mitgliedschaft um jeweils ein weiteres Jahr.",
            "Zusatzmodule (z. B. Cloud-TSE) können mit denselben Fristen gesondert gekündigt werden. Bei Kündigung einer kostenpflichtigen Mitgliedschaft erfolgt ein Wechsel zur kostenlosen Mitgliedschaft, soweit diese angeboten wird.",
            "(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
            "(3) Die Kündigung bedarf der Textform (z. B. E-Mail) oder erfolgt über die dafür vorgesehene Funktion in der App. Maßgeblich ist der Zugang der Kündigungserklärung.",
          ],
        },
      },
      {
        heading: {
          en: "§ 6 Daten des Kunden, Datenexport bei Vertragsende",
          de: "§ 6 Daten des Kunden, Datenexport bei Vertragsende",
        },
        paragraphs: {
          en: [
            "(1) Die vom Kunden eingegebenen und mit GastroPos erzeugten Daten bleiben Daten des Kunden.",
            "(2) Der Anbieter führt regelmäßige Sicherungen seiner Systeme durch. Diese dienen der Wiederherstellung des Betriebs und ersetzen nicht die Aufbewahrungspflichten des Kunden nach § 4 Abs. 9.",
            "(3) Der Anbieter ist berechtigt, die Daten in anonymisierter Form zur Verbesserung seiner Leistungen zu nutzen.",
            "(4) Nach Beendigung der kostenpflichtigen Mitgliedschaft kann der Kunde seine Daten noch mindestens 30 Tage über die Exportfunktionen abrufen. Danach ist der Anbieter berechtigt, die Daten zu löschen, soweit keine gesetzlichen Aufbewahrungspflichten des Anbieters entgegenstehen. Der Kunde wird vor der Löschung in Textform informiert.",
          ],
          de: [
            "(1) Die vom Kunden eingegebenen und mit GastroPos erzeugten Daten bleiben Daten des Kunden.",
            "(2) Der Anbieter führt regelmäßige Sicherungen seiner Systeme durch. Diese dienen der Wiederherstellung des Betriebs und ersetzen nicht die Aufbewahrungspflichten des Kunden nach § 4 Abs. 9.",
            "(3) Der Anbieter ist berechtigt, die Daten in anonymisierter Form zur Verbesserung seiner Leistungen zu nutzen.",
            "(4) Nach Beendigung der kostenpflichtigen Mitgliedschaft kann der Kunde seine Daten noch mindestens 30 Tage über die Exportfunktionen abrufen. Danach ist der Anbieter berechtigt, die Daten zu löschen, soweit keine gesetzlichen Aufbewahrungspflichten des Anbieters entgegenstehen. Der Kunde wird vor der Löschung in Textform informiert.",
          ],
        },
      },
      {
        heading: {
          en: "§ 7 Haftung",
          de: "§ 7 Haftung",
        },
        paragraphs: {
          en: [
            "(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des Anbieters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen, bei arglistigem Verschweigen eines Mangels, im Rahmen einer übernommenen Garantie sowie nach dem Produkthaftungsgesetz.",
            "(2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.",
            "(3) Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen. In den Fällen des Absatzes 2 ist die Haftung für entgangenen Gewinn und mittelbare Schäden ausgeschlossen, soweit sie nicht vorhersehbar waren; die Haftung ist der Höhe nach je Schadensfall auf die vom Kunden in den letzten zwölf Monaten vor dem schadensbegründenden Ereignis gezahlten Gebühren begrenzt.",
            "(4) Für den Verlust von Daten haftet der Anbieter nur in Höhe des Aufwands, der bei ordnungsgemäßer Datensicherung durch den Kunden nach § 4 Abs. 9 zur Wiederherstellung erforderlich gewesen wäre.",
            "(5) Der Anbieter haftet nicht für steuerliche Nachteile, Hinzuschätzungen oder Bußgelder, die auf einer Verletzung der Pflichten des Kunden nach § 4 Abs. 7 beruhen.",
            "(6) Die verschuldensunabhängige Haftung für bereits bei Vertragsschluss vorhandene Mängel (§ 536a Abs. 1 Alt. 1 BGB) ist ausgeschlossen.",
            "(7) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten der gesetzlichen Vertreter, Mitarbeiter und Erfüllungsgehilfen des Anbieters.",
          ],
          de: [
            "(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des Anbieters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen, bei arglistigem Verschweigen eines Mangels, im Rahmen einer übernommenen Garantie sowie nach dem Produkthaftungsgesetz.",
            "(2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.",
            "(3) Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen. In den Fällen des Absatzes 2 ist die Haftung für entgangenen Gewinn und mittelbare Schäden ausgeschlossen, soweit sie nicht vorhersehbar waren; die Haftung ist der Höhe nach je Schadensfall auf die vom Kunden in den letzten zwölf Monaten vor dem schadensbegründenden Ereignis gezahlten Gebühren begrenzt.",
            "(4) Für den Verlust von Daten haftet der Anbieter nur in Höhe des Aufwands, der bei ordnungsgemäßer Datensicherung durch den Kunden nach § 4 Abs. 9 zur Wiederherstellung erforderlich gewesen wäre.",
            "(5) Der Anbieter haftet nicht für steuerliche Nachteile, Hinzuschätzungen oder Bußgelder, die auf einer Verletzung der Pflichten des Kunden nach § 4 Abs. 7 beruhen.",
            "(6) Die verschuldensunabhängige Haftung für bereits bei Vertragsschluss vorhandene Mängel (§ 536a Abs. 1 Alt. 1 BGB) ist ausgeschlossen.",
            "(7) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten der gesetzlichen Vertreter, Mitarbeiter und Erfüllungsgehilfen des Anbieters.",
          ],
        },
      },
      {
        heading: {
          en: "§ 8 Mängel",
          de: "§ 8 Mängel",
        },
        paragraphs: {
          en: [
            "(1) Der Anbieter beseitigt Mängel der Software innerhalb angemessener Frist. Mängel sind dem Anbieter unverzüglich nach ihrer Entdeckung in Textform mit einer nachvollziehbaren Beschreibung mitzuteilen. Unterbleibt die Mitteilung, kann der Kunde aus dem Mangel keine Rechte herleiten, soweit der Anbieter wegen der unterbliebenen Mitteilung keine Abhilfe schaffen konnte.",
            "(2) Unerhebliche Beeinträchtigungen der Gebrauchstauglichkeit begründen keine Mängelrechte. Das Recht zur Minderung kann der Kunde nur geltend machen, wenn der Anbieter den Mangel nicht innerhalb angemessener Frist beseitigt.",
            "(3) Eine über das Gesetz hinausgehende Garantie wird nicht übernommen.",
          ],
          de: [
            "(1) Der Anbieter beseitigt Mängel der Software innerhalb angemessener Frist. Mängel sind dem Anbieter unverzüglich nach ihrer Entdeckung in Textform mit einer nachvollziehbaren Beschreibung mitzuteilen. Unterbleibt die Mitteilung, kann der Kunde aus dem Mangel keine Rechte herleiten, soweit der Anbieter wegen der unterbliebenen Mitteilung keine Abhilfe schaffen konnte.",
            "(2) Unerhebliche Beeinträchtigungen der Gebrauchstauglichkeit begründen keine Mängelrechte. Das Recht zur Minderung kann der Kunde nur geltend machen, wenn der Anbieter den Mangel nicht innerhalb angemessener Frist beseitigt.",
            "(3) Eine über das Gesetz hinausgehende Garantie wird nicht übernommen.",
          ],
        },
      },
      {
        heading: {
          en: "§ 9 Sperre des Kontos",
          de: "§ 9 Sperre des Kontos",
        },
        paragraphs: {
          en: [
            "(1) Verstößt der Kunde in erheblichem Maße gegen Pflichten aus diesem Vertrag, ist der Anbieter berechtigt, das Konto des Kunden nach vorheriger Abmahnung in Textform mit angemessener Frist ganz oder teilweise zu sperren. Einer Abmahnung bedarf es nicht, wenn Gefahr für die Sicherheit der Systeme oder für Rechte Dritter besteht oder die Fortsetzung des Vertrags unzumutbar ist.",
            "(2) Die Sperre wird aufgehoben, sobald der Grund entfallen ist. Für den Zeitraum einer berechtigten Sperre besteht kein Anspruch auf Rückerstattung bereits gezahlter Gebühren.",
          ],
          de: [
            "(1) Verstößt der Kunde in erheblichem Maße gegen Pflichten aus diesem Vertrag, ist der Anbieter berechtigt, das Konto des Kunden nach vorheriger Abmahnung in Textform mit angemessener Frist ganz oder teilweise zu sperren. Einer Abmahnung bedarf es nicht, wenn Gefahr für die Sicherheit der Systeme oder für Rechte Dritter besteht oder die Fortsetzung des Vertrags unzumutbar ist.",
            "(2) Die Sperre wird aufgehoben, sobald der Grund entfallen ist. Für den Zeitraum einer berechtigten Sperre besteht kein Anspruch auf Rückerstattung bereits gezahlter Gebühren.",
          ],
        },
      },
      {
        heading: {
          en: "§ 10 Datenschutz, Auftragsverarbeitung",
          de: "§ 10 Datenschutz, Auftragsverarbeitung",
        },
        paragraphs: {
          en: [
            "(1) Der Anbieter verarbeitet personenbezogene Daten des Kunden und seiner Ansprechpartner zur Durchführung des Vertrags nach Maßgabe der Datenschutzerklärung auf der Webseite des Anbieters.",
            "(2) Soweit der Kunde in GastroPos personenbezogene Daten seiner Gäste, Kunden oder Mitarbeiter verarbeitet (z. B. Bestellungen, Lieferadressen, Reservierungen, Benutzerkonten), ist der Kunde Verantwortlicher im Sinne der DSGVO und der Anbieter verarbeitet diese Daten als Auftragsverarbeiter. Hierfür gilt der Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO, der Bestandteil dieses Vertrags ist.",
            "(3) Der Kunde ist dafür verantwortlich, dass die Verarbeitung der von ihm eingegebenen personenbezogenen Daten Dritter rechtmäßig ist, insbesondere dass erforderliche Informationen erteilt und gegebenenfalls Einwilligungen eingeholt wurden. Er stellt den Anbieter von Ansprüchen frei, die auf einer von ihm zu vertretenden unrechtmäßigen Verarbeitung beruhen.",
          ],
          de: [
            "(1) Der Anbieter verarbeitet personenbezogene Daten des Kunden und seiner Ansprechpartner zur Durchführung des Vertrags nach Maßgabe der Datenschutzerklärung auf der Webseite des Anbieters.",
            "(2) Soweit der Kunde in GastroPos personenbezogene Daten seiner Gäste, Kunden oder Mitarbeiter verarbeitet (z. B. Bestellungen, Lieferadressen, Reservierungen, Benutzerkonten), ist der Kunde Verantwortlicher im Sinne der DSGVO und der Anbieter verarbeitet diese Daten als Auftragsverarbeiter. Hierfür gilt der Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO, der Bestandteil dieses Vertrags ist.",
            "(3) Der Kunde ist dafür verantwortlich, dass die Verarbeitung der von ihm eingegebenen personenbezogenen Daten Dritter rechtmäßig ist, insbesondere dass erforderliche Informationen erteilt und gegebenenfalls Einwilligungen eingeholt wurden. Er stellt den Anbieter von Ansprüchen frei, die auf einer von ihm zu vertretenden unrechtmäßigen Verarbeitung beruhen.",
          ],
        },
      },
      {
        heading: {
          en: "§ 11 Geheimhaltung",
          de: "§ 11 Geheimhaltung",
        },
        paragraphs: {
          en: [
            "(1) „Vertrauliche Informationen“ sind alle der jeweils anderen Partei zur Kenntnis gelangenden Informationen, Dateien und Unterlagen über Vorgänge der betroffenen anderen Partei.",
            "(2) Beide Parteien verpflichten sich, über die jeweils andere Partei betreffende vertrauliche Informationen Stillschweigen zu bewahren und diese nur für die Durchführung dieses Vertrags und den damit verfolgten Zweck zu verwenden.",
            "(3) Beide Parteien verpflichten sich, die Geheimhaltungspflicht sämtlichen Angestellten und/oder Dritten, die Zugang zu den vorbezeichneten Vorgängen haben, aufzuerlegen.",
            "(4) Die Geheimhaltungspflicht nach Abs. 2 gilt nicht für Informationen,\na) die der jeweils anderen Partei bei Abschluss des Vertrags bereits bekannt waren,\nb) die zum Zeitpunkt der Weitergabe bereits veröffentlicht waren, ohne dass dies auf einer Verletzung der Vertraulichkeit durch die jeweils andere Partei beruht,\nc) die die jeweils andere Partei ausdrücklich schriftlich zur Weitergabe freigegeben hat,\nd) die die jeweils andere Partei rechtmäßig und ohne Vertraulichkeitsbeschränkung aus anderen Quellen erhalten hat, sofern die Weitergabe und Verwertung weder vertragliche Vereinbarungen noch gesetzliche Vorschriften oder behördliche Anordnungen verletzen,\ne) die die jeweils andere Partei selbst ohne Zugang zu den vertraulichen Informationen entwickelt hat,\nf) die aufgrund gesetzlicher Auskunfts-, Unterrichtungs- und/oder Veröffentlichungspflichten oder behördlicher Anordnung offengelegt werden müssen.",
          ],
          de: [
            "(1) „Vertrauliche Informationen“ sind alle der jeweils anderen Partei zur Kenntnis gelangenden Informationen, Dateien und Unterlagen über Vorgänge der betroffenen anderen Partei.",
            "(2) Beide Parteien verpflichten sich, über die jeweils andere Partei betreffende vertrauliche Informationen Stillschweigen zu bewahren und diese nur für die Durchführung dieses Vertrags und den damit verfolgten Zweck zu verwenden.",
            "(3) Beide Parteien verpflichten sich, die Geheimhaltungspflicht sämtlichen Angestellten und/oder Dritten, die Zugang zu den vorbezeichneten Vorgängen haben, aufzuerlegen.",
            "(4) Die Geheimhaltungspflicht nach Abs. 2 gilt nicht für Informationen,\na) die der jeweils anderen Partei bei Abschluss des Vertrags bereits bekannt waren,\nb) die zum Zeitpunkt der Weitergabe bereits veröffentlicht waren, ohne dass dies auf einer Verletzung der Vertraulichkeit durch die jeweils andere Partei beruht,\nc) die die jeweils andere Partei ausdrücklich schriftlich zur Weitergabe freigegeben hat,\nd) die die jeweils andere Partei rechtmäßig und ohne Vertraulichkeitsbeschränkung aus anderen Quellen erhalten hat, sofern die Weitergabe und Verwertung weder vertragliche Vereinbarungen noch gesetzliche Vorschriften oder behördliche Anordnungen verletzen,\ne) die die jeweils andere Partei selbst ohne Zugang zu den vertraulichen Informationen entwickelt hat,\nf) die aufgrund gesetzlicher Auskunfts-, Unterrichtungs- und/oder Veröffentlichungspflichten oder behördlicher Anordnung offengelegt werden müssen.",
          ],
        },
      },
      {
        heading: {
          en: "§ 12 Änderungen der Preise und der AGB",
          de: "§ 12 Änderungen der Preise und der AGB",
        },
        paragraphs: {
          en: [
            "(1) Der Anbieter kann die Preise mit Wirkung für die Zukunft anpassen. Preisänderungen werden dem Kunden mindestens sechs Wochen vor ihrem Inkrafttreten in Textform mitgeteilt. Bei einer Preiserhöhung kann der Kunde den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung kündigen. Auf dieses Kündigungsrecht wird der Kunde in der Mitteilung hingewiesen. Bei jährlicher Mitgliedschaft gelten Preisänderungen erst ab der nächsten Verlängerung.",
            "(2) Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern, soweit dies aufgrund von Gesetzesänderungen, Rechtsprechung, technischen Entwicklungen oder neuen Funktionen erforderlich ist und der Kunde dadurch nicht unangemessen benachteiligt wird. Änderungen werden dem Kunden mindestens sechs Wochen vor Inkrafttreten in Textform mitgeteilt. Widerspricht der Kunde nicht innerhalb dieser Frist, gelten die Änderungen als angenommen; auf diese Folge wird in der Mitteilung gesondert hingewiesen. Widerspricht der Kunde, kann jede Partei den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung kündigen. Änderungen der Hauptleistungspflichten oder der Preise erfolgen nicht nach diesem Absatz.",
          ],
          de: [
            "(1) Der Anbieter kann die Preise mit Wirkung für die Zukunft anpassen. Preisänderungen werden dem Kunden mindestens sechs Wochen vor ihrem Inkrafttreten in Textform mitgeteilt. Bei einer Preiserhöhung kann der Kunde den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung kündigen. Auf dieses Kündigungsrecht wird der Kunde in der Mitteilung hingewiesen. Bei jährlicher Mitgliedschaft gelten Preisänderungen erst ab der nächsten Verlängerung.",
            "(2) Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern, soweit dies aufgrund von Gesetzesänderungen, Rechtsprechung, technischen Entwicklungen oder neuen Funktionen erforderlich ist und der Kunde dadurch nicht unangemessen benachteiligt wird. Änderungen werden dem Kunden mindestens sechs Wochen vor Inkrafttreten in Textform mitgeteilt. Widerspricht der Kunde nicht innerhalb dieser Frist, gelten die Änderungen als angenommen; auf diese Folge wird in der Mitteilung gesondert hingewiesen. Widerspricht der Kunde, kann jede Partei den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung kündigen. Änderungen der Hauptleistungspflichten oder der Preise erfolgen nicht nach diesem Absatz.",
          ],
        },
      },
      {
        heading: {
          en: "§ 13 Gerichtsstand und anwendbares Recht",
          de: "§ 13 Gerichtsstand und anwendbares Recht",
        },
        paragraphs: {
          en: [
            "(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
            "(2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Sitz des Anbieters in Essen. Erfüllungsort ist Essen. Der Anbieter ist berechtigt, den Kunden auch an dessen allgemeinem Gerichtsstand zu verklagen.",
          ],
          de: [
            "(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
            "(2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Sitz des Anbieters in Essen. Erfüllungsort ist Essen. Der Anbieter ist berechtigt, den Kunden auch an dessen allgemeinem Gerichtsstand zu verklagen.",
          ],
        },
      },
      {
        heading: {
          en: "§ 14 Salvatorische Klausel",
          de: "§ 14 Salvatorische Klausel",
        },
        paragraphs: {
          en: [
            "Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
          ],
          de: [
            "Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
          ],
        },
      },
    ],
  },
  impressum: {
    title: {
      en: "Imprint",
      de: "Impressum",
    },
    meta: {
      en: "Imprint of OrdersTracker UG (haftungsbeschränkt), provider of GastroPos, according to § 5 DDG.",
      de: "Impressum der OrdersTracker UG (haftungsbeschränkt), Anbieterin von GastroPos, gemäß § 5 DDG.",
    },
    updated: {
      en: "Our legal documents are available in German only. The German version is legally binding.",
      de: "",
    },
    sections: [
      {
        heading: {
          en: "Angaben gemäß § 5 DDG",
          de: "Angaben gemäß § 5 DDG",
        },
        paragraphs: {
          en: [
            "OrdersTracker UG (haftungsbeschränkt)\nMarktstr. 10\n45355 Essen\nDeutschland",
            "GastroPos (vormals OrdersTracker) ist ein Angebot der OrdersTracker UG (haftungsbeschränkt).",
          ],
          de: [
            "OrdersTracker UG (haftungsbeschränkt)\nMarktstr. 10\n45355 Essen\nDeutschland",
            "GastroPos (vormals OrdersTracker) ist ein Angebot der OrdersTracker UG (haftungsbeschränkt).",
          ],
        },
      },
      {
        heading: {
          en: "Kontakt",
          de: "Kontakt",
        },
        paragraphs: {
          en: ["Telefon: +49 201 75934694\nE-Mail: info@gastropos.ai"],
          de: ["Telefon: +49 201 75934694\nE-Mail: info@gastropos.ai"],
        },
      },
      {
        heading: {
          en: "Geschäftsführer",
          de: "Geschäftsführer",
        },
        paragraphs: {
          en: ["Sinan Can"],
          de: ["Sinan Can"],
        },
      },
      {
        heading: {
          en: "Handelsregistereintrag",
          de: "Handelsregistereintrag",
        },
        paragraphs: {
          en: ["Eingetragen beim Amtsgericht Essen unter HRB 29448"],
          de: ["Eingetragen beim Amtsgericht Essen unter HRB 29448"],
        },
      },
      {
        heading: {
          en: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz",
          de: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz",
        },
        paragraphs: {
          en: ["DE320044426"],
          de: ["DE320044426"],
        },
      },
      {
        heading: {
          en: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
          de: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        },
        paragraphs: {
          en: ["Sinan Can, Anschrift wie oben"],
          de: ["Sinan Can, Anschrift wie oben"],
        },
      },
      {
        heading: {
          en: "Verbraucherstreitbeilegung",
          de: "Verbraucherstreitbeilegung",
        },
        paragraphs: {
          en: [
            "Wir sind weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Unser Angebot richtet sich ausschließlich an Unternehmer.",
          ],
          de: [
            "Wir sind weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Unser Angebot richtet sich ausschließlich an Unternehmer.",
          ],
        },
      },
      {
        heading: {
          en: "Haftung für Inhalte",
          de: "Haftung für Inhalte",
        },
        paragraphs: {
          en: [
            "Der Seitenbetreiber übernimmt keine Haftung für von Dritten übermittelte oder gespeicherte Informationen. Eine Pflicht zur Überwachung dieser Informationen besteht seitens des Seitenbetreibers nicht. Sofern rechtswidrige Informationen von Dritten übermittelt oder gespeichert werden, haftet der Seitenbetreiber erst, wenn er einer berechtigten Aufforderung zur Löschung der Informationen nicht nachkommt. Offensichtlich rechtswidrige Informationen werden umgehend nach Bekanntwerden gelöscht.",
            "Die Inhalte dieser Webseite, insbesondere die Ratgeber-Artikel, dienen der allgemeinen Information und stellen keine Steuer- oder Rechtsberatung dar.",
          ],
          de: [
            "Der Seitenbetreiber übernimmt keine Haftung für von Dritten übermittelte oder gespeicherte Informationen. Eine Pflicht zur Überwachung dieser Informationen besteht seitens des Seitenbetreibers nicht. Sofern rechtswidrige Informationen von Dritten übermittelt oder gespeichert werden, haftet der Seitenbetreiber erst, wenn er einer berechtigten Aufforderung zur Löschung der Informationen nicht nachkommt. Offensichtlich rechtswidrige Informationen werden umgehend nach Bekanntwerden gelöscht.",
            "Die Inhalte dieser Webseite, insbesondere die Ratgeber-Artikel, dienen der allgemeinen Information und stellen keine Steuer- oder Rechtsberatung dar.",
          ],
        },
      },
      {
        heading: {
          en: "Haftung für Links",
          de: "Haftung für Links",
        },
        paragraphs: {
          en: [
            "Der Seitenbetreiber hat keinen Einfluss auf externe Links. Vor Veröffentlichung der Links auf diesen Seiten wurden diese im zumutbaren Rahmen auf Übereinstimmung mit den gesetzlichen Bestimmungen geprüft. Der Seitenbetreiber ist nicht verantwortlich für Änderungen, die sich auf den über externe Links aufrufbaren Seiten ergeben. Insbesondere ist eine durchgehende Kontrolle von externen Links auf Rechtsverletzungen nicht zumutbar. Sofern der Seitenbetreiber auf rechtswidrige Inhalte hingewiesen wird, die über externe Links abrufbar sind, entfernt er diese Links umgehend.",
          ],
          de: [
            "Der Seitenbetreiber hat keinen Einfluss auf externe Links. Vor Veröffentlichung der Links auf diesen Seiten wurden diese im zumutbaren Rahmen auf Übereinstimmung mit den gesetzlichen Bestimmungen geprüft. Der Seitenbetreiber ist nicht verantwortlich für Änderungen, die sich auf den über externe Links aufrufbaren Seiten ergeben. Insbesondere ist eine durchgehende Kontrolle von externen Links auf Rechtsverletzungen nicht zumutbar. Sofern der Seitenbetreiber auf rechtswidrige Inhalte hingewiesen wird, die über externe Links abrufbar sind, entfernt er diese Links umgehend.",
          ],
        },
      },
      {
        heading: {
          en: "Urheberrecht",
          de: "Urheberrecht",
        },
        paragraphs: {
          en: [
            "Das Urheberrecht an allen auf den Seiten des Betreibers abrufbaren Texten und multimedialen Inhalten liegt beim Seitenbetreiber, soweit abweichende Urheberrechte nicht gesondert ausgewiesen werden. Sofern die Urheberrechte Dritter nicht ausgewiesen sind, wird um eine Mitteilung via E-Mail gebeten. Der Seitenbetreiber wird solche Inhalte umgehend entfernen. Die Verarbeitung, Verbreitung und Vervielfältigung von Inhalten ist ohne die ausdrückliche Zustimmung des Seitenbetreibers nicht zulässig.",
          ],
          de: [
            "Das Urheberrecht an allen auf den Seiten des Betreibers abrufbaren Texten und multimedialen Inhalten liegt beim Seitenbetreiber, soweit abweichende Urheberrechte nicht gesondert ausgewiesen werden. Sofern die Urheberrechte Dritter nicht ausgewiesen sind, wird um eine Mitteilung via E-Mail gebeten. Der Seitenbetreiber wird solche Inhalte umgehend entfernen. Die Verarbeitung, Verbreitung und Vervielfältigung von Inhalten ist ohne die ausdrückliche Zustimmung des Seitenbetreibers nicht zulässig.",
          ],
        },
      },
    ],
  },
  cookies: {
    title: {
      en: "Cookie Policy",
      de: "Cookie-Hinweise",
    },
    meta: {
      en: "Which cookies and similar technologies GastroPos uses.",
      de: "Welche Cookies und ähnlichen Technologien GastroPos verwendet.",
    },
    updated: {
      en: "As of October 2026 · Our legal documents are available in German only. The German version is legally binding.",
      de: "Stand: Oktober 2026",
    },
    sections: [
      {
        heading: {
          en: "Was wir speichern",
          de: "Was wir speichern",
        },
        paragraphs: {
          en: [
            "Auf dieser Webseite speichern wir in Ihrem Browser Ihre gewählte Sprache. In den GastroPos-Apps werden technisch erforderliche Daten gespeichert, um Sie angemeldet zu halten und Ihre Einstellungen zu sichern.",
          ],
          de: [
            "Auf dieser Webseite speichern wir in Ihrem Browser Ihre gewählte Sprache. In den GastroPos-Apps werden technisch erforderliche Daten gespeichert, um Sie angemeldet zu halten und Ihre Einstellungen zu sichern.",
          ],
        },
      },
      {
        heading: {
          en: "Analyse und Chat",
          de: "Analyse und Chat",
        },
        paragraphs: {
          en: [
            "Zur Verbesserung der Bedienung nutzen wir Microsoft Clarity, für den Live-Chat Crisp. Clarity setzen wir nur mit Ihrer Einwilligung ein. Einzelheiten, Rechtsgrundlagen und Widerspruchsmöglichkeiten finden Sie in unserer Datenschutzerklärung (Abschnitte 5 bis 7).",
          ],
          de: [
            "Zur Verbesserung der Bedienung nutzen wir Microsoft Clarity, für den Live-Chat Crisp. Clarity setzen wir nur mit Ihrer Einwilligung ein. Einzelheiten, Rechtsgrundlagen und Widerspruchsmöglichkeiten finden Sie in unserer Datenschutzerklärung (Abschnitte 5 bis 7).",
          ],
        },
      },
      {
        heading: {
          en: "Werbung",
          de: "Werbung",
        },
        paragraphs: {
          en: ["Wir setzen keine Cookies zu Werbezwecken ein."],
          de: ["Wir setzen keine Cookies zu Werbezwecken ein."],
        },
      },
    ],
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const doc = legal[params.slug as LegalSlug];
    if (!doc) throw notFound();
    return { doc };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const d = loaderData.doc;
    return pageHead({
      title: `${d.title.de} | GastroPos`,
      description: d.meta.de,
      path: `/legal/${params.slug}`,
      breadcrumbs: [{ name: d.title.de, path: `/legal/${params.slug}` }],
    });
  },
  component: LegalPage,
  notFoundComponent: () => <div className="p-20 text-center">Document not found</div>,
});

function LegalPage() {
  const { doc } = Route.useLoaderData();
  const { lang } = useI18n();
  const de = lang === "de";
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={de ? "Rechtliches" : "Legal"}
        title={de ? doc.title.de : doc.title.en}
        lede={doc.updated ? (de ? doc.updated.de : doc.updated.en) : ""}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {doc.sections ? (
            <div className="space-y-10">
              {doc.sections.map((s, i) => (
                <article key={i}>
                  <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {de ? s.heading.de : s.heading.en}
                  </h2>
                  <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                    {(de ? s.paragraphs.de : s.paragraphs.en).map((p, j) => (
                      <p key={j} className="whitespace-pre-line">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-muted-foreground">
              {de ? doc.body?.de : doc.body?.en}
            </pre>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
