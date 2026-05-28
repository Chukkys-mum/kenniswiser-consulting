import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Enterprise & Agile Transformation',
  description:
    'Enterprise transformation and agile delivery at scale — SAFe, LeSS, Nexus, Spotify, or a bespoke model. Led by people who have run transformation at BP, Vodafone, ING, and BNP Paribas.',
};

export default function TransformationPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Enterprise & Agile Transformation',
        subtitle:
          'Transformation at the scale where it is hardest to make stick. We have led enterprise agile transformation at BP, Vodafone, ING, and BNP Paribas — and we measure the work by working software and a faster operating cadence, not by the framework on the wall.',
        overview: [
          'Most transformations stall because they install a framework instead of changing how decisions get made. We start from the operating model — how value actually flows, where it stalls, who decides — and use agile as the means to fix it, not the deliverable to point at.',
          'We are framework-agnostic. SAFe, LeSS, Nexus, the Spotify model, or something bespoke to your constraints — the right answer depends on your scale, your regulatory environment, and your appetite. We have implemented all of them and have strong views on where each one breaks.',
        ],
        steps: [
          {
            step: '01',
            title: 'Diagnose',
            description:
              'A structured discovery of the current operating model: value streams, decision latency, dependency tangles, and the cultural blockers that no framework fixes on its own.',
          },
          {
            step: '02',
            title: 'Design the target',
            description:
              'A target operating model and a scaling approach matched to your reality — not a textbook rollout. Team topologies, funding model, governance cadence, metrics that matter.',
          },
          {
            step: '03',
            title: 'Pilot',
            description:
              'Prove the model on one value stream before scaling it. A real team, real delivery, real metrics — so the rollout sells itself on evidence rather than mandate.',
          },
          {
            step: '04',
            title: 'Scale',
            description:
              'Extend the proven pattern across the organisation, coaching leaders and teams through the transition, and standing up the communities of practice that sustain it.',
          },
          {
            step: '05',
            title: 'Embed & exit',
            description:
              'We coach ourselves out of a job. The capability stays with your people; the operating cadence keeps running after we leave.',
          },
        ],
        deliverables: [
          'Operating-model diagnostic with value-stream mapping and decision-latency analysis',
          'Target operating model + scaling approach (SAFe / LeSS / Nexus / Spotify / bespoke)',
          'Piloted value stream with before/after delivery metrics',
          'Leadership and team coaching through the transition',
          'Communities of practice + capability framework so the change sustains',
        ],
        relatedSectors: [
          { name: 'Operating Model & Ways of Working', href: '/services/operating-model' },
          { name: 'Leadership & Coaching', href: '/services/leadership-coaching' },
          { name: 'Digital & Platform Engineering', href: '/services/digital-platform' },
        ],
      }}
    />
  );
}
