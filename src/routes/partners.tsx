import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/partners")({
  head: () =>
    pageHead({
      title: "Partnerprogramm — GastroPos",
      description:
        "Werden Sie GastroPos-Partner: für Wiederverkäufer, IT-Dienstleister, Hardware-Händler und Steuerberatungen, die Gastronomen betreuen.",
      path: "/partners",
      breadcrumbs: [{ name: "Partner", path: "/partners" }],
    }),
  component: Partners,
});

function Partners() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Partner" : "Partners"}
        title={lang === "de" ? "Werden Sie GastroPos-Partner." : "Become a GastroPos partner."}
        lede={
          lang === "de"
            ? "Wiederverkäufer, IT-Dienstleister, Hardware-Händler und Steuerberatungen — arbeiten Sie mit uns zusammen, wenn Sie Gastronomen betreuen."
            : "Resellers, IT service providers, hardware dealers and tax advisors — work with us if you look after hospitality businesses."
        }
      />
      <ContentSections
        sections={[
          {
            heading: lang === "de" ? "Wiederverkäufer" : "Resellers",
            body:
              lang === "de"
                ? "Sie vermitteln und betreuen Gastronomen vor Ort, wir stellen die Software. Konditionen besprechen wir persönlich — schreiben Sie uns über die Kontaktseite."
                : "You bring in and look after restaurants locally, we provide the software. We discuss terms personally — get in touch via the contact page.",
          },
          {
            heading: lang === "de" ? "Steuerberater" : "Tax advisors",
            body:
              lang === "de"
                ? "GastroPos liefert DATEV-Buchungsstapel (SKR03, SKR04, SKR07), GoBD-Archiv und Z-Berichte per E-Mail. Ihre Kanzlei kann einen eigenen Steuerberater-Zugang zur Kasse Ihrer Mandanten erhalten."
                : "GastroPos delivers DATEV booking batches (SKR03, SKR04, SKR07), a GoBD archive and Z-reports by email. Your firm can get its own accountant login to your clients' till.",
          },
          {
            heading: lang === "de" ? "Hardware-Anbieter" : "Hardware vendors",
            body:
              lang === "de"
                ? "GastroPos arbeitet mit ESC/POS-Druckern (WLAN, LAN, Bluetooth, USB), Sunmi- und iMin-Geräten, ZVT-Kartenterminals, SumUp und Zettle. Sie verkaufen Hardware an Gastronomen? Sprechen Sie uns an."
                : "GastroPos works with ESC/POS printers (Wi-Fi, LAN, Bluetooth, USB), Sunmi and iMin devices, ZVT card terminals, SumUp and Zettle. Selling hardware to restaurants? Talk to us.",
          },
        ]}
      />
      <CtaFooter />
    </SiteShell>
  );
}
