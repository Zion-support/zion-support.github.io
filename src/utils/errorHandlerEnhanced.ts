'use client';
// Enhanced Error Handler;
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  timestamp: string;
  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message)
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString()
    Error.captureStackTrace(this, this.constructor)
  }
}
export const rateLimitingMiddleware = {
    message: appError.isOperational ? appError.message : 'An unexpected error occurred',
    statusCode: appError.statusCode || 500;
  }
}
export     }
  });
}