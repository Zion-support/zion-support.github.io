<<<<<<< HEAD
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// https://vitejs.dev/config/
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
      '@data': resolve(__dirname, 'src/data'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services')

=======
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@types': resolve(__dirname, 'src/types'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;

          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;

          return `assets/[name]-[hash][extname]`;


    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']

    },
    chunkSizeWarningLimit: 1000
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
      'react-hook-form',
      '@hookform/resolvers',
      'zod'
    ]
=======
    ],
    exclude: ['@vite/client', '@vite/env'],
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  },
  server: {
    port: 3000,
    host: true,
<<<<<<< HEAD
    open: true
=======
    open: true,
    cors: true,
    hmr: {
      overlay: false,
    },
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  },
  preview: {
    port: 4173,
    host: true,
    cors: true,
  },
  css: {
    postcss: {
<<<<<<< HEAD
      plugins: []

  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())

});
}}}}}}}}
=======
      plugins: [
        tailwindcss,
        autoprefixer,
        cssnano({
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: false,
          }],
        }),
      ],
    },
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  worker: {
    format: 'es',
  },
})
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
