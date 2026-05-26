import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Who We Are | Kennis Wiser Consulting',
  description:
    'Kennis Wiser Consulting is the advisory arm of the Kennis ecosystem — strategic counsel for PE funds, VC funds, and operating companies. We bring institutional rigour, sector specialism, and the willingness to disagree with our clients.',
};

const principles = [
  {
    name: 'Judgement over Frameworks',
    description:
      'Frameworks are tools, not deliverables. We bring evidence, sector context, and the institutional discipline to translate them into a defensible decision. The work shows up as a recommendation, not a deck.',
  },
  {
    name: 'Conviction in Disagreement',
    description:
      'We tell clients what they need to hear, including when their thesis is fragile. Our recommendations are stress-tested against the questions an investment committee will actually ask — before that committee asks them.',
  },
  {
    name: 'Specialism with Range',
    description:
      'Each engagement is led by a partner with deep sector expertise, supported by analysts who can build the model, the data room, or the integration plan from first principles.',
  },
  {
    name: 'Alignment by Design',
    description:
      'Engagements end when the problem is solved, not when the retainer expires. Our fee structures and reporting cadences are designed so our incentive is the durability of the decision, not the duration of the work.',
  },
  {
    name: 'Strategy Over Noise',
    description:
      'We do not chase trends. We dismantle them. Our job is to help our clients see through narrative cycles to the underlying economics, regulatory shifts, and operating realities that actually determine returns.',
  },
];

const whereWeWork = [
  {
    name: 'Private Equity',
    description:
      'Fund-level positioning, mandate strategy, portfolio diagnostic, exit planning. We work alongside GPs from sourcing through divestment, with particular depth in mid-market platforms.',
  },
  {
    name: 'Venture Capital',
    description:
      'Thesis stress-testing, portfolio operating support, follow-on decision frameworks, and senior-hire diligence. We act as a sounding board to partners and a hands-on resource to portfolio CEOs.',
  },
  {
    name: 'Operating Companies',
    description:
      'Growth-stage and scaling businesses navigating capital raises, M&A, or operational scaling. We work with founders, CEOs, and boards directly — not just through their investors.',
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        label="About"
        title="Who We Are"
        subtitle="Strategic counsel for growth capital. We are the advisory arm of the Kennis ecosystem — built to close the gap between institutional intent and operational execution."
      />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Our Origin
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          A Different Kind of Advisory Firm
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Kennis Wiser Consulting was founded on a simple observation. Capital is
            abundant — institutional, family-office, sovereign, retail. Insight is not.
            The gap between strategic intent and operational execution keeps widening,
            and most advisory firms widen it further by selling frameworks instead of
            judgement, hours instead of outcomes.
          </p>
          <p>
            We are part of the broader Kennis ecosystem — a group that operates across
            capital allocation, real-asset investment, and the technology that supports
            them. That heritage means we have sat on both sides of the table. We know
            what it takes to underwrite a deal, run a portfolio company, report to
            limited partners, and survive a regulatory examination.
          </p>
          <p>
            We bring that operational reality into every advisory engagement.
          </p>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Operating Principles
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          What We Stand For
        </h2>
        <div className="space-y-8">
          {principles.map((p) => (
            <div
              key={p.name}
              className="border-l-2 border-accent pl-6 hover:border-accent/100"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{p.name}</h3>
              <p className="text-gray-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Who We Work With
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Where We Engage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whereWeWork.map((w) => (
            <div
              key={w.name}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{w.name}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{w.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Strategy Over Noise.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Whether you are sizing up an acquisition, restructuring a fund mandate, or
            translating boardroom strategy into measurable execution — we are here to
            help you think it through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/contact" className="btn-primary">
              Schedule a Conversation
            </a>
            <a href="/about/our-approach" className="btn-secondary">
              How We Work
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
