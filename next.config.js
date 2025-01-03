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
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1'],
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
      }
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
    };

    config.module.rules.push(
      {
        test: /pdf\.worker\.(min\.)?js/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[name].[hash][ext]'
        }
      },
      {
        test: /\.(pdf|mp4|mp3)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
          publicPath: '/_next/',
        }
      }
    );

    return config;
  },
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
      {
        source: '/pdfs/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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