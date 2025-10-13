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
    chunkSizeWarningLimit: 150, // Reduced threshold for better optimization
    assetsInlineLimit: 2048, // Reduced for better caching balance
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3, // More passes for better optimization
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
        safari10: true, // Better Safari compatibility
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
          // Router - separate chunk for better code splitting
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
          // SEO and meta - lightweight chunk
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization - separate heavy library
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries - small utilities together
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring - separate for lazy loading
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling - separate for better error isolation
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Large vendor libraries - separate chunks
          if (id.includes('node_modules')) {
            // Group by library size and usage
            if (id.includes('axios') || id.includes('lodash')) {
              return 'http-utils'
            }
            if (id.includes('date-fns') || id.includes('moment')) {
              return 'date-utils'
            }
            return 'vendor'
          }
          // AI service pages - group by category
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data')) {
              return 'ai-analytics'
            }
            if (serviceName?.includes('content') || serviceName?.includes('generation')) {
              return 'ai-content'
            }
            if (serviceName?.includes('cyber') || serviceName?.includes('security')) {
              return 'ai-security'
            }
            if (serviceName?.includes('customer') || serviceName?.includes('support')) {
              return 'ai-customer'
            }
            return 'ai-other'
          }
          // Zion service pages - group by category
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/zion-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data')) {
              return 'zion-analytics'
            }
            if (serviceName?.includes('ai-')) {
              return 'zion-ai'
            }
            if (serviceName?.includes('security') || serviceName?.includes('shield')) {
              return 'zion-security'
            }
            return 'zion-other'
          }
          // 5G service pages - group together
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Main pages
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
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
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
