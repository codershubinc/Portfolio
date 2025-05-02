import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'capsule-render.vercel.app',
        port: '',
        pathname: '/api/**',
      },
    ],
  }
};

export default nextConfig;
