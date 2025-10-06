/**
 * Banner Prioritization System
 *
 * Manages dynamic banner loading and prioritization based on: * - Recency (newer content gets higher priority)
 * - Value proposition (higher $ value gets priority)
 * - User engagement metrics
 * - Performance considerations
 */
export interface BannerMetadata {
  id: string;
  component: string;
  priority: number;
  value: number; // In billions
  publishDate: Date;
  category: 'service' | 'case-study' | 'blog' | 'showcase';
  isVisible: boolean;
  loadStrategy: 'immediate' | 'lazy' | 'on-demand';
}
export class BannerPrioritizationEngine {
  private banners: Map<string, BannerMetadata> = new Map();
  private visibilityThreshold = 5; // Max banners to show above the fold
  /**
   * Register a banner with metadata
   */
  registerBanner(metadata: BannerMetadata): void {
    this.banners.set(metadata.id, metadata);
  }
  /**
   * Calculate dynamic priority based on multiple factors
   */
  private calculateDynamicPriority(banner: BannerMetadata): number {
    const now = new Date();
    const ageInDays =
      (now.getTime() - banner.publishDate.getTime()) / (1000 * 60 * 60 * 24);
    // Recency score (0-100): Newer content scores higher
    const recencyScore = Math.max(0, 100 - ageInDays * 2);
    // Value score (0-100): Higher value content scores higher
    const valueScore = Math.min(100, (banner.value / 100) * 100);
    // Weighted combination
    return recencyScore * 0.6 + valueScore * 0.3 + banner.priority * 0.1;
  }
  /**
   * Get prioritized banners for rendering
   */
  getPrioritizedBanners(limit?: number): BannerMetadata[] {
    const sortedBanners = Array.from(this.banners.values())
      .filter(banner => banner.isVisible)
      .map(banner => ({
        ...banner,
        dynamicPriority: this.calculateDynamicPriority(banner)
      }))
      .sort((a, b) => b.dynamicPriority - a.dynamicPriority);
    return limit ? sortedBanners.slice(0, limit) : sortedBanners;
  }
  /**
   * Get banners by load strategy
   */
  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand')
  ): BannerMetadata[] {
    return Array.from(this.banners.values()).filter(banner => banner.loadStrategy === strategy && banner.isVisible);
  }
  /**
   * Update banner visibility based on performance metrics
   */
  updateBannerVisibility(bannerId: string, isVisible: boolean): void {
    const banner = this.banners.get(bannerId);
    if (banner) {
      banner.isVisible = isVisible;
      this.banners.set(bannerId, banner);
    }
  }
  /**
   * Get banners for above-the-fold rendering
   */
  getAboveFoldBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners(this.visibilityThreshold).filter(banner => banner.loadStrategy === 'immediate');
  }
  /**
   * Get lazy-load banners
   */
  getLazyLoadBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners().filter(banner => banner.loadStrategy === 'lazy');
  }
  /**
   * Archive old banners (older than 90 days)
   */
  archiveOldBanners(): void {
    const now = new Date();
    const archiveThresholdDays = 90;
    this.banners.forEach((banner, id) => {
      const ageInDays =
        (now.getTime() - banner.publishDate.getTime()) / (1000 * 60 * 60 * 24);
      if (ageInDays > archiveThresholdDays) {
        banner.isVisible = false;
        banner.loadStrategy = 'on-demand';
        this.banners.set(id, banner);
      }
    });
  }
  /**
   * Get total value of visible banners
   */
  getTotalVisibleValue(): number {
    return Array.from(this.banners.values())
      .filter(banner => banner.isVisible)
      .reduce((sum, banner) => sum + banner.value, 0);
  }
  /**
   * Get banner statistics
   */
  getStatistics() {
    const all = Array.from(this.banners.values());
    const visible = all.filter(b => b.isVisible);
    return {
      total: all.length,
      visible: visible.length,
      hidden: all.length - visible.length,
      totalValue: this.getTotalVisibleValue(),
      byCategory: {
        service: visible.filter(b => b.category === 'service').length,
        'case-study': visible.filter(b => b.category === 'case-study').length,
        blog: visible.filter(b => b.category === 'blog').length,
        showcase: visible.filter(b => b.category === 'showcase').length
      },
      byLoadStrategy: {
        immediate: visible.filter(b => b.loadStrategy === 'immediate').length,
        lazy: visible.filter(b => b.loadStrategy === 'lazy').length,
        'on-demand': visible.filter(b => b.loadStrategy === 'on-demand').length
      }
    };
  }
}
// Singleton instance
export const bannerEngine = new BannerPrioritizationEngine();
// Initialize with some example banners
export function initializeBannerEngine() {
  // October 2025 Content
  bannerEngine.registerBanner({
    id: 'rtim-2025',
    component: 'October2025RealTimeIntelligenceMeshBanner',
    priority: 100,
    value: 24.2,
    publishDate: new Date('2025-10-01'),
    category: 'service',
    isVisible: true,
    loadStrategy: 'immediate'
  });
  bannerEngine.registerBanner({
    id: 'cognitive-hyperautomation-2025',
    component: 'October2025CognitiveHyperautomationBanner',
    priority: 100,
    value: 61.3,
    publishDate: new Date('2025-10-01'),
    category: 'service',
    isVisible: true,
    loadStrategy: 'immediate'
  });
  bannerEngine.registerBanner({
    id: 'fintech-success-2025',
    component: 'October2025FinTechSuccessBanner',
    priority: 95,
    value: 22.8,
    publishDate: new Date('2025-10-01'),
    category: 'case-study',
    isVisible: true,
    loadStrategy: 'immediate'
  });
  bannerEngine.registerBanner({
    id: 'digital-transformation-2025',
    component: 'October2025DigitalTransformationPlatformBanner',
    priority: 90,
    value: 47.2,
    publishDate: new Date('2025-10-01'),
    category: 'service',
    isVisible: true,
    loadStrategy: 'lazy'
  });
  bannerEngine.registerBanner({
    id: 'autonomous-superintelligence-2025',
    component: 'October2025AutonomousSuperintelligenceBanner',
    priority: 95,
    value: 62.6,
    publishDate: new Date('2025-10-20'),
    category: 'service',
    isVisible: true,
    loadStrategy: 'immediate'
  });
}
export default bannerEngine;