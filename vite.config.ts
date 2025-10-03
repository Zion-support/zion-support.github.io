import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// Optimized Vite configuration for better performance and smaller bundle size
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
    }),
  ],
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'components'),
      '@app': resolve(__dirname, 'app'),
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    target: 'es2020',
    reportCompressedSize: false,
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        preset: 'smallest'
      },
      output: {
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            // Router
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            // UI libraries
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Utility libraries
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-styling';
            }
            if (id.includes('axios')) {
              return 'vendor-http';
            }
            // SEO and analytics
            if (id.includes('react-helmet') || id.includes('web-vitals')) {
              return 'vendor-seo';
            }
            return 'vendor-misc';
          }
          // App chunks - lazy load pages
          if (id.includes('src/pages/')) {
            // Split large page bundles
            if (id.includes('services/')) {
              return 'pages-services';
            }
            if (id.includes('case-studies/')) {
              return 'pages-case-studies';
            }
            if (id.includes('blog/')) {
              return 'pages-blog';
            }
            return 'pages-core';
          }
          // Component chunks
          if (id.includes('src/components/')) {
            if (id.includes('banner') || id.includes('Banner')) {
              return 'components-banners';
            }
            return 'components-core';
          }
          // Charts and data visualization
          if (id.includes('recharts') || id.includes('d3')) {
            return 'vendor-charts';
          }
          // Large libraries
          if (id.includes('lodash') || id.includes('moment')) {
            return 'vendor-large';
          }
          return 'vendor';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/main-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
        unsafe: false,
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
        ascii_only: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  preview: {
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'axios',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  assetsInclude: ['**/*.html', '**/*.new'],
  define: {
    global: 'globalThis',
  },
  esbuild: {
    target: 'es2020',
    format: 'esm',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
})