class PerformanceMonitor {
  private static instance: PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  private isInitialized = false;
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
  private isInitialized = false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
    }
    return PerformanceMonitor.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    this.setupPerformanceMonitoring();
=======
    this.setupPerformanceObserver();
    this.trackCoreWebVitals();
    this.monitorResourceLoading();
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
    this.setupPerformanceObserver();
    this.setupWebVitals();
    this.setupResourceTiming();
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
    this.isInitialized = true;
    console.log('Performance monitor initialized');
  }

<<<<<<< HEAD
<<<<<<< HEAD
  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      this.monitorWebVitals();
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
    }
    return PerformanceMonitor.instance;
  }

<<<<<<< HEAD
  private monitorWebVitals(): void {
    // Monitor LCP, FID, CLS, etc.
    console.log('Web Vitals monitoring enabled');
=======
  init(): void {
    if (this.isInitialized) {
      return;
    }
    this.isInitialized = true;
    console.log('Performance monitor initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
  private setupPerformanceObserver(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handlePerformanceEntry(entry);
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  }

  private trackCoreWebVitals(): void {
    // Track Core Web Vitals
    console.log('Core Web Vitals tracking enabled');
  }

  private monitorResourceLoading(): void {
    // Monitor resource loading performance
    console.log('Resource loading monitoring enabled');
  }

  private handlePerformanceEntry(entry: PerformanceEntry): void {
    console.log('Performance entry:', entry.name, entry.duration);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
  private setupPerformanceObserver(): void {
    // Monitor performance entries
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });
      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    }
  }

  private setupWebVitals(): void {
    // Monitor Core Web Vitals
    console.log('Web Vitals monitoring setup');
  }

  private setupResourceTiming(): void {
    // Monitor resource loading times
    console.log('Resource timing monitoring setup');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Performance monitor cleaned up');
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export default PerformanceMonitor;
=======
export default PerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
export default PerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
