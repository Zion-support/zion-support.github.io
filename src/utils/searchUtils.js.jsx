<<<<<<< HEAD
import React from 'react';
export const calculateRelevanceScore = (result, searchTerm) => {
export const calculateSearchMetrics = (results, searchTime) => {
export const debounce = (func, wait) => {
export const extractKeywords = (query) => {
export const filteredResults = [...results];
export const formatSearchQuery = (query) => {
export const generateDynamicSuggestions = (query, recentSearches = [], availableCategories = [], availableTags = []) => {
export const getActiveFilterCount = (filters) => {
export const getDefaultFilters = () => ({
export const hasActiveFilters = (filters) => {
export const highlightSearchTerms = (text, searchTerm) => {
export const matchesSearchTerm = (text, searchTerm) => {
export const sortedResults = [...results];
export default {
export default for;
export default for;


=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
/**
 * Highlight search terms in text with HTML mark tags
 */
export const highlightSearchTerms = (text, searchTerm) => {
<<<<<<< HEAD

    if (!searchTerm.trim())
        return text;
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g,\\$&');
    const regex = new RegExp(`(${escaped})`,gi');
    return text.replace(regex,<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>);
=======
    if (!searchTerm.trim())
        return text;
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>');
>>>>>>> cursor/add-new-services-and-advertise-them-971c
};
/**
 * Check if a text contains the search term (case-insensitive)
 */
export const matchesSearchTerm = (text, searchTerm) => {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
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
    const title = result.title.toLowerCase () ;
    const description = result.description.toLowerCase () ;
    // Exact title match gets highest score
    if (title === term) score += 100;
    // Title starts with search term
    else if (title.startsWith (term) ) score += 80;
    // Title contains search term
    else if (title.includes (term) ) score += 60;
    // Description contains search term
    if (description.includes (term) ) score += 30;
    // Tag matches
    if (result.tags?.some(tag => tag.toLowerCase().includes(term))) {

=======
    let score = 0;
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
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        score += 20;
    }
    // Category match
    if (result.category?.toLowerCase().includes(term)) {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        score += 15;
    }
    // Boost score based on rating
    if (result.rating) {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        score += result.rating * 2;
    }
    // Recent content gets slight boost
    if (result.date) {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        const dateScore = Math.max(0, 10 - (Date.now() - new Date(result.date).getTime()) / (1000 * 60 * 60 * 24 * 30));
        score += dateScore;
    }
    return score;
};
/**
 * Sort search results based on sort option
 */
<<<<<<< HEAD
    switch (sortBy) {

=======
export const sortedResults = [...results];
    switch (sortBy) {
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        case 'price_asc':
            return sortedResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        case 'price_desc':
            return sortedResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        case 'rating':
            return sortedResults.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        case 'date':
            return sortedResults.sort((a, b) => {
<<<<<<< HEAD

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

                const scoreB = calculateRelevanceScore(b, searchTerm);
                return scoreB - scoreA;
            }) ;
=======
                const scoreB = calculateRelevanceScore(b, searchTerm);
                return scoreB - scoreA;
            });
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    }
};
/**
 * Filter search results based on active filters
 */
<<<<<<< HEAD
    // Filter by type
    if (filters.types.length > 0) {

=======
export const filteredResults = [...results];
    // Filter by type
    if (filters.types.length > 0) {
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        filteredResults = filteredResults.filter(result => filters.types.includes(result.type));
    }
    // Filter by category
    if (filters.category) {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        filteredResults = filteredResults.filter(result => result.category?.toLowerCase() === filters.category.toLowerCase());
    }
    // Filter by price range
    if (filters.minPrice > 0 || filters.maxPrice < 10000) {
<<<<<<< HEAD

        filteredResults = filteredResults.filter(result => {

            const price = result.price ?? 0;
            return price >= filters.minPrice && price <= filters.maxPrice;
        }) ;
    }
    // Filter by minimum rating
    if (filters.minRating > 0) {

=======
        filteredResults = filteredResults.filter(result => {
            const price = result.price ?? 0;
            return price >= filters.minPrice && price <= filters.maxPrice;
        });
    }
    // Filter by minimum rating
    if (filters.minRating > 0) {
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        filteredResults = filteredResults.filter(result => (result.rating ?? 0) >= filters.minRating);
    }
    return filteredResults;
};
/**
 * Generate search suggestions based on query
 */
export const generateDynamicSuggestions = (query, recentSearches = [], availableCategories = [], availableTags = []) => {
<<<<<<< HEAD

    const suggestions = [];
    const lowerQuery = query.toLowerCase () ;
    // Add exact query as first suggestion
    if (query.trim()) {

        suggestions.push({

            text: query,
            type: 'recent',`
            id: `query-${query}`
        }) ;
=======
    const suggestions = [];
    const lowerQuery = query.toLowerCase();
    // Add exact query as first suggestion
    if (query.trim()) {
        suggestions.push({
            text: query,
            type: 'recent',
            id: `query-${query}`
        });
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    }
    // Add matching categories
    availableCategories
        .filter(category => category.toLowerCase().includes(lowerQuery))
        .slice(0, 3)
        .forEach(category => {
<<<<<<< HEAD

        suggestions.push({

            text: category,
            type: 'category',`
            id: `category-${category}`
        }) ;
    }) ;
=======
        suggestions.push({
            text: category,
            type: 'category',
            id: `category-${category}`
        });
    });
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    // Add matching tags
    availableTags
        .filter(tag => tag.toLowerCase().includes(lowerQuery))
        .slice(0, 3)
        .forEach(tag => {
<<<<<<< HEAD

        suggestions.push({

            text: tag,
            type: 'tag',`
            id: `tag-${tag}`
        }) ;
    }) ;
=======
        suggestions.push({
            text: tag,
            type: 'tag',
            id: `tag-${tag}`
        });
    });
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    // Add recent searches that match
    recentSearches
        .filter(search => search.toLowerCase().includes(lowerQuery) && search !== query)
        .slice(0, 3)
        .forEach(search => {
<<<<<<< HEAD

        suggestions.push({

            text: search,
            type: 'recent',`
            id: `recent-${search}`
        }) ;
    }) ;
    return suggestions.slice (0, 8) ; // Limit to 8 suggestions
=======
        suggestions.push({
            text: search,
            type: 'recent',
            id: `recent-${search}`
        });
    });
    return suggestions.slice(0, 8); // Limit to 8 suggestions
>>>>>>> cursor/add-new-services-and-advertise-them-971c
};
/**
 * Calculate search metrics for analytics
 */
export const calculateSearchMetrics = (results, searchTime) => {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    const totalResults = results.length;
    // Calculate top categories
    const categoryCount = new Map();
    results.forEach(result => {
<<<<<<< HEAD

        if (result.category) {

            categoryCount.set(result.category, (categoryCount.get(result.category) || 0) + 1);
        }
    }) ;
    const topCategories = Array.from (categoryCount.entries () ) .map ( ([category, count]) => ({ category, count }) ) .sort ( (a, b) => b.count - a.count) .slice (0, 5) ;
    // Calculate average price
    const pricesResults = results.filter (r => r.price && r.price > 0) ;
    const averagePrice = pricesResults.length > 0
        ? pricesResults.reduce ( (sum, r) => sum + (r.price || 0) , 0) / pricesResults.length
        : 0;
    // Calculate average rating
    const ratedResults = results.filter (r => r.rating && r.rating > 0) ;
    const averageRating = ratedResults.length > 0
        ? ratedResults.reduce ( (sum, r) => sum + (r.rating || 0) , 0) / ratedResults.length
        : 0;
    return {

=======
        if (result.category) {
            categoryCount.set(result.category, (categoryCount.get(result.category) || 0) + 1);
        }
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
>>>>>>> cursor/add-new-services-and-advertise-them-971c
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
<<<<<<< HEAD

    let timeout;
    return (...args) => {

=======
    let timeout;
    return (...args) => {
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};
/**
 * Extract keywords from search query for better matching
 */
export const extractKeywords = (query) => {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    return query
        .toLowerCase()
        .split(/[\s,.-]+/)
        .filter(word => word.length > 2)
<<<<<<< HEAD
        .filter(word => !['and',or',the',for',with',from'].includes(word));
=======
        .filter(word => !['and', 'or', 'the', 'for', 'with', 'from'].includes(word));
>>>>>>> cursor/add-new-services-and-advertise-them-971c
};
/**
 * Format search query for display
 */
export const formatSearchQuery = (query) => {
<<<<<<< HEAD

    return query.trim().replace(/\s+/g,);
=======
    return query.trim().replace(/\s+/g, ' ');
>>>>>>> cursor/add-new-services-and-advertise-them-971c
};
/**
 * Check if filters are active (not default values)
 */
export const hasActiveFilters = (filters) => {
<<<<<<< HEAD

    return (filters.types.length > 0 ||'
        filters.category !== '' ||
        filters.minPrice > 0 ||
        filters.maxPrice < 10000 ||
        filters.minRating > 0 ||'
=======
    return (filters.types.length > 0 ||
        filters.category !== '' ||
        filters.minPrice > 0 ||
        filters.maxPrice < 10000 ||
        filters.minRating > 0 ||
>>>>>>> cursor/add-new-services-and-advertise-them-971c
        filters.sort !== 'relevance');
};
/**
 * Get filter count for display
 */
export const getActiveFilterCount = (filters) => {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    let count = 0;
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
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
});
export default {
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
    highlightSearchTerms,
    matchesSearchTerm,
    calculateRelevanceScore,
    sortSearchResults,
    filterSearchResults,
    generateDynamicSuggestions,
    calculateSearchMetrics,
    debounce,
    extractKeywords,
    formatSearchQuery,
    hasActiveFilters,
    getActiveFilterCount,
    getDefaultFilters
};

export default for;
<<<<<<< HEAD
export default for;'"`
=======
export default for;
>>>>>>> cursor/add-new-services-and-advertise-them-971c
