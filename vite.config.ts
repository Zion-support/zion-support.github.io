import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// import { compression } from 'vite-plugin-compression'
// import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
          ],
        },
      }),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
                cacheKeyWillBeUsed: async ({ request }) => {
                  return `${request.url}?v=1`;
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
              },
            },
          ],
        },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'Zion App - Revolutionary AI Solutions',
          short_name: 'Zion App',
          description: 'Revolutionary AI solutions for enterprise transformation',
          theme_color: '#000000',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
      // Compression plugins disabled for Netlify build
      // compression({
      //   algorithm: 'brotliCompress',
      //   ext: '.br',
      //   threshold: 10240,
      //   deleteOriginFile: false,
      // }),
      // compression({
      //   algorithm: 'gzip',
      //   ext: '.gz',
      //   threshold: 10240,
      //   deleteOriginFile: false,
      // }),
      // Visualizer disabled for Netlify build
      // ...(isProduction ? [
      //   visualizer({
      //     filename: 'dist/stats.html',
      //     open: false,
      //     gzipSize: true,
      //     brotliSize: true,
      //   }),
      // ] : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
        '@components': path.resolve(import.meta.dirname, './src/components'),
        '@pages': path.resolve(import.meta.dirname, './src/pages'),
        '@utils': path.resolve(import.meta.dirname, './src/utils'),
        '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
        '@types': path.resolve(import.meta.dirname, './src/types'),
        '@styles': path.resolve(import.meta.dirname, './src/styles'),
        '@assets': path.resolve(import.meta.dirname, './src/assets'),
      },
      dedupe: ['date-fns', 'react', 'react-dom'],
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      sourcemap: false,
      outDir: 'dist',
      cssCodeSplit: false,
      assetsInlineLimit: 4096,
      rollupOptions: {
        input: './index.html',
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom'],
          },
        },
        onwarn(warning, warn) {
          // Suppress warnings about missing optional dependencies
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          warn(warning);
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['@rollup/rollup-linux-x64-gnu'],
      ...(isProduction && {
        force: true,
        esbuildOptions: {
          target: 'es2020',
          platform: 'browser',
        }
      })
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      hmr: {
        overlay: false,
      },
    },
    preview: {
      port: 4173,
      host: true,
    },
    css: {
      devSourcemap: true,
    },
  }
})