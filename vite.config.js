import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/workspace/src'
    }
  },
  define: {
    global: 'globalThis',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-transform-class-properties', { loose: true }]
        ]
      }
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    
  ],
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'os', 'crypto', 'stream', 'util', 'events', 'child_process', 'https', 'http', 'url', 'querystring'],
      output: {
        manualChunks: {
<<<<<<< HEAD
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          utils: ['axios', 'framer-motion', 'clsx', 'tailwind-merge'],
          charts: ['recharts'],
          forms: ['react-hook-form', '@hookform/resolvers']
        },
      },
=======
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
>>>>>>> origin/merge-pr-12271
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
=======
>>>>>>> origin/merge-pr-12271
      },
      mangle: {
        safari10: true
      }
    },
    sourcemap: false,
    reportCompressedSize: true
  },
  server: {
    hmr: true,
    port: 3000,
    host: true,
    open: true
  },
<<<<<<< HEAD
  preview: {
    port: 3000,
    host: true
=======
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
  },
});
=======
    }
>>>>>>> origin/merge-pr-12271
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@vite/client', '@vite/env']
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d
=======
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
  },
});
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
>>>>>>> origin/merge-pr-12271
