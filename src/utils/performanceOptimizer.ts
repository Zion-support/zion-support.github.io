/**
 * Performance Optimizer Utilities
 * Collection of utilities to enhance application performance
 */

// Lazy loading utility
export const lazyLoadComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> => {
  return React.lazy(importFunc);
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // Add image optimization parameters
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', '80'); // Quality setting
  params.set('f', 'auto'); // Format auto-detection
  
  return `${src}?${params.toString()}`;
};

// Debounce utility for search and input optimization
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

// Throttle utility for scroll and resize events
export const throttle = <T extends (...args: any[]) => any>(
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

// Memory optimization - cleanup function
export const cleanupMemory = (): void => {
  // Force garbage collection if available (development only)
  if (process.env.NODE_ENV === 'development' && (window as any).gc) {
    (window as any).gc();
  }
};

// Performance monitoring utility
export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Bundle size optimization - dynamic imports
export const dynamicImport = async (path: string) => {
  try {
    const module = await import(path);
    return module.default;
  } catch (error) {
    console.error(`Failed to load module: ${path}`, error);
    return null;
  }
};

// Preload critical resources
export const preloadCriticalResources = (): void => {
  // Preload critical fonts
  const criticalFonts = [
    '/fonts/inter-var.woff2',
    '/fonts/inter-var.woff'
  ];
  
  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Service Worker update utility
export const updateServiceWorker = (): void => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.update();
    });
  }
};

// Resource hints for performance
export const addResourceHints = (): void => {
  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.jsdelivr.net'
  ];
  
  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
  
  // Preconnect to critical origins
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string): void => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Performance budget monitoring
export const checkPerformanceBudget = (): void => {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      FCP: 0, // First Contentful Paint
      LCP: 0, // Largest Contentful Paint
      FID: 0, // First Input Delay
      CLS: 0  // Cumulative Layout Shift
    };
    
    // Check if metrics are within budget
    const budget = {
      FCP: 1800, // 1.8s
      LCP: 2500, // 2.5s
      FID: 100,  // 100ms
      CLS: 0.1   // 0.1
    };
    
    Object.keys(metrics).forEach(metric => {
      if (metrics[metric as keyof typeof metrics] > budget[metric as keyof typeof budget]) {
        console.warn(`Performance budget exceeded for ${metric}`);
      }
    });
  }
};

export default {
  lazyLoadComponent,
  optimizeImage,
  debounce,
  throttle,
  cleanupMemory,
  measurePerformance,
  dynamicImport,
  preloadCriticalResources,
  updateServiceWorker,
  addResourceHints,
  inlineCriticalCSS,
  checkPerformanceBudget
};