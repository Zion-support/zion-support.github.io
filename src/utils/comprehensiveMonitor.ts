/**
 * Comprehensive Monitoring System
 * Advanced monitoring for performance, errors, user behavior, and system health
 */

interface MonitoringConfig {
  enablePerformanceMonitoring: boolean;
  enableErrorMonitoring: boolean;
  enableUserBehaviorMonitoring: boolean;
  enableSystemHealthMonitoring: boolean;
  enableRealTimeMonitoring: boolean;
  enableAnalytics: boolean;
  enableReporting: boolean;
  samplingRate: number; // 0-1
  reportInterval: number; // milliseconds
  retentionPeriod: number; // days
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface ErrorMetrics {
  totalErrors: number;
  errorRate: number;
  criticalErrors: number;
  warningErrors: number;
  errorTypes: Record<string, number>;
  errorLocations: Record<string, number>;
  errorTrends: Array<{ timestamp: number; count: number }>;
}

interface UserBehaviorMetrics {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  userJourney: Array<{ page: string; timestamp: number; duration: number }>;
  deviceTypes: Record<string, number>;
  browserTypes: Record<string, number>;
  geographicData: Record<string, number>;
}

interface SystemHealthMetrics {
  uptime: number;
  responseTime: number;
  throughput: number;
  errorRate: number;
  resourceUtilization: {
    cpu: number;
    memory: number;
    disk: number;
    network: number;
  };
  dependencies: Array<{
    name: string;
    status: 'healthy' | 'degraded' | 'down';
    responseTime: number;
    lastCheck: number;
  }>;
}

interface MonitoringReport {
  timestamp: number;
  performance: PerformanceMetrics;
  errors: ErrorMetrics;
  userBehavior: UserBehaviorMetrics;
  systemHealth: SystemHealthMetrics;
  alerts: Array<{
    type: 'performance' | 'error' | 'system' | 'security';
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    timestamp: number;
  }>;
  recommendations: string[];
  overallHealth: 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
}

class ComprehensiveMonitor {
  private config: MonitoringConfig;
  private reports: MonitoringReport[] = [];
  private isRunning = false;
  private intervalId?: NodeJS.Timeout;
  private eventListeners: Array<() => void> = [];

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = {
      enablePerformanceMonitoring: true,
      enableErrorMonitoring: true,
      enableUserBehaviorMonitoring: true,
      enableSystemHealthMonitoring: true,
      enableRealTimeMonitoring: true,
      enableAnalytics: true,
      enableReporting: true,
      samplingRate: 0.1, // 10% sampling
      reportInterval: 60000, // 1 minute
      retentionPeriod: 30, // 30 days
      ...config,
    };
  }

  /**
   * Initialize the monitoring system
   */
  async initialize(): Promise<void> {
    console.log('🚀 Initializing Comprehensive Monitoring System...');

    // Initialize performance monitoring
    if (this.config.enablePerformanceMonitoring) {
      await this.initializePerformanceMonitoring();
    }

    // Initialize error monitoring
    if (this.config.enableErrorMonitoring) {
      await this.initializeErrorMonitoring();
    }

    // Initialize user behavior monitoring
    if (this.config.enableUserBehaviorMonitoring) {
      await this.initializeUserBehaviorMonitoring();
    }

    // Initialize system health monitoring
    if (this.config.enableSystemHealthMonitoring) {
      await this.initializeSystemHealthMonitoring();
    }

    // Start real-time monitoring
    if (this.config.enableRealTimeMonitoring) {
      this.startRealTimeMonitoring();
    }

    console.log('✅ Comprehensive Monitoring System initialized successfully');
  }

  /**
   * Initialize performance monitoring
   */
  private async initializePerformanceMonitoring(): Promise<void> {
    console.log('⚡ Initializing performance monitoring...');

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.recordPerformanceMetric('firstContentfulPaint', entry.startTime);
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordPerformanceMetric(
          'largestContentfulPaint',
          lastEntry.startTime,
        );
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver(list => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordPerformanceMetric('cumulativeLayoutShift', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        list.getEntries().forEach((entry: any) => {
          this.recordPerformanceMetric(
            'firstInputDelay',
            entry.processingStart - entry.startTime,
          );
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }

    // Monitor page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        this.recordPerformanceMetric('loadTime', loadTime);
      });
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  /**
   * Initialize error monitoring
   */
  private async initializeErrorMonitoring(): Promise<void> {
    console.log('🚨 Initializing error monitoring...');

    if (typeof window !== 'undefined') {
      // Global error handler
      const errorHandler = (event: ErrorEvent) => {
        this.recordError('javascript', event.error?.message || event.message, {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          stack: event.error?.stack,
        });
      };

      // Unhandled promise rejection handler
      const rejectionHandler = (event: PromiseRejectionEvent) => {
        this.recordError(
          'promise',
          event.reason?.message || 'Unhandled promise rejection',
          {
            stack: event.reason?.stack,
          },
        );
      };

      window.addEventListener('error', errorHandler);
      window.addEventListener('unhandledrejection', rejectionHandler);

      this.eventListeners.push(() => {
        window.removeEventListener('error', errorHandler);
        window.removeEventListener('unhandledrejection', rejectionHandler);
      });
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  /**
   * Initialize user behavior monitoring
   */
  private async initializeUserBehaviorMonitoring(): Promise<void> {
    console.log('👤 Initializing user behavior monitoring...');

    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        this.recordUserBehavior('pageView', {
          page: window.location.pathname,
          timestamp: Date.now(),
        });
      };

      // Track clicks
      const trackClick = (event: MouseEvent) => {
        this.recordUserBehavior('click', {
          element: (event.target as Element)?.tagName,
          page: window.location.pathname,
          timestamp: Date.now(),
        });
      };

      // Track scroll
      let scrollTimeout: NodeJS.Timeout;
      const trackScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          this.recordUserBehavior('scroll', {
            page: window.location.pathname,
            scrollY: window.scrollY,
            timestamp: Date.now(),
          });
        }, 100);
      };

      // Track form interactions
      const trackFormInteraction = (event: Event) => {
        this.recordUserBehavior('formInteraction', {
          element: (event.target as Element)?.tagName,
          page: window.location.pathname,
          timestamp: Date.now(),
        });
      };

      // Add event listeners
      window.addEventListener('load', trackPageView);
      window.addEventListener('click', trackClick);
      window.addEventListener('scroll', trackScroll);
      document.addEventListener('input', trackFormInteraction);
      document.addEventListener('submit', trackFormInteraction);

      this.eventListeners.push(() => {
        window.removeEventListener('load', trackPageView);
        window.removeEventListener('click', trackClick);
        window.removeEventListener('scroll', trackScroll);
        document.removeEventListener('input', trackFormInteraction);
        document.removeEventListener('submit', trackFormInteraction);
      });
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  /**
   * Initialize system health monitoring
   */
  private async initializeSystemHealthMonitoring(): Promise<void> {
    console.log('🏥 Initializing system health monitoring...');

    // Monitor system resources
    if (typeof window !== 'undefined' && 'performance' in window) {
      const monitorResources = () => {
        const memory = (performance as any).memory;
        if (memory) {
          this.recordSystemHealth('memory', {
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit,
          });
        }
      };

      // Monitor every 30 seconds
      const resourceInterval = setInterval(monitorResources, 30000);
      this.eventListeners.push(() => clearInterval(resourceInterval));
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  /**
   * Start real-time monitoring
   */
  private startRealTimeMonitoring(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.intervalId = setInterval(async () => {
      try {
        await this.generateMonitoringReport();
      } catch (error) {
        console.error('❌ Monitoring cycle failed:', error);
      }
    }, this.config.reportInterval);

    console.log(
      `🔄 Real-time monitoring started (interval: ${this.config.reportInterval}ms)`,
    );
  }

  /**
   * Stop real-time monitoring
   */
  stopRealTimeMonitoring(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    this.isRunning = false;
    console.log('⏹️ Real-time monitoring stopped');
  }

  /**
   * Generate monitoring report
   */
  async generateMonitoringReport(): Promise<MonitoringReport> {
    console.log('📊 Generating monitoring report...');

    const report: MonitoringReport = {
      timestamp: Date.now(),
      performance: await this.collectPerformanceMetrics(),
      errors: await this.collectErrorMetrics(),
      userBehavior: await this.collectUserBehaviorMetrics(),
      systemHealth: await this.collectSystemHealthMetrics(),
      alerts: [],
      recommendations: [],
      overallHealth: 'good',
    };

    // Generate alerts
    report.alerts = this.generateAlerts(report);

    // Generate recommendations
    report.recommendations = this.generateRecommendations(report);

    // Determine overall health
    report.overallHealth = this.determineOverallHealth(report);

    // Save report
    this.reports.push(report);

    // Clean up old reports
    this.cleanupOldReports();

    console.log(
      `📈 Monitoring report generated. Overall health: ${report.overallHealth}`,
    );

    return report;
  }

  /**
   * Collect performance metrics
   */
  private async collectPerformanceMetrics(): Promise<PerformanceMetrics> {
    const metrics: PerformanceMetrics = {
      loadTime: 0,
      renderTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0,
      bundleSize: 0,
      memoryUsage: 0,
      cpuUsage: 0,
    };

    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType(
        'navigation',
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        metrics.renderTime =
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart;
        metrics.timeToInteractive =
          navigation.domInteractive - navigation.fetchStart;
      }

      const memory = (performance as any).memory;
      if (memory) {
        metrics.memoryUsage = memory.usedJSHeapSize;
      }
    }

    return metrics;
  }

  /**
   * Collect error metrics
   */
  private async collectErrorMetrics(): Promise<ErrorMetrics> {
    // This would typically come from a persistent error store
    return {
      totalErrors: 0,
      errorRate: 0,
      criticalErrors: 0,
      warningErrors: 0,
      errorTypes: {},
      errorLocations: {},
      errorTrends: [],
    };
  }

  /**
   * Collect user behavior metrics
   */
  private async collectUserBehaviorMetrics(): Promise<UserBehaviorMetrics> {
    // This would typically come from analytics data
    return {
      pageViews: 0,
      uniqueVisitors: 0,
      sessionDuration: 0,
      bounceRate: 0,
      conversionRate: 0,
      userJourney: [],
      deviceTypes: {},
      browserTypes: {},
      geographicData: {},
    };
  }

  /**
   * Collect system health metrics
   */
  private async collectSystemHealthMetrics(): Promise<SystemHealthMetrics> {
    return {
      uptime: Date.now(),
      responseTime: 0,
      throughput: 0,
      errorRate: 0,
      resourceUtilization: {
        cpu: 0,
        memory: 0,
        disk: 0,
        network: 0,
      },
      dependencies: [],
    };
  }

  /**
   * Record performance metric
   */
  private recordPerformanceMetric(metric: string, value: number): void {
    // Store metric for later analysis
    console.log(`📊 Performance metric recorded: ${metric} = ${value}ms`);
  }

  /**
   * Record error
   */
  private recordError(type: string, message: string, details: any): void {
    console.error(`🚨 Error recorded: ${type} - ${message}`, details);
  }

  /**
   * Record user behavior
   */
  private recordUserBehavior(action: string, data: any): void {
    if (Math.random() < this.config.samplingRate) {
      console.log(`👤 User behavior recorded: ${action}`, data);
    }
  }

  /**
   * Record system health
   */
  private recordSystemHealth(metric: string, value: any): void {
    console.log(`🏥 System health recorded: ${metric}`, value);
  }

  /**
   * Generate alerts
   */
  private generateAlerts(report: MonitoringReport): Array<{
    type: 'performance' | 'error' | 'system' | 'security';
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    timestamp: number;
  }> {
    const alerts: Array<{
      type: 'performance' | 'error' | 'system' | 'security';
      severity: 'low' | 'medium' | 'high' | 'critical';
      message: string;
      timestamp: number;
    }> = [];

    // Performance alerts
    if (report.performance.loadTime > 3000) {
      alerts.push({
        type: 'performance',
        severity: 'high',
        message: 'Page load time exceeds 3 seconds',
        timestamp: Date.now(),
      });
    }

    if (report.performance.firstContentfulPaint > 1500) {
      alerts.push({
        type: 'performance',
        severity: 'medium',
        message: 'First Contentful Paint exceeds 1.5 seconds',
        timestamp: Date.now(),
      });
    }

    // Error alerts
    if (report.errors.errorRate > 0.01) {
      alerts.push({
        type: 'error',
        severity: 'high',
        message: 'Error rate exceeds 1%',
        timestamp: Date.now(),
      });
    }

    return alerts;
  }

  /**
   * Generate recommendations
   */
  private generateRecommendations(report: MonitoringReport): string[] {
    const recommendations: string[] = [];

    if (report.performance.loadTime > 2000) {
      recommendations.push(
        'Optimize page load time by reducing bundle size and implementing lazy loading',
      );
    }

    if (report.performance.firstContentfulPaint > 1000) {
      recommendations.push(
        'Improve First Contentful Paint by optimizing critical rendering path',
      );
    }

    if (report.errors.errorRate > 0.005) {
      recommendations.push(
        'Investigate and fix JavaScript errors to improve user experience',
      );
    }

    recommendations.push('Implement continuous monitoring and alerting');
    recommendations.push('Regular performance audits and optimization reviews');

    return recommendations;
  }

  /**
   * Determine overall health
   */
  private determineOverallHealth(
    report: MonitoringReport,
  ): 'excellent' | 'good' | 'fair' | 'poor' | 'critical' {
    let score = 100;

    // Deduct points for performance issues
    if (report.performance.loadTime > 3000) score -= 20;
    else if (report.performance.loadTime > 2000) score -= 10;

    if (report.performance.firstContentfulPaint > 1500) score -= 15;
    else if (report.performance.firstContentfulPaint > 1000) score -= 8;

    // Deduct points for errors
    if (report.errors.errorRate > 0.01) score -= 25;
    else if (report.errors.errorRate > 0.005) score -= 15;

    // Deduct points for alerts
    score -= report.alerts.length * 5;

    if (score >= 90) return 'excellent';
    if (score >= 75) return 'good';
    if (score >= 60) return 'fair';
    if (score >= 40) return 'poor';
    return 'critical';
  }

  /**
   * Clean up old reports
   */
  private cleanupOldReports(): void {
    const cutoffTime =
      Date.now() - this.config.retentionPeriod * 24 * 60 * 60 * 1000;
    this.reports = this.reports.filter(report => report.timestamp > cutoffTime);
  }

  /**
   * Get monitoring dashboard data
   */
  getDashboardData(): {
    overallHealth: string;
    recentReports: MonitoringReport[];
    alerts: Array<{
      type: string;
      severity: string;
      message: string;
      timestamp: number;
    }>;
    statistics: {
      totalReports: number;
      averageLoadTime: number;
      errorRate: number;
      uptime: number;
    };
  } {
    const latestReport = this.reports[this.reports.length - 1];
    const totalReports = this.reports.length;
    const averageLoadTime =
      totalReports > 0
        ? this.reports.reduce((sum, r) => sum + r.performance.loadTime, 0) /
          totalReports
        : 0;
    const errorRate = latestReport?.errors.errorRate || 0;
    const uptime = latestReport?.systemHealth.uptime || 0;

    return {
      overallHealth: latestReport?.overallHealth || 'unknown',
      recentReports: this.reports.slice(-10),
      alerts: latestReport?.alerts || [],
      statistics: {
        totalReports,
        averageLoadTime: Math.round(averageLoadTime),
        errorRate: Math.round(errorRate * 10000) / 100, // Convert to percentage
        uptime: Math.round(uptime / 1000 / 60), // Convert to minutes
      },
    };
  }

  /**
   * Export monitoring data
   */
  exportData(): string {
    return JSON.stringify(
      {
        config: this.config,
        reports: this.reports,
        dashboardData: this.getDashboardData(),
      },
      null,
      2,
    );
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.stopRealTimeMonitoring();
    this.eventListeners.forEach(cleanup => cleanup());
    this.eventListeners = [];
    console.log('🧹 Comprehensive Monitor cleaned up');
  }
}

// Export singleton instance
export const comprehensiveMonitor = new ComprehensiveMonitor();

// Export types and class for advanced usage
export type {
  MonitoringConfig,
  PerformanceMetrics,
  ErrorMetrics,
  UserBehaviorMetrics,
  SystemHealthMetrics,
  MonitoringReport,
};
export { ComprehensiveMonitor };
