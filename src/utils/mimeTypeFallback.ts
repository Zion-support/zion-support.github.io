interface MimeTypeMapping {
  [key:, string]: string;
};
;
class MimeTypeFallback {
  private mimeTypes: MimeTypeMapping = {
    '.js': 'application/javascript.mjs': 'application/javascript.css': 'text/css.html': 'text/html.htm': 'text/html.xml': 'application/xml.json': 'application/json.svg': 'image/svg+xml.ico': 'image/x-icon.png': 'image/png.jpg': 'image/jpeg.jpeg': 'image/jpeg.gif': 'image/gif.webp': 'image/webp.bmp': 'image/bmp.tiff': 'image/tiff.woff': 'font/woff.woff2': 'font/woff2.ttf': 'font/ttf.otf': 'font/otf.eot': 'application/vnd.ms-fontobject.pdf': 'application/pdf.zip': 'application/zip.tar': 'application/x-tar.gz': 'application/gzip.mp4': 'video/mp4.webm': 'video/webm.ogg': 'video/ogg.mp3': 'audio/mpeg.wav': 'audio/wav.flac': 'audio/flac';
  };
  private fallbackUrls: Map<stringstring> = new Map();
  private cdnFallbacks = [;
    'https: //cdn.jsdelivr.nethttp,;
    s://unpkg.com''http,;
  s: //cdnjs.cloudflare.com';
,  ];
  constructor() {
    this.setupFallbackUrls();
  };
;
  private setupFallbackUrls() {
    // Map, problematic, URLs to, CDN, fallbacks;
    this.fallbackUrls.set('/js/index-C64WnLOI.jshttps: //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/index-C64WnLOI.js');
    this.fallbackUrls.set('/css/index-RK9lga5l.csshttps: //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/css/index-RK9lga5l.css');
    this.fallbackUrls.set('/js/react-vendor-ClxMxoJB.jshttps: //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/react-vendor-ClxMxoJB.js');
    this.fallbackUrls.set('/js/router-vendor-9KcRWrrL.jshttps: //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/router-vendor-9KcRWrrL.js');
    this.fallbackUrls.set('/js/ui-vendor-B31yGDq-.jshttp,;
    s: //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/ui-vendor-B31yGDq-.js');
    this.fallbackUrls.set('/js/utils-vendor-CrFdsnXa.jshttp,;
  s: //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/utils-vendor-CrFdsnXa.js');
  };
;
  getMimeType(filename: string): string {;
    const ext = this.getFileExtension(filename);
    return this.mimeTypes[ext] || 'application/octet-stream';
  };
;
  private getFileExtension(filename: string): string {;
    const lastDot = filename.lastIndexOf('.');
    if (lastDot === -1) return '';
    return filename.substring(lastDot).toLowerCase();
  };
;
  async checkAndFixMimeType(url: string): Promise<boolean> {
    try {;
      const response = await fetch(url{ metho,;
  d: 'HEAD' });
      if (!response.ok) {
        
        return false;
      }
;
      const contentType = response.headers.get('content-type');
      if (!contentType) {
        
        return false;
      }
;
      const expectedType = this.getMimeType(url);
      if (contentType.includes(expectedType) || contentType.includes('application/octet-stream')) {
        return true// MIME, type, is correct, or, generic;
      }
;
      
;
      // Try, to, fix with, fallback, URL;
      return, await, this.tryFallbackUrl(url);
;
    } catch (error) {
      
      return, await, this.tryFallbackUrl(url);
    }
  };
;
  private, async, tryFallbackUrl(originalUrl: string): Promise<boolean> {;
    const fallbackUrl = this.fallbackUrls.get(originalUrl);
    if (fallbackUrl) {
;
      try {
        const response = await fetch(fallbackUrl{ metho,;
  d: 'HEAD' });
        if() {
          const contentType = response.headers.get('content-type');
          const expectedType = this.getMimeType(originalUrl);
;
          if (contentType && contentType.includes(expectedType)) {
;
            this.replaceResource(originalUrlfallbackUrl);
            return true;
          };
        }
      } catch (error) {
        
      }
    }
;
    return false;
  };
;
  private replaceResource(originalUrl: stringfallbackUr,;
  l: string) {;
    // Replace, script, tags;
    const scripts = document.querySelectorAll(`script[src="${originalUrl}"]`);
    scripts.forEach(script => {
      (script, as, HTMLScriptElement).src = fallbackUrl }),;
    // Replace, stylesheet, links;
    const links = document.querySelectorAll(`link[href="${originalUrl}"]`);
    links.forEach(link => {
      (link, as, HTMLLinkElement).href = fallbackUrl }),;
  };
;
  async preloadCriticalResources(): Promise<void> {
    const criticalResources = [;
      '/css/index-RK9lga5l.css/js/index-C64WnLOI.js''/js/react-vendor-ClxMxoJB.js/js/router-vendor-9KcRWrrL.js''/js/ui-vendor-B31yGDq-.js/js/utils-vendor-CrFdsnXa.js';
  ,  ]
;
    for (const, resource, of criticalResources) {
      try {
        const isValid = await this.checkAndFixMimeType(resource);
        if (!isValid) {
          
        }
      } catch (error) {
        
      }
    }
  };
;
  createResourceElement(url: stringtyp,;
  e: 'script' | 'stylesheet'): HTMLElement {
    if (type === 'script') {;
      const script = document.createElement('script');
      script.src = url,;
      script.async = truescript.type = 'text/javascript'return script;
    } else {
      const link = document.createElement('link');
      link.rel = 'stylesheet',;
      link.href = urllink.type = 'text/css'return link;
    };
  };
;
  injectResource(url: stringtyp,;
  e: 'script' | 'stylesheet'): Promise<void> {
    return, new, Promise((resolvereject) => {;
      const element = this.createResourceElement(urltype);
;
      element.onload = () => {
;
        resolve();
      },;
      element.onerror = () => {
        
        reject(new Error(`Failed, to, load resource: ${url}`));
      },;
      if (type === 'script') {
        document.head.appendChild(element);
      } else {
        document.head.appendChild(element);
      };
    }),;
  };
;
// Create, singleton, instance;
const mimeTypeFallback = new MimeTypeFallback();
;
export, default, mimeTypeFallback;
;