/**
 * Comprehensive error handling utilities
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  code?: string;
  statusCode?: number;
  timestamp: string;
  userAgent?: string;
  url?: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorReport {
  error: ErrorInfo;
  context: Record<string, any>;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'client' | 'server' | 'network' | 'validation' | 'auth' | 'database';
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 100;

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public handleError(
    error: Error | string,
    context: Record<string, any> = {},
    severity: ErrorReport['severity'] = 'medium',
    category: ErrorReport['category'] = 'client'
  ): void {
    const errorInfo: ErrorInfo = {
      message: typeof error === 'string' ? error : error.message,
      stack: typeof error === 'object' ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    const errorReport: ErrorReport = {
      error: errorInfo,
      context,
      severity,
      category,
    };

    this.addToQueue(errorReport);
    this.logError(errorReport);
    this.reportToAnalytics(errorReport);
  }

  private addToQueue(errorReport: ErrorReport): void {
    this.errorQueue.push(errorReport);
    
    // Keep queue size manageable
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue = this.errorQueue.slice(-this.maxQueueSize);
    }
  }

  private logError(errorReport: ErrorReport): void {
    const { error, severity, category } = errorReport;
    
    const logMessage = `[${severity.toUpperCase()}] ${category}: ${error.message}`;
    
    switch (severity) {
      case 'critical':
      case 'high':
        console.error(logMessage, errorReport);
        break;
      case 'medium':
        console.warn(logMessage, errorReport);
        break;
      case 'low':
        console.info(logMessage, errorReport);
        break;
    }
  }

  private reportToAnalytics(errorReport: ErrorReport): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: errorReport.error.message,
        fatal: errorReport.severity === 'critical',
        custom_map: {
          error_category: errorReport.category,
          error_severity: errorReport.severity,
        },
      });
    }
  }

  public getErrorQueue(): ErrorReport[] {
    return [...this.errorQueue];
  }

  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  public getErrorStats(): {
    total: number;
    bySeverity: Record<string, number>;
    byCategory: Record<string, number>;
  } {
    const stats = {
      total: this.errorQueue.length,
      bySeverity: {} as Record<string, number>,
      byCategory: {} as Record<string, number>,
    };

    this.errorQueue.forEach((report) => {
      stats.bySeverity[report.severity] = (stats.bySeverity[report.severity] || 0) + 1;
      stats.byCategory[report.category] = (stats.byCategory[report.category] || 0) + 1;
    });

    return stats;
  }
}

// Specific error types
export class ValidationError extends Error {
  public readonly code = 'VALIDATION_ERROR';
  public readonly statusCode = 400;

  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends Error {
  public readonly code = 'AUTH_ERROR';
  public readonly statusCode = 401;

  constructor(message: string = 'Authentication required') {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends Error {
  public readonly code = 'AUTHORIZATION_ERROR';
  public readonly statusCode = 403;

  constructor(message: string = 'Insufficient permissions') {
    super(message);
    this.name = 'AuthorizationError';
  }
}

export class NotFoundError extends Error {
  public readonly code = 'NOT_FOUND';
  public readonly statusCode = 404;

  constructor(message: string = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class RateLimitError extends Error {
  public readonly code = 'RATE_LIMIT_EXCEEDED';
  public readonly statusCode = 429;

  constructor(message: string = 'Rate limit exceeded') {
    super(message);
    this.name = 'RateLimitError';
  }
}

export class ServerError extends Error {
  public readonly code = 'SERVER_ERROR';
  public readonly statusCode = 500;

  constructor(message: string = 'Internal server error') {
    super(message);
    this.name = 'ServerError';
  }
}

// Error boundary for React components
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error }> }>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error }> }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const errorHandler = ErrorHandler.getInstance();
    errorHandler.handleError(error, { errorInfo }, 'high', 'client');
    
    this.setState({ error, errorInfo });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      
      if (FallbackComponent && this.state.error) {
        return <FallbackComponent error={this.state.error} />;
      }

      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Utility functions
export function createErrorResponse(error: Error, statusCode: number = 500) {
  return {
    error: {
      message: error.message,
      code: (error as any).code || 'UNKNOWN_ERROR',
      statusCode,
    },
    timestamp: new Date().toISOString(),
  };
}

export function isClientError(statusCode: number): boolean {
  return statusCode >= 400 && statusCode < 500;
}

export function isServerError(statusCode: number): boolean {
  return statusCode >= 500 && statusCode < 600;
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unknown error occurred';
}

// Global error handlers
export function setupGlobalErrorHandlers(): void {
  if (typeof window !== 'undefined') {
    const errorHandler = ErrorHandler.getInstance();

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      errorHandler.handleError(
        new Error(event.reason),
        { type: 'unhandledrejection' },
        'high',
        'client'
      );
    });

    // Global errors
    window.addEventListener('error', (event) => {
      errorHandler.handleError(
        event.error || new Error(event.message),
        { 
          type: 'global_error',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
        'high',
        'client'
      );
    });
  }
}

// Network error handling
export function handleNetworkError(error: any): Error {
  if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
    return new Error('Network connection lost. Please check your internet connection.');
  }
  
  if (error.status === 429) {
    return new RateLimitError('Too many requests. Please try again later.');
  }
  
  if (error.status >= 500) {
    return new ServerError('Server error. Please try again later.');
  }
  
  if (error.status === 404) {
    return new NotFoundError('The requested resource was not found.');
  }
  
  if (error.status === 401) {
    return new AuthenticationError('Please log in to continue.');
  }
  
  if (error.status === 403) {
    return new AuthorizationError('You do not have permission to perform this action.');
  }
  
  return new Error(error.message || 'An unexpected error occurred');
}