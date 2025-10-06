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
  calculatePriority(bannerId: string): number {
    const banner = this.banners.get(bannerId);
    if (!banner) return 0;

    const now = new Date();
    const daysSincePublish = (now.getTime() - banner.publishDate.getTime()) / (1000 * 60 * 60 * 24);
    
    // Recency factor (newer = higher priority)
    const recencyFactor = Math.max(0, 100 - daysSincePublish);
    
    // Value factor (higher value = higher priority)
    const valueFactor = Math.min(100, banner.value * 10);
    
    // Category factor
    const categoryFactors = {
      'service': 100,
      'case-study': 80,
      'blog': 60,
      'showcase': 40
    };
    const categoryFactor = categoryFactors[banner.category] || 50;
    
    // Calculate weighted priority
    const priority = (
      recencyFactor * 0.4 +
      valueFactor * 0.3 +
      categoryFactor * 0.2 +
      banner.priority * 0.1
    );

    return Math.round(priority);
  }

  /**
   * Get banners sorted by priority
   */
  getPrioritizedBanners(): BannerMetadata[] {
    return Array.from(this.banners.values())
      .map(banner => ({
        ...banner,
        priority: this.calculatePriority(banner.id)
      }))
      .sort((a, b) => b.priority - a.priority);
  }

  /**
   * Get visible banners (above the fold)
   */
  getVisibleBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners()
      .slice(0, this.visibilityThreshold)
      .map(banner => ({ ...banner, isVisible: true }));
  }

  /**
   * Get lazy load banners
   */
  getLazyLoadBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners()
      .slice(this.visibilityThreshold)
      .map(banner => ({ ...banner, loadStrategy: 'lazy' }));
  }

  /**
   * Update banner visibility based on viewport
   */
  updateVisibility(visibleBannerIds: string[]): void {
    this.banners.forEach((banner, id) => {
      banner.isVisible = visibleBannerIds.includes(id);
    });
  }

  /**
   * Get banner by ID
   */
  getBanner(id: string): BannerMetadata | undefined {
    return this.banners.get(id);
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
   * Remove banner
   */
  removeBanner(id: string): boolean {
    return this.banners.delete(id);
  }

  /**
   * Get all banners
   */
  getAllBanners(): BannerMetadata[] {
    return Array.from(this.banners.values());
  }

  /**
   * Clear all banners
   */
  clear(): void {
    this.banners.clear();
  }

  /**
   * Get banner count
   */
  getBannerCount(): number {
    return this.banners.size;
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

// Export singleton instance
export const bannerPrioritizationEngine = new BannerPrioritizationEngine();
export const bannerPrioritizationEngine = new BannerPrioritizationEngine();
