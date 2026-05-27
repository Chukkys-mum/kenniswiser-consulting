import type { Metadata } from 'next';
import SectorDetailPage from '@/components/SectorDetailPage';

export const metadata: Metadata = {
  title: 'Business Services',
  description:
    'Sector practice — tech-enabled B2B services, professional services platforms, outsourcing, and M&A roll-up theses.',
};

export default function BusinessServicesSectorPage() {
  return (
    <SectorDetailPage
      data={{
        title: 'Business Services',
        subtitle:
          'Tech-enabled B2B services, professional services platforms, outsourcing, and the M&A roll-up theses that consolidate them.',
        overview: [
          'Business services is a sector where the returns come from operating discipline and platform-thinking, not from technology breakthroughs. The interesting opportunities are M&A roll-up theses that genuinely consolidate fragmented professional-services markets — combined with software that compounds the operating leverage.',
          'We have done diligence and operating work on a dozen roll-up theses across accounting, legal services, technology services, and adjacent verticals. There is a clear, repeatable framework for telling which roll-ups will actually compound and which will hit integration walls.',
        ],
        theses: [
          {
            title: 'Roll-ups that work, roll-ups that don\'t',
            body: 'The roll-up theses that work have three things: a fragmented seller pool, clear integration playbook (ops + tech + people), and proprietary software that reduces per-acquisition operating cost. The ones that don\'t work are arbitrage trades with no operating model behind them.',
          },
          {
            title: 'Tech-enabled professional services',
            body: 'Accountancy, legal services, advisory businesses that combine professional services revenue with proprietary AI / automation tooling are achieving software-like operating margins. We have a clear view on which categories are most defensible.',
          },
          {
            title: 'Outsourcing for the AI era',
            body: 'BPO is being reshaped by AI. The interesting investment opportunities are BPO operators who are credibly migrating workloads to AI-augmented delivery while retaining client relationships. The diligence question is the credibility of the migration plan.',
          },
        ],
        engagementThemes: [
          'Commercial diligence on a UK accountancy roll-up for a mid-market PE fund',
          'Operating diagnostic at a tech-enabled legal services platform preparing for a Series C',
          'Integration planning for a buy-and-build legal services platform after a strategic acquisition',
          'Strategic buyer mapping for a UK BPO operator approaching exit',
        ],
        relatedServices: [
          { name: 'Exit Strategy & M&A', href: '/strategy/ma-advisory' },
          { name: 'Due Diligence & Advisory', href: '/strategy/due-diligence' },
          { name: 'Operational Excellence', href: '/strategy/operational-excellence' },
        ],
      }}
    />
  );
}
