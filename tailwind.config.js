/** @type {import('tailwindcss').Config} */
export default {
  content: [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/latest-content-home
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
<<<<<<< HEAD
=======
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
=======
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
>>>>>>> origin/merge-pr-12271
=======
>>>>>>> origin/feat/latest-content-home
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/latest-content-home
        'zion-blue-dark': '#172d67',
        'zion-blue': '#1e3a8a',
        'zion-blue-light': '#2e73ea',
        'zion-purple': '#8c15e9',
        'zion-purple-dark': '#6b21a8',
        'zion-purple-light': '#a855f7',
        'zion-cyan': '#06b6d4',
        'zion-cyan-light': '#22d3ee',
        'zion-slate-dark': '#0b1220',
        'zion-slate': '#111827',
        'zion-slate-light': '#1f2937',
<<<<<<< HEAD
=======
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
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
          900: '#111827',
          950: '#030712'
        }
>>>>>>> origin/merge-pr-12271
=======
>>>>>>> origin/feat/latest-content-home
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
  plugins: [],
}
=======
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
=======
};
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
>>>>>>> origin/merge-pr-12271
=======
  plugins: [],
}
>>>>>>> origin/feat/latest-content-home
