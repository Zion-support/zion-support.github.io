/**
 * Advanced Performance Optimizations
 * Comprehensive performance enhancement utilities
 */

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/js/vendor-react.js',
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce utility for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as Record<string, unknown>).memory as {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
    };
  }
  return null;
};

// Performance metrics collection
export const collectPerformanceMetrics = () => {
  const metrics: Record<string, number> = {};

  // Navigation timing
  if (performance.getEntriesByType) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      metrics.loadComplete = navigation.loadEventEnd - navigation.loadEventStart;
      metrics.domInteractive = navigation.domInteractive - navigation.navigationStart;
    }
  }

  // Resource timing
  const resources = performance.getEntriesByType('resource');
  resources.forEach((resource: PerformanceResourceTiming) => {
    const duration = resource.responseEnd - resource.startTime;
    if (duration > 100) { // Only track slow resources
      metrics[`resource_${resource.name.split('/').pop()}`] = duration;
    }
  });

  return metrics;
};

// Bundle size optimization helpers
export const optimizeBundleSize = () => {
  // Remove unused CSS
  const unusedCSS = document.querySelectorAll('style[data-unused]');
  unusedCSS.forEach(style => style.remove());

  // Clean up unused event listeners
  const cleanup = () => {
    // This would be implemented based on specific cleanup needs
    console.debug('Performing bundle cleanup');
  };

  return cleanup;
};

// Critical CSS inlining
export const inlineCriticalCSS = (criticalCSS: string) => {
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.debug('Service Worker registered:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Prefetch next page resources
export const prefetchNextPage = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
};

// Image optimization
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = createIntersectionObserver((entries) => {
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
};

// Performance budget monitoring
export const checkPerformanceBudget = () => {
  const budget = {
    maxBundleSize: 500, // KB
    maxLoadTime: 3000, // ms
    maxMemoryUsage: 50, // MB
  };

  const metrics = collectPerformanceMetrics();
  const memory = getMemoryUsage();
  
  const violations = [];
  
  if (memory && memory.used > budget.maxMemoryUsage) {
    violations.push(`Memory usage ${memory.used}MB exceeds budget ${budget.maxMemoryUsage}MB`);
  }
  
  if (metrics.loadComplete && metrics.loadComplete > budget.maxLoadTime) {
    violations.push(`Load time ${metrics.loadComplete}ms exceeds budget ${budget.maxLoadTime}ms`);
  }

  if (violations.length > 0) {
    console.warn('Performance budget violations:', violations);
  }

  return violations;
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  preloadCriticalResources();
  optimizeImages();
  registerServiceWorker();
  
  // Check performance budget on load
  window.addEventListener('load', () => {
    setTimeout(checkPerformanceBudget, 1000);
  });
  
  // Monitor performance continuously
  setInterval(checkPerformanceBudget, 30000); // Every 30 seconds
};