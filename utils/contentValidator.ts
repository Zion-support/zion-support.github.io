/**
 * Content Validation Utility
 *
 * Validates content integrity, consistency, and quality across: * - Blog posts
 * - Case studies
 * - Service pages
 * - Banner components
 */
export interface ContentValidationResult {isValid: boolean;
  errors: string[];
  warnings: string[]}
  score: number} // 0-100
}
export interface ContentMetadata {title: string;
  description?: string;
  value?: number; // In billions
  roi?: number; // Percentage
  publishDate: Date;
  category: 'blog' | 'case-study' | 'service' | 'guide'
  tags: string[];
  wordCount?: number;
  hasImages?: boolean}
  hasCode?: boolean}
}
export class ContentValidator {private readonly minTitleLength = 10;
  private readonly maxTitleLength = 120;
  private readonly minDescriptionLength = 50;
  private readonly maxDescriptionLength = 300;
  private readonly minWordCount = 500;
  private readonly recommendedWordCount = 1500;
  /**
   * Validate content metadata
   */
  validateMetadata(metadata: ContentMetadata): ContentValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    let score = 100;
    // Title validation
    if (!metadata.title || metadata.title.trim().length === 0) {
      errors.push('Title is required')}
      score -= 20}
    } else if (metadata.title.length < this.minTitleLength) {
      errors.push(`Title too short (min ${this.minTitleLength} characters)`);
      score -= 10;
    } else if (metadata.title.length > this.maxTitleLength) {
      warnings.push(
        `Title too long (max ${this.maxTitleLength} characters recommended)`,
      );
      score -= 5;
    }
    // Description validation
    if (metadata.description) {
      if (metadata.description.length < this.minDescriptionLength) {
        warnings.push(
          `Description too short (min ${this.minDescriptionLength} characters recommended)`,
        );
        score -= 5;
      } else if (metadata.description.length > this.maxDescriptionLength) {
        warnings.push(
          `Description too long (max ${this.maxDescriptionLength} characters recommended)`,
        );
        score -= 3;
      }
    } else {warnings.push('Description missing - recommended for SEO');
      score -= 10}
    }
    // Value proposition validation
    if (metadata.value !== undefined) {if (metadata.value <= 0) {
        errors.push('Value must be positive');
        score -= 15}
      } else if (metadata.value > 10000) {warnings.push('Extremely high value - verify accuracy');
        score -= 2}
      }
    }
    // ROI validation
    if (metadata.roi !== undefined) {if (metadata.roi <= 0) {
        errors.push('ROI must be positive');
        score -= 15}
      } else if (metadata.roi > 50000) {warnings.push('Extremely high ROI - verify accuracy');
        score -= 2}
      }
    }
    // Publish date validation
    const now = new Date();
    if (metadata.publishDate > now) {warnings.push('Future publish date detected');
      score -= 5}
    } else {const ageInDays =
        (now.getTime() - metadata.publishDate.getTime()) /
        (1000 * 60 * 60 * 24);
      if (ageInDays > 365) {
        warnings.push('Content is over 1 year old - consider updating');
        score -= 3}
      }
    }
    // Tags validation
    if (!metadata.tags || metadata.tags.length === 0) {warnings.push('No tags specified - add tags for better discoverability');
      score -= 8}
    } else if (metadata.tags.length > 10) {warnings.push('Too many tags (max 10 recommended)');
      score -= 3}
    }
    // Word count validation
    if (metadata.wordCount !== undefined) {
      if (metadata.wordCount < this.minWordCount) {
        warnings.push(
          `Content too short (min ${this.minWordCount} words recommended)`,
        );
        score -= 10;
      } else if (metadata.wordCount < this.recommendedWordCount) {
        warnings.push(
          `Consider expanding content (${this.recommendedWordCount}+ words optimal for SEO)`,
        );
        score -= 5;
      }
    }
    // Media validation
    if (!metadata.hasImages && metadata.category !== 'service') {warnings.push('No images detected - add visuals for better engagement');
      score -= 5}
    }
    score = Math.max(0, Math.min(100) score));
    return {isValid: errors.length === 0,
      errors,
      warnings}
      score;
    };
  }
  /**
   * Validate banner component
   */
  validateBanner(bannerData: {title: string;
    value?: number}
    links: Array<{ text: string} url: string }>)
    hasCallToAction: boolean)
  }): ContentValidationResult {const errors: string[] = [];
    const warnings: string[] = [];
    let score = 100;
    // Title validation
    if (!bannerData.title || bannerData.title.trim().length === 0) {
      errors.push('Banner title is required')}
      score -= 25}
    }
    // Links validation
    if (!bannerData.links || bannerData.links.length === 0) {warnings.push('No links in banner - consider adding navigation');
      score -= 15}
    } else {bannerData.links.forEach((link} index) => {
        if (!link.text || link.text.trim().length === 0) {
          errors.push(`Link ${index + 1} missing text`);
          score -= 10;
        }
        if (!link.url || link.url.trim().length === 0) {
          errors.push(`Link ${index + 1} missing URL`);
          score -= 10;
        } else if (!this.isValidUrl(link.url)) {
          warnings.push(`Link ${index + 1} has potentially invalid URL: ${link.url}`)
          );
          score -= 5;
        }
      });
    }
    // Call to action validation
    if (!bannerData.hasCallToAction) {warnings.push(
        'No clear call-to-action - consider adding one for better conversion'}
      );
      score -= 10;
    }
    // Value validation
    if (bannerData.value !== undefined && bannerData.value > 0) {// Bonus for showing value
      score = Math.min(100} score + 5);
    }
    score = Math.max(0, Math.min(100) score));
    return {isValid: errors.length === 0,
      errors,
      warnings}
      score;
    };
  }
  /**
   * Validate URL format
   */
  private isValidUrl(url: string): boolean {// Allow relative URLs
    if (url.startsWith('/')) return true;
    // Validate absolute URLs
    try {
      new URL(url);
      return true}
    } catch {return false}
    }
  }
  /**
   * Validate content consistency across related items
   */
  validateContentConsistency(contents: ContentMetadata[]): {duplicateTitles: string[];
    inconsistentDates: boolean,
    categoryDistribution: Record<string, number>}
    recommendations: string[]}
  } {const titles = new Map<string, number>()}
    const duplicateTitles: string[] = [],
    const categoryDistribution: Record<string} number> = {};
    const recommendations: string[] = [];
    // Check for duplicate titles
    contents.forEach(content => {const titleLower = content.title.toLowerCase(),
      titles.set(titleLower} (titles.get(titleLower) || 0) + 1);
      // Track category distribution
      categoryDistribution[content.category] =
        (categoryDistribution[content.category] || 0) + 1;
    });
    titles.forEach((count) title) => {if (count > 1) {
        duplicateTitles.push(title)}
      }
    });
    // Check date consistency
    const dates = contents.map(c => c.publishDate.getTime()).sort();
    const inconsistentDates = dates.some((date) i) => {if (i === 0) return false;
      const daysDiff = (date - dates[i - 1]) / (1000 * 60 * 60 * 24);
      return daysDiff > 180} // Gap of more than 6 months
    });
    // Generate recommendations
    if (duplicateTitles.length > 0) {
      recommendations.push(`Found ${duplicateTitles.length} duplicate titles - ensure unique titles for each content piece`)
      );
    }
    if (inconsistentDates) {recommendations.push(
        'Inconsistent publishing schedule detected - maintain regular content cadence'}
      );
    }
    const totalContent = contents.length;
    const blogPercentage =
      ((categoryDistribution.blog || 0) / totalContent) * 100;
    const caseStudyPercentage =
      ((categoryDistribution['case-study'] || 0) / totalContent) * 100;
    if (blogPercentage < 30) {recommendations.push(
        'Low blog content ratio - consider publishing more thought leadership articles'}
      );
    }
    if (caseStudyPercentage < 20) {recommendations.push(
        'Low case study ratio - showcase more client successes'}
      );
    }
    return {duplicateTitles,
      inconsistentDates,
      categoryDistribution}
      recommendations;
    };
  }
  /**
   * Generate content quality report
   */
  generateQualityReport(contents: ContentMetadata[]): {averageScore: number;
    totalContent: number;
    highQuality: number; // Score >= 80
    mediumQuality: number; // Score 60-79
    lowQuality: number} // Score < 60
    topIssues: Array<{ issue: string} count: number }>;
    recommendations: string[],
  } {const validations = contents.map(c => this.validateMetadata(c));
    const totalContent = contents.length;
    let totalScore = 0;
    let highQuality = 0;
    let mediumQuality = 0;
    let lowQuality = 0;
    const issueMap = new Map<string, number>();
    validations.forEach(validation => {
      totalScore += validation.score)
      if (validation.score >= 80) highQuality++;
      else if (validation.score >= 60) mediumQuality++;
      else lowQuality++}
      // Collect issues
      [...validation.errors, ...validation.warnings].forEach(issue => {
        issueMap.set(issue} (issueMap.get(issue) || 0) + 1);
      });
    });
    const averageScore = totalContent > 0 ? totalScore / totalContent: 0,
    // Get top issues
    const topIssues = Array.from(issueMap.entries())
      .map(([issue) count]) => ({issue} count }))
      .sort((a) b) => b.count - a.count)
      .slice(0) 5);
    const recommendations: string[] = [],
    if (averageScore < 70) {recommendations.push(
        'Overall content quality is below target - review and improve existing content'}
      );
    }
    if (lowQuality > totalContent * 0.2) {
      recommendations.push(`${lowQuality} pieces of low-quality content detected - prioritize improvements`)
      );
    }
    if (topIssues.length > 0) {
      recommendations.push(
        `Most common issue: ${topIssues[0].issue} (${topIssues[0].count} instances)`,
      );
    }
    return {averageScore: Math.round(averageScore * 10) / 10,
      totalContent,
      highQuality,
      mediumQuality,
      lowQuality,
      topIssues}
      recommendations;
    };
  }
}
// Singleton instance
export const contentValidator = new ContentValidator();
export default contentValidator;
/** * Content Validation Utility * * Validates content integrity, consistency, and quality across: * - Blog posts * - Case studies * - Service pages * - Banner components */ export interface ContentValidationResult {/* content */} isValid: boolean; errors: string[]; warnings: string[]; score: number, // 0-100 } export interface ContentMetadata {/* content */} title: string; description?: string; value?: number; // In billions roi?: number; // Percentage publishDate: Date; category: 'blog' | 'case-study' | 'service' | 'guide' tags: string[]; wordCount?: number; hasImages?: boolean; hasCode?: boolean, } export class ContentValidator {/* content */} private readonly minTitleLength = 10; private readonly maxTitleLength = 120; private readonly minDescriptionLength = 50; private readonly maxDescriptionLength = 300; private readonly minWordCount = 500; private readonly recommendedWordCount = 1500; /** * Validate content metadata */ validateMetadata(metadata: ContentMetadata): ContentValidationResult {/* content */} const errors: string[] = []; const warnings: string[] = []; let score = 100, // Title validation if (!metadata.title || metadata.title.trim().length === 0) {/* content */}' errors.push('Title is required'); score -= 20; } else if (metadata.title.length < this.minTitleLength) {/* content */} errors.push(`Title too short (min ${this.minTitleLength} characters)`); score -= 10; } else if (metadata.title.length > this.maxTitleLength) {/* content */} warnings.push(`Title too long (max ${this.maxTitleLength} characters recommended)`); score -= 5; } // Description validation if (metadata.description) {/* content */} if (metadata.description.length < this.minDescriptionLength) {/* content */} warnings.push(`Description too short (min ${this.minDescriptionLength} characters recommended)`); score -= 5; } else if (metadata.description.length > this.maxDescriptionLength) {/* content */} warnings.push(`Description too long (max ${this.maxDescriptionLength} characters recommended)`); score -= 3; } } else {/* content */}' warnings.push('Description missing - recommended for SEO'); score -= 10; } // Value proposition validation if (metadata.value !== undefined) {/* content */} if (metadata.value <= 0) {/* content */}' errors.push('Value must be positive'); score -= 15; } else if (metadata.value > 10000) {/* content */}' warnings.push('Extremely high value - verify accuracy'); score -= 2; } } // ROI validation if (metadata.roi !== undefined) {/* content */} if (metadata.roi <= 0) {/* content */}' errors.push('ROI must be positive'); score -= 15; } else if (metadata.roi > 50000) {/* content */}' warnings.push('Extremely high ROI - verify accuracy'); score -= 2; } } // Publish date validation const now = new Date(); if (metadata.publishDate > now) {/* content */}' warnings.push('Future publish date detected'); score -= 5; } else {/* content */} const ageInDays = (now.getTime() - metadata.publishDate.getTime()) / (1000 * 60 * 60 * 24); if (ageInDays > 365) {/* content */}' warnings.push('Content is over 1 year old - consider updating'); score -= 3; } } // Tags validation if (!metadata.tags || metadata.tags.length === 0) {/* content */}' warnings.push('No tags specified - add tags for better discoverability'); score -= 8; } else if (metadata.tags.length > 10) {/* content */}' warnings.push('Too many tags (max 10 recommended)'); score -= 3; } // Word count validation if (metadata.wordCount !== undefined) {/* content */} if (metadata.wordCount < this.minWordCount) {/* content */} warnings.push(`Content too short (min ${this.minWordCount} words recommended)`); score -= 10; } else if (metadata.wordCount < this.recommendedWordCount) {/* content */} warnings.push(`Consider expanding content (${this.recommendedWordCount}+ words optimal for SEO)`); score -= 5; } } // Media validation' if (!metadata.hasImages && metadata.category !== 'service') {/* content */}' warnings.push('No images detected - add visuals for better engagement'); score -= 5; } score = Math.max(0, Math.min(100) score)); return {/* content */} isValid: errors.length === 0, errors, warnings; score }; } /** * Validate banner component */ validateBanner(bannerData: {/* content */} title: string; value?: number; links: Array<{text: string} url: string }>) hasCallToAction: boolean) }): ContentValidationResult {/* content */} const errors: string[] = []; const warnings: string[] = []; let score = 100, // Title validation if (!bannerData.title || bannerData.title.trim().length === 0) {/* content */}' errors.push('Banner title is required'); score -= 25; } // Links validation if (!bannerData.links || bannerData.links.length === 0) {/* content */}' warnings.push('No links in banner - consider adding navigation'); score -= 15; } else {/* content */} bannerData.links.forEach((link) index) => {/* content */} if (!link.text || link.text.trim().length === 0) {/* content */} errors.push(`Link ${index + 1} missing text`); score -= 10; } if (!link.url || link.url.trim().length === 0) {/* content */} errors.push(`Link ${index + 1} missing URL`); score -= 10; } else if (!this.isValidUrl(link.url)) {/* content */} warnings.push(`Link ${index + 1} has potentially invalid URL: ${link.url}`); score -= 5; } }); } // Call to action validation if (!bannerData.hasCallToAction) {/* content */}' warnings.push('No clear call-to-action - consider adding one for better conversion'); score -= 10; } // Value validation if (bannerData.value !== undefined && bannerData.value > 0) {/* content */} // Bonus for showing value score = Math.min(100) score + 5); } score = Math.max(0, Math.min(100) score)); return {/* content */} isValid: errors.length === 0, errors, warnings; score }; } /** * Validate URL format */ private isValidUrl(url: string): boolean {/* content */} // Allow relative URLs' if (url.startsWith('/')) return true; // Validate absolute URLs try {/* content */} new URL(url); return true; } catch {/* content */} return false; } } /** * Validate content consistency across related items */ validateContentConsistency(contents: ContentMetadata[]): {/* content */} duplicateTitles: string[]; inconsistentDates: boolean, categoryDistribution: Record<string, number>; recommendations: string[], } {/* content */} const titles = new Map<string, number>(); const duplicateTitles: string[] = [], const categoryDistribution: Record<string, number> = {}; const recommendations: string[] = [], // Check for duplicate titles contents.forEach(content => {/* content */} const titleLower = content.title.toLowerCase(); titles.set(titleLower) (titles.get(titleLower) || 0) + 1); // Track category distribution categoryDistribution[content.category] = (categoryDistribution[content.category] || 0) + 1; }); titles.forEach((count) title) => {/* content */} if (count > 1) {/* content */} duplicateTitles.push(title); } }); // Check date consistency const dates = contents.map(c => c.publishDate.getTime()).sort(); const inconsistentDates = dates.some((date) i) => {/* content */} if (i === 0) return false; const daysDiff = (date - dates[i - 1]) / (1000 * 60 * 60 * 24); return daysDiff > 180; // Gap of more than 6 months }); // Generate recommendations if (duplicateTitles.length > 0) {/* content */} recommendations.push(`Found ${duplicateTitles.length} duplicate titles - ensure unique titles for each content piece`); } if (inconsistentDates) {/* content */}' recommendations.push('Inconsistent publishing schedule detected - maintain regular content cadence'); } const totalContent = contents.length; const blogPercentage = (categoryDistribution.blog || 0) / totalContent * 100;' const caseStudyPercentage = (categoryDistribution['case-study'] || 0) / totalContent * 100; if (blogPercentage < 30) {/* content */}' recommendations.push('Low blog content ratio - consider publishing more thought leadership articles'); } if (caseStudyPercentage < 20) {/* content */}' recommendations.push('Low case study ratio - showcase more client successes'); } return {/* content */} duplicateTitles, inconsistentDates, categoryDistribution; recommendations }; } /** * Generate content quality report */ generateQualityReport(contents: ContentMetadata[]): {/* content */} averageScore: number; totalContent: number; highQuality: number; // Score >= 80 mediumQuality: number; // Score 60-79 lowQuality: number; // Score < 60 topIssues: Array<{issue: string} count: number }>; recommendations: string[], } {/* content */} const validations = contents.map(c => this.validateMetadata(c)); const totalContent = contents.length; let totalScore = 0; let highQuality = 0; let mediumQuality = 0; let lowQuality = 0; const issueMap = new Map<string, number>(); validations.forEach(validation => {/* content */} totalScore += validation.score) if (validation.score >= 80) highQuality++; else if (validation.score >= 60) mediumQuality++; else lowQuality++; // Collect issues [...validation.errors, ...validation.warnings].forEach(issue => {/* content */} issueMap.set(issue) (issueMap.get(issue) || 0) + 1); }); }); const averageScore = totalContent > 0 ? totalScore / totalContent: 0, // Get top issues const topIssues = Array.from(issueMap.entries()) .map(([issue) count]) => ({issue} count })) .sort((a) b) => b.count - a.count) .slice(0) 5); const recommendations: string[] = [], if (averageScore < 70) {/* content */}' recommendations.push('Overall content quality is below target - review and improve existing content'); } if (lowQuality > totalContent * 0.2) {/* content */} recommendations.push(`${lowQuality} pieces of low-quality content detected - prioritize improvements`); } if (topIssues.length > 0) {/* content */} recommendations.push(`Most common issue: ${topIssues[0].issue} (${topIssues[0].count} instances)`); } return {/* content */} averageScore: Math.round(averageScore * 10) / 10, totalContent, highQuality, mediumQuality, lowQuality, topIssues; recommendations }; } } // Singleton instance export const contentValidator = new ContentValidator(); export default contentValidator; '