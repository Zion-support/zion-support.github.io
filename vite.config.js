
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD

=======
import path from 'path';
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  }
<<<<<<< HEAD
});
=======

})

>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
