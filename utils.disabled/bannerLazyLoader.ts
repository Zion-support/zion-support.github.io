/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import { lazy, ComponentType } from 'react';

import { lazy, ComponentType } from 'react';

interface LazyBannerConfig {
  importPath: string;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export class BannerLazyLoader {
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
import { lazy } from 'react';
import type { ComponentType } from 'react';
import { lazy, ComponentType } from 'react';
import { lazy, ComponentType } from 'react';

import { lazy, ComponentType } from 'react';
import { lazy, ComponentType } from 'react';

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
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for non-blocking preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        importFn().catch(error => {
          console.warn('Banner preload failed:', error);
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
 * Banner loading state management
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
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        importFn().catch(error => {
          console.warn('Banner preload failed:', error);
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
