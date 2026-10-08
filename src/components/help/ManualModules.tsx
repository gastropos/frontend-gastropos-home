import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  ChefHat,
  Database,
  FileText,
  Gift,
  Settings,
  Store,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Reveal } from "@/components/ui/motion";

type Bilingual = { en: string; de: string };

interface ManualModule {
  slug: string;
  icon: LucideIcon;
  title: Bilingual;
  description: Bilingual;
}

// The manual pages are static HTML in public/resources/help (published from gastropos_docs),
// so tiles use plain anchors instead of router links.
const MODULES: ManualModule[] = [
  {
    slug: "bestellsystem",
    icon: UtensilsCrossed,
    title: { en: "Ordering system", de: "Bestellsystem" },
    description: {
      en: "Take table orders, send to the kitchen, split and settle bills — including all related settings.",
      de: "Bestellungen am Tisch aufnehmen, an die Küche senden, Rechnungen teilen und kassieren – inkl. aller Einstellungen.",
    },
  },
  {
    slug: "kassensystem",
    icon: Store,
    title: { en: "Cash register", de: "Kassensystem" },
    description: {
      en: "Quick counter sales without tables.",
      de: "Schnellverkauf am Tresen ohne Tisch.",
    },
  },
  {
    slug: "liefersystem",
    icon: Truck,
    title: { en: "Delivery system", de: "Liefersystem" },
    description: {
      en: "Manage delivery and pick-up orders.",
      de: "Liefer- und Abholbestellungen verwalten.",
    },
  },
  {
    slug: "kassenbuch",
    icon: BookOpen,
    title: { en: "Cash book", de: "Kassenbuch" },
    description: {
      en: "Record cash deposits and withdrawals.",
      de: "Ein- und Auszahlungen dokumentieren.",
    },
  },
  {
    slug: "kuechenanzeige",
    icon: ChefHat,
    title: { en: "Kitchen display", de: "Küchenanzeige" },
    description: {
      en: "Show and work through orders in the kitchen.",
      de: "Bestellungen in der Küche anzeigen und abarbeiten.",
    },
  },
  {
    slug: "gutscheine",
    icon: Gift,
    title: { en: "Vouchers", de: "Gutscheine" },
    description: {
      en: "Issue and redeem vouchers.",
      de: "Gutscheine ausstellen und einlösen.",
    },
  },
  {
    slug: "reservierungen",
    icon: CalendarDays,
    title: { en: "Reservations", de: "Reservierungen" },
    description: {
      en: "Create and manage table reservations.",
      de: "Tischreservierungen anlegen und verwalten.",
    },
  },
  {
    slug: "auswertungen",
    icon: BarChart3,
    title: { en: "Analytics", de: "Auswertungen" },
    description: {
      en: "Revenue, peak hours and best sellers.",
      de: "Umsätze, Stoßzeiten und Bestseller auswerten.",
    },
  },
  {
    slug: "stammdaten",
    icon: Database,
    title: { en: "Master data", de: "Stammdaten" },
    description: {
      en: "Tables, menu, employees and customers.",
      de: "Tische, Speisekarte, Mitarbeiter und Kunden pflegen.",
    },
  },
  {
    slug: "berichte",
    icon: FileText,
    title: { en: "Reports", de: "Berichte" },
    description: {
      en: "Invoices, Z/X reports, DATEV and GoBD export.",
      de: "Rechnungen, Z-/X-Berichte, DATEV- und GoBD-Export.",
    },
  },
  {
    slug: "einstellungen",
    icon: Settings,
    title: { en: "Settings", de: "Einstellungen" },
    description: {
      en: "Self-service, profile, shifts, web shop and customer display.",
      de: "Selbstbedienung, Profil, Schichten, Webshop und Kundenanzeige.",
    },
  },
];

export function ManualModules() {
  const { lang } = useI18n();
  const pick = (o: Bilingual) => (lang === "de" ? o.de : o.en);

  return (
    <section id="handbuch" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
              {lang === "de" ? "Bedienungsanleitung" : "User manual"}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {lang === "de" ? "Anleitung nach Modulen" : "Manual by module"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {lang === "de"
                ? "Schritt für Schritt mit markierten Screenshots – wählen Sie ein Modul."
                : "Step by step with annotated screenshots — pick a module. The manual is in German."}
            </p>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <li key={m.slug}>
                <Reveal delay={Math.min(i * 0.04, 0.3)} className="h-full">
                  <a
                    href={`/resources/help/${m.slug}/index.html`}
                    className="group relative flex h-full flex-col rounded-3xl border border-border bg-surface/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-elegant"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-accent/[0.06] text-accent transition-colors duration-300 group-hover:bg-secondary-brand/10 group-hover:text-secondary-brand">
                        <Icon className="size-5" />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary-brand" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                      {pick(m.title)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pick(m.description)}
                    </p>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
