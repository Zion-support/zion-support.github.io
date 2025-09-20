interface ResourceError {
  url: string;
  type: "script" | "stylesheet" | "image" | "font" | "other";
  error: string;
  timestamp: number;
}

class ResourceMonitor {
  private errors: ResourceError[] = [];
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;

  constructor() {
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    // Monitor script errors
    window.addEventListener('error', (event) => {
      if (event.target && event.target !== window) {
        const target = event.target as HTMLElement;
        const url = (target as HTMLScriptElement).src || (target as HTMLLinkElement).href;
        if (url) {
          this.recordError(url, event.error?.message || 'Unknown error');
        }
      }
    });

    // Monitor resource load failures
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && typeof event.reason === 'string') {
        this.recordError('unknown', event.reason);
      }
    });
  }

  private recordError(url: string, errorMessage: string): void {
    const resourceError: ResourceError = {
      url,
      type: this.getResourceTypeFromUrl(url),
      error: errorMessage,
      timestamp: Date.now()
    };
    this.errors.push(resourceError);
  }

  private getResourceTypeFromUrl(url: string): ResourceError["type"] {
    if (url.includes(".js")) return "script";
    if (url.includes(".css")) return "stylesheet";
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return "image";
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return "font";
    return "other";
  }

  private handleRetry(url: string): void {
    const attempts = this.retryAttempts.get(url) || 0;
    if (attempts < this.maxRetries) {
      this.retryAttempts.set(url, attempts + 1);
      // Implement retry logic here if needed
    }
  }

  getErrors(): ResourceError[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
    this.retryAttempts.clear();
  }

  getErrorSummary() {
    const summary = {
      total: this.errors.length,
      byType: {} as Record<string, number>,
      recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute
    };

    this.errors.forEach(error => {
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
    });

    return summary;
  }
}

export const resourceMonitor = new ResourceMonitor();
export default resourceMonitor;