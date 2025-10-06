/**
 * Comprehensive optimization utilities that integrate accessibility, performance, and SEO
 */
import {
  focusManagement,
  ariaUtils,
  keyboardUtils,
  contrastUtils,
  screenReaderUtils,
  formUtils,
  animationUtils,
  highContrastUtils,
} from './accessibilityUtils';

import {
  getMemoryUsage,
  collectPerformanceMetrics,
  performanceMonitor,
  debounce,
  throttle,
  lazyLoadImages,
  preloadCriticalResources,
  optimizeScrollPerformance,
} from './performanceUtils';

import {
  setMetaTags,
  setOpenGraphTags,
  setTwitterCardTags,
  setStructuredData,
  setCanonicalUrl,
  setPageTitle,
  setMetaDescription,
  setKeywords,
  setRobotsMeta,
  setLanguage,
  setViewport,
  schemaGenerators,
  seoAudit,
} from './seoUtils';

/**
 * Comprehensive optimization configuration
 */
export interface OptimizationConfig {
  accessibility: {
    enableFocusManagement: boolean;
    enableAriaUtils: boolean;
    enableKeyboardNavigation: boolean;
    enableContrastChecking: boolean;
    enableScreenReaderSupport: boolean;
    enableFormAccessibility: boolean;
    enableMotionReduction: boolean;
    enableHighContrast: boolean;
  };
  performance: {
    enableMemoryMonitoring: boolean;
    enablePerformanceMetrics: boolean;
    enableLazyLoading: boolean;
    enablePreloading: boolean;
    enableScrollOptimization: boolean;
    enableDebouncing: boolean;
    enableThrottling: boolean;
  };
  seo: {
    enableMetaTags: boolean;
    enableOpenGraph: boolean;
    enableTwitterCards: boolean;
    enableStructuredData: boolean;
    enableCanonicalUrl: boolean;
    enableSeoAudit: boolean;
  };
}

/**
 * Default optimization configuration
 */
export const defaultConfig: OptimizationConfig = {
  accessibility: {
    enableFocusManagement: true,
    enableAriaUtils: true,
    enableKeyboardNavigation: true,
    enableContrastChecking: true,
    enableScreenReaderSupport: true,
    enableFormAccessibility: true,
    enableMotionReduction: true,
    enableHighContrast: true,
  },
  performance: {
    enableMemoryMonitoring: true,
    enablePerformanceMetrics: true,
    enableLazyLoading: true,
    enablePreloading: true,
    enableScrollOptimization: true,
    enableDebouncing: true,
    enableThrottling: true,
  },
  seo: {
    enableMetaTags: true,
    enableOpenGraph: true,
    enableTwitterCards: true,
    enableStructuredData: true,
    enableCanonicalUrl: true,
    enableSeoAudit: true,
  },
};

/**
 * Comprehensive optimizer class
 */
export class ComprehensiveOptimizer {
  private config: OptimizationConfig;
  private isInitialized = false;

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
   * Initialize all optimizations
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) {
      console.warn('ComprehensiveOptimizer already initialized');
      return;
    }

    try {
      await this.initializeAccessibility();
      await this.initializePerformance();
      await this.initializeSEO();
      
      this.isInitialized = true;
      console.log('ComprehensiveOptimizer initialized successfully');
    } catch (error) {
      console.error('Failed to initialize ComprehensiveOptimizer:', error);
      throw error;
    }
  }

  /**
   * Initialize accessibility optimizations
   */
  private async initializeAccessibility(): Promise<void> {
    const { accessibility } = this.config;

    if (accessibility.enableFocusManagement) {
      // Initialize focus management
      document.addEventListener('DOMContentLoaded', () => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          focusManagement.skipToMain();
        }
      });
    }

    if (accessibility.enableMotionReduction) {
      // Apply motion reduction preferences
      document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element => {
          animationUtils.applyReducedMotion(element as HTMLElement);
        });
      });
    }

    if (accessibility.enableHighContrast) {
      // Apply high contrast preferences
      document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('[data-contrast]');
        elements.forEach(element => {
          highContrastUtils.applyHighContrast(element as HTMLElement);
        });
      });
    }
  }

  /**
   * Initialize performance optimizations
   */
  private async initializePerformance(): Promise<void> {
    const { performance } = this.config;

    if (performance.enableMemoryMonitoring) {
      // Start memory monitoring
      setInterval(() => {
        const memory = getMemoryUsage();
        if (memory) {
          console.log('Memory usage:', memory);
        }
      }, 30000); // Check every 30 seconds
    }

    if (performance.enablePerformanceMetrics) {
      // Start performance monitoring
      performanceMonitor.start();
    }

    if (performance.enableLazyLoading) {
      // Initialize lazy loading
      lazyLoadImages();
    }

    if (performance.enablePreloading) {
      // Preload critical resources
      preloadCriticalResources();
    }

    if (performance.enableScrollOptimization) {
      // Optimize scroll performance
      optimizeScrollPerformance();
    }
  }

  /**
   * Initialize SEO optimizations
   */
  private async initializeSEO(): Promise<void> {
    const { seo } = this.config;

    if (seo.enableMetaTags) {
      // Set basic meta tags
      setViewport();
      setLanguage('en');
    }

    if (seo.enableSeoAudit) {
      // Run SEO audit
      try {
        const auditResults = await seoAudit();
        console.log('SEO Audit Results:', auditResults);
      } catch (error) {
        console.error('SEO audit failed:', error);
      }
    }
  }

  /**
   * Optimize a specific element
   */
  optimizeElement(element: HTMLElement, options: Partial<OptimizationConfig> = {}): void {
    const config = { ...this.config, ...options };

    // Apply accessibility optimizations
    if (config.accessibility.enableAriaUtils) {
      // Generate unique ID if needed
      if (!element.id) {
        element.id = ariaUtils.generateId();
      }
    }

    if (config.accessibility.enableContrastChecking) {
      // Check contrast ratios
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      const color = computedStyle.color;
      
      if (backgroundColor && color) {
        const ratio = contrastUtils.getContrastRatio(backgroundColor, color);
        if (ratio < 4.5) {
          console.warn('Low contrast ratio detected:', ratio);
        }
      }
    }

    // Apply performance optimizations
    if (config.performance.enableDebouncing) {
      // Add debounced event listeners
      const debouncedHandler = debounce((event: Event) => {
        // Handle event
      }, 100);
      
      element.addEventListener('input', debouncedHandler);
    }
  }

  /**
   * Get optimization status
   */
  getStatus(): {
    initialized: boolean;
    config: OptimizationConfig;
    performance: any;
    accessibility: any;
    seo: any;
  } {
    return {
      initialized: this.isInitialized,
      config: this.config,
      performance: {
        memoryUsage: getMemoryUsage(),
        metrics: collectPerformanceMetrics(),
      },
      accessibility: {
        focusManagement: focusManagement,
        ariaUtils: ariaUtils,
        keyboardUtils: keyboardUtils,
      },
      seo: {
        metaTags: document.querySelectorAll('meta').length,
        structuredData: document.querySelectorAll('script[type="application/ld+json"]').length,
      },
    };
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Reset to default configuration
   */
  reset(): void {
    this.config = { ...defaultConfig };
    this.isInitialized = false;
  }
}

// Global optimizer instance
export const optimizer = new ComprehensiveOptimizer();

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    optimizer.initialize().catch(console.error);
  });
}

export default {
  ComprehensiveOptimizer,
  optimizer,
  defaultConfig,
};
