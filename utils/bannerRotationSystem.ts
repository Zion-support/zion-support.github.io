/**
 * Banner Rotation System
 *
 * Intelligently rotates banners to maximize user engagement and conversion
 * while preventing banner fatigue.
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
  scrollDepth?: number;
  timeVisible?: number;
  clicked?: boolean;
}

const STORAGE_KEY = 'zion_banner_impressions';
const SESSION_KEY = 'zion_session_id';
// const MAX_VISIBLE_BANNERS = 10; // Limit visible banners for performance

/**
 * Get or create session ID
 */
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

/**
 * Get stored impressions
 */
const getStoredImpressions = (): BannerImpression[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

/**
 * Store impressions
 */
const storeImpressions = (impressions: BannerImpression[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(impressions));
  } catch (error) {
    console.error('Failed to store banner impressions:', error);
  }
};

/**
 * Record banner impression
 */
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
    
    // Keep only last 1000 impressions to prevent storage bloat
    const trimmedImpressions = impressions.slice(-1000);
    storeImpressions(trimmedImpressions);
  } catch (error) {
    console.error('Failed to store banner impressions:', error);
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
 * Get rotation score for banner prioritization
 */
export const getRotationScore = (banner: BannerConfig): number => {
  const impressions = getStoredImpressions();
  const bannerImpressions = impressions.filter(imp => imp.bannerId === banner.id);
  
  // Calculate engagement rate
  const clicks = bannerImpressions.filter(imp => imp.clicked).length;
  const engagementRate = bannerImpressions.length > 0 ? clicks / bannerImpressions.length : 0;
  
  // Calculate recency score (more recent impressions = higher score)
  const recentImpressions = bannerImpressions.filter(imp => imp.timestamp > Date.now() - 24 * 60 * 60 * 1000);
  const recencyScore = Math.min(1, recentImpressions.length / 10);
  
  // Calculate fatigue score (too many impressions = lower score)
  const fatigueScore = Math.max(0, 1 - (bannerImpressions.length / 50));
  
  // Weighted combination
  return (banner.priority * 0.4) + (engagementRate * 0.3) + (recencyScore * 0.2) + (fatigueScore * 0.1);
};

/**
 * Get banners for rotation
 */
export const getBannersForRotation = (banners: BannerConfig[]): BannerConfig[] => {
  return banners
    .filter(shouldShowBanner)
    .map(banner => ({ ...banner, rotationScore: getRotationScore(banner) }))
    .sort((a, b) => b.rotationScore - a.rotationScore);
};

/**
 * Record banner click
 */
export const recordBannerClick = (bannerId: string): void => {
  const impressions = getStoredImpressions();
  const lastImpression = impressions
    .filter(imp => imp.bannerId === bannerId)
    .pop();
  
  if (lastImpression) {
    lastImpression.clicked = true;
    storeImpressions(impressions);
  }
};

/**
 * Track banner click
 */
export const trackBannerClick = (bannerId: string, pageUrl: string): void => {
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
  
  const clicks = bannerImpressions.filter(imp => imp.clicked).length;
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

export default {
  recordBannerImpression,
  getBannerImpressionCount,
  shouldShowBanner,
  getRotationScore,
  getBannersForRotation,
  trackBannerClick,
  trackBannerVisibility
};
