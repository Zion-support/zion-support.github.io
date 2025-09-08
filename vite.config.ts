<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
=======
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
=======

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
        entryFileNames: 'js/[name]-[hash].js',
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
    },
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    target: 'es2015',
    minify: 'esbuild',
    esbuildOptions: {
      drop: ['console', 'debugger'],
<<<<<<< HEAD
    },
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['lucide-react'],
        },
        // Optimize asset naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.split('.')[0]
            : 'chunk'
          return `js/${facadeModuleId}-[hash].js`
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name || '')) {
            return `css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) {
            return `images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) {
            return `fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: false
  }
})
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
    },
=======
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    reportCompressedSize: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
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
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    sourcemap: false,
    target: 'es2015'
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
    // Exclude problematic packages from optimization
    exclude: ['@cypress/request'],
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
=======
    exclude: ['@stripe/stripe-js'], // Exclude Stripe from pre-bundling
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
      treeShaking: true
    }
  },
  esbuild: {
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  },
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production')
  }
});
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
  // PostCSS configuration removed due to ES module compatibility issues
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
})
=======
  },
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
