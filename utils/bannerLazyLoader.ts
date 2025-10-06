/**
 * Banner Lazy Loader Utility
 *
 * Optimizes banner loading by implementing lazy loading and code splitting
 * to improve initial page load performance.
 */
import { lazy } from 'react';
import type { ComponentType } from 'react';
<<<<<<< HEAD
=======
import { lazy, ComponentType } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb

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
<<<<<<< HEAD
                retryError
              );
              // Return a fallback component
              resolve({ default: () => null });
=======
                retryError,
              );
              // Return a fallback component
              resolve({ default: () => null });
                retryError
              );
              // Return a fallback component
              resolve({
                default: () => (
                  <div className="banner-fallback">
                    <p>Banner temporarily unavailable</p>
                  </div>
                )
              });
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
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
    });
  }
};

/**
 * Banner loader with intersection observer
 */
<<<<<<< HEAD
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
=======
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
    } else {
      setTimeout(() => {
        importFn().catch(() => {
          // Silently fail for preload
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
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
  }
}

/**
<<<<<<< HEAD
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
=======
 * Hook for banner loading state
 */
export const trackBannerPerformance = (
  bannerName: string,
  metrics: {
    loadTime?: number;
    renderTime?: number;
    visible?: boolean;
    clicked?: boolean;
  },
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
export const useBannerLoading = (componentName: string) => {
  const manager = new BannerLoadingManager();
  return {
    isLoading: manager.isLoading(componentName),
    isLoaded: manager.isLoaded(componentName),
    setLoading: (loading: boolean) => manager.setLoading(componentName, loading)
  };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
