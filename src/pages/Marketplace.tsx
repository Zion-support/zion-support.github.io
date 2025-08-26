<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar";
import { ProductListingCard } from "@/components/ProductListingCard";
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData";
import { generateRandomListing } from "@/utils/generateRandomListing";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { SearchSuggestion } from "@/types/search";
import { ListingView } from "@/types/listings";

export default function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<ListingView>(() =>
    (localStorage.getItem('marketplaceView') as ListingView) || 'grid'
  );

  // Automatically append a new listing every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomListing()]);
    }, 120000); // 2 minutes
    return () => clearInterval(interval);
  }, []);
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions();
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
  
  const handleFilterChange = (filterType: string, value: string) => {
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
  const handleRequestQuote = (listingId: string) => {
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

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Star, Clock, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Marketplace() {
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketplace - Zion Tech Group" 
        description="Discover AI services, tech talent, and equipment in our comprehensive marketplace."
        keywords="marketplace, AI services, tech talent, equipment, technology"
        canonical="https://ziontechgroup.com/marketplace"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Marketplace
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            The world's premier marketplace for AI services, tech talent, and cutting-edge equipment
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, talent, or equipment..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark px-6 py-2 rounded-md font-semibold hover:bg-zion-cyan-light transition-colors">
                Search
              </button>
            </div>
<<<<<<< HEAD
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setView('grid')}
                aria-pressed={view === 'grid'}
                aria-label="Grid view"
                className={view === 'grid' ? 'text-zion-purple' : 'text-zion-slate-light'}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setView('list')}
                aria-pressed={view === 'list'}
                aria-label="List view"
                className={view === 'list' ? 'text-zion-purple' : 'text-zion-slate-light'}
              >
                <ListFilter className="h-4 w-4" />
              </Button>
=======
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">10K+</div>
              <div className="text-zion-slate-light">Active Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">5K+</div>
              <div className="text-zion-slate-light">Verified Talent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">2K+</div>
              <div className="text-zion-slate-light">Equipment Items</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'AI & Machine Learning', icon: '🤖', count: '2.5K+', href: '/categories/ai-machine-learning' },
              { name: 'Web Development', icon: '🌐', count: '3.2K+', href: '/categories/web-development' },
              { name: 'Mobile Development', icon: '📱', count: '1.8K+', href: '/categories/mobile-development' },
              { name: 'Data Science', icon: '📊', count: '1.5K+', href: '/categories/data-science' },
              { name: 'Cybersecurity', icon: '🔒', count: '900+', href: '/categories/cybersecurity' },
              { name: 'Cloud Services', icon: '☁️', count: '1.2K+', href: '/categories/cloud-services' },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg p-6 hover:bg-zion-purple/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {category.name}
                </h3>
                <p className="text-zion-slate-light">{category.count} services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Services</h2>
            <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              View All Services →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Powered Chatbot Development',
                description: 'Custom chatbot solutions with advanced NLP capabilities',
                rating: 4.9,
                reviews: 127,
                price: '$2,500',
                delivery: '2-3 weeks',
                location: 'San Francisco, CA'
              },
              {
                title: 'Full-Stack Web Application',
                description: 'Modern web apps with React, Node.js, and cloud deployment',
                rating: 4.8,
                reviews: 89,
                price: '$5,000',
                delivery: '4-6 weeks',
                location: 'New York, NY'
              },
              {
                title: 'Data Analytics Dashboard',
                description: 'Interactive dashboards with real-time data visualization',
                rating: 4.7,
                reviews: 156,
                price: '$3,200',
                delivery: '3-4 weeks',
                location: 'Austin, TX'
              }
            ].map((service, index) => (
              <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white font-semibold">{service.rating}</span>
                    <span className="ml-2 text-zion-slate-light">({service.reviews})</span>
                  </div>
                  <span className="text-zion-cyan font-bold text-lg">{service.price}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between text-sm text-zion-slate-light">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.delivery}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {service.location}
                  </div>
                </div>
              </div>
<<<<<<< HEAD
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
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
                  <Button 
                    onClick={clearAllFilters}
                    className="bg-zion-purple hover:bg-zion-purple-dark"
                  >
                    Clear Filters
                  </Button>
                </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
=======
import React from 'react';
import { Link } from 'react-router-dom';

const Marketplace: React.FC = () => {
  const marketplaceCategories = [
    {
      title: "AI Solutions",
      description: "Ready-to-deploy AI models and solutions",
      count: "25+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity Tools",
      description: "Advanced security and compliance solutions",
      count: "18+",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and DevOps tools",
      count: "32+",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms and quantum-ready applications",
      count: "12+",
      color: "from-orange-500 to-red-500"
    }
  ];

  const featuredProducts = [
    {
      name: "AI Autonomous Research Assistant",
      category: "AI Solutions",
      description: "Intelligent research automation tool that can analyze documents, extract insights, and generate comprehensive reports.",
      price: "$2,999/month",
      rating: 4.8,
      reviews: 127,
      image: "/images/marketplace/ai-research-assistant.jpg"
    },
    {
      name: "Advanced Cybersecurity Suite",
      category: "Cybersecurity",
      description: "Comprehensive security solution with threat detection, vulnerability assessment, and compliance automation.",
      price: "$4,499/month",
      rating: 4.9,
      reviews: 89,
      image: "/images/marketplace/cybersecurity-suite.jpg"
    },
    {
      name: "Quantum Neural Network Platform",
      category: "Quantum Computing",
      description: "Next-generation platform for quantum machine learning and neural network optimization.",
      price: "$8,999/month",
      rating: 4.7,
      reviews: 45,
      image: "/images/marketplace/quantum-platform.jpg"
    },
    {
      name: "Green IT Management Suite",
      category: "Cloud Services",
      description: "Sustainable IT infrastructure management with carbon footprint tracking and optimization.",
      price: "$1,999/month",
      rating: 4.6,
      reviews: 203,
      image: "/images/marketplace/green-it-suite.jpg"
    }
  ];

  const recentProducts = [
    {
      name: "SOC2 Compliance Automation",
      category: "Compliance",
      price: "$3,299/month",
      rating: 4.5,
      reviews: 23
    },
    {
      name: "Affiliate Attribution Hub",
      category: "Marketing",
      price: "$1,799/month",
      rating: 4.4,
      reviews: 67
    },
    {
      name: "Accessibility Auditor Pro",
      category: "Compliance",
      price: "$899/month",
      rating: 4.7,
      reviews: 156
    },
    {
      name: "Micro-SaaS Starter Kit",
      category: "Development",
      price: "$499/month",
      rating: 4.3,
      reviews: 89
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Marketplace
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover and deploy cutting-edge technology solutions from Zion Tech Group. 
              From AI-powered tools to quantum computing platforms, find the perfect 
              solution for your business needs.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search for solutions, tools, or services..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="ai">AI Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud">Cloud Services</option>
                <option value="quantum">Quantum Computing</option>
              </select>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{category.count}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-300">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recently Added</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs text-gray-300">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-3">{product.price}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{product.reviews} reviews</span>
                    <button className="px-4 py-2 border border-gray-600 text-white text-sm rounded-lg hover:bg-gray-800 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Can't Find What You Need?</h3>
              <p className="text-gray-300 mb-6">
                We offer custom development services to create tailored solutions for your specific requirements. 
                Let's discuss your project and build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Start Custom Project
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
=======
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and professionals who trust Zion for their tech needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/publish"
              className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              List Your Service
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Get in Touch
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
  );
}
