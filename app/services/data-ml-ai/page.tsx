import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Data, ML & AI',
  description:
    'Data foundations, machine learning, and applied AI — including production AI assistants and event-driven automation. We built an AI-native platform with a multi-assistant analyst layer and an automation backbone.',
};

export default function DataMlAiPage() {
  return (
    <ServiceDetailPage
      data={{
        label: 'Service',
        title: 'Data, ML & AI',
        subtitle:
          'Data foundations, machine learning, and applied AI — done as a first principle, not a bolt-on. The platform we built runs a multi-assistant AI analyst layer and an event-driven automation backbone in production.',
        overview: [
          'Most "AI strategy" engagements produce a slide about possibilities. We produce working systems. On our own platform we built an AI assistant layer of specialist analysts and an event bus that runs automation across the estate — AI-native from the data schema up.',
          'We bring that discipline to clients in the right order: get the data foundation right, then layer machine learning where it earns its keep, then add the agent and automation layer on top. We are equally happy advising the board on where AI actually creates value and sitting with your engineers shipping it.',
        ],
        steps: [
          {
            step: '01',
            title: 'Data foundation',
            description:
              'The unglamorous prerequisite. Data model, ownership, quality, and access — because every ML and AI ambition fails on a weak foundation. We fix this first.',
          },
          {
            step: '02',
            title: 'Use-case triage',
            description:
              'Which use cases actually create value, which are theatre. We score candidates on value, feasibility, and data-readiness — and tell you which to drop.',
          },
          {
            step: '03',
            title: 'Build & evaluate',
            description:
              'We build the models and the AI features with an evaluation harness from day one — so you ship on evidence of quality, not vibes. RAG, fine-tuning, or agents as the use case demands.',
          },
          {
            step: '04',
            title: 'Productionise',
            description:
              'Monitoring, guardrails, cost controls, and the human-in-the-loop design that keeps an AI system trustworthy in production — not just impressive in a demo.',
          },
        ],
        deliverables: [
          'Data-foundation assessment and remediation plan',
          'Scored AI/ML use-case portfolio with go/no-go per candidate',
          'Production models / AI features with an evaluation harness',
          'Guardrails, monitoring, cost controls, human-in-the-loop design',
          'Board-level view of where AI creates defensible value',
        ],
        relatedSectors: [
          { name: 'Digital & Platform Engineering', href: '/services/digital-platform' },
          { name: 'Operating Model & Ways of Working', href: '/services/operating-model' },
          { name: 'Enterprise & Agile Transformation', href: '/services/transformation' },
        ],
      }}
    />
  );
}
