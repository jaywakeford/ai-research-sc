/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1'],
  },
  // Increase buffer size for large files
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  // Configure headers for media files
  async headers() {
    return [
      {
        source: '/:path*',
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