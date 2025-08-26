import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
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
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      external: ['lucide-react']
    }
  }
})
=======
      'framer-motion',
      'lucide-react',
      'clsx',
      'class-variance-authority',
      'tailwind-merge',
    ],
    exclude: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
  },

  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
  },

  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  // PostCSS configuration removed due to ES module compatibility issues
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
})
