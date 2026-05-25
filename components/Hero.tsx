'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Tag */}
        <div className="inline-block">
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">Strategic Advisory</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Strategic Counsel for <span className="text-gradient">Growth Capital.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We partner with PE funds, VC funds, and operating companies to navigate complex challenges in technology, real estate, and infrastructure investments.
        </p>

        {/* Tagline */}
        <div className="pt-4">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">
            Strategy Over Noise.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="btn-primary">
            Explore Our Approach <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary">
            Schedule a Consultation
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
