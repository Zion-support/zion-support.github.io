/** @type {import('tailwindcss').Config} */
export default {
  content: [
<<<<<<< HEAD
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
=======
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
>>>>>>> origin/temp-merge-11532
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    }
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
>>>>>>> origin/temp-merge-11532
}