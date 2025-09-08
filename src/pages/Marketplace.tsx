import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Users, 
  Briefcase,
  Code,
  Cloud,
  Shield,
  Brain,
  Zap,
  Heart,
  ArrowRight,
  ExternalLink,
  Clock,
  DollarSign,
  Tag,
  Award,
  CheckCircle,
  Eye,
  Share2,
  Bookmark,
  ShoppingBag,
  Package,
  Truck,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star as StarIcon,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network2,
  Database2,
  Lock2,
  Key2,
  Fingerprint2,
  Eye2,
  Brain2,
  Cpu2,
  Memory,
  HardDrive2,
  Server2,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  UserEdit,
  UserSearch,
  UserList,
  UserSettings,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck2,
  UserX2,
  UserMinus2,
  UserPlus2,
  UserEdit2,
  UserSearch2,
  UserList2,
  UserSettings2,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2
} from 'lucide-react';

import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar";
import { ProductListingCard } from "@/components/ProductListingCard";
import { ProductListing } from "@/types/listings";
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData";
import { generateRandomListing } from "@/utils/generateRandomListing";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { SearchSuggestion } from "@/types/search";
import styles from './Marketplace.module.css';
import { useViewMode, ViewMode } from '@/context/ViewModeContext';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface ProductContainerProps {
  listings: ProductListing[];
  onRequestQuote: (id: string) => void;
}

const marketplaceItems: MarketplaceItem[] = [
  // AI Services
  {
    id: 1,
    title: 'AI-Powered Server Cluster',
    category: 'Products',
    description: 'High-performance computing cluster optimized for AI workloads',
    price: '$25,000',
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
          tags: ['AI', 'High Performance', 'Scalable'],
    featured: true
  },
  {
    id: 2,
    title: 'Cybersecurity Expert Team',
    category: 'Talent',
    description: 'Senior cybersecurity professionals with 10+ years experience',
    price: '$150/hr',
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Security', 'Expert', 'Certified'],
    featured: true
  },
  {
    id: 'ai-healthcare-analytics',
    title: 'AI Healthcare Analytics Suite',
    description: 'Comprehensive healthcare analytics platform with AI-powered diagnostics and patient insights.',
    category: 'AI Services',
    subcategory: 'Healthcare',
    price: '$8,500/month',
    rating: 4.9,
    reviews: 89,
    image: '/images/marketplace/ai-healthcare.jpg',
    featured: true,
    tags: ['Healthcare', 'AI', 'Diagnostics', 'Analytics'],
    vendor: 'Zion Tech Group',
    availability: 'available',
    delivery: 'Instant',
    warranty: '30 days'
  },
  {
    id: 'ai-legal-document-analysis',
    title: 'AI Legal Document Analysis',
    description: 'Intelligent legal document processing and analysis platform for law firms and legal departments.',
    category: 'AI Services',
    subcategory: 'Legal Tech',
    price: '$3,200/month',
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Quantum', 'Research', 'Advanced'],
    featured: false
  }
];

const categories = [
  {
    name: 'AI Services',
    icon: Brain,
    description: 'Artificial Intelligence solutions',
    color: 'from-purple-500 to-pink-500',
    count: 3
  },
  {
    name: 'Cloud Services',
    icon: Cloud,
    description: 'Cloud infrastructure and migration',
    color: 'from-blue-500 to-cyan-500',
    count: 2
  },
  {
    name: 'Security Services',
    icon: Shield,
    description: 'Cybersecurity and compliance',
    color: 'from-red-500 to-orange-500',
    count: 2
  },
  {
    name: 'Hardware',
    icon: Server,
    description: 'Physical equipment and infrastructure',
    color: 'from-green-500 to-emerald-500',
    count: 2
  },
  {
    name: 'Talent',
    icon: Users,
    description: 'Expert consultants and professionals',
    color: 'from-indigo-500 to-purple-500',
    count: 2
  }
];

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
  const createViewModeHandler = <T extends ViewMode>(mode: T) => () => setViewMode(mode);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredItems = marketplaceItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return b.featured ? 1 : -1;
    }
  });

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
                onClick={createViewModeHandler('grid')}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
                className="text-zion-slate-light"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={createViewModeHandler('list')}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
                className="text-zion-slate-light"
              >
                <ListFilter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <FilterSidebar
              filters={{
                selectedProductTypes,
                selectedLocations,
                selectedAvailability,
                selectedRating
              }}
              filterOptions={filterOptions}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
            />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Active filters display */}
            <ActiveFiltersBar 
              selectedProductTypes={selectedProductTypes}
              selectedLocations={selectedLocations}
              selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
              onRemoveRating={() => setSelectedRating(null)}
              onClearSearch={() => setSearchQuery("")}
            />

            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                {t('marketplace.results_count', { count: filteredListings.length })}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>500+ Products & Services</span>
              </div>
            ) : filteredListings.length > 0 ? (
              viewMode === 'grid' ? (
                <ProductGrid listings={paginatedListings} onRequestQuote={handleRequestQuote} />
              ) : (
                <ProductList listings={paginatedListings} onRequestQuote={handleRequestQuote} />
              )
            ) : (
              <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">{t('marketplace.no_results_title')}</h2>
                <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                  {t('marketplace.no_results_description')}
                </p>
                <Button
                  onClick={clearAllFilters}
                  className="bg-zion-purple hover:bg-zion-purple-dark"
                >
                  {t('marketplace.clear_filters')}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Verified Vendors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, services, or vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Browse Categories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">All Items</h3>
                <p className="text-sm opacity-75">500+ items</p>
              </div>
            </motion.button>

            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} items</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    item.category === 'AI Services' ? 'from-purple-500 to-pink-500' :
                    item.category === 'Cloud Services' ? 'from-blue-500 to-cyan-500' :
                    item.category === 'Security Services' ? 'from-red-500 to-orange-500' :
                    item.category === 'Hardware' ? 'from-green-500 to-emerald-500' :
                    'from-indigo-500 to-purple-500'
                  } rounded-lg flex items-center justify-center`}>
                    {item.category === 'AI Services' ? <Brain className="w-8 h-8 text-white" /> :
                     item.category === 'Cloud Services' ? <Cloud className="w-8 h-8 text-white" /> :
                     item.category === 'Security Services' ? <Shield className="w-8 h-8 text-white" /> :
                     item.category === 'Hardware' ? <Server className="w-8 h-8 text-white" /> :
                     <Users className="w-8 h-8 text-white" />}
                  </div>
                  {item.featured && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-slate-900/70 text-white text-xs px-2 py-1 rounded">
                    {item.availability === 'available' ? 'In Stock' :
                     item.availability === 'limited' ? 'Limited' : 'Out of Stock'}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 text-xs mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 font-semibold text-sm">{item.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-slate-300 text-sm">{item.rating}</span>
                      <span className="text-slate-500 text-xs">({item.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">{item.vendor}</span>
                    <button className="px-3 py-1 bg-cyan-600 text-white text-xs rounded hover:bg-cyan-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <ShoppingCart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No items found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Browse our marketplace and find the perfect solution for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
