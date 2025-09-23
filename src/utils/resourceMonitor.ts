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
    
    console.log('🔍 Resource Monitor started');
  }

  stop() {
    this.isMonitoring = false;
    console.log('🔍 Resource Monitor stopped');
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
    if (element.tagName === 'SCRIPT' && element.src) {
      this.monitorScript(element as HTMLScriptElement);
    }
    
    // Monitor stylesheets
    if (element.tagName === 'LINK' && element.rel === 'stylesheet') {
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

      // Check for MIME type issues
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
    console.error('🚨 Resource Error:', resourceError);

    // Attempt to retry loading
    this.attemptRetry(url, type);

    // Report to analytics/monitoring service
    this.reportError(resourceError);
  }

  private attemptRetry(url: string, type: ResourceError['type']) {
    const attempts = this.retryAttempts.get(url) || 0;
    
    if (attempts >= this.maxRetries) {
      console.warn(`Max retry attempts reached for ${url}`);
      return;
    }

    this.retryAttempts.set(url, attempts + 1);
    
    setTimeout(() => {
      this.retryResource(url, type);
    }, Math.pow(2, attempts) * 1000); // Exponential backoff
  }

  private retryResource(url: string, type: ResourceError['type']) {
    console.log(`🔄 Retrying resource: ${url} (attempt ${this.retryAttempts.get(url)})`);

    if (type === 'script') {
      this.loadScript(url);
    } else if (type === 'stylesheet') {
      this.loadStylesheet(url);
    }
  }

  private loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      console.log(`✅ Script loaded successfully: ${src}`);
      this.retryAttempts.delete(src);
    };
    script.onerror = () => {
      console.error(`❌ Script retry failed: ${src}`);
    };
    document.head.appendChild(script);
  }

  private loadStylesheet(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {
      console.log(`✅ Stylesheet loaded successfully: ${href}`);
      this.retryAttempts.delete(href);
    };
    link.onerror = () => {
      console.error(`❌ Stylesheet retry failed: ${href}`);
    };
    document.head.appendChild(link);
  }

  private reportError(error: ResourceError) {
    // In production, send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, etc.
      console.log('📊 Reporting error to monitoring service:', error);
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
      recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute
    };

    this.errors.forEach(error => {
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
    });

    return summary;
  }
}

// Create singleton instance
const resourceMonitor = new ResourceMonitor();

export default resourceMonitor;