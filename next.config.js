/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  },
  webpack: (config, { isServer }) => {
    // Handle canvas dependency
    config.resolve.alias.canvas = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };

    // Optimize PDF.js worker
    if (!isServer) {
      config.resolve.alias['pdfjs-dist'] = 'pdfjs-dist/webpack';
    }

    return config;
  },
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  }
}

module.exports = nextConfig 