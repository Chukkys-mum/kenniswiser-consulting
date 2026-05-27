import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Regulatory & Governance',
  description:
    'Regulatory environment assessment for new market entry, governance-framework design for first-time funds, and compliance posture review for boards preparing for institutional capital.',
};

export default function RegulatoryPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Regulatory & Governance',
        subtitle:
          'Regulatory-environment assessment for new market entry, governance-framework design for first-time funds, and compliance-posture review for boards preparing for institutional capital.',
        overview: [
          'Regulatory exposure is the thing that kills a deal at IC. We do the upstream work — mapping the regulatory perimeter for a new vertical, building the governance posture a first-time fund needs to attract institutional LPs, stress-testing the compliance position of a target before close.',
          'We are not lawyers. We work alongside your counsel to translate legal advice into operating decisions: which licences to apply for, which jurisdictions to enter first, which governance bodies to stand up, which controls to evidence.',
        ],
        steps: [
          {
            step: '01',
            title: 'Perimeter mapping',
            description:
              'For the relevant jurisdictions and activities, the regulatory perimeter today and the likely trajectory over the engagement horizon. Who regulates what, what triggers reporting, what the enforcement posture is.',
          },
          {
            step: '02',
            title: 'Governance design',
            description:
              'For first-time funds: board composition, IC structure, conflicts policy, valuation governance. For operating companies: the governance that an institutional acquirer expects to find.',
          },
          {
            step: '03',
            title: 'Compliance evidencing',
            description:
              'Translating the framework into evidence — policies, registers, attestations, minutes. The artefacts a regulator or an LP would actually want to inspect.',
          },
          {
            step: '04',
            title: 'Counsel hand-off',
            description:
              'We work upstream of your law firm and hand off cleanly to them for the bits that require legal advice. We will not impersonate counsel.',
          },
        ],
        deliverables: [
          'Regulatory-perimeter assessment for named markets / activities',
          'Governance framework: charters, RACI, IC procedure, conflicts policy',
          'Compliance-posture diagnostic with named remediation actions',
          'Board-ready evidence pack for institutional-capital readiness',
          'Hand-off brief for legal counsel on questions reserved for them',
        ],
        relatedSectors: [
          { name: 'Financial Services', href: '/sectors/financial-services' },
          { name: 'Healthcare', href: '/sectors/healthcare' },
          { name: 'Infrastructure', href: '/sectors/infrastructure' },
        ],
      }}
    />
  );
}
