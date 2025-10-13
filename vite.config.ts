<<<<<<< HEAD
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
    target: "esnext",
    minify: "terser",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["framer-motion", "lucide-react"],
=======
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          helmet: ['react-helmet-async'],
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Performance optimizations
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 2048,
=======
    chunkSizeWarningLimit: 100, // Reduced warning threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e
=======
    chunkSizeWarningLimit: 150, // Optimized threshold for better chunking
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0544
    // Enable compression
=======
    chunkSizeWarningLimit: 150,
    assetsInlineLimit: 2048,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
    reportCompressedSize: true,
    // Additional optimizations for production
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
      },
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
    },
<<<<<<< HEAD
=======
    // Fix React scheduler issues
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    // Define global variables to fix React scheduler
    define: {
      global: 'globalThis',
    },
    
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Scheduler should be in its own chunk
          if (id.includes('scheduler')) {
            return 'scheduler'
          }
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
<<<<<<< HEAD
<<<<<<< HEAD
          // Large page components (lazy load)
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
<<<<<<< HEAD
          // Service pages
          if (id.includes('/ai-') || id.includes('/zion-')) {
            return 'services'
=======
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
=======
          // Group AI service pages by category for better caching
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'ai-analytics'
=======
          // AI service pages - group by category
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName && ['analytics', 'automation', 'business-intelligence', 'content-generation'].includes(serviceName)) {
              return 'ai-core'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
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
<<<<<<< HEAD
          // Group 5G service pages
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======
          // 5G service pages - group together
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Micro SAAS pages
          if (id.includes('/micro-') && id.includes('/page.tsx')) {
            return 'micro-saas'
          }
          // Main pages - keep core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-') && !id.includes('/micro-')) {
            return 'main-pages'
          }
<<<<<<< HEAD
          // Large vendor libraries
          if (id.includes('node_modules')) {
            // Group large libraries separately
            if (id.includes('axios') || id.includes('lodash')) {
              return 'http-utils'
=======
          // Components - group by type for better caching
          if (id.includes('/components/')) {
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'components-performance'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
            }
            if (id.includes('date-fns') || id.includes('moment')) {
              return 'date-utils'
            }
<<<<<<< HEAD
            return 'vendor'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0544
=======
            if (id.includes('Loading') || id.includes('Error')) {
              return 'components-ui'
            }
            if (id.includes('Futuristic') || id.includes('Responsive')) {
              return 'components-ui-advanced'
            }
            return 'components-common'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
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
>>>>>>> origin/cursor/analyze-and-fix-application-errors-5651
=======
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    cssCodeSplit: true,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "scheduler",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },
  // Add polyfills for better compatibility
  esbuild: {
    target: 'es2020',
    define: {
      global: 'globalThis',
    },
  },
<<<<<<< HEAD
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
<<<<<<< HEAD
});
=======
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons';
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            return 'vendor-other';
          }
          // App chunks - group by functionality
          if (id.includes('/app/')) {
            if (id.includes('/app/ai-')) {
              return 'app-ai';
            }
            if (id.includes('/app/cloud-') || id.includes('/app/cybersecurity')) {
              return 'app-it';
            }
            if (id.includes('/app/blog')) {
              return 'app-blog';
            }
            return 'app-pages';
          }
          // Components
          if (id.includes('/src/components/')) {
            return 'components';
          }
          // Utils
          if (id.includes('/src/utils/')) {
            return 'utils';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0544
=======
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
