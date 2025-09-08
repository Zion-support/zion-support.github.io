import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({;
  plugins: [react()]
  server: {
    port: 3000
    open: true
    host: true
  }
  build: {
    outDir: "dist"
    sourcemap: true
    minify: "terser"
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
        };
      };
    }
    terserOptions: {
      compress: {
        drop_console: true
        drop_debugger: true
      };
    };
  }
});
=======
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
>>>>>>> origin/main
