

class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();
  
  init() {
    getCLS(this.handleMetric.bind(this));
    getFID(this.handleMetric.bind(this));
    getFCP(this.handleMetric.bind(this));
    getLCP(this.handleMetric.bind(this));
    getTTFB(this.handleMetric.bind(this));
  }
  
  private handleMetric(metric: any) {
    this.metrics.set(metric.name, metric.value);
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals'
      });
    }
    
    console.log(`📊 ${metric.name}: ${metric.value}`);
  }
  
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

export const performanceMonitor = new PerformanceMonitor();
