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
  return new IntersectionObserver(callback, options);
}

// Memory usage monitoring
export function getMemoryUsage(): any {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  return (performance as any).memory;
}

// Preload critical resources
export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    document.head.appendChild(link);
  });
}

// Image optimization
export function optimizeImage(
  src: string, 
  width?: number, 
  height?: number
): string {
  if (!src) return '';
  
  // Add optimization parameters for external images
  if (src.startsWith('http')) {
    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    url.searchParams.set('q', '80'); // Quality
    return url.toString();
  }
  
  return src;
}

// Lazy image observer
export function createLazyImageObserver(): IntersectionObserver | null {
  return createIntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
          }
        }
      });
    },
    { rootMargin: '50px' }
  );
}

// Performance budget checker
export function checkPerformanceBudget(): void {
  if (typeof window === 'undefined') return;
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return;
  
  const loadTime = navigation.loadEventEnd - navigation.fetchStart;
  const budget = 3000; // 3 seconds
  
  if (loadTime > budget) {
    console.warn(`Performance budget exceeded: ${loadTime}ms > ${budget}ms`);
  }
}

// Add resource hints
export function addResourceHints(): void {
  if (typeof window === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://api.ziontechgroup.com' }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
}