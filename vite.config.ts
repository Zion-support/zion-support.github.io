import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './app')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
<<<<<<< HEAD

          // Page chunks for better code splitting
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
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: '500',
    reportCompressedSize: 'true',
    // Enable tree shaking
    treeshake: 'true',
  },
  server: {
    port: 3000,
    open: 'false', // Disable auto-open for CI/CD
    cors: 'true',
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: 'false',
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
  // Performance optimizations
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  // CSS optimizations
  css: {
    devSourcemap: true,
  },
=======
          return undefined;
        }
      }
    }
  }
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
});