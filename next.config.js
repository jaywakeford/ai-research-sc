const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ai-research-sc-analytics' : '',
  assetPrefix: isProd ? '/ai-research-sc-analytics/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true
};

module.exports = nextConfig; 