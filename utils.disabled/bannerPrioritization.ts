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
    // Weighted combination
    return recencyScore * 0.6 + valueScore * 0.3 + banner.priority * 0.1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
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
  }

  /**
   * Get visible banners (above the fold)
   */
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values()).filter(banner => banner.loadStrategy === strategy && banner.isVisible);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values()).filter(
      banner => banner.loadStrategy === strategy && banner.isVisible
    );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
  }

=======
:utils/bannerPrioritization.ts
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
:utils/bannerPrioritization.ts
    const ageInDays = (now.getTime() - banner.publishDate.getTime()) / (1000 * 60 * 60 * 24);
    
    // Recency score (0-100): Newer content scores higher
    const recencyScore = Math.max(0, 100 - ageInDays * 2);
    
    // Value score (0-100): Higher value content scores higher
    const valueScore = Math.min(100, (banner.value / 100) * 100);
    
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
   * Get banners sorted by priority
   */
  getPrioritizedBanners(): BannerMetadata[] {
    return Array.from(this.banners.values())
      .map(banner => ({
        ...banner,
        priority: this.calculatePriority(banner.id)
      }))
:utils/bannerPrioritization.ts
      .sort((a, b) => b.priority - a.priority);
      .sort((a, b) => b.priority - a.priority);
  }

  /**
   * Get visible banners (above the fold)
   */
:utils/bannerPrioritization.ts
  getVisibleBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners()
      .slice(0, this.visibilityThreshold)
      .map(banner => ({ ...banner, isVisible: true }));
  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values()).filter(banner => banner.loadStrategy === strategy && banner.isVisible);
  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values()).filter(
      banner => banner.loadStrategy === strategy && banner.isVisible
    );
  }

>>>>>>> origin/main
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
:utils/bannerPrioritization.ts
  }

  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values())
      .filter(banner => banner.loadStrategy === strategy && banner.isVisible);
  }

      .sort((a, b) => b.dynamicPriority - a.dynamicPriority);

    return limit ? sortedBanners.slice(0, limit) : sortedBanners;
  }

  /**
   * Get banners for immediate loading (above the fold)
   */
  getImmediateBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners(this.visibilityThreshold)
      .filter(banner => banner.loadStrategy === 'immediate');
  }

  /**
   * Get banners for lazy loading
   */
  getLazyBanners(): BannerMetadata[] {
    return this.getPrioritizedBanners()
      .filter(banner => banner.loadStrategy === 'lazy');
  }

  /**
   * Update banner visibility
   */
  updateBannerVisibility(id: string, isVisible: boolean): void {
    const banner = this.banners.get(id);
    if (banner) {
      banner.isVisible = isVisible;
      this.banners.set(id, banner);
    }
  }

  removeBanner(id: string): void {
    this.banners = this.banners.filter(banner => banner.id !== id);
  }

  getBanners(): BannerPriority[] {
    return [...this.banners];
  }

  getBannersByCategory(category: string): BannerPriority[] {
    return this.banners.filter(banner => banner.category === category);
  }

  private sortBanners(): void {
    this.banners.sort((a, b) => b.priority - a.priority);
  }
}

export const bannerPrioritizer = new BannerPrioritizer();
export default bannerPrioritizer;
=======
>>>>>>> origin/main
