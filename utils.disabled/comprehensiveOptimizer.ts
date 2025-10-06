/**
 * Comprehensive optimization utilities that integrate accessibility, performance, and SEO
 */

import { debounce, throttle, measurePerformance } from './performanceUtils';
import { setMetaTags, setOpenGraphTags, calculateSEOScore } from './seoUtils';
import { ErrorHandler } from './errorHandling';

// Comprehensive optimization interface
interface OptimizationConfig {
  performance?: {
    enableDebouncing?: boolean;
    enableThrottling?: boolean;
    enableLazyLoading?: boolean;
  };
  seo?: {
    enableMetaTags?: boolean;
    enableStructuredData?: boolean;
    enableSitemap?: boolean;
  };
  accessibility?: {
    enableFocusManagement?: boolean;
    enableAriaLabels?: boolean;
    enableKeyboardNavigation?: boolean;
  };
}

// Default configuration
const defaultConfig: OptimizationConfig = {
  performance: {
    enableDebouncing: true,
    enableThrottling: true,
    enableLazyLoading: true,
  },
  seo: {
    enableMetaTags: true,
    enableStructuredData: true,
    enableSitemap: true,
  },
  accessibility: {
    enableFocusManagement: true,
    enableAriaLabels: true,
    enableKeyboardNavigation: true,
  },
};

// Comprehensive optimization class
export class ComprehensiveOptimizer {
  private config: OptimizationConfig;
  private performanceMetrics: Map<string, number> = new Map();
  private seoScore: number = 0;

  constructor(config: OptimizationConfig = {}) {
    this.config = { ...defaultConfig, ...config };
    this.initializeOptimizations();
  }

  private initializeOptimizations(): void {
    try {
      if (this.config.performance?.enableDebouncing) {
        this.setupDebouncing();
      }

      if (this.config.performance?.enableThrottling) {
        this.setupThrottling();
      }

      if (this.config.performance?.enableLazyLoading) {
        this.setupLazyLoading();
      }

      if (this.config.seo?.enableMetaTags) {
        this.setupSEOMetaTags();
      }

      if (this.config.accessibility?.enableFocusManagement) {
        this.setupFocusManagement();
      }

      this.collectInitialMetrics();
    } catch (error) {
      ErrorHandler.handle(error as Error, 'ComprehensiveOptimizer initialization');
    }
  }

  private setupDebouncing(): void {
    // Setup global debouncing for common events
    const debouncedResize = debounce(() => {
      this.handleResize();
    }, 250);

    const debouncedScroll = debounce(() => {
      this.handleScroll();
    }, 100);

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('scroll', debouncedScroll);
  }

  private setupThrottling(): void {
    // Setup throttling for high-frequency events
    const throttledMouseMove = throttle((event: MouseEvent) => {
      this.handleMouseMove(event);
    }, 16); // ~60fps

    document.addEventListener('mousemove', throttledMouseMove);
  }

  private setupLazyLoading(): void {
    // Setup intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          this.loadElement(element);
          observer.unobserve(element);
        }
      });
    });

    // Observe all elements with data-lazy attribute
    document.querySelectorAll('[data-lazy]').forEach((element) => {
      observer.observe(element);
    });
  }

  private setupSEOMetaTags(): void {
    // Set default meta tags if not already present
    const defaultMetaTags = {
      'viewport': 'width=device-width, initial-scale=1.0',
      'robots': 'index, follow',
      'author': 'Zion Tech Group',
    };

    setMetaTags(defaultMetaTags);
  }

  private setupFocusManagement(): void {
    // Setup focus management for accessibility
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
    });
  }

  private handleResize(): void {
    this.performanceMetrics.set('lastResize', Date.now());
    // Additional resize handling logic
  }

  private handleScroll(): void {
    this.performanceMetrics.set('lastScroll', Date.now());
    // Additional scroll handling logic
  }

  private handleMouseMove(event: MouseEvent): void {
    // Throttled mouse move handling
    this.performanceMetrics.set('lastMouseMove', Date.now());
  }

  private loadElement(element: HTMLElement): void {
    const src = element.getAttribute('data-src');
    if (src && element.tagName === 'IMG') {
      (element as HTMLImageElement).src = src;
      element.removeAttribute('data-src');
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    // Focus management for keyboard navigation
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  private collectInitialMetrics(): void {
    // Collect initial performance metrics
    measurePerformance('initialLoad', () => {
      this.seoScore = calculateSEOScore();
      this.performanceMetrics.set('seoScore', this.seoScore);
    });
  }

  // Public methods
  public getPerformanceMetrics(): Map<string, number> {
    return new Map(this.performanceMetrics);
  }

  public getSEOScore(): number {
    return this.seoScore;
  }

  public optimizeElement(element: HTMLElement): void {
    try {
      // Add lazy loading if not already present
      if (!element.hasAttribute('data-lazy') && element.tagName === 'IMG') {
        element.setAttribute('data-lazy', 'true');
      }

      // Add ARIA labels if missing
      if (!element.hasAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Interactive element');
      }

      // Optimize images
      if (element.tagName === 'IMG') {
        this.optimizeImage(element as HTMLImageElement);
      }
    } catch (error) {
      ErrorHandler.handle(error as Error, 'element optimization');
    }
  }

  private optimizeImage(img: HTMLImageElement): void {
    // Add loading attribute for native lazy loading
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // Add alt text if missing
    if (!img.alt) {
      img.alt = 'Image';
    }
  }

  public generateReport(): object {
    return {
      performance: Object.fromEntries(this.performanceMetrics),
      seo: {
        score: this.seoScore,
        recommendations: this.getSEORecommendations(),
      },
      accessibility: {
        focusableElements: document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ).length,
      },
      timestamp: new Date().toISOString(),
    };
  }

  private getSEORecommendations(): string[] {
    const recommendations = [];
    
    if (this.seoScore < 80) {
      recommendations.push('SEO score is below optimal level');
    }
    
    if (!document.querySelector('h1')) {
      recommendations.push('Missing H1 tag');
    }
    
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      recommendations.push(`${imagesWithoutAlt.length} images missing alt text`);
    }
    
    return recommendations;
  }

  public destroy(): void {
    // Cleanup event listeners and observers
    this.performanceMetrics.clear();
  }
}

// Utility functions
export const createOptimizer = (config?: OptimizationConfig): ComprehensiveOptimizer => {
  return new ComprehensiveOptimizer(config);
};

export const optimizePage = (config?: OptimizationConfig): void => {
  const optimizer = createOptimizer(config);
  
  // Optimize all elements on the page
  document.querySelectorAll('*').forEach((element) => {
    optimizer.optimizeElement(element as HTMLElement);
  });
};

export default ComprehensiveOptimizer;