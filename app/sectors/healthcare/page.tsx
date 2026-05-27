import type { Metadata } from 'next';
import SectorDetailPage from '@/components/SectorDetailPage';

export const metadata: Metadata = {
  title: 'Healthcare & Life Sciences',
  description:
    'Sector practice — healthcare services, digital health, healthtech platforms, life-sciences services.',
};

export default function HealthcareSectorPage() {
  return (
    <SectorDetailPage
      data={{
        title: 'Healthcare & Life Sciences',
        subtitle:
          'Healthcare services, digital health, healthtech platforms, life-sciences services. Tech-enabled clinical operations where the operating discipline is the differentiator.',
        overview: [
          "Healthcare is a sector where the returns are real but the operating complexity is brutal. Reimbursement environments shift; clinical governance is non-negotiable; the regulatory perimeter for digital health is still being drawn. We do diligence and operating work in healthcare with appropriate technical depth and a clear-eyed view of what's actually a moat.",
          "The most interesting opportunities are in tech-enabled clinical services — businesses that combine a regulated clinical operation with proprietary software that reduces clinical cost per episode. The diligence question is always operator quality plus regulatory durability.",
        ],
        theses: [
          {
            title: 'Tech-enabled clinical services',
            body: 'Combining a clinical operation with proprietary software (triage, scheduling, outcomes tracking) reduces clinical cost per episode by 20-40% in proven cases. The investment thesis is real; the diligence question is whether the software is genuinely differentiated or just bolted on.',
          },
          {
            title: 'Specialty pharmacy + adherence',
            body: 'A repeatable model: specialty pharmacy distribution combined with proprietary adherence technology. The clinical outcomes are real; the payer reimbursement environment is favourable; consolidation is active.',
          },
          {
            title: 'Healthcare AI, post-hype',
            body: 'A lot of healthcare-AI businesses have negative working capital, no proven outcomes data, and regulatory risk. We have a clear filter for which healthcare-AI businesses are real — and most of them are not.',
          },
        ],
        engagementThemes: [
          'Commercial diligence on a UK specialty pharmacy roll-up for a mid-market PE fund',
          'Regulatory and operating assessment of a digital-health platform expanding into the EU',
          'Strategic buyer mapping for a tech-enabled clinical services business approaching exit',
          'Governance design for a Series B healthtech preparing for institutional investors',
        ],
        relatedServices: [
          { name: 'Due Diligence & Advisory', href: '/strategy/due-diligence' },
          { name: 'Regulatory & Governance', href: '/strategy/regulatory' },
          { name: 'Operational Excellence', href: '/strategy/operational-excellence' },
        ],
      }}
    />
  );
}
