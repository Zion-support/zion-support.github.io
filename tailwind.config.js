/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
=======
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animationDelay: {
        '2000': '2s4000': '4s'},
      backdropBlur: {
        xs: '2px'},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))gradient-mesh': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd)gradient-cyber': 'linear-gradient(45deg, #ff0055, #00ffff, #ffff00, #ff00ff, #8000ff)gradient-quantum': 'linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899, #10b981, #f59e0b)gradient-neon': 'linear-gradient(45deg, #ff0080, #00ffff, #ffff00, #ff00ff, #8000ff)gradient-hologram': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)gradient-space': 'linear-gradient(45deg, #1e3a8a, #7c3aed, #059669, #dc2626, #ea580c)'},
      backgroundSize: {
        'auto': 'autocover': 'covercontain': 'contain200%': '200%300%': '300%400%': '400%500%': '500%'},
      backgroundPosition: {
        'center': 'centertop': 'topbottom': 'bottomleft': 'leftright': 'righttop-left': 'top lefttop-right': 'top rightbottom-left': 'bottom leftbottom-right': 'bottom right'},
      backgroundAttachment: {
        'fixed': 'fixedlocal': 'localscroll': 'scroll'},
      backgroundClip: {
        'border': 'border-boxpadding': 'padding-boxcontent': 'content-boxtext': 'text'},
      backgroundOrigin: {
        'border': 'border-boxpadding': 'padding-boxcontent': 'content-box'},
      backgroundRepeat: {
        'repeat': 'repeatno-repeat': 'no-repeatrepeat-x': 'repeat-xrepeat-y': 'repeat-yrepeat-round': 'repeat-roundrepeat-space': 'repeat-space'},
      backgroundBlendMode: {
        'normal': 'normalmultiply': 'multiplyscreen': 'screenoverlay': 'overlaydarken': 'darkenlighten': 'lightencolor-dodge': 'color-dodgecolor-burn': 'color-burnhard-light': 'hard-lightsoft-light': 'soft-lightdifference': 'differenceexclusion': 'exclusionhue': 'huesaturation': 'saturationcolor': 'colorluminosity': 'luminosity'},
      mixBlendMode: {
        'normal': 'normalmultiply': 'multiplyscreen': 'screenoverlay': 'overlaydarken': 'darkenlighten': 'lightencolor-dodge': 'color-dodgecolor-burn': 'color-burnhard-light': 'hard-lightsoft-light': 'soft-lightdifference': 'differenceexclusion': 'exclusionhue': 'huesaturation': 'saturationcolor': 'colorluminosity': 'luminosity'},
      filter: {
        'none': 'noneblur': 'blur(4px)blur-sm': 'blur(2px)blur-md': 'blur(8px)blur-lg': 'blur(16px)blur-xl': 'blur(24px)blur-2xl': 'blur(40px)blur-3xl': 'blur(64px)brightness': 'brightness(1.1)brightness-75': 'brightness(0.75)brightness-90': 'brightness(0.9)brightness-110': 'brightness(1.1)brightness-125': 'brightness(1.25)brightness-150': 'brightness(1.5)brightness-200': 'brightness(2)contrast': 'contrast(1.1)contrast-75': 'contrast(0.75)contrast-90': 'contrast(0.9)contrast-110': 'contrast(1.1)contrast-125': 'contrast(1.25)contrast-150': 'contrast(1.5)contrast-200': 'contrast(2)grayscale': 'grayscale(1)grayscale-0': 'grayscale(0)hue-rotate': 'hue-rotate(15deg)hue-rotate-30': 'hue-rotate(30deg)hue-rotate-60': 'hue-rotate(60deg)hue-rotate-90': 'hue-rotate(90deg)hue-rotate-180': 'hue-rotate(180deg)invert': 'invert(1)invert-0': 'invert(0)saturate': 'saturate(1.1)saturate-0': 'saturate(0)saturate-50': 'saturate(0.5)saturate-75': 'saturate(0.75)saturate-90': 'saturate(0.9)saturate-110': 'saturate(1.1)saturate-125': 'saturate(1.25)saturate-150': 'saturate(1.5)saturate-200': 'saturate(2)sepia': 'sepia(1)sepia-0': 'sepia(0)drop-shadow': 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))drop-shadow-sm': 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))drop-shadow-md': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))drop-shadow-lg': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))drop-shadow-xl': 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))drop-shadow-2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))drop-shadow-none': 'drop-shadow(0 0 #0000)'},
      backdropFilter: {
        'none': 'noneblur': 'blur(4px)blur-sm': 'blur(2px)blur-md': 'blur(8px)blur-lg': 'blur(16px)blur-xl': 'blur(24px)blur-2xl': 'blur(40px)blur-3xl': 'blur(64px)brightness': 'brightness(1.1)brightness-75': 'brightness(0.75)brightness-90': 'brightness(0.9)brightness-110': 'brightness(1.1)brightness-125': 'brightness(1.25)brightness-150': 'brightness(1.5)brightness-200': 'brightness(2)contrast': 'contrast(1.1)contrast-75': 'contrast(0.75)contrast-90': 'contrast(0.9)contrast-110': 'contrast(1.1)contrast-125': 'contrast(1.25)contrast-150': 'contrast(1.5)contrast-200': 'contrast(2)grayscale': 'grayscale(1)grayscale-0': 'grayscale(0)hue-rotate': 'hue-rotate(15deg)hue-rotate-30': 'hue-rotate(30deg)hue-rotate-60': 'hue-rotate(60deg)hue-rotate-90': 'hue-rotate(90deg)hue-rotate-180': 'hue-rotate(180deg)invert': 'invert(1)invert-0': 'invert(0)saturate': 'saturate(1.1)saturate-0': 'saturate(0)saturate-50': 'saturate(0.5)saturate-75': 'saturate(0.75)saturate-90': 'saturate(0.9)saturate-110': 'saturate(1.1)saturate-125': 'saturate(1.25)saturate-150': 'saturate(1.5)saturate-200': 'saturate(2)sepia': 'sepia(1)sepia-0': 'sepia(0)'},
      transitionProperty: {
        'none': 'noneall': 'allcolors': 'color, background-color, border-color, text-decoration-color, fill, strokeopacity': 'opacityshadow': 'box-shadowtransform': 'transformbackground': 'background-color, background-image, background-position, background-size, background-repeat, background-attachment, background-clip, background-originborder': 'border-color, border-width, border-style, border-radiusspacing': 'margin, padding, width, height, top, right, bottom, lefttypography': 'color, background-color, font-size, font-weight, line-height, text-align, text-decoration, text-transform, letter-spacing, word-spacinglayout': 'display, position, top, right, bottom, left, z-index, float, clear, vertical-align, text-align, white-space, word-break, word-wrap, overflow, overflow-x, overflow-y, clip, visibility, opacity, zoom, cursor, pointer-events, user-select, resize, transition, animation, transform, transform-origin, transform-style, perspective, perspective-origin, backface-visibility'},
      transitionDuration: {
        '75': '75ms100': '100ms150': '150ms200': '200ms300': '300ms500': '500ms700': '700ms1000': '1000ms1500': '1500ms2000': '2000ms3000': '3000ms4000': '4000ms5000': '5000ms'},
      transitionTimingFunction: {
        'linear': 'linearin': 'cubic-bezier(0.4, 0, 1, 1)out': 'cubic-bezier(0, 0, 0.2, 1)in-out': 'cubic-bezier(0.4, 0, 0.2, 1)bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)ease-quantum': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)ease-neon': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)ease-hologram': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)ease-cyberpunk': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)ease-space': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'},
      transitionDelay: {
        '75': '75ms100': '100ms150': '150ms200': '200ms300': '300ms500': '500ms700': '700ms1000': '1000ms1500': '1500ms2000': '2000ms3000': '3000ms4000': '4000ms5000': '5000ms'},
      zIndex: {
        '60': '6070': '7080': '8090': '90100': '100'},
      screens: {
        'xs': '475px3xl': '1600px4xl': '1920px5xl': '2560px'}}},
  plugins: []}
    './pages/**/*.{js,ts,jsx,tsx}./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}},
  plugins: []}
>>>>>>> merged-prs-20250907-203621

