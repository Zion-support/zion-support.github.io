/**
 * Comprehensive Performance Monitoring System
 * Provides detailed performance metrics, monitoring, and optimization recommendations
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  category: 'navigation' | 'paint' | 'resource' | 'custom';
}

export interface PerformanceReport {
  timestamp: number;
  url: string;
  metrics: PerformanceMetric[];
  recommendations: PerformanceRecommendation[];
  score: number;
}

export interface PerformanceRecommendation {
  type: 'critical' | 'warning' | 'info';
  category: 'performance' | 'accessibility' | 'seo' | 'security';
  title: string;
  description: string;
  impact: number; // 1-10 scale
  effort: number; // 1-10 scale
  priority: number; // calculated from impact/effort
}

export class ComprehensivePerformanceMonitor {
  private static instance: ComprehensivePerformanceMonitor;
  private metrics: Map<string, PerformanceMetric[]> = new Map();
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;
  private reportInterval: number | null = null;
  private readonly REPORT_INTERVAL = 30000; // 30 seconds

  public static getInstance(): ComprehensivePerformanceMonitor {
    if (!ComprehensivePerformanceMonitor.instance) {
      ComprehensivePerformanceMonitor.instance = new ComprehensivePerformanceMonitor();
    }
    return ComprehensivePerformanceMonitor.instance;
  }

  public startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.setupObservers();
    this.startPeriodicReporting();
    
    console.log('🚀 Comprehensive Performance Monitoring started');
  }

  public stopMonitoring(): void {
    if (!this.isMonitoring) return;

    this.isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }
    
    console.log('🛑 Comprehensive Performance Monitoring stopped');
  }

  private setupObservers(): void {
    // Navigation timing observer
    if ('PerformanceObserver' in window) {
      try {
        const navObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              this.recordNavigationMetrics(entry as PerformanceNavigationTiming);
            }
          }
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (error) {
        console.warn('Navigation timing observer not supported:', error);
      }

      // Paint timing observer
      try {
        const paintObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              this.recordPaintMetrics(entry as PerformancePaintTiming);
            }
          }
        });
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserver);
      } catch (error) {
        console.warn('Paint timing observer not supported:', error);
      }

      // Resource timing observer
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              this.recordResourceMetrics(entry as PerformanceResourceTiming);
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (error) {
        console.warn('Resource timing observer not supported:', error);
      }

      // Long task observer
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordLongTaskMetrics(entry as PerformanceEntry);
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (error) {
        console.warn('Long task observer not supported:', error);
      }
    }
  }

  private recordNavigationMetrics(entry: PerformanceNavigationTiming): void {
    const metrics: PerformanceMetric[] = [
      {
        name: 'DNS Lookup',
        value: entry.domainLookupEnd - entry.domainLookupStart,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      },
      {
        name: 'TCP Connection',
        value: entry.connectEnd - entry.connectStart,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      },
      {
        name: 'TLS Negotiation',
        value: entry.secureConnectionStart > 0 ? entry.connectEnd - entry.secureConnectionStart : 0,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      },
      {
        name: 'Request Time',
        value: entry.responseStart - entry.requestStart,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      },
      {
        name: 'Response Time',
        value: entry.responseEnd - entry.responseStart,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      },
      {
        name: 'DOM Processing',
        value: entry.domComplete - entry.domContentLoadedEventStart || 0,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      },
      {
        name: 'Load Event',
        value: entry.loadEventEnd - entry.loadEventStart,
        unit: 'ms',
        timestamp: Date.now(),
        category: 'navigation'
      }
    ];

    this.addMetrics('navigation', metrics);
  }

  private recordPaintMetrics(entry: PerformancePaintTiming): void {
    const metric: PerformanceMetric = {
      name: entry.name,
      value: entry.startTime,
      unit: 'ms',
      timestamp: Date.now(),
      category: 'paint'
    };

    this.addMetrics('paint', [metric]);
  }

  private recordResourceMetrics(entry: PerformanceResourceTiming): void {
    const metric: PerformanceMetric = {
      name: entry.name,
      value: entry.duration,
      unit: 'ms',
      timestamp: Date.now(),
      category: 'resource'
    };

    this.addMetrics('resource', [metric]);
  }

  private recordLongTaskMetrics(entry: PerformanceEntry): void {
    const metric: PerformanceMetric = {
      name: 'Long Task',
      value: entry.duration,
      unit: 'ms',
      timestamp: Date.now(),
      category: 'custom'
    };

    this.addMetrics('longtask', [metric]);
  }

  private addMetrics(category: string, metrics: PerformanceMetric[]): void {
    const existing = this.metrics.get(category) || [];
    this.metrics.set(category, [...existing, ...metrics]);
  }

  private startPeriodicReporting(): void {
    this.reportInterval = window.setInterval(() => {
      this.generateReport();
    }, this.REPORT_INTERVAL);
  }

  public generateReport(): PerformanceReport {
    const allMetrics = Array.from(this.metrics.values()).flat();
    const recommendations = this.generateRecommendations(allMetrics);
    const score = this.calculatePerformanceScore(allMetrics);

    const report: PerformanceReport = {
      timestamp: Date.now(),
      url: window.location.href,
      metrics: allMetrics,
      recommendations,
      score
    };

    // Store report for analysis
    this.storeReport(report);

    return report;
  }

  private generateRecommendations(metrics: PerformanceMetric[]): PerformanceRecommendation[] {
    const recommendations: PerformanceRecommendation[] = [];

    // Check for slow navigation metrics
    const navMetrics = metrics.filter(m => m.category === 'navigation');
    const slowDNS = navMetrics.find(m => m.name === 'DNS Lookup' && m.value > 100);
    if (slowDNS) {
      recommendations.push({
        type: 'warning',
        category: 'performance',
        title: 'Slow DNS Lookup',
        description: 'DNS lookup is taking longer than 100ms. Consider using a faster DNS provider.',
        impact: 6,
        effort: 3,
        priority: 2
      });
    }

    // Check for slow resource loading
    const resourceMetrics = metrics.filter(m => m.category === 'resource');
    const slowResources = resourceMetrics.filter(m => m.value > 1000);
    if (slowResources.length > 0) {
      recommendations.push({
        type: 'critical',
        category: 'performance',
        title: 'Slow Resource Loading',
        description: `${slowResources.length} resources are taking longer than 1 second to load. Consider optimizing or lazy loading.`,
        impact: 8,
        effort: 5,
        priority: 1.6
      });
    }

    // Check for long tasks
    const longTasks = metrics.filter(m => m.name === 'Long Task');
    if (longTasks.length > 0) {
      recommendations.push({
        type: 'warning',
        category: 'performance',
        title: 'Long Tasks Detected',
        description: `${longTasks.length} long tasks detected. Consider breaking up heavy computations.`,
        impact: 7,
        effort: 6,
        priority: 1.17
      });
    }

    // Check for paint performance
    const paintMetrics = metrics.filter(m => m.category === 'paint');
    const slowPaint = paintMetrics.find(m => m.name === 'first-contentful-paint' && m.value > 1500);
    if (slowPaint) {
      recommendations.push({
        type: 'critical',
        category: 'performance',
        title: 'Slow First Contentful Paint',
        description: 'First contentful paint is taking longer than 1.5 seconds. Consider optimizing critical rendering path.',
        impact: 9,
        effort: 7,
        priority: 1.29
      });
    }

    return recommendations.sort((a, b) => b.priority - a.priority);
  }

  private calculatePerformanceScore(metrics: PerformanceMetric[]): number {
    let score = 100;

    // Deduct points for slow metrics
    const navMetrics = metrics.filter(m => m.category === 'navigation');
    const slowDNS = navMetrics.find(m => m.name === 'DNS Lookup' && m.value > 100);
    if (slowDNS) score -= 10;

    const slowResources = metrics.filter(m => m.category === 'resource' && m.value > 1000);
    score -= slowResources.length * 5;

    const longTasks = metrics.filter(m => m.name === 'Long Task');
    score -= longTasks.length * 15;

    const slowPaint = metrics.find(m => m.name === 'first-contentful-paint' && m.value > 1500);
    if (slowPaint) score -= 20;

    return Math.max(0, score);
  }

  private storeReport(report: PerformanceReport): void {
    // Store in localStorage for persistence
    const reports = JSON.parse(localStorage.getItem('performanceReports') || '[]');
    reports.push(report);
    
    // Keep only last 50 reports
    if (reports.length > 50) {
      reports.splice(0, reports.length - 50);
    }
    
    localStorage.setItem('performanceReports', JSON.stringify(reports));
  }

  public getLatestReport(): PerformanceReport | null {
    const reports = JSON.parse(localStorage.getItem('performanceReports') || '[]');
    return reports.length > 0 ? reports[reports.length - 1] : null;
  }

  public getAllReports(): PerformanceReport[] {
    return JSON.parse(localStorage.getItem('performanceReports') || '[]');
  }

  public getMetricsByCategory(category: string): PerformanceMetric[] {
    return this.metrics.get(category) || [];
  }

  public clearMetrics(): void {
    this.metrics.clear();
    localStorage.removeItem('performanceReports');
  }

  public exportReport(): string {
    const report = this.generateReport();
    return JSON.stringify(report, null, 2);
  }
}

// Export singleton instance
export const comprehensivePerformanceMonitor = ComprehensivePerformanceMonitor.getInstance();