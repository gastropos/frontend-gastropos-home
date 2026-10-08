import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Info } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqList, CtaFooter } from "@/components/layout/SubPage";
import { productMedia } from "@/components/product/media";
import { formatDate } from "@/components/blog/BlogIndex";
import { articleBySlug, articles, type Article } from "@/content/articles";
import { products } from "@/content/products";
import { useI18n } from "@/lib/i18n/context";
import { absoluteUrl, mediaUrl, ORGANIZATION_ID, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/blog/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const a = loaderData.article;
    const path = `/resources/blog/${a.slug}`;
    return pageHead({
      title: a.title.de,
      description: a.description.de,
      path,
      image: a.image,
      imageAlt: a.imageAlt.de,
      type: "article",
      article: { published: a.published, modified: a.updated, keywords: a.keywords },
      breadcrumbs: [
        { name: "Ratgeber", path: "/resources/blog" },
        { name: a.title.de, path },
      ],
      faq: a.faq.map((f) => ({ q: f.q.de, a: f.a.de })),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title.de,
          description: a.description.de,
          image: mediaUrl(a.image),
          datePublished: a.published,
          dateModified: a.updated,
          inLanguage: "de-DE",
          keywords: a.keywords.join(", "),
          articleSection: a.category.de,
          mainEntityOfPage: absoluteUrl(path),
          author: { "@id": ORGANIZATION_ID },
          publisher: { "@id": ORGANIZATION_ID },
        },
      ],
    });
  },
  component: ArticlePage,
  notFoundComponent: () => <div className="p-20 text-center">Article not found</div>,
});

function ArticleBody({ article }: { article: Article }) {
  const { lang } = useI18n();
  return (
    <div className="space-y-5 text-base leading-relaxed text-foreground/85">
      {article.body.map((block, i) => {
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-accent">
              {block.items[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        const text = block.text[lang];
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="pt-6 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl"
            >
              {text}
            </h2>
          );
        }
        if (block.type === "note") {
          return (
            <p
              key={i}
              className="flex gap-3 rounded-2xl border border-border bg-surface/60 p-5 text-sm text-muted-foreground"
            >
              <Info className="mt-0.5 size-4 shrink-0 text-accent" />
              {text}
            </p>
          );
        }
        return <p key={i}>{text}</p>;
      })}
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { lang } = useI18n();
  const de = lang === "de";
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <SiteShell>
      <article>
        <header className="relative overflow-hidden border-b border-border bg-surface/40 pt-28 pb-14">
          <div
            aria-hidden
            className="absolute -top-40 right-0 -z-10 h-[420px] w-[700px] rounded-full bg-accent/10 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Link
                to="/resources/$slug"
                params={{ slug: "blog" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <ArrowLeft className="size-4" />
                {de ? "Alle Artikel" : "All articles"}
              </Link>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
                {article.category[lang]}
              </p>
              <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
                {article.title[lang]}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {article.description[lang]}
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>GastroPos</span>
                <span aria-hidden>·</span>
                <time dateTime={article.updated}>
                  {de ? "Aktualisiert am " : "Updated "}
                  {formatDate(article.updated, lang)}
                </time>
                <span aria-hidden>·</span>
                <Clock className="size-3.5" />
                {article.readingMinutes} {de ? "Min. Lesezeit" : "min read"}
              </p>
            </div>
            <img
              src={productMedia(article.image)}
              alt={article.imageAlt[lang]}
              width={1400}
              height={1050}
              fetchPriority="high"
              className="h-auto w-full drop-shadow-[0_30px_40px_rgba(18,47,110,0.18)]"
            />
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16">
          <aside className="rounded-3xl border border-accent/20 bg-accent/[0.04] p-7">
            <h2 className="font-display text-lg font-extrabold tracking-tight">
              {de ? "Das Wichtigste in Kürze" : "Key takeaways"}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed">
              {article.takeaways[lang].map((t) => (
                <li key={t} className="border-l-2 border-accent pl-4">
                  {t}
                </li>
              ))}
            </ul>
          </aside>
          <div className="mt-12">
            <ArticleBody article={article} />
          </div>
          {article.related.length > 0 && (
            <nav className="mt-14 rounded-3xl border border-border bg-surface p-7">
              <h2 className="font-display text-lg font-extrabold tracking-tight">
                {de ? "Passende Funktionen in GastroPos" : "Related GastroPos features"}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {article.related.map((slug) => (
                  <li key={slug}>
                    <Link
                      to="/product/$slug"
                      params={{ slug }}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                    >
                      {products[slug].eyebrow[lang]}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>

      <FaqList items={article.faq.map((f) => ({ q: f.q[lang], a: f.a[lang] }))} />

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            {de ? "Weitere Artikel" : "More articles"}
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/resources/blog/$slug"
                  params={{ slug: a.slug }}
                  className="block h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <p className="font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
                    {a.category[lang]}
                  </p>
                  <p className="mt-2 font-semibold leading-snug">{a.title[lang]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaFooter />
    </SiteShell>
  );
}
