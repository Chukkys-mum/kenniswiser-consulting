'use client';

export default function Expertise() {
  const expertise = [
    {
      area: 'Transformation at scale',
      points: [
        'Enterprise agile transformation (BP, Vodafone, ING, BNP Paribas)',
        'Scaling frameworks: SAFe, LeSS, Nexus, Spotify, bespoke',
        'Operating-model and ways-of-working redesign',
      ],
    },
    {
      area: 'Platform & engineering',
      points: [
        'Built the Septimius ecosystem: 24 modules, 600+ services',
        'Cloud architecture, DevOps, and delivery machinery',
        'Greenfield product and legacy replatforming',
      ],
    },
    {
      area: 'Data, ML & AI',
      points: [
        'AI-native platforms — assistant layer + automation backbone in production',
        'Data foundations, machine learning, applied AI with evaluation harnesses',
        'Guardrails, monitoring, and human-in-the-loop design',
      ],
    },
    {
      area: 'Venture & fund building',
      points: [
        'Structured a Jersey fund GP and its debut real-asset fund',
        'Stood up the operating company that delivers the assets',
        'Investor-readiness, governance, and reporting from the inside',
      ],
    },
  ];

  // Defensible proof points — drawn from the platform we actually built,
  // not unverifiable AUM / transaction claims.
  const stats = [
    { value: '24', label: 'Platform modules built' },
    { value: '600+', label: 'Services shipped' },
    { value: '4', label: 'Group entities structured' },
    { value: 'AI-native', label: 'From the schema up' },
  ];

  return (
    <section id="expertise" className="section bg-gradient-to-b from-transparent to-primary-900/30">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">Expertise</p>
          <h2 className="section-title">Proven Capabilities</h2>
          <p className="section-subtitle">
            We built our own vertically-integrated group — fund, operating company, and AI-native platform. That is the proof behind the advice.
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

        {/* Stats Section — defensible proof points from the platform we built */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-700/30">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{s.value}</div>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
