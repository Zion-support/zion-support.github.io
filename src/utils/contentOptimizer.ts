export interface ContentAnalysis {
  seoScore: number;
  issues: ContentIssue[];
  suggestions: ContentSuggestion[];
}

export interface ContentIssue {
  type: "missing-headings" | "minimal-content" | "no-images" | "poor-structure" | "missing-keywords";
  severity: "low" | "medium" | "high";
  message: string;
  element?: string;
}

export interface ContentSuggestion {
  type: "add-heading" | "add-image" | "improve-structure" | "add-keywords";
  priority: "low" | "medium" | "high";
  message: string;
  implementation?: string;
}

export class ContentOptimizer {
  static analyzeContent(content: string): ContentAnalysis {
    const issues: ContentIssue[] = [];
    const suggestions: ContentSuggestion[] = [];
    let seoScore = 100;

    // Check for headings
    if (!content.includes('<h1>') && !content.includes('<h2>')) {
      issues.push({
        type: "missing-headings",
        severity: "high",
        message: "Content lacks proper heading structure"
      });
      suggestions.push({
        type: "add-heading",
        priority: "high",
        message: "Add H1 and H2 headings to improve structure"
      });
      seoScore -= 20;
    }

    // Check content length
    const textContent = content.replace(/<[^>]*>/g, '');
    if (textContent.length < 300) {
      issues.push({
        type: "minimal-content",
        severity: "medium",
        message: "Content is too short for good SEO"
      });
      suggestions.push({
        type: "improve-structure",
        priority: "medium",
        message: "Expand content to at least 300 words"
      });
      seoScore -= 15;
    }

    // Check for images
    if (!content.includes('<img')) {
      issues.push({
        type: "no-images",
        severity: "low",
        message: "Content lacks images"
      });
      suggestions.push({
        type: "add-image",
        priority: "low",
        message: "Add relevant images to improve engagement"
      });
      seoScore -= 5;
    }

    return {
      seoScore: Math.max(0, seoScore),
      issues,
      suggestions
    };
  }
}