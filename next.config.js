/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
