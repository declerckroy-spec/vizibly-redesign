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
};

export default nextConfig;
