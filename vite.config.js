<<<<<<< HEAD
=======
<<<<<<< HEAD
const { defineConfig } from "vite"; import react from "@vitejs/plugin-react"; export default defineConfig({ plugins: [react()],server: { port: 3000,open: "true",host: "true"},build: { outDir: "dist",sourcemap: "true",minify: "terser",rollupOptions: { output: { manualChunks: { vendor: ["react","react-dom"],ui: ["framer-motion","lucide-react"],router: ["react-router-dom"]}}},terserOptions: { compress: { drop_console: true,drop_debugger: "true"}}},optimizeDeps: { include: ["react","react-dom","framer-motion","lucide-react"]}});'"'"
=======
>>>>>>> origin/main
import { defineConfig } from 'vite';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
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
          router: ['react-router-dom']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
