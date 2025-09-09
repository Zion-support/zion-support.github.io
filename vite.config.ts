// Optimized Vite configuration for better performance and development experience
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Ensure __dirname is available in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Environment detection
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const isCI = process.env.CI === 'true' || process.env.NETLIFY === 'true'

export default defineConfig({
  base: '/',
  
  plugins: [
    react({
      jsxRuntime: 'automatic',
      // Enable fast refresh for better development experience
      fastRefresh: isDev,
      // Include emotion for better CSS-in-JS support
      include: ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js'],
    }),
  ],

  // Optimized resolve configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Next.js compatibility stubs
      'next/router': path.resolve(__dirname, './src/stubs/next-router.ts'),
      'next/link': path.resolve(__dirname, './src/stubs/next-link.ts'),
      'next/image': path.resolve(__dirname, './src/stubs/next-image.ts'),
      'next/head': path.resolve(__dirname, './src/stubs/next-head.ts'),
      'next-cloudinary': path.resolve(__dirname, './src/stubs/next-cloudinary.ts'),
      '@supabase/ssr': path.resolve(__dirname, './src/stubs/supabase-ssr.ts'),
      // External library stubs
      '@datadog/browser-logs': path.resolve(__dirname, './src/utils/datadog-logs-shim.ts'),
      'logrocket': path.resolve(__dirname, './src/utils/logrocket-shim.ts'),
    },
    // Optimize dependency resolution
    dedupe: ['react', 'react-dom'],
  },

  // Enhanced build configuration
  build: {
    outDir: 'dist',
    sourcemap: isDev ? 'inline' : false,
    minify: isProd ? 'esbuild' : false,
    cssMinify: isProd ? 'esbuild' : false,
    
    // Optimize chunk splitting
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
        entryFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
        assetFileNames: isProd ? 'assets/[name]-[hash].[ext]' : 'assets/[name].[ext]',
        
        // Manual chunk splitting for better performance
        manualChunks: isProd ? (id) => {
          // Core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'router-vendor';
          }
          
          // UI Libraries
          if (id.includes('@radix-ui') || id.includes('lucide-react')) {
            return 'ui-vendor';
          }
          
          // Animation libraries
          if (id.includes('framer-motion') || id.includes('lottie')) {
            return 'animation-vendor';
          }
          
          // Form libraries
          if (id.includes('react-hook-form') || id.includes('react-query')) {
            return 'form-vendor';
          }
          
          // Utility libraries
          if (id.includes('axios') || id.includes('date-fns') || id.includes('lodash') || id.includes('fuse.js')) {
            return 'utils-vendor';
          }
          
          // Query libraries
          if (id.includes('@tanstack/react-query') || id.includes('react-query')) {
            return 'query-vendor';
          }
          
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        } : undefined,
      },
      
      // Suppress warnings for better build experience
      onwarn(warning, warn) {
        // Suppress known warnings
        if (warning.code === 'UNRESOLVED_IMPORT') return
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        if (warning.message.includes('Circular dependency')) return
        warn(warning)
      },
    },
    
    // Optimize module preloading
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps) => {
        // Only preload critical dependencies
        return deps.filter(dep => {
          return dep.includes('index-') || 
                 dep.includes('react-core-') ||
                 dep.includes('main-');
        });
      }
    },
    
    // Asset optimization
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 1000,
    
    // Enable tree shaking
    treeshake: true,
  },

  // Enhanced server configuration
  server: {
    port: 5174,
    // allowedHosts: ['devserver-preview--ziontechgroup.netlify.app'],
  },
});
