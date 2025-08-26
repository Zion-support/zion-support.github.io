import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/services', (req, res) => {
          const url = new URL(req.originalUrl || req.url, 'http://localhost')
          const categoryId = url.searchParams.get('categoryId')
          const data = SAMPLE_SERVICES.filter(
            (item) => !categoryId || item.category === categoryId
          )
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Zion Tech Group - Revolutionary Technology Solutions',
        short_name: 'Zion Tech',
        description: 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.',
        theme_color: '#06b6d4',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any'
          }
        ],
        shortcuts: [
          {
            name: 'Services',
            short_name: 'Services',
            description: 'Explore our revolutionary technology services',
            url: '/services'
          },
          {
            name: 'Contact',
            short_name: 'Contact',
            description: 'Get in touch with our team',
            url: '/contact'
          },
          {
            name: 'About',
            short_name: 'About',
            description: 'Learn about Zion Tech Group',
            url: '/about'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@types': resolve(__dirname, './src/types'),
      '@styles': resolve(__dirname, './src/styles'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      external: ['lucide-react']
    }
  }
})
