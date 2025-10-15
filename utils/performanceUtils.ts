// Performance monitoring utilities
export const performanceMonitor = {
  // Measure component render time
  measureRender: (componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    console.log(`${componentName} rendered in ${end - start}ms`);
  },

  // Measure async operations
  measureAsync: async (operationName: string, operation: () => Promise<any>) => {
    const start = performance.now();
    const result = await operation();
    const end = performance.now();
    console.log(`${operationName} completed in ${end - start}ms`);
    return result;
  },

  // Memory usage monitoring
  getMemoryUsage: () => {
    if ('memory' in performance) {
      return {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      };
    }
    return null;
  },

  // Bundle size monitoring
  getBundleSize: () => {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets')) {
        // This would need to be implemented with actual size measurement
        totalSize += 1; // Placeholder
      }
    });
    return totalSize;
  }
};

// Lazy loading utility
export const lazyLoad = (importFn: () => Promise<any>) => {
  return React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(importFn());
      }, 100); // Small delay to prevent blocking
    });
  });
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, quality: number = 80) => {
  if (src.startsWith('http')) {
    return src; // External images
  }
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  
  return `${src}?${params.toString()}`;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/css/index.css',
    '/assets/js/react-core.js',
    '/assets/js/app.js'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};
