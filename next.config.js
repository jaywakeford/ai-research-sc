const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ai-research-sc-analytics' : '',
  assetPrefix: isProd ? '/ai-research-sc-analytics/' : '',
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  trailingSlash: true,
  reactStrictMode: true,
  webpack: (config) => {
    // Handle canvas dependency
    config.resolve.alias.canvas = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };

    // Handle media files
    config.module.rules.push({
      test: /\.(mp3|mp4|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'media/[name][ext]',
      },
    });

    return config;
  }
};

module.exports = nextConfig; 