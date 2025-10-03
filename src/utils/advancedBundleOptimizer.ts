// Advanced bundle optimization
export const bundleOptimizer = {
  // Code splitting configuration
  codeSplitting: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
        enforce: true
      }
    }
  },
  
  // Tree shaking optimization
  treeShaking: {
    usedExports: true,
    sideEffects: false
  },
  
  // Compression configuration
  compression: {
    gzip: true,
    brotli: true,
    threshold: 1024
  },
  
  // Lazy loading configuration
  lazyLoading: {
    images: true,
    components: true,
    routes: true
  }
};

export default bundleOptimizer;