import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Digital & Platform Engineering',
  description:
    'Platform and product engineering, cloud architecture, and DevOps — by the team that built the Septimius ecosystem: 24 modules, 600+ services, on Kennis OS.',
};

export default function DigitalPlatformPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Digital & Platform Engineering',
        subtitle:
          'Platform and product engineering, cloud architecture, and DevOps. We built the Septimius ecosystem — a multi-vertical platform of 24 modules and 600+ services on Kennis OS — so we build client platforms as operators, not as a deck.',
        overview: [
          'There is a difference between advising on architecture and having shipped one. We architected and built a multi-vertical property and fund-management platform end to end: FastAPI services, a Supabase data layer, an event-driven backbone, and an AI assistant layer — all in production.',
          'We bring that to client work. Whether you are replatforming a legacy estate, building a greenfield product, or untangling a monolith, we work as an embedded engineering and architecture partner — designing the system, then helping your team build and own it.',
        ],
        steps: [
          {
            step: '01',
            title: 'Architecture review',
            description:
              'Where the current system constrains the business: coupling, data ownership, deployment friction, the bits that make every change expensive. Documented, prioritised, costed.',
          },
          {
            step: '02',
            title: 'Target architecture',
            description:
              'A target architecture and a migration path that delivers value in increments — not a two-year rewrite that never lands. Domain boundaries, data ownership, integration contracts.',
          },
          {
            step: '03',
            title: 'Build alongside',
            description:
              'We embed with your engineers and build the first slices together — the reference implementation, the CI/CD pipeline, the deployment runbook — so the pattern is proven and owned.',
          },
          {
            step: '04',
            title: 'DevOps & delivery',
            description:
              'The delivery machinery: trunk-based development, automated testing, observability, and a release cadence the team can sustain without heroics.',
          },
          {
            step: '05',
            title: 'Hand over',
            description:
              'Clean architecture docs, a runnable reference, and an engineering team that owns the platform. We step out.',
          },
        ],
        deliverables: [
          'Architecture review with prioritised, costed remediation',
          'Target architecture + incremental migration path',
          'Reference implementation built alongside your engineers',
          'CI/CD pipeline, observability, and deployment runbook',
          'Architecture documentation and an owning team',
        ],
        relatedSectors: [
          { name: 'Data, ML & AI', href: '/services/data-ml-ai' },
          { name: 'Enterprise & Agile Transformation', href: '/services/transformation' },
          { name: 'Venture Building & Fund Structuring', href: '/services/venture-building' },
        ],
      }}
    />
  );
}
