/**
 * Advanced Error Monitoring System
 * Production-ready error tracking and monitoring
 */

import { logger } from "./logger";

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  timestamp: Date;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId: string;
  severity: "low" | "medium" | "high" | "critical";
  category: "javascript" | "network" | "promise" | "resource" | "custom";
  context?: Record<string, unknown>;
  resolved: boolean;
}

export interface ErrorStats {
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  errorRate: number;
  lastError?: Date;
  topErrors: Array<{ message: string; count: number }>;
}

class ErrorMonitoringSystem {
  private errors: ErrorReport[] = [];
  private maxErrors = 1000;
  private sessionId: string;
  private userId?: string;
  private isEnabled: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = process.env.NODE_ENV === "production";
    this.initializeErrorHandlers();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorHandlers(): void {
    if (typeof window === "undefined") return;

    // Global error handler
    window.addEventListener("error", (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        category: "javascript",
        severity: "high",
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener("unhandledrejection", (event) => {
      this.captureError({
        message: event.reason?.message || "Unhandled Promise Rejection",
        stack: event.reason?.stack,
        category: "promise",
        severity: "high",
        context: {
          reason: event.reason,
        },
      });
    });

    // Resource loading error handler
    window.addEventListener(
      "error",
      (event) => {
        if (event.target !== window) {
          this.captureError({
            message: `Resource loading failed: ${(event.target as HTMLElement).tagName}`,
            category: "resource",
            severity: "medium",
            context: {
              tagName: (event.target as HTMLElement).tagName,
              src:
                (event.target as HTMLImageElement).src ||
                (event.target as HTMLLinkElement).href,
            },
          });
        }
      },
      true,
    );
  }

  captureError(errorData: {
    message: string;
    stack?: string;
    category: ErrorReport["category"];
    severity: ErrorReport["severity"];
    context?: Record<string, unknown>;
  }): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(),
      message: errorData.message,
      stack: errorData.stack,
      timestamp: new Date(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId: this.userId,
      sessionId: this.sessionId,
      severity: errorData.severity,
      category: errorData.category,
      context: errorData.context,
      resolved: false,
    };

    this.errors.push(errorReport);

    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log the error
    logger.error(`Error captured: ${errorData.message}`, "ErrorMonitoring", {
      category: errorData.category,
      severity: errorData.severity,
      errorId: errorReport.id,
    });

    // Send to external monitoring service in production
    if (this.isEnabled) {
      this.sendToMonitoringService(errorReport);
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async sendToMonitoringService(
    errorReport: ErrorReport,
  ): Promise<void> {
    try {
      // In a real implementation, you would send to services like Sentry, LogRocket, etc.
      logger.debug("Sending error to monitoring service", "ErrorMonitoring", {
        errorId: errorReport.id,
        severity: errorReport.severity,
      });
    } catch (error) {
      logger.error(
        "Failed to send error to monitoring service",
        "ErrorMonitoring",
        { error },
      );
    }
  }

  setUserId(userId: string): void {
    this.userId = userId;
    logger.info("User ID set for error monitoring", "ErrorMonitoring", {
      userId,
    });
  }

  getErrorStats(): ErrorStats {
    const totalErrors = this.errors.length;
    const errorsByCategory: Record<string, number> = {};
    const errorsBySeverity: Record<string, number> = {};
    const errorCounts: Record<string, number> = {};

    this.errors.forEach((error) => {
      errorsByCategory[error.category] =
        (errorsByCategory[error.category] || 0) + 1;
      errorsBySeverity[error.severity] =
        (errorsBySeverity[error.severity] || 0) + 1;
      errorCounts[error.message] = (errorCounts[error.message] || 0) + 1;
    });

    const topErrors = Object.entries(errorCounts)
      .map(([message, count]) => ({ message, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const lastError =
      this.errors.length > 0
        ? this.errors[this.errors.length - 1].timestamp
        : undefined;

    return {
      totalErrors,
      errorsByCategory,
      errorsBySeverity,
      errorRate: totalErrors / Math.max(1, this.getSessionDuration()),
      lastError,
      topErrors,
    };
  }

  private getSessionDuration(): number {
    // Calculate session duration in hours
    return (
      (Date.now() - parseInt(this.sessionId.split("_")[1])) / (1000 * 60 * 60)
    );
  }

  getErrorsBySeverity(severity: ErrorReport["severity"]): ErrorReport[] {
    return this.errors.filter((error) => error.severity === severity);
  }

  getErrorsByCategory(category: ErrorReport["category"]): ErrorReport[] {
    return this.errors.filter((error) => error.category === category);
  }

  getRecentErrors(limit: number = 50): ErrorReport[] {
    return this.errors.slice(-limit).reverse();
  }

  markErrorAsResolved(errorId: string): boolean {
    const error = this.errors.find((e) => e.id === errorId);
    if (error) {
      error.resolved = true;
      logger.info("Error marked as resolved", "ErrorMonitoring", { errorId });
      return true;
    }
    return false;
  }

  clearResolvedErrors(): number {
    const beforeCount = this.errors.length;
    this.errors = this.errors.filter((error) => !error.resolved);
    const clearedCount = beforeCount - this.errors.length;

    if (clearedCount > 0) {
      logger.info("Cleared resolved errors", "ErrorMonitoring", {
        clearedCount,
      });
    }

    return clearedCount;
  }

  exportErrorData(): string {
    return JSON.stringify(
      {
        sessionId: this.sessionId,
        userId: this.userId,
        errors: this.errors,
        stats: this.getErrorStats(),
      },
      null,
      2,
    );
  }

  // React Error Boundary helper
  static captureReactError(
    error: Error,
    errorInfo: { componentStack: string },
  ): void {
    errorMonitoring.captureError({
      message: error.message,
      stack: error.stack,
      category: "javascript",
      severity: "high",
      context: {
        componentStack: errorInfo.componentStack,
        errorBoundary: true,
      },
    });
  }

  // Network error helper
  static captureNetworkError(
    url: string,
    status: number,
    message: string,
  ): void {
    errorMonitoring.captureError({
      message: `Network error: ${message}`,
      category: "network",
      severity: status >= 500 ? "high" : "medium",
      context: {
        url,
        status,
        type: "network",
      },
    });
  }

  // Custom error helper
  static captureCustomError(
    message: string,
    context?: Record<string, unknown>,
    severity: ErrorReport["severity"] = "medium",
  ): void {
    errorMonitoring.captureError({
      message,
      category: "custom",
      severity,
      context,
    });
  }
}

// Export singleton instance
export const errorMonitoring = new ErrorMonitoringSystem();

// Export helper functions
export const { captureReactError, captureNetworkError, captureCustomError } =
  ErrorMonitoringSystem;
