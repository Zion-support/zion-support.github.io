
<<<<<<< HEAD

export default defineConfig({/* TODO: Fix JSX expression */}

    },
  },
  buil,
  d: {/* TODO: Fix JSX expression */}
=======
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@types': resolve(__dirname, 'src/types'),
      '@app': resolve(__dirname, 'app'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-ui';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('web-vitals')) {
              return 'vendor-analytics';
            }
            return 'vendor-misc';
          }
          
          // App chunks
          if (id.includes('/app/ai-')) {
            return 'ai-services';
          }
          if (id.includes('/app/it-')) {
            return 'it-services';
          }
          if (id.includes('/app/components/')) {
            return 'components';
          }
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
        },
        chunkFileName,
  s: 'assets/[name]-[hash].js',
        entryFileName,
  s: 'assets/[name]-[hash].js',
        assetFileName,)
  s: (assetInfo) => {/* TODO: Fix JSX expression */}
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {/* TODO: Fix JSX expression */}`
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {/* TODO: Fix JSX expression */}`
            return `assets/fonts/[name]-[hash].${ext}`;
          }`
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    terserOption,
  s: {/* TODO: Fix JSX expression */}
      },
      mangl,
  e: {/* TODO: Fix JSX expression */}
        },
      },
      forma,
  t: {/* TODO: Fix JSX expression */}
      },
    },
    chunkSizeWarningLimi,
  t: 500,
    reportCompressedSiz,
  e: true,
    cssCodeSpli,
  t: true,
    assetsInlineLimi,
  t: 4096,
  },
  serve,
  r: {/* TODO: Fix JSX expression */}
  },
  previe,
  w: {/* TODO: Fix JSX expression */}
  },
  optimizeDep,
  s: {/* TODO: Fix JSX expression */}
  },
  cs,
  s: {/* TODO: Fix JSX expression */}
  },
});`
