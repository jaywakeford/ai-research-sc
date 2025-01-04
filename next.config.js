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
    // Add fallbacks for node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      crypto: false,
    };

    // Handle PDF.js
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'pdfjs-dist': require.resolve('pdfjs-dist/legacy/build/pdf'),
      };
    }

    // Handle media files
    config.module.rules.push({
      test: /\.(pdf|mp4|mp3)$/i,
      type: 'asset',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    return config;
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdnjs.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https: http:",
              "media-src 'self' blob: data: https: http:",
              "connect-src 'self' https://unpkg.com https://cdnjs.cloudflare.com",
              "font-src 'self' data:",
              "frame-src 'self'",
              "object-src 'self' blob: data:",
              "worker-src 'self' blob: https://unpkg.com https://cdnjs.cloudflare.com"
            ].join('; ')
          }
        ]
      }
    ];
  },
  // Ensure static files are handled correctly
  async rewrites() {
    return [
      {
        source: '/static/media/:path*',
        destination: '/static/media/:path*'
      }
    ];
  }
};

module.exports = nextConfig; 