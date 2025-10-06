/**
 * Comprehensive optimization utilities that integrate accessibility, performance, and SEO
 */
import {
  ariaUtils
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

// Comprehensive optimization interface
export interface OptimizationConfig {
  accessibility: {
    autoFix: boolean;
    announceChanges: boolean;
    respectMotionPreferences: boolean;
  };
  performance: {
    enableLazyLoading: boolean;
    preloadCritical: boolean;
    optimizeScroll: boolean;
    monitorMemory: boolean;
  };
  seo: {
    autoOptimize: boolean;
    generateStructuredData: boolean;
    optimizeMetaTags: boolean;
  };
}

// Default configuration
export const defaultConfig: OptimizationConfig = {
  accessibility: {
    autoFix: true,
    announceChanges: true,
    respectMotionPreferences: true
  },
  performance: {
    enableLazyLoading: true,
    preloadCritical: true,
    optimizeScroll: true,
    monitorMemory: true
  },
  seo: {
    autoOptimize: true,
    generateStructuredData: true,
    optimizeMetaTags: true
  }
};

// Comprehensive optimization class
export class ComprehensiveOptimizer {
  private config: OptimizationConfig;
  private isInitialized = false;
  private performanceObserver: PerformanceObserver | null = null;
  private memoryInterval: NodeJS.Timeout | null = null;

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  // Initialize all optimizations
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;
    
    try {
      // Initialize performance optimizations
      if (this.config.performance.enableLazyLoading) {
        lazyLoadImages();
      }
      if (this.config.performance.preloadCritical) {
        preloadCriticalResources(['/critical.css', '/critical.js']);
      }
      if (this.config.performance.optimizeScroll) {
        optimizeScrollPerformance();
      }
      
      // Initialize accessibility optimizations
      if (this.config.accessibility.respectMotionPreferences) {
        this.applyMotionPreferences();
      }
      
      // Initialize SEO optimizations
      if (this.config.seo.autoOptimize) {
        this.optimizeSEO();
      }
      
      // Start monitoring
      if (this.config.performance.monitorMemory) {
        this.startMemoryMonitoring();
      }
      
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize comprehensive optimizer:', error);
    }
  }

  // Apply motion preferences
  private applyMotionPreferences(): void {
    if (typeof window === 'undefined') return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--motion-duration', '0s');
      document.documentElement.style.setProperty('--motion-delay', '0s');
    }
  }

  // Optimize SEO
  private optimizeSEO(): void {
    if (typeof window === 'undefined') return;
    
    // Set basic meta tags
    setMetaTags({
      title: document.title,
      description: 'Zion Tech Group - Advanced AI and IT Solutions',
      keywords: 'AI, IT Solutions, Technology, Innovation'
    });
    
    // Set Open Graph tags
    setOpenGraphTags({
      title: document.title,
      description: 'Zion Tech Group - Advanced AI and IT Solutions',
      url: window.location.href,
      type: 'website'
    });
  }

  // Start memory monitoring
  private startMemoryMonitoring(): void {
    if (typeof window === 'undefined') return;
    
    this.memoryInterval = setInterval(() => {
      const memoryUsage = getMemoryUsage();
      if (memoryUsage && memoryUsage.usedJSHeapSize > 100 * 1024 * 1024) { // 100MB
        console.warn('High memory usage detected:', memoryUsage);
      }
    }, 30000); // Check every 30 seconds
  }

  // Cleanup
  public destroy(): void {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
    if (this.memoryInterval) {
      clearInterval(this.memoryInterval);
    }
    this.isInitialized = false;
  }
}

// Export default instance
export const optimizer = new ComprehensiveOptimizer();