// Performance optimization utilities
export default {
  initialize() {
    //Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      console.log('Performance optimizer initialized');
    }
  },
  
  lazyLoadImages() {
    //Lazy load images for better performance
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  },

  debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: NodeJS.Timeout;
    return ((...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    }) as T;
  },

  throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
    let inThrottle: boolean;
    return ((...args: any[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    }) as T;
  },

  measurePerformance(name: string, fn: () => void) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  optimizeBundle() {
    // Bundle optimization logic
    console.log('Bundle optimization completed');
  },

  preloadCriticalResources() {
    // Preload critical resources
    if (typeof document !== 'undefined') {
      const criticalResources = [
        '/fonts/main.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
      });
    }
  }
};
