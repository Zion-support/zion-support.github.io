/**
 * SEO Enhancement Utilities
 * Advanced SEO optimization and content analysis tools
 */

export interface SEOAnalysis {/* content */}
  title: string;
  description: string;
  keywords: string[];
  wordCount: number;
  readingTime: number;
  readabilityScore: number;
  suggestions: string[];
}

export interface ContentMetrics {/* content */}
  wordCount: number;
  readingTime: number;
  keywordDensity: Record<string, number>;
  headings: string[];
  links: string[];
}

export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): number => {/* content */}
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

export const analyzeContent = (content: string): ContentMetrics => {/* content */}
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const headings = content.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi) || [];
  const links = content.match(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi) || [];
  const wordCount = words.length;
  const readingTime = calculateReadingTime(text);
  
  // Calculate keyword density
  const keywordDensity: Record<string, number> = {};
  const wordFreq: Record<string, number> = {};
  
  words.forEach(word => {/* content */}
    const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
    if (cleanWord.length > 3) {/* content */}
      wordFreq[cleanWord] = (wordFreq[cleanWord] || 0) + 1;
    }
  });
  
  Object.entries(wordFreq).forEach(([word, count]) => {/* content */}
    keywordDensity[word] = (count / wordCount) * 100;
  });
  
  return {/* content */}
    wordCount,
    readingTime,
    keywordDensity,
    headings: headings.map(h => h.replace(/<[^>]*>/g, '').trim()),
    links: links.map(l => l.match(/href=["']([^"']+)["']/)?.[1] || '').filter(Boolean)
  };
};

export const generateSitemapEntry = (url: string, lastmod?: string, changefreq?: string, priority?: number): string => {/* content */}
  return `<url>
    <loc>${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority !== undefined ? `<priority>${priority}</priority>` : ''}
  </url>`
};

export const extractKeywords = (content: string, maxKeywords: number = 20): string[] => {/* content */}
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
  ]);
  
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));
  const frequency = new Map<string, number>();
  words.forEach(word => {/* content */}
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });
  
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

export const optimizeDescription = (description: string, maxLength: number = 160): string => {/* content */}
  if (description.length <= maxLength) {/* content */}
    return description;
  }
  
  const truncated = description.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('.');
  if (lastSentence > maxLength * 0.7) {/* content */}
    return truncated.substring(0, lastSentence + 1);
  }
  
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
};

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {/* content */}
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let description = '';
  for (const sentence of sentences) {/* content */}
    const candidate = description + sentence.trim() + '. ';
    if (candidate.length <= maxLength) {/* content */}
      description = candidate;
    } else {/* content */}
      break;
    }
  }
  
  return optimizeDescription(description.trim(), maxLength);
};

export const analyzeSEO = (content: string, title: string, description: string): SEOAnalysis => {/* content */}
  const metrics = analyzeContent(content);
  const keywords = extractKeywords(content);
  const suggestions: string[] = [];
  
  // Title analysis
  if (title.length < 30) {/* content */}
    suggestions.push('Title should be at least 30 characters long');
  } else if (title.length > 60) {/* content */}
    suggestions.push('Title should be less than 60 characters');
  }
  
  // Description analysis
  if (description.length < 120) {/* content */}
    suggestions.push('Description should be at least 120 characters long');
  } else if (description.length > 160) {/* content */}
    suggestions.push('Description should be less than 160 characters');
  }
  
  // Content analysis
  if (metrics.wordCount < 300) {/* content */}
    suggestions.push('Content should be at least 300 words for better SEO');
  }
  
  if (metrics.headings.length === 0) {/* content */}
    suggestions.push('Add headings (H1, H2, etc.) to improve content structure');
  }
  
  if (metrics.links.length === 0) {/* content */}
    suggestions.push('Add internal and external links to improve SEO');
  }
  
  // Keyword analysis
  const titleKeywords = extractKeywords(title, 5);
  const descriptionKeywords = extractKeywords(description, 5);
  const contentKeywords = keywords.slice(0, 10);
  
  const allKeywords = [...new Set([...titleKeywords, ...descriptionKeywords, ...contentKeywords])];
  
  return {/* content */}
    title,
    description,
    keywords: allKeywords,
    wordCount: metrics.wordCount,
    readingTime: metrics.readingTime,
    readabilityScore: calculateReadabilityScore(content),
    suggestions
  };
};

export const calculateReadabilityScore = (content: string): number => {/* content */}
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.split(/\s+/).filter(word => word.length > 0);
  if (sentences.length === 0 || words.length === 0) {/* content */}
    return 0;
  }
  
  const avgWordsPerSentence = words.length / sentences.length;
  const avgSyllablesPerWord = words.reduce((total, word) => {/* content */}
    return total + countSyllables(word);
  }, 0) / words.length;
  
  // Simplified Flesch Reading Ease formula
  const score = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
  return Math.max(0, Math.min(100, Math.round(score)));
};

export const countSyllables = (word: string): number => {/* content */}
  const vowels = 'aeiouy';
  let count = 0;
  let previousWasVowel = false;
  for (let i = 0; i < word.length; i++) {/* content */}
    const isVowel = vowels.includes(word[i].toLowerCase());
    if (isVowel && !previousWasVowel) {/* content */}
      count++;
    }
    previousWasVowel = isVowel;
  }
  
  // Handle silent 'e'
  if (word.endsWith('e') && count > 1) {/* content */}
    count--;
  }
  
  return Math.max(1, count);
};

export const generateStructuredData = (type: string, data: any): string => {/* content */}
  const schema = {/* content */}
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`
};
export const optimizeImages = (images: string[]): string[] => {/* content */}
  return images.map(image => {/* content */}
    // Add WebP format suggestion
    if (image.includes('.jpg') || image.includes('.jpeg') || image.includes('.png')) {/* content */}
      return image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return image;
  });
};

export const generateCanonicalUrl = (baseUrl: string, path: string): string => {/* content */}
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
};

export const validateUrl = (url: string): boolean => {/* content */}
  try {/* content */}
    new URL(url);
    return true;
  } catch {/* content */}
    return false;
  }
};

export const generateRobotsMeta = (index: boolean = true, follow: boolean = true): string => {/* content */}
  const directives: string[] = [];
  if (!index) directives.push('noindex');
  if (!follow) directives.push('nofollow');
  
  return directives.length > 0 ? directives.join(', ') : 'index, follow';
};