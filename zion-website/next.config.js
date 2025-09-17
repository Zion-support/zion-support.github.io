/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, '..'),
  eslint: {
    // Skip linting during build to avoid legacy option warnings breaking CI
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
