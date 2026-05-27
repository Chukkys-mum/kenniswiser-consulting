import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Fund Strategy & Positioning',
  description:
    'Mandate design, sector positioning, LP narrative, and competitive differentiation — for first-time funds and established GPs alike.',
};

export default function FundPositioningPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Fund Strategy & Positioning',
        subtitle:
          'Mandate design, sector positioning, LP narrative, and competitive differentiation. From first-time funds raising their debut vehicle to established GPs evolving their thesis between vintages.',
        overview: [
          "Most placement decks read the same. A fund's positioning is its most underleveraged asset — it determines which LPs return your call, what allocation tickets you're considered for, and how robust your thesis looks when the cycle turns.",
          "We work alongside GPs on the substance behind the deck: the mandate's edge, the comparable set, the rebuttals to the questions LPs will absolutely ask. The deck comes out of that work, not the other way round.",
        ],
        steps: [
          {
            step: '01',
            title: 'Position diagnostic',
            description:
              "Where does the fund actually sit in the LP's pattern-matching universe? We map the comparable set, decode the LP's existing exposure, and identify the angles that genuinely differentiate.",
          },
          {
            step: '02',
            title: 'Mandate sharpening',
            description:
              'Narrow the sector, size band, and operating-thesis ranges to the cuts where conviction is highest and capacity is most defensible. Concession what you must to preserve what matters.',
          },
          {
            step: '03',
            title: 'Track-record framing',
            description:
              'How the deals you have done evidence (or fail to evidence) the thesis you’re raising. Calibrated attribution, gross-net waterfalls that survive LP scrutiny, named contributions per partner.',
          },
          {
            step: '04',
            title: 'LP-readiness',
            description:
              'Anticipated diligence questions, references prepared, governance posture, fund terms benchmarked. A road-show that goes 6 weeks faster because the homework is already done.',
          },
        ],
        deliverables: [
          'Positioning memo: mandate, edge, comparables, narrative arc',
          'Sharpened sector / size / geography mandate definition',
          'Track-record framing aligned to the new thesis',
          'LP target list with relationship-mapping notes',
          'IC and Investor presentation drafts',
          'Q&A bank covering the 30 questions LPs will absolutely ask',
        ],
        relatedSectors: [
          { name: 'Financial Services', href: '/sectors/financial-services' },
          { name: 'Technology', href: '/sectors/technology' },
          { name: 'Real Estate', href: '/sectors/real-estate' },
        ],
      }}
    />
  );
}
