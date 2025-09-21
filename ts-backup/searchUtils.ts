export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "product" | "talent" | "blog" | "service" | "doc";
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];
  date?: string;
}

export interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;
}

export interface SearchSuggestion {
  text: string;
  type: "recent" | "category" | "tag" | "popular";
  id: string;
}

/**
 * Highlight search terms in text with HTML mark tags
 */
export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return text;
  const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return text.replace(regex, "<mark class=\"bg-yellow-200 text-black px-1 rounded\">$1</mark>");
};

/**
 * Check if a text contains the search term (case-insensitive)
 */
export const matchesSearchTerm = (text: string | undefined, searchTerm: string): boolean => {
  if (!text || !searchTerm.trim()) return false;
  return text.toLowerCase().includes(searchTerm.toLowerCase());
};

/**
 * Calculate search relevance score based on multiple factors
 */
export const calculateRelevanceScore = (
  item: SearchResult,
  searchTerm: string
): number => {
  let score = 0;
  const term = searchTerm.toLowerCase();

  // Title match (highest weight)
  if (item.title.toLowerCase().includes(term)) {
    score += 10;
    if (item.title.toLowerCase().startsWith(term)) {
      score += 5; // Bonus for title starting with search term
    }
  }

  // Description match
  if (item.description.toLowerCase().includes(term)) {
    score += 5;
  }

  // Category match
  if (item.category && item.category.toLowerCase().includes(term)) {
    score += 3;
  }

  // Tags match
  if (item.tags) {
    const tagMatches = item.tags.filter(tag => 
      tag.toLowerCase().includes(term)
    ).length;
    score += tagMatches * 2;
  }

  // Type match
  if (item.type.toLowerCase().includes(term)) {
    score += 2;
  }

  return score;
};

/**
 * Sort search results by relevance and other factors
 */
export const sortSearchResults = (
  results: SearchResult[]
  searchTerm: string,
  sortBy: string = "relevance"
): SearchResult[] => {
  const sortedResults = [...results];

  switch (sortBy) {
    case "relevance":
      return sortedResults.sort((a, b) => {
        const scoreA = calculateRelevanceScore(a, searchTerm);
        const scoreB = calculateRelevanceScore(b, searchTerm);
        return scoreB - scoreA;
      });

    case "price-low":
      return sortedResults.sort((a, b) => (a.price || 0) - (b.price || 0));

    case "price-high":
      return sortedResults.sort((a, b) => (b.price || 0) - (a.price || 0));

    case "rating":
      return sortedResults.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    case "date-newest":
      return sortedResults.sort((a, b) => {
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateB - dateA;
      });

    case "date-oldest":
      return sortedResults.sort((a, b) => {
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateA - dateB;
      });

    default:
      return sortedResults;
  }
};

/**
 * Filter search results based on criteria
 */
export const filterSearchResults = (
  results: SearchResult[]
  filters: SearchFilters
): SearchResult[] => {
  return results.filter(item => {
    // Type filter
    if (filters.types.length > 0 && !filters.types.includes(item.type)) {
      return false;
    }

    // Category filter
    if (filters.category && item.category !== filters.category) {
      return false;
    }

    // Price filter
    if (item.price !== undefined) {
      if (item.price < filters.minPrice || item.price > filters.maxPrice) {
        return false;
      }
    }

    // Rating filter
    if (item.rating !== undefined && item.rating < filters.minRating) {
      return false;
    }

    return true;
  });
};

/**
 * Generate search suggestions based on query and available data
 */
export const generateDynamicSuggestions = (
  query: string,
  recentSearches: string[] = []
  availableCategories: string[] = []
  availableTags: string[] = []
): SearchSuggestion[] => {
  const suggestions: SearchSuggestion[] = [];
  const lowerQuery = query.toLowerCase();

  // Add current query as recent search suggestion
  if (query.trim()) {
    suggestions.push({
      text: query,
      type: "recent",
      id: `query-${query}`
    });
  }

  // Category suggestions
  availableCategories
    .filter(category => category.toLowerCase().includes(lowerQuery))
    .slice(0, 3)
    .forEach(category => {
      suggestions.push({
        text: category,
        type: "category",
        id: `category-${category}`
      });
    });

  // Tag suggestions
  availableTags
    .filter(tag => tag.toLowerCase().includes(lowerQuery))
    .slice(0, 3)
    .forEach(tag => {
      suggestions.push({
        text: tag,
        type: "tag",
        id: `tag-${tag}`
      });
    });

  // Recent searches suggestions
  recentSearches
    .filter(search => search.toLowerCase().includes(lowerQuery) && search !== query)
    .slice(0, 3)
    .forEach(search => {
      suggestions.push({
        text: search,
        type: "recent",
        id: `recent-${search}`
      });
    });

  return suggestions;
};

/**
 * Perform fuzzy search on a collection of items
 */
export const fuzzySearch = (
  items: SearchResult[]
  searchTerm: string,
  threshold: number = 0.6
): SearchResult[] => {
  if (!searchTerm.trim()) return items;

  const term = searchTerm.toLowerCase();
  const results: Array<{ item: SearchResult; score: number }> = [];

  items.forEach(item => {
    const searchableText = [
      item.title,
      item.description,
      item.category,
      ...(item.tags || [])
    ].join(" ").toLowerCase();

    // Simple fuzzy matching based on character sequence
    const score = calculateFuzzyScore(searchableText, term);
    
    if (score >= threshold) {
      results.push({ item, score });
    }
  });

  return results
    .sort((a, b) => b.score - a.score)
    .map(result => result.item);
};

/**
 * Calculate fuzzy matching score between two strings
 */
const calculateFuzzyScore = (text: string, pattern: string): number => {
  if (pattern.length === 0) return 1;
  if (text.length === 0) return 0;

  let matches = 0;
  let patternIndex = 0;

  for (let i = 0; i < text.length && patternIndex < pattern.length; i++) {
    if (text[i] === pattern[patternIndex]) {
      matches++;
      patternIndex++;
    }
  }

  return patternIndex === pattern.length ? matches / pattern.length : 0;
};

/**
 * Default search filters
 */
export const defaultSearchFilters: SearchFilters = {
  types: []
  category: "",
  minPrice: 0,
  maxPrice: 10000,
  minRating: 0,
  sort: "relevance"
};

export default {
  highlightSearchTerms,
  matchesSearchTerm,
  calculateRelevanceScore,
  sortSearchResults,
  filterSearchResults,
  generateDynamicSuggestions,
  fuzzySearch,
  defaultSearchFilters
};