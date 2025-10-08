// Error handling utilities

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const handleError = (error: Error | AppError): void => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message = error.message || 'Internal Server Error';

  console.error('Error:', {
    message,
    statusCode,
    stack: error.stack,
  });

  // In production, you might want to send errors to a logging service
  if (process.env.NODE_ENV === 'production') {
    // Send to logging service
  }
};

export const asyncErrorHandler = (fn: Function) => {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      handleError(error as Error);
      throw error;
    }
  };
};
