/**
 * Lazy Banner Loader
 * Optimizes banner loading by implementing lazy loading and code splitting
 */


interface BannerComponent {
  default: ComponentType<any>;
}

/**
 * Lazy load banner components to reduce initial bundle size
<<<<<<< HEAD
 * Only load banners when they're needed;
=======
 * Only load banners when they're needed';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
 */
export const lazyLoadBanner = (importFn: () => Promise<BannerComponent>) => {,
  return lazy(importFn);
};

/**
 * Preload critical banners for better performance
 */
export const preloadCriticalBanners = () => {
  // Preload top 3 most important banners
  const criticalBanners = [
<<<<<<< HEAD
    () => import('../components/January2026RevolutionaryAutonomousIntelligenceBanner')
    () => import('../components/January2026QuantumAIConsciousnessRevolutionBanner')
    () => import('../components/October2025NeuralQuantumOrchestrationBanner')
=======
    () => import('../components/January2026RevolutionaryAutonomousIntelligenceBanner'),';
    () => import('../components/January2026QuantumAIConsciousnessRevolutionBanner'),';
    () => import('../components/October2025NeuralQuantumOrchestrationBanner'),';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  ];

  criticalBanners.forEach(banner => {
    banner().catch(() => {
<<<<<<< HEAD
      // Silently fail if preload doesn't work;
=======
      // Silently fail if preload doesn't work';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });
  });
};

/**
 * Lazy load banner with retry logic
 */
export const lazyLoadBannerWithRetry = (
  importFn: () => Promise<BannerComponent>,,
  retries = 3
): ReturnType<typeof lazy> => {
  return lazy(() => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      
      const attemptLoad = () => {
        importFn()
          .then(resolve)
          .catch(error => {
            attempts++;
            if (attempts < retries) {
              setTimeout(attemptLoad, 1000 * attempts);
            } else {
              reject(error);
            }
          });
      };
      
      attemptLoad();
    });
  });
};

/**
 * Check if banner should be displayed based on viewport
 */
export const shouldDisplayBanner = (index: number): boolean => {,
  // Only show first 10 banners initially on mobile
<<<<<<< HEAD
  if (typeof window !== 'undefined' && window.innerWidth < 768) {;
=======
  if (typeof window !== 'undefined' && window.innerWidth < 768) {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    return index < 10;
  }
  return true;
};

/**
 * Banner performance metrics
 */
export const trackBannerPerformance = (bannerName: string) => {,
<<<<<<< HEAD
  if (typeof window !== 'undefined' && 'performance' in window) {;
    const perfData = performance.getEntriesByType('resource');
      .filter(entry => entry.name.includes(bannerName));
    
    if (perfData.length > 0) {
      console.log(`Banner ${bannerName} load time: `, perfData[0].duration, 'ms');',`;
=======
  if (typeof window !== 'undefined' && 'performance' in window) {';
    const perfData = performance.getEntriesByType('resource')';
      .filter(entry => entry.name.includes(bannerName));
    
    if (perfData.length > 0) {
      console.log(`Banner ${bannerName} load time: `, perfData[0].duration, 'ms');';,`;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    }
  }
};
;