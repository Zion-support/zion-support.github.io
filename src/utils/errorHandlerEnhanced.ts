'use client;
// Enhanced Error Handler
export class AppError extends Error {
  statusCode: any,
    e: any, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
}
export const _errorHandler = (error: any,;
    e: any,;
    stack: any,;
    k: any,);
    timestamp: any,
    statusCode: any;
  });
  return {
    message: any,
    e: any,
    statusCode: any};
};
export const asyncHandler = (fn: any,
    q: any, res: any, next: any,
    q: any, res: any, next: unknown) => {
  Promise.resolve(fn(req, res, next)).catch((error: any,
    t=== 'function') {
      next(error);
    }
  });
};
