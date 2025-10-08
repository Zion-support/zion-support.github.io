];

/**
 * Get banners by category
 */
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}

/**
 * Get banners by priority range
 */
export function getBannersByPriority(minPriority: number, maxPriority: number): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner =>
      banner.priority >= minPriority &&
      banner.priority <= maxPriority &&
      banner.enabled
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

/**
 * Get enabled banners sorted by priority
 */

/**
 * Get banner by ID
 */

/**
 * Get banners by tags (duplicate function - removing)
 */
