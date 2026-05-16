/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  basePath: '',
  assetPrefix: '/',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  generateBuildId: async () => {
    return 'zion-tech-group-v1';
  },
};
module.exports = nextConfig;