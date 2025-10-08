/**
 * Performance Monitor Utility
 * Provides real-time performance monitoring and tracking
 */

export interface PerformanceMetrics {
  fps?: number;
  memory?: {
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
  };
  navigationTiming?: PerformanceNavigationTiming;
  resourceTiming?: PerformanceResourceTiming[];
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeMonitoring();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize performance monitoring
   */
  private initializeMonitoring(): void {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    // Monitor navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.metrics.navigationTiming = entry as PerformanceNavigationTiming;
          }
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (error) {
      console.warn('Navigation timing monitoring not supported', error);
    }

    // Monitor resource timing
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceResourceTiming[];
        this.metrics.resourceTiming = entries;
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
      console.warn('Resource timing monitoring not supported', error);
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    // Update memory metrics if available
    if (typeof window !== 'undefined' && (performance as any).memory) {
      this.metrics.memory = {
        usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
        totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
        jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit,
      };
    }

    return { ...this.metrics };
  }

  /**
   * Measure FPS
   */
  measureFPS(duration: number = 1000): Promise<number> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve(0);
        return;
      }

      let frames = 0;
      const startTime = performance.now();

      const measureFrame = () => {
        frames++;
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;

        if (elapsed < duration) {
          requestAnimationFrame(measureFrame);
        } else {
          const fps = Math.round((frames * 1000) / elapsed);
          this.metrics.fps = fps;
          resolve(fps);
        }
      };

      requestAnimationFrame(measureFrame);
    });
  }

  /**
   * Clear observers
   */
  disconnect(): void {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();
export default performanceMonitor;