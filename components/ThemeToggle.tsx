'use client';

import { useState, useEffect } from 'react';

/**
 * Theme toggle — mirrors the Kennis Capital pattern.
 * - Storage key: `kw-theme` ('dark' | 'light')
 * - Default: dark
 * - Applied via `<html data-theme="dark|light">`
 * - Listened to in globals.css via the `:root` / `[data-theme="dark"]` rules
 *
 * Inline boot script in layout.tsx avoids the flash-of-wrong-theme on first paint.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (typeof window !== 'undefined' && localStorage.getItem('kw-theme')) as
      | 'dark'
      | 'light'
      | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('kw-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  }

  // Render a stable placeholder until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md border border-white/10 text-white/40"
        aria-label="Toggle theme"
        suppressHydrationWarning
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md border border-white/10 hover:border-white/25 text-white/40 hover:text-white/80 transition-all duration-200"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        // Sun icon — shown in dark mode (click to go light)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        // Moon icon — shown in light mode (click to go dark)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
