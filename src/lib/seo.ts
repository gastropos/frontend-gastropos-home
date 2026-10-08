/**
 * Central SEO constants and the head builder used by every route.
 *
 * Pages are prerendered in German (the primary market), so titles, descriptions and
 * structured data use the German texts. English is available through the language switch.
 */
import { productMedia } from "@/components/product/media";

export const SITE_URL = "https://www.gastropos.com";
export const SITE_NAME = "GastroPos";

/** Build an absolute URL from a relative path (e.g. "/pricing" → "https://www.gastropos.com/pricing"). */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path}`;
}

/** Absolute URL of a device mockup from src/assets/products, falling back to the POS hero. */
export function mediaUrl(file?: string): string {
  return absoluteUrl(productMedia(file) ?? productMedia("pos-hero.webp") ?? "/favicon.svg");
}

/** Default OG image used when a page has none of its own (absolute URL). */
export const OG_IMAGE = mediaUrl("pos-hero.webp");

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export interface Crumb {
  name: string;
  path: string;
}

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  /** File name in src/assets/products or an absolute URL. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product";
  breadcrumbs?: Crumb[];
  jsonLd?: object[];
  faq?: { q: string; a: string }[];
  article?: { published: string; modified: string; keywords?: string[] };
}

function imageUrl(image?: string): string {
  if (!image) return OG_IMAGE;
  if (/^https?:\/\//.test(image)) return image;
  return mediaUrl(image);
}

function ldScript(data: object) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Start", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Builds the `head` object (meta, canonical link, JSON-LD) for a page. */
export function pageHead(seo: PageSeo) {
  const url = absoluteUrl(seo.path);
  const image = imageUrl(seo.image);
  const type = seo.type ?? "website";
  const meta: Record<string, string>[] = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:type", content: type === "product" ? "website" : type },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: seo.imageAlt ?? seo.title },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image },
  ];
  if (seo.article) {
    meta.push(
      { property: "article:published_time", content: seo.article.published },
      { property: "article:modified_time", content: seo.article.modified },
    );
  }
  const scripts = [
    ...(seo.breadcrumbs?.length ? [ldScript(breadcrumbLd(seo.breadcrumbs))] : []),
    ...(seo.faq?.length ? [ldScript(faqLd(seo.faq))] : []),
    ...(seo.jsonLd ?? []).map(ldScript),
  ];
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
