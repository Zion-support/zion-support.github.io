/** @type {import('tailwindcss').Config} */
export default {
  content: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
=======
    './pages/**/*.{js,ts,jsx,tsx}./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fade-in': 'fadeIn 0.6s ease-out forwardsfade-in-up': 'fadeInUp 0.6s ease-out forwardsfade-in-down': 'fadeInDown 0.6s ease-out forwardsslide-in-left': 'slideInLeft 0.6s ease-out forwardsslide-in-right': 'slideInRight 0.6s ease-out forwardsscale-in': 'scaleIn 0.6s ease-out forwardsfloat': 'float 6s ease-in-out infinitepulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinitebounce-slow': 'bounce 2s infiniteglow': 'glow 2s ease-in-out infinite alternateshimmer': 'shimmer 2.5s linear infinitematrix': 'matrix 20s linear infiniteneon-pulse': 'neonPulse 1.5s ease-in-out infinitecyber-float': 'cyberFloat 8s ease-in-out infinitehologram': 'hologram 3s ease-in-out infiniteenergy-wave': 'energyWave 4s ease-in-out infinitequantum-spin': 'quantumSpin 6s linear infiniteneural-network': 'neuralNetwork 10s linear infiniteplasma-flow': 'plasmaFlow 5s ease-in-out infinitecyber-grid': 'cyberGrid 15s linear infinite',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',


    './src/**/*.{js,ts,jsx,tsx,mdx}',

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
<<<<<<< HEAD
=======
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
<<<<<<< HEAD
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
=======
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        blue: {
=======
background: 'var(--background)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
<<<<<<< HEAD
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
          950: '#030712',
        },
<<<<<<< HEAD
=======
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      },
    },
  },
<<<<<<< HEAD
  plugins: [],
<<<<<<< HEAD
<<<<<<< HEAD
=======
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
