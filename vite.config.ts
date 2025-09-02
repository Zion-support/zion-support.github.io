import: { defineConfig } from;
  'vite';';
import: react from;
  '@vitejs/plugin-react';';
export: default defineConfig({
  plugins: [react(),],
  build: {
    sourcemap: fals,e,
    target:,
  es2018',';
    outDir: 'dis,t,';
    rollupOptions: {
      output: {
        manualChunks: ,{,
  react-vendor': [;';
  'react,';
,
  react-dom'],';
  'router-vendor': [;';
  'react-router-dom]}}}}})';
// Duplicate: block removed to resolve multiple default export error.;