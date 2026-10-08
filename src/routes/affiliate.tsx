import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/affiliate")({
  head: () =>
    pageHead({
      title: "Empfehlungsprogramm — GastroPos",
      description:
        "Empfehlen Sie GastroPos an Gastronomen weiter. So funktioniert das Empfehlungsprogramm und wie Sie teilnehmen.",
      path: "/affiliate",
      breadcrumbs: [{ name: "Empfehlungsprogramm", path: "/affiliate" }],
    }),
  component: Affiliate,
});

function Affiliate() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Affiliate" : "Affiliate"}
        title={lang === "de" ? "Verdienen Sie mit jeder Empfehlung." : "Earn from every referral."}
        lede={
          lang === "de"
            ? "Sie kennen Gastronomen, die eine neue Kasse suchen? Empfehlen Sie GastroPos — die Konditionen besprechen wir persönlich."
            : "Know restaurant owners looking for a new POS? Recommend GastroPos — we discuss the terms personally."
        }
      />
      <ContentSections
        sections={[
          {
            heading: lang === "de" ? "Wie es funktioniert" : "How it works",
            body:
              lang === "de"
                ? "1) Schreiben Sie uns über die Kontaktseite. 2) Wir vereinbaren die Konditionen und wie wir Empfehlungen zuordnen. 3) Sie stellen den Kontakt her, wir übernehmen Vorführung und Einrichtung."
                : "1) Get in touch via the contact page. 2) We agree on terms and how referrals are attributed. 3) You make the introduction, we take care of the demo and setup.",
          },
          {
            heading: lang === "de" ? "Wer eignet sich" : "Who it's for",
            body:
              lang === "de"
                ? "Berater, Agenturen, Food-Blogger, Hospitality-Influencer und alle, die mit Gastronomie- oder Handelsbetreiber:innen sprechen."
                : "Consultants, agencies, food bloggers, hospitality influencers and anyone who talks to hospitality or retail operators.",
          },
        ]}
      />
      <CtaFooter />
    </SiteShell>
  );
}
