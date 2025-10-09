
/**
 * Enhanced Error Reporting Utility
 * Provides comprehensive error tracking, logging, and reporting capabilities
 */
import { logger } from './logger';
export interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context?: Record<string, unknown>;
}
export interface ErrorReporterConfig {
  enableConsoleLogging: boolean;
  enableRemoteLogging: boolean;
  remoteEndpoint?: string;
  maxErrorsInMemory: number;
  captureContext: boolean;
}
const defaultConfig: ErrorReporterConfig = {
  enableConsoleLogging: process.env['NODE_ENV'] === 'development',
  enableRemoteLogging: process.env['NODE_ENV'] === 'production',
  maxErrorsInMemory: 50,
  captureContext: true
};
/**
 * ErrorReporter class for comprehensive error handling
 */
export class ErrorReporter {
  private static instance: ErrorReporter;
  private config: ErrorReporterConfig;
  private errorQueue: ErrorReport[] = [];
  private errorCount: Map<string, number> = new Map();
  private constructor(config: Partial<ErrorReporterConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }
  /**
   * Get singleton instance
   */
  static getInstance(config?: Partial<ErrorReporterConfig>): ErrorReporter {
    if (!ErrorReporter.instance) {
      ErrorReporter.instance = new ErrorReporter(config);
    }
    return ErrorReporter.instance;
  }
  /**
   * Report an error with full context
   */
  reportError(
    error: Error,
    severity: ErrorReport['severity'] = 'medium',
    context?: Record<string, unknown>
  ): void {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      severity,
      context: this.config.captureContext ? context : undefined
    };
    // Track error frequency
    const errorKey = `${error.name}:${error.message}`;
    this.errorCount.set(errorKey, (this.errorCount.get(errorKey) || 0) + 1);
    // Add to queue (with size limit)
    this.errorQueue.push(errorReport);
    if (this.errorQueue.length > this.config.maxErrorsInMemory) {
      this.errorQueue.shift();
    }
    // Console logging
    if (this.config.enableConsoleLogging) {
      this.logToConsole(errorReport);
    }
    // Remote logging
    if (this.config.enableRemoteLogging && this.config.remoteEndpoint) {
      this.sendToRemote(errorReport);
    }
  }
  /**
   * Log error to console with formatting
   */
  private logToConsole(report: ErrorReport): void {
    const style = this.getConsoleStyle(report.severity);
    console.group(`%c[${report.severity.toUpperCase()}] Error Report`, style);
    if (process.env['NODE_ENV'] === 'development') {
      }
    if (process.env['NODE_ENV'] === 'development') {
      }
    if (process.env['NODE_ENV'] === 'development') {
      }
    if (report.stack) {
      if (process.env['NODE_ENV'] === 'development') {
        }
    }
    if (report.context) {
      if (process.env['NODE_ENV'] === 'development') {
        }
    }
    console.groupEnd();
  }
  /**
   * Get console styling based on severity
   */
  private getConsoleStyle(severity: ErrorReport['severity']): string {
    const styles = {
      low: 'color: #2196F3; font-weight: bold',
      medium: 'color: #FF9800; font-weight: bold',
      high: 'color: #F44336; font-weight: bold',
      critical: 'color: #D32F2F; font-weight: bold; font-size: 14px'
    };
    return styles[severity];
  }
  /**
   * Send error to remote logging service
   */
  private async sendToRemote(report: ErrorReport): Promise<void> {
    if (!this.config.remoteEndpoint) return;
    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      });
    } catch (error) {
      // Silently fail to avoid infinite loop
      if (this.config.enableConsoleLogging) {
        logger.warn('Failed to send error to remote endpoint:', error);
      }
    }
  }
  /**
   * Get all errors in queue
   */
  getErrorQueue(): ErrorReport[] {
    return [...this.errorQueue];
  }
  /**
   * Get error statistics
   */
  getErrorStats(): {
    totalErrors: number;
    uniqueErrors: number;
    errorsByType: Record<string, number>;
  } {
    return {
      totalErrors: this.errorQueue.length,
      uniqueErrors: this.errorCount.size,
      errorsByType: Object.fromEntries(this.errorCount)
    };
  }
  /**
   * Clear error queue
   */
  clearQueue(): void {
    this.errorQueue = [];
    this.errorCount.clear();
  }
  /**
   * Export errors as JSON
   */
  exportErrors(): string {
    return JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        stats: this.getErrorStats(),
        errors: this.errorQueue
      },
      null,
      2
    );
  }
}
/**
 * Convenience function to report errors
 */
export const reportError = (
  error: Error,
  severity?: ErrorReport['severity'],
  context?: Record<string, unknown>
): void => {
  ErrorReporter.getInstance().reportError(error, severity, context);
};
/**
 * React error boundary helper
 */
export const captureComponentError = (
  error: Error,
  errorInfo: { componentStack: string },
  componentName: string
): void => {
  const report = ErrorReporter.getInstance();
  report.reportError(error, 'high', {
    componentName,
    componentStack: errorInfo.componentStack
  });
};
export default ErrorReporter;
