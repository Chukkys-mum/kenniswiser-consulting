import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Enterprise & agile transformation, digital & platform engineering, data/ML/AI, venture building, operating-model design, and leadership coaching — delivered by the team that built the Kennis and Septimius group.',
};

interface ServiceTile {
  slug: string;
  title: string;
  description: string;
}

const services: ServiceTile[] = [
  {
    slug: 'transformation',
    title: 'Enterprise & Agile Transformation',
    description:
      'Transformation at scale — SAFe, LeSS, Nexus, Spotify, or bespoke. Led by people who ran it at BP, Vodafone, ING, and BNP Paribas.',
  },
  {
    slug: 'digital-platform',
    title: 'Digital & Platform Engineering',
    description:
      'Platform and product engineering, cloud architecture, DevOps — by the team that built the Septimius ecosystem (24 modules, 600+ services).',
  },
  {
    slug: 'data-ml-ai',
    title: 'Data, ML & AI',
    description:
      'Data foundations, machine learning, and applied AI — including production AI assistants and event-driven automation. AI-native, not bolted on.',
  },
  {
    slug: 'venture-building',
    title: 'Venture Building & Fund Structuring',
    description:
      'Standing up ventures, operating companies, and fund vehicles — from the team that structured a Jersey fund GP and its operating company.',
  },
  {
    slug: 'operating-model',
    title: 'Operating Model & Ways of Working',
    description:
      'Operating-model and organisation design, Lean Six Sigma, performance management, and automation. The machinery that makes strategy executable.',
  },
  {
    slug: 'leadership-coaching',
    title: 'Leadership & Coaching',
    description:
      'Executive and agile-leadership coaching, practitioner development, and inclusive-leadership programmes that make the change stick.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What We Do"
        subtitle="Six services across transformation, technology, and venture building. Every engagement is partner-led and grounded in work we have actually shipped — including building our own group."
      />

      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 hover:border-accent/30 transition-colors no-underline"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-500 group-hover:text-accent transition-colors shrink-0 mt-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-400 leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            We built our own group
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proof, not promises
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We structured a fund platform, stood up an operating company, and
            architected an AI-native technology ecosystem — for ourselves. When
            we advise, it is from the operator&apos;s chair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
            <Link href="/about/who-we-are" className="btn-secondary">
              How We Got Here
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
