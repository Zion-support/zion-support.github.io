import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
    './src/services/**/*.{js,ts,jsx,tsx}',
    './src/store/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
    './src/types/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Zion Tech Group Brand Colors
        zion: {
          50: '#f0fdfd',
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
        // Enhanced color palette
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
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Neutral colors with better contrast
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Futuristic theme colors
        futuristic: {
          bg: '#020617',
          surface: '#0f172a',
          border: '#1e293b',
          text: '#f8fafc',
          'text-secondary': '#cbd5e1',
          'text-muted': '#64748b',
          accent: '#22ddd2',
          'accent-light': '#67e8e0',
          'accent-dark': '#0d9488',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        display: [
          'Inter',
          'system-ui',
          'sans-serif'
        ]
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #22ddd2, 0 0 10px #22ddd2, 0 0 15px #22ddd2' },
          '100%': { boxShadow: '0 0 10px #22ddd2, 0 0 20px #22ddd2, 0 0 30px #22ddd2' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        'glow': '0 0 20px rgba(34, 221, 210, 0.3)',
        'glow-lg': '0 0 40px rgba(34, 221, 210, 0.4)',
        'glow-xl': '0 0 60px rgba(34, 221, 210, 0.5)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #22ddd2, #3b82f6, #8b5cf6, #22ddd2)',
        'gradient-futuristic': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'gradient-cyber': 'linear-gradient(45deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
        '300%': '300%',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      // Accessibility and focus management
      outline: {
        'none': 'none',
        'white': '2px solid white',
        'black': '2px solid black',
      },
      // Custom utilities for accessibility
      ringColor: {
        'focus': '#22ddd2',
        'focus-visible': '#3b82f6',
      },
      ringOffsetColor: {
        'focus': '#22ddd2',
        'focus-visible': '#3b82f6',
      },
      ringOffsetWidth: {
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [
    // Custom plugin for accessibility utilities
    function({ addUtilities, theme }: any) {
      const newUtilities = {
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },
        '.not-sr-only': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
        '.focus-visible': {
          outline: '2px solid transparent',
          outlineOffset: '2px',
          boxShadow: '0 0 0 2px var(--tw-ring-color)',
        },
        '.high-contrast': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgb(0 0 0 / var(--tw-bg-opacity))',
          color: 'rgb(255 255 255 / var(--tw-text-opacity))',
        },
        '.reduced-motion': {
          '--tw-transition-duration': '0.01ms',
          '--tw-animation-duration': '0.01ms',
        },
        '.large-text': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        },
        '.focus-highlight': {
          '--tw-ring-color': 'rgb(34 221 210 / 0.5)',
          '--tw-ring-offset-width': '2px',
        },
        '.screen-reader-mode': {
          '--tw-text-opacity': '1',
          color: 'rgb(0 0 0 / var(--tw-text-opacity))',
          backgroundColor: 'rgb(255 255 255 / var(--tw-bg-opacity))',
        },
        '.high-contrast-text': {
          '--tw-text-opacity': '1',
          color: 'rgb(0 0 0 / var(--tw-text-opacity))',
          textShadow: '0 0 1px rgb(255 255 255)',
        },
        '.increased-spacing': {
          '--tw-space-y-reverse': '0',
          marginTop: 'calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))',
          marginBottom: 'calc(1.5rem * var(--tw-space-y-reverse))',
        },
        '.cursor-enhancement': {
          cursor: 'pointer',
        },
        '.keyboard-navigation': {
          '--tw-ring-color': 'rgb(59 130 246 / 0.5)',
          '--tw-ring-offset-width': '4px',
        },
        '.color-blindness-support': {
          filter: 'contrast(1.2) saturate(1.2)',
        },
        '.reduced-animations': {
          '--tw-transition-duration': '0.01ms',
          '--tw-animation-duration': '0.01ms',
          '--tw-transform': 'none',
        },
        // Futuristic theme utilities
        '.bg-futuristic': {
          backgroundColor: 'rgb(2 6 23)',
        },
        '.text-futuristic': {
          color: 'rgb(248 250 252)',
        },
        '.border-futuristic': {
          borderColor: 'rgb(30 41 59)',
        },
        '.btn-futuristic': {
          backgroundColor: 'rgb(34 221 210)',
          color: 'rgb(2 6 23)',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        },
        '.btn-futuristic:hover': {
          backgroundColor: 'rgb(103 232 224)',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px -3px rgb(0 0 0 / 0.1)',
        },
        '.btn-futuristic:focus': {
          outline: '2px solid rgb(34 221 210)',
          outlineOffset: '2px',
        },
        // Animation delay utilities
        '.animation-delay-100': {
          animationDelay: '100ms',
        },
        '.animation-delay-200': {
          animationDelay: '200ms',
        },
        '.animation-delay-300': {
          animationDelay: '300ms',
        },
        '.animation-delay-400': {
          animationDelay: '400ms',
        },
        '.animation-delay-500': {
          animationDelay: '500ms',
        },
        // Custom scrollbar
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(30 41 59) rgb(2 6 23)',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '6px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: 'rgb(2 6 23)',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          background: 'rgb(30 41 59)',
          borderRadius: '3px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb:hover': {
          background: 'rgb(51 65 85)',
        },
      }
      addUtilities(newUtilities)
    },
    // Custom plugin for responsive typography
    function({ addUtilities, theme }: any) {
      const responsiveText = {
        '.text-responsive-xs': {
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          lineHeight: '1.4',
        },
        '.text-responsive-sm': {
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
          lineHeight: '1.5',
        },
        '.text-responsive-base': {
          fontSize: 'clamp(1rem, 3vw, 1.125rem)',
          lineHeight: '1.6',
        },
        '.text-responsive-lg': {
          fontSize: 'clamp(1.125rem, 3.5vw, 1.25rem)',
          lineHeight: '1.6',
        },
        '.text-responsive-xl': {
          fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
          lineHeight: '1.5',
        },
        '.text-responsive-2xl': {
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          lineHeight: '1.4',
        },
        '.text-responsive-3xl': {
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          lineHeight: '1.3',
        },
        '.text-responsive-4xl': {
          fontSize: 'clamp(2.5rem, 7vw, 4rem)',
          lineHeight: '1.2',
        },
        '.text-responsive-5xl': {
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          lineHeight: '1.1',
        },
      }
      addUtilities(responsiveText)
    },
  ],
  // Safelist for dynamic classes
  safelist: [
    'sr-only',
    'not-sr-only',
    'focus-visible',
    'high-contrast',
    'reduced-motion',
    'large-text',
    'focus-highlight',
    'screen-reader-mode',
    'high-contrast-text',
    'increased-spacing',
    'cursor-enhancement',
    'keyboard-navigation',
    'color-blindness-support',
    'reduced-animations',
    'bg-futuristic',
    'text-futuristic',
    'border-futuristic',
    'btn-futuristic',
    'animation-delay-100',
    'animation-delay-200',
    'animation-delay-300',
    'animation-delay-400',
    'animation-delay-500',
    'scrollbar-thin',
    'text-responsive-xs',
    'text-responsive-sm',
    'text-responsive-base',
    'text-responsive-lg',
    'text-responsive-xl',
    'text-responsive-2xl',
    'text-responsive-3xl',
    'text-responsive-4xl',
    'text-responsive-5xl',
  ],
} satisfies Config
