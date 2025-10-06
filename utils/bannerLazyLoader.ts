/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { lazy } from 'react';
=======
import React, { lazy } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
import type { ComponentType } from 'react';
=======
import { lazy, ComponentType } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
import { lazy, ComponentType } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051

=======
import { lazy, ComponentType } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
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
<<<<<<< HEAD
              console.error(
                `Retry failed for banner: ${componentName}`,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
                retryError
              );
              // Return a fallback component
              resolve({ default: () => null });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                retryError,
              );
              // Return a fallback component
              resolve({
                default: () => {
                  const div = document.createElement('div');
                  div.className = 'banner-error';
                  const p = document.createElement('p');
                  p.textContent = `Failed to load banner: ${componentName}`;
                  div.appendChild(p);
                  return div as any;
                },
              });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
              console.error(`Retry failed for banner: ${componentName}`, retryError);
              // Return a fallback component
              resolve({
                default: () => React.createElement('div', null, 'Banner temporarily unavailable')
              } as BannerModule);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
            });
        }, 1000);
      });
    })
  );
};

/**
 * Preload banner components for better performance
 */
export const preloadBanner = (importFn: () => Promise<BannerModule>): void => {
<<<<<<< HEAD
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for non-blocking preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        importFn().catch(error => {
          console.warn('Banner preload failed:', error);
        });
      });
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
  // Preload in the background
  importFn().catch(error => {
    console.warn('Banner preload failed:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
  });
};

/**
 * Banner loading state management
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
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
=======
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        importFn().catch(error => {
          console.warn('Banner preload failed:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
        });
      }, 100);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051

  observe(element: Element): void {
    this.observer?.observe(element);
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.loadedBanners.clear();
  }
}

<<<<<<< HEAD
=======
};

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
/**
 * Banner loading state management
 */
<<<<<<< HEAD
export class BannerLoader {
  private loadingStates = new Map<string, boolean>();
  private loadedComponents = new Set<string>();

  isLoaded(componentName: string): boolean {
    return this.loadedComponents.has(componentName);
  }

  isLoading(componentName: string): boolean {
    return this.loadingStates.get(componentName) || false;
  }

  setLoading(componentName: string, loading: boolean): void {
    this.loadingStates.set(componentName, loading);
  }

  setLoaded(componentName: string): void {
    this.loadedComponents.add(componentName);
    this.loadingStates.delete(componentName);
  }

  getLoadingCount(): number {
    return Array.from(this.loadingStates.values()).filter(Boolean).length;
  }

  getAllLoadedComponents(): string[] {
    return Array.from(this.loadedComponents);
  }
}

// Global banner loader instance
export const bannerLoader = new BannerLoader();

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
/**
 * Hook for banner loading state
 */
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
export const trackBannerPerformance = (
  bannerName: string,
  metrics: {
    loadTime?: number;
    renderTime?: number;
    visible?: boolean;
    clicked?: boolean;
  }
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
<<<<<<< HEAD
};
=======
export const useBannerLoadingState = (componentName: string) => {
  return {
    isLoading: bannerLoader.isLoading(componentName),
    isLoaded: bannerLoader.isLoaded(componentName),
  };
};

/**
 * Banner loading configuration
 */
export interface BannerConfig {
  componentName: string;
  importFn: () => Promise<BannerModule>;
  preload?: boolean;
  retryAttempts?: number;
  retryDelay?: number;
}

/**
 * Load multiple banners with configuration
 */
export const loadBanners = async (configs: BannerConfig[]): Promise<void> => {
  const loadPromises = configs.map(async config => {
    const { componentName, importFn, preload = false } = config;
    
    if (preload) {
      preloadBanner(importFn);
    }

    try {
      bannerLoader.setLoading(componentName, true);
      await importFn();
      bannerLoader.setLoaded(componentName);
    } catch (error) {
      console.error(`Failed to load banner: ${componentName}`, error);
    } finally {
      bannerLoader.setLoading(componentName, false);
    }
  });

  await Promise.allSettled(loadPromises);
};

export default {
  lazyLoadBanner,
  preloadBanner,
  BannerLoader,
  bannerLoader,
  useBannerLoadingState,
  loadBanners,
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
export class BannerLoader {
  private static loadingStates = new Map<string, boolean>();
  private static loadedComponents = new Set<string>();

  static setLoading(componentName: string, isLoading: boolean): void {
    this.loadingStates.set(componentName, isLoading);
  }

  static isLoading(componentName: string): boolean {
    return this.loadingStates.get(componentName) || false;
  }

  static setLoaded(componentName: string): void {
    this.loadedComponents.add(componentName);
    this.setLoading(componentName, false);
  }

  static isLoaded(componentName: string): boolean {
    return this.loadedComponents.has(componentName);
  }

  static reset(): void {
    this.loadingStates.clear();
    this.loadedComponents.clear();
  }
}

/**
 * Banner priority management
 */
export const bannerPriority = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
} as const;

export type BannerPriority = typeof bannerPriority[keyof typeof bannerPriority];

/**
 * Load banners based on priority
 */
export const loadBannersByPriority = (
  banners: Array<{
    name: string;
    priority: BannerPriority;
    importFn: () => Promise<BannerModule>;
  }>
): void => {
  const sortedBanners = banners.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  sortedBanners.forEach(({ name, importFn }) => {
    BannerLoader.setLoading(name, true);
    preloadBanner(importFn);
  });
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
