'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Three-state theme toggle: dark → light → system → dark...
 *
 * - `dark`   = always dark
 * - `light`  = always light
 * - `system` = follow the OS preference via `prefers-color-scheme`
 *
 * Storage key: `kw-theme` (one of 'dark' | 'light' | 'system'). Default 'dark'.
 *
 * The resolved theme is written as `data-theme="dark|light"` on `<html>`.
 * When `system` is selected, we also subscribe to OS-level changes so the
 * site flips live without a reload.
 *
 * The inline boot script in layout.tsx mirrors this resolution so there's
 * no flash of wrong theme on first paint.
 */

type ThemeChoice = 'dark' | 'light' | 'system';

function resolveSystem(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyResolved(choice: ThemeChoice) {
  const resolved = choice === 'system' ? resolveSystem() : choice;
  document.documentElement.setAttribute('data-theme', resolved);
  document.documentElement.setAttribute('data-theme-choice', choice);
}

export default function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>('dark');
  const [mounted, setMounted] = useState(false);

  // Initial load
  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem('kw-theme') as ThemeChoice | null) ?? 'dark';
    setChoice(saved);
    applyResolved(saved);
  }, []);

  // When user picks `system`, follow OS changes live.
  useEffect(() => {
    if (choice !== 'system' || typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyResolved('system');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [choice]);

  const cycle = useCallback(() => {
    const next: ThemeChoice =
      choice === 'dark' ? 'light' : choice === 'light' ? 'system' : 'dark';
    setChoice(next);
    localStorage.setItem('kw-theme', next);
    applyResolved(next);
  }, [choice]);

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

  const label =
    choice === 'dark'
      ? 'Dark — click for light'
      : choice === 'light'
        ? 'Light — click for system'
        : 'System — click for dark';

  return (
    <button
      onClick={cycle}
      className="p-2 rounded-md border border-white/10 hover:border-white/25 text-white/40 hover:text-white/80 transition-all duration-200"
      aria-label={label}
      title={label}
    >
      {choice === 'dark' && (
        // Sun (click to go light)
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
      )}
      {choice === 'light' && (
        // Moon (click to go system)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      {choice === 'system' && (
        // Monitor (click to go back to dark)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )}
    </button>
  );
}
