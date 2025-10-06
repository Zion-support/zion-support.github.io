/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import { lazy } from 'react';
import type { ComponentType } from 'react';

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
 * Banner loader with intersection observer
 */
export class BannerLoader {
  private observer: IntersectionObserver | null = null;
  private loadedBanners: Set<string> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          rootMargin: '50px 0px',
          threshold: 0.1,
        }
      );
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bannerElement = entry.target as HTMLElement;
        const bannerId = bannerElement.dataset['bannerId'];
        
        if (bannerId && !this.loadedBanners.has(bannerId)) {
          this.loadBanner(bannerElement, bannerId);
          this.loadedBanners.add(bannerId);
          this.observer?.unobserve(bannerElement);
        }
      }
    });
  }

  private async loadBanner(element: HTMLElement, bannerId: string): Promise<void> {
    try {
      // This would be implemented based on your banner loading strategy
      console.log(`Loading banner: ${bannerId}`);
      
      // Add loading class
      element.classList.add('banner-loading');
      
      // Simulate banner loading
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Remove loading class and add loaded class
      element.classList.remove('banner-loading');
      element.classList.add('banner-loaded');
    } catch (error) {
      console.error(`Failed to load banner ${bannerId}:`, error);
      element.classList.add('banner-error');
    }
  }

  public observe(element: HTMLElement): void {
    this.observer?.observe(element);
  }

  public unobserve(element: HTMLElement): void {
    this.observer?.unobserve(element);
  }

  public disconnect(): void {
    this.observer?.disconnect();
  }
}

/**
 * Banner performance metrics
 */
export interface BannerMetrics {
  loadTime: number;
  renderTime: number;
  errorCount: number;
  retryCount: number;
}

/**
 * Banner performance tracker
 */
export class BannerPerformanceTracker {
  private metrics: Map<string, BannerMetrics> = new Map();

  public startTracking(bannerId: string): void {
    this.metrics.set(bannerId, {
      loadTime: 0,
      renderTime: 0,
      errorCount: 0,
      retryCount: 0,
    });
  }

  public recordLoadTime(bannerId: string, loadTime: number): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.loadTime = loadTime;
    }
  }

  public recordRenderTime(bannerId: string, renderTime: number): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.renderTime = renderTime;
    }
  }

  public recordError(bannerId: string): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.errorCount++;
    }
  }

  public recordRetry(bannerId: string): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.retryCount++;
    }
  }

  public getMetrics(bannerId: string): BannerMetrics | undefined {
    return this.metrics.get(bannerId);
  }

  public getAllMetrics(): Map<string, BannerMetrics> {
    return new Map(this.metrics);
  }
}

// Export singleton instances
export const bannerLoader = new BannerLoader();
export const bannerPerformanceTracker = new BannerPerformanceTracker();