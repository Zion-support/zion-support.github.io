import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 100,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          return undefined;
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});