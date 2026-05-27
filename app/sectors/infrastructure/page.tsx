import type { Metadata } from 'next';
import SectorDetailPage from '@/components/SectorDetailPage';

export const metadata: Metadata = {
  title: 'Infrastructure & Energy',
  description:
    'Sector practice — distributed energy, decarbonisation infrastructure, carbon markets, data centres, fibre, towers.',
};

export default function InfrastructureSectorPage() {
  return (
    <SectorDetailPage
      data={{
        title: 'Infrastructure & Energy',
        subtitle:
          'Distributed energy, decarbonisation infrastructure, carbon markets, data centres, fibre, towers. The capital cycles here are longer; the regulatory exposure is sharper; the operating disciplines are different.',
        overview: [
          "Infrastructure is the asset class where mistakes are durable. A poorly underwritten data centre can't be re-tenanted; a regulatory misstep on a solar portfolio can wipe the equity. We treat diligence in this sector with the patience and the technical depth it requires.",
          "Two transitions are reshaping infrastructure investment: decarbonisation (regulatory + economic tailwinds for clean energy infrastructure) and the digital infrastructure boom (data centres, fibre, towers driven by AI compute demand and 5G). Both have structural tailwinds; both have specific operational and regulatory risks we work to surface.",
        ],
        theses: [
          {
            title: 'Distributed energy economics',
            body: 'On-site solar, behind-the-meter storage, and EV-charging infrastructure are now economic in most UK and EU markets. The diligence question is operator quality, customer-credit risk, and grid-connection cost. We have a clear model for each.',
          },
          {
            title: 'Data centres for AI compute',
            body: 'Demand is structural; the question is power availability and grid-connection timeline, not customer demand. We have a working framework for evaluating data-centre acquisitions against the new AI-compute demand curve.',
          },
          {
            title: 'Carbon markets, post-hype',
            body: 'Voluntary carbon markets are in the trough of disillusionment. The interesting investment opportunity is the infrastructure (MRV platforms, registries, exchange tooling) that survives the shakeout — not the projects themselves.',
          },
        ],
        engagementThemes: [
          'Commercial diligence on a UK distributed-solar portfolio for an institutional infrastructure investor',
          'Regulatory perimeter assessment for a behind-the-meter battery operator entering new EU markets',
          'Operating diagnostic on an EV-charging network preparing for a Series C raise',
          'Strategic-buyer mapping for a UK-listed carbon-MRV business',
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
