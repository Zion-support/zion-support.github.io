/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */

import React, { lazy, ComponentType, Suspense, useState, useEffect } from 'react';

interface LazyBannerProps {
  importPath: string;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  threshold?: number;
  rootMargin?: string;
}

interface BannerLoadState {
  loaded: boolean;
  error: Error | null;
  loading: boolean;
}

export const LazyBanner: React.FC<LazyBannerProps> = ({
  importPath,
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  onLoad,
  onError,
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const [loadState, setLoadState] = useState<BannerLoadState>({
    loaded: false,
    error: null,
    loading: false,
  });

  const [BannerComponent, setBannerComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    const loadBanner = async () => {
      if (loadState.loading || loadState.loaded || BannerComponent) return;

      setLoadState(prev => ({ ...prev, loading: true }));

      try {
        const module = await import(importPath);
        const component = module.default || module;
        setBannerComponent(() => component);
        setLoadState({ loaded: true, error: null, loading: false });
        onLoad?.();
      } catch (error) {
        const errorObj = error instanceof Error ? error : new Error('Failed to load banner');
        setLoadState({ loaded: false, error: errorObj, loading: false });
        onError?.(errorObj);
      }
    };

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loadState.loaded && !loadState.loading) {
            loadBanner();
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = document.getElementById(`lazy-banner-${importPath}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [importPath, loadState.loaded, loadState.loading, BannerComponent, onLoad, onError, threshold, rootMargin]);

  if (loadState.error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded p-4">
        <p className="text-red-600">Failed to load banner: {loadState.error.message}</p>
      </div>
    );
  }

  if (!BannerComponent) {
    return <div id={`lazy-banner-${importPath}`}>{fallback}</div>;
  }

  return (
    <Suspense fallback={fallback}>
      <BannerComponent />
    </Suspense>
  );
};

export class BannerLazyLoader {
  private loadedBanners: Map<string, ComponentType<any>> = new Map();
  private loadingPromises: Map<string, Promise<ComponentType<any>>> = new Map();
  private preloadQueue: string[] = [];
  private maxConcurrentLoads: number = 3;
  private currentLoads: number = 0;

  constructor(maxConcurrentLoads: number = 3) {
    this.maxConcurrentLoads = maxConcurrentLoads;
  }

  /**
   * Load a banner component lazily
   */
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
      this.currentLoads = Math.max(0, this.currentLoads - 1);
    }
  }

  private async performLoad(importPath: string): Promise<ComponentType<any>> {
    // Wait for available slot if at max concurrent loads
    while (this.currentLoads >= this.maxConcurrentLoads) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.currentLoads++;

    try {
      const module = await import(importPath);
      return module.default || module;
    } catch (error) {
      throw new Error(`Failed to load banner from ${importPath}: ${error}`);
    }
  }

  /**
   * Preload a banner component
   */
  preloadBanner(importPath: string): void {
    if (!this.preloadQueue.includes(importPath) && !this.loadedBanners.has(importPath)) {
      this.preloadQueue.push(importPath);
      this.processPreloadQueue();
    }
  }

  private async processPreloadQueue(): Promise<void> {
    while (this.preloadQueue.length > 0 && this.currentLoads < this.maxConcurrentLoads) {
      const importPath = this.preloadQueue.shift()!;
      this.loadBanner(importPath).catch(console.error);
    }
  }

  /**
   * Get loaded banner component
   */
  getBanner(importPath: string): ComponentType<any> | null {
    return this.loadedBanners.get(importPath) || null;
  }

  /**
   * Check if banner is loaded
   */
  isLoaded(importPath: string): boolean {
    return this.loadedBanners.has(importPath);
  }

  /**
   * Check if banner is loading
   */
  isLoading(importPath: string): boolean {
    return this.loadingPromises.has(importPath);
  }

  /**
   * Get loading statistics
   */
  getStats(): object {
    return {
      loadedBanners: this.loadedBanners.size,
      loadingBanners: this.loadingPromises.size,
      preloadQueue: this.preloadQueue.length,
      currentLoads: this.currentLoads,
      maxConcurrentLoads: this.maxConcurrentLoads,
    };
  }

  /**
   * Clear all loaded banners
   */
  clear(): void {
    this.loadedBanners.clear();
    this.loadingPromises.clear();
    this.preloadQueue = [];
    this.currentLoads = 0;
  }

  /**
   * Destroy the loader
   */
  destroy(): void {
    this.clear();
  }
}

// Utility functions
export const createBannerLazyLoader = (maxConcurrentLoads?: number): BannerLazyLoader => {
  return new BannerLazyLoader(maxConcurrentLoads);
};

export const withLazyLoading = <P extends object>(
  importPath: string,
  fallback?: React.ReactNode
) => {
  return React.forwardRef<any, P>((props, ref) => (
    <LazyBanner
      importPath={importPath}
      fallback={fallback}
      {...props}
    />
  ));
};

export default BannerLazyLoader;
import { lazy } from 'react';
import type { ComponentType } from 'react';
import React, { lazy, ComponentType } from 'react';
import { lazy, type ComponentType } from 'react';

interface BannerModule {
  default: ComponentType<Record<string, unknown>>;
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
                default: () => {
                  const React = require('react');
                  return React.createElement('div', { className: 'banner-fallback' },
                    React.createElement('p', null, 'Banner temporarily unavailable')
                  );
                }
              });
                retryError
              );
                default: () => (
                  <div className="banner-fallback">
                    <p>Banner temporarily unavailable</p>
                  </div>
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
    setTimeout(() => {
      importFn().catch(() => {
        // Silently fail for preload
      });
<<<<<<< HEAD:utils/bannerLazyLoader.ts
    }
  }
};
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
<<<<<<< HEAD:utils/bannerLazyLoader.ts
        });
      }, this.options);
    } else {
      setTimeout(() => {
        importFn().catch(() => {
          // Silently fail for preload
        });
      }, {
        rootMargin: '50px',
        threshold: 0.01,
      });
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
 * Banner loader with intersection observer
 */
export const useBannerLoading = (componentName: string) => {
  const manager = new BannerLoadingManager();
  return {
    isLoading: manager.isLoading(componentName),
    isLoaded: manager.isLoaded(componentName),
    setLoading: (loading: boolean) => manager.setLoading(componentName, loading)
  };
};

export default {
  lazyLoadBanner,
<<<<<<< HEAD:utils/bannerLazyLoader.ts
  preloadBanners,
  preloadBanner,
  getBannerPriority,
  sortBannersByPriority,
  BannerObserver,
  trackBannerPerformance,
  useBannerLoading
<<<<<<< HEAD:utils/bannerLazyLoader.ts
};
};
