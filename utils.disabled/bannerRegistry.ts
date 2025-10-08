];

/**
 * Get banners by category
 */
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
:utils/bannerRegistry.ts
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
:utils/bannerRegistry.ts
export function getBannersByPriority(minPriority: number, maxPriority: number): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner =>
      banner.priority >= minPriority &&
      banner.priority <= maxPriority &&
      banner.enabled
  );
  );
:utils/bannerRegistry.ts
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
:utils/bannerRegistry.ts
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
:utils/bannerRegistry.ts
}
<:utils/bannerRegistry.ts
export default BANNER_REGISTRY;
