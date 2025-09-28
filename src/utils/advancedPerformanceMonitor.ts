/**
 * Advanced Performance Monitor
 * Comprehensive performance monitoring and analytics system
 */

export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  errors: number;
  networkLatency: number;
  userInteractions: number;
}

export interface PerformanceCallback {
  (metrics: PerformanceMetrics): void;
}

export class AdvancedPerformanceMonitor {
  private metrics: PerformanceMetrics;
  private callbacks: PerformanceCallback[] = [];
  private isMonitoring: boolean = false;
  private intervalId?: number;
  private startTime: number;
  private lastFrameTime?: number;
  private frameCount = 0;

  constructor() {
    this.metrics = {
      fps: 0,
      memoryUsage: 0,
      loadTime: 0,
      errors: 0,
      networkLatency: 0,
      userInteractions: 0
    };
    this.startTime = performance.now();
  }

  /**
   * Start performance monitoring
   */
  public startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.setupObservers();
    this.startPeriodicUpdates();
    console.log('Advanced Performance Monitor started');
  }

  /**
   * Stop performance monitoring
   */
  public stopMonitoring(): void {
    this.isMonitoring = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    console.log('Advanced Performance Monitor stopped');
  }

  /**
   * Add callback for performance updates
   */
  public addCallback(callback: PerformanceCallback): void {
    this.callbacks.push(callback);
  }

  /**
   * Remove callback
   */
  public removeCallback(callback: PerformanceCallback): void {
    const index = this.callbacks.indexOf(callback);
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  }

  /**
   * Get current metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Setup performance observers
   */
  private setupObservers(): void {
    // FID (First Input Delay) observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if ('processingStart' in entry && entry.startTime) {
          const fid = (entry as any).processingStart - entry.startTime;
          this.metrics.networkLatency = fid;
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

    // User interaction tracking
    const handleInteraction = () => {
      this.metrics.userInteractions++;
    };
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
  }

  /**
   * Start periodic updates
   */
  private startPeriodicUpdates(): void {
    this.intervalId = setInterval(() => {
      this.updateMetrics();
      this.notifyCallbacks();
    }, 2000);
  }

  /**
   * Update performance metrics
   */
  private updateMetrics(): void {
    this.updateFPS();
    
    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }
    }

    // Load time
    this.metrics.loadTime = performance.now() - this.startTime;
  }

  /**
   * Update FPS calculation
   */
  private updateFPS(): void {
    const now = performance.now();
    if (!this.lastFrameTime) {
      this.lastFrameTime = now;
      return;
    }

    this.frameCount++;
    const deltaTime = now - this.lastFrameTime;

    if (deltaTime >= 1000) {
      this.metrics.fps = Math.round((this.frameCount * 1000) / deltaTime);
      this.frameCount = 0;
      this.lastFrameTime = now;
    }
  }

  /**
   * Notify all callbacks with current metrics
   */
  private notifyCallbacks(): void {
    this.callbacks.forEach(callback => {
      try {
        callback(this.getMetrics());
      } catch (error) {
        console.error('Error in performance callback:', error);
      }
    });
  }

  /**
   * Get performance report
   */
  public getReport(): string {
    const metrics = this.getMetrics();
    const score = this.calculatePerformanceScore();
    
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      metrics,
      score,
      status: this.getPerformanceStatus(),
      recommendations: this.getRecommendations()
    }, null, 2);
  }

  /**
   * Calculate overall performance score
   */
  private calculatePerformanceScore(): number {
    let score = 100;

    // Deduct points based on performance issues
    if (this.metrics.fps < 30) score -= 30;
    if (this.metrics.fps < 15) score -= 20;
    if (this.metrics.memoryUsage > 100) score -= 20;
    if (this.metrics.loadTime > 5000) score -= 15;
    if (this.metrics.errors > 10) score -= 25;
    if (this.metrics.networkLatency > 1000) score -= 10;

    return Math.max(0, score);
  }

  /**
   * Get performance status
   */
  private getPerformanceStatus(): 'excellent' | 'good' | 'needs-improvement' | 'poor' {
    const score = this.calculatePerformanceScore();
    
    if (score >= 90) return 'excellent';
    if (score >= 70) return 'good';
    if (score >= 50) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get performance recommendations
   */
  private getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.fps < 30) {
      recommendations.push('Optimize rendering performance - reduce DOM operations and use requestAnimationFrame');
    }

    if (this.metrics.memoryUsage > 100) {
      recommendations.push('Reduce memory usage - check for memory leaks and optimize data structures');
    }

    if (this.metrics.loadTime > 5000) {
      recommendations.push('Improve loading performance - optimize bundle size and enable lazy loading');
    }

    if (this.metrics.errors > 10) {
      recommendations.push('Reduce error rate - improve error handling and testing');
    }

    if (this.metrics.networkLatency > 1000) {
      recommendations.push('Optimize network requests - implement caching and reduce payload size');
    }

    return recommendations;
  }
}

// Export singleton instance
export const advancedPerformanceMonitor = new AdvancedPerformanceMonitor();