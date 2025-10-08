export type ErrorCategory = 'network' | 'validation' | 'auth' | 'runtime' | 'unknown';
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface ErrorInfo {
  id: string;
  message: string;
  stack?: string;
  timestamp: number;
  category: ErrorCategory;
  severity: ErrorSeverity;
  context?: Record<string, any>;
}

export class ErrorHandler {
  private errorQueue: ErrorInfo[] = [];
  private readonly MAX_ERROR_QUEUE = 50;

  handleError(error: Error | string, context?: Record<string, any>): void {
    const errorObj = typeof error === 'string' ? new Error(error) : error;
    
    const errorInfo: ErrorInfo = {
      message: errorObj.message,
      stack: errorObj.stack,
      timestamp: Date.now(),
      category: this.categorizeError(errorObj),
      severity: this.determineSeverity(errorObj, this.categorizeError(errorObj)),
      context,
      id: this.generateErrorId(),
    };

    this.errorQueue.push(errorInfo);
    if (this.errorQueue.length > this.MAX_ERROR_QUEUE) {
      this.errorQueue.shift();
    }

    this.reportError(errorInfo);
  }

  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch')) {
      return 'network';
    }
    
    if (message.includes('validation') || message.includes('invalid')) {
      return 'validation';
    }
    
    if (message.includes('auth') || message.includes('unauthorized')) {
      return 'auth';
    }
    
    if (error.name === 'TypeError' || error.name === 'ReferenceError') {
      return 'runtime';
    }
    
    return 'unknown';
  }

  private determineSeverity(error: Error, category: ErrorCategory): ErrorSeverity {
    if (category === 'auth' || category === 'network') {
      return 'high';
    }
    
    if (category === 'validation') {
      return 'medium';
    }
    
    if (category === 'runtime') {
      if (error.name === 'TypeError' || error.name === 'ReferenceError') {
        return 'critical';
      }
      return 'high';
    }
    
    return 'medium';
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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

export const errorHandler = new ErrorHandler();
export default errorHandler;
