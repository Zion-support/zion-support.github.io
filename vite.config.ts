import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Enable JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
        pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log', 'console.info'] : [],
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'framer-motion', 'lucide-react'],
          utils: ['clsx', 'tailwind-merge'],
          analytics: ['web-vitals'],
          helmet: ['react-helmet-async'],
        },
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop().replace('.tsx', '').replace('.ts', '')
            : 'chunk'
          return `assets/${facadeModuleId}-[hash].js`
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
      // External dependencies that shouldn't be bundled
      external: process.env.NODE_ENV === 'production' ? [] : [],
    },
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    },
    // Enable CORS for development
    cors: true,
    // Enable HTTPS in development if needed
    // https: true,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@heroicons/react',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'web-vitals',
      'react-helmet-async'
    ],
    // Force pre-bundling of these dependencies
    force: true,
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Enable JSX factory
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  css: {
    devSourcemap: true,
    // Enable CSS modules if needed
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  // Resolve configuration
  resolve: {
    alias: {
      '@': '/workspace',
      '@components': '/workspace/app/components',
      '@utils': '/workspace/app/utils',
      '@hooks': '/workspace/app/hooks',
      '@types': '/workspace/app/types',
    },
  },
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
    cors: true,
  },
})
