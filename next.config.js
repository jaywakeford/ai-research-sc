/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'; // Detect environment

const nextConfig = {
  output: 'export',
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH || '/ai-research-sc-analytics' : '',
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH || '/ai-research-sc-analytics' : '',
  trailingSlash: true, // Ensures consistent routing for static sites
  images: {
    unoptimized: true, // Required for Cloudflare Pages and static exports
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
  // Disable type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during builds for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
