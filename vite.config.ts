import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
=======
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
    },
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  },
  build: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    target: 'es2020',
    minify: 'terser',
    sourcemap: process.env.NODE_ENV === 'production' ? false : 'hidden',
    reportCompressedSize: false,
    outDir: 'dist',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    assetsInlineLimit: 4096,
    cssMinify: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks: (id) => {
          // More granular chunking for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }
            return 'vendor';
          }
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]'
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
          return 'assets/[name]-[hash].[ext]'
        },
      },
      external: [],
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
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
      },
    },
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
          // UI Component libraries
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
          
          // Default vendor chunk for other dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
=======
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge'],
          'icons-vendor': ['lucide-react', 'react-icons'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'data-vendor': ['@tanstack/react-query', 'axios', '@supabase/supabase-js'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
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
          }
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  esbuild: {
    legalComments: 'none',
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // Additional ESBuild optimizations
    target: 'es2019',
    minify: true,
    treeShaking: true
  },
  server: {
    port: 5173,
    host: true,
    open: false
  },
  preview: {
    port: 4173,
    host: true
=======
    // Enable source maps for debugging
    sourcemap: false
  }
})
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
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@radix-ui/react-accordion']
  }
})
=======
  },
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
