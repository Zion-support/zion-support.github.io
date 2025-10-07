/**
 * Advanced Error Tracking and Reporting System
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, any>;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  timestamp: number;
  url: string;
  userAgent: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  recovered: boolean;
}

export interface ErrorTrackingConfig {
  enabled: boolean;
  sampleRate: number; // 0-1, percentage of errors to report
  ignoreErrors?: RegExp[];
  beforeSend?: (report: ErrorReport) => ErrorReport | null;
  endpoint?: string;
}

class ErrorTracker {
  private static instance: ErrorTracker;
  private config: ErrorTrackingConfig;
  private errorQueue: ErrorReport[] = [];
  private readonly MAX_QUEUE_SIZE = 50;
  private sessionId: string;

  private constructor(config: ErrorTrackingConfig) {
    this.config = config;
    this.sessionId = this.generateSessionId();
    this.setupGlobalErrorHandlers();
  }

  static getInstance(config?: ErrorTrackingConfig): ErrorTracker {
    if (!ErrorTracker.instance && config) {
      ErrorTracker.instance = new ErrorTracker(config);
    }
    return ErrorTracker.instance;
  }

  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      this.captureError(event.error || new Error(event.message), {
        action: 'global-error',
        metadata: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const error =
        event.reason instanceof Error
          ? event.reason
          : new Error(String(event.reason));

      this.captureError(error, {
        action: 'unhandled-rejection',
      });
    });
  }

  /**
   * Determine error severity based on error characteristics
   */
  private determineSeverity(error: Error, context: ErrorContext): ErrorReport['severity'] {
    // Critical errors that should never happen
    if (
      error.message.includes('undefined is not a function') ||
      error.message.includes('Cannot read property')
    ) {
      return 'critical';
    }

    // High severity for component errors
    if (context.component) {
      return 'high';
    }

    // Network errors are medium severity
    if (
      error.message.includes('fetch') ||
      error.message.includes('network')
    ) {
      return 'medium';
    }

    return 'low';
  }

  /**
   * Check if error should be ignored
   */
  private shouldIgnoreError(error: Error): boolean {
    if (!this.config.ignoreErrors) return false;

    return this.config.ignoreErrors.some((pattern) =>
      pattern.test(error.message)
    );
  }

  /**
   * Check if error should be sampled (based on sample rate)
   */
  private shouldSampleError(): boolean {
    return Math.random() < this.config.sampleRate;
  }

  /**
   * Capture and report an error
   */
  captureError(
    error: Error,
    context: ErrorContext = {},
    recovered: boolean = false
  ): ErrorReport | null {
    if (!this.config.enabled) return null;
    if (this.shouldIgnoreError(error)) return null;
    if (!this.shouldSampleError()) return null;

    const report: ErrorReport = {
      id: this.generateErrorId(),
      message: error.message,
      stack: error.stack,
      context: {
        ...context,
        sessionId: this.sessionId,
      },
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      severity: this.determineSeverity(error, context),
      recovered,
    };

    // Allow modification or filtering via beforeSend hook
    const processedReport = this.config.beforeSend
      ? this.config.beforeSend(report)
      : report;

    if (!processedReport) return null;

    // Add to queue
    this.errorQueue.push(processedReport);

    // Maintain queue size
    if (this.errorQueue.length > this.MAX_QUEUE_SIZE) {
      this.errorQueue.shift();
    }

    // Send to endpoint if configured
    if (this.config.endpoint) {
      this.sendToEndpoint(processedReport);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Error Tracker]', processedReport);
    }

    return processedReport;
  }

  /**
   * Send error report to endpoint
   */
  private async sendToEndpoint(report: ErrorReport): Promise<void> {
    if (!this.config.endpoint) return;

    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
        // Use keepalive to ensure delivery even if page is closing
        keepalive: true,
      });

      if (!response.ok) {
        console.warn('Failed to send error report:', response.statusText);
      }
    } catch (error) {
      // Don't throw errors when reporting errors
      console.warn('Error sending error report:', error);
    }
  }

  /**
   * Get all captured errors
   */
  getErrors(): ErrorReport[] {
    return [...this.errorQueue];
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errorQueue = [];
  }

  /**
   * Get error statistics
   */
  getStatistics(): {
    total: number;
    bySeverity: Record<string, number>;
    recovered: number;
    unrecovered: number;
  } {
    const stats = {
      total: this.errorQueue.length,
      bySeverity: {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      },
      recovered: 0,
      unrecovered: 0,
    };

    this.errorQueue.forEach((error) => {
      stats.bySeverity[error.severity]++;
      if (error.recovered) {
        stats.recovered++;
      } else {
        stats.unrecovered++;
      }
    });

    return stats;
  }

  /**
   * Update configuration
   */
  updateConfig(config: Partial<ErrorTrackingConfig>): void {
    this.config = { ...this.config, ...config };
  }
}

/**
 * Initialize error tracking
 */
export function initErrorTracking(
  config: ErrorTrackingConfig
): ErrorTracker {
  return ErrorTracker.getInstance(config);
}

/**
 * Capture an error manually
 */
export function captureError(
  error: Error,
  context?: ErrorContext,
  recovered?: boolean
): void {
  const tracker = ErrorTracker.getInstance();
  if (tracker) {
    tracker.captureError(error, context, recovered);
  }
}

/**
 * Capture a message (create error from message)
 */
export function captureMessage(
  message: string,
  context?: ErrorContext,
  severity: ErrorReport['severity'] = 'low'
): void {
  const error = new Error(message);
  const tracker = ErrorTracker.getInstance();
  if (tracker) {
    tracker.captureError(error, { ...context, metadata: { severity } });
  }
}

/**
 * Get error statistics
 */
export function getErrorStats(): ReturnType<ErrorTracker['getStatistics']> | null {
  const tracker = ErrorTracker.getInstance();
  return tracker ? tracker.getStatistics() : null;
}

/**
 * Wrap async function with error tracking
 */
export function withErrorTracking<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  context: ErrorContext
): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (error) {
      captureError(error as Error, context);
      throw error;
    }
  }) as T;
}

/**
 * Wrap sync function with error tracking
 */
export function withErrorTrackingSync<T extends (...args: any[]) => any>(
  fn: T,
  context: ErrorContext
): T {
  return ((...args: Parameters<T>) => {
    try {
      return fn(...args);
    } catch (error) {
      captureError(error as Error, context);
      throw error;
    }
  }) as T;
}

export default ErrorTracker;