import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Enable JSX runtime
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
      "@/components": resolve(__dirname, "./app/components"),
      "@/pages": resolve(__dirname, "./app"),
      "@/utils": resolve(__dirname, "./utils"),
      "@/types": resolve(__dirname, "./types"),
      "@/hooks": resolve(__dirname, "./hooks"),
      "@/config": resolve(__dirname, "./config"),
      "@/data": resolve(__dirname, "./data"),
      "@/content": resolve(__dirname, "./content"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 2048,
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - keep together for better caching
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - group by functionality
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta - lightweight
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization - only load when needed
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries - small and frequently used
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring - separate chunk
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling - lightweight
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // AI service pages - group together
          if (id.includes('/ai-')) {
            return 'ai-services'
          }
          // Zion micro SAAS pages - group together
          if (id.includes('/zion-')) {
            return 'micro-saas'
          }
          // 5G service pages - group together
          if (id.includes('/5g-')) {
            return '5g-services'
          }
          // Main pages - keep separate for better caching
          if (id.includes('/app/') && id.includes('/page.tsx') && !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            return 'main-pages'
          }
          // Default chunk for other modules
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable tree shaking
    treeshake: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-helmet-async",
      "framer-motion",
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "web-vitals",
    ],
    exclude: [
      "recharts", // Only load when needed
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
