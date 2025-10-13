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
<<<<<<< HEAD
    chunkSizeWarningLimit: 150, // Reduced threshold for better optimization
    assetsInlineLimit: 2048, // Reduced for better performance
=======
    chunkSizeWarningLimit: 150, // Reduced threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
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
<<<<<<< HEAD
          // Core React libraries - keep together for better caching
=======
          // Core React libraries - keep smaller
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
<<<<<<< HEAD
          // UI libraries - group animations and icons
=======
          // UI libraries - split further
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
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
<<<<<<< HEAD
          // Group all AI service pages into fewer chunks
=======
          // Components - split by functionality
          if (id.includes('/components/')) {
            if (id.includes('Enhanced') || id.includes('Advanced')) {
              return 'enhanced-components'
            }
            if (id.includes('Futuristic') || id.includes('Neon')) {
              return 'ui-components'
            }
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'monitoring-components'
            }
            return 'base-components'
          }
          // AI service pages - group by category with smaller chunks
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            return 'ai-services'
          }
          // Group all Zion service pages
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            return 'zion-services'
          }
          // Group all 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
<<<<<<< HEAD
          // Main pages - group core pages together
=======
          // Main pages - split further
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            if (id.includes('about') || id.includes('contact') || id.includes('services')) {
              return 'core-pages'
            }
            return 'main-pages'
          }
          // Components - group by type
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
