/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zion-slate-dark': '#1e293b',
        'zion-slate': '#334155',
        'zion-slate-light': '#475569',
      },
    },
  },
  plugins: [],
}