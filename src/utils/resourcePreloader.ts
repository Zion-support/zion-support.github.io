// Advanced Resource Preloader
export class ResourcePreloader {
  private static instance: ResourcePreloader;
  private preloadedResources: Set<string> = new Set();
  
  static getInstance(): ResourcePreloader {
    if (!ResourcePreloader.instance) {
      ResourcePreloader.instance = new ResourcePreloader();
    }
    return ResourcePreloader.instance;
  }
  
  preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.preloadedResources.has(src)) {
        resolve();
        return;
      }
      
      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }
  
  preloadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.preloadedResources.has(src)) {
        resolve();
        return;
      }
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      link.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  
  preloadStylesheet(href: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.preloadedResources.has(href)) {
        resolve();
        return;
      }
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        this.preloadedResources.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  
  preloadCriticalResources(): Promise<void> {
    const criticalResources = [
      '/static/css/main.css',
      '/static/js/main.js'
    ];
    
    return Promise.all(
      criticalResources.map(resource => {
        if (resource.endsWith('.css')) {
          return this.preloadStylesheet(resource);
        } else if (resource.endsWith('.js')) {
          return this.preloadScript(resource);
        }
        return Promise.resolve();
      })
    ).then(() => {});
  }
}

export const resourcePreloader = ResourcePreloader.getInstance();
