import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
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
      "@/utils": resolve(__dirname, "./app/utils"),
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
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
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'framer-motion'
    ]
  }
});