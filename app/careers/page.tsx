import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Careers | Kennis Wiser Consulting',
  description:
    'Join Kennis Wiser Consulting. We are building the next generation of strategic advisory for growth capital — PE funds, VC funds, and operating companies across technology, real estate, and infrastructure.',
};

const departments = [
  {
    name: 'Investment Advisory',
    description:
      'Lead due-diligence, fund-positioning, and exit-strategy mandates for PE / VC clients across technology, real estate, and infrastructure.',
  },
  {
    name: 'Strategy & Operations',
    description:
      'Partner with operating-company clients on commercial strategy, unit economics, and operational scaling. Translate boardroom intent into measurable execution.',
  },
  {
    name: 'Technology Advisory',
    description:
      'Advise on AI, data, and platform architecture decisions for portfolio companies — from build-vs-buy to vendor selection to organisational integration.',
  },
  {
    name: 'Sector Expertise',
    description:
      'Deep specialist roles in real estate / PropTech, infrastructure & energy, financial services, healthcare, and business services. Open to senior operators.',
  },
];

const values = [
  {
    name: 'Pragmatism',
    description:
      'Frameworks are tools, not deliverables. We bring evidence and judgement, not theatre. The work shows up as a decision, not a slide deck.',
  },
  {
    name: 'Conviction',
    description:
      'We tell clients what they need to hear, including when their thesis is wrong. Our recommendations are defensible to an investment committee that questions every assumption.',
  },
  {
    name: 'Craft',
    description:
      'We obsess over the quality of the work. Every model is reproducible, every memo defensible, every analysis traceable to its source.',
  },
  {
    name: 'Ownership',
    description:
      'We own the outcome, not the time sheet. Engagements end when the problem is solved, not when the retainer expires.',
  },
];

const workLife = [
  {
    title: 'Remote-first by design',
    description:
      'We work where we work best. The team is distributed across London, Europe, and the US — we converge in person for client sites, deal milestones, and offsites.',
  },
  {
    title: 'Time you actually own',
    description:
      'No vacation schedule. No PTO tracking. We measure ROI per engagement, not hours per timesheet. Take the time you need, deliver the outcome you promised.',
  },
  {
    title: 'Compensation that compounds',
    description:
      'Above-market base, performance bonus tied to engagement outcomes, and an equity component in the firm itself. Our success is your success — by design.',
  },
  {
    title: 'Health, learning, kit',
    description:
      'Private healthcare, an annual learning budget you allocate (courses, conferences, books, executive coaching), and a hardware budget so your tools never slow you down.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Join Us"
        title="Careers at Kennis Wiser"
        subtitle="We are building the next generation of strategic advisory for growth capital. Join a team where ambition meets precision, and where the work itself is the reward."
      />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Why Kennis Wiser Exists
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Capital is abundant. Insight is not. Across PE, VC, and the operating
            companies they back, the gap between strategic intent and operational
            execution keeps widening. Most advisory firms widen it further — selling
            frameworks instead of judgement, hours instead of outcomes.
          </p>
          <p>
            Kennis Wiser Consulting was built to close that gap. We bring institutional
            rigour, sector specialism, and the unfashionable willingness to disagree with
            our clients when their thesis is fragile. We measure ourselves not by the
            quantity of decks delivered, but by the durability of the decisions our work
            informs.
          </p>
          <p>
            If you want a career where every engagement matters, where you are trusted
            to own the outcome, and where the firm itself improves with every
            mandate — we should talk.
          </p>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Where You Could Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((d) => (
            <div
              key={d.name}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{d.name}</h3>
              <p className="text-gray-400 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Our Values
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {values.map((v) => (
            <div key={v.name}>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded bg-accent" />
                {v.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Work-Life
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workLife.map((w) => (
            <div
              key={w.title}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{w.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{w.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to talk?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We do not maintain a fixed list of vacancies. We hire when we meet the right
            person — at any seniority, in any sector we serve. Send your story, your CV,
            or a one-line pitch. We read everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="/about/our-approach" className="btn-secondary">
              Learn How We Work
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
