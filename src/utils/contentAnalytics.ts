/**
 * Content Analytics Utility
 * Tracks content performance, engagement, and ROI metrics
 */

export interface ContentMetrics {
  articleId: string;
  views: number;
  timeOnPage: number;
  engagement: number;
  shares: number;
  conversions: number;
  lastUpdated: string;
}

export interface ContentPerformance {
  topPerformingArticles: string[];
  totalEngagement: number;
  averageTimeOnPage: number;
  conversionRate: number;
}

/**
 * Track article view
 */
export const trackArticleView = (articleId: string, category?: string): void => {
  if (typeof window === 'undefined') return;
  
  try {
    // Track in localStorage for client-side analytics
    const views = JSON.parse(localStorage.getItem('article_views') || '{}');
    views[articleId] = (views[articleId] || 0) + 1;
    localStorage.setItem('article_views', JSON.stringify(views));
    
    // Track category performance
    if (category) {
      const categoryViews = JSON.parse(localStorage.getItem('category_views') || '{}');
      categoryViews[category] = (categoryViews[category] || 0) + 1;
      localStorage.setItem('category_views', JSON.stringify(categoryViews));
    }
    
    // Send to analytics service (placeholder for future integration)
    if (window.gtag) {
      window.gtag('event', 'article_view', {
        article_id: articleId,
        category: category
      });
    }
  } catch (error) {
    console.error('Error tracking article view:', error);
  }
};

/**
 * Track article engagement (scroll depth, time spent)
 */
export const trackArticleEngagement = (
  articleId: string,
  scrollDepth: number,
  timeSpent: number
): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const engagement = JSON.parse(localStorage.getItem('article_engagement') || '{}');
    engagement[articleId] = {
      scrollDepth: Math.max(scrollDepth, engagement[articleId]?.scrollDepth || 0),
      timeSpent: (engagement[articleId]?.timeSpent || 0) + timeSpent,
      lastViewed: new Date().toISOString()
    };
    localStorage.setItem('article_engagement', JSON.stringify(engagement));
    
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'article_engagement', {
        article_id: articleId,
        scroll_depth: scrollDepth,
        time_spent: timeSpent
      });
    }
  } catch (error) {
    console.error('Error tracking engagement:', error);
  }
};

/**
 * Track article share
 */
export const trackArticleShare = (
  articleId: string,
  platform: 'twitter' | 'linkedin' | 'facebook' | 'email' | 'copy'
): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const shares = JSON.parse(localStorage.getItem('article_shares') || '{}');
    if (!shares[articleId]) shares[articleId] = {};
    shares[articleId][platform] = (shares[articleId][platform] || 0) + 1;
    localStorage.setItem('article_shares', JSON.stringify(shares));
    
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'article_share', {
        article_id: articleId,
        platform: platform
      });
    }
  } catch (error) {
    console.error('Error tracking share:', error);
  }
};

/**
 * Track content conversion (CTA click, contact form, newsletter signup)
 */
export const trackContentConversion = (
  articleId: string,
  conversionType: 'cta_click' | 'contact_form' | 'newsletter' | 'demo_request'
): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const conversions = JSON.parse(localStorage.getItem('content_conversions') || '{}');
    if (!conversions[articleId]) conversions[articleId] = {};
    conversions[articleId][conversionType] = (conversions[articleId][conversionType] || 0) + 1;
    localStorage.setItem('content_conversions', JSON.stringify(conversions));
    
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'content_conversion', {
        article_id: articleId,
        conversion_type: conversionType
      });
    }
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
};

/**
 * Get content performance metrics
 */
export const getContentPerformance = (): ContentPerformance => {
  if (typeof window === 'undefined') {
    return {
      topPerformingArticles: [],
      totalEngagement: 0,
      averageTimeOnPage: 0,
      conversionRate: 0
    };
  }
  
  try {
    const views = JSON.parse(localStorage.getItem('article_views') || '{}');
    const engagement = JSON.parse(localStorage.getItem('article_engagement') || '{}');
    const conversions = JSON.parse(localStorage.getItem('content_conversions') || '{}');
    
    // Calculate top performers
    const viewCounts = Object.entries(views).sort(([, a], [, b]) => (b as number) - (a as number));
    const topPerformingArticles = viewCounts.slice(0, 10).map(([id]) => id);
    
    // Calculate total engagement
    const totalEngagement = Object.values(engagement).reduce(
      (sum: number, data: any) => sum + (data.timeSpent || 0),
      0
    );
    
    // Calculate average time
    const averageTimeOnPage = totalEngagement / Object.keys(engagement).length || 0;
    
    // Calculate conversion rate
    const totalViews = Object.values(views).reduce((sum: number, count) => sum + (count as number), 0);
    const totalConversions = Object.values(conversions).reduce(
      (sum: number, data: any) => sum + Object.values(data).reduce((s: number, c) => s + (c as number), 0),
      0
    );
    const conversionRate = totalViews > 0 ? (totalConversions / totalViews) * 100 : 0;
    
    return {
      topPerformingArticles,
      totalEngagement,
      averageTimeOnPage,
      conversionRate
    };
  } catch (error) {
    console.error('Error getting content performance:', error);
    return {
      topPerformingArticles: [],
      totalEngagement: 0,
      averageTimeOnPage: 0,
      conversionRate: 0
    };
  }
};

/**
 * Get trending categories based on views
 */
export const getTrendingCategories = (): { category: string; views: number }[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const categoryViews = JSON.parse(localStorage.getItem('category_views') || '{}');
    return Object.entries(categoryViews)
      .map(([category, views]) => ({ category, views: views as number }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);
  } catch (error) {
    console.error('Error getting trending categories:', error);
    return [];
  }
};

/**
 * Clear analytics data (for testing/privacy)
 */
export const clearAnalyticsData = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('article_views');
    localStorage.removeItem('article_engagement');
    localStorage.removeItem('article_shares');
    localStorage.removeItem('content_conversions');
    localStorage.removeItem('category_views');
  } catch (error) {
    console.error('Error clearing analytics:', error);
  }
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}