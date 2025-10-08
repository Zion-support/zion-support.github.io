/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */

import { lazy, ComponentType } from 'react';

interface LazyBannerConfig {
  importPath: string;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

                retryError
              );
              // Return a fallback component
              resolve({ default: () => null });
              // console.error(`Retry failed for banner: ${componentName}`, retryError);
              // Return a fallback component
              resolve({
                default: () => React.createElement('div', null, 'Banner temporarily unavailable')
              } as BannerModule);
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
  });
};

/**
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
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        importFn().catch(error => {
          // console.warn('Banner preload failed:', error);
        });
      }, 100);
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
 * Banner loading state management
 */
/**
 * Hook for banner loading state
 */
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
    // console.log(`Banner Performance [${bannerName}]:`, metrics);
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
};
};
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
  private loadedBanners: Map<string, ComponentType<any>> = new Map();

  addBanner(config: BannerConfig): void {
    this.configs.push(config);
    if (config.preload) {
      this.preloadBanner(config);
    }
  }

  private async preloadBanner(config: BannerConfig): Promise<void> {
    try {
      const module = await config.importFn();
      this.loadedBanners.set(config.name, module.default);
    } catch (error) {
      // console.warn(`Failed to preload banner: ${config.name}`, error);
    }
  }

  getBanner(name: string): ComponentType<any> | null {
    return this.loadedBanners.get(name) || null;
  }

  getAllBanners(): ComponentType<any>[] {
    return Array.from(this.loadedBanners.values());
  }

  sortByPriority(): BannerConfig[] {
    return [...this.configs].sort((a, b) => a.priority - b.priority);
  }
}
