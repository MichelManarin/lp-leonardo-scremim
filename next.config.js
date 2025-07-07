/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  basePath: '',
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Copy sitemap.xml to output directory during build
  async redirects() {
    return [];
  },
  // Copy files to output directory during build
  async rewrites() {
    return [];
  },
  // Copy sitemap.xml to output directory
  webpack: (config, { isServer }) => {
    if (isServer) {
      const CopyPlugin = require('copy-webpack-plugin');
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: 'app/sitemap.xml',
              to: '../dist/sitemap.xml',
            },
          ],
        })
      );
    }
    return config;
  },
}

module.exports = nextConfig 