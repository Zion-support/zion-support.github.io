/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#1e40af',
        'zion-blue-dark': '#1e3a8a',
        'zion-purple': '#7c3aed',
        'zion-cyan': '#06b6d4',
        'zion-slate-light': '#94a3b8',
      },
    },
  },
  plugins: [],
};