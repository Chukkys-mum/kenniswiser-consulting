'use client';

export default function Sectors() {
  const sectors = [
    {
      name: 'Banking & Financial Services',
      description: 'Enterprise transformation at ING and BNP Paribas. Fund structuring, wealth, and regulated-business operating models.',
    },
    {
      name: 'Telecoms & Media',
      description: 'Agile transformation at Vodafone. Scaling delivery and ways of working across large, distributed engineering organisations.',
    },
    {
      name: 'Energy & Utilities',
      description: 'Enterprise agile coaching at BP. Distributed energy and carbon-platform builds across the Kennis portfolio.',
    },
    {
      name: 'Real Estate & Housing',
      description: 'Structured a real-asset income fund and the operating company that delivers affordable, resilient housing at scale.',
    },
    {
      name: 'Technology & Platforms',
      description: 'Built the Septimius multi-vertical platform on Kennis OS — fund, property, energy, and AI products in one ecosystem.',
    },
    {
      name: 'Public & Social Impact',
      description: 'Strategic board advisory in the charity sector. Transformation for not-for-profits and public-sector organisations.',
    },
  ];

  return (
    <section id="sectors" className="section">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Industries</p>
          <h2 className="section-title">Where We&apos;ve Done the Work</h2>
          <p className="section-subtitle">
            Real industry experience — from enterprise transformation at global banks, telcos, and energy majors, to building a fund and technology group of our own.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-gradient-to-br from-accent/5 to-primary-700/10 border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-accent">
                {sector.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
