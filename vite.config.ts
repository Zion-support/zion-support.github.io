import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@types': path.resolve(__dirname, './src/types'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@services': path.resolve(__dirname, './src/services'),
        '@store': path.resolve(__dirname, './src/store'),
        '@context': path.resolve(__dirname, './src/context'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@data': path.resolve(__dirname, './src/data'),
      },
      dedupe: ['date-fns', 'react', 'react-dom'],
    },
    build: {
      target: 'es2020',
      minify: 'terser',
      sourcemap: isProduction ? false : 'inline',
      outDir: 'dist',
      cssCodeSplit: true,
      modulePreload: {
        polyfill: true,
      },
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: {
          main: './index.html'
        },
        output: {
          manualChunks: {
            // Core React chunks
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom'],
            
            // UI component libraries
            'ui-vendor': [
              '@radix-ui/react-accordion', 
              '@radix-ui/react-alert-dialog', 
              '@radix-ui/react-aspect-ratio', 
              '@radix-ui/react-avatar', 
              '@radix-ui/react-checkbox', 
              '@radix-ui/react-context-menu', 
              '@radix-ui/react-dialog', 
              '@radix-ui/react-dropdown-menu', 
              '@radix-ui/react-label', 
              '@radix-ui/react-popover', 
              '@radix-ui/react-progress', 
              '@radix-ui/react-radio-group', 
              '@radix-ui/react-scroll-area', 
              '@radix-ui/react-select', 
              '@radix-ui/react-separator', 
              '@radix-ui/react-slider', 
              '@radix-ui/react-slot', 
              '@radix-ui/react-switch', 
              '@radix-ui/react-tabs', 
              '@radix-ui/react-toast', 
              '@radix-ui/react-tooltip'
            ],
            
            // Form handling
            'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
            
            // Utility libraries
            'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge', 'date-fns'],
            
            // Charting and data visualization
            'charts-vendor': ['recharts', 'd3-color', 'd3-format', 'd3-path', 'd3-time-format'],
            
            // Animation and motion
            'motion-vendor': ['framer-motion'],
            
            // State management
            'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
            
            // Internationalization
            'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
            
            // Query and data fetching
            'query-vendor': ['@tanstack/react-query'],
            
            // Icons
            'icons-vendor': ['lucide-react'],
            
            // Payment processing
            'payment-vendor': ['@stripe/stripe-js'],
            
            // Page-specific chunks for better code splitting
            'pages-home': ['./src/pages/Home'],
            'pages-services': [
              './src/pages/Services',
              './src/pages/services/CloudDevOps',
              './src/pages/services/DataAnalytics',
              './src/pages/services/ITInfrastructure'
            ],
            'pages-ai-services': [
              './src/pages/services/AIBusinessIntelligence',
              './src/pages/services/AI-Powered-Contract-Analysis',
              './src/pages/services/AI-Cybersecurity-Threat-Intelligence'
            ],
            'pages-about': ['./src/pages/About'],
            'pages-contact': ['./src/pages/Contact'],
            'pages-blog': ['./src/pages/Blog', './src/pages/BlogPost'],
            'pages-pricing': ['./src/pages/Pricing'],
            'pages-resources': [
              './src/pages/Resources',
              './src/pages/CaseStudies',
              './src/pages/WhitePapers',
              './src/pages/Webinars'
            ]
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
            const chunkName = chunkInfo.name || facadeModuleId;
            return `js/${chunkName}-[hash].js`;
          },
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || [];
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
              return `images/[name]-[hash][extname]`;
            }
            if (/css/i.test(ext)) {
              return `css/[name]-[hash][extname]`;
            }
            if (/woff2?|ttf|eot|otf/i.test(ext)) {
              return `fonts/[name]-[hash][extname]`;
            }
            if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
              return `media/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
        onwarn(warning, warn) {
          // Suppress warnings about missing optional dependencies
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          if (warning.code === 'CIRCULAR_DEPENDENCY') return;
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
          warn(warning);
        },
      },
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info', 'console.debug'] : [],
          passes: 2,
          unsafe: true,
          unsafe_comps: true,
          unsafe_Function: true,
          unsafe_math: true,
          unsafe_proto: true,
          unsafe_regexp: true,
          unsafe_undefined: true
        },
        mangle: {
          safari10: true,
          toplevel: true
        },
        format: {
          comments: false,
          beautify: false
        }
      },
      brotliSize: true,
      reportCompressedSize: true,
      cssTarget: 'chrome80',
      assetsDir: 'assets',
      emptyOutDir: true,
      copyPublicDir: true,
      lib: undefined,
      ssr: undefined,
      ssrManifest: false,
      manifest: false,
      write: true,
      watch: undefined
    },
    optimizeDeps: {
      include: [
        'react', 
        'react-dom', 
        'react-router-dom',
        '@radix-ui/react-accordion',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        'framer-motion',
        'lucide-react',
        'clsx',
        'tailwind-merge'
      ],
      exclude: ['@radix-ui/react-toast'],
      force: isProduction,
      esbuildOptions: {
        target: 'es2020',
        platform: 'browser',
        treeShaking: true,
        minifyIdentifiers: isProduction,
        minifySyntax: isProduction,
        minifyWhitespace: isProduction
      }
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      cors: true,
      hmr: {
        overlay: true
      },
      fs: {
        strict: false,
        allow: ['..']
      }
    },
    preview: {
      port: 4173,
      host: true,
      open: true
    },
    css: {
      devSourcemap: !isProduction,
    },
    define: {
      __DEV__: !isProduction,
      __PROD__: isProduction,
      __VERSION__: JSON.stringify(process.env.npm_package_version || '0.1.0')
    },
    esbuild: {
      target: 'es2020'
    }
  }
})
