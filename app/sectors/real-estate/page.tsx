import type { Metadata } from 'next';
import SectorDetailPage from '@/components/SectorDetailPage';

export const metadata: Metadata = {
  title: 'Real Estate & PropTech',
  description:
    'Sector practice — residential, build-to-rent, affordable housing, commercial. Property-management technology and PropTech platforms.',
};

export default function RealEstateSectorPage() {
  return (
    <SectorDetailPage
      data={{
        title: 'Real Estate & PropTech',
        subtitle:
          'Residential, build-to-rent, affordable housing, commercial. Property-management technology and PropTech platforms — where the operating layer is finally catching up with the asset layer.',
        overview: [
          'UK real estate is in a structural transition. Interest-rate normalisation has reset valuations; supply constraints in residential keep rents bid; the regulatory perimeter (EPCs, building safety, leaseholder protections) keeps shifting. The next decade of returns will come from operators who can run real assets with the cost discipline of a software company.',
          'PropTech, after a decade of overpromising, has settled into a small set of categories that work: property management automation, leasing automation, ESG / EPC compliance tooling, residential underwriting platforms. We do diligence on these regularly and have a clear view on what wins.',
        ],
        theses: [
          {
            title: 'Affordable housing as long-duration credit',
            body: 'Affordable housing with grant funding, RP partnerships, and 30+ year leases is one of the cleanest UK long-duration credit-like exposures. The diligence question is operator quality and asset-level deliverability, not the credit itself.',
          },
          {
            title: 'Build-to-rent at scale',
            body: 'BTR has matured. The interesting questions now are operating leverage (can the management platform scale to 10k units without breaking?) and ESG compliance (which buildings can hit EPC C on retrofit, which can\'t).',
          },
          {
            title: 'PropTech consolidation',
            body: 'A wave of point-solution PropTech tools is now small enough to consolidate into platform businesses. Roll-up theses with real operating value are starting to work.',
          },
        ],
        engagementThemes: [
          'Commercial diligence on a BTR platform acquisition by a Tier 1 institutional investor',
          'Operating diagnostic at a community-housing operator preparing for a debt refinance',
          'Strategic-buyer mapping for a UK PropTech business exploring an exit',
          'Fund positioning work for a first-time residential debt fund',
        ],
        relatedServices: [
          { name: 'Due Diligence & Advisory', href: '/strategy/due-diligence' },
          { name: 'Operational Excellence', href: '/strategy/operational-excellence' },
          { name: 'Regulatory & Governance', href: '/strategy/regulatory' },
        ],
      }}
    />
  );
}
