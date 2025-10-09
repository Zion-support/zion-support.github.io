/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
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
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        cyber: {
          blue: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#10b981',
          yellow: '#f59e0b',
        },
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          green: '#00ff00',
          blue: '#0080ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'cyber-scan': 'cyber-scan 2s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'energy-pulse': 'energy-pulse 3s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'quantum': 'quantum 5s ease-in-out infinite',
        'neural-network': 'neural-network 6s linear infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        'cyber-scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '100%': { 
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor',
            opacity: '0.8'
          },
        },
        'energy-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
            borderColor: 'rgba(0, 255, 255, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.6), inset 0 0 40px rgba(0, 255, 255, 0.2)',
            borderColor: 'rgba(0, 255, 255, 0.8)'
          },
        },
        'hologram': {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0px)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(-2px)',
            filter: 'hue-rotate(90deg)'
          },
        },
        'quantum': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            filter: 'brightness(1)'
          },
          '25%': { 
            transform: 'scale(1.02) rotate(1deg)',
            filter: 'brightness(1.1)'
          },
          '50%': { 
            transform: 'scale(1.05) rotate(0deg)',
            filter: 'brightness(1.2)'
          },
          '75%': { 
            transform: 'scale(1.02) rotate(-1deg)',
            filter: 'brightness(1.1)'
          },
        },
        'neural-network': {
          '0%': { 
            backgroundPosition: '0% 0%',
            opacity: '0.1'
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            opacity: '0.3'
          },
          '100%': { 
            backgroundPosition: '0% 0%',
            opacity: '0.1'
          },
        },
        'cyber-glow': {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'scale-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        'neural-network': `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `,
        'quantum-field': `
          conic-gradient(from 0deg at 50% 50%, 
            rgba(139, 92, 246, 0.1) 0deg,
            rgba(236, 72, 153, 0.1) 60deg,
            rgba(16, 185, 129, 0.1) 120deg,
            rgba(245, 158, 11, 0.1) 180deg,
            rgba(239, 68, 68, 0.1) 240deg,
            rgba(139, 92, 246, 0.1) 300deg,
            rgba(139, 92, 246, 0.1) 360deg
          )
        `,
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
        'neural-network': '400px 400px',
        'quantum-field': '200px 200px',
      },
    },
  },
  plugins: [],
}
