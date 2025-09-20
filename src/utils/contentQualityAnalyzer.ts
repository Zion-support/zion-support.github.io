import React from "react";

export interface ContentQualityMetrics {
<<<<<<< HEAD
pageUrl: string;
title: string;
wordCount: number;
headingCount: number;
imageCount: number;
linkCount: number;
metaDescriptionLength: number;
hasStructuredData: boolean;
readabilityScore: number;
seoScore: number;,
overallScore: number;,
issues: string[];,
recommendations: string[];}

export interface ContentQualityReport {
totalPages: number;
averageWordCount: number;
averageSeoScore: number;
pagesWithIssues: number;,
topIssues: string[];,
pageMetrics: ContentQualityMetrics[];,
summary: string;}

export class ContentQualityAnalyzer {
private static instance: ContentQualityAnalyzer;
private analyzedPages: Map<string; ContentQualityMetrics> = new Map();
=======
  pageUrl: string,
    title: string,
    wordCount: number,
    headingCount: number,
    imageCount: number,
    linkCount: number,
    metaDescriptionLength: number,
    hasStructuredData: boolean,
    readabilityScore: number,
    seoScore: number,
    overallScore: number,
    issues: string[],
    recommendations: string[],,
}

export interface ContentQualityReport {
  totalPages: number,
    averageWordCount: number,
    averageSeoScore: number,
    pagesWithIssues: number,
    topIssues: string[],
    pageMetrics: ContentQualityMetrics[],
    summary: string,,
}

export class ContentQualityAnalyzer {
  private static instance: ContentQualityAnalyzer,
    private analyzedPages: Map<string, ContentQualityMetrics> = new Map();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

static getInstance(): ContentQualityAnalyzer {
if (!ContentQualityAnalyzer.instance) {
ContentQualityAnalyzer.instance = new ContentQualityAnalyzer();
}
return ContentQualityAnalyzer.instance;
}

<<<<<<< HEAD
analyzePageContent(
pageUrl: string;
title: string;
content: string;,
metaDescription: string = "";,
images: string[] = [];,
links: string[] = [];
): ContentQualityMetrics {
// Check if we already analyzed this page;
const existing = this.analyzedPages.get(pageUrl);
if (existing) {
return existing;
}
=======
  analyzePageContent(
    pageUrl: string,
    title: string,
    content: string,
    metaDescription: string = "",
    images: string[] = [],
    links: string[] = []
  ): ContentQualityMetrics {
    // Check if we already analyzed this page,
    const existing = this.analyzedPages.get(pageUrl);
    if (existing) {
      return existing;
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

const wordCount = this.calculateWordCount(content);
const headingCount = this.countHeadings(content);
const imageCount = images.length;
const linkCount = links.length;
const metaDescriptionLength = metaDescription.length;
const hasStructuredData = this.checkStructuredData(content);
const readabilityScore = this.calculateReadabilityScore(content);
const seoScore = this.calculateSeoScore({;
title;
wordCount;
headingCount;
imageCount;
linkCount;
metaDescriptionLength;
hasStructuredData;
});

<<<<<<< HEAD
const issues = this.identifyIssues({;
title;
wordCount;
headingCount;
imageCount;
linkCount;
metaDescriptionLength;
hasStructuredData;
});

const recommendations = this.generateRecommendations(issues);
=======
  const issues = this.identifyIssues({
      title;
      wordCount;
      headingCount;
      imageCount;
      linkCount;
      metaDescriptionLength;
      hasStructuredData;
    });

  const recommendations = this.generateRecommendations(issues);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

const overallScore = Math.round((readabilityScore + seoScore) / 2);

<<<<<<< HEAD
const metrics: ContentQualityMetrics = {
pageUrl;
title;
wordCount;
headingCount;
imageCount;
linkCount;
metaDescriptionLength;
hasStructuredData;
readabilityScore;
seoScore;
overallScore;
issues;
recommendations;
};

this.analyzedPages.set(pageUrl; metrics);
return metrics;
}

private calculateWordCount(content: string): number {
if (!content) return 0;
// Remove HTML tags and count words;
const cleanContent = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
return cleanContent.split(" ").filter(word => word.length > 0).length;
}

private countHeadings(content: string): number {
if (!content) return 0;
const headingMatches = content.match(/<h[1-6][^>]*>/gi);
return headingMatches ? headingMatches.length : 0;
}

private checkStructuredData(content: string): boolean {
if (!content) return false;
// Check for JSON-LD; microdata; or RDFa;
return content.includes("application/ld+json") ||;
content.includes("itemtype=") ||;
content.includes("vocab=");
}

private calculateReadabilityScore(content: string): number {
if (!content) return 0;
const wordCount = this.calculateWordCount(content);
const sentenceCount = content.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
const syllableCount = this.estimateSyllableCount(content);
=======
    const metrics: ContentQualityMetrics = {
      pageUrl,
      title;
      wordCount;
      headingCount;
      imageCount;
      linkCount;
      metaDescriptionLength;
      hasStructuredData;
      readabilityScore;
      seoScore;
      overallScore;
      issues;
      recommendations;
    };

    this.analyzedPages.set(pageUrl, metrics);
    return metrics;
  }

  private calculateWordCount(content: string): number {
    if (!content) return 0,
    // Remove HTML tags and count words;
    const cleanContent = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    return cleanContent.split(" ").filter(word => word.length > 0).length;
  }

  private countHeadings(content: string): number {
    if (!content) return 0,
    const headingMatches = content.match(/<h[1-6][^>]*>/gi);
    return headingMatches ? headingMatches.length : 0;
  }

  private checkStructuredData(content: string): boolean {
    if (!content) return false,
    // Check for JSON-LD; microdata; or RDFa;
    return content.includes("application/ld+json") || 
           content.includes("itemtype=") || 
           content.includes("vocab=");
  }

  private calculateReadabilityScore(content: string): number {
    if (!content) return 0,
    const wordCount = this.calculateWordCount(content);
    const sentenceCount = content.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const syllableCount = this.estimateSyllableCount(content);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

if (wordCount === 0 || sentenceCount === 0) return 0;

<<<<<<< HEAD
// Flesch Reading Ease formula;
const fleschScore = 206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllableCount / wordCount));

// Convert to 0-100 scale;
return Math.max(0; Math.min(100; fleschScore));
}

private estimateSyllableCount(content: string): number {
if (!content) return 0;
// Simple syllable estimation;
const words = content.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
let syllableCount = 0;
=======
    // Flesch Reading Ease formula;
    const fleschScore = 206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllableCount / wordCount));
    
    // Convert to 0-100 scale;
    return Math.max(0, Math.min(100, fleschScore));
  }

  private estimateSyllableCount(content: string): number {
    if (!content) return 0,
    // Simple syllable estimation;
    const words = content.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
    let syllableCount = 0;
    
    for (const word of words) {
      if (word.length <= 3) {
        syllableCount += 1;
      } else {
        // Count vowel groups;
        const vowelGroups = word.match(/[aeiouy]+/g);
        syllableCount += vowelGroups ? vowelGroups.length : 1;
      }
    }
    
    return syllableCount;
  }

  private calculateSeoScore(metrics: {
    title: string,
    wordCount: number,
    headingCount: number,
    imageCount: number,
    linkCount: number,
    metaDescriptionLength: number,
    hasStructuredData: boolean,,
     }): number {
    let score = 0;
    let maxScore = 0;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

for (const word of words) {
if (word.length <= 3) {
syllableCount += 1;
} else {
// Count vowel groups;
const vowelGroups = word.match(/[aeiouy]+/g);
syllableCount += vowelGroups ? vowelGroups.length : 1;
}
}

return syllableCount;
}

private calculateSeoScore(metrics: {
title: string;
wordCount: number;
headingCount: number;
imageCount: number;,
linkCount: number;,
metaDescriptionLength: number;,
hasStructuredData: boolean;}): number {
let score = 0;
let maxScore = 0;

// Title optimization (0-20 points)
maxScore += 20;
if (metrics.title.length >= 30 && metrics.title.length <= 60) {
score += 20;
} else if (metrics.title.length > 0) {
score += 10;
}

// Content length (0-25 points)
maxScore += 25;
if (metrics.wordCount >= 300) {
score += 25;
} else if (metrics.wordCount >= 150) {
score += 15;
} else if (metrics.wordCount >= 50) {
score += 5;
}

// Heading structure (0-15 points)
maxScore += 15;
if (metrics.headingCount >= 3) {
score += 15;
} else if (metrics.headingCount >= 1) {
score += 10;
}

// Meta description (0-15 points)
maxScore += 15;
if (metrics.metaDescriptionLength >= 120 && metrics.metaDescriptionLength <= 160) {
score += 15;
} else if (metrics.metaDescriptionLength > 0) {
score += 8;
}

// Images (0-10 points)
maxScore += 10;
if (metrics.imageCount >= 2) {
score += 10;
} else if (metrics.imageCount >= 1) {
score += 5;
}

<<<<<<< HEAD
// Internal links (0-10 points)
maxScore += 10;
if (metrics.linkCount >= 3) {
score += 10;
} else if (metrics.linkCount >= 1) {
score += 5;
}
=======
  private identifyIssues(metrics: {
    title: string,
    wordCount: number,
    headingCount: number,
    imageCount: number,
    linkCount: number,
    metaDescriptionLength: number,
    hasStructuredData: boolean,,
     }): string[] {
    const issues: string[] = [],
    if (!metrics.title || metrics.title.length < 30) {
      issues.push("Title is too short (should be 30-60 characters)");
    } else if (metrics.title.length > 60) {
      issues.push("Title is too long (should be 30-60 characters)");
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

// Structured data (0-5 points)
maxScore += 5;
if (metrics.hasStructuredData) {
score += 5;
}

return Math.round((score / maxScore) * 100);
}

private identifyIssues(metrics: {
title: string;
wordCount: number;
headingCount: number;
imageCount: number;,
linkCount: number;,
metaDescriptionLength: number;,
hasStructuredData: boolean;}): string[] {
const issues: string[] = [];
if (!metrics.title || metrics.title.length < 30) {
issues.push("Title is too short (should be 30-60 characters)");
} else if (metrics.title.length > 60) {
issues.push("Title is too long (should be 30-60 characters)");
}

if (metrics.wordCount < 300) {
issues.push("Content is too short (should be at least 300 words)");
}

if (metrics.headingCount < 2) {
issues.push("Insufficient heading structure (should have at least 2 headings)");
}

if (metrics.metaDescriptionLength < 120) {
issues.push("Meta description is too short (should be 120-160 characters)");
} else if (metrics.metaDescriptionLength > 160) {
issues.push("Meta description is too long (should be 120-160 characters)");
}

if (metrics.imageCount === 0) {
issues.push("No images found (consider adding relevant images)");
}

<<<<<<< HEAD
if (metrics.linkCount < 2) {
issues.push("Insufficient internal linking (should have at least 2 internal links)");
}

if (!metrics.hasStructuredData) {
issues.push("No structured data found (consider adding JSON-LD or microdata)");
}
=======
  private generateRecommendations(issues: string[]): string[] {
    const recommendations: string[] = [],
    if (issues.some(issue => issue.includes("Content is too short"))) {
      recommendations.push("Expand content with relevant information, examples, and detailed explanations");
    }

    if (issues.some(issue => issue.includes("Insufficient heading structure"))) {
      recommendations.push("Add H1, H2, and H3 headings to improve content structure and SEO");
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

return issues;
}

<<<<<<< HEAD
private generateRecommendations(issues: string[]): string[] {
const recommendations: string[] = [];
if (issues.some(issue => issue.includes("Content is too short"))) {
recommendations.push("Expand content with relevant information; examples; and detailed explanations");
}
=======
    if (issues.some(issue => issue.includes("No images"))) {
      recommendations.push("Add relevant images, diagrams, or infographics to enhance user engagement");
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

if (issues.some(issue => issue.includes("Insufficient heading structure"))) {
recommendations.push("Add H1; H2; and H3 headings to improve content structure and SEO");
}

if (issues.some(issue => issue.includes("Meta description"))) {
recommendations.push("Write compelling meta descriptions that accurately describe the page content");
}

if (issues.some(issue => issue.includes("No images"))) {
recommendations.push("Add relevant images; diagrams; or infographics to enhance user engagement");
}

<<<<<<< HEAD
if (issues.some(issue => issue.includes("Insufficient internal linking"))) {
recommendations.push("Add internal links to related pages to improve navigation and SEO");
}
=======
    recommendations.push("Ensure content is unique, valuable, and addresses user intent");
    recommendations.push("Use bullet points and numbered lists for better readability");
    recommendations.push("Include relevant keywords naturally throughout the content");
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

if (issues.some(issue => issue.includes("No structured data"))) {
recommendations.push("Implement structured data markup for better search engine understanding");
}

<<<<<<< HEAD
if (issues.some(issue => issue.includes("Title"))) {
recommendations.push("Optimize page titles with relevant keywords and compelling copy");
}

recommendations.push("Ensure content is unique; valuable; and addresses user intent");
recommendations.push("Use bullet points and numbered lists for better readability");
recommendations.push("Include relevant keywords naturally throughout the content");

return recommendations;
}
=======
  generateReport(): ContentQualityReport {
    const pageMetrics = Array.from(this.analyzedPages.values());
    const totalPages = pageMetrics.length;
    
    if (totalPages === 0) {
      return {
        totalPages: 0,
        averageWordCount: 0,
        averageSeoScore: 0,
        pagesWithIssues: 0,
        topIssues: [],
        pageMetrics: [],
        summary: "No pages analyzed yet";
  };
     }

    const averageWordCount = Math.round(
      pageMetrics.reduce((sum, page) => sum + page.wordCount; 0) / totalPages;
    );

    const averageSeoScore = Math.round(
      pageMetrics.reduce((sum, page) => sum + page.seoScore; 0) / totalPages;
    );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

generateReport(): ContentQualityReport {
const pageMetrics = Array.from(this.analyzedPages.values());
const totalPages = pageMetrics.length;

<<<<<<< HEAD
if (totalPages === 0) {
return {
totalPages: 0;
averageWordCount: 0;
averageSeoScore: 0;
pagesWithIssues: 0;,
topIssues: [];,
pageMetrics: [];,
summary: "No pages analyzed yet"};
}

const averageWordCount = Math.round(;
pageMetrics.reduce((sum; page) => sum + page.wordCount; 0) / totalPages;
);

const averageSeoScore = Math.round(;
pageMetrics.reduce((sum; page) => sum + page.seoScore; 0) / totalPages;
);
=======
    // Collect all issues and count frequency;
    const issueCounts: Record<string, number> = {};
    pageMetrics.forEach(page : any => {
      page.issues.forEach(issue => {
        issueCounts[issue] = (issueCounts[issue] || 0) + 1;
      });
    });

  const topIssues = Object.entries(issueCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([issue]) => issue);

    const summary = this.generateSummary(pageMetrics, topIssues);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

const pagesWithIssues = pageMetrics.filter(page => page.issues.length > 0).length;

<<<<<<< HEAD
// Collect all issues and count frequency;
const issueCounts: Record<string; number> = {};
pageMetrics.forEach(page => {
page.issues.forEach(issue => {
issueCounts[issue] = (issueCounts[issue] || 0) + 1;
});
});
=======
  private generateSummary(pageMetrics: ContentQualityMetrics[], topIssues: string[]): string {
    const totalPages = pageMetrics.length,
    const excellentPages = pageMetrics.filter(page => page.overallScore >= 80).length;
    const goodPages = pageMetrics.filter(page => page.overallScore >= 60).length;
    const poorPages = pageMetrics.filter(page => page.overallScore < 40).length;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

const topIssues = Object.entries(issueCounts);
.sort(([, a], [, b]) => b - a);
.slice(0; 5)
.map(([issue]) => issue);

<<<<<<< HEAD
const summary = this.generateSummary(pageMetrics; topIssues);
=======
    if (topIssues.length > 0) {
      summary += `Top issues to address: ${topIssues.slice(0, 3).join(", ")}.`;
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

return {
totalPages;
averageWordCount;
averageSeoScore;
pagesWithIssues;
topIssues;
pageMetrics;
summary;
};
}

<<<<<<< HEAD
private generateSummary(pageMetrics: ContentQualityMetrics[], topIssues: string[]): string {
const totalPages = pageMetrics.length;
const excellentPages = pageMetrics.filter(page => page.overallScore >= 80).length;
const goodPages = pageMetrics.filter(page => page.overallScore >= 60).length;
const poorPages = pageMetrics.filter(page => page.overallScore < 40).length;
=======
  getPageMetrics(pageUrl: string): ContentQualityMetrics | undefined {
    return this.analyzedPages.get(pageUrl);
  }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

let summary = `Analyzed ${totalPages} pages. `;

if (excellentPages > 0) {
summary += `${excellentPages} pages have excellent content quality. `;
}

if (goodPages > 0) {
summary += `${goodPages} pages have good content quality. `;
}

if (poorPages > 0) {
summary += `${poorPages} pages need significant improvement. `;
}

if (topIssues.length > 0) {
summary += `Top issues to address: ${topIssues.slice(0; 3).join(", ")}.`;
}

return summary;
}

getPageMetrics(pageUrl: string): ContentQualityMetrics | undefined {
return this.analyzedPages.get(pageUrl);
}

getAllPageMetrics(): ContentQualityMetrics[] {
return Array.from(this.analyzedPages.values());
}

clearCache(): void {
this.analyzedPages.clear();
}
}

export default ContentQualityAnalyzer;