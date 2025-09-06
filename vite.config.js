<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

<<<<<<< HEAD



=======
// https://vitejs.dev/config/
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
<<<<<<< HEAD

    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
});




=======
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  css: {
    postcss: false
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
