'use client';

export default function Expertise() {
  const expertise = [
    {
      area: 'Capital Markets',
      points: [
        'Fund structuring and positioning',
        'LP relations and syndication',
        'Portfolio construction strategy',
      ],
    },
    {
      area: 'Strategic Planning',
      points: [
        'Competitive landscape analysis',
        'Market entry strategies',
        'Growth roadmap development',
      ],
    },
    {
      area: 'Operations & Scaling',
      points: [
        'Unit economics optimization',
        'Operational scaling playbooks',
        'Technology infrastructure planning',
      ],
    },
    {
      area: 'M&A & Value Creation',
      points: [
        'Deal sourcing and evaluation',
        'Value creation planning',
        'Exit strategy and execution',
      ],
    },
  ];

  return (
    <section id="expertise" className="section bg-gradient-to-b from-transparent to-primary-900/30">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Expertise</p>
          <h2 className="section-title">Proven Capabilities</h2>
          <p className="section-subtitle">
            Grounded in real transaction experience and operational leadership across growth capital.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((exp, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">{exp.area}</h3>
              <ul className="space-y-3">
                {exp.points.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-700/30">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">$2B+</div>
            <p className="text-sm text-gray-400">Capital Managed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <p className="text-sm text-gray-400">Sectors Covered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-sm text-gray-400">Completed Transactions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">20+</div>
            <p className="text-sm text-gray-400">Years Combined Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
