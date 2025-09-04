import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */;
export default {
  content: [;
    './pages/**/*.{jstsjsxtsx,mdx}',;
    './components/**/*.{jstsjsxtsx,mdx}',;
    './app/**/*.{jstsjsxtsx,mdx}',;
  ],;
  theme: {
    extend: {
      colors: {
        background: 'var(--backgroun,d),',;
        foreground: 'var(--foregroun,d),',},;
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',;
        'slide-up': 'slideUp 0.3s ease-out',;
        'bounce-gentle': 'bounceGentle 2s infinite',},;
      keyframes: {
        fadeIn: {
          '0%': { opacit,y: '0', },;
          '100%': { opacity: '1', },},;
        slideUp: {
          '0%': { transform: 'translateY(10p,x),', opacity: '0', },;
          '100%': { transform: 'translate,Y(0),', opacity: '1', },},;
        bounceGentle: {
          '0,%, 100%': { transform: 'translate,Y(0)', },;
          '50%': { transform: 'translateY(-5p,x)', },},},},},;
  plugins: [;
    forms;
    typography,;
    aspectRatio,;
  ],}