/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '',
  distDir: '.next',
  webpack: (config, { isServer }) => {
    // Disable Node.js polyfills
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
      canvas: false,
      encoding: false,
    };

    // Skip .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'null-loader',
    });

    // Handle PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]',
      },
    });

    return config;
  },
  // Disable type checking and ESLint during build for speed
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
