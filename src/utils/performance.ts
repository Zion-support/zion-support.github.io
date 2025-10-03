// Enhanced performance monitoring with modern APIs
export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToFirstByte: 0
  };

  private observers: PerformanceObserver[] = [];

  constructor(private config: PerformanceConfig = {}) {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;
    
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeResources();
  }

  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    }
  }

  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const fidEntry = entry as any;
          this.metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    }
  }

  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  private observeFCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.firstContentfulPaint = fcpEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    }
  }

  private observeResources(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.duration > 1000) {
            console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public async reportMetrics(): Promise<void> {
    const report = {
      timestamp: Date.now(),
      url: window.location.href,
      metrics: this.metrics,
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink
      } : null
    };

    if (this.config.reportUrl) {
      await this.sendToAnalytics(report);
    } else {
      this.storeLocally(report);
    }
  }

  private async sendToAnalytics(report: any): Promise<void> {
    try {
      await fetch(this.config.reportUrl!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      });
    } catch (error) {
      console.error('Failed to send performance metrics:', error);
    }
  }

  private storeLocally(report: any): void {
    try {
      const existingReports = JSON.parse(localStorage.getItem('performance-reports') || '[]');
      existingReports.unshift(report);
      existingReports.splice(10);
      localStorage.setItem('performance-reports', JSON.stringify(existingReports));
    } catch (error) {
      console.error('Failed to store performance metrics locally:', error);
    }
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

interface PerformanceMetrics {
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
}

interface PerformanceConfig {
  reportUrl?: string;
  sampleRate?: number;
}

// Image optimization utilities
export class ImageOptimizer {
  static createResponsiveImage(src: string, alt: string, sizes: string[]): string {
    const baseSrc = src.replace(/\.[^/.]+$/, '');
    const extension = src.split('.').pop();

    const srcset = sizes
      .map(size => `${baseSrc}-${size}w.${extension} ${size}w`)
      .join(', ');

    return `<img src="${src}" srcset="${srcset}" alt="${alt}" loading="lazy" />`;
  }

  static preloadCriticalImages(imageUrls: string[]): void {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
}

// Bundle analysis utilities
export class BundleAnalyzer {
  static analyzeBundle(): void {
    if (import.meta.env.DEV) {
      console.log('Bundle Analysis:');
      
      const scripts = document.querySelectorAll('script[src]');
      console.log(`Scripts loaded: ${scripts.length}`);
      
      const styles = document.querySelectorAll('link[rel="stylesheet"]');
      console.log(`Stylesheets loaded: ${styles.length}`);
      
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((sum, resource) => {
        return sum + ((resource as any).transferSize || 0);
      }, 0);
      
      console.log(`Total resource size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Total resources: ${resources.length}`);
    }
  }

  static getLargestResources(limit: number = 10): any[] {
    const resources = performance.getEntriesByType('resource');
    return resources
      .filter(resource => (resource as any).transferSize > 0)
      .sort((a, b) => (b as any).transferSize - (a as any).transferSize)
      .slice(0, limit);
  }
}