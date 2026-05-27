import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Market & Competitive Analysis',
  description:
    'Market-entry feasibility, competitive landscape mapping, customer-segment economics — evidence-led, calibrated to the decision the client needs to make.',
};

export default function MarketAnalysisPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Market & Competitive Analysis',
        subtitle:
          'Market-entry feasibility, competitive landscape mapping, customer-segment economics. Evidence-based, primary-research-led, calibrated to the decision the client actually needs to make.',
        overview: [
          'The market-sizing slide is a cliché because most market-sizing is exactly that: a slide. Bottom-up math, top-down validation, a TAM estimate that survives an analyst’s second read — that’s the bar we work to.',
          'We get specific: which customer cohorts are addressable today, what they currently spend, what would unlock willingness-to-pay, what the competitive set is doing to lock them in. The decision the work informs determines the depth.',
        ],
        steps: [
          {
            step: '01',
            title: 'Decision frame',
            description:
              'What decision will the analysis inform — enter / not enter, build / buy, price / position, acquire / partner? The frame shapes the research, not the other way round.',
          },
          {
            step: '02',
            title: 'Bottom-up sizing',
            description:
              'Customer segment by customer segment, with explicit penetration and willingness-to-pay assumptions. Named, defensible, sensitivity-tested.',
          },
          {
            step: '03',
            title: 'Competitive teardown',
            description:
              'Who is winning where, why, and what would have to be true for our client to take share. We talk to their customers, not just read their press releases.',
          },
          {
            step: '04',
            title: 'Go/no-go recommendation',
            description:
              'A clean recommendation with conviction, alternatives, and the kill-criteria we would watch in 6 / 12 / 24 months to revisit.',
          },
        ],
        deliverables: [
          'Bottom-up TAM / SAM / SOM with documented assumptions',
          'Competitive landscape map with strategic posture per competitor',
          'Customer-segment economics: cohorts, ARPU, retention, CAC',
          'Primary-research interview pack (anonymised quotes + named themes)',
          'Go / no-go recommendation with kill-criteria',
        ],
        relatedSectors: [
          { name: 'Technology', href: '/sectors/technology' },
          { name: 'Business Services', href: '/sectors/business-services' },
          { name: 'Financial Services', href: '/sectors/financial-services' },
        ],
      }}
    />
  );
}
