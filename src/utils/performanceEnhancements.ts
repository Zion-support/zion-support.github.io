/**
 * Performance Enhancement Utilities
 * Optimizes various aspects of the application for better performance
 */

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/og-image.png', as: 'image' },
    { href: '/favicon.ico', as: 'image' },
    { href: '/site.webmanifest', as: 'manifest' }
  ];

  criticalResources.forEach(({ href, as }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  });
};

// Optimize images with lazy loading
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };
  }
  return null;
};

// Performance metrics collection
export const collectPerformanceMetrics = () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  const metrics = {
    // Navigation timing
    dns: navigation.dnsLookupEnd - navigation.dnsLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    request: navigation.responseStart - navigation.requestStart,
    response: navigation.responseEnd - navigation.responseStart,
    dom: navigation.domContentLoadedEventEnd - navigation.navigationStart,
    load: navigation.loadEventEnd - navigation.navigationStart,
    
    // Paint timing
    firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    
    // Memory usage
    memory: getMemoryUsage()
  };

  return metrics;
};

// Bundle size optimization
export const optimizeBundleSize = () => {
  // Remove unused CSS
  const unusedCSS = document.querySelectorAll('style[data-unused]');
  unusedCSS.forEach(style => style.remove());

  // Lazy load non-critical components
  const lazyComponents = document.querySelectorAll('[data-lazy]');
  const componentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const component = entry.target as HTMLElement;
        const componentName = component.dataset.lazy;
        if (componentName) {
          // Load component content dynamically
          component.innerHTML = `<div class="lazy-component">Loading ${componentName}...</div>`;
          componentObserver.unobserve(component);
        }
      }
    });
  });

  lazyComponents.forEach(component => componentObserver.observe(component));
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    body { margin: 0; font-family: system-ui, sans-serif; }
    .loading { display: flex; align-items: center; justify-content: center; }
    .hidden { display: none !important; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Initialize all performance enhancements
export const initializePerformanceEnhancements = () => {
  preloadCriticalResources();
  optimizeImages();
  optimizeBundleSize();
  registerServiceWorker();
  inlineCriticalCSS();

  // Collect and log performance metrics
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = collectPerformanceMetrics();
      console.log('Performance Metrics:', metrics);
      
      // Send metrics to analytics if available
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          custom_parameter_1: metrics.firstContentfulPaint,
          custom_parameter_2: metrics.load
        });
      }
    }, 1000);
  });
};

// Export all utilities
export default {
  preloadCriticalResources,
  optimizeImages,
  debounce,
  throttle,
  getMemoryUsage,
  collectPerformanceMetrics,
  optimizeBundleSize,
  registerServiceWorker,
  inlineCriticalCSS,
  initializePerformanceEnhancements
};