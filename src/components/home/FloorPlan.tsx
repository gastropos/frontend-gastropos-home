import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";

/* ────────────────────────────── Data ────────────────────────────── */

const NAVY = "#1a2d6d";
const ORANGE = "#ea5929";
const MONO = "JetBrains Mono, ui-monospace, monospace";
const DISPLAY = "Plus Jakarta Sans, Inter, sans-serif";

type Table = { id: string; x: number; y: number; r?: number; rect?: boolean; ring?: boolean };

const TABLES: Table[] = [
  { id: "T1", x: 120, y: 120, ring: true },
  { id: "T2", x: 280, y: 120, ring: true },
  { id: "T3", x: 440, y: 120, ring: true },
  { id: "T4", x: 120, y: 290, ring: true },
  { id: "T5", x: 280, y: 290, ring: true },
  { id: "T6", x: 445, y: 290, rect: true },
  { id: "T7", x: 640, y: 160, r: 40, ring: true },
  { id: "T8", x: 640, y: 370, r: 40, ring: true },
  { id: "T9", x: 120, y: 430 },
  { id: "T10", x: 400, y: 440 },
];

type FlowEvent = {
  table: string;
  color: string;
  path: string;
  label: { x: number; y: number; w: number };
  de: { label: string; feed: string };
  en: { label: string; feed: string };
};

const EVENTS: FlowEvent[] = [
  {
    table: "T3",
    color: ORANGE,
    path: "M474 120 C 600 50, 760 70, 905 110",
    label: { x: 350, y: 28, w: 190 },
    de: { label: "T3 · Sprachbefehl", feed: "„2× Burger und ein Riesling, Tisch 3“ → Küche" },
    en: { label: "T3 · Voice order", feed: "“2 burgers and a Riesling, table 3” → kitchen" },
  },
  {
    table: "T7",
    color: "#ffffff",
    path: "M680 160 C 760 160, 820 150, 905 140",
    label: { x: 555, y: 64, w: 170 },
    de: {
      label: "T7 · QR-Bestellung",
      feed: "Gast scannt den QR-Code · 1× Burrata, 2× Spritz → Küche",
    },
    en: {
      label: "T7 · QR order",
      feed: "Guest scans the QR code · 1× Burrata, 2× Spritz → kitchen",
    },
  },
  {
    table: "T5",
    color: "#ffffff",
    path: "M314 290 C 520 230, 700 330, 880 336",
    label: { x: 180, y: 200, w: 200 },
    de: { label: "T5 · Tischbestellung", feed: "Service-App am Tisch · 3× Aperol → Bar" },
    en: { label: "T5 · Table order", feed: "Waiter app at the table · 3× Aperol → bar" },
  },
  {
    table: "T8",
    color: ORANGE,
    path: "M680 370 C 790 370, 820 240, 990 180",
    label: { x: 560, y: 440, w: 160 },
    de: { label: "T8 · bezahlt", feed: "An der Kasse bezahlt · Tisch wird freigegeben" },
    en: { label: "T8 · Paid", feed: "Paid at the till · table released" },
  },
];

const CYCLE_MS = 3200;

/* ────────────────────────────── Component ────────────────────────── */

export function FloorPlan() {
  const { lang } = useI18n();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((i) => (i + 1) % EVENTS.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [reduce]);

  const t =
    lang === "de"
      ? {
          entrance: "EINGANG",
          kitchen: "KÜCHE · KDS",
          bar: "BAR",
          terrace: "TERRASSE",
          live: "LIVE",
          aria: "Grundriss eines Restaurants: Tische senden Bestellungen live an Küche und Bar",
        }
      : {
          entrance: "ENTRANCE",
          kitchen: "KITCHEN · KDS",
          bar: "BAR",
          terrace: "TERRACE",
          live: "LIVE",
          aria: "Restaurant floor plan: tables send orders live to the kitchen and bar",
        };

  const ev = EVENTS[active];
  const eventTables = new Map(EVENTS.map((e) => [e.table, e]));

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-3 shadow-2xl shadow-[#1a2d6d]/30 sm:p-5"
      style={{ background: NAVY }}
    >
      <svg viewBox="0 0 1200 520" className="block w-full" role="img" aria-label={t.aria}>
        {/* room */}
        <rect
          x="10"
          y="10"
          width="1180"
          height="500"
          rx="24"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
        <line x1="40" y1="510" x2="200" y2="510" stroke={NAVY} strokeWidth="6" />
        <text
          x="120"
          y="498"
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="12"
          fill="rgba(255,255,255,0.55)"
        >
          {t.entrance}
        </text>

        {/* kitchen */}
        <rect
          x="880"
          y="30"
          width="290"
          height="210"
          rx="18"
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
        <text x="905" y="62" fontFamily={MONO} fontSize="13" fill="rgba(255,255,255,0.75)">
          {t.kitchen}
        </text>
        <circle cx="1140" cy="57" r="4" fill="#34d399">
          {!reduce && (
            <animate
              attributeName="opacity"
              values="1;0.25;1"
              dur="1.4s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <motion.g
          key={active}
          initial={reduce ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect x="905" y="82" width="70" height="90" rx="8" fill="#ffffff" />
        </motion.g>
        <rect x="990" y="82" width="70" height="90" rx="8" fill="rgba(255,255,255,0.72)" />
        <rect x="1075" y="82" width="70" height="90" rx="8" fill="rgba(255,255,255,0.42)" />
        <rect x="905" y="190" width="240" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
        <motion.rect
          key={`bar-${active}`}
          x="905"
          y="190"
          height="8"
          rx="4"
          fill={ORANGE}
          initial={{ width: 0 }}
          animate={{ width: 240 }}
          transition={{ duration: reduce ? 0 : CYCLE_MS / 1000, ease: "linear" }}
        />

        {/* bar + terrace */}
        <rect
          x="880"
          y="300"
          width="290"
          height="72"
          rx="36"
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
        <text
          x="1025"
          y="341"
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="13"
          fill="rgba(255,255,255,0.75)"
        >
          {t.bar}
        </text>
        <rect
          x="880"
          y="410"
          width="290"
          height="80"
          rx="18"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeDasharray="6 8"
          strokeWidth="2"
        />
        <text
          x="1025"
          y="455"
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="13"
          fill="rgba(255,255,255,0.55)"
        >
          {t.terrace}
        </text>

        {/* order flows */}
        {EVENTS.map((e, i) => (
          <path
            key={e.table}
            className="fp-flow"
            d={e.path}
            fill="none"
            stroke={e.color}
            strokeWidth={i === active ? 4 : 2.5}
            style={{
              opacity: i === active ? 1 : 0.35,
              transition: "opacity .5s, stroke-width .5s",
            }}
          />
        ))}

        {/* tables */}
        {TABLES.map((tb) => {
          const e = eventTables.get(tb.id);
          const isActive = e?.table === ev.table;
          const r = tb.r ?? 34;
          const fill = e
            ? isActive
              ? e.color
              : "rgba(255,255,255,0.22)"
            : "rgba(255,255,255,0.12)";
          const textFill = e && isActive ? NAVY : "#ffffff";
          return (
            <g key={tb.id}>
              {isActive && !tb.rect && (
                <circle
                  key={`ping-${active}`}
                  className="fp-ping"
                  cx={tb.x}
                  cy={tb.y}
                  r={r}
                  fill="none"
                  stroke={e!.color}
                  strokeWidth="3"
                />
              )}
              {tb.ring && (
                <circle
                  cx={tb.x}
                  cy={tb.y}
                  r={r + 14}
                  fill="none"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="10"
                  strokeDasharray="12 18"
                />
              )}
              {tb.rect ? (
                <rect
                  x={tb.x - 65}
                  y={tb.y - 40}
                  width="130"
                  height="80"
                  rx="14"
                  fill="rgba(255,255,255,0.12)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
              ) : (
                <circle cx={tb.x} cy={tb.y} r={r} fill={fill} style={{ transition: "fill .5s" }} />
              )}
              <text
                x={tb.x}
                y={tb.y + 6}
                textAnchor="middle"
                fontFamily={DISPLAY}
                fontWeight="800"
                fontSize={r > 34 ? 19 : 17}
                fill={textFill}
                style={{ transition: "fill .5s" }}
              >
                {tb.id}
              </text>
            </g>
          );
        })}

        {/* labels */}
        {EVENTS.map((e, i) => {
          const isActive = i === active;
          const copy = lang === "de" ? e.de : e.en;
          return (
            <motion.g
              key={e.table}
              animate={{ y: isActive ? -6 : 0, opacity: isActive ? 1 : 0.55 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <rect
                x={e.label.x}
                y={e.label.y}
                width={e.label.w}
                height="34"
                rx="17"
                fill={
                  isActive ? (e.color === ORANGE ? ORANGE : "#ffffff") : "rgba(255,255,255,0.16)"
                }
                style={{ transition: "fill .5s" }}
              />
              <text
                x={e.label.x + e.label.w / 2}
                y={e.label.y + 22}
                textAnchor="middle"
                fontFamily={MONO}
                fontSize="13.5"
                fill={isActive ? NAVY : "#ffffff"}
                style={{ transition: "fill .5s" }}
              >
                {copy.label}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* live feed */}
      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white/[0.07] px-4 py-3 text-left font-mono text-xs text-white sm:text-sm">
        <span className="flex shrink-0 items-center gap-1.5 text-[10px] text-emerald-300 sm:text-xs">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> {t.live}
        </span>
        <div className="relative h-5 min-w-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={`${active}-${lang}`}
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: -16, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 truncate"
            >
              <span
                style={{ color: ev.color === ORANGE ? "#ff9a73" : "#ffffff" }}
                className="font-semibold"
              >
                {(lang === "de" ? ev.de : ev.en).label}
              </span>
              <span className="text-white/70"> — {(lang === "de" ? ev.de : ev.en).feed}</span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
