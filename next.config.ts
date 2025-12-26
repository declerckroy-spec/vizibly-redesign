import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vizibly.nl',
        pathname: '/wp-content/**',
      },
    ],
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/seo-specialist-vlissingen',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/seo-specialist-vlissingen/',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/seo-specialist-goes',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/seo-specialist-goes/',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/seo-bureau-terneuzen',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/seo-bureau-terneuzen/',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/SEO-bureau-terneuzen',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
      {
        source: '/SEO-bureau-terneuzen/',
        destination: '/seo-specialist-zeeland/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
