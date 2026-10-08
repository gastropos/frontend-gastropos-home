import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { useState, useEffect, useMemo, useRef } from "react";
import { CanvasCarousel } from "./CanvasCarousel";
import { FloorPlan } from "./FloorPlan";
import { ArrowRight, BookOpen, Brain, ChefHat, QrCode, Timer, Truck, Zap } from "lucide-react";

/* ────────────────────────────── Component ────────────────────────── */

export function Hero() {
  const { lang, t } = useI18n();

  const words = useMemo(() => lang === "de"
    ? ["Küchenanzeige", "Selbstbestellsystem", "Liefersystem", "Kassenbuch"]
    : ["Kitchen Display System", "Self ordering system", "Delivery system", "Cash book"], [lang]);

  const c =
    lang === "de"
      ? {
          badge: "KI-gestützte Gastronomie-Plattform",
          h1a: "Das Kassensystem mit KI und",
          sub: "Kasse, Service-App, Küchenmonitor, QR-Bestellung und eigener Webshop — mit Cloud-TSE und DATEV-Export.",
          cta1: t.common.startTrial,
          cta2: t.common.bookDemo,
        }
      : {
          badge: "AI-Powered Gastronomy Platform",
          h1a: "The POS system with AI and",
          sub: "Till, waiter app, kitchen display, QR ordering and your own webshop — with cloud TSE and DATEV export.",
          cta1: t.common.startTrial,
          cta2: t.common.bookDemo,
        };

  return (
    <section className="relative -mt-20 min-h-screen overflow-hidden pt-32 pb-20">
      {/* ── Canvas carousel background ── */}
      <div aria-hidden className="absolute inset-0 z-0">
        <CanvasCarousel />
      </div>
      {/* semi-transparent overlay — navy tint for brand harmony */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(18,47,110,0.15) 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* ── text block ── */}
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ea5929]/20 bg-[#ea5929]/5 px-4 py-2 text-xs font-semibold text-[#ea5929]">
            <Brain className="size-3.5" /> {c.badge}
          </span>

          <h1 className="relative z-[2] mt-8 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {c.h1a}
            <br />
            <span className="text-[1.45rem] sm:text-4xl md:text-5xl lg:text-6xl">
              <FeatureRotator words={words} />
            </span>
          </h1>

          <p className="relative z-[1] mx-auto mt-8 max-w-xl rounded-[12px] bg-[#1a2d6d] px-6 py-3 text-lg font-mono tracking-wide text-white shadow-lg border border-white/10">
            {c.sub}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.gastropos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-shimmer inline-flex items-center gap-2 rounded-full bg-[#ea5929] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(234,89,41,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(234,89,41,0.6)]"
            >
              {c.cta1}{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/demo"
              className="inline-flex items-center rounded-full bg-[#1a2d6d] px-8 py-4 font-semibold text-white transition-all hover:bg-[#122050] hover:-translate-y-0.5"
            >
              {c.cta2}
            </Link>
          </div>
        </motion.div>

        {/* ── Live floor plan ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          {/* glow behind mockup */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-3xl opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(234,89,41,0.10) 0%, transparent 70%)",
            }}
          />

          <FloorPlan />

          {/* floating stat pills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-4 top-16 hidden animate-float rounded-xl border border-border bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm lg:flex"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-full bg-emerald-500/20">
                <Timer className="size-4 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">Avg. Ticket</p>
                <p className="text-sm font-bold text-foreground">-34% faster</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -right-4 bottom-12 hidden animate-float rounded-xl border border-border bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm lg:flex"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-full bg-[#ea5929]/20">
                <Zap className="size-4 text-[#ea5929]" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">Throughput</p>
                <p className="text-sm font-bold text-foreground">2,400 orders/hr</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Wave decoration ── */}
      <div className="ocean" aria-hidden>
        <div className="wave wave-1" />
        <div className="wave wave-2" />
      </div>
    </section>
  );
}

/* Feature word rotator: a fixed-width frosted chip (sized to the longest
   feature). The whole chip – background, icon and word – rolls upwards like a
   3D cube to reveal the next feature, followed by a shine sweep. */
const ROTATE_MS = 3000;
const FEATURE_ICONS = [ChefHat, QrCode, Truck, BookOpen];
// The chip is 1.3em tall; rotating around an axis half that depth behind it
// makes consecutive chips behave like the front and bottom faces of a cube.
const CUBE_ORIGIN = "50% 50% -0.65em";
const CUBE_TRANSITION = { duration: 0.8, ease: [0.65, 0, 0.35, 1] } as const;

function FeatureRotator({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [widths, setWidths] = useState<number[] | null>(null);
  const ghosts = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    setIndex(0);
  }, [words]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [reduce, words.length]);

  // Measure every word so the chip can be as wide as the longest one.
  useEffect(() => {
    const measure = () =>
      setWidths(ghosts.current.map((g) => g?.getBoundingClientRect().width ?? 0));
    measure();
    const ro = new ResizeObserver(measure);
    ghosts.current.forEach((g) => g && ro.observe(g));
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [words]);

  const i = index % words.length;
  const word = words[i];
  const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
  const maxWidth = widths ? Math.ceil(Math.max(...widths)) : null;

  return (
    <span className="relative mt-2 inline-flex align-bottom">
      <span className="sr-only">{words.join(", ")}</span>

      {/* invisible copies used for measuring */}
      <span
        aria-hidden
        className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"
      >
        {words.map((w, k) => (
          <span
            key={w}
            ref={(el) => {
              ghosts.current[k] = el;
            }}
            className="absolute whitespace-nowrap"
          >
            {w}
          </span>
        ))}
      </span>

      {/* 3D stage */}
      <span
        aria-hidden
        className="relative inline-flex"
        style={{ perspective: "7em", transformStyle: "preserve-3d" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={`${i}-${word}`}
            className="relative inline-flex h-[1.3em] items-center gap-[0.28em] overflow-hidden rounded-[0.38em] bg-white/80 pl-[0.22em] pr-[0.3em] shadow-[0_10px_40px_-12px_rgba(26,45,109,0.35)] ring-1 ring-[#ea5929]/20 backdrop-blur-md"
            style={{ transformOrigin: CUBE_ORIGIN, backfaceVisibility: "hidden" }}
            initial={reduce ? false : { rotateX: -90, filter: "brightness(0.6)" }}
            animate={{ rotateX: 0, filter: "brightness(1)" }}
            exit={reduce ? undefined : { rotateX: 90, filter: "brightness(0.6)" }}
            transition={CUBE_TRANSITION}
          >
            <span className="grid size-[0.82em] shrink-0 place-items-center rounded-[0.24em] bg-[#1a2d6d] text-white">
              <Icon className="size-[0.48em]" strokeWidth={2.2} />
            </span>
            <span
              className="text-gradient-ai inline-flex justify-center whitespace-nowrap pb-[0.06em]"
              style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
            >
              {word}
            </span>
            {!reduce && (
              <motion.span
                className="pointer-events-none absolute inset-y-0 w-[1.2em] -skew-x-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
                }}
                initial={{ left: "-20%" }}
                animate={{ left: "120%" }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.55 }}
              />
            )}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
