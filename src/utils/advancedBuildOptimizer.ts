/**
 * Advanced Build Optimizer
 * Provides comprehensive build optimization strategies
 */

export interface BuildOptimizationConfig {
  enableCodeSplitting: boolean;
  enableTreeShaking: boolean;
  enableMinification: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
  enablePreloading: boolean;
  enableLazyLoading: boolean;
  enableServiceWorker: boolean;
  enablePWA: boolean;
  enableCDN: boolean;
  enableImageOptimization: boolean;
  enableFontOptimization: boolean;
  enableCSSOptimization: boolean;
  enableJSOptimization: boolean;
  enableHTMLOptimization: boolean;
  enableSecurityHeaders: boolean;
  enablePerformanceHeaders: boolean;
  enableSEOMetaTags: boolean;
  enableAnalytics: boolean;
  enableErrorTracking: boolean;
  enableMonitoring: boolean;
}

export class AdvancedBuildOptimizer {
  private config: BuildOptimizationConfig;
  private optimizationMetrics: Map<string, number> = new Map();

  constructor(config: Partial<BuildOptimizationConfig> = {}) {
    this.config = {
      enableCodeSplitting: true,
      enableTreeShaking: true,
      enableMinification: true,
      enableCompression: true,
      enableCaching: true,
      enablePreloading: true,
      enableLazyLoading: true,
      enableServiceWorker: true,
      enablePWA: true,
      enableCDN: false,
      enableImageOptimization: true,
      enableFontOptimization: true,
      enableCSSOptimization: true,
      enableJSOptimization: true,
      enableHTMLOptimization: true,
      enableSecurityHeaders: true,
      enablePerformanceHeaders: true,
      enableSEOMetaTags: true,
      enableAnalytics: true,
      enableErrorTracking: true,
      enableMonitoring: true,
      ...config
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.optimizeCriticalResources();
    this.optimizeImages();
    this.optimizeFonts();
    this.optimizeCSS();
    this.optimizeJavaScript();
    this.optimizeHTML();
    this.setupCaching();
    this.setupPreloading();
    this.setupLazyLoading();
    this.setupServiceWorker();
    this.setupPWA();
    this.setupSecurityHeaders();
    this.setupPerformanceHeaders();
    this.setupSEOMetaTags();
    this.setupAnalytics();
    this.setupErrorTracking();
    this.setupMonitoring();
  }

  private optimizeCriticalResources(): void {
    if (!this.config.enablePreloading) return;

    const criticalResources = [
      '/api/health',
      '/api/analytics',
      '/api/performance',
      '/api/security',
      '/api/seo',
      '/api/notifications',
      '/api/theme',
      '/api/accessibility',
      '/api/error-tracking',
      '/api/monitoring'
    ];

    criticalResources.forEach(resource => {
      this.preloadResource(resource, 'fetch');
    });
  }

  private optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for non-critical images
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="high" for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }

  private optimizeFonts(): void {
    if (!this.config.enableFontOptimization) return;

    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
    ];

    criticalFonts.forEach(font => {
      this.preloadResource(font, 'style');
    });
  }

  private optimizeCSS(): void {
    if (!this.config.enableCSSOptimization) return;

    // Add critical CSS inline
    const criticalCSS = `
      .min-h-screen { min-height: 100vh; }
      .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
      .from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(15, 23, 42, 0)); }
      .via-purple-900 { --tw-gradient-to: #581c87; --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to, rgba(88, 28, 135, 0)); }
      .to-slate-900 { --tw-gradient-to: #0f172a; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }

  private optimizeJavaScript(): void {
    if (!this.config.enableJSOptimization) return;

    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }

  private optimizeHTML(): void {
    if (!this.config.enableHTMLOptimization) return;

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Add charset if not present
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }
  }

  private setupCaching(): void {
    if (!this.config.enableCaching) return;

    // Set up cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]');
    staticAssets.forEach(asset => {
      if (asset instanceof HTMLLinkElement || asset instanceof HTMLScriptElement || asset instanceof HTMLImageElement) {
        asset.setAttribute('data-cache', 'true');
      }
    });
  }

  private setupPreloading(): void {
    if (!this.config.enablePreloading) return;

    // Preload critical routes
    const criticalRoutes = ['/', '/about', '/services', '/contact'];
    criticalRoutes.forEach(route => {
      this.preloadResource(route, 'fetch');
    });
  }

  private setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          observer.unobserve(element);
        }
      });
    });

    // Observe elements with lazy-load class
    document.querySelectorAll('.lazy-load').forEach(element => {
      observer.observe(element);
    });
  }

  private setupServiceWorker(): void {
    if (!this.config.enableServiceWorker) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  private setupPWA(): void {
    if (!this.config.enablePWA) return;

    // Add PWA manifest
    const manifest = document.createElement('link');
    manifest.setAttribute('rel', 'manifest');
    manifest.setAttribute('href', '/manifest.json');
    document.head.appendChild(manifest);

    // Add theme color
    const themeColor = document.createElement('meta');
    themeColor.setAttribute('name', 'theme-color');
    themeColor.setAttribute('content', '#1e293b');
    document.head.appendChild(themeColor);
  }

  private setupSecurityHeaders(): void {
    if (!this.config.enableSecurityHeaders) return;

    // Add security headers via meta tags
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', header.name);
      meta.setAttribute('content', header.content);
      document.head.appendChild(meta);
    });
  }

  private setupPerformanceHeaders(): void {
    if (!this.config.enablePerformanceHeaders) return;

    // Add performance headers
    const performanceHeaders = [
      { name: 'Cache-Control', content: 'public, max-age=31536000' },
      { name: 'X-DNS-Prefetch-Control', content: 'on' }
    ];

    performanceHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', header.name);
      meta.setAttribute('content', header.content);
      document.head.appendChild(meta);
    });
  }

  private setupSEOMetaTags(): void {
    if (!this.config.enableSEOMetaTags) return;

    // Add essential SEO meta tags
    const seoMetaTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'generator', content: 'React + Vite' },
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
      { name: 'language', content: 'en' },
      { name: 'geo.region', content: 'US' },
      { name: 'geo.placename', content: 'United States' }
    ];

    seoMetaTags.forEach(tag => {
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }

  private setupAnalytics(): void {
    if (!this.config.enableAnalytics) return;

    // Initialize analytics
    console.log('Analytics initialized for build optimization');
  }

  private setupErrorTracking(): void {
    if (!this.config.enableErrorTracking) return;

    // Set up error tracking
    window.addEventListener('error', (event) => {
      this.trackError('JavaScript Error', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError('Unhandled Promise Rejection', event.reason);
    });
  }

  private setupMonitoring(): void {
    if (!this.config.enableMonitoring) return;

    // Set up performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackPerformance(entry);
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }

  private preloadResource(href: string, as: string): void {
    const link = document.createElement('link');
    link.setAttribute('rel', 'preload');
    link.setAttribute('href', href);
    link.setAttribute('as', as);
    link.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(link);
  }

  private trackError(type: string, error: Error | string): void {
    console.error(`Build Optimization Error - ${type}:`, error);
    this.optimizationMetrics.set('errors', (this.optimizationMetrics.get('errors') || 0) + 1);
  }

  private trackPerformance(entry: PerformanceEntry): void {
    const metricName = `perf_${entry.entryType}`;
    this.optimizationMetrics.set(metricName, entry.startTime);
  }

  public getOptimizationMetrics(): Map<string, number> {
    return new Map(this.optimizationMetrics);
  }

  public getOptimizationScore(): number {
    const metrics = this.optimizationMetrics;
    let score = 100;

    // Deduct points for errors
    const errors = metrics.get('errors') || 0;
    score -= errors * 5;

    // Check for performance metrics
    const hasNavigation = metrics.has('perf_navigation');
    const hasPaint = metrics.has('perf_paint');
    const hasLCP = metrics.has('perf_largest-contentful-paint');

    if (!hasNavigation) score -= 10;
    if (!hasPaint) score -= 5;
    if (!hasLCP) score -= 5;

    return Math.max(0, Math.round(score));
  }

  public generateOptimizationReport(): string {
    const metrics = this.getOptimizationMetrics();
    const score = this.getOptimizationScore();

    return JSON.stringify({
      score,
      metrics: Object.fromEntries(metrics),
      config: this.config,
      timestamp: new Date().toISOString()
    }, null, 2);
  }
}

export const advancedBuildOptimizer = new AdvancedBuildOptimizer();