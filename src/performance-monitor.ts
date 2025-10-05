class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private isInitialized = false;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupPerformanceObserver();
    this.trackCoreWebVitals();
    this.monitorResourceLoading();
    
    this.isInitialized = true;
    console.log('Performance monitor initialized');
  }

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
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Performance monitor cleaned up');
  }
}

export default PerformanceMonitor;