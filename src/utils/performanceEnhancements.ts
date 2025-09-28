// Performance enhancement utilities
export const performanceEnhancements = {
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/og-image.png',
      '/favicon.ico',
      '/manifest.json'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.png') || resource.endsWith('.ico') ? 'image' : 'fetch';
      document.head.appendChild(link);
    });
  },

  // Optimize images
  optimizeImages: () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  },

  // Enable service worker
  enableServiceWorker: async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  },

  // Monitor Core Web Vitals
  monitorCoreWebVitals: () => {
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      });
    }
  },

  // Optimize fonts
  optimizeFonts: () => {
    const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontLinks.forEach(link => {
      const linkElement = link as HTMLLinkElement;
      linkElement.rel = 'preload';
      linkElement.as = 'style';
      linkElement.onload = () => {
        linkElement.rel = 'stylesheet';
      };
    });
  },

  // Get performance metrics
  getMetrics: () => {
    if (typeof window === 'undefined' || !window.performance) return null;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      dns: navigation ? navigation.domainLookupEnd - navigation.domainLookupStart : 0,
      tcp: navigation ? navigation.connectEnd - navigation.connectStart : 0,
      request: navigation ? navigation.responseStart - navigation.requestStart : 0,
      response: navigation ? navigation.responseEnd - navigation.responseStart : 0,
      dom: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      load: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      lcp: 0, // Would need to be measured with PerformanceObserver
      fid: 0, // Would need to be measured with PerformanceObserver
      cls: 0  // Would need to be measured with PerformanceObserver
    };
  },

  // Generate performance report
  generateReport: () => {
    const metrics = performanceEnhancements.getMetrics();
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      metrics,
      userAgent: navigator.userAgent,
      url: window.location.href
    }, null, 2);
  },

  // Apply automated optimizations
  applyAutomatedOptimizations: () => {
    performanceEnhancements.preloadCriticalResources();
    performanceEnhancements.optimizeImages();
    performanceEnhancements.optimizeFonts();
  },

  // Get optimization suggestions
  getSuggestions: () => {
    return [
      { title: 'Enable Service Worker', description: 'Improve caching and offline experience', impact: 'high' },
      { title: 'Optimize Images', description: 'Use WebP format and lazy loading', impact: 'medium' },
      { title: 'Preload Critical Resources', description: 'Reduce initial load time', impact: 'high' },
      { title: 'Minimize JavaScript', description: 'Reduce bundle size', impact: 'medium' },
      { title: 'Enable Compression', description: 'Use gzip compression', impact: 'low' }
    ];
  },

  // Get performance score
  getPerformanceScore: () => {
    const metrics = performanceEnhancements.getMetrics();
    if (!metrics) return 0;
    
    let score = 100;
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.fid > 100) score -= 20;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.load > 3000) score -= 20;
    
    return Math.max(0, score);
  }
};

// Initialize performance enhancements
export const initializePerformanceEnhancements = () => {
  performanceEnhancements.preloadCriticalResources();
  performanceEnhancements.optimizeImages();
  performanceEnhancements.enableServiceWorker();
  performanceEnhancements.monitorCoreWebVitals();
  performanceEnhancements.optimizeFonts();
};