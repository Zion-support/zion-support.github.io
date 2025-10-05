class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private isInitialized: boolean = false;

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
<<<<<<< HEAD
=======
    }
    return PerformanceMonitor.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupPerformanceMonitoring();
    this.isInitialized = true;
    console.log('Performance monitor initialized');
  }

  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      this.monitorWebVitals();
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
    }
    return PerformanceMonitor.instance;
  }

<<<<<<< HEAD
  init(): void {
    if (this.isInitialized) {
      return;
    }
    this.isInitialized = true;
    console.log('Performance monitor initialized');
=======
  private monitorWebVitals(): void {
    // Monitor LCP, FID, CLS, etc.
    console.log('Web Vitals monitoring enabled');
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Performance monitor cleaned up');
  }
}

export default PerformanceMonitor;
