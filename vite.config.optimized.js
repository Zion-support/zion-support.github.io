import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    "build": {
    "rollupOptions": {
      "output": {
        "manualChunks": {
          "vendor": [
            "react",
            "react-dom"
          ],
          "router": [
            "react-router-dom"
          ],
          "ui": [
            "framer-motion",
            "lucide-react"
          ],
          "charts": [
            "recharts"
          ]
        }
      }
    },
    "chunkSizeWarningLimit": 1000,
    "sourcemap": false,
    "minify": "terser",
    "terserOptions": {
      "compress": {
        "drop_console": true,
        "drop_debugger": true
      }
    }
  }
})