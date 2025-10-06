/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import { lazy, ComponentType } from 'react';

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
                retryError
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
      console.warn(`Failed to preload banner: ${config.name}`, error);
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