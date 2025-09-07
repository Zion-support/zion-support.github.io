/** @type {import('tailwindcss').Config} */
<
    extend: {},
  },
  plugins: [],
};
module.exports = $2;
  content: [
    './pages/**/*.{js,ts,jsx,tsx}./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fade-in': 'fadeIn 0.6s ease-out forwardsfade-in-up': 'fadeInUp 0.6s ease-out forwardsfade-in-down': 'fadeInDown 0.6s ease-out forwardsslide-in-left': 'slideInLeft 0.6s ease-out forwardsslide-in-right': 'slideInRight 0.6s ease-out forwardsscale-in': 'scaleIn 0.6s ease-out forwardsfloat': 'float 6s ease-in-out infinitepulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinitebounce-slow': 'bounce 2s infiniteglow': 'glow 2s ease-in-out infinite alternateshimmer': 'shimmer 2.5s linear infinitematrix': 'matrix 20s linear infiniteneon-pulse': 'neonPulse 1.5s ease-in-out infinitecyber-float': 'cyberFloat 8s ease-in-out infinitehologram': 'hologram 3s ease-in-out infiniteenergy-wave': 'energyWave 4s ease-in-out infinitequantum-spin': 'quantumSpin 6s linear infiniteneural-network': 'neuralNetwork 10s linear infiniteplasma-flow': 'plasmaFlow 5s ease-in-out infinitecyber-grid': 'cyberGrid 15s linear infinite',
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',

          950: '#172554'
        }
      },
      "fontFamily": {
        }
        "sans": ['Inter', 'system-ui', 'sans-serif'],'
        "mono": ['JetBrains Mono', 'monospace'],'
      },
      "animation": {
        'fade-in': 'fadeIn 0.5s ease-in-out','
        'slide-up': 'slideUp 0.5s ease-out','
        'slide-down': 'slideDown 0.5s ease-out','
        'slide-left': 'slideLeft 0.5s ease-out','
        'slide-right': 'slideRight 0.5s ease-out','
        'scale-in': 'scaleIn 0.3s ease-out','
        'bounce-in': 'bounceIn 0.6s ease-out','
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite','
        'spin-slow': 'spin 3s linear infinite','
        'gradient-x': 'gradient-x 15s ease infinite','
        'gradient-y': 'gradient-y 15s ease infinite','
        'gradient-xy': 'gradient-xy 15s ease infinite','
        'float': 'float 6s ease-in-out infinite','
        'wiggle': 'wiggle 1s ease-in-out infinite','
        'glow': 'glow 2s ease-in-out infinite alternate','
        'float': 'float 6s ease-in-out infinite','
        'wiggle': 'wiggle 1s ease-in-out infinite','
        'glow': 'glow 2s ease-in-out infinite alternate','
      },
      "keyframes": {
        }
        "fadeIn": {
          '0%': { "opacity": '0' },'
          '100%': { "opacity": '1' }'
          '100%': { "opacity": '1' },'
        },
        "slideUp": {
          '0%': { "transform": 'translateY(20px)', "opacity": '0' },'
          '100%': { "transform": 'translateY(0px)', "opacity": '1' }'
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },


