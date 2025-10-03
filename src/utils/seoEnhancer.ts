/**
 * SEO Enhancement Utilities
 * Advanced SEO optimization and content analysis tools
 */

export interface SEOAnalysis {
  title: string;
  description: string;
  keywords: string[];
  wordCount: number;
  readingTime: number;
  readabilityScore: number;
  suggestions: string[];
}

export interface ContentMetrics {
  wordCount: number;
  readingTime: number;
  keywordDensity: Record<string, number>;
  headings: string[];
  links: string[];
}

export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): number => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

export const analyzeContent = (content: string): ContentMetrics => {
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const headings = content.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi) || [];
  const links = content.match(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi) || [];
  const wordCount = words.length;

  // Calculate keyword density
  const keywordDensity: Record<string, number> = {};
  words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
    if (cleanWord.length > 2) {
      keywordDensity[cleanWord] = (keywordDensity[cleanWord] || 0) + 1;
    }
  });

  // Convert counts to percentages
  Object.keys(keywordDensity).forEach(keyword => {
    keywordDensity[keyword] = (keywordDensity[keyword] / wordCount) * 100;
  });

  return {
    wordCount,
    readingTime: calculateReadingTime(text),
    keywordDensity,
    headings: headings.map(h => h.replace(/<[^>]*>/g, '')),
    links: links.map(l => l.match(/href=["']([^"']+)["']/)?.[1] || '')
  };
};

export const generateSEOSuggestions = (content: string, title: string, description: string): string[] => {
  const suggestions: string[] = [];
  const metrics = analyzeContent(content);

  // Title suggestions
  if (title.length < 30) {
    suggestions.push('Title is too short. Aim for 30-60 characters.');
  } else if (title.length > 60) {
    suggestions.push('Title is too long. Keep it under 60 characters.');
  }

  // Description suggestions
  if (description.length < 120) {
    suggestions.push('Meta description is too short. Aim for 120-160 characters.');
  } else if (description.length > 160) {
    suggestions.push('Meta description is too long. Keep it under 160 characters.');
  }

  // Content suggestions
  if (metrics.wordCount < 300) {
    suggestions.push('Content is too short. Aim for at least 300 words.');
  }

  if (metrics.headings.length === 0) {
    suggestions.push('Add headings to improve content structure.');
  }

  if (metrics.links.length === 0) {
    suggestions.push('Add internal and external links to improve SEO.');
  }

  // Keyword density suggestions
  const highDensityKeywords = Object.entries(metrics.keywordDensity)
    .filter(([_, density]) => density > 3)
    .map(([keyword, _]) => keyword);

  if (highDensityKeywords.length > 0) {
    suggestions.push(`Reduce keyword density for: ${highDensityKeywords.join(', ')}`);
  }

  return suggestions;
};

export const calculateReadabilityScore = (content: string): number => {
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const syllables = words.reduce((acc, word) => acc + countSyllables(word), 0);

  if (sentences.length === 0 || words.length === 0) return 0;

  const avgWordsPerSentence = words.length / sentences.length;
  const avgSyllablesPerWord = syllables / words.length;

  // Flesch Reading Ease formula
  const score = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
  return Math.max(0, Math.min(100, Math.round(score)));
};

const countSyllables = (word: string): number => {
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  if (cleanWord.length === 0) return 0;

  const vowels = 'aeiouy';
  let count = 0;
  let previousWasVowel = false;

  for (let i = 0; i < cleanWord.length; i++) {
    const isVowel = vowels.includes(cleanWord[i]);
    if (isVowel && !previousWasVowel) {
      count++;
    }
    previousWasVowel = isVowel;
  }

  // Handle silent 'e'
  if (cleanWord.endsWith('e') && count > 1) {
    count--;
  }

  return Math.max(1, count);
};

export const optimizeMetaTags = (title: string, description: string, keywords: string[]): {
  optimizedTitle: string;
  optimizedDescription: string;
  optimizedKeywords: string[];
} => {
  // Optimize title
  let optimizedTitle = title;
  if (optimizedTitle.length > 60) {
    optimizedTitle = optimizedTitle.substring(0, 57) + '...';
  }

  // Optimize description
  let optimizedDescription = description;
  if (optimizedDescription.length > 160) {
    optimizedDescription = optimizedDescription.substring(0, 157) + '...';
  }

  // Optimize keywords
  const optimizedKeywords = keywords
    .filter(keyword => keyword.length > 2 && keyword.length < 20)
    .slice(0, 10); // Limit to 10 keywords

  return {
    optimizedTitle,
    optimizedDescription,
    optimizedKeywords
  };
};

export const generateStructuredData = (content: string, title: string, description: string): object => {
  const metrics = analyzeContent(content);
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "wordCount": metrics.wordCount,
    "timeRequired": `PT${metrics.readingTime}M`,
    "author": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };
};

export default {
  calculateReadingTime,
  analyzeContent,
  generateSEOSuggestions,
  calculateReadabilityScore,
  optimizeMetaTags,
  generateStructuredData
};