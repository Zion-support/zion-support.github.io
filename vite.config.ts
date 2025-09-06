import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
<<<<<<< HEAD
  },
  resolve: {
    alias: {
      '@': '/workspace/src'
    }
  },
  css: {
    postcss: {
      plugins: []
    }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  }
})
