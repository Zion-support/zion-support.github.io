/**
 * Advanced Performance Monitor
 * Comprehensive performance monitoring utility
 */

export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fps: number;
  memoryUsage: number;
  loadTime: number;
  errors: number;
  scrollDepth: number;
  interactions: number;
}

export class AdvancedPerformanceMonitor {
  private metrics: PerformanceMetrics;
  private isMonitoring = false;
  private callbacks: ((metrics: PerformanceMetrics) => void)[] = [];
  private intervalId?: NodeJS.Timeout;
  private startTime: number;

  constructor() {
    this.startTime = performance.now();
    this.metrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      fps: 0,
      memoryUsage: 0,
      loadTime: 0,
      errors: 0,
      scrollDepth: 0,
      interactions: 0
    };
  }

  public start(): void {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.setupObservers();
    this.startPeriodicUpdates();
    console.log('🚀 Advanced Performance Monitor started');
  }

  public stop(): void {
    if (!this.isMonitoring) return;
    this.isMonitoring = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    console.log('🛑 Advanced Performance Monitor stopped');
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public onMetricsUpdate(callback: (metrics: PerformanceMetrics) => void): void {
    this.callbacks.push(callback);
  }

  private setupObservers(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input' && 'processingStart' in entry && 'startTime' in entry) {
            this.metrics.fid = (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime;
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Error tracking
      const handleError = () => {
        this.metrics.errors++;
      };
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleError);

    } catch (error) {
      console.warn('Performance observers setup failed:', error);
    }
  }

  private startPeriodicUpdates(): void {
    this.intervalId = setInterval(() => {
      this.updateMetrics();
      this.notifyCallbacks();
    }, 2000);
  }

  private updateMetrics(): void {
    // Update FPS
    this.updateFPS();
    
    // Update memory usage
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      }
    }
    
    // Update load time
    this.metrics.loadTime = performance.now() - this.startTime;
  }

  private updateFPS(): void {
    const now = performance.now();
    if (!this.lastFrameTime) {
      this.lastFrameTime = now;
      this.frameCount = 0;
    }

    this.frameCount++;
    const deltaTime = now - this.lastFrameTime;

    if (deltaTime >= 1000) {
      this.metrics.fps = Math.round((this.frameCount * 1000) / deltaTime);
      this.frameCount = 0;
      this.lastFrameTime = now;
    }
  }

  private notifyCallbacks(): void {
    this.callbacks.forEach(callback => {
      try {
        callback(this.getMetrics());
      } catch (error) {
        console.error('Performance Monitor callback error:', error);
      }
    });
  }

  private lastFrameTime?: number;
  private frameCount = 0;
}

// Singleton instance
let performanceMonitorInstance: AdvancedPerformanceMonitor | null = null;

export function getPerformanceMonitor(): AdvancedPerformanceMonitor {
  if (!performanceMonitorInstance) {
    performanceMonitorInstance = new AdvancedPerformanceMonitor();
  }
  return performanceMonitorInstance;
}