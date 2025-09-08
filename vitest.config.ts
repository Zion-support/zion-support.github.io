import { defineConfig } from 'vitest/config';
<<<<<<< HEAD
import react from '@vitejs/plugin-react';
=======
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'import.meta.env.NEXT_PUBLIC_SUPABASE_URL': JSON.stringify(
      'http://localhost:54321',
    ),
    'import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(
      'test-anon-key-placeholder',
    )
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html']
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
      'tests/e2e/**',
      'tests/storybook/**'
    ]
  }
<<<<<<< HEAD
});
=======
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
<<<<<<< HEAD
});
=======
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
>>>>>>> origin/main
=======
});
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
