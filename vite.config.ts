import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    }),
  ],
  build: {
    // Output directory for Netlify compatibility
    outDir: 'dist',
    // Disable source maps in production for smaller bundle
    sourcemap: false,
    // Use terser for better minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress TypeScript warnings
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Router
            if (id.includes('react-router')) {
              return 'router';
            }
            // Query library
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            // UI libraries
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui';
            }
            // Forms
            if (id.includes('react-hook-form') || id.includes('formik') || id.includes('yup') || id.includes('zod')) {
              return 'forms';
            }
            // Animation
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            // Utilities
            if (id.includes('axios') || id.includes('date-fns') || id.includes('lodash')) {
              return 'utils';
            }
            // Large libraries
            if (id.includes('@stripe') || id.includes('@supabase') || id.includes('ethers')) {
              return 'external';
            }
            // Everything else
            return 'vendor';
          }
          // Component chunks
          if (id.includes('/src/components/')) {
            return 'components';
          }
          // Page chunks
          if (id.includes('/src/pages/')) {
            return 'pages';
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    // Enable HMR for better development experience
    hmr: {
      overlay: true,
    },
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
      'framer-motion',
      'lucide-react',
      '@tanstack/react-query',
    ],
    // Exclude problematic dependencies
    exclude: ['@vite/client', '@vite/env'],
  },
  // Performance optimizations
  css: {
    devSourcemap: true,
  },
}))