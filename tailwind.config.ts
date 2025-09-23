<<<<<<< HEAD
import type { Config } from 'tailwindcss'
export default { content: ['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx}'], theme: { extend: {} }, plugins: [] } satisfies Config
=======
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config ={
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]}}},
  plugins: []};

export default config;
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
