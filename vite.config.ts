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
    chunkSizeWarningLimit: 150,
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        sequences: true,
        side_effects: false,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
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
          // Core React libraries - keep together for better caching
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - group animations and icons
          if (id.includes('framer-motion')) {
            return 'ui-animations'
          }
          if (id.includes('lucide-react')) {
            return 'ui-icons'
          }
          // SEO and meta - separate chunk
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries - group small utilities
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring - separate chunk
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling - separate chunk
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Group AI service pages by category for better caching
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'ai-analytics'
            }
            if (id.includes('content') || id.includes('generation')) {
              return 'ai-content'
            }
            if (id.includes('cybersecurity') || id.includes('security')) {
              return 'ai-security'
            }
            if (id.includes('crm') || id.includes('customer')) {
              return 'ai-crm'
            }
            return 'ai-services'
          }
          // Group Zion service pages by type
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'zion-analytics'
            }
            if (id.includes('video') || id.includes('content')) {
              return 'zion-content'
            }
            if (id.includes('security') || id.includes('shield')) {
              return 'zion-security'
            }
            return 'zion-services'
          }
          // Group 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Main pages - group core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            return 'main-pages'
          }
          // Components - group by type for better caching
          if (id.includes('/components/')) {
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'components-performance'
            }
            if (id.includes('SEO') || id.includes('Accessibility')) {
              return 'components-seo'
            }
            if (id.includes('Loading') || id.includes('Error')) {
              return 'components-ui'
            }
            if (id.includes('Futuristic') || id.includes('Responsive')) {
              return 'components-ui-advanced'
            }
            return 'components-common'
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
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});