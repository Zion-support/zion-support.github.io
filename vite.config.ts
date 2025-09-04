import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  build: {
    sourcemap: false,
    target: 'es2018',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            if (id.includes('react-router')) return 'router-vendor';
            if (id.includes('@radix-ui') || id.includes('framer-motion')) return 'ui-vendor';
            return 'utils-vendor';
          }
        },
      },
    },
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096
  },
  server: {
    port: 3000,
    host: true,
    open: false,
    cors: true,
  },
  preview: {
    port: 4173,
    host: true,
    open: false
  }
});
