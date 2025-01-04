/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1', 'unpkg.com', 'cdnjs.cloudflare.com'],
  },
  webpack: (config, { isServer }) => {
    // Handle PDF files
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    // Handle media files
    config.module.rules.push({
      test: /\.(mp4|mp3)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
        publicPath: '/_next/',
        outputPath: 'static/media/'
      }
    });

    return config;
  },
  // Increase the maximum size for static files
  experimental: {
    largePageDataBytes: 128 * 100000, // Increase to ~12.8MB
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