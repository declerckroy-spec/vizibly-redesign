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
      // Over pagina redirect
      {
        source: '/over-ons',
        destination: '/over/',
        permanent: true,
      },
      {
        source: '/over-ons/',
        destination: '/over/',
        permanent: true,
      },
      // Nieuwe structuur redirects
      {
        source: '/full-service-seo',
        destination: '/seo/',
        permanent: true,
      },
      {
        source: '/full-service-seo/',
        destination: '/seo/',
        permanent: true,
      },
      {
        source: '/design-techniek',
        destination: '/technische-seo/',
        permanent: true,
      },
      {
        source: '/design-techniek/',
        destination: '/technische-seo/',
        permanent: true,
      },
      // Bestaande redirects
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
