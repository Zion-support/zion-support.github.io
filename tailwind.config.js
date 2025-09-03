/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zion-blue-dark": "#172d67",
        "zion-blue": "#1e3a8a",
        "zion-blue-light": "#2e73ea",
        "zion-purple": "#8c15e9",
        "zion-purple-dark": "#6b21a8",
        "zion-purple-light": "#a855f7",
        "zion-cyan": "#22ddd2",
        "zion-cyan-dark": "#14b8a6",
        "zion-slate-light": "#94a3b8",
        "zion-slate": "#64748b",
        "zion-slate-dark": "#475569",
      },
    },
  },
  plugins: [],
}