import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
<<<<<<< HEAD
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
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
=======
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
      },
    },
  },
  optimizeDeps: {
<<<<<<< HEAD
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
=======
    include: ['react', 'react-dom', 'react-router-dom'],
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
  },
});