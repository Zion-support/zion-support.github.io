import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
<<<<<<< HEAD
      jsxRuntime: 'automatic',
    }),
=======
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    })
>>>>>>> origin/main
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@pages': path.resolve(__dirname, './app/pages'),
      '@utils': path.resolve(__dirname, './utils'),
      '@types': path.resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: 'dist',
<<<<<<< HEAD
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['@heroicons/react'],
          motion: ['framer-motion'],
          ui: ['clsx', 'tailwind-merge'],
=======
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils';
            }
            if (id.includes('web-vitals')) {
              return 'analytics';
            }
            if (id.includes('react-helmet-async')) {
              return 'seo';
            }
            return 'vendor';
          }
          // Split app code by feature
          if (id.includes('/app/components/')) {
            return 'components';
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks';
          }
          if (id.includes('/app/utils/')) {
            return 'utils';
          }
          return 'app';
>>>>>>> origin/main
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
<<<<<<< HEAD
    commonjsOptions: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@heroicons/react/24/outline',
        'framer-motion',
        'clsx',
        'tailwind-merge',
      ],
    },
=======
    chunkSizeWarningLimit: 1000,
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: false,
>>>>>>> origin/main
  },
  server: {
    port: 3000,
    open: true,
<<<<<<< HEAD
=======
    host: true,
    cors: true,
>>>>>>> origin/main
  },
  preview: {
    port: 4173,
    open: true,
<<<<<<< HEAD
  },
});
=======
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@heroicons/react/24/outline',
      'framer-motion',
      'clsx',
      'tailwind-merge'
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
>>>>>>> origin/main
