// Enhanced performance monitoring utilities
interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface PerformanceMetrics {
  [key: string]: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public startMeasure(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(`${name}-start`);
    }
  }

  public endMeasure(name: string): number {
    if (typeof performance !== 'undefined' && performance.mark && performance.measure) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      const measures = performance.getEntriesByName(name);
      const duration = measures[measures.length - 1]?.duration || 0;
      this.metrics.set(name, duration);
      
      return duration;
    }
    return 0;
  }

  public getMetrics(): PerformanceMetrics {
    return Object.fromEntries(this.metrics);
  }

  public reportCoreWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Monitor Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // Monitor First Input Delay (FID)
    this.observeFID();
    
    // Monitor Cumulative Layout Shift (CLS)
    this.observeCLS();
    
    // Monitor First Contentful Paint (FCP)
    this.observeFCP();
    
    console.log('Enhanced Core Web Vitals monitoring active');
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('lcp', lastEntry.startTime);
      console.log('LCP:', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(observer);
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime;
        this.metrics.set('fid', fid);
        console.log('FID:', fid);
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
    this.observers.push(observer);
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as PerformanceEntry & { value: number }).value;
        }
      });
      this.metrics.set('cls', clsValue);
      console.log('CLS:', clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.set('fcp', entry.startTime);
        console.log('FCP:', entry.startTime);
      });
    });

    observer.observe({ entryTypes: ['paint'] });
    this.observers.push(observer);
  }

  public measurePageLoad(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
          'page-load-time': navigation.loadEventEnd - navigation.fetchStart,
          'dom-content-loaded': navigation.domContentLoadedEventEnd - navigation.fetchStart,
          'first-byte': navigation.responseStart - navigation.fetchStart,
          'dom-interactive': navigation.domInteractive - navigation.fetchStart,
          'time-to-interactive': navigation.domInteractive - navigation.fetchStart,
          'total-blocking-time': this.calculateTBT()
        };

        Object.entries(metrics).forEach(([key, value]) => {
          this.metrics.set(key, value);
        });

        console.log('Enhanced Page Load Metrics:', metrics);
      }
    });
  }

  private calculateTBT(): number {
    const longTasks = performance.getEntriesByType('longtask');
    return longTasks.reduce((total, task) => {
      return total + Math.max(0, task.duration - 50);
    }, 0);
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  public getWebVitals(): WebVitalMetric[] {
    const vitals: WebVitalMetric[] = [];
    
    if (this.metrics.has('lcp')) {
      vitals.push({
        name: 'LCP',
        value: this.metrics.get('lcp')!,
        delta: this.metrics.get('lcp')!,
        id: 'lcp',
        navigationType: 'navigate'
      });
    }

    if (this.metrics.has('fid')) {
      vitals.push({
        name: 'FID',
        value: this.metrics.get('fid')!,
        delta: this.metrics.get('fid')!,
        id: 'fid',
        navigationType: 'navigate'
      });
    }

    if (this.metrics.has('cls')) {
      vitals.push({
        name: 'CLS',
        value: this.metrics.get('cls')!,
        delta: this.metrics.get('cls')!,
        id: 'cls',
        navigationType: 'navigate'
      });
    }

    return vitals;
  }
}

// Initialize performance monitoring
export const performanceMonitor = PerformanceMonitor.getInstance();
performanceMonitor.measurePageLoad();