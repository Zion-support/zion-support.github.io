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
    // Bundle analyzer would go here if needed
  ].filter(Boolean),
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
        // Manual chunk splitting for better caching and performance
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            // React ecosystem - core
            if (id.includes('react') && !id.includes('react-router')) {
              return 'react-core';
            }
            // React DOM
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            // Router
            if (id.includes('react-router')) {
              return 'router';
            }
            // Query library
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            // UI libraries - split by size
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Forms
            if (id.includes('react-hook-form') || id.includes('formik') || id.includes('yup') || id.includes('zod')) {
              return 'forms';
            }
            // Animation - large library
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            // Utilities - split by usage
            if (id.includes('axios')) {
              return 'http';
            }
            if (id.includes('date-fns')) {
              return 'date-utils';
            }
            if (id.includes('lodash') || id.includes('clsx') || id.includes('class-variance-authority')) {
              return 'utils';
            }
            // Large external libraries
            if (id.includes('@stripe') || id.includes('@supabase') || id.includes('ethers')) {
              return 'external';
            }
            // Everything else
            return 'vendor';
          }
          // Component chunks - split by feature
          if (id.includes('/src/components/')) {
            if (id.includes('/ui/')) {
              return 'ui-components';
            }
            if (id.includes('/auth/') || id.includes('/login/')) {
              return 'auth-components';
            }
            if (id.includes('/talent/') || id.includes('/profile/')) {
              return 'talent-components';
            }
            return 'components';
          }
          // Page chunks - split by route group
          if (id.includes('/src/pages/')) {
            if (id.includes('Home') || id.includes('About') || id.includes('Contact')) {
              return 'main-pages';
            }
            if (id.includes('Services') || id.includes('Pricing')) {
              return 'service-pages';
            }
            if (id.includes('Talent') || id.includes('AIMatcher')) {
              return 'talent-pages';
            }
            if (id.includes('Login') || id.includes('Signup')) {
              return 'auth-pages';
            }
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
    // Skip TypeScript type checking during build
    tsconfigRaw: {
      compilerOptions: {
        skipLibCheck: true,
        noEmit: true,
      },
    },
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
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge',
    ],
    // Exclude problematic dependencies
    exclude: ['@vite/client', '@vite/env'],
    // Force pre-bundling for better performance
    force: true,
  },
  // Performance optimizations
  css: {
    devSourcemap: true,
  },
}))