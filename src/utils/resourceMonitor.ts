type ResourceType = 'script' | 'stylesheet' | 'image' | 'font' | 'other';

interface ResourceError {
  url: string;
  type: ResourceType;
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
  }

  stop() {
    this.isMonitoring = false;
  }

  private setupErrorListeners() {
    window.addEventListener(
      'error',
      (event: Event) => {
        const target = event.target as (HTMLScriptElement | HTMLLinkElement | null);
        if (target && target !== window) {
          const url = (target as any).src || (target as any).href || 'unknown';
          this.handleResourceError(url, this.getResourceType(target as HTMLElement), 'Load error');
        }
      },
      true
    );

    window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
      const reason = String(event.reason || 'unknown');
      if (reason.includes('MIME')) {
        this.handleResourceError('unknown', 'other', `MIME type error: ${reason}`);
      }
    });
  }

  private setupResourceObservers() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) this.monitorElement(node);
        });
      });
    });
    observer.observe(document.head, { childList: true, subtree: true });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private monitorElement(element: HTMLElement) {
    if (element.tagName === 'SCRIPT' && (element as HTMLScriptElement).src) {
      this.monitorScript(element as HTMLScriptElement);
    }
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

  private handleResourceError(url: string, type: ResourceType, error: string) {
    const resourceError: ResourceError = { url, type, error, timestamp: Date.now() };
    this.errors.push(resourceError);
    this.attemptRetry(url, type);
  }

  private attemptRetry(url: string, type: ResourceType) {
    const attempts = this.retryAttempts.get(url) || 0;
    if (attempts >= this.maxRetries) return;
    this.retryAttempts.set(url, attempts + 1);
    setTimeout(() => {
      this.retryResource(url, type);
    }, Math.pow(2, attempts) * 1000);
  }

  private retryResource(url: string, type: ResourceType) {
    if (type === 'script') this.loadScript(url);
    else if (type === 'stylesheet') this.loadStylesheet(url);
  }

  private loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => this.retryAttempts.delete(src);
    script.onerror = () => {};
    document.head.appendChild(script);
  }

  private loadStylesheet(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => this.retryAttempts.delete(href);
    link.onerror = () => {};
    document.head.appendChild(link);
  }

  private getResourceType(element: HTMLElement): ResourceType {
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
}

const resourceMonitor = new ResourceMonitor();
export default resourceMonitor;
