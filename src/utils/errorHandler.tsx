/**
 * Comprehensive Error Handling and Logging System
 * Advanced error tracking, reporting, and recovery utilities
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'react' | 'performance' | 'security' | 'unknown';
  context?: Record<string, any>;
}

export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error' | 'fatal';
  message: string;
  timestamp: number;
  context?: Record<string, any>;
  userId?: string;
  sessionId?: string;
}

export class ErrorHandler {
  private errors: ErrorInfo[] = [];
  private logs: LogEntry[] = [];
  private maxErrors = 100;
  private maxLogs = 1000;
  private isInitialized = false;
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      this.setupGlobalErrorHandlers();
      this.setupUnhandledRejectionHandler();
      this.setupConsoleInterception();
      this.setupPerformanceErrorTracking();
      
      this.isInitialized = true;
      this.log('info', 'Error handler initialized successfully');
    } catch (error) {
      console.error('Failed to initialize error handler:', error);
    }
  }

  private setupGlobalErrorHandlers(): void {
    // Global JavaScript error handler
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: this.sessionId,
        userId: this.userId,
        severity: 'high',
        category: 'javascript',
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: this.sessionId,
        userId: this.userId,
        severity: 'high',
        category: 'javascript',
        context: {
          reason: event.reason
        }
      });
    });
  }

  private setupUnhandledRejectionHandler(): void {
    window.addEventListener('unhandledrejection', (event) => {
      this.log('error', 'Unhandled promise rejection', {
        reason: event.reason,
        promise: event.promise
      });
    });
  }

  private setupConsoleInterception(): void {
    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug
    };

    // Intercept console methods to capture logs
    console.log = (...args) => {
      this.log('info', args.join(' '));
      originalConsole.log.apply(console, args);
    };

    console.warn = (...args) => {
      this.log('warn', args.join(' '));
      originalConsole.warn.apply(console, args);
    };

    console.error = (...args) => {
      this.log('error', args.join(' '));
      originalConsole.error.apply(console, args);
    };

    console.info = (...args) => {
      this.log('info', args.join(' '));
      originalConsole.info.apply(console, args);
    };

    console.debug = (...args) => {
      this.log('debug', args.join(' '));
      originalConsole.debug.apply(console, args);
    };
  }

  private setupPerformanceErrorTracking(): void {
    // Track performance errors
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource' && entry.duration > 5000) {
            this.log('warn', 'Slow resource loading detected', {
              name: entry.name,
              duration: entry.duration,
              size: (entry as any).transferSize
            });
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  }

  public handleError(errorInfo: Partial<ErrorInfo>): void {
    const fullErrorInfo: ErrorInfo = {
      message: errorInfo.message || 'Unknown error',
      stack: errorInfo.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
      timestamp: errorInfo.timestamp || Date.now(),
      userAgent: errorInfo.userAgent || navigator.userAgent,
      url: errorInfo.url || window.location.href,
      userId: errorInfo.userId || this.userId,
      sessionId: errorInfo.sessionId || this.sessionId,
      severity: errorInfo.severity || 'medium',
      category: errorInfo.category || 'unknown',
      context: errorInfo.context
    };

    this.errors.push(fullErrorInfo);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log the error
    this.log('error', `Error: ${fullErrorInfo.message}`, {
      severity: fullErrorInfo.severity,
      category: fullErrorInfo.category,
      stack: fullErrorInfo.stack
    });

    // Send to external service if critical
    if (fullErrorInfo.severity === 'critical') {
      this.sendToExternalService(fullErrorInfo);
    }

    // Attempt recovery for certain error types
    this.attemptRecovery(fullErrorInfo);
  }

  public log(level: LogEntry['level'], message: string, context?: Record<string, any>): void {
    const logEntry: LogEntry = {
      level,
      message,
      timestamp: Date.now(),
      context,
      userId: this.userId,
      sessionId: this.sessionId
    };

    this.logs.push(logEntry);

    // Keep only the most recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // Send to external service for error and fatal levels
    if (level === 'error' || level === 'fatal') {
      this.sendToExternalService(logEntry);
    }
  }

  private attemptRecovery(errorInfo: ErrorInfo): void {
    switch (errorInfo.category) {
      case 'network':
        this.handleNetworkError(errorInfo);
        break;
      case 'performance':
        this.handlePerformanceError(errorInfo);
        break;
      case 'javascript':
        this.handleJavaScriptError(errorInfo);
        break;
      default:
        // No specific recovery for this error type
        break;
    }
  }

  private handleNetworkError(errorInfo: ErrorInfo): void {
    // Implement network error recovery strategies
    this.log('info', 'Attempting network error recovery');
    
    // Could implement retry logic, fallback resources, etc.
  }

  private handlePerformanceError(errorInfo: ErrorInfo): void {
    // Implement performance error recovery strategies
    this.log('info', 'Attempting performance error recovery');
    
    // Could implement resource optimization, lazy loading, etc.
  }

  private handleJavaScriptError(errorInfo: ErrorInfo): void {
    // Implement JavaScript error recovery strategies
    this.log('info', 'Attempting JavaScript error recovery');
    
    // Could implement component remounting, state reset, etc.
  }

  private sendToExternalService(data: ErrorInfo | LogEntry): void {
    // In a real implementation, this would send to an external service
    // like Sentry, LogRocket, or a custom logging service
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'error_occurred', {
        error_message: 'message' in data ? data.message : data.message,
        error_severity: 'severity' in data ? data.severity : data.level,
        error_category: 'category' in data ? data.category : 'log',
        session_id: data.sessionId,
        user_id: data.userId
      });
    }

    // Example: Send to custom endpoint
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // }).catch(() => {
    //   // Silently fail if logging service is unavailable
    // });
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  public getLogs(): LogEntry[] {
    return [...this.logs];
  }

  public getErrorStats(): {
    totalErrors: number;
    errorsBySeverity: Record<string, number>;
    errorsByCategory: Record<string, number>;
    recentErrors: ErrorInfo[];
  } {
    const errorsBySeverity = this.errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const errorsByCategory = this.errors.reduce((acc, error) => {
      acc[error.category] = (acc[error.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const recentErrors = this.errors
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10);

    return {
      totalErrors: this.errors.length,
      errorsBySeverity,
      errorsByCategory,
      recentErrors
    };
  }

  public clearErrors(): void {
    this.errors = [];
  }

  public clearLogs(): void {
    this.logs = [];
  }

  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  public cleanup(): void {
    this.errors = [];
    this.logs = [];
    this.isInitialized = false;
  }
}

// React Error Boundary Component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  private errorHandler: ErrorHandler;

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = new ErrorHandler();
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.errorHandler.handleError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: 'ErrorBoundary',
      severity: 'high',
      category: 'react',
      context: {
        errorBoundary: 'ErrorBoundary'
      }
    });
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <div className="error-boundary">
    <h2>Something went wrong</h2>
    <p>We're sorry, but something unexpected happened.</p>
    <details>
      <summary>Error details</summary>
      <pre>{error.message}</pre>
    </details>
    <button onClick={() => window.location.reload()}>
      Reload page
    </button>
  </div>
);

// Export singleton instance
export const errorHandler = new ErrorHandler();

// Export utility functions
export const handleError = (errorInfo: Partial<ErrorInfo>): void => {
  errorHandler.handleError(errorInfo);
};

export const log = (level: LogEntry['level'], message: string, context?: Record<string, any>): void => {
  errorHandler.log(level, message, context);
};

export const setUserId = (userId: string): void => {
  errorHandler.setUserId(userId);
};

export const getErrorStats = () => {
  return errorHandler.getErrorStats();
};

export default ErrorHandler;