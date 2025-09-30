/**
 * Performance Optimization Utilities
 * Provides tools for monitoring and optimizing application performance
 */

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkRequests: number;
  timestamp: number;
}

export interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

class PerformanceOptimizer {
  private config: OptimizationConfig;
  private metrics: PerformanceMetrics[] = [];
  private isMonitoring = false;
  private observer?: PerformanceObserver;

  constructor() {
    this.config = this.getDefaultConfig();
  }

  private getDefaultConfig(): OptimizationConfig {
    return {
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
    };
  }

  public startMonitoring(): void {
    if (this.isMonitoring || typeof window === 'undefined') return;
    
    this.isMonitoring = true;
    this.setupPerformanceObserver();
    this.trackPageLoad();
    this.trackMemoryUsage();
    this.trackNetworkRequests();
  }

  public stopMonitoring(): void {
    if (!this.isMonitoring) return;
    
    this.observer?.disconnect();
    this.isMonitoring = false;
  }

  private setupPerformanceObserver(): void {
    if (typeof window === 'undefined' || typeof (globalThis as any).PerformanceObserver === 'undefined') {
      return;
    }
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.processPerformanceEntry(entry);
        });
      });
      
      this.observer.observe({ entryTypes: ['navigation', 'resource', 'measure'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    const metric: PerformanceMetrics = {
      loadTime: entry.duration,
      renderTime: 0,
      memoryUsage: this.getMemoryUsage(),
      networkRequests: this.getNetworkRequestCount(),
      timestamp: Date.now(),
    };

    this.metrics.push(metric);
    this.optimizeBasedOnMetrics(metric);
  }

  private trackPageLoad(): void {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
      
      if (loadTime > 3000) {
        this.suggestOptimizations();
      }
    });
  }

  private trackMemoryUsage(): void {
    if (typeof window === 'undefined') return;
    
    setInterval(() => {
      const memory = this.getMemoryUsage();
      if (memory > 100 * 1024 * 1024) { // 100MB threshold
        console.warn('High memory usage detected:', memory / 1024 / 1024, 'MB');
        this.triggerGarbageCollection();
      }
    }, 30000); // Check every 30 seconds
  }

  private trackNetworkRequests(): void {
    if (typeof window === 'undefined') return;
    
    let requestCount = 0;
    const originalFetch = window.fetch;
    
    window.fetch = (...args) => {
      requestCount++;
      return originalFetch(...args).finally(() => {
        requestCount--;
      });
    };
  }

  private getMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return 0;
  }

  private getNetworkRequestCount(): number {
    const resources = performance.getEntriesByType('resource');
    return resources.length;
  }

  private optimizeBasedOnMetrics(metric: PerformanceMetrics): void {
    if (metric.loadTime > 2000) {
      this.enableLazyLoading();
    }
    
    if (metric.memoryUsage > 50 * 1024 * 1024) { // 50MB
      this.enableMemoryOptimization();
    }
    
    if (metric.networkRequests > 20) {
      this.enableRequestOptimization();
    }
  }

  private enableLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;
    if (typeof window === 'undefined' || typeof (globalThis as any).IntersectionObserver === 'undefined') {
      return;
    }
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach((img) => imageObserver.observe(img));
  }

  private enableMemoryOptimization(): void {
    // Trigger garbage collection if available
    this.triggerGarbageCollection();
    
    // Optimize images
    this.optimizeImages();
  }

  private enableRequestOptimization(): void {
    // Implement request batching or caching
    this.enableRequestCaching();
  }

  private triggerGarbageCollection(): void {
    if (typeof window !== 'undefined' && 'gc' in window) {
      (window as any).gc();
    }
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  private enableRequestCaching(): void {
    // Implement service worker caching or request deduplication
    console.log('Enabling request caching optimization');
  }

  private suggestOptimizations(): void {
    console.log('Performance optimization suggestions:');
    console.log('- Enable lazy loading for images');
    console.log('- Implement code splitting');
    console.log('- Optimize bundle size');
    console.log('- Use CDN for static assets');
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getAverageLoadTime(): number {
    if (this.metrics.length === 0) return 0;
    
    const total = this.metrics.reduce((sum, metric) => sum + metric.loadTime, 0);
    return total / this.metrics.length;
  }

  public getMemoryTrend(): 'increasing' | 'decreasing' | 'stable' {
    if (this.metrics.length < 2) return 'stable';
    
    const recent = this.metrics.slice(-5);
    const older = this.metrics.slice(-10, -5);
    
    const recentAvg = recent.reduce((sum, m) => sum + m.memoryUsage, 0) / recent.length;
    const olderAvg = older.reduce((sum, m) => sum + m.memoryUsage, 0) / older.length;
    
    if (recentAvg > olderAvg * 1.1) return 'increasing';
    if (recentAvg < olderAvg * 0.9) return 'decreasing';
    return 'stable';
  }
}

// Create singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  performanceOptimizer.startMonitoring();
}