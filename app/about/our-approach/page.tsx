import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Our Approach | Kennis Wiser Consulting',
  description:
    'How we scope, staff, and deliver work. A clear engagement model designed for fund managers, founders, and boards who need judgement, not theatre.',
};

const phases = [
  {
    step: '01',
    title: 'Diagnostic',
    description:
      'Every engagement starts with a short, fixed-fee diagnostic — typically 1–3 weeks. We surface the actual question, stress-test the framing, and agree what success looks like in writing before any further commitment is made.',
  },
  {
    step: '02',
    title: 'Engagement Design',
    description:
      'We co-author the scope of work. Deliverables are concrete (a memo, a model, a decision document, an integration plan). Timelines are realistic. The team is named. Exit triggers — for either side — are explicit.',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'A partner runs the engagement and is in every working session. Analysts build the model, the data room, the integration plan. We work alongside the client team, not over them. Status is a working document, not a Friday email.',
  },
  {
    step: '04',
    title: 'Decision',
    description:
      'The output is a decision, not a deck. We brief the relevant committee or board, defend the recommendation under questioning, and document the dissent if one of our partners disagrees with the conclusion.',
  },
  {
    step: '05',
    title: 'Handover',
    description:
      'Engagements end when the problem is solved. We hand over a clean artefact (model, memo, runbook) that the client team can maintain. We do not engineer dependency.',
  },
];

const principles = [
  {
    title: 'No Time-and-Materials',
    body: 'Pricing is fixed-fee, retainer, or success-linked. Always agreed upfront. We never bill by the hour — it misaligns the incentive from the first week.',
  },
  {
    title: 'Partner-Led',
    body: 'A partner runs every engagement, in every session. No bait-and-switch between pitch and delivery.',
  },
  {
    title: 'Audit-Quality Work Product',
    body: 'Every model is reproducible. Every memo cites its sources. Every analysis traces back to its inputs. Future buyers, regulators, and LPs can interrogate the work.',
  },
  {
    title: 'Confidentiality by Design',
    body: 'NDA before scoping. Dedicated infrastructure per engagement. Group-level conflicts check before every mandate. We refuse work that we cannot do cleanly.',
  },
  {
    title: 'Outcomes Over Hours',
    body: 'We measure ourselves by whether the decision held — six months, a year, three years later. Not by hours billed or decks delivered.',
  },
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Our Approach"
        subtitle="How we scope, staff, and deliver work. A clear engagement model designed for fund managers, founders, and boards who need judgement — not theatre."
      />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          The Engagement Arc
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Five Phases. One Decision.
        </h2>
        <div className="space-y-8">
          {phases.map((p) => (
            <div
              key={p.step}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start"
            >
              <div className="text-4xl font-bold text-gradient">{p.step}</div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Operating Principles
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          How We Show Up
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-primary-700/20 to-accent/10 p-10 md:p-14">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Engagement Shapes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            How clients commission us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Fixed-Scope Mandate
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                A defined deliverable on a fixed fee and timeline. Typical for due
                diligence, market-entry studies, and strategic reviews. 4–12 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Embedded Retainer
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                We operate as part of the client team for a defined period — typically
                3–12 months — to drive a programme of work. Monthly retainer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Advisory / NED
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Board or advisory-board seat for longer-horizon strategic counsel.
                Fixed annual fee plus equity in some cases. Subject to portfolio
                limits.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s scope something
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            The fastest way to understand whether we can help is a 30-minute
            scoping call. No commitment — we will tell you honestly if we are not
            the right firm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/contact" className="btn-primary">
              Schedule a Scoping Call
            </a>
            <a href="/strategy" className="btn-secondary">
              See What We Do
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
