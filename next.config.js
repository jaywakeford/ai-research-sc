/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    // Handle canvas and other Node.js dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      encoding: false,
      fs: false,
      path: false,
      os: false,
    };

    // Exclude PDF.js worker from being processed
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
    });

    return config;
  },
  // Disable type checking during build for speed
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for speed
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
