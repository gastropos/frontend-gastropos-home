import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/lib/i18n/context";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Kontakt — GastroPos Support & Vertrieb",
      description:
        "So erreichen Sie GastroPos: E-Mail an info@gastropos.ai, Telefon +49 201 759 346 94, Sitz in Essen.",
      path: "/contact",
      breadcrumbs: [{ name: "Kontakt", path: "/contact" }],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt GastroPos",
          mainEntity: {
            "@type": "Organization",
            name: "OrdersTracker UG (haftungsbeschränkt)",
            email: "info@gastropos.ai",
            telephone: "+49 201 75934694",
          },
        },
      ],
    }),
  component: Contact,
});

function Contact() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {lang === "de" ? "Kontakt" : "Contact us"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {lang === "de"
              ? "Schreiben Sie uns oder rufen Sie an — wir melden uns werktags so schnell wie möglich."
              : "Write to us or give us a call — we get back to you as soon as possible on business days."}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a
              href="mailto:info@gastropos.ai"
              className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-accent"
            >
              <Mail className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{lang === "de" ? "Support" : "Support"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">info@gastropos.ai</p>
            </a>
            <a
              href="tel:+4920175934694"
              className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-accent"
            >
              <Phone className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{lang === "de" ? "Telefon" : "Phone"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">+49 201 759 346 94</p>
            </a>
            <div className="rounded-2xl border border-border bg-surface/50 p-6">
              <MapPin className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{lang === "de" ? "Büro" : "Office"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Marktstr. 10
                <br />
                45355 Essen, Deutschland
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
