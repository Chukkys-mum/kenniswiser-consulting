import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';
import Link from 'next/link';

export interface SectorDetail {
  label?: string;
  title: string;
  subtitle: string;
  /** Landscape overview — 2-3 paragraphs */
  overview: string[];
  /** Where we see the action */
  theses: Array<{ title: string; body: string }>;
  /** Recent engagement themes (anonymised) */
  engagementThemes: string[];
  /** Most-relevant services */
  relatedServices?: Array<{ name: string; href: string }>;
}

/**
 * Shared layout for /sectors/* sector detail pages.
 */
export default function SectorDetailPage({ data }: { data: SectorDetail }) {
  return (
    <>
      <PageHero label={data.label ?? 'Sector'} title={data.title} subtitle={data.subtitle} />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Landscape
        </p>
        <div className="space-y-5 text-lg leading-relaxed kw-text-body">
          {data.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Where we see opportunity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Active theses
        </h2>
        <div className="space-y-8">
          {data.theses.map((t) => (
            <div key={t.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">{t.title}</h3>
              <p className="text-gray-300 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Recent engagement themes
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Anonymised, recent
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.engagementThemes.map((d) => (
            <li
              key={d}
              className="flex gap-4 items-start rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
            >
              <span className="w-1.5 h-6 rounded bg-accent mt-1 shrink-0" />
              <span className="text-gray-300">{d}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      {data.relatedServices && data.relatedServices.length > 0 && (
        <PageSection variant="darker">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Most-engaged services in this sector
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] hover:border-accent hover:text-accent text-sm text-gray-300 transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </PageSection>
      )}

      <PageSection>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Working in this space?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We are happy to share sector views in a no-commitment conversation.
            Investor, operator, or board member — start the conversation here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule a Conversation
            </Link>
            <Link href="/strategy" className="btn-secondary">
              All Services
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
