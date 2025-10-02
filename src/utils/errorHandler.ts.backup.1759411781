interface ErrorInfo {
<<<<<<< HEAD
message: string,
stack?: string;
componentStack?: string;
timestamp: string,
url: string,
userAgent: string,
=======
message: string;,
stack?: string;
componentStack?: string;
timestamp: string;,
url: string;,
userAgent: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
userId?: string;
}

class ErrorHandler {
private static instance: ErrorHandler;
private errorQueue: ErrorInfo[] = [];
private maxQueueSize = 50;
private constructor() {
this.setupGlobalErrorHandlers();
}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private setupGlobalErrorHandlers(): void {
    // Global error handler
<<<<<<< HEAD
    window.addEventListener('error', (event) => {;
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
=======
    window.addEventListener('error', (event) => {';
      this.handleError({
        message: event.message,,
        stack: event.error?.stack,,
        timestamp: new Date().toISOString(),,
        url: window.location.href,,
        userAgent: navigator.userAgent,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
    });

    // Unhandled promise rejection handler
<<<<<<< HEAD
    window.addEventListener('unhandledrejection', (event) => {;
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
=======
    window.addEventListener('unhandledrejection', (event) => {';
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,`;
        stack: event.reason?.stack,,
        timestamp: new Date().toISOString(),,
        url: window.location.href,,
        userAgent: navigator.userAgent,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
    });
  }

<<<<<<< HEAD
  public handleError(errorInfo: Partial<ErrorInfo>): void {
    const fullErrorInfo: ErrorInfo = {
      message: errorInfo.message || 'Unknown error',
      stack: errorInfo.stack,
      componentStack: errorInfo.componentStack,
      timestamp: errorInfo.timestamp || new Date().toISOString(),
      url: errorInfo.url || window.location.href,
      userAgent: errorInfo.userAgent || navigator.userAgent,
      userId: errorInfo.userId
=======
  public handleError(errorInfo: Partial<ErrorInfo>): void {,
    const fullErrorInfo: ErrorInfo = {,
      message: errorInfo.message || 'Unknown error',';,
      stack: errorInfo.stack,,
      componentStack: errorInfo.componentStack,,
      timestamp: errorInfo.timestamp || new Date().toISOString(),,
      url: errorInfo.url || window.location.href,,
      userAgent: errorInfo.userAgent || navigator.userAgent,,
      userId: errorInfo.userId,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };

    // Add to queue
    this.errorQueue.push(fullErrorInfo);

    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {;
      console.error('Error captured: ', fullErrorInfo);',
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {;
=======
    if (process.env.NODE_ENV === 'development') {';
      console.error('Error captured: ', fullErrorInfo);';,
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      this.sendToErrorService(fullErrorInfo);
    }
  }

  private async sendToErrorService(errorInfo: ErrorInfo): Promise<void> {,
    try {
      // You can integrate with services like Sentry, LogRocket, etc.
<<<<<<< HEAD
      // For now, we'll just log to console;
      console.error('Production error: ', errorInfo);',
      
      // Example integration with external service:
      // await fetch('/api/errors', {
      //   method: 'POST'
      //   headers: { 'Content-Type': 'application/json' }
      //   body: JSON.stringify(errorInfo)
      // });
    } catch (error) {
      console.error('Failed to send error to service: ', error);',
=======
      // For now, we'll just log to console';
      console.error('Production error: ', errorInfo);';,
      
      // Example integration with external service: // await fetch('/api/errors', {';,
      //   method: 'POST',';,
      //   headers: { 'Content-Type': 'application/json' },';
      //   body: JSON.stringify(errorInfo),,
      // });
    } catch (error) {
      console.error('Failed to send error to service: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    }
  }

  public getErrorQueue(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  public getErrorStats(): { total: number; recent: number } {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    const recent = this.errorQueue.filter(
      error => new Date(error.timestamp) > oneHourAgo
    ).length;

    return {
<<<<<<< HEAD
      total: this.errorQueue.length,
      recent
=======
      total: this.errorQueue.length,,
      recent,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };
  }
}

export default ErrorHandler.getInstance();