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
    if (typeof window !== 'undefined') {
      import('web-vitals').then((webVitals: any) => {
        if ('getCLS' in webVitals && typeof webVitals.getCLS === 'function') {
          webVitals.getCLS(console.log);
        }
        if ('getFID' in webVitals && typeof webVitals.getFID === 'function') {
          webVitals.getFID(console.log);
        }
        if ('getFCP' in webVitals && typeof webVitals.getFCP === 'function') {
          webVitals.getFCP(console.log);
        }
        if ('getLCP' in webVitals && typeof webVitals.getLCP === 'function') {
          webVitals.getLCP(console.log);
        }
        if ('getTTFB' in webVitals && typeof webVitals.getTTFB === 'function') {
          webVitals.getTTFB(console.log);
        }
      }).catch(console.error);
    }
  },
  
  collectMetrics: () => {
    const metrics = {
      loadTime: performance.now(),
      memoryUsage: (performance as any).memory ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      } : null,
      timing: performance.timing ? {
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart
      } : null
    };
    
    console.log('Performance Metrics:', metrics);
    return metrics;
  },
  
  trackError: (error: Error, context: Record<string, any> = {}) => {
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
