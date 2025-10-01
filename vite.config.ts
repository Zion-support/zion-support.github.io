import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        preset: 'smallest'
      },
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            if (id.includes('axios')) {
              return 'vendor-http';
            }
            if (id.includes('web-vitals')) {
              return 'vendor-vitals';
            }
            // All other node_modules go to vendor
            return 'vendor';
          }
          // App chunks - more granular splitting
          if (id.includes('src/pages/')) {
            return 'pages';
          }
          if (id.includes('src/components/')) {
            // Split large components into separate chunks
            if (id.includes('Advanced') || id.includes('Comprehensive')) {
              return 'components-advanced';
            }
            if (id.includes('Dashboard') || id.includes('Monitor')) {
              return 'components-dashboard';
            }
            return 'components';
          }
          if (id.includes('src/utils/')) {
            // Split utils by functionality
            if (id.includes('advanced') || id.includes('comprehensive')) {
              return 'utils-advanced';
            }
            if (id.includes('performance') || id.includes('monitor')) {
              return 'utils-performance';
            }
            return 'utils';
          }
          if (id.includes('src/hooks/')) {
            return 'hooks';
          }
          // Default chunk
          return 'app';
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop().replace('.tsx', '').replace('.ts', '')
            : 'chunk';
          return `assets/js/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: 'assets/js/main-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
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
      'web-vitals',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  define: {
    global: 'globalThis',
  },
  esbuild: {
    target: 'esnext',
    format: 'esm',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
})