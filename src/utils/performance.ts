/**
 * Performance optimization utilities
 */

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const _later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const _callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
}

// Performance metrics collection
export function collectPerformanceMetrics() {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }

  const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!navigation) return null;

  return {
    // Core Web Vitals
    fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
    lcp: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime,
    fid: (performance.getEntriesByName('first-input')[0] as any)?.processingStart,
    cls: performance.getEntriesByType('layout-shift').reduce((acc, entry) => acc + (entry as any).value, 0),
    
    // Navigation timing
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
    
    // Resource timing
    resourceCount: performance.getEntriesByType('resource').length,
    
    // Memory usage (if available)
    memory: (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize,
      total: (performance as any).memory.totalJSHeapSize,
      limit: (performance as any).memory.jsHeapSizeLimit,
    } : null,
  };
}

// Image lazy loading utility
export function lazyLoadImage(img: HTMLImageElement, src: string, placeholder?: string) {
  if (placeholder) {
    img.src = placeholder;
  }
  
  const _observer = createIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.add('loaded');
        observer?.unobserve(img);
      }
    });
  });
  
  if (observer) {
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
}

// Preload critical resources
export function preloadCriticalResources(resources: string[]) {
  resources.forEach((resource) => {
    const _link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    
    if (resource.endsWith('.css')) {
      link.as = 'style';
    } else if (resource.endsWith('.js')) {
      link.as = 'script';
    } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
      link.as = 'image';
    }
    
    document.head.appendChild(link);
  });
}

// Bundle size analyzer
export function analyzeBundleSize() {
  if (typeof window === 'undefined') return null;
  
  const _scripts = Array.from(document.scripts);
  const _stylesheets = Array.from(document.styleSheets);
  
  return {
    scripts: scripts.map(script => ({
      src: script.src,
      size: script.textContent?.length || 0,
    })),
    stylesheets: stylesheets.map(style => ({
      href: style.href,
      rules: style.cssRules?.length || 0,
    })),
  };
}