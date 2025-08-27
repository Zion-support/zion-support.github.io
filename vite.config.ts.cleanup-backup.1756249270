import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
					'icons-vendor': ['lucide-react'],
					'utils-vendor': ['clsx']
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
		},
		esbuild: { drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [] },
		chunkSizeWarningLimit: 1000
	},
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'react-router-dom',
			'framer-motion',
			'lucide-react',
			'clsx'
		]
	},
	css: { devSourcemap: false },
	server: {
		port: 3000,
		host: true,
		open: true,
		cors: true,
		hmr: { overlay: false }
	},
	preview: { port: 4173, host: true, open: true },
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__PROD__: JSON.stringify(process.env.NODE_ENV === 'production')
	},
	worker: { format: 'es' },
	envPrefix: ['VITE_', 'ZION_']
});
