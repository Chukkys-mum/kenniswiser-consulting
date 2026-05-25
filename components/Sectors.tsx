'use client';

export default function Sectors() {
  const sectors = [
    {
      name: 'Technology & Software',
      description: 'SaaS, enterprise solutions, fintech, and platform businesses scaling globally.',
    },
    {
      name: 'Real Estate & PropTech',
      description: 'Commercial real estate, residential development, and property technology innovations.',
    },
    {
      name: 'Infrastructure & Energy',
      description: 'Renewable energy, infrastructure assets, and sustainable utilities.',
    },
    {
      name: 'Financial Services',
      description: 'Fintech platforms, wealth management, and alternative investment vehicles.',
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'Healthtech, medical devices, and healthcare services.',
    },
    {
      name: 'Business Services',
      description: 'Staffing, consulting, and professional services platforms.',
    },
  ];

  return (
    <section id="sectors" className="section">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Sectors</p>
          <h2 className="section-title">Where We Create Impact</h2>
          <p className="section-subtitle">
            Deep expertise across growth capital destinations, from emerging technologies to foundational infrastructure.
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
