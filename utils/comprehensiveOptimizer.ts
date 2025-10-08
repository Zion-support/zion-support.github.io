/**
 * Comprehensive optimization utilities that integrate accessibility, performance, and SEO
 */
import {
  focusManagement,
  ariaUtils,
  keyboardNavigation,
  colorContrast,
  screenReader,
  formAccessibility,
  motionAccessibility,
  initAccessibility
} from './accessibilityUtils';

import {
  getMemoryUsage,
  collectPerformanceMetrics,
  performanceMonitor,
  debounce,
  throttle,
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance
} from './performanceUtils';

import {
  setMetaTags,
  setOpenGraphTags,
  setTwitterCardTags,
  setStructuredData,
  generateSitemap,
  optimizeImages,
  setCanonicalUrl,
  setPageTitle,
  setMetaDescription,
  setKeywords,
  setRobotsMeta,
  setLanguage,
  setViewport,
  schemaGenerators,
  seoAudit
} from './seoUtils';

/**
 * Comprehensive optimization configuration
 */
export interface OptimizationConfig {
  accessibility: {
    enableFocusManagement: boolean;
    enableAriaUtils: boolean;
    enableKeyboardNavigation: boolean;
    enableColorContrast: boolean;
    enableScreenReader: boolean;
    enableFormAccessibility: boolean;
    enableMotionAccessibility: boolean;
  };
  performance: {
    enableMemoryMonitoring: boolean;
    enablePerformanceMetrics: boolean;
    enableLazyLoading: boolean;
    enablePreloading: boolean;
    enableScrollOptimization: boolean;
  };
  seo: {
    enableMetaTags: boolean;
    enableOpenGraph: boolean;
    enableTwitterCards: boolean;
    enableStructuredData: boolean;
    enableCanonicalUrl: boolean;
  };
  accessibilityLevel: 'AA' | 'AAA';
  seoLevel: 'basic' | 'advanced';
}

/**
 * Default optimization configuration
 */
export const DEFAULT_OPTIMIZATION_CONFIG: OptimizationConfig = {
  accessibility: {
    enableFocusManagement: true,
    enableAriaUtils: true,
    enableKeyboardNavigation: true,
    enableColorContrast: true,
    enableScreenReader: true,
    enableFormAccessibility: true,
    enableMotionAccessibility: true,
  },
  performance: {
    enableMemoryMonitoring: true,
    enablePerformanceMetrics: true,
    enableLazyLoading: true,
    enablePreloading: true,
    enableScrollOptimization: true,
  },
  seo: {
    enableMetaTags: true,
    enableOpenGraph: true,
    enableTwitterCards: true,
    enableStructuredData: true,
    enableCanonicalUrl: true,
  },
  accessibilityLevel: 'AA',
  seoLevel: 'advanced'
};

/**
 * Comprehensive Optimizer Class
 */
export class ComprehensiveOptimizer {
  private config: OptimizationConfig;
  private isInitialized = false;

  constructor(config: OptimizationConfig = DEFAULT_OPTIMIZATION_CONFIG) {
    this.config = config;
  }

  /**
   * Initialize all optimization features
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize accessibility features
      if (this.config.accessibility.enableFocusManagement) {
        initAccessibility();
      }

      // Initialize performance monitoring
      if (this.config.performance.enablePerformanceMetrics) {
        performanceMonitor.start();
      }

      // Initialize lazy loading
      if (this.config.performance.enableLazyLoading) {
        lazyLoadImages();
      }

      // Initialize scroll optimization
      if (this.config.performance.enableScrollOptimization) {
        optimizeScrollPerformance();
      }

      this.isInitialized = true;
      console.log('Comprehensive optimizer initialized successfully');
    } catch (error) {
      console.error('Failed to initialize comprehensive optimizer:', error);
    }
  }

  /**
   * Optimize page for accessibility
   */
  public optimizeAccessibility(): void {
    if (!this.config.accessibility.enableFocusManagement) return;

    // Initialize accessibility features
    initAccessibility();

    // Set up keyboard navigation
    if (this.config.accessibility.enableKeyboardNavigation) {
      document.addEventListener('keydown', (e) => {
        // Handle global keyboard shortcuts
        if (e.key === 'Tab') {
          // Enhanced tab navigation
        }
      });
    }

    // Add skip links
    this.addSkipLinks();
  }

  /**
   * Optimize page for performance
   */
  public optimizePerformance(): void {
    if (!this.config.performance.enablePerformanceMetrics) return;

    // Start performance monitoring
    performanceMonitor.start();

    // Preload critical resources
    if (this.config.performance.enablePreloading) {
      preloadCriticalResources();
    }

    // Monitor memory usage
    if (this.config.performance.enableMemoryMonitoring) {
      setInterval(() => {
        const memoryUsage = getMemoryUsage();
        if (memoryUsage.used > memoryUsage.total * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }, 30000);
    }
  }

  /**
   * Optimize page for SEO
   */
  public optimizeSEO(pageData: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
    image?: string;
  }): void {
    if (!this.config.seo.enableMetaTags) return;

    // Set basic meta tags
    setPageTitle(pageData.title);
    setMetaDescription(pageData.description);
    setKeywords(pageData.keywords);
    setCanonicalUrl(pageData.url);

    // Set Open Graph tags
    if (this.config.seo.enableOpenGraph) {
      const ogData: any = {
        title: pageData.title,
        description: pageData.description,
        url: pageData.url,
      };
      if (pageData.image) {
        ogData.image = pageData.image;
      }
      setOpenGraphTags(ogData);
    }

    // Set Twitter Card tags
    if (this.config.seo.enableTwitterCards) {
      const twitterData: any = {
        title: pageData.title,
        description: pageData.description,
      };
      if (pageData.image) {
        twitterData.image = pageData.image;
      }
      setTwitterCardTags(twitterData);
    }

    // Set structured data
    if (this.config.seo.enableStructuredData) {
      setStructuredData(schemaGenerators.organization({
        name: 'Zion Tech Group',
        url: pageData.url,
        description: pageData.description,
      }));
    }
  }

  /**
   * Run comprehensive audit
   */
  public async runAudit(): Promise<{
    accessibility: any;
    performance: any;
    seo: any;
  }> {
    const results = {
      accessibility: {},
      performance: {},
      seo: {},
    };

    try {
      // Run accessibility audit
      if (this.config.accessibility.enableFocusManagement) {
        results.accessibility = {
          focusManagement: 'enabled',
          ariaUtils: this.config.accessibility.enableAriaUtils ? 'enabled' : 'disabled',
          keyboardNavigation: this.config.accessibility.enableKeyboardNavigation ? 'enabled' : 'disabled',
        };
      }

      // Run performance audit
      if (this.config.performance.enablePerformanceMetrics) {
        results.performance = await collectPerformanceMetrics();
      }

      // Run SEO audit
      if (this.config.seo.enableMetaTags) {
        results.seo = await seoAudit();
      }
    } catch (error) {
      console.error('Audit failed:', error);
    }

    return results;
  }

  /**
   * Add skip links for accessibility
   */
  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Update configuration
   */
  public updateConfig(newConfig: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration
   */
  public getConfig(): OptimizationConfig {
    return { ...this.config };
  }

  /**
   * Check if optimizer is initialized
   */
  public isReady(): boolean {
    return this.isInitialized;
  }
}

// Export singleton instance
export const comprehensiveOptimizer = new ComprehensiveOptimizer();