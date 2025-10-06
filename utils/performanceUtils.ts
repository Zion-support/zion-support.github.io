/**
 * Performance utilities for optimizing application performance
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
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
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function executedFunction(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};
// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
<<<<<<< HEAD
    '/fonts/inter.woff2',
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
=======
    '/fonts/main.woff2',
    '/css/critical.css'
  ];
  
  criticalResources.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = href.endsWith('.css') ? 'style' : 'font';
    link.crossOrigin = 'anonymous';
>>>>>>> cursor/fix-errors-and-merge-to-main-371d
    document.head.appendChild(link);
  });
};

export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
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