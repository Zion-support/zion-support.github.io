/**
 * Enhanced Performance Monitor
 * Advanced performance monitoring with real-time analytics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category:
    | "navigation"
    | "resource"
    | "paint"
    | "layout"
    | "script"
    | "custom";
  severity: "good" | "needs-improvement" | "poor";
}

export interface PerformanceReport {
  timestamp: number;
  metrics: PerformanceMetric[];
  recommendations: string[];
  overallScore: number;
  userAgent: string;
  connectionType?: string;
}

export interface OptimizationRecommendation {
  type: "critical" | "warning" | "info";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  effort: "low" | "medium" | "high";
  category: "performance" | "accessibility" | "seo" | "security";
}

export interface PerformanceAlert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
  timestamp: number;
  resolved: boolean;
}

class EnhancedPerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private alerts: PerformanceAlert[] = [];
  private observer: PerformanceObserver | null = null;
  private isMonitoring = false;
  private reportInterval: number | null = null;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;
    
    this.setupPerformanceObserver();
    this.startMonitoring();
    this.setupReportInterval();
  }

  private setupPerformanceObserver(): void {
    if (!('PerformanceObserver' in window)) return;

    this.observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.processPerformanceEntry(entry);
      }
    });

    try {
      this.observer.observe({ 
        entryTypes: ['navigation', 'resource', 'paint', 'layout-shift', 'largest-contentful-paint'] 
      });
    } catch (error) {
      console.warn('PerformanceObserver setup failed:', error);
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    const metric: PerformanceMetric = {
      name: entry.name,
      value: entry.startTime,
      timestamp: Date.now(),
      category: this.getCategoryFromEntry(entry),
      severity: this.getSeverityFromValue(entry.startTime, entry.entryType)
    };

    this.metrics.push(metric);
    this.checkForAlerts(metric);
  }

  private getCategoryFromEntry(entry: PerformanceEntry): PerformanceMetric['category'] {
    if (entry.entryType === 'navigation') return 'navigation';
    if (entry.entryType === 'resource') return 'resource';
    if (entry.entryType === 'paint') return 'paint';
    if (entry.entryType === 'layout-shift') return 'layout';
    return 'custom';
  }

  private getSeverityFromValue(value: number, entryType: string): PerformanceMetric['severity'] {
    if (entryType === 'navigation') {
      if (value < 1000) return 'good';
      if (value < 3000) return 'needs-improvement';
      return 'poor';
    }
    
    if (entryType === 'resource') {
      if (value < 500) return 'good';
      if (value < 1500) return 'needs-improvement';
      return 'poor';
    }

    return 'good';
  }

  private checkForAlerts(metric: PerformanceMetric): void {
    if (metric.severity === 'poor') {
      this.addAlert({
        type: 'critical',
        title: `Poor ${metric.category} performance`,
        description: `${metric.name} took ${metric.value}ms`,
        impact: 'high',
        action: 'Optimize this resource',
        timestamp: Date.now(),
        resolved: false
      });
    } else if (metric.severity === 'needs-improvement') {
      this.addAlert({
        type: 'warning',
        title: `${metric.category} needs improvement`,
        description: `${metric.name} performance could be better`,
        impact: 'medium',
        action: 'Consider optimization',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private addAlert(alert: Omit<PerformanceAlert, 'id'>): void {
    const newAlert: PerformanceAlert = {
      ...alert,
      id: `perf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    this.alerts.push(newAlert);
  }

  private startMonitoring(): void {
    this.isMonitoring = true;
    console.log('🚀 Enhanced Performance Monitor started');
  }

  private setupReportInterval(): void {
    this.reportInterval = window.setInterval(() => {
      this.generateReport();
    }, 30000); // Report every 30 seconds
  }

  private generateReport(): void {
    const report: PerformanceReport = {
      timestamp: Date.now(),
      metrics: [...this.metrics],
      recommendations: this.generateRecommendations(),
      overallScore: this.calculateOverallScore(),
      userAgent: navigator.userAgent,
      connectionType: this.getConnectionType()
    };

    console.log('Performance Report:', report);
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    const slowResources = this.metrics.filter(m => 
      m.category === 'resource' && m.severity === 'poor'
    );
    
    if (slowResources.length > 0) {
      recommendations.push('Optimize slow-loading resources');
    }

    const layoutShifts = this.metrics.filter(m => 
      m.category === 'layout' && m.severity === 'poor'
    );
    
    if (layoutShifts.length > 0) {
      recommendations.push('Reduce layout shifts');
    }

    const navigationMetrics = this.metrics.filter(m => 
      m.category === 'navigation' && m.severity === 'poor'
    );
    
    if (navigationMetrics.length > 0) {
      recommendations.push('Improve page load performance');
    }

    return recommendations;
  }

  private calculateOverallScore(): number {
    if (this.metrics.length === 0) return 100;
    
    const goodMetrics = this.metrics.filter(m => m.severity === 'good').length;
    const totalMetrics = this.metrics.length;
    
    return Math.round((goodMetrics / totalMetrics) * 100);
  }

  private getConnectionType(): string {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    return connection ? connection.effectiveType : 'unknown';
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  /**
   * Get performance alerts
   */
  getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  /**
   * Get unresolved alerts
   */
  getUnresolvedAlerts(): PerformanceAlert[] {
    return this.alerts.filter(alert => !alert.resolved);
  }

  /**
   * Resolve an alert
   */
  resolveAlert(alertId: string): void {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
    }
  }

  /**
   * Clear all alerts
   */
  clearAlerts(): void {
    this.alerts = [];
  }

  /**
   * Get performance report
   */
  getReport(): PerformanceReport {
    return {
      timestamp: Date.now(),
      metrics: [...this.metrics],
      recommendations: this.generateRecommendations(),
      overallScore: this.calculateOverallScore(),
      userAgent: navigator.userAgent,
      connectionType: this.getConnectionType()
    };
  }

  /**
   * Get optimization recommendations
   */
  getOptimizationRecommendations(): OptimizationRecommendation[] {
    const recommendations: OptimizationRecommendation[] = [];
    
    const slowResources = this.metrics.filter(m => 
      m.category === 'resource' && m.severity === 'poor'
    );
    
    if (slowResources.length > 0) {
      recommendations.push({
        type: 'critical',
        title: 'Optimize Resource Loading',
        description: 'Some resources are loading slowly, affecting user experience',
        impact: 'high',
        effort: 'medium',
        category: 'performance'
      });
    }

    const layoutIssues = this.metrics.filter(m => 
      m.category === 'layout' && m.severity !== 'good'
    );
    
    if (layoutIssues.length > 0) {
      recommendations.push({
        type: 'warning',
        title: 'Reduce Layout Shifts',
        description: 'Layout shifts are causing visual instability',
        impact: 'medium',
        effort: 'low',
        category: 'performance'
      });
    }

    return recommendations;
  }

  /**
   * Start monitoring
   */
  start(): void {
    if (!this.isMonitoring) {
      this.startMonitoring();
    }
  }

  /**
   * Stop monitoring
   */
  stop(): void {
    this.isMonitoring = false;
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }
  }

  /**
   * Reset all data
   */
  reset(): void {
    this.metrics = [];
    this.alerts = [];
    this.clearAlerts();
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.stop();
    this.reset();
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();