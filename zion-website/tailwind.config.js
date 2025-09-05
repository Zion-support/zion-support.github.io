<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */;
module.exports = {;
  content:[;
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}./src/components/**/*.{js,ts,jsx,tsx,mdx}',;
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'],;
  theme:{;
    extend:{;
      colors:{;
        background:'hsl(var(--background))',;
        foreground:'hsl(var(--foreground))'},;
      fontFamily:{;
        sans:['Intersans-serif']}}},;
  plugins:[]}
=======
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
        sans: ['Intersans-serif']}}},  plugins: []}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
