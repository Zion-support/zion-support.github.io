/**
 * Performance Optimizer Utility
 * Provides comprehensive performance monitoring and optimization for the application
 */

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

class PerformanceOptimizer {
  private metrics: Partial<PerformanceMetrics> = {};
  private resourceTimings: ResourceTiming[] = [];
  private observerInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  /**
   * Initialize performance observers for Core Web Vitals
   */
  private initializeObservers(): void {
    if (this.observerInitialized) return;

    // Observe Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              this.metrics.cls = clsValue;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        this.observerInitialized = true;
      } catch (error) {
        console.warn('Performance Observer initialization failed:', error);
      }
    }

    // Capture initial page load metrics
    this.capturePageLoadMetrics();
  }

  /**
   * Capture page load performance metrics
   */
  private capturePageLoadMetrics(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navTiming) {
          this.metrics.ttfb = navTiming.responseStart - navTiming.requestStart;
          this.metrics.fcp = navTiming.domContentLoadedEventEnd - navTiming.fetchStart;
        }

        // Capture resource timings
        this.captureResourceTimings();
      }, 0);
    });
  }

  /**
   * Capture resource loading timings
   */
  private captureResourceTimings(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    this.resourceTimings = resources.map(resource => ({
      name: resource.name,
      duration: resource.duration,
      size: (resource as any).transferSize || 0,
      type: this.getResourceType(resource.name)
    }));
  }

  /**
   * Get resource type from URL
   */
  private getResourceType(url: string): string {
    if (url.match(/\.(js|jsx|ts|tsx)$/)) return 'script';
    if (url.match(/\.(css)$/)) return 'stylesheet';
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  /**
   * Get resource timings
   */
  public getResourceTimings(): ResourceTiming[] {
    return [...this.resourceTimings];
  }

  /**
   * Get performance score (0-100)
   */
  public getPerformanceScore(): number {
    const { lcp = 0, fid = 0, cls = 0 } = this.metrics;
    
    // Score calculation based on Core Web Vitals thresholds
    let score = 100;
    
    // LCP: Good < 2.5s, Needs Improvement < 4s, Poor >= 4s
    if (lcp > 4000) score -= 40;
    else if (lcp > 2500) score -= 20;
    
    // FID: Good < 100ms, Needs Improvement < 300ms, Poor >= 300ms
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 15;
    
    // CLS: Good < 0.1, Needs Improvement < 0.25, Poor >= 0.25
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  }

  /**
   * Get optimization recommendations
   */
  public getRecommendations(): string[] {
    const recommendations: string[] = [];
    const { lcp = 0, fid = 0, cls = 0 } = this.metrics;

    if (lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint: Consider lazy-loading images and reducing server response time');
    }

    if (fid > 100) {
      recommendations.push('Reduce First Input Delay: Break up long JavaScript tasks and optimize event handlers');
    }

    if (cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift: Add size attributes to images and avoid inserting content above existing content');
    }

    // Check for large resources
    const largeResources = this.resourceTimings.filter(r => r.size > 500000); // > 500KB
    if (largeResources.length > 0) {
      recommendations.push(`Optimize large resources: ${largeResources.length} resources exceed 500KB`);
    }

    // Check for slow resources
    const slowResources = this.resourceTimings.filter(r => r.duration > 1000); // > 1s
    if (slowResources.length > 0) {
      recommendations.push(`Optimize slow resources: ${slowResources.length} resources take longer than 1s to load`);
    }

    return recommendations;
  }

  /**
   * Log performance report to console
   */
  public logReport(): void {
    if (typeof window === 'undefined') return;

    console.group('🚀 Performance Report');
    console.log('Metrics:', this.getMetrics());
    console.log('Performance Score:', this.getPerformanceScore() + '/100');
    console.log('Recommendations:', this.getRecommendations());
    console.groupEnd();
  }

  /**
   * Send performance metrics to analytics endpoint
   */
  public async sendToAnalytics(endpoint: string): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      const data = {
        metrics: this.getMetrics(),
        score: this.getPerformanceScore(),
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Failed to send performance metrics:', error);
    }
  }

  /**
   * Prefetch critical resources
   */
  public prefetchResources(urls: string[]): void {
    if (typeof document === 'undefined') return;

    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  /**
   * Preload critical resources
   */
  public preloadResources(resources: Array<{ url: string; as: string }>): void {
    if (typeof document === 'undefined') return;

    resources.forEach(({ url, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = as;
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize images with lazy loading
   */
  public optimizeImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
          (img as HTMLImageElement).src = src;
          img.removeAttribute('data-src');
        }
      });
    }
  }

  /**
   * Debounce function for performance optimization
   */
  public debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    
    return function executedFunction(...args: Parameters<T>) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function for performance optimization
   */
  public throttle<T extends (...args: any[]) => any>(
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
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export default PerformanceOptimizer;
