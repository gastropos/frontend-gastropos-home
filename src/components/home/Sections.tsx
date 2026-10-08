import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, SectionLabel, Counter } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  TrendingUp,
  Sparkles,
  UtensilsCrossed,
  Coffee,
  ChefHat,
  ShoppingBag,
  Building2,
  Wine,
  Croissant,
  Truck,
  Store,
  Scissors,
  Tag,
} from "lucide-react";

/* ─── AI Capabilities ─────────────────────────────────────────────── */

export function AiCapabilities() {
  const { lang } = useI18n();
  const items =
    lang === "de"
      ? [
          {
            icon: Brain,
            title: "Importieren",
            desc: "Die KI liest Ihre Speisekarte aus Fotos oder PDF und legt Kategorien, Produkte und Preise für Sie an.",
            illustration: "/undraw_ai-slop_jm2g.svg",
          },
          {
            icon: Zap,
            title: "Bestellen",
            desc: "Mit „Mit KI hinzufügen“ nimmt der Service Bestellungen per Sprache auf — die Artikel landen direkt am Tisch.",
            illustration: "/undraw_chat-with-ai_ir62.svg",
          },
          {
            icon: TrendingUp,
            title: "Einrichten",
            desc: "Der Assistent richtet Tische, Drucker und Zahlungsarten ein und beantwortet Fragen zum System.",
            illustration: "/undraw_data-input_whqw.svg",
          },
        ]
      : [
          {
            icon: Brain,
            title: "Import",
            desc: "AI reads your menu from photos or a PDF and creates categories, products and prices for you.",
            illustration: "/undraw_ai-slop_jm2g.svg",
          },
          {
            icon: Zap,
            title: "Order",
            desc: "With “Add with AI”, waiters take orders by voice — the items land on the table instantly.",
            illustration: "/undraw_chat-with-ai_ir62.svg",
          },
          {
            icon: TrendingUp,
            title: "Set up",
            desc: "The assistant sets up tables, printers and payment types and answers questions about the system.",
            illustration: "/undraw_data-input_whqw.svg",
          },
        ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-[#ea5929]">
            {lang === "de" ? "KI-Fähigkeiten" : "AI Capabilities"}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {lang === "de"
              ? "Drei Säulen der Küchenintelligenz."
              : "Three pillars of kitchen intelligence."}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, illustration }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-xl shadow-slate-900/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ea5929]/[0.06]">
                {/* gradient top accent — navy→orange */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-full"
                  style={{ background: "linear-gradient(90deg, #1a2d6d 0%, #ea5929 100%)" }}
                />

                {/* illustration */}
                <div className="flex items-center justify-center bg-gradient-to-b from-[#fef7f3] to-transparent px-6 pt-8 pb-4">
                  <img
                    src={illustration}
                    alt={title}
                    className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="p-8 pt-4">
                  {/* decorative corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 bottom-0 size-32 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(234,89,41,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Strip ─────────────────────────────────────────────────── */

export function StatsStrip() {
  const { lang } = useI18n();
  const stats =
    lang === "de"
      ? [
          { value: 2400, suffix: "+", label: "Bestellungen / Stunde" },
          { value: 34, suffix: "%", label: "Schnellere Tickets" },
          { value: 99, suffix: ".99%", label: "Verfügbarkeit" },
        ]
      : [
          { value: 2400, suffix: "+", label: "Orders / hour" },
          { value: 34, suffix: "%", label: "Faster tickets" },
          { value: 99, suffix: ".99%", label: "Uptime" },
        ];

  return (
    <section className="relative overflow-hidden py-20 bg-navy-pattern">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="font-display text-5xl font-extrabold text-white md:text-6xl">
                <Counter to={s.value} />
                {s.suffix}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Built For ───────────────────────────────────────────────────── */

export function BuiltFor() {
  const { lang } = useI18n();
  const industries = [
    { icon: UtensilsCrossed, en: "Restaurants", de: "Restaurants" },
    { icon: Coffee, en: "Cafés", de: "Cafés" },
    { icon: Wine, en: "Bars", de: "Bars" },
    { icon: Croissant, en: "Bakeries", de: "Bäckereien" },
    { icon: ChefHat, en: "Hotels", de: "Hotels" },
    { icon: Truck, en: "Food Trucks", de: "Food Trucks" },
    { icon: ShoppingBag, en: "Ghost Kitchens", de: "Ghost Kitchens" },
    { icon: Tag, en: "Kiosks", de: "Kioske" },
    { icon: Building2, en: "Catering", de: "Catering" },
    { icon: Store, en: "Retail", de: "Einzelhandel" },
    { icon: Scissors, en: "Hair Salons", de: "Friseursalons" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 border-t-8 border-l-8 border-t-[#ea5929] border-l-[#ea5929]">
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {lang === "de" ? "Gebaut für" : "Built for"}
          </p>
          <div className="mt-8 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <div className="flex animate-marquee gap-4 whitespace-nowrap w-max py-2 hover:[animation-play-state:paused]">
              {[...industries, ...industries, ...industries].map(({ icon: Icon, en, de }, i) => (
                <span
                  key={`${en}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-[#ea5929]/20 hover:shadow-md cursor-default"
                >
                  <Icon className="size-4 text-[#ea5929]" />
                  {lang === "de" ? de : en}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Final CTA ───────────────────────────────────────────────────── */

export function FinalCta() {
  const { lang, t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-navy-pattern py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(234,89,41,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {lang === "de"
              ? "Bereit, Ihr Geschäft zu transformieren?"
              : "Ready to transform your business?"}
          </h2>
          <p className="mt-5 text-white/60">
            {lang === "de"
              ? "Speisekarte per Foto importieren, Tische anlegen, loslegen — auf Ihren vorhandenen Geräten."
              : "Import your menu from a photo, create your tables, get started — on the devices you already have."}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/demo"
              className="btn-shimmer rounded-full bg-[#ea5929] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(234,89,41,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(234,89,41,0.6)]"
            >
              {t.common.bookDemo}
            </Link>
            <a
              href="https://app.gastropos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              {t.common.startTrial}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Social Proof (marquee) ──────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */

const CUSTOMERS = [
  "Lechtaler Dirndl & Tracht",
  "Update Lounge",
  "Waldgaststätte Althegnenberg",
  "Villa Weidig",
  "Norrii Zushii",
  "Kassenfux",
  "Cafe Aroma",
  "Steinfeldzentrum",
  "Meido Chi",
  "Restaurant Onassis",
  "Swing and Move Enterprises",
  "Restaurant Vastur",
  "BEAMS - Pub & Sportsbar",
  "Gelateria Zampolli",
  "Taos",
  "Schützenhaus Durmersheim",
  "Bauernhofstueble",
  "Café alte Werkstatt",
  "Smoke Nation Restobar GmbH",
  "Schützenges. 1900 Alerheim e.V",
  "Gesang- und Musikverein 1846 e.V. Lambsheim",
  "Waldgaststätte",
  "Smashup! am Dom",
  "Klein und Fein",
  "z u m   T u r m",
  "Admir Ghiol Techirghiol",
  "BRUCKS Trattoria",
  "Gelateria La Gondola s.a.r.l.",
  "Ristorante Italia",
  "Waldhof Wernswig",
  "RheinBar",
  "RistoranteDeiFratelli",
  "Bürgerhaus Glasofen",
  "Seyfi Baba",
  "Rossetti's Il Panzerotto",
  "Gästehaus Falkenau",
  "Cafe La Phäd",
  "Alter Fritz",
  "Stigma Cafe Bar Bistro",
  "Akropolis",
  "Flori's",
  "Zunftstube",
  "Ates Barbershop",
  "Lenny's im Saal",
  "Solemio Lounge & Bar",
  "The Coffee Society",
  "Seepavillon Ochsenwerder",
  "Dor de casă",
  "Feuerwehr Babenhausen",
  "PausenPlätzchen Kulturcafe",
  "Urfam Grillhouse",
  "Hotel Baergsunnu",
  "Gutsschänke Weingut Blümel",
  "Salzfit & Schwimmschule",
  "Schlaraffia Ravensbergia",
  "Milchhüsli",
  "The Golden Hop",
];

export function SocialProof() {
  const { lang } = useI18n();
  const half = Math.ceil(CUSTOMERS.length / 2);
  const rows = [
    { names: CUSTOMERS.slice(0, half), reverse: false },
    { names: CUSTOMERS.slice(half), reverse: true },
  ];
  return (
    <section className="overflow-hidden bg-white py-14 border-t-8 border-l-8 border-t-[#ea5929] border-l-[#ea5929]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {lang === "de"
            ? "Diese Betriebe vertrauen bereits auf GastroPos"
            : "Trusted by these businesses"}
        </p>
        <span className="sr-only">{CUSTOMERS.join(", ")}</span>
        <div
          aria-hidden
          className="mt-8 space-y-5 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          {rows.map((row, r) => (
            <div
              key={r}
              className="flex w-max animate-marquee items-center whitespace-nowrap hover:[animation-play-state:paused]"
              style={{
                animationDuration: "120s",
                animationDirection: row.reverse ? "reverse" : "normal",
              }}
            >
              {[...row.names, ...row.names].map((name, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-display text-lg font-bold tracking-tight text-muted-foreground">
                    {name}
                  </span>
                  <span className="mx-8 size-1.5 rounded-full bg-[#ea5929]/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Key Benefits (AI features) ──────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */

export function KeyBenefits() {
  const { lang } = useI18n();
  const items =
    lang === "de"
      ? [
          {
            icon: Brain,
            t: "Speisekarte per KI",
            d: "Fotografieren Sie Ihre Speisekarte oder laden Sie ein PDF hoch — die KI legt Kategorien, Produkte und Preise an.",
          },
          {
            icon: Sparkles,
            t: "Bestellen per Sprache",
            d: "Bestellungen per Sprache aufnehmen: Der Service diktiert, GastroPos legt die Artikel auf den Tisch.",
          },
          {
            icon: TrendingUp,
            t: "KI-Assistent",
            d: "Der Assistent erstellt Tische und Bereiche, richtet Drucker ein, testet sie und hilft bei der Fehlersuche.",
          },
        ]
      : [
          {
            icon: Brain,
            t: "AI menu import",
            d: "Take a photo of your menu or upload a PDF — the AI creates categories, products and prices.",
          },
          {
            icon: Sparkles,
            t: "Ordering by voice",
            d: "Take orders by voice: the waiter dictates, GastroPos puts the items on the table.",
          },
          {
            icon: TrendingUp,
            t: "AI assistant",
            d: "The assistant creates tables and areas, sets up and tests printers and helps with troubleshooting.",
          },
        ];
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-slate-900/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ea5929]/[0.06]">
                {/* gradient top accent */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-full"
                  style={{ background: "linear-gradient(90deg, #1a2d6d 0%, #ea5929 100%)" }}
                />
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ea5929]/10 to-[#1a2d6d]/5 text-[#ea5929] ring-1 ring-[#ea5929]/10 transition-transform group-hover:-translate-y-1">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
