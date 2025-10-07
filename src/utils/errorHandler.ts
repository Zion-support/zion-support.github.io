/**
 * Error handling utility for centralized error management
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface ErrorHandlerConfig {
  enableReporting: boolean;
  enableLogging: boolean;
  enableUserNotification: boolean;
  reportEndpoint?: string;
}

class ErrorHandler {
  private config: ErrorHandlerConfig;
  private errors: ErrorInfo[] = [];

  constructor(config: ErrorHandlerConfig = {
    enableReporting: true,
    enableLogging: true,
    enableUserNotification: false
  }) {
    this.config = config;
    this.setupGlobalErrorHandling();
  }

  private setupGlobalErrorHandling(): void {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now()
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        timestamp: Date.now()
      });
    });
  }

  handleError(errorInfo: ErrorInfo): void {
    const errorWithId = {
      ...errorInfo,
      id: this.generateErrorId()
    };

    this.errors.push(errorWithId);

    if (this.config.enableLogging) {
      console.error('Error Handler:', errorWithId);
    }

    if (this.config.enableReporting) {
      this.reportError(errorWithId);
    }

    if (this.config.enableUserNotification) {
      this.notifyUser(errorWithId);
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError(errorInfo: ErrorInfo): void {
    if (!this.config.reportEndpoint) return;

    // In a real implementation, this would send to an error reporting service
    if (process.env.NODE_ENV === 'development') {
      console.log('Error reported:', errorInfo);
    }
  }

  private notifyUser(errorInfo: ErrorInfo): void {
    // Simple user notification - in a real app, this might show a toast or modal
    console.warn('An error occurred:', errorInfo.message);
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }

  getErrorCount(): number {
    return this.errors.length;
  }
}

export const errorHandler = new ErrorHandler();
export default errorHandler;
