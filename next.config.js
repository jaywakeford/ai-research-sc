/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Webpack config for PDF.js worker
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
  // Disable type checking during build for speed
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for speed
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
