'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Language / direction toggle.
 *
 * Three options today:
 *   - `en` — English, LTR (default)
 *   - `ar` — Arabic, RTL
 *   - `he` — Hebrew, RTL
 *
 * Storage: `kw-lang` (one of 'en' | 'ar' | 'he').
 * Applied to `<html lang="…" dir="ltr|rtl">` so any `rtl:` Tailwind variant
 * or CSS logical-property usage flips automatically.
 *
 * Content translations are content work and arrive separately — this toggle
 * provides the infrastructure. When a translation isn't available, the page
 * still renders in English with the layout direction flipped (useful for QA
 * of how the layout behaves under RTL).
 *
 * Boot script in `app/layout.tsx` mirrors this logic so there's no flicker.
 */

type Lang = 'en' | 'ar' | 'he';

const LANG_LABELS: Record<Lang, { label: string; dir: 'ltr' | 'rtl'; flag: string }> =
  {
    en: { label: 'English', dir: 'ltr', flag: 'EN' },
    ar: { label: 'العربية', dir: 'rtl', flag: 'AR' },
    he: { label: 'עברית', dir: 'rtl', flag: 'HE' },
  };

function applyLang(lang: Lang) {
  const cfg = LANG_LABELS[lang];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', cfg.dir);
  document.documentElement.setAttribute('data-lang', lang);
}

export default function LangToggle() {
  const [lang, setLang] = useState<Lang>('en');
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem('kw-lang') as Lang | null) ?? 'en';
    setLang(saved);
    applyLang(saved);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  function pick(next: Lang) {
    setLang(next);
    setOpen(false);
    localStorage.setItem('kw-lang', next);
    applyLang(next);
  }

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md border border-white/10 text-white/40 text-xs font-semibold"
        aria-label="Language"
        suppressHydrationWarning
      >
        EN
      </button>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-2.5 py-1.5 rounded-md border border-white/10 hover:border-white/25 text-white/55 hover:text-white/85 text-xs font-semibold tracking-wider transition-all"
        aria-label={`Language: ${LANG_LABELS[lang].label}`}
        title={`Language: ${LANG_LABELS[lang].label}`}
      >
        {LANG_LABELS[lang].flag}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-lg shadow-2xl border border-white/10 bg-primary-900/95 backdrop-blur-xl py-1 z-50">
          {(Object.entries(LANG_LABELS) as [Lang, (typeof LANG_LABELS)[Lang]][]).map(
            ([key, cfg]) => (
              <button
                key={key}
                onClick={() => pick(key)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                  lang === key
                    ? 'text-white bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                dir={cfg.dir}
              >
                <span className="font-medium">{cfg.label}</span>
                <span className="text-[10px] text-gray-500 tracking-widest">
                  {cfg.flag}
                </span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
