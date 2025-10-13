import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

<<<<<<< HEAD
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxRuntime: "automatic",
      fastRefresh: true,
    }),
  ],
  root: ".",
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: mode !== "production",
    cssCodeSplit: true,
<<<<<<< HEAD
<<<<<<< HEAD
    chunkSizeWarningLimit: 1000,
<<<<<<< HEAD
=======
    assetsInlineLimit: 4096,
=======
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 150, // Balanced threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
    // Enable compression
    reportCompressedSize: true,
    // Additional optimizations
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
=======
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 100, // Reduced threshold for better chunking
    assetsInlineLimit: 2048, // Reduced for better caching
    reportCompressedSize: true,
    // Enhanced build optimizations
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    rollupOptions: {
      output: {
        manualChunks: (id) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("react-router")) {
              return "router-vendor";
            }
            if (id.includes("framer-motion") || id.includes("lucide-react")) {
              return "ui-vendor";
            }
            return "vendor";
=======
          // Core React libraries - split further
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
=======
          // Core React libraries - split further
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
=======
          // Core React libraries - split into smaller chunks
          if (id.includes('react') && !id.includes('react-dom')) {
            return 'react-core'
          }
          if (id.includes('react-dom')) {
            return 'react-dom'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
          }
          if (id.includes('react-dom')) {
            return 'react-dom'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
          }
<<<<<<< HEAD
          if (id.includes('react-dom')) {
            return 'react-dom'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
          }
<<<<<<< HEAD
          if (id.includes("/app/") && id.includes("/page.tsx")) {
            return "pages";
=======
          // UI libraries - split by size
=======
          // UI libraries - split animations and icons
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
          if (id.includes('framer-motion')) {
            return 'animations'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
          }
          if (id.includes("/components/")) {
            return "components";
          }
<<<<<<< HEAD
=======
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
          // Split large vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('@types/') || id.includes('typescript')) {
              return 'types'
            }
            if (id.includes('eslint') || id.includes('prettier')) {
              return 'dev-tools'
            }
<<<<<<< HEAD
            if (id.includes('jest') || id.includes('testing')) {
              return 'testing'
            }
            return 'vendor'
          }
          // AI service pages - split into smaller chunks
=======
            return 'vendor'
          }
          // AI service pages - group by category
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            return `ai-${serviceName || 'services'}`
          }
          // Zion service pages
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/zion-')[1]?.split('/')[0];
            return `zion-${serviceName || 'services'}`
=======
          // AI service pages - more granular splitting
=======
          // AI service pages - group by category with smaller chunks
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
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
<<<<<<< HEAD
            if (serviceName?.includes('voice') || serviceName?.includes('assistant')) {
              return 'ai-voice'
            }
            if (serviceName?.includes('marketing') || serviceName?.includes('automation')) {
              return 'ai-marketing'
            }
            return 'ai-other'
          }
          // Zion service pages - more granular splitting
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/zion-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data')) {
              return 'zion-analytics'
            }
=======
            if (serviceName?.includes('financial') || serviceName?.includes('fintech')) {
              return 'ai-financial'
            }
            if (serviceName?.includes('health') || serviceName?.includes('medical')) {
              return 'ai-health'
            }
            if (serviceName?.includes('marketing') || serviceName?.includes('social')) {
              return 'ai-marketing'
            }
            if (serviceName?.includes('quantum') || serviceName?.includes('blockchain')) {
              return 'ai-advanced'
            }
            return 'ai-other'
          }
          // Micro SAAS pages - group by category
          if (id.includes('/micro-saas') && id.includes('/page.tsx')) {
            const serviceName = id.split('/micro-saas/')[1]?.split('/')[0];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
            if (serviceName?.includes('ai-')) {
              return 'micro-ai'
            }
            if (serviceName?.includes('analytics') || serviceName?.includes('dashboard')) {
              return 'micro-analytics'
            }
<<<<<<< HEAD
            if (serviceName?.includes('video') || serviceName?.includes('content')) {
              return 'zion-content'
            }
            if (serviceName?.includes('finance') || serviceName?.includes('invoice')) {
              return 'zion-finance'
            }
            return 'zion-other'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
=======
            if (serviceName?.includes('management') || serviceName?.includes('tracker')) {
              return 'micro-management'
            }
            return 'micro-other'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
          }
          // 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/5g-')[1]?.split('/')[0];
            return `5g-${serviceName || 'services'}`
          }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          // Other service pages
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            return 'pages'
=======
          // Main pages - split by importance
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            if (id.includes('/about') || id.includes('/contact')) {
              return 'main-important'
            }
=======
          // IT service pages - group together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-') &&
              (id.includes('devops') || id.includes('cloud') || id.includes('network') || 
               id.includes('software') || id.includes('web') || id.includes('it-'))) {
            return 'it-services'
          }
          // Micro SAAS pages - group together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              (id.includes('micro-saas') || id.includes('project-management') || 
               id.includes('customer-relationship') || id.includes('inventory') ||
               id.includes('financial') || id.includes('employee') || id.includes('social') ||
               id.includes('email') || id.includes('website') || id.includes('task') ||
               id.includes('smart-') || id.includes('ai-powered'))) {
            return 'micro-saas'
          }
          // Main pages - keep core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              (id.includes('about') || id.includes('contact') || id.includes('services') || 
               id.includes('blog') || id.includes('privacy') || id.includes('terms'))) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
            return 'main-pages'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
=======
          // Main pages - split into smaller chunks
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/micro-saas') && !id.includes('/5g-')) {
            const pageName = id.split('/app/')[1]?.split('/')[0];
            if (pageName === 'about' || pageName === 'contact' || pageName === 'services') {
              return 'main-core'
            }
            if (pageName?.includes('cloud') || pageName?.includes('cyber') || pageName?.includes('security')) {
              return 'main-infrastructure'
            }
            if (pageName?.includes('data') || pageName?.includes('analytics') || pageName?.includes('business')) {
              return 'main-data'
            }
            return 'main-other'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
          }
          // Default chunk for other modules
          return 'vendor'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
        },
        assetFileNames: "assets/[name]-[hash].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
<<<<<<< HEAD
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
    ],
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
<<<<<<< HEAD
  css: {
    devSourcemap: mode !== "production",
  },
  envPrefix: "VITE_",
  logLevel: mode === "production" ? "warn" : "info",
}));
=======
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
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
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  css: {
    devSourcemap: true,
  },
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
