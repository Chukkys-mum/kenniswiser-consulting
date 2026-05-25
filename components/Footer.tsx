'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-dark to-primary-900/50 border-t border-primary-700/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Kennis Wiser</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strategic advisory for growth capital. Partners to PE funds, VCs, and operating companies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-accent transition-colors text-sm">Due Diligence</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-accent transition-colors text-sm">Fund Strategy</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-accent transition-colors text-sm">Operational Excellence</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-accent transition-colors text-sm">M&A Advisory</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold text-white mb-4">Sectors</h4>
            <ul className="space-y-2">
              <li><Link href="#sectors" className="text-gray-400 hover:text-accent transition-colors text-sm">Technology</Link></li>
              <li><Link href="#sectors" className="text-gray-400 hover:text-accent transition-colors text-sm">Real Estate</Link></li>
              <li><Link href="#sectors" className="text-gray-400 hover:text-accent transition-colors text-sm">Infrastructure</Link></li>
              <li><Link href="#sectors" className="text-gray-400 hover:text-accent transition-colors text-sm">Financial Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:dean.bryan@kenniscapital.com" className="text-gray-400 hover:text-accent transition-colors text-sm">Email</a></li>
              <li><a href="tel:+441234567890" className="text-gray-400 hover:text-accent transition-colors text-sm">Phone</a></li>
              <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors text-sm">LinkedIn</Link></li>
              <li className="text-gray-500 text-sm">London, UK</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © {currentYear} Kennis Wiser Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/" className="text-gray-500 hover:text-accent transition-colors text-sm">Privacy Policy</Link>
              <Link href="/" className="text-gray-500 hover:text-accent transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
