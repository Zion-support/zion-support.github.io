/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import { lazy } from 'react';
import type { ComponentType } from 'react';

interface BannerModule {
  default: ComponentType<any>;
}

/**
 * Lazy load a banner component with retry logic
 */
export const lazyLoadBanner = (
  importFn: () => Promise<BannerModule>,
  componentName: string,
) => {
  return lazy(() =>
    importFn().catch(error => {
      console.error(`Failed to load banner: ${componentName}`, error);
      // Retry once after a delay
      return new Promise<BannerModule>(resolve => {
        setTimeout(() => {
          importFn()
            .then(resolve)
            .catch(retryError => {
              console.error(
                `Retry failed for banner: ${componentName}`,
                retryError,
              );
              // Return a fallback component
              resolve({ default: () => null });
            });
        }, 1000);
      });
    }),
  );
};

/**
 * Preload banner components in the background
 */
export const preloadBanners = (
  importFns: Array<() => Promise<BannerModule>>,
) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      importFns.forEach(importFn => {
        importFn().catch(() => {
          // Silently fail for preloading
        });
      });
    });
  }
};

/**
 * Get banner priority based on content date and value
 */
export const getBannerPriority = (bannerName: string): number => {
  // October 2025 content gets highest priority
  if (bannerName.includes('October2025')) {
    if (bannerName.includes('MultiAgent') || bannerName.includes('RealTime')) {
      return 1; // Highest priority
    }
    return 2;
  }

  // 2026+ content gets medium priority
  if (bannerName.includes('2026') || bannerName.includes('2027')) {
    return 3;
  }

  // Older content gets lower priority
  return 4;
};

/**
 * Sort banners by priority for optimal loading
 */
export const sortBannersByPriority = (bannerNames: string[]): string[] => {
  return [...bannerNames].sort((a, b) => {
    return getBannerPriority(a) - getBannerPriority(b);
  });
};

/**
 * Intersection Observer for lazy rendering banners
 */
export class BannerObserver {
  private observer: IntersectionObserver | null = null;
  private loadedBanners = new Set<string>();

  constructor(
    private onBannerVisible: (bannerId: string) => void,
    private options: IntersectionObserverInit = {
      rootMargin: '200px', // Load 200px before entering viewport
      threshold: 0.01,
    },
  ) {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bannerId = entry.target.getAttribute('data-banner-id');
            if (bannerId && !this.loadedBanners.has(bannerId)) {
              this.loadedBanners.add(bannerId);
              this.onBannerVisible(bannerId);
              this.observer?.unobserve(entry.target);
            }
          }
        });
      }, this.options);
    }
  }

  observe(element: Element): void {
    this.observer?.observe(element);
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.loadedBanners.clear();
  }
}

/**
 * Analytics tracking for banner performance
 */
export const trackBannerPerformance = (
  bannerName: string,
  metrics: {
    loadTime?: number;
    renderTime?: number;
    visible?: boolean;
    clicked?: boolean;
  },
) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Send to analytics
    console.log(`Banner Performance [${bannerName}]:`, metrics);
    // You can integrate with your analytics service here
    // Example: gtag('event', 'banner_performance', {...metrics, banner: bannerName });
  }
};

export default {
  lazyLoadBanner,
  preloadBanners,
  getBannerPriority,
  sortBannersByPriority,
  BannerObserver,
  trackBannerPerformance,
};