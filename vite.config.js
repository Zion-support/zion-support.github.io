import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  build: {
    outDir: "dist",
    target: 'esnext',
    minify: 'terser',
    sourcemap: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
    minify: "terser",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom'],
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    minify: "esbuild",
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
<<<<<<< HEAD
<<<<<<< HEAD
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
        drop_debugger: true,
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
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        },
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
        },
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      },
    },
  },
<<<<<<< HEAD
=======
        },
      },
    },
  },
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
});
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
