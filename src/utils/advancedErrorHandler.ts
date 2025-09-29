// Advanced Error Handler Utility
export class AdvancedErrorHandler {
  private static instance: AdvancedErrorHandler;
  private errorLog: Error[] = [];
  
  static getInstance(): AdvancedErrorHandler {
    if (!AdvancedErrorHandler.instance) {
      AdvancedErrorHandler.instance = new AdvancedErrorHandler();
    }
    return AdvancedErrorHandler.instance;
  }
  
  handleError(error: Error, context?: any): void {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    this.errorLog.push(error);
    console.error('Advanced Error:', errorInfo);
    
    // Send to error tracking service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }
  
  getErrorLog(): Error[] {
    return [...this.errorLog];
  }
  
  clearErrorLog(): void {
    this.errorLog = [];
  }
}

export const errorHandler = AdvancedErrorHandler.getInstance();
