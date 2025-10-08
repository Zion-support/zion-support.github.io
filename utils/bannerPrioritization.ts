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

    if (banner) {
      banner.impressionCount++;
      banner.lastShown = new Date();
      this.updatePriorityQueue();
    }
  }

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

