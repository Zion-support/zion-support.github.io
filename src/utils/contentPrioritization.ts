/**
 * Content Prioritization System
 * Intelligently prioritizes and organizes content based on various factors
 */

export interface ContentItem {
id: string;
title: string;
date: Date;
category: string;
priority: number;
value?: number; // Business value in billions,
roi?: number; // ROI percentage,
views?: number;
engagement?: number; // 0-100,
freshness?: number; // Days since publication
}

export interface PrioritizationConfig {
recencyWeight: number; // Weight for how recent the content is,
valueWeight: number; // Weight for business value,
engagementWeight: number; // Weight for user engagement,
priorityWeight: number; // Weight for manual priority,
categoryBalance: boolean; // Whether to balance across categories
}

const DEFAULT_CONFIG: PrioritizationConfig = {
  recencyWeight: 0.3,
  valueWeight: 0.25,
  engagementWeight: 0.25,
  priorityWeight: 0.2,
  categoryBalance: true,
};

/**
 * Calculate recency score (0-100)
 * Newer content gets higher scores
 */
export const calculateRecencyScore = (publishDate: Date): number => {
  const now = new Date();
  const daysSince = (now.getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24);
  
  if (daysSince < 1) return 100; // Brand new
  if (daysSince < 7) return 90; // This week
  if (daysSince < 30) return 75; // This month
  if (daysSince < 90) return 50; // This quarter
  if (daysSince < 180) return 25; // Last 6 months
  return 10; // Older content
};

/**
 * Calculate value score (0-100)
 * Based on business value in billions
 */
export const calculateValueScore = (value?: number): number => {
  if (!value) return 0;
  
  // Logarithmic scale for large values
  if (value >= 100) return 100; // $100B+
  if (value >= 50) return 95;
  if (value >= 10) return 90;
  if (value >= 5) return 85;
  if (value >= 2) return 75;
  if (value >= 1) return 65;
  if (value >= 0.5) return 50;
  if (value >= 0.1) return 35;
  return 20;
};

/**
 * Calculate engagement score (0-100)
 * Based on views and engagement metrics
 */
export const calculateEngagementScoreFromMetrics = (
  views?: number,
  engagement?: number
): number => {
  if (!views && !engagement) return 50; // Default score for new content
  
  let score = 0;
  
  // Views component (50% weight)
  if (views) {
    if (views >= 100000) score += 50;
    else if (views >= 50000) score += 45;
    else if (views >= 10000) score += 40;
    else if (views >= 5000) score += 35;
    else if (views >= 1000) score += 25;
    else score += (views / 1000) * 25;
  } else {
    score += 25; // Default if no views data
  }
  
  // Engagement component (50% weight)
  if (engagement !== undefined) {
    score += (engagement / 100) * 50;
  } else {
    score += 25; // Default if no engagement data
  }
  
  return Math.min(100, score);
};

/**
 * Calculate overall content score
 */
export const calculateContentScore = (
  item: ContentItem,
  config: PrioritizationConfig = DEFAULT_CONFIG
): number => {
  const recencyScore = calculateRecencyScore(item.date);
  const valueScore = calculateValueScore(item.value);
  const engagementScore = calculateEngagementScoreFromMetrics(item.views, item.engagement);
  const priorityScore = item.priority * 10; // Convert priority (1-10) to 0-100 scale
  
  const totalScore =
    recencyScore * config.recencyWeight +
    valueScore * config.valueWeight +
    engagementScore * config.engagementWeight +
    priorityScore * config.priorityWeight;
  
  return totalScore;
};

/**
 * Sort content by calculated scores
 */
export const prioritizeContent = (
  items: ContentItem[],
  config?: PrioritizationConfig
): ContentItem[] => {
  const scoredItems = items.map(item => ({
    item,
    score: calculateContentScore(item, config),
  }));
  
  scoredItems.sort((a, b) => b.score - a.score);
  
  return scoredItems.map(si => si.item);
};

/**
 * Prioritize content with category balancing
 * Ensures diverse content representation
 */
export const prioritizeWithBalance = (
  items: ContentItem[],
  maxPerCategory: number = 3,
  totalMax: number = 10,
  config?: PrioritizationConfig
): ContentItem[] => {
  // Group by category
  const byCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ContentItem[]>);
  
  // Prioritize within each category
  const prioritizedByCategory: Record<string, ContentItem[]> = {};
  Object.keys(byCategory).forEach(category => {
    prioritizedByCategory[category] = prioritizeContent(byCategory[category], config);
  });
  
  // Round-robin selection from categories
  const result: ContentItem[] = [];
  const categories = Object.keys(prioritizedByCategory);
  const categoryIndices: Record<string, number> = {};
  categories.forEach(cat => (categoryIndices[cat] = 0));
  
  while (result.length < totalMax) {
    let addedInRound = false;
    
    for (const category of categories) {
      const categoryItems = prioritizedByCategory[category];
      const currentIndex = categoryIndices[category];
      
      // Check if we've exhausted this category or hit category limit
      const categoryCount = result.filter(item => item.category === category).length;
      if (currentIndex >= categoryItems.length || categoryCount >= maxPerCategory) {
        continue;
      }
      
      result.push(categoryItems[currentIndex]);
      categoryIndices[category]++;
      addedInRound = true;
      
      if (result.length >= totalMax) break;
    }
    
    // If no items were added in this round, we're done
    if (!addedInRound) break;
  }
  
  return result;
};

/**
 * Get top N items from each category
 */
export const getTopByCategory = (
  items: ContentItem[],
  topN: number = 5,
  config?: PrioritizationConfig
): Record<string, ContentItem[]> => {
  const byCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ContentItem[]>);
  
  const result: Record<string, ContentItem[]> = {};
  Object.keys(byCategory).forEach(category => {
    const prioritized = prioritizeContent(byCategory[category], config);
    result[category] = prioritized.slice(0, topN);
  });
  
  return result;
};

/**
 * Filter content by minimum score threshold
 */
export const filterByQuality = (
  items: ContentItem[],
  minScore: number = 70,
  config?: PrioritizationConfig
): ContentItem[] => {
  return items.filter(item => {
    const score = calculateContentScore(item, config);
    return score >= minScore;
  });
};

/**
 * Get trending content (high recent engagement)
 */
export const getTrendingContent = (
  items: ContentItem[],
  topN: number = 5,
  recentDays: number = 7
): ContentItem[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - recentDays);
  
  const recentItems = items.filter(item => item.date >= cutoffDate);
  
  return prioritizeContent(recentItems, {
    recencyWeight: 0.2,
    valueWeight: 0.2,
    engagementWeight: 0.5, // High weight on engagement for trending
    priorityWeight: 0.1,
    categoryBalance: false,
  }).slice(0, topN);
};

/**
 * Get evergreen content (consistently high engagement)
 */
export const getEvergreenContent = (
  items: ContentItem[],
  topN: number = 5
): ContentItem[] => {
  return prioritizeContent(items, {
    recencyWeight: 0.1, // Low weight on recency
    valueWeight: 0.3,
    engagementWeight: 0.5, // High weight on engagement
    priorityWeight: 0.1,
    categoryBalance: false,
  }).slice(0, topN);
};

/**
 * Create a content feed with mixed types
 */
export const createMixedFeed = (
  items: ContentItem[],
  config: {
trendingCount: number;,
newCount: number;,
evergreenCount: number;,
totalMax: number;
}
): {
trending: ContentItem[];,
new: ContentItem[];,
evergreen: ContentItem[];,
all: ContentItem[];
} => {
  const trending = getTrendingContent(items, config.trendingCount);
  const trendingIds = new Set(trending.map(item => item.id));
  
  const remainingAfterTrending = items.filter(item => !trendingIds.has(item.id));
  
  // Get newest content
  const sortedByDate = [...remainingAfterTrending].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  const newContent = sortedByDate.slice(0, config.newCount);
  const newIds = new Set(newContent.map(item => item.id));
  
  // Get evergreen from remaining
  const remainingAfterNew = remainingAfterTrending.filter(item => !newIds.has(item.id));
  const evergreen = getEvergreenContent(remainingAfterNew, config.evergreenCount);
  
  // Combine all with deduplication
  const allIds = new Set<string>();
  const all: ContentItem[] = [];
  
  [...trending, ...newContent, ...evergreen].forEach(item => {
    if (!allIds.has(item.id) && all.length < config.totalMax) {
      allIds.add(item.id);
      all.push(item);
    }
  });
  
  return {
    trending,
    new: newContent,
    evergreen,
    all,
  };
};

export default {
  calculateRecencyScore,
  calculateValueScore,
  calculateEngagementScoreFromMetrics,
  calculateContentScore,
  prioritizeContent,
  prioritizeWithBalance,
  getTopByCategory,
  filterByQuality,
  getTrendingContent,
  getEvergreenContent,
  createMixedFeed,
};
