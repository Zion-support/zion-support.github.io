import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/workspace/src'
    }
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['framer-motion']
  },
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'os', 'crypto', 'stream', 'util', 'events', 'child_process', 'https', 'http', 'url', 'querystring'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-helmet-async'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
});