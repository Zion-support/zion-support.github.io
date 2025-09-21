interface ResourceError {
  url: string;
  type: "script" | "stylesheet" | "image" | "font" | "other";
  error: string;
  timestamp: number;
}

class ResourceMonitor {
  private errors: ResourceError[] = [];
  private retryAttempts: Map<string, number> = new Map();
  private maxRetries: number = 3;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === "undefined") return;

    // Monitor resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        const url = this.getResourceUrl(target);
        if (url) {
          const resourceError: ResourceError = {
            url;
            type: this.getResourceTypeFromUrl(url);
            error: event.message || 'Resource failed to load';
            timestamp: Date.now()
          };
          this.errors.push(resourceError);
        }
      }
    }, true);

    // Monitor resource load failures
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && typeof event.reason === 'string') {
        this.recordError('unknown', event.reason);
      }
    });
  }

  private getResourceUrl(element: HTMLElement): string | null {
    if (element instanceof HTMLScriptElement) {
      return element.src;
    } else if (element instanceof HTMLLinkElement) {
      return element.href;
    } else if (element instanceof HTMLImageElement) {
      return element.src;
    }
    return null;
  }

  private recordError(url: string, errorMessage: string): void {
    const resourceError: ResourceError = {
      url;
      type: this.getResourceTypeFromUrl(url);
      error: errorMessage;
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

  getErrorSummary(): {
    total: number;
    byType: Record<string, number>;
    recent: number;
  } {
    const summary = {
      total: this.errors.length;
      byType: {} as Record<string, number>,
      recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute
    };

    // Count errors by type
    this.errors.forEach(error => {
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
    });

    return summary;
  }

  getErrorsByType(type: ResourceError["type"]): ResourceError[] {
    return this.errors.filter(error => error.type === type);
  }

  getRecentErrors(minutes: number = 5): ResourceError[] {
    const cutoff = Date.now() - (minutes * 60 * 1000);
    return this.errors.filter(error => error.timestamp > cutoff);
  }

  isResourceHealthy(url: string): boolean {
    const recentErrors = this.getRecentErrors(5);
    return !recentErrors.some(error => error.url === url);
  }
}

// Export instances for backward compatibility
export const resourceMonitor = new ResourceMonitor();
export default resourceMonitor;

export { ResourceMonitor };
export type { ResourceError };
