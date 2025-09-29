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
      import('web-vitals').then((mod: any) => {
        const getCLS = mod.getCLS || mod.onCLS;
        const getFID = mod.getFID || mod.onFID;
        const getFCP = mod.getFCP || mod.onFCP;
        const getLCP = mod.getLCP || mod.onLCP;
        const getTTFB = mod.getTTFB || mod.onTTFB;
        if (getCLS) getCLS(console.log);
        if (getFID) getFID(console.log);
        if (getFCP) getFCP(console.log);
        if (getLCP) getLCP(console.log);
        if (getTTFB) getTTFB(console.log);
      }).catch(() => {});
    }
  },
  
  collectMetrics: () => {
    const metrics = {
      loadTime: performance.now(),
      memoryUsage: 'memory' in performance ? ((): any => {
        const p: any = performance as any;
        if (p.memory) {
          return {
            used: p.memory.usedJSHeapSize,
            total: p.memory.totalJSHeapSize,
            limit: p.memory.jsHeapSizeLimit
          };
        }
        return null;
      })() : null,
      timing: performance.timing ? {
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart
      } : null
    };
    
    console.log('Performance Metrics:', metrics);
    return metrics;
  },
  
  trackError: (error: any, context: Record<string, unknown> = {}) => {
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
