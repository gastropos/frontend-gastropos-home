import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/lib/i18n/context";
import { Check } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () =>
    pageHead({
      title: "Demo buchen — GastroPos live erleben",
      description:
        "Persönliche Online-Vorführung von GastroPos: Kasse, Service-App, Küchenmonitor, QR-Bestellung und Webshop — abgestimmt auf Ihren Betrieb.",
      path: "/demo",
      image: "waiter-hero.webp",
      breadcrumbs: [{ name: "Demo", path: "/demo" }],
    }),
  component: Demo,
});

function Demo() {
  const { lang } = useI18n();
  const perks =
    lang === "de"
      ? [
          "30-minütiger personalisierter Walkthrough",
          "Live-Vorführung mit Ihrer Karte",
          "Hardware- und Zahlungsempfehlungen",
          "Hilfe beim Import Ihrer Speisekarte",
        ]
      : [
          "30-minute personalized walkthrough",
          "Live demo with your menu",
          "Hardware & payments recommendations",
          "Help importing your menu",
        ];
  return (
    <SiteShell>
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              {lang === "de" ? "Demo buchen" : "Book a demo"}
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              {lang === "de"
                ? "Sehen Sie GastroPos live — mit Ihrer Karte."
                : "See GastroPos live — with your menu."}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {lang === "de"
                ? "In 30 Minuten zeigen wir Ihnen genau, wie GastroPos in Ihrem Betrieb läuft. Keine Verpflichtung, kein Vertriebsdruck."
                : "In 30 minutes we'll show you exactly how GastroPos runs in your venue. No commitment, no sales pressure."}
            </p>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex gap-2 text-sm">
                  <Check className="size-5 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <form
            className="rounded-2xl border border-border bg-surface/50 p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const field = (k: string) => String(data.get(k) ?? "").trim();
              const body = [
                `Name: ${field("name")}`,
                `E-Mail: ${field("email")}`,
                `Telefon: ${field("phone")}`,
                `Unternehmen: ${field("company")}`,
                `Branche: ${field("industry")}`,
                "",
                field("message"),
              ].join("\n");
              window.location.href = `mailto:info@gastropos.ai?subject=${encodeURIComponent(
                `Demo-Anfrage: ${field("company") || field("name")}`,
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <input
              name="name"
              required
              autoComplete="name"
              aria-label={lang === "de" ? "Name" : "Full name"}
              placeholder={lang === "de" ? "Name" : "Full name"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              aria-label={lang === "de" ? "E-Mail" : "Email"}
              placeholder={lang === "de" ? "E-Mail" : "Email"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-label={lang === "de" ? "Telefon" : "Phone"}
              placeholder={lang === "de" ? "Telefon" : "Phone"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <input
              name="company"
              autoComplete="organization"
              aria-label={lang === "de" ? "Unternehmen" : "Company"}
              placeholder={lang === "de" ? "Unternehmen" : "Company"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <select
              name="industry"
              aria-label={lang === "de" ? "Branche" : "Industry"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            >
              <option>{lang === "de" ? "Branche wählen…" : "Select industry…"}</option>
              <option>Restaurant</option>
              <option>Café</option>
              <option>Bar</option>
              <option>Bäckerei</option>
              <option>Foodtruck</option>
              <option>Imbiss</option>
              <option>Lieferdienst</option>
              <option>{lang === "de" ? "Sonstiges" : "Other"}</option>
            </select>
            <textarea
              name="message"
              rows={3}
              aria-label={lang === "de" ? "Was möchten Sie sehen?" : "What would you like to see?"}
              placeholder={lang === "de" ? "Was möchten Sie sehen?" : "What would you like to see?"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              {lang === "de" ? "Demo anfragen" : "Request demo"}
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
