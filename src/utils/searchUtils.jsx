import React from 'react';
export const calculateRelevanceScore = (result, searchTerm) => {
export const debounceSearch = (func, delay) => {
export const filterSearchResults = (results, filters) => {
export const getSearchSuggestions = (searchHistory = [],
export const highlightSearchTerms = (text, searchTerm) => {
export const matchesSearchTerm = (text, searchTerm) => {
export const performSearch = (data,
export const sortSearchResults = (results, sortBy, searchTerm) => {
export default {

/**
 * Highlight search terms in text with HTML mark tags
 */
export const highlightSearchTerms = (text, searchTerm) => {

    if (!searchTerm.trim())
        return text;
<<<<<<< HEAD
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g,\\$&');
    const regex = new RegExp(`(${escaped})`,gi');
    return text.replace(regex,<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>);
=======
    const escaped = searchTerm.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>');
>>>>>>> cursor/add-new-services-and-advertise-them-971c
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
<<<<<<< HEAD

    let score = 0;

    const term = searchTerm.toLowerCase();

    const title = result.title.toLowerCase();
    const description = result.description.toLowerCase();

=======
<<<<<<< HEAD
    const score = 0;
    const term = searchTerm.toLowerCase();
=======
    let score = 0;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const title = result.title.toLowerCase();
    const description = result.description.toLowerCase();
>>>>>>> cursor/add-new-services-and-advertise-them-971c
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
=======

>>>>>>> cursor/add-new-services-and-advertise-them-971c
    // Category match
    if (result.category?.toLowerCase().includes(term)) {

        score += 15;
<<<<<<< HEAD
    }
=======

>>>>>>> cursor/add-new-services-and-advertise-them-971c
    // Boost score based on rating
    if (result.rating) {

        score += result.rating * 2;
<<<<<<< HEAD
    }
=======

>>>>>>> cursor/add-new-services-and-advertise-them-971c
    // Recent content gets slight boost
    if (result.date) {

        const dateScore = Math.max(0, 10 - (Date.now() - new Date(result.date).getTime()) / (1000 * 60 * 60 * 24 * 30));
        score += dateScore;
<<<<<<< HEAD
    }
=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c

    return score;
};
/**
 * Sort search results based on sort option
 */
<<<<<<< HEAD
export const sortSearchResults = (results, sortBy, searchTerm) => {

    const sortedResults = [...results];
    
=======
export const sortedResults = [...results];
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    switch (sortBy) {

        case 'price_asc':
            return sortedResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        case 'price_desc':
            return sortedResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        case 'rating':
            return sortedResults.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        case 'date':
            return sortedResults.sort((a, b) => {
<<<<<<< HEAD

                const dateA = a.date ? new Date(a.date).getTime() : 0;
=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
                const dateB = b.date ? new Date(b.date).getTime() : 0;
                return dateB - dateA;
            });
        case 'alphabetical':
            return sortedResults.sort((a, b) => a.title.localeCompare(b.title));
        case 'relevance':
        default:
            return sortedResults.sort((a, b) => {
<<<<<<< HEAD

                const scoreA = calculateRelevanceScore(a, searchTerm);
                const scoreB = calculateRelevanceScore(b, searchTerm);
                return scoreB - scoreA;
            });
    }
};
=======
                const scoreB = calculateRelevanceScore(b, searchTerm);
                return scoreB - scoreA;
            });
>>>>>>> cursor/add-new-services-and-advertise-them-971c

};
/**
 * Filter search results based on active filters
 */
<<<<<<< HEAD
export const filterSearchResults = (results, filters) => {

    let filteredResults = [...results];
    
=======
export const filteredResults = [...results];
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    // Filter by type
    if (filters.types.length > 0) {

        filteredResults = filteredResults.filter(result => filters.types.includes(result.type));
<<<<<<< HEAD
    }
=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c

    // Filter by category
    if (filters.category) {

        filteredResults = filteredResults.filter(result => result.category?.toLowerCase() === filters.category.toLowerCase());
<<<<<<< HEAD
    }

    // Filter by price range
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {

=======

    // Filter by price range
    if (filters.minPrice > 0 || filters.maxPrice < 10000) {
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        filteredResults = filteredResults.filter(result => {

            const price = result.price ?? 0;
            return price >= filters.minPrice && price <= filters.maxPrice;
        });
<<<<<<< HEAD
    }

    // Filter by rating
    if (filters.minRating) {

        filteredResults = filteredResults.filter(result => (result.rating ?? 0) >= filters.minRating);
    }
=======

    // Filter by minimum rating
    if (filters.minRating > 0) {
        filteredResults = filteredResults.filter(result => (result.rating ?? 0) >= filters.minRating);
>>>>>>> cursor/add-new-services-and-advertise-them-971c

    return filteredResults;
};

/**
<<<<<<< HEAD
 * Perform search with filtering and sorting
 */'
export const performSearch = (data, searchTerm, filters = {}, sortBy = 'relevance') => {

    if (!searchTerm.trim()) {

        return sortSearchResults(data, sortBy, searchTerm);
    }

    // Filter by search term
    const searchResults = data.filter(item => 
        matchesSearchTerm(item.title, searchTerm) ||
        matchesSearchTerm(item.description, searchTerm) ||
        matchesSearchTerm(item.category, searchTerm) ||
        (item.tags && item.tags.some(tag => matchesSearchTerm(tag, searchTerm)))
    );

    // Apply additional filters
    const filteredResults = filterSearchResults(searchResults, filters);

    // Sort results
    return sortSearchResults(filteredResults, sortBy, searchTerm);
};

/**
 * Get search suggestions based on search history and popular terms
 */'
export const getSearchSuggestions = (searchHistory = [], popularTerms = [], currentInput = '') => {

    const suggestions = [];

    // Add matching search history
    if (currentInput) {

        const matchingHistory = searchHistory;
            .filter(term => term.toLowerCase().includes(currentInput.toLowerCase()))
            .slice(0, 3);
        suggestions.push(...matchingHistory);
    }

    // Add popular terms if no current input
    if (!currentInput) {

        suggestions.push(...popularTerms.slice(0, 5));
    }

    // Remove duplicates and limit results
    return [...new Set(suggestions)].slice(0, 5);
};

/**
 * Debounce search function to avoid excessive API calls
 */
export const debounceSearch = (func, delay) => {

    let timeoutId;
    return (...args) => {

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
=======
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
/**
 * Calculate search metrics for analytics
 */
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
/**
 * Debounce function for search input
 */
export const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    };
};
/**
 * Extract keywords from search query for better matching
 */
export const extractKeywords = (query) => {
    return query
        .toLowerCase()
        .split(/[\s,.-]+/)
        .filter(word => word.length > 2)
        .filter(word => !['and', 'or', 'the', 'for', 'with', 'from'].includes(word));
};
/**
 * Format search query for display
 */
export const formatSearchQuery = (query) => {
    return query.trim().replace(/\s+/g, ' ');
};
/**
 * Check if filters are active (not default values)
 */
export const hasActiveFilters = (filters) => {
    return (filters.types.length > 0 ||
        filters.category !== '' ||
        filters.minPrice > 0 ||
        filters.maxPrice < 10000 ||
        filters.minRating > 0 ||
        filters.sort !== 'relevance');
};
/**
 * Get filter count for display
 */
export const getActiveFilterCount = (filters) => {
    const count = 0;
    if (filters.types.length > 0)
        count += filters.types.length;
    if (filters.category)
        count += 1;
    if (filters.minPrice > 0 || filters.maxPrice < 10000)
        count += 1;
    if (filters.minRating > 0)
        count += 1;
    if (filters.sort !== 'relevance')
        count += 1;
    return count;
};
/**
 * Reset filters to default values
 */
export const getDefaultFilters = () => ({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
});
export default {

    highlightSearchTerms,
    matchesSearchTerm,
    calculateRelevanceScore,
    sortSearchResults,
    filterSearchResults,
<<<<<<< HEAD
    performSearch,
    getSearchSuggestions,
    debounceSearch
};


'"`
=======
    generateDynamicSuggestions,
    calculateSearchMetrics,
    debounce,
    extractKeywords,
    formatSearchQuery,
    hasActiveFilters,
    getActiveFilterCount,
    getDefaultFilters
};
<<<<<<< HEAD
}}}}}}}}}}}
=======

export default for;
export default for;
export default for;
export default for;
export default for;
export default for;
export default for;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> cursor/add-new-services-and-advertise-them-971c
