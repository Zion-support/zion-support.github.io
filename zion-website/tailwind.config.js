/** @type {_import('tailwindcss').Config} */
module.exports = {_content: [
    './src/pages/**/*.{js, _ts, _jsx, _tsx, _mdx}',
    './src/components/**/*.{_js, _ts, _jsx, _tsx, _mdx}',
    './src/app/**/*.{_js, _ts, _jsx, _tsx, _mdx}'],
  theme: {_extend: {
      colors: {
        background: 'hsl(var(--background))', _foreground: 'hsl(var(--foreground))'},
      fontFamily: {_sans: ['Inter', _'sans-serif']}}},
  plugins: []}