/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Proxy bypass settings
    HTTP_PROXY: '',
    HTTPS_PROXY: '',
    NO_PROXY: 'localhost,127.0.0.1',
    // Set default port
    PORT: process.env.PORT || '9876'
  },
  // Ensure consistent server settings
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  // Other Next.js configurations
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  assetPrefix: '.',
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1', 'unpkg.com', 'cdnjs.cloudflare.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8080',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        pathname: '/pdfjs-dist/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        pathname: '/ajax/libs/**',
      }
    ],
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

    // Handle static files
    config.module.rules.push({
      test: /\.(pdf|mp4|mp3)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
        publicPath: '/_next/',
      }
    });

    return config;
  },
  // Ensure static files are copied to the output directory
  experimental: {
    outputFileTracingRoot: __dirname,
    outputFileTracingIncludes: {
      '/**': [
        './public/**/*',
        '.next/static/**/*'
      ]
    }
  },
  async rewrites() {
    return [
      {
        source: '/pdfs/:path*',
        destination: '/public/pdfs/:path*'
      },
      {
        source: '/videos/:path*',
        destination: '/public/videos/:path*'
      },
      {
        source: '/audio/:path*',
        destination: '/public/audio/:path*'
      }
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
        source: '/public/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/octet-stream'
          },
          {
            key: 'Content-Disposition',
            value: 'inline'
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ]
      }
    ];
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
}

module.exports = nextConfig 