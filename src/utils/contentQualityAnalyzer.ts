export interface PageQualityReport {
  url: string;
  score: number;
  issues: string[];
  recommendations: string[];
}

export interface ContentQualityReport {
  totalPages: number;
  analyzedPages: number;
  averageScore: number;
  pages: PageQualityReport[];
}

export class ContentQualityAnalyzer {
  static analyzePage(content: string, url: string): PageQualityReport {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check for basic content structure
    if (!content.includes('<h1>')) {
      issues.push("Missing H1 heading");
      recommendations.push("Add a descriptive H1 heading");
      score -= 20;
    }

    if (!content.includes('<p>')) {
      issues.push("No paragraph content found");
      recommendations.push("Add descriptive paragraph content");
      score -= 30;
    }

    // Check for images
    if (!content.includes('<img')) {
      issues.push("No images found");
      recommendations.push("Add relevant images to improve engagement");
      score -= 10;
    }

    // Check content length
    const textContent = content.replace(/<[^>]*>/g, '');
    if (textContent.length < 200) {
      issues.push("Content is too short");
      recommendations.push("Expand content to at least 200 words");
      score -= 15;
    }

    return {
      url,
      score: Math.max(0, score),
      issues,
      recommendations
    };
  }

  static generateReport(pages: PageQualityReport[]): ContentQualityReport {
    const totalPages = pages.length;
    const analyzedPages = pages.filter(p => p.score > 0).length;
    const averageScore = pages.reduce((sum, p) => sum + p.score, 0) / totalPages;

    return {
      totalPages,
      analyzedPages,
      averageScore: Math.round(averageScore * 100) / 100,
      pages
    };
  }
}