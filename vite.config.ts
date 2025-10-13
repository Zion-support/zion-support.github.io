<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1

export default defineConfig({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@utils': resolve(__dirname, './app/utils'),
      '@hooks': resolve(__dirname, './hooks'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
<<<<<<< HEAD
=======
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
          // Core React libraries - keep together for better caching
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - group by functionality
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta - lightweight
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
          // Performance monitoring - separate for lazy loading
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // AI service pages - more granular splitting
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
          // 5G service pages - group together
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
          // Large vendor libraries
          if (id.includes('node_modules')) {
            // Group large libraries separately
            if (id.includes('axios') || id.includes('lodash')) {
              return 'http-utils'
            }
            if (id.includes('date-fns') || id.includes('moment')) {
              return 'date-utils'
            }
            return 'vendor'
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
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
  },
  preview: {
    port: 4173,
    open: true,
<<<<<<< HEAD
<<<<<<< HEAD
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
=======
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-helmet-async",
      "framer-motion",
      "lucide-react",
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
  },
});
=======
import { defineConfig } from 'vite';'

// https://vite.dev/config/;
export default defineConfig(({ command, mode }) => {;
const isProduction = mode === 'production''

  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    plugins: [
  // TODO: Add items
]
  // TODO: Add items
]
      react(),
    ],
    resolve: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      alias: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        '@': path.resolve(__dirname, './src'),'
        '@components': path.resolve(__dirname, './src/components'),'
        '@pages': path.resolve(__dirname, './src/pages'),'
        '@utils': path.resolve(__dirname, './src/utils'),'
        '@hooks': path.resolve(__dirname, './src/hooks'),'
        '@types': path.resolve(__dirname, './src/types'),'
        '@styles': path.resolve(__dirname, './src/styles'),'
        '@assets': path.resolve(__dirname, './src/assets'),'
      },
      dedupe: ['date-fns', 'react', 'react-dom'],'
    },
    build: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      target: 'es2020','
      minify: 'terser','
      sourcemap: false,
      outDir: 'dist','
      cssCodeSplit: true,
      modulePreload: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        polyfill: true,
      },
      assetsInlineLimit: 4096,
      terserOptions: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        compress: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info'] : [],'
        },
        mangle: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          safari10: true,
        },
      },
      rollupOptions: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        input: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          main: './index.html''
        },
        external: ['fs', 'path', 'stream', 'zlib', 'util', 'crypto', 'os', 'url', 'querystring'],'
        output: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          manualChunks: {
  // TODO: Add properties
}
  // TODO: Add properties
}
            'react-vendor': ['react', 'react-dom'],'
            'router-vendor': ['react-router-dom'],'
            'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-aspect-ratio', '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-context-menu', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-popover', '@radix-ui/react-progress', '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],'
            'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],'
            'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge', 'date-fns'],'
            'charts-vendor': ['recharts', 'd3-color', 'd3-format', 'd3-path', 'd3-time-format'],'
            'animation-vendor': ['framer-motion'],'
            'state-vendor': ['@reduxjs/toolkit', 'react-redux'],'
          },
          chunkFileNames: (chunkInfo) => {;
const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';'
            return `js/${facadeModuleId}-[hash].js`;
          },
          entryFileNames: 'js/[name]-[hash].js','
          assetFileNames: (assetInfo) => {;
const info = assetInfo.name.split('.');';
const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
              return `images/[name]-[hash][extname]`;
            }
            if (id.includes('react-router')) {'
              return 'vendor-router''
            }
            if (id.includes('framer-motion')) {'
              return 'vendor-framer';'
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {'
              return 'vendor-icons';'
            }
            if (id.includes('recharts')) {'
              return 'vendor-charts''
            }
            if (id.includes('web-vitals')) {'
              return 'vendor-analytics''
            }
            if (id.includes('react-helmet-async')) {'
              return 'vendor-helmet';'
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {'
              return 'vendor-utils';'
            }
            return 'vendor-other';'
          }
          // App chunks - group by functionality
          if (id.includes('/app/')) {'
            if (id.includes('/app/ai-')) {'
              return 'app-ai';'
            }
            if (id.includes('/app/cloud-') || id.includes('/app/cybersecurity')) {'
              return 'app-it';'
            }
            if (id.includes('/app/blog')) {'
              return 'app-blog';'
            }
            return 'app-pages';'
          }
          // Components
          if (id.includes('/src/components/')) {'
            return 'components';'
          }
          // Utils
          if (id.includes('/src/utils/')) {'
            return 'utils';'
          }
          return 'app''
        },
        chunkFileNames: 'assets/[name]-[hash].js','
        entryFileNames: 'assets/[name]-[hash].js','
        assetFileNames: (assetInfo) => {;
const ext = assetInfo.name?.split('.').pop()'
          if (/\.(css)$/i.test(assetInfo.name || '')) {'
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {'
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {'
            return `assets/fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        }
      }
    },
    server: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      port: 3000,
      host: true,
      open: false,
      hmr: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        overlay: false,
      },
      watch: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        ignored: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/temp_backup/**', '**/pages_backup/**', '**/src.broken/**', '**/*.backup.*', '**/*.cleanup-backup.*']'
      }
    },
    preview: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      port: 4173,
      host: true,
    },
    css: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      devSourcemap: true,
    },
    define: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      global: 'globalThis','
      'process.env': 'process.env','
    },
  }
})
>>>>>>> cursor/delete-records-a75e
=======
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
