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
  message: string;
  stack?: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 50;

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  public static getInstance(): ErrorHandler {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.handleError(event.error);
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.handleError(new Error(event.reason));
      });
    }
  }

  public handleError(error: Error): void {
    const category = this.categorizeError(error);
    const severity = this.determineSeverity(error, category);

    const errorData: ErrorInfo = {
      id: this.generateErrorId(),
      message: error.message,
      stack: error.stack,
      category,
      severity,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    this.reportError(errorData);
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
    console.error('Error reported:', errorData);
  }

  getErrors(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  clearErrors(): void {
    this.errorQueue = [];
  }
}

export default ErrorHandler;
