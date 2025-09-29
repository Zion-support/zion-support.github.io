// Performance Configuration
export const performanceConfig = {
  "imageOptimization": {
    "enabled": true,
    "formats": [
      "webp",
      "avif"
    ],
    "quality": 85,
    "lazyLoading": true
  },
  "bundleOptimization": {
    "codeSplitting": true,
    "treeShaking": true,
    "minification": true,
    "compression": true
  },
  "caching": {
    "serviceWorker": true,
    "staticAssets": true,
    "apiResponses": true,
    "cdnIntegration": true
  },
  "monitoring": {
    "webVitals": true,
    "performanceMetrics": true,
    "errorTracking": true,
    "realTimeMonitoring": true
  }
};

// Performance monitoring utilities
export const performanceMonitor = {
  trackWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  },
  
  collectMetrics: () => {
    const metrics = {
      loadTime: performance.now(),
      memoryUsage: performance.memory ? {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      } : null,
      timing: performance.timing ? {
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart
      } : null
    };
    
    console.log('Performance Metrics:', metrics);
    return metrics;
  },
  
  trackError: (error, context = {}) => {
    console.error('Performance Error:', error, context);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        ...context
      });
    }
  }
};
