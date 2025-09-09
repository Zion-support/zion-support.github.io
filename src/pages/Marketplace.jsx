import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { ProductListingCard } from "@/components/ProductListingCard";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function Marketplace() {
    const [searchQuery, setSearchQuery] = useState("");
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState(() => localStorage.getItem('marketplaceView') || 'grid');
    
    // Sample data for demonstration
    useEffect(() => {
        setListings([
            {
                id: 1,
                title: "AI Business Intelligence Suite",
                description: "Comprehensive AI-powered business intelligence platform",
                category: "Software",
                price: 299,
                currency: "$",
                rating: 4.8,
                reviewCount: 127,
                images: ["/api/placeholder/300/200"],
                tags: ["AI", "Analytics", "Business Intelligence"],
                location: "Global",
                availability: "Available",
                featured: true
            },
            {
                id: 2,
                title: "Cloud Infrastructure Package",
                description: "Enterprise-grade cloud infrastructure solutions",
                category: "Services",
                price: 1999,
                currency: "$",
                rating: 4.9,
                reviewCount: 89,
                images: ["/api/placeholder/300/200"],
                tags: ["Cloud", "Infrastructure", "Enterprise"],
                location: "Global",
                availability: "Available",
                featured: false
            }
        ]);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timeout);
    }, [searchQuery]);

    useEffect(() => {
        localStorage.setItem('marketplaceView', view);
    }, [view]);

    // Filter listings based on search query
    const filteredListings = listings.filter(listing => {
        if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
            return false;
        }
        return true;
    });

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

    return (
        <main className="flex-grow container mx-auto px-4 py-8">
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
                        <EnhancedSearchInput 
                            value={searchQuery} 
                            onChange={setSearchQuery} 
                            onSelectSuggestion={setSearchQuery} 
                            placeholder="Search for products and services..." 
                            searchSuggestions={[]}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => setView('grid')} 
                            aria-pressed={view === 'grid'} 
                            className={view === 'grid' ? 'text-zion-purple' : 'text-zion-slate-light'}
                        >
                            <Grid3X3 className="h-4 w-4"/>
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => setView('list')} 
                            aria-pressed={view === 'list'} 
                            className={view === 'list' ? 'text-zion-purple' : 'text-zion-slate-light'}
                        >
                            <ListFilter className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 gap-6">
                <div className="lg:col-span-1">
                    {/* Results count */}
                    <div className="mb-6">
                        <p className="text-zion-slate-light">
                            Showing {filteredListings.length} results
                            {searchQuery && ` for "${searchQuery}"`}
                        </p>
                    </div>
                    
                    {/* Display marketplace listings */}
                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-zion-purple"/>
                        </div>
                    ) : (
                        <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'flex flex-col gap-6'}>
                            {filteredListings.length > 0 ? (
                                filteredListings.map((listing) => (
                                    <ProductListingCard 
                                        key={listing.id} 
                                        listing={listing} 
                                        view={view} 
                                        onRequestQuote={handleRequestQuote}
                                    />
                                ))
                            ) : (
                                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                                    <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                                    <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                                        We couldn't find any listings matching your search. Try adjusting your search criteria.
                                    </p>
                                    <Button onClick={() => setSearchQuery("")} className="bg-zion-purple hover:bg-zion-purple-dark">
                                        Clear Search
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
