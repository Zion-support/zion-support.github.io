import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@app': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: process.env.NODE_ENV === 'development',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 100, // Reduced threshold for better chunking
    assetsInlineLimit: 4096, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production;
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3, // More passes for better optimization;
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        sequences: true,
        side_effects: false,
        unused: true,
      },
      mangle: {
        safari10: true, // Better Safari compatibility;
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    // Enhanced build optimizations;
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - split into smaller chunks
          if (id.includes('react-dom')) {
            return 'react-dom'
          }
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - split animations and icons
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // AI service pages - group by category
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data')) {
              return 'ai-analytics'
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react-helmet')) {
              return 'vendor-helmet';
            }
            return 'vendor-other';
          }
          
          if (id.includes('/app/pages/')) {
            return 'pages';
          }
          if (id.includes('/app/components/')) {
            return 'components';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize bundle size
    treeshake: true,
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: false,
  },
  // Optimize dependencies;
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      '@heroicons/react/24/outline',
      'lucide-react',
      'framer-motion'
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    target: 'esnext',
  },
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  css: {
    devSourcemap: true,
  },
});
