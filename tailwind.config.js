<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        background: 'var(--background)',
        foreground: 'var(--foreground)',
=======
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'matrix': 'matrix 20s linear infinite',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
        'cyber-float': 'cyberFloat 8s ease-in-out infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'energy-wave': 'energyWave 4s ease-in-out infinite',
        'quantum-spin': 'quantumSpin 6s linear infinite',
        'neural-network': 'neuralNetwork 10s linear infinite',
        'plasma-flow': 'plasmaFlow 5s ease-in-out infinite',
        'cyber-grid': 'cyberGrid 15s linear infinite',
=======
>>>>>>> origin/automation/changelog
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
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}