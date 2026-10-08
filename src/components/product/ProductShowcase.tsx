import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Reveal } from "@/components/ui/motion";
import { productMedia } from "./media";

export interface Highlight {
  value: string;
  label: string;
}

export function ProductHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  highlights,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt: string;
  highlights: Highlight[];
}) {
  const { t } = useI18n();
  const src = productMedia(image);
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface/40 pt-28 pb-16 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_10%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 right-0 -z-10 h-[460px] w-[760px] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 -z-10 size-80 rounded-full bg-secondary-brand/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-secondary-brand" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/demo"
              className="group btn-shimmer inline-flex items-center gap-2 rounded-full bg-secondary-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(234,89,41,0.5)] transition-all hover:-translate-y-0.5"
            >
              {t.common.bookDemo}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-secondary"
            >
              {t.nav.pricing}
            </Link>
          </div>
        </motion.div>
        {src && (
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={src}
              alt={imageAlt}
              width={1600}
              height={1200}
              fetchPriority="high"
              className="h-auto w-full drop-shadow-[0_30px_40px_rgba(18,47,110,0.18)]"
            />
          </motion.div>
        )}
      </div>
      {highlights.length > 0 && (
        <div className="mx-auto mt-14 max-w-7xl px-6">
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="bg-surface px-6 py-5">
                <dt className="font-display text-xl font-extrabold tracking-tight text-accent">
                  {h.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}

export interface ShowcaseRow {
  heading: string;
  body: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
}

export function ShowcaseRows({ rows, label }: { rows: ShowcaseRow[]; label: string }) {
  if (!rows.length) return null;
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
            {label}
          </p>
        </Reveal>
        <div className="mt-14 space-y-24">
          {rows.map((r, i) => {
            const src = productMedia(r.image);
            const flip = i % 2 === 1;
            return (
              <Reveal key={r.heading}>
                <article
                  className={`grid items-center gap-10 ${src ? "lg:grid-cols-2" : ""} ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {src && (
                    <div className="relative">
                      <div
                        aria-hidden
                        className="absolute inset-6 -z-10 rounded-[2.5rem] bg-accent/5 blur-2xl"
                      />
                      <img
                        src={src}
                        alt={r.imageAlt ?? r.heading}
                        width={1400}
                        height={1050}
                        loading="lazy"
                        className="h-auto w-full"
                      />
                    </div>
                  )}
                  <div className={src ? "" : "mx-auto max-w-3xl"}>
                    <span className="font-mono text-[11px] font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
                      {r.heading}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{r.body}</p>
                    {r.bullets.length > 0 && (
                      <ul className="mt-6 space-y-2.5">
                        {r.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                              <Check className="size-3" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
