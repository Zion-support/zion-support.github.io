/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#10b981',
          orange: '#f59e0b',
          blue: '#3b82f6',
        },
        dark: {
          bg: '#0f0f23',
          surface: '#1a1a2e',
          elevated: '#16213e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
          muted: '#71717a',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      animation: {
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'hologram-flicker': 'hologram-flicker 3s ease-in-out infinite',
        'data-stream': 'data-stream 3s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        'neon-glow': {
          '0%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'neon-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': {
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'matrix-rain': {
          '0%': {
            transform: 'translateY(-100vh)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '0',
          },
        },
        'hologram-flicker': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.02)',
          },
        },
        'data-stream': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100vw)',
          },
        },
        'fadeIn': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slideIn': {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'scaleIn': {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'loading': {
          '0%': {
            backgroundPosition: '200% 0',
          },
          '100%': {
            backgroundPosition: '-200% 0',
          },
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'cyber': '0 20px 40px rgba(0, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}