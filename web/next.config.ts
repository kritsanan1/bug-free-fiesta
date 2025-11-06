import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@bug-free-fiesta/shared', '@bug-free-fiesta/ui', '@bug-free-fiesta/utils'],
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['@bug-free-fiesta/ui'],
  },
};

export default nextConfig;
