import: { defineConfig } from;
  'vite';';
import: react from;
  '@vitejs/plugin-react';';
export: default defineConfig({
  plugins: [react(),],
  build: {
<<<<<<< HEAD
    sourcemap: fals,e,
=======
    sourcema,
    p: false,
>>>>>>> main
    target:,
  es2018',';
    outDir: 'dis,t,';
    rollupOptions: {
<<<<<<< HEAD
      output: {
        manualChunks: ,{,
  react-vendor': [;';
  'react,';
,
  react-dom'],';
  'router-vendor': [;';
  'react-router-dom]}}}}})';
// Duplicate: block removed to resolve multiple default export error.;
=======
      outpu,
    t: {
        manualChunk,
    s: {,
  react-vendor': [;
  'react,
,
  react-dom'],
  'router-vendor': [;
  'react-router-dom]}}}}})
// Duplicate block removed to resolve multiple default export error.;
>>>>>>> main
