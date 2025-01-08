/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-research-sc-analytics' : '',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  webpack: (config) => {
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