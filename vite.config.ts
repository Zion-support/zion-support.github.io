import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Enable automatic JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  build: {
    outDir: 'dist',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize asset handling
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        // Optimize chunk splitting
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('react-router')) {
              return 'routing';
            }
            return 'vendor';
          }
          // App chunks
          if (id.includes('src/components')) {
            return 'components';
          }
          if (id.includes('src/pages')) {
            return 'pages';
          }
          if (id.includes('src/utils')) {
            return 'utils';
          }
        },
        // Optimize chunk file names
        chunkFileNames: () => {
          return `js/[name]-[hash].js`;
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Generate source maps for production debugging
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
        // Additional optimizations
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        // Preserve class names for better debugging
        keep_classnames: process.env.NODE_ENV === 'development'
      }
    },
    // Enable CSS minification
    cssMinify: true,
    // Target modern browsers for better performance
    target: 'esnext',
    // Enable tree shaking
    treeshake: true
  },
  server: {
    port: 3000,
    host: true,
    hmr: {
      overlay: false
    },
    // Enable compression
    middlewareMode: false,
    // Optimize file watching
    watch: {
      usePolling: false,
      interval: 100
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    // Exclude problematic dependencies
    exclude: ['@vite/client', '@vite/env']
  },
  // Enable experimental features
  experimental: {
    renderBuiltUrl(filename: string) {
      // Custom URL handling for assets
      return `/${filename}`;
    }
  },
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },
  // CSS optimization
  css: {
    devSourcemap: true,
    modules: {
      // Enable CSS modules if needed
      localsConvention: 'camelCase'
    }
  },
  // Resolve configuration
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@pages': '/src/pages'
    }
  }
})