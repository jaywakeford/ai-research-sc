/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: isProd ? '/ai-research-sc-analytics' : '',
  assetPrefix: isProd ? '/ai-research-sc-analytics/' : '',
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
  // Ensure CSS modules work correctly
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  }
}

module.exports = nextConfig 