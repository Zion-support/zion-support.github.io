=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  theme: {
    extend: {
      colors: {
        'zion-blue': '#3b82f6zion-purple': '#8b5cf6zion-green': '#10b981zion-orange': '#f59e0bzion-red': '#ef4444zion-teal': '#14b8a6zion-cyan': '#06b6d4zion-indigo': '#6366f1zion-emerald': '#059669zion-pink': '#ec4899'}
      animation: {
        'fade-in': 'fadeIn 0.6s ease-outslide-up': 'slideUp 0.8s ease-outbounce-slow': 'bounce 2s infinitepulse-slow': 'pulse 3s infinite'}
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }
          '100%': { opacity: '1', transform: 'translateY(0)' }}
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' }
          '100%': { opacity: '1', transform: 'translateY(0)' }}}
      backdropBlur: {
        xs: '2px'}
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'}}}
=======
import type { Config } from 'tailwindcss';
const config: Config = {
  content: [;
    &quot;./src / pages/**/*.{js, ts, jsx, tsx, mdx}&quot;,
    &quot;./src / components/**/*.{js, ts, jsx, tsx, mdx}&quot;,
    &quot;./src / app/**/*.{js, ts, jsx, tsx, mdx}&quot;],
  theme: {
    extend: {
      colors: {
        'zion - blue': '#3b82f6zion - purple': '#8b5cf6zion - green': '#10b981zion - orange': '#f59e0bzion - red': '#ef4444zion - teal': '#14b8a6zion - cyan': '#06b6d4zion - indigo': '#6366f1zion - emerald': '#059669zion - pink': '#ec4899'},
      animation: {
        'fade - in': 'fade_in 0.6s ease - outslide - up': 'slide_up 0.8s ease - outbounce - slow': 'bounce 2s infinitepulse - slow': 'pulse 3s infinite'},
      keyframes: {
        fade_in: {
          '0%': { opacity: '0', transform: 'translate_y (20px)' },
          '100%': { opacity: '1', transform: 'translate_y (0)' }},
        slide_up: {
          '0%': { opacity: '0', transform: 'translate_y (40px)' },
          '100%': { opacity: '1', transform: 'translate_y (0)' }}},
      backdrop_blur: {
        xs: '2px'},
      background_image: {
        'gradient - radial': 'radial - gradient (var (--tw - gradient - stops))gradient - conic': 'conic - gradient (from 180deg at 50% 50%, var (--tw - gradient - stops))'}}},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  plugins: []}
export default config;