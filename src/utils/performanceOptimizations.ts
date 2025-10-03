/**
 * Performance Optimization Utilities
 * Comprehensive performance enhancements for the Zion website
 */

// Image optimization utilities
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('f', 'webp');
  params.set('q', '85');
  
  return `${src}?${params.toString()}`;
};

// Lazy loading utilities
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Resource preloading
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Critical resource preloading
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;
  
  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
    { href: '/images/logo.svg', as: 'image' },
    { href: '/css/critical.css', as: 'style' },
  ];
  
  criticalResources.forEach(resource => {
    preloadResource(resource.href, resource.as);
  });
};

// Bundle size optimization
export const dynamicImport = async <T>(importFn: () => Promise<T>): Promise<T> => {
  try {
    return await importFn();
  } catch (error) {
    console.warn('Dynamic import failed:', error);
    throw error;
  }
};

// Memory management
export const cleanupResources = (): void => {
  // Clear any cached data
  if ('caches' in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        if (name.includes('temp-')) {
          caches.delete(name);
        }
      });
    });
  }
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof window === 'undefined') return;
  
  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${name}: ${end - start}ms`);
  }
};

// Service Worker utilities
export const registerServiceWorker = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
  
  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered:', registration);
  } catch (error) {
    console.warn('Service Worker registration failed:', error);
  }
};

// Cache optimization
export const optimizeCache = (): void => {
  if (typeof window === 'undefined') return;
  
  // Implement cache-first strategy for static assets
  const cacheFirst = (request: Request): Promise<Response> => {
    return caches.match(request).then(response => {
      return response || fetch(request);
    });
  };
  
  // Add to global scope for service worker
  (window as any).cacheFirst = cacheFirst;
};

// Virtual scrolling utilities
export const createVirtualScroller = (
  container: HTMLElement,
  itemHeight: number,
  itemCount: number,
  renderItem: (index: number) => HTMLElement
) => {
  let scrollTop = 0;
  let visibleStart = 0;
  let visibleEnd = 0;
  
  const updateVisibleRange = () => {
    const containerHeight = container.clientHeight;
    visibleStart = Math.floor(scrollTop / itemHeight);
    visibleEnd = Math.min(
      visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
      itemCount
    );
  };
  
  const render = () => {
    updateVisibleRange();
    container.innerHTML = '';
    
    for (let i = visibleStart; i < visibleEnd; i++) {
      const item = renderItem(i);
      item.style.position = 'absolute';
      item.style.top = `${i * itemHeight}px`;
      container.appendChild(item);
    }
  };
  
  container.addEventListener('scroll', () => {
    scrollTop = container.scrollTop;
    render();
  });
  
  return { render, updateVisibleRange };
};

// Debounced function utility
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

// Throttled function utility
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