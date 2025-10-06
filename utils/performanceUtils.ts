/**
 * Performance utilities for optimizing application performance
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy load images
export const lazyLoadImages = (): void => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset['src'] || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/fonts/main.woff2',
    '/css/critical.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    // Update scroll position indicators
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

    // Update progress bar if exists
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      (progressBar as HTMLElement).style.width = `${scrollPercent}%`;
    }

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Performance monitor
export const performanceMonitor = {
  start: () => {
    if (typeof window === 'undefined') return;
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        console.log('Performance metric:', entry.name, (entry as any).value);
      });
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }
  },
  
  stop: () => {
    // Cleanup if needed
  }
};

// Collect performance metrics
export const collectPerformanceMetrics = async (): Promise<any[]> => {
  if (typeof window === 'undefined') return [];

  const metrics: any[] = [];

  // Navigation timing
  if (performance.timing) {
    const timing = performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    metrics.push({ name: 'loadTime', value: loadTime });
  }

  // Memory usage
  const memory = getMemoryUsage();
  if (memory) {
    metrics.push({ name: 'memoryUsage', value: memory.usedJSHeapSize });
  }

  // Resource timing
  const resources = performance.getEntriesByType('resource');
  const totalResourceSize = resources.reduce((total, resource) => {
    return total + (resource.transferSize || 0);
  }, 0);
  metrics.push({ name: 'totalResourceSize', value: totalResourceSize });

  return metrics;
};

// Get memory usage
export const getMemoryUsage = (): any => {
  if (typeof window === 'undefined' || !(performance as any).memory) {
    return null;
  }

  return (performance as any).memory;
};

export default {
  debounce,
  throttle,
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance,
  performanceMonitor,
  collectPerformanceMetrics,
  getMemoryUsage
};