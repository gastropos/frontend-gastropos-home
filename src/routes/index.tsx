import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { BuiltFor, FinalCta, SocialProof } from "@/components/home/Sections";
import { FeatureSuite } from "@/components/home/FeatureSuite";
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { FuturisticIntro } from "@/components/home/FuturisticIntro";
import { useState, useCallback } from "react";

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
      { rel: "preload", as: "image", href: "/carousel-kitchen.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <FuturisticIntro onComplete={handleIntroComplete} />
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.6s ease-out",
          pointerEvents: introComplete ? "auto" : "none",
        }}
      >
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
