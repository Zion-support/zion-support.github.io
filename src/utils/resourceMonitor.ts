interface ResourceError {
  url: string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  error: string;
  timestamp: number;
}

class ResourceMonitor {
  private errors: ResourceError[] = [];
  private isMonitoring = false;
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;

  start() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.setupErrorListeners();
    this.setupResourceObservers();
    this.monitorCriticalResources();
  }

  stop() {
    this.isMonitoring = false;
  }

  private setupErrorListeners() {
    // Listen for script loading errors
    window.addEventListener('error', (event) => {
      if (event.target && event.target !== window) {
        const target = event.target as HTMLElement;
        const url = (target as HTMLScriptElement).src || (target as HTMLLinkElement).href;
        if (url) {
          this.handleResourceError(url, this.getResourceType(target), event.error?.message || 'Unknown error');
        }
      }
    }, true);

    // Listen for unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && typeof event.reason === 'string' && event.reason.includes('MIME')) {
        this.handleResourceError('unknown', 'other', `MIME type error: ${event.reason}`);
      }
    });
  }

  private setupResourceObservers() {
    // Monitor DOM changes for new resources
    if (window.MutationObserver) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              this.monitorElement(element);
            }
          });
        });
      });
      observer.observe(document.head, { childList: true, subtree: true });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  private monitorElement(element: HTMLElement) {
    // Monitor scripts
    if (element.tagName === 'SCRIPT' && (element as HTMLScriptElement).src) {
      this.monitorScript(element as HTMLScriptElement);
    }
    // Monitor stylesheets
    if (element.tagName === 'LINK' && (element as HTMLLinkElement).rel === 'stylesheet') {
      this.monitorStylesheet(element as HTMLLinkElement);
    }
  }

  private monitorScript(script: HTMLScriptElement) {
    script.addEventListener('error', () => {
      this.handleResourceError(script.src, 'script', 'Script loading failed');
    });
  }

  private monitorStylesheet(link: HTMLLinkElement) {
    link.addEventListener('error', () => {
      this.handleResourceError(link.href, 'stylesheet', 'Stylesheet loading failed');
    });
  }

  private monitorCriticalResources() {
    // Monitor critical CSS and JS files
    const criticalResources = [
      '/css/index-RK9lga5l.css',
      '/js/index-C64WnLOI.js',
      '/js/react-vendor-ClxMxoJB.js',
      '/js/router-vendor-9KcRWrrL.js',
      '/js/ui-vendor-B31yGDq-.js',
      '/js/utils-vendor-CrFdsnXa.js'
    ];
    criticalResources.forEach(resource => {
      this.checkResourceHealth(resource);
    });
  }

  private async checkResourceHealth(url: string) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        this.handleResourceError(url, 'other', `HTTP ${response.status}: ${response.statusText}`);
        return;
      }

      const contentType = response.headers.get('content-type');
      if (!contentType) {
        this.handleResourceError(url, 'other', 'No content-type header');
        return;
      }

      if (url.endsWith('.js') && !contentType.includes('javascript')) {
        this.handleResourceError(url, 'script', `Incorrect MIME type: ${contentType} (expected javascript)`);
      } else if (url.endsWith('.css') && !contentType.includes('css')) {
        this.handleResourceError(url, 'stylesheet', `Incorrect MIME type: ${contentType} (expected css)`);
      }
    } catch (error) {
      this.handleResourceError(url, 'other', `Fetch error: ${error}`);
    }
  }

  private handleResourceError(url: string, type: ResourceError['type'], error: string) {
    const resourceError: ResourceError = {
      url,
      type,
      error,
      timestamp: Date.now()
    };

    this.errors.push(resourceError);
    this.attemptRetry(url, type);
  }

  private attemptRetry(url: string, type: ResourceError['type']) {
    const attempts = this.retryAttempts.get(url) || 0;
    if (attempts < this.maxRetries) {
      this.retryAttempts.set(url, attempts + 1);
      setTimeout(() => {
        this.retryResource(url, type);
      }, Math.pow(2, attempts) * 1000); // Exponential backoff
    }
  }

  private retryResource(url: string, type: ResourceError['type']) {
    if (type === 'script') {
      this.loadScript(url);
    } else if (type === 'stylesheet') {
      this.loadStylesheet(url);
    }
  }

  private loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      this.retryAttempts.delete(src);
    };
    script.onerror = () => {
      this.handleResourceError(src, 'script', 'Retry failed');
    };
    document.head.appendChild(script);
  }

  private loadStylesheet(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {
      this.retryAttempts.delete(href);
    };
    link.onerror = () => {
      this.handleResourceError(href, 'stylesheet', 'Retry failed');
    };
    document.head.appendChild(link);
  }

  private reportError() {
    if (this.errors.length > 0) {
      console.warn('Resource loading errors detected:', this.errors);
    }
  }

  private getResourceType(element: HTMLElement): ResourceError['type'] {
    if (element.tagName === 'SCRIPT') return 'script';
    if (element.tagName === 'LINK' && (element as HTMLLinkElement).rel === 'stylesheet') return 'stylesheet';
    if (element.tagName === 'IMG') return 'image';
    if (element.tagName === 'LINK' && (element as HTMLLinkElement).rel === 'preload') return 'font';
    return 'other';
  }

  getErrors(): ResourceError[] {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
    this.retryAttempts.clear();
  }

  getErrorSummary() {
    const summary = {
      total: this.errors.length,
      byType: {} as Record<string, number>,
      recent: this.errors.filter(error => Date.now() - error.timestamp < 60000).length
    };

    this.errors.forEach(error => {
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
    });

    return summary;
  }
}

export default ResourceMonitor;