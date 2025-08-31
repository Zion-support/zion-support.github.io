import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // JSX runtime
      jsxRuntime: 'automatic',
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
      compressionOptions: {
        level: 9, // Maximum compression
      },
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
      compressionOptions: {
        level: 11, // Maximum compression
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@data': resolve(__dirname, 'src/data'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@config': resolve(__dirname, 'src/config'),
      '@context': resolve(__dirname, 'src/context'),
      '@store': resolve(__dirname, 'src/store'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    // Improved chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI and animation libraries
          'ui-vendor': ['framer-motion', 'lucide-react'],
          // Utility libraries
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          // Form and validation libraries
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // State management
          'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          // Data fetching and caching
          'data-vendor': ['@tanstack/react-query', 'axios'],
          // Charts and visualization
          'charts-vendor': ['recharts'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'chunk'
          return `js/${facadeModuleId}-[hash].js`
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name || '')) {
            return `css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif)$/i.test(assetInfo.name || '')) {
            return `images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `fonts/[name]-[hash].${ext}`
          }
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(assetInfo.name || '')) {
            return `media/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
        // Better chunk naming for better caching
        entryFileNames: 'js/[name]-[hash].js',
      },
      // Tree shaking optimization
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    // Enable dynamic imports
    dynamicImportVarsOptions: {
      warnOnError: false,
      exclude: [],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
      'date-fns',
      'i18next',
      'i18next-browser-languagedetector',
      'lodash.debounce',
      'notistack',
      'react-day-picker',
      'react-error-boundary',
      'react-helmet-async',
      'react-intersection-observer',
      'react-remove-scroll-bar',
      'recharts',
      'sonner',
      'use-callback-ref',
      'use-sidecar',
      'vaul',
    ],
    exclude: ['@vite/client', '@vite/env'],
    // Force pre-bundling for better performance
    force: true,
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false,
    },
    // Enable HTTP/2 push for better performance
    http2: true,
    // Optimize middleware
    middlewareMode: false,
    // Enable source maps in development
    sourcemap: true,
  },
  preview: {
    port: 4173,
    host: true,
    cors: true,
    // Enable compression in preview
    compress: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __GIT_HASH__: JSON.stringify(process.env.GIT_HASH || 'unknown'),
    __ENVIRONMENT__: JSON.stringify(process.env.NODE_ENV),
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Enable JSX optimization
    jsx: 'automatic',
    // Enable tree shaking
    treeShaking: true,
    // Optimize minification
    minifyIdentifiers: process.env.NODE_ENV === 'production',
    minifySyntax: process.env.NODE_ENV === 'production',
    minifyWhitespace: process.env.NODE_ENV === 'production',
  },
  worker: {
    format: 'es',
    // Enable worker optimization
    plugins: () => [],
  },
  // CSS optimization
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        cssnano({
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            colormin: true,
            minifyFontValues: true,
            minifySelectors: true,
          }],
        }),
      ],
    },
    // Enable CSS modules
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    // Optimize CSS
    devSourcemap: true,
  },
  // Asset handling
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr', '**/*.ktx2'],
  // Logging configuration
  logLevel: process.env.NODE_ENV === 'production' ? 'warn' : 'info',
  // Clear screen on restart
  clearScreen: false,
  // Enable source maps in development
  sourcemap: process.env.NODE_ENV === 'development',
})
