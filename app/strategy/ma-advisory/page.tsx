import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Exit Strategy & M&A',
  description:
    'Exit readiness, vendor-side commercial diligence, value-creation evidence packs, strategic-buyer mapping, and post-merger integration planning.',
};

export default function MAAdvisoryPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Exit Strategy & M&A',
        subtitle:
          'Exit readiness, vendor-side commercial diligence, value-creation evidence packs, strategic-buyer mapping, and post-merger integration planning. We work alongside bankers and lawyers, not in competition with them.',
        overview: [
          'Exits are won in the eighteen months before the process opens. We work upstream of the banker — getting the commercial story straight, the data room clean, the value-creation evidence pack assembled, the management team rehearsed.',
          'On the buy-side: red-flag commercial diligence on the seller’s thesis, an integration plan written before close, and a 100-day operating playbook handed over to the portfolio company on day one.',
        ],
        steps: [
          {
            step: '01',
            title: 'Sell-side prep',
            description:
              'A 6-month exit-readiness programme. Commercial story, data room, management presentation, value-creation evidence. The bankers’ job becomes easier; the process is shorter.',
          },
          {
            step: '02',
            title: 'Strategic-buyer map',
            description:
              'Beyond the obvious financial buyers, the strategic logic for each named acquirer — synergies, regulatory exposure, board posture, prior-deal precedent.',
          },
          {
            step: '03',
            title: 'Vendor commercial diligence',
            description:
              "A vendor-issued commercial diligence report a buyer can rely on. Pre-empts the buyer's questions, narrows the negotiation surface area, accelerates the timetable.",
          },
          {
            step: '04',
            title: '100-day integration',
            description:
              'For buyers: a pre-close integration plan, named day-1 priorities, and the operating cadence the new portfolio company will run inside the platform.',
          },
        ],
        deliverables: [
          'Exit-readiness diagnostic + remediation programme',
          'Vendor-issued commercial diligence report',
          'Strategic-buyer map with named contacts + prior-deal evidence',
          'Value-creation evidence pack tied to operating metrics',
          'Management presentation + rehearsal rounds',
          'Pre-close 100-day integration plan (for buy-side mandates)',
        ],
        relatedSectors: [
          { name: 'Technology', href: '/sectors/technology' },
          { name: 'Healthcare', href: '/sectors/healthcare' },
          { name: 'Business Services', href: '/sectors/business-services' },
          { name: 'Real Estate', href: '/sectors/real-estate' },
        ],
      }}
    />
  );
}
