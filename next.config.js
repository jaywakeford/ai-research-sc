/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|mp4|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: (pathData) => {
          const relativePath = pathData.filename.replace(/^src\//, '');
          return `media/${relativePath}`;
        },
      },
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      os: false,
    };

    return config;
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig; 