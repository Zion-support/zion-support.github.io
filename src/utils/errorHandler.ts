/**
 * Error handler utilities
 */

export class ErrorHandler {
  private errors: Error[] = [];

  handleError(error: Error) {
    this.errors.push(error);
    console.error('Error:', error);
  }

  reportError(errorData: any) {
    console.error('Error reported:', errorData);
  }

  getErrors() {
    return this.errors;
  }
}

export const errorHandler = new ErrorHandler();

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  SYSTEM = 'system',
  USER = 'user',
}

export interface ErrorInfo {
  message: string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  timestamp: number;
}
