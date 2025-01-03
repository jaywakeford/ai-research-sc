/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1', 'unpkg.com', 'cdnjs.cloudflare.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      crypto: false,
    };

    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'pdfjs-dist': require.resolve('pdfjs-dist/legacy/build/pdf'),
      };
    }

    // Add rule for handling PDF, video, and audio files
    config.module.rules.push({
      test: /\.(pdf|mp4|mp3)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]',
      },
    });

    return config;
  },
  // Enable static file serving from the public directory
  async rewrites() {
    return [
      {
        source: '/static/media/:path*',
        destination: '/static/media/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdnjs.cloudflare.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob: https: http:;
              media-src 'self' blob: data: https: http:;
              connect-src 'self' https://unpkg.com https://cdnjs.cloudflare.com;
              font-src 'self' data:;
              frame-src 'self';
              object-src 'self' blob: data:;
              worker-src 'self' blob: https://unpkg.com https://cdnjs.cloudflare.com;
            `.replace(/\n/g, '').replace(/\s+/g, ' ').trim()
          }
        ],
      },
      {
        source: '/static/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig 