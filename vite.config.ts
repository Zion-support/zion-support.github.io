import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// Import visualizer lazily to avoid hard dependency during Netlify build
let visualizer: any
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  visualizer = require('rollup-plugin-visualizer').visualizer
} catch (e) {
  visualizer = null
}
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
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,webp}'],
          globIgnores: ['**/reports/**', '**/static-reports/**', '**/node_modules/**'],
          maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
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
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
              },
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
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
      ...(isProduction && visualizer ? [
        visualizer({
          filename: 'dist/stats.html',
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
      ] : []),
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
      },
      dedupe: ['date-fns', 'react', 'react-dom'],
    },
    build: {
      target: 'es2020',
      minify: 'terser',
      sourcemap: false,
      outDir: 'dist',
      cssCodeSplit: true,
      modulePreload: {
        polyfill: true,
      },
      assetsInlineLimit: 4096,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info'] : [],
          passes: 2,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_proto: true,
        },
        mangle: {
          safari10: true,
          toplevel: true,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        input: {
          main: './index.html'
        },
        output: {
          manualChunks: (id) => {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // UI libraries
            if (id.includes('@radix-ui') || id.includes('lucide-react') || id.includes('framer-motion')) {
              return 'ui-vendor';
            }
            // Form handling
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'form-vendor';
            }
            // Utility libraries
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('date-fns')) {
              return 'utils-vendor';
            }
            // Charts and visualization
            if (id.includes('recharts') || id.includes('d3-')) {
              return 'charts-vendor';
            }
            // Large dependencies
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
            return `js/${facadeModuleId}-[hash].js`;
          },
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `images/[name]-[hash][extname]`;
            }
            if (/css/i.test(ext)) {
              return `css/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
        onwarn(warning, warn) {
          // Suppress warnings about missing optional dependencies
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          warn(warning);
        },
      },
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