import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    }),
    // Add bundle analyzer in analyze mode
    mode === 'analyze' && visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // Use treemap for better visualization
    })
    })] : [])
  ].filter(Boolean),
  build: {
    // Disable source maps in production for smaller bundle
    sourcemap: false,
    // Use esbuild for faster minification
    minify: 'esbuild',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS minification
    cssMinify: true,
    // Optimize chunk splitting
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress TypeScript warnings
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar'],
          utils: ['axios', 'date-fns', 'lodash.debounce'],
          query: ['@tanstack/react-query'],
          forms: ['react-hook-form', 'formik', 'yup', 'zod'],
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            if (id.includes('axios') || id.includes('date-fns') || id.includes('lodash')) {
              return 'vendor-utils';
            }
            if (id.includes('react-hook-form') || id.includes('formik') || id.includes('yup') || id.includes('zod')) {
              return 'vendor-forms';
            }
            return 'vendor';
          }
          
          // App chunks for better code splitting
          if (id.includes('/src/pages/')) {
            return 'pages';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }
          if (id.includes('/src/utils/')) {
            return 'utils';
          }
          if (id.includes('/src/context/')) {
            return 'context';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize build target
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Add build size reporting
    reportCompressedSize: true,
    // Optimize for production
    emptyOutDir: true,
  },
  esbuild: {
    target: 'esnext',
    format: 'esm',
    // Disable TypeScript checking during build
    logLevel: 'error',
  },
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  css: {
    postcss: false
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: []
  },
  // Exclude corrupted stray directories from dependency scanning
  // and ensure Vite only serves from project root
  publicDir: './public',
  root: '.',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Optimize server performance
    fs: {
      strict: false,
    },
    // Enable compression
    middlewareMode: false,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      'date-fns',
      'lodash.debounce',
      'framer-motion',
    ],
    // Exclude problematic dependencies
    exclude: ['@vite/client', '@vite/env'],
  },
  // Performance optimizations
  esbuild: {
    target: 'esnext',
    format: 'esm',
      '@tanstack/react-query',
      'react-helmet-async',
      'framer-motion',
      'clsx',
      'tailwind-merge',
    ],
    // Exclude problematic dependencies
    exclude: ['@vite/client', '@vite/env'],
    // Force pre-bundling for better performance
    force: true,
  },
  // CSS optimizations
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js',
  },
}))
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
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-ui';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            if (id.includes('axios') || id.includes('swr')) {
              return 'vendor-api';
            }
            // All other node_modules
            return 'vendor';
          }
          // Page chunks
          if (id.includes('/pages/')) {
            return 'pages';
          }
          // Component chunks
          if (id.includes('/components/')) {
            return 'components';
          }
        }
      }
    }
  }
});
