
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87'
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
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
=======
        neon: {
          cyan: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#10 b981',
          orange: '#f59 e0 b',
          blue: '#3 b82 f6'},
        dark: {,
          bg: '#0f0f23',
          surface: '#1a1a2e',
          elevated: '#16213e'},
        text: {,
          primary: '#ffffff',
          secondary: '#a1 a1 aa',
          muted: '#71717 a'}},
      fontFamily: {,
        sans: [,
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
          'sans-serif']},
      animation: {,
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'hologram-flicker': 'hologram-flicker 3s ease-in-out infinite',
        'data-stream': 'data-stream 3s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'loading': 'loading 1.5s infinite'},
      keyframes: {,
        'neon-glow': {,
          '0%, 100%': {
            textShadow: '0 0 5 px currentColor, 0 0 10 px currentColor, 0 0 15 px currentColor'},
          '50%': {
            textShadow: '0 0 10 px currentColor, 0 0 20 px currentColor, 0 0 30 px currentColor'}},
        'neon-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5 px currentColor, 0 0 10 px currentColor, 0 0 15 px currentColor'},
          '50%': {
            boxShadow: '0 0 10 px currentColor, 0 0 20 px currentColor, 0 0 30 px currentColor'}},
        'matrix-rain': {
          '0%': {
            transform: 'translateY(-100 vh)',
            opacity: '0'},
          '10%': {
            opacity: '1'},
          '90%': {
            opacity: '1'},
          '100%': {
            transform: 'translateY(100 vh)',
            opacity: '0'}},
        'hologram-flicker': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)'},
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.02)'}},
        'data-stream': {
          '0%': {
            transform: 'translateX(-100%)'},
          '100%': {
            transform: 'translateX(100 vw)'}},
        'fadeIn': {
          from: {,
            opacity: '0',
            transform: 'translateY(20 px)'},
          to: {,
            opacity: '1',
            transform: 'translateY(0)'}},
        'slideIn': {
          from: {,
            opacity: '0',
            transform: 'translateX(-20 px)'},
          to: {,
            opacity: '1',
            transform: 'translateX(0)'}},
        'scaleIn': {
          from: {,
            opacity: '0',
            transform: 'scale(0.9)'},
          to: {,
            opacity: '1',
            transform: 'scale(1)'}},
        'loading': {
          '0%': {
            backgroundPosition: '200% 0'},
          '100%': {
            backgroundPosition: '-200% 0'}}},
      backgroundImage: {,
        'cyber-grid': `,
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180 deg at 50% 50%, var(--tw-gradient-stops))'},
      backgroundSize: {,
        'grid': '20px 20px'},
      backdropBlur: {,
        xs: '2px'},
      boxShadow: {,
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'cyber': '0 20px 40px rgba(0, 255, 255, 0.2)'},
      textShadow: {,
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'},
      screens: {,
        'xs': '475px',
        '3xl': '1600px'},
      spacing: {,
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'},
      zIndex: {,
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'}}},
  plugins: [,
    function({ addUtilities }) {
      const newUtilities = {
        '.neon-text': {
          color: 'var(--neon-cyan)',
          animation: 'neon-glow 2 s ease-in-out infinite alternate'},
        '.neon-border': {
          border: '2 px solid var(--neon-cyan)',
          boxShadow: '0 0 10 px var(--neon-cyan), inset 0 0 10 px var(--neon-cyan)',
          animation: 'neon-pulse 2 s ease-in-out infinite alternate'},
        '.hologram-card': {
          background: 'linear-gradient(135 deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
          border: '1 px solid rgba(139, 92, 246, 0.3)',
          backdropFilter: 'blur(10 px)',
          animation: 'hologram-flicker 3 s ease-in-out infinite'},
        '.glass-morphism': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10 px)',
          border: '1 px solid rgba(255, 255, 255, 0.2)'},
        '.cyber-grid': {
          backgroundImage: `,
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20 px 20 px'},
        '.cyber-button': {
          background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-purple))',
          border: 'none',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1 px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3 s ease'},
        '.cyber-button: hover': {,
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 20px rgba(0, 255, 255, 0.3)'},
        '.cyber-card': {
          background: 'linear-gradient(135 deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%)',
          border: '1 px solid rgba(0, 255, 255, 0.3)',
          borderRadius: '12 px',
          padding: '24 px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3 s ease'},
        '.cyber-card: hover': {,
          transform: 'translateY(-5px)',
          borderColor: 'var(--neon-cyan)',
          boxShadow: '0 20 px 40 px rgba(0, 255, 255, 0.2)'},
        '.loading-skeleton': {
          background: 'linear-gradient(90 deg, #f0 f0 f0 25%, #e0 e0 e0 50%, #f0 f0 f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5 s infinite'},
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1 px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0'},
        '.sr-only: focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 'inherit',
          margin: 'inherit',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal'}}
      addUtilities(newUtilities)
>>>>>>> cursor/delete-records-30ea
    }
  },
  plugins: []
}