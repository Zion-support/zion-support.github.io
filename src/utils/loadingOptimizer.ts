/**
 * Advanced Loading Performance Optimization Utilities
 * Provides intelligent loading strategies, resource prioritization, and performance monitoring
 */

interface LoadingStrategy {
  name: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  resources: ResourceInfo[];
  estimatedImprovement: number; // percentage
}

interface ResourceInfo {
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'prefetch' | 'preload';
  url: string;
  size: number;
  priority: 'critical' | 'high' | 'medium' | 'low';
  loading: 'eager' | 'lazy' | 'preload' | 'prefetch';
  async?: boolean;
  defer?: boolean;
}

interface LoadingMetrics {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  timeToInteractive: number;
  resourceLoadTimes: Map<string, number>;
  renderBlockingResources: string[];
  unusedResources: string[];
}

class LoadingOptimizer {
  private strategies: LoadingStrategy[] = [];
  private metrics: LoadingMetrics = {
    domContentLoaded: 0,
    loadComplete: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    timeToInteractive: 0,
    resourceLoadTimes: new Map(),
    renderBlockingResources: [],
    unusedResources: []
  };

  private observers: PerformanceObserver[] = [];
  private resourceCache = new Map<string, boolean>();

  constructor() {
    this.initializeStrategies();
    this.startMonitoring();
  }

  private initializeStrategies(): void {
    this.strategies = [
      {
        name: 'Critical Resource Preloading',
        description: 'Preload critical CSS and JavaScript resources',
        priority: 'critical',
        resources: [
          {
            type: 'preload',
            url: '/assets/css/main.css',
            size: 25,
            priority: 'critical',
            loading: 'preload'
          },
          {
            type: 'preload',
            url: '/assets/js/main.js',
            size: 18,
            priority: 'critical',
            loading: 'preload'
          }
        ],
        estimatedImprovement: 30
      },
      {
        name: 'Font Optimization',
        description: 'Optimize font loading with display: swap and preloading',
        priority: 'high',
        resources: [
          {
            type: 'preload',
            url: '/fonts/inter.woff2',
            size: 15,
            priority: 'high',
            loading: 'preload'
          }
        ],
        estimatedImprovement: 20
      },
      {
        name: 'Image Lazy Loading',
        description: 'Implement lazy loading for non-critical images',
        priority: 'high',
        resources: [],
        estimatedImprovement: 25
      },
      {
        name: 'Script Deferring',
        description: 'Defer non-critical JavaScript execution',
        priority: 'medium',
        resources: [],
        estimatedImprovement: 15
      },
      {
        name: 'Resource Hints',
        description: 'Add DNS prefetch and preconnect hints',
        priority: 'medium',
        resources: [
          {
            type: 'prefetch',
            url: '//fonts.googleapis.com',
            size: 0,
            priority: 'low',
            loading: 'prefetch'
          }
        ],
        estimatedImprovement: 10
      }
    ];
  }

  private startMonitoring(): void {
    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            this.metrics.resourceLoadTimes.set(
              resourceEntry.name, 
              resourceEntry.responseEnd - resourceEntry.startTime
            );
            
            // Check for render-blocking resources
            if (this.isRenderBlocking(resourceEntry)) {
              this.metrics.renderBlockingResources.push(resourceEntry.name);
            }
          }
        });
      });
      
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }

    // Monitor page load events
    window.addEventListener('DOMContentLoaded', () => {
      this.metrics.domContentLoaded = performance.now();
    });

    window.addEventListener('load', () => {
      this.metrics.loadComplete = performance.now();
      this.analyzeUnusedResources();
    });

    // Monitor paint events
    if ('PerformanceObserver' in window) {
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          if (entry.name === 'first-paint') {
            this.metrics.firstPaint = entry.startTime;
          } else if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        });
      });
      
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    }
  }

  private isRenderBlocking(entry: PerformanceResourceTiming): boolean {
    const url = entry.name.toLowerCase();
    return (
      (url.includes('.css') && !url.includes('preload')) ||
      (url.includes('.js') && !entry.transferSize && !url.includes('async'))
    );
  }

  private analyzeUnusedResources(): void {
    // Analyze which resources might be unused
    const allResources = Array.from(this.metrics.resourceLoadTimes.keys());
    const usedResources = this.getUsedResources();
    
    this.metrics.unusedResources = allResources.filter(
      resource => !usedResources.includes(resource)
    );
  }

  private getUsedResources(): string[] {
    // Simplified analysis - in reality, this would be more sophisticated
    const usedResources: string[] = [];
    
    // Check for CSS usage
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(link => {
      const href = link.getAttribute('href');
      if (href) usedResources.push(href);
    });
    
    // Check for JS usage
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src) usedResources.push(src);
    });
    
    return usedResources;
  }

  public getStrategies(): LoadingStrategy[] {
    return [...this.strategies];
  }

  public getCriticalStrategies(): LoadingStrategy[] {
    return this.strategies.filter(s => s.priority === 'critical' || s.priority === 'high');
  }

  public getMetrics(): LoadingMetrics {
    return { ...this.metrics };
  }

  public applyStrategy(strategyName: string): void {
    const strategy = this.strategies.find(s => s.name === strategyName);
    if (!strategy) return;

    switch (strategyName) {
      case 'Critical Resource Preloading':
        this.preloadCriticalResources();
        break;
      case 'Font Optimization':
        this.optimizeFonts();
        break;
      case 'Image Lazy Loading':
        this.implementImageLazyLoading();
        break;
      case 'Script Deferring':
        this.deferNonCriticalScripts();
        break;
      case 'Resource Hints':
        this.addResourceHints();
        break;
    }
  }

  private preloadCriticalResources(): void {
    const criticalResources = this.strategies
      .find(s => s.name === 'Critical Resource Preloading')
      ?.resources || [];

    criticalResources.forEach(resource => {
      if (resource.type === 'preload') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.url;
        link.as = resource.type === 'preload' ? 'style' : 'script';
        if (resource.type === 'preload') {
          link.as = resource.url.endsWith('.css') ? 'style' : 'script';
        }
        document.head.appendChild(link);
      }
    });
  }

  private optimizeFonts(): void {
    // Add font-display: swap to existing fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('display=swap')) {
        const newHref = href.includes('?') ? `${href}&display=swap` : `${href}?display=swap`;
        link.setAttribute('href', newHref);
      }
    });

    // Preload critical fonts
    const criticalFonts = this.strategies
      .find(s => s.name === 'Font Optimization')
      ?.resources || [];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.url;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  private implementImageLazyLoading(): void {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
      });
    }
  }

  private deferNonCriticalScripts(): void {
    const scripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && !this.isCriticalScript(src)) {
        script.setAttribute('defer', '');
      }
    });
  }

  private isCriticalScript(src: string): boolean {
    const criticalPatterns = ['main', 'vendor-react', 'components'];
    return criticalPatterns.some(pattern => src.includes(pattern));
  }

  private addResourceHints(): void {
    const hints = this.strategies
      .find(s => s.name === 'Resource Hints')
      ?.resources || [];

    hints.forEach(hint => {
      if (hint.type === 'prefetch') {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = hint.url;
        document.head.appendChild(link);
      }
    });
  }

  public getLoadingScore(): number {
    let score = 100;
    
    // Deduct points for slow loading
    if (this.metrics.domContentLoaded > 1000) score -= 20;
    if (this.metrics.loadComplete > 3000) score -= 30;
    if (this.metrics.firstContentfulPaint > 1800) score -= 25;
    
    // Deduct points for render-blocking resources
    score -= this.metrics.renderBlockingResources.length * 5;
    
    // Deduct points for unused resources
    score -= this.metrics.unusedResources.length * 3;
    
    return Math.max(0, score);
  }

  public generateLoadingReport(): string {
    const score = this.getLoadingScore();
    const criticalStrategies = this.getCriticalStrategies();
    
    return `
Loading Performance Report
==========================
Loading Score: ${score}/100

Key Metrics:
- DOM Content Loaded: ${this.metrics.domContentLoaded.toFixed(0)}ms
- Load Complete: ${this.metrics.loadComplete.toFixed(0)}ms
- First Paint: ${this.metrics.firstPaint.toFixed(0)}ms
- First Contentful Paint: ${this.metrics.firstContentfulPaint.toFixed(0)}ms

Render-Blocking Resources: ${this.metrics.renderBlockingResources.length}
Unused Resources: ${this.metrics.unusedResources.length}

Recommended Strategies:
${criticalStrategies.map(s => 
  `- ${s.name}: ${s.description} (${s.estimatedImprovement}% improvement)`
).join('\n')}
    `.trim();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const loadingOptimizer = new LoadingOptimizer();

// Export types and class for external use
export type { LoadingStrategy, ResourceInfo, LoadingMetrics };
export { LoadingOptimizer };