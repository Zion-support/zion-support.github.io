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

// const STORAGE_KEY = 'zion_banner_impressions';
// const SESSION_KEY = 'zion_session_id';
const MAX_VISIBLE_BANNERS = 10; // Limit visible banners for performance

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
//     const stored = localStorage.getItem(STORAGE_KEY);
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
  } catch {
    // Silently fail if localStorage is not available
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
//     const trimmedImpressions = impressions.slice(-1000);
    storeImpressions(trimmedImpressions);
  } catch (error) {
//     console.error('Failed to store banner impressions:', error);
  }
};

/**
 * Get impression count for a banner
 */
export const getBannerImpressionCount = (bannerId: string, hours: number = 24): number => {
  const impressions = getStoredImpressions();
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
 * Calculate banner score for rotation
 */
export const calculateBannerScore = (banner: BannerConfig): number => {
  const impressions = getStoredImpressions();
  const bannerImpressions = impressions.filter(imp => imp.bannerId === banner.id);
  
  // Calculate engagement rate
//   const clicks = bannerImpressions.filter(imp => imp.clicked).length;
//   const engagementRate = bannerImpressions.length > 0 ? clicks / bannerImpressions.length : 0;
  
  // Calculate recency score (more recent impressions = higher score)
  const recentImpressions = bannerImpressions.filter(imp => imp.timestamp > Date.now() - 24 * 60 * 60 * 1000);
//   const recencyScore = Math.min(1, recentImpressions.length / 10);
  
  // Calculate fatigue score (too many impressions = lower score)
//   const fatigueScore = Math.max(0, 1 - (bannerImpressions.length / 50));
  
  // Weighted combination
  return (banner.priority * 0.4) + (engagementRate * 0.3) + (recencyScore * 0.2) + (fatigueScore * 0.1);
};

/**
 * Select banners for rotation
 */
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
};

/**
 * Get banner analytics
 */
export const getBannerAnalytics = (bannerId?: string) => {
  const impressions = getStoredImpressions();
  const bannerImpressions = bannerId ? impressions.filter(imp => imp.bannerId === bannerId) : impressions;
  
//   const totalImpressions = bannerImpressions.length;
//   const clicks = bannerImpressions.filter(imp => imp.clicked).length;
//   const engagementRate = totalImpressions > 0 ? clicks / totalImpressions : 0;
  
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
export const clearOldImpressions = (daysToKeep: number = 30): void => {
//   const cutoff = Date.now() - (daysToKeep * 24 * 60 * 60 * 1000);
  const impressions = getStoredImpressions();
//   const filteredImpressions = impressions.filter(imp => imp.timestamp > cutoff);
  storeImpressions(filteredImpressions);
};

/**
 * Reset all banner data
 */
export const resetBannerData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
};