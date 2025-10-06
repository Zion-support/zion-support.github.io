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
            });
        }, 1000);
      });
    }),
  );
};

/**
 * Preload banner components for better performance
 */
export const preloadBanner = (importFn: () => Promise<BannerModule>): void => {
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for non-blocking preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        importFn().catch(error => {
          console.warn('Banner preload failed:', error);
        });
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        importFn().catch(error => {
          console.warn('Banner preload failed:', error);
        });
      }, 100);
    }
  }
};

/**
 * Banner loading state management
 */
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

/**
 * Hook for banner loading state
 */
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
