<<<<<<< HEAD
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}./src/components/**/*.{js,ts,jsx,tsx,mdx}./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))'},
      fontFamily: {
        sans: ['Intersans-serif']}}},
=======
/** @type {_import('tailwindcss').Config} */
module.exports = {_content: [
    './src/pages/**/*.{js, _ts, _jsx, _tsx, _mdx}',
    './src/components/**/*.{_js, _ts, _jsx, _tsx, _mdx}',
    './src/app/**/*.{_js, _ts, _jsx, _tsx, _mdx}'],
  theme: {_extend: {
      colors: {
        background: 'hsl(var(--background))', _foreground: 'hsl(var(--foreground))'},
      fontFamily: {_sans: ['Inter', _'sans-serif']}}},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  plugins: []}