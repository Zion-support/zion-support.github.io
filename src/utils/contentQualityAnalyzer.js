export class ContentQualityAnalyzer {
  static instance;
  
  constructor() {
    this.analyzedPages = new Map();
  }
  
  static getInstance() {
    if (!ContentQualityAnalyzer.instance) {
      ContentQualityAnalyzer.instance = new ContentQualityAnalyzer();
    }
    return ContentQualityAnalyzer.instance;
  }
  
  analyzePageContent(pageUrl, title, content, metaDescription = '', images = [], links = []) {
    const analysis = {
      pageUrl,
      title,
      content,
      metaDescription,
      images,
      links,
      score: 0,
      suggestions: [],
      timestamp: new Date().toISOString()
    };
    
    // Basic quality checks
    if (title && title.length > 30) {
      analysis.score += 20;
    } else {
      analysis.suggestions.push('Improve title length (aim for 30+ characters)');
    }
    
    if (metaDescription && metaDescription.length >= 120 && metaDescription.length <= 160) {
      analysis.score += 20;
    } else {
      analysis.suggestions.push('Optimize meta description (120-160 characters)');
    }
    
    if (content && content.length > 300) {
      analysis.score += 20;
    } else {
      analysis.suggestions.push('Increase content length (aim for 300+ words)');
    }
    
    if (images && images.length > 0) {
      analysis.score += 15;
    } else {
      analysis.suggestions.push('Add relevant images');
    }
    
    if (links && links.length > 0) {
      analysis.score += 15;
    } else {
      analysis.suggestions.push('Add internal/external links');
    }
    
    // Check for headings
    const headingCount = (content.match(/<h[1-6][^>]*>/gi) || []).length;
    if (headingCount > 0) {
      analysis.score += 10;
    } else {
      analysis.suggestions.push('Add proper heading structure');
    }
    
    this.analyzedPages.set(pageUrl, analysis);
    return analysis;
  }
  
  getAnalysis(pageUrl) {
    return this.analyzedPages.get(pageUrl);
  }
  
  getAllAnalyses() {
    return Array.from(this.analyzedPages.values());
  }
}