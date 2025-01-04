/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compress: true,
  
  // Add base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/ai-research-sc-analytics' : '',
  
  // Enable static file serving from /public directory
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

  // Configure static file serving
  async rewrites() {
    return [
      {
        source: '/media/:path*',
        destination: 'https://jaywakeford.github.io/ai-research-sc-analytics/media/:path*'
      }
    ];
  },

  // Configure headers for media files
  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig; 