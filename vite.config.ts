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
    chunkSizeWarningLimit: 300,
    assetsInlineLimit: 1024,
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Additional optimizations
    cssMinify: true,
    minifyInternalExports: true,
    emptyOutDir: true,
    
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - split into smaller chunks
          if (id.includes('react-dom/client')) {
            return 'react-dom'
          }
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
          }
          if (id.includes('react-dom/') && !id.includes('react-dom/client')) {
            return 'react-dom-utils'
          }
          
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          
          // UI libraries - split by size
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          if (id.includes('@heroicons/react')) {
            return 'heroicons'
          }
          
          // SEO and meta - lightweight
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          
          // Charts and data visualization - heavy
          if (id.includes('recharts')) {
            return 'charts'
          }
          
          // Utility libraries - lightweight
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          
          // Performance monitoring - separate
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          
          // Error handling - lightweight
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          
          // Large page components (lazy load) - split by category
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            if (id.includes('/ai-')) {
              return 'ai-pages'
            }
            if (id.includes('/5g-')) {
              return '5g-pages'
            }
            if (id.includes('/zion-')) {
              return 'zion-pages'
            }
            return 'main-pages'
          }
          
          // Service pages - split by category
          if (id.includes('/ai-') || id.includes('/zion-')) {
            if (id.includes('/ai-cyber')) {
              return 'ai-cyber-services'
            }
            if (id.includes('/ai-content')) {
              return 'ai-content-services'
            }
            if (id.includes('/ai-customer')) {
              return 'ai-customer-services'
            }
            return 'ai-services'
          }
          
          // Node modules - split by size
          if (id.includes('node_modules')) {
            if (id.includes('lodash') || id.includes('moment')) {
              return 'heavy-utils'
            }
            return 'vendor'
          }
          
          // Default chunk for other modules
          return 'misc'
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
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
