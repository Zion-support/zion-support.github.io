/**
 * Performance optimization utilities for the Zion Tech Group application
 */

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
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

// Get memory usage information
export function getMemoryUsage(): any {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    return (performance as any).memory;
  }
  return null;
}

// Preload critical resources
export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css',
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
}

// Optimize image loading
export function optimizeImage(
  src: string,
  width?: number,
  height?: number
): string {
  if (!src) return '';
  
  // Add responsive image parameters
  let optimizedSrc = src;
  
  if (width && height) {
    // Add size parameters for optimization
    optimizedSrc += `?w=${width}&h=${height}&q=80&f=webp`;
  }
  
  return optimizedSrc;
}

// Create lazy image observer
export function createLazyImageObserver(): IntersectionObserver | null {
  return createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
        }
      }
    });
  });
}

// Check performance budget
export function checkPerformanceBudget(): void {
  if (typeof window === 'undefined') return;
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  const metrics = {
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
  };
  
  // Performance budget thresholds
  const budget = {
    domContentLoaded: 1000, // 1s
    loadComplete: 2000, // 2s
    firstPaint: 1500, // 1.5s
    firstContentfulPaint: 2000, // 2s
  };
  
  // Log warnings for budget violations
  Object.entries(metrics).forEach(([key, value]) => {
    if (value > budget[key as keyof typeof budget]) {
      console.warn(`Performance budget exceeded for ${key}: ${value}ms > ${budget[key as keyof typeof budget]}ms`);
    }
  });
}

// Add resource hints
export function addResourceHints(): void {
  if (typeof window === 'undefined') return;
  
  // Add DNS prefetch for external domains
  const externalDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
  ];
  
  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
  
  // Add preconnect for critical external resources
  const criticalDomains = [
    'fonts.googleapis.com',
  ];
  
  criticalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = `https://${domain}`;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}