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
    minify: "terser",
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    assetsInlineLimit: 4096,
    // Enable tree shaking
    treeshake: true,
    // Enhanced build optimizations
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries
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
          // AI service pages - group by category for better caching
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data') || serviceName?.includes('business-intelligence')) {
              return 'ai-analytics'
            }
            if (serviceName?.includes('content') || serviceName?.includes('generation') || serviceName?.includes('writer')) {
              return 'ai-content'
            }
            if (serviceName?.includes('cyber') || serviceName?.includes('security') || serviceName?.includes('fraud')) {
              return 'ai-security'
            }
            if (serviceName?.includes('customer') || serviceName?.includes('support') || serviceName?.includes('service')) {
              return 'ai-customer'
            }
            if (serviceName?.includes('voice') || serviceName?.includes('speech') || serviceName?.includes('audio')) {
              return 'ai-voice'
            }
            if (serviceName?.includes('video') || serviceName?.includes('image') || serviceName?.includes('vision')) {
              return 'ai-media'
            }
            if (serviceName?.includes('financial') || serviceName?.includes('fintech') || serviceName?.includes('investment')) {
              return 'ai-finance'
            }
            if (serviceName?.includes('healthcare') || serviceName?.includes('medical') || serviceName?.includes('health')) {
              return 'ai-healthcare'
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
          // 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Micro SAAS pages
          if (id.includes('/micro-saas') && id.includes('/page.tsx')) {
            return 'micro-saas'
          }
          // IT services pages
          if (id.includes('/it-') && id.includes('/page.tsx')) {
            return 'it-services'
          }
          // Cloud services pages
          if (id.includes('/cloud-') && id.includes('/page.tsx')) {
            return 'cloud-services'
          }
          // Blockchain pages
          if (id.includes('/blockchain') && id.includes('/page.tsx')) {
            return 'blockchain'
          }
          // Other service pages
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-') && 
              !id.includes('/micro-saas') && !id.includes('/it-') && !id.includes('/cloud-') && 
              !id.includes('/blockchain')) {
            return 'pages'
          }
          // Default chunk for other modules
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
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
      'framer-motion',
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
