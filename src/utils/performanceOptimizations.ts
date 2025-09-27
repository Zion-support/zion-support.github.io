/**
 * Performance optimization utilities
 * Provides various performance enhancement functions
 */

// Image optimization utilities
export const optimizeImage = (src: string, width?: number, height?: number, quality: number = 75): string => {
  if (!src) return '';
  
  // For external images, you might want to use a service like Cloudinary or Next.js Image
  return src;
};

// Lazy loading utility
export const createIntersectionObserver = (callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
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
export const getMemoryUsage = (): {
  used: number;
  total: number;
  percentage: number;
} | null => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as any).memory;
  const used = memory.usedJSHeapSize;
  const total = memory.totalJSHeapSize;
  const percentage = (used / total) * 100;

  return { used, total, percentage };
};

// Bundle size analyzer
export const analyzeBundleSize = (): void => {
  if (typeof window === 'undefined') return;

  // Analyze script tags
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    const src = script.getAttribute('src');
    if (src && src.includes('_next/static')) {
      // This is a simplified check - in reality, you'd need to fetch and measure
      console.log(`Script: ${src}`);
    }
  });
};

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/hero-bg.webp',
    '/images/logo.svg'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    
    document.head.appendChild(link);
  });

  // Register service worker
  try {
    const registration = navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered successfully:', registration);
  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

// Performance monitoring
export const monitorPerformance = (): void => {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      } else if (entry.entryType === 'first-input') {
        console.log('FID:', (entry as any).processingStart - entry.startTime);
      } else if (entry.entryType === 'layout-shift') {
        console.log('CLS:', (entry as any).value);
      }
    });
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
};

// Resource hints
export const addResourceHints = (): void => {
  if (typeof window === 'undefined') return;

  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = (): void => {
  preloadCriticalResources();
  addResourceHints();
  monitorPerformance();
  analyzeBundleSize();
};