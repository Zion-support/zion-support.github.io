import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    target: 'es2018',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
        },
      },
    },
  },
});

// Duplicate block removed to resolve multiple default export error.
=======
import path from 'node:path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'animation-vendor': ['framer-motion'],
					'utils-vendor': ['clsx', 'tailwind-merge'],
					'icons-vendor': ['lucide-react']
				}
			}
		}
	},
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'react-router-dom',
			'framer-motion',
			'lucide-react',
			'clsx',
			'tailwind-merge'
		]
	},
	server: {
		port: 3000,
		host: true,
		open: true
	}
});
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
