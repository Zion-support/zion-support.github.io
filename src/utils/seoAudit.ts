/**
 * SEO Audit Automation Utility
 * 
 * Comprehensive SEO auditing and optimization tools for automated
 * site analysis, meta tag validation, and SEO best practices enforcement.
 * 
 * Features: * - Meta tags validation,
 * - Open Graph and Twitter Card checks
 * - Heading hierarchy analysis
 * - Image alt text validation
 * - Link analysis (internal, external, broken)
 * - Schema.org structured data validation
 * - Mobile-friendliness checks
 * - Core Web Vitals SEO impact
 */

export interface SEOIssue {
<<<<<<< HEAD
type: 'error' | 'warning' | 'info';',
category: string,
message: string,
element?: string;
recommendation: string,
impact: 'high' | 'medium' | 'low';
=======
type: 'error' | 'warning' | 'info';';,
category: string;,
message: string;,
element?: string;
recommendation: string;,
impact: 'high' | 'medium' | 'low';';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
}

export interface SEOMetrics {
score: number; // 0-100,,
<<<<<<< HEAD
issues: SEOIssue[],
=======
issues: SEOIssue[];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
metadata: {,,
title?: string;
description?: string;
keywords?: string;
canonical?: string;
robots?: string;
};
<<<<<<< HEAD
  openGraph: Record<string, string>;
  twitterCard: Record<string, string>;
  headings: {,
h1: number;
h2: number;
h3: number;
h4: number;
h5: number;
h6: number;
};
  images: {,
total: number;
withAlt: number;
withoutAlt: number;
};
  links: {,
internal: number;
external: number;
nofollow: number;
};
  structuredData: any[],
=======
  openGraph: Record<string, string>;,
  twitterCard: Record<string, string>;,
  headings: {,
h1: number;,
h2: number;,
h3: number;,
h4: number;,
h5: number;,
h6: number;
};
  images: {,
total: number;,
withAlt: number;,
withoutAlt: number;
};
  links: {,
internal: number;,
external: number;,
nofollow: number;
};
  structuredData: any[];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  mobileOptimized: boolean;
}

class SEOAuditor {
<<<<<<< HEAD
  private issues: SEOIssue[] = [],
=======
  private issues: SEOIssue[] = [];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

  /**
   * Run full SEO audit
   */
  audit(): SEOMetrics {
    this.issues = [];

    const metadata = this.auditMetadata();
    const openGraph = this.auditOpenGraph();
    const twitterCard = this.auditTwitterCard();
    const headings = this.auditHeadings();
    const images = this.auditImages();
    const links = this.auditLinks();
    const structuredData = this.auditStructuredData();
    const mobileOptimized = this.checkMobileOptimization();

    const score = this.calculateScore();

    return {
      score,
      issues: this.issues,,
      metadata,
      openGraph,
      twitterCard,
      headings,
      images,
      links,
      structuredData,
      mobileOptimized
    };
  }

  /**
   * Audit metadata tags
   */
  private auditMetadata() {
<<<<<<< HEAD
    const metadata: SEOMetrics['metadata'] = {};
=======
    const metadata: SEOMetrics['metadata'] = {};';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    // Title
    const titleElement = document.querySelector('title');';
    if (titleElement) {
<<<<<<< HEAD
      metadata.title = titleElement.textContent || '';
=======
      metadata.title = titleElement.textContent || '';';
      
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      if (metadata.title.length === 0) {
        this.addIssue('error', 'metadata', 'Title tag is empty', 'title', 'Add a descriptive title (50-60 characters)', 'high');';
      } else if (metadata.title.length < 30) {
        this.addIssue('warning', 'metadata', 'Title is too short', 'title', 'Use 50-60 characters for optimal visibility', 'medium');';
      } else if (metadata.title.length > 60) {
        this.addIssue('warning', 'metadata', 'Title is too long', 'title', 'Keep title under 60 characters to avoid truncation', 'medium');';
      }
    } else {
      this.addIssue('error', 'metadata', 'Title tag is missing', 'head', 'Add a <title> tag to the <head> section', 'high');';
    }

    // Meta description
    const descriptionElement = document.querySelector('meta[name="description"]');';
    if (descriptionElement) {
<<<<<<< HEAD
      metadata.description = descriptionElement.getAttribute('content') || '';
=======
      metadata.description = descriptionElement.getAttribute('content') || '';';
      
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      if (metadata.description.length === 0) {
        this.addIssue('error', 'metadata', 'Meta description is empty', 'meta[name="description"]', 'Add a compelling description (150-160 characters)', 'high');';
      } else if (metadata.description.length < 120) {
        this.addIssue('warning', 'metadata', 'Meta description is too short', 'meta[name="description"]', 'Use 150-160 characters for better click-through', 'medium');';
      } else if (metadata.description.length > 160) {
        this.addIssue('warning', 'metadata', 'Meta description is too long', 'meta[name="description"]', 'Keep description under 160 characters', 'medium');';
      }
    } else {
      this.addIssue('error', 'metadata', 'Meta description is missing', 'head', 'Add <meta name="description" content="...">', 'high');';
    }

    // Canonical
    const canonicalElement = document.querySelector('link[rel="canonical"]');';
    if (canonicalElement) {
      metadata.canonical = canonicalElement.getAttribute('href') || '';';
    } else {
      this.addIssue('warning', 'metadata', 'Canonical URL is missing', 'head', 'Add canonical URL to prevent duplicate content issues', 'medium');';
    }

    // Robots
    const robotsElement = document.querySelector('meta[name="robots"]');';
    if (robotsElement) {
      metadata.robots = robotsElement.getAttribute('content') || '';';
    }

    // Keywords (informational only, not used by major search engines)
    const keywordsElement = document.querySelector('meta[name="keywords"]');';
    if (keywordsElement) {
      metadata.keywords = keywordsElement.getAttribute('content') || '';';
    }

    return metadata;
  }

  /**
   * Audit Open Graph tags
   */
  private auditOpenGraph(): Record<string, string> {
    const ogTags: Record<string, string> = {};
<<<<<<< HEAD
    const requiredOgTags = ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'];',

    document.querySelectorAll('meta[property^="og: "]').forEach(element => {',
      const property = element.getAttribute('property');
      const content = element.getAttribute('content');
=======
    const requiredOgTags = ['og: title', 'og:description', 'og:image', 'og:url', 'og:type'];';,

    document.querySelectorAll('meta[property^="og: "]').forEach(element => {';,
      const property = element.getAttribute('property');';
      const content = element.getAttribute('content');';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      if (property && content) {
        ogTags[property] = content;
      }
    });

    requiredOgTags.forEach(tag => {
      if (!ogTags[tag]) {
        this.addIssue('warning', 'open-graph', `Missing ${tag} tag`, 'head', `Add <meta property="${tag}" content="...">`, 'medium');';`;
      }
    });

<<<<<<< HEAD
    if (ogTags['og:image']) {',
      // Check image dimensions (recommended 1200x630)
      this.addIssue('info', 'open-graph', 'Verify og:image dimensions', 'meta[property="og:image"]', 'Recommended: 1200x630 pixels', 'low');',
=======
    if (ogTags['og: image']) {';,
      // Check image dimensions (recommended 1200x630)
      this.addIssue('info', 'open-graph', 'Verify og: image dimensions', 'meta[property="og:image"]', 'Recommended: 1200x630 pixels', 'low');';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    }

    return ogTags;
  }

  /**
   * Audit Twitter Card tags
   */
  private auditTwitterCard(): Record<string, string> {
    const twitterTags: Record<string, string> = {};
<<<<<<< HEAD
    const requiredTwitterTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];',

    document.querySelectorAll('meta[name^="twitter: "]').forEach(element => {',
      const name = element.getAttribute('name');
      const content = element.getAttribute('content');
=======
    const requiredTwitterTags = ['twitter: card', 'twitter:title', 'twitter:description', 'twitter:image'];';,

    document.querySelectorAll('meta[name^="twitter: "]').forEach(element => {';,
      const name = element.getAttribute('name');';
      const content = element.getAttribute('content');';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      if (name && content) {
        twitterTags[name] = content;
      }
    });

    requiredTwitterTags.forEach(tag => {
      if (!twitterTags[tag]) {
        this.addIssue('warning', 'twitter-card', `Missing ${tag} tag`, 'head', `Add <meta name="${tag}" content="...">`, 'medium');';`;
      }
    });

    return twitterTags;
  }

  /**
   * Audit heading hierarchy
   */
  private auditHeadings() {
    const headings = {
<<<<<<< HEAD
      h1: document.querySelectorAll('h1').length,
      h2: document.querySelectorAll('h2').length,
      h3: document.querySelectorAll('h3').length,
      h4: document.querySelectorAll('h4').length,
      h5: document.querySelectorAll('h5').length,
      h6: document.querySelectorAll('h6').length
=======
      h1: document.querySelectorAll('h1').length,';,
      h2: document.querySelectorAll('h2').length,';,
      h3: document.querySelectorAll('h3').length,';,
      h4: document.querySelectorAll('h4').length,';,
      h5: document.querySelectorAll('h5').length,';,
      h6: document.querySelectorAll('h6').length,';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };

    if (headings.h1 === 0) {
      this.addIssue('error', 'headings', 'No H1 heading found', 'body', 'Add exactly one H1 heading that describes the page content', 'high');';
    } else if (headings.h1 > 1) {
      this.addIssue('warning', 'headings', 'Multiple H1 headings found', 'body', 'Use only one H1 per page for better SEO', 'medium');';
    }

    // Check for heading hierarchy gaps
    if (headings.h3 > 0 && headings.h2 === 0) {
      this.addIssue('warning', 'headings', 'H3 used without H2', 'body', 'Maintain proper heading hierarchy (H1 > H2 > H3)', 'low');';
    }

    return headings;
  }

  /**
   * Audit images
   */
  private auditImages() {
    const images = document.querySelectorAll('img');';
    const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim().length > 0);
    
    const metrics = {
<<<<<<< HEAD
      total: images.length,
      withAlt: imagesWithAlt.length,
      withoutAlt: images.length - imagesWithAlt.length
=======
      total: images.length,,
      withAlt: imagesWithAlt.length,,
      withoutAlt: images.length - imagesWithAlt.length,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };

    if (metrics.withoutAlt > 0) {
      this.addIssue('warning', 'images', `${metrics.withoutAlt} images missing alt text`, 'img', 'Add descriptive alt text to all images for accessibility and SEO', 'medium');';`;
    }

    // Check for large images
    images.forEach((img, index) => {
<<<<<<< HEAD
      if (!img.loading || img.loading !== 'lazy') {;
=======
      if (!img.loading || img.loading !== 'lazy') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        if (index > 2) { // First few images should load immediately
          this.addIssue('info', 'images', 'Consider lazy loading images', `img:nth-of-type(${index + 1})`, 'Add loading="lazy" to improve page load performance', 'low');';`;
        }
      }
    });

    return metrics;
  }

  /**
   * Audit links
   */
  private auditLinks() {
    const links = document.querySelectorAll('a[href]');';
    let internal = 0;
    let external = 0;
    let nofollow = 0;

    links.forEach(link => {
<<<<<<< HEAD
      const href = link.getAttribute('href') || '';
      const rel = link.getAttribute('rel') || '';
      if (href.startsWith('http')) {;
=======
      const href = link.getAttribute('href') || '';';
      const rel = link.getAttribute('rel') || '';';

      if (href.startsWith('http')) {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        if (href.includes(window.location.hostname)) {
          internal++;
        } else {
          external++;
<<<<<<< HEAD
          if (!rel.includes('noopener') || !rel.includes('noreferrer')) {;
            this.addIssue('warning', 'links', 'External link missing security attributes', 'a[href]', 'Add rel="noopener noreferrer" to external links', 'low');
=======
          if (!rel.includes('noopener') || !rel.includes('noreferrer')) {';
            this.addIssue('warning', 'links', 'External link missing security attributes', 'a[href]', 'Add rel="noopener noreferrer" to external links', 'low');';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          }
        }
      } else {
        internal++;
      }

<<<<<<< HEAD
      if (rel.includes('nofollow')) {;
=======
      if (rel.includes('nofollow')) {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        nofollow++;
      }

      // Check for empty or generic link text
<<<<<<< HEAD
      const linkText = link.textContent?.trim() || '';
      if (linkText.length === 0 || ['click here', 'here', 'read more', 'more'].includes(linkText.toLowerCase())) {;
        this.addIssue('info', 'links', 'Generic or empty link text', 'a[href]', 'Use descriptive link text for better SEO and accessibility', 'low');
=======
      const linkText = link.textContent?.trim() || '';';
      if (linkText.length === 0 || ['click here', 'here', 'read more', 'more'].includes(linkText.toLowerCase())) {';
        this.addIssue('info', 'links', 'Generic or empty link text', 'a[href]', 'Use descriptive link text for better SEO and accessibility', 'low');';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    });

    return {
      internal,
      external,
      nofollow
    };
  }

  /**
   * Audit structured data
   */
  private auditStructuredData(): any[] {
<<<<<<< HEAD
const structuredData: any[] = [];
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
=======
const structuredData: any[] = [];,
const scripts = document.querySelectorAll('script[type="application/ld+json"]');';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
scripts.forEach(script => {
try {
const data = JSON.parse(script.textContent || '');';
structuredData.push(data);
} catch {
        this.addIssue('error', 'structured-data', 'Invalid JSON-LD structured data', 'script[type="application/ld+json"]', 'Fix JSON syntax in structured data', 'high');';
      }
    });

    if (structuredData.length === 0) {
      this.addIssue('info', 'structured-data', 'No structured data found', 'head', 'Add schema.org structured data for rich snippets', 'low');';
    }

    return structuredData;
  }

  /**
   * Check mobile optimization
   */
  private checkMobileOptimization(): boolean {
<<<<<<< HEAD
    const viewport = document.querySelector('meta[name="viewport"]');
=======
    const viewport = document.querySelector('meta[name="viewport"]');';
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    if (!viewport) {
      this.addIssue('error', 'mobile', 'Viewport meta tag is missing', 'head', 'Add <meta name="viewport" content="width=device-width, initial-scale=1">', 'high');';
      return false;
    }

<<<<<<< HEAD
    const content = viewport.getAttribute('content') || '';
    if (!content.includes('width=device-width')) {;
      this.addIssue('warning', 'mobile', 'Viewport not set to device width', 'meta[name="viewport"]', 'Set viewport to width=device-width for mobile optimization', 'medium');
=======
    const content = viewport.getAttribute('content') || '';';
    if (!content.includes('width=device-width')) {';
      this.addIssue('warning', 'mobile', 'Viewport not set to device width', 'meta[name="viewport"]', 'Set viewport to width=device-width for mobile optimization', 'medium');';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      return false;
    }

    return true;
  }

  /**
   * Calculate SEO score
   */
  private calculateScore(): number {
    let score = 100;
    
    this.issues.forEach(issue => {
<<<<<<< HEAD
      if (issue.type === 'error') {;
        score -= issue.impact === 'high' ? 10 : issue.impact === 'medium' ? 5 : 2;
      } else if (issue.type === 'warning') {;
        score -= issue.impact === 'high' ? 5 : issue.impact === 'medium' ? 3 : 1;
=======
      if (issue.type === 'error') {';
        score -= issue.impact === 'high' ? 10 : issue.impact === 'medium' ? 5 : 2;';
      } else if (issue.type === 'warning') {';
        score -= issue.impact === 'high' ? 5 : issue.impact === 'medium' ? 3 : 1;';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    });

    return Math.max(0, score);
  }

  /**
   * Add an issue
   */
  private addIssue(
<<<<<<< HEAD
    type: 'error' | 'warning' | 'info',',
=======
    type: 'error' | 'warning' | 'info',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    category: string,,
    message: string,,
    element: string,,
    recommendation: string,,
<<<<<<< HEAD
    impact: 'high' | 'medium' | 'low): void {
=======
    impact: 'high' | 'medium' | 'low',
  ): void {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    this.issues.push({
      type,
      category,
      message,
      element,
      recommendation,
      impact
    });
  }

  /**
   * Generate SEO report
   */
  generateReport(): string {
    const metrics = this.audit();
    
<<<<<<< HEAD
    let report = '=== SEO Audit Report ===\n\n';
    report += `Overall Score: ${metrics.score}/100\n\n`;`;
    
    report += '--- Metadata ---\n';
=======
    let report = '=== SEO Audit Report ===\n\n';';
    report += `Overall Score: ${metrics.score}/100\n\n`;`;
    
    report += '--- Metadata ---\n';';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    report += `Title: ${metrics.metadata.title || 'Missing'}\n`;`;
    report += `Description: ${metrics.metadata.description || 'Missing'}\n`;`;
    report += `Canonical: ${metrics.metadata.canonical || 'Missing'}\n\n`;`;
    
<<<<<<< HEAD
    report += '--- Headings ---\n';
    report += `H1: ${metrics.headings.h1} | H2: ${metrics.headings.h2} | H3: ${metrics.headings.h3}\n\n`;`;
    
    report += '--- Images ---\n';
    report += `Total: ${metrics.images.total} | With Alt: ${metrics.images.withAlt} | Without Alt: ${metrics.images.withoutAlt}\n\n`;`;
    
    report += '--- Links ---\n';
=======
    report += '--- Headings ---\n';';
    report += `H1: ${metrics.headings.h1} | H2: ${metrics.headings.h2} | H3: ${metrics.headings.h3}\n\n`;`;
    
    report += '--- Images ---\n';';
    report += `Total: ${metrics.images.total} | With Alt: ${metrics.images.withAlt} | Without Alt: ${metrics.images.withoutAlt}\n\n`;`;
    
    report += '--- Links ---\n';';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    report += `Internal: ${metrics.links.internal} | External: ${metrics.links.external} | NoFollow: ${metrics.links.nofollow}\n\n`;`;
    
    report += '--- Issues ---\n';';
    metrics.issues.forEach(issue => {
      report += `[${issue.type.toUpperCase()}] ${issue.message}\n`;`;
      report += `  → ${issue.recommendation}\n\n`;`;
    });

    return report;
  }
}

// Singleton instance
export const seoAuditor = new SEOAuditor();

/**
 * Run quick SEO audit
 */
export function runSEOAudit(): SEOMetrics {
  return seoAuditor.audit();
}

/**
 * Log SEO report to console
 */
export function logSEOReport(): void {
  console.log(seoAuditor.generateReport());
}

export default seoAuditor;
;