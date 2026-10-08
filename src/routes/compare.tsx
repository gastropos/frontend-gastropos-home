import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () =>
    pageHead({
      title: "GastroPos im Vergleich zu klassischen Kassensystemen",
      description:
        "Cloud-Kasse oder klassisches Kassensystem? Cloud-TSE, Küchenmonitor, Webshop, QR-Bestellung und KI-Import der Speisekarte im Funktionsvergleich.",
      path: "/compare",
      image: "pos-compliance.webp",
      breadcrumbs: [{ name: "Vergleich", path: "/compare" }],
    }),
  component: Compare,
});

const rows = [
  { label: { en: "Cloud-native", de: "Cloud-nativ" }, ot: true, legacy: false },
  {
    label: { en: "Cloud TSE without hardware", de: "Cloud-TSE ohne Hardware" },
    ot: true,
    legacy: false,
  },
  { label: { en: "KDS included", de: "KDS inklusive" }, ot: true, legacy: false },
  {
    label: { en: "Online ordering included", de: "Online-Bestellung inklusive" },
    ot: true,
    legacy: false,
  },
  {
    label: { en: "QR self-ordering at the table", de: "QR-Selbstbestellung am Tisch" },
    ot: true,
    legacy: false,
  },
  {
    label: {
      en: "AI menu import from photo or PDF",
      de: "KI-Import der Speisekarte aus Foto oder PDF",
    },
    ot: true,
    legacy: false,
  },
  {
    label: {
      en: "Runs on phones, tablets, Sunmi devices and Windows",
      de: "Läuft auf Handys, Tablets, Sunmi-Geräten und Windows",
    },
    ot: true,
    legacy: false,
  },
  { label: { en: "Monthly cancellable", de: "Monatlich kündbar" }, ot: true, legacy: false },
];

function Compare() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Vergleich" : "Compare"}
        title={
          lang === "de"
            ? "GastroPos vs klassische Kassensysteme"
            : "GastroPos vs legacy POS systems"
        }
        lede={
          lang === "de"
            ? "Funktion für Funktion: Sehen Sie, was Sie mit einer modernen Cloud-Kasse bekommen, das Legacy-Systeme einfach nicht liefern können."
            : "Feature by feature: see what you get with a modern cloud POS that legacy systems simply cannot deliver."
        }
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">
                    {lang === "de" ? "Funktion" : "Feature"}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-accent">GastroPos</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">
                    {lang === "de" ? "Klassisch" : "Legacy POS"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label.en} className="border-t border-border">
                    <td className="px-6 py-4">{lang === "de" ? r.label.de : r.label.en}</td>
                    <td className="px-6 py-4 text-center">
                      {r.ot ? (
                        <Check className="mx-auto size-5 text-success" />
                      ) : (
                        <X className="mx-auto size-5 text-muted-foreground" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {r.legacy ? (
                        <Check className="mx-auto size-5 text-success" />
                      ) : (
                        <X className="mx-auto size-5 text-muted-foreground" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {lang === "de"
              ? "Wechseln von einer anderen Kasse? Ihre Speisekarte übernehmen Sie per Foto oder PDF mit dem KI-Import."
              : "Switching from another POS? Bring your menu over from a photo or PDF with the AI import."}{" "}
            <Link to="/demo" className="text-accent font-semibold">
              {lang === "de" ? "Demo buchen" : "Book a demo"}
            </Link>
          </p>
        </div>
      </section>
      <CtaFooter />
    </SiteShell>
  );
}
