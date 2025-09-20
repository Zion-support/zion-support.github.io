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
  type: "recent" | "category" | "tag" | "product";
  id: string;
}

/**
 * Highlight search terms in text with HTML mark tags
 */
export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return text;
  
  const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  
  return text.replace(regex, "<mark>$1</mark>");
};

/**
 * Calculate search relevance score based on multiple factors
 */
export const calculateRelevanceScore = (
  result: SearchResult,
  query: string,
  filters: SearchFilters
): number => {
  const queryLower = query.toLowerCase();
  const titleLower = result.title.toLowerCase();
  const descriptionLower = result.description.toLowerCase();
  const tagsLower = result.tags?.join(" ").toLowerCase() || "";
  
  let score = 0;
  
  // Exact title match gets highest score
  if (titleLower === queryLower) {
    score += 100;
  } else if (titleLower.includes(queryLower)) {
    score += 80;
  }
  
  // Description match
  if (descriptionLower.includes(queryLower)) {
    score += 40;
  }
  
  // Tag match
  if (tagsLower.includes(queryLower)) {
    score += 30;
  }
  
  // Type filter match
  if (filters.types.includes(result.type)) {
    score += 20;
  }
  
  // Category filter match
  if (filters.category && result.category === filters.category) {
    score += 15;
  }
  
  // Price range match
  if (result.price) {
    if (result.price >= filters.minPrice && result.price <= filters.maxPrice) {
      score += 10;
    }
  }
  
  // Rating match
  if (result.rating && result.rating >= filters.minRating) {
    score += 5;
  }
  
  return score;
};

/**
 * Sort search results based on filters
 */
export const sortSearchResults = (
  results: SearchResult[],
  sortBy: string
): SearchResult[] => {
  switch (sortBy) {
    case "price-low":
      return [...results].sort((a, b) => (a.price || 0) - (b.price || 0));
    case "price-high":
      return [...results].sort((a, b) => (b.price || 0) - (a.price || 0));
    case "rating":
      return [...results].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case "newest":
      return [...results].sort((a, b) => 
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
      );
    case "oldest":
      return [...results].sort((a, b) => 
        new Date(a.date || "").getTime() - new Date(b.date || "").getTime()
      );
    default:
      return results; // Keep original relevance order
  }
};

/**
 * Generate dynamic search suggestions based on query and available data
 */
export const generateDynamicSuggestions = (
  query: string,
  recentSearches: string[] = [],
  availableCategories: string[] = [],
  availableTags: string[] = []
): SearchSuggestion[] => {
  const suggestions: SearchSuggestion[] = [];
  const lowerQuery = query.toLowerCase();

  // Add exact query as first suggestion
  if (query.trim()) {
    suggestions.push({
      text: query,
      type: "recent",
      id: `query-${query}`
    });
  }

  // Add matching categories
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

  // Add matching tags
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

  // Add matching recent searches
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

  return suggestions.slice(0, 8); // Limit to 8 suggestions
};

/**
 * Filter search results based on applied filters
 */
export const filterSearchResults = (
  results: SearchResult[],
  filters: SearchFilters
): SearchResult[] => {
  return results.filter(result => {
    // Type filter
    if (filters.types.length > 0 && !filters.types.includes(result.type)) {
      return false;
    }
    
    // Category filter
    if (filters.category && result.category !== filters.category) {
      return false;
    }
    
    // Price range filter
    if (result.price) {
      if (result.price < filters.minPrice || result.price > filters.maxPrice) {
        return false;
      }
    }
    
    // Rating filter
    if (result.rating && result.rating < filters.minRating) {
      return false;
    }
    
    return true;
  });
};

/**
 * Perform full text search with ranking and filtering
 */
export const performSearch = (
  query: string,
  results: SearchResult[],
  filters: SearchFilters = {
    types: [],
    category: "",
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: "relevance"
  }
): SearchResult[] => {
  // Filter results first
  let filteredResults = filterSearchResults(results, filters);
  
  // Calculate relevance scores
  const scoredResults = filteredResults.map(result => ({
    ...result,
    relevanceScore: calculateRelevanceScore(result, query, filters)
  }));
  
  // Sort by relevance score (highest first)
  scoredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  // Apply additional sorting if specified
  if (filters.sort !== "relevance") {
    return sortSearchResults(scoredResults, filters.sort);
  }
  
  return scoredResults;
};

/**
 * Extract search query parameters from URL
 */
export const parseSearchParams = (searchParams: URLSearchParams): SearchFilters => {
  return {
    types: searchParams.get("types")?.split(",") || [],
    category: searchParams.get("category") || "",
    minPrice: parseInt(searchParams.get("minPrice") || "0"),
    maxPrice: parseInt(searchParams.get("maxPrice") || "10000"),
    minRating: parseInt(searchParams.get("minRating") || "0"),
    sort: searchParams.get("sort") || "relevance"
  };
};

/**
 * Build search URL with current filters
 */
export const buildSearchUrl = (
  query: string,
  filters: SearchFilters,
  basePath: string = "/search"
): string => {
  const params = new URLSearchParams();
  
  if (query) params.set("q", query);
  if (filters.types.length > 0) params.set("types", filters.types.join(","));
  if (filters.category) params.set("category", filters.category);
  if (filters.minPrice > 0) params.set("minPrice", filters.minPrice.toString());
  if (filters.maxPrice < 10000) params.set("maxPrice", filters.maxPrice.toString());
  if (filters.minRating > 0) params.set("minRating", filters.minRating.toString());
  if (filters.sort !== "relevance") params.set("sort", filters.sort);
  
  const queryString = params.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
};

// Default export for backward compatibility
export default {
  highlightSearchTerms,
  calculateRelevanceScore,
  sortSearchResults,
  generateDynamicSuggestions,
  filterSearchResults,
  performSearch,
  parseSearchParams,
  buildSearchUrl
};