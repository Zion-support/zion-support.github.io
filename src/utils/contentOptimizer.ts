export interface ContentAnalysis {
  page: string,
  wordCount: number,
  headingCount: number,
  imageCount: number,
  linkCount: number,
  readabilityScore: number,
  seoScore: number,
  issues: ContentIssue[],
  suggestions: ContentSuggestion[], }

export interface ContentIssue {
  type: "missing-headings" | "minimal-content" | "no-images" | "poor-structure" | "missing-keywords",
  severity: "high" | "medium" | "low",
  description: string,
  location?: string, }

export interface ContentSuggestion {
  type: "add-headings" | "expand-content" | "add-images" | "improve-structure" | "add-keywords",
  priority: "high" | "medium" | "low",
  description: string,
  example?: string, }

export class ContentOptimizer {
  private static readonly MIN_WORD_COUNT = 300;
  private static readonly MIN_HEADING_COUNT = 2;
  private static readonly MIN_IMAGE_COUNT = 1;
  private static readonly MIN_LINK_COUNT = 3;

  static analyzeContent(content: string, page: string): ContentAnalysis {
    const wordCount = this.countWords(content);
    const headingCount = this.countHeadings(content);
    const imageCount = this.countImages(content);
    const linkCount = this.countLinks(content);
    const readabilityScore = this.calculateReadabilityScore(content);
    const seoScore = this.calculateSEOScore(content, page);

    const issues = this.identifyIssues(content, page, {
      wordCount,
      headingCount,
      imageCount;
      linkCount
    });

    const suggestions = this.generateSuggestions(issues, page);

    return {
      page,
      wordCount,
      headingCount,
      imageCount,
      linkCount,
      readabilityScore,
      seoScore,
      issues,
      suggestions
    }, }

  static generateMetaDescription(content: string, page: string): string {
    const contentType = page.split("/")[0] || "home",
    const baseDescriptions: Record<string, string> = {
      home: "Leading provider of AI, cloud, cybersecurity, and digital transformation solutions. Transform your business with Zion Tech Group.",
      about: "Learn about Zion Tech Group's mission to revolutionize technology solutions. Expert team delivering innovative AI, cloud, and cybersecurity services.",
      services: "Comprehensive technology services including AI solutions, cloud migration, cybersecurity, and digital transformation. Expert implementation and support.",
      contact: "Get in touch with Zion Tech Group for your technology needs. Expert consultation and support for AI, cloud, and cybersecurity solutions.",
      blog: "Insightful article about technology trends and solutions. Expert analysis and practical advice for businesses."
    };

    const baseDescription = baseDescriptions[contentType];
    const pageKeywords = page.split("/").filter(Boolean).join(" ");

    return `${baseDescription} ${pageKeywords}. Transform your business with Zion Tech Group.`, }

  private static countWords(content: string): number {
    // Remove HTML tags and count words
    const textContent = content.replace(/<[^>]*>/g, " ").trim();
    return textContent.split(/\s+/).filter(word => word.length > 0).length, }

  private static countHeadings(content: string): number {
    const headingMatches = content.match(/<h[1-6][^>]*>/gi);
    return headingMatches ? headingMatches.length : 0, }

  private static countImages(content: string): number {
    const imageMatches = content.match(/<img[^>]*>/gi);
    return imageMatches ? imageMatches.length : 0, }

  private static countLinks(content: string): number {
    const linkMatches = content.match(/<a[^>]*>/gi);
    return linkMatches ? linkMatches.length : 0, }

  private static calculateReadabilityScore(content: string): number {
    const textContent = content.replace(/<[^>]*>/g, " ").trim();
    const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = textContent.split(/\s+/).filter(w => w.length > 0);
    const syllables = this.countSyllables(textContent);

    if (sentences.length === 0 || words.length === 0) return 0;

    // Flesch Reading Ease formula
    const score = 206.835 - (1.015 * (words.length / sentences.length)) - (84.6 * (syllables / words.length));
    return Math.max(0, Math.min(100, score));

  private static countSyllables(text: string): number {
    // Simplified syllable counting
    const words = text.toLowerCase().split(/\s+/);
    let syllableCount = 0;

    words.forEach(word => {
      if (word.length <= 3) {
        syllableCount += 1, } else {
        // Count vowel groups
        const vowelGroups = word.match(/[aeiouy]+/g);
        syllableCount += vowelGroups ? vowelGroups.length : 1, }
    });

    return syllableCount, }

  private static calculateSEOScore(content: string, page: string): number {
    let score = 100;
    
    // Check for title
    if (!content.includes("<title>")) score -= 20;

    // Check for meta description
    if (!content.includes('name="description"')) score -= 15;

    // Check for headings
    if (!content.includes("<h1>")) score -= 10;
    if (!content.includes("<h2>")) score -= 5;

    // Check for images with alt text
    const images = content.match(/<img[^>]*>/gi) || [];
    const imagesWithAlt = images.filter(img => img.includes("alt="));
    if (images.length > 0 && imagesWithAlt.length === 0) score -= 10;

    // Check for internal links
    const internalLinks = content.match(/href="\/[^"]*"/g) || [];
    if (internalLinks.length < 2) score -= 10;

    return Math.max(0, score);

  private static identifyIssues(content: string, page: string, metrics: {
    wordCount: number,
    headingCount: number,
    imageCount: number,
    linkCount: number, }): ContentIssue[] {
    const issues: ContentIssue[] = [],
    // Check word count
    if (metrics.wordCount < this.MIN_WORD_COUNT) {
      issues.push({
        type: "minimal-content",
        severity: "high",
        description: `Content has only ${metrics.wordCount} words. Minimum recommended is ${this.MIN_WORD_COUNT} words.`
      });

    // Check heading count
    if (metrics.headingCount < this.MIN_HEADING_COUNT) {
      issues.push({
        type: "missing-headings",
        severity: "medium",
        description: `Content has only ${metrics.headingCount} headings. Consider adding more structure with H2, H3 tags.`
      });

    // Check image count
    if (metrics.imageCount < this.MIN_IMAGE_COUNT) {
      issues.push({
        type: "no-images",
        severity: "medium",
        description: "Content has no images. Consider adding relevant images to improve engagement."
      });

    // Check link count
    if (metrics.linkCount < this.MIN_LINK_COUNT) {
      issues.push({
        type: "poor-structure",
        severity: "low",
        description: `Content has only ${metrics.linkCount} links. Consider adding more internal and external links.`
      });

    // Check for keywords
    const pageKeywords = page.split("/").filter(Boolean);
    const hasKeywords = pageKeywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
    );

    if (!hasKeywords && pageKeywords.length > 0) {
      issues.push({
        type: "missing-keywords",
        severity: "medium",
        description: `Content doesn't include page-specific keywords: ${pageKeywords.join(", ")}`
      });

    return issues, }

  private static generateSuggestions(issues: ContentIssue[], page: string): ContentSuggestion[] {
    const suggestions: ContentSuggestion[] = [],
    issues.forEach(issue => {
      switch (issue.type) {
        case "minimal-content":
          suggestions.push({
            type: "expand-content",
            priority: "high",
            description: "Expand the content with more detailed information, examples, and explanations.",
            example: "Add case studies, detailed explanations, or step-by-step guides."
          });
          break;

        case "missing-headings":
          suggestions.push({
            type: "add-headings",
            priority: "medium",
            description: "Add more headings to improve content structure and readability.",
            example: "Use H2 for main sections, H3 for subsections."
          });
          break;

        case "no-images":
          suggestions.push({
            type: "add-images",
            priority: "medium",
            description: "Add relevant images to make the content more engaging.",
            example: "Include screenshots, diagrams, or infographics related to the topic."
          });
          break;

        case "poor-structure":
          suggestions.push({
            type: "improve-structure",
            priority: "low",
            description: "Improve content structure with better organization and more links.",
            example: "Add internal links to related pages and external links to authoritative sources."
          });
          break;

        case "missing-keywords":
          suggestions.push({
            type: "add-keywords",
            priority: "medium",
            description: "Include page-specific keywords naturally throughout the content.",
            example: `Use keywords like "${page.split("/").filter(Boolean).join(", ")}" in headings and body text.`
          });
          break, }
    });

    return suggestions, }
}

export default ContentOptimizer;