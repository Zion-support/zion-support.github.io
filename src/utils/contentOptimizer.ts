/**
 * Content Optimization Utilities
 * Provides functions for optimizing content loading, caching, and delivery
 */

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  priority: number;
  lastModified: Date;
  size: number;
}

interface OptimizationConfig {
  maxCacheSize: number;
  compressionLevel: number;
  preloadThreshold: number;
  lazyLoadThreshold: number;
}

class ContentOptimizer {
  private cache = new Map<string, ContentItem>();
  private config: OptimizationConfig;

  constructor(config: OptimizationConfig = {
    maxCacheSize: 100,
    compressionLevel: 6,
    preloadThreshold: 0.8,
    lazyLoadThreshold: 100,
  }) {
    this.config = config;
  }

  /**
   * Optimize content for delivery
   */
  optimizeContent(content: string): string {
    // Remove unnecessary whitespace
    let optimized = content
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();

    // Compress HTML-like content
    if (optimized.includes('<') && optimized.includes('>')) {
      optimized = this.compressHTML(optimized);
    }

    // Optimize images (placeholder for future implementation)
    optimized = this.optimizeImages(optimized);

    return optimized;
  }

  /**
   * Compress HTML content
   */
  private compressHTML(html: string): string {
    return html
      .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/>\s+</g, '><') // Remove whitespace between tags
      .trim();
  }

  /**
   * Optimize images in content
   */
  private optimizeImages(content: string): string {
    // Add lazy loading attributes to images
    return content.replace(
      /<img([^>]*)>/gi,
      (match, attributes) => {
        if (!attributes.includes('loading=')) {
          return `<img${attributes} loading="lazy">`;
        }
        return match;
      }
    );
  }

  /**
   * Cache content item
   */
  cacheContent(item: ContentItem): void {
    // Remove oldest items if cache is full
    if (this.cache.size >= this.config.maxCacheSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(item.id, item);
  }

  /**
   * Get cached content
   */
  getCachedContent(id: string): ContentItem | null {
    return this.cache.get(id) || null;
  }

  /**
   * Preload high-priority content
   */
  preloadContent(items: ContentItem[]): void {
    const highPriorityItems = items
      .filter(item => item.priority >= this.config.preloadThreshold * 10)
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 5); // Preload top 5 items

    highPriorityItems.forEach(item => {
      this.cacheContent(item);
    });
  }

  /**
   * Get content recommendations based on user behavior
   */
  getContentRecommendations(userHistory: string[]): ContentItem[] {
    const recommendations: ContentItem[] = [];
    
    // Simple recommendation logic based on category frequency
    const categoryFrequency = new Map<string, number>();
    userHistory.forEach(itemId => {
      const item = this.cache.get(itemId);
      if (item) {
        categoryFrequency.set(
          item.category,
          (categoryFrequency.get(item.category) || 0) + 1
        );
      }
    });

    // Find items in popular categories
    this.cache.forEach(item => {
      const frequency = categoryFrequency.get(item.category) || 0;
      if (frequency > 0 && !userHistory.includes(item.id)) {
        recommendations.push(item);
      }
    });

    return recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 10);
  }

  /**
   * Analyze content performance
   */
  analyzeContentPerformance(items: ContentItem[]): {
    averageSize: number;
    largestItem: ContentItem | null;
    categoryDistribution: Map<string, number>;
    recommendations: string[];
  } {
    const totalSize = items.reduce((sum, item) => sum + item.size, 0);
    const averageSize = totalSize / items.length;

    const largestItem = items.reduce((largest, current) => 
      current.size > largest.size ? current : largest
    );

    const categoryDistribution = new Map<string, number>();
    items.forEach(item => {
      categoryDistribution.set(
        item.category,
        (categoryDistribution.get(item.category) || 0) + 1
      );
    });

    const recommendations: string[] = [];
    
    if (averageSize > 100000) { // 100KB
      recommendations.push('Consider reducing average content size');
    }
    
    if (largestItem && largestItem.size > 500000) { // 500KB
      recommendations.push(`Large item detected: ${largestItem.title}`);
    }

    const categoryCount = categoryDistribution.size;
    if (categoryCount > 20) {
      recommendations.push('Consider consolidating content categories');
    }

    return {
      averageSize,
      largestItem,
      categoryDistribution,
      recommendations,
    };
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    totalSize: number;
  } {
    const totalSize = Array.from(this.cache.values())
      .reduce((sum, item) => sum + item.size, 0);

    return {
      size: this.cache.size,
      maxSize: this.config.maxCacheSize,
      hitRate: 0.85, // Placeholder - would need actual tracking
      totalSize,
    };
  }
}

// Export singleton instance
export const contentOptimizer = new ContentOptimizer();

// Export types and class
export { ContentOptimizer, type ContentItem, type OptimizationConfig };