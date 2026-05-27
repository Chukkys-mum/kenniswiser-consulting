import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';
import Link from 'next/link';

export interface ServiceDetail {
  /** Top tagline label (e.g. "Service") */
  label?: string;
  /** Page H1 */
  title: string;
  /** Page hero subtitle */
  subtitle: string;
  /** Short overview paragraph(s) */
  overview: string[];
  /** "How we work" — 3-5 numbered steps */
  steps: Array<{ step: string; title: string; description: string }>;
  /** "What you get" — 3-6 deliverable bullets */
  deliverables: string[];
  /** Sectors most relevant to this service */
  relatedSectors?: Array<{ name: string; href: string }>;
  /** Bottom CTA copy */
  ctaHeading?: string;
  ctaBody?: string;
}

/**
 * Shared layout for /strategy/* service detail pages. Each route file imports
 * this and passes a ServiceDetail config — keeps content authoring lightweight
 * and the visual treatment consistent across all six services.
 */
export default function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  return (
    <>
      <PageHero label={data.label ?? 'Service'} title={data.title} subtitle={data.subtitle} />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Overview
        </p>
        <div className="space-y-5 text-lg leading-relaxed kw-text-body">
          {data.overview.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          How we work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Engagement arc
        </h2>
        <div className="space-y-8">
          {data.steps.map((s) => (
            <div
              key={s.step}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start"
            >
              <div className="text-3xl font-bold text-gradient">{s.step}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-300 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          What you get
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Deliverables
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.deliverables.map((d) => (
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

      {data.relatedSectors && data.relatedSectors.length > 0 && (
        <PageSection variant="darker">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Sectors
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Most relevant to this service
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.relatedSectors.map((s) => (
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
            {data.ctaHeading ?? "Let's scope something"}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {data.ctaBody ??
              'Every engagement starts with a short scoping call. No commitment — we will tell you honestly if we are the right firm.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule a Conversation
            </Link>
            <Link href="/about/our-approach" className="btn-secondary">
              How We Engage
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
