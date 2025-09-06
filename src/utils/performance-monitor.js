
// Performance monitoring utilities
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.startTime = Date.now();
  }

  mark(name) {
    this.metrics[name] = Date.now() - this.startTime;
  }

  measure(name, startMark, endMark) {
    if (this.metrics[startMark] && this.metrics[endMark]) {
      this.metrics[name] = this.metrics[endMark] - this.metrics[startMark];
    }
  }

  getMetrics() {
    return this.metrics;
  }

  report() {
    console.log('Performance Metrics:', this.metrics);
  }
}

// Web Vitals monitoring
function reportWebVitals(metric) {
  console.log('Web Vital:', metric);
  // Send to analytics service
}

// Export for use in components
if (typeof window !== 'undefined') {
  window.PerformanceMonitor = PerformanceMonitor;
  window.reportWebVitals = reportWebVitals;
}

module.exports = { PerformanceMonitor, reportWebVitals };
