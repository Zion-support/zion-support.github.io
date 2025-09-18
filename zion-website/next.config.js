/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  // Next.js 15: move experimental.outputFileTracingRoot to top-level
  outputFileTracingRoot: path.join(__dirname, '..'),
  eslint: {
    // Netlify builds fail if ESLint config contains unsupported options; skip at build time
    ignoreDuringBuilds: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },
}

module.exports = nextConfig
