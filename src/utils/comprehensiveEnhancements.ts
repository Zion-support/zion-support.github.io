/**
 * Comprehensive Enhancements for Zion Tech Group Website
 * Provides advanced features and optimizations
 */

export interface EnhancementConfig {
  enableAdvancedPerformance: boolean;
  enableSecurityFeatures: boolean;
  enableAccessibilityFeatures: boolean;
  enableSEOFeatures: boolean;
  enableUXFeatures: boolean;
  enableAnalytics: boolean;
  enableOfflineSupport: boolean;
  enablePWA: boolean;
}

export interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
}

export interface SecurityMetrics {
  threatsBlocked: number;
  vulnerabilitiesFixed: number;
  cspViolations: number;
  xssAttempts: number;
}

export interface AccessibilityMetrics {
  wcagCompliance: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  colorContrastScore: number;
}

export interface SEOMetrics {
  metaTagsScore: number;
  structuredDataScore: number;
  pageSpeedScore: number;
  mobileFriendlinessScore: number;
}

export interface UXMetrics {
  engagementScore: number;
  bounceRate: number;
  taskCompletionRate: number;
  userSatisfactionScore: number;
}

class ComprehensiveEnhancements {
  private config: EnhancementConfig;
  private performanceMetrics: Partial<PerformanceMetrics> = {};
  private securityMetrics: Partial<SecurityMetrics> = {};
  private accessibilityMetrics: Partial<AccessibilityMetrics> = {};
  private seoMetrics: Partial<SEOMetrics> = {};
  private uxMetrics: Partial<UXMetrics> = {};

  constructor(config: Partial<EnhancementConfig> = {}) {
    this.config = {
      enableAdvancedPerformance: true,
      enableSecurityFeatures: true,
      enableAccessibilityFeatures: true,
      enableSEOFeatures: true,
      enableUXFeatures: true,
      enableAnalytics: true,
      enableOfflineSupport: true,
      enablePWA: true,
      ...config
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    if (this.config.enableAdvancedPerformance) {
      this.setupPerformanceOptimizations();
    }

    if (this.config.enableSecurityFeatures) {
      this.setupSecurityFeatures();
    }

    if (this.config.enableAccessibilityFeatures) {
      this.setupAccessibilityFeatures();
    }

    if (this.config.enableSEOFeatures) {
      this.setupSEOFeatures();
    }

    if (this.config.enableUXFeatures) {
      this.setupUXFeatures();
    }

    if (this.config.enableAnalytics) {
      this.setupAnalytics();
    }

    if (this.config.enableOfflineSupport) {
      this.setupOfflineSupport();
    }

    if (this.config.enablePWA) {
      this.setupPWAFeatures();
    }
  }

  private setupPerformanceOptimizations(): void {
    // Image optimization
    this.optimizeImages();
    
    // Resource hints
    this.addResourceHints();
    
    // Critical CSS inlining
    this.inlineCriticalCSS();
    
    // Bundle optimization
    this.optimizeBundles();
    
    // Memory management
    this.setupMemoryManagement();
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add lazy loading
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
      
      // Add decoding
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
      }
      
      // WebP support
      if (this.supportsWebP() && !img.src.includes('.webp')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/, '.webp');
        const testImg = new Image();
        testImg.onload = () => {
          img.src = webpSrc;
        };
        testImg.src = webpSrc;
      }
    });
  }

  private addResourceHints(): void {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://api.ziontechgroup.com' },
      { rel: 'prefetch', href: '/api/health' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });
  }

  private inlineCriticalCSS(): void {
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
      .header { background: #1a1a1a; color: white; padding: 1rem; }
      .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
      .loading { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  private optimizeBundles(): void {
    // Enable code splitting
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.preloadCriticalRoutes();
      });
    }
  }

  private preloadCriticalRoutes(): void {
    const criticalRoutes = ['/about', '/services', '/contact'];
    criticalRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }

  private setupMemoryManagement(): void {
    // Monitor memory usage
    if ('memory' in performance) {
      const updateMemoryMetrics = () => {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          this.performanceMetrics.memoryUsage = memory.usedJSHeapSize;
        }
      };

      updateMemoryMetrics();
      setInterval(updateMemoryMetrics, 10000);
    }
  }

  private setupSecurityFeatures(): void {
    // Content Security Policy
    this.setupCSP();
    
    // XSS Protection
    this.setupXSSProtection();
    
    // Clickjacking Protection
    this.setupClickjackingProtection();
    
    // Input Sanitization
    this.setupInputSanitization();
  }

  private setupCSP(): void {
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://api.ziontechgroup.com",
      "frame-ancestors 'none'"
    ];

    let cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!cspMeta) {
      cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      document.head.appendChild(cspMeta);
    }
    cspMeta.setAttribute('content', cspDirectives.join('; '));
  }

  private setupXSSProtection(): void {
    // Monitor for XSS attempts
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')?.set;
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(this: Element, value: string) {
          const element = this as Element & { containsXSS?: (value: string) => boolean; securityMetrics?: { xssAttempts: number } };
          if (typeof value === 'string' && element.containsXSS && element.containsXSS(value)) {
            console.warn('XSS attempt blocked');
            element.securityMetrics = element.securityMetrics || { xssAttempts: 0 };
            element.securityMetrics.xssAttempts = (element.securityMetrics.xssAttempts || 0) + 1;
            return;
          }
          originalInnerHTML.call(this, value);
        }
      });
    }

    // Add XSS detection method
    (Element.prototype as Element & { containsXSS?: (content: string) => boolean }).containsXSS = function(this: Element, content: string): boolean {
      const xssPatterns = [
        /<script[^>]*>.*?<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /<iframe[^>]*>/gi
      ];
      return xssPatterns.some(pattern => pattern.test(content));
    };
  }

  private setupClickjackingProtection(): void {
    // Detect if page is being framed
    if (window.top !== window.self) {
      window.top!.location.href = window.location.href;
    }

    // Set frame options
    let frameOptionsMeta = document.querySelector('meta[http-equiv="X-Frame-Options"]');
    if (!frameOptionsMeta) {
      frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
      frameOptionsMeta.setAttribute('content', 'DENY');
      document.head.appendChild(frameOptionsMeta);
    }
  }

  private setupInputSanitization(): void {
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        const sanitized = this.sanitizeInput(target.value);
        if (sanitized !== target.value) {
          target.value = sanitized;
        }
      }
    });
  }

  private sanitizeInput(input: string): string {
    return input
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/<[^>]*>/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  private setupAccessibilityFeatures(): void {
    // Screen reader support
    this.setupScreenReaderSupport();
    
    // Keyboard navigation
    this.setupKeyboardNavigation();
    
    // Focus management
    this.setupFocusManagement();
    
    // ARIA enhancements
    this.setupARIAEnhancements();
  }

  private setupScreenReaderSupport(): void {
    // Create live region
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
    `;
    document.body.appendChild(announcer);

    // Store reference for announcements
    (window as Window & { screenReaderAnnouncer?: HTMLElement }).screenReaderAnnouncer = announcer;
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      // Skip links
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink && document.activeElement === document.body) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]:not([hidden])');
        if (modal) {
          const closeButton = modal.querySelector('[aria-label*="close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }
    });

    // Add skip links
    this.addSkipLinks();
  }

  private addSkipLinks(): void {
    const skipContainer = document.createElement('div');
    skipContainer.className = 'skip-links';
    skipContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 10000;
    `;

    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      border-radius: 0 0 4px 4px;
    `;

    skipLink.addEventListener('focus', () => {
      skipContainer.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipContainer.style.top = '-40px';
    });

    skipContainer.appendChild(skipLink);
    document.body.insertBefore(skipContainer, document.body.firstChild);
  }

  private setupFocusManagement(): void {
    // Track focus history
    const focusHistory: Element[] = [];

    document.addEventListener('focusin', (event) => {
      focusHistory.push(event.target as Element);
      if (focusHistory.length > 10) {
        focusHistory.shift();
      }
    });

    // Store focus history globally
    (window as Window & { focusHistory?: Element[] }).focusHistory = focusHistory;
  }

  private setupARIAEnhancements(): void {
    // Enhance buttons without labels
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Enhance images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
    });

    // Enhance form inputs without labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label && input.getAttribute('type') !== 'hidden') {
        input.setAttribute('aria-label', 'Input field');
      }
    });
  }

  private setupSEOFeatures(): void {
    // Meta tags
    this.setupMetaTags();
    
    // Structured data
    this.setupStructuredData();
    
    // Open Graph
    this.setupOpenGraph();
    
    // Canonical URLs
    this.setupCanonicalUrls();
  }

  private setupMetaTags(): void {
    const metaTags = {
      'viewport': 'width=device-width, initial-scale=1',
      'theme-color': '#1a1a1a',
      'robots': 'index, follow',
      'author': 'Zion Tech Group',
      'generator': 'Vite + React'
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }

  private setupStructuredData(): void {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading AI and technology solutions provider'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  }

  private setupOpenGraph(): void {
    const ogTags = {
      'og:type': 'website',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }

  private setupCanonicalUrls(): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }

  private setupUXFeatures(): void {
    // Smart loading
    this.setupSmartLoading();
    
    // Error recovery
    this.setupErrorRecovery();
    
    // User feedback
    this.setupUserFeedback();
    
    // Personalization
    this.setupPersonalization();
  }

  private setupSmartLoading(): void {
    // Global loading indicator
    const indicator = document.createElement('div');
    indicator.id = 'global-loading-indicator';
    indicator.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 9999;
      opacity: 0;
    `;
    document.body.appendChild(indicator);

    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const indicator = document.getElementById('global-loading-indicator');
      if (indicator) {
        indicator.style.opacity = '1';
        indicator.style.transform = 'translateX(0)';
      }

      try {
        const response = await originalFetch(...args);
        if (indicator) {
          indicator.style.opacity = '0';
          indicator.style.transform = 'translateX(-100%)';
        }
        return response;
      } catch (error) {
        if (indicator) {
          indicator.style.opacity = '0';
          indicator.style.transform = 'translateX(-100%)';
        }
        throw error;
      }
    };
  }

  private setupErrorRecovery(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('Application error:', event.error);
      this.showNotification('Something went wrong. We\'re working to fix it.', 'error');
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      this.showNotification('An unexpected error occurred.', 'error');
    });
  }

  private setupUserFeedback(): void {
    // Store notification function globally
    (window as Window & { showNotification?: (message: string, type?: 'success' | 'error' | 'warning' | 'info') => void }).showNotification = this.showNotification.bind(this);
  }

  private showNotification(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 6px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    const colors = {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type];

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  private setupPersonalization(): void {
    // Load user preferences
    const preferences = localStorage.getItem('user-preferences');
    if (preferences) {
      try {
        const prefs = JSON.parse(preferences);
        this.applyPreferences(prefs);
      } catch (error) {
        console.warn('Failed to load user preferences:', error);
      }
    }
  }

  private applyPreferences(preferences: { theme?: string; highContrast?: boolean; fontSize?: string }): void {
    if (preferences.theme === 'dark') {
      document.body.classList.add('dark-theme');
    }

    if (preferences.highContrast) {
      document.body.classList.add('high-contrast');
    }

    if ((preferences as any).reduceMotion) {
      document.body.classList.add('reduce-motion');
    }
  }

  private setupAnalytics(): void {
    // Performance monitoring
    this.setupPerformanceMonitoring();
    
    // User engagement tracking
    this.setupEngagementTracking();
    
    // Error tracking
    this.setupErrorTracking();
  }

  private setupPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                this.performanceMetrics.fcp = entry.startTime;
              }
              break;
            case 'largest-contentful-paint':
              this.performanceMetrics.lcp = entry.startTime;
              break;
            case 'first-input': {
              const fidEntry = entry as PerformanceEntry & { processingStart: number };
              this.performanceMetrics.fid = fidEntry.processingStart - entry.startTime;
              break;
            }
            case 'layout-shift': {
              const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
              if (!layoutShiftEntry.hadRecentInput) {
                this.performanceMetrics.cls = (this.performanceMetrics.cls || 0) + (layoutShiftEntry.value || 0);
              }
              break;
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance observer not supported:', error);
      }
    }
  }

  private setupEngagementTracking(): void {
    let scrollDepth = 0;
    let clickCount = 0;

    // Scroll tracking
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollDepth = Math.max(scrollDepth, (scrollTop / scrollHeight) * 100);
    }, { passive: true });

    // Click tracking
    document.addEventListener('click', () => {
      clickCount++;
    }, { passive: true });

    // Store metrics
    this.uxMetrics.engagementScore = scrollDepth;
    (window as Window & { engagementMetrics?: { scrollDepth: number; clickCount: number } }).engagementMetrics = { scrollDepth, clickCount };
  }

  private setupErrorTracking(): void {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      console.error('Error tracked:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    });

    // Track promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Promise rejection tracked:', event.reason);
    });
  }

  private setupOfflineSupport(): void {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Online/offline handling
    window.addEventListener('online', () => {
      this.showNotification('Connection restored', 'success');
    });

    window.addEventListener('offline', () => {
      this.showNotification('You are offline', 'warning');
    });
  }

  private setupPWAFeatures(): void {
    // Add manifest link
    let manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) {
      manifest = document.createElement('link');
      manifest.setAttribute('rel', 'manifest');
      manifest.setAttribute('href', '/manifest.json');
      document.head.appendChild(manifest);
    }

    // Add theme color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      themeColor.setAttribute('content', '#1a1a1a');
      document.head.appendChild(themeColor);
    }
  }

  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  public getMetrics(): {
    performance: Partial<PerformanceMetrics>;
    security: Partial<SecurityMetrics>;
    accessibility: Partial<AccessibilityMetrics>;
    seo: Partial<SEOMetrics>;
    ux: Partial<UXMetrics>;
  } {
    return {
      performance: this.performanceMetrics,
      security: this.securityMetrics,
      accessibility: this.accessibilityMetrics,
      seo: this.seoMetrics,
      ux: this.uxMetrics
    };
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    
    return `
Comprehensive Enhancement Report:
================================
Performance:
- FCP: ${metrics.performance.fcp?.toFixed(2) || 'N/A'}ms
- LCP: ${metrics.performance.lcp?.toFixed(2) || 'N/A'}ms
- FID: ${metrics.performance.fid?.toFixed(2) || 'N/A'}ms
- CLS: ${metrics.performance.cls?.toFixed(4) || 'N/A'}
- Memory: ${metrics.performance.memoryUsage ? (metrics.performance.memoryUsage / 1024 / 1024).toFixed(2) + 'MB' : 'N/A'}

Security:
- XSS Attempts Blocked: ${metrics.security.xssAttempts || 0}
- Threats Blocked: ${metrics.security.threatsBlocked || 0}

Accessibility:
- WCAG Compliance: ${metrics.accessibility.wcagCompliance || 'N/A'}%
- Keyboard Navigation: ${metrics.accessibility.keyboardNavigationScore || 'N/A'}%

UX:
- Engagement Score: ${metrics.ux.engagementScore?.toFixed(1) || 'N/A'}%
- User Satisfaction: ${metrics.ux.userSatisfactionScore || 'N/A'}%
    `.trim();
  }
}

// Singleton instance
let enhancements: ComprehensiveEnhancements | null = null;

export function getComprehensiveEnhancements(config?: Partial<EnhancementConfig>): ComprehensiveEnhancements {
  if (!enhancements) {
    enhancements = new ComprehensiveEnhancements(config);
  }
  return enhancements;
}

export function initializeEnhancements(config?: Partial<EnhancementConfig>): ComprehensiveEnhancements {
  return getComprehensiveEnhancements(config);
}

export default ComprehensiveEnhancements;