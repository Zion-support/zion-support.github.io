/**
 * Enhanced Performance Monitoring Utility
 * Provides comprehensive performance tracking and optimization
 */

export interface PerformanceMetrics {/* content */}
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  memoryUsage: number;
  networkRequests: number;
  domNodes: number;
  jsHeapSize: number;
  timestamp: number;
}

export interface PerformanceAlert {/* content */}
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: keyof PerformanceMetrics;
  value: number;
  threshold: number;
  timestamp: number;
}

class EnhancedPerformanceMonitor {/* content */}
  private metrics: PerformanceMetrics[] = [];
  private alerts: PerformanceAlert[] = [];
  private observers: PerformanceObserver[] = [];
  // private _isMonitoring = false;

  constructor() {/* content */}
    this.initializeObservers();
  }

  private initializeObservers(): void {/* content */}
    // Observe navigation timing
    if ('PerformanceObserver' in window) {/* content */}
      try {/* content */}
        const navObserver = new PerformanceObserver((list) => {/* content */}
          const entries = list.getEntries();
          entries.forEach((entry) => {/* content */}
            if (entry.entryType === 'navigation') {/* content */}
              this.processNavigationTiming(entry as PerformanceNavigationTiming);
            }
          });
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (error) {/* content */}
        console.warn('Navigation timing observer failed:', error);
      }
    }
  }

  private processNavigationTiming(entry: PerformanceNavigationTiming): void {/* content */}
    const metrics: Partial<PerformanceMetrics> = {/* content */}
      loadTime: entry.loadEventEnd - entry.loadEventStart,
      timeToInteractive: entry.domInteractive - (entry as PerformanceNavigationTiming & { navigationStart: number }).navigationStart,
      timestamp: Date.now()
    };

    this.addMetrics(metrics as PerformanceMetrics);
  }

  private addMetrics(newMetrics: PerformanceMetrics): void {/* content */}
    this.metrics.push(newMetrics);
    this.checkThresholds(newMetrics);
    
    // Keep only last 100 metrics
    if (this.metrics.length > 100) {/* content */}
      this.metrics = this.metrics.slice(-100);
    }
  }

  private checkThresholds(metrics: PerformanceMetrics): void {/* content */}
    const thresholds = {/* content */}
      loadTime: 3000,
      firstContentfulPaint: 1500,
      largestContentfulPaint: 2500,
      firstInputDelay: 100,
      cumulativeLayoutShift: 0.1,
      timeToInteractive: 3800,
      totalBlockingTime: 200,
      speedIndex: 3000
    };

    Object.entries(thresholds).forEach(([key, threshold]) => {/* content */}
      const value = metrics[key as keyof PerformanceMetrics];
      if (typeof value === 'number' && value > threshold) {/* content */}
        this.addAlert({/* content */}
          type: value > threshold * 1.5 ? 'error' : 'warning',
          message: `${key} exceeded threshold: ${value}ms > ${threshold}ms`,
          metric: key as keyof PerformanceMetrics,
          value,
          threshold,
          timestamp: Date.now()
        });
      }
    });
  }

  private addAlert(alert: PerformanceAlert): void {/* content */}
    this.alerts.push(alert);
    
    // Keep only last 50 alerts
    if (this.alerts.length > 50) {/* content */}
      this.alerts = this.alerts.slice(-50);
    }

    // Log critical alerts
    if (alert.type === 'error') {/* content */}
      console.error('Performance Alert:', alert);
    }
  }

  public startMonitoring(): void {/* content */}
    // this._isMonitoring = true;
    console.log('Enhanced performance monitoring started');
  }

  public stopMonitoring(): void {/* content */}
    // this._isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    console.log('Enhanced performance monitoring stopped');
  }

  public getMetrics(): PerformanceMetrics[] {/* content */}
    return [...this.metrics];
  }

  public getAlerts(): PerformanceAlert[] {/* content */}
    return [...this.alerts];
  }

  public getLatestMetrics(): PerformanceMetrics | null {/* content */}
    return this.metrics.length > 0 ? this.metrics[this.metrics.length - 1] : null;
  }

  public exportReport(): string {/* content */}
    const latest = this.getLatestMetrics();
    const alerts = this.getAlerts();

    return JSON.stringify({/* content */}
      latest,
      alerts,
      timestamp: Date.now(),
      totalMetrics: this.metrics.length
    }, null, 2);
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();

// Auto-start monitoring in browser environment
if (typeof window !== 'undefined') {/* content */}
  enhancedPerformanceMonitor.startMonitoring();
}
