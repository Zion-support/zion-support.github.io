/**
 * Performance Optimizer Utility
 * Advanced performance monitoring and optimization tools
 */

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
  enableMinification: boolean;
}

class PerformanceOptimizer {
  private config: OptimizationConfig;
  private metrics: PerformanceMetrics | null = null;

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enablePreloading: true,
      enableCompression: true,
      enableCaching: true,
      enableMinification: true,
      ...config
    };
  }

  /**
   * Initialize performance monitoring
   */
  public init(): void {
    if (typeof window === 'undefined') return;

    this.setupPerformanceObserver();
    this.optimizeImages();
    this.optimizeScripts();
    this.setupLazyLoading();
    this.setupPreloading();
  }

  /**
   * Setup performance observer for Core Web Vitals
   */
  private setupPerformanceObserver(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Observe LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics = {
        ...this.metrics,
        largestContentfulPaint: lastEntry.startTime
      } as PerformanceMetrics;
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Observe FID
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics = {
          ...this.metrics,
          firstInputDelay: entry.processingStart - entry.startTime
        } as PerformanceMetrics;
      });
    }).observe({ entryTypes: ['first-input'] });

    // Observe CLS
    new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics = {
        ...this.metrics,
        cumulativeLayoutShift: clsValue
      } as PerformanceMetrics;
    }).observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Optimize images for better performance
   */
  private optimizeImages(): void {
    if (!this.config.enableLazyLoading) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  /**
   * Optimize script loading
   */
  private optimizeScripts(): void {
    if (!this.config.enablePreloading) return;

    // Preload critical scripts
    const criticalScripts = [
      '/src/App.tsx',
      '/src/router.tsx'
    ];

    criticalScripts.forEach((script) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = script;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Setup lazy loading for components
   */
  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    const lazyComponents = document.querySelectorAll('[data-lazy]');
    const componentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const component = entry.target as HTMLElement;
          const componentName = component.dataset.lazy;
          
          if (componentName) {
            this.loadComponent(componentName).then(() => {
              component.classList.add('loaded');
              componentObserver.unobserve(component);
            });
          }
        }
      });
    });

    lazyComponents.forEach((component) => componentObserver.observe(component));
  }

  /**
   * Setup preloading for critical resources
   */
  private setupPreloading(): void {
    if (!this.config.enablePreloading) return;

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/src/index.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Load component dynamically
   */
  private async loadComponent(componentName: string): Promise<void> {
    try {
      const module = await import(`../components/${componentName}`);
      return module.default;
    } catch (error) {
      console.warn(`Failed to load component: ${componentName}`, error);
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    if (!this.metrics) return 'No metrics available';

    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.getRecommendations()
    };

    return JSON.stringify(report, null, 2);
  }

  /**
   * Get performance recommendations
   */
  private getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics) {
      if (this.metrics.largestContentfulPaint > 2500) {
        recommendations.push('Consider optimizing images and reducing LCP');
      }
      if (this.metrics.cumulativeLayoutShift > 0.1) {
        recommendations.push('Fix layout shifts by setting image dimensions');
      }
      if (this.metrics.firstInputDelay > 100) {
        recommendations.push('Reduce JavaScript execution time');
      }
    }

    return recommendations;
  }

  /**
   * Optimize bundle size
   */
  public optimizeBundle(): void {
    // Remove unused CSS
    this.removeUnusedCSS();
    
    // Optimize JavaScript
    this.optimizeJavaScript();
    
    // Compress assets
    this.compressAssets();
  }

  /**
   * Remove unused CSS
   */
  private removeUnusedCSS(): void {
    if (!this.config.enableMinification) return;

    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          for (let j = rules.length - 1; j >= 0; j--) {
            const rule = rules[j];
            if (rule.type === CSSRule.STYLE_RULE) {
              const styleRule = rule as CSSStyleRule;
              if (!this.isRuleUsed(styleRule)) {
                sheet.deleteRule(j);
              }
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheets can't be accessed
      }
    }
  }

  /**
   * Check if CSS rule is used
   */
  private isRuleUsed(rule: CSSStyleRule): boolean {
    const selector = rule.selectorText;
    return document.querySelector(selector) !== null;
  }

  /**
   * Optimize JavaScript
   */
  private optimizeJavaScript(): void {
    if (!this.config.enableMinification) return;

    // Remove console.log statements in production
    if (process.env.NODE_ENV === 'production') {
      const scripts = document.querySelectorAll('script');
      scripts.forEach((script) => {
        if (script.textContent) {
          script.textContent = script.textContent.replace(/console\.log\([^)]*\);?/g, '');
        }
      });
    }
  }

  /**
   * Compress assets
   */
  private compressAssets(): void {
    if (!this.config.enableCompression) return;

    // Enable gzip compression for text assets
    const textAssets = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    textAssets.forEach((asset) => {
      const link = asset as HTMLLinkElement | HTMLScriptElement;
      if (link.href && !link.href.includes('gzip')) {
        link.href = `${link.href}?compress=true`;
      }
    });
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  performanceOptimizer.init();
}

export default PerformanceOptimizer;