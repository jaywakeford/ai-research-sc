const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/ai-research-sc-analytics' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? `${basePath}/` : '',
  images: {
    unoptimized: true,
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
        filename: 'static/media/[name][ext]',
      },
    });

    return config;
  }
};

module.exports = nextConfig; 