<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
<<<<<<< HEAD
  build: {
    outDir: "dist",
    sourcemap: true,
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
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"]
  }
});
=======
})
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
