import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            if (id.includes('@heroicons') || id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'ui-vendor'
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils-vendor'
            }
            return 'vendor'
          }
          // App chunks
          if (id.includes('/app/components/')) {
            return 'components'
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks'
          }
          if (id.includes('/app/utils/')) {
            return 'utils'
          }
          if (id.includes('/app/data/')) {
            return 'data'
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            const name = facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            return `assets/[name]-[hash].js`
          }
          return 'assets/[name]-[hash].js'
        },
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
    chunkSizeWarningLimit: 500,
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    },
    cors: true,
    headers: {
      'Cache-Control': 'no-cache',
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
    exclude: ['@vite/client', '@vite/env']
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
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    }
  },
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  }
})
