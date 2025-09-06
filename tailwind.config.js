/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
<<<<<<< HEAD
    './src/**/*.{js,ts,jsx,tsx}'
=======
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
<<<<<<< HEAD
=======
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
  },
<<<<<<< HEAD
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
=======
  plugins: [],
}
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
