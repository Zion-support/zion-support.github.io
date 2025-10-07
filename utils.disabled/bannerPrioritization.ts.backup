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
  priority: number;
  category: string;
  title: string;
  description: string;
  valueProposition: number;
  createdAt: Date;
  lastShown?: Date;
  clickCount: number;
  impressionCount: number;
  conversionRate: number;
  performanceScore: number;
}

export interface BannerPriority {
  id: string;
  priority: number;
  category: string;
}

export class BannerPrioritizer {
  private banners: Map<string, BannerMetadata> = new Map();
  private priorityQueue: BannerPriority[] = [];
  private maxBanners: number = 5;
  private refreshInterval: number = 30000; // 30 seconds
  private intervalId?: NodeJS.Timeout;

  constructor(maxBanners: number = 5) {
    this.maxBanners = maxBanners;
    this.startRefreshCycle();
  }

  public addBanner(banner: BannerMetadata): void {
    this.banners.set(banner.id, banner);
    this.updatePriorityQueue();
  }

  public removeBanner(id: string): void {
    this.banners.delete(id);
    this.priorityQueue = this.priorityQueue.filter(banner => banner.id !== id);
  }

  public getTopBanners(count: number = this.maxBanners): BannerMetadata[] {
    return this.priorityQueue
      .slice(0, count)
      .map(priority => this.banners.get(priority.id))
      .filter((banner): banner is BannerMetadata => banner !== undefined);
  }

  public recordImpression(id: string): void {
    const banner = this.banners.get(id);
    if (banner) {
      banner.impressionCount++;
      banner.lastShown = new Date();
      this.updatePriorityQueue();
    }
  }

  public recordClick(id: string): void {
    const banner = this.banners.get(id);
    if (banner) {
      banner.clickCount++;
      banner.conversionRate = banner.clickCount / banner.impressionCount;
      this.updatePriorityQueue();
    }
  }

  private updatePriorityQueue(): void {
    const banners = Array.from(this.banners.values());
    
    // Calculate priority scores
    const scoredBanners = banners.map(banner => ({
      ...banner,
      calculatedPriority: this.calculatePriority(banner)
    }));

    // Sort by calculated priority (descending)
    this.priorityQueue = scoredBanners
      .sort((a, b) => b.calculatedPriority - a.calculatedPriority)
      .map(banner => ({
        id: banner.id,
        priority: banner.calculatedPriority,
        category: banner.category
      }));
  }

  private calculatePriority(banner: BannerMetadata): number {
    const now = new Date();
    const ageInHours = (now.getTime() - banner.createdAt.getTime()) / (1000 * 60 * 60);
    
    // Base priority from metadata
    let priority = banner.priority;
    
    // Recency boost (newer content gets higher priority)
    const recencyBoost = Math.max(0, 10 - ageInHours);
    priority += recencyBoost;
    
    // Value proposition boost
    priority += banner.valueProposition * 0.1;
    
    // Engagement boost
    const engagementScore = banner.conversionRate * 10;
    priority += engagementScore;
    
    // Performance boost
    priority += banner.performanceScore * 0.5;
    
    // Decay for frequently shown banners
    if (banner.lastShown) {
      const timeSinceLastShown = (now.getTime() - banner.lastShown.getTime()) / (1000 * 60 * 60);
      const decayFactor = Math.min(1, timeSinceLastShown / 24); // Decay over 24 hours
      priority *= (1 + decayFactor);
    }
    
    return Math.max(0, priority);
  }

  private startRefreshCycle(): void {
    this.intervalId = setInterval(() => {
      this.updatePriorityQueue();
    }, this.refreshInterval);
  }

  public stopRefreshCycle(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public getBannerStats(): object {
    const banners = Array.from(this.banners.values());
    const totalImpressions = banners.reduce((sum, banner) => sum + banner.impressionCount, 0);
    const totalClicks = banners.reduce((sum, banner) => sum + banner.clickCount, 0);
    const averageConversionRate = totalClicks / totalImpressions || 0;

    return {
      totalBanners: banners.length,
      totalImpressions,
      totalClicks,
      averageConversionRate,
      topPerformingBanner: this.getTopBanners(1)[0],
      categories: [...new Set(banners.map(banner => banner.category))],
    };
  }

  public destroy(): void {
    this.stopRefreshCycle();
    this.banners.clear();
    this.priorityQueue = [];
  }
}

// Utility functions
export const createBannerPrioritizer = (maxBanners?: number): BannerPrioritizer => {
  return new BannerPrioritizer(maxBanners);
};

export const prioritizeBanners = (banners: BannerMetadata[], maxCount: number = 5): BannerMetadata[] => {
  const prioritizer = createBannerPrioritizer(maxCount);
  banners.forEach(banner => prioritizer.addBanner(banner));
  return prioritizer.getTopBanners(maxCount);
};

export default BannerPrioritizer;
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
<<<<<<< HEAD:utils/bannerPrioritization.ts
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
<<<<<<< HEAD:utils/bannerPrioritization.ts
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
<<<<<<< HEAD:utils/bannerPrioritization.ts
      .sort((a, b) => b.priority - a.priority);
      .sort((a, b) => b.priority - a.priority);
  }

  /**
   * Get visible banners (above the fold)
   */
<<<<<<< HEAD:utils/bannerPrioritization.ts
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
<<<<<<< HEAD:utils/bannerPrioritization.ts
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

<<<<<<< HEAD:utils/bannerPrioritization.ts
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
<<<<<<< HEAD:utils/bannerPrioritization.ts
export default BannerPrioritizationEngine;
   * Get banner by ID
   */
  getBanner(id: string): BannerMetadata | undefined {
    return this.banners.get(id);
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
}

// Default instance
export const bannerEngine = new BannerPrioritizationEngine();
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
