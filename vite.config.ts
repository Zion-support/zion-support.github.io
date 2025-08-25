import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@types': resolve(__dirname, 'src/types'),
      '@store': resolve(__dirname, 'src/store'),
      '@lib': resolve(__dirname, 'src/lib'),
    },
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI Component libraries
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
          ],
          
          // Animation and motion libraries
          'animation-vendor': ['framer-motion', 'embla-carousel-react'],
          
          // Form and validation libraries
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // State management
          'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          
          // Data visualization and charts
          'chart-vendor': ['recharts'],
          
          // Drag and drop
          'dnd-vendor': ['@hello-pangea/dnd'],
          
          // Internationalization
          'i18n-vendor': ['i18next', 'i18next-browser-languagedetector', 'react-i18next'],
          
          // Input components
          'input-vendor': ['input-otp', 'react-day-picker', 'date-fns'],
          
          // Utility libraries
          'utility-vendor': ['axios', 'clsx', 'tailwind-merge', 'class-variance-authority', 'cmdk'],
          
          // Icon libraries
          'icon-vendor': ['lucide-react', 'react-icons'],
          
          // PDF and document generation
          'pdf-vendor': ['jspdf', 'jspdf-autotable'],
          
          // Payment processing
          'stripe-vendor': ['@stripe/stripe-js'],
          
          // Database and backend
          'supabase-vendor': ['@supabase/supabase-js'],
          
          // Query management
          'query-vendor': ['@tanstack/react-query'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'framer-motion',
      'embla-carousel-react',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
      '@reduxjs/toolkit',
      'react-redux',
      'recharts',
      '@hello-pangea/dnd',
      'i18next',
      'i18next-browser-languagedetector',
      'react-i18next',
      'input-otp',
      'react-day-picker',
      'date-fns',
      'axios',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'cmdk',
      'lucide-react',
      'react-icons',
      'jspdf',
      'jspdf-autotable',
      '@stripe/stripe-js',
      '@supabase/supabase-js',
      '@tanstack/react-query',
    ],
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
  // PostCSS configuration removed due to ES module compatibility issues
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
})
