/**
 * Advanced Performance Enhancement Utilities
 * Provides comprehensive performance optimization features
 */

import { performanceOptimizer } from './performanceOptimizer';

/**
 * Performance metrics collector
 */
export class PerformanceMetricsCollector {
  private metrics: Map<string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Observe navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordMetric('navigation', entry.duration);
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (e) {
      console.warn('Navigation timing observer not supported:', e);
    }

    // Observe resource timing
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordMetric('resource', entry.duration);
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (e) {
      console.warn('Resource timing observer not supported:', e);
    }

    // Observe paint timing
    try {
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordMetric(entry.name, entry.startTime);
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (e) {
      console.warn('Paint timing observer not supported:', e);
    }
  }

  private recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(value);
  }

  public getMetrics(): Record<string, { avg: number; min: number; max: number; count: number }> {
    const result: Record<string, { avg: number; min: number; max: number; count: number }> = {};
    
    this.metrics.forEach((values, name) => {
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      const min = Math.min(...values);
      const max = Math.max(...values);
      
      result[name] = { avg, min, max, count: values.length };
    });
    
    return result;
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

/**
 * Image optimization utilities
 */
export class ImageOptimizer {
  private static instance: ImageOptimizer;
  private observer: IntersectionObserver | null = null;

  private constructor() {}

  public static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  public optimizeImages(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          this.loadImage(img);
          this.observer?.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      this.observer?.observe(img);
    });
  }

  private loadImage(img: HTMLImageElement): void {
    const src = img.dataset['src'];
    if (!src) return;

    // Create a new image to preload
    const newImg = new Image();
    newImg.onload = () => {
      img.src = src;
      img.classList.remove('lazy');
      img.removeAttribute('data-src');
    };
    newImg.onerror = () => {
      console.warn('Failed to load image:', src);
    };
    newImg.src = src;
  }

  public cleanup(): void {
    this.observer?.disconnect();
  }
}

/**
 * Bundle optimization utilities
 */
export class BundleOptimizer {
  public static preloadCriticalChunks(): void {
    if (typeof document === 'undefined') return;

    const criticalChunks = [
      '/assets/index.js',
      '/assets/vendor.js',
      '/assets/ui.js'
    ];

    criticalChunks.forEach(chunk => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = chunk;
      document.head.appendChild(link);
    });
  }

  public static prefetchNextChunks(): void {
    if (typeof document === 'undefined') return;

    // Prefetch likely next chunks based on user behavior
    const nextChunks = [
      '/assets/router.js',
      '/assets/components.js'
    ];

    nextChunks.forEach(chunk => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'script';
      link.href = chunk;
      document.head.appendChild(link);
    });
  }
}

/**
 * Memory optimization utilities
 */
export class MemoryOptimizer {
  private static cleanupTasks: (() => void)[] = [];

  public static addCleanupTask(task: () => void): void {
    this.cleanupTasks.push(task);
  }

  public static runCleanup(): void {
    this.cleanupTasks.forEach(task => {
      try {
        task();
      } catch (e) {
        console.warn('Cleanup task failed:', e);
      }
    });
    this.cleanupTasks = [];
  }

  public static optimizeMemory(): void {
    // Force garbage collection if available
    if (typeof window !== 'undefined' && (window as any).gc) {
      (window as any).gc();
    }

    // Clear unused caches
    if (typeof caches !== 'undefined') {
      caches.keys().then(names => {
        names.forEach(name => {
          if (name.includes('old') || name.includes('temp')) {
            caches.delete(name);
          }
        });
      });
    }
  }
}

/**
 * Performance enhancement manager
 */
export class PerformanceEnhancer {
  private metricsCollector: PerformanceMetricsCollector;
  private imageOptimizer: ImageOptimizer;
  private isInitialized = false;

  constructor() {
    this.metricsCollector = new PerformanceMetricsCollector();
    this.imageOptimizer = ImageOptimizer.getInstance();
  }

  public initialize(): void {
    if (this.isInitialized) return;

    // Initialize performance monitoring
    performanceOptimizer.initialize();

    // Optimize images
    this.imageOptimizer.optimizeImages();

    // Preload critical resources
    BundleOptimizer.preloadCriticalChunks();

    // Setup memory optimization
    this.setupMemoryOptimization();

    this.isInitialized = true;
  }

  private setupMemoryOptimization(): void {
    // Run cleanup every 5 minutes
    setInterval(() => {
      MemoryOptimizer.runCleanup();
      MemoryOptimizer.optimizeMemory();
    }, 5 * 60 * 1000);

    // Run cleanup on page unload
    window.addEventListener('beforeunload', () => {
      MemoryOptimizer.runCleanup();
    });
  }

  public getPerformanceReport(): {
    metrics: Record<string, { avg: number; min: number; max: number; count: number }>;
    webVitals: any;
    memory: any;
  } {
    return {
      metrics: this.metricsCollector.getMetrics(),
      webVitals: performanceOptimizer.measurePageLoad(),
      memory: typeof performance !== 'undefined' && (performance as any).memory ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      } : null
    };
  }

  public cleanup(): void {
    this.metricsCollector.cleanup();
    this.imageOptimizer.cleanup();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const performanceEnhancer = new PerformanceEnhancer();

export default performanceEnhancer;