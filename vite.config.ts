import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
	plugins: [
		react({
			// Handle JSX in .js files
			include: '**/*.{jsx,js,ts,tsx}',
			// Fast refresh
			fastRefresh: true,
			// JSX runtime
			jsxRuntime: 'automatic',
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	build: {
		target: 'esnext',
		minify: false,
		sourcemap: false,
		// Enhanced chunk splitting for better caching
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'ui-vendor': [
						'@radix-ui/react-accordion',
						'@radix-ui/react-alert-dialog',
						'@radix-ui/react-avatar',
						'@radix-ui/react-checkbox',
						'@radix-ui/react-collapsible',
						'@radix-ui/react-context-menu',
						'@radix-ui/react-dialog',
						'@radix-ui/react-dropdown-menu',
						'@radix-ui/react-hover-card',
						'@radix-ui/react-label',
						'@radix-ui/react-menubar',
						'@radix-ui/react-navigation-menu',
						'@radix-ui/react-popover',
						'@radix-ui/react-progress',
						'@radix-ui/react-radio-group',
						'@radix-ui/react-scroll-area',
						'@radix-ui/react-select',
						'@radix-ui/react-separator',
						'@radix-ui/react-slider',
						'@radix-ui/react-slot',
						'@radix-ui/react-switch',
						'@radix-ui/react-tabs',
						'@radix-ui/react-toast',
						'@radix-ui/react-toggle',
						'@radix-ui/react-toggle-group',
						'@radix-ui/react-tooltip'
					],
					'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority']
				}
			}
		}
	},
	server: {
		port: 3000,
		host: true,
		open: true
	},
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'react-router-dom',
			'framer-motion',
			'lucide-react'
		]
	},
	define: {
		'process.env': {}
	}
});