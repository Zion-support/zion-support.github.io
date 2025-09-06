import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules/',
      'dist/',
      'coverage/',
      'tests.disabled/**',
      'supabase.disabled/**',
      '**/*.d.ts',
      '**/*.config.*',
      'scripts/',
      'public/',
      '.github/',
      'broken_files_backup/',
      'src.broken/',
      'services.disabled.temp/'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'coverage/',
        'tests.disabled/**',
        'supabase.disabled/**',
        '**/*.d.ts',
        '**/*.config.*',
        'scripts/',
        'public/',
        '.github/',
        'broken_files_backup/',
        'src.broken/',
        'services.disabled.temp/'
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
