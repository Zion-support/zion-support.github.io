import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar";
import { ProductListingCard } from "@/components/ProductListingCard";
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData";
import { generateRandomListing } from "@/utils/generateRandomListing";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Marketplace() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProductTypes, setSelectedProductTypes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState(() => localStorage.getItem('marketplaceView') || 'grid');

    // Automatically append a new listing every 2 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            setListings(prev => [...prev, generateRandomListing()]);
        }, 120000); // 2 minutes
        return () => clearInterval(interval);
    }, []);

    const searchSuggestions = generateSearchSuggestions();
    const filterOptions = useMemo(() => generateFilterOptions(listings), [listings]);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timeout);
    }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);

    useEffect(() => {
        localStorage.setItem('marketplaceView', view);
    }, [view]);

    // Filter listings based on selected filters
    const filteredListings = listings.filter(listing => {
        // Search filter
        if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
            return false;
        }
        // Product type filter
        if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {
            return false;
        }
        // Location filter
        if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {
            return false;
        }
        // Availability filter
        if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {
            return false;
        }
        // Rating filter
        if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {
            return false;
        }
        return true;
    });

    const handleFilterChange = (filterType, value) => {
        console.log(`Filter changed: ${filterType} = ${value}`);
        switch (filterType) {
            case 'productTypes':
                setSelectedProductTypes(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
            case 'locations':
                setSelectedLocations(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
            case 'availability':
                setSelectedAvailability(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
        }
    };

    const clearAllFilters = () => {
        setSearchQuery("");
        setSelectedProductTypes([]);
        setSelectedLocations([]);
        setSelectedAvailability([]);
        setSelectedRating(null);
    };

    // Handle requesting a quote
    const handleRequestQuote = (listingId) => {
        const listing = listings.find(item => item.id === listingId);
        if (listing) {
            toast({
                title: "Quote Requested",
                description: `Your quote request for ${listing.title} has been sent.`
            });
            // Navigate to the quote request page with the listing information
            navigate("/request-quote", {
                state: {
                    listing: listing
                }
            });
        }
    };

    return (
        <main className="flex-grow container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>
                <p className="text-zion-slate-light">
                    Discover professional services and products for your AI and tech projects.
                    Browse our curated collection of solutions from verified providers.
                </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
                <EnhancedSearchInput
                    value={searchQuery}
                    onChange={setSearchQuery}
                    suggestions={searchSuggestions}
                    placeholder="Search for AI services, tech products, or solutions..."
                />
            </div>

            {/* Active Filters */}
            {(selectedProductTypes.length > 0 || selectedLocations.length > 0 || selectedAvailability.length > 0 || selectedRating) && (
                <ActiveFiltersBar
                    filters={{
                        productTypes: selectedProductTypes,
                        locations: selectedLocations,
                        availability: selectedAvailability,
                        rating: selectedRating
                    }}
                    onRemove={handleFilterChange}
                    onClearAll={clearAllFilters}
                />
            )}

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filter Sidebar */}
                <FilterSidebar
                    options={filterOptions}
                    selectedFilters={{
                        productTypes: selectedProductTypes,
                        locations: selectedLocations,
                        availability: selectedAvailability,
                        rating: selectedRating
                    }}
                    onFilterChange={handleFilterChange}
                    onClearAll={clearAllFilters}
                />

                {/* Main Content */}
                <div className="flex-1">
                    {/* View Toggle and Results Count */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-zion-slate-light">
                                {filteredListings.length} {filteredListings.length === 1 ? 'result' : 'results'} found
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant={view === 'grid' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setView('grid')}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={view === 'list' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setView('list')}
                            >
                                <ListFilter className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-zion-cyan" />
                        </div>
                    )}

                    {/* Results */}
                    {!isLoading && (
                        <>
                            {filteredListings.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-zion-slate-light mb-4">No results found for your search criteria.</p>
                                    <Button onClick={clearAllFilters} variant="outline">
                                        Clear All Filters
                                    </Button>
                                </div>
                            ) : (
                                <div className={`grid gap-6 ${
                                    view === 'grid' 
                                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                                        : 'grid-cols-1'
                                }`}>
                                    {filteredListings.map((listing) => (
                                        <ProductListingCard
                                            key={listing.id}
                                            listing={listing}
                                            view={view}
                                            onRequestQuote={handleRequestQuote}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
