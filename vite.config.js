<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

=======

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.js
export default defineConfig({
=======

;
  };
}),;
;};
});
import { defineConfig } from "vite;
import react from "@vitejs/plugin-react";
;
export default defineConfig({,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  plugins: [react()],
<<<<<<< HEAD
  server: {,
    port: 3000,
    host: true
=======
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
<<<<<<< HEAD
  build: {
    outDir: 'dist',
<<<<<<< HEAD
    sourcemap: true
  }
});
=======
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
<<<<<<< HEAD:vite.config.js
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
<<<<<<< HEAD
  },
})
=======
  }

})

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  optimizeDeps: {,
    include: ["react, "react-dom", framer-motion", "lucide-react"]
  };
}),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.js
=======
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
