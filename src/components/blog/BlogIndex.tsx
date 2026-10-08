import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { articles } from "@/content/articles";
import { resources } from "@/content/resources";
import { useI18n } from "@/lib/i18n/context";
import { Reveal } from "@/components/ui/motion";
import { productMedia } from "@/components/product/media";

export function formatDate(iso: string, lang: "en" | "de") {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const guideSlugs = ["pos-guide", "tse-guide", "datev-guide", "help"] as const;

export function BlogIndex() {
  const { lang } = useI18n();
  const de = lang === "de";
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          {de ? "Neueste Artikel" : "Latest articles"}
        </h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug}>
              <Reveal className="h-full">
                <Link
                  to="/resources/blog/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface/60">
                    <img
                      src={productMedia(a.image)}
                      alt={de ? a.imageAlt.de : a.imageAlt.en}
                      width={1400}
                      height={1050}
                      loading="lazy"
                      className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
                      {de ? a.category.de : a.category.en}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-extrabold leading-snug tracking-tight text-balance">
                      {de ? a.title.de : a.title.en}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {de ? a.description.de : a.description.en}
                    </p>
                    <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-muted-foreground">
                      <time dateTime={a.published}>{formatDate(a.published, lang)}</time>
                      <span aria-hidden>·</span>
                      <Clock className="size-3.5" />
                      {a.readingMinutes} min
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <h2 className="mt-24 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          {de ? "Ausführliche Ratgeber" : "In-depth guides"}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {guideSlugs.map((slug) => {
            const r = resources[slug];
            return (
              <li key={slug}>
                <Link
                  to="/resources/$slug"
                  params={{ slug }}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <BookOpen className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold">{de ? r.title.de : r.title.en}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {de ? r.metaDescription.de : r.metaDescription.en}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
