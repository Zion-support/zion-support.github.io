import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		target: 'esnext',
		minify: 'terser',
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'icons-vendor': ['lucide-react'],
				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]';
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
					if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
					return 'assets/[name]-[hash].[ext]';
				},
			},
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
			},
			mangle: { safari10: true },
		},
		chunkSizeWarningLimit: 1000,
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
		exclude: [],
	},
	server: { port: 3000, host: true, open: true, cors: true, hmr: { overlay: false } },
	preview: { port: 4173, host: true, open: true },
	css: { devSourcemap: false },
	envPrefix: ['VITE_', 'ZION_'],
});
