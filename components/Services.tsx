'use client';

export default function Services() {
  const services = [
    {
      title: 'Due Diligence & Advisory',
      description: 'Comprehensive analysis of investment opportunities, market dynamics, and operational readiness across sectors.',
      icon: '📊',
    },
    {
      title: 'Fund Strategy & Positioning',
      description: 'Strategic guidance on fund positioning, portfolio construction, and capital allocation strategies.',
      icon: '🎯',
    },
    {
      title: 'Operational Excellence',
      description: 'Support for portfolio companies on scaling, efficiency, and value creation initiatives.',
      icon: '⚙️',
    },
    {
      title: 'Market & Competitive Analysis',
      description: 'Deep market intelligence, competitive positioning, and emerging opportunity identification.',
      icon: '🔍',
    },
    {
      title: 'Exit Strategy & Syndication',
      description: 'Guidance on exit planning, buyer identification, and deal syndication across networks.',
      icon: '🤝',
    },
    {
      title: 'Regulatory & Governance',
      description: 'Navigation of regulatory landscapes and governance frameworks across industries.',
      icon: '⚖️',
    },
  ];

  return (
    <section id="services" className="section bg-gradient-to-b from-transparent to-primary-900/30">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Services</p>
          <h2 className="section-title">How We Add Value</h2>
          <p className="section-subtitle">
            We bring strategic depth and operational insight to every engagement, translating complexity into actionable advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-primary-700/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
