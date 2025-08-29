import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}']
      }
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-aspect-ratio', '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-context-menu', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-popover', '@radix-ui/react-progress', '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge', 'date-fns', 'zod', 'react-hook-form', '@hookform/resolvers'],
          'charts-vendor': ['recharts', 'd3-color', 'd3-format', 'd3-path', 'd3-time-format'],
          'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'query-vendor': ['@tanstack/react-query'],
          'i18n-vendor': ['i18next', 'i18next-browser-languagedetector', 'react-i18next'],
          'form-vendor': ['react-day-picker'],
          'pwa-vendor': ['react-helmet-async', 'react-error-boundary', 'react-remove-scroll-bar', 'use-callback-ref', 'use-sidecar'],
          'stripe-vendor': ['@stripe/stripe-js']
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk'
          return `js/${facadeModuleId}-[hash].js`
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  resolve: {
    alias: {
      '@': '/workspace/src'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    port: 5173,
    host: true
  }
})
