
/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and provides performance insights
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  memory?: number; // Memory usage
  timestamp: number;
}

export interface PerformanceReport {
  metrics: PerformanceMetrics;
  score: number;
  recommendations: string[];
  isGood: boolean;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = { timestamp: Date.now() };
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  constructor() {
    this.setupObservers();
  }

  private setupObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (e) {

      console.warn('FCP observer not supported:', e);    }

    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      console.warn('LCP observer not supported:', e);    }

    // FID Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {          this.metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {
      console.warn('FID observer not supported:', e);    }

    // CLS Observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (e) {
      console.warn('CLS observer not supported:', e);    }

    // TTFB Observer
    try {
      const ttfbObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
        if (navigationEntry) {
          this.metrics.ttfb = (navigationEntry as any).responseStart - (navigationEntry as any).requestStart;
        }
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(ttfbObserver);
    } catch (e) {
      console.warn('TTFB observer not supported:', e);    }

    // Memory Observer
    if ('memory' in performance) {
      this.observeMemory();
    }
  }

  private observeMemory() {
    const checkMemory = () => {
      const memory = (performance as any).memory;
      if (memory) {
        this.metrics.memory = memory.usedJSHeapSize / 1024 / 1024; // MB
      }
    };

    // Check memory every 5 seconds
    setInterval(checkMemory, 5000);
    checkMemory();
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public generateReport(): PerformanceReport {
    const metrics = this.getMetrics();
    const recommendations: string[] = [];
    let score = 100;

    // FCP scoring (Good: < 1.8s, Needs Improvement: 1.8s - 3.0s, Poor: > 3.0s)
    if (metrics.fcp) {
      if (metrics.fcp > 3000) {
        score -= 20;
        recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
      } else if (metrics.fcp > 1800) {
        score -= 10;
        recommendations.push('First Contentful Paint could be improved. Optimize server response and critical resources.');
      }
    }

    // LCP scoring (Good: < 2.5s, Needs Improvement: 2.5s - 4.0s, Poor: > 4.0s)
    if (metrics.lcp) {
      if (metrics.lcp > 4000) {
        score -= 25;
        recommendations.push('Largest Contentful Paint is slow. Optimize images and critical resources.');
      } else if (metrics.lcp > 2500) {
        score -= 15;
        recommendations.push('Largest Contentful Paint could be improved. Consider lazy loading and resource optimization.');
      }
    }

    // FID scoring (Good: < 100ms, Needs Improvement: 100ms - 300ms, Poor: > 300ms)
    if (metrics.fid) {
      if (metrics.fid > 300) {
        score -= 20;
        recommendations.push('First Input Delay is high. Reduce JavaScript execution time and optimize interactions.');
      } else if (metrics.fid > 100) {
        score -= 10;
        recommendations.push('First Input Delay could be improved. Consider code splitting and reducing main thread work.');
      }
    }

    // CLS scoring (Good: < 0.1, Needs Improvement: 0.1 - 0.25, Poor: > 0.25)
    if (metrics.cls) {
      if (metrics.cls > 0.25) {
        score -= 15;
        recommendations.push('Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.');
      } else if (metrics.cls > 0.1) {
        score -= 8;
        recommendations.push('Cumulative Layout Shift could be improved. Reserve space for dynamic content.');
      }
    }

    // TTFB scoring (Good: < 800ms, Needs Improvement: 800ms - 1800ms, Poor: > 1800ms)
    if (metrics.ttfb) {
      if (metrics.ttfb > 1800) {
        score -= 15;
        recommendations.push('Time to First Byte is slow. Optimize server response time and CDN configuration.');
      } else if (metrics.ttfb > 800) {
        score -= 8;
        recommendations.push('Time to First Byte could be improved. Consider server-side optimizations.');
      }
    }

    // Memory scoring
    if (metrics.memory && metrics.memory > 50) {
      score -= 5;
      recommendations.push('High memory usage detected. Consider optimizing memory usage and checking for leaks.');
    }

    return {
      metrics,
      score: Math.max(0, score),
      recommendations,
      isGood: score >= 80,
    };
  }

  public reportMetrics(endpoint?: string) {
    const report = this.generateReport();
    
    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
      }).catch(console.error);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Report');
      console.log('Score:', report.score);
      console.log('Metrics:', report.metrics);
      if (report.recommendations.length > 0) {
        console.log('Recommendations:', report.recommendations);      }
      console.groupEnd();
    }

    return report;
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({ timestamp: Date.now() });
  const [report, setReport] = React.useState<PerformanceReport | null>(null);

  React.useEffect(() => {
    const updateMetrics = () => {
      setMetrics(performanceMonitor.getMetrics());
      setReport(performanceMonitor.generateReport());
    };

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    updateMetrics();

    return () => clearInterval(interval);
  }, []);

  const reportMetrics = (endpoint?: string) => {
    return performanceMonitor.reportMetrics(endpoint);
  };

  return {
    metrics,
    report,
    reportMetrics,
  };
};

// Utility functions
export const measurePerformance = async <T>(
  name: string,
  fn: () => Promise<T> | T
): Promise<T> => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);  
  return result;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default performanceMonitor;