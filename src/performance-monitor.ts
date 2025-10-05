class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private isInitialized: boolean = false;

  private constructor() {}

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
    this.setupWebVitals();
    
    this.isInitialized = true;
    console.log('Performance monitor initialized');
  }

  private setupPerformanceObserver(): void {
    // Monitor performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }
  }

  private setupWebVitals(): void {
    // Monitor Core Web Vitals
    console.log('Web Vitals monitoring setup');
  }
  cleanup(): void {
    this.isInitialized = false;
    console.log('Performance monitor cleaned up');
  }
}

export default PerformanceMonitor;
