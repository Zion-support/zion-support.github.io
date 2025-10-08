/**
 * Error handling utilities
 */
export interface ErrorContext {
  component?: string | undefined;
  action?: string | undefined;
  userId?: string | undefined;
  timestamp: number;
  userAgent?: string | undefined;
  url?: string | undefined;
}

export interface ErrorReport {
  message: string;
  stack?: string | undefined;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class ErrorHandler {
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 100;

  /**
   * Log an error with context
   */
  public logError(
    error: Error | string,
    context: Partial<ErrorContext> = {},
    severity: ErrorReport['severity'] = 'medium'
  ): void {
    const errorReport: ErrorReport = {
      message: typeof error === 'string' ? error : error.message,
      stack: typeof error === 'string' ? undefined : error.stack,
      context: {
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        ...context,
      },
      severity,
    };

    this.addToQueue(errorReport);
    this.logToConsole(errorReport);
  }

  /**
   * Log a warning
   */
  public logWarning(
    message: string,
    context: Partial<ErrorContext> = {}
  ): void {
    this.logError(message, context, 'low');
  }

  /**
   * Log a critical error
   */
  public logCritical(
    error: Error | string,
    context: Partial<ErrorContext> = {}
  ): void {
    this.logError(error, context, 'critical');
  }

  /**
   * Get all errors
   */
  public getErrors(): ErrorReport[] {
    return [...this.errorQueue];
  }

  /**
   * Clear all errors
   */
  public clearErrors(): void {
    this.errorQueue = [];
  }

  /**
   * Get errors by severity
   */
  public getErrorsBySeverity(severity: ErrorReport['severity']): ErrorReport[] {
    return this.errorQueue.filter(error => error.severity === severity);
  }

  /**
   * Get error count
   */
  public getErrorCount(): number {
    return this.errorQueue.length;
  }

  private addToQueue(errorReport: ErrorReport): void {
    this.errorQueue.push(errorReport);

    // Keep queue size manageable
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }
  }

  private logToConsole(errorReport: ErrorReport): void {
    const { message, stack, context, severity } = errorReport;

    const logMessage = `[${severity.toUpperCase()}] ${message}`;
    const logData = {
      context,
      stack,
    };

    switch (severity) {
      case 'critical':
        console.error(logMessage, logData);
        break;
      case 'high':
        console.error(logMessage, logData);
        break;
      case 'medium':
        console.warn(logMessage, logData);
        break;
      case 'low':
        console.info(logMessage, logData);
        break;
    }
  }
}

// Create singleton instance
const errorHandler = new ErrorHandler();

export default errorHandler;
