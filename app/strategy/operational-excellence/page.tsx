import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Operational Excellence',
  description:
    'Portfolio-company unit-economics diagnostic, operational scaling, and technology infrastructure decisions — hands-on, not just diagnostic.',
};

export default function OperationalExcellencePage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Operational Excellence',
        subtitle:
          'Portfolio-company unit-economics diagnostic, operational scaling, and technology infrastructure decisions. Hands-on engagements — we build the model, run the data review, and stay in the operating cadence.',
        overview: [
          'Value creation in mid-market companies is operational, not financial. Multiple arbitrage is exhausted; the EBITDA you bank at exit comes from what the company actually does between Monday and Friday.',
          'We embed alongside the management team for the duration of the work. Diagnostic in week one; implementation by week three; operating cadence from week four onwards. Engagements end when the metric we set out to move has moved.',
        ],
        steps: [
          {
            step: '01',
            title: 'Diagnostic',
            description:
              'A 2–3 week deep dive: where the unit economics actually break, where capacity is constrained, where the operating cadence has drift. Quantitative, evidence-led, presented to the board.',
          },
          {
            step: '02',
            title: 'Programme',
            description:
              'Co-author a 90- or 180-day programme with the CEO. Named owners, weekly metrics, exit triggers. We are part of the operating team, not over it.',
          },
          {
            step: '03',
            title: 'In the cadence',
            description:
              'We attend weekly leadership meetings, the operating reviews, and the relevant board sessions. The work is done in the same calendar invites the company already runs.',
          },
          {
            step: '04',
            title: 'Hand over',
            description:
              'We hand over the artefacts (the model, the operating dashboard, the runbook) clean. The company maintains them; we step out.',
          },
        ],
        deliverables: [
          'Operating diagnostic with named opportunity areas and quantified upside',
          '90- or 180-day operating plan with weekly KPIs and named owners',
          'Operating dashboard (Looker / Metabase / Sheets) the management team maintains',
          'Unit-economics model that traces back to operational drivers',
          'Optional: interim COO / operating partner cover during a transition window',
        ],
        relatedSectors: [
          { name: 'Technology', href: '/sectors/technology' },
          { name: 'Business Services', href: '/sectors/business-services' },
          { name: 'Healthcare', href: '/sectors/healthcare' },
        ],
      }}
    />
  );
}
