import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead, absoluteUrl, ORGANIZATION_ID } from "@/lib/seo";
import { articles } from "@/content/articles";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, FaqList, CtaFooter } from "@/components/layout/SubPage";
import { resources, type ResourceSlug } from "@/content/resources";
import { useI18n } from "@/lib/i18n/context";
import { ManualModules } from "@/components/help/ManualModules";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { ProductHero, ShowcaseRows } from "@/components/product/ProductShowcase";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const r = resources[params.slug as ResourceSlug];
    if (!r) throw notFound();
    return { resource: r };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const r = loaderData.resource;
    const path = `/resources/${params.slug}`;
    return pageHead({
      title: r.metaTitle.de,
      description: r.metaDescription.de,
      path,
      image: r.heroImage,
      imageAlt: r.heroAlt?.de,
      type: params.slug === "blog" || params.slug === "help" ? "website" : "article",
      breadcrumbs: [{ name: r.eyebrow.de, path }],
      faq: r.faq.map((f) => ({ q: f.q.de, a: f.a.de })),
      jsonLd:
        params.slug === "blog"
          ? [
              {
                "@context": "https://schema.org",
                "@type": "Blog",
                name: "GastroPos Ratgeber",
                url: absoluteUrl(path),
                inLanguage: "de-DE",
                publisher: { "@id": ORGANIZATION_ID },
                blogPost: articles.map((a) => ({
                  "@type": "BlogPosting",
                  headline: a.title.de,
                  url: absoluteUrl(`/resources/blog/${a.slug}`),
                  datePublished: a.published,
                })),
              },
            ]
          : undefined,
    });
  },
  component: ResourcePage,
  notFoundComponent: () => <div className="p-20 text-center">Resource not found</div>,
});

function ResourcePage() {
  const { resource } = Route.useLoaderData();
  const { lang } = useI18n();
  type Bilingual<T> = { en: T; de: T };
  const pick = <T,>(o: Bilingual<T>): T => (lang === "de" ? o.de : o.en);
  if (resource.heroImage) {
    return (
      <SiteShell>
        <ProductHero
          eyebrow={pick(resource.eyebrow)}
          title={pick(resource.title)}
          lede={pick(resource.lede)}
          image={resource.heroImage}
          imageAlt={resource.heroAlt ? pick(resource.heroAlt) : pick(resource.title)}
          highlights={(resource.highlights ?? []).map((h) => ({
            value: pick(h.value),
            label: pick(h.label),
          }))}
        />
        {resource.slug === "blog" ? (
          <BlogIndex />
        ) : (
          <ShowcaseRows
            label={pick(resource.eyebrow)}
            rows={resource.sections.map((s) => ({
              heading: pick(s.heading),
              body: pick(s.body),
              bullets: s.bullets ? pick(s.bullets) : [],
              image: s.image,
              imageAlt: s.imageAlt ? pick(s.imageAlt) : undefined,
            }))}
          />
        )}
        <FaqList items={resource.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) }))} />
        <CtaFooter />
      </SiteShell>
    );
  }
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={pick(resource.eyebrow)}
        title={pick(resource.title)}
        lede={pick(resource.lede)}
      />
      {resource.slug === "help" && <ManualModules />}
      <ContentSections
        sections={resource.sections.map((s) => ({
          heading: pick(s.heading),
          body: pick(s.body),
        }))}
      />
      <FaqList items={resource.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
