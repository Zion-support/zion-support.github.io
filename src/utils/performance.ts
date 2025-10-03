/**
 * Performance monitoring utilities for the Zion Tech Group website
 */

interface PerformanceMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
  timestamp: number;
}

interface WebVitalsConfig {
  reportAllChanges?: boolean;
  sampleRate?: number;
  debug?: boolean;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private observers: PerformanceObserver[] = [];
  private isEnabled: boolean = true;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor custom performance metrics
    this.observeCustomMetrics();
    
    // Monitor resource loading
    this.observeResourceTiming();
    
    // Monitor long tasks
    this.observeLongTasks();
  }

  private observeWebVitals() {
    // Import web-vitals dynamically to avoid bundle bloat
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const config: WebVitalsConfig = {
        reportAllChanges: true,
        sampleRate: 1.0,
        debug: process.env.NODE_ENV === 'development'
      };

      getCLS(this.handleMetric.bind(this), config);
      getFID(this.handleMetric.bind(this), config);
      getFCP(this.handleMetric.bind(this), config);
      getLCP(this.handleMetric.bind(this), config);
      getTTFB(this.handleMetric.bind(this), config);
    }).catch(error => {
      console.warn('Failed to load web-vitals:', error);
    });
  }

  private observeCustomMetrics() {
    // Monitor React component render times
    this.observeReactPerformance();
    
    // Monitor API response times
    this.observeAPIPerformance();
    
    // Monitor user interactions
    this.observeUserInteractions();
  }

  private observeReactPerformance() {
    // React DevTools Profiler integration
    if (typeof window !== 'undefined' && (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      const hook = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
      
      hook.onCommitFiberRoot = (id: string, root: any, priorityLevel: number) => {
        const renderTime = performance.now();
        this.recordMetric('react-render-time', renderTime);
      };
    }
  }

  private observeAPIPerformance() {
    // Override fetch to monitor API calls
    const originalFetch = window.fetch;
    
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const startTime = performance.now();
      
      try {
        const response = await originalFetch(input, init);
        const endTime = performance.now();
        
        this.recordMetric('api-response-time', endTime - startTime, {
          url: typeof input === 'string' ? input : input.toString(),
          status: response.status,
          method: init?.method || 'GET'
        });
        
        return response;
      } catch (error) {
        const endTime = performance.now();
        
        this.recordMetric('api-error-time', endTime - startTime, {
          url: typeof input === 'string' ? input : input.toString(),
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        
        throw error;
      }
    };
  }

  private observeUserInteractions() {
    const interactionTypes = ['click', 'scroll', 'keydown', 'touchstart'];
    
    interactionTypes.forEach(type => {
      document.addEventListener(type, (event) => {
        this.recordMetric(`user-interaction-${type}`, performance.now(), {
          target: (event.target as Element)?.tagName || 'unknown',
          type: type
        });
      }, { passive: true });
    });
  }

  private observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            
            this.recordMetric('resource-load-time', resourceEntry.duration, {
              name: resourceEntry.name,
              type: resourceEntry.initiatorType,
              size: resourceEntry.transferSize || 0
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    }
  }

  private observeLongTasks() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const longTaskEntry = entry as PerformanceEntry;
          
          this.recordMetric('long-task', longTaskEntry.duration, {
            startTime: longTaskEntry.startTime
          });
        });
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
        this.observers.push(observer);
      } catch (error) {
        // Long task API might not be available in all browsers
        console.warn('Long task observation not supported:', error);
      }
    }
  }

  private handleMetric(metric: PerformanceMetric) {
    this.metrics.set(metric.name, metric);
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Performance Metric [${metric.name}]:`, metric.value, metric.delta);
    }
    
    // Send to analytics
    this.sendToAnalytics(metric);
  }

  private recordMetric(name: string, value: number, metadata?: Record<string, any>) {
    const metric: PerformanceMetric = {
      name,
      value,
      delta: value,
      id: `${name}-${Date.now()}`,
      navigationType: 'navigate',
      timestamp: Date.now()
    };
    
    this.handleMetric(metric);
  }

  private sendToAnalytics(metric: PerformanceMetric) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: metric.name,
        value: Math.round(metric.value),
        custom_map: {
          metric_id: metric.id,
          metric_delta: metric.delta,
          metric_timestamp: metric.timestamp
        }
      });
    }
    
    // Send to custom analytics endpoint
    this.sendToCustomAnalytics(metric);
  }

  private sendToCustomAnalytics(metric: PerformanceMetric) {
    // Implement custom analytics sending logic
    if (process.env.NODE_ENV === 'production') {
      // Send to your analytics service
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric,
          userAgent: navigator.userAgent,
          url: window.location.href,
          timestamp: Date.now()
        })
      }).catch(error => {
        console.warn('Failed to send performance metric:', error);
      });
    }
  }

  public getMetrics(): Map<string, PerformanceMetric> {
    return new Map(this.metrics);
  }

  public getMetric(name: string): PerformanceMetric | undefined {
    return this.metrics.get(name);
  }

  public getPerformanceScore(): number {
    const lcp = this.metrics.get('LCP');
    const fid = this.metrics.get('FID');
    const cls = this.metrics.get('CLS');
    
    if (!lcp || !fid || !cls) return 0;
    
    // Calculate performance score based on Core Web Vitals
    let score = 100;
    
    // LCP scoring (Good: < 2.5s, Needs Improvement: 2.5s-4s, Poor: > 4s)
    if (lcp.value > 4000) score -= 30;
    else if (lcp.value > 2500) score -= 15;
    
    // FID scoring (Good: < 100ms, Needs Improvement: 100ms-300ms, Poor: > 300ms)
    if (fid.value > 300) score -= 25;
    else if (fid.value > 100) score -= 10;
    
    // CLS scoring (Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25)
    if (cls.value > 0.25) score -= 25;
    else if (cls.value > 0.1) score -= 10;
    
    return Math.max(0, score);
  }

  public generateReport(): object {
    const metrics = Object.fromEntries(this.metrics);
    const score = this.getPerformanceScore();
    
    return {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      performanceScore: score,
      metrics,
      recommendations: this.generateRecommendations()
    };
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const metrics = this.metrics;
    
    const lcp = metrics.get('LCP');
    const fid = metrics.get('FID');
    const cls = metrics.get('CLS');
    
    if (lcp && lcp.value > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - consider image optimization and critical resource loading');
    }
    
    if (fid && fid.value > 100) {
      recommendations.push('Reduce First Input Delay - optimize JavaScript execution and reduce main thread blocking');
    }
    
    if (cls && cls.value > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift - ensure stable layout and proper image dimensions');
    }
    
    return recommendations;
  }

  public destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
    this.isEnabled = false;
  }
}

// Create global instance
const performanceMonitor = new PerformanceMonitor();

// Export utilities
export const getPerformanceScore = () => performanceMonitor.getPerformanceScore();
export const getMetrics = () => performanceMonitor.getMetrics();
export const generateReport = () => performanceMonitor.generateReport();
export const recordCustomMetric = (name: string, value: number, metadata?: Record<string, any>) => 
  performanceMonitor['recordMetric'](name, value, metadata);

export default performanceMonitor;