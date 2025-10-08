/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
=======
import { lazy, ComponentType } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/bannerLazyLoader.ts

import { lazy, ComponentType } from 'react';

interface LazyBannerConfig {
  importPath: string;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
                retryError
              );
              // Return a fallback component
              resolve({ default: () => null });
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  });
};

/**
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008

  observe(element: Element): void {
    this.observer?.observe(element);
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.loadedBanners.clear();
  }
}

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
/**
 * Banner loading state management
 */
/**
 * Hook for banner loading state
 */
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
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
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
 * Banner loading configuration
 */
export interface BannerConfig {
  name: string;
  importFn: () => Promise<BannerModule>;
  priority: number;
  preload: boolean;
}

/**
 * Create banner configuration
 */
export const createBannerConfig = (
  name: string,
  importFn: () => Promise<BannerModule>,
  preload: boolean = false
): BannerConfig => ({
  name,
  importFn,
  priority: getBannerPriority(name),
  preload,
});

/**
 * Banner manager for handling multiple banners
 */
export class BannerManager {
  private configs: BannerConfig[] = [];
=======
export class BannerLazyLoader {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3f25:utils/bannerLazyLoader.ts
  private loadedBanners: Map<string, ComponentType<any>> = new Map();
  private loadingPromises: Map<string, Promise<ComponentType<any>>> = new Map();

  async loadBanner(importPath: string): Promise<ComponentType<any>> {
    // Return cached component if already loaded
    if (this.loadedBanners.has(importPath)) {
      return this.loadedBanners.get(importPath)!;
    }

    // Return existing promise if already loading
    if (this.loadingPromises.has(importPath)) {
      return this.loadingPromises.get(importPath)!;
    }

    // Create new loading promise
    const loadPromise = this.performLoad(importPath);
    this.loadingPromises.set(importPath, loadPromise);

    try {
      const component = await loadPromise;
      this.loadedBanners.set(importPath, component);
      return component;
    } finally {
      this.loadingPromises.delete(importPath);
    }
  }

  private async performLoad(importPath: string): Promise<ComponentType<any>> {
    try {
      const module = await import(importPath);
      return module.default || module;
    } catch (error) {
      throw new Error(`Failed to load banner from ${importPath}: ${error}`);
    }
  }

  getBanner(importPath: string): ComponentType<any> | null {
    return this.loadedBanners.get(importPath) || null;
  }

  isLoaded(importPath: string): boolean {
    return this.loadedBanners.has(importPath);
  }

  isLoading(importPath: string): boolean {
    return this.loadingPromises.has(importPath);
  }

  clear(): void {
    this.loadedBanners.clear();
    this.loadingPromises.clear();
  }

  destroy(): void {
    this.clear();
  }
}

export const createBannerLazyLoader = (): BannerLazyLoader => {
  return new BannerLazyLoader();
};

export default BannerLazyLoader;