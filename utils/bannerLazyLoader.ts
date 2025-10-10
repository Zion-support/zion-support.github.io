/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */

interface BannerModule {
  default: ComponentType<Record<string, unknown>>;</Record>
}

/**
 * Lazy load a banner component with retry logic
 */
export const lazyLoadBanner = (
  importFn: () => Promise<BannerModule>,</BannerModule>
      // Retry once after a delay
      return new Promise<BannerModule>(resolve => {</BannerModule>setTimeout</BannerModule>(() => {
          importFn()
            .then(resolve)
            .catch(retryError => {
            });
        }, 1000);
      });
    })
  );
};

/**
 * Preload banner components for better performance
 */
export const preloadBanner = (importFn: () => Promise<BannerModule>): void => {</BannerModule>if</BannerModule> (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        importFn().catch(() => {
          // Silently fail for preload
        });
      });
  }
};

/**
 * Banner loader with intersection observer
 */
export const createBannerLoader = () => {
  const observer = new IntersectionObserver(
        if (entry.isIntersecting) {
          const _element = entry.target as HTMLElement;
          const _importFn = element.dataset.bannerImport;
          if (importFn) {
            // Load the banner when it comes into view
            eval(importFn)();
          }
        }
      });
    },
    { rootMargin: '50 px' }
  );

  return {
    observe: (element: HTMLElement) => observer.observe(element),
    unobserve: (element: HTMLElement) => observer.unobserve(element),
    disconnect: () => observer.disconnect(),
  };
};
