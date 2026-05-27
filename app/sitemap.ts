import type { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';

const SITE_URL = 'https://kenniswiserconsulting.com';

/**
 * Static sitemap covering every route surfaced in the navbar / footer.
 * Generated at build time — Next.js serves this at /sitemap.xml.
 *
 * When new routes ship (insights, blog, per-service detail pages), add
 * them here. Routes that 404 in production must NOT be listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    // About
    { path: '/about/who-we-are', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/firm-overview', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/our-approach', changeFrequency: 'monthly', priority: 0.8 },
    // Strategy index + per-service
    { path: '/strategy', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/strategy/due-diligence', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/strategy/fund-positioning', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/strategy/operational-excellence', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/strategy/market-analysis', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/strategy/ma-advisory', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/strategy/regulatory', changeFrequency: 'monthly', priority: 0.85 },
    // Sectors
    { path: '/sectors/technology', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sectors/real-estate', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sectors/infrastructure', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sectors/financial-services', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sectors/healthcare', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sectors/business-services', changeFrequency: 'monthly', priority: 0.8 },
    // Insights index + posts
    { path: '/insights', changeFrequency: 'weekly', priority: 0.85 },
    // Other
    { path: '/careers', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/legal/terms-of-use', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/legal/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/legal/cookie-policy', changeFrequency: 'yearly', priority: 0.2 },
  ];

  const insightRoutes = insights.map((p) => ({
    url: `${SITE_URL}/insights/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...insightRoutes,
  ];
}
