/**
  id: string;
  priority: number;
  category: string;
}

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
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

  getBannersByLoadStrategy(strategy: 'immediate' | 'lazy' | 'on-demand'): BannerMetadata[] {
    return Array.from(this.banners.values())
      .filter(banner => banner.loadStrategy === strategy && banner.isVisible);
  }

=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
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

  /**
=======
export class BannerPrioritizer {
  private banners: BannerPriority[] = [];

  addBanner(banner: BannerPriority): void {
    this.banners.push(banner);
    this.sortBanners();
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
