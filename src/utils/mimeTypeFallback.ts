type MimeTypeMapping = Record<string, string>;

class MimeTypeFallback {
  private mimeTypes: MimeTypeMapping = {
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.htm': 'text/html',
    '.xml': 'application/xml',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.bmp': 'image/bmp',
    '.tiff': 'image/tiff',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
    '.tar': 'application/x-tar',
    '.gz': 'application/gzip',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ogg': 'video/ogg',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.flac': 'audio/flac',
  };

  private fallbackUrls = new Map<string, string>();
  private cdnFallbacks = ['https://cdn.jsdelivr.net', 'https://unpkg.com', 'https://cdnjs.cloudflare.com'];

  constructor() {
    this.setupFallbackUrls();
  }

  private setupFallbackUrls() {
    this.fallbackUrls.set('/js/index-C64WnLOI.js', `${this.cdnFallbacks[0]}/gh/ziontechgroup/zion-website@main/dist/js/index-C64WnLOI.js`);
    this.fallbackUrls.set('/css/index-RK9lga5l.css', `${this.cdnFallbacks[0]}/gh/ziontechgroup/zion-website@main/dist/css/index-RK9lga5l.css`);
  }

  private getFileExtension(filename: string): string {
    const lastDot = filename.lastIndexOf('.');
    if (lastDot === -1) return '';
    return filename.substring(lastDot).toLowerCase();
  }

  getMimeType(filename: string): string {
    const ext = this.getFileExtension(filename);
    return this.mimeTypes[ext] || 'application/octet-stream';
  }

  async checkAndFixMimeType(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) return false;
      const contentType = response.headers.get('content-type');
      if (!contentType) return false;
      const expectedType = this.getMimeType(url);
      if (contentType.includes(expectedType) || contentType.includes('application/octet-stream')) return true;
      return await this.tryFallbackUrl(url);
    } catch (error) {
      return await this.tryFallbackUrl(url);
    }
  }

  private async tryFallbackUrl(originalUrl: string): Promise<boolean> {
    const fallbackUrl = this.fallbackUrls.get(originalUrl);
    if (!fallbackUrl) return false;
    try {
      const response = await fetch(fallbackUrl, { method: 'HEAD' });
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        const expectedType = this.getMimeType(originalUrl);
        if (contentType && contentType.includes(expectedType)) {
          this.replaceResource(originalUrl, fallbackUrl);
          return true;
        }
      }
    } catch {}
    return false;
  }

  private replaceResource(originalUrl: string, fallbackUrl: string) {
    const scripts = document.querySelectorAll(`script[src="${originalUrl}"]`);
    scripts.forEach((script) => {
      (script as HTMLScriptElement).src = fallbackUrl;
    });
    const links = document.querySelectorAll(`link[href="${originalUrl}"]`);
    links.forEach((link) => {
      (link as HTMLLinkElement).href = fallbackUrl;
    });
  }

  async preloadCriticalResources(): Promise<void> {
    const criticalResources = [
      '/css/index-RK9lga5l.css',
      '/js/index-C64WnLOI.js',
    ];
    for (const resource of criticalResources) {
      await this.checkAndFixMimeType(resource);
    }
  }

  createResourceElement(url: string, type: 'script' | 'stylesheet'): HTMLElement {
    if (type === 'script') {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.type = 'text/javascript';
      return script;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.type = 'text/css';
    return link;
  }

  injectResource(url: string, type: 'script' | 'stylesheet'): Promise<void> {
    return new Promise((resolve, reject) => {
      const element = this.createResourceElement(url, type);
      element.onload = () => resolve();
      element.onerror = () => reject(new Error(`Failed to load resource: ${url}`));
      document.head.appendChild(element);
    });
  }
}

const mimeTypeFallback = new MimeTypeFallback();
export default mimeTypeFallback;