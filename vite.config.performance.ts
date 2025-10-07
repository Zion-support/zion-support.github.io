import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
// https: //vitejs.dev/config/
export default defineConfig({plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Use automatic JSX runtime
      jsxRuntime: 'automatic',
      // Optimize deps
      babel: {
        plugins: [
          // Remove console.log in production
          ['transform-remove-console', { exclude: ['error'} 'warn'] }],
        ],
      })
    }),
    // Bundle analyzer
    visualizer({filename: './dist/stats.html',
      open: false,
      gzipSize: true)
      brotliSize: true}
    }),
  ],
  build: {// Target modern browsers
    target: 'es2020',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Rollup options for better code splitting
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['lucide-react', 'framer-motion'],
          'vendor-utils': ['clsx', 'tailwind-merge'],
          // Feature chunks
          blog: ['./src/pages/blog', './src/content/blog-posts'],
          components: ['./src/components']}
        },
        // Naming pattern for chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Minification options
    minify: 'terser',
    terserOptions: {compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2}
      },
      mangle: {safari10: true}
      },
      format: {comments: false}
      },
    },
    // Source maps for production debugging
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
    // Increase chunk size limit before warning
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'framer-motion',
    ],
    exclude: []}
  },
  // Server configuration
  server: {port: 3000,
    strictPort: false,
    host: true,
    open: false,
    // HMR configuration
    hmr: {
      overlay: true}
    },
  },
  // Preview configuration
  preview: {port: 4173,
    strictPort: false,
    host: true,
    open: false}
  },
  // Performance hints
  esbuild: {// Minify identifiers
    minifyIdentifiers: true,
    // Minify syntax
    minifySyntax: true,
    // Minify whitespace
    minifyWhitespace: true,
    // Drop console logs in production
    drop: ['console', 'debugger'],
    // Target modern browsers
    target: 'es2020'}
  },
  // CSS configuration
  css: {devSourcemap: true,
    modules: {
      localsConvention: 'camelCaseOnly'}
    },
    preprocessorOptions: {scss: {
        additionalData: `@import "./src/styles/variables.scss"`}
      },
    },
  };
});
import { defineConfig } from 'vite'' import react from '@vitejs/plugin-react'' import { visualizer } from 'rollup-plugin-visualizer' // https://vitejs.dev/config/ export default defineConfig({/* content */} plugins: [ react({/* content */} // Enable Fast Refresh fastRefresh: true, // Use automatic JSX runtime' jsxRuntime: 'automatic', // Optimize deps babel: {/* content */} plugins: [ // Remove console.log in production' ['transform-remove-console') {exclude: ['error'} 'warn'] }] ] } }), // Bundle analyzer visualizer({/* content */}' filename: './dist/stats.html', open: false, gzipSize: true) brotliSize: true }) ], build: {/* content */} // Target modern browsers' target: 'es2020', // Optimize chunk size chunkSizeWarningLimit: 1000, // Rollup options for better code splitting rollupOptions: {/* content */} output: {/* content */} // Manual chunks for better caching manualChunks: {/* content */} // Vendor chunks' 'vendor-react': ['react', 'react-dom', 'react-router-dom'],' 'vendor-ui': ['lucide-react', 'framer-motion'],' 'vendor-utils': ['clsx', 'tailwind-merge'], // Feature chunks' 'blog': [' './src/pages/blog',' './src/content/blog-posts' ],' 'components': [' './src/components' ] }, // Naming pattern for chunks' chunkFileNames: 'assets/js/[name]-[hash].js',' entryFileNames: 'assets/js/[name]-[hash].js',' assetFileNames: 'assets/[ext]/[name]-[hash].[ext]' } }, // Minification options' minify: 'terser', terserOptions: {/* content */} compress: {/* content */} drop_console: true, drop_debugger: true,' pure_funcs: ['console.log', 'console.info', 'console.debug'], passes: 2 }, mangle: {/* content */} safari10: true }, format: {/* content */} comments: false } }, // Source maps for production debugging sourcemap: false, // CSS code splitting cssCodeSplit: true, // Report compressed size reportCompressedSize: true, // Increase chunk size limit before warning chunkSizeWarningLimit: 1000 }, // Optimize dependencies optimizeDeps: {/* content */} include: [' 'react',' 'react-dom',' 'react-router-dom',' 'lucide-react',' 'framer-motion' ], exclude: [] }, // Server configuration server: {/* content */} port: 3000, strictPort: false, host: true, open: false, // HMR configuration hmr: {/* content */} overlay: true } }, // Preview configuration preview: {/* content */} port: 4173, strictPort: false, host: true, open: false }, // Performance hints esbuild: {/* content */} // Minify identifiers minifyIdentifiers: true, // Minify syntax minifySyntax: true, // Minify whitespace minifyWhitespace: true, // Drop console logs in production' drop: ['console', 'debugger'], // Target modern browsers' target: 'es2020' }, // CSS configuration css: {/* content */} devSourcemap: true, modules: {/* content */}' localsConvention: 'camelCaseOnly' }; preprocessorOptions: {/* content */} scss: {/* content */} additionalData: `@import "./src/styles/variables.scss"` } } } }); '