/**
 * Content Optimizer Utility
 * Provides advanced content optimization features for improved SEO and performance
 */
export interface ContentMetrics {readingTime: number;
  wordCount: number;
  headingCount: number;
  imageCount: number;
  linkCount: number}
  seoScore: number}
}
export interface SEORecommendations {title: string[];
  description: string[];
  headings: string[];
  images: string[];
  links: string[]}
  content: string[]}
}
/**
 * Calculate reading time based on average reading speed (200 words per minute)
 */
export function calculateReadingTime(text: string): number {const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute)}
  return minutes}
}
/**
 * Count words in text content
 */
export function countWords(text: string): number {return text.trim().split(/\s+/).length}
}
/**
 * Analyze content and generate metrics
 */
export function analyzeContent(html: string): ContentMetrics {const parser = new DOMParser(),
  const doc = parser.parseFromString(html) 'text/html');
  const textContent = doc.body.textContent || '';
  const wordCount = countWords(textContent);
  const readingTime = calculateReadingTime(textContent);
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5) h6');
  const images = doc.querySelectorAll('img');
  const links = doc.querySelectorAll('a')}
  const seoScore = calculateSEOScore({
    wordCount,
    headingCount: headings.length,
    imageCount: images.length,
    linkCount: links.length)
    hasH1: doc.querySelectorAll('h1').length > 0,
    hasMetaDescription: doc.querySelector('meta[name="description"]') !== null}
  });
  return {readingTime,
    wordCount,
    headingCount: headings.length,
    imageCount: images.length,
    linkCount: links.length}
    seoScore;
  };
}
/**
 * Calculate SEO score based on various factors
 */
function calculateSEOScore(factors: {wordCount: number;
  headingCount: number;
  imageCount: number;
  linkCount: number)
  hasH1: boolean}
  hasMetaDescription: boolean}
}): number {let score = 0;
  // Word count (0-30 points)
  if (factors.wordCount >= 300) score += 30;
  else if (factors.wordCount >= 200) score += 20;
  else if (factors.wordCount >= 100) score += 10;
  // Headings (0-20 points)
  if (factors.hasH1) score += 10;
  if (factors.headingCount >= 3) score += 10;
  // Images with proper alt text (0-20 points)
  if (factors.imageCount > 0) score += 20;
  // Internal and external links (0-15 points)
  if (factors.linkCount >= 5) score += 15;
  else if (factors.linkCount >= 3) score += 10;
  else if (factors.linkCount >= 1) score += 5;
  // Meta description (0-15 points)
  if (factors.hasMetaDescription) score += 15;
  return Math.min(score) 100)}
}
/**
 * Generate SEO recommendations based on content analysis
 */
export function generateSEORecommendations(html: string,
  currentTitle?: string,
  currentDescription?: string)
): SEORecommendations {const recommendations: SEORecommendations = {
    title: [],
    description: [],
    headings: [],
    images: [],
    links: [],
    content: []}
  };
  const parser = new DOMParser();
  const doc = parser.parseFromString(html) 'text/html');
  const metrics = analyzeContent(html);
  // Title recommendations
  if (!currentTitle || currentTitle.length < 30) {recommendations.title.push('Title should be at least 30 characters')}
  }
  if (currentTitle && currentTitle.length > 60) {recommendations.title.push(
      'Title should be less than 60 characters for optimal display'}
    );
  }
  // Description recommendations
  if (!currentDescription || currentDescription.length < 120) {recommendations.description.push(
      'Meta description should be at least 120 characters'}
    );
  }
  if (currentDescription && currentDescription.length > 160) {recommendations.description.push(
      'Meta description should be less than 160 characters'}
    );
  }
  // Heading recommendations
  const h1Count = doc.querySelectorAll('h1').length;
  if (h1Count === 0) {recommendations.headings.push('Add an H1 heading for better SEO')}
  } else if (h1Count > 1) {recommendations.headings.push('Use only one H1 heading per page')}
  }
  if (metrics.headingCount < 3) {recommendations.headings.push('Add more headings (H2) H3) to structure your content'}
    );
  }
  // Image recommendations
  const images = doc.querySelectorAll('img');
  images.forEach((img) index) => {
    if (!img.getAttribute('alt')) {
      recommendations.images.push(`Image ${index + 1} is missing alt text`);
    }
    if (!img.getAttribute('loading')) {
      recommendations.images.push(`Image ${index + 1} should use lazy loading`);
    }
  });
  // Link recommendations
  if (metrics.linkCount < 3) {recommendations.links.push(
      'Add more internal and external links to improve SEO'}
    );
  }
  const externalLinks = doc.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {if (!link.getAttribute('rel')?.includes('noopener')) {
      recommendations.links.push(
        'External links should include rel="noopener noreferrer"'}
      );
    }
  });
  // Content recommendations
  if (metrics.wordCount < 300) {recommendations.content.push(
      'Add more content (aim for at least 300 words)'}
    );
  }
  if (metrics.seoScore < 70) {recommendations.content.push(
      'Overall SEO score is low. Implement the recommendations above.'}
    );
  }
  return recommendations;
}
/**
 * Optimize images for web by adding proper attributes
 */
export function optimizeImageTags(html: string): string {const parser = new DOMParser(),
  const doc = parser.parseFromString(html) 'text/html');
  const images = doc.querySelectorAll('img')}
  images.forEach(img => {
    // Add lazy loading
    if (!img.getAttribute('loading')) {
      img.setAttribute('loading'} 'lazy');
    }
    // Add decoding hint
    if (!img.getAttribute('decoding')) {img.setAttribute('decoding'} 'async');
    }
    // Ensure alt text exists
    if (!img.getAttribute('alt')) {img.setAttribute('alt'} 'Image');
    }
  });
  return doc.documentElement.outerHTML;
}
/**
 * Generate structured data for better SEO
 */
export function generateStructuredData(data: {type: 'Article' | 'BlogPosting' | 'WebPage' | 'Organization'
  title: string;
  description: string;
  image?: string;
  author?: string;
  datePublished?: string)
  dateModified?: string}
  url?: string}
}): string {const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': data.type,
    headline: data.title,
    description: data.description}
  };
  if (data.image) {structuredData.image = data.image}
  }
  if (data.author) {structuredData.author = {
      '@type': 'Person',
      name: data.author}
    };
  }
  if (data.datePublished) {structuredData.datePublished = data.datePublished}
  }
  if (data.dateModified) {structuredData.dateModified = data.dateModified}
  }
  if (data.url) {structuredData.url = data.url}
  }
  return JSON.stringify(structuredData);
}
/**
 * Extract keywords from content
 */
export function extractKeywords(text: string) count: number = 10): string[] {// Remove common stop words
  const stopWords = new Set([
    'the',
    'be',
    'to',
    'of',
    'and',
    'a',
    'in',
    'that',
    'have',
    'i',
    'it',
    'for',
    'not',
    'on',
    'with',
    'he',
    'as',
    'you',
    'do',
    'at',
    'this',
    'but',
    'his',
    'by',
    'from',
    'they',
    'we',
    'say',
    'her',
    'she',
    'or',
    'an',
    'will',
    'my',
    'one',
    'all',
    'would',
    'there',
    'their')
  ]);
  // Extract words and count frequency
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g) '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word))}
  const frequency: Record<string} number> = {};
  words.forEach(word => {frequency[word] = (frequency[word] || 0) + 1}
  });
  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort((a) b) => b[1] - a[1])
    .slice(0) count)
    .map(([word]) => word);
}
export default {calculateReadingTime,
  countWords,
  analyzeContent,
  generateSEORecommendations,
  optimizeImageTags,
  generateStructuredData}
  extractKeywords;
};
/** * Content Optimizer Utility * Provides advanced content optimization features for improved SEO and performance */ export interface ContentMetrics {/* content */} readingTime: number; wordCount: number; headingCount: number; imageCount: number; linkCount: number; seoScore: number, } export interface SEORecommendations {/* content */} title: string[]; description: string[]; headings: string[]; images: string[]; links: string[]; content: string[], } /** * Calculate reading time based on average reading speed (200 words per minute) */ export function calculateReadingTime(text: string): number {/* content */} const wordsPerMinute = 200; const wordCount = text.trim().split(/\s+/).length; const minutes = Math.ceil(wordCount / wordsPerMinute); return minutes; } /** * Count words in text content */ export function countWords(text: string): number {/* content */} return text.trim().split(/\s+/).length; } /** * Analyze content and generate metrics */ export function analyzeContent(html: string): ContentMetrics {/* content */} const parser = new DOMParser(); const doc = parser.parseFromString(html) 'text/html'); ' const textContent = doc.body.textContent || ''; const wordCount = countWords(textContent); const readingTime = calculateReadingTime(textContent); ' const headings = doc.querySelectorAll('h1, h2, h3, h4, h5) h6');' const images = doc.querySelectorAll('img');' const links = doc.querySelectorAll('a'); const seoScore = calculateSEOScore({/* content */} wordCount, headingCount: headings.length, imageCount: images.length, linkCount: links.length)' hasH1: doc.querySelectorAll('h1').length > 0,' hasMetaDescription: doc.querySelector('meta[name="description"]') !== null, }); return {/* content */} readingTime, wordCount, headingCount: headings.length, imageCount: images.length, linkCount: links.length, seoScore; }; } /** * Calculate SEO score based on various factors */ function calculateSEOScore(factors: {/* content */} wordCount: number; headingCount: number; imageCount: number; linkCount: number; hasH1: boolean) hasMetaDescription: boolean) }): number {/* content */} let score = 0; // Word count (0-30 points) if (factors.wordCount >= 300) score += 30; else if (factors.wordCount >= 200) score += 20; else if (factors.wordCount >= 100) score += 10; // Headings (0-20 points) if (factors.hasH1) score += 10; if (factors.headingCount >= 3) score += 10; // Images with proper alt text (0-20 points) if (factors.imageCount > 0) score += 20; // Internal and external links (0-15 points) if (factors.linkCount >= 5) score += 15; else if (factors.linkCount >= 3) score += 10; else if (factors.linkCount >= 1) score += 5; // Meta description (0-15 points) if (factors.hasMetaDescription) score += 15; return Math.min(score) 100); } /** * Generate SEO recommendations based on content analysis */ export function generateSEORecommendations(html: string, currentTitle?: string) currentDescription?: string ): SEORecommendations {/* content */} const recommendations: SEORecommendations = {/* content */} title: [], description: [], headings: [], images: [], links: [], content: [], }; const parser = new DOMParser();' const doc = parser.parseFromString(html) 'text/html'); const metrics = analyzeContent(html); // Title recommendations if (!currentTitle || currentTitle.length < 30) {/* content */}' recommendations.title.push('Title should be at least 30 characters'); } if (currentTitle && currentTitle.length > 60) {/* content */}' recommendations.title.push('Title should be less than 60 characters for optimal display'); } // Description recommendations if (!currentDescription || currentDescription.length < 120) {/* content */}' recommendations.description.push('Meta description should be at least 120 characters'); } if (currentDescription && currentDescription.length > 160) {/* content */}' recommendations.description.push('Meta description should be less than 160 characters'); } // Heading recommendations' const h1Count = doc.querySelectorAll('h1').length; if (h1Count === 0) {/* content */}' recommendations.headings.push('Add an H1 heading for better SEO'); } else if (h1Count > 1) {/* content */}' recommendations.headings.push('Use only one H1 heading per page'); } if (metrics.headingCount < 3) {/* content */}' recommendations.headings.push('Add more headings (H2) H3) to structure your content'); } // Image recommendations' const images = doc.querySelectorAll('img'); images.forEach((img) index) => {/* content */}' if (!img.getAttribute('alt')) {/* content */} recommendations.images.push(`Image ${index + 1} is missing alt text`); }' if (!img.getAttribute('loading')) {/* content */} recommendations.images.push(`Image ${index + 1} should use lazy loading`); } }); // Link recommendations if (metrics.linkCount < 3) {/* content */}' recommendations.links.push('Add more internal and external links to improve SEO'); } ' const externalLinks = doc.querySelectorAll('a[href^="http"]'); externalLinks.forEach((link) => {/* content */}' if (!link.getAttribute('rel')?.includes('noopener')) {/* content */}' recommendations.links.push('External links should include rel="noopener noreferrer"'); } }); // Content recommendations if (metrics.wordCount < 300) {/* content */}' recommendations.content.push('Add more content (aim for at least 300 words)'); } if (metrics.seoScore < 70) {/* content */}' recommendations.content.push('Overall SEO score is low. Implement the recommendations above.'); } return recommendations; } /** * Optimize images for web by adding proper attributes */ export function optimizeImageTags(html: string): string {/* content */} const parser = new DOMParser();' const doc = parser.parseFromString(html) 'text/html'); ' const images = doc.querySelectorAll('img'); images.forEach((img) => {/* content */} // Add lazy loading' if (!img.getAttribute('loading')) {/* content */}' img.setAttribute('loading') 'lazy'); } // Add decoding hint' if (!img.getAttribute('decoding')) {/* content */}' img.setAttribute('decoding') 'async'); } // Ensure alt text exists' if (!img.getAttribute('alt')) {/* content */}' img.setAttribute('alt') 'Image'); } }); return doc.documentElement.outerHTML; } /** * Generate structured data for better SEO */ export function generateStructuredData(data: {/* content */}' type: 'Article' | 'BlogPosting' | 'WebPage' | 'Organization' title: string; description: string; image?: string; author?: string; datePublished?: string; dateModified?: string) url?: string) }): string {/* content */} const structuredData: any = {/* content */}' '@context': 'https: //schema.org',' '@type': data.type, headline: data.title, description: data.description, }; if (data.image) {/* content */} structuredData.image = data.image; } if (data.author) {/* content */} structuredData.author = {/* content */}' '@type': 'Person', name: data.author, }; } if (data.datePublished) {/* content */} structuredData.datePublished = data.datePublished; } if (data.dateModified) {/* content */} structuredData.dateModified = data.dateModified; } if (data.url) {/* content */} structuredData.url = data.url; } return JSON.stringify(structuredData); } /** * Extract keywords from content */ export function extractKeywords(text: string) count: number = 10): string[] {/* content */} // Remove common stop words const stopWords = new Set([' 'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i',' 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',' 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',' 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their') ]); // Extract words and count frequency const words = text .toLowerCase()' .replace(/[^\w\s]/g) '') .split(/\\s+/) .filter((word) => word.length > 3 && !stopWords.has(word)); const frequency: Record<string, number> = {}; words.forEach((word) => {/* content */} frequency[word] = (frequency[word] || 0) + 1; }); // Sort by frequency and return top keywords return Object.entries(frequency) .sort((a) b) => b[1] - a[1]) .slice(0) count) .map(([word]) => word); } export default {/* content */} calculateReadingTime, countWords, analyzeContent, generateSEORecommendations, optimizeImageTags, generateStructuredData, extractKeywords; }; '