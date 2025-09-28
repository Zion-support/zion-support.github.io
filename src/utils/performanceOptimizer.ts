/**
 * Performance Optimizer - Advanced performance monitoring and optimization utilities
 * Provides comprehensive performance tracking, optimization suggestions, and automated improvements
 */

import {
  PerformanceMetrics,
  OptimizationSuggestion,
} from "../types/comprehensive";

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    memory: {
      used: 0,
      total: 0,
      limit: 0,
    },
  };

  private observers: PerformanceObserver[] = [];
  private optimizationSuggestions: OptimizationSuggestion[] = [];
  private isMonitoring = false;

  constructor() {
    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring(): void {
    if (typeof window === "undefined") return;

    // Monitor Core Web Vitals
    this.observeWebVitals();

    // Monitor memory usage
    this.observeMemoryUsage();

    // Monitor bundle performance
    this.observeBundlePerformance();

    // Monitor network performance
    this.observeNetworkPerformance();
  }

  private observeWebVitals(): void {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          this.metrics.fcp = entry.startTime;
          this.analyzeMetric("fcp", entry.startTime);
        }
      });
    });
    fcpObserver.observe({ entryTypes: ["paint"] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      this.analyzeMetric("lcp", lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (
          (entry as PerformanceEventTiming).processingStart &&
          entry.startTime
        ) {
          this.metrics.fid =
            (entry as PerformanceEventTiming).processingStart - entry.startTime;
          this.analyzeMetric("fid", this.metrics.fid);
        }
      });
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
          clsValue += layoutShiftEntry.value;
        }
      });
      this.metrics.cls = clsValue;
      this.analyzeMetric("cls", clsValue);
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });

    this.observers.push(fcpObserver, lcpObserver, fidObserver, clsObserver);
  }

  private observeMemoryUsage(): void {
    if ("memory" in performance) {
      const memory = (
        performance as Performance & {
          memory?: {
            usedJSHeapSize: number;
            totalJSHeapSize: number;
            jsHeapSizeLimit: number;
          };
        }
      ).memory;
      this.metrics.memory = {
        used: memory?.usedJSHeapSize ? memory.usedJSHeapSize / 1024 / 1024 : 0,
        total: memory?.totalJSHeapSize
          ? memory.totalJSHeapSize / 1024 / 1024
          : 0,
        limit: memory?.jsHeapSizeLimit
          ? memory.jsHeapSizeLimit / 1024 / 1024
          : 0,
      };
      this.analyzeMetric("memory", this.metrics.memory.used);
    }
  }

  private observeBundlePerformance(): void {
    // Calculate bundle size
    const scripts = document.querySelectorAll("script[src]");
    let totalSize = 0;
    scripts.forEach((script) => {
      const src = script.getAttribute("src");
      if (src && src.includes("assets")) {
        // Estimate size based on common patterns
        totalSize += 100000; // 100KB estimate per script
      }
    });
    this.metrics.bundleSize = totalSize;
    this.analyzeMetric("bundleSize", totalSize);
  }

  private observeNetworkPerformance(): void {
    if ("connection" in navigator) {
      const connection = (
        navigator as Navigator & { connection?: { effectiveType?: string } }
      ).connection;
      this.metrics.connection = connection?.effectiveType || "unknown";
    }

    // Time to First Byte
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      this.metrics.renderTime =
        navigation.loadEventEnd -
        (navigation.fetchStart || navigation.requestStart);
      this.analyzeMetric("ttfb", this.metrics.ttfb);
    }
  }

  private analyzeMetric(metric: string, value: number): void {
    const thresholds = this.getThresholds(metric);
    const suggestion = this.generateSuggestion(metric, value, thresholds);

    if (suggestion) {
      this.optimizationSuggestions.push(suggestion);
      this.notifyOptimization(suggestion);
    }
  }

  private getThresholds(metric: string): { good: number; poor: number } {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      memory: { good: 50, poor: 100 },
      bundleSize: { good: 500000, poor: 1000000 }, // 500KB, 1MB
    };

    return (
      thresholds[metric as keyof typeof thresholds] || { good: 0, poor: 1000 }
    );
  }

  private generateSuggestion(
    metric: string,
    value: number,
    thresholds: { good: number; poor: number },
  ): OptimizationSuggestion | null {
    if (value <= thresholds.good) return null;

    const suggestions = {
      fcp: {
        warning: {
          id: "fcp-warning",
          type: "warning" as const,
          title: "First Contentful Paint Warning",
          description: "First Contentful Paint is slower than recommended",
          category: "performance" as const,
          message: "First Contentful Paint is slower than recommended",
          impact: "high" as const,
          effort: "medium" as const,
          priority: "medium" as const,
          actionable: true,
          action:
            "Consider optimizing critical rendering path and reducing render-blocking resources",
        },
        critical: {
          id: "fcp-critical",
          type: "critical" as const,
          title: "First Contentful Paint Critical",
          description: "First Contentful Paint is significantly slow",
          category: "performance" as const,
          message: "First Contentful Paint is significantly slow",
          impact: "high" as const,
          effort: "high" as const,
          priority: "high" as const,
          actionable: true,
          action:
            "Implement critical CSS inlining and optimize above-the-fold content",
        },
      },
      lcp: {
        warning: {
          id: "lcp-warning",
          type: "warning" as const,
          title: "Largest Contentful Paint Warning",
          description: "Largest Contentful Paint is slower than recommended",
          category: "performance" as const,
          message: "Largest Contentful Paint is slower than recommended",
          impact: "high" as const,
          effort: "medium" as const,
          priority: "medium" as const,
          actionable: true,
          action: "Optimize images and reduce layout shifts",
        },
        critical: {
          id: "lcp-critical",
          type: "critical" as const,
          title: "Largest Contentful Paint Critical",
          description: "Largest Contentful Paint is significantly slow",
          category: "performance" as const,
          message: "Largest Contentful Paint is significantly slow",
          impact: "high" as const,
          effort: "high" as const,
          priority: "high" as const,
          actionable: true,
          action: "Implement image optimization and lazy loading",
        },
      },
      fid: {
        warning: {
          id: "fid-warning",
          type: "warning" as const,
          title: "First Input Delay Warning",
          description: "First Input Delay is higher than recommended",
          category: "performance" as const,
          message: "First Input Delay is higher than recommended",
          impact: "medium" as const,
          effort: "medium" as const,
          priority: "medium" as const,
          actionable: true,
          action:
            "Reduce JavaScript execution time and optimize event handlers",
        },
        critical: {
          id: "fid-critical",
          type: "critical" as const,
          title: "First Input Delay Critical",
          description: "First Input Delay is significantly high",
          category: "performance" as const,
          message: "First Input Delay is significantly high",
          impact: "high" as const,
          effort: "high" as const,
          priority: "high" as const,
          actionable: true,
          action: "Implement code splitting and optimize main thread usage",
        },
      },
      cls: {
        warning: {
          id: "cls-warning",
          type: "warning" as const,
          title: "Cumulative Layout Shift Warning",
          description: "Cumulative Layout Shift is higher than recommended",
          category: "performance" as const,
          message: "Cumulative Layout Shift is higher than recommended",
          impact: "medium" as const,
          effort: "medium" as const,
          priority: "medium" as const,
          actionable: true,
          action: "Reserve space for dynamic content and avoid layout shifts",
        },
        critical: {
          id: "cls-critical",
          type: "critical" as const,
          title: "Cumulative Layout Shift Critical",
          description: "Cumulative Layout Shift is significantly high",
          category: "performance" as const,
          message: "Cumulative Layout Shift is significantly high",
          impact: "high" as const,
          effort: "high" as const,
          priority: "high" as const,
          actionable: true,
          action:
            "Fix layout shifts and implement proper sizing for dynamic content",
        },
      },
      memory: {
        warning: {
          id: "memory-warning",
          type: "warning" as const,
          title: "Memory Usage Warning",
          description: "Memory usage is higher than recommended",
          category: "performance" as const,
          message: "Memory usage is higher than recommended",
          impact: "medium" as const,
          effort: "medium" as const,
          priority: "medium" as const,
          actionable: true,
          action: "Implement memory cleanup and optimize object creation",
        },
        critical: {
          id: "memory-critical",
          type: "critical" as const,
          title: "Memory Usage Critical",
          description: "Memory usage is significantly high",
          category: "performance" as const,
          message: "Memory usage is significantly high",
          impact: "high" as const,
          effort: "high" as const,
          priority: "high" as const,
          actionable: true,
          action: "Implement memory leaks detection and cleanup strategies",
        },
      },
      bundleSize: {
        warning: {
          id: "bundle-warning",
          type: "warning" as const,
          title: "Bundle Size Warning",
          description: "Bundle size is larger than recommended",
          category: "performance" as const,
          message: "Bundle size is larger than recommended",
          impact: "medium" as const,
          effort: "medium" as const,
          priority: "medium" as const,
          actionable: true,
          action: "Implement code splitting and tree shaking",
        },
        critical: {
          id: "bundle-critical",
          type: "critical" as const,
          title: "Bundle Size Critical",
          description: "Bundle size is significantly large",
          category: "performance" as const,
          message: "Bundle size is significantly large",
          impact: "high" as const,
          effort: "high" as const,
          priority: "high" as const,
          actionable: true,
          action:
            "Implement aggressive code splitting and remove unused dependencies",
        },
      },
    };

    const metricSuggestions = suggestions[metric as keyof typeof suggestions];
    if (!metricSuggestions) return null;

    if (value > thresholds.poor) {
      return metricSuggestions.critical;
    } else if (value > thresholds.good) {
      return metricSuggestions.warning;
    }

    return null;
  }

  private notifyOptimization(suggestion: OptimizationSuggestion): void {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      const emoji =
        suggestion.type === "critical"
          ? "🚨"
          : suggestion.type === "warning"
            ? "⚠️"
            : "ℹ️";
      console.log(`${emoji} Performance Optimization: ${suggestion.message}`);
      if (suggestion.action) {
        console.log(`💡 Action: ${suggestion.action}`);
      }
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production" && "gtag" in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        "performance_optimization",
        {
          suggestion_type: suggestion.type,
          category: suggestion.category,
          impact: suggestion.impact,
          message: suggestion.message,
        },
      );
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getSuggestions(): OptimizationSuggestion[] {
    return [...this.optimizationSuggestions];
  }

  public getCriticalSuggestions(): OptimizationSuggestion[] {
    return this.optimizationSuggestions.filter((s) => s.type === "critical");
  }

  public getWarningSuggestions(): OptimizationSuggestion[] {
    return this.optimizationSuggestions.filter((s) => s.type === "warning");
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    const suggestions = this.getSuggestions();

    let report = "Performance Report\n";
    report += "================\n\n";

    report += "Core Web Vitals:\n";
    report += `- FCP: ${(metrics.fcp || 0).toFixed(0)}ms\n`;
    report += `- LCP: ${(metrics.lcp || 0).toFixed(0)}ms\n`;
    report += `- FID: ${(metrics.fid || 0).toFixed(0)}ms\n`;
    report += `- CLS: ${(metrics.cls || 0).toFixed(3)}\n`;
    report += `- TTFB: ${(metrics.ttfb || 0).toFixed(0)}ms\n\n`;

    if (metrics.memory) {
      report += `Memory Usage: ${metrics.memory.used.toFixed(1)}MB\n`;
    }

    if (metrics.bundleSize) {
      report += `Bundle Size: ${(metrics.bundleSize / 1024).toFixed(1)}KB\n`;
    }

    if (suggestions.length > 0) {
      report += "\nOptimization Suggestions:\n";
      suggestions.forEach((suggestion, index) => {
        const emoji =
          suggestion.type === "critical"
            ? "🚨"
            : suggestion.type === "warning"
              ? "⚠️"
              : "ℹ️";
        report += `${index + 1}. ${emoji} ${suggestion.message}\n`;
        if (suggestion.action) {
          report += `   Action: ${suggestion.action}\n`;
        }
      });
    }

    return report;
  }

  public startMonitoring(): void {
    this.isMonitoring = true;
    this.initializePerformanceMonitoring();
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }

  public clearSuggestions(): void {
    this.optimizationSuggestions = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export types
export type { PerformanceMetrics, OptimizationSuggestion };
