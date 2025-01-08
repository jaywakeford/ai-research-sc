/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-research-sc-analytics' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-research-sc-analytics' : '',
  reactStrictMode: true,
  webpack: (config) => {
    // Handle media files with proper paths
    config.module.rules.push({
      test: /\.(mp3|mp4|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: (pathData) => {
          // Keep the original path structure
          const filePath = pathData.filename.replace(/^src\//, '');
          return `static/media/${filePath}`;
        },
      },
    });

    // Handle canvas dependency
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      os: false,
    };

    // Optimize PDF handling
    config.externals = [...(config.externals || []), { canvas: "canvas" }];

    return config;
  },
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig; 