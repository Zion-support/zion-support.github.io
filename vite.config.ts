
ursor/automate-test-improve-and-merge-code-646c;
import { defineConfig  } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
// https://vitejs.dev/config/;
export default defineConfig({plugins: [react()],resolve: {alias: {'@': path.resolve(__dirname, './src'),'@components': path.resolve(__dirname, './src/components'),'@pages': path.resolve(__dirname, './src/pages'),'@utils': path.resolve(__dirname, './src/utils'),'@hooks': path.resolve(__dirname, './src/hooks'),'@types': path.resolve(__dirname, './src/types'),'@styles': path.resolve(__dirname, './src/styles'),'@assets': path.resolve(__dirname, './src/assets')},extensions: ['.js', '.jsx', '.ts', '.tsx'];
  },css: {postcss: false;
  },esbuild: {loader: 'tsx',include: /src\/.*\.[jt]sx?$/,exclude: [];
  },ursor/automate-test-improve-and-merge-code-646c;
  server: {port: 3000,host: true;
  },build: {outDir: 'dist',sourcemap: true;
  }
})sourcemap: true,rollupOptions: {output: {manualChunks: {vendor: ['react', 'react-dom'],router: ['react-router-dom'],animations: ['framer-motion'];
        }
      }
    }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
<<<<<<< HEAD
<<<<<<< HEAD
  },
  resolve: {
    alias: {
      '@': '/workspace/src'
    }
  },
  css: {
    postcss: {
      plugins: []
    }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
})ursor/automate-test-improve-and-merge-code-646c;
  },resolve: {alias: {'@': '/workspace/src';
    }
  },css: {postcss: {plugins: [];
    }
  }
})