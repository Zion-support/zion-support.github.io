/**
 * Performance Enhancement Utilities
 * Advanced performance optimizations for the Zion Tech Group website
 */

// Intersection Observer for lazy loading
export class LazyLoadManager {
  private static instance: LazyLoadManager;
  private observer: IntersectionObserver | null = null;
  private observedElements = new Set<Element>();

  static getInstance(): LazyLoadManager {
    if (!LazyLoadManager.instance) {
      LazyLoadManager.instance = new LazyLoadManager();
    }
    return LazyLoadManager.instance;
  }

  init(options: IntersectionObserverInit = {}): void {
    if (typeof window === 'undefined' || this.observer) return;

    const defaultOptions: IntersectionObserverInit = {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          this.loadElement(element);
          this.observer?.unobserve(element);
          this.observedElements.delete(element);
        }
      });
    }, defaultOptions);
  }

  observe(element: Element): void {
    if (!this.observer) return;
    
    this.observedElements.add(element);
    this.observer.observe(element);
  }

  unobserve(element: Element): void {
    if (!this.observer) return;
    
    this.observer.unobserve(element);
    this.observedElements.delete(element);
  }

  private loadElement(element: HTMLElement): void {
    // Handle lazy loading for images
    const img = element.querySelector('img[data-src]') as HTMLImageElement;
    if (img) {
      img.src = img.dataset.src || '';
      img.classList.remove('lazy');
      img.classList.add('loaded');
    }

    // Handle lazy loading for background images
    const bgImage = element.dataset.bgImage;
    if (bgImage) {
      element.style.backgroundImage = `url(${bgImage})`;
      element.classList.remove('lazy-bg');
      element.classList.add('loaded-bg');
    }

    // Trigger custom lazy load event
    element.dispatchEvent(new CustomEvent('lazyloaded'));
  }

  destroy(): void {
    if (this.observer) {
      this.observedElements.forEach(element => {
        this.observer?.unobserve(element);
      });
      this.observer.disconnect();
      this.observer = null;
      this.observedElements.clear();
    }
  }
}

// Resource Preloader
export class ResourcePreloader {
  private static instance: ResourcePreloader;
  private preloadedResources = new Set<string>();

  static getInstance(): ResourcePreloader {
    if (!ResourcePreloader.instance) {
      ResourcePreloader.instance = new ResourcePreloader();
    }
    return ResourcePreloader.instance;
  }

  preloadImage(src: string): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  preloadScript(src: string): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  preloadStylesheet(href: string): Promise<void> {
    if (this.preloadedResources.has(href)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        link.rel = 'stylesheet';
        this.preloadedResources.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  // Enhanced preloading with priority
  preloadWithPriority(
    src: string,
    type: 'image' | 'script' | 'stylesheet',
    priority: 'high' | 'low' = 'low'
  ): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    
    switch (type) {
      case 'image':
        link.as = 'image';
        break;
      case 'script':
        link.as = 'script';
        break;
      case 'stylesheet':
        link.as = 'style';
        break;
    }

    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }

    document.head.appendChild(link);
    this.preloadedResources.add(src);

    return Promise.resolve();
  }
}

// Performance Metrics Collector
export class PerformanceMetricsCollector {
  private static instance: PerformanceMetricsCollector;
  private metrics: Map<string, number[]> = new Map();
  private customMetrics: Map<string, unknown> = new Map();

  static getInstance(): PerformanceMetricsCollector {
    if (!PerformanceMetricsCollector.instance) {
      PerformanceMetricsCollector.instance = new PerformanceMetricsCollector();
    }
    return PerformanceMetricsCollector.instance;
  }

  recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)?.push(value);
  }

  recordCustomMetric(name: string, value: unknown): void {
    this.customMetrics.set(name, value);
  }

  getMetricStats(name: string): { min: number; max: number; avg: number; count: number } | null {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return null;

    const min = Math.min(...values);
    const max = Math.max(...values);
    const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
    const count = values.length;

    return { min, max, avg, count };
  }

  getAllMetrics(): Record<string, { min: number; max: number; avg: number; count: number }> {
    const result: Record<string, { min: number; max: number; avg: number; count: number }> = {};
    
    for (const [name] of this.metrics) {
      const stats = this.getMetricStats(name);
      if (stats) {
        result[name] = stats;
      }
    }

    return result;
  }

  getCustomMetrics(): Record<string, unknown> {
    return Object.fromEntries(this.customMetrics);
  }

  clearMetrics(): void {
    this.metrics.clear();
    this.customMetrics.clear();
  }

  // Enhanced metric recording with automatic categorization
  recordCategorizedMetric(category: string, name: string, value: number): void {
    const fullName = `${category}.${name}`;
    this.recordMetric(fullName, value);
    
    // Also record in category summary
    const categoryKey = `${category}.summary`;
    if (!this.customMetrics.has(categoryKey)) {
      this.customMetrics.set(categoryKey, { count: 0, total: 0 });
    }
    
    const summary = this.customMetrics.get(categoryKey);
    summary.count++;
    summary.total += value;
    summary.avg = summary.total / summary.count;
  }
}

// Bundle Analyzer for Development
export class BundleAnalyzer {
  private static instance: BundleAnalyzer;

  static getInstance(): BundleAnalyzer {
    if (!BundleAnalyzer.instance) {
      BundleAnalyzer.instance = new BundleAnalyzer();
    }
    return BundleAnalyzer.instance;
  }

  analyzeBundleSize(): void {
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') return;

    const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')) as HTMLLinkElement[];

    console.group('📦 Bundle Analysis');
    
    scripts.forEach(script => {
      const size = this.getResourceSize();
      console.log(`Script: ${script.src} - ${size}`);
    });

    stylesheets.forEach(link => {
      const size = this.getResourceSize();
      console.log(`Stylesheet: ${link.href} - ${size}`);
    });

    console.groupEnd();
  }

  private getResourceSize(): string {
    // This is a simplified version - in a real implementation,
    // you'd need to fetch the resource to get its actual size
    return 'Unknown size';
  }

  // Enhanced bundle analysis with performance impact
  analyzePerformanceImpact(): void {
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    console.group('🚀 Performance Impact Analysis');
    
    resources.forEach(resource => {
      const duration = resource.responseEnd - resource.startTime;
      const size = resource.transferSize || 0;
      const impact = this.calculatePerformanceImpact(duration, size);
      
      console.log(`${resource.name}:`, {
        duration: `${duration.toFixed(2)}ms`,
        size: `${(size / 1024).toFixed(2)}KB`,
        impact: impact
      });
    });
    
    console.groupEnd();
  }

  private calculatePerformanceImpact(duration: number, size: number): string {
    const durationScore = duration > 1000 ? 'High' : duration > 500 ? 'Medium' : 'Low';
    const sizeScore = size > 100000 ? 'High' : size > 50000 ? 'Medium' : 'Low';
    
    if (durationScore === 'High' || sizeScore === 'High') return 'High';
    if (durationScore === 'Medium' || sizeScore === 'Medium') return 'Medium';
    return 'Low';
  }
}

// Memory Usage Monitor
export class MemoryMonitor {
  private static instance: MemoryMonitor;
  private monitoring = false;
  private intervalId: number | null = null;

  static getInstance(): MemoryMonitor {
    if (!MemoryMonitor.instance) {
      MemoryMonitor.instance = new MemoryMonitor();
    }
    return MemoryMonitor.instance;
  }

  startMonitoring(interval: number = 5000): void {
    if (this.monitoring || typeof window === 'undefined') return;
    
    this.monitoring = true;
    this.intervalId = window.setInterval(() => {
      this.checkMemoryUsage();
    }, interval);
  }

  stopMonitoring(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.monitoring = false;
  }

  private checkMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      const usage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
        usagePercent: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
      };

      console.log('Memory Usage:', {
        used: `${(usage.used / 1024 / 1024).toFixed(2)}MB`,
        total: `${(usage.total / 1024 / 1024).toFixed(2)}MB`,
        limit: `${(usage.limit / 1024 / 1024).toFixed(2)}MB`,
        usagePercent: `${usage.usagePercent.toFixed(2)}%`
      });

      // Warn if memory usage is high
      if (usage.usagePercent > 80) {
        console.warn('High memory usage detected:', usage);
      }
    }
  }
}

// Export singleton instances
export const lazyLoadManager = LazyLoadManager.getInstance();
export const resourcePreloader = ResourcePreloader.getInstance();
export const performanceMetricsCollector = PerformanceMetricsCollector.getInstance();
export const bundleAnalyzer = BundleAnalyzer.getInstance();
export const memoryMonitor = MemoryMonitor.getInstance();