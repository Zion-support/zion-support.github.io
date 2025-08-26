import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
=======

// https://vitejs.dev/config/
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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  },

  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
    target: 'es2015',
    minify: 'esbuild',
    esbuildOptions: {
      drop: ['console', 'debugger'],
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
