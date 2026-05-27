'use client';

/**
 * Plausible Analytics with cookie-consent gating.
 *
 * Why Plausible:
 *   - No cookies, no fingerprinting, no PII.
 *   - GDPR/CCPA/PECR friendly out of the box.
 *   - Aligns with our cookie-banner promise ("aggregated, anonymised page views, 90-day retention").
 *
 * Consent contract:
 *   - The script is loaded ONLY when `localStorage.kw-cookie-consent.analytics === true`.
 *   - Listens for the `kw:consent-changed` CustomEvent (dispatched by `CookieConsent.tsx`)
 *     and hot-toggles the script on/off without a reload.
 *   - On mount it reads the current consent; on unmount it cleans up the script.
 *
 * Config:
 *   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — the data-domain attribute (defaults to the site host).
 *   - `NEXT_PUBLIC_PLAUSIBLE_SRC` — full script src (defaults to https://plausible.io/js/script.js).
 *     Set this if you self-host Plausible or use the EU instance.
 *
 * No-op until consent is granted, so it's safe to mount unconditionally in the layout.
 */

import { useEffect } from 'react';

const SCRIPT_ID = 'plausible-analytics';
const STORAGE_KEY = 'kw-cookie-consent';
const PLAUSIBLE_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js';
const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'kenniswiserconsulting.com';

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { analytics?: boolean };
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

function loadScript() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(SCRIPT_ID)) return;
  const s = document.createElement('script');
  s.id = SCRIPT_ID;
  s.defer = true;
  s.src = PLAUSIBLE_SRC;
  s.setAttribute('data-domain', PLAUSIBLE_DOMAIN);
  document.head.appendChild(s);
}

function unloadScript() {
  if (typeof document === 'undefined') return;
  document.getElementById(SCRIPT_ID)?.remove();
}

export default function PlausibleAnalytics() {
  useEffect(() => {
    // Initial: load if consent already granted from a previous visit
    if (hasAnalyticsConsent()) loadScript();

    // Hot-toggle on user choice change
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics?: boolean }>).detail;
      if (detail?.analytics === true) loadScript();
      else unloadScript();
    };
    window.addEventListener('kw:consent-changed', handler);
    return () => window.removeEventListener('kw:consent-changed', handler);
  }, []);

  // Renders nothing visible — script is injected into <head>.
  return null;
}
