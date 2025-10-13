import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@/components': resolve(__dirname, './app/components'),
      '@/pages': resolve(__dirname, './app'),
      '@/utils': resolve(__dirname, './utils'),
      '@/types': resolve(__dirname, './types'),
      '@/hooks': resolve(__dirname, './hooks'),
      '@/config': resolve(__dirname, './config'),
      '@/data': resolve(__dirname, './data'),
      '@/content': resolve(__dirname, './content'),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 150, // Reduced threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
          // Core React libraries - keep smaller
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - split further
          if (id.includes('framer-motion')) {
            return 'ui-animations'
          }
          if (id.includes('lucide-react')) {
            return 'ui-icons'
          }
          // SEO and meta - separate chunk
          if (id.includes('react-helmet') || id.includes('gray-matter')) {
            return 'seo'
          }
          // Analytics and monitoring - separate chunk
          if (id.includes('web-vitals') || id.includes('analytics')) {
            return 'analytics'
          }
          // Large libraries - separate chunks
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Node modules - vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          // Performance monitoring - separate chunk
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling - separate chunk
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Components - split by functionality
          if (id.includes('/components/')) {
            if (id.includes('Enhanced') || id.includes('Advanced')) {
              return 'enhanced-components'
            }
            if (id.includes('Futuristic') || id.includes('Neon')) {
              return 'ui-components'
            }
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'monitoring-components'
            }
            return 'base-components'
          }
          // AI service pages - group by category with smaller chunks
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            return 'ai-services'
          }
          // Group all Zion service pages
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            return 'zion-services'
          }
          // Group all 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Main pages - split further
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            if (id.includes('about') || id.includes('contact') || id.includes('services')) {
              return 'core-pages'
            }
            return 'main-pages'
          }
          // Components - group by type
          if (id.includes('/components/')) {
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'components-performance'
            }
            if (id.includes('SEO') || id.includes('Accessibility')) {
              return 'components-seo'
            }
            if (id.includes('Loading') || id.includes('Error')) {
              return 'components-ui'
            }
            return 'components-common'
          }
          // Default chunk for other modules
          return 'vendor'
        },
      },
    },
    rollupOptions: {
      output: {
        // manualChunks is handled by the function in terserOptions above
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-helmet-async',
      'web-vitals',
      'recharts',
    ],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});