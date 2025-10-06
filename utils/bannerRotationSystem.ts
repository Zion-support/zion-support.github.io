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
const MAX_VISIBLE_BANNERS = 10; // Limit visible banners for performance

/**
 * Get or create session ID
 */
const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'server';
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

/**
 * Get banner impressions from storage
 */
const getBannerImpressions = (): BannerImpression[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const impressions = JSON.parse(stored) as BannerImpression[];
      // Filter out impressions older than 7 days
      const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      return impressions.filter(imp => imp.timestamp > weekAgo);
    }
  } catch (error) {
    console.error('Error reading banner impressions:', error);
  }
  return [];
};

/**
 * Save banner impression
 */
export const recordBannerImpression = (impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>) => {
  if (typeof window === 'undefined') return;
  
  try {
    const impressions = getBannerImpressions();
    const newImpression: BannerImpression = {
      ...impression,
      timestamp: Date.now(),
      sessionId: getSessionId()
    };
    
    impressions.push(newImpression);
    
    // Keep only last 1000 impressions to prevent storage bloat
    const trimmedImpressions = impressions.slice(-1000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedImpressions));
  } catch (error) {
    console.error('Error saving banner impression:', error);
  }
};

/**
 * Get impression count for a banner
 */
export const getBannerImpressionCount = (bannerId: string, hours: number = 24): number => {
  const impressions = getBannerImpressions();
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
  const impressions = getBannerImpressions();
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
    .sort((a, b) => b.rotationScore - a.rotationScore)
    .slice(0, MAX_VISIBLE_BANNERS);
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

export default {
  recordBannerImpression,
  getBannerImpressionCount,
  shouldShowBanner,
  getRotationScore,
  getBannersForRotation,
  trackBannerClick,
  trackBannerVisibility
};