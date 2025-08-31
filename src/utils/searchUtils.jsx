/**
 * Highlight search terms in text with HTML mark tags
 */
export const highlightSearchTerms = (text, searchTerm) => {
    if (!searchTerm.trim())
        return text;
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>');
};

/**
 * Check if a text contains the search term (case-insensitive)
 */
export const matchesSearchTerm = (text, searchTerm) => {
    if (!text || !searchTerm.trim())
        return false;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
};

/**
 * Calculate relevance score for search results
 */
export const calculateRelevanceScore = (result, searchTerm) => {
    let score = 0;
<<<<<<< HEAD
    const term = searchTerm.toLowerCase();
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    const title = result.title.toLowerCase();
    const description = result.description.toLowerCase();
    
    // Exact title match gets highest score
    if (title === term)
        score += 100;
    // Title starts with search term
    else if (title.startsWith(term))
        score += 80;
    // Title contains search term
    else if (title.includes(term))
        score += 60;
    // Description contains search term
    if (description.includes(term))
        score += 30;
    // Tag matches
    if (result.tags?.some(tag => tag.toLowerCase().includes(term))) {
        score += 20;
<<<<<<< HEAD
    }
    // Category match
    if (result.category?.toLowerCase().includes(term)) {
        score += 15;
    }
    // Boost score based on rating
    if (result.rating) {
        score += result.rating * 2;
    }
=======
    // Category match
    if (result.category?.toLowerCase().includes(term)) {
        score += 15;
    // Boost score based on rating
    if (result.rating) {
        score += result.rating * 2;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    // Recent content gets slight boost
    if (result.date) {
        const dateScore = Math.max(0, 10 - (Date.now() - new Date(result.date).getTime()) / (1000 * 60 * 60 * 24 * 30));
        score += dateScore;
<<<<<<< HEAD
    }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    return score;
};

/**
 * Sort search results based on sort option
 */
export const sortResults = (results, sortBy, searchTerm) => {
    const sortedResults = [...results];
    switch (sortBy) {
        case 'price_asc':
            return sortedResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        case 'price_desc':
            return sortedResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        case 'rating':
            return sortedResults.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        case 'date':
            return sortedResults.sort((a, b) => {
                const dateA = a.date ? new Date(a.date).getTime() : 0;
                const dateB = b.date ? new Date(b.date).getTime() : 0;
                return dateB - dateA;
            });
        case 'alphabetical':
            return sortedResults.sort((a, b) => a.title.localeCompare(b.title));
        case 'relevance':
        default:
            return sortedResults.sort((a, b) => {
                const scoreA = calculateRelevanceScore(a, searchTerm);
                const scoreB = calculateRelevanceScore(b, searchTerm);
                return scoreB - scoreA;
            });
<<<<<<< HEAD
    }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
};

/**
 * Filter search results based on active filters
 */
export const filterResults = (results, filters) => {
    let filteredResults = [...results];
    
    // Filter by type
    if (filters.types.length > 0) {
        filteredResults = filteredResults.filter(result => filters.types.includes(result.type));
<<<<<<< HEAD
    }
    
    // Filter by category
    if (filters.category) {
        filteredResults = filteredResults.filter(result => result.category?.toLowerCase() === filters.category.toLowerCase());
    }
    
=======
    // Filter by category
    if (filters.category) {
        filteredResults = filteredResults.filter(result => result.category?.toLowerCase() === filters.category.toLowerCase());
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    // Filter by price range
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
        filteredResults = filteredResults.filter(result => {
            const price = result.price ?? 0;
            if (filters.minPrice !== undefined && price < filters.minPrice) return false;
            if (filters.maxPrice !== undefined && price > filters.maxPrice) return false;
            return true;
        });
<<<<<<< HEAD
    }
    
    // Filter by rating
    if (filters.minRating !== undefined) {
        filteredResults = filteredResults.filter(result => (result.rating ?? 0) >= filters.minRating);
    }
    
    return filteredResults;
};

=======
    // Filter by minimum rating
    if (filters.minRating > 0) {
        filteredResults = filteredResults.filter(result => (result.rating ?? 0) >= filters.minRating);
    return filteredResults;
};
/**
 * Generate search suggestions based on query
 */
export const generateDynamicSuggestions = (query, recentSearches = [], availableCategories = [], availableTags = []) => {
    const suggestions = [];
    const lowerQuery = query.toLowerCase();
    // Add exact query as first suggestion
    if (query.trim()) {
        suggestions.push({
            text: query,
            type: 'recent',
            id: `query-${query}`
        });
    // Add matching categories
    availableCategories
        .filter(category => category.toLowerCase().includes(lowerQuery))
        .slice(0, 3)
        .forEach(category => {
        suggestions.push({
            text: category,
            type: 'category',
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
            type: 'tag',
            id: `tag-${tag}`
        });
    });
    // Add recent searches that match
    recentSearches
        .filter(search => search.toLowerCase().includes(lowerQuery) && search !== query)
        .slice(0, 3)
        .forEach(search => {
        suggestions.push({
            text: search,
            type: 'recent',
            id: `recent-${search}`
        });
    });
    return suggestions.slice(0, 8); // Limit to 8 suggestions
};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
/**
 * Perform fuzzy search on text
 */
<<<<<<< HEAD
export const fuzzySearch = (text, searchTerm) => {
    if (!text || !searchTerm) return false;
    
    const textLower = text.toLowerCase();
    const termLower = searchTerm.toLowerCase();
    
    let termIndex = 0;
    for (let i = 0; i < textLower.length && termIndex < termLower.length; i++) {
        if (textLower[i] === termLower[termIndex]) {
            termIndex++;
        }
    }
    
    return termIndex === termLower.length;
};

=======
export const calculateSearchMetrics = (results, searchTime) => {
    const totalResults = results.length;
    // Calculate top categories
    const categoryCount = new Map();
    results.forEach(result => {
        if (result.category) {
            categoryCount.set(result.category, (categoryCount.get(result.category) || 0) + 1);
    });
    const topCategories = Array.from(categoryCount.entries())
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    // Calculate average price
    const pricesResults = results.filter(r => r.price && r.price > 0);
    const averagePrice = pricesResults.length > 0
        ? pricesResults.reduce((sum, r) => sum + (r.price || 0), 0) / pricesResults.length
        : 0;
    // Calculate average rating
    const ratedResults = results.filter(r => r.rating && r.rating > 0);
    const averageRating = ratedResults.length > 0
        ? ratedResults.reduce((sum, r) => sum + (r.rating || 0), 0) / ratedResults.length
        : 0;
    return {
        totalResults,
        searchTime,
        topCategories,
        averagePrice,
        averageRating
    };
};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
/**
 * Get search suggestions based on input
 */
export const getSearchSuggestions = (query, suggestions, maxResults = 5) => {
    if (!query.trim()) return [];
    
    const queryLower = query.toLowerCase();
    const matches = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(queryLower)
    );
    
    return matches.slice(0, maxResults);
};

export default {
    highlightSearchTerms,
    matchesSearchTerm,
    calculateRelevanceScore,
    sortResults,
    filterResults,
    fuzzySearch,
    getSearchSuggestions
};
<<<<<<< HEAD
=======
export default for;
export default for;
export default for;
export default for;
export default for;
export default for;
export default for;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
