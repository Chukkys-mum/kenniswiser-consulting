'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Enterprise & Agile Transformation',
      description:
        'Transformation at scale — SAFe, LeSS, Nexus, Spotify, or bespoke. Led by people who ran it at BP, Vodafone, ING, and BNP Paribas.',
      icon: '🔄',
      href: '/services/transformation',
    },
    {
      title: 'Digital & Platform Engineering',
      description:
        'Platform and product engineering, cloud architecture, DevOps — by the team that built the Septimius ecosystem.',
      icon: '🛠️',
      href: '/services/digital-platform',
    },
    {
      title: 'Data, ML & AI',
      description:
        'Data foundations, machine learning, and applied AI — including production AI assistants and event-driven automation. AI-native, not bolted on.',
      icon: '🧠',
      href: '/services/data-ml-ai',
    },
    {
      title: 'Venture Building & Fund Structuring',
      description:
        'Standing up ventures, operating companies, and fund vehicles — from the team that structured a Jersey fund GP and its operating company.',
      icon: '🚀',
      href: '/services/venture-building',
    },
    {
      title: 'Operating Model & Ways of Working',
      description:
        'Operating-model and organisation design, Lean Six Sigma, performance management, and automation. The machinery that makes strategy executable.',
      icon: '⚙️',
      href: '/services/operating-model',
    },
    {
      title: 'Leadership & Coaching',
      description:
        'Executive and agile-leadership coaching, practitioner development, and inclusive-leadership programmes that make the change stick.',
      icon: '🎯',
      href: '/services/leadership-coaching',
    },
  ];

  return (
    <section id="services" className="section bg-gradient-to-b from-transparent to-primary-900/30">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Services</p>
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Transformation, technology, and venture building — grounded in work we have actually shipped, including building our own group.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group p-8 rounded-xl bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-primary-700/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 no-underline block"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
