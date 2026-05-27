import type { Metadata } from 'next';
import SectorDetailPage from '@/components/SectorDetailPage';

export const metadata: Metadata = {
  title: 'Financial Services',
  description:
    'Sector practice — wealth-tech, embedded finance, regtech, insurance, payments. Growth-stage operators and the funds that back them.',
};

export default function FinancialServicesSectorPage() {
  return (
    <SectorDetailPage
      data={{
        title: 'Financial Services',
        subtitle:
          'Wealth-tech, embedded finance, regtech, insurance, payments. Both growth-stage operators and the funds that back them.',
        overview: [
          'Financial services is the sector where regulatory exposure determines whether an investment is investable at all. Most second-look diligence finds the same things: optimistic licence-trajectory assumptions, under-built compliance functions, customer-acquisition economics that depend on regulatory arbitrage holding.',
          "We have built a clear, conservative diligence framework for FS investments — particularly cross-border ones. The framework starts with the regulatory perimeter (today and projected) and works backwards into the unit economics. It is calibrated to what an institutional acquirer's compliance function actually inspects.",
        ],
        theses: [
          {
            title: 'Embedded finance, not horizontal challengers',
            body: 'The horizontal-neobank wave has passed. The interesting returns are in embedded-finance platforms that sit inside vertical software companies and turn financial services into a revenue stream. Diligence question: which embeddings deliver enough margin to matter.',
          },
          {
            title: 'Regtech as a structural growth area',
            body: 'Regulatory cost is rising everywhere. The compliance-tooling vendors who can demonstrably reduce a financial institution\'s regulatory cost have strong defensible economics. We have done diligence on a half-dozen and have a clear taxonomy of which work and which are vapourware.',
          },
          {
            title: 'Insurance tech is finally re-rating',
            body: "After three years of disappointing insurtech IPOs, the survivors trade at sane multiples and have proper underwriting discipline. The interesting opportunities are in MGAs with proprietary distribution channels and specialty insurers with a defensible underwriting edge.",
          },
        ],
        engagementThemes: [
          'Regulatory perimeter assessment for an embedded-finance platform entering EU markets',
          'Commercial diligence on a UK MGA acquisition for a specialty insurance investor',
          'Fund positioning work for a first-time regtech-focused growth fund',
          'Governance design for a wealth-tech operator preparing for a Series B raise',
        ],
        relatedServices: [
          { name: 'Regulatory & Governance', href: '/strategy/regulatory' },
          { name: 'Due Diligence & Advisory', href: '/strategy/due-diligence' },
          { name: 'Fund Strategy & Positioning', href: '/strategy/fund-positioning' },
        ],
      }}
    />
  );
}
