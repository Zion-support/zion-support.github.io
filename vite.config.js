<<<<<<< HEAD
const { defineConfig } from "vite"; import react from "@vitejs/plugin-react"; export default defineConfig({ plugins: [react()],server: { port: 3000,open: "true",host: "true"},build: { outDir: "dist",sourcemap: "true",minify: "terser",rollupOptions: { output: { manualChunks: { vendor: ["react","react-dom"],ui: ["framer-motion","lucide-react"],router: ["react-router-dom"]}}},terserOptions: { compress: { drop_console: true,drop_debugger: "true"}}},optimizeDeps: { include: ["react","react-dom","framer-motion","lucide-react"]}});'"'"
=======
<<<<<<< HEAD
<<<<<<< HEAD
const { defineConfig } from "vite"; import react from "@vitejs/plugin-react"; export default defineConfig({ plugins: [react()],server: { port: 3000,open: "true",host: "true"},build: { outDir: "dist",sourcemap: "true",minify: "terser",rollupOptions: { output: { manualChunks: { vendor: ["react","react-dom"],ui: ["framer-motion","lucide-react"],router: ["react-router-dom"]}}},terserOptions: { compress: { drop_console: true,drop_debugger: "true"}}},optimizeDeps: { include: ["react","react-dom","framer-motion","lucide-react"]}});'"'"
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
import { defineConfig } from 'vite';
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
<<<<<<< HEAD
});
=======
});
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
});
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914
