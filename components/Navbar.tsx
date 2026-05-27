'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

interface NavLink {
  label: string;
  href: string;
  desc?: string;
}

interface NavGroup {
  label: string;
  links: NavLink[];
}

// About dropdown — mirrors Kennis Capital's "About" mega-menu but with
// consulting-firm pages.
const aboutGroup: NavGroup = {
  label: 'About',
  links: [
    { label: 'Who We Are', href: '/about/who-we-are', desc: 'Mission, philosophy, and what we stand for' },
    { label: 'Firm Overview', href: '/about/firm-overview', desc: 'Structure, regulation, and how we engage' },
    { label: 'Our Approach', href: '/about/our-approach', desc: 'How we work alongside our clients' },
  ],
};

const simpleLinks = [
  { label: 'Strategy', href: '/strategy' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAboutEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setAboutOpen(true);
  };
  const handleAboutLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary-900/95 backdrop-blur-md border-b border-primary-700/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo — gradient K mark (same brand mark as Kennis Capital uses) */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logos/k-mark-gradient.png"
            alt="Kennis Wiser Consulting"
            width={36}
            height={36}
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="hidden sm:block font-bold text-lg text-white tracking-wide">
            Kennis Wiser Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* About — dropdown */}
          <div
            ref={aboutRef}
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button
              className={`px-4 py-2 text-[13px] font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                aboutOpen ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              {aboutGroup.label}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {/* Dropdown */}
            <div
              className={`absolute left-0 top-full mt-2 w-80 rounded-lg shadow-2xl border border-white/10 bg-primary-900/95 backdrop-blur-xl transition-all duration-200 ${
                aboutOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="p-2">
                {aboutGroup.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-4 py-3 hover:bg-white/5 transition-colors no-underline"
                  >
                    <span className="block text-sm font-medium text-white">{link.label}</span>
                    {link.desc && (
                      <span className="block text-xs text-gray-400 mt-0.5">{link.desc}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Simple links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[13px] font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: lang + theme + CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn-secondary"
          >
            Let&apos;s Talk
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-700/30 bg-primary-900/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            {/* About — collapsible on mobile */}
            <div className="border-b border-white/[0.04]">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-3 text-[15px] font-semibold text-white"
              >
                {aboutGroup.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="pb-3 space-y-1">
                  {aboutGroup.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-[14px] text-gray-300 hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[15px] font-semibold text-gray-300 hover:text-white border-b border-white/[0.04]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center btn-secondary"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
