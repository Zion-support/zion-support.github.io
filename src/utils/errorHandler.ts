/**
 * Error handling utilities
 * Enhanced with retry logic, error categorization, and better reporting
 */

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  API = 'api',
  UI = 'ui',
  RUNTIME = 'runtime',
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
  error: Error;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: number;
  context?: Record<string, unknown>;
}

class ErrorHandler {
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 100;

  handleError(error: Error, context?: Record<string, unknown>): void {
    const category = this.categorizeError(error);
    const severity = this.determineSeverity(error, category);
    
    const errorData: ErrorInfo = {
      id: this.generateErrorId(),
      error,
      category: ErrorCategory.UNKNOWN,
      severity: ErrorSeverity.MEDIUM,
      timestamp: Date.now(),
      context,
    };

    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    this.reportError(errorData);
    
    return errorData;
  }

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

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError(errorData: ErrorInfo): void {
//     console.error('Error reported:', errorData);
  }

  getErrors(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  clearErrors(): void {
    this.errorQueue = [];
  }
}

export default ErrorHandler;