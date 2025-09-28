/**
 * Performance Alerts System
 * Provides real-time performance monitoring and alerting
 */

interface PerformanceAlert {
  metric: string;
  value: number;
  threshold: number;
  severity: "low" | "medium" | "high" | "critical";
  suggestion: string;
  timestamp: number;
}

class PerformanceAlerts {
  private alerts: PerformanceAlert[] = [];
  private thresholds = {
    loadTime: 3000,
    renderTime: 1000,
    memoryUsage: 50 * 1024 * 1024,
    firstContentfulPaint: 2000,
    largestContentfulPaint: 4000,
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100,
  };

  checkMetric(metric: string, value: number, threshold: number): void {
    if (value > threshold) {
      const severity = this.getSeverity(value, threshold);
      const suggestion = this.getSuggestion(metric);

      const alert: PerformanceAlert = {
        metric,
        value,
        threshold,
        severity,
        suggestion,
        timestamp: Date.now(),
      };

      this.alerts.push(alert);
      this.handleAlert(alert);
    }
  }

  private getSeverity(
    value: number,
    threshold: number,
  ): "low" | "medium" | "high" | "critical" {
    const ratio = value / threshold;
    if (ratio >= 3) return "critical";
    if (ratio >= 2) return "high";
    if (ratio >= 1.5) return "medium";
    return "low";
  }

  private getSuggestion(metric: string): string {
    const suggestions: Record<string, string> = {
      loadTime: "Consider code splitting and lazy loading",
      renderTime: "Optimize component rendering and use React.memo",
      memoryUsage: "Check for memory leaks and optimize data structures",
      firstContentfulPaint: "Optimize critical rendering path",
      largestContentfulPaint: "Optimize images and fonts",
      cumulativeLayoutShift: "Set explicit dimensions for images",
      firstInputDelay: "Reduce JavaScript execution time",
    };
    return suggestions[metric] || "Consider general performance optimizations";
  }

  private handleAlert(alert: PerformanceAlert): void {
    const emoji = { low: "⚠️", medium: "🔶", high: "🔴", critical: "🚨" }[
      alert.severity
    ];
    console.warn(`${emoji} Performance Alert: ${alert.metric}`, alert);

    window.dispatchEvent(
      new CustomEvent("performanceAlert", { detail: alert }),
    );
  }

  getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  clearAlerts(): void {
    this.alerts = [];
  }
}

export const performanceAlerts = new PerformanceAlerts();
export type { PerformanceAlert };
