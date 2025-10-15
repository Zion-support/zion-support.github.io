import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@pages': path.resolve(__dirname, './app/pages'),
      '@utils': path.resolve(__dirname, './utils'),
      '@types': path.resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
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
            return 'vendor';
          }
          
          // Split app code by feature with better granularity
          if (id.includes('/app/components/')) {
            if (id.includes('PerformanceMonitor') || id.includes('AccessibilityEnhancer')) {
              return 'monitoring';
            }
            if (id.includes('ErrorBoundary') || id.includes('LoadingSpinner')) {
              return 'core';
            }
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
          
          // Split pages by category
          if (id.includes('/app/ai-') || id.includes('/app/zion-ai-')) {
            return 'ai-pages';
          }
          
          if (id.includes('/app/it-') || id.includes('/app/cloud-') || id.includes('/app/digital-')) {
            return 'it-pages';
          }
          
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
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
