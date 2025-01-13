/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-research-sc-analytics', // Ensure basePath is set correctly
  assetPrefix: '/ai-research-sc-analytics', // Align assetPrefix with basePath
  trailingSlash: true, // Ensures consistent routing for static exports
  images: {
    unoptimized: true, // Required for static exports and Cloudflare Pages
  },
  webpack: (config) => {
    // Optimize media file handling
    config.module.rules.push({
      test: /\.(mp3|mp4|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'media/[name][ext]',
      },
    });

    // Handle PDF.js worker
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[name][ext]',
      },
    });

    // Ignore canvas module
    config.resolve.alias.canvas = false;

    // Reduce bundle size by excluding unnecessary modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      os: false,
    };

    return config;
  },
  typescript: {
    ignoreBuildErrors: true, // Disable type-checking for faster builds
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds for faster builds
  },
};

module.exports = nextConfig;
