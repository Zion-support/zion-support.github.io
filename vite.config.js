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
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
  server: {
    port: 3000,
    open: true,
    host: true,
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
<<<<<<< HEAD
=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
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
<<<<<<< HEAD
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
  },
});
=======
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom']
  }
});
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d
=======
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
  },
});
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
