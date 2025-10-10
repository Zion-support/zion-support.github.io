// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return end - start;
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<any>) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return { result, duration: end - start };
};

// Web Vitals monitoring
export const reportWebVitals = (metric: any) => {
  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
};

// Resource timing analysis
export const analyzeResourceTiming = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  const resources = performance.getEntriesByType('resource');
  const slowResources = resources.filter((resource: any) => resource.duration > 1000);
  
  if (slowResources.length > 0) {
    console.warn('Slow resources detected:', slowResources);
  }
};

// Memory usage monitoring
export const checkMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = (performance as any).memory;
  const used = memory.usedJSHeapSize / 1024 / 1024; // MB
  const total = memory.totalJSHeapSize / 1024 / 1024; // MB
  
  if (used > 50) { // Alert if using more than 50MB
    console.warn(`High memory usage: ${used.toFixed(2)}MB / ${total.toFixed(2)}MB`);
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/hero-bg.jpg',
    '/images/logo.svg',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};