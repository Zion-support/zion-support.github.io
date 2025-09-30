// Performance monitoring utility
export const performanceMonitor = {
  startTime: 0,
  metrics: {} as Record<string, number>,
  
  start(label: string) {
    this.startTime = performance.now();
    this.metrics[label] = this.startTime;
  },
  
  end(label: string) {
    if (this.metrics[label]) {
      const duration = performance.now() - this.metrics[label];
      console.log(`Performance [${label}]: ${duration.toFixed(2)}ms`);
      return duration;
    }
    return 0;
  },
  
  measureAsync<T>(label: string, fn: () => Promise<T>): Promise<T> {
    this.start(label);
    return fn().finally(() => this.end(label));
  }
};