=======
import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        ))}
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <SortAsc className="h-4 w-4 text-muted-foreground" />;
      <select;
        value={min_rating}
        on_change={e => setMinRating (Number (e.target.value))}
        className='bg - background border border - border px - 2 py - 1 rounded'      >;

        <option value={0}>Any</option>;
        <option value={5}>5</option>;
        <option value={4}>4</option>;
        <option value={3}>3</option>;
        <option value={2}>2</option>;
        <option value={1}>1</option>;
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <select;
        value={filterAvailability}
        onChange={(e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">Any Availability</option>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
    <Button

    </Button>
  </div>
),

/**
 * Enhanced Marketplace component with infinite scroll and AI product generation
 * Uses the auto-feed algorithm to continuously generate IT and AI products
 * Includes intelligent filtering, sorting, and recommendation features
 */

  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]),
  const [minAiScore, setMinAiScore] = useState(0),
  const [minRating, setMinRating] = useState(0),
  const [filterAvailability, setFilterAvailability] = useState(''),
  const [filterLocation, setFilterLocation] = useState(''),
  const { handleApiError, retryQuery } = useApiErrorHandling(),

  // Handle Add Product button with authentication check
  const handleAddProduct = useCallback(() => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true), // Use the new auth modal
      return
    }
    // Check if user has permission to add products (simplified to admin check)
    if (user && user.userType !== 'admin') {
      toast({

        description:
          'Only administrators can add products to the marketplace. Please contact an administrator.'
        variant: 'destructive'
      });
      return;
    }
    // Navigate to admin products page
    router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]);
  // Fetch function for infinite scroll with AI product generation
  const fetchProducts = useCallback(
    async (page: number, limit: number) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      try {
        // Use static marketplace listings data for now (compatible with ProductListing type)
        const params = {
          page
          limit
          ...(filterCategory && { category: filterCategory })
          sort: sortBy
        }
        logInfo(
          'Marketplace.tsx: Fetching products using static data with params:'
          { data: params }
        );
        // Use static data that's already of type ProductListing[]
        let items: ProductListing[] = [...MARKETPLACE_LISTINGS];
        // Apply category filter from params
        if (filterCategory) {
          items = items.filter(
            p => p.category.toLowerCase() === filterCategory.toLowerCase()
          );        }
        logInfo(
          'Marketplace.tsx: Raw items from static data before filtering/sorting:'
          { data: JSON.stringify(items.slice(0, 5), null, 2) }
        );
        if (showRecommended) {
          items = items.filter(p => p.rating != null && p.rating >= 4.3);
        }
        items = items.filter(p => {
          const price = p.price |0;
          const ai = p.aiScore |0;
          const rating = p.rating |0;
          const location = (p.location |'').toLowerCase();
          const availability = (p.availability |'').toLowerCase();
          return (
            price >= priceRange[0] &&
            price <= priceRange[1] &&
            ai >= minAiScore &&
            rating >= minRating &&
            (!filterLocation |
              location.includes(filterLocation.toLowerCase())) &&
            (!filterAvailability |
              availability === filterAvailability.toLowerCase())
          );
        });
        items.sort((a, b) => {
          switch (sortBy) {
            case 'price-low':
              return (a.price |0) - (b.price |0);
            case 'price-high':
              return (b.price |0) - (a.price |0);
            case 'rating':
              return (b.rating |0) - (a.rating |0);
            case 'popular':
              return (b.reviewCount |0) - (a.reviewCount |0);
            case 'ai-score':
              return (b.aiScore |0) - (a.aiScore |0);
            case 'newest':
            default:
              // Ensure createdAt exists and is a valid date string before parsing
              const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
              const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
              // Handle NaN cases that might arise from invalid date strings
              if (isNaN(timeB) && isNaN(timeA)) return 0; // Both invalid, treat as equal
              if (isNaN(timeB)) return -1; // b is invalid, a comes first (appears newer)
              if (isNaN(timeA)) return 1; // a is invalid, b comes first
              return timeB - timeA; // Both valid, sort by time
          }
        });
        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = items.slice(startIndex, endIndex);
        return {
          items: paginatedItems
          hasMore: endIndex < items.length
          total: items.length
        }
      } catch (err: any) {
        // Log the error and allow useInfiniteScrollPagination to handle it
        logErrorToProduction('Error in Marketplace fetchProducts:', {
          data: err
        });
        // Show more specific error messages based on the error type
        if (err.response?.status === 403) {
          logErrorToProduction('403 Forbidden error - authentication issue');
          // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip
        } else if (err.response?.status === 500) {
          logErrorToProduction('500 Server error');
          toast({
            title: 'Server Error'
            description:
              'The marketplace is temporarily unavailable. Please try again later.'
            variant: 'destructive'
          });
        } else {
          handleApiError(err); // This might show a toast or log to Sentry
        }
        throw err; // Re-throw to let useInfiniteScrollPagination know about the failure
      }
    }
    [
      filterCategory
      sortBy
      showRecommended
      priceRange
      minAiScore
      minRating
      filterAvailability
      filterLocation
      handleApiError
      toast
    ]
  );
  // useInfiniteScrollPagination hook
  const {
    items: products, // These are the products to render
    loading, // True when initially loading or when fetchProducts is running
    error, // Contains the error object if fetchProducts throws
    hasMore, // True if the API indicates more items are available
    isFetching, // True if fetching more items (for infinite scroll)
    lastElementRef, // Ref for the last element to trigger loading more
    refresh, // Function to reload data from page 1
    scrollToTop, // Function to scroll to the top of the page
  } = useInfiniteScrollPagination(fetchProducts, 16); // 16 items per page
  // Effect to refresh data when filters change
  useEffect((,) => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      // On initial mount, useInfiniteScrollPagination handles the first load.
      // We don't want to call refresh() here immediately if it's the very first render
      // unless specifically needed. The new effect below handles re-mounts.
      return;
    }
    logInfo('Filters changed, initiating refresh. Filters:', {
      filterCategory
      sortBy
      showRecommended
      priceRange
      minAiScore
      minRating
      filterAvailability
      filterLocation
    });
    isRefreshingAfterFilterChange.current = true; // Set flag before refresh
    refresh();
    // scrollToTop(); // Removed from here
  }, [
    filterCategory
    sortBy
    showRecommended
    priceRange
    minAiScore
    minRating
    filterAvailability
    filterLocation
    refresh
    toast
  ]); // Added all filter dependencies
  // Effect to explicitly refresh data when the component mounts or re-mounts
  useEffect(() => {
    logInfo(
      'Marketplace.tsx: Component mounted/re-mounted, calling refresh to ensure fresh data.'
    );    // We call refresh directly to ensure data is re-fetched.
    // The useInfiniteScrollPagination hook's internal logic will manage its state.
    refresh();
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.
    firstRenderRef.current = true;
  }, [refresh]); // `refresh` is a dependency. Ensure it's stable.
  // New effect to scroll to top AFTER products have been updated and refresh flag is set
  useEffect(() => {
    if (isRefreshingAfterFilterChange.current && !loading) {
      // Check flag and ensure loading is false
      logInfo('Refresh complete and products updated, scrolling to top.');
      scrollToTop();
      isRefreshingAfterFilterChange.current = false; // Reset flag      // Optionally, provide user feedback about the filter change
      // toast({ title: 'Filters updated', description: 'Displaying products based on new criteria.' });
    }
  }, [products, loading, scrollToTop, toast]); // Depends on products and loading state
  // Calculate market stats
  const marketStats = useMemo(() => {
    if (products.length === 0) return null;
    return {
      averagePrice:
        products.reduce((sum, p) => sum + (p.price |0), 0) / products.length
      averageRating:
        products.reduce((sum, p) => sum + (p.rating |0), 0) / products.length,      totalProducts: products.length
      categoriesCount: Array.from(new Set(products.map(p => p.category)))
        .length
    }
  }, [products]);
  // Get unique categories and other filter values
  const categories = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map(p => p.category)));
  }, []);
  const locations = useMemo(() => {
    return Array.from(
      new Set(MARKETPLACE_LISTINGS.map(p => p.location).filter(Boolean))
    );
  }, []).filter(Boolean) as string[];
  const availabilityOptions = useMemo(() => {
    return Array.from(
      new Set(MARKETPLACE_LISTINGS.map(p => p.availability).filter(Boolean))
    );
  }, []).filter(Boolean) as string[];
  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state with skeleton
  if (loading && products.length === 0) {
    return (
      <div className="container py-8" data-testid="marketplace-loading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          {t('marketplace.hero_subtitle')}
        </p>
      </motion.div>
      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MarketInsights stats={marketStats} />
        </motion.div>
      )}
      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >

              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}

            >
              <ProductCard
                product={{
                  id: product.id
                  name: product.title
                  title: product.title
                  description: product.description |''
                  price: product.price |0
                  currency: product.currency
                  category: product.category
                  tags: product.tags
                  images: product.images
                  rating: product.rating |0
                  reviewCount: product.reviewCount |0
                  created_at: product.createdAt
                  updated_at: product.createdAt, // Use createdAt for both

                }}
                onBuy = {async () => {
                  if (!isAuthenticated) {
                    setIsAuthModalOpen(true);
                    return; // Stop further execution
                  }                  try {
                    await router.push(`/checkout/${product.id}`);

                  in_stock: (product.stock || 0) > 0
                }}
                onBuy={async () => {;
                  if (!isAuthenticated) {;
                    setIsAuthModalOpen(true),;
                    return, // Stop further execution;
                  }
                  try {
                    await router.push(`/checkout/${product.id}`)
                  AI {product.aiScore}
                </Badge>
              )}



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
=======
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              )}
            </motion && motion.div>;
          ))}
<<<<<<< HEAD
        </AnimatePresence>
      </motion.div>
      {/* Loading More Indicator */}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
<<<<<<< HEAD
;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}

          >;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion.button>;
        )}
      </AnimatePresence>;
    </div>;
  );
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
<<<<<<< HEAD
