/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import React, { lazy, ComponentType } from 'react';

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
              resolve({
                default: () => React.createElement('div', { className: 'banner-fallback' },
                  React.createElement('p', null, 'Banner temporarily unavailable')
                )
              });
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
  if (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        importFn().catch(() => {
          // Silently fail for preload
        });
      });
    } else {
      setTimeout(() => {
        importFn().catch(() => {
          // Silently fail for preload
        });
      }, 100);
    }
  }
};

/**
 * Banner loading state manager
 */
export class BannerLoadingManager {
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
    if (!loading) {
      this.loadedComponents.add(componentName);
    }
  }

  getLoadingCount(): number {
    return Array.from(this.loadingStates.values()).filter(Boolean).length;
  }
}

/**
 * Hook for banner loading state
 */
export const useBannerLoading = (componentName: string) => {
  const manager = new BannerLoadingManager();
  
  return {
    isLoading: manager.isLoading(componentName),
    isLoaded: manager.isLoaded(componentName),
    setLoading: (loading: boolean) => manager.setLoading(componentName, loading)
  };
};