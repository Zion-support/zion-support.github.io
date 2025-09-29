/**
 * Enhanced Performance Monitor
 * Advanced performance monitoring with real-time analytics
 */

<<<<<<< HEAD
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
=======
export interface PerformanceAlert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
  timestamp: number;
  resolved: boolean;
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
}

class EnhancedPerformanceMonitor {
  private alerts: PerformanceAlert[] = [];
  private isMonitoring: boolean = false;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
<<<<<<< HEAD
    this.setupPerformanceObservers();
    this.startPeriodicReporting();
    this.monitorResourceLoading();
    this.monitorUserInteractions();
    this.monitorMemoryUsage();

    console.log("Enhanced Performance Monitor started");
=======
    this.startErrorMonitoring();
    this.startPerformanceMonitoring();
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
  }

  private startErrorMonitoring(): void {
    window.addEventListener('error', (event) => {
      this.trackError(event.error);
    });

<<<<<<< HEAD
    this.isMonitoring = false;
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];

    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }

    console.log("Enhanced Performance Monitor stopped");
  }

  private setupPerformanceObservers(): void {
    // Monitor navigation timing
    if ("PerformanceObserver" in window) {
      try {
        const navObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "navigation") {
              this.recordNavigationMetrics(
                entry as PerformanceNavigationTiming,
              );
            }
          });
        });
        navObserver.observe({ entryTypes: ["navigation"] });
        this.observers.push(navObserver);
      } catch (e) {
        console.warn("Navigation timing observer not supported:", e);
      }

      // Monitor paint timing
      try {
        const paintObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "paint") {
              this.recordPaintMetric(entry as PerformancePaintTiming);
            }
          });
        });
        paintObserver.observe({ entryTypes: ["paint"] });
        this.observers.push(paintObserver);
      } catch (e) {
        console.warn("Paint timing observer not supported:", e);
      }

      // Monitor layout shifts
      try {
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "layout-shift") {
              this.recordLayoutShift(
                entry as PerformanceEntry & { value: number },
              );
            }
          });
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn("Layout shift observer not supported:", e);
      }

      // Monitor long tasks
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "longtask") {
              this.recordLongTask(entry as PerformanceEntry);
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ["longtask"] });
        this.observers.push(longTaskObserver);
      } catch (e) {
        console.warn("Long task observer not supported:", e);
      }
    }
  }

  private recordNavigationMetrics(entry: PerformanceNavigationTiming): void {
    const metrics = [
      {
        name: "TTFB",
        value: entry.responseStart - entry.requestStart,
        category: "navigation" as const,
      },
      {
        name: "DOMContentLoaded",
        value: entry.domContentLoadedEventEnd,
        category: "navigation" as const,
      },
      {
        name: "LoadComplete",
        value: entry.loadEventEnd,
        category: "navigation" as const,
      },
      {
        name: "FirstByte",
        value: entry.responseStart,
        category: "navigation" as const,
      },
      {
        name: "DNS",
        value: entry.domainLookupEnd - entry.domainLookupStart,
        category: "navigation" as const,
      },
      {
        name: "TCP",
        value: entry.connectEnd - entry.connectStart,
        category: "navigation" as const,
      },
      {
        name: "SSL",
        value: entry.secureConnectionStart
          ? entry.connectEnd - entry.secureConnectionStart
          : 0,
        category: "navigation" as const,
      },
    ];

    metrics.forEach((metric) => {
      this.addMetric({
        ...metric,
        timestamp: Date.now(),
        severity: this.getSeverity(metric.name, metric.value),
      });
    });
  }

  private recordPaintMetric(entry: PerformancePaintTiming): void {
    const metric: PerformanceMetric = {
      name: entry.name,
      value: entry.startTime,
      timestamp: Date.now(),
      category: "paint",
      severity: this.getSeverity(entry.name, entry.startTime),
    };

    this.addMetric(metric);
  }

  private recordLayoutShift(entry: PerformanceEntry & { value: number }): void {
    const metric: PerformanceMetric = {
      name: "CLS",
      value: entry.value,
      timestamp: Date.now(),
      category: "layout",
      severity: this.getSeverity("CLS", entry.value),
    };

    this.addMetric(metric);
  }

  private recordLongTask(entry: PerformanceEntry): void {
    const metric: PerformanceMetric = {
      name: "LongTask",
      value: entry.duration,
      timestamp: Date.now(),
      category: "script",
      severity:
        entry.duration > 50
          ? "poor"
          : entry.duration > 25
            ? "needs-improvement"
            : "good",
    };

    this.addMetric(metric);
  }

  private monitorResourceLoading(): void {
    if ("PerformanceObserver" in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "resource") {
              this.recordResourceMetric(entry as PerformanceResourceTiming);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ["resource"] });
        this.observers.push(resourceObserver);
      } catch (e) {
        console.warn("Resource timing observer not supported:", e);
      }
    }
  }

  private recordResourceMetric(entry: PerformanceResourceTiming): void {
    const metric: PerformanceMetric = {
      name: `Resource-${entry.name.split("/").pop()}`,
      value: entry.duration,
      timestamp: Date.now(),
      category: "resource",
      severity: this.getSeverity("Resource", entry.duration),
    };

    this.addMetric(metric);

    // Flag slow resources
    if (entry.duration > 1000) {
      console.warn(
        `Slow resource detected: ${entry.name} took ${entry.duration}ms`,
      );
    }
  }

  private monitorUserInteractions(): void {
    let interactionStart = 0;
    let interactionCount = 0;

    const recordInteraction = () => {
      const now = Date.now();
      if (now - interactionStart > 1000) {
        if (interactionCount > 0) {
          const metric: PerformanceMetric = {
            name: "UserInteractions",
            value: interactionCount,
            timestamp: Date.now(),
            category: "custom",
            severity: "good",
          };
          this.addMetric(metric);
        }
        interactionStart = now;
        interactionCount = 0;
      }
      interactionCount++;
    };

    ["click", "keydown", "scroll", "touchstart"].forEach((eventType) => {
      document.addEventListener(eventType, recordInteraction, {
        passive: true,
      });
    });
  }

  private monitorMemoryUsage(): void {
    if ("memory" in performance) {
      const checkMemory = () => {
        const memory = (
          performance as Performance & {
            memory?: {
              usedJSHeapSize: number;
              totalJSHeapSize: number;
              jsHeapSizeLimit: number;
            };
          }
        ).memory;
        if (!memory) return;

        const metric: PerformanceMetric = {
          name: "MemoryUsage",
          value: memory.usedJSHeapSize / 1024 / 1024, // MB
          timestamp: Date.now(),
          category: "custom",
          severity: this.getSeverity(
            "Memory",
            memory.usedJSHeapSize / 1024 / 1024,
          ),
        };
        this.addMetric(metric);

        // Check for memory leaks
        if (memory.usedJSHeapSize / memory.totalJSHeapSize > 0.9) {
          console.warn("High memory usage detected:", memory);
        }
      };

      setInterval(checkMemory, 10000); // Check every 10 seconds
    }
  }

  private addMetric(metric: PerformanceMetric): void {
    if (!this.metrics.has(metric.name)) {
      this.metrics.set(metric.name, []);
    }

    const metrics = this.metrics.get(metric.name)!;
    metrics.push(metric);

    // Keep only the last 100 metrics per type
    if (metrics.length > 100) {
      metrics.splice(0, metrics.length - 100);
    }
  }

  private getSeverity(
    name: string,
    value: number,
  ): "good" | "needs-improvement" | "poor" {
    const thresholds: Record<
      string,
      { good: number; needsImprovement: number }
    > = {
      TTFB: { good: 800, needsImprovement: 1800 },
      DOMContentLoaded: { good: 1500, needsImprovement: 3000 },
      LoadComplete: { good: 2500, needsImprovement: 4000 },
      FirstByte: { good: 600, needsImprovement: 1500 },
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      FID: { good: 100, needsImprovement: 300 },
      CLS: { good: 0.1, needsImprovement: 0.25 },
      Resource: { good: 100, needsImprovement: 500 },
      Memory: { good: 50, needsImprovement: 100 },
    };

    const threshold = thresholds[name];
    if (!threshold) return "good";

    if (value <= threshold.good) return "good";
    if (value <= threshold.needsImprovement) return "needs-improvement";
    return "poor";
  }

  private startPeriodicReporting(): void {
    this.reportInterval = window.setInterval(() => {
      this.generateReport();
    }, this.REPORT_INTERVAL);
  }

  private generateReport(): PerformanceReport {
    const allMetrics: PerformanceMetric[] = [];
    this.metrics.forEach((metrics) => {
      allMetrics.push(...metrics.slice(-10)); // Last 10 metrics per type
    });

    const recommendations = this.generateRecommendations(allMetrics);
    const overallScore = this.calculateOverallScore(allMetrics);

    const report: PerformanceReport = {
      timestamp: Date.now(),
      metrics: allMetrics,
      recommendations,
      overallScore,
      userAgent: navigator.userAgent,
      connectionType: this.getConnectionType(),
    };

    // Send report to analytics endpoint
    this.sendReport(report);

    return report;
  }

  private generateRecommendations(metrics: PerformanceMetric[]): string[] {
    const recommendations: string[] = [];
    const poorMetrics = metrics.filter((m) => m.severity === "poor");

    poorMetrics.forEach((metric) => {
      switch (metric.name) {
        case "TTFB":
          recommendations.push(
            "Consider implementing server-side caching or CDN to improve Time to First Byte",
          );
          break;
        case "LCP":
          recommendations.push(
            "Optimize largest contentful paint by compressing images and reducing render-blocking resources",
          );
          break;
        case "FID":
          recommendations.push(
            "Reduce JavaScript execution time and eliminate long tasks to improve First Input Delay",
          );
          break;
        case "CLS":
          recommendations.push(
            "Add size attributes to images and avoid inserting content above existing content",
          );
          break;
        case "LongTask":
          recommendations.push(
            "Break up long-running JavaScript tasks using requestIdleCallback or Web Workers",
          );
          break;
        case "Memory":
          recommendations.push(
            "Review memory usage and fix potential memory leaks in JavaScript",
          );
          break;
        default:
          if (metric.name.startsWith("Resource-")) {
            recommendations.push(
              `Optimize resource loading: ${metric.name} is taking too long`,
            );
          }
      }
    });

    return [...new Set(recommendations)]; // Remove duplicates
  }

  private calculateOverallScore(metrics: PerformanceMetric[]): number {
    if (metrics.length === 0) return 100;

    const scores = metrics.map((metric) => {
      switch (metric.severity) {
        case "good":
          return 100;
        case "needs-improvement":
          return 70;
        case "poor":
          return 30;
        default:
          return 50;
      }
    });

    return Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length,
    );
  }

  private getConnectionType(): string | undefined {
    if ("connection" in navigator) {
      return (
        navigator as Navigator & { connection?: { effectiveType?: string } }
      ).connection?.effectiveType;
    }
    return undefined;
  }

  private async sendReport(report: PerformanceReport): Promise<void> {
    try {
      await fetch("/api/performance-reporting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(report),
      });
    } catch (error) {
      console.warn("Failed to send performance report:", error);
    }
  }

  public getMetrics(): Map<string, PerformanceMetric[]> {
    return new Map(this.metrics);
  }

  public getLatestReport(): PerformanceReport | null {
    // This would typically be stored and retrieved from a more persistent source
    return null;
  }

  public getOptimizationRecommendations(): OptimizationRecommendation[] {
    const allMetrics: PerformanceMetric[] = [];
    this.metrics.forEach((metrics) => {
      allMetrics.push(...metrics.slice(-5)); // Last 5 metrics per type
    });

    const recommendations: OptimizationRecommendation[] = [];
    const poorMetrics = allMetrics.filter((m) => m.severity === "poor");

    poorMetrics.forEach((metric) => {
      switch (metric.name) {
        case "TTFB":
          recommendations.push({
            type: "critical",
            title: "Improve Server Response Time",
            description:
              "Time to First Byte is too slow. Consider server optimization, caching, or CDN implementation.",
            impact: "high",
            effort: "medium",
            category: "performance",
          });
          break;
        case "LCP":
          recommendations.push({
            type: "warning",
            title: "Optimize Largest Contentful Paint",
            description:
              "LCP is poor. Optimize images, reduce render-blocking resources, and improve server response times.",
            impact: "high",
            effort: "medium",
            category: "performance",
          });
          break;
        case "CLS":
          recommendations.push({
            type: "warning",
            title: "Fix Cumulative Layout Shift",
            description:
              "CLS is causing poor user experience. Add size attributes to images and avoid dynamic content insertion.",
            impact: "medium",
            effort: "low",
            category: "performance",
=======
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(event.reason);
    });
  }

  private startPerformanceMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });

      observer.observe({ 
        entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
    } catch (error) {
      console.warn('Failed to start performance monitoring:', error);
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'paint':
        if (entry.name === 'first-contentful-paint' && entry.startTime > 1800) {
          this.createAlert({
            type: 'critical',
            title: 'Slow First Contentful Paint',
            description: `FCP is ${entry.startTime.toFixed(0)}ms`,
            impact: 'high',
            action: 'Optimize critical rendering path'
          });
        }
        break;
      case 'largest-contentful-paint':
        if (entry.startTime > 2500) {
          this.createAlert({
            type: 'critical',
            title: 'Slow Largest Contentful Paint',
            description: `LCP is ${entry.startTime.toFixed(0)}ms`,
            impact: 'high',
            action: 'Optimize images and largest content'
          });
        }
        break;
      case 'first-input':
        const fidEntry = entry as PerformanceEventTiming;
        const fid = fidEntry.processingStart - fidEntry.startTime;
        if (fid > 100) {
          this.createAlert({
            type: 'warning',
            title: 'Slow First Input Delay',
            description: `FID is ${fid.toFixed(0)}ms`,
            impact: 'medium',
            action: 'Reduce JavaScript execution time'
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
          });
        }
        break;
      case 'layout-shift':
        const clsEntry = entry as PerformanceEntry & { value: number };
        if (clsEntry.value > 0.1) {
          this.createAlert({
            type: 'warning',
            title: 'High Cumulative Layout Shift',
            description: `CLS is ${clsEntry.value.toFixed(3)}`,
            impact: 'medium',
            action: 'Fix layout shift issues'
          });
        }
        break;
    }
  }

  private trackError(error: Error | any): void {
    this.createAlert({
      type: 'warning',
      title: 'JavaScript Error Detected',
      description: error.message || 'Unknown error occurred',
      impact: 'medium',
      action: 'Check console for details'
    });
  }

  private createAlert(alert: Omit<PerformanceAlert, 'id' | 'timestamp' | 'resolved'>): void {
    const newAlert: PerformanceAlert = {
      ...alert,
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      resolved: false
    };

    this.alerts.push(newAlert);
    
    // Keep only last 50 alerts
    if (this.alerts.length > 50) {
      this.alerts = this.alerts.slice(-50);
    }
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public getActiveAlerts(): PerformanceAlert[] {
    return this.alerts.filter(alert => !alert.resolved);
  }

  public resolveAlert(alertId: string): boolean {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
      return true;
    }
    return false;
  }

  public cleanup(): void {
    this.isMonitoring = false;
  }
}

<<<<<<< HEAD
// Export singleton instance
export const enhancedPerformanceMonitor =
  EnhancedPerformanceMonitor.getInstance();
=======
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();
>>>>>>> 4b999e7e8499b1d439e8efecb8a451947461db54
