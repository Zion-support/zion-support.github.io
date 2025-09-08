import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('@tanstack')) {
              return 'vendor-query';
            }
            // All other node_modules
            return 'vendor';
          }
          // App chunks
          if (id.includes('src/components')) {
            return 'components';
          }
          if (id.includes('src/pages')) {
            return 'pages';
          }
          if (id.includes('src/context')) {
            return 'context';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500,
    target: 'esnext',
    cssCodeSplit: true,
    reportCompressedSize: true
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000,
    open: true
  }
})
