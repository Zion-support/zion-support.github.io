/**
 * Banner Registry - Centralized banner management system
 *
 * This module provides:
 * - Organized banner categorization
 * - Priority-based rendering
 * - Dynamic banner loading
 * - Banner analytics tracking
 */

export interface BannerConfig {
  id: string;
  name: string;
  priority: number; // 1 = highest priority, 100 = lowest
  category: 'breakthrough' | 'content' | 'success-story' | 'feature' | 'announcement';
  importPath: string;
  datePublished: string;
  tags: string[];
  enabled: boolean;
  metadata?: {
    description?: string;
    author?: string;
    version?: string;
    lastModified?: string;
  };
}

export interface BannerInstance {
  config: BannerConfig;
  component?: React.ComponentType;
  loaded: boolean;
  error?: string;
  lastRendered?: Date;
  renderCount: number;
}

export class BannerRegistry {
  private banners: Map<string, BannerInstance> = new Map();
  private categories: Map<string, string[]> = new Map();
  private priorityQueue: string[] = [];
  private maxConcurrentBanners: number = 3;
  private loadingPromises: Map<string, Promise<void>> = new Map();

  constructor(maxConcurrentBanners: number = 3) {
    this.maxConcurrentBanners = maxConcurrentBanners;
    this.initializeCategories();
  }

  private initializeCategories(): void {
    this.categories.set('breakthrough', []);
    this.categories.set('content', []);
    this.categories.set('success-story', []);
    this.categories.set('feature', []);
    this.categories.set('announcement', []);
  }

  public registerBanner(config: BannerConfig): void {
    const instance: BannerInstance = {
      config,
      loaded: false,
      renderCount: 0,
    };

    this.banners.set(config.id, instance);
    this.updateCategory(config.id, config.category);
    this.updatePriorityQueue();
  }

  public async loadBanner(id: string): Promise<void> {
    const instance = this.banners.get(id);
    if (!instance || instance.loaded) {
      return;
    }

    // Check if already loading
    if (this.loadingPromises.has(id)) {
      return this.loadingPromises.get(id);
    }

    const loadPromise = this.performBannerLoad(instance);
    this.loadingPromises.set(id, loadPromise);

    try {
      await loadPromise;
    } finally {
      this.loadingPromises.delete(id);
    }
  }

  private async performBannerLoad(instance: BannerInstance): Promise<void> {
    try {
      const module = await import(instance.config.importPath);
      instance.component = module.default || module[instance.config.name];
      instance.loaded = true;
    } catch (error) {
      instance.error = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Failed to load banner ${instance.config.id}:`, error);
    }
  }

  public getBanner(id: string): BannerInstance | undefined {
    return this.banners.get(id);
  }

  public getBannersByCategory(category: string): BannerInstance[] {
    const bannerIds = this.categories.get(category) || [];
    return bannerIds
      .map(id => this.banners.get(id))
      .filter((banner): banner is BannerInstance => banner !== undefined);
  }

  public getTopBanners(count: number = this.maxConcurrentBanners): BannerInstance[] {
    return this.priorityQueue
      .slice(0, count)
      .map(id => this.banners.get(id))
      .filter((banner): banner is BannerInstance => banner !== undefined);
  }

  public getEnabledBanners(): BannerInstance[] {
    return Array.from(this.banners.values()).filter(instance => instance.config.enabled);
  }

  public async preloadBanners(count: number = this.maxConcurrentBanners): Promise<void> {
    const topBanners = this.getTopBanners(count);
    const loadPromises = topBanners
      .filter(instance => !instance.loaded && !instance.error)
      .map(instance => this.loadBanner(instance.config.id));

    await Promise.allSettled(loadPromises);
  }

  public recordBannerRender(id: string): void {
    const instance = this.banners.get(id);
    if (instance) {
      instance.renderCount++;
      instance.lastRendered = new Date();
    }
  }

  public getBannerStats(): object {
    const banners = Array.from(this.banners.values());
    const loadedBanners = banners.filter(banner => banner.loaded);
    const errorBanners = banners.filter(banner => banner.error);

    return {
      totalBanners: banners.length,
      loadedBanners: loadedBanners.length,
      errorBanners: errorBanners.length,
      categories: Object.fromEntries(this.categories),
      topRenderedBanners: banners
        .sort((a, b) => b.renderCount - a.renderCount)
        .slice(0, 5)
        .map(banner => ({
          id: banner.config.id,
          name: banner.config.name,
          renderCount: banner.renderCount,
        })),
    };
  }

  private updateCategory(bannerId: string, category: string): void {
    // Remove from all categories first
    this.categories.forEach((bannerIds, cat) => {
      const index = bannerIds.indexOf(bannerId);
      if (index > -1) {
        bannerIds.splice(index, 1);
      }
    });

    // Add to new category
    const categoryBanners = this.categories.get(category) || [];
    if (!categoryBanners.includes(bannerId)) {
      categoryBanners.push(bannerId);
      this.categories.set(category, categoryBanners);
    }
  }

  private updatePriorityQueue(): void {
    const enabledBanners = this.getEnabledBanners();
    this.priorityQueue = enabledBanners
      .sort((a, b) => a.config.priority - b.config.priority)
      .map(instance => instance.config.id);
  }

  public enableBanner(id: string): void {
    const instance = this.banners.get(id);
    if (instance) {
      instance.config.enabled = true;
      this.updatePriorityQueue();
    }
  }

  public disableBanner(id: string): void {
    const instance = this.banners.get(id);
    if (instance) {
      instance.config.enabled = false;
      this.updatePriorityQueue();
    }
  }

  public removeBanner(id: string): void {
    this.banners.delete(id);
    this.categories.forEach((bannerIds, category) => {
      const index = bannerIds.indexOf(id);
      if (index > -1) {
        bannerIds.splice(index, 1);
      }
    });
    this.priorityQueue = this.priorityQueue.filter(bannerId => bannerId !== id);
  }

  public destroy(): void {
    this.banners.clear();
    this.categories.clear();
    this.priorityQueue = [];
    this.loadingPromises.clear();
  }
}

// Utility functions
export const createBannerRegistry = (maxConcurrentBanners?: number): BannerRegistry => {
  return new BannerRegistry(maxConcurrentBanners);
};

export const registerBanner = (registry: BannerRegistry, config: BannerConfig): void => {
  registry.registerBanner(config);
};

export default BannerRegistry;
  },
<<<<<<< HEAD:utils/bannerRegistry.ts
];

/**
 * Get banners by category
 */
<<<<<<< HEAD:utils/bannerRegistry.ts
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
export const getBannersByCategory = (category: BannerConfig['category']): BannerConfig[] => {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
};
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}

/**
 * Get banners by priority range
 */
<<<<<<< HEAD:utils/bannerRegistry.ts
export function getBannersByPriority(minPriority: number, maxPriority: number): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner =>
      banner.priority >= minPriority &&
      banner.priority <= maxPriority &&
      banner.enabled
  );
<<<<<<< HEAD:utils/bannerRegistry.ts
}
};

/**
 * Get top priority banners
 */
export function getTopPriorityBanners(count: number = 5): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.enabled)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, count);
}
<<<<<<< HEAD:utils/bannerRegistry.ts
/**
 * Get banners by tags
 */
export function getBannersByTags(tags: string[]): BannerConfig[] {
  return BANNER_REGISTRY.filter(
    banner => tags.some(tag => banner.tags.includes(tag)) && banner.enabled
  );
}

/**
 * Get enabled banners sorted by priority
 */
<<<<<<< HEAD:utils/bannerRegistry.ts
export function getEnabledBanners(): BannerConfig[] {
  return BANNER_REGISTRY
    .filter(banner => banner.enabled)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get banner by ID
 */
<<<<<<< HEAD:utils/bannerRegistry.ts
export function getBannerById(id: string): BannerConfig | undefined {
  return BANNER_REGISTRY.find(banner => banner.id === id);
}

/**
 * Get banners by tags (duplicate function - removing)
 */
<<<<<<< HEAD:utils/bannerRegistry.ts
export function getBannersByTags(tags: string[]): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => 
    banner.enabled && tags.some(tag => banner.tags.includes(tag))
  );
}

/**
 * Get recent banners (published within last N days)
 */
export function getRecentBanners(days: number = 30): BannerConfig[] {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return BANNER_REGISTRY.filter(banner => {
    if (!banner.enabled) return false;
    const publishDate = new Date(banner.datePublished);
    return publishDate >= cutoffDate;
  });
<<<<<<< HEAD:utils/bannerRegistry.ts
}
<<<<<<<< HEAD:utils/bannerRegistry.ts
export default BANNER_REGISTRY;
========
};

export default BANNER_REGISTRY;
 * Banner Registry Utility
 */
export interface BannerInfo {
  id: string;
  name: string;
  component: any;
  priority: number;
  category: string;
}

export class BannerRegistry {
  private banners = new Map<string, BannerInfo>();

  register(banner: BannerInfo): void {
    this.banners.set(banner.id, banner);
  }

  unregister(id: string): void {
    this.banners.delete(id);
  }

  get(id: string): BannerInfo | undefined {
    return this.banners.get(id);
  }

  getAll(): BannerInfo[] {
    return Array.from(this.banners.values());
  }

  getByCategory(category: string): BannerInfo[] {
    return Array.from(this.banners.values()).filter(
      banner => banner.category === category
    );
  }
}

export const bannerRegistry = new BannerRegistry();
export default bannerRegistry;
