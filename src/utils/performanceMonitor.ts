interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkRequests: number;
}

interface PerformanceOptimizations {
  imageOptimization: boolean;
  codeSplitting: boolean;
  lazyLoading: boolean;
  caching: boolean;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0,
  };

  private optimizations: PerformanceOptimizations = {
    imageOptimization: true,
    codeSplitting: true,
    lazyLoading: true,
    caching: true,
  };

  private startTime = 0;

  initialize(): void {
    this.startTime = performance.now();
    this.measureLoadTime();
    this.measureMemoryUsage();
    this.countNetworkRequests();
  }

  private measureLoadTime(): void {
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now() - this.startTime;
    });
  }

  private measureMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
    }
  }

  private countNetworkRequests(): void {
    // Count network requests using Performance Observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        this.metrics.networkRequests = entries.filter(
          entry => entry.entryType === 'navigation' || entry.entryType === 'resource'
        ).length;
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource'] });
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getOptimizations(): PerformanceOptimizations {
    return { ...this.optimizations };
  }

  getPerformanceScore(): number {
    // Simple performance score calculation
    const loadScore = Math.max(0, 100 - this.metrics.loadTime / 100);
    const memoryScore = Math.max(0, 100 - this.metrics.memoryUsage / 10);
    return Math.round((loadScore + memoryScore) / 2);
  }

  cleanup(): void {
    // Cleanup any observers or listeners
  }
}

export const performanceMonitor = new PerformanceMonitor();