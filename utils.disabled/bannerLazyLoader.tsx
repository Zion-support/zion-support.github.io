:utils/bannerLazyLoader.ts
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
:utils/bannerLazyLoader.ts
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
:utils/bannerLazyLoader.ts
  preloadBanners,
  preloadBanner,
  getBannerPriority,
  sortBannersByPriority,
  BannerObserver,
  trackBannerPerformance,
  useBannerLoading
:utils/bannerLazyLoader.ts
};
};
