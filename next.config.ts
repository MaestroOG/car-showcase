import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
