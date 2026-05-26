import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Firm Overview | Kennis Wiser Consulting',
  description:
    'Kennis Wiser Consulting — firm structure, governance, regulatory posture, and engagement model. The institutional context behind the work.',
};

const stats = [
  { label: 'Capital Advised', value: '$2B+' },
  { label: 'Sectors', value: '15+' },
  { label: 'Transactions', value: '50+' },
  { label: 'Years (Combined)', value: '20+' },
];

const pillars = [
  {
    title: 'Group Heritage',
    description:
      'Kennis Wiser Consulting is the advisory arm of the broader Kennis ecosystem, which spans capital allocation (Kennis Capital), platform technology (Kennis OS), and operating businesses across real estate, energy, and digital infrastructure. The advisory practice is operated as an independent entity to preserve client confidentiality and avoid conflicts of interest.',
  },
  {
    title: 'Governance',
    description:
      'Engagements run under a formal engagement letter with defined scope, deliverables, and exit triggers. Conflicts checks are performed before every mandate. Sensitive material is handled under NDA on dedicated infrastructure with audit trails. We do not invest alongside our advisory clients without explicit, written, prior consent.',
  },
  {
    title: 'Regulatory Posture',
    description:
      'We operate within the UK regulatory perimeter, with appropriate registrations for the markets we advise into. We are not a regulated investment adviser under FCA Part 4A — we provide commercial strategy and operational advisory only, and signpost clients to regulated counterparties for any work that requires it.',
  },
  {
    title: 'Engagement Models',
    description:
      'Three engagement shapes: (1) fixed-scope mandates with a defined deliverable, (2) embedded retainers where we operate as a part of the client team for a defined period, (3) advisory board / non-executive director seats for longer-horizon strategic counsel. Pricing is fixed-fee, retainer, or success-linked — agreed upfront, never time-and-materials.',
  },
];

export default function FirmOverviewPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Firm Overview"
        subtitle="The institutional context behind the work — heritage, governance, regulation, and the shapes our engagements take."
      />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          By the Numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {s.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Structure & Governance
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          The Institutional Frame
        </h2>
        <div className="space-y-10">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="text-2xl font-semibold text-white mb-4">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Practice Areas
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Where Our Bench is Deepest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Capital Markets</h3>
            <p className="text-gray-400 leading-relaxed">
              Fund structuring, LP relations, portfolio construction. Equity stories
              for capital raises. Investor reporting and IR positioning.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Strategic Planning</h3>
            <p className="text-gray-400 leading-relaxed">
              Competitive analysis, market-entry strategy, growth roadmap, geographic
              expansion. Tested against the operational realities our group runs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Operations & Scaling</h3>
            <p className="text-gray-400 leading-relaxed">
              Unit-economics diagnostic, operational scaling, technology infrastructure
              decisions. Hands-on, not just diagnostic.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">M&A & Value Creation</h3>
            <p className="text-gray-400 leading-relaxed">
              Deal sourcing, commercial due diligence, value-creation planning,
              post-merger integration, exit-strategy preparation.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See how we engage
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Read about our approach — how we scope, staff, and deliver work — or get in
            touch to discuss a specific mandate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/about/our-approach" className="btn-primary">
              Our Approach
            </a>
            <a href="/contact" className="btn-secondary">
              Start a Conversation
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
