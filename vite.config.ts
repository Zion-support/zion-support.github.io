import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@/components': resolve(__dirname, './app/components'),
      '@/pages': resolve(__dirname, './app'),
      '@/utils': resolve(__dirname, './utils'),
      '@/types': resolve(__dirname, './types'),
      '@/hooks': resolve(__dirname, './hooks'),
      '@/config': resolve(__dirname, './config'),
      '@/data': resolve(__dirname, './data'),
      '@/content': resolve(__dirname, './content')
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  buil,
  d: {/* TODO: Fix JSX expression */}
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@types': resolve(__dirname, './src/types'),
      '@app': resolve(__dirname, './app'),
    },
  },
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
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
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-ui';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('web-vitals')) {
              return 'vendor-analytics';
            }
            return 'vendor-misc';
          }
          
          // App chunks
          if (id.includes('/app/ai-')) {
            return 'ai-services';
          }
          if (id.includes('/app/it-')) {
            return 'it-services';
          }
          if (id.includes('/app/components/')) {
            return 'components';
          }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
<<<<<<< HEAD
          router: ['react-router-dom'],
=======
          ui: ['framer-motion', 'lucide-react', '@heroicons/react'],
          router: ['react-router-dom'],
          utils: ['clsx', 'tailwind-merge']
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
          return null;
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
=======
          return 'app';
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
=======
          
          return null;
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
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
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
<<<<<<< HEAD
<<<<<<< HEAD
        drop_debugger: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
        drop_debugger: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
      }
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom']
  },
  css: {
    devSourcemap: true
  }
});