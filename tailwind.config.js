/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  darkMode: "class",
=======
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Added for Next.js app directory compatibility
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-0cee
=======
    './app/**/*.{js,ts,jsx,tsx}'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
    './app/**/*.{js,ts,jsx,tsx}',
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};
=======
=======
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
<<<<<<< HEAD
          950: '#172554',
<<<<<<< HEAD
=======
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
=======
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
<<<<<<< HEAD
<<<<<<< HEAD
        'spin-slow': 'spin 8s linear infinite',
=======
        'spin-slow': 'spin 8s linear infinite'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
        'spin-slow': 'spin 8s linear infinite',
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
=======
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
        },
        accent: {
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
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
          '70%': { transform: 'translate3d(0, -15px, 0)' },
          '90%': { transform: 'translate3d(0, -4px, 0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        },
<<<<<<< HEAD
=======
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
      },
<<<<<<< HEAD
=======
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
<<<<<<< HEAD
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem',
<<<<<<< HEAD
        '5xl': '2.5rem',
=======
        '5xl': '2.5rem'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
<<<<<<< HEAD
        '5xl': '2.5rem',
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
<<<<<<< HEAD
<<<<<<< HEAD
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
=======
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      },
    },
=======
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)'
      }
    }
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
      },
    },
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
<<<<<<< HEAD
<<<<<<< HEAD
    require('@tailwindcss/aspect-ratio'),
  ],
<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-0cee
=======
    require('@tailwindcss/aspect-ratio')
  ]
}
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
    require('@tailwindcss/aspect-ratio'),
  ],
}
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
