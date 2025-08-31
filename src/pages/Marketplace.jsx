import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, ListFilter, Loader2, Search, Filter, Star, ShoppingCart, Eye, Download, Play, Code, Brain, Server, Shield, Zap, Cloud, Database, Globe, Users, TrendingUp, Clock, Tag, ArrowRight, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Marketplace() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProductTypes, setSelectedProductTypes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState(() => localStorage.getItem('marketplaceView') || 'grid');

    // Sample marketplace data
    const marketplaceItems = [
        {
            id: 1,
            title: "AI Enterprise Automation Platform",
            description: "Comprehensive AI-powered automation solution for enterprise operations",
            category: "AI & ML",
            price: "$999/month",
            rating: 4.8,
            location: "San Francisco",
            availability: "Available",
            tags: ["AI", "Automation", "Enterprise"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 2,
            title: "Cloud DevOps Suite",
            description: "Complete DevOps solution with CI/CD, monitoring, and automation",
            category: "Cloud & DevOps",
            price: "$499/month",
            rating: 4.6,
            location: "New York",
            availability: "Available",
            tags: ["Cloud", "DevOps", "CI/CD"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 3,
            title: "Cybersecurity Platform",
            description: "Advanced threat detection and response system",
            category: "Security",
            price: "$799/month",
            rating: 4.9,
            location: "Austin",
            availability: "Available",
            tags: ["Security", "Threat Detection", "Compliance"],
            image: "/api/placeholder/300/200"
        }
    ];

    useEffect(() => {
        setListings(marketplaceItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('marketplaceView', view);
    }, [view]);

    // Filter listings based on selected filters
    const filteredListings = useMemo(() => {
        return listings.filter(listing => {
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
    }, [listings, searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);

    const handleFilterChange = (filterType, value) => {
        switch (filterType) {
            case 'productTypes':
                setSelectedProductTypes(prev => 
                    prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
                );
                break;
            case 'locations':
                setSelectedLocations(prev => 
                    prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
                );
                break;
            case 'availability':
                setSelectedAvailability(prev => 
                    prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
                );
                break;
            case 'rating':
                setSelectedRating(selectedRating === value ? null : value);
                break;
            default:
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

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const renderProductCard = (listing) => (
        <div key={listing.id} className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20">
            <div className="aspect-video bg-zinc-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                </div>
            </div>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {listing.category}
                    </span>
                    <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zinc-300">{listing.rating}</span>
                    </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {listing.title}
                </h3>
                
                <p className="text-zinc-400 text-sm line-clamp-3">
                    {listing.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                    {listing.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs text-zinc-500 bg-zinc-700/50 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center justify-between pt-3">
                    <span className="text-lg font-bold text-white">{listing.price}</span>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                        >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Zion Tech Group Marketplace
                    </h1>
                    <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                        Discover cutting-edge AI, cloud, and technology solutions. 
                        Transform your business with our curated marketplace of innovative products and services.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Search Input */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="text"
                                    placeholder="Search products, services, or solutions..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center space-x-2">
                            <Button
                                variant={view === 'grid' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setView('grid')}
                                className={view === 'grid' ? 'bg-cyan-500 hover:bg-cyan-600' : 'border-zinc-600 text-zinc-300 hover:bg-zinc-700'}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={view === 'list' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setView('list')}
                                className={view === 'list' ? 'bg-cyan-500 hover:bg-cyan-600' : 'border-zinc-600 text-zinc-300 hover:bg-zinc-700'}
                            >
                                <ListFilter className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(selectedProductTypes.length > 0 || selectedLocations.length > 0 || selectedAvailability.length > 0 || selectedRating) && (
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="text-sm text-zinc-400">Active filters:</span>
                            {selectedProductTypes.map(type => (
                                <span key={type} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                    {type}
                                    <button
                                        onClick={() => handleFilterChange('productTypes', type)}
                                        className="ml-2 hover:bg-cyan-500/30 rounded-full p-0.5"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            {selectedLocations.map(location => (
                                <span key={location} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                    {location}
                                    <button
                                        onClick={() => handleFilterChange('locations', location)}
                                        className="ml-2 hover:bg-purple-500/30 rounded-full p-0.5"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            {selectedAvailability.map(availability => (
                                <span key={availability} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                                    {availability}
                                    <button
                                        onClick={() => handleFilterChange('availability', availability)}
                                        className="ml-2 hover:bg-green-500/30 rounded-full p-0.5"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            {selectedRating && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                    {selectedRating}+ stars
                                    <button
                                        onClick={() => setSelectedRating(null)}
                                        className="ml-2 hover:bg-yellow-500/30 rounded-full p-0.5"
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearAllFilters}
                                className="text-zinc-400 hover:text-white"
                            >
                                Clear all
                            </Button>
                        </div>
                    )}
                </div>

                {/* Results */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-white">
                            {isLoading ? 'Loading...' : `${filteredListings.length} products found`}
                        </h2>
                        <div className="flex items-center space-x-4">
                            <span className="text-zinc-400 text-sm">
                                Sort by: <span className="text-white font-medium">Relevance</span>
                            </span>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                        </div>
                    ) : filteredListings.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-zinc-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">No products found</h3>
                            <p className="text-zinc-400 mb-4">Try adjusting your search criteria or filters</p>
                            <Button onClick={clearAllFilters} variant="outline">
                                Clear all filters
                            </Button>
                        </div>
                    ) : (
                        <div className={`grid gap-6 ${
                            view === 'grid' 
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                                : 'grid-cols-1'
                        }`}>
                            {filteredListings.map(renderProductCard)}
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Can't find what you're looking for?
                    </h3>
                    <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                        Our team of experts can help you find the perfect solution or create a custom solution tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact Sales
                        </Button>
                        <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Request Custom Quote
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
