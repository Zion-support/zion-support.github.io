/**
 * Advanced SEO Optimizer
 * Automatically optimizes content for search engines with real-time analysis
 */

interface SEOMetrics {
titleScore: number;,
descriptionScore: number;,
headingScore: number;,
keywordDensity: number;,
readabilityScore: number;,
imageOptimization: number;,
linkScore: number;,
overallScore: number;
}

interface SEORecommendation {
category: 'critical' | 'important' | 'minor';';,
message: string;,
action: string;,
impact: 'high' | 'medium' | 'low';';
}

interface SEOAnalysis {
metrics: SEOMetrics;,
recommendations: SEORecommendation[];,
keywords: { word: string; count: number; density: number
}[];
  issues: string[];,
  strengths: string[];
}

class AdvancedSEOOptimizer {
  private targetKeywordDensity = { min: 0.01, max: 0.03 }; // 1-3%
  private targetTitleLength = { min: 50, max: 60 };
  private targetDescriptionLength = { min: 150, max: 160 };

  /**
   * Analyze page for SEO optimization
   */
  analyzePage(options: {,
title?: string;
description?: string;
content?: string;
headings?: string[];
images?: { src: string; alt: string
}[];
    links?: { href: string; text: string; isInternal: boolean }[];
    keywords?: string[];
  }): SEOAnalysis {
    const {
      title = '',';
      description = '',';
      content = '',';
      headings = [],
      images = [],
      links = [],
      keywords = [],
    } = options;

    // Calculate metrics
    const metrics: SEOMetrics = {,
      titleScore: this.scoreTitleTag(title, keywords),,
      descriptionScore: this.scoreMetaDescription(description, keywords),,
      headingScore: this.scoreHeadings(headings, keywords),,
      keywordDensity: this.calculateKeywordDensity(content, keywords),,
      readabilityScore: this.calculateReadability(content),,
      imageOptimization: this.scoreImageOptimization(images),,
      linkScore: this.scoreLinkStructure(links),,
      overallScore: 0, // Will be calculated,
    };

    // Calculate overall score
    metrics.overallScore = this.calculateOverallScore(metrics);

    // Generate recommendations
    const recommendations = this.generateRecommendations(metrics, options);

    // Extract keywords
    const extractedKeywords = this.extractKeywords(content);

    // Identify issues and strengths
    const issues = this.identifyIssues(metrics, options);
    const strengths = this.identifyStrengths(metrics, options);

    return {
      metrics,
      recommendations,
      keywords: extractedKeywords,,
      issues,
      strengths,
    };
  }

  /**
   * Score title tag
   */
  private scoreTitleTag(title: string, keywords: string[]): number {,
    let score = 0;

    // Check length
    const length = title.length;
    if (length >= this.targetTitleLength.min && length <= this.targetTitleLength.max) {
      score += 40;
    } else if (length > 0 && length < this.targetTitleLength.min) {
      score += 20;
    } else if (length > this.targetTitleLength.max && length < 70) {
      score += 30;
    }

    // Check for keywords
    const lowerTitle = title.toLowerCase();
    const keywordCount = keywords.filter((kw) => lowerTitle.includes(kw.toLowerCase())).length;
    score += Math.min(keywordCount * 15, 45);

    // Check for power words
    const powerWords = ['ultimate', 'guide', 'best', 'top', 'complete', 'essential', 'proven'];';
    const hasPowerWord = powerWords.some((word) => lowerTitle.includes(word));
    if (hasPowerWord) score += 15;

    return Math.min(score, 100);
  }

  /**
   * Score meta description
   */
  private scoreMetaDescription(description: string, keywords: string[]): number {,
    let score = 0;

    // Check length
    const length = description.length;
    if (length >= this.targetDescriptionLength.min && length <= this.targetDescriptionLength.max) {
      score += 40;
    } else if (length > 0 && length < this.targetDescriptionLength.min) {
      score += 20;
    } else if (length > this.targetDescriptionLength.max && length < 180) {
      score += 30;
    }

    // Check for keywords
    const lowerDesc = description.toLowerCase();
    const keywordCount = keywords.filter((kw) => lowerDesc.includes(kw.toLowerCase())).length;
    score += Math.min(keywordCount * 20, 40);

    // Check for call-to-action
    const ctaWords = ['discover', 'learn', 'find', 'get', 'try', 'download', 'buy'];';
    const hasCTA = ctaWords.some((word) => lowerDesc.includes(word));
    if (hasCTA) score += 20;

    return Math.min(score, 100);
  }

  /**
   * Score headings structure
   */
  private scoreHeadings(headings: string[], keywords: string[]): number {,
    let score = 0;

    // Check if headings exist
    if (headings.length > 0) score += 30;
    if (headings.length >= 3) score += 20;

    // Check for keywords in headings
    const headingsWithKeywords = headings.filter((h) => {
      const lower = h.toLowerCase();
      return keywords.some((kw) => lower.includes(kw.toLowerCase()));
    });

    score += Math.min(headingsWithKeywords.length * 15, 50);

    return Math.min(score, 100);
  }

  /**
   * Calculate keyword density
   */
  private calculateKeywordDensity(content: string, keywords: string[]): number {,
    if (keywords.length === 0) return 0;

    const words = content.toLowerCase().split(/\s+/).filter((w) => w.length > 0);
    const totalWords = words.length;
    if (totalWords === 0) return 0;

    const keywordCount = keywords.reduce((count, keyword) => {
      const kw = keyword.toLowerCase();
      return count + words.filter((w) => w.includes(kw)).length;
    }, 0);

    const density = keywordCount / totalWords;

    // Score based on target density
    if (density >= this.targetKeywordDensity.min && density <= this.targetKeywordDensity.max) {
      return 100;
    } else if (density < this.targetKeywordDensity.min) {
      return (density / this.targetKeywordDensity.min) * 100;
    } else {
      const overflow = density - this.targetKeywordDensity.max;
      return Math.max(0, 100 - overflow * 1000);
    }
  }

  /**
   * Calculate readability score (Flesch Reading Ease)
   */
  private calculateReadability(content: string): number {,
    const sentences = content.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const words = content.split(/\s+/).filter((w) => w.length > 0);
    const syllables = words.reduce((count, word) => count + this.countSyllables(word), 0);

    if (sentences.length === 0 || words.length === 0) return 0;

    const avgWordsPerSentence = words.length / sentences.length;
    const avgSyllablesPerWord = syllables / words.length;

    // Flesch Reading Ease formula
    const score = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord;

    // Normalize to 0-100 where 100 is best
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Count syllables in a word
   */
  private countSyllables(word: string): number {,
    word = word.toLowerCase();
    if (word.length <= 3) return 1;

    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');';
    word = word.replace(/^y/, '');';

    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
  }

  /**
   * Score image optimization
   */
  private scoreImageOptimization(images: { src: string; alt: string }[]): number {
    if (images.length === 0) return 100; // No images, no problem

    let score = 0;

    // Check for alt text
    const imagesWithAlt = images.filter((img) => img.alt && img.alt.length > 0);
    const altTextScore = (imagesWithAlt.length / images.length) * 60;
    score += altTextScore;

    // Check for descriptive alt text (more than 3 words)
    const descriptiveAlt = imagesWithAlt.filter((img) => img.alt.split(/\s+/).length >= 3);
    const descriptiveScore = (descriptiveAlt.length / images.length) * 40;
    score += descriptiveScore;

    return Math.min(score, 100);
  }

  /**
   * Score link structure
   */
  private scoreLinkStructure(links: { href: string; text: string; isInternal: boolean }[]): number {
    if (links.length === 0) return 50; // Neutral score for no links

    let score = 0;

    // Check for internal links
    const internalLinks = links.filter((link) => link.isInternal);
    if (internalLinks.length > 0) score += 30;
    if (internalLinks.length >= 3) score += 20;

    // Check for descriptive anchor text
    const descriptiveLinks = links.filter((link) => {
      const text = link.text.toLowerCase();
      return text.length > 3 && !text.includes('click here') && !text.includes('read more');';
    });
    score += (descriptiveLinks.length / links.length) * 50;

    return Math.min(score, 100);
  }

  /**
   * Calculate overall SEO score
   */
  private calculateOverallScore(metrics: SEOMetrics): number {,
    const weights = {
      title: 0.20,,
      description: 0.15,,
      headings: 0.15,,
      keywordDensity: 0.15,,
      readability: 0.15,,
      images: 0.10,,
      links: 0.10,,
    };

    return Math.round(
      metrics.titleScore * weights.title +
        metrics.descriptionScore * weights.description +
        metrics.headingScore * weights.headings +
        metrics.keywordDensity * weights.keywordDensity +
        metrics.readabilityScore * weights.readability +
        metrics.imageOptimization * weights.images +
        metrics.linkScore * weights.links
    );
  }

  /**
   * Generate recommendations
   */
  private generateRecommendations(
    metrics: SEOMetrics,
  ): SEORecommendation[] {
    const recommendations: SEORecommendation[] = [];,

    // Title recommendations
    if (metrics.titleScore < 70) {
      recommendations.push({
        category: 'critical',';,
        message: 'Title tag needs optimization',';,
        action: `Optimize title length (50-60 chars) and include primary keywords`,,`;
        impact: 'high',';,
      });
    }

    // Description recommendations
    if (metrics.descriptionScore < 70) {
      recommendations.push({
        category: 'critical',';,
        message: 'Meta description needs improvement',';,
        action: 'Write compelling description (150-160 chars) with keywords and CTA',';,
        impact: 'high',';,
      });
    }

    // Heading recommendations
    if (metrics.headingScore < 60) {
      recommendations.push({
        category: 'important',';,
        message: 'Heading structure could be improved',';,
        action: 'Add more headings with target keywords',';,
        impact: 'medium',';,
      });
    }

    // Keyword density recommendations
    if (metrics.keywordDensity < 50) {
      recommendations.push({
        category: 'important',';,
        message: 'Keyword density is too low',';,
        action: 'Naturally incorporate keywords throughout content (target 1-3%)',';,
        impact: 'high',';,
      });
    } else if (metrics.keywordDensity < 80) {
      recommendations.push({
        category: 'minor',';,
        message: 'Keyword density could be optimized',';,
        action: 'Fine-tune keyword usage for optimal density',';,
        impact: 'low',';,
      });
    }

    // Readability recommendations
    if (metrics.readabilityScore < 60) {
      recommendations.push({
        category: 'important',';,
        message: 'Content readability needs improvement',';,
        action: 'Use shorter sentences and simpler words',';,
        impact: 'medium',';,
      });
    }

    // Image recommendations
    if (metrics.imageOptimization < 80) {
      recommendations.push({
        category: 'important',';,
        message: 'Image optimization needed',';,
        action: 'Add descriptive alt text to all images',';,
        impact: 'medium',';,
      });
    }

    // Link recommendations
    if (metrics.linkScore < 60) {
      recommendations.push({
        category: 'minor',';,
        message: 'Link structure could be improved',';,
        action: 'Add more internal links with descriptive anchor text',';,
        impact: 'low',';,
      });
    }

    return recommendations.sort((a, b) => {
      const categoryOrder = { critical: 0, important: 1, minor: 2 };
      return categoryOrder[a.category] - categoryOrder[b.category];
    });
  }

  /**
   * Extract keywords from content
   */
  private extractKeywords(content: string, limit: number = 10): { word: string; count: number; density: number }[] {
    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')';
      .split(/\s+/)
      .filter((w) => w.length > 3);

    const wordCounts = new Map<string, number>();
    words.forEach((word) => {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    });

    const totalWords = words.length;
    const keywords = Array.from(wordCounts.entries())
      .map(([word, count]) => ({
        word,
        count,
        density: count / totalWords,,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);

    return keywords;
  }

  /**
   * Identify SEO issues
   */
  private identifyIssues(metrics: SEOMetrics): string[] {,
const issues: string[] = [];,
if (metrics.titleScore < 50) issues.push('Title tag is poorly optimized');';
if (metrics.descriptionScore < 50) issues.push('Meta description is poorly optimized');';
if (metrics.headingScore < 40) issues.push('Missing or poorly structured headings');';
if (metrics.keywordDensity < 30) issues.push('Keyword density is too low');';
if (metrics.readabilityScore < 50) issues.push('Content is difficult to read');';
if (metrics.imageOptimization < 60) issues.push('Images lack proper alt text');';
if (metrics.linkScore < 40) issues.push('Weak internal linking structure');';
return issues;
}

  /**
   * Identify SEO strengths
   */
  private identifyStrengths(metrics: SEOMetrics): string[] {,
const strengths: string[] = [];,
if (metrics.titleScore >= 80) strengths.push('Excellent title tag optimization');';
if (metrics.descriptionScore >= 80) strengths.push('Well-optimized meta description');';
if (metrics.headingScore >= 80) strengths.push('Strong heading structure');';
if (metrics.keywordDensity >= 80) strengths.push('Optimal keyword density');';
if (metrics.readabilityScore >= 70) strengths.push('Highly readable content');';
if (metrics.imageOptimization >= 80) strengths.push('Well-optimized images');';
if (metrics.linkScore >= 70) strengths.push('Good internal linking');';
return strengths;
}

  /**
   * Generate structured data (JSON-LD)
   */
  generateStructuredData(type: 'Article' | 'Product' | 'Service', data: any): string {';,
    const baseSchema = {
      '@context': 'https: //schema.org',';,
      '@type': type,';
    };

    const schema = { ...baseSchema, ...data };
    return JSON.stringify(schema, null, 2);
  }

  /**
   * Optimize meta tags
   */
  optimizeMetaTags(page: {,
title: string;,
description: string;,
keywords: string[];,
author?: string;
image?: string;
url?: string;
}): { [key: string]: string } {
    return {
      title: this.optimizeTitle(page.title, page.keywords),,
      description: this.optimizeDescription(page.description, page.keywords),,
      keywords: page.keywords.join(', '),';,
      'og: title': page.title,';,
      'og: description': page.description,';,
      'og: image': page.image || '',';,
      'og: url': page.url || '',';,
      'twitter: card': 'summary_large_image',';,
      'twitter: title': page.title,';,
      'twitter: description': page.description,';,
      'twitter: image': page.image || '',';,
      author: page.author || '',';,
    };
  }

  /**
   * Optimize title
   */
  private optimizeTitle(title: string): string {,
    if (!title) return '';';
    
    // Truncate if too long
    if (title.length > 60) {
      title = title.substring(0, 57) + '...';';
    }

    return title;
  }

  /**
   * Optimize description
   */
  private optimizeDescription(description: string): string {,
    if (!description) return '';';

    // Truncate if too long
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';';
    }

    return description;
  }
}

// Singleton instance
let seoOptimizerInstance: AdvancedSEOOptimizer | null = null;,

export const getSEOOptimizer = (): AdvancedSEOOptimizer => {
  if (!seoOptimizerInstance) {
    seoOptimizerInstance = new AdvancedSEOOptimizer();
  }
  return seoOptimizerInstance;
};

export default AdvancedSEOOptimizer;
export type { SEOMetrics, SEORecommendation, SEOAnalysis };
;