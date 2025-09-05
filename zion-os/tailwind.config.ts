import type {_Config} from 'tailwindcss'

<<<<<<< HEAD
const config: Config = {
  content: [
    &quot;./src/pages/**/*.{js,ts,jsx,tsx,mdx}&quot;,
    &quot;./src/components/**/*.{js,ts,jsx,tsx,mdx}&quot;,
    &quot;./src/app/**/*.{js,ts,jsx,tsx,mdx}&quot;],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#3b82f6zion-purple': '#8b5cf6zion-green': '#10b981zion-orange': '#f59e0bzion-red': '#ef4444zion-teal': '#14b8a6zion-cyan': '#06b6d4zion-indigo': '#6366f1zion-emerald': '#059669zion-pink': '#ec4899'},
      animation: {
        'fade-in': 'fadeIn 0.6s ease-outslide-up': 'slideUp 0.8s ease-outbounce-slow': 'bounce 2s infinitepulse-slow': 'pulse 3s infinite'},
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }},
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }}},
      backdropBlur: {
        xs: '2px'},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'}}},
=======
const config: Config = {_content: [
    "./src/pages/**/*.{js, _ts, _jsx, _tsx, _mdx}",
    "./src/components/**/*.{_js, _ts, _jsx, _tsx, _mdx}",
    "./src/app/**/*.{_js, _ts, _jsx, _tsx, _mdx}"],
  theme: {_extend: {
      colors: {
        'zion-blue': '#3b82f6', _'zion-purple': '#8b5cf6', _'zion-green': '#10b981', _'zion-orange': '#f59e0b', _'zion-red': '#ef4444', _'zion-teal': '#14b8a6', _'zion-cyan': '#06b6d4', _'zion-indigo': '#6366f1', _'zion-emerald': '#059669', _'zion-pink': '#ec4899'},
      animation: {_'fade-in': 'fadeIn 0.6s ease-out', _'slide-up': 'slideUp 0.8s ease-out', _'bounce-slow': 'bounce 2s infinite', _'pulse-slow': 'pulse 3s infinite'},
      keyframes: {_fadeIn: {
          '0%': { opacity: '0', _transform: 'translateY(20px)'},
          '100%': {_opacity: '1', _transform: 'translateY(0)'}},
        slideUp: {_'0%': { opacity: '0', _transform: 'translateY(40px)'},
          '100%': {_opacity: '1', _transform: 'translateY(0)'}}},
      backdropBlur: {_xs: '2px'},
      backgroundImage: {_'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', _'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, _var(--tw-gradient-stops))'}}},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  plugins: []}

export default config