/**
 * Error handling utilities for the application
 */

export interface AppError extends Error {
  code?: string;
  statusCode?: number;
  isOperational?: boolean;
  context?: Record<string, unknown>;
}

export class CustomError extends Error implements AppError {
  public readonly code?: string;
  public readonly statusCode?: number;
  public readonly isOperational: boolean;
  public readonly context?: Record<string, unknown>;

  constructor(
    message: string,
    code?: string,
    statusCode?: number,
    isOperational = true,
    context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.context = context;

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, CustomError);
  }
}

export enum ErrorCodes {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR',
}

export class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: string, message: string, context?: Record<string, unknown>): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` | Context: ${JSON.stringify(context)}` : '';
    return `[${timestamp}] ${level}: ${message}${contextStr}`;
  }

  public info(message: string, context?: Record<string, unknown>): void {
    const formattedMessage = this.formatMessage('INFO', message, context);
    console.log(formattedMessage);
  }

  public warn(message: string, context?: Record<string, unknown>): void {
    const formattedMessage = this.formatMessage('WARN', message, context);
    console.warn(formattedMessage);
  }

  public error(message: string, error?: Error | AppError, context?: Record<string, unknown>): void {
    const errorContext = {
      ...context,
      ...(error && {
        errorName: error.name,
        errorMessage: error.message,
        errorStack: error.stack,
        ...(error instanceof CustomError && {
          errorCode: error.code,
          statusCode: error.statusCode,
          isOperational: error.isOperational,
          errorContext: error.context,
        }),
      }),
    };

    const formattedMessage = this.formatMessage('ERROR', message, errorContext);
    console.error(formattedMessage);

    // In production, you might want to send errors to a logging service
    if (!this.isDevelopment) {
      // Example: Send to external logging service
      // this.sendToLoggingService(formattedMessage, errorContext);
    }
  }

  public debug(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      const formattedMessage = this.formatMessage('DEBUG', message, context);
      console.debug(formattedMessage);
    }
  }
}

export const logger = Logger.getInstance();

export function handleError(error: unknown, context?: Record<string, unknown>): AppError {
  if (error instanceof CustomError) {
    logger.error('Custom error occurred', error, context);
    return error;
  }

  if (error instanceof Error) {
    const appError: AppError = {
      ...error,
      code: ErrorCodes.INTERNAL_ERROR,
      statusCode: 500,
      isOperational: false,
      context,
    };
    logger.error('Unexpected error occurred', appError, context);
    return appError;
  }

  const unknownError: AppError = {
    name: 'UnknownError',
    message: 'An unknown error occurred',
    code: ErrorCodes.INTERNAL_ERROR,
    statusCode: 500,
    isOperational: false,
    context,
  };

  logger.error('Unknown error occurred', unknownError, context);
  return unknownError;
}

export function createError(
  message: string,
  code: ErrorCodes = ErrorCodes.INTERNAL_ERROR,
  statusCode = 500,
  context?: Record<string, unknown>
): CustomError {
  return new CustomError(message, code, statusCode, true, context);
}

export function isOperationalError(error: unknown): boolean {
  if (error instanceof CustomError) {
    return error.isOperational;
  }
  return false;
}

// React Error Boundary helper
export function getErrorBoundaryFallback(error: Error): {
  title: string;
  message: string;
  action?: string;
} {
  if (error instanceof CustomError) {
    switch (error.code) {
      case ErrorCodes.VALIDATION_ERROR:
        return {
          title: 'Validation Error',
          message: error.message,
          action: 'Please check your input and try again.',
        };
      case ErrorCodes.AUTHENTICATION_ERROR:
        return {
          title: 'Authentication Required',
          message: 'Please log in to continue.',
          action: 'Sign In',
        };
      case ErrorCodes.AUTHORIZATION_ERROR:
        return {
          title: 'Access Denied',
          message: 'You do not have permission to perform this action.',
          action: 'Go Back',
        };
      case ErrorCodes.NOT_FOUND:
        return {
          title: 'Not Found',
          message: 'The requested resource was not found.',
          action: 'Go Home',
        };
      case ErrorCodes.NETWORK_ERROR:
        return {
          title: 'Network Error',
          message: 'Please check your internet connection and try again.',
          action: 'Retry',
        };
      case ErrorCodes.RATE_LIMIT_ERROR:
        return {
          title: 'Rate Limited',
          message: 'Too many requests. Please wait a moment and try again.',
          action: 'Retry Later',
        };
      default:
        return {
          title: 'Something went wrong',
          message: error.message,
          action: 'Try Again',
        };
    }
  }

  return {
    title: 'Unexpected Error',
    message: 'An unexpected error occurred. Please try again.',
    action: 'Reload Page',
  };
}
