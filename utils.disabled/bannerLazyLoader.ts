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