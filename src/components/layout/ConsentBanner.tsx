import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";

export type Consent = "all" | "necessary";

const STORAGE_KEY = "ot-consent";
const EVENT = "ot-consent-change";

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

/** Returns the stored consent and updates when the visitor changes it. */
export function useConsent(): Consent | null {
  const [consent, setConsent] = useState<Consent | null>(null);
  useEffect(() => {
    setConsent(readConsent());
    const onChange = () => setConsent(readConsent());
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);
  return consent;
}

export function saveConsent(value: Consent | null) {
  try {
    if (value) window.localStorage.setItem(STORAGE_KEY, value);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
  window.dispatchEvent(new Event(EVENT));
}

export function ConsentBanner() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const de = lang === "de";

  useEffect(() => {
    setOpen(readConsent() === null);
    const onChange = () => setOpen(readConsent() === null);
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  if (!open) return null;

  const choose = (value: Consent) => {
    saveConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={de ? "Datenschutz-Einstellungen" : "Privacy settings"}
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-border bg-background p-5 shadow-elegant md:p-6"
    >
      <p className="text-sm leading-relaxed text-foreground/85">
        {de
          ? "Wir möchten Microsoft Clarity zur Analyse der Bedienung und den Crisp-Live-Chat nutzen. Beides setzen wir nur mit Ihrer Einwilligung ein; Sie können sie jederzeit über den Link „Datenschutz-Einstellungen“ im Seitenfuß widerrufen. "
          : "We would like to use Microsoft Clarity to analyse how the site is used and the Crisp live chat. We only use them with your consent, which you can withdraw at any time via “Privacy settings” in the footer. "}
        <Link
          to="/legal/$slug"
          params={{ slug: "privacy" }}
          className="font-semibold text-accent underline"
        >
          {de ? "Datenschutzerklärung" : "Privacy policy"}
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
        >
          {de ? "Nur notwendige" : "Necessary only"}
        </button>
        <button
          type="button"
          onClick={() => choose("all")}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
        >
          {de ? "Alle akzeptieren" : "Accept all"}
        </button>
      </div>
    </div>
  );
}
