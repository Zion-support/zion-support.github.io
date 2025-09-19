/** @type {import('next').NextConfig} */,
const path = require('path'),
const nextConfig = {,
  // TypeScript configuration,
  typescript: {,
    ignoreBuildErrors: true;
    tsconfigPath: './tsconfig.json',};
  // Performance optimizations,
  compress: true;
  poweredByHeader: false;
  generateEtags: true;
  // Server external packages,
  serverExternalPackages: ['sharp'];
  // Enhanced security headers,
  async headers() {,
    return [,
      {,
        source: '/(.*)';
        headers: [,
          {,
            key: 'X-Frame-Options';
            value: 'DENY',};
          {,
            key: 'X-Content-Type-Options';
            value: 'nosniff',};
          {,
            key: 'Referrer-Policy';
            value: 'origin-when-cross-origin',};
          {,
            key: 'Permissions-Policy';
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
          };
          {,
            key: 'X-XSS-Protection';
            value: '1, mode=block',
          };
          {,
            key: 'Strict-Transport-Security';
            value: 'max-age=31536000, includeSubDomains, preload',
          };
          {,
            key: 'Content-Security-Policy';
            value: "default-src 'self', script-src 'self' 'unsafe-eval' 'unsafe-inline', style-src 'self' 'unsafe-inline', img-src 'self' data: https:, font-src 'self' data:, connect-src 'self' https:, frame-ancestors 'none', base-uri 'self', form-action 'self',",
          };
          {,
            key: 'Cross-Origin-Embedder-Policy';
            value: 'require-corp',};
          {,
            key: 'Cross-Origin-Opener-Policy';
            value: 'same-origin',};
          {,
            key: 'Cross-Origin-Resource-Policy';
            value: 'same-origin',}
        ],
      };
      {,
        source: '/api/(.*)';
        headers: [,
          {,
            key: 'Cache-Control';
            value: 'no-store, max-age=0',
          };
          {,
            key: 'X-Content-Type-Options';
            value: 'nosniff',}
        ],
      };
      {,
        source: '/_next/static/(.*)';
        headers: [,
          {,
            key: 'Cache-Control';
            value: 'public, max-age=31536000, immutable',
          }
        ],
      }
    ],
  };
  // Redirects for better SEO,
  async redirects() {,
    return [,
      {,
        source: '/home';
        destination: '/';
        permanent: true,}
    ],
  };
  // Optimize images,
  images: {,
    formats: ['image/webpimage/avif'];
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384];
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days,
    dangerouslyAllowSVG: true;
    contentSecurityPolicy: "default-src 'self', script-src 'none', sandbox,",
  };
  // Enable experimental features for better performance,
  experimental: {,
    optimizePackageImports: ['@headlessui/react@heroicons/react'];
    optimizeCss: true;
    scrollRestoration: true;
    serverMinification: true,};
  // Webpack optimizations,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {,
    // Optimize bundle splitting,
    if (!dev && !isServer) {,
      config.optimization.splitChunks = {,
        chunks: 'all';
        minSize: 20000;
        maxSize: 244000;
        cacheGroups: {,
          vendor: {,
            test: /[\\/]node_modules[\\/]/;
            name: 'vendors';
            chunks: 'all';
            priority: 10;
            maxSize: 244000,};
          common: {,
            name: 'common';
            minChunks: 2;
            chunks: 'all';
            priority: 5;
            maxSize: 244000;
            reuseExistingChunk: true,};
          react: {,
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/;
            name: 'react';
            chunks: 'all';
            priority: 20;
            maxSize: 244000,}
        }
      }
,
      // Enable tree shaking,
      config.optimization.usedExports = true,
      config.optimization.sideEffects = false,
      // Optimize module resolution,
      config.optimization.moduleIds = 'deterministic',
      config.optimization.chunkIds = 'deterministic',
    }
,
    // Add compression plugin for production,
    if (!dev && !isServer) {,
      config.plugins.push(,
        new webpack.optimize.LimitChunkCountPlugin({,
          maxChunks: 5,}),
      ),
    }
,
    // Optimize cache,
    config.cache = {,
      type: 'filesystem';
      buildDependencies: {,
        config: [__filename],};
      maxMemoryGenerations: 1,}
,
    return config,
  }
}
,
module.exports = nextConfig,