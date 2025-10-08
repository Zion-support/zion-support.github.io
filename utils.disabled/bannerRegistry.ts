/**
];

/**
 * Get banners by category
 */
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051

/**
 * Get banners by priority range
 */
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export function getBannersByPriority(minPriority: number, maxPriority: number): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner =>
      banner.priority >= minPriority &&
      banner.priority <= maxPriority &&
      banner.enabled
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  );
};

/**
 * Get top priority banners
 */
export function getTopPriorityBanners(count: number = 5): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.enabled)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, count);
}
/**
 * Get banners by tags
 */
export function getBannersByTags(tags: string[]): BannerConfig[] {
  return BANNER_REGISTRY.filter(
    banner => tags.some(tag => banner.tags.includes(tag)) && banner.enabled
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a4f

/**
 * Get enabled banners sorted by priority
 */

/**
 * Get banner by ID
 */

/**
 * Get banners by tags (duplicate function - removing)
 */
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
