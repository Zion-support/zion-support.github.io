/** @type {import ('tailwindcss').Config} */;
module.exports = {
  dark_mode: "class",
  content: [;
    './pages/**/*.{js, ts, jsx, tsx}',
    './components/**/*.{js, ts, jsx, tsx}',
    './src/**/*.{js, ts, jsx, tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
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
          950: '#030712',
        },
      },
      font_family: {
        sans: ['Inter', 'system - ui', 'sans - serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade - in': 'fade_in 0.5s ease - in - out',
        'slide - up': 'slide_up 0.5s ease - out',
        'scale - in': 'scale_in 0.3s ease - out',
        'float': 'float 6s ease - in - out infinite',
        'pulse - slow': 'pulse 4s cubic - bezier (0.4, 0, 0.6, 1) infinite',
        'bounce - slow': 'bounce 3s infinite',
        'spin - slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fade_in: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide_up: {
          '0%': { transform: 'translate_y (20px)', opacity: '0' },
          '100%': { transform: 'translate_y (0px)', opacity: '1' },
        },
        scale_in: {
          '0%': { transform: 'scale (0)' },
          '100%': { transform: 'scale (1)' },
        },
        float: {
          '0%, 100%': { transform: 'translate_y (0px)' },
          '50%': { transform: 'translate_y (-20px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      border_radius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      box_shadow: {
        'glow': '0 0 20px rgba (59, 130, 246, 0.3)',
        'glow - lg': '0 0 40px rgba (59, 130, 246, 0.4)',
        'glow - xl': '0 0 60px rgba (59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [;
    require ('@tailwindcss / forms'),
    require ('@tailwindcss / typography'),
    require ('@tailwindcss / aspect - ratio'),
  ],
}