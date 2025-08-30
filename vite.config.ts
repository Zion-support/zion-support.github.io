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
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
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
    },
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
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
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `images/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    chunkSizeWarningLimit: 1000,
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
      'zod'
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 4173,
    host: true,
    cors: true,
  },

  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  worker: {
    format: 'es',
  },
})
