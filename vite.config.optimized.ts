import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
export default defineConfig({plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true)
      brotliSize: true}
    }),
  ],
  build: {target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'framer-motion'],
          'blog-content': [
            './blog/ai-autonomous-threat-response-2025',
            './blog/ai-prompt-engineering-mastery-2025',
            './blog/ai-synthetic-data-generation-2025',
          ]}
        },
      },
    },
    terserOptions: {compress: {
        drop_console: true,
        drop_debugger: true}
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {include: ['react', 'react-dom', 'react-router-dom']}
  };
});
import { defineConfig } from 'vite'' import react from '@vitejs/plugin-react'' import { visualizer } from 'rollup-plugin-visualizer' export default defineConfig({/* content */} plugins: [ react(), visualizer({/* content */}' filename: './dist/stats.html', open: false, gzipSize: true, brotliSize: true) }), ], build: {/* content */}' target: 'es2015',' minify: 'terser', sourcemap: false, rollupOptions: {/* content */} output: {/* content */} manualChunks: {/* content */}' 'react-vendor': ['react', 'react-dom', 'react-router-dom'],' 'ui-vendor': ['lucide-react', 'framer-motion'],' 'blog-content': [' './blog/ai-autonomous-threat-response-2025',' './blog/ai-prompt-engineering-mastery-2025',' './blog/ai-synthetic-data-generation-2025', ], }, }, }, terserOptions: {/* content */} compress: {/* content */} drop_console: true, drop_debugger: true, }, }, chunkSizeWarningLimit: 1000, }, optimizeDeps: {/* content */}' include: ['react', 'react-dom', 'react-router-dom'], }; }); '