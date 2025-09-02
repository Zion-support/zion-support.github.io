ursor/automate-test-fix-improve-and-merge-code-48f3
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    target:,
  es2018',
    outDir: 'dist,
    rollupOptions: {
      output: {
        manualChunks: {,
  react-vendor': [
  'react,
,
  react-dom'],
  'router-vendor': [
  'react-router-dom],
        },
      },
    },
  },
});

// Duplicate block removed to resolve multiple default export error.