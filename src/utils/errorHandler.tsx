'use client';
/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */
import React, { ErrorInfo, useCallback } from 'react';

// Error types
export enum ErrorType {
  RUNTIME = 'RUNTIME',
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN'
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

// Error interface
export interface AppError {
  id: string;
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  stack?: string;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
  resolved?: boolean;
  retryCount?: number;
}

// Error handler configuration
export interface ErrorHandlerConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  enableRetry: boolean;
  maxRetries: number;
  retryDelay: number;
  enableUserNotification: boolean;
  reportEndpoint?: string;
  logLevel: ErrorSeverity;
}

// Default configuration
const defaultConfig: ErrorHandlerConfig = {
  enableLogging: true,
  enableReporting: false,
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000,
  enableUserNotification: true,
  logLevel: ErrorSeverity.LOW
};

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler;
  private config: ErrorHandlerConfig;
  private errors: AppError[] = [];
  private retryQueue: AppError[] = [];

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  static getInstance(config?: Partial<ErrorHandlerConfig>): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler(config);
    }
    return ErrorHandler.instance;
  }

  // Handle error
  handleError(error: Error, errorInfo?: ErrorInfo, context?: Record<string, unknown>): AppError {
    const appError: AppError = {
      id: this.generateErrorId(),
      type: this.categorizeError(error),
      severity: this.determineSeverity(error),
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      componentStack: errorInfo?.componentStack || undefined,
      context,
      resolved: false,
      retryCount: 0
    };

    this.errors.push(appError);

    // Log error
    if (this.config.enableLogging) {
      this.logError(appError);
    }

    // Report error
    if (this.config.enableReporting) {
      this.reportError(appError);
    }

    // Notify user
    if (this.config.enableUserNotification) {
      this.notifyUser(appError);
    }

    // Schedule retry if applicable
    if (this.config.enableRetry && this.shouldRetry(appError)) {
      this.scheduleRetry(appError);
    }

    return appError;
  }

  // Generate unique error ID
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Categorize error type
  private categorizeError(error: Error): ErrorType {
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      return ErrorType.NETWORK;
    }
    if (error.name === 'ValidationError') {
      return ErrorType.VALIDATION;
    }
    if (error.name === 'AuthenticationError') {
      return ErrorType.AUTHENTICATION;
    }
    if (error.name === 'AuthorizationError') {
      return ErrorType.AUTHORIZATION;
    }
    if (error.message.includes('404') || error.message.includes('Not Found')) {
      return ErrorType.NOT_FOUND;
    }
    if (error.message.includes('500') || error.message.includes('Server Error')) {
      return ErrorType.SERVER;
    }
    return ErrorType.RUNTIME;
  }

  // Determine error severity
  private determineSeverity(error: Error): ErrorSeverity {
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
      return ErrorSeverity.MEDIUM;
    }
    if (error.message.includes('Network') || error.message.includes('fetch')) {
      return ErrorSeverity.HIGH;
    }
    if (error.message.includes('Critical') || error.message.includes('Fatal')) {
      return ErrorSeverity.CRITICAL;
    }
    return ErrorSeverity.MEDIUM;
  }

  // Check if error should be retried
  private shouldRetry(error: AppError): boolean {
    return error.type === ErrorType.NETWORK || error.type === ErrorType.SERVER;
  }

  // Log error
  private logError(error: AppError): void {
    if (error.severity === ErrorSeverity.LOW && this.config.logLevel !== ErrorSeverity.LOW) {
      return;
    }

    console.group(`🚨 Error [${error.severity}] - ${error.type}`);
    console.groupEnd();
  }

  // Report error
  private async reportError(error: AppError): Promise<void> {
    if (!this.config.reportEndpoint) return;
    
    try {
      await fetch(this.config.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...error,
          timestamp: error.timestamp.toISOString()
        })
      });
    } catch (err) {
      }
  }

  // Notify user
  private notifyUser(error: AppError): void {
    if (typeof window === 'undefined') return;
    
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${error.severity === ErrorSeverity.CRITICAL ? '#dc2626' : '#f59e0b'};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 9999;
      max-width: 400px;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    
    notification.innerHTML = `
      <div style="font-weight: 600; margin-bottom: 4px;">
        ${error.severity === ErrorSeverity.CRITICAL ? 'Critical Error' : 'Error Occurred'}
      </div>
      <div style="font-size: 14px; opacity: 0.9;">
        ${error.message}
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  // Schedule retry
  private scheduleRetry(error: AppError): void {
    if (error.retryCount && error.retryCount >= this.config.maxRetries) {
      return;
    }
    
    this.retryQueue.push(error);
    setTimeout(() => {
      this.processRetryQueue();
    }, this.config.retryDelay);
  }

  // Process retry queue
  private processRetryQueue(): void {
    const retryItem = this.retryQueue.shift();
    if (!retryItem) return;
    
    retryItem.retryCount = (retryItem.retryCount || 0) + 1;
    
    try {
      // Attempt to retry the operation
      this.retryOperation(retryItem);
    } catch {
      if (retryItem.retryCount < this.config.maxRetries) {
        this.scheduleRetry(retryItem);
      } else {
        }
    }
  }

  // Retry operation (placeholder - implement based on your needs)
  private retryOperation(error: AppError): void {
    // This would contain the actual retry logic
    }

  // Get all errors
  getErrors(): AppError[] {
    return [...this.errors];
  }

  // Get errors by type
  getErrorsByType(type: ErrorType): AppError[] {
    return this.errors.filter(error => error.type === type);
  }

  // Get errors by severity
  getErrorsBySeverity(severity: ErrorSeverity): AppError[] {
    return this.errors.filter(error => error.severity === severity);
  }

  // Get unresolved errors
  getUnresolvedErrors(): AppError[] {
    return this.errors.filter(error => !error.resolved);
  }

  // Mark error as resolved
  markErrorResolved(errorId: string): boolean {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
      return true;
    }
    return false;
  }

  // Clear resolved errors
  clearResolvedErrors(): void {
    this.errors = this.errors.filter(error => !error.resolved);
  }

  // Clear all errors
  clearAllErrors(): void {
    this.errors = [];
    this.retryQueue = [];
  }

  // Get error statistics
  getErrorStatistics() {
    const total = this.errors.length;
    const byType = this.errors.reduce(
      (acc, error) => {
        acc[error.type] = (acc[error.type] || 0) + 1;
        return acc;
      },
      {} as Record<ErrorType, number>
    );
    const bySeverity = this.errors.reduce(
      (acc, error) => {
        acc[error.severity] = (acc[error.severity] || 0) + 1;
        return acc;
      },
      {} as Record<ErrorSeverity, number>
    );
    const unresolved = this.errors.filter(e => !e.resolved).length;
    
    return {
      total,
      unresolved,
      byType,
      bySeverity,
      resolved: total - unresolved
    };
  }

  // Update configuration
  updateConfig(config: Partial<ErrorHandlerConfig>): void {
    this.config = { ...this.config, ...config };
  }
}

// React Error Boundary Component
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private errorHandler: ErrorHandler;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = ErrorHandler.getInstance();
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.errorHandler.handleError(error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>An error occurred while rendering this component.</p>
          <button onClick={this.resetError}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for error handling
export const useErrorHandler = () => {
  const errorHandler = ErrorHandler.getInstance();

  const handleError = useCallback((error: Error, context?: Record<string, unknown>) => {
    return errorHandler.handleError(error, undefined, context);
  }, [errorHandler]);

  return {
    handleError,
    getErrors: () => errorHandler.getErrors(),
    getErrorStatistics: () => errorHandler.getErrorStatistics(),
    clearAllErrors: () => errorHandler.clearAllErrors()
  };
};

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();
export default ErrorHandler;