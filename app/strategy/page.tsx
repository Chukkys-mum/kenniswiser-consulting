import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Strategy & Services | Kennis Wiser Consulting',
  description:
    'Services across due diligence, fund positioning, operational excellence, market analysis, exit strategy, and regulatory advisory. Sectors include technology, real estate, infrastructure, financial services, and healthcare.',
};

const services = [
  {
    id: 'due-diligence',
    title: 'Due Diligence & Advisory',
    description:
      'Comprehensive commercial, operational, and financial diligence for PE and VC investors. We stress-test theses against sector realities, identify operational red flags before close, and produce IC-ready output.',
  },
  {
    id: 'fund-positioning',
    title: 'Fund Strategy & Positioning',
    description:
      'Fund mandate design, sector positioning, LP narrative, and competitive differentiation. From first-time funds raising their debut vehicle to established GPs evolving their thesis between vintages.',
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence',
    description:
      'Portfolio company unit-economics diagnostic, operational scaling, technology infrastructure decisions. Hands-on engagements — we build the model, run the data review, and stay in the operating cadence.',
  },
  {
    id: 'market-analysis',
    title: 'Market & Competitive Analysis',
    description:
      'Market-entry feasibility, competitive landscape mapping, customer-segment economics. Evidence-based, primary-research-led, calibrated to the decision the client actually needs to make.',
  },
  {
    id: 'ma',
    title: 'Exit Strategy & M&A',
    description:
      'Exit readiness, vendor-side commercial diligence, value-creation evidence packs, strategic-buyer mapping, and post-merger integration planning. We work alongside bankers and lawyers, not in competition with them.',
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Governance',
    description:
      'Regulatory-environment assessment for new market entry, governance-framework design for first-time funds, and compliance-posture review for boards preparing for institutional capital.',
  },
];

const sectors = [
  {
    id: 'sectors-technology',
    title: 'Technology & Software',
    description:
      'B2B SaaS, vertical AI, developer infrastructure, data platforms. Both pure-play software and tech-enabled services.',
  },
  {
    id: 'sectors-real-estate',
    title: 'Real Estate & PropTech',
    description:
      'Residential, build-to-rent, affordable housing, commercial. Property-management technology and PropTech platforms.',
  },
  {
    id: 'sectors-infrastructure',
    title: 'Infrastructure & Energy',
    description:
      'Distributed energy, decarbonisation infrastructure, carbon markets, digital infrastructure (data centres, fibre, towers).',
  },
  {
    id: 'sectors-financial-services',
    title: 'Financial Services',
    description:
      'Wealth-tech, embedded finance, regtech, insurance, payments. Both growth-stage operators and the funds that back them.',
  },
  {
    id: 'sectors-healthcare',
    title: 'Healthcare & Life Sciences',
    description:
      'Healthcare services, digital health, healthtech platforms, life-sciences services. Tech-enabled clinical operations.',
  },
  {
    id: 'sectors-business-services',
    title: 'Business Services',
    description:
      'Tech-enabled B2B services, professional services platforms, outsourcing, and the M&A roll-up theses that consolidate them.',
  },
];

export default function StrategyPage() {
  return (
    <>
      <PageHero
        label="Strategy & Services"
        title="What We Do"
        subtitle="Six service lines across six sectors. Every engagement is partner-led, fixed-fee or retainer, and ends with a decision — not a deck."
      />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          How We Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors scroll-mt-24"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Sectors
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Where We Bring Depth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors scroll-mt-24"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a specific mandate in mind?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Every engagement starts with a short scoping conversation. No commitment,
            no theatre — we&apos;ll tell you honestly if we&apos;re the right firm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/contact" className="btn-primary">
              Start a Conversation
            </a>
            <a href="/about/our-approach" className="btn-secondary">
              See How We Work
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
