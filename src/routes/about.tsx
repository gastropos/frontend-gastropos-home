import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "Über GastroPos — Kassensoftware für die Gastronomie",
      description:
        "GastroPos ist eine Cloud-Kasse aus Essen für Restaurants, Cafés und Lieferdienste. Was wir bauen, für wen und wie wir arbeiten.",
      path: "/about",
      image: "pos-tables.webp",
      breadcrumbs: [{ name: "Über uns", path: "/about" }],
    }),
  component: About,
});

function About() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Über uns" : "About us"}
        title={
          lang === "de"
            ? "Wir bauen die Infrastruktur für moderne Gastronomie und Handel."
            : "We build the infrastructure for modern hospitality and retail."
        }
        lede={
          lang === "de"
            ? "GastroPos ist eine Cloud-Kasse aus Essen für Restaurants, Cafés, Imbisse und Lieferdienste — von der Bestellung am Tisch bis zum DATEV-Export."
            : "GastroPos is a cloud POS from Essen for restaurants, cafés, takeaways and delivery businesses — from the order at the table to the DATEV export."
        }
      />
      <ContentSections
        sections={[
          {
            heading: lang === "de" ? "Unsere Mission" : "Our mission",
            body:
              lang === "de"
                ? "Wir glauben, dass jedes unabhängige Restaurant, Café und Geschäft die gleichen Werkzeuge verdient wie die größten Ketten — ohne sechsstellige IT-Budgets. Deshalb bauen wir eine Kasse, die auf vorhandenen Handys, Tablets und Sunmi-Geräten läuft, die Speisekarte per KI aus einem Foto übernimmt und Kasse, Küche, QR-Bestellung und Webshop in einem System verbindet."
                : "We believe every independent restaurant, café and shop deserves the same tools as the biggest chains — without six-figure IT budgets. That's why we build a POS that runs on the phones, tablets and Sunmi devices you already have, imports your menu from a photo with AI, and connects till, kitchen, QR ordering and webshop in one system.",
          },
          {
            heading: lang === "de" ? "Wo wir sitzen" : "Where we are",
            body:
              lang === "de"
                ? "Unser Sitz ist in Essen. GastroPos ist die Weiterentwicklung von OrdersTracker, das wir seit 2018 entwickeln. GastroPos ist auf den deutschen Markt ausgerichtet — mit fiskaly Cloud-TSE, DSFinV-K, GoBD-Archiv und DATEV-Export — und unterstützt auch die österreichische RKSV. Die Kasse gibt es auf Deutsch, Englisch und Türkisch."
                : "We are based in Essen. GastroPos is the next generation of OrdersTracker, which we have been building since 2018. GastroPos is built for the German market — with fiskaly cloud TSE, DSFinV-K, GoBD archive and DATEV export — and also supports the Austrian RKSV. The POS is available in German, English and Turkish.",
          },
          {
            heading: lang === "de" ? "Unsere Werte" : "Our values",
            body:
              lang === "de"
                ? "Betrieb zuerst: Was im Service hektisch wird, muss mit wenigen Tipps gehen. Rechtssicher von Anfang an: TSE, Belege und Exporte sind eingebaut, nicht nachgerüstet. Ehrlich: Wir beschreiben nur Funktionen, die es wirklich gibt."
                : "Operations first: whatever gets hectic during service must take just a few taps. Compliant from the start: TSE, receipts and exports are built in, not bolted on. Honest: we only describe features that actually exist.",
          },
        ]}
      />
      <CtaFooter />
    </SiteShell>
  );
}
