=======import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

export default defineConfig({
  plugins: [react()],
  build: {
=======    outDir: 'dist',
    sourcemap: false,
  },
})=======
    outDir: 'dist',
    sourcemap: false,
  },
})>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
