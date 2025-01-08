/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Optimize media file handling
    config.module.rules.push({
      test: /\.(mp3|mp4|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'media/[name][ext]'
      },
    });

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
    ignoreBuildErrors: true
  },
  // Disable ESLint during builds for faster builds
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig; 