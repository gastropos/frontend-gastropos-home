import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqList, CtaFooter } from "@/components/layout/SubPage";
import { ProductHero, ShowcaseRows } from "@/components/product/ProductShowcase";
import { industries, type IndustrySlug } from "@/content/industries";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const ind = industries[params.slug as IndustrySlug];
    if (!ind) throw notFound();
    return { industry: ind };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const i = loaderData.industry;
    return pageHead({
      title: i.metaTitle.de,
      description: i.metaDescription.de,
      path: `/industries/${params.slug}`,
      image: i.heroImage,
      imageAlt: i.heroAlt.de,
      breadcrumbs: [{ name: i.eyebrow.de, path: `/industries/${params.slug}` }],
      faq: i.faq.map((f) => ({ q: f.q.de, a: f.a.de })),
    });
  },
  component: IndustryPage,
  notFoundComponent: () => <div className="p-20 text-center">Industry not found</div>,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const { lang } = useI18n();
  type Bilingual<T> = { en: T; de: T };
  const pick = <T,>(o: Bilingual<T>): T => (lang === "de" ? o.de : o.en);
  return (
    <SiteShell>
      <ProductHero
        eyebrow={pick(industry.eyebrow)}
        title={pick(industry.title)}
        lede={pick(industry.lede)}
        image={industry.heroImage}
        imageAlt={pick(industry.heroAlt)}
        highlights={industry.highlights.map((h) => ({
          value: pick(h.value),
          label: pick(h.label),
        }))}
      />
      <section className="border-b border-border py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface/60 p-8 shadow-card">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              {lang === "de" ? "Kennen Sie das?" : "Sound familiar?"}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {pick(industry.painPoints).map((p: string) => (
                <li key={p} className="border-l-2 border-destructive/40 pl-4">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 shadow-card">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              {lang === "de" ? "Was GastroPos dafür bietet" : "What GastroPos offers"}
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {pick(industry.features).map((f: string) => (
                <li key={f} className="border-l-2 border-accent pl-4">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ShowcaseRows
        label={lang === "de" ? "So unterstützt Sie GastroPos" : "How GastroPos helps"}
        rows={industry.sections.map((s) => ({
          heading: pick(s.heading),
          body: pick(s.body),
          bullets: pick(s.bullets),
          image: s.image,
          imageAlt: pick(s.imageAlt),
        }))}
      />
      <FaqList items={industry.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
