/**
 * Banner Prioritization System
 *
 * Manages dynamic banner loading and prioritization based on:
 * - Recency (newer content gets higher priority)
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
  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values())
      .filter(banner => banner.loadStrategy === strategy && banner.isVisible);
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
   * Get banner statistics
   */
  getBannerStats(): {
    total: number;
    visible: number;
    byCategory: Record<string, number>;
    byStrategy: Record<string, number>;
  } {
    const banners = Array.from(this.banners.values());
    const visible = banners.filter(b => b.isVisible);
    
    const byCategory = banners.reduce((acc, banner) => {
      acc[banner.category] = (acc[banner.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byStrategy = banners.reduce((acc, banner) => {
      acc[banner.loadStrategy] = (acc[banner.loadStrategy] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: banners.length,
      visible: visible.length,
      byCategory,
      byStrategy
    };
  }
}

export default BannerPrioritizationEngine;