import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Firm Overview | Kennis Wiser Consulting',
  description:
    'Kennis Wiser Consulting — firm structure, governance, regulatory posture, and engagement model. The institutional context behind the work.',
};

// Defensible proof points from the platform we actually built — not
// unverifiable AUM / transaction claims.
const stats = [
  { label: 'Platform modules built', value: '24' },
  { label: 'Services shipped', value: '600+' },
  { label: 'Group entities structured', value: '4' },
  { label: 'Enterprise transformations led', value: 'BP · Vodafone · ING · BNP' },
];

const pillars = [
  {
    title: 'Group Heritage',
    description:
      'Kennis Wiser Consulting is the advisory practice at the centre of the Kennis and Septimius group. We structured the fund platform (a Jersey GP and its debut real-asset income fund), stood up the operating company that delivers the underlying assets, and architected the Septimius technology ecosystem on Kennis OS. The consulting practice runs as an independent entity to preserve client confidentiality and avoid conflicts of interest.',
  },
  {
    title: 'How we engage',
    description:
      'Engagements run under a formal engagement letter with defined scope, deliverables, and exit triggers. We work as an embedded partner, not a fly-in/fly-out advisor — coaching ourselves out of a job so the capability stays with your people. Sensitive material is handled under NDA on dedicated infrastructure with audit trails.',
  },
  {
    title: 'Independence & posture',
    description:
      'We provide transformation, technology, and operating advisory. We are not a regulated investment adviser, and we signpost clients to regulated counterparties (legal, fund-admin, financial) for any work that requires them. We work upstream of and alongside those advisors — we never impersonate them.',
  },
  {
    title: 'Engagement Models',
    description:
      'Three shapes: (1) fixed-scope mandates with a defined deliverable; (2) embedded retainers where we operate as part of the client team for a defined period; (3) advisory-board / non-executive seats for longer-horizon counsel. Pricing is fixed-fee, retainer, or outcome-linked — agreed upfront, never time-and-materials.',
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
            <h3 className="text-lg font-semibold text-white mb-3">Transformation & Agile</h3>
            <p className="text-gray-400 leading-relaxed">
              Enterprise agile transformation, scaling frameworks, operating-model and
              ways-of-working redesign. Led at BP, Vodafone, ING, and BNP Paribas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Digital, Data & AI</h3>
            <p className="text-gray-400 leading-relaxed">
              Platform and product engineering, cloud and DevOps, data foundations,
              machine learning, and production AI — built into the Septimius ecosystem.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Venture & Fund Building</h3>
            <p className="text-gray-400 leading-relaxed">
              Standing up ventures, operating companies, and fund vehicles. We structured
              a Jersey fund GP, its debut fund, and the operating company beneath it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Leadership & Coaching</h3>
            <p className="text-gray-400 leading-relaxed">
              Executive and agile-leadership coaching, practitioner development, and
              inclusive-leadership programmes that make the capability stick.
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
