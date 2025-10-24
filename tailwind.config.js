<<<<<<< HEAD
<<<<<<< HEAD

/** @type{import('tailwindcss'";}"'
    './pages/**/*.{js,ts,jsx,tsx,mdx}''
    './components/**/*.{js,ts,jsx,tsx,mdx}''
    './app/**/*.{js,ts,jsx,tsx,mdx}''"
          "50": '#ecfeff'","'"
    "100": '#cffafe'","'"
          "200": '#a5f3fc'","'"
    "300": '#67e8f9'","'"
          "400": '#22d3ee'","'"
    "500": '#06b6d4'","'"
          "600": '#0891b2'","'"
    "700": '#0e7490'","'"
          "800": '#155e75'","'"
    "900": '#164e63'","'"
    "50": '#faf5ff'","'"
          "100": '#f3e8ff'","'"
    "200": '#e9d5ff'","'"
          "300": '#d8b4fe'","'"
    "400": '#c084fc'","'"
          "500": '#a855f7'","'"
    "600": '#9333ea'","'"
          "700": '#7c3aed'","'"
    "800": '#6b21a8'","'"
          "900": '#581c87'","'"
    "50": '#f9fafb'","'"
          "100": '#f3f4f6'","'"
    "200": '#e5e7eb'","'"
          "300": '#d1d5db'","'"
    "400": '#9ca3af'","'"
          "500": '#6b7280'","'"
    "600": '#4b5563'","'"
          "700": '#374151'","'"
    "800": '#1f2937'","'"
          "900": '#111827'","'"
    "sans": ['Inter', 'system-ui', 'sans-serif''
        'fade-in': 'fadeIn 0.5s ease-in-out''
        'slide-up': 'slideUp 0.5s ease-out''
        'bounce-slow': 'bounce 2s infinite''"
          '0%': { "opacity": '0'","'"
          '100%': { "opacity": '1'",)"'"
          '0%': { "transform": 'translateY(20px)', "opacity": '0'","'"
          '100%': { "transform": 'translateY(0)', "opacity": '1'"
======="'"
/** @type {import('tailwindcss").Config} */"
module.exports = {"
  content: ["'"
    './pages/**/*.{js,ts,jsx,tsx,mdx}","'"
    './components/**/*.{js,ts,jsx,tsx,mdx}","'"
    './app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Enable JIT mode for better performance
  mode: 'jit',
  // Purge unused styles in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [
        'animate-fade-in',
        'animate-slide-up',
        'animate-bounce-slow',
        'gradient-text',
      ],
    },
  },
  theme: {
<<<<<<< HEAD
    extend: {
      colors: {
        cyan: {
          "50": '#ecfeff',
          "100": '#cffafe',
          "200": '#a5f3fc',
          "300": '#67e8f9',
          "400": '#22d3ee',
          "500": '#06b6d4',
          "600": '#0891b2',
          "700": '#0e7490',
          "800": '#155e75',
          "900": '#164e63',
        },
        purple: {
          "50": '#faf5ff',
          "100": '#f3e8ff',
          "200": '#e9d5ff',
          "300": '#d8b4fe',
          "400": '#c084fc',
          "500": '#a855f7',
          "600": '#9333ea',
          "700": '#7c3aed',
          "800": '#6b21a8',
          "900": '#581c87',
        },
        gray: {
          "50": '#f9fafb',
          "100": '#f3f4f6',
          "200": '#e5e7eb',
          "300": '#d1d5db',
          "400": '#9ca3af',
          "500": '#6b7280',
          "600": '#4b5563',
          "700": '#374151',
          "800": '#1f2937',
          "900": '#111827',
        },
      },
      fontFamily: {
        "sans": ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
=======
    extend: {"
      colors: {"
        cyan: {"'"
          "50": '#ecfeff","'"
          "100": '#cffafe","'"
          "200": '#a5f3fc","'"
          "300": '#67e8f9","'"
          "400": '#22d3ee","'"
          "500": '#06b6d4","'"
          "600": '#0891b2","'"
          "700": '#0e7490","'"
          "800": '#155e75","'"
          "900": '#164e63","
        },"
        purple: {"'"
          "50": '#faf5ff","'"
          "100": '#f3e8ff","'"
          "200": '#e9d5ff","'"
          "300": '#d8b4fe","'"
          "400": '#c084fc","'"
          "500": '#a855f7","'"
          "600": '#9333ea","'"
          "700": '#7c3aed","'"
          "800": '#6b21a8","'"
          "900": '#581c87","
        },"
        gray: {"'"
          "50": '#f9fafb","'"
          "100": '#f3f4f6","'"
          "200": '#e5e7eb","'"
          "300": '#d1d5db","'"
          "400": '#9ca3af","'"
          "500": '#6b7280","'"
          "600": '#4b5563","'"
          "700": '#374151","'"
          "800": '#1f2937","'"
          "900": '#111827",
        },"
      },"
      fontFamily: {"'"
        "sans": ['Inter', 'system-ui', 'sans-serif"],"
      },"
      animation: {"'"
        'fade-in': 'fadeIn 0.5s ease-in-out","'"
        'slide-up': 'slideUp 0.5s ease-out","'"
        'bounce-slow': 'bounce 2s infinite",
      },"
      keyframes: {"
        fadeIn: {"'"
          '0%': { opacity: '0" },"'"
          '100%': { opacity: '1" },"
        },"
        slideUp: {"'"
          '0%': { transform: 'translateY(20px)', opacity: '0" },"'"
          '100%': { transform: 'translateY(0)', opacity: '1" },
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
        },
      },
      // Add gradient text utility
      backgroundImage: {
        'gradient-text': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
=======
  plugins: [],
}"
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81"
"
}}}}'"
>>>>>>> cursor/fix-errors-and-merge-to-main-4fc4
=======
<<<<<<< HEAD;
/** @type{import('tailwindcss''}'
    './pages/**/*.{js,ts,jsx,tsx,mdx}''
    './components/**/*.{js,ts,jsx,tsx,mdx}''
    './app/**/*.{js,ts,jsx,tsx,mdx}''
          "50": '#ecfeff'',";'"
    "100": '#cffafe'',";'"
          "200": '#a5f3fc'',";'"
    "300": '#67e8f9'',";'"
          "400": '#22d3ee'',";'"
    "500": '#06b6d4'',";'"
          "600": '#0891b2'',";'"
    "700": '#0e7490'',";'"
          "800": '#155e75'',";'"
    "900": '#164e63'',";'"
    "50": '#faf5ff'',";'"
          "100": '#f3e8ff'',";'"
    "200": '#e9d5ff'',";'"
          "300": '#d8b4fe'',";'"
    "400": '#c084fc'',";'"
          "500": '#a855f7'',";'"
    "600": '#9333ea'',";'"
          "700": '#7c3aed'',";'"
    "800": '#6b21a8'',";'"
          "900": '#581c87'',";'"
    "50": '#f9fafb'',";'"
          "100": '#f3f4f6'',";'"
    "200": '#e5e7eb'',";'"
          "300": '#d1d5db'',";'"
    "400": '#9ca3af'',";'"
          "500": '#6b7280'',";'"
    "600": '#4b5563'',";'"
          "700": '#374151'',";'"
    "800": '#1f2937'',";'"
          "900": '#111827'',";'"
    "sans": ['Inter', 'system-ui', 'sans-serif''
        'fade-in': 'fadeIn 0.5s ease-in-out''
        'slide-up': 'slideUp 0.5s ease-out'';'"
        'bounce-slow': 'bounce 2s infinite''";'"
          '0%': { "opacity": '0'',");'"
          '100%': { "opacity": '1'',)";'"
          '0%': { "transform": 'translateY(20px)', "opacity": '0'',";'"
          '100%': { "transform": 'translateY(0)', "opacity": '1''
=======;
/** @type {import('tailwindcss').Config} */;
module.exports = {;
  content: [;
    './pages/**/*.{js,ts,jsx,tsx,mdx}',;
    './components/**/*.{js,ts,jsx,tsx,mdx}',;
    './app/**/*.{js,ts,jsx,tsx,mdx}'],;
  theme: {;
    extend: {;
      colors: {;"
        cyan: {";'"
          "50": '#ecfeff',";'"
          "100": '#cffafe',";'"
          "200": '#a5f3fc',";'"
          "300": '#67e8f9',";'"
          "400": '#22d3ee',";'"
          "500": '#06b6d4',";'"
          "600": '#0891b2',";'"
          "700": '#0e7490',";'"
          "800": '#155e75',";'"
          "900": '#164e63'},;"
        purple: {";'"
          "50": '#faf5ff',";'"
          "100": '#f3e8ff',";'"
          "200": '#e9d5ff',";'"
          "300": '#d8b4fe',";'"
          "400": '#c084fc',";'"
          "500": '#a855f7',";'"
          "600": '#9333ea',";'"
          "700": '#7c3aed',";'"
          "800": '#6b21a8',";'"
          "900": '#581c87'},;"
        gray: {";'"
          "50": '#f9fafb',";'"
          "100": '#f3f4f6',";'"
          "200": '#e5e7eb',";'"
          "300": '#d1d5db',";'"
          "400": '#9ca3af',";'"
          "500": '#6b7280',";'"
          "600": '#4b5563',";'"
          "700": '#374151',";'"
          "800": '#1f2937',";'"
          "900": '#111827'}},;"
      fontFamily: {";'"
        "sans": ['Inter', 'system-ui', 'sans-serif']},;
      animation: {;
        'fade-in': 'fadeIn 0.5s ease-in-out',;
        'slide-up': 'slideUp 0.5s ease-out',;
        'bounce-slow': 'bounce 2s infinite'},;
      keyframes: {;
        fadeIn: {;
          '0%': { opacity: '0' },;
          '100%': { opacity: '1' }},;
        slideUp: {;
          '0%': { transform: 'translateY(20px)', opacity: '0' },;
          '100%': { transform: 'translateY(0)', opacity: '1' }}}}},;
  plugins: []}
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81;"
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
