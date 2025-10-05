/**
 * Banner Optimizer Utility
 * Optimizes banner display priority and rotation
 * Improves user experience and conversion rates
 */

export interface BannerConfig {
  id: string;
  priority: number;
  displayDuration?: number;
  targetAudience?: string[];
  expiryDate?: Date;
  maxImpressions?: number;
}

export interface BannerMetrics {
  impressions: number;
  clicks: number;
  conversions: number;
  lastShown: Date;
}

/**
 * Banner Priority Manager
 * Determines which banners to show based on business rules
 */
export class BannerPriorityManager {
  private banners: Map<string, BannerConfig> = new Map();
  private metrics: Map<string, BannerMetrics> = new Map();

  constructor() {
    this.loadMetricsFromStorage();
  }

  /**
   * Register a banner with its configuration
   */
  registerBanner(config: BannerConfig): void {
    this.banners.set(config.id, config);
    
    if (!this.metrics.has(config.id)) {
      this.metrics.set(config.id, {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        lastShown: new Date(),
      });
    }
  }

  /**
   * Get banners sorted by priority
   */
  getSortedBanners(): BannerConfig[] {
    const now = new Date();
    
    return Array.from(this.banners.values())
      .filter(banner => {
        // Filter out expired banners
        if (banner.expiryDate && banner.expiryDate < now) {
          return false;
        }
        
        // Filter out banners that reached max impressions
        const metrics = this.metrics.get(banner.id);
        if (banner.maxImpressions && metrics && metrics.impressions >= banner.maxImpressions) {
          return false;
        }
        
        return true;
      })
      .sort((a, b) => b.priority - a.priority);
  }

  /**
   * Record banner impression
   */
  recordImpression(bannerId: string): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.impressions++;
      metrics.lastShown = new Date();
      this.saveMetricsToStorage();
    }
  }

  /**
   * Record banner click
   */
  recordClick(bannerId: string): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.clicks++;
      this.saveMetricsToStorage();
    }
  }

  /**
   * Record banner conversion
   */
  recordConversion(bannerId: string): void {
    const metrics = this.metrics.get(bannerId);
    if (metrics) {
      metrics.conversions++;
      this.saveMetricsToStorage();
    }
  }

  /**
   * Get click-through rate for a banner
   */
  getCTR(bannerId: string): number {
    const metrics = this.metrics.get(bannerId);
    if (!metrics || metrics.impressions === 0) {
      return 0;
    }
    return (metrics.clicks / metrics.impressions) * 100;
  }

  /**
   * Get conversion rate for a banner
   */
  getConversionRate(bannerId: string): number {
    const metrics = this.metrics.get(bannerId);
    if (!metrics || metrics.clicks === 0) {
      return 0;
    }
    return (metrics.conversions / metrics.clicks) * 100;
  }

  /**
   * Save metrics to localStorage
   */
  private saveMetricsToStorage(): void {
    try {
      const data = Array.from(this.metrics.entries());
      localStorage.setItem('bannerMetrics', JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save banner metrics:', error);
    }
  }

  /**
   * Load metrics from localStorage
   */
  private loadMetricsFromStorage(): void {
    try {
      const data = localStorage.getItem('bannerMetrics');
      if (data) {
        const entries = JSON.parse(data);
        this.metrics = new Map(entries.map(([id, metrics]: [string, any]) => [
          id,
          {
            ...metrics,
            lastShown: new Date(metrics.lastShown),
          },
        ]));
      }
    } catch (error) {
      console.warn('Failed to load banner metrics:', error);
    }
  }

  /**
   * Clear all metrics (for testing)
   */
  clearMetrics(): void {
    this.metrics.clear();
    localStorage.removeItem('bannerMetrics');
  }
}

/**
 * Singleton instance
 */
export const bannerManager = new BannerPriorityManager();

/**
 * React hook for banner optimization
 */
export function useBannerOptimization(bannerId: string) {
  const recordImpression = () => bannerManager.recordImpression(bannerId);
  const recordClick = () => bannerManager.recordClick(bannerId);
  const recordConversion = () => bannerManager.recordConversion(bannerId);
  
  return {
    recordImpression,
    recordClick,
    recordConversion,
    ctr: bannerManager.getCTR(bannerId),
    conversionRate: bannerManager.getConversionRate(bannerId),
  };
}
