// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // appDir: true,
  // ESLint configuration:
  eslint: {
    ignoreDuringBuilds: true,
    dirs: [ 'src' ],
  },
  // TypeScript configuration:
  typescript: {
    ignoreBuildErrors: true,
  },
  // Images configuration:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
    ],
  },
  // (Optional) Other options like output can be added if needed.
  output: 'standalone',
};

export default nextConfig;
