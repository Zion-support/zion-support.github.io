// Error handling utilities
export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, code: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorCodes = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR'
} as const;

export const createError = (message: string, code: keyof typeof errorCodes, statusCode?: number) => {
  return new AppError(message, errorCodes[code], statusCode);
};

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, errorCodes.INTERNAL_ERROR, 500);
  }

  return new AppError('An unknown error occurred', errorCodes.INTERNAL_ERROR, 500);
};

export const logError = (error: AppError, context?: Record<string, any>) => {
  console.error('Application Error:', {
    message: error.message,
    code: error.code,
    statusCode: error.statusCode,
    stack: error.stack,
    context
  });
};

// Async error wrapper for React components
export const withErrorHandling = <T extends any[], R>(
  fn: (...args: T) => Promise<R>
) => {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      const appError = handleError(error);
      logError(appError, { args });
      throw appError;
    }
  };
};