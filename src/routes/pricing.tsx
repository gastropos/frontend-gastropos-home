import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageHead({
      title: "Preise — GastroPos Kassensystem ab 39 € im Monat",
      description:
        "Drei Pakete: Klein 39 €, Standard 59 €, Premium 79 € pro Monat. Die fiskaly Cloud-TSE gibt es als Zusatzmodul für 15 € im Monat. Alle Preise und Funktionen im Überblick.",
      path: "/pricing",
      image: "pos-counter.webp",
      breadcrumbs: [{ name: "Preise", path: "/pricing" }],
    }),
  component: Pricing,
});

const tiers = [
  {
    name: "Klein",
    price: 39,
    quota: { en: "1,500 line items / month", de: "1.500 Positionen / Monat" },
  },
  {
    name: "Standard",
    price: 59,
    quota: { en: "3,000 line items / month", de: "3.000 Positionen / Monat" },
    featured: true,
  },
  {
    name: "Premium",
    price: 79,
    quota: { en: "Unlimited line items", de: "Unbegrenzte Positionen" },
  },
];

const features = {
  en: [
    "Cloud POS for tablet & phone",
    "Kitchen display system",
    "Waiter app & QR ordering",
    "Online ordering site",
    "Z-reports, DATEV & GoBD export",
    "Digital cash book",
    "Stock & sold-out per product",
    "Customer list & gift vouchers",
    "Support by email and phone",
  ],
  de: [
    "Cloud-Kasse für Tablet & Smartphone",
    "Küchenmonitor",
    "Kellner-App & QR-Bestellung",
    "Online-Bestellseite",
    "Z-Berichte, DATEV- & GoBD-Export",
    "Digitales Kassenbuch",
    "Bestand & Ausverkauft pro Produkt",
    "Kundenliste & Gutscheine",
    "Support per E-Mail und Telefon",
  ],
};

function Pricing() {
  const { lang, t } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Preise" : "Pricing"}
        title={
          lang === "de"
            ? "Eine Plattform. Drei einfache Pakete."
            : "One platform. Three simple plans."
        }
        lede={
          lang === "de"
            ? "Alle Kassenfunktionen sind in jedem Paket enthalten — nur die Anzahl der Positionen pro Monat unterscheidet sich. Wir zählen die Positionen in einer Bestellung, nicht die Bestellung selbst. Die fiskaly Cloud-TSE buchen Sie für 15 € pro Monat dazu."
            : "All POS features are included in every plan — only the number of line items per month differs. We count the line items in an order, not the order itself. Add the fiskaly cloud TSE for €15 per month."
        }
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 ${tier.featured ? "border-accent bg-accent-soft/40 shadow-elegant" : "border-border bg-surface/50"}`}
            >
              {tier.featured && (
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {lang === "de" ? "Beliebt" : "Most popular"}
                </p>
              )}
              <h3 className="font-display text-2xl font-extrabold">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">€{tier.price}</span>
                <span className="text-sm text-muted-foreground">
                  /{lang === "de" ? "Monat" : "month"}
                </span>
              </p>
              <p className="mt-3 rounded-full bg-secondary px-3 py-1 inline-block text-xs font-semibold">
                {lang === "de" ? tier.quota.de : tier.quota.en}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {(lang === "de" ? features.de : features.en).map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="size-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="mt-8 block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                {t.common.bookDemo}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 rounded-2xl border border-secondary-brand/30 bg-secondary-brand/[0.04] p-6 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-secondary-brand">
                {lang === "de" ? "Zusatzfunktion" : "Add-on"}
              </p>
              <h3 className="mt-1 font-display text-xl font-extrabold">
                {lang === "de" ? "TSE (fiskaly Cloud-TSE)" : "TSE (fiskaly cloud TSE)"}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {lang === "de"
                  ? "Pflicht für elektronische Kassen in Deutschland. Signiert jeden Beleg, inklusive DSFinV-K-Export — ohne Hardware."
                  : "Required for electronic tills in Germany. Signs every receipt, includes the DSFinV-K export — no hardware needed."}
              </p>
            </div>
            <p className="mt-4 flex shrink-0 items-baseline gap-1 md:mt-0">
              <span className="font-display text-3xl font-extrabold">+€15</span>
              <span className="text-sm text-muted-foreground">
                /{lang === "de" ? "Monat" : "month"}
              </span>
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          {lang === "de"
            ? "Alle Preise zzgl. MwSt. Keine Einrichtungsgebühr. Monatlich kündbar."
            : "All prices excl. VAT. No setup fee. Cancel monthly."}
        </p>
      </section>
      <CtaFooter />
    </SiteShell>
  );
}
