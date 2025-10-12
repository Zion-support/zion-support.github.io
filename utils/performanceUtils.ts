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

// Performance monitoring utilities
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof window === 'undefined' || !('performance' in window)) {
    fn();
    return;
  }

  start = performance.now();
  fn();
  end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
}

// Memory usage monitoring
export function getMemoryUsage(): any {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }
  
  return (performance as any).memory;
}

// Bundle size optimization - preload critical resources
export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;
  
  criticalResources = [
    '/fonts/inter.woff2',
    '/images/logo.png',
    '/images/og-image.jpg'
  ];
  
  criticalResources.forEach(resource => {
    link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

// Image optimization utility
export function optimizeImage(src: string, width?: number, height?: number): string {
  // Add image optimization parameters if needed
  url = new URL(src, window.location.origin);
  if (width) url.searchParams.set('w', width.toString());
  if (height) url.searchParams.set('h', height.toString());
  url.searchParams.set('q', '80'); // Quality
  url.searchParams.set('f', 'webp'); // Format
  return url.toString();
}

// Lazy loading utility for images
export function createLazyImageObserver(): IntersectionObserver | null {
  return createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img = entry.target as HTMLImageElement;
        src = img.dataset.src;
        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
        }
      }
    });
  });
}

// Performance budget monitoring
export function checkPerformanceBudget(): void {
  if (typeof window === 'undefined') return;
  
  navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return;
  
  loadTime = navigation.loadEventEnd - navigation.fetchStart;
  budget = 3000; // 3 seconds
  
  if (loadTime > budget) {
    console.warn(`Performance budget exceeded: ${loadTime}ms > ${budget}ms`);
  }
}

// Resource hints for better performance
export function addResourceHints(): void {
  if (typeof window === 'undefined') return;
  
  hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];
  
  hints.forEach(hint => {
    link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
}