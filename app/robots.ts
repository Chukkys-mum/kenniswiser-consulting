import type { MetadataRoute } from 'next';

const SITE_URL = 'https://kenniswiserconsulting.com';

/**
 * Robots policy. Allow everything except the API routes / cookie-consent
 * preview routes. Crawlers find the sitemap at /sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
