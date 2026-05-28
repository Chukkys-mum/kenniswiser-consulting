import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Operating Model & Ways of Working',
  description:
    'Operating-model design, organisation design, Lean Six Sigma, performance management, and process automation — the machinery that makes strategy executable.',
};

export default function OperatingModelPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Operating Model & Ways of Working',
        subtitle:
          'Operating-model and organisation design, Lean Six Sigma, performance management, and automation. The machinery that turns a strategy on a slide into an organisation that executes it.',
        overview: [
          'Strategy fails in the operating model. The org chart, the decision rights, the hand-offs, the metrics, the manual processes that should have been automated three years ago — that is where ambition goes to die. It is also where our founder spent a career, building operating-model intelligence into a product (Comurce) along the way.',
          'We diagnose where the operating model leaks value, redesign the parts that matter, and automate the parts that should never have been manual. Lean Six Sigma where rigour is needed; pragmatic redesign where speed matters more than belts and certifications.',
        ],
        steps: [
          {
            step: '01',
            title: 'Operating-model diagnostic',
            description:
              'Where value leaks: decision latency, hand-off friction, duplicated effort, manual processes, misaligned incentives. Quantified, not hand-waved.',
          },
          {
            step: '02',
            title: 'Redesign',
            description:
              'A target operating model with clear decision rights, team topologies, and metrics. Designed for how the organisation actually needs to run, not an idealised reference model.',
          },
          {
            step: '03',
            title: 'Automate',
            description:
              'The processes that should never have been manual — automated. We have built event-driven automation at scale and know where it pays off and where it is a trap.',
          },
          {
            step: '04',
            title: 'Performance management',
            description:
              'A measurement system that drives the right behaviour: leading indicators, clear ownership, a cadence that surfaces problems early rather than at quarter-end.',
          },
        ],
        deliverables: [
          'Operating-model diagnostic with quantified value-leak analysis',
          'Target operating model: decision rights, team topologies, metrics',
          'Process-automation plan with prioritised, costed candidates',
          'Performance-management framework with leading indicators',
          'Lean Six Sigma improvement programme where rigour is warranted',
        ],
        relatedSectors: [
          { name: 'Enterprise & Agile Transformation', href: '/services/transformation' },
          { name: 'Data, ML & AI', href: '/services/data-ml-ai' },
          { name: 'Leadership & Coaching', href: '/services/leadership-coaching' },
        ],
      }}
    />
  );
}
