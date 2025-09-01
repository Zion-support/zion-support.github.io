import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
export default function Page() {
,
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: Globe },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9, icon: Brain },
  ];

import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
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
import { SearchSuggestion } from "@/types/search";
import styles from './Marketplace.module.css';
import { useViewMode } from '@/context/ViewModeContext';

interface ProductContainerProps {
  listings: ProductListing[];
  onRequestQuote: (id: string) => void;
}

function ProductGrid({ listings, onRequestQuote }: ProductContainerProps) {
  return (
    <div className={`${styles.grid} gap-6 product-grid`}>
      {listings.map(listing => (
        <ProductListingCard
          key={listing.id}
          listing={listing}
          onRequestQuote={onRequestQuote}
          view="grid"
        />
      ))}
    </div>
  );
}

function ProductList({ listings, onRequestQuote }: ProductContainerProps) {
  return (
    <div className={`${styles.list} gap-4 product-list`}>
      {listings.map(listing => (
        <ProductListingCard
          key={listing.id}
          listing={listing}
          onRequestQuote={onRequestQuote}
          view="list"
        />
      ))}
    </div>
  );
}

export default function Marketplace() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const { viewMode, setViewMode } = useViewMode();

  const filteredSolutions = solutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase () .includes(searchTerm.toLowerCase () ) ||
      solution.description.toLowerCase () .includes(searchTerm.toLowerCase () ) ||
      solution.vendor.toLowerCase () .includes(searchTerm.toLowerCase () ) ;
    return matchesCategory && matchesSearch;
  }) ;

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

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{t('marketplace.title')}</h1>
          <p className="text-zion-slate-light">
            {t('marketplace.description')}
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
                placeholder={t('marketplace.search_placeholder')}
                searchSuggestions={searchSuggestions}
              />
            </div>
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
            </div>
          </div>
        </div>

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating) ;
    const hasHalfStar = rating % 1 !== 0;

    for(let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill -current" />) ;
    }

    if(hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill -current" />) ;
    }

    const emptyStars = 5 - Math.ceil(rating) ;
    for(let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray -400" />) ;
    }

    return stars;
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId) ;
    return category ? category.icon : Globe;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId) ;
    return category ? category.name : 'General';
  };

  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case 'Most Popular':
        return 'bg-gradient - to - r from - yellow-500 to - orange - 500';
      case 'Best Seller':
        return 'bg-gradient - to - r from - green - 500 to - emerald - 500';
      case 'Trending':
        return 'bg-gradient - to - r from - purple - 500 to - pink - 500';
      case 'New':
        return 'bg-gradient - to - r from - blue - 500 to - cyan - 500';
      case 'Innovative':
        return 'bg-gradient - to - r from - indigo - 500 to - purple - 500';
      case 'Cost Effective':
        return 'bg-gradient - to - r from - teal - 500 to - green - 500';
      default:
        return 'bg-gradient - to - r from - gray - 500 to - slate - 500';
    }
  };

  return (<>
      <SEO
        title="Technology Marketplace - Zion Tech Group"
        description="Discover cutting - edge AI, quantum computing, cybersecurity, and cloud solutions from leading technology vendors in our curated marketplace."
        keywords="technology marketplace, AI solutions, quantum computing, cybersecurity, cloud platforms, enterprise software, Zion Tech Group"
      />

      <div  className="min - h-screen bg-gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate -light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div  className="absolute inset - 0 bg-gradient - to - r from - zion - purple / 20 to - zion -blue / 20"></div>
          <div  className="relative z - 10 max - w-7xl mx - auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div  className="inline - flex items - center px-4 py-2 rounded-full bg-zion - purple / 20 border border-zion - purple / 30 mb-6">
                <Globe className="w-5 h-5 text-zion - purple mr-2" />
                <span className="text-zion - purple font -medium">
                  Technology Marketplace
                </span>
              </div>
            ) : filteredListings.length > 0 ? (
              viewMode === 'grid' ? (
                <ProductGrid listings={filteredListings} onRequestQuote={handleRequestQuote} />
              ) : (
                <ProductList listings={filteredListings} onRequestQuote={handleRequestQuote} />
              )
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div  className="max - w-7xl mx -auto">
            <div  className="flex flex - wrap justify - center gap-4">
              {categories.map(category => (<button     key={category.id}
                  onClick={ () => setSelectedCategory(category.id) }
                  className={`flex items - center space - x-2 px-6 py-3 rounded-xl font - medium transition - all duration - 300 ${selectedCategory === category.id
                      ? 'bg-zion - purple text-white shadow-lg'
                      : 'bg-white / 10 text-zion - cyan - light hover:bg-white / 20 border border-white / 20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity -75"> ({category.count}) </span>
                </button>) ) }
            </div>
          </div>
        </section>

        {/* Sort Options */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div  className="max - w-7xl mx -auto">
            <div  className="flex flex - wrap items - center justify - between gap-4">
              <div  className="flex items - center space - x-4">
                <span className="text-white font -medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value) }
                  className="px-4 py-2 bg-white / 10 backdrop - blur - sm border border-white / 20 rounded-lg text-white focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border-transparent"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                  <option value="reviews">Reviews</option>
                  <option value="users">Users</option>
                </select>
              </div>

              <div  className="text-zion - cyan -light">
                {filteredSolutions.length} solutions found
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div  className="max - w-7xl mx -auto">
            {filteredSolutions.length === 0 ? (<motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Globe className="w-16 h-16 text-zion - cyan - light mx - auto mb-4" />
                <h3 className="text-xl font - semibold text-white mb-2">
                  No solutions found
                </h3>
                <p className="text-zion - cyan -light">
                  Try adjusting your search terms or category filter.</p>
              </motion.div>) : (<div  className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
                {sortedSolutions.map((solution, index) => (<motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-white / 5 backdrop - blur - sm border-white / 20 hover:border-zion - purple / 50 transition - all duration - 300 hover:scale -105">
                      <CardHeader>
                        <div  className="flex items - start justify - between mb-4">
                          <div  className="text-4xl">{solution.image}</div>
                          <div  className={`px-3 py-1 rounded-full text-xs font - semibold text-white ${getBadgeColor(solution.badge) }`}
                          >
                            {solution.badge}
                          </div>
                        </div>

                        <div  className="flex items - center space - x-2 mb-3">
                          <div  className="inline - flex items - center px-3 py-1 rounded-full bg-zion - purple / 20 border border-zion -purple / 30">
                            <span className="text-zion - purple text-sm font -medium">
                              {getCategoryName(solution.category) }
                            </span>
                          </div>
                        </div>

                        <CardTitle className="text-xl font - bold text-white group - hover:text-zion - purple transition - colors duration -300">
                          {solution.name}
                        </CardTitle>

                        <CardDescription className="text-zion - cyan - light leading -relaxed">
                          {solution.description}
                        </CardDescription>

                        <div  className="flex items - center justify -between">
                          <div  className="text-2xl font - bold text-zion -cyan">
                            {solution.price}
                          </div>
                          <div  className="flex items - center space - x-1">
                            <Star className="w-5 h-5 text-yellow-400 fill -current" />
                            <span className="text-white font -medium">
                              {solution.rating}
                            </span>
                            <span className="text-zion - cyan - light text-sm"> ({solution.reviews}) </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div  className="mb-6">
                          <h4 className="text-white font - semibold mb-3">
                            Key Features:
                          </h4>
                          <div  className="grid grid - cols - 2 gap-2">
                            {solution.features.map((feature, featureIndex) => (<div  key={featureIndex}
                                className="flex items - center space - x-2 text-sm"
                              >
                                <div  className="w-2 h-2 bg-zion - cyan rounded-full"></div>
                                <span className="text-gray -300">{feature}</span>
                              </div>) ) }
                          </div>
                        </div>

                        <div  className="space - y-3 mb-6 text-sm">
                          <div  className="flex items - center justify -between">
                            <span className="text-zion - cyan -light">
                              Vendor:
                            </span>
                            <span className="text-white">
                              {solution.vendor}
                            </span>
                          </div>
                          <div  className="flex items - center justify -between">
                            <span className="text-zion - cyan -light">
                              Deployment:
                            </span>
                            <span className="text-white">
                              {solution.deployment}
                            </span>
                          </div>
                          <div  className="flex items - center justify -between">
                            <span className="text-zion - cyan -light">
                              Support:
                            </span>
                            <span className="text-white">
                              {solution.support}
                            </span>
                          </div>
                        </div>

                        <div  className="flex items - center justify - between mb-4">
                          <div  className="flex items - center space - x-4 text-sm text-zion - cyan -light">
                            <div  className="flex items - center space - x-1">
                              <Users className="w-4 h-4" />
                              <span>{solution.users} users</span>
                            </div>
                          </div>
                        </div>

                        <div  className="flex space - x-2">
                          <Button className="flex - 1 bg-gradient - to - r from - zion - purple to - zion - blue hover:from - zion - purple / 80 hover:to - zion - blue / 80 text-white">
                            Learn More < ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zion - cyan text-zion - cyan hover:bg-zion - cyan hover:text-zion - slate -dark"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>) ) }
              </div>) }
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div  className="max - w-4xl mx - auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font - bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-zion - cyan - light mb-8 max - w-3xl mx -auto">
                Our technology experts can help you find the perfect solution or
                even develop a custom solution tailored to your specific needs.</p>

              <div  className="flex flex - col sm:flex - row gap-4 justify -center">
                <Button className="bg-gradient - to - r from - zion - purple to - zion - blue hover:from - zion - purple / 80 hover:to - zion - blue / 80 text-white">
                  <Search className="w-5 h-5 mr-2" />
                  Get Custom Recommendation
                </Button>

                <Button
                  variant="outline"
                  className="border-zion - cyan text-zion - cyan hover:bg-zion - cyan hover:text-zion - slate -dark"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Talk to Our Experts
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>) ;
};

