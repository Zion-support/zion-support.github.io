import { defineConfig  } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({plugins: [react()],server: {port: 3000,open: true,host: true;
  },build: {outDir: "dist",sourcemap: true,minify: "esbuild",rollupOptions: {output: {manualChunks: {vendor: ['react', 'react-dom'],router: ['react-router-dom'],ui: ['framer-motion', 'lucide-react'];
        }
      }
    },terserOptions: {compress: {drop_console: true,drop_debugger: true;
      }
    }
  },resolve: {alias: {'@': path.resolve(__dirname, './src')}
  },optimizeDeps: {include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'];
  }
})

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
        }
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
  },
});
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom']
  }
});
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
