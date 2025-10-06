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
}

/**
 * Banner Registry - All banners in the system
 * Sorted by priority (highest first)
 */
export const BANNER_REGISTRY: BannerConfig[] = [
  // === TOP PRIORITY BANNERS (Priority 1-10) ===
  {
    id: 'january-2026-fresh-content',
    name: 'January 2026 Fresh Content Showcase',
    priority: 1,
    category: 'content',
    importPath: './components/January2026FreshContentShowcaseBanner',
    datePublished: '2026-01-01',
    tags: ['january-2026', 'fresh-content', 'showcase'],
    enabled: true
  },
  {
    id: 'january-2026-revolutionary-ai',
    name: 'January 2026 Revolutionary AI Content',
    priority: 2,
    category: 'breakthrough',
    importPath: './components/January2026RevolutionaryAIContentBanner',
    datePublished: '2026-01-01',
    tags: ['january-2026', 'revolutionary-ai', 'breakthrough'],
    enabled: true
  },
  {
    id: 'february-2026-mega-breakthrough',
    name: 'February 2026 Mega Breakthrough Revolution',
    priority: 3,
    category: 'breakthrough',
    importPath: './components/February2026MegaBreakthroughRevolutionBanner',
    datePublished: '2026-02-01',
    tags: ['february-2026', 'mega-breakthrough', 'revolution'],
    enabled: true
  }
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
}
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
    banner => banner.priority >= minPriority && banner.priority <= maxPriority && banner.enabled
  );
}

/**
 * Get enabled banners sorted by priority
 */
export function getEnabledBanners(): BannerConfig[] {
  return BANNER_REGISTRY
    .filter(banner => banner.enabled)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get banner by ID
 */
export function getBannerById(id: string): BannerConfig | undefined {
  return BANNER_REGISTRY.find(banner => banner.id === id);
}

/**
 * Get banners by tags
 */
export function getBannersByTags(tags: string[]): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => 
    banner.enabled && tags.some(tag => banner.tags.includes(tag))
  );
}

export default BANNER_REGISTRY;