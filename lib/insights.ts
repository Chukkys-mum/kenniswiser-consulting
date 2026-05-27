/**
 * Insights / blog post registry.
 *
 * For now this is a hand-curated TypeScript list — each entry has its own
 * route under `/insights/[slug]/page.tsx`. When we ship MDX or a CMS later,
 * the listing page reads from the same registry and only the source format
 * for the body changes.
 *
 * Adding a new post:
 *   1. Add an entry here with slug + metadata
 *   2. Create `app/insights/{slug}/page.tsx` with the body
 *   3. The listing page auto-picks it up
 */

export interface InsightSummary {
  slug: string;
  title: string;
  description: string;
  /** ISO date — YYYY-MM-DD */
  publishedAt: string;
  /** Reading time in minutes (rough — used in listing) */
  readingMinutes: number;
  /** Author short string */
  author: string;
  /** Optional tag — used for filtering later */
  tags?: string[];
}

export const insights: InsightSummary[] = [
  {
    slug: 'vertical-ai-not-horizontal',
    title: 'Vertical AI is winning. Here\'s the diligence framework.',
    description:
      'Why the next decade of software returns will come from AI that owns a workflow, not AI that builds infrastructure for it.',
    publishedAt: '2026-05-20',
    readingMinutes: 7,
    author: 'Kennis Wiser Research',
    tags: ['Technology', 'AI', 'Due Diligence'],
  },
];

export function getInsightBySlug(slug: string): InsightSummary | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getInsightsSorted(): InsightSummary[] {
  return [...insights].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
}
