/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  // Standard SSR build so dynamic routes work on Netlify
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname, '..'),
  eslint: {
    // Skip linting during build to avoid legacy option warnings breaking CI
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
