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
    optimizeCss: true,
    legacyBrowsers: false,
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
  },
  // Ensure routes manifest is generated
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/research': { page: '/research' },
      '/portfolio': { page: '/portfolio' },
      '/supply-chain': { page: '/supply-chain' },
    };
  }
}

module.exports = nextConfig 