/**
 * Content Recommendation Engine
 * AI-powered content recommendations based on user behavior and preferences
 */

interface ContentItem {
<<<<<<< HEAD
id: string,
title: string,
category: string,
tags: string[],
url: string,
type: 'blog' | 'case-study' | 'service' | 'guide';',
readTime?: number;
publishDate: string,
=======
id: string;,
title: string;,
category: string;,
tags: string[];,
url: string;,
type: 'blog' | 'case-study' | 'service' | 'guide';';,
readTime?: number;
publishDate: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
views?: number;
conversions?: number;
}

interface UserProfile {
<<<<<<< HEAD
interests: string[],
viewedContent: string[],
preferredCategories: string[],
readingLevel: 'beginner' | 'intermediate' | 'advanced';',
=======
interests: string[];,
viewedContent: string[];,
preferredCategories: string[];,
readingLevel: 'beginner' | 'intermediate' | 'advanced';';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
engagement: number; // 0-1 score
}

interface RecommendationScore {
<<<<<<< HEAD
contentId: string,
score: number,
=======
contentId: string;,
score: number;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
reasons: string[];
}

interface RecommendationResult {
<<<<<<< HEAD
content: ContentItem,
score: number,
=======
content: ContentItem;,
score: number;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
reasons: string[];
}

class ContentRecommendationEngine {
<<<<<<< HEAD
  private contentCatalog:ContentItem[] = [],
  private userProfiles: Map<string, UserProfile> = new Map(),
=======
  private contentCatalog: ContentItem[] = [];,
  private userProfiles: Map<string, UserProfile> = new Map();,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

  /**
   * Add content to catalog
   */
  addContent(content: ContentItem | ContentItem[]): void {,
    const items = Array.isArray(content) ? content : [content];
    this.contentCatalog.push(...items);
  }

  /**
   * Get recommendations for user
   */
  getRecommendations(
<<<<<<< HEAD
    userId: string,
=======
    userId: string,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    options: {,
limit?: number;
excludeViewed?: boolean;
category?: string;
<<<<<<< HEAD
type?: ContentItem['type'];
=======
type?: ContentItem['type'];';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
} = {}
  ): RecommendationResult[] {
    const {
      limit = 5
      excludeViewed = true
      category,
      type
    } = options;

    // Get or create user profile
    const userProfile = this.createUserProfile(userId);

    // Filter content
    let candidates = this.contentCatalog;

    if (excludeViewed) {
      candidates = candidates.filter(
        (item) => !userProfile.viewedContent.includes(item.id)
      );
    }

    if (category) {
      candidates = candidates.filter((item) => item.category === category);
    }

    if (type) {
      candidates = candidates.filter((item) => item.type === type);
    }

    // Score each candidate
    const scored = candidates.map((item) => this.scoreContent(item, userProfile));

    // Sort by score and return top results
    const topRecommendations = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return topRecommendations.map((rec) => {
      const content = this.contentCatalog.find((c) => c.id === rec.contentId)!;
      return {
        content,
<<<<<<< HEAD
        score: rec.score,
        reasons: rec.reasons
=======
        score: rec.score,,
        reasons: rec.reasons,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      };
    });
  }

  /**
   * Score content for user
   */
  private scoreContent(content: ContentItem, profile: UserProfile): RecommendationScore {,
    let score = 0;
<<<<<<< HEAD
    const reasons: string[] = [],
=======
    const reasons: string[] = [];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

    // Interest matching
    const interestMatches = content.tags.filter((tag) =>
      profile.interests.some((interest) => 
        interest.toLowerCase().includes(tag.toLowerCase()) ||
        tag.toLowerCase().includes(interest.toLowerCase())
      )
    );

    if (interestMatches.length > 0) {
      const interestScore = Math.min(interestMatches.length * 15, 45);
      score += interestScore;
      reasons.push(`Matches ${interestMatches.length} of your interests`);`;
    }

    // Category preference
    if (profile.preferredCategories.includes(content.category)) {
      score += 20;
      reasons.push(`From your preferred category: ${content.category}`);`;
    }

    // Popularity score (based on views and conversions)
    if (content.views && content.views > 1000) {
      score += 10;
      reasons.push('Popular content');';
    }

    if (content.conversions && content.conversions > 10) {
      score += 15;
      reasons.push('High conversion rate');';
    }

    // Recency boost for new content
    const daysOld = this.getDaysOld(content.publishDate);
    if (daysOld <= 7) {
      score += 10;
      reasons.push('Recently published');';
    } else if (daysOld <= 30) {
      score += 5;
      reasons.push('Recent content');';
    }

    // Reading level match
    const contentComplexity = this.estimateComplexity(content);
    if (contentComplexity === profile.readingLevel) {
      score += 10;
      reasons.push('Matches your reading level');';
    }

    // Reading time preference (based on engagement)
    if (content.readTime) {
      if (profile.engagement > 0.7 && content.readTime >= 10) {
        score += 10;
        reasons.push('In-depth content for engaged readers');';
      } else if (profile.engagement < 0.5 && content.readTime <= 5) {
        score += 10;
        reasons.push('Quick read');';
      }
    }

    return {
<<<<<<< HEAD
      contentId: content.id,
      score: Math.min(score, 100),
      reasons
=======
      contentId: content.id,,
      score: Math.min(score, 100),,
      reasons,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };
  }

  /**
   * Get or create user profile
   */
  private createUserProfile(userId: string): UserProfile {,
    if (!this.userProfiles.has(userId)) {
      this.userProfiles.set(userId, {
<<<<<<< HEAD
        interests: [],
        viewedContent: [],
        preferredCategories: [],
        readingLevel: 'intermediate',
        engagement: 0.5
=======
        interests: [],,
        viewedContent: [],,
        preferredCategories: [],,
        readingLevel: 'intermediate',';,
        engagement: 0.5,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
    }
    return this.userProfiles.get(userId)!;
  }

  /**
   * Update user profile based on interaction
   */
  updateUserProfile(
<<<<<<< HEAD
    userId: string,
=======
    userId: string,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    update: {,
viewedContent?: string;
interest?: string;
category?: string;
engagement?: number;
}
  ): void {
    const profile = this.createUserProfile(userId);

    if (update.viewedContent) {
      if (!profile.viewedContent.includes(update.viewedContent)) {
        profile.viewedContent.push(update.viewedContent);
      }
    }

    if (update.interest) {
      if (!profile.interests.includes(update.interest)) {
        profile.interests.push(update.interest);
      }
    }

    if (update.category) {
      if (!profile.preferredCategories.includes(update.category)) {
        profile.preferredCategories.push(update.category);
      }
    }

    if (update.engagement !== undefined) {
      // Running average
      profile.engagement = (profile.engagement + update.engagement) / 2;
    }
  }

  /**
   * Get similar content
   */
  getSimilarContent(contentId: string, limit: number = 5): ContentItem[] {,
    const source = this.contentCatalog.find((c) => c.id === contentId);
    if (!source) return [];

    // Calculate similarity scores
    const scored = this.contentCatalog
      .filter((c) => c.id !== contentId)
      .map((item) => ({
<<<<<<< HEAD
        content: item,
        score: this.calculateSimilarity(source, item)
=======
        content: item,,
        score: this.calculateSimilarity(source, item),,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return scored.map((s) => s.content);
  }

  /**
   * Calculate content similarity
   */
  private calculateSimilarity(content1: ContentItem, content2: ContentItem): number {,
    let score = 0;

    // Same category
    if (content1.category === content2.category) {
      score += 40;
    }

    // Tag overlap
    const commonTags = content1.tags.filter((tag) => content2.tags.includes(tag));
    score += Math.min(commonTags.length * 15, 45);

    // Same type
    if (content1.type === content2.type) {
      score += 15;
    }

    return score;
  }

  /**
   * Get trending content
   */
  getTrendingContent(limit: number = 10): ContentItem[] {,
    return this.contentCatalog
      .filter((c) => c.views || c.conversions)
      .sort((a, b) => {
        const scoreA = (a.views || 0) * 0.7 + (a.conversions || 0) * 100;
        const scoreB = (b.views || 0) * 0.7 + (b.conversions || 0) * 100;
        return scoreB - scoreA;
      })
      .slice(0, limit);
  }

  /**
   * Get content by category
   */
  getByCategory(category: string, limit: number = 10): ContentItem[] {,
    return this.contentCatalog
      .filter((c) => c.category === category)
      .slice(0, limit);
  }

  /**
   * Get content by type
   */
<<<<<<< HEAD
  getByType(type: ContentItem['type'], limit: number = 10): ContentItem[] {',
=======
  getByType(type: ContentItem['type'], limit: number = 10): ContentItem[] {';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    return this.contentCatalog
      .filter((c) => c.type === type)
      .slice(0, limit);
  }

  /**
   * Search content
   */
  searchContent(query: string, limit: number = 10): ContentItem[] {,
    const lowerQuery = query.toLowerCase();
    
    return this.contentCatalog
      .map((item) => ({
<<<<<<< HEAD
        content: item,
        relevance: this.calculateRelevance(item, lowerQuery)
=======
        content: item,,
        relevance: this.calculateRelevance(item, lowerQuery),,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }))
      .filter((r) => r.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit)
      .map((r) => r.content);
  }

  /**
   * Calculate search relevance
   */
  private calculateRelevance(content: ContentItem, query: string): number {,
    let score = 0;

    // Title match (highest weight)
    if (content.title.toLowerCase().includes(query)) {
      score += 50;
    }

    // Category match
    if (content.category.toLowerCase().includes(query)) {
      score += 20;
    }

    // Tag matches
    const matchingTags = content.tags.filter((tag) =>
      tag.toLowerCase().includes(query)
    );
    score += matchingTags.length * 10;

    return score;
  }

  /**
   * Estimate content complexity
   */
<<<<<<< HEAD
  private estimateComplexity(content: ContentItem): 'beginner' | 'intermediate' | 'advanced' {',
    // Simple heuristic based on tags and title
    const technicalTerms = [
      'quantum',
      'neural',
      'algorithm',
      'architecture',
      'infrastructure',
      'kubernetes',
      'microservices'
=======
  private estimateComplexity(content: ContentItem): 'beginner' | 'intermediate' | 'advanced' {';,
    // Simple heuristic based on tags and title
    const technicalTerms = [
      'quantum',';
      'neural',';
      'algorithm',';
      'architecture',';
      'infrastructure',';
      'kubernetes',';
      'microservices',';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    ];

    const hasTechnicalTerms = technicalTerms.some((term) =>
      content.title.toLowerCase().includes(term) ||
      content.tags.some((tag) => tag.toLowerCase().includes(term))
    );

    if (hasTechnicalTerms) {
      return 'advanced';';
    } else if (content.readTime && content.readTime > 10) {
      return 'intermediate';';
    } else {
      return 'beginner';';
    }
  }

  /**
   * Get days old
   */
  private getDaysOld(publishDate: string): number {,
    const date = new Date(publishDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Get personalized feed
   */
  getPersonalizedFeed(userId: string, limit: number = 20): ContentItem[] {,
    const recommendations = this.getRecommendations(userId, { limit: limit * 2 });
    const trending = this.getTrendingContent(5);
    const recent = this.getRecentContent(5);

    // Interleave recommendations, trending, and recent
<<<<<<< HEAD
    const feed: ContentItem[] = [],
=======
    const feed: ContentItem[] = [];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    const maxItems = Math.max(recommendations.length, trending.length, recent.length);

    for (let i = 0; i < maxItems && feed.length < limit; i++) {
      if (i < recommendations.length) feed.push(recommendations[i].content);
      if (i < trending.length && feed.length < limit) feed.push(trending[i]);
      if (i < recent.length && feed.length < limit) feed.push(recent[i]);
    }

    // Remove duplicates
    const seen = new Set<string>();
    return feed.filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    }).slice(0, limit);
  }

  /**
   * Get recent content
   */
  private getRecentContent(limit: number = 10): ContentItem[] {,
    return [...this.contentCatalog]
      .sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, limit);
  }

  /**
   * Track content view
   */
  trackView(contentId: string, userId: string, duration: number): void {,
    // Update content metrics
    const content = this.contentCatalog.find((c) => c.id === contentId);
    if (content) {
      content.views = (content.views || 0) + 1;
    }

    // Update user profile
    this.updateUserProfile(userId, {
      viewedContent: contentId,,
      engagement: duration / 60000, // Convert ms to minutes,
    });

    // Extract category and tags as interests
    if (content) {
      this.updateUserProfile(userId, {
<<<<<<< HEAD
        category: content.category
=======
        category: content.category,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
      
      content.tags.forEach((tag) => {
        this.updateUserProfile(userId, {
<<<<<<< HEAD
          interest: tag
=======
          interest: tag,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        });
      });
    }
  }

  /**
   * Track conversion
   */
  trackConversion(contentId: string): void {,
    const content = this.contentCatalog.find((c) => c.id === contentId);
    if (content) {
      content.conversions = (content.conversions || 0) + 1;
    }
  }

  /**
   * Get content stats
   */
<<<<<<< HEAD
  getContentStats(contentId: string): {
views: number;
conversions: number;
=======
  getContentStats(contentId: string): {,
views: number;,
conversions: number;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
conversionRate: number;
} | null {
    const content = this.contentCatalog.find((c) => c.id === contentId);
    if (!content) return null;

    const views = content.views || 0;
    const conversions = content.conversions || 0;
    const conversionRate = views > 0 ? conversions / views : 0;

    return {
      views,
      conversions,
      conversionRate
    };
  }

  /**
   * Get user profile
   */
  getUserProfile(userId: string): UserProfile {,
    if (!this.userProfiles.has(userId)) {
      this.userProfiles.set(userId, {
<<<<<<< HEAD
        interests: [],
        viewedContent: [],
        preferredCategories: [],
        readingLevel: 'intermediate',
        engagement: 0.5
=======
        interests: [],,
        viewedContent: [],,
        preferredCategories: [],,
        readingLevel: 'intermediate',';,
        engagement: 0.5,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
    }
    return this.userProfiles.get(userId)!;
  }

  /**
   * Get catalog size
   */
  getCatalogSize(): number {
    return this.contentCatalog.length;
  }

  /**
   * Clear catalog
   */
  clearCatalog(): void {
    this.contentCatalog = [];
  }

  /**
   * Export recommendations data
   */
  exportData(): {
catalog: ContentItem[];
profiles: { [userId: string]: UserProfile
};
  } {
    return {
<<<<<<< HEAD
      catalog: [...this.contentCatalog],
      profiles: Object.fromEntries(this.userProfiles)
=======
      catalog: [...this.contentCatalog],,
      profiles: Object.fromEntries(this.userProfiles),,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };
  }
}

// Singleton instance
<<<<<<< HEAD
let recommendationEngineInstance: ContentRecommendationEngine | null = null,
=======
let recommendationEngineInstance: ContentRecommendationEngine | null = null;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

export const getRecommendationEngine = (): ContentRecommendationEngine => {
  if (!recommendationEngineInstance) {
    recommendationEngineInstance = new ContentRecommendationEngine();
  }
  return recommendationEngineInstance;
};

export default ContentRecommendationEngine;
export type { ContentItem, UserProfile, RecommendationResult };
;