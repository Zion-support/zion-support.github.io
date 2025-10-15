import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Better Safari compatibility
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More granular chunking for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'icons-vendor'
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor'
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils-vendor'
            }
            return 'vendor'
          }
          // Group app components by feature
          if (id.includes('/app/components/')) {
            return 'components'
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks'
          }
          if (id.includes('/app/utils/')) {
            return 'utils'
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            const fileName = facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            return `assets/[name]-[hash].js`
          }
          return 'assets/[name]-[hash].js'
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        }
      }
    },
    chunkSizeWarningLimit: 500, // Reduced warning limit
    target: 'es2020', // Modern target for better optimization
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
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
      'tailwind-merge'
    ],
    exclude: ['@vite/client', '@vite/env'] // Exclude Vite client from optimization
  },
  esbuild: {
    drop: ['console', 'debugger'],
    target: 'es2020',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  css: {
    devSourcemap: true,
  }
})
