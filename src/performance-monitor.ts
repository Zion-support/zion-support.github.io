class PerformanceMonitor {
  private static instance: PerformanceMonitor;
<<<<<<< HEAD
  private isInitialized = false;
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
<<<<<<< HEAD
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
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Performance monitor cleaned up');
  }
}

export default PerformanceMonitor;
