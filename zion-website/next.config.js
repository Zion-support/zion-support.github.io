/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  // Next.js 15: move experimental.outputFileTracingRoot to top-level
  outputFileTracingRoot: path.join(__dirname, '..'),
  eslint: {
    // Netlify builds fail if ESLint config contains unsupported options; skip at build time
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
