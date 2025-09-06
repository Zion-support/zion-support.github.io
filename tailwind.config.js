/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
<<<<<<< HEAD
<<<<<<< HEAD
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Added for Next.js app directory compatibility
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-0cee
=======
    './app/**/*.{js,ts,jsx,tsx}'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
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
=======
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
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
        'spin-slow': 'spin 8s linear infinite',
=======
        'spin-slow': 'spin 8s linear infinite'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
<<<<<<< HEAD
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
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
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem',
<<<<<<< HEAD
        '5xl': '2.5rem',
=======
        '5xl': '2.5rem'
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
<<<<<<< HEAD
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
      },
    },
=======
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)'
      }
    }
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
<<<<<<< HEAD
    require('@tailwindcss/aspect-ratio'),
  ],
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-0cee
=======
    require('@tailwindcss/aspect-ratio')
  ]
}
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
