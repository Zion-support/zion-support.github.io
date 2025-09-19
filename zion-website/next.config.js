const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  // Silence workspace root inference warning in monorepo
  outputFileTracingRoot: path.join(__dirname, '..')
}

module.exports = nextConfig
