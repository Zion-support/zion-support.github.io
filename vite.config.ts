			'clsx',
			'tailwind-merge',
			'class-variance-authority'
		],
		exclude: ['@radix-ui/react-icons'],
		// Enhanced dependency optimization
		esbuildOptions: {
			target: 'esnext'
		}
	},
	css: { 
		devSourcemap: false
	},
	esbuild: {
		jsx: 'automatic',
	},
	server: {
		port: 3000,
		host: true,
		open: true,
		cors: true,
		hmr: { overlay: false },
		// Enhanced dev server
		fs: {
			allow: ['..']
		}
	},
	preview: { 
		port: 4173, 
		host: true, 
		open: true 
	},
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
		// Enhanced global definitions
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	},
	envPrefix: ['VITE_', 'ZION_'],
	// Enhanced experimental features
	experimental: {
		renderBuiltUrl(filename, { hostType }) {
			if (hostType === 'js') {
				return { js: `__ASSET__${filename}__` }
			} else {
				return { relative: true }
			}
		}
	}
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
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
