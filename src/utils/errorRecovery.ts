/**
 * Error Recovery System
 */

export class ErrorRecovery {
  private errorCount = 0;
  private maxRetries = 3;

  constructor() {
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message), {
        component: 'Global',
        action: 'error',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        stack: event.error?.stack
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        component: 'Global',
        action: 'unhandledrejection',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }

  private handleError(error: Error, context: { component: string; action: string; timestamp: number; userAgent: string; url: string; stack?: string }): void {
    this.errorCount++;
    
    console.error('Error caught by recovery system:', {
      error: error.message,
      context,
      errorCount: this.errorCount
    });

    // Implement recovery strategies based on error type
    if (error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk')) {
      console.log('Attempting chunk load recovery');
      if (this.errorCount <= this.maxRetries) {
        setTimeout(() => window.location.reload(), 1000);
      }
    } else if (error.message.includes('NetworkError') || error.message.includes('fetch')) {
      console.log('Attempting network error recovery');
      setTimeout(() => {
        this.errorCount = Math.max(0, this.errorCount - 1);
      }, 2000);
    }

    // Reset error count after successful periods
    if (this.errorCount > this.maxRetries) {
      setTimeout(() => {
        this.errorCount = 0;
      }, 30000); // Reset after 30 seconds
    }
  }

  public getErrorCount(): number {
    return this.errorCount;
  }

  public resetErrorCount(): void {
    this.errorCount = 0;
  }
}

// Create and export a singleton instance
export const errorRecovery = new ErrorRecovery();