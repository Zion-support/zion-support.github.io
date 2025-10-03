/**
 * Performance optimization utilities for the Zion website
 */

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/images/hero-bg.webp',
    '/images/logo.svg'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
';

// Optimize images with lazy loading
export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

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

// Memory-efficient event listener management
export class EventManager {
  private listeners: Map<string, Set<EventListener>> = new Map();

  addEventListener(element: EventTarget, event: string, listener: EventListener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);
    element.addEventListener(event, listener);
  }

  removeEventListener(element: EventTarget, event: string, listener: EventListener) {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.delete(listener);
      element.removeEventListener(event, listener);
    }
  }

  removeAllListeners(element: EventTarget, event: string) {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.forEach(listener => {
        element.removeEventListener(event, listener);
      });
      listeners.clear();
    }
  }
}

// Performance monitoring
export const performanceMonitor = {
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  ',

  measure: (name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
      } catch (error) {
        console.warn(`Performance measure failed for ${name`:`, error);
      }
    }
  ',

  getEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return performance.getEntriesByType(type || 'measure');
    }
    return [];
  }
};

// Bundle size optimization helpers
export const bundleOptimizations = {
  // Dynamic imports for code splitting
  loadComponent: async (importFn: () => Promise<any>) => {
    try {
      const module = await importFn();
      return module.default || module;
    ' catch (error) {
      console.error('Failed to load component:', error);
      return null;
    }
  ',

  // Prefetch resources
  prefetch: (url: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  ',

  // Preconnect to external domains
  preconnect: (url: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  }
';

// Initialize performance optimizations
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Preload critical resources
  preloadCriticalResources();

  // Optimize images
  optimizeImages();

  // Mark initial load
  performanceMonitor.mark('app-initialized');
`;