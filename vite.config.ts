import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
  plugins: [
    react({
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
    minify: "terser",
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 1024,
    reportCompressedSize: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        unsafe: false,
        unsafe_comps: false,
        unsafe_math: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
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
        toplevel: false,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group node_modules
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            if (id.includes('framer-motion')) {
              return 'animations'
            }
            if (id.includes('react-router')) {
              return 'router'
            }
            if (id.includes('react-helmet')) {
              return 'seo'
            }
            return 'vendor'
          }
          
          // Group app pages by category
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            if (id.includes('/ai-')) {
              return 'ai-pages'
            }
            if (id.includes('/micro-saas')) {
              return 'micro-saas-pages'
            }
            if (id.includes('/zion-')) {
              return 'zion-pages'
            }
            if (id.includes('/components/')) {
              return 'components'
            }
            return 'pages'
          }
          
          // Group utilities
          if (id.includes('/utils/') || id.includes('/hooks/')) {
            return 'utils'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'framer-motion',
      'lucide-react'
    ]
  },
  css: {
    devSourcemap: true,
  },
});
