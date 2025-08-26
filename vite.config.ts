import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@components': resolve(__dirname, './src/components'),
			'@pages': resolve(__dirname, './src/pages'),
			'@utils': resolve(__dirname, './src/utils'),
			'@hooks': resolve(__dirname, './src/hooks'),
			'@types': resolve(__dirname, './src/types'),
			'@styles': resolve(__dirname, './src/styles'),
			'@assets': resolve(__dirname, './src/assets')
		}
	},
	css: { postcss: null },
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'ui-vendor': [
						'@radix-ui/react-accordion',
						'@radix-ui/react-alert-dialog',
						'@radix-ui/react-aspect-ratio',
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
					'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
					'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
					'icons-vendor': ['lucide-react'],
					'charts-vendor': ['recharts'],
					'date-vendor': ['date-fns', 'react-day-picker']
				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const name = assetInfo.name || ''
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
					if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
					return 'assets/[name]-[hash].[ext]'
				}
			}
		},
		chunkSizeWarningLimit: 1000
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
		],
		exclude: ['@radix-ui/react-icons']
	},
	server: { port: 3000, host: true, open: true },
	preview: { port: 4173, host: true, open: true }
})
