/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/ai-research-sc-analytics' : '';

const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
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
  // Ensure static files are copied
  experimental: {
    outputFileTracingRoot: process.cwd(),
    outputStandalone: true,
  },
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  }
}

module.exports = nextConfig 