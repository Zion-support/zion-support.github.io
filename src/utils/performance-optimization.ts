/**
 * Advanced performance optimization utilities
 */

/**
 * Intersection Observer for lazy loading
 */
export class LazyLoader {
  private static observer: IntersectionObserver | null = null;
  private static callbacks = new Map<Element, () => void>();

  static init() {
    if (typeof window === 'undefined' || this.observer) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = this.callbacks.get(entry.target);
            if (callback) {
              callback();
              this.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );
  }

  static observe(element: Element, callback: () => void) {
    this.init();
    if (this.observer) {
      this.callbacks.set(element, callback);
      this.observer.observe(element);
    }
  }

  static unobserve(element: Element) {
    if (this.observer) {
      this.observer.unobserve(element);
      this.callbacks.delete(element);
    }
  }
}

/**
 * Image lazy loading with placeholder
 */
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  placeholder?: string
) => {
  if (placeholder) {
    img.src = placeholder;
  }

  LazyLoader.observe(img, () => {
    img.src = src;
    img.onload = () => {
      img.classList.add('loaded');
    };
  });
};

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
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
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Memoization utility
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  getKey?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * Virtual scrolling for large lists
 */
export class VirtualScroller {
  private container: HTMLElement;
  private itemHeight: number;
  private items: any[];
  private visibleStart = 0;
  private visibleEnd = 0;
  private renderItem: (item: any, index: number) => HTMLElement;

  constructor(
    container: HTMLElement,
    items: any[],
    itemHeight: number,
    renderItem: (item: any, index: number) => HTMLElement
  ) {
    this.container = container;
    this.items = items;
    this.itemHeight = itemHeight;
    this.renderItem = renderItem;

    this.init();
  }

  private init() {
    this.container.style.position = 'relative';
    this.container.style.overflow = 'auto';

    // Create spacer elements
    const topSpacer = document.createElement('div');
    const bottomSpacer = document.createElement('div');
    
    topSpacer.className = 'virtual-scroll-spacer-top';
    bottomSpacer.className = 'virtual-scroll-spacer-bottom';

    this.container.appendChild(topSpacer);
    this.container.appendChild(bottomSpacer);

    this.updateVisibleItems();

    // Listen for scroll events
    this.container.addEventListener('scroll', 
      throttle(() => this.updateVisibleItems(), 16)
    );
  }

  private updateVisibleItems() {
    const scrollTop = this.container.scrollTop;
    const containerHeight = this.container.clientHeight;

    const newVisibleStart = Math.floor(scrollTop / this.itemHeight);
    const newVisibleEnd = Math.min(
      this.items.length,
      Math.ceil((scrollTop + containerHeight) / this.itemHeight)
    );

    if (newVisibleStart !== this.visibleStart || newVisibleEnd !== this.visibleEnd) {
      this.visibleStart = newVisibleStart;
      this.visibleEnd = newVisibleEnd;
      this.renderVisibleItems();
    }
  }

  private renderVisibleItems() {
    // Clear existing items (except spacers)
    const existingItems = this.container.querySelectorAll('.virtual-scroll-item');
    existingItems.forEach(item => item.remove());

    // Update spacer heights
    const topSpacer = this.container.querySelector('.virtual-scroll-spacer-top') as HTMLElement;
    const bottomSpacer = this.container.querySelector('.virtual-scroll-spacer-bottom') as HTMLElement;

    if (topSpacer) {
      topSpacer.style.height = `${this.visibleStart * this.itemHeight}px`;
    }

    if (bottomSpacer) {
      bottomSpacer.style.height = `${(this.items.length - this.visibleEnd) * this.itemHeight}px`;
    }

    // Render visible items
    for (let i = this.visibleStart; i < this.visibleEnd; i++) {
      const item = this.renderItem(this.items[i], i);
      item.className = `${item.className} virtual-scroll-item`;
      item.style.height = `${this.itemHeight}px`;
      
      if (bottomSpacer) {
        this.container.insertBefore(item, bottomSpacer);
      } else {
        this.container.appendChild(item);
      }
    }
  }

  updateItems(newItems: any[]) {
    this.items = newItems;
    this.updateVisibleItems();
  }
}

/**
 * Resource preloading utilities
 */
export const ResourcePreloader = {
  /**
   * Preload images
   */
  preloadImages(urls: string[]): Promise<void[]> {
    const promises = urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
      });
    });

    return Promise.all(promises);
  },

  /**
   * Preload scripts
   */
  preloadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to preload script: ${src}`));
      
      document.head.appendChild(link);
    });
  },

  /**
   * Preload stylesheets
   */
  preloadStylesheet(href: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to preload stylesheet: ${href}`));
      
      document.head.appendChild(link);
    });
  },

  /**
   * Prefetch resources for future navigation
   */
  prefetchResource(url: string, type: 'document' | 'script' | 'style' | 'image' = 'document') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = type;
    link.href = url;
    
    document.head.appendChild(link);
  }
};

/**
 * Code splitting utilities
 */
export const CodeSplitting = {
  /**
   * Dynamic import with loading state
   */
  async loadComponent<T>(
    importFn: () => Promise<{ default: T }>,
    onLoading?: () => void,
    onError?: (error: Error) => void
  ): Promise<T | null> {
    try {
      if (onLoading) onLoading();
      
      const module = await importFn();
      return module.default;
    } catch (error) {
      if (onError) onError(error as Error);
      console.error('Failed to load component:', error);
      return null;
    }
  },

  /**
   * Preload component for faster loading
   */
  preloadComponent(importFn: () => Promise<any>) {
    // Start loading but don't wait for it
    importFn().catch(error => {
      console.warn('Failed to preload component:', error);
    });
  }
};

/**
 * Bundle optimization utilities
 */
export const BundleOptimizer = {
  /**
   * Tree shaking helper - mark unused exports
   */
  markUnused(module: any, usedExports: string[]) {
    if (typeof module !== 'object') return module;
    
    const optimized: any = {};
    usedExports.forEach(exportName => {
      if (exportName in module) {
        optimized[exportName] = module[exportName];
      }
    });
    
    return optimized;
  },

  /**
   * Check if feature is supported to avoid polyfills
   */
  isSupported: {
    webp: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    },
    
    intersectionObserver: () => 'IntersectionObserver' in window,
    
    webGL: () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch {
        return false;
      }
    },
    
    serviceWorker: () => 'serviceWorker' in navigator,
    
    webAssembly: () => typeof WebAssembly === 'object',
  }
};

/**
 * Performance monitoring
 */
export class PerformanceMonitor {
  private static metrics = new Map<string, number>();
  private static observers: PerformanceObserver[] = [];

  static init() {
    if (typeof window === 'undefined' || !window.performance) return;

    // Monitor largest contentful paint
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('lcp', lastEntry.startTime);
    });

    // Monitor first input delay
    this.observeMetric('first-input', (entries) => {
      const firstEntry = entries[0];
      this.metrics.set('fid', firstEntry.processingStart - firstEntry.startTime);
    });

    // Monitor cumulative layout shift
    this.observeMetric('layout-shift', (entries) => {
      let clsValue = 0;
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.set('cls', clsValue);
    });
  }

  private static observeMetric(
    type: string,
    callback: (entries: PerformanceEntry[]) => void
  ) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }

  static getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  static measureFunction<T extends (...args: any[]) => any>(
    name: string,
    fn: T
  ): T {
    return ((...args: Parameters<T>) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      
      this.metrics.set(`function_${name}`, end - start);
      
      return result;
    }) as T;
  }

  static async measureAsync<T>(
    name: string,
    asyncFn: () => Promise<T>
  ): Promise<T> {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();
    
    this.metrics.set(`async_${name}`, end - start);
    
    return result;
  }

  static cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }
}