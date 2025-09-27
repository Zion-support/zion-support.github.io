/**
 * Advanced Performance Monitoring System
 * Provides comprehensive performance tracking, analysis, and optimization recommendations
 */

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'resource' | 'user' | 'custom';
  metadata?: Record<string, any>;
}

interface PerformanceReport {
  sessionId: string;
  userId: string;
  timestamp: number;
  metrics: PerformanceMetric[];
  summary: {
    averageLoadTime: number;
    slowestResources: Array<{ name: string; duration: number }>;
    userInteractions: number;
    errors: number;
    recommendations: string[];
  };
}

interface WebVitals {
  CLS: number;
  FID: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

class AdvancedPerformanceMonitor {
  private static instance: AdvancedPerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private sessionId: string;
  private userId: string;
  private isMonitoring = false;
  private reportInterval: NodeJS.Timeout | null = null;
  private userInteractions = 0;
  private errors = 0;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
  }

  public static getInstance(): AdvancedPerformanceMonitor {
    if (!AdvancedPerformanceMonitor.instance) {
      AdvancedPerformanceMonitor.instance = new AdvancedPerformanceMonitor();
    }
    return AdvancedPerformanceMonitor.instance;
  }

  public startMonitoring(): void {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    console.log('🚀 Advanced Performance Monitor started');

    // Monitor navigation timing
    this.observeNavigationTiming();
    
    // Monitor resource timing
    this.observeResourceTiming();
    
    // Monitor long tasks
    this.observeLongTasks();
    
    // Monitor layout shifts
    this.observeLayoutShifts();
    
    // Monitor user interactions
    this.observeUserInteractions();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor network conditions
    this.observeNetworkConditions();
    
    // Set up periodic reporting
    this.setupPeriodicReporting();
    
    // Monitor Web Vitals
    this.monitorWebVitals();
  }

  public stopMonitoring(): void {
    if (!this.isMonitoring) return;
    
    this.isMonitoring = false;
    
    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    // Clear reporting interval
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }
    
    console.log('🛑 Advanced Performance Monitor stopped');
  }

  public recordCustomMetric(name: string, value: number, metadata?: Record<string, any>): void {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      category: 'custom',
      metadata
    });
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getPerformanceReport(): PerformanceReport {
    const navigationMetrics = this.metrics.filter(m => m.category === 'navigation');
    const resourceMetrics = this.metrics.filter(m => m.category === 'resource');
    const userMetrics = this.metrics.filter(m => m.category === 'user');

    const averageLoadTime = navigationMetrics.length > 0 
      ? navigationMetrics.reduce((sum, m) => sum + m.value, 0) / navigationMetrics.length 
      : 0;

    const slowestResources = resourceMetrics
      .sort((a, b) => b.value - a.value)
      .slice(0, 5)
      .map(m => ({
        name: m.metadata?.name || m.name,
        duration: m.value
      }));

    const recommendations = this.generateRecommendations();

    return {
      sessionId: this.sessionId,
      userId: this.userId,
      timestamp: Date.now(),
      metrics: this.metrics,
      summary: {
        averageLoadTime,
        slowestResources,
        userInteractions: this.userInteractions,
        errors: this.errors,
        recommendations
      }
    };
  }

  private observeNavigationTiming(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            
            this.recordMetric('domContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart, 'navigation');
            this.recordMetric('loadComplete', navEntry.loadEventEnd - navEntry.loadEventStart, 'navigation');
            this.recordMetric('timeToFirstByte', navEntry.responseStart - navEntry.fetchStart, 'navigation');
            this.recordMetric('domInteractive', navEntry.domInteractive - navEntry.fetchStart, 'navigation');
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Navigation timing observation failed:', error);
    }
  }

  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            
            // Only track resources that took more than 100ms
            if (resourceEntry.duration > 100) {
              this.recordMetric('resourceLoad', resourceEntry.duration, 'resource', {
                name: resourceEntry.name,
                type: this.getResourceType(resourceEntry.name),
                size: resourceEntry.transferSize
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Resource timing observation failed:', error);
    }
  }

  private observeLongTasks(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('longTask', entry.duration, 'custom', {
            startTime: entry.startTime,
            name: entry.name
          });
        });
      });

      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Long task observation failed:', error);
    }
  }

  private observeLayoutShifts(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.hadRecentInput) return; // Ignore shifts caused by user input
          
          this.recordMetric('layoutShift', entry.value, 'custom', {
            startTime: entry.startTime,
            sources: entry.sources
          });
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Layout shift observation failed:', error);
    }
  }

  private observeUserInteractions(): void {
    let interactionTimeout: NodeJS.Timeout;

    const recordInteraction = () => {
      this.userInteractions++;
      this.recordMetric('userInteraction', Date.now(), 'user');
      
      // Clear existing timeout
      if (interactionTimeout) {
        clearTimeout(interactionTimeout);
      }
      
      // Set new timeout to group rapid interactions
      interactionTimeout = setTimeout(() => {
        // Interaction session ended
      }, 1000);
    };

    // Track various user interactions
    ['click', 'scroll', 'keydown', 'touchstart'].forEach(eventType => {
      document.addEventListener(eventType, recordInteraction, { passive: true });
    });
  }

  private observeMemoryUsage(): void {
    if (!('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as any).memory;
      this.recordMetric('memoryUsed', memory.usedJSHeapSize, 'custom', {
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
        percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
      });
    };

    // Check memory usage every 30 seconds
    setInterval(checkMemory, 30000);
    checkMemory(); // Initial check
  }

  private observeNetworkConditions(): void {
    if (!('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    
    const recordNetworkInfo = () => {
      this.recordMetric('connectionType', connection.effectiveType === '4g' ? 4 : 3, 'custom', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });
    };

    connection.addEventListener('change', recordNetworkInfo);
    recordNetworkInfo(); // Initial record
  }

  private monitorWebVitals(): void {
    // Monitor Core Web Vitals
    this.measureCLS();
    this.measureFID();
    this.measureFCP();
    this.measureLCP();
    this.measureTTFB();
  }

  private measureCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      
      // Report CLS when page is about to unload
      window.addEventListener('beforeunload', () => {
        this.recordMetric('CLS', clsValue, 'custom');
      });
      
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }
  }

  private measureFID(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('FID', entry.processingStart - entry.startTime, 'custom');
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID measurement failed:', error);
    }
  }

  private measureFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('FCP', entry.startTime, 'custom');
        });
      });

      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }
  }

  private measureLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('LCP', lastEntry.startTime, 'custom', {
          element: lastEntry.element?.tagName,
          url: lastEntry.url
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }
  }

  private measureTTFB(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.recordMetric('TTFB', navigation.responseStart - navigation.fetchStart, 'custom');
    }
  }

  private setupPeriodicReporting(): void {
    // Send performance data every 5 minutes
    this.reportInterval = setInterval(() => {
      this.sendPerformanceReport();
    }, 5 * 60 * 1000);
  }

  private async sendPerformanceReport(): Promise<void> {
    try {
      const report = this.getPerformanceReport();
      
      await fetch('/api/performance-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report)
      });

      console.log('📊 Performance report sent:', report.summary);
    } catch (error) {
      console.warn('Failed to send performance report:', error);
    }
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const report = this.getPerformanceReport();

    // Check load time
    if (report.summary.averageLoadTime > 3000) {
      recommendations.push('Consider optimizing page load time - currently over 3 seconds');
    }

    // Check slow resources
    if (report.summary.slowestResources.length > 0) {
      const slowestResource = report.summary.slowestResources[0];
      if (slowestResource.duration > 1000) {
        recommendations.push(`Optimize slow resource: ${slowestResource.name} (${slowestResource.duration}ms)`);
      }
    }

    // Check memory usage
    const memoryMetrics = this.metrics.filter(m => m.name === 'memoryUsed');
    if (memoryMetrics.length > 0) {
      const latestMemory = memoryMetrics[memoryMetrics.length - 1];
      if (latestMemory.metadata?.percentage > 80) {
        recommendations.push('High memory usage detected - consider optimizing memory leaks');
      }
    }

    // Check long tasks
    const longTasks = this.metrics.filter(m => m.name === 'longTask');
    if (longTasks.length > 5) {
      recommendations.push('Multiple long tasks detected - consider code splitting and optimization');
    }

    return recommendations;
  }

  private recordMetric(name: string, value: number, category: PerformanceMetric['category'], metadata?: Record<string, any>): void {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      category,
      metadata
    });

    // Keep only last 1000 metrics to prevent memory issues
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  private getResourceType(url: string): string {
    if (url.includes('.js')) return 'script';
    if (url.includes('.css')) return 'stylesheet';
    if (url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.gif') || url.includes('.svg')) return 'image';
    if (url.includes('.woff') || url.includes('.ttf') || url.includes('.otf')) return 'font';
    return 'other';
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUserId(): string {
    return localStorage.getItem('userId') || 'anonymous';
  }

  public incrementErrorCount(): void {
    this.errors++;
  }
}

export default AdvancedPerformanceMonitor;
export type { PerformanceMetric, PerformanceReport, WebVitals };