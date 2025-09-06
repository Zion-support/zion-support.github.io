import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"],
          utils: ["clsx", "tailwind-merge"]
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"]
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: [
      "react", 
      "react-dom", 
      "framer-motion", 
      "lucide-react",
      "react-router-dom",
      "clsx",
      "tailwind-merge"
    ]
  },
  css: {
    devSourcemap: true
  }
});