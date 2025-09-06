import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// https://vitejs.dev/config/
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
<<<<<<< HEAD
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
=======
    },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  server: {
    port: 3000,
    open: true,
    host: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  },
<<<<<<< HEAD
  server: {
    port: 3000,
    open: true,
<<<<<<< HEAD
  },
  css: {
    postcss: true
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  build: {
    outDir: "dist",
    target: 'esnext',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
=======
    host: true
  },
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom']
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
<<<<<<< HEAD
  }
});
=======
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
        drop_debugger: true,
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      },
    },
  },
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
<<<<<<< HEAD
});
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
