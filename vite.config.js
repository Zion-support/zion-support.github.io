import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
import path from 'path';
export default defineConfig({)
pr-12325
  plugins: [react()],
  server: {,
  port: 3000,
    open: true,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  build: {,
  outDir: "dist","
    sourcemap: true,"
    minify: "terser","
    rollupOptions: {,
  output: {
        manualChunks: {,"
  vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],

          vendor: ["react", "react-dom"],""
          ui: ["framer-motion", "lucide-react"],""
          router: ["react-router-dom"]"
        }
    terserOptions: {,
  compress: {
        drop_console: true,
        drop_debugger: true,

  resolve: {,
  alias: {"
      '@': path.resolve(__dirname, './src'),

  optimizeDeps: {,
  include: ['react', 'react-dom', 'react-router-dom'],


pr-12325
});