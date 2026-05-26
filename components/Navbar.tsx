'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary-900/95 to-dark/95 backdrop-blur-md border-b border-primary-700/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo — uses the official Kennis Wiser Consulting brand mark (white variant
            from Marketing/Logo/KENNIS WISER CONSULTING/Png/LOGO-04.png) for dark navbar. */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logos/kwc-logo-white.png"
            alt="Kennis Wiser Consulting"
            width={40}
            height={40}
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="hidden sm:block font-bold text-lg text-white">Kennis Wiser Consulting</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#sectors" className="text-gray-300 hover:text-white transition-colors">
            Sectors
          </Link>
          <Link href="#expertise" className="text-gray-300 hover:text-white transition-colors">
            Expertise
          </Link>
          <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:inline-flex btn-secondary">
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-800/50 border-t border-primary-700/30 px-6 py-4 space-y-4">
          <Link href="#services" className="block text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#sectors" className="block text-gray-300 hover:text-white transition-colors">
            Sectors
          </Link>
          <Link href="#expertise" className="block text-gray-300 hover:text-white transition-colors">
            Expertise
          </Link>
          <Link href="/#contact" className="block text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
          <button className="w-full btn-secondary justify-center">
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}
