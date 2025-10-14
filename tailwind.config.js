/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
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
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        cyber: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          yellow: '#ffff00',
          green: '#00ff00',
          purple: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
        'hologram-flicker': 'hologram-flicker 3s ease-in-out infinite',
        'hologram-scan': 'hologram-scan 2s linear infinite',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'particle-float': 'particle-float 20s linear infinite',
        'neural-pulse': 'neural-pulse 8s ease-in-out infinite',
        'hologram-sweep': 'hologram-sweep 3s linear infinite',
        'cyber-glow-pulse': 'cyber-glow-pulse 2s ease-in-out infinite',
        'matrix-fall': 'matrix-fall 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-30px)' },
          '70%': { transform: 'translateY(-15px)' },
          '90%': { transform: 'translateY(-4px)' },
        },
        'cyber-glow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'hologram-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'hologram-scan': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'energy-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-200px)' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'hologram-sweep': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        'cyber-glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
          },
          '50%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
          },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        'neural-network': `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `,
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
        'neural-network': '200px 200px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
        'hologram': '0 0 30px rgba(139, 92, 246, 0.3)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
      },
      textShadow: {
        'neon': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        'cyber': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '2000px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.cyber-grid': {
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        },
        '.neural-network-bg': {
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `,
        },
        '.neon-text': {
          textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        },
        '.cyber-text': {
          background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'cyber-glow 3s ease-in-out infinite',
        },
        '.cyber-glow': {
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
        },
        '.hologram-card': {
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)',
          animation: 'hologram-flicker 3s ease-in-out infinite',
          position: 'relative',
          overflow: 'hidden',
        },
        '.quantum-card': {
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden',
        },
        '.energy-pulse': {
          animation: 'energy-pulse 2s ease-in-out infinite',
        },
        '.cyber-scan-line': {
          position: 'relative',
        },
        '.cyber-scan-line::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          animation: 'scan-line 2s linear infinite',
        },
        '.cyber-button': {
          background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
          border: '1px solid #00ffff',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
        },
        '.cyber-button:hover': {
          background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          transform: 'translateY(-2px)',
        },
        '.matrix-rain': {
          position: 'relative',
          overflow: 'hidden',
        },
        '.matrix-rain::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: 'linear-gradient(90deg, transparent 98%, rgba(0, 255, 0, 0.3) 100%)',
          backgroundSize: '2px 100%',
          animation: 'matrix-fall 1s linear infinite',
          pointerEvents: 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}