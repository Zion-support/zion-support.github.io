/**
 * Error handling utilities
 * Enhanced with retry logic, error categorization, and better reporting
 */

export enum ErrorCategory {
  NETWORK = 'network',
  API = 'api',
  VALIDATION = 'validation',
  RUNTIME = 'runtime',
  UI = 'ui',
  UNKNOWN = 'unknown',
}

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface ErrorInfo {
  id: string;
  message: string;
  stack?: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: number;
  context?: Record<string, any>;
}

class ErrorHandler {
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize: number = 50;

  /**
   * Handle error with categorization and severity determination
   */
  handleError(error: Error, context?: Record<string, any>): void {
    const category = this.categorizeError(error);
    const severity = this.determineSeverity(error, category);
    
    const errorData: ErrorInfo = {
      id: this.generateErrorId(),
      message: error.message,
      stack: error.stack,
      category,
      severity,
      timestamp: Date.now(),
      context,
    };

    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Send to error reporting service
    this.reportError(errorData);
  }

  /**
   * Categorize error based on message and stack
   */
  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    if (message.includes('network') || message.includes('fetch') || message.includes('xhr')) {
      return ErrorCategory.NETWORK;
    }
    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorCategory.VALIDATION;
    }
    if (message.includes('api') || stack.includes('api')) {
      return ErrorCategory.API;
    }
    if (message.includes('component') || stack.includes('react')) {
      return ErrorCategory.UI;
    }
    if (message.includes('runtime') || stack.includes('runtime')) {
      return ErrorCategory.RUNTIME;
    }
    return ErrorCategory.UNKNOWN;
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, category: ErrorCategory): ErrorSeverity {
    if (category === ErrorCategory.NETWORK) {
      return ErrorSeverity.MEDIUM;
    }
    if (category === ErrorCategory.VALIDATION) {
      return ErrorSeverity.LOW;
    }
    if (category === ErrorCategory.RUNTIME) {
      return ErrorSeverity.HIGH;
    }
    if (category === ErrorCategory.API) {
      return ErrorSeverity.MEDIUM;
    }
    return ErrorSeverity.MEDIUM;
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Report error to external service
   */
  private reportError(errorData: ErrorInfo): void {
    // Implementation for reporting to external service
    console.error('Error reported:', errorData);
  }

  /**
   * Get all errors
   */
  getErrors(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errorQueue = [];
  }
}

export default ErrorHandler;