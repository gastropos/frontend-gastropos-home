import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BellRing,
  Camera,
  Check,
  CheckCheck,
  ChefHat,
  ChevronDown,
  CircleCheck,
  Filter,
  Menu,
  Mic,
  MoreVertical,
  Plus,
  Receipt,
  RotateCw,
  ScanLine,
  Send,
  ShoppingBag,
  Timer,
  Utensils,
  Volume2,
  ZoomIn,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, SectionLabel } from "@/components/ui/motion";

const NAVY = "#1a2d6d";
const INK = "#0c1b3d";
const ORANGE = "#ea5929";
const EASE = [0.16, 1, 0.3, 1] as const;

type Lang = "de" | "en";

function money(n: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}

/** Runs `tick` every `ms` while the element is on screen and motion is allowed. */
function useLoop(ms: number, tick: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const tickRef = useRef(tick);
  tickRef.current = tick;
  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => tickRef.current(), ms);
    return () => clearInterval(id);
  }, [inView, reduce, ms]);
  return { ref, reduce: !!reduce };
}

/* ═══════════════════════════ Section shell ═══════════════════════════ */

export function FeatureSuite() {
  const { lang } = useI18n();
  const l = lang as Lang;
  const nav = [
    { id: "kasse", icon: Receipt, label: l === "de" ? "Kasse" : "POS" },
    {
      id: "kuechenmonitor",
      icon: ChefHat,
      label: l === "de" ? "Küchenmonitor" : "Kitchen display",
    },
    { id: "qr-bestellung", icon: ScanLine, label: l === "de" ? "QR-Bestellung" : "QR ordering" },
  ];

  return (
    <div className="border-l-8 border-l-[#ea5929]">
      <section className="bg-white pt-28 pb-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>
                {l === "de" ? "Eine Suite. Jeder Touchpoint." : "One suite. Every touchpoint."}
              </SectionLabel>
              <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
                {l === "de"
                  ? "Die komplette professionelle Suite."
                  : "The complete professional suite."}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {l === "de"
                  ? "Vom Tresen bis zur Küche. Vom Tisch bis zum Online-Shop. Alles synchron, in Echtzeit."
                  : "From counter to kitchen. From table to online shop. Everything synced, in real time."}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <nav
              className="mt-10 flex flex-wrap justify-center gap-3"
              aria-label={l === "de" ? "Funktionen" : "Features"}
            >
              {nav.map((n, i) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-border bg-[#f8fafc] py-2 pl-2 pr-5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-[#ea5929]/40 hover:shadow-md"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-[#1a2d6d] text-white transition-colors group-hover:bg-[#ea5929]">
                    <n.icon className="size-4" />
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                  {n.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <FeatureRow
        id="kasse"
        index="01"
        eyebrow={l === "de" ? "Kasse" : "POS"}
        title={
          l === "de" ? (
            <>
              Bestellen in <Accent>drei Taps.</Accent>
            </>
          ) : (
            <>
              Orders in <Accent>three taps.</Accent>
            </>
          )
        }
        body={
          l === "de"
            ? "Tablet-basierte Bestellaufnahme direkt am Tisch. Gericht antippen, an die Küche senden, kassieren – während der Gast noch die Karte zuklappt."
            : "Tablet-based ordering right at the table. Tap the dish, send it to the kitchen, take payment – before the guest has closed the menu."
        }
        bullets={
          l === "de"
            ? [
                "Bestellen per Stimme mit „Mit KI hinzufügen“",
                "Tischplan, Gänge und getrennte Rechnungen",
                "Cloud-TSE und DATEV-Export inklusive",
              ]
            : [
                "Order by voice with “Add with AI”",
                "Table plan, courses and split bills",
                "Cloud TSE and DATEV export included",
              ]
        }
        visual={<PosScene lang={l} />}
      />

      <FeatureRow
        id="kuechenmonitor"
        index="02"
        dark
        reverse
        eyebrow={l === "de" ? "Küchenmonitor" : "Kitchen display"}
        title={
          l === "de" ? (
            <>
              Kein Bon geht <Accent>verloren.</Accent>
            </>
          ) : (
            <>
              No ticket gets <Accent>lost.</Accent>
            </>
          )
        }
        body={
          l === "de"
            ? "Jede Bestellung – von Kasse, Service-App oder QR-Code – erscheint sofort als Tischkarte in der Küche: sortiert nach Kategorie, mit allen Extras und Ohne-Wünschen. Ein Tipp, und der Tisch ist fertig."
            : "Every order – from the till, the waiter app or a QR code – appears instantly as a table card in the kitchen: grouped by category, with every extra and “without” request. One tap and the table is done."
        }
        bullets={
          l === "de"
            ? [
                "Extras und Ohne-Wünsche auf einen Blick",
                "Wartezeit je Tisch – die Farbe zeigt, was eilt",
                "Kategorie-Filter und Tonsignal bei neuen Bestellungen",
              ]
            : [
                "Extras and “without” requests at a glance",
                "Wait time per table – the colour shows what is urgent",
                "Category filter and sound alert for new orders",
              ]
        }
        visual={<KdsScene lang={l} />}
      />

      <FeatureRow
        id="qr-bestellung"
        index="03"
        eyebrow={l === "de" ? "QR-Bestellung" : "QR ordering"}
        title={
          l === "de" ? (
            <>
              Scannen. Bestellen. <Accent>Genießen.</Accent>
            </>
          ) : (
            <>
              Scan. Order. <Accent>Enjoy.</Accent>
            </>
          )
        }
        body={
          l === "de"
            ? "Gäste scannen den QR-Code am Tisch und bestellen direkt vom eigenen Handy – ohne App-Download. Die Bestellung landet sofort im Küchenmonitor – ohne Umweg über den Service."
            : "Guests scan the QR code at the table and order straight from their own phone – no app download. The order lands on the kitchen display instantly – no detour via the waiter."
        }
        bullets={
          l === "de"
            ? [
                "Kein App-Download für Ihre Gäste",
                "Bestellungen landen direkt im Küchenmonitor",
                "Weniger Laufwege für Ihr Service-Team",
              ]
            : [
                "No app download for your guests",
                "Orders go straight to the kitchen display",
                "Fewer trips for your floor team",
              ]
        }
        visual={<QrScene lang={l} />}
      />
    </div>
  );
}

function Accent({ children }: { children: ReactNode }) {
  return <span className="text-[#ea5929]">{children}</span>;
}

function FeatureRow({
  id,
  index,
  eyebrow,
  title,
  body,
  bullets,
  visual,
  reverse,
  dark,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden py-24 md:py-32 ${dark ? "bg-[#1a2d6d] text-white" : "bg-white text-foreground"}`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute top-6 select-none font-display text-[10rem] font-extrabold leading-none tracking-tighter md:text-[16rem] ${reverse ? "right-4 md:right-10" : "left-4 md:left-10"} ${dark ? "text-white/[0.04]" : "text-[#1a2d6d]/[0.04]"}`}
      >
        {index}
      </span>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest">
            <span className="rounded-full bg-[#c2410c] px-2.5 py-1 font-semibold text-white">
              {index}
            </span>
            <span className={dark ? "text-white/70" : "text-muted-foreground"}>{eyebrow}</span>
          </div>
          <h3 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            {title}
          </h3>
          <p
            className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted-foreground"}`}
          >
            {body}
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#ea5929]/15">
                  <Check className="size-3 text-[#ea5929]" strokeWidth={3} />
                </span>
                <span className={dark ? "text-white/90" : "text-foreground"}>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          {visual}
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════ 01 · POS scene ═══════════════════════════ */

const MENU = [
  { id: "burger", de: "Burger", en: "Burger", price: 12.5, img: "/food/burger.webp" },
  { id: "steak", de: "Steak", en: "Steak", price: 24, img: "/food/steak.webp" },
  { id: "salad", de: "Salat", en: "Salad", price: 9.5, img: "/food/salad.webp" },
  { id: "pasta", de: "Pasta", en: "Pasta", price: 13, img: "/food/pasta.webp" },
  { id: "pizza", de: "Pizza", en: "Pizza", price: 11.5, img: "/food/pizza.webp" },
  { id: "fries", de: "Pommes", en: "Fries", price: 4.5, img: "/food/fries.webp" },
  { id: "soup", de: "Suppe", en: "Soup", price: 6.5, img: "/food/soup.webp" },
  { id: "wrap", de: "Wrap", en: "Wrap", price: 9, img: "/food/wrap.webp" },
  { id: "bowl", de: "Bowl", en: "Bowl", price: 12, img: "/food/bowl.webp" },
];
const POS_SCRIPT = ["burger", "salad", "burger", "fries"];
const POS_STEPS = POS_SCRIPT.length + 4; // taps, send, paid, paid, reset

function PosScene({ lang }: { lang: Lang }) {
  const [step, setStep] = useState(POS_SCRIPT.length);
  const { ref, reduce } = useLoop(1100, () => setStep((s) => (s + 1) % POS_STEPS));

  const taps = POS_SCRIPT.slice(0, Math.min(step, POS_SCRIPT.length));
  const lines = MENU.filter((m) => taps.includes(m.id)).map((m) => ({
    ...m,
    qty: taps.filter((t) => t === m.id).length,
  }));
  const total = lines.reduce((s, m) => s + m.qty * m.price, 0);
  const tapped = step >= 1 && step <= POS_SCRIPT.length ? POS_SCRIPT[step - 1] : null;
  const sending = step === POS_SCRIPT.length + 1;
  const paid = step >= POS_SCRIPT.length + 2 && step < POS_STEPS - 1;
  const cats =
    lang === "de"
      ? ["Hauptgerichte", "Getränke", "Beilagen", "Desserts"]
      : ["Mains", "Drinks", "Sides", "Desserts"];

  return (
    <div ref={ref} className="relative">
      <div className="rounded-[2rem] bg-[#0c1b3d] p-2.5 shadow-2xl shadow-[#1a2d6d]/30 sm:p-3">
        <div className="grid gap-3 rounded-[1.5rem] bg-[#f8fafc] p-3 sm:grid-cols-12 sm:p-4">
          {/* menu */}
          <div className="sm:col-span-7">
            <div className="mb-3 flex gap-1.5 overflow-hidden">
              {cats.map((c, i) => (
                <span
                  key={c}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold ${i === 0 ? "bg-[#1a2d6d] text-white" : "bg-white text-muted-foreground ring-1 ring-border"}`}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {MENU.map((m) => {
                const isTap = tapped === m.id;
                return (
                  <motion.div
                    key={m.id}
                    animate={isTap && !reduce ? { scale: [1, 0.92, 1.03, 1] } : { scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className={`relative overflow-hidden rounded-xl bg-white p-1.5 ring-1 transition-shadow ${isTap ? "ring-2 ring-[#ea5929] shadow-lg" : "ring-border"}`}
                  >
                    <img
                      src={m.img}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-lg object-cover"
                    />
                    <div className="px-1 pt-1.5 pb-0.5">
                      <p className="truncate text-[11px] font-semibold sm:text-xs">
                        {lang === "de" ? m.de : m.en}
                      </p>
                      <p className="font-mono text-[10px] text-muted-foreground">
                        {money(m.price, lang)}
                      </p>
                    </div>
                    {isTap && !reduce && (
                      <motion.span
                        key={step}
                        aria-hidden
                        className="absolute left-1/2 top-1/3 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ea5929]/40"
                        initial={{ scale: 0.2, opacity: 0.9 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* order */}
          <div className="relative flex min-h-[300px] flex-col overflow-hidden rounded-xl bg-white p-4 ring-1 ring-border sm:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {lang === "de" ? "Bestellung #2047" : "Order #2047"}
            </p>
            <p className="mt-1 font-display text-base font-bold">
              {lang === "de" ? "Tisch 14 · Terrasse" : "Table 14 · Terrace"}
            </p>
            <div className="mt-4 flex-1 space-y-2.5 text-sm">
              <AnimatePresence initial={false}>
                {lines.map((m) => (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="flex justify-between gap-2"
                  >
                    <span>
                      <motion.span
                        key={m.qty}
                        initial={{ scale: 1.6, color: ORANGE }}
                        animate={{ scale: 1, color: "#0f172a" }}
                        className="inline-block font-semibold"
                      >
                        {m.qty}×
                      </motion.span>{" "}
                      {lang === "de" ? m.de : m.en}
                    </span>
                    <span className="font-mono">{money(m.qty * m.price, lang)}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {lines.length === 0 && (
                <p className="pt-6 text-center text-xs text-muted-foreground">
                  {lang === "de" ? "Gericht antippen …" : "Tap a dish …"}
                </p>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between border-t border-border pt-3 font-display font-bold">
              <span>{lang === "de" ? "Gesamt" : "Total"}</span>
              <span className="text-lg">{money(total, lang)}</span>
            </div>
            <motion.div
              animate={sending && !reduce ? { scale: [1, 0.95, 1] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`mt-3 rounded-lg py-3 text-center text-sm font-semibold text-white transition-shadow ${sending ? "bg-[#c2410c] shadow-[0_0_0_6px_rgba(234,89,41,0.25)]" : "bg-[#c2410c]"}`}
            >
              {lang === "de" ? "Senden & bezahlen" : "Send & pay"}
            </motion.div>

            <AnimatePresence>
              {paid && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/95 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    className="grid size-14 place-items-center rounded-full bg-[#ea5929] text-white"
                  >
                    <Check className="size-7" strokeWidth={3} />
                  </motion.span>
                  <p className="font-display text-lg font-bold">
                    {lang === "de" ? "Bezahlt" : "Paid"}
                  </p>
                  <p className="px-4 text-xs text-muted-foreground">
                    {lang === "de" ? "Bestellung ist in der Küche" : "Order is in the kitchen"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -left-3 -top-5 hidden animate-float items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-lg ring-1 ring-border md:flex">
        <Mic className="size-3.5 text-[#ea5929]" />
        {lang === "de" ? "„Zwei Burger, Tisch 14“" : "“Two burgers, table 14”"}
      </div>
      <div
        className="absolute -bottom-5 -right-3 hidden animate-float items-center gap-2 rounded-full bg-[#1a2d6d] px-4 py-2 font-mono text-[11px] text-white shadow-lg md:flex"
        style={{ animationDelay: "2.5s" }}
      >
        <span className="size-1.5 rounded-full bg-emerald-400" />
        Cloud-TSE · DATEV
      </div>
    </div>
  );
}

/* ═══════════════════════════ 02 · KDS scene ═══════════════════════════ */
/* Mirrors the real GastroPos "Küchenanzeige": one card per table, items grouped
   by category with extras / "Ohne" wishes, a wait timer and a done action. */

type L10n = { de: string; en: string };
const T = (de: string, en = de): L10n => ({ de, en });

type KItem = { qty: number; name: string; size?: L10n; extras?: L10n[]; without?: L10n[] };
type KOrder = { table: L10n; groups: { cat: L10n; items: KItem[] }[] };

const KDS_ORDERS: KOrder[] = [
  {
    table: T("Tisch 4", "Table 4"),
    groups: [
      {
        cat: T("Pizza Classica"),
        items: [
          { qty: 1, name: "Vegetariana", extras: [T("Mozzarella")] },
          {
            qty: 3,
            name: "Marinara",
            extras: [T("Klassischer Boden", "Classic hand-tossed"), T("8 Stücke", "8 slices")],
          },
        ],
      },
    ],
  },
  {
    table: T("Garten 12", "Garden 12"),
    groups: [
      {
        cat: T("Salate", "Salads"),
        items: [{ qty: 1, name: "Caesar Salad", size: T("Groß", "Large") }],
      },
      {
        cat: T("Desserts"),
        items: [
          { qty: 1, name: "Tiramisu" },
          { qty: 1, name: "Panna Cotta" },
        ],
      },
    ],
  },
  {
    table: T("Garten 3", "Garden 3"),
    groups: [
      {
        cat: T("Pasta"),
        items: [
          {
            qty: 1,
            name: "Spaghetti Carbonara",
            extras: [T("Extra Parmesan")],
            without: [T("Pecorino")],
          },
        ],
      },
      {
        cat: T("Pizza"),
        items: [
          {
            qty: 1,
            name: "Pizza Salami",
            size: T("Ø 26 cm"),
            without: [T("Tomatensauce", "Tomato sauce")],
          },
        ],
      },
    ],
  },
  {
    table: T("Tisch 7", "Table 7"),
    groups: [
      {
        cat: T("Pizza"),
        items: [
          { qty: 2, name: "Margherita", extras: [T("Büffelmozzarella", "Buffalo mozzarella")] },
        ],
      },
    ],
  },
  {
    table: T("Terrasse 5", "Terrace 5"),
    groups: [
      { cat: T("Pasta"), items: [{ qty: 2, name: "Penne Arrabbiata", without: [T("Chili")] }] },
      {
        cat: T("Salate", "Salads"),
        items: [{ qty: 1, name: "Insalata Mista", extras: [T("Feta")] }],
      },
    ],
  },
  {
    table: T("Tisch 9", "Table 9"),
    groups: [
      {
        cat: T("Pizza Classica"),
        items: [
          {
            qty: 1,
            name: "Quattro Formaggi",
            extras: [T("Weißer Boden (ohne Tomate)", "White base (no tomato)")],
          },
        ],
      },
      { cat: T("Desserts"), items: [{ qty: 2, name: "Tiramisu" }] },
    ],
  },
];

type KCard = { id: number; order: number; age: number; done?: boolean };
const KDS_SEED: KCard[] = [
  { id: 1, order: 0, age: 431 },
  { id: 2, order: 1, age: 44 },
  { id: 3, order: 2, age: 22 },
];

function mmss(s: number) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function cardTone(age: number) {
  if (age >= 300) return { head: "bg-[#8f2a22]", ring: "ring-[#b4362b]", chip: "bg-black/20" };
  if (age >= 150) return { head: "bg-[#8a5a12]", ring: "ring-[#b07a1c]", chip: "bg-black/20" };
  return { head: "bg-[#23603f]", ring: "ring-[#2f7d52]", chip: "bg-black/20" };
}

function KdsScene({ lang }: { lang: Lang }) {
  const [cards, setCards] = useState(KDS_SEED);
  const [doneCount, setDoneCount] = useState(12);
  const [bell, setBell] = useState(0);
  const [clock, setClock] = useState(18 * 3600 + 6 * 60 + 22);
  const counter = useRef({ tick: 0, id: 10, next: 3 });

  const { ref, reduce } = useLoop(1000, () => {
    const c = counter.current;
    c.tick += 1;
    setClock((s) => s + 1);
    const phase = c.tick % 5;
    let incoming: KCard | null = null;
    if (phase === 4) {
      c.id += 1;
      incoming = { id: c.id, order: c.next % KDS_ORDERS.length, age: 0 };
      c.next += 1;
    }
    setCards((prev) => {
      let list = prev.map((k) => ({ ...k, age: k.age + 1 }));
      // phase 1: the oldest table is marked done …
      if (phase === 1) list = list.map((k, i) => (i === 0 ? { ...k, done: true } : k));
      // phase 2: … and leaves the board
      if (phase === 2) list = list.slice(1);
      // phase 4: a new table order arrives
      if (incoming) list = [...list, incoming];
      return list;
    });
    if (phase === 2) setDoneCount((n) => n + 1);
    if (incoming) setBell((b) => b + 1);
  });

  const live = cards.filter((k) => !k.done);
  const tables = live.length;
  const articles = live.reduce(
    (s, k) =>
      s +
      KDS_ORDERS[k.order].groups.reduce(
        (g, gr) => g + gr.items.reduce((a, it) => a + it.qty, 0),
        0,
      ),
    0,
  );
  const hh = String(Math.floor(clock / 3600) % 24).padStart(2, "0");
  const mi = String(Math.floor(clock / 60) % 60).padStart(2, "0");
  const ss = String(clock % 60).padStart(2, "0");

  const iconBtn = "grid size-8 place-items-center rounded-full bg-white/10 text-white/90";

  return (
    <div ref={ref} className="relative">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#141a2e] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        {/* app bar */}
        <div className="flex items-center gap-3 bg-[#b5391a] px-4 py-3 text-white">
          <Menu className="size-4" />
          <span className="font-display text-sm font-bold">
            {lang === "de" ? "Küchenanzeige" : "Kitchen display"}
          </span>
        </div>

        {/* toolbar */}
        <div className="flex items-center gap-2 bg-[#3b4a7a] px-3 py-2.5">
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/85 ring-1 ring-white/15">
            <Filter className="size-3 shrink-0" />
            <span className="truncate">
              {lang === "de" ? "Kategorie auswählen" : "Select category"}
            </span>
            <ChevronDown className="ml-auto size-3 shrink-0" />
          </span>
          <span className="relative hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white sm:flex">
            <CircleCheck className="size-3.5" />
            {lang === "de" ? "Fertige Bestellungen" : "Completed orders"}
            <motion.span
              key={doneCount}
              initial={reduce ? false : { scale: 1.8, backgroundColor: "#ea5929" }}
              animate={{ scale: 1, backgroundColor: "rgba(255,255,255,0.18)" }}
              transition={{ duration: 0.6 }}
              className="ml-1 rounded-full px-1.5 font-mono text-[10px]"
            >
              {doneCount}
            </motion.span>
          </span>
          <span className={`${iconBtn} hidden md:grid`}>
            <ZoomIn className="size-3.5" />
          </span>
          <span className={`${iconBtn} hidden md:grid`}>
            <Volume2 className="size-3.5" />
          </span>
          <motion.span
            key={bell}
            animate={reduce || bell === 0 ? {} : { rotate: [0, -20, 16, -10, 6, 0] }}
            transition={{ duration: 0.7 }}
            className={`${iconBtn} ${bell > 0 ? "bg-[#ea5929]" : ""}`}
          >
            <BellRing className="size-3.5" />
          </motion.span>
          <span className={iconBtn}>
            <RotateCw className="size-3.5" />
          </span>
        </div>

        {/* status strip */}
        <div className="flex items-center gap-3 border-b border-white/5 px-3 py-2 text-[10px] text-white/60">
          <span className="flex items-center gap-1 rounded-md bg-[#ea5929]/15 px-2 py-1 font-mono font-semibold uppercase tracking-widest text-[#ff8a65] ring-1 ring-[#ea5929]/30">
            <ChefHat className="size-3" />
            {lang === "de" ? "Zubereitung" : "Preparing"}
          </span>
          <span>
            <b className="text-sm text-[#ff8a65]">{tables}</b> {lang === "de" ? "Tische" : "tables"}
          </span>
          <span>
            <b className="text-sm text-sky-300">{articles}</b> {lang === "de" ? "Artikel" : "items"}
          </span>
          <span className="ml-auto font-mono text-sm text-white">
            {hh}:{mi}
            <span className="text-[10px] text-white/50">:{ss}</span>
          </span>
        </div>

        {/* board */}
        <div className="flex h-[400px] gap-2.5 overflow-hidden p-2.5 sm:h-[430px]">
          <AnimatePresence initial={false} mode="popLayout">
            {cards.map((k) => {
              const o = KDS_ORDERS[k.order];
              const tone = cardTone(k.age);
              const qty = o.groups.reduce(
                (g, gr) => g + gr.items.reduce((a, it) => a + it.qty, 0),
                0,
              );
              const count = o.groups.reduce((g, gr) => g + gr.items.length, 0);
              return (
                <motion.article
                  key={k.id}
                  layout
                  initial={{ opacity: 0, x: 60, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className={`relative flex w-[calc((100%-20px)/3)] min-w-[180px] shrink-0 flex-col overflow-hidden rounded-2xl bg-[#1c2338] ring-2 transition-colors duration-700 ${tone.ring}`}
                >
                  <header
                    className={`px-3 pb-2.5 pt-3 text-white transition-colors duration-700 ${tone.head}`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="truncate font-display text-sm font-extrabold">
                        {o.table[lang]}
                      </span>
                      <span className="flex gap-1">
                        <motion.span
                          animate={
                            k.done && !reduce
                              ? {
                                  scale: [1, 1.3, 1],
                                  backgroundColor: ["rgba(255,255,255,0.15)", ORANGE, ORANGE],
                                }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                          className="grid size-6 place-items-center rounded-full bg-white/15"
                        >
                          <CheckCheck className="size-3.5" />
                        </motion.span>
                        <span className="grid size-6 place-items-center rounded-full bg-white/15">
                          <Send className="size-3" />
                        </span>
                        <span className="hidden size-6 place-items-center rounded-full bg-white/15 lg:grid">
                          <MoreVertical className="size-3" />
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-1 text-[10px]">
                      <span
                        className={`flex items-center gap-1 rounded-full px-2 py-0.5 ring-1 ring-white/25 ${tone.chip}`}
                      >
                        <Utensils className="size-2.5" />
                        {qty}× · {count} {lang === "de" ? "Artikel" : "items"}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Timer className="size-3" />
                        {mmss(k.age)}
                      </span>
                    </div>
                  </header>

                  <div className="flex-1 overflow-hidden">
                    {o.groups.map((g) => (
                      <div key={g.cat.de}>
                        <p className="bg-black/20 py-1.5 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                          {g.cat[lang]}
                        </p>
                        {g.items.map((it) => (
                          <div
                            key={it.name}
                            className="flex gap-2 border-b border-white/5 px-2.5 py-2"
                          >
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-[10px] font-bold text-white">
                              {it.qty}×
                            </span>
                            <div className="min-w-0 text-[11px] leading-snug">
                              <p className="font-semibold text-white">{it.name}</p>
                              {it.size && (
                                <p className="text-white/70">
                                  {lang === "de" ? "Größe" : "Size"}:{" "}
                                  <span className="text-sky-300">{it.size[lang]}</span>
                                </p>
                              )}
                              {it.extras && (
                                <>
                                  <p className="text-white/70">Extras:</p>
                                  {it.extras.map((e) => (
                                    <p key={e.de} className="text-emerald-400">
                                      + {e[lang]}
                                    </p>
                                  ))}
                                </>
                              )}
                              {it.without && (
                                <>
                                  <p className="text-[#ff8a65]">
                                    {lang === "de" ? "Ohne:" : "Without:"}
                                  </p>
                                  {it.without.map((e) => (
                                    <p key={e.de} className="text-[#ff8a65]">
                                      − {e[lang]}
                                    </p>
                                  ))}
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {k.done && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 grid place-items-center bg-[#141a2e]/70 backdrop-blur-[2px]"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className="flex items-center gap-2 rounded-full bg-[#ea5929] px-4 py-2 text-xs font-bold text-white shadow-lg"
                        >
                          <CheckCheck className="size-4" /> {lang === "de" ? "Fertig" : "Done"}
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute -top-5 right-6 hidden animate-float items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0c1b3d] shadow-lg md:flex">
        <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
        {lang === "de" ? "Echtzeit-Sync" : "Real-time sync"}
      </div>
    </div>
  );
}

/* ═══════════════════════════ 03 · QR scene ═══════════════════════════ */

const QR_N = 21;
const QR_CELLS: boolean[] = (() => {
  const finder = (r: number, c: number) => {
    for (const [r0, c0] of [
      [0, 0],
      [0, QR_N - 7],
      [QR_N - 7, 0],
    ]) {
      const y = r - r0;
      const x = c - c0;
      if (y >= 0 && y < 7 && x >= 0 && x < 7) {
        const ring = y === 0 || y === 6 || x === 0 || x === 6;
        const core = y >= 2 && y <= 4 && x >= 2 && x <= 4;
        return ring || core;
      }
      if (y >= -1 && y <= 7 && x >= -1 && x <= 7) return false;
    }
    return null;
  };
  const cells: boolean[] = [];
  for (let r = 0; r < QR_N; r++)
    for (let c = 0; c < QR_N; c++) {
      const f = finder(r, c);
      cells.push(f ?? (r * 13 + c * 7 + r * c * 3) % 7 < 3);
    }
  return cells;
})();

function QrCode({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid gap-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(${QR_N}, minmax(0, 1fr))` }}
    >
      {QR_CELLS.map((on, i) => (
        <span key={i} className={`aspect-square ${on ? "bg-[#0c1b3d]" : ""}`} />
      ))}
    </div>
  );
}

const QR_ITEMS = [
  {
    id: "pizza",
    de: "Pizza Margherita",
    en: "Pizza Margherita",
    price: 11.5,
    img: "/food/pizza.webp",
  },
  { id: "pasta", de: "Trüffel-Pasta", en: "Truffle pasta", price: 13, img: "/food/pasta.webp" },
  { id: "salad", de: "Bunter Salat", en: "Garden salad", price: 9.5, img: "/food/salad.webp" },
];

function QrScene({ lang }: { lang: Lang }) {
  const [stage, setStage] = useState(1);
  const { ref, reduce } = useLoop(2600, () => setStage((s) => (s + 1) % 4));
  const total = QR_ITEMS[0].price + QR_ITEMS[1].price;

  const steps =
    lang === "de"
      ? ["Scannen", "Auswählen", "Senden", "Fertig"]
      : ["Scan", "Choose", "Send", "Done"];

  return (
    <div ref={ref} className="relative flex flex-col items-center gap-8">
      {/* step indicator */}
      <div className="flex items-center gap-2 rounded-full bg-[#f8fafc] p-1 ring-1 ring-border">
        {steps.map((s, i) => (
          <span
            key={s}
            className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-500 sm:px-4 ${stage === i ? "text-white" : "text-muted-foreground"}`}
          >
            {stage === i && (
              <motion.span
                layoutId="qr-step"
                className="absolute inset-0 rounded-full bg-[#1a2d6d]"
                transition={{ duration: 0.5, ease: EASE }}
              />
            )}
            <span className="relative">{s}</span>
          </span>
        ))}
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:items-end sm:gap-10">
        {/* table tent */}
        <motion.div
          animate={stage === 0 && !reduce ? { rotate: [-4, -2, -4] } : { rotate: -4 }}
          transition={{ duration: 1.2 }}
          className="relative w-52 rounded-3xl bg-white p-5 shadow-xl ring-1 ring-border"
        >
          <div className="relative overflow-hidden rounded-xl p-1">
            <QrCode className="w-full" />
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-x-0 h-1 rounded-full bg-[#ea5929] shadow-[0_0_14px_#ea5929]"
                animate={{ top: ["4%", "94%", "4%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>
          <p className="mt-4 text-center font-display text-lg font-bold">
            {lang === "de" ? "Scannen & bestellen" : "Scan & order"}
          </p>
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {lang === "de" ? "Tisch 14" : "Table 14"}
          </p>
        </motion.div>

        {/* phone */}
        <div className="relative">
          <div className="h-[460px] w-[240px] rounded-[2.6rem] bg-[#0c1b3d] p-2.5 shadow-2xl shadow-[#1a2d6d]/30">
            <div className="relative h-full overflow-hidden rounded-[2.1rem] bg-white">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0c1b3d]" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={stage}
                  initial={reduce ? false : { opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute inset-0"
                >
                  {stage === 0 && <QrCamera lang={lang} reduce={reduce} />}
                  {stage === 1 && <QrMenu lang={lang} reduce={reduce} total={total} />}
                  {stage === 2 && <QrReview lang={lang} total={total} reduce={reduce} />}
                  {stage === 3 && <QrDone lang={lang} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ticket popping out to the kitchen */}
          <AnimatePresence>
            {stage === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                className="absolute -right-4 top-16 w-44 rounded-2xl bg-[#1a2d6d] p-3 text-white shadow-xl sm:-right-28"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                  <span className="text-[#ff9a73]">
                    {lang === "de" ? "Neu · KDS" : "New · KDS"}
                  </span>
                  <span className="text-white/60">QR</span>
                </div>
                <p className="mt-1 font-display text-sm font-bold">
                  {lang === "de" ? "Tisch 14" : "Table 14"}
                </p>
                <p className="text-xs text-white/80">1× Pizza · 1× Pasta</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function QrCamera({ lang, reduce }: { lang: Lang; reduce: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 bg-[#0c1b3d] text-white">
      <div className="relative size-36">
        {[
          "left-0 top-0 border-l-4 border-t-4",
          "right-0 top-0 border-r-4 border-t-4",
          "left-0 bottom-0 border-b-4 border-l-4",
          "right-0 bottom-0 border-b-4 border-r-4",
        ].map((c) => (
          <span key={c} className={`absolute size-8 rounded-sm border-[#ea5929] ${c}`} />
        ))}
        <div className="absolute inset-4 opacity-80">
          <div className="rounded bg-white p-1.5">
            <QrCode />
          </div>
        </div>
        {!reduce && (
          <motion.span
            className="absolute inset-x-2 h-0.5 bg-[#ea5929] shadow-[0_0_12px_#ea5929]"
            animate={{ top: ["10%", "90%", "10%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
      <p className="flex items-center gap-2 text-sm font-semibold">
        <Camera className="size-4" />{" "}
        {lang === "de" ? "QR-Code wird erkannt …" : "Detecting QR code …"}
      </p>
    </div>
  );
}

function QrMenu({ lang, reduce, total }: { lang: Lang; reduce: boolean; total: number }) {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-10">
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
        order.gastropos.ai
      </p>
      <p className="mt-1 font-display text-lg font-bold leading-tight">
        {lang === "de" ? "Willkommen an Tisch 14" : "Welcome to table 14"}
      </p>
      <div className="mt-3 space-y-2">
        {QR_ITEMS.map((m, i) => {
          const added = i < 2;
          return (
            <div key={m.id} className="flex items-center gap-2.5 rounded-xl bg-[#f8fafc] p-2">
              <img src={m.img} alt="" className="size-11 rounded-lg object-cover" loading="lazy" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold">{lang === "de" ? m.de : m.en}</p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {money(m.price, lang)}
                </p>
              </div>
              <motion.span
                initial={false}
                animate={
                  added && !reduce ? { backgroundColor: [ORANGE, NAVY], scale: [1, 1.25, 1] } : {}
                }
                transition={{ delay: 0.5 + i * 0.6, duration: 0.4 }}
                className="grid size-7 place-items-center rounded-full text-white"
                style={{ backgroundColor: added && reduce ? NAVY : ORANGE }}
              >
                {added ? (
                  <Check className="size-3.5" strokeWidth={3} />
                ) : (
                  <Plus className="size-3.5" strokeWidth={3} />
                )}
              </motion.span>
            </div>
          );
        })}
      </div>
      <motion.div
        initial={reduce ? false : { y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.4, ease: EASE }}
        className="mt-auto flex items-center justify-between rounded-2xl bg-[#1a2d6d] px-4 py-3 text-white"
      >
        <span className="flex items-center gap-2 text-xs font-semibold">
          <ShoppingBag className="size-4" /> 2 {lang === "de" ? "Artikel" : "items"}
        </span>
        <span className="font-mono text-xs">{money(total, lang)}</span>
      </motion.div>
    </div>
  );
}

function QrReview({ lang, total, reduce }: { lang: Lang; total: number; reduce: boolean }) {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-10">
      <p className="font-display text-lg font-bold">
        {lang === "de" ? "Bestellung prüfen" : "Review order"}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {lang === "de" ? "Tisch 14" : "Table 14"}
      </p>
      <div className="mt-4 space-y-2 text-xs">
        {QR_ITEMS.slice(0, 2).map((m) => (
          <div key={m.id} className="flex items-center justify-between rounded-xl bg-[#f8fafc] p-3">
            <span className="font-semibold">1× {lang === "de" ? m.de : m.en}</span>
            <span className="font-mono text-muted-foreground">{money(m.price, lang)}</span>
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-border p-3 text-muted-foreground">
          {lang === "de" ? "Anmerkung: Pasta ohne Pecorino" : "Note: pasta without pecorino"}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-border pt-3">
        <span className="text-xs text-muted-foreground">{lang === "de" ? "Summe" : "Total"}</span>
        <span className="font-display text-xl font-extrabold">{money(total, lang)}</span>
      </div>
      <motion.div
        animate={reduce ? {} : { scale: [1, 1, 0.94, 1] }}
        transition={{ duration: 1.4, times: [0, 0.6, 0.75, 1] }}
        className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-[#ea5929] py-3.5 text-sm font-bold text-white"
      >
        <Send className="size-4" />
        {lang === "de" ? "An die Küche senden" : "Send to kitchen"}
      </motion.div>
    </div>
  );
}

function QrDone({ lang }: { lang: Lang }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <motion.span
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
        className="grid size-20 place-items-center rounded-full bg-[#ea5929] text-white"
      >
        <Check className="size-10" strokeWidth={3} />
      </motion.span>
      <p className="font-display text-xl font-bold leading-tight">
        {lang === "de" ? "Bestellung ist in der Küche" : "Your order is in the kitchen"}
      </p>
      <p className="text-xs text-muted-foreground">
        {lang === "de" ? "Gesendet · Tisch 14" : "Sent · Table 14"}
      </p>
    </div>
  );
}
