import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead, SITE_URL } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { FeatureList, FaqList, CtaFooter } from "@/components/layout/SubPage";
import { products, type ProductSlug } from "@/content/products";
import { useI18n } from "@/lib/i18n/context";
import { ProductHero, ShowcaseRows } from "@/components/product/ProductShowcase";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = products[params.slug as ProductSlug];
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.product;
    return pageHead({
      title: p.metaTitle.de,
      description: p.metaDescription.de,
      path: `/product/${params.slug}`,
      image: p.heroImage,
      imageAlt: p.heroAlt?.de,
      breadcrumbs: [{ name: p.eyebrow.de, path: `/product/${params.slug}` }],
      faq: p.faq.map((f) => ({ q: f.q.de, a: f.a.de })),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: p.metaTitle.de,
          description: p.metaDescription.de,
          inLanguage: "de-DE",
          about: { "@id": `${SITE_URL}/#software` },
        },
      ],
    });
  },
  component: ProductPage,
  notFoundComponent: () => <div className="p-20 text-center">Product not found</div>,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { lang } = useI18n();
  type Bilingual<T> = { en: T; de: T };
  const pick = <T,>(o: Bilingual<T>): T => (lang === "de" ? o.de : o.en);
  return (
    <SiteShell>
      <ProductHero
        eyebrow={pick(product.eyebrow)}
        title={pick(product.title)}
        lede={pick(product.lede)}
        image={product.heroImage}
        imageAlt={product.heroAlt ? pick(product.heroAlt) : pick(product.title)}
        highlights={(product.highlights ?? []).map((h) => ({
          value: pick(h.value),
          label: pick(h.label),
        }))}
      />
      <ShowcaseRows
        label={lang === "de" ? "So arbeiten Sie damit" : "How it works"}
        rows={product.sections.map((s) => ({
          heading: pick(s.heading),
          body: pick(s.body),
          bullets: s.bullets ? pick(s.bullets) : [],
          image: s.image,
          imageAlt: s.imageAlt ? pick(s.imageAlt) : undefined,
        }))}
      />
      <FeatureList items={pick(product.features)} />
      <FaqList items={product.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
