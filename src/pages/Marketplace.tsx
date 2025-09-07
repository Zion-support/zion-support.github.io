import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModal } from '@/components/auth/AuthModal';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react'
import { SkeletonCard } from '@/components/ui/skeleton';
import { ErrorState } from '@/components/jobs/applications/ErrorState';
import { ProductsEmptyState } from '@/components/marketplace/EmptyState';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { ProductListing } from '@/types/listings';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth/AuthProvider';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { MAX_PRICE, MIN_PRICE } from '@/data/marketplaceData';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
/**
 * Marketplace component props
 */
export interface MarketplaceProps {
  // All props removed - component now fetches data independently
}

// Market insights component
const MarketInsights: React.FC<{ stats: any}> = ({ stats }) => (
  <Card className = $2;
// Filter and sort controls
const FilterControls: React.FC<{
  sortBy: string,
  setSortBy: (sort: string) => void,
  filterCategory: string,
  setFilterCategory: (category: string) => void,
  categories: string[],
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void,
  minAiScore: number,
  setMinAiScore: (score: number) => void,
  minRating: number,
  setMinRating: (rating: number) => void,
  filterAvailability: string,
  setFilterAvailability: (value: string) => void,
  availabilityOptions: string[],
  filterLocation: string,
  setFilterLocation: (value: string) => void,
  locations: string[],
  showRecommended: boolean,
  setShowRecommended: (show: boolean) => void,
  loading: boolean}> = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  priceRange,
  setPriceRange,
  minAiScore,
  setMinAiScore,
  minRating,
  setMinRating,
  filterAvailability,
  setFilterAvailability,
  availabilityOptions,
  filterLocation,
  setFilterLocation,
  locations,
  showRecommended,
  setShowRecommended,
  loading
}) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
    
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">$</span>
      <input
        type="number"
        value={priceRange[0]}
        min={MIN_PRICE}
        max={priceRange[1]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
      <span>-</span>
      <input
        type="number"
        value={priceRange[1]}
        min={priceRange[0]}
        max={MAX_PRICE}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className = $2;
/**
 * Enhanced Marketplace component with infinite scroll and AI product generation
 * Uses the auto-feed algorithm to continuously generate IT and AI products
 * Includes intelligent filtering, sorting, and recommendation features
 */
export default function Marketplace() {
  const router = useRouter($2);
  const { t } = useTranslation($2);
  const { toast } = useToast($2);
  const { isAuthenticated, user } = useAuth($2);
  const firstRenderRef = useRef($2);
  const isRefreshingAfterFilterChange = useRef(false), // New ref to track refresh state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState($2);
  const [sortBy, setSortBy] = useState($2);
  const [filterCategory, setFilterCategory] = useState($2);
  const [showRecommended, setShowRecommended] = useState($2);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]),
  const [minAiScore, setMinAiScore] = useState($2);
  const [minRating, setMinRating] = useState($2);
  const [filterAvailability, setFilterAvailability] = useState($2);
  const [filterLocation, setFilterLocation] = useState($2);
  const { handleApiError, retryQuery } = useApiErrorHandling($2);
  // Handle Add Product button with authentication check
  const handleAddProduct = useCallback(() => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true), // Use the new auth modal
      return
    }

    // Check if user has permission to add products (simplified to admin check)
    if (user && user.userType !== 'admin') {
      toast($2);
      return
    }

    // Navigate to admin products page
    router.push('/admin/products')
  }, [isAuthenticated, user, router, toast]),

  // Fetch function for infinite scroll with AI product generation
  const fetchProducts = useCallback(async (page: number, limit: number) => {
    await new Promise((resolve) => setTimeout(resolve, 200)),

    try {
      // Use static marketplace listings data for now (compatible with ProductListing type)
      const params = $2;
        limit,
        ...(filterCategory && { category: filterCategory}),
        sort: sortBy},

      logInfo($2);
      // Use static data that's already of type ProductListing[]
      let items: ProductListing[] = [...MARKETPLACE_LISTINGS],
      
      // Apply category filter from params
      if (filterCategory) {
        items = items.filter((p) => p.category.toLowerCase() === filterCategory.toLowerCase())
      }
      
      logInfo('Marketplace.tsx: Raw items from static data before filtering/sorting:', { data: JSON.stringify(items.slice(0, 5), null, 2) }),

      if (showRecommended) {
        items = $2;
        const ai = $2;
        const rating = $2;
        const location = (p.location || '').toLowerCase($2);
        const availability = (p.availability || '').toLowerCase($2);
        return (
          price >= priceRange[0] &&
          price <= priceRange[1] &&
          ai >= minAiScore &&
          rating >= minRating &&
          (!filterLocation || location.includes(filterLocation.toLowerCase())) &&
          (!filterAvailability || availability = $2;
      items.sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0),
          case 'price-high':
            return (b.price || 0) - (a.price || 0),
          case 'rating':
            return (b.rating || 0) - (a.rating || 0),
          case 'popular':
            return (b.reviewCount || 0) - (a.reviewCount || 0),
          case 'ai-score':
            return (b.aiScore || 0) - (a.aiScore || 0),
          case 'newest':
          default: // Ensure createdAt exists and is a valid date string before parsing
            const timeA = $2;
            const timeB = $2;
            // Handle NaN cases that might arise from invalid date strings
            if (isNaN(timeB) && isNaN(timeA)) return 0, // Both invalid, treat as equal
            if (isNaN(timeB)) return -1, // b is invalid, a comes first (appears newer)
            if (isNaN(timeA)) return 1,  // a is invalid, b comes first

            return timeB - timeA, // Both valid, sort by time
        }
      }),

      // Apply pagination
      const startIndex = $2;
      const endIndex = $2;
      const paginatedItems = items.slice($2);
      return {
        items: paginatedItems,
        hasMore: endIndex < items.length,
        total: items.length
      }
    } catch (err: any) {
      // Log the error and allow useInfiniteScrollPagination to handle it
      logErrorToProduction($2);
      // Show more specific error messages based on the error type
      if (err.response?.status === 403) {
        logErrorToProduction($2);
        // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip
      } else if (err.response?.status === 500) {
        logErrorToProduction($2);
        toast({
          title: "Server Error", 
          description: "The marketplace is temporarily unavailable. Please try again later.",
          variant: "destructive"})
      } else {
        handleApiError(err), // This might show a toast or log to Sentry
      }
      
      throw err, // Re-throw to let useInfiniteScrollPagination know about the failure
    }
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]),

  // useInfiniteScrollPagination hook
  const {
    items: products, // These are the products to render
    loading,          // True when initially loading or when fetchProducts is running
    error,            // Contains the error object if fetchProducts throws
    hasMore,          // True if the API indicates more items are available
    isFetching,       // True if fetching more items (for infinite scroll)
    lastElementRef,   // Ref for the last element to trigger loading more
    refresh,          // Function to reload data from page 1
    scrollToTop       // Function to scroll to the top of the page
  } = useInfiniteScrollPagination(fetchProducts, 16), // 16 items per page

  // Effect to refresh data when filters change
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = $2;
      // On initial mount, useInfiniteScrollPagination handles the first load.
      // We don't want to call refresh() here immediately if it's the very first render
      // unless specifically needed. The new effect below handles re-mounts.
      return
    }
    logInfo($2);
    isRefreshingAfterFilterChange.current = true, // Set flag before refresh
    refresh($2);
    // scrollToTop(), // Removed from here
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, refresh, toast]), // Added all filter dependencies

  // Effect to explicitly refresh data when the component mounts or re-mounts
  useEffect(() => {
    logInfo($2);
    // We call refresh directly to ensure data is re-fetched.
    // The useInfiniteScrollPagination hook's internal logic will manage its state.
    refresh($2);
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.
    firstRenderRef.current = true
  }, [refresh]), // `refresh` is a dependency. Ensure it's stable.

  // New effect to scroll to top AFTER products have been updated and refresh flag is set
  useEffect(() => {
    if (isRefreshingAfterFilterChange.current && !loading) { // Check flag and ensure loading is false
      logInfo($2);
      scrollToTop($2);
      isRefreshingAfterFilterChange.current = false, // Reset flag
      // Optionally, provide user feedback about the filter change
      // toast({ title: 'Filters updated', description: 'Displaying products based on new criteria.' })
    }
  }, [products, loading, scrollToTop, toast]), // Depends on products and loading state

  // Calculate market stats
  const marketStats = $2;
    return {
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,
      totalProducts: products.length,
      categoriesCount: Array.from(new Set(products.map(p => p.category))).length
    }
  }, [products]),

  // Get unique categories and other filter values
  const categories = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.category)))
  }, []),
  const locations = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.location).filter(Boolean)))
  }, []).filter(Boolean) as string[],
  const availabilityOptions = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.availability).filter(Boolean)))
  }, []).filter(Boolean) as string[],

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState($2);
  useEffect(() => {
    const handleScroll = $2;
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  // Loading state with skeleton
  if (loading && products.length === 0) {
    return (
      <div className="container py-8" data-testid="marketplace-loading">
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t('marketplace.hero_subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12}).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    )
  }

  // Error state with retry
  if (error && products.length === 0) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <ErrorState error={error} />
          <Button onClick={refresh}>
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  // Empty state (only show when not loading and no products)
  if (!loading && products.length === 0 && !error) {
    return (
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t('marketplace.hero_subtitle')}
          </p>
        </motion.div>
        
        <ProductsEmptyState />
      </div>
    )
  }

  // Main marketplace render
  return (
    <div className="container py-8">
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        returnUrl={router.asPath} // Pass current path for better UX on return
      />
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0}}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('marketplace.hero_title')}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t('marketplace.hero_subtitle')}
        </p>
      </motion.div>

      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 0.2 }}
        >
          <MarketInsights stats={marketStats} />
        </motion.div>
      )}

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.3 }}
      >
        <FilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minAiScore={minAiScore}
          setMinAiScore={setMinAiScore}
          minRating={minRating}
          setMinRating={setMinRating}
          filterAvailability={filterAvailability}
          setFilterAvailability={setFilterAvailability}
          availabilityOptions={availabilityOptions.filter(Boolean) as string[]}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          locations={locations}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={index === products.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover = $2;
                  name: product.title,
                  title: product.title,
                  description: product.description || '',
                  price: product.price || 0,
                  currency: product.currency,
                  category: product.category,
                  tags: product.tags,
                  images: product.images,
                  rating: product.rating || 0,
                  reviewCount: product.reviewCount || 0,
                  created_at: product.createdAt,
                  updated_at: product.createdAt, // Use createdAt for both
                  stock: product.stock,
                  in_stock: (product.stock || 0) > 0
                }}
                onBuy={async () => {
                  if (!isAuthenticated) {
                    setIsAuthModalOpen($2);
                    return, // Stop further execution
                  }
                  try {
                    await router.push(`/checkout/${product.id}`)
                  } catch (error) {
                    logErrorToProduction($2);
                    toast($2);
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.
                    throw error
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth
              />
              
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI {product.aiScore}
                </Badge>
              )}
              
              {/* Featured Badge */}
              {product.featured && (
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading More Indicator */}
      {(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4}).map((_, i) => (
              <SkeletonCard key={`loading-${i}`} />
            ))}
          </div>
        </motion.div>
      )}

      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available products!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {products.length} AI-powered solutions
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            exit={{ opacity: 0, scale: 0}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
