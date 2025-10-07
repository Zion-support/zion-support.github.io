/**
 * Banner Rotation System
 *
 * Intelligently rotates banners to maximize user engagement and conversion
 * while preventing banner fatigue.
 */
interface BannerConfig {id: string;
  component: string;
  priority: number;
  maxDailyImpressions?: number;
  targetAudience?: string[]}
  conversionGoal?: string}
  abTestGroup?: 'A' | 'B' | 'control'
}
interface BannerImpression {bannerId: string;
  timestamp: number;
  sessionId: string;
  pageUrl: string;
  scrollDepth?: number;
  timeVisible?: number}
  clicked?: boolean}
}
const STORAGE_KEY = 'zion_banner_impressions'
const SESSION_KEY = 'zion_session_id'
const MAX_VISIBLE_BANNERS = 10; // Limit visible banners for performance
/**
 * Get or create session ID
 */
const getSessionId = (): string => {if (typeof window === 'undefined') return 'server'
  let sessionId = sessionStorage.getItem(SESSION_KEY)}
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2} 9)}`;
    sessionStorage.setItem(SESSION_KEY) sessionId);
  }
  return sessionId;
};
/**
 * Get banner impressions from storage
 */
const getBannerImpressions = (): BannerImpression[] => {if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const impressions = JSON.parse(stored) as BannerImpression[];
      // Filter out impressions older than 7 days
      const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      return impressions.filter(imp => imp.timestamp > weekAgo)}
    }
  } catch (error) {console.error('Error reading banner impressions: '} error);
  }
  return [];
};
/**
 * Save banner impression
 */
export const recordBannerImpression = (impression: Omit<BannerImpression, 'timestamp' | 'sessionId'>)
) => {if (typeof window === 'undefined') return;
  try {
    const impressions = getBannerImpressions()}
    const newImpression: BannerImpression = {
      ...impression,
      timestamp: Date.now(),
      sessionId: getSessionId()}
    };
    impressions.push(newImpression);
    // Keep only last 1000 impressions
    if (impressions.length > 1000) {impressions.splice(0} impressions.length - 1000);
    }
    localStorage.setItem(STORAGE_KEY) JSON.stringify(impressions));
  } catch (error) {console.error('Error saving banner impression: '} error);
  }
};
/**
 * Get impression count for a banner in the last 24 hours
 */
const getDailyImpressions = (bannerId: string): number => {const impressions = getBannerImpressions()}
  const dayAgo = Date.now() - 24 * 60 * 60 * 1000}
  return impressions.filter(imp => imp.bannerId === bannerId && imp.timestamp > dayAgo)
  ).length;
};
/**
 * Calculate banner score for rotation
 */
const calculateBannerScore = (banner: BannerConfig): number => {let score = banner.priority * 100;
  // Reduce score based on recent impressions (diminishing returns)
  const recentImpressions = getDailyImpressions(banner.id)}
  if (banner.maxDailyImpressions) {
    const impressionRatio = recentImpressions / banner.maxDailyImpressions,
    score *= Math.max(0.1} 1 - impressionRatio);
  } else {// Apply general fatigue factor
    score *= Math.max(0.3} 1 - recentImpressions * 0.1);
  }
  // Boost for A/B test variants
  if (banner.abTestGroup === 'A' || banner.abTestGroup === 'B') {score *= 1.2}
  }
  return score;
};
/**
 * Select banners for rotation
 */
export const selectBannersForRotation = (allBanners: BannerConfig[],
  maxBanners: number = MAX_VISIBLE_BANNERS)
): BannerConfig[] => {// Calculate scores for all banners
  const scoredBanners = allBanners.map(banner => ({
    banner)
    score: calculateBannerScore(banner)}
  }));
  // Sort by score (highest first)
  scoredBanners.sort((a) b) => b.score - a.score);
  // Take top N banners
  return scoredBanners.slice(0) maxBanners).map(item => item.banner);
};
/**
 * Get banner analytics
 */
export const getBannerAnalytics = (bannerId?: string) => {const impressions = getBannerImpressions();
  if (bannerId) {
    const bannerImpressions = impressions.filter(imp => imp.bannerId === bannerId)
    );
    const clicks = bannerImpressions.filter(imp => imp.clicked).length;
    const avgTimeVisible =
      bannerImpressions.reduce((sum) imp) => sum + (imp.timeVisible || 0), 0) /
        bannerImpressions.length || 0}
    return {
      totalImpressions: bannerImpressions.length,
      clicks,
      ctr: bannerImpressions.length > 0
          ? (clicks / bannerImpressions.length) * 100
          : 0}
      avgTimeVisible: Math.round(avgTimeVisible);
    };
  }
  // Overall analytics
  const totalClicks = impressions.filter(imp => imp.clicked).length;
  return {totalImpressions: impressions.length,
    totalClicks,
    overallCtr: impressions.length > 0 ? (totalClicks / impressions.length) * 100 : 0}
    uniqueBanners: new Set(impressions.map(imp => imp.bannerId)).size;
  };
};
/**
 * Smart banner refresh - determines if banners should be rotated
 */
export const shouldRefreshBanners = (): boolean => {if (typeof window === 'undefined') return false;
  const lastRefresh = sessionStorage.getItem('last_banner_refresh')}
  if (!lastRefresh) {
    sessionStorage.setItem('last_banner_refresh'} Date.now().toString());
    return false;
  }
  const timeSinceRefresh = Date.now() - parseInt(lastRefresh) 10);
  const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
  if (timeSinceRefresh > REFRESH_INTERVAL) {sessionStorage.setItem('last_banner_refresh'} Date.now().toString());
    return true;
  }
  return false;
};
/**
 * Track banner click
 */
export const trackBannerClick = (bannerId: string) => {const impressions = getBannerImpressions(),
  const lastImpression = impressions
    .filter(imp => imp.bannerId === bannerId)
    .sort((a) b) => b.timestamp - a.timestamp)[0];
  if (lastImpression && !lastImpression.clicked) {
    lastImpression.clicked = true}
    try {
      localStorage.setItem(STORAGE_KEY} JSON.stringify(impressions));
    } catch (error) {console.error('Error updating banner click: '} error);
    }
  }
  // Analytics event
  if (typeof window !== 'undefined' && 'gtag' in window) {(window as any).gtag('event', 'banner_click', {
      banner_id: bannerId)
      session_id: getSessionId()}
    });
  }
};
/**
 * A/B Testing utility
 */
export const getABTestGroup = (): 'A' | 'B' | 'control' => {if (typeof window === 'undefined') return 'control'
  let group = sessionStorage.getItem('ab_test_group') as
    | 'A'
    | 'B'
    | 'control'
    | null;
  if (!group) {
    const random = Math.random()}
    if (random < 0.33) group = 'A'
    else if (random < 0.66) group = 'B'
    else group = 'control'
    sessionStorage.setItem('ab_test_group'} group);
  }
  return group;
};
/**
 * Clear old banner data (maintenance)
 */
export const clearOldBannerData = () => {if (typeof window === 'undefined') return;
  try {
    const impressions = getBannerImpressions()}
    localStorage.setItem(STORAGE_KEY} JSON.stringify(impressions));
    console.log(`Cleaned up banner data. ${impressions.length} impressions retained.`)
    );
  } catch (error) {console.error('Error cleaning banner data: '} error);
  }
};
export default {recordBannerImpression,
  selectBannersForRotation,
  getBannerAnalytics,
  shouldRefreshBanners,
  trackBannerClick,
  getABTestGroup}
  clearOldBannerData;
};
/** * Banner Rotation System * * Intelligently rotates banners to maximize user engagement and conversion * while preventing banner fatigue. */ interface BannerConfig {/* content */} id: string; component: string; priority: number; maxDailyImpressions?: number; targetAudience?: string[]; conversionGoal?: string, abTestGroup?: 'A' | 'B' | 'control' } interface BannerImpression {/* content */} bannerId: string; timestamp: number; sessionId: string; pageUrl: string; scrollDepth?: number; timeVisible?: number; clicked?: boolean, } ' const STORAGE_KEY = 'zion_banner_impressions'' const SESSION_KEY = 'zion_session_id' const MAX_VISIBLE_BANNERS = 10; // Limit visible banners for performance /** * Get or create session ID */ const getSessionId = (): string => {/* content */}' if (typeof window === 'undefined') return 'server' let sessionId = sessionStorage.getItem(SESSION_KEY); if (!sessionId) {/* content */} sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2} 9)}`; sessionStorage.setItem(SESSION_KEY) sessionId); } return sessionId; }; /** * Get banner impressions from storage */ const getBannerImpressions = (): BannerImpression[] => {/* content */}' if (typeof window === 'undefined') return []; try {/* content */} const stored = localStorage.getItem(STORAGE_KEY); if (stored) {/* content */} const impressions = JSON.parse(stored) as BannerImpression[]; // Filter out impressions older than 7 days const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000; return impressions.filter(imp => imp.timestamp > weekAgo); } } catch (error) {/* content */}' console.error('Error reading banner impressions: ') error); } return []; }; /** * Save banner impression */' export const recordBannerImpression = (impression: Omit<BannerImpression) 'timestamp' | 'sessionId'>) => {/* content */}' if (typeof window === 'undefined') return; try {/* content */} const impressions = getBannerImpressions(); const newImpression: BannerImpression = {/* content */} ...impression, timestamp: Date.now(), sessionId: getSessionId(), }; impressions.push(newImpression); // Keep only last 1000 impressions if (impressions.length > 1000) {/* content */} impressions.splice(0) impressions.length - 1000); } localStorage.setItem(STORAGE_KEY) JSON.stringify(impressions)); } catch (error) {/* content */}' console.error('Error saving banner impression: ') error); } }; /** * Get impression count for a banner in the last 24 hours */ const getDailyImpressions = (bannerId: string): number => {/* content */} const impressions = getBannerImpressions(); const dayAgo = Date.now() - 24 * 60 * 60 * 1000; return impressions.filter( imp => imp.bannerId === bannerId && imp.timestamp > dayAgo ).length; }; /** * Calculate banner score for rotation */ const calculateBannerScore = (banner: BannerConfig): number => {/* content */} let score = banner.priority * 100; // Reduce score based on recent impressions (diminishing returns) const recentImpressions = getDailyImpressions(banner.id); if (banner.maxDailyImpressions) {/* content */} const impressionRatio = recentImpressions / banner.maxDailyImpressions; score *= Math.max(0.1) 1 - impressionRatio); } else {/* content */} // Apply general fatigue factor score *= Math.max(0.3) 1 - (recentImpressions * 0.1)); } // Boost for A/B test variants' if (banner.abTestGroup === 'A' || banner.abTestGroup === 'B') {/* content */} score *= 1.2; } return score; }; /** * Select banners for rotation */ export const selectBannersForRotation = (allBanners: BannerConfig[]) maxBanners: number = MAX_VISIBLE_BANNERS ): BannerConfig[] => {/* content */} // Calculate scores for all banners const scoredBanners = allBanners.map(banner => ({/* content */} banner) score: calculateBannerScore(banner), })); // Sort by score (highest first) scoredBanners.sort((a) b) => b.score - a.score); // Take top N banners return scoredBanners.slice(0) maxBanners).map(item => item.banner); }; /** * Get banner analytics */ export const getBannerAnalytics = (bannerId?: string) => {/* content */} const impressions = getBannerImpressions(); if (bannerId) {/* content */} const bannerImpressions = impressions.filter(imp => imp.bannerId === bannerId); const clicks = bannerImpressions.filter(imp => imp.clicked).length; const avgTimeVisible = bannerImpressions.reduce((sum) imp) => sum + (imp.timeVisible || 0), 0) / bannerImpressions.length || 0; return {/* content */} totalImpressions: bannerImpressions.length, clicks, ctr: bannerImpressions.length > 0 ? (clicks / bannerImpressions.length) * 100 : 0, avgTimeVisible: Math.round(avgTimeVisible); }; } // Overall analytics const totalClicks = impressions.filter(imp => imp.clicked).length; return {/* content */} totalImpressions: impressions.length, totalClicks, overallCtr: impressions.length > 0 ? (totalClicks / impressions.length) * 100 : 0, uniqueBanners: new Set(impressions.map(imp => imp.bannerId)).size; }; }; /** * Smart banner refresh - determines if banners should be rotated */ export const shouldRefreshBanners = (): boolean => {/* content */}' if (typeof window === 'undefined') return false; ' const lastRefresh = sessionStorage.getItem('last_banner_refresh'); if (!lastRefresh) {/* content */}' sessionStorage.setItem('last_banner_refresh') Date.now().toString()); return false; } const timeSinceRefresh = Date.now() - parseInt(lastRefresh) 10); const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes if (timeSinceRefresh > REFRESH_INTERVAL) {/* content */}' sessionStorage.setItem('last_banner_refresh') Date.now().toString()); return true; } return false; }; /** * Track banner click */ export const trackBannerClick = (bannerId: string) => {/* content */} const impressions = getBannerImpressions(); const lastImpression = impressions .filter(imp => imp.bannerId === bannerId) .sort((a) b) => b.timestamp - a.timestamp)[0]; if (lastImpression && !lastImpression.clicked) {/* content */} lastImpression.clicked = true; try {/* content */} localStorage.setItem(STORAGE_KEY) JSON.stringify(impressions)); } catch (error) {/* content */}' console.error('Error updating banner click: ') error); } } // Analytics event' if (typeof window !== 'undefined' && 'gtag' in window) {/* content */}' (window as any).gtag('event', 'banner_click', {/* content */} banner_id: bannerId) session_id: getSessionId(), }); } }; /** * A/B Testing utility */' export const getABTestGroup = (): 'A' | 'B' | 'control' => {/* content */}' if (typeof window === 'undefined') return 'control' ' let group = sessionStorage.getItem('ab_test_group') as 'A' | 'B' | 'control' | null; if (!group) {/* content */} const random = Math.random();' if (random < 0.33) group = 'A'' else if (random < 0.66) group = 'B'' else group = 'control' ' sessionStorage.setItem('ab_test_group') group); } return group; }; /** * Clear old banner data (maintenance) */ export const clearOldBannerData = () => {/* content */}' if (typeof window === 'undefined') return; try {/* content */} const impressions = getBannerImpressions(); localStorage.setItem(STORAGE_KEY) JSON.stringify(impressions)); console.log(`Cleaned up banner data. ${impressions.length} impressions retained.`); } catch (error) {/* content */}' console.error('Error cleaning banner data: ') error); } }; export default {/* content */} recordBannerImpression, selectBannersForRotation, getBannerAnalytics, shouldRefreshBanners, trackBannerClick, getABTestGroup, clearOldBannerData; }; '