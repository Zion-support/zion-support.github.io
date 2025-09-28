/**
 * Advanced Error Tracker
 * Comprehensive error tracking and reporting system for the Zion Tech Group website
 */

export interface ErrorInfo {
  id: string;
  message: string;
  stack?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  timestamp: Date;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId: string;
  severity: "low" | "medium" | "high" | "critical";
  category: "javascript" | "network" | "promise" | "resource" | "custom";
  context: Record<string, unknown>;
  resolved: boolean;
  resolvedAt?: Date;
  resolvedBy?: string;
}

export interface ErrorStats {
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  errorsByHour: Record<string, number>;
  averageErrorsPerSession: number;
  errorRate: number; // errors per 1000 page views
  topErrors: Array<{ message: string; count: number }>;
  recentErrors: ErrorInfo[];
}

export interface ErrorFilter {
  category?: string;
  severity?: string;
  dateRange?: { start: Date; end: Date };
  resolved?: boolean;
  userId?: string;
}

class AdvancedErrorTracker {
  private errors: ErrorInfo[] = [];
  private sessionId: string;
  private userId?: string;
  private isEnabled: boolean = true;
  private maxErrors: number = 1000;
  private reportEndpoint?: string;
  private filters: ErrorFilter = {};

  constructor(
    config: {
      maxErrors?: number;
      reportEndpoint?: string;
      userId?: string;
    } = {},
  ) {
    this.maxErrors = config.maxErrors || 1000;
    this.reportEndpoint = config.reportEndpoint;
    this.userId = config.userId;
    this.sessionId = this.generateSessionId();

    this.initializeErrorTracking();
  }

  private generateSessionId(): string {
    return (
      "session_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now()
    );
  }

  private initializeErrorTracking(): void {
    if (typeof window === "undefined") return;

    // Global error handler
    window.addEventListener("error", (event) => {
      this.trackError({
        message: event.message,
        stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        category: "javascript",
        severity: this.determineSeverity(event.error),
        context: {
          type: event.type,
          target: event.target?.constructor?.name,
          isTrusted: event.isTrusted,
        },
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener("unhandledrejection", (event) => {
      this.trackError({
        message: event.reason?.message || "Unhandled Promise Rejection",
        stack: event.reason?.stack,
        category: "promise",
        severity: this.determineSeverity(event.reason),
        context: {
          reason: event.reason,
          promise: event.promise,
        },
      });
    });

    // Resource loading error handler
    window.addEventListener(
      "error",
      (event) => {
        if (event.target !== window) {
          this.trackError({
            message: `Failed to load resource: ${(event.target as HTMLElement)?.getAttribute("src") || (event.target as HTMLElement)?.getAttribute("href")}`,
            filename:
              (event.target as HTMLElement)?.getAttribute("src") ||
              (event.target as HTMLElement)?.getAttribute("href") ||
              undefined,
            category: "resource",
            severity: "medium",
            context: {
              tagName: (event.target as HTMLElement)?.tagName,
              src: (event.target as HTMLElement)?.getAttribute("src"),
              href: (event.target as HTMLElement)?.getAttribute("href"),
            },
          });
        }
      },
      true,
    );

    // Network error tracking
    this.trackNetworkErrors();

    // Performance error tracking
    this.trackPerformanceErrors();
  }

  private trackNetworkErrors(): void {
    const originalFetch = window.fetch;
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;

    // Track fetch errors
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.trackError({
            message: `HTTP ${response.status}: ${response.statusText}`,
            category: "network",
            severity: response.status >= 500 ? "high" : "medium",
            context: {
              url: args[0],
              status: response.status,
              statusText: response.statusText,
              method: "fetch",
            },
          });
        }
        return response;
      } catch (error) {
        this.trackError({
          message: `Fetch error: ${(error as any).message}`,
          stack: (error as any).stack,
          category: "network",
          severity: "high",
          context: {
            url: args[0],
            method: "fetch",
            error: (error as any).message,
          },
        });
        throw error;
      }
    };

    // Track XMLHttpRequest errors
    XMLHttpRequest.prototype.open = function (
      method,
      url,
      async = true,
      user = null,
      password = null,
    ) {
      (this as any)._method = method;
      (this as any)._url = url;
      return originalXHROpen.call(
        this,
        method,
        url,
        async as boolean,
        user as string | null,
        password as string | null,
      );
    };

    XMLHttpRequest.prototype.send = function (...args) {
      this.addEventListener("error", () => {
        (this as any).trackError({
          message: `XHR error: ${this.status} ${this.statusText}`,
          category: "network",
          severity: this.status >= 500 ? "high" : "medium",
          context: {
            url: (this as any)._url,
            method: (this as any)._method,
            status: this.status,
            statusText: this.statusText,
          },
        });
      });
      return originalXHRSend.call(this, ...args);
    };
  }

  private trackPerformanceErrors(): void {
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === "navigation") {
              const navEntry = entry as PerformanceNavigationTiming;
              if (navEntry.loadEventEnd - navEntry.loadEventStart > 5000) {
                this.trackError({
                  message: "Page load timeout",
                  category: "custom",
                  severity: "medium",
                  context: {
                    loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
                    domContentLoaded:
                      navEntry.domContentLoadedEventEnd -
                      navEntry.domContentLoadedEventStart,
                    firstPaint: navEntry.responseEnd - navEntry.requestStart,
                  },
                });
              }
            }
          });
        });
        observer.observe({ entryTypes: ["navigation"] });
      } catch (error) {
        console.warn("Performance Observer not supported:", error);
      }
    }
  }

  private determineSeverity(
    error: unknown,
  ): "low" | "medium" | "high" | "critical" {
    if (!error) return "medium";

    const message = (error as any).message?.toLowerCase() || "";
    // Stack trace is available but not used in this implementation

    // Critical errors
    if (
      message.includes("out of memory") ||
      message.includes("maximum call stack") ||
      message.includes("cannot read property") ||
      message.includes("cannot read properties")
    ) {
      return "critical";
    }

    // High severity errors
    if (
      message.includes("network error") ||
      message.includes("timeout") ||
      message.includes("failed to fetch") ||
      message.includes("cors")
    ) {
      return "high";
    }

    // Medium severity errors
    if (
      message.includes("undefined") ||
      message.includes("null") ||
      message.includes("typeerror")
    ) {
      return "medium";
    }

    return "low";
  }

  public trackError(errorData: {
    message: string;
    stack?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    category: "javascript" | "network" | "promise" | "resource" | "custom";
    severity: "low" | "medium" | "high" | "critical";
    context?: Record<string, unknown>;
  }): void {
    if (!this.isEnabled) return;

    const error: ErrorInfo = {
      id: this.generateErrorId(),
      message: errorData.message,
      stack: errorData.stack,
      filename: errorData.filename,
      lineno: errorData.lineno,
      colno: errorData.colno,
      timestamp: new Date(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId: this.userId,
      sessionId: this.sessionId,
      severity: errorData.severity,
      category: errorData.category,
      context: errorData.context || {},
      resolved: false,
    };

    this.errors.push(error);

    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Send to reporting endpoint
    if (this.reportEndpoint) {
      this.sendErrorReport(error);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error tracked:", error);
    }
  }

  private generateErrorId(): string {
    return (
      "error_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now()
    );
  }

  private async sendErrorReport(error: ErrorInfo): Promise<void> {
    if (!this.reportEndpoint) return;

    try {
      await fetch(this.reportEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(error),
      });
    } catch (err) {
      console.warn("Failed to send error report:", err);
    }
  }

  public getErrors(filter?: ErrorFilter): ErrorInfo[] {
    let filteredErrors = [...this.errors];

    if (filter) {
      if (filter.category) {
        filteredErrors = filteredErrors.filter(
          (error) => error.category === filter.category,
        );
      }
      if (filter.severity) {
        filteredErrors = filteredErrors.filter(
          (error) => error.severity === filter.severity,
        );
      }
      if (filter.resolved !== undefined) {
        filteredErrors = filteredErrors.filter(
          (error) => error.resolved === filter.resolved,
        );
      }
      if (filter.userId) {
        filteredErrors = filteredErrors.filter(
          (error) => error.userId === filter.userId,
        );
      }
      if (filter.dateRange) {
        filteredErrors = filteredErrors.filter(
          (error) =>
            error.timestamp >= filter.dateRange!.start &&
            error.timestamp <= filter.dateRange!.end,
        );
      }
    }

    return filteredErrors.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
    );
  }

  public getErrorStats(): ErrorStats {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const recentErrors = this.errors.filter(
      (error) => error.timestamp >= last24Hours,
    );

    const errorsByCategory: Record<string, number> = {};
    const errorsBySeverity: Record<string, number> = {};
    const errorsByHour: Record<string, number> = {};
    const errorMessages: Record<string, number> = {};

    recentErrors.forEach((error) => {
      // Count by category
      errorsByCategory[error.category] =
        (errorsByCategory[error.category] || 0) + 1;

      // Count by severity
      errorsBySeverity[error.severity] =
        (errorsBySeverity[error.severity] || 0) + 1;

      // Count by hour
      const hour =
        error.timestamp.getHours().toString().padStart(2, "0") + ":00";
      errorsByHour[hour] = (errorsByHour[hour] || 0) + 1;

      // Count by message
      errorMessages[error.message] = (errorMessages[error.message] || 0) + 1;
    });

    const topErrors = Object.entries(errorMessages)
      .map(([message, count]) => ({ message, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const sessions = new Set(this.errors.map((error) => error.sessionId)).size;
    const averageErrorsPerSession =
      sessions > 0 ? recentErrors.length / sessions : 0;
    const errorRate =
      (recentErrors.length / Math.max(1, this.getPageViews())) * 1000;

    return {
      totalErrors: this.errors.length,
      errorsByCategory,
      errorsBySeverity,
      errorsByHour,
      averageErrorsPerSession,
      errorRate,
      topErrors,
      recentErrors: recentErrors.slice(0, 50),
    };
  }

  private getPageViews(): number {
    // This would typically come from analytics
    return 100; // Placeholder
  }

  public resolveError(errorId: string, resolvedBy?: string): boolean {
    const error = this.errors.find((e) => e.id === errorId);
    if (error) {
      error.resolved = true;
      error.resolvedAt = new Date();
      error.resolvedBy = resolvedBy;
      return true;
    }
    return false;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  public clearErrors(): void {
    this.errors = [];
  }

  public exportErrors(): string {
    return JSON.stringify(this.errors, null, 2);
  }

  public importErrors(data: string): void {
    try {
      const importedErrors = JSON.parse(data);
      if (Array.isArray(importedErrors)) {
        this.errors = [...this.errors, ...importedErrors];
      }
    } catch (error) {
      console.error("Failed to import errors:", error);
    }
  }
}

// Export singleton instance
export const errorTracker = new AdvancedErrorTracker({
  maxErrors: 1000,
  reportEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
});

// Export utility functions
export const trackError = (
  errorData: Parameters<typeof errorTracker.trackError>[0],
) => {
  errorTracker.trackError(errorData);
};

export const getErrorStats = () => {
  return errorTracker.getErrorStats();
};

export const resolveError = (errorId: string, resolvedBy?: string) => {
  return errorTracker.resolveError(errorId, resolvedBy);
};

export default errorTracker;
