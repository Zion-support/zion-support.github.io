import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheKeyWillBeUsed: async ({ request }) => {
                return `${request.url}?v=1`
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Zion Tech Group',
        short_name: 'Zion Tech',
        description: 'Leading provider of AI-powered solutions and digital transformation services',
        theme_color: '#8B5CF6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  esbuild: {
    // Skip TypeScript checking during build
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    // Performance optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting optimizations
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('axios') || id.includes('js-cookie') || id.includes('uuid')) {
              return 'utils-vendor';
            }
            return 'vendor';
          }
          // Page chunks for lazy loading
          if (id.includes('/src/pages/')) {
            const pageName = id.split('/src/pages/')[1]?.split('/')[0];
            if (pageName) {
              return `page-${pageName}`;
            }
          }
          // Component chunks
          if (id.includes('/src/components/')) {
            const componentName = id.split('/src/components/')[1]?.split('/')[0];
            if (componentName) {
              return `component-${componentName}`;
            }
          }
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for production debugging
    sourcemap: false,
  },
  server: {
    port: 3000,
    host: true,
    // Enable HMR
    hmr: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'axios', 'js-cookie'],
  },
  // CSS optimizations
  css: {
    devSourcemap: true,
  },
});
