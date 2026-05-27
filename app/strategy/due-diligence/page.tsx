import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Due Diligence & Advisory',
  description:
    'Commercial, operational, and financial due diligence for PE / VC investors. We stress-test theses against sector realities and produce IC-ready output.',
};

export default function DueDiligencePage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Due Diligence & Advisory',
        subtitle:
          'Commercial, operational, and financial diligence for PE and VC investors. We stress-test theses against sector realities, identify operational red flags before close, and produce IC-ready output.',
        overview: [
          'Most diligence work is a frameworks-and-deck exercise. We do the work that an investment committee actually wants to see: customer-cohort analysis, primary research with operators, granular unit-economics build, regulatory exposure mapping.',
          'Our value is sector specialism. Every engagement is led by a partner who has either underwritten or operated in the same vertical. That means our diligence is calibrated to the actual operating realities of the asset, not the seller’s narrative.',
        ],
        steps: [
          {
            step: '01',
            title: 'Thesis dialogue',
            description:
              "Before the data room opens, we sit with the sponsor team to interrogate the investment thesis. The questions we'll ask in diligence are the ones the IC will ask at approval. Surfacing them early shapes scope.",
          },
          {
            step: '02',
            title: 'Primary research',
            description:
              'We commission and run primary research — customer interviews, expert calls, vendor diligence, regulatory checks — calibrated to the specific risks the thesis turns on.',
          },
          {
            step: '03',
            title: 'Operating model',
            description:
              'A reproducible operating model in our hands and the sponsor’s. Unit economics, working capital, sensitivity ranges. Documented assumptions. No black-box adjustments.',
          },
          {
            step: '04',
            title: 'IC-ready output',
            description:
              "A diligence pack the IC can interrogate — not a deck we built in PowerPoint, a decision document with appendices the committee can drill into.",
          },
          {
            step: '05',
            title: 'Defence',
            description:
              "We attend the IC meeting and defend the work under questioning. If our view differs from the sponsor's, we document the dissent.",
          },
        ],
        deliverables: [
          'Commercial diligence report (40–80 pages) with primary-research evidence base',
          'Reproducible operating model (Excel) with sensitivity ranges and named assumptions',
          'IC memo + appendices structured for committee questioning',
          'Red-flag log: items requiring close-condition mitigation or post-close attention',
          'Optional: 100-day post-close value-creation runbook',
        ],
        relatedSectors: [
          { name: 'Technology', href: '/sectors/technology' },
          { name: 'Real Estate', href: '/sectors/real-estate' },
          { name: 'Infrastructure', href: '/sectors/infrastructure' },
          { name: 'Financial Services', href: '/sectors/financial-services' },
          { name: 'Healthcare', href: '/sectors/healthcare' },
        ],
      }}
    />
  );
}
