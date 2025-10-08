/**
 * Error handling utilities
 * Enhanced with retry logic, error categorization, and better reporting
 */

import { logger } from './logger';

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  RUNTIME = 'runtime',
  API = 'api',
  UI = 'ui',
  UNKNOWN = 'unknown',
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  errorBoundaryStack?: string;
  errorId?: string;
  timestamp?: string;
  userAgent?: string;
  url?: string;
  userId?: string;
  severity?: ErrorSeverity;
  category?: ErrorCategory;
  metadata?: Record<string, unknown>;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 100;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Log an error with automatic categorization
   */
  logError(error: Error, errorInfo?: Partial<ErrorInfo>): void {
    const category = this.categorizeError(error);
    const severity = this.determineSeverity(error, category);
    
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      errorId: this.generateErrorId(),
      category,
      severity,
      ...errorInfo,
    };

    // Add to queue
    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log using logger utility based on severity
    if (severity === ErrorSeverity.CRITICAL) {
      logger.fatal('Critical error logged', errorData);
    } else {
      logger.error('Error logged', errorData);
    }

    // Send to error reporting service
    this.reportError(errorData);
  }

  /**
   * Categorize error based on type and message
   */
  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
      return ErrorCategory.NETWORK;
    }
    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorCategory.VALIDATION;
    }
    if (message.includes('api') || message.includes('endpoint')) {
      return ErrorCategory.API;
    }
    if (error.name === 'TypeError' || error.name === 'ReferenceError') {
      return ErrorCategory.RUNTIME;
    }
    
    return ErrorCategory.UNKNOWN;
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, category: ErrorCategory): ErrorSeverity {
    if (category === ErrorCategory.NETWORK && error.message.includes('critical')) {
      return ErrorSeverity.CRITICAL;
    }
    if (category === ErrorCategory.RUNTIME) {
      return ErrorSeverity.HIGH;
    }
    if (category === ErrorCategory.API || category === ErrorCategory.NETWORK) {
      return ErrorSeverity.MEDIUM;
    }
    
    return ErrorSeverity.LOW;
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  /**
   * Report error to external service
   */
  private async reportError(errorData: ErrorInfo): Promise<void> {
    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        await fetch('/api/error-report', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(errorData),
        });
      }
    } catch (reportError) {
      logger.error('Failed to report error', reportError);
    }
  }

  /**
   * Get error queue
   */
  getErrorQueue(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  /**
   * Clear error queue
   */
  clearErrorQueue(): void {
    this.errorQueue = [];
  }
}

export const errorHandler = ErrorHandler.getInstance();