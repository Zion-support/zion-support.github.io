/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import React, { lazy } from 'react';
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
              console.error(`Retry failed for banner: ${componentName}`, retryError);
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
  // Preload in the background
  importFn().catch(error => {
    console.warn('Banner preload failed:', error);
  });
};

/**
 * Banner loading state management
 */
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