export interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: Date;
  context?: string;
}

export class AppError extends Error {
  public context?: string;
  public timestamp: Date;

  constructor(message: string, context?: string) {
    super(message);
    this.name = 'AppError';
    this.context = context;
    this.timestamp = new Date();
  }
}

export const handleError = (error: Error, context?: string): ErrorInfo => {
  const errorInfo: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date(),
    context
  };

  // Log error to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error occurred:', errorInfo);
  }

  return errorInfo;
};

export const createErrorBoundary = (error: Error, errorInfo: any) => {
  return {
    error: error.message,
    errorInfo: errorInfo.componentStack,
    timestamp: new Date().toISOString()
  };
};