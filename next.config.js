/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1'],
  },
  webpack: (config, { isServer }) => {
    // Handle media files
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      }],
    });

    // Handle PDF files
    config.module.rules.push({
      test: /\.pdf$/i,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      }],
    });

    return config;
  },
  // Increase buffer size for large files
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  // Configure headers for media files
  async headers() {
    return [
      {
        source: '/static/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  }
};

module.exports = nextConfig; 