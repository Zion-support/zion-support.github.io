import React, { useState, useEffect } from "react";
import { Grid3X3, ListFilter, Loader2, Search, X } from "lucide-react";
import { ProductListingCard } from "@/components/ProductListingCard";

// Mock data for marketplace
const MOCK_LISTINGS = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence Suite",
    description: "Comprehensive business intelligence solution with advanced AI analytics and real-time reporting capabilities.",
    category: "AI & Analytics",
    price: 2999,
    currency: "$",
    rating: 4.8,
    reviewCount: 127,
    featured: true,
    tags: ["AI", "Analytics", "Business Intelligence", "Real-time"],
    images: ["/placeholder.svg"],
    location: "Global",
    availability: "Available"
  },
  {
    id: 2,
    title: "Cybersecurity Threat Detection Platform",
    description: "Advanced cybersecurity platform with machine learning threat detection and automated response systems.",
    category: "Cybersecurity",
    price: 1999,
    currency: "$",
    rating: 4.9,
    reviewCount: 89,
    featured: false,
    tags: ["Cybersecurity", "Threat Detection", "Machine Learning", "Automation"],
    images: ["/placeholder.svg"],
    location: "Global",
    availability: "Available"
  },
  {
    id: 3,
    title: "Cloud Migration Consulting Service",
    description: "Expert cloud migration services with minimal downtime and comprehensive support for enterprise applications.",
    category: "Cloud Services",
    price: null,
    currency: "$",
    rating: 4.7,
    reviewCount: 156,
    featured: false,
    tags: ["Cloud Migration", "Consulting", "Enterprise", "Support"],
    images: ["/placeholder.svg"],
    location: "North America",
    availability: "Available"
  },
  {
    id: 4,
    title: "Quantum Computing Development Kit",
    description: "Development toolkit for quantum computing applications with comprehensive documentation and examples.",
    category: "Quantum Computing",
    price: 4999,
    currency: "$",
    rating: 4.6,
    reviewCount: 34,
    featured: true,
    tags: ["Quantum Computing", "Development", "Kit", "Documentation"],
    images: ["/placeholder.svg"],
    location: "Global",
    availability: "Limited"
  }
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [view, setView] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Simulate loading
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [searchQuery, selectedCategory]);

  // Filter listings based on search and category
  const filteredListings = MOCK_LISTINGS.filter(listing => {
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || listing.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(MOCK_LISTINGS.map(listing => listing.category))];

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
  };

  const handleRequestQuote = (listingId) => {
    alert(`Quote requested for listing ${listingId}. Our team will contact you soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion Tech Marketplace
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions, AI services, and innovative tools from leading providers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for services, tools, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* View Toggle and Filter Button */}
            <div className="flex items-center gap-3">
              <div className="flex bg-slate-800/50 rounded-lg p-1 border border-slate-600">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    view === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded-md transition-colors ${
                    view === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <ListFilter className="w-5 h-5" />
                </button>
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  showFilters 
                    ? 'bg-cyan-500 border-cyan-500 text-white' 
                    : 'border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                }`}
              >
                <ListFilter className="w-4 h-4 mr-2 inline" />
                Filters
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Price Range
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Any Price</option>
                    <option>$0 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000+</option>
                    <option>Custom Pricing</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Minimum Rating
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Any Rating</option>
                    <option>4.0+ Stars</option>
                    <option>4.5+ Stars</option>
                    <option>4.8+ Stars</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300">
            Showing {filteredListings.length} of {MOCK_LISTINGS.length} results
          </p>
          {searchQuery || selectedCategory ? (
            <button
              onClick={clearFilters}
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              <X className="w-4 h-4 mr-1" />
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
          </div>
        ) : (
          <>
            {/* Listings Grid */}
            {filteredListings.length > 0 ? (
              <div className={`grid gap-6 ${
                view === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredListings.map((listing) => (
                  <ProductListingCard
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath="/marketplace/listing"
                  />
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
