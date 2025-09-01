import React from 'react';'export const calculateRelevanceScore = (result, searchTerm) => {'export const debounceSearch = (func, delay) => {;
export const filterSearchResults = (results, filters) => {;
export const getSearchSuggestions = (searchHistory = [], export const highlightSearchTerms = (text, searchTerm) => {;
export const matchesSearchTerm = (text, searchTerm) => {;
export const performSearch = (data, export const sortSearchResults = (results, sortBy, searchTerm) => {;
export default {

/**
 * Highlight search terms in text with HTML mark tags*/
 */
export const highlightSearchTerms = (text, searchTerm) => {;

    if (!searchTerm.trim())
        return text;
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, \\$&');''    const regex = new RegExp(`(${escaped})`, gi');''    return text.replace(regex, <mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>);"};"`/**
 * Check if a text contains the search term (case-insensitive)*/
 */
export const matchesSearchTerm = (text, searchTerm) => {;

    if (!text || !searchTerm.trim())
        return false;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
};

/**
 * Calculate relevance score for search results*/
 */
export const calculateRelevanceScore = (result, searchTerm) => {;

    let score = 0;

    const term = searchTerm.toLowerCase();

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
    }
    // Category match
    if (result.category?.toLowerCase().includes(term)) {

        score += 15;
    }
    // Boost score based on rating
    if (result.rating) {

        score += result.rating * 2;
    }
    // Recent content gets slight boost
    if (result.date) {

        const dateScore = Math.max(0, 10 - (Date.now() - new Date(result.date).getTime()) / (1000 * 60 * 60 * 24 * 30));
        score += dateScore;
    }

    return score;
};

/**
 * Sort search results based on sort option*/
 */
export const sortSearchResults = (results, sortBy, searchTerm) => {;

    const sortedResults = [...results];
    
    switch (sortBy) {

        case 'price_asc': return sortedResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));'        case 'price_desc': return sortedResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));'        case 'rating': return sortedResults.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));'        case 'date': return sortedResults.sort((a, b) => {''                const dateA = a.date ? new Date(a.date).getTime() : 0;
                const dateB = b.date ? new Date(b.date).getTime() : 0;
                return dateB - dateA;
            });
        case 'alphabetical': return sortedResults.sort((a, b) => a.title.localeCompare(b.title));'        case 'relevance': default:'            return sortedResults.sort((a, b) => {'
                const scoreA = calculateRelevanceScore(a, searchTerm);
                const scoreB = calculateRelevanceScore(b, searchTerm);
                return scoreB - scoreA;
            });
    }
};

/**
 * Filter search results based on active filters*/
 */
export const filterSearchResults = (results, filters) => {;

    let filteredResults = [...results];
    
    // Filter by type
    if (filters.types.length > 0) {

        filteredResults = filteredResults.filter(result => filters.types.includes(result.type));
    }

    // Filter by category
    if (filters.category) {

        filteredResults = filteredResults.filter(result => result.category?.toLowerCase() === filters.category.toLowerCase());
    }

    // Filter by price range
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {

        filteredResults = filteredResults.filter(result => {

            const price = result.price ?? 0;
            if (filters.minPrice !== undefined && price < filters.minPrice) return false;
            if (filters.maxPrice !== undefined && price > filters.maxPrice) return false;
            return true;
        });
    }

    // Filter by rating
    if (filters.minRating) {

        filteredResults = filteredResults.filter(result => (result.rating ?? 0) >= filters.minRating);
    }

    return filteredResults;
};

/**
 * Perform search with filtering and sorting*/
 */'''export const performSearch = (data, searchTerm, filters = {}, sortBy = 'relevance') => {''    if (!searchTerm.trim()) {;

        return sortSearchResults(data, sortBy, searchTerm);
    }

    // Filter by search term
    const searchResults = data.filter(item => ;
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
 * Get search suggestions based on search history and popular terms*/
 */'''export const getSearchSuggestions = (searchHistory = [], popularTerms = [], currentInput = '') => {''    const suggestions = [];

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
 * Debounce search function to avoid excessive API calls*/
 */
export const debounceSearch = (func, delay) => {;

    let timeoutId;
    return (...args) => {

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};


    highlightSearchTerms, matchesSearchTerm,
    calculateRelevanceScore, sortSearchResults,
    filterSearchResults, performSearch,
    getSearchSuggestions, debounceSearch
};


'"`'"""`