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
    name: 'January 2026 Fresh Content',
    priority: 1,
    category: 'announcement',
    importPath: '/app/components/January2026FreshContentBanner.tsx',
    datePublished: '2026-01-01',
    tags: ['new', 'announcement', '2026'],
    enabled: true,
  },
  {
    id: 'autonomous-enterprise-breakthrough',
    name: 'Autonomous Enterprise Breakthrough',
    priority: 2,
    category: 'breakthrough',
    importPath: '/app/components/AutonomousEnterpriseBreakthroughBanner.tsx',
    datePublished: '2025-12-15',
    tags: ['breakthrough', 'enterprise', 'ai'],
    enabled: true,
  },
  {
    id: 'consensus-intelligence-breakthrough',
    name: 'Consensus Intelligence Breakthrough',
    priority: 3,
    category: 'breakthrough',
<<<<<<< HEAD
    importPath: '/app/components/ConsensusIntelligenceBreakthroughBanner.tsx',
    datePublished: '2025-12-10',
    tags: ['breakthrough', 'intelligence', 'consensus'],
    enabled: true,
  },

  // === HIGH PRIORITY BANNERS (Priority 11-30) ===
  {
    id: 'ultimate-business-intelligence-2025',
    name: 'Ultimate Business Intelligence 2025',
    priority: 15,
    category: 'feature',
    importPath: '/app/components/UltimateBusinessIntelligence2025Banner.tsx',
    datePublished: '2025-11-20',
    tags: ['business-intelligence', '2025', 'feature'],
    enabled: true,
  },
  {
    id: 'newest-content-2025',
    name: 'Newest Content 2025',
    priority: 20,
    category: 'content',
    importPath: '/app/components/NewestContent2025Banner.tsx',
    datePublished: '2025-11-15',
    tags: ['content', '2025', 'new'],
    enabled: true,
  },

  // === MEDIUM PRIORITY BANNERS (Priority 31-60) ===
  {
    id: 'september-30-new-content-2025',
    name: 'September 30 New Content 2025',
    priority: 40,
    category: 'content',
    importPath: '/app/components/September30NewContent2025Banner.tsx',
    datePublished: '2025-09-30',
    tags: ['content', 'september', '2025'],
    enabled: true,
  },

  // === LOW PRIORITY BANNERS (Priority 61-100) ===
  {
    id: 'featured-service-card',
    name: 'Featured Service Card',
    priority: 80,
    category: 'feature',
    importPath: '/app/components/FeaturedServiceCard.tsx',
    datePublished: '2025-08-15',
    tags: ['service', 'feature', 'card'],
    enabled: true,
  },
=======
    importPath: './components/February2026MegaBreakthroughRevolutionBanner',
    datePublished: '2026-02-01',
    tags: ['february-2026', 'mega-breakthrough', 'revolution'],
    enabled: true
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
];

/**
 * Get banners by category
 */
<<<<<<< HEAD
export const getBannersByCategory = (category: BannerConfig['category']): BannerConfig[] => {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
};
=======
export function getBannersByCategory(category: BannerConfig['category']): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => banner.category === category && banner.enabled);
}
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb

/**
 * Get banners by priority range
 */
<<<<<<< HEAD
export const getBannersByPriority = (minPriority: number, maxPriority: number): BannerConfig[] => {
  return BANNER_REGISTRY.filter(
    banner => banner.priority >= minPriority && 
             banner.priority <= maxPriority && 
             banner.enabled
  );
};
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb

/**
 * Get enabled banners sorted by priority
 */
<<<<<<< HEAD
export const getEnabledBanners = (): BannerConfig[] => {
  return BANNER_REGISTRY
    .filter(banner => banner.enabled)
    .sort((a, b) => a.priority - b.priority);
};
=======
export function getEnabledBanners(): BannerConfig[] {
  return BANNER_REGISTRY
    .filter(banner => banner.enabled)
    .sort((a, b) => a.priority - b.priority);
}
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb

/**
 * Get banner by ID
 */
<<<<<<< HEAD
export const getBannerById = (id: string): BannerConfig | undefined => {
  return BANNER_REGISTRY.find(banner => banner.id === id);
};
=======
export function getBannerById(id: string): BannerConfig | undefined {
  return BANNER_REGISTRY.find(banner => banner.id === id);
}
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb

/**
 * Get banners by tags
 */
<<<<<<< HEAD
export const getBannersByTags = (tags: string[]): BannerConfig[] => {
  return BANNER_REGISTRY.filter(banner => 
    banner.enabled && 
    tags.some(tag => banner.tags.includes(tag))
  );
};

/**
 * Get recent banners (published within last N days)
 */
export const getRecentBanners = (days: number = 30): BannerConfig[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return BANNER_REGISTRY.filter(banner => {
    if (!banner.enabled) return false;
    const publishDate = new Date(banner.datePublished);
    return publishDate >= cutoffDate;
  });
};
=======
export function getBannersByTags(tags: string[]): BannerConfig[] {
  return BANNER_REGISTRY.filter(banner => 
    banner.enabled && tags.some(tag => banner.tags.includes(tag))
  );
}

export default BANNER_REGISTRY;
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
