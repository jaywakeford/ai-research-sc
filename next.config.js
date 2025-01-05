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

    // Add rule for media files
    config.module.rules.push({
      test: /\.(mp3|mp4|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'media/[name][ext]',
      },
    });

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