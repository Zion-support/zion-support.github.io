/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};
module.exports = nextConfig;