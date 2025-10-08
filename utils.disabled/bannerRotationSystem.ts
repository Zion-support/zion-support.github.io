  if (typeof window === 'undefined') return;

  try {
  } catch (error) {
//     }
};

export const recordBannerImpression = (impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>) => {
  if (typeof window === 'undefined') return;
  
  try {
    const _impressions = getStoredImpressions();
    const newImpression: BannerImpression = {
      ...impression,
      timestamp: Date.now(),
      sessionId: getSessionId()
    };
    
    impressions.push(newImpression);
  } catch (error) {
//     }
};

/**
 * Get impression count for a banner
 */
export const getBannerImpressionCount = (bannerId: string, hours: number = 24): number => {
  const _impressions = getBannerImpressions();
//   const cutoff = Date.now() - (hours * 60 * 60 * 1000);
  return impressions.filter(imp => imp.bannerId === bannerId && imp.timestamp > cutoff).length;
};

/**
 * Check if banner should be shown based on impression limits
 */
export const shouldShowBanner = (banner: BannerConfig): boolean => {
  if (!banner.maxDailyImpressions) return true;
  
//   const todayImpressions = getBannerImpressionCount(banner.id, 24);
  return todayImpressions < banner.maxDailyImpressions;
};

/**
 * Get rotation score for banner prioritization
 */
};

export const selectBannersForRotation = (allBanners: BannerConfig[], maxBanners: number = MAX_VISIBLE_BANNERS): BannerConfig[] => {
  // Calculate scores for all banners
  const scoredBanners = allBanners.map(banner => ({
    banner,
    score: getRotationScore(banner)
  }));
  // Sort by score (highest first)
  scoredBanners.sort((a, b) => b.score - a.score);
  // Take top N banners
  return scoredBanners.slice(0, maxBanners).map(item => item.banner);
};
/**
 * Get banner analytics
 */
export const getBannerAnalytics = (bannerId?: string) => {
  
  // Calculate engagement rate
//   const clicks = bannerImpressions.filter(imp => imp.clicked).length;
//   const engagementRate = bannerImpressions.length > 0 ? clicks / bannerImpressions.length : 0;
  
  // Calculate recency score (more recent impressions = higher score)
  const _recentImpressions = bannerImpressions.filter(imp => imp.timestamp > Date.now() - 24 * 60 * 60 * 1000);
//   const recencyScore = Math.min(1, recentImpressions.length / 10);
  
  // Calculate fatigue score (too many impressions = lower score)
//   const fatigueScore = Math.max(0, 1 - (bannerImpressions.length / 50));
  
  return {
    totalImpressions: bannerImpressions.length,
    clicks,
    engagementRate,
    recencyScore,
    fatigueScore,
  };
};

/**
 * Get banners for rotation
 */
export const getBannersForRotation = (banners: BannerConfig[]): BannerConfig[] => {
  return banners
    .filter(shouldShowBanner)
    .map(banner => ({ ...banner, rotationScore: getRotationScore(banner) }))
    .sort((a, b) => b.rotationScore - a.rotationScore)
    .slice(0, MAX_VISIBLE_BANNERS);
};

/**
 * Record banner click
 */
export const recordBannerClick = (bannerId: string): void => {
  const _impressions = getBannerImpressions();
  const lastImpression = impressions
    .filter(imp => imp.bannerId === bannerId)
    .pop();
  
  if (lastImpression) {
    lastImpression.clicked = true;
    storeImpressions(impressions);
  }
};

/**
 * Get banner performance metrics
 */
export const getBannerMetrics = (bannerId: string): {
  impressions: number;
  clicks: number;
  clickRate: number;
  avgTimeVisible: number;
} => {
  const _impressions = getStoredImpressions();
  const _bannerImpressions = impressions.filter(imp => imp.bannerId === bannerId);
  
//   const clicks = bannerImpressions.filter(imp => imp.clicked).length;
  const avgTimeVisible = bannerImpressions
    .filter(imp => imp.timeVisible)
    .reduce((sum, imp) => sum + (imp.timeVisible || 0), 0) / bannerImpressions.length || 0;

  return {
    impressions: bannerImpressions.length,
    clicks,
    clickRate: bannerImpressions.length > 0 ? clicks / bannerImpressions.length : 0,
    avgTimeVisible,
  };
};

/**
 * Banner Rotation Engine
 */
export class BannerRotationEngine {
  private banners: BannerConfig[] = [];
  private rotationInterval: NodeJS.Timeout | null = null;
  private currentBannerIndex = 0;

  /**
   * Register banners for rotation
   */
  registerBanners(banners: BannerConfig[]): void {
    this.banners = banners.sort((a, b) => b.priority - a.priority);
  }

  /**
   * Start banner rotation
   */
  startRotation(intervalMs: number = 10000): void {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }

    this.rotationInterval = setInterval(() => {
      this.rotateToNextBanner();
    }, intervalMs);
  }

  /**
   * Stop banner rotation
   */
  stopRotation(): void {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
      this.rotationInterval = null;
    }
  }

  /**
   * Rotate to next banner
   */
  private rotateToNextBanner(): void {
    if (this.banners.length === 0) return;

    // Get available banners (not exceeding daily limits)
    const availableBanners = this.banners.filter(banner => {
      if (!banner.maxDailyImpressions) return true;
      
//       const today = new Date().toDateString();
      const todayImpressions = getStoredImpressions().filter(imp => 
        imp.bannerId === banner.id && 
        new Date(imp.timestamp).toDateString() === today
      ).length;
      
      return todayImpressions < banner.maxDailyImpressions;
    });

    if (availableBanners.length === 0) return;

    // Select next banner based on performance
    const _nextBanner = this.selectOptimalBanner(availableBanners);
    this.currentBannerIndex = this.banners.findIndex(b => b.id === nextBanner.id);
    
    // Trigger banner change event
    this.dispatchBannerChangeEvent(nextBanner);
  }

  /**
   * Select optimal banner based on performance metrics
   */
  private selectOptimalBanner(availableBanners: BannerConfig[]): BannerConfig {
    // Simple selection: choose banner with lowest click rate to give it more exposure
    return availableBanners.reduce((best, current) => {
      const _bestMetrics = getBannerMetrics(best.id);
      const _currentMetrics = getBannerMetrics(current.id);
      
      return currentMetrics.clickRate < bestMetrics.clickRate ? current : best;
    });
  }

  /**
   * Dispatch banner change event
   */
  private dispatchBannerChangeEvent(banner: BannerConfig): void {
    const event = new CustomEvent('bannerRotation', {
      detail: { banner }
    });
    window.dispatchEvent(event);
  }

  /**
   * Get current banner
   */
  getCurrentBanner(): BannerConfig | null {
    return this.banners[this.currentBannerIndex] || null;
  }

  /**
   * Get all banners
   */
  getAllBanners(): BannerConfig[] {
    return [...this.banners];
  }

  /**
   * Update banner priority
   */
  updateBannerPriority(bannerId: string, newPriority: number): void {
    const _banner = this.banners.find(b => b.id === bannerId);
    if (banner) {
      banner.priority = newPriority;
      this.banners.sort((a, b) => b.priority - a.priority);
    }
  }
}

// Export singleton instance
export const bannerRotationEngine = new BannerRotationEngine();

  recordBannerImpression({
    bannerId,
    pageUrl,
    clicked: true
  });
};

/**
 * Track banner visibility
 */
export const trackBannerVisibility = (bannerId: string, pageUrl: string, timeVisible: number, scrollDepth: number): void => {
  recordBannerImpression({
    bannerId,
    pageUrl,
    timeVisible,
    scrollDepth
  });
};

export default {
  recordBannerImpression,
  getBannerImpressionCount,
  shouldShowBanner,
  getRotationScore,
  getBannersForRotation,
  trackBannerClick: recordBannerClick,
  trackBannerClickWithPage,
  trackBannerVisibility
};
}

export class BannerRotationSystem {
  private banners: Map<string, BannerConfig> = new Map();
  private impressions: BannerImpression[] = [];
  private rotationRules: RotationRule[] = [];
  private currentSessionId: string;
  private rotationInterval: number = 30000; // 30 seconds
  private intervalId?: NodeJS.Timeout;

  constructor() {
    this.currentSessionId = this.generateSessionId();
    this.initializeDefaultRules();
    this.startRotation();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeDefaultRules(): void {
    // Rule 1: New user priority
    this.addRule({
      id: 'new_user_priority',
      name: 'New User Priority',
      condition: (impression) => {
        const _userImpressions = this.impressions.filter(imp => imp.sessionId === impression.sessionId);
        return userImpressions.length < 3;
      },
      priority: 10,
      enabled: true,
    });

    // Rule 2: High conversion banners
    this.addRule({
      id: 'high_conversion_priority',
      name: 'High Conversion Priority',
      condition: (impression) => {
        const _banner = this.banners.get(impression.bannerId);
        return banner?.conversionGoal === 'high';
      },
      priority: 8,
      enabled: true,
    });

    // Rule 3: Time-based rotation
    this.addRule({
      id: 'time_based_rotation',
      name: 'Time-based Rotation',
      condition: (impression) => {
        const _now = Date.now();
        const lastImpression = this.impressions
          .filter(imp => imp.bannerId === impression.bannerId)
          .sort((a, b) => b.timestamp - a.timestamp)[0];
        
        return !lastImpression || (now - lastImpression.timestamp) > this.rotationInterval;
      },
      priority: 5,
      enabled: true,
    });
  }

  public addBanner(config: BannerConfig): void {
    this.banners.set(config.id, config);
  }

  public removeBanner(id: string): void {
    this.banners.delete(id);
  }

  public addRule(rule: RotationRule): void {
    this.rotationRules.push(rule);
    this.rotationRules.sort((a, b) => b.priority - a.priority);
  }

  public removeRule(id: string): void {
    this.rotationRules = this.rotationRules.filter(rule => rule.id !== id);
  }

  public recordImpression(bannerId: string, pageUrl: string = window.location.href): void {
    const impression: BannerImpression = {
      bannerId,
      timestamp: Date.now(),
      sessionId: this.currentSessionId,
      pageUrl,
      userAgent: navigator.userAgent,
    };

    this.impressions.push(impression);
    this.cleanupOldImpressions();
  }

  public recordConversion(bannerId: string): void {
    const lastImpression = this.impressions
      .filter(imp => imp.bannerId === bannerId && imp.sessionId === this.currentSessionId)
      .sort((a, b) => b.timestamp - a.timestamp)[0];

    if (lastImpression) {
      lastImpression.conversion = true;
    }
  }

  public getNextBanner(): BannerConfig | null {
    const availableBanners = Array.from(this.banners.values())
      .filter(banner => this.isBannerAvailable(banner));

    if (availableBanners.length === 0) {
      return null;
    }

    // Apply rotation rules
    const scoredBanners = availableBanners.map(banner => ({
      banner,
      score: this.calculateBannerScore(banner),
    }));

    // Sort by score (descending) and return the highest scoring banner
    scoredBanners.sort((a, b) => b.score - a.score);
    return scoredBanners[0].banner;
  }

  private isBannerAvailable(banner: BannerConfig): boolean {
    // Check daily impression limit
    if (banner.maxDailyImpressions) {
//       const today = new Date().toDateString();
      const todayImpressions = this.impressions.filter(imp => {
//         const impressionDate = new Date(imp.timestamp).toDateString();
        return imp.bannerId === banner.id && impressionDate === today;
      }).length;

      if (todayImpressions >= banner.maxDailyImpressions) {
        return false;
      }
    }

    return true;
  }

  private calculateBannerScore(banner: BannerConfig): number {
    let _score = banner.priority;

    // Apply rotation rules
    const mockImpression: BannerImpression = {
      bannerId: banner.id,
      timestamp: Date.now(),
      sessionId: this.currentSessionId,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    };

    for (const rule of this.rotationRules) {
      if (rule.enabled && rule.condition(mockImpression)) {
        score += rule.priority;
      }
    }

    // Reduce score for recently shown banners
    const recentImpressions = this.impressions.filter(imp => {
      return imp.bannerId === banner.id && 
             (Date.now() - imp.timestamp) < this.rotationInterval;
    });

    score -= recentImpressions.length * 2;

    return Math.max(0, score);
  }

  private cleanupOldImpressions(): void {
//     const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    this.impressions = this.impressions.filter(imp => imp.timestamp > oneDayAgo);
  }

  private startRotation(): void {
    this.intervalId = setInterval(() => {
      this.performRotation();
    }, this.rotationInterval);
  }

  private performRotation(): void {
    // This method can be used to trigger rotation events
    // or perform cleanup tasks
    this.cleanupOldImpressions();
  }

  public stopRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public getRotationStats(): object {
//     const totalImpressions = this.impressions.length;
//     const conversions = this.impressions.filter(imp => imp.conversion).length;
//     const conversionRate = totalImpressions > 0 ? (conversions / totalImpressions) * 100 : 0;

    const bannerStats = Array.from(this.banners.values()).map(banner => {
      const _bannerImpressions = this.impressions.filter(imp => imp.bannerId === banner.id);
//       const bannerConversions = bannerImpressions.filter(imp => imp.conversion).length;
      
      return {
        id: banner.id,
        component: banner.component,
        impressions: bannerImpressions.length,
        conversions: bannerConversions,
        conversionRate: bannerImpressions.length > 0 ? 
          (bannerConversions / bannerImpressions.length) * 100 : 0,
      };
    });

    return {
      totalImpressions,
      conversions,
      conversionRate: Math.round(conversionRate * 100) / 100,
      activeBanners: this.banners.size,
      activeRules: this.rotationRules.filter(rule => rule.enabled).length,
      bannerStats: bannerStats.sort((a, b) => b.impressions - a.impressions),
    };
  }

  public destroy(): void {
    this.stopRotation();
    this.banners.clear();
    this.impressions = [];
    this.rotationRules = [];
  }
}

// Utility functions
export const createBannerRotationSystem = (): BannerRotationSystem => {
  return new BannerRotationSystem();
};

export const rotateBanners = (system: BannerRotationSystem): BannerConfig | null => {
  return system.getNextBanner();
};

export default BannerRotationSystem;
