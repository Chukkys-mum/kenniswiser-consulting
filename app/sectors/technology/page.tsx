import type { Metadata } from 'next';
import SectorDetailPage from '@/components/SectorDetailPage';

export const metadata: Metadata = {
  title: 'Technology & Software',
  description:
    'Sector practice — B2B SaaS, vertical AI, developer infrastructure, data platforms. Where AI capability is colliding with software economics.',
};

export default function TechnologySectorPage() {
  return (
    <SectorDetailPage
      data={{
        title: 'Technology & Software',
        subtitle:
          'B2B SaaS, vertical AI, developer infrastructure, data platforms. Where AI capability is colliding with software economics — and where most theses need second-look diligence.',
        overview: [
          "Two years of generative-AI hype has produced more decks than working products. The valuations on the survivors are reasonable; the valuations on the still-finding-product-market-fit cohort are still detached from the unit economics. Our work in tech is mostly about telling those two apart.",
          "Vertical AI — software that does AI inside a specific industry's workflow — is the most interesting place to look right now. Defensible distribution, real data moats, predictable unit economics. We've done diligence on a dozen vertical-AI businesses in the last 18 months.",
        ],
        theses: [
          {
            title: 'Vertical AI > horizontal',
            body: "The horizontal model arms race is brutal. The interesting returns are coming from businesses that own a workflow (legal docs, clinical letters, freight invoices) and use AI to compress the cost of doing it. Defensible distribution, real data, sticky workflows.",
          },
          {
            title: 'Developer infrastructure is back',
            body: 'Open-source models, agent frameworks, evaluation tooling, vector DBs. The picks-and-shovels companies in AI infrastructure have real revenue and reasonable multiples. Diligence question: which layer of the stack will commoditise first?',
          },
          {
            title: 'AI-native operations inside boring software',
            body: 'The most underappreciated thesis: take a $50M ARR vertical SaaS company with 60% gross margins and AI-native its operations down to 80%. The multiple rerating on that EBITDA shift is the source of the next decade of mid-market software returns.',
          },
        ],
        engagementThemes: [
          'Commercial diligence for a mid-cap PE fund acquiring a vertical AI platform',
          'Operating-model diagnostic at a $40M ARR vertical SaaS portfolio company',
          'Fund-positioning work for a first-time AI-infrastructure fund',
          'Exit-readiness programme for an AI-native operations business heading into a strategic process',
        ],
        relatedServices: [
          { name: 'Due Diligence & Advisory', href: '/strategy/due-diligence' },
          { name: 'Operational Excellence', href: '/strategy/operational-excellence' },
          { name: 'Exit Strategy & M&A', href: '/strategy/ma-advisory' },
        ],
      }}
    />
  );
}
