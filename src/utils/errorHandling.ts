/**
 * Comprehensive error handling utilities
 * Provides comprehensive error management functions
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
}

export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, code: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export function handleError(error: Error | AppError, errorInfo?: ErrorInfo): void {
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    ...errorInfo,
  });

  // Send to error reporting service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
    });
  }
}

export function createErrorBoundary(Component: any) {
  return class ErrorBoundary {
    constructor(props: any) {
      this.props = props;
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: any) {
      handleError(error, {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorBoundary: 'ErrorBoundary',
      });
    }

    render() {
      if (this.state.hasError) {
        return {
          type: 'div',
          props: { className: 'error-boundary' },
          children: [
            { type: 'h2', children: 'Something went wrong.' },
            { type: 'p', children: 'We are sorry, but something unexpected happened.' }
          ]
        };
      }

      return Component(this.props);
    }
  };
}
