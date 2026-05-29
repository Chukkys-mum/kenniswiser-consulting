const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https: wss:; frame-ancestors 'self'",
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      // The site repositioned from an investment-advisory framing to a
      // transformation / digital / data-AI framing. Old /strategy and
      // /sectors URLs (briefly live) redirect to the new /services routes
      // so no link rots and search equity is preserved.
      { source: '/strategy', destination: '/services', permanent: true },
      { source: '/strategy/due-diligence', destination: '/services/venture-building', permanent: true },
      { source: '/strategy/fund-positioning', destination: '/services/venture-building', permanent: true },
      { source: '/strategy/operational-excellence', destination: '/services/operating-model', permanent: true },
      { source: '/strategy/market-analysis', destination: '/services/data-ml-ai', permanent: true },
      { source: '/strategy/ma-advisory', destination: '/services/venture-building', permanent: true },
      { source: '/strategy/regulatory', destination: '/services/operating-model', permanent: true },
      // Sectors collapsed into services + the about story
      { source: '/sectors/:slug', destination: '/services', permanent: true },
    ];
  },
};

module.exports = nextConfig;
