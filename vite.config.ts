import { defineConfig } from 'vite'

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
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 150, // Reduced threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable tree shaking
    treeshake: {
      moduleSideEffects: false,
    },
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Additional optimizations
    cssMinify: true,
    minifyInternalExports: true,
    emptyOutDir: true,
    // Advanced optimizations
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - keep smaller
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - split further
          if (id.includes('framer-motion')) {
            return 'ui-animations'
          }
          if (id.includes('lucide-react')) {
            return 'ui-icons'
          }
          // SEO and meta - separate chunk
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries - group small utilities
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring - separate chunk
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling - separate chunk
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Components - split by functionality
          if (id.includes('/components/')) {
            if (id.includes('Enhanced') || id.includes('Advanced')) {
              return 'enhanced-components'
            }
            if (id.includes('react-router')) {
              return 'vendor-router'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            return 'base-components'
          }
          // AI service pages - group by category with smaller chunks
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            return 'ai-services'
          }
          // Group all Zion service pages
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            return 'zion-services'
          }
          // Group all 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Main pages - split further
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            if (id.includes('about') || id.includes('contact') || id.includes('services')) {
              return 'core-pages'
            }
            if (id.includes('recharts')) {
              return 'vendor-charts'
            }
            if (id.includes('web-vitals')) {
              return 'vendor-analytics'
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            return 'vendor-misc';
          }
          // App chunks - better organization
          if (id.includes('/app/ai-')) {
            return 'ai-services';
          }
          // Components
          if (id.includes('/src/components/')) {
            return 'components';
          }
          if (id.includes('/app/blog/')) {
            return 'blog';
          }
          if (id.includes('/app/case-studies/')) {
            return 'case-studies';
          }
          return 'app';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) =>
                {
          const ext = assetInfo.name?.split('.').pop()
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        }
      }
    },
    server: {
      port: 3000,
      host: true,
      open: false,
      hmr: {
        overlay: false,
      },
      watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/temp_backup/**', '**/pages_backup/**', '**/src.broken/**', '**/*.backup.*', '**/*.cleanup-backup.*']
      }
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
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
    include: [
      'react', 
      'react-dom', 
      'framer-motion', 
      'lucide-react', 
      'react-router-dom',
      'clsx',
      'tailwind-merge',
      'web-vitals'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  css: {
    devSourcemap: true
  }
});