'use client';
// Enhanced Error Handler
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  timestamp: string;
  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    this.timestamp = new Date().toISOString()
    Error.captureStackTrace(this, this.constructor)
  }
}
export const errorHandler = (error: AppError | Error) => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const appError = error instanceof AppError ? error : new AppError(error.message)
  console.error({
    message: appError.message,
    stack: isDevelopment ? appError.stack : undefined,
    timestamp: new Date().toISOString(),
    statusCode: appError.statusCode || 500
  });
  return {
    message: appError.isOperational ? appError.message : 'An unexpected error occurred',
    statusCode: appError.statusCode || 500
  };
};
export const asyncHandler = (fn: (req: unknown, res: unknown, next: unknown) => unknown) => (req: unknown, res: unknown, next: unknown) => {
  Promise.resolve(fn(req, res, next)).catch((error: unknown) => {
    if (next && typeof next === 'function') {
      next(error);
    }
  });
};
