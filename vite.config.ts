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
		minify: 'terser',
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
						'@radix-ui/react-context-menu',
						'@radix-ui/react-dialog',
						'@radix-ui/react-dropdown-menu',
						'@radix-ui/react-label',
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
						'@radix-ui/react-tooltip'
					],
					'animation-vendor': ['framer-motion'],
					'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
					'icons-vendor': ['lucide-react'],
					'charts-vendor': ['recharts'],
					'date-vendor': ['date-fns', 'react-day-picker'],
					'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
					'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
					'router-vendor': ['react-router-dom']
				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]';
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
					if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
					return 'assets/[name]-[hash].[ext]';
				}
			}
		}
	},
	server: {
		port: 3000,
		open: true,
		host: true
	},
	preview: {
		port: 4173,
		open: true,
		host: true
	}
});
