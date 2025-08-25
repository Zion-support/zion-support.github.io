<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
<<<<<<< HEAD
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-675b

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
=======
import path from 'node:path'
>>>>>>> origin/cursor/build-and-fix-errors-e276

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@context': resolve(__dirname, 'src/context'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@data': resolve(__dirname, 'src/data'),
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
    },
  },

  build: {
<<<<<<< HEAD
<<<<<<< HEAD
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
<<<<<<< HEAD
        passes: 2,
      },
      mangle: {
        toplevel: true,
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
        pure_funcs: ['console.log', 'console.info'],
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
      },
    },
=======
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
    rollupOptions: {
      output: {
<<<<<<< HEAD
        manualChunks: (id) => {
<<<<<<< HEAD
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react-vendor';
          }
          
<<<<<<< HEAD
          // UI Component libraries - group by size
=======
          // UI Component libraries
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
          if (id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          
          // Animation and motion libraries
          if (id.includes('framer-motion') || id.includes('embla-carousel-react')) {
            return 'animation-vendor';
          }
          
          // Form and validation libraries
          if (id.includes('react-hook-form') || id.includes('@hookform/resolvers') || id.includes('zod')) {
            return 'form-vendor';
          }
          
          // State management
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
            return 'state-vendor';
          }
          
          // Data visualization and charts
          if (id.includes('recharts')) {
            return 'chart-vendor';
          }
          
          // Drag and drop
          if (id.includes('@hello-pangea/dnd')) {
            return 'dnd-vendor';
          }
          
          // Internationalization
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'i18n-vendor';
          }
          
          // Input components
          if (id.includes('input-otp') || id.includes('react-day-picker') || id.includes('date-fns')) {
            return 'input-vendor';
          }
          
          // Utility libraries
          if (id.includes('axios') || id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority') || id.includes('cmdk')) {
            return 'utility-vendor';
          }
          
          // Icon libraries
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'icon-vendor';
          }
          
          // PDF and document generation
          if (id.includes('jspdf')) {
            return 'pdf-vendor';
          }
          
          // Payment processing
          if (id.includes('@stripe/stripe-js')) {
            return 'stripe-vendor';
          }
          
          // Database and backend
          if (id.includes('@supabase/supabase-js')) {
            return 'supabase-vendor';
          }
          
          // Query management
          if (id.includes('@tanstack/react-query')) {
            return 'query-vendor';
          }
          
<<<<<<< HEAD
          // Page-specific chunks for better caching
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1]?.split('.')[0];
            if (pageName) {
              return `page-${pageName}`;
            }
          }
          
          // Component-specific chunks
          if (id.includes('/components/')) {
            const componentName = id.split('/components/')[1]?.split('.')[0];
            if (componentName) {
              return `component-${componentName}`;
            }
=======
          // Default vendor chunk for other dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
          }
=======
        manualChunks: {
<<<<<<< HEAD
<<<<<<< HEAD
          // Core React chunks
          'react-core': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          
          // UI Component chunks - grouped by usage frequency
          'ui-core': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs'
          ],
          'ui-forms': [
            '@radix-ui/react-checkbox',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-switch',
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],
          'ui-layout': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-separator',
            '@radix-ui/react-scroll-area'
          ],
          'ui-overlays': [
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast'
          ],
          'ui-controls': [
            '@radix-ui/react-label',
            '@radix-ui/react-progress',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot'
          ],
          
          // Animation and interaction
          'animation': ['framer-motion', 'embla-carousel-react'],
          
          // Utility libraries
          'utils': ['clsx', 'class-variance-authority', 'tailwind-merge', 'date-fns'],
          
          // Icons
          'icons': ['lucide-react', 'react-icons'],
          
          // State management
          'state': ['@reduxjs/toolkit', 'react-redux'],
          
          // Data fetching
          'data': ['@tanstack/react-query', '@supabase/supabase-js'],
          
          // External integrations
          'integrations': ['@stripe/stripe-js', 'jspdf', 'jspdf-autotable'],
          
          // Specialized features
          'features': ['@hello-pangea/dnd', 'input-otp', 'vaul', 'cmdk', 'sonner'],
          
          // Charts and visualization
          'charts': ['recharts'],
          
          // Internationalization
          'i18n': ['i18next', 'i18next-browser-languagedetector', 'react-i18next']
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge'],
          'icons-vendor': ['lucide-react', 'react-icons'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'data-vendor': ['@tanstack/react-query', 'axios', '@supabase/supabase-js'],
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
<<<<<<< HEAD
=======
        entryFileNames: 'js/[name]-[hash].js',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
<<<<<<< HEAD
            return `images/[name]-[hash][extname]`;
=======
          // Group related node_modules into larger vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react') || id.includes('framer-motion')) {
              return 'ui-vendor';
            }
            if (id.includes('@reduxjs') || id.includes('axios') || id.includes('@tanstack')) {
              return 'state-vendor';
            }
            if (id.includes('@supabase') || id.includes('zod')) {
              return 'data-vendor';
            }
            // Default vendor chunk for other dependencies
            return 'common-vendor';
>>>>>>> origin/main
          }
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    chunkSizeWarningLimit: 500, // Reduced from 1000
    sourcemap: false,
<<<<<<< HEAD
    cssCodeSplit: true,
    reportCompressedSize: true,
    emptyOutDir: true,
=======
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
=======
    chunkSizeWarningLimit: 500, // Reduced from 1000 for better optimization
=======
          'react-vendor': ['react', 'react-dom'],
          'utils-vendor': ['clsx', 'tailwind-merge'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'chart-vendor': ['recharts'],
          'icon-vendor': ['lucide-react', 'react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        toplevel: true
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
    target: 'es2015',
    minify: 'esbuild',
    esbuildOptions: {
      drop: ['console', 'debugger'],
>>>>>>> origin/cursor/build-and-fix-errors-e276
    },
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    reportCompressedSize: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
  },
=======
            return `images/[name]-[hash].[ext]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
    esbuild: {
      drop: process.env.DEBUG ? [] : ['console', 'debugger'],
    },
    chunkSizeWarningLimit: 1000,
<<<<<<< HEAD
  },

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
=======
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    sourcemap: false,
    target: 'es2015'
  },
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
<<<<<<< HEAD
      'react-router-dom',
<<<<<<< HEAD
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'framer-motion',
      'embla-carousel-react',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
      '@reduxjs/toolkit',
      'react-redux',
      'recharts',
      '@hello-pangea/dnd',
      'i18next',
      'i18next-browser-languagedetector',
      'react-i18next',
      'input-otp',
      'react-day-picker',
      'date-fns',
      'axios',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'cmdk',
      'lucide-react',
      'react-icons',
      'jspdf',
      'jspdf-autotable',
      '@stripe/stripe-js',
      '@supabase/supabase-js',
      '@tanstack/react-query',
    ],
<<<<<<< HEAD
<<<<<<< HEAD
    exclude: ['@vite/client', '@vite/env'],
=======
    // Exclude problematic packages from optimization
    exclude: ['@cypress/request'],
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
=======
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    emptyOutDir: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        safari10: true
      }
    }
=======
>>>>>>> origin/main
=======
    exclude: ['@stripe/stripe-js'], // Exclude Stripe from pre-bundling
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
      treeShaking: true
    }
>>>>>>> origin/main
  },
  esbuild: {
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  },
<<<<<<< HEAD
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
<<<<<<< HEAD
  },
  esbuild: {
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.info', 'console.debug'],
  },
}))
=======
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production')
  }
});
>>>>>>> origin/main
=======
  // Performance optimizations
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
  // Experimental features for better performance
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}` }
      } else {
        return { relative: true }
      }
    }
=======
      'framer-motion',
      'clsx',
      'tailwind-merge'
    ]
  },
  server: {
    port: 5173,
    host: true,
    open: false
  },
  preview: {
    port: 4173,
    host: true
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
    // Enable source maps for debugging
    sourcemap: false
>>>>>>> origin/cursor/build-and-fix-errors-e276
  }
})
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
      'framer-motion',
      'lucide-react',
      'clsx',
      'class-variance-authority',
      'tailwind-merge',
    ],
    exclude: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
  },

  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
  },

  preview: {
    port: 4173,
    host: true,
    open: true,
  },

  css: {
    devSourcemap: true,
  },

  // Performance optimizations
  esbuild: {
    target: 'es2015',
    supported: {
      'bigint': false,
    },
  },

  // Define environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
