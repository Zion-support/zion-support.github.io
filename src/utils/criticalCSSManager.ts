// Critical CSS Utility
export class CriticalCSSManager {
  private static instance: CriticalCSSManager;
  private loadedStyles: Set<string> = new Set();
  
  static getInstance(): CriticalCSSManager {
    if (!CriticalCSSManager.instance) {
      CriticalCSSManager.instance = new CriticalCSSManager();
    }
    return CriticalCSSManager.instance;
  }
  
  injectCriticalCSS(css: string): void {
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
    this.loadedStyles.add('critical');
  }
  
  loadNonCriticalCSS(href: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedStyles.has(href)) {
        resolve();
        return;
      }
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
        this.loadedStyles.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  
  optimizeCSSLoading(): void {
    // Load critical CSS immediately
    this.injectCriticalCSS(`
      body { margin: 0; font-family: system-ui, sans-serif; }
      .loading { display: flex; justify-content: center; align-items: center; height: 100vh; }
      .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    `);
    
    // Load non-critical CSS asynchronously
    this.loadNonCriticalCSS('/static/css/main.css');
  }
}

export const criticalCSSManager = CriticalCSSManager.getInstance();
