import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Strategy & Services',
  description:
    'Six service lines across six sectors. Every engagement is partner-led, fixed-fee or retainer, and ends with a decision — not a deck.',
};

interface Tile {
  slug: string;
  title: string;
  description: string;
}

const services: Tile[] = [
  {
    slug: 'due-diligence',
    title: 'Due Diligence & Advisory',
    description:
      'Commercial, operational, and financial diligence for PE / VC investors. IC-ready output, primary-research evidence base.',
  },
  {
    slug: 'fund-positioning',
    title: 'Fund Strategy & Positioning',
    description:
      'Mandate design, sector positioning, LP narrative, competitive differentiation. First-time funds and established GPs alike.',
  },
  {
    slug: 'operational-excellence',
    title: 'Operational Excellence',
    description:
      'Unit-economics diagnostic, scaling, technology decisions. Hands-on, in the operating cadence — not just diagnostic.',
  },
  {
    slug: 'market-analysis',
    title: 'Market & Competitive Analysis',
    description:
      'Market-entry feasibility, competitive landscape, customer-segment economics. Bottom-up, primary-research-led, decision-calibrated.',
  },
  {
    slug: 'ma-advisory',
    title: 'Exit Strategy & M&A',
    description:
      'Exit readiness, vendor commercial diligence, strategic-buyer mapping, 100-day integration. Upstream of bankers and counsel.',
  },
  {
    slug: 'regulatory',
    title: 'Regulatory & Governance',
    description:
      'Perimeter mapping, governance design, institutional-capital readiness. Translates legal advice into operating decisions.',
  },
];

const sectors: Tile[] = [
  {
    slug: 'technology',
    title: 'Technology & Software',
    description:
      'B2B SaaS, vertical AI, developer infrastructure, data platforms. Pure-play software + tech-enabled services.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & PropTech',
    description:
      'Residential, build-to-rent, affordable housing, commercial. Property-management tech and PropTech platforms.',
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure & Energy',
    description:
      'Distributed energy, decarbonisation infrastructure, carbon markets, data centres, fibre, towers.',
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    description:
      'Wealth-tech, embedded finance, regtech, insurance, payments. Growth-stage operators + the funds that back them.',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description:
      'Healthcare services, digital health, healthtech platforms, life-sciences services. Tech-enabled clinical operations.',
  },
  {
    slug: 'business-services',
    title: 'Business Services',
    description:
      'Tech-enabled B2B services, professional services platforms, outsourcing, and M&A roll-up theses that consolidate them.',
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
            <Link
              key={s.slug}
              href={`/strategy/${s.slug}`}
              className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors no-underline"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-500 group-hover:text-accent transition-colors shrink-0 mt-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-400 leading-relaxed">{s.description}</p>
            </Link>
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
            <Link
              key={s.slug}
              href={`/sectors/${s.slug}`}
              className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors no-underline"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-500 group-hover:text-accent transition-colors shrink-0 mt-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">{s.description}</p>
            </Link>
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
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
            <Link href="/about/our-approach" className="btn-secondary">
              See How We Work
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
