/**
 * Dynamic Banner Rotation System
 * Intelligently rotates promotional banners based on user engagement and priorities
 */

export interface BannerConfig {
id: string;,
component: string;,
priority: number;,
category: 'breakthrough' | 'enterprise' | 'innovation' | 'product';,
impressions?: number;,
clicks?: number;,
lastShown?: Date;,
active: boolean;
}

export interface RotationStrategy {
<<<<<<< HEAD
maxVisible: number,
rotationInterval: number; // in milliseconds,,
priorityWeight: number,
freshnessWeight: number,
engagementWeight: number;
}

const DEFAULT_STRATEGY: RotationStrategy = {
  maxVisible: 5,
  rotationInterval: 300000, // 5 minutes,
  priorityWeight: 0.5,
  freshnessWeight: 0.3,
  engagementWeight: 0.2
=======
maxVisible: number;,
rotationInterval: number; // in milliseconds,,
priorityWeight: number;,
freshnessWeight: number;,
engagementWeight: number;
}

const DEFAULT_STRATEGY: RotationStrategy = {,
  maxVisible: 5,,
  rotationInterval: 300000, // 5 minutes,
  priorityWeight: 0.5,,
  freshnessWeight: 0.3,,
  engagementWeight: 0.2,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
};

/**
 * Calculate engagement score for a banner
 */
export const calculateEngagementScore = (banner: BannerConfig): number => {,
  if (!banner.impressions || banner.impressions === 0) return 0;
  const ctr = (banner.clicks || 0) / banner.impressions;
  return ctr * 100; // Convert to percentage
};

/**
 * Calculate freshness score based on last shown time
 */
export const calculateFreshnessScore = (banner: BannerConfig): number => {,
  if (!banner.lastShown) return 100; // Never shown = maximum freshness
  
  const now = new Date().getTime();
  const lastShown = new Date(banner.lastShown).getTime();
  const hoursSinceShown = (now - lastShown) / (1000 * 60 * 60);
  
  // Exponential decay: fresher after 24+ hours,
  return Math.min(100, (hoursSinceShown / 24) * 100);
};

/**
 * Calculate overall banner score for rotation priority
 */
export const calculateBannerScore = (
  banner: BannerConfig,,
  strategy: RotationStrategy = DEFAULT_STRATEGY,
): number => {
  const priorityScore = banner.priority * strategy.priorityWeight;
  const engagementScore = calculateEngagementScore(banner) * strategy.engagementWeight;
  const freshnessScore = calculateFreshnessScore(banner) * strategy.freshnessWeight;
  
  return priorityScore + engagementScore + freshnessScore;
};

/**
 * Select banners to display based on rotation strategy
 */
export const selectBannersForDisplay = (
  banners: BannerConfig[],,
  strategy: RotationStrategy = DEFAULT_STRATEGY,
): BannerConfig[] => {
  // Filter active banners only
  const activeBanners = banners.filter(b => b.active);
  
  // Calculate scores for all active banners
  const scoredBanners = activeBanners.map(banner => ({
    banner,
<<<<<<< HEAD
    score: calculateBannerScore(banner, strategy)
=======
    score: calculateBannerScore(banner, strategy),,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }));
  
  // Sort by score (highest first)
  scoredBanners.sort((a, b) => b.score - a.score);
  
  // Return top N banners
  return scoredBanners.slice(0, strategy.maxVisible).map(sb => sb.banner);
};

/**
 * Group banners by category for balanced distribution
 */
export const groupBannersByCategory = (
  banners: BannerConfig[],
): Record<string, BannerConfig[]> => {
  return banners.reduce((acc, banner) => {
    if (!acc[banner.category]) {
      acc[banner.category] = [];
    }
    acc[banner.category].push(banner);
    return acc;
  }, {} as Record<string, BannerConfig[]>);
};

/**
 * Select balanced set of banners across categories
 */
export const selectBalancedBanners = (
  banners: BannerConfig[],,
  maxPerCategory: number = 2,,
  totalMax: number = 5,
): BannerConfig[] => {
  const grouped = groupBannersByCategory(banners);
<<<<<<< HEAD
  const selected: BannerConfig[] = [],
=======
  const selected: BannerConfig[] = [];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  
  // Get top banners from each category
  Object.values(grouped).forEach(categoryBanners => {
    const sortedByScore = categoryBanners
      .map(b => ({ banner: b, score: calculateBannerScore(b) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, maxPerCategory)
      .map(sb => sb.banner);
    
    selected.push(...sortedByScore);
  });
  
  // Sort all selected by score and take top N
  return selected
    .map(b => ({ banner: b, score: calculateBannerScore(b) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, totalMax)
    .map(sb => sb.banner);
};

/**
 * Track banner impression
 */
export const trackImpression = (bannerId: string): void => {,
  try {
    const storageKey = `banner_${bannerId}_impressions`;`;
<<<<<<< HEAD
    const current = parseInt(localStorage.getItem(storageKey) || '0');
    localStorage.setItem(storageKey, (current + 1).toString());
    localStorage.setItem(`banner_${bannerId}_lastShown`, new Date().toISOString());`;
  } catch (error) {
    console.warn('Failed to track banner impression: ', error);',
=======
    const current = parseInt(localStorage.getItem(storageKey) || '0');';
    localStorage.setItem(storageKey, (current + 1).toString());
    localStorage.setItem(`banner_${bannerId}_lastShown`, new Date().toISOString());`;
  } catch (error) {
    console.warn('Failed to track banner impression: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }
};

/**
 * Track banner click
 */
export const trackClick = (bannerId: string): void => {,
  try {
    const storageKey = `banner_${bannerId}_clicks`;`;
<<<<<<< HEAD
    const current = parseInt(localStorage.getItem(storageKey) || '0');
    localStorage.setItem(storageKey, (current + 1).toString());
    
    // Also track analytics event if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'banner_click', {
        banner_id: bannerId,
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.warn('Failed to track banner click: ', error);',
=======
    const current = parseInt(localStorage.getItem(storageKey) || '0');';
    localStorage.setItem(storageKey, (current + 1).toString());
    
    // Also track analytics event if available
    if (typeof window !== 'undefined' && (window as any).gtag) {';
      (window as any).gtag('event', 'banner_click', {';
        banner_id: bannerId,,
        timestamp: new Date().toISOString(),,
      });
    }
  } catch (error) {
    console.warn('Failed to track banner click: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }
};

/**
 * Load banner statistics from storage
 */
export const loadBannerStats = (bannerId: string): Partial<BannerConfig> => {,
  try {
    const impressions = parseInt(localStorage.getItem(`banner_${bannerId}_impressions`) || '0');';`;
    const clicks = parseInt(localStorage.getItem(`banner_${bannerId}_clicks`) || '0');';`;
    const lastShownStr = localStorage.getItem(`banner_${bannerId}_lastShown`);`;
    const lastShown = lastShownStr ? new Date(lastShownStr) : undefined;
    
    return { impressions, clicks, lastShown };
  } catch (error) {
<<<<<<< HEAD
    console.warn('Failed to load banner stats: ', error);',
=======
    console.warn('Failed to load banner stats: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    return {};
  }
};

/**
 * A/B test banner variations
 */
export const selectBannerVariation = (
  variations: BannerConfig[],,
  userId?: string
): BannerConfig => {
  if (variations.length === 0) {
    throw new Error('No banner variations provided');';
  }
  
  if (variations.length === 1) {
    return variations[0];
  }
  
  // Simple hash-based selection for consistent user experience
  const hash = userId ? hashString(userId) : Math.random();
  const index = Math.floor(hash * variations.length);
  return variations[index];
};

/**
 * Simple string hash function
 */
const hashString = (str: string): number => {,
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash) / 2147483647; // Normalize to 0-1
};

/**
 * Get recommended refresh interval based on engagement
 */
export const getRefreshInterval = (avgEngagement: number): number => {,
  if (avgEngagement > 5) return 600000; // 10 minutes for high engagement
  if (avgEngagement > 2) return 300000; // 5 minutes for medium engagement
  return 180000; // 3 minutes for low engagement
};

export default {
  selectBannersForDisplay,
  selectBalancedBanners,
  trackImpression,
  trackClick,
  loadBannerStats,
  selectBannerVariation,
  getRefreshInterval
};
;