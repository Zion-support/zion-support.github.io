/**
 * Comprehensive optimization utilities that integrate accessibility, performance, and SEO
 */
import {
<<<<<<< HEAD
  focusManagement,
  ariaUtils,
  keyboardNavigation,
  colorContrast,
  screenReader,
  formAccessibility,
  motionAccessibility,
  initAccessibility,
  accessibilityTesting,
  motionUtils
} from './accessibilityUtils';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9fc8
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
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9fc8
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
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9fc8
/**
 * Comprehensive optimization configuration
 */
export interface OptimizationConfig {
<<<<<<< HEAD
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
  enableAccessibility: boolean;
  enablePerformance: boolean;
  enableSEO: boolean;
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableAnalytics: boolean;
  performanceThresholds: {
    maxLoadTime: number;
    maxMemoryUsage: number;
    maxBundleSize: number;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9fc8
  };
  accessibilityLevel: 'AA' | 'AAA';
  seoLevel: 'basic' | 'advanced';
}

<<<<<<< HEAD
=======
    }
    // Add skip links
    this.addSkipLinks();
  }
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-9fc8
  /**
   * Update configuration
   */
