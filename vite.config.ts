 cursor/fix-errors-and-merge-to-main-c832

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
 cursor/fix-errors-and-merge-to-main-c832
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
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
          // 5G Solutions pages
          if (id.includes('/app/5g-') && id.includes('/page.tsx')) {
            return '5g-pages'
          }
          // Default chunk for other pages
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
 cursor/fix-errors-and-merge-to-main-48ac
=======
        }
      }
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
  },
  server: {
    port: 3000,
    open: true,
 cursor/fix-errors-and-merge-to-main-4aee
    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
    cors: true,
 cursor/fix-errors-and-merge-to-main-c832
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
  },
  preview: {
    port: 4173,
    open: true,
 cursor/fix-errors-and-merge-to-main-48ac
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
=======
    host: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
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
  // CSS optimization
  css: {
    devSourcemap: true,
 cursor/fix-errors-and-merge-to-main-4aee
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
=======
  },
});
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
