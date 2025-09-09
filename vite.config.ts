// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { optimizePreloads } from './plugins/optimize-preloads.js'

// Ensure __dirname is available in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Disable complex manual chunking on CI/Netlify to avoid occasional hangs during
// Rollup's chunk rendering phase. Can be overridden locally by setting
// DISABLE_MANUAL_CHUNKS=false or enabling ANALYZE.
const disableManualChunks = (
  process.env.NETLIFY === 'true' ||
  process.env.CI === 'true' ||
  process.env.DISABLE_MANUAL_CHUNKS === 'true'
) && process.env.ANALYZE !== 'true'

// Determine if we're running in CI/Netlify
const isCI = process.env.NETLIFY === 'true' || process.env.CI === 'true'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    // Custom plugin to optimize preload links
    optimizePreloads(),
    // Bundle analyzer would go here if needed
  ].filter(Boolean),
  // Explicitly set the build target to prevent ES2024 issues
  build: {
    // Output directory for Netlify compatibility
    outDir: 'dist',
    // Disable source maps in production for smaller bundle
    sourcemap: false,
    // Prefer esbuild for fast, reliable CI minification
    minify: 'esbuild',
    // Use esbuild for CSS minification to avoid heavy PostCSS/CSSNano work on CI
    cssMinify: 'esbuild',
    // Optimize module preload to reduce warnings
    modulePreload: {
      polyfill: true,
      // Only preload the most critical dependencies to avoid warnings
      resolveDependencies: (filename, deps, { hostId, hostType }) => {
        // Only preload the main entry point and critical React chunks
        return deps.filter(dep => {
          // Only preload the main entry and react-core for faster initial load
          return dep.includes('index-') || dep.includes('react-core-');
        });
      }
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Assets inline limit - smaller for better caching
    assetsInlineLimit: 2048,
    // Enable tree shaking
    treeshake: true,
    // Optimize chunk splitting
    rollupOptions: {
      input: {
        main: './index.html'
      },
      onwarn(warning, warn) {
        // Suppress TypeScript warnings
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
      output: {
        // Enable optimized manual chunking for better performance
        manualChunks: disableManualChunks ? undefined : (id) => {
          // Vendor chunks - more granular splitting for better caching
          if (id.includes('node_modules')) {
            // React ecosystem - split more granularly
            if (id.includes('react/') && !id.includes('react-dom') && !id.includes('react-router')) {
              return 'react-core';
            }
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            
            // Query and state management
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
              return 'state-management';
            }
            
            // UI libraries - split by usage frequency
            if (id.includes('@radix-ui/react-slot') || id.includes('@radix-ui/react-dialog')) {
              return 'radix-core';
            }
            if (id.includes('@radix-ui') && !id.includes('react-slot') && !id.includes('react-dialog')) {
              return 'radix-ui';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            
            // Forms and validation
            if (id.includes('react-hook-form')) {
              return 'react-hook-form';
            }
            if (id.includes('formik') || id.includes('yup') || id.includes('zod')) {
              return 'forms-validation';
            }
            
            // Animation and motion
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            
            // HTTP and data fetching
            if (id.includes('axios')) {
              return 'http';
            }
            if (id.includes('swr')) {
              return 'swr';
            }
            
            // Date and utility libraries
            if (id.includes('date-fns')) {
              return 'date-utils';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'class-utils';
            }
            if (id.includes('class-variance-authority')) {
              return 'cva';
            }
            
            // Large external libraries - split by size
            if (id.includes('@stripe')) {
              return 'stripe';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            if (id.includes('ethers')) {
              return 'ethers';
            }
            if (id.includes('firebase')) {
              return 'firebase';
            }
            
            // Everything else goes to vendor
            return 'vendor';
          }
          
          // Component chunks - split by feature and usage
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
            if (id.includes('/community/')) {
              return 'community-components';
            }
            return 'components';
          }
          
          // Page chunks - split by route group for better code splitting
          if (id.includes('/src/pages/')) {
            // Core pages - most frequently accessed
            if (id.includes('Home') || id.includes('About') || id.includes('Contact')) {
              return 'core-pages';
            }
            // Service-related pages
            if (id.includes('Services') || id.includes('Pricing') || id.includes('Service')) {
              return 'service-pages';
            }
            // Talent-related pages
            if (id.includes('Talent') || id.includes('AIMatcher') || id.includes('Profile')) {
              return 'talent-pages';
            }
            // Auth pages
            if (id.includes('Login') || id.includes('Signup') || id.includes('Auth')) {
              return 'auth-pages';
            }
            // E-commerce pages
            if (id.includes('Cart') || id.includes('Checkout') || id.includes('Wallet')) {
              return 'ecommerce-pages';
            }
            // Blog and content pages
            if (id.includes('Blog') || id.includes('Community')) {
              return 'content-pages';
            }
            return 'pages';
          }
          
          // Utility and hook chunks
          if (id.includes('/src/hooks/')) {
            return 'hooks';
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
    // Optimize build target - ensure compatibility with esbuild
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Avoid gzip size computation entirely to prevent extra work on CI
    reportCompressedSize: false,
    // Optimize for production
    emptyOutDir: true,
  },
  // Reduce module preload generation on CI which can appear to hang
  experimental: {
    renderBuiltUrl(filename) {
      return { relative: true };
    },
  },
  esbuild: {
    target: 'es2020',
    // Disable TypeScript checking during build
    logLevel: 'error',
    // Strip debugging noise and mark common logging as pure
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.info', 'console.debug'],
    // Explicitly set supported targets for esbuild
    supported: {
      'top-level-await': false
    },
    // Force esbuild to use the correct target and format
    format: 'esm',
    // Additional safeguards to prevent ES2024 issues
    platform: 'browser',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/router': path.resolve(__dirname, './src/stubs/next-router.ts'),
      'next/link': path.resolve(__dirname, './src/stubs/next-link.ts'),
      'next/image': path.resolve(__dirname, './src/stubs/next-image.ts'),
      'next/head': path.resolve(__dirname, './src/stubs/next-head.ts'),
      'next-cloudinary': path.resolve(__dirname, './src/stubs/next-cloudinary.ts'),
      '@supabase/ssr': path.resolve(__dirname, './src/stubs/supabase-ssr.ts'),
      '@datadog/browser-logs': path.resolve(__dirname, './src/utils/datadog-logs-shim.ts'),
      'logrocket': path.resolve(__dirname, './src/utils/logrocket-shim.ts')
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
    'process.env.BUILD_TARGET': JSON.stringify('es2022'),
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
    // Ensure esbuild target compatibility
    esbuildOptions: {
      target: 'es2020',
    },
  },
  // Performance optimizations
  css: {
    devSourcemap: true,
  },
}))