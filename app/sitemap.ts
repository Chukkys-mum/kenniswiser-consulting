import type { MetadataRoute } from 'next';

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
    { path: '/about/who-we-are', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/firm-overview', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/our-approach', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/strategy', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/careers', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/legal/terms-of-use', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/legal/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/legal/cookie-policy', changeFrequency: 'yearly', priority: 0.2 },
  ];

  return staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
