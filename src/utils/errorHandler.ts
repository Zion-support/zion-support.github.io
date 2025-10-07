/**
 * Error handling utilities
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public logError(error: Error, errorInfo?: any): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    this.errorQueue.push(errorData);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorData);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorData);
    }
  }

  private async sendToErrorService(errorData: ErrorInfo): Promise<void> {
    try {
      // In a real application, you would send this to your error reporting service
      // For now, we'll just log it
      console.error('Error reported to service:', errorData);
    } catch (err) {
      console.error('Failed to send error to service:', err);
    }
  }

  public getErrors(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  public clearErrors(): void {
    this.errorQueue = [];
  }
}

export const errorHandler = ErrorHandler.getInstance();