<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import path from 'path'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, filename: 'bundle-stats.html' }),
    {
      name: 'mock-api',
      configureServer(server) {
        // server.middlewares may be undefined in some preview environments
        if (!server?.middlewares?.use) return;
        server.middlewares.use('/api/public/services', (req, res) => {
          const url = new URL(req.originalUrl || req.url, 'http://localhost');
          const category = url.searchParams.get('category');
          const q = (url.searchParams.get('q') || '').toLowerCase();
          const data = SAMPLE_SERVICES.filter((item) => {
            if (category && item.category !== category) return false;
            if (q && !item.title.toLowerCase().includes(q)) return false;
            return true;
          });
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        });
      },
    },
  ],
  // Update the base path if the application will be hosted under a
  // subdirectory. By default we use '/' to work for most setups.
  base: '/',
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
})
