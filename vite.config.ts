import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@pages': resolve(__dirname, './app/pages'),
      '@utils': resolve(__dirname, './utils'),
      '@types': resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    cssTarget: 'chrome80',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split React into smaller chunks
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('react/') && !id.includes('react-dom')) {
              return 'react-core';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils';
            }
            if (id.includes('web-vitals')) {
              return 'analytics';
            }
            if (id.includes('react-helmet-async')) {
              return 'seo';
            }
            if (id.includes('recharts')) {
              return 'charts';
            }
            if (id.includes('axios')) {
              return 'http';
            }
            return 'vendor';
          }
          // Split app code by feature
          if (id.includes('/app/components/')) {
            return 'components';
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks';
          }
          if (id.includes('/app/utils/')) {
            return 'utils';
          }
          if (id.includes('/app/data/')) {
            return 'data';
          }
          if (id.includes('/app/pages/')) {
            return 'pages';
          }
          return undefined;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Additional optimizations
    assetsInlineLimit: 4096,
    cssMinify: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@heroicons/react/24/outline',
      'framer-motion',
      'clsx',
      'tailwind-merge'
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});