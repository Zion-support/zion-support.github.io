import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react(),
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
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react-vendor';
          }
          
          // UI Component libraries
          if (id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          
          // Animation and motion libraries
          if (id.includes('framer-motion') || id.includes('embla-carousel-react')) {
            return 'animation-vendor';
          }
          
          // Form and validation libraries
          if (id.includes('react-hook-form') || id.includes('@hookform/resolvers') || id.includes('zod')) {
            return 'form-vendor';
          }
          
          // State management
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
            return 'state-vendor';
          }
          
          // Data visualization and charts
          if (id.includes('recharts')) {
            return 'chart-vendor';
          }
          
          // Drag and drop
          if (id.includes('@hello-pangea/dnd')) {
            return 'dnd-vendor';
          }
          
          // Internationalization
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'i18n-vendor';
          }
          
          // Input components
          if (id.includes('input-otp') || id.includes('react-day-picker') || id.includes('date-fns')) {
            return 'input-vendor';
          }
          
          // Utility libraries
          if (id.includes('axios') || id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority') || id.includes('cmdk')) {
            return 'utility-vendor';
          }
          
          // Icon libraries
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'icon-vendor';
          }
          
          // PDF and document generation
          if (id.includes('jspdf')) {
            return 'pdf-vendor';
          }
          
          // Payment processing
          if (id.includes('@stripe/stripe-js')) {
            return 'stripe-vendor';
          }
          
          // Database and backend
          if (id.includes('@supabase/supabase-js')) {
            return 'supabase-vendor';
          }
          
          // Query management
          if (id.includes('@tanstack/react-query')) {
            return 'query-vendor';
          }
          
          // Default vendor chunk for other dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
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
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
    },
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
    // Exclude problematic packages from optimization
    exclude: ['@cypress/request'],
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
  css: {
    postcss: {
      plugins: [
        (await import('tailwindcss')).default,
        (await import('autoprefixer')).default,
      ],
    },
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
}))
