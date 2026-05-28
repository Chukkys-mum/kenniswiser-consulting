import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Venture Building & Fund Structuring',
  description:
    'Standing up ventures, operating companies, and fund vehicles — from the team that structured a Jersey fund GP, its debut real-asset fund, and the operating company that delivers the assets.',
};

export default function VentureBuildingPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Venture Building & Fund Structuring',
        subtitle:
          'Standing up ventures, operating companies, and fund vehicles — end to end. We structured a Jersey-domiciled fund GP, its debut real-asset income fund, and the UK operating company that delivers the underlying assets.',
        overview: [
          'Building a venture and building a fund are different disciplines, and most advisors have done neither. We have done both — and connected them into a single vertically-integrated group with a technology platform underneath.',
          'For founders, that means we help you build the company and the operating cadence that makes it investable. For allocators, it means we help structure the vehicle, the operating company, and the governance that institutional capital expects to find. We work upstream of (and alongside) your legal and fund-admin counsel — we do not impersonate them.',
        ],
        steps: [
          {
            step: '01',
            title: 'Structure',
            description:
              'The entity and governance architecture — how the venture, the operating company, and (where relevant) the fund vehicle fit together, and where the value and control sit.',
          },
          {
            step: '02',
            title: 'Operating build',
            description:
              'Standing up the operating company: the team, the systems, the cadence, the controls. The unglamorous machinery that makes a venture real and an asset deliverable.',
          },
          {
            step: '03',
            title: 'Investor readiness',
            description:
              'The governance, reporting, and evidence base institutional capital inspects before it commits. We have built the data room from the inside.',
          },
          {
            step: '04',
            title: 'Counsel hand-off',
            description:
              'We work alongside your fund-admin and legal counsel, handing off cleanly for the regulated work and keeping the commercial and operating build moving.',
          },
        ],
        deliverables: [
          'Entity + governance architecture for the venture / group',
          'Operating-company build plan: team, systems, cadence, controls',
          'Investor-readiness pack: governance, reporting, evidence base',
          'Technology platform blueprint connecting fund, operating co, and product',
          'Hand-off brief for fund-admin and legal counsel',
        ],
        relatedSectors: [
          { name: 'Digital & Platform Engineering', href: '/services/digital-platform' },
          { name: 'Operating Model & Ways of Working', href: '/services/operating-model' },
          { name: 'Enterprise & Agile Transformation', href: '/services/transformation' },
        ],
      }}
    />
  );
}
