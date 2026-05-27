import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';
import { getInsightsSorted } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    "Selected writing from Kennis Wiser Consulting — sector views, deal-diligence frameworks, and operating-discipline pieces from the partner team.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function InsightsListingPage() {
  const posts = getInsightsSorted();
  return (
    <>
      <PageHero
        label="Insights"
        title="Sector views, diligence frameworks, operating discipline"
        subtitle="Selected writing from the Kennis Wiser partner team. Less narrative, more evidence — pieces we'd actually send to a client mid-mandate."
      />

      <PageSection>
        {posts.length === 0 ? (
          <p className="text-gray-400 text-lg">
            We&apos;re working on the first set. Check back soon — or{' '}
            <Link href="/contact" className="text-accent hover:underline">
              get in touch
            </Link>{' '}
            with a specific sector question and we&apos;ll write back.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 hover:border-accent/30 transition-colors no-underline"
              >
                <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest text-gray-500">
                  <time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time>
                  <span>·</span>
                  <span>{p.readingMinutes} min read</span>
                  {p.tags && p.tags.length > 0 && (
                    <>
                      <span>·</span>
                      <span className="text-accent">{p.tags[0]}</span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-3">
                  {p.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{p.description}</p>
                <p className="text-sm text-gray-500 mt-4">{p.author}</p>
              </Link>
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}
