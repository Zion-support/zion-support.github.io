
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          helmet: ['react-helmet-async'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    target: 'es2020',
    modulePreload: {
      polyfill: false,
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  css: {
    devSourcemap: true,
  },
});
