import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'framer-motion'],
          'utils-vendor': ['clsx', 'tailwind-merge'],
          
          // Feature chunks
          'ai-services': [
            './app/ai-services/page',
            './app/ai-analytics/page',
            './app/ai-automation/page',
            './app/ai-business-intelligence/page',
            './app/ai-content-generation/page',
            './app/ai-customer-service/page',
            './app/ai-data-analytics/page',
            './app/ai-email-automation/page',
            './app/ai-fraud-detection/page',
            './app/ai-healthcare/page',
            './app/ai-marketing/page',
            './app/ai-predictive-analytics/page',
            './app/ai-project-management/page',
            './app/ai-recommendation-engine/page',
            './app/ai-sales-automation/page',
            './app/ai-workflow-automation/page'
          ],
          'it-services': [
            './app/it-services/page',
            './app/cloud-services/page',
            './app/cloud-infrastructure/page',
            './app/cybersecurity/page',
            './app/cybersecurity-solutions/page',
            './app/custom-development/page',
            './app/web-development/page',
            './app/mobile-development/page',
            './app/database-management/page',
            './app/network-infrastructure/page',
            './app/custom-software/page'
          ],
          'micro-saas': [
            './app/micro-saas/page',
            './app/zion-analytics-pro/page',
            './app/zion-security-shield/page',
            './app/zion-cloud-vault/page',
            './app/zion-content-studio/page'
          ],
          '5g-solutions': [
            './app/5g-solutions/page',
            './app/5g-implementation/page',
            './app/5g-edge-computing/page',
            './app/5g-iot-solutions/page',
            './app/5g-smart-city-solutions/page',
            './app/5g-private-networks/page',
            './app/5g-data-analytics/page',
            './app/5g-mobile-applications/page',
            './app/5g-network-infrastructure/page'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@styles': resolve(__dirname, './app/styles')
    }
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
})