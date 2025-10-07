/**
 * Banner Rotation System Utility
 */

interface BannerConfig {
  id: string;
  component: string;
  priority: number;
  maxDailyImpressions?: number;
  targetAudience?: string[];
  conversionGoal?: string;
  abTestGroup?: 'A' | 'B' | 'control';
}

interface BannerImpression {
  bannerId: string;
  timestamp: number;
  sessionId: string;
  pageUrl: string;
  userAgent: string;
  conversion?: boolean;
}

interface RotationRule {
  id: string;
  name: string;
  condition: (impression: BannerImpression) => boolean;
  priority: number;
  enabled: boolean;
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
        const userImpressions = this.impressions.filter(imp => imp.sessionId === impression.sessionId);
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
        const banner = this.banners.get(impression.bannerId);
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
        const now = Date.now();
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
      const today = new Date().toDateString();
      const todayImpressions = this.impressions.filter(imp => {
        const impressionDate = new Date(imp.timestamp).toDateString();
        return imp.bannerId === banner.id && impressionDate === today;
      }).length;

      if (todayImpressions >= banner.maxDailyImpressions) {
        return false;
      }
    }

    return true;
  }

  private calculateBannerScore(banner: BannerConfig): number {
    let score = banner.priority;

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
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
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
    const totalImpressions = this.impressions.length;
    const conversions = this.impressions.filter(imp => imp.conversion).length;
    const conversionRate = totalImpressions > 0 ? (conversions / totalImpressions) * 100 : 0;

    const bannerStats = Array.from(this.banners.values()).map(banner => {
      const bannerImpressions = this.impressions.filter(imp => imp.bannerId === banner.id);
      const bannerConversions = bannerImpressions.filter(imp => imp.conversion).length;
      
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
const storeImpressions = (impressions: BannerImpression[]): void => {
export const recordBannerImpression = (impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>) => {
  if (typeof window === 'undefined') return;
export const recordBannerImpression = (
  impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>
) => {
export const recordBannerImpression = (impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>) => {
  if (typeof window === 'undefined') return;

  try {
    // Limit to last 1000 impressions to prevent storage bloat
    const trimmedImpressions = impressions.slice(-1000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedImpressions));
  } catch (error) {
    console.error('Failed to store banner impressions:', error);
  }
};

export const recordBannerImpression = (impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>) => {
  if (typeof window === 'undefined') return;
  
  try {
    const impressions = getStoredImpressions();
    const newImpression: BannerImpression = {
      ...impression,
      timestamp: Date.now(),
      sessionId: getSessionId()
    };
    
    impressions.push(newImpression);
    storeImpressions(impressions);
  } catch (error) {
    console.error('Failed to record banner impression:', error);
  }
};

/**
 * Get impression count for a banner
 */
export const getBannerImpressionCount = (bannerId: string, hours: number = 24): number => {
  const impressions = getStoredImpressions();
  const cutoff = Date.now() - (hours * 60 * 60 * 1000);
  return impressions.filter(imp => imp.bannerId === bannerId && imp.timestamp > cutoff).length;
};

/**
 * Check if banner should be shown based on impression limits
 */
export const shouldShowBanner = (banner: BannerConfig): boolean => {
  if (!banner.maxDailyImpressions) return true;
  
  const todayImpressions = getBannerImpressionCount(banner.id, 24);
  return todayImpressions < banner.maxDailyImpressions;
};

/**
 * Calculate banner score for rotation
 */
<<<<<<<< HEAD:utils/bannerRotationSystem.ts
export const calculateBannerScore = (banner: BannerConfig): number => {
  const impressions = getStoredImpressions();
  const bannerImpressions = impressions.filter(imp => imp.bannerId === banner.id);
========
export const getRotationScore = (banner: BannerConfig): number => {
  // Simple scoring based on priority and recent performance
  const priorityScore = banner.priority;
  const recentImpressions = getBannerImpressionCount(banner.id, 24);
  const performanceScore = Math.max(0, 10 - recentImpressions); // Lower impressions = higher score
  
  return priorityScore + performanceScore;
  // Calculate score based on various factors
  let score = 0;
  
  // Base score from impressions
  const impressions = getBannerImpressionCount(banner.id);
  score += Math.max(0, 100 - impressions * 2);
  
  // Bonus for new banners
  if (impressions === 0) score += 50;
  
  // Penalty for over-impressed banners
  if (impressions > 10) score -= 30;
  
  return Math.max(0, score);
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
  if (!bannerId) return null;
  
  const impressions = getStoredImpressions();
  const bannerImpressions = impressions.filter(imp => imp.bannerId === bannerId);
  const bannerImpressions = bannerId ? impressions.filter(imp => imp.bannerId === bannerId) : impressions;
  
  // Calculate engagement rate
  const clicks = bannerImpressions.filter(imp => imp.clicked).length;
  const engagementRate = bannerImpressions.length > 0 ? clicks / bannerImpressions.length : 0;
  
  // Calculate recency score (more recent impressions = higher score)
  const recentImpressions = bannerImpressions.filter(imp => imp.timestamp > Date.now() - 24 * 60 * 60 * 1000);
  const recencyScore = Math.min(1, recentImpressions.length / 10);
  
  // Calculate fatigue score (too many impressions = lower score)
  const fatigueScore = Math.max(0, 1 - (bannerImpressions.length / 50));
  
  return {
    totalImpressions: bannerImpressions.length,
    clicks,
    engagementRate,
    recencyScore,
    fatigueScore,
    score: (engagementRate * 0.3) + (recencyScore * 0.2) + (fatigueScore * 0.1)
  const bannerImpressions = bannerId ? 
    impressions.filter(imp => imp.bannerId === bannerId) : 
    impressions;
  
  return {
    totalImpressions: bannerImpressions.length,
    clicks: bannerImpressions.filter(imp => imp.clicked).length,
    engagementRate: bannerImpressions.length > 0 ? 
      bannerImpressions.filter(imp => imp.clicked).length / bannerImpressions.length : 0
  };
};

/**
 * Select banners for rotation
 */
<<<<<<<< HEAD:utils/bannerRotationSystem.ts
export const selectBannersForRotation = (allBanners: BannerConfig[], maxBanners: number = MAX_VISIBLE_BANNERS): BannerConfig[] => {
  // Filter banners that should be shown
  const eligibleBanners = allBanners.filter(shouldShowBanner);
  
  // Calculate scores for all eligible banners
  const scoredBanners = eligibleBanners.map(banner => ({
    banner,
    score: calculateBannerScore(banner)
  }));
  
  // Sort by score (highest first)
  scoredBanners.sort((a, b) => b.score - a.score);
  
  // Take top N banners
  return scoredBanners.slice(0, maxBanners).map(item => item.banner);
========
export const getBannersForRotation = (banners: BannerConfig[]): BannerConfig[] => {
  return banners
    .filter(shouldShowBanner)
    .map(banner => ({ ...banner, rotationScore: getRotationScore(banner) }))
    .sort((a, b) => b.rotationScore - a.rotationScore)
    .slice(0, MAX_VISIBLE_BANNERS);
};

/**
 * Get banner analytics
 */
<<<<<<<< HEAD:utils/bannerRotationSystem.ts
export const getBannerAnalytics = (bannerId?: string) => {
  const impressions = getStoredImpressions();
  const bannerImpressions = bannerId ? impressions.filter(imp => imp.bannerId === bannerId) : impressions;
========
export const recordBannerClick = (bannerId: string): void => {
  const impressions = getBannerImpressions();
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
  const impressions = getStoredImpressions();
  const bannerImpressions = impressions.filter(imp => imp.bannerId === bannerId);
  
  const totalImpressions = bannerImpressions.length;
  const clicks = bannerImpressions.filter(imp => imp.clicked).length;
  const engagementRate = totalImpressions > 0 ? clicks / totalImpressions : 0;
  
  // Calculate average time visible
  const visibleImpressions = bannerImpressions.filter(imp => imp.timeVisible);
  const avgTimeVisible = visibleImpressions.length > 0 
    ? visibleImpressions.reduce((sum, imp) => sum + (imp.timeVisible || 0), 0) / visibleImpressions.length
    : 0;
  
  // Calculate average scroll depth
  const scrollImpressions = bannerImpressions.filter(imp => imp.scrollDepth);
  const avgScrollDepth = scrollImpressions.length > 0
    ? scrollImpressions.reduce((sum, imp) => sum + (imp.scrollDepth || 0), 0) / scrollImpressions.length
    : 0;
  
  return {
    totalImpressions,
    clicks,
    engagementRate,
    avgTimeVisible,
    avgScrollDepth,
    recentImpressions: bannerImpressions.filter(imp => imp.timestamp > Date.now() - 24 * 60 * 60 * 1000).length
  };
};

/**
 * Clear old impressions
 */
<<<<<<<< HEAD:utils/bannerRotationSystem.ts
export const clearOldImpressions = (daysToKeep: number = 30): void => {
  const cutoff = Date.now() - (daysToKeep * 24 * 60 * 60 * 1000);
  const impressions = getStoredImpressions();
  const filteredImpressions = impressions.filter(imp => imp.timestamp > cutoff);
  storeImpressions(filteredImpressions);
========
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
      
      const today = new Date().toDateString();
      const todayImpressions = getStoredImpressions().filter(imp => 
        imp.bannerId === banner.id && 
        new Date(imp.timestamp).toDateString() === today
      ).length;
      
      return todayImpressions < banner.maxDailyImpressions;
    });

    if (availableBanners.length === 0) return;

    // Select next banner based on performance
    const nextBanner = this.selectOptimalBanner(availableBanners);
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
      const bestMetrics = getBannerMetrics(best.id);
      const currentMetrics = getBannerMetrics(current.id);
      
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
    const banner = this.banners.find(b => b.id === bannerId);
    if (banner) {
      banner.priority = newPriority;
      this.banners.sort((a, b) => b.priority - a.priority);
    }
  }
}

// Export singleton instance
export const bannerRotationEngine = new BannerRotationEngine();

export const trackBannerClickWithPage = (bannerId: string, pageUrl: string): void => {
  recordBannerImpression({
    bannerId,
    pageUrl,
    clicked: true
  });
};

/**
 * Reset all banner data
 */
<<<<<<<< HEAD:utils/bannerRotationSystem.ts
export const resetBannerData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
};
========
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

export interface RotationConfig {
  interval: number;
  randomize: boolean;
  categories: string[];
}

export class BannerRotationSystem {
  private config: RotationConfig;
  private currentIndex = 0;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(config: RotationConfig) {
    this.config = config;
  }

  start(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.rotate();
    }, this.config.interval);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private rotate(): void {
    // Implementation for banner rotation
    this.currentIndex = this.config.randomize 
      ? Math.floor(Math.random() * this.config.categories.length)
      : (this.currentIndex + 1) % this.config.categories.length;
  }

  getCurrentCategory(): string {
    return this.config.categories[this.currentIndex] || '';
  }
}

export const bannerRotationSystem = new BannerRotationSystem({
  interval: 5000,
  randomize: false,
  categories: ['default']
});

export default bannerRotationSystem;
