'use client';

/**
 * Cookie consent banner — privacy-first, opt-in for non-essential cookies.
 *
 * Inspired by Murusha's approach (cookie-policy doc + opt-in analytics):
 *   - "Strictly necessary" is on, no opt-out (covers consent storage + theme preference)
 *   - Analytics is OFF until the visitor opts in
 *   - Marketing/third-party is OFF (this site doesn't ship any)
 *
 * Storage: localStorage `kw-cookie-consent` = JSON
 *   { necessary: true, analytics: bool, marketing: bool, timestamp: ISO, version: 1 }
 *
 * Trigger states:
 *   - First visit (no consent stored)  → banner shown
 *   - Visitor saved a choice           → banner hidden
 *   - Visitor reopens via the          → manage dialog shown
 *     "Cookie preferences" button
 *     (or the global helper kw.openCookieSettings())
 *
 * No analytics SDK is wired today. When one is added (e.g. Plausible,
 * Umami, GA4), gate its `<Script>` mount on `getConsent().analytics === true`
 * and listen for the `kw:consent-changed` event for live toggle.
 */

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'kw-cookie-consent';
const CONSENT_VERSION = 1;

type Categories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = Categories & {
  timestamp: string;
  version: number;
};

function readConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(categories: Categories) {
  const payload: StoredConsent = {
    ...categories,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    window.dispatchEvent(
      new CustomEvent('kw:consent-changed', { detail: payload })
    );
  } catch {
    /* swallow — quota / privacy mode */
  }
}

// Public helper so any CTA can reopen the manage dialog.
declare global {
  interface Window {
    kw?: {
      openCookieSettings?: () => void;
    };
  }
}

export default function CookieConsent() {
  // `null` = haven't decided what to render yet (avoid hydration flash)
  // `'hidden'` = no banner needed
  // `'banner'` = first-visit compact banner
  // `'manage'` = expanded preferences dialog
  const [view, setView] = useState<null | 'hidden' | 'banner' | 'manage'>(null);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setView('hidden');
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      setView('banner');
    }
    // Expose the reopen helper globally for the CookiePreferencesButton
    if (typeof window !== 'undefined') {
      window.kw = window.kw ?? {};
      window.kw.openCookieSettings = () => {
        const e = readConsent();
        setAnalytics(e?.analytics ?? false);
        setMarketing(e?.marketing ?? false);
        setView('manage');
      };
    }
  }, []);

  const acceptAll = useCallback(() => {
    writeConsent({ necessary: true, analytics: true, marketing: true });
    setAnalytics(true);
    setMarketing(true);
    setView('hidden');
  }, []);

  const rejectOptional = useCallback(() => {
    writeConsent({ necessary: true, analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setView('hidden');
  }, []);

  const saveChoices = useCallback(() => {
    writeConsent({ necessary: true, analytics, marketing });
    setView('hidden');
  }, [analytics, marketing]);

  if (view === null || view === 'hidden') return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal={view === 'manage'}
      className="fixed bottom-4 left-4 right-4 z-[10000] md:left-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-2xl border border-white/15 bg-primary-900/98 backdrop-blur-xl shadow-2xl p-5 md:p-6">
        {view === 'banner' && (
          <>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
              Cookies
            </p>
            <h3 className="text-base font-semibold text-white mb-2">
              Privacy-first by default
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              We use a single consent cookie to remember your choice plus your
              theme preference — both strictly necessary. Analytics is off
              until you opt in. No advertising trackers, ever. See our{' '}
              <a
                href="/legal/cookie-policy"
                className="text-accent hover:underline"
              >
                Cookie Policy
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold transition-colors"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="flex-1 px-4 py-2.5 rounded-lg border border-white/15 hover:border-white/30 text-white text-sm font-semibold transition-colors"
              >
                Reject optional
              </button>
            </div>
            <button
              type="button"
              onClick={() => setView('manage')}
              className="mt-3 text-xs text-gray-400 hover:text-white underline-offset-2 hover:underline"
            >
              Manage preferences
            </button>
          </>
        )}

        {view === 'manage' && (
          <>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-1">
                  Cookies
                </p>
                <h3 className="text-base font-semibold text-white">
                  Manage preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setView(readConsent() ? 'hidden' : 'banner')}
                className="text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1">
                    Strictly necessary
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Remembers your consent choice and theme. The site
                    won&apos;t function without these.
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Always on
                </span>
              </div>

              <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10 cursor-pointer hover:border-accent/30 transition-colors">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 accent-accent w-4 h-4"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1">
                    Analytics
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Aggregated, anonymised page views so we know which
                    content matters. 90-day retention.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10 cursor-pointer hover:border-accent/30 transition-colors opacity-60">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  disabled
                  className="mt-1 accent-accent w-4 h-4"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1">
                    Marketing & third-party
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We don&apos;t set any. Disabled by design — this site has
                    no ad networks or tracking pixels.
                  </p>
                </div>
              </label>
            </div>

            <button
              type="button"
              onClick={saveChoices}
              className="w-full px-4 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold transition-colors"
            >
              Save preferences
            </button>
          </>
        )}
      </div>
    </div>
  );
}
