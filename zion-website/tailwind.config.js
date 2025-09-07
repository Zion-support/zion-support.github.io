/* eslint-env node */
/** @type {import('tailwindcss').Config} */

    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {}
    extend: {}
      colors: {'
        background: 'hsl(var(--background))','
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {'
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],