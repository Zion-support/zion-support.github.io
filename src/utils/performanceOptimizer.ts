export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  timestamp: Date;
}

export class PerformanceOptimizer {
  private metrics: PerformanceMetrics[] = [];
  private maxMetrics = 100;

  public recordMetric(metric: Omit<PerformanceMetrics, 'timestamp'>): void {
    const fullMetric: PerformanceMetrics = {
      ...metric,
      timestamp: new Date()
    };

    this.metrics.push(fullMetric);

    // Keep only the last maxMetrics entries
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getAverageLoadTime(): number {
    if (this.metrics.length === 0) return 0;
    
    const totalLoadTime = this.metrics.reduce((sum, metric) => sum + metric.loadTime, 0);
    return totalLoadTime / this.metrics.length;
  }

  public optimizeImages(): void {
    // Basic image optimization logic
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  public preloadCriticalResources(): void {
    // Preload critical CSS and JS
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }
}

export const performanceOptimizer = new PerformanceOptimizer();