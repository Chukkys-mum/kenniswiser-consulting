import Link from 'next/link';

const footerColumns = [
  {
    title: 'About',
    links: [
      { label: 'Who We Are', href: '/about/who-we-are' },
      { label: 'Firm Overview', href: '/about/firm-overview' },
      { label: 'Our Approach', href: '/about/our-approach' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: '/strategy' },
      { label: 'Due Diligence', href: '/strategy/due-diligence' },
      { label: 'Fund Positioning', href: '/strategy/fund-positioning' },
      { label: 'Operational Excellence', href: '/strategy/operational-excellence' },
      { label: 'M&A Advisory', href: '/strategy/ma-advisory' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Sectors',
    links: [
      { label: 'Technology', href: '/sectors/technology' },
      { label: 'Real Estate', href: '/sectors/real-estate' },
      { label: 'Infrastructure', href: '/sectors/infrastructure' },
      { label: 'Financial Services', href: '/sectors/financial-services' },
      { label: 'Healthcare', href: '/sectors/healthcare' },
      { label: 'Business Services', href: '/sectors/business-services' },
    ],
  },
];

const legalLinks = [
  { label: 'Terms of Use', href: '/legal/terms-of-use' },
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Cookie Policy', href: '/legal/cookie-policy' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-900 border-t border-white/[0.06]">
      {/* Top: brand + columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <img
                src="/logos/k-mark-gradient.png"
                alt="Kennis Wiser Consulting"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg text-white tracking-wide">
                Kennis Wiser Consulting
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Strategic counsel for growth capital. We partner with PE funds, VC funds,
              and operating companies to navigate complex challenges in technology, real
              estate, and infrastructure investments.
            </p>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mt-6">
              Strategy Over Noise.
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: legal strip (mirrors Kennis Capital's footer pattern) */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-accent">
              KORA
            </span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            © {year} Kennis Wiser Consulting Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
