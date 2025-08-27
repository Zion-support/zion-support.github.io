<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar";
import { ProductListingCard } from "@/components/ProductListingCard";
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData";
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart,
  Heart,
  Eye
} from 'lucide-react';
export default function Marketplace() {
  const categories = [
    { name: 'AI & Machine Learning', count: 156, icon: '🤖' },
    { name: 'Cybersecurity', count: 89, icon: '🔒' },
    { name: 'Cloud Solutions', count: 234, icon: '☁️' },
    { name: 'Mobile Apps', count: 67, icon: '📱' },
    { name: 'Web Development', count: 123, icon: '🌐' },
    { name: 'Data Analytics', count: 78, icon: '📊' },
    { name: 'IoT Solutions', count: 45, icon: '🔌' },
    { name: 'Blockchain', count: 34, icon: '⛓️' }
  ];
  const featuredProducts = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence Suite',
      description: 'Advanced analytics and reporting platform with machine learning capabilities',
      price: '$2,999',
      rating: 4.8,
      reviews: 127,
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Enterprise Cybersecurity Platform',
      description: 'Comprehensive security solution with threat detection and response',
      price: '$4,499',
      rating: 4.9,
      reviews: 89,
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Cloud Infrastructure Management',
      description: 'Scalable cloud solutions with automated deployment and monitoring',
      price: '$1,799',
      rating: 4.7,
      reviews: 203,
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Marketplace
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions, services, and products from leading innovators worldwide
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
          </p>
        </div>
<<<<<<< HEAD
        
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
=======
      </section>
      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {category.name}
                </h3>
                <p className="text-zion-slate-light text-sm">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Grid className="w-5 h-5" />
              </button>
              <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <List className="w-5 h-5" />
              </button>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <FilterSidebar filters={{
            selectedProductTypes,
            selectedLocations,
            selectedAvailability,
            selectedRating
        }} filterOptions={filterOptions} onFilterChange={handleFilterChange} onRatingChange={setSelectedRating} onClearFilters={clearAllFilters}/>
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
=======
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell Your Solutions?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators and entrepreneurs who are already selling their technology solutions on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Start Selling
              </button>
            </Link>
            <Link to="/how-it-works">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Learn How It Works
              </button>
            </Link>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
          </div>
        </div>
      </main>);
}
