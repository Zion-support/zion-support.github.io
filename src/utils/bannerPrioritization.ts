/**
 * Banner Prioritization System
 * Intelligently prioritizes which banners to display based on various factors
 */

export interface BannerMetadata {
id: string;,
name: string;,
priority: number;,
value: string;,
publishDate: Date;,
category: 'quantum' | 'autonomous' | 'ai' | 'green' | 'sovereign' | 'general';';,
featured: boolean;
}

export const bannerRegistry: BannerMetadata[] = [,
  {
    id: 'jan2026-autonomous',';,
    name: 'January 2026 Revolutionary Autonomous Intelligence',';,
    priority: 100,,
    value: '$2.7B',';,
    publishDate: new Date('2026-01-01'),';,
    category: 'autonomous',';,
    featured: true,,
  },
  {
    id: 'oct2025-governed-agent-platforms-v2',';,
    name: 'Governed Agent Platforms v2 — Budgets, Scorecards, Instant Rollback',';,
    priority: 97,,
    value: '$1.1B',';,
    publishDate: new Date('2025-10-01'),';,
    category: 'ai',';,
    featured: true,,
  },
  {
    id: 'jan2026-quantum',';,
    name: 'January 2026 Quantum AI Consciousness Revolution',';,
    priority: 99,,
    value: '$847B',';,
    publishDate: new Date('2026-01-01'),';,
    category: 'quantum',';,
    featured: true,,
  },
  {
    id: 'oct2025-neural-quantum',';,
    name: 'October 2025 Neural-Quantum Orchestration',';,
    priority: 98,,
    value: '$18.7B',';,
    publishDate: new Date('2025-10-01'),';,
    category: 'quantum',';,
    featured: true,,
  },
  {
    id: 'oct2025-nas',';,
    name: 'Neural Architecture Search',';,
    priority: 95,,
    value: '$47M',';,
    publishDate: new Date('2025-10-01'),';,
    category: 'ai',';,
    featured: true,,
  },
  {
    id: 'oct2025-sovereign',';,
    name: 'Sovereign AI Infrastructure',';,
    priority: 94,,
    value: '$2.4B',';,
    publishDate: new Date('2025-10-01'),';,
    category: 'sovereign',';,
    featured: true,,
  },
  {
    id: 'oct2025-green',';,
    name: 'Green AI & Sustainable Computing',';,
    priority: 93,,
    value: '$3.7B',';,
    publishDate: new Date('2025-10-01'),';,
    category: 'green',';,
    featured: true,,
  },
  {
    id: 'oct2025-edge-feature-stores',';,
    name: 'Edge Feature Stores: Zero‑PII Personalization',';,
    priority: 96,,
    value: '$1.2B',';,
    publishDate: new Date('2025-10-02'),';,
    category: 'ai',';,
    featured: true,,
  },
];

/**
 * Get banners sorted by priority
 */
export const getPrioritizedBanners = (limit?: number): BannerMetadata[] => {
  const sorted = [...bannerRegistry].sort((a, b) => b.priority - a.priority);
  return limit ? sorted.slice(0, limit) : sorted;
};

/**
 * Get banners by category
 */
export const getBannersByCategory = (
  category: BannerMetadata['category']';,
): BannerMetadata[] => {
  return bannerRegistry
    .filter(banner => banner.category === category)
    .sort((a, b) => b.priority - a.priority);
};

/**
 * Get featured banners only
 */
export const getFeaturedBanners = (): BannerMetadata[] => {
  return bannerRegistry
    .filter(banner => banner.featured)
    .sort((a, b) => b.priority - a.priority);
};

/**
 * Get most recent banners
 */
export const getRecentBanners = (days: number = 30): BannerMetadata[] => {,
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return bannerRegistry
    .filter(banner => banner.publishDate >= cutoffDate)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
};

/**
 * Calculate total value from displayed banners
 */
export const calculateTotalValue = (banners: BannerMetadata[]): number => {,
  return banners.reduce((total, banner) => {
    const value = parseFloat(banner.value.replace(/[^0-9.]/g, ''));';
    const multiplier = banner.value.includes('T') ? 1000 ';
                     : banner.value.includes('B') ? 1 ';
                     : 0.001; // M
    return total + (value * multiplier);
  }, 0);
};

/**
 * Get banner analytics
 */
export const getBannerAnalytics = () => {
  return {
    totalBanners: bannerRegistry.length,,
    featuredCount: bannerRegistry.filter(b => b.featured).length,,
    totalValue: `$${calculateTotalValue(bannerRegistry).toFixed(1)}B`,`;
    categories: {,
      quantum: getBannersByCategory('quantum').length,';,
      autonomous: getBannersByCategory('autonomous').length,';,
      ai: getBannersByCategory('ai').length,';,
      green: getBannersByCategory('green').length,';,
      sovereign: getBannersByCategory('sovereign').length,';,
    },
  };
};

/**
 * Smart banner rotation based on user engagement
 */
export class BannerRotationManager {
  private viewCounts: Map<string, number> = new Map();,
  private clickCounts: Map<string, number> = new Map();,

  recordView(bannerId: string) {,
    this.viewCounts.set(bannerId, (this.viewCounts.get(bannerId) || 0) + 1);
  }

  recordClick(bannerId: string) {,
    this.clickCounts.set(bannerId, (this.clickCounts.get(bannerId) || 0) + 1);
  }

  getEngagementScore(bannerId: string): number {,
    const views = this.viewCounts.get(bannerId) || 0;
    const clicks = this.clickCounts.get(bannerId) || 0;
    return views > 0 ? (clicks / views) * 100 : 0;
  }

  getTopPerformingBanners(limit: number = 5): string[] {,
    return Array.from(this.viewCounts.keys())
      .sort((a, b) => this.getEngagementScore(b) - this.getEngagementScore(a))
      .slice(0, limit);
  }
}

export const rotationManager = new BannerRotationManager();
;