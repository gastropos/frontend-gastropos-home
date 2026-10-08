import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { BuiltFor, FinalCta, SocialProof } from "@/components/home/Sections";
import { FeatureSuite } from "@/components/home/FeatureSuite";
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { FuturisticIntro } from "@/components/home/FuturisticIntro";
import { useCallback } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "GastroPos — Cloud-Kassensystem für Restaurants, Cafés & Lieferdienste",
      description:
        "Kasse, Bestellaufnahme am Tisch, Küchenmonitor, QR-Bestellung und eigener Webshop in einem System. Mit fiskaly Cloud-TSE, Kassenbuch und DATEV-Export. Ab 39 € im Monat.",
      path: "/",
      image: "pos-hero.webp",
    }),
    links: [
      { rel: "canonical", href: "https://www.gastropos.com/" },
      { rel: "preload", as: "image", href: "/carousel-kitchen.webp" },
    ],
  }),
  component: Index,
});

function Index() {
  // The page renders visible from the start (the intro overlay covers it on a
  // first visit), so it paints immediately instead of after the 3.5 s intro.
  const handleIntroComplete = useCallback(() => {}, []);

  return (
    <>
      <FuturisticIntro onComplete={handleIntroComplete} />
      <div>
        <SiteShell>
          <Hero />
          <SocialProof />
          <FeatureSuite />
          <DashboardDemo />
          <BuiltFor />
          <FinalCta />
        </SiteShell>
      </div>
    </>
  );
}
