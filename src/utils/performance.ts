// Performance monitoring utilities
export const performanceMonitor = {
  measureTime: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },
  
  measureAsync: async (name: string, fn: () => Promise<void>) => {
    const start = performance.now();
    await fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },
  
  reportWebVitals: (metric: any) => {
    console.log('Web Vital:', metric);
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
};

// Lazy loading utility
export const lazyLoad = (importFn: () => Promise<any>) => {
  return React.lazy(importFn);
};

// Image optimization
export const optimizeImage = (src: string, width?: number, quality = 75) => {
  if (src.includes('unsplash.com') || src.includes('picsum.photos')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('q', quality.toString());
    return `${src}?${params.toString()}`;
  }
  return src;
};
