import { defineConfig } from 'vite;'
import react from '@vitejs/plugin-react;'
import path from 'path;'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      '@: path.resolve(__dirname, './app'),
    },
  },
  build: {
    outDir: 'dist','
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: false, // Disable auto-open for CI/CD
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: false,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-helmet-async",
      "@heroicons/react/24/outline",
      "lucide-react",
      "framer-motion",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },
  esbuild: {
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
    target: "esnext",
  },
  // Performance optimizations
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  // CSS optimizations
  css: {
    devSourcemap: true,
  },
});
