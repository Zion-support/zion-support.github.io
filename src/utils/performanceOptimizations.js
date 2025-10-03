
// Performance monitoring utilities
export const performanceMonitor = {
  mark: (name) => performance.mark(name),
  measure: (name, startMark, endMark) => performance.measure(name, startMark, endMark),
  getEntries: () => performance.getEntriesByType('measure'),
  clear: () => performance.clearMarks() && performance.clearMeasures()
};

// Lazy loading utility
export const lazyLoad = (importFn) => {
  return React.lazy(() => importFn());
};

// Image optimization
export const optimizeImage = (src, width, height) => {
  if (src.includes('cloudinary') || src.includes('cdn')) {
    return src;
  }
  return src;
};

// Bundle optimization
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/src/styles/globals.css',
    '/public/performance-monitor.js'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};
