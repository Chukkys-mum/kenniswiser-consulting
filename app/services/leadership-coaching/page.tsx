import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Leadership & Coaching',
  description:
    'Executive and agile-leadership coaching, scrum-master and product-owner development, and capability building — including inclusive-leadership programmes.',
};

export default function LeadershipCoachingPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Leadership & Coaching',
        subtitle:
          'Executive and agile-leadership coaching, scrum-master and product-owner development, and the capability building that makes a transformation stick after the consultants leave. Our founder is a Lead Enterprise Agile Executive Coach.',
        overview: [
          'A transformation that depends on the consultants is a transformation that fails the day they leave. The durable change is in your leaders and your teams — which is why coaching and capability building sit at the centre of how we work, not at the edge.',
          'We coach executives through the hardest part of transformation: changing how they lead. We develop the scrum masters, agile coaches, and product owners who carry the new way of working. And we run inclusive-leadership programmes — because the best teams are built from a genuine breadth of perspective.',
        ],
        steps: [
          {
            step: '01',
            title: 'Leadership diagnostic',
            description:
              'Where leadership behaviour is helping or hindering the change. Honest, evidence-based, and delivered with the candour that makes coaching work.',
          },
          {
            step: '02',
            title: 'Executive coaching',
            description:
              'One-to-one and team coaching for leaders navigating transformation — the mindset and behaviour shift that no framework rollout delivers on its own.',
          },
          {
            step: '03',
            title: 'Practitioner development',
            description:
              'Developing the scrum masters, agile coaches, and product / service owners who become the standing capability — through real delivery, not classroom certification alone.',
          },
          {
            step: '04',
            title: 'Communities & capability',
            description:
              'Communities of practice, chapter leads, and capability frameworks that sustain the change — plus inclusive-leadership programmes that broaden the leadership pipeline.',
          },
        ],
        deliverables: [
          'Leadership diagnostic with candid, evidence-based findings',
          'Executive coaching programme (1:1 and team)',
          'Scrum master / agile coach / product owner development pathway',
          'Communities of practice + capability framework',
          'Inclusive-leadership programme (broadening the leadership pipeline)',
        ],
        relatedSectors: [
          { name: 'Enterprise & Agile Transformation', href: '/services/transformation' },
          { name: 'Operating Model & Ways of Working', href: '/services/operating-model' },
        ],
      }}
    />
  );
}
