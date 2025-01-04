/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compress: true,
  webpack: (config, { isServer }) => {
    // Handle media files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|pdf)(\?.*)?$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
      };
    }

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
        source: '/pdfs/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf'
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes'
          }
        ]
      },
      {
        source: '/audio/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'audio/mpeg'
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes'
          }
        ]
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4'
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig; 