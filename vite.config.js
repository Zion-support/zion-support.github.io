import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
=======
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
<<<<<<< HEAD
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
});