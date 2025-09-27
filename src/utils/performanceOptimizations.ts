/**
 * Performance optimization utilities
 * Provides various performance enhancement functions
 */

// Image optimization utilities
export const optimizeImage = (src: string, width?: number, height?: number, quality: number = 75): string => {
  if (!src) return '';
  
  return src;
  // For external images you might want to use a service like Cloudinary or Next.js Image
  return src;
};

// Lazy loading utility
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
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
export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) => {
  let timeout: NodeJS.Timeout;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as (...args: Parameters<T>) => void;
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(func: T, limit: number) => {
  let inThrottle: boolean;

  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as (...args: Parameters<T>) => void;
};

// Memory usage utility
export const getMemoryUsage = (): { used: number; total: number; percentage: number } | null => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as any).memory;
  const used = memory.usedJSHeapSize;
  const total = memory.totalJSHeapSize;
  const percentage = (used / total) * 100;

  return {
    used,
    total,
    percentage
  };
};

// Bundle size analysis
export const analyzeBundleSize = (): void => {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        if (resource.transferSize > 100000) { // 100KB
          console.log(`Large resource: ${resource.name} (${resource.transferSize} bytes)`);
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });
};

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/fonts/inter.woff2',
    '/images/hero-bg.webp',
    '/images/logo.svg'
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Service Worker registration
export const registerServiceWorker = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('ServiceWorker registered successfully:', registration);
  } catch (error) {
    console.error('ServiceWorker registration failed:', error);
  }
};

// Web Vitals monitoring
export const observeWebVitals = (): void => {
  if (typeof window === 'undefined') return;

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

// DNS prefetch hints
export const addDNSPrefetchHints = (): void => {
  if (typeof window === 'undefined') return;

  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = hint.crossorigin;
    }
    document.head.appendChild(link);
  });
};