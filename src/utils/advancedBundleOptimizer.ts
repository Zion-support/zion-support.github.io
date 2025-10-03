// Bundle optimization utilities
export const bundleOptimizer = {
  // Code splitting configuration
  getCodeSplittingConfig: () => ({
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 10
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
        priority: 5
      }
    }
  }),
  
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/fonts/main-font.woff2',
      '/images/hero-image.webp',
      '/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });
  },
  
  // Resource hints
  addResourceHints: () => {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://api.zion.ai' },
      { rel: 'prefetch', href: '/pages/about' }
    ];
    
    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      document.head.appendChild(link);
    });
  }
};