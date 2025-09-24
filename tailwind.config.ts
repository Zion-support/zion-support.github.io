import type { Config } from 'tailwindcss',
import defaultTheme from 'tailwindcss/defaultTheme',
,
const config: Config = {,
  darkMode: 'class',;
  content: [,
    './pages/**/*.{ts,tsx}',;
    './components/**/*.{ts,tsx}',;
    './app/**/*.{ts,tsx}',;
    './src/**/*.{ts,tsx}',;
  ],;
  theme: {,
    extend: {,
      fontFamily: {,
        sans: ['Inter', ...defaultTheme.fontFamily.sans],;
      },;
    },;
  },;
  plugins: [],;
};
,
export default config,
,