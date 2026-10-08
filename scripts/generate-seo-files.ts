// Generates public/sitemap.xml, public/llms.txt and public/llms-full.txt from the content files.
// Runs before every build (see "prebuild" in package.json): node scripts/generate-seo-files.ts
import { writeFileSync } from "node:fs";
import { products } from "../src/content/products.ts";
import { industries } from "../src/content/industries.ts";
import { resources } from "../src/content/resources.ts";
import { articles } from "../src/content/articles.ts";

const SITE = "https://www.gastropos.com";
const today = new Date().toISOString().slice(0, 10);

type Page = {
  path: string;
  title: string;
  description: string;
  priority: string;
  lastmod?: string;
};

const staticPages: Page[] = [
  {
    path: "/",
    title: "GastroPos — Cloud-Kassensystem für Restaurants, Cafés & Lieferdienste",
    description:
      "Kasse, Bestellaufnahme am Tisch, Küchenmonitor, QR-Bestellung und eigener Webshop in einem System, mit fiskaly Cloud-TSE, Kassenbuch und DATEV-Export.",
    priority: "1.0",
  },
  {
    path: "/pricing",
    title: "Preise",
    description:
      "Klein 39 €, Standard 59 €, Premium 79 € pro Monat; fiskaly Cloud-TSE als Zusatzmodul für 15 € pro Monat.",
    priority: "0.9",
  },
  {
    path: "/demo",
    title: "Demo buchen",
    description: "Persönliche Vorführung von GastroPos.",
    priority: "0.8",
  },
  {
    path: "/compare",
    title: "Vergleich mit klassischen Kassensystemen",
    description: "Cloud-Kasse und klassisches Kassensystem im Funktionsvergleich.",
    priority: "0.7",
  },
  {
    path: "/about",
    title: "Über GastroPos",
    description: "Wer hinter GastroPos steht.",
    priority: "0.5",
  },
  {
    path: "/contact",
    title: "Kontakt",
    description: "info@gastropos.ai, +49 201 759 346 94.",
    priority: "0.5",
  },
  {
    path: "/partners",
    title: "Partnerprogramm",
    description: "Für Wiederverkäufer, Hardware-Händler und Steuerberatungen.",
    priority: "0.4",
  },
  {
    path: "/affiliate",
    title: "Empfehlungsprogramm",
    description: "GastroPos weiterempfehlen.",
    priority: "0.3",
  },
];

const productPages: Page[] = Object.values(products).map((p) => ({
  path: `/product/${p.slug}`,
  title: p.metaTitle.de.replace(/ \| GastroPos$/, ""),
  description: p.metaDescription.de,
  priority: "0.9",
}));
const industryPages: Page[] = Object.values(industries).map((i) => ({
  path: `/industries/${i.slug}`,
  title: i.metaTitle.de.replace(/ \| GastroPos$/, ""),
  description: i.metaDescription.de,
  priority: "0.7",
}));
const resourcePages: Page[] = Object.values(resources).map((r) => ({
  path: `/resources/${r.slug}`,
  title: r.metaTitle.de.replace(/ \| GastroPos$/, ""),
  description: r.metaDescription.de,
  priority: r.slug === "blog" ? "0.8" : "0.7",
}));
const articlePages: Page[] = articles.map((a) => ({
  path: `/resources/blog/${a.slug}`,
  title: a.title.de,
  description: a.description.de,
  priority: "0.7",
  lastmod: a.updated,
}));
const legalPages: Page[] = ["impressum", "privacy", "terms", "cookies"].map((s) => ({
  path: `/legal/${s}`,
  title: s,
  description: "",
  priority: "0.2",
}));

const all = [
  ...staticPages,
  ...productPages,
  ...industryPages,
  ...resourcePages,
  ...articlePages,
  ...legalPages,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (p) =>
      `  <url><loc>${SITE}${p.path === "/" ? "/" : p.path}</loc><lastmod>${p.lastmod ?? today}</lastmod><priority>${p.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync("public/sitemap.xml", sitemap);

const list = (pages: Page[]) =>
  pages.map((p) => `- [${p.title}](${SITE}${p.path}): ${p.description}`).join("\n");

const llms = `# GastroPos

> GastroPos is a cloud point-of-sale system (Kassensystem) for restaurants, cafés, takeaways and delivery businesses in Germany and Austria, made by OrdersTracker UG (haftungsbeschränkt), Essen, Germany (formerly sold as OrdersTracker). It combines a till for counter and table service, a waiter app, a kitchen display, QR-code ordering at the table, an own webshop for delivery and pickup, a GoBD-compliant cash book, Z-reports, DATEV export and the fiskaly cloud TSE. The website is in German (primary) and English.

Key facts:
- Plans: Klein 39 €, Standard 59 €, Premium 79 € per month; they differ in the number of line items per month (1,500 / 3,000 / unlimited).
- TSE: fiskaly cloud TSE, a separate add-on for 15 € per month; not included in the plans. Austria: RKSV supported.
- Devices: Android and iOS phones and tablets, web, Windows; Sunmi and iMin devices with built-in printer and customer display. ESC/POS printers via Wi-Fi, LAN, Bluetooth, USB. Card terminals via ZVT, SumUp, Zettle.
- Accounting: DATEV booking batch (EXTF, SKR03/SKR04/SKR07) on demand, GoBD archive, DSFinV-K export via fiskaly, Z-reports emailed to the tax advisor, accountant login.
- AI: menu import from photo or PDF, voice ordering at the table, in-app assistant for setup (tables, printers, payment types).
- Not included: recipe-based inventory, multi-location management, customer accounts in the webshop, in-app payment for QR orders.
- Contact: info@gastropos.ai, +49 201 759 346 94.

## Products
${list(productPages)}

## Pricing and company
${list(staticPages)}

## Industries
${list(industryPages)}

## Guides and help
${list(resourcePages)}

## Blog articles
${list(articlePages)}

## Optional
- [Full text of all product pages, guides and articles](${SITE}/llms-full.txt)
`;
writeFileSync("public/llms.txt", llms);

const sections = (
  s: { heading: { de: string }; body: { de: string }; bullets?: { de: string[] } }[],
) =>
  s
    .map(
      (x) =>
        `### ${x.heading.de}\n\n${x.body.de}${x.bullets?.de.length ? "\n\n" + x.bullets.de.map((b) => `- ${b}`).join("\n") : ""}`,
    )
    .join("\n\n");
const faq = (f: { q: { de: string }; a: { de: string } }[]) =>
  f.length
    ? "\n\n### Häufige Fragen\n\n" + f.map((x) => `**${x.q.de}**\n${x.a.de}`).join("\n\n")
    : "";

const full = [
  llms.split("\n## Products")[0],
  "\n# Produkte\n",
  ...Object.values(products).map(
    (p) =>
      `## ${p.title.de}\n\nURL: ${SITE}/product/${p.slug}\n\n${p.lede.de}\n\nFunktionen:\n${p.features.de.map((f) => `- ${f}`).join("\n")}\n\n${sections(p.sections)}${faq(p.faq)}\n`,
  ),
  "\n# Ratgeber\n",
  ...Object.values(resources)
    .filter((r) => r.sections.length)
    .map(
      (r) =>
        `## ${r.title.de}\n\nURL: ${SITE}/resources/${r.slug}\n\n${r.lede.de}\n\n${sections(r.sections)}${faq(r.faq)}\n`,
    ),
  "\n# Blog\n",
  ...articles.map(
    (a) =>
      `## ${a.title.de}\n\nURL: ${SITE}/resources/blog/${a.slug} (Stand: ${a.updated})\n\n${a.description.de}\n\nDas Wichtigste in Kürze:\n${a.takeaways.de.map((t) => `- ${t}`).join("\n")}\n\n${a.body
        .map((b) =>
          b.type === "ul"
            ? b.items.de.map((i) => `- ${i}`).join("\n")
            : b.type === "h2"
              ? `### ${b.text.de}`
              : b.text.de,
        )
        .join("\n\n")}${faq(a.faq)}\n`,
  ),
].join("\n");
writeFileSync("public/llms-full.txt", full);

console.log(`SEO files written: ${all.length} URLs in sitemap, llms.txt, llms-full.txt`);
