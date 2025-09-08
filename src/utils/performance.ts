// Performance monitoring utilities
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage?: number;
}

export interface PerformanceConfig {
  enableWebVitals: boolean;
  enableMemoryMonitoring: boolean;
  enableResourceTiming: boolean;
  sampleRate: number;
}

class PerformanceMonitor {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics | null = null;
  private observers: PerformanceObserver[] = [];

  constructor(config: PerformanceConfig = {
    enableWebVitals: true,
    enableMemoryMonitoring: true,
    enableResourceTiming: true,
    sampleRate: 1.0,
  }) {
    this.config = config;
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Only initialize for a percentage of users based on sample rate
    if (Math.random() > this.config.sampleRate) return;

    if (this.config.enableWebVitals) {
      this.observeWebVitals();
    }

    if (this.config.enableMemoryMonitoring) {
      this.observeMemoryUsage();
    }

    if (this.config.enableResourceTiming) {
      this.observeResourceTiming();
    }

    // Capture page load metrics
    this.capturePageLoadMetrics();
  }

  private observeWebVitals() {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', (entry) => {
      this.metrics = { ...this.metrics, firstContentfulPaint: entry.startTime } as PerformanceMetrics;
    });

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics = { ...this.metrics, largestContentfulPaint: lastEntry.startTime } as PerformanceMetrics;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics = { ...this.metrics, firstInputDelay: entry.processingStart - entry.startTime } as PerformanceMetrics;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics = { ...this.metrics, cumulativeLayoutShift: clsValue } as PerformanceMetrics;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }

  private observePaint(metricName: string, callback: (entry: PerformanceEntry) => void) {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(callback);
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    }
  }

  private observeMemoryUsage() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics = {
        ...this.metrics,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
      } as PerformanceMetrics;
    }
  }

  private observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Log slow resources
          if (entry.duration > 1000) {
            console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
  }

  private capturePageLoadMetrics() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics = {
          ...this.metrics,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          timeToInteractive: navigation.domInteractive - navigation.navigationStart,
        } as PerformanceMetrics;
      }
    });
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public reportMetrics(endpoint?: string) {
    if (!this.metrics) return;

    const data = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      metrics: this.metrics,
    };

    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(console.error);
    }

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', this.metrics);
    }
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = (config?: Partial<PerformanceConfig>) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
  const monitorRef = React.useRef<PerformanceMonitor | null>(null);

  React.useEffect(() => {
    monitorRef.current = new PerformanceMonitor(config);
    
    const interval = setInterval(() => {
      const currentMetrics = monitorRef.current?.getMetrics();
      if (currentMetrics) {
        setMetrics(currentMetrics);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      monitorRef.current?.cleanup();
    };
  }, [config]);

  const reportMetrics = React.useCallback((endpoint?: string) => {
    monitorRef.current?.reportMetrics(endpoint);
  }, []);

  return { metrics, reportMetrics };
};

// Utility functions
export const measureFunction = <T extends (...args: any[]) => any>(
  fn: T,
  name?: string
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    
    if (name) {
      console.log(`${name} took ${end - start} milliseconds`);
    }
    
    return result;
  }) as T;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
};

// Bundle size analyzer
export const analyzeBundleSize = () => {
  if (typeof window === 'undefined') return;

  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  const totalScriptSize = scripts.reduce((total, script) => {
    const src = script.getAttribute('src');
    if (src && src.includes('assets')) {
      // This is a rough estimate - in reality you'd need to fetch the actual file size
      return total + 100; // Placeholder
    }
    return total;
  }, 0);

  const totalStyleSize = stylesheets.reduce((total, link) => {
    const href = link.getAttribute('href');
    if (href && href.includes('assets')) {
      return total + 50; // Placeholder
    }
    return total;
  }, 0);

  console.log('Bundle Analysis:', {
    scripts: scripts.length,
    stylesheets: stylesheets.length,
    estimatedScriptSize: `${totalScriptSize}KB`,
    estimatedStyleSize: `${totalStyleSize}KB`,
    totalEstimatedSize: `${totalScriptSize + totalStyleSize}KB`,
  });
};

export default PerformanceMonitor;