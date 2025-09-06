<<<<<<< HEAD

;
  };
}),;
;};
});
import { defineConfig } from "vite;
import react from "@vitejs/plugin-react";
;
export default defineConfig({,
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
  plugins: [react()],
  server: {,
    port: 3000,
    open: true,
    host: true
  },
  build: {,
    outDir: dist",
    sourcemap: true,
    minify: "terser,
    rollupOptions: {,
      output: {,
        manualChunks: {,
          vendor: ["react", react-dom"],
          ui: ["framer-motion, "lucide-react"],
          router: [react-router-dom"]
        };
      };
    },
    terserOptions: {,
      compress: {,
        drop_console: true,
        drop_debugger: true
      };
    };
  },
<<<<<<< HEAD
  optimizeDeps: {,
    include: ["react, "react-dom", framer-motion", "lucide-react"]
  };
}),
=======
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
});
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
