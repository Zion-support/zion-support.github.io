/**
 * Performance Enhancement Utilities
 * Provides advanced performance monitoring and optimization features
 */

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface OptimizationConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableMinification: boolean;
}

class PerformanceEnhancer {
  private metrics: PerformanceMetrics = {
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    memoryUsage: 0,
    cpuUsage: 0
  };

  private config: OptimizationConfig = {
    enableImageOptimization: true,
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableCaching: true,
    enableCompression: true,
    enableMinification: true
  };

  constructor() {
    this.initializePerformanceObserver();
    this.setupResourceOptimization();
  }

  private initializePerformanceObserver(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Observe Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.updateMetrics(entry);
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'first-contentful-paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }

  private updateMetrics(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.metrics.lcp = entry.startTime;
        break;
      case 'first-input':
        this.metrics.fid = (entry as any).processingStart - entry.startTime;
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          this.metrics.cls += (entry as any).value;
        }
        break;
      case 'first-contentful-paint':
        this.metrics.fcp = entry.startTime;
        break;
      case 'navigation':
        this.metrics.ttfb = (entry as any).responseStart - (entry as any).requestStart;
        break;
    }
  }

  private setupResourceOptimization(): void {
    if (typeof window === 'undefined') return;

    // Optimize images
    if (this.config.enableImageOptimization) {
      this.optimizeImages();
    }

    // Setup lazy loading
    if (this.config.enableLazyLoading) {
      this.setupLazyLoading();
    }

    // Setup caching
    if (this.config.enableCaching) {
      this.setupCaching();
    }
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }

  private setupLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }

  private setupCaching(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error);
        });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const { lcp, fid, cls } = this.metrics;
    
    // Calculate performance score based on Core Web Vitals
    let score = 100;
    
    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 15;
    
    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 15;
    
    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 15;
    
    return Math.max(0, Math.min(100, score));
  }

  public generateReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();
    
    return `
Performance Report
==================
Overall Score: ${score}/100

Core Web Vitals:
- LCP: ${metrics.lcp.toFixed(2)}ms
- FID: ${metrics.fid.toFixed(2)}ms
- CLS: ${metrics.cls.toFixed(4)}
- FCP: ${metrics.fcp.toFixed(2)}ms
- TTFB: ${metrics.ttfb.toFixed(2)}ms

Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
CPU Usage: ${metrics.cpuUsage.toFixed(2)}%

Recommendations:
${this.getRecommendations()}
    `.trim();
  }

  private getRecommendations(): string {
    const { lcp, fid, cls } = this.metrics;
    const recommendations: string[] = [];
    
    if (lcp > 2500) {
      recommendations.push('- Optimize Largest Contentful Paint: Consider image optimization and critical resource prioritization');
    }
    
    if (fid > 100) {
      recommendations.push('- Improve First Input Delay: Reduce JavaScript execution time and optimize event handlers');
    }
    
    if (cls > 0.1) {
      recommendations.push('- Reduce Cumulative Layout Shift: Reserve space for dynamic content and avoid layout shifts');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('- Performance is excellent! Keep up the good work.');
    }
    
    return recommendations.join('\n');
  }

  public updateConfig(newConfig: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.setupResourceOptimization();
  }

  public initialize(): void {
    console.log('Performance Enhancer initialized');
    this.setupResourceOptimization();
  }
}

// Export singleton instance
export const performanceEnhancer = new PerformanceEnhancer();
export { PerformanceEnhancer };
export type { PerformanceMetrics, OptimizationConfig };