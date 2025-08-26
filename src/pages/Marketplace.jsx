import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar";
import { ProductListingCard } from "@/components/ProductListingCard";
import { marketplaceData, filterOptions } from "@/data/marketplaceData";
import { generateRandomListing } from "@/utils/generateRandomListing";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
export default function Marketplace() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProductTypes, setSelectedProductTypes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [listings, setListings] = useState(marketplaceData);
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState(() => localStorage.getItem('marketplaceView') || 'grid');
    // Automatically append a new listing every 2 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            setListings(prev => [...prev, generateRandomListing()]);
        }, 120000); // 2 minutes
        return () => clearInterval(interval);
    }, []);
    const searchSuggestions = ['AI', 'Cybersecurity', 'Cloud', 'Machine Learning', 'IoT', 'Consulting'];
    const filterOptionsData = useMemo(() => filterOptions, []);
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
                    serviceType: listing.category,
                    specificItem: {
                        id: listing.id,
                        title: listing.title,
                        category: listing.category,
                        image: listing.images?.[0]
                    }
                }
            });
        }
    };
    return (<main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>
          <p className="text-zion-slate-light">
            Discover professional services and products for your AI and tech projects.
            Browse our curated collection of solutions from verified providers.
          </p>
        </div>
        
        {/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <EnhancedSearchInput value={searchQuery} onChange={setSearchQuery} onSelectSuggestion={setSearchQuery} placeholder={t('marketplace.search_placeholder')} searchSuggestions={searchSuggestions}/>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => setView('grid')} aria-pressed={view === 'grid'} className={view === 'grid' ? 'text-zion-purple' : 'text-zion-slate-light'}>
                <Grid3X3 className="h-4 w-4"/>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setView('list')} aria-pressed={view === 'list'} className={view === 'list' ? 'text-zion-purple' : 'text-zion-slate-light'}>
                <ListFilter className="h-4 w-4"/>
              </Button>
            </div>
          </div>
        </div>

        {/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <FilterSidebar filters={{
            selectedProductTypes,
            selectedLocations,
            selectedAvailability,
            selectedRating
        }} filterOptions={filterOptionsData} onFilterChange={handleFilterChange} onRatingChange={setSelectedRating} onClearFilters={clearAllFilters}/>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Active filters display */}
            <ActiveFiltersBar selectedProductTypes={selectedProductTypes} selectedLocations={selectedLocations} selectedAvailability={selectedAvailability} selectedRating={selectedRating} searchQuery={searchQuery} onRemoveFilter={handleFilterChange} onRemoveRating={() => setSelectedRating(null)} onClearSearch={() => setSearchQuery("")}/>

            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
            {/* Display actual marketplace listings */}
            {isLoading ? (<div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-zion-purple"/>
              </div>) : (<div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'flex flex-col gap-6'}>
                {filteredListings.length > 0 ? (filteredListings.map((listing) => (<ProductListingCard key={listing.id} listing={listing} view={view} onRequestQuote={handleRequestQuote}/>))) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
                  <Button onClick={clearAllFilters} className="bg-zion-purple hover:bg-zion-purple-dark">
                    Clear Filters
                  </Button>
                </div>)}
              </div>)}
          </div>
        </div>
      </main>);
}
