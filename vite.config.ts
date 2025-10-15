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
            if (id.includes('recharts')) {
              return 'charts';
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
            if (id.includes('SEO') || id.includes('OptimizedImage')) {
              return 'seo-components';
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
          
          // Split AI pages into smaller chunks
          if (id.includes('/app/ai-chatbot') || id.includes('/app/ai-document') || id.includes('/app/ai-form')) {
            return 'ai-basic';
          }
          if (id.includes('/app/ai-voice') || id.includes('/app/ai-fraud') || id.includes('/app/ai-image')) {
            return 'ai-advanced';
          }
          if (id.includes('/app/ai-lead') || id.includes('/app/ai-predictive') || id.includes('/app/ai-price')) {
            return 'ai-analytics';
          }
          if (id.includes('/app/ai-crm') || id.includes('/app/ai-data') || id.includes('/app/ai-email')) {
            return 'ai-business';
          }
          // Split Zion AI into smaller chunks
          if (id.includes('/app/zion-ai-chatbot') || id.includes('/app/zion-ai-code') || id.includes('/app/zion-ai-content')) {
            return 'zion-ai-basic';
          }
          if (id.includes('/app/zion-ai-customer') || id.includes('/app/zion-ai-workflow') || id.includes('/app/zion-ai-email')) {
            return 'zion-ai-business';
          }
          if (id.includes('/app/zion-ai-fraud') || id.includes('/app/zion-ai-image') || id.includes('/app/zion-ai-lead')) {
            return 'zion-ai-advanced';
          }
          if (id.includes('/app/zion-ai-predictive') || id.includes('/app/zion-ai-price') || id.includes('/app/zion-ai-voice')) {
            return 'zion-ai-analytics';
          }
          if (id.includes('/app/zion-ai-')) {
            return 'zion-ai-other';
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
