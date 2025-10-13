
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
      jsxRuntime: "automatic"@": resolve(__dirname, "),
      "@/components"./app/components"),

      ": resolve(__dirname, "./app"@/utils": resolve(__dirname, "),
      "@/types"./types"),

      ": resolve(__dirname, "./hooks"esnext",
    minify: ",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 500, // Increased threshold for better chunking
    assetsInlineLimit: 1024, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Better compression settings
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
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
          // AI service pages
          if (id.includes('/app/ai-') && id.includes('/page.tsx')) {
            return 'ai-pages'
          }
          // IT service pages
          if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx')) {
            return 'it-pages'
          }
          // Micro SAAS pages
          if (id.includes('/app/zion-') && id.includes('/page.tsx')) {
            return 'micro-saas-pages'
          }
          // 5 G Solutions pages
          if (id.includes('/app/5 g-') && id.includes('/page.tsx')) {
            return '5 g-pages'
          }
          // Default chunk for other pages
          if (id.includes('/app/') && id.includes('/page.tsx')) {
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

    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react"react-dom"],
          router: ["],
          ui: ["framer-motion"lucide-react"],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

        }
    }
  },
  server: {
    port: 3000,
    open: true,

    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
    cors: true,

  },
  preview: {
    port: 4173,
    open: true,
    host: true,

    host: true,
  },
  optimizeDeps: {
    include: [
      ",
      "react-dom"react-router-dom",
      ",
      "lucide-react",
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,

  },

  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
  },
});
