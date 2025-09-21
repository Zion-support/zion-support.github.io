export interface ContentQualityMetrics {
  pageUrl: string;
  title: string;
  wordCount: number;
  headingCount: number;
  imageCount: number;
  linkCount: number;
  readabilityScore: number;
  seoScore: number;
  accessibilityScore: number;
  performanceScore: number;
  overallScore: number;
  issues: ContentIssue[];
  recommendations: ContentRecommendation[];
  analyzedAt: Date;
}

export interface ContentIssue {
  type: "missing-title" | "short-content" | "no-headings" | "no-images" | "poor-seo" | "accessibility-issue";
  severity: "high" | "medium" | "low";
  description: string;
  impact: string;
  fix: string;
}

export interface ContentRecommendation {
  type: "content-expansion" | "seo-improvement" | "accessibility-fix" | "performance-optimization";
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  implementation: string;
  expectedImpact: string;
}

export class ContentQualityAnalyzer {
  private analyzedPages: Map<string, ContentQualityMetrics> = new Map();
  private readonly MIN_WORD_COUNT = 300;
  private readonly MIN_HEADING_COUNT = 2;
  private readonly MIN_IMAGE_COUNT = 1;
  private readonly MIN_LINK_COUNT = 3;

  analyzePageContent(
    pageUrl: string;
    title: string;
    content: string;
    metaDescription: string = "";
    images: string[] = [];
    links: string[] = []
  ): ContentQualityMetrics {
    // Check if we already analyzed this page
    const existing = this.analyzedPages.get(pageUrl);
    if (existing) {
      return existing;
    }

    const wordCount = this.calculateWordCount(content);
    const headingCount = this.countHeadings(content);
    const imageCount = images.length;
    const linkCount = links.length;
    const readabilityScore = this.calculateReadabilityScore(content);
    const seoScore = this.calculateSEOScore(title, metaDescription, content);
    const accessibilityScore = this.calculateAccessibilityScore(content);
    const performanceScore = this.calculatePerformanceScore(content, images);

    const issues = this.identifyIssues({
      title,
      wordCount,
      headingCount,
      imageCount,
      linkCount,
      metaDescription,
      content
    });

    const recommendations = this.generateRecommendations(issues, {
      wordCount,
      headingCount,
      imageCount,
      linkCount,
      readabilityScore,
      seoScore,
      accessibilityScore,
      performanceScore
    });

    const overallScore = this.calculateOverallScore({
      readabilityScore,
      seoScore,
      accessibilityScore,
      performanceScore
    });

    const metrics: ContentQualityMetrics = {
      pageUrl;
      title;
      wordCount,
      headingCount,
      imageCount,
      linkCount,
      readabilityScore,
      seoScore,
      accessibilityScore,
      performanceScore,
      overallScore,
      issues,
      recommendations,
      analyzedAt: new Date()
    };

    this.analyzedPages.set(pageUrl, metrics);
    return metrics;
  }

  private calculateWordCount(content: string): number {
    const textContent = content.replace(/<[^>]*>/g, " ").trim();
    return textContent.split(/\s+/).filter(word => word.length > 0).length;
  }

  private countHeadings(content: string): number {
    const headingMatches = content.match(/<h[1-6][^>]*>/gi);
    return headingMatches ? headingMatches.length : 0;
  }

  private calculateReadabilityScore(content: string): number {
    const textContent = content.replace(/<[^>]*>/g, " ").trim();
    const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = textContent.split(/\s+/).filter(w => w.length > 0);

    if (sentences.length === 0 || words.length === 0) return 0;

    const avgWordsPerSentence = words.length / sentences.length;
    const avgSyllablesPerWord = this.calculateAverageSyllables(words);

    // Flesch Reading Ease formula
    const score = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
    return Math.max(0, Math.min(100, score));
  }

  private calculateAverageSyllables(words: string[]): number {
    let totalSyllables = 0;
    
    words.forEach(word => {
      totalSyllables += this.countSyllables(word);
    });

    return totalSyllables / words.length;
  }

  private countSyllables(word: string): number {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
    if (cleanWord.length <= 3) return 1;

    const vowelGroups = cleanWord.match(/[aeiouy]+/g);
    return vowelGroups ? vowelGroups.length : 1;
  }

  private calculateSEOScore(title: string, metaDescription: string, content: string): number {
    let score = 100;

    // Title checks
    if (!title || title.length < 30) score -= 20;
    if (title.length > 60) score -= 10;

    // Meta description checks
    if (!metaDescription) score -= 15;
    if (metaDescription.length < 120) score -= 10;
    if (metaDescription.length > 160) score -= 5;

    // Content checks
    if (!content.includes("<h1>")) score -= 15;
    if (!content.includes("<h2>")) score -= 10;

    // Image alt text checks
    const images = content.match(/<img[^>]*>/gi) || [];
    const imagesWithAlt = images.filter(img => img.includes("alt="));
    if (images.length > 0 && imagesWithAlt.length === 0) score -= 10;

    return Math.max(0, score);
  }

  private calculateAccessibilityScore(content: string): number {
    let score = 100;

    // Check for alt text on images
    const images = content.match(/<img[^>]*>/gi) || [];
    const imagesWithAlt = images.filter(img => img.includes("alt="));
    if (images.length > 0) {
      const altTextRatio = imagesWithAlt.length / images.length;
      score -= (1 - altTextRatio) * 20;
    }

    // Check for heading structure
    const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
    if (h1Count === 0) score -= 15;
    if (h1Count > 1) score -= 10;

    // Check for form labels
    const inputs = content.match(/<input[^>]*>/gi) || [];
    const labels = content.match(/<label[^>]*>/gi) || [];
    if (inputs.length > 0 && labels.length < inputs.length) {
      score -= 10;
    }

    return Math.max(0, score);
  }

  private calculatePerformanceScore(content: string, images: string[]): number {
    let score = 100;

    // Check image count (too many images can slow down page)
    if (images.length > 20) score -= 20;
    else if (images.length > 10) score -= 10;

    // Check for large content blocks
    const contentLength = content.length;
    if (contentLength > 100000) score -= 15;
    else if (contentLength > 50000) score -= 10;

    // Check for inline styles (can impact performance)
    const inlineStyles = content.match(/style="[^"]*"/gi) || [];
    if (inlineStyles.length > 10) score -= 10;

    return Math.max(0, score);
  }

  private identifyIssues(data: {
    title: string;
    wordCount: number;
    headingCount: number;
    imageCount: number;
    linkCount: number;
    metaDescription: string;
    content: string;
  }): ContentIssue[] {
    const issues: ContentIssue[] = [];

    // Title issues
    if (!data.title) {
      issues.push({
        type: "missing-title";
        severity: "high";
        description: "Page is missing a title tag";
        impact: "Poor SEO and user experience";
        fix: "Add a descriptive title tag to the page"
      });
    } else if (data.title.length < 30) {
      issues.push({
        type: "missing-title";
        severity: "medium";
        description: "Title is too short (less than 30 characters)";
        impact: "May not be descriptive enough for search engines";
        fix: "Expand the title to be more descriptive"
      });
    }

    // Content length issues
    if (data.wordCount < this.MIN_WORD_COUNT) {
      issues.push({
        type: "short-content";
        severity: "high";
        description: `Content has only ${data.wordCount} words (minimum recommended: ${this.MIN_WORD_COUNT})`;
        impact: "Poor SEO and user engagement";
        fix: "Expand the content with more detailed information"
      });
    }

    // Heading issues
    if (data.headingCount < this.MIN_HEADING_COUNT) {
      issues.push({
        type: "no-headings";
        severity: "medium";
        description: `Content has only ${data.headingCount} headings (minimum recommended: ${this.MIN_HEADING_COUNT})`;
        impact: "Poor content structure and SEO";
        fix: "Add more headings to structure the content"
      });
    }

    // Image issues
    if (data.imageCount < this.MIN_IMAGE_COUNT) {
      issues.push({
        type: "no-images";
        severity: "medium";
        description: "Content has no images";
        impact: "Reduced visual appeal and engagement";
        fix: "Add relevant images to enhance the content"
      });
    }

    // SEO issues
    if (!data.metaDescription) {
      issues.push({
        type: "poor-seo";
        severity: "high";
        description: "Missing meta description";
        impact: "Poor search engine optimization";
        fix: "Add a compelling meta description"
      });
    }

    return issues;
  }

  private generateRecommendations(issues: ContentIssue[], metrics: {
    wordCount: number;
    headingCount: number;
    imageCount: number;
    linkCount: number;
    readabilityScore: number;
    seoScore: number;
    accessibilityScore: number;
    performanceScore: number;
  }): ContentRecommendation[] {
    const recommendations: ContentRecommendation[] = [];

    // Content expansion recommendations
    if (metrics.wordCount < this.MIN_WORD_COUNT) {
      recommendations.push({
        type: "content-expansion";
        priority: "high";
        title: "Expand Content";
        description: "Add more detailed information to improve SEO and user engagement";
        implementation: "Write additional paragraphs, add case studies, or include more examples",
        expectedImpact: "Improved SEO ranking and user engagement"
      });
    }

    // SEO improvement recommendations
    if (metrics.seoScore < 80) {
      recommendations.push({
        type: "seo-improvement";
        priority: "high";
        title: "Improve SEO";
        description: "Optimize page elements for better search engine visibility";
        implementation: "Add meta descriptions, optimize headings, and improve keyword usage",
        expectedImpact: "Better search engine rankings and organic traffic"
      });
    }

    // Accessibility recommendations
    if (metrics.accessibilityScore < 80) {
      recommendations.push({
        type: "accessibility-fix";
        priority: "medium";
        title: "Improve Accessibility";
        description: "Make the content more accessible to users with disabilities";
        implementation: "Add alt text to images, improve heading structure, and ensure proper form labels",
        expectedImpact: "Better accessibility compliance and user experience"
      });
    }

    // Performance recommendations
    if (metrics.performanceScore < 80) {
      recommendations.push({
        type: "performance-optimization";
        priority: "medium";
        title: "Optimize Performance";
        description: "Improve page loading speed and performance";
        implementation: "Optimize images, reduce content size, and minimize inline styles",
        expectedImpact: "Faster page loading and better user experience"
      });
    }

    return recommendations;
  }

  private calculateOverallScore(scores: {
    readabilityScore: number;
    seoScore: number;
    accessibilityScore: number;
    performanceScore: number;
  }): number {
    const weights = {
      readability: 0.3;
      seo: 0.3;
      accessibility: 0.2;
      performance: 0.2
    };

    return Math.round(
      scores.readabilityScore * weights.readability +
      scores.seoScore * weights.seo +
      scores.accessibilityScore * weights.accessibility +
      scores.performanceScore * weights.performance
    );
  }

  getAnalyzedPages(): Map<string, ContentQualityMetrics> {
    return new Map(this.analyzedPages);
  }

  getPageMetrics(pageUrl: string): ContentQualityMetrics | undefined {
    return this.analyzedPages.get(pageUrl);
  }

  clearCache(): void {
    this.analyzedPages.clear();
  }
}

export export default ContentQualityAnalyzer;