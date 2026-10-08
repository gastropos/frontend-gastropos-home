import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import Clarity from "@microsoft/clarity";
import { PageTransition } from "../components/layout/PageTransition";
import { ConsentBanner, useConsent } from "../components/layout/ConsentBanner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider, useI18n } from "../lib/i18n/context";
import { SITE_URL, SITE_NAME, ORGANIZATION_ID, absoluteUrl, OG_IMAGE } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again, or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-accent"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GastroPos — Cloud-Kassensystem für Gastronomie" },
      {
        name: "description",
        content:
          "GastroPos ist das Cloud-Kassensystem für Restaurants, Cafés und Lieferdienste: Tischservice, Thekenkasse, Küchenmonitor, QR-Bestellung, Webshop, fiskaly Cloud-TSE, Z-Bericht und DATEV-Export.",
      },
      { name: "author", content: "OrdersTracker UG (haftungsbeschränkt)" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "GastroPos — Cloud-Kassensystem für Gastronomie" },
      {
        property: "og:description",
        content:
          "GastroPos ist das Cloud-Kassensystem für Restaurants, Cafés und Lieferdienste: Tischservice, Thekenkasse, Küchenmonitor, QR-Bestellung, Webshop, fiskaly Cloud-TSE, Z-Bericht und DATEV-Export.",
      },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#0F172A" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ],
    scripts: [
      {
        // Returning visitors skip the intro: hide it before the first paint.
        children:
          "try{if(sessionStorage.getItem('gastropos_intro_seen'))document.documentElement.classList.add('intro-seen')}catch(e){}",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": ORGANIZATION_ID,
              name: "OrdersTracker UG (haftungsbeschränkt)",
              alternateName: SITE_NAME,
              url: SITE_URL,
              logo: absoluteUrl("/favicon.svg"),
              email: "info@gastropos.ai",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Marktstr. 10",
                postalCode: "45355",
                addressLocality: "Essen",
                addressCountry: "DE",
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              inLanguage: ["de-DE", "en"],
              publisher: { "@id": ORGANIZATION_ID },
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${SITE_URL}/#software`,
              name: SITE_NAME,
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Point of Sale",
              operatingSystem: "Android, iOS, Windows, Web",
              description:
                "Cloud-Kassensystem für die Gastronomie mit Tischservice, Thekenkasse, Küchenmonitor, QR-Bestellung, Webshop, Kassenbuch, fiskaly Cloud-TSE und DATEV-Export.",
              publisher: { "@id": ORGANIZATION_ID },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "EUR",
                lowPrice: "39",
                highPrice: "79",
                offerCount: 3,
                url: absoluteUrl("/pricing"),
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/** Syncs <html lang> with the active i18n language after hydration. */
function HtmlLangSync() {
  const { lang } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

const CLARITY_PROJECT_ID = "xe2bznzbcr";

let trackersLoaded = false;

/** Loads Clarity and the Crisp chat only after the visitor consented; a withdrawal reloads the page to unload them. */
function ConsentedTrackers() {
  const consent = useConsent();
  useEffect(() => {
    if (consent !== "all") {
      if (trackersLoaded) window.location.reload();
      return;
    }
    if (trackersLoaded) return;
    trackersLoaded = true;
    Clarity.init(CLARITY_PROJECT_ID);
    const w = window as typeof window & { $crisp?: unknown[]; CRISP_WEBSITE_ID?: string };
    if (w.$crisp) return;
    w.$crisp = [];
    w.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }, [consent]);
  return null;
}

const CRISP_WEBSITE_ID = "a87c07a7-3e09-40f2-8fa1-6a875cac50a1";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <ConsentedTrackers />
        <ConsentBanner />
        <HtmlLangSync />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </I18nProvider>
    </QueryClientProvider>
  );
}
