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
    assetsInlineLimit: 4096, // Increased for better performance
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Multiple passes for better optimization
      },
      mangle: {
        safari10: true, // Better Safari compatibility
      },
    },
    // Enhanced build optimizations
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
          // Core React libraries - split into smaller chunks
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
          }
          if (id.includes('react-dom')) {
            return 'react-dom'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - split animations and icons
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Large page components (lazy load) - split by category
          if (id.includes('/app/ai-') && id.includes('/page.tsx')) {
            return 'ai-pages'
          }
          if (id.includes('/app/zion-') && id.includes('/page.tsx')) {
            return 'saas-pages'
          }
          if (id.includes('/app/5g-') && id.includes('/page.tsx')) {
            return '5g-pages'
          }
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'main-pages'
          }
          // Service pages
          if (id.includes('/ai-') || id.includes('/zion-')) {
            return 'services'
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
      "web-vitals",
      "clsx",
      "tailwind-merge",
    ],
    exclude: [
      // Exclude large dependencies that should be loaded on demand
      "recharts",
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
