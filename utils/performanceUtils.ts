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
  if ('memory' in performance) {
    return (performance as any).memory;
  }
  return null;
}

// Preload critical resources
export function preloadCriticalResources(): void {
  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
}

// Optimize image loading
export function optimizeImage(
  src: string,
  width?: number,
  height?: number
): string {
  if (!width && !height) return src;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  
  return `${src}?${params.toString()}`;
}

// Create lazy image observer
export function createLazyImageObserver(): IntersectionObserver | null {
  return createIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      }
    });
  });
}

// Check performance budget
export function checkPerformanceBudget(): void {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    
    if (loadTime > 3000) {
      console.warn('Performance budget exceeded: Page load time is', loadTime, 'ms');
    }
  }
}

// Add resource hints
export function addResourceHints(): void {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  ];

  hints.forEach((hint) => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
}