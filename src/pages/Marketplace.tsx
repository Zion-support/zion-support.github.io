import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/ui/spinner';


/**
 * Marketplace component props
 */
export interface MarketplaceProps {_// All props removed - component now fetches data independently}

// Market insights component
const MarketInsights: React.FC<{_stats: unknown}> = (_{_stats}) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${_Math.round(stats.averagePrice)}</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{_stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{_stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{_stats.categoriesCount}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter and sort controls
const FilterControls: React.FC<{_sortBy: string;
  setSortBy: (_sort: string) => void;
  filterCategory: string;
  setFilterCategory: (_category: string) => void;
  categories: string[];
  priceRange: [number, _number];
  setPriceRange: (_range: [number, _number]) => void;
  minAiScore: number;
  setMinAiScore: (_score: number) => void;
  minRating: number;
  setMinRating: (_rating: number) => void;
  filterAvailability: string;
  setFilterAvailability: (_value: string) => void;
  availabilityOptions: string[];
  filterLocation: string;
  setFilterLocation: (_value: string) => void;
  locations: string[];
  showRecommended: boolean;
  setShowRecommended: (_show: boolean) => void;
  loading: boolean;}> = (_{_sortBy, _setSortBy, _filterCategory, _setFilterCategory, _categories, _priceRange, _setPriceRange, _minAiScore, _setMinAiScore, _minRating, _setMinRating, _filterAvailability, _setFilterAvailability, _availabilityOptions, _filterLocation, _setFilterLocation, _locations, _showRecommended, _setShowRecommended, _loading}) => (_<div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {_loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select
        value={_filterCategory}
        onChange={_(e) => setFilterCategory(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        {_categories.map(category => (
          <option key={category} value={_category}>{_category}</option>
        ))}
      </select>
    </div>
    
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select
        value={_sortBy}
        onChange={_(_e) => setSortBy(e.target.value)}
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
        value={_priceRange[0]}
        min={_MIN_PRICE}
        max={_priceRange[1]}
        onChange={_(_e) => setPriceRange([Number(e.target.value), _priceRange[1]])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
      <span>-</span>
      <input
        type="number"
        value={_priceRange[1]}
        min={_priceRange[0]}
        max={_MAX_PRICE}
        onChange={_(_e) => setPriceRange([priceRange[0], _Number(e.target.value)])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">AI ≥</span>
      <input
        type="number"
        value={_minAiScore}
        min={_0}
        max={_100}
        onChange={_(_e) => setMinAiScore(Number(e.target.value))}
        className="w-16 bg-background border border-border px-2 py-1 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">Rating ≥</span>
      <select
        value={_minRating}
        onChange={_(_e) => setMinRating(Number(e.target.value))}
        className="bg-background border border-border px-2 py-1 rounded"
      >
        <option value={_0}>Any</option>
        <option value={_5}>5</option>
        <option value={_4}>4</option>
        <option value={_3}>3</option>
        <option value={_2}>2</option>
        <option value={_1}>1</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <select
        value={_filterAvailability}
        onChange={_(_e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">Any Availability</option>
        {_availabilityOptions.map(opt => (
          <option key={opt} value={_opt as string}>{_opt}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center gap-2">
      <select
        value={_filterLocation}
        onChange={_(_e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>
        {_locations.map(loc => (
          <option key={loc} value={_loc}>{_loc}</option>
        ))}
      </select>
    </div>

    <Button
      variant={_showRecommended ? "default" : "outline"}
      size="sm"
      onClick={_() => setShowRecommended(!showRecommended)}
      className="flex items-center gap-2"
    >
      <Sparkles className="h-4 w-4" />
      {_showRecommended ? "All Products" : "Recommended"}
    </Button>
  </div>
);

/**
 * Enhanced Marketplace component with infinite scroll and AI product generation
 * Uses the auto-feed algorithm to continuously generate IT and AI products
 * Includes intelligent filtering, sorting, and recommendation features
 */
export default function Marketplace() {_const _router = useRouter();
  const { t} = useTranslation();
  const {_toast} = useToast();
  const {_isAuthenticated, _user} = useAuth();
  const _firstRenderRef = useRef(true);
  const _isRefreshingAfterFilterChange = useRef(false); // New ref to track refresh state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [minAiScore, setMinAiScore] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [filterAvailability, setFilterAvailability] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const {_handleApiError, _retryQuery} = useApiErrorHandling();

  // Handle Add Product button with authentication check
  const _handleAddProduct = useCallback__(() => {_if (!isAuthenticated) {
      setIsAuthModalOpen(true); // Use the new auth modal
      return;}

    // Check if user has permission to add products (simplified to admin check)
    if (user && user.userType !== 'admin') {_toast({
        title: "Admin Access Required", _description: "Only administrators can add products to the marketplace. Please contact an administrator.", _variant: "destructive"});
      return;
    }

    // Navigate to admin products page
    router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]);

  // Fetch function for infinite scroll with AI product generation
  const _fetchProducts = useCallback(_async (page: number, _limit: number) => {_await new Promise(_(resolve) => setTimeout(resolve, _200));

    try {
      // Use static marketplace listings data for now (compatible with ProductListing type)
      const _params = {
        page, _limit, _...(filterCategory && { category: filterCategory}),
        sort: sortBy
      };

      logInfo('Marketplace.tsx: Fetching products using static data with params:', {_data: params});
      
      // Use static data that's already of type ProductListing[]
      let items: ProductListing[] = [...MARKETPLACE_LISTINGS];
      
      // Apply category filter from params
      if (filterCategory) {_items = items.filter(_(p) => p.category.toLowerCase() === filterCategory.toLowerCase());}
      
      logInfo('Marketplace.tsx: Raw items from static data before filtering/sorting:', {_data: JSON.stringify(items.slice(0, _5), _null, _2)});

      if (showRecommended) {_items = items.filter(_(p) => p.rating != null && p.rating >= 4.3);}

      items = items.filter(_(p) => {_const _price = p.price || 0;
        const _ai = p.aiScore || 0;
        const _rating = p.rating || 0;
        const _location = (p.location || '').toLowerCase();
        const _availability = (p.availability || '').toLowerCase();
        return (
          price >= priceRange[0] &&
          price <= priceRange[1] &&
          ai >= minAiScore &&
          rating >= minRating &&
          (!filterLocation || location.includes(filterLocation.toLowerCase())) &&
          (!filterAvailability || availability === filterAvailability.toLowerCase())
        );});

      items.sort(_(a, _b) => {_switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0);
          case 'price-high':
            return (b.price || 0) - (a.price || 0);
          case 'rating':
            return (b.rating || 0) - (a.rating || 0);
          case 'popular':
            return (b.reviewCount || 0) - (a.reviewCount || 0);
          case 'ai-score':
            return (b.aiScore || 0) - (a.aiScore || 0);
          case 'newest':
          default:
            // Ensure createdAt exists and is a valid date string before parsing
            const _timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const _timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

            // Handle NaN cases that might arise from invalid date strings
            if (isNaN(timeB) && isNaN(timeA)) return 0; // Both invalid, _treat as equal
            if (isNaN(timeB)) return -1; // b is invalid, _a comes first (appears newer)
            if (isNaN(timeA)) return 1;  // a is invalid, _b comes first

            return timeB - timeA; // Both valid, _sort by time}
      });

      // Apply pagination
      const _startIndex = (page - 1) * limit;
      const _endIndex = startIndex + limit;
      const _paginatedItems = items.slice(startIndex, endIndex);
      
      return {_items: paginatedItems, _hasMore: endIndex < items.length, _total: items.length};
    } catch (err: unknown) {_// Log the error and allow useInfiniteScrollPagination to handle it
      logErrorToProduction('Error in Marketplace fetchProducts:', _{ data: err});
      
      // Show more specific error messages based on the error type
      if (err.response?.status === 403) {_logErrorToProduction("403 Forbidden error - authentication issue");
        // Don't show toast here, _let the AuthModal handle it or rely on ProductCard's tooltip} else if (err.response?.status === 500) {_logErrorToProduction("500 Server error");
        toast({
          title: "Server Error", _description: "The marketplace is temporarily unavailable. Please try again later.", _variant: "destructive"});
      } else {_handleApiError(err); // This might show a toast or log to Sentry}
      
      throw err; // Re-throw to let useInfiniteScrollPagination know about the failure
    }
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);

  // useInfiniteScrollPagination hook
  const {_items: products, _// These are the products to render
    loading, _// True when initially loading or when fetchProducts is running
    error, _// Contains the error object if fetchProducts throws
    hasMore, _// True if the API indicates more items are available
    isFetching, _// True if fetching more items (for infinite scroll)
    lastElementRef, _// Ref for the last element to trigger loading more
    refresh, _// Function to reload data from page 1
    scrollToTop       // Function to scroll to the top of the page} = useInfiniteScrollPagination(fetchProducts, 16); // 16 items per page

  // Effect to refresh data when filters change
  useEffect__(() => {_if (firstRenderRef.current) {
      firstRenderRef.current = false;
      // On initial mount, _useInfiniteScrollPagination handles the first load.
      // We don't want to call refresh() here immediately if it's the very first render
      // unless specifically needed. The new effect below handles re-mounts.
      return;}
    logInfo('Filters changed, initiating refresh. Filters:', {_filterCategory, _sortBy, _showRecommended, _priceRange, _minAiScore, _minRating, _filterAvailability, _filterLocation});
    isRefreshingAfterFilterChange.current = true; // Set flag before refresh
    refresh();
    // scrollToTop(); // Removed from here
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, refresh, toast]); // Added all filter dependencies

  // Effect to explicitly refresh data when the component mounts or re-mounts
  useEffect__(() => {_logInfo('Marketplace.tsx: Component mounted/re-mounted, _calling refresh to ensure fresh data.');
    // We call refresh directly to ensure data is re-fetched.
    // The useInfiniteScrollPagination hook's internal logic will manage its state.
    refresh();
    // Reset firstRenderRef for the new instance of the component, _so filter changes behave as expected.
    firstRenderRef.current = true;}, [refresh]); // `refresh` is a dependency. Ensure it's stable.

  // New effect to scroll to top AFTER products have been updated and refresh flag is set
  useEffect__(() => {_if (isRefreshingAfterFilterChange.current && !loading) { // Check flag and ensure loading is false
      logInfo('Refresh complete and products updated, _scrolling to top.');
      scrollToTop();
      isRefreshingAfterFilterChange.current = false; // Reset flag
      // Optionally, _provide user feedback about the filter change
      // toast({ title: 'Filters updated', _description: 'Displaying products based on new criteria.'});
    }
  }, [products, loading, scrollToTop, toast]); // Depends on products and loading state

  // Calculate market stats
  const _marketStats = useMemo__(() => {_if (products.length === 0) return null;
    return {
      averagePrice: products.reduce(_(sum, _p) => sum + (p.price || 0), _0) / products.length, _averageRating: products.reduce(_(sum, _p) => sum + (p.rating || 0), _0) / products.length, _totalProducts: products.length, _categoriesCount: Array.from(new Set(products.map(p => p.category))).length};
  }, [products]);

  // Get unique categories and other filter values
  const _categories = useMemo__(() => {_return Array.from(_new Set(MARKETPLACE_LISTINGS.map((p) => p.category)));}, []);
  const _locations = useMemo__(() => {_return Array.from(_new Set(MARKETPLACE_LISTINGS.map((p) => p.location).filter(Boolean)));}, []).filter(Boolean) as string[];
  const _availabilityOptions = useMemo__(() => {_return Array.from(_new Set(MARKETPLACE_LISTINGS.map((p) => p.availability).filter(Boolean)));}, []).filter(Boolean) as string[];

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect__(() => {_const _handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state with skeleton
  if (loading && products.length === 0) {_return (
      <div className="container py-8" data-testid="marketplace-loading">
        <motion.div
          initial={{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {_t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {_t('marketplace.hero_subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {_Array.from({ length: 12}).map(_(_, _i) => (
            <SkeletonCard key={_i} />
          ))}
        </div>
      </div>
    );
  }

  // Error state with retry
  if (error && products.length === 0) {_return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <ErrorState error={error} />
          <Button onClick={_refresh}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Empty state (only show when not loading and no products)
  if (!loading && products.length === 0 && !error) {_return (
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {_t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {_t('marketplace.hero_subtitle')}
          </p>
        </motion.div>
        
        <ProductsEmptyState />
      </div>
    );
  }

  // Main marketplace render
  return (_<div className="container py-8">
      <AuthModal
        isOpen={_isAuthModalOpen}
        onClose={_() => setIsAuthModalOpen(false)}
        returnUrl={_router.asPath} // Pass current path for better UX on return
      />
      {_/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={_{ opacity: 0, _y: -20}}
        animate={_{ opacity: 1, _y: 0}}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {_t('marketplace.hero_title')}
        </h1>
        <p className="text-muted-foreground text-lg">
          {_t('marketplace.hero_subtitle')}
        </p>
      </motion.div>

      {_/* Market Insights */}
      {_marketStats && (
        <motion.div
          initial={{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ delay: 0.2}}
        >
          <MarketInsights stats={_marketStats} />
        </motion.div>
      )}

      {_/* Filter Controls */}
      <motion.div
        initial={_{ opacity: 0, _y: 20}}
        animate={_{ opacity: 1, _y: 0}}
        transition={_{ delay: 0.3}}
      >
        <FilterControls
          sortBy={_sortBy}
          setSortBy={_setSortBy}
          filterCategory={_filterCategory}
          setFilterCategory={_setFilterCategory}
          categories={_categories}
          priceRange={_priceRange}
          setPriceRange={_setPriceRange}
          minAiScore={_minAiScore}
          setMinAiScore={_setMinAiScore}
          minRating={_minRating}
          setMinRating={_setMinRating}
          filterAvailability={_filterAvailability}
          setFilterAvailability={_setFilterAvailability}
          availabilityOptions={_availabilityOptions.filter(Boolean) as string[]}
          filterLocation={_filterLocation}
          setFilterLocation={_setFilterLocation}
          locations={_locations}
          showRecommended={_showRecommended}
          setShowRecommended={_setShowRecommended}
          loading={_isFetching}
        />
      </motion.div>

      {_/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={_{ opacity: 0}}
        animate={_{ opacity: 1}}
        transition={_{ delay: 0.4}}
      >
        <AnimatePresence mode="popLayout">
          {_products.map(_(product, _index) => (
            <motion.div
              key={product.id}
              ref={_index === products.length - 1 ? lastElementRef : null}
              initial={_{ opacity: 0, _scale: 0.9}}
              animate={_{ opacity: 1, _scale: 1}}
              exit={_{ opacity: 0, _scale: 0.9}}
              transition={_{ delay: Math.min(index * 0.03, _0.5)}}
              whileHover={_{ scale: 1.02}}
              className="relative group"
            >
              <ProductCard
                product={_{
                  id: product.id, _name: product.title, _title: product.title, _description: product.description || '', _price: product.price || 0, _currency: product.currency, _category: product.category, _tags: product.tags, _images: product.images, _rating: product.rating || 0, _reviewCount: product.reviewCount || 0, _created_at: product.createdAt, _updated_at: product.createdAt, _// Use createdAt for both
                  stock: product.stock, _in_stock: (product.stock || 0) > 0}}
                onBuy={_async () => {
                  if (!isAuthenticated) {
                    setIsAuthModalOpen(true);
                    return; // Stop further execution}
                  try {_await router.push(`/checkout/${product.id}`);
                  } catch (error) {_logErrorToProduction('Failed to navigate to checkout:', _{ data: error});
                    toast({_title: "Navigation Error", _description: "Could not navigate to checkout. Please try again.", _variant: "destructive"});
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.
                    throw error;
                  }
                }}
                buyDisabled={_false} // Still false, ProductCard handles its own disabled state based on auth
              />
              
              {_/* AI Score Badge */}
              {_product.aiScore && product.aiScore > 90 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI {product.aiScore}
                </Badge>
              )}
              
              {_/* Featured Badge */}
              {_product.featured && (
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {_/* Loading More Indicator */}
      {_(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0}}
          animate={_{ opacity: 1}}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {_Array.from({ length: 4}).map(_(_, _i) => (
              <SkeletonCard key={_`loading-${i}`} />
            ))}
          </div>
        </motion.div>
      )}

      {_/* End of Results */}
      {_!hasMore && products.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0}}
          animate={_{ opacity: 1}}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available products!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {_products.length} AI-powered solutions
          </div>
        </motion.div>
      )}

      {_/* Scroll to Top Button */}
      <AnimatePresence>
        {_showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={_{ opacity: 0, _scale: 0}}
            animate={_{ opacity: 1, _scale: 1}}
            exit={_{ opacity: 0, _scale: 0}}
            whileHover={_{ scale: 1.1}}
            whileTap={_{ scale: 0.9}}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
