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
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    treeshake: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react-dom')) {
            return 'react-dom'
          }
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
          }
          if (id.includes('react-router')) {
            return 'router'
          }
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          if (id.includes('recharts')) {
            return 'charts'
          }
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
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