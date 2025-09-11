import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';

import ProductCard from '@/components/ProductCard';

import { use_router } from 'next / router';
import { useApiErrorHandling } from '@/hooks / useApiErrorHandling';
import ProductCard from '@/components / ProductCard';
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
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <SortAsc className="h-4 w-4 text-muted-foreground" />;
      <select;
        <option value={0}>Any</option>;
        <option value={5}>5</option>;
        <option value={4}>4</option>;
        <option value={3}>3</option>;
        <option value={2}>2</option>;
        <option value={1}>1</option>;
      </select>;
    </div>;
        {availabilityOptions.map(opt => (
          <option key={opt} value={opt as string}>{opt}</option>
        ))}
      </select>
    </div>

    <div className='flex items-center gap-2'>;
      <select

        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>

        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}

      </select>;
    </div>;

    <div className='flex items-center gap-2'>;

      <select
        value={filterLocation}
        onChange={e => setFilterLocation(e && e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >;
        <option value=''>All Locations</option>;
        {locations && locations.map(loc => (;
          <option key={loc} value={loc}>;
            {loc}
          </option>;
        ))}

      </select>;
    </div>;

    <Button
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),
                    toast({
                      title: "Navigation Error",
                      description: "Could not navigate to checkout. Please try again.",
                      variant: "destructive"}),
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth
              />

              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>
                  <Sparkles className='h-3 w-3 mr-1' />
                    throw error
                  try {;
                    await router.push(`/checkout/${product.id}`);
                  } catch (error) {;
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),;
                    toast({;
                      title: "Navigation Error",;
                      description: "Could not navigate to checkout. Please try again.",;
                      variant: "destructive"});
                    // Re-throw to allow ProductCard's catch to also run if needed;
                    // though ProductCard will reset its state in .finally() regardless.;
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth;
              />;
              {/* AI Score Badge */}
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (;
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">;
                  <Sparkles className="h-3 w-3 mr-1" />;
                </Badge>
              )}

              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;

              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;
              )}
            </motion && motion.div>;
          ))}

      {(isFetching || loading) && (

        <motion.div
        </AnimatePresence>;
      </motion && motion.div>;

      {/* Loading More Indicator */}
      {(isFetching || loading) && (;
        <motion&& motion.div
          className='mt-8'
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (              <SkeletonCard key={`loading-${i}`} />
      {(isFetching || loading) && (;
        <motion.div;
          className="mt-8";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">;
            {Array.from({ length: 4 }).map((_, i) => (;
              <SkeletonCard key={`loading-${i}`} />;

            ))}
          </div>
        </div>

  // Handle Add Product button with authentication check
  const handleAddProduct = useCallback((,) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true); // Use the new auth modal
      return;
    }
    // Check if user has permission to add products (simplified to admin check)
    if (user && user.userType !== 'admin') {
      toast({

        title: 'Admin Access Required',

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
    <div className='flex items - center gap - 2'>;
      <select;
        value={filter_availability}
        on_change={e => setFilterAvailability (e.target.value)}
        className='bg - background border border - border px - 3 py - 2 rounded'      >;
        <option value=''>Any Availability</option>;
        {availability_options.map (opt => (
          <option key={opt} value={opt as string}>;
            {opt}
          </option>))}
      </select>;
    </div>;
    <div className='flex items - center gap - 2'>;
      <select;
        value={filter_location}
        on_change={e => setFilterLocation (e.target.value)}
        className='bg - background border border - border px - 3 py - 2 rounded'      >;
        <option value=''>All Locations</option>;
        {locations.map (loc => (
          <option key={loc} value={loc}>;
            {loc}
          </option>))}
      </select>;
    </div>;
    <Button;
      variant={show_recommended ? 'default' : 'outline'}
      size='sm';
      on_click={() => setShowRecommended (!show_recommended)}
      className='flex items - center gap - 2'    >;
      <Sparkles className='h - 4 w - 4' />;
      {show_recommended ? 'All Products' : 'Recommended'}
    </Button>;
  </div>);
;
/**;
* Enhanced Marketplace component with infinite scroll and AI product generation;
* Uses the auto - feed algorithm to continuously generate IT and AI products;
* Includes intelligent filtering, sorting, and recommendation features;
*/;
export default /**
 * Marketplace - Function description
 */
function Marketplace() {
  const router = use_router ();
  const { t } = use_translation ();
  const { toast } = use_toast ();
  const { is_authenticated, user } = use_auth ();
  const firstRenderRef = useRef (true);
  const isRefreshingAfterFilterChange = useRef (false); // New ref to track refresh state;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState (false);
;
  const [sort_by, setSortBy] = useState ('newest');
  const [filter_category, setFilterCategory] = useState ('');
  const [show_recommended, setShowRecommended] = useState (false);
  const [price_range, setPriceRange] = useState<[number, number]>([;
    MIN_PRICE,
    MAX_PRICE,
  ]);
  const [minAiScore, setMinAiScore] = useState (0);
  const [min_rating, setMinRating] = useState (0);
  const [filter_availability, setFilterAvailability] = useState ('');
  const [filter_location, setFilterLocation] = useState ('');
  const { handleApiError, retry_query } = useApiErrorHandling ();
;
  // Handle Add Product button with authentication check;
  const handleAddProduct = useCallback ((, ) => {
    // Check condition
if ( {) {
  $2
}
      setIsAuthModalOpen (true); // Use the new auth modal;
      return;
    }
    // Check if user has permission to add products (simplified to admin check);
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Admin Access Required',
        description:;
          'Only administrators can add products to the marketplace. Please contact an administrator.',
        variant: 'destructive',
      });
      return;
    }
    // Navigate to admin products page;
    router.push ('/admin / products');
  }, [is_authenticated, user, router, toast]);
;
  // Fetch function for infinite scroll with AI product generation;
  const fetch_products = useCallback (
    async (page: number, limit: number) => {
      await new Promise (resolve => set_timeout (resolve, 200));
      try {
        // Use static marketplace listings data for now (compatible with ProductListing type);
        const params = {

  // Handle Add Product button with authentication check;
  const handleAddProduct = useCallback((,) => {;
    if (!isAuthenticated) {;
      setIsAuthModalOpen(true); // Use the new auth modal;
      return;
    }

    // Check if user has permission to add products (simplified to admin check);
    if (user && user.userType !== 'admin') {;
      toast({;
        title: 'Admin Access Required',;
        description:;
          'Only administrators can add products to the marketplace. Please contact an administrator.',;
        variant: 'destructive',;
      });
      return;
    }

    // Navigate to admin products page;
    router && router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]);

  // Fetch function for infinite scroll with AI product generation;
  const fetchProducts = useCallback(;
    async (page: number, limit: number) => {;
      await new Promise(resolve => setTimeout(resolve, 200));
      try {;
        // Use static marketplace listings data for now (compatible with ProductListing type);
        const params = {;
          page,;
          limit,;
          ...(filterCategory && { category: filterCategory }),;
          sort: sortBy,;
        };

        logInfo(;
          'Marketplace && Marketplace.tsx: Fetching products using static data with params:',;
          { data: params }
        );

        // Use static data that's already of type ProductListing[];
        let items: ProductListing[] = [...MARKETPLACE_LISTINGS];

        // Apply category filter from params;
        if (filterCategory) {;
          items = items && items.filter(;
            p => p && p.category.toLowerCase() === filterCategory && filterCategory.toLowerCase();
          );        }

        logInfo(;
          'Marketplace && Marketplace.tsx: Raw items from static data before filtering/sorting:',;
          { data: JSON && JSON.stringify(items && items.slice(0, 5), null, 2) }
        );

        if (showRecommended) {;
          items = items && items.filter(p => p && p.rating != null && p && p.rating >= 4 && 4.3);
        }

        items = items && items.filter(p => {;
          const price = p && p.price || 0;
          const ai = p && p.aiScore || 0;
          const rating = p && p.rating || 0;
          const location = (p && p.location || '').toLowerCase();
          const availability = (p && p.availability || '').toLowerCase();
          return (
            price >= priceRange[0] &&;
            price <= priceRange[1] &&;
            ai >= minAiScore &&;
            rating >= minRating &&;
            (!filterLocation ||;
              location && location.includes(filterLocation && filterLocation.toLowerCase())) &&;
            (!filterAvailability ||;
              availability === filterAvailability && filterAvailability.toLowerCase());
          );
        });

        items && items.sort((a, b) => {;
          switch (sortBy) {;
            case 'price-low':;
              return (a && a.price || 0) - (b && b.price || 0);
            case 'price-high':;
              return (b && b.price || 0) - (a && a.price || 0);
            case 'rating':;
              return (b && b.rating || 0) - (a && a.rating || 0);
            case 'popular':;
              return (b && b.reviewCount || 0) - (a && a.reviewCount || 0);
            case 'ai-score':;
              return (b && b.aiScore || 0) - (a && a.aiScore || 0);
            case 'newest':;
            default:;
              // Ensure createdAt exists and is a valid date string before parsing;
              const timeA = a && a.createdAt ? new Date(a && a.createdAt).getTime() : 0;
              const timeB = b && b.createdAt ? new Date(b && b.createdAt).getTime() : 0;

              // Handle NaN cases that might arise from invalid date strings;
              if (isNaN(timeB) && isNaN(timeA)) return 0; // Both invalid, treat as equal;
              if (isNaN(timeB)) return -1; // b is invalid, a comes first (appears newer);
              if (isNaN(timeA)) return 1; // a is invalid, b comes first;

              return timeB - timeA; // Both valid, sort by time;
          }
        });

        // Apply pagination;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = items && items.slice(startIndex, endIndex);

        return {;
          items: paginatedItems,;
          hasMore: endIndex < items && items.length,;
          total: items && items.length,;
        };
      } catch (err: any) {;
        // Log the error and allow useInfiniteScrollPagination to handle it;
        logErrorToProduction('Error in Marketplace fetchProducts:', {;
          data: err,;
        });

        // Show more specific error messages based on the error type;
        if (err && err.response?.status === 403) {;

          logErrorToProduction('403 Forbidden error - authentication issue');
          // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip;
        } else if (err && err.response?.status === 500) {;
          logErrorToProduction('500 Server error');

          toast({;
            title: 'Server Error',;
            description:;
              'The marketplace is temporarily unavailable. Please try again later.',;
            variant: 'destructive',;

          });
        } else {;
          handleApiError(err); // This might show a toast or log to Sentry;
        }

          page,
          limit,
          ...(filter_category && { category: filter_category }),
          sort: sort_by,
        }
;
        log_info (
          'Marketplace.tsx: Fetching products using static data with params:',
          { data: params }
        );
;
        // Use static data that's already of type ProductListing[];
        let items: ProductListing[] = [...MARKETPLACE_LISTINGS];
;
        // Apply category filter from params;
        // Check condition
if ( {) {
  $2
}
          items = items.filter (
            p => p.category.toLowerCase () === filter_category.toLowerCase ());        }
        log_info (
          'Marketplace.tsx: Raw items from static data before filtering / sorting:',
          { data: JSON.stringify (items.slice (0, 5), null, 2) }
        );
;
        // Check condition
if ( {) {
  $2
}
          items = items.filter (p => p.rating != null && p.rating >= 4.3);
        }
        items = items.filter (p => {
          const price = p.price || 0;
          const ai = p.ai_score || 0;
          const rating = p.rating || 0;
          const location = (p.location || '').toLowerCase ();
          const availability = (p.availability || '').toLowerCase ();
          return (
            price >= price_range[0] &&;
            price <= price_range[1] &&;
            ai >= minAiScore &&;
            rating >= min_rating &&;
            (!filter_location ||;
              location.includes (filter_location.toLowerCase ())) &&;
            (!filter_availability ||;
              availability === filter_availability.toLowerCase ()));
        });
;
        items.sort ((a, b) => {
          switch (sort_by) {
            case 'price - low':;
              return (a.price || 0) - (b.price || 0);
            case 'price - high':;
              return (b.price || 0) - (a.price || 0);
            case 'rating':;
              return (b.rating || 0) - (a.rating || 0);
            case 'popular':;
              return (b.review_count || 0) - (a.review_count || 0);
            case 'ai - score':;
              return (b.ai_score || 0) - (a.ai_score || 0);
            case 'newest':;
            default:;
              // Ensure created_at exists and is a valid date string before parsing;
              const time_a = a.created_at ? new Date (a.created_at).get_time () : 0;
              const time_b = b.created_at ? new Date (b.created_at).get_time () : 0;
;
              // Handle NaN cases that might arise from invalid date strings;
              if (&& isNaN (time_a)) return 0) {
  $2
} // Both invalid, treat as equal;
              if () return -1) {
  $2
} // b is invalid, a comes first (appears newer);
              if () return 1) {
  $2
} // a is invalid, b comes first;
              return time_b - time_a; // Both valid, sort by time;
          }
        });
;
        // Apply pagination;
        const start_index = (page - 1) * limit;
        const end_index = start_index + limit;
        const paginated_items = items.slice (start_index, end_index);
;
        return {
          items: paginated_items,
          has_more: end_index < items.length,
          total: items.length,
        }
      } catch (err: any) {
        // Log the error and allow useInfiniteScrollPagination to handle it;
        logErrorToProduction ('Error in Marketplace fetch_products:', {
          data: err,
        });
;
        // Show more specific error messages based on the error type;
        // Check condition
if ( {) {
  $2
}
          logErrorToProduction ('403 Forbidden error - authentication issue');
          // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip;
        } else // Check condition
if ( {) {
  $2
}
          logErrorToProduction ('500 Server error');
          toast ({
            title: 'Server Error',
            description:;
              'The marketplace is temporarily unavailable. Please try again later.',
            variant: 'destructive',
          });
        } else {
          handleApiError (err); // This might show a toast or log to Sentry;
        }
        throw err; // Re - throw to let useInfiniteScrollPagination know about the failure;
      }
    },
    [;
      filter_category,
      sort_by,
      show_recommended,
      price_range,
      minAiScore,
      min_rating,
      filter_availability,
      filter_location,
      handleApiError,
      toast,
    ]);
;
  // useInfiniteScrollPagination hook;
  const {
    items: products, // These are the products to render;
    loading, // True when initially loading or when fetch_products is running;
    error, // Contains the error object if fetch_products throws;
    has_more, // True if the API indicates more items are available;
    is_fetching, // True if fetching more items (for infinite scroll);
    lastElementRef, // Ref for the last element to trigger loading more;
    refresh, // Function to reload data from page 1;
    scrollToTop, // Function to scroll to the top of the page;
  } = useInfiniteScrollPagination (fetch_products, 16); // 16 items per page;
  // Effect to refresh data when filters change;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}

      firstRenderRef.current = false;
      // On initial mount, useInfiniteScrollPagination handles the first load.;
      // We don't want to call refresh () here immediately if it's the very first render;
      // unless specifically needed. The new effect below handles re - mounts.;
      return;
    }

        throw err; // Re-throw to let useInfiniteScrollPagination know about the failure;
      }
    },;
    [;
      filterCategory,;
      sortBy,;
      showRecommended,;
      priceRange,;
      minAiScore,;
      minRating,;
      filterAvailability,;
      filterLocation,;
      handleApiError,;
      toast,;
    ];
  );

  // useInfiniteScrollPagination hook;
  const {;
    items: products, // These are the products to render;
    loading, // True when initially loading or when fetchProducts is running;
    error, // Contains the error object if fetchProducts throws;
    hasMore, // True if the API indicates more items are available;
    isFetching, // True if fetching more items (for infinite scroll);
    lastElementRef, // Ref for the last element to trigger loading more;
    refresh, // Function to reload data from page 1;
    scrollToTop, // Function to scroll to the top of the page;
  } = useInfiniteScrollPagination(fetchProducts, 16); // 16 items per page;

  // Effect to refresh data when filters change;
  useEffect((,) => {;
    if (firstRenderRef && firstRenderRef.current) {;
      firstRenderRef && firstRenderRef.current = false;
      // On initial mount, useInfiniteScrollPagination handles the first load.;
      // We don't want to call refresh() here immediately if it's the very first render;
      // unless specifically needed. The new effect below handles re-mounts.;
      return;
    }
    logInfo('Filters changed, initiating refresh. Filters:', {;
      filterCategory,;
      sortBy,;
      showRecommended,;
      priceRange,;
      minAiScore,;
      minRating,;
      filterAvailability,;
      filterLocation,;

    });
    isRefreshingAfterFilterChange && isRefreshingAfterFilterChange.current = true; // Set flag before refresh;
    refresh();

    // scrollToTop(); // Removed from here;
  }, [;
    filterCategory,;
    sortBy,;
    showRecommended,;
    priceRange,;
    minAiScore,;
    minRating,;
    filterAvailability,;
    filterLocation,;
    refresh,;
    toast,;
  ]); // Added all filter dependencies;

  // Effect to explicitly refresh data when the component mounts or re-mounts;
  useEffect(() => {;
    logInfo(;
      'Marketplace && Marketplace.tsx: Component mounted/re-mounted, calling refresh to ensure fresh data.';
    );    // We call refresh directly to ensure data is re-fetched.;
    // The useInfiniteScrollPagination hook's internal logic will manage its state.;
    refresh();
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.;
    firstRenderRef && firstRenderRef.current = true;
  }, [refresh]); // `refresh` is a dependency. Ensure it's stable.;

  // New effect to scroll to top AFTER products have been updated and refresh flag is set;
  useEffect(() => {;
    if (isRefreshingAfterFilterChange && isRefreshingAfterFilterChange.current && !loading) {;
      // Check flag and ensure loading is false;

      logInfo('Refresh complete and products updated, scrolling to top.');
      scrollToTop();
      isRefreshingAfterFilterChange && isRefreshingAfterFilterChange.current = false; // Reset flag      // Optionally, provide user feedback about the filter change;
      // toast({ title: 'Filters updated', description: 'Displaying products based on new criteria.' });
    }

  }, [products, loading, scrollToTop, toast]); // Depends on products and loading state;

  // Calculate market stats;
  const marketStats = useMemo(() => {;
    if (products && products.length === 0) return null;
    return {;
      averagePrice:;
        products && products.reduce((sum, p) => sum + (p && p.price || 0), 0) / products && products.length,;
      averageRating:;
        products && products.reduce((sum, p) => sum + (p && p.rating || 0), 0) / products && products.length,      totalProducts: products && products.length,;
      categoriesCount: Array && Array.from(new Set(products && products.map(p => p && p.category)));
        .length,;
    };
  }, [products]);

  // Get unique categories and other filter values;
  const categories = useMemo(() => {;
    return Array && Array.from(new Set(MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(p => p && p.category)));

  }, []);
  const locations = useMemo(() => {;
    return Array && Array.from(;
      new Set(MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(p => p && p.location).filter(Boolean));
    );
  }, []).filter(Boolean) as string[];
  const availabilityOptions = useMemo(() => {;
    return Array && Array.from(;
      new Set(MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(p => p && p.availability).filter(Boolean));
    );
  }, []).filter(Boolean) as string[];

        title: "Admin Access Required",
        description: "Only administrators can add products to the marketplace. Please contact an administrator.",
        variant: "destructive"}),
      return
        className="bg-background border border-border px-3 py-2 rounded";
      >;
        <option value="">Any Availability</option>;
        {availabilityOptions.map(opt => (;
          <option key={opt} value={opt as string}>{opt}</option>;
        ))}
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <select;
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded";
      >;
        <option value="">All Locations</option>;
        {locations.map(loc => (;
          <option key={loc} value={loc}>{loc}</option>;
        ))}
      </select>;
    </div>;
    <Button;
      variant={showRecommended ? "default" : "outline"}
      size="sm";
      onClick={() => setShowRecommended(!showRecommended)}
      className="flex items-center gap-2";
    >;
      <Sparkles className="h-4 w-4" />;
      {showRecommended ? "All Products" : "Recommended"}
    </Button>;
  </div>;
),;
/**;
 * Enhanced Marketplace component with infinite scroll and AI product generation;
 * Uses the auto-feed algorithm to continuously generate IT and AI products;
 * Includes intelligent filtering, sorting, and recommendation features;
 */;
export default function Marketplace() {;
  const router = useRouter(),;
  const { t } = useTranslation(),;
  const { toast } = useToast(),;
  const { isAuthenticated, user } = useAuth(),;
  const firstRenderRef = useRef(true),;
  const isRefreshingAfterFilterChange = useRef(false), // New ref to track refresh state;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false),;
  const [sortBy, setSortBy] = useState('newest'),;
  const [filterCategory, setFilterCategory] = useState(''),;
  const [showRecommended, setShowRecommended] = useState(false),;
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]),;
  const [minAiScore, setMinAiScore] = useState(0),;
  const [minRating, setMinRating] = useState(0),;
  const [filterAvailability, setFilterAvailability] = useState(''),;
  const [filterLocation, setFilterLocation] = useState(''),;
  const { handleApiError, retryQuery } = useApiErrorHandling(),;
  // Handle Add Product button with authentication check;
  const handleAddProduct = useCallback(() => {;
    if (!isAuthenticated) {;
      setIsAuthModalOpen(true), // Use the new auth modal;
      return;
    }
;
    // Check if user has permission to add products (simplified to admin check);
    if (user && user.userType !== 'admin') {;
      toast({;
        title: "Admin Access Required",;
        description: "Only administrators can add products to the marketplace. Please contact an administrator.",;
        variant: "destructive"}),;
      return;
    }
;
    // Navigate to admin products page;
    router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]),;
  // Fetch function for infinite scroll with AI product generation;
  const fetchProducts = useCallback(async (page: number, limit: number) => {;
    await new Promise((resolve) => setTimeout(resolve, 200)),;
    try {;
      // Use static marketplace listings data for now (compatible with ProductListing type);
      const params = {;
        page,;
        limit,;
        ...(filterCategory && { category: filterCategory }),;
        sort: sortBy;
      },;
      logInfo('Marketplace.tsx: Fetching products using static data with params:', { data: params }),;
      // Use static data that's already of type ProductListing[];
      let items: ProductListing[] = [...MARKETPLACE_LISTINGS],;
      // Apply category filter from params;
      if (filterCategory) {;
        items = items.filter((p) => p.category.toLowerCase() === filterCategory.toLowerCase());
      }
;
      logInfo('Marketplace.tsx: Raw items from static data before filtering/sorting:', { data: JSON.stringify(items.slice(0, 5), null, 2) }),;
      if (showRecommended) {;
        items = items.filter((p) => p.rating != null && p.rating >= 4.3);
      }
;
      items = items.filter((p) => {;
        const price = p.price || 0,;
        const ai = p.aiScore || 0,;
        const rating = p.rating || 0,;
        const location = (p.location || '').toLowerCase(),;
        const availability = (p.availability || '').toLowerCase(),;
        return (;
          price >= priceRange[0] &&;
          price <= priceRange[1] &&;
          ai >= minAiScore &&;
          rating >= minRating &&;
          (!filterLocation || location.includes(filterLocation.toLowerCase())) &&;
          (!filterAvailability || availability === filterAvailability.toLowerCase());
        );
      }),;
      items.sort((a, b) => {;
        switch (sortBy) {;
          case 'price-low':;
            return (a.price || 0) - (b.price || 0),;
          case 'price-high':;
            return (b.price || 0) - (a.price || 0),;
          case 'rating':;
            return (b.rating || 0) - (a.rating || 0),;
          case 'popular':;
            return (b.reviewCount || 0) - (a.reviewCount || 0),;
          case 'ai-score':;
            return (b.aiScore || 0) - (a.aiScore || 0),;
          case 'newest':;
          default: // Ensure createdAt exists and is a valid date string before parsing;
            const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0,;
            const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0,;
            // Handle NaN cases that might arise from invalid date strings;
            if (isNaN(timeB) && isNaN(timeA)) return 0, // Both invalid, treat as equal;
            if (isNaN(timeB)) return -1, // b is invalid, a comes first (appears newer);
            if (isNaN(timeA)) return 1,  // a is invalid, b comes first;
            return timeB - timeA, // Both valid, sort by time;
        }
      }),;
      // Apply pagination;
      const startIndex = (page - 1) * limit,;
      const endIndex = startIndex + limit,;
      const paginatedItems = items.slice(startIndex, endIndex),;
      return {;
        items: paginatedItems,;
        hasMore: endIndex < items.length,;
        total: items.length;
      }
    } catch (err: any) {
      // Log the error and allow useInfiniteScrollPagination to handle it
      logErrorToProduction('Error in Marketplace fetchProducts:', { data: err }),
      
      // Show more specific error messages based on the error type
      if (err.response?.status === 403) {
        logErrorToProduction("403 Forbidden error - authentication issue"),
        // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip
      } else if (err.response?.status === 500) {
        logErrorToProduction("500 Server error"),
        toast({
          title: "Server Error", 
          description: "The marketplace is temporarily unavailable. Please try again later.",
          variant: "destructive"})
      } else {
        handleApiError(err), // This might show a toast or log to Sentry
    } catch (err: any) {;
      // Log the error and allow useInfiniteScrollPagination to handle it;
      logErrorToProduction('Error in Marketplace fetchProducts:', { data: err }),;
      // Show more specific error messages based on the error type;
      if (err.response?.status === 403) {;
        logErrorToProduction("403 Forbidden error - authentication issue"),;
        // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip;
      } else if (err.response?.status === 500) {;
        logErrorToProduction("500 Server error"),;
        toast({;
          title: "Server Error",;
          description: "The marketplace is temporarily unavailable. Please try again later.",;
          variant: "destructive"});
      } else {;
        handleApiError(err), // This might show a toast or log to Sentry;
      }
;
      throw err, // Re-throw to let useInfiniteScrollPagination know about the failure;
    }
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]),;
  // useInfiniteScrollPagination hook;
  const {;
    items: products, // These are the products to render;
    loading,          // True when initially loading or when fetchProducts is running;
    error,            // Contains the error object if fetchProducts throws;
    hasMore,          // True if the API indicates more items are available;
    isFetching,       // True if fetching more items (for infinite scroll);
    lastElementRef,   // Ref for the last element to trigger loading more;
    refresh,          // Function to reload data from page 1;
    scrollToTop       // Function to scroll to the top of the page;
  } = useInfiniteScrollPagination(fetchProducts, 16), // 16 items per page;
  // Effect to refresh data when filters change;
  useEffect(() => {;
    if (firstRenderRef.current) {;
      firstRenderRef.current = false,;
      // On initial mount, useInfiniteScrollPagination handles the first load.;
      // We don't want to call refresh() here immediately if it's the very first render;
      // unless specifically needed. The new effect below handles re-mounts.;
      return;
    }
    logInfo('Filters changed, initiating refresh. Filters:', { filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation }),;
    isRefreshingAfterFilterChange.current = true, // Set flag before refresh;
    refresh(),;
    // scrollToTop(), // Removed from here;
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, refresh, toast]), // Added all filter dependencies;
  // Effect to explicitly refresh data when the component mounts or re-mounts;
  useEffect(() => {;
    logInfo('Marketplace.tsx: Component mounted/re-mounted, calling refresh to ensure fresh data.'),;
    // We call refresh directly to ensure data is re-fetched.;
    // The useInfiniteScrollPagination hook's internal logic will manage its state.;
    refresh(),;
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.;
    firstRenderRef.current = true;
  }, [refresh]), // `refresh` is a dependency. Ensure it's stable.;
  // New effect to scroll to top AFTER products have been updated and refresh flag is set;
  useEffect(() => {;
    if (isRefreshingAfterFilterChange.current && !loading) { // Check flag and ensure loading is false;
      logInfo('Refresh complete and products updated, scrolling to top.'),;
      scrollToTop(),;
      isRefreshingAfterFilterChange.current = false, // Reset flag;
      // Optionally, provide user feedback about the filter change;
      // toast({ title: 'Filters updated', description: 'Displaying products based on new criteria.' });
    }
  }, [products, loading, scrollToTop, toast]), // Depends on products and loading state;
  // Calculate market stats;
  const marketStats = useMemo(() => {;
    if (products.length === 0) return null,;
    return {;
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,;
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,;
      totalProducts: products.length,;
      categoriesCount: Array.from(new Set(products.map(p => p.category))).length;
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
  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  // Loading state with skeleton
  if (loading && products.length === 0) {

  // Show scroll to top button;
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {    const handleScroll = () => {;
      setShowScrollTop(window && window.scrollY > 800);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state with skeleton;
  if (loading && products && products.length === 0) {;
    return (
      <div className='container py-8' data-testid='marketplace-loading'>;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-8'>;
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>;
            {t('marketplace && marketplace.hero_title')}
          </h1>;
          <p className='text-muted-foreground text-lg'>;
            {t('marketplace && marketplace.hero_subtitle')}
          </p>;
        </motion && motion.div>;
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>;
          {Array && Array.from({ length: 12 }).map((_, i) => (            <SkeletonCard key={i} />;
          ))}
        </div>;
      </div>;
    );
  }

  // Error state with retry;
  if (error && products && products.length === 0) {;

    return (
      <div className='container py-8'>;
        <div className='text-center space-y-4'>;
          <ErrorState error={error} />;
          <Button onClick={refresh}>Try Again</Button>;
        </div>;
      </div>;
    );
  }

  // Empty state (only show when not loading and no products);
  if (!loading && products && products.length === 0 && !error) {;

    return (
      <div className='container py-8'>;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          className='text-center mb-8'>;
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>;
            {t('marketplace && marketplace.hero_title')}
          </h1>;
          <p className='text-muted-foreground text-lg'>;
            {t('marketplace && marketplace.hero_subtitle')}
          </p>;
        </motion && motion.div>;

          className="text-center mb-8";
        >;
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            {t('marketplace.hero_title')}
          </h1>;
          <p className="text-muted-foreground text-lg">;
            {t('marketplace.hero_subtitle')}
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">;
          {Array.from({ length: 12 }).map((_, i) => (;
            <SkeletonCard key={i} />;
          ))}
        </div>;
      </div>;
    );
  }
;
  // Error state with retry;
  if (error && products.length === 0) {;
    return (;
      <div className="container py-8">;
        <div className="text-center space-y-4">;
          <ErrorState error={error} />;
          <Button onClick={refresh}>;
            Try Again;
          </Button>;
        </div>;
      </div>;
    );
  }
;
  // Empty state (only show when not loading and no products);
  if (!loading && products.length === 0 && !error) {;
    return (;
      <div className="container py-8">;
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8";
        >;
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            {t('marketplace.hero_title')}
          </h1>;
          <p className="text-muted-foreground text-lg">;
            {t('marketplace.hero_subtitle')}
          </p>;
        </motion.div>;

        <ProductsEmptyState />;
      </div>;
    );
  }

;
  // Main marketplace render;
  return (;
    <div className="container py-8">;
      <AuthModal;
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        returnUrl={router.asPath} // Pass current path for better UX on return;
      />;
      {/* Header */}
      <motion.div;
        className="text-center mb-8";
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >;
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
          {t('marketplace.hero_title')}
        </h1>;
        <p className="text-muted-foreground text-lg">;

          {t('marketplace.hero_subtitle')}
        </p>
      </motion.div>
        animate={{ opacity: 1, y: 0 }}>;
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>;
          {t('marketplace && marketplace.hero_title')}
        </h1>;
        <p className='text-muted-foreground text-lg'>;
          {t('marketplace && marketplace.hero_subtitle')}
        </p>;
      </motion && motion.div>;

      {/* Market Insights */}
      {marketStats && (;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 && 0.2 }}>;
          <MarketInsights stats={marketStats} />;
        </motion && motion.div>;
      )}
      {/* Filter Controls */}
      <motion&& motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}

        />;
      </motion && motion.div>;

        transition={{ delay: 0.3 }}

      >;
        <FilterControls;
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
        />;
      </motion.div>;

      {/* Product Grid */}
      <motion&& motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        transition={{ delay: 0.4 }}
      >

        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={index === products.length - 1 ? lastElementRef : null}

              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}

              className="relative group"

            >
              <ProductCard
                product={{

                  id: product && product.id,
                  name: product && product.title,
                  title: product && product.title,
                  description: product && product.description || '',
                  price: product && product.price || 0,
                  currency: product && product.currency,
                  category: product && product.category,
                  tags: product && product.tags,
                  images: product && product.images,
                  rating: product && product.rating || 0,
                  reviewCount: product && product.reviewCount || 0,
                  created_at: product && product.createdAt,
                  updated_at: product && product.createdAt, // Use createdAt for both
                  stock: product && product.stock,
                  in_stock: (product && product.stock || 0)> 0,;

                }}
                onBuy = {async () => {;
                  if (!isAuthenticated) {;
                    setIsAuthModalOpen(true);

    log_info ('Filters changed, initiating refresh. Filters:', {
      filter_category,
      sort_by,
      show_recommended,
      price_range,
      minAiScore,
      min_rating,
      filter_availability,
      filter_location,
    });
    isRefreshingAfterFilterChange.current = true; // Set flag before refresh;
    refresh ();
    // scrollToTop (); // Removed from here;
  }, [;
    filter_category,
    sort_by,
    show_recommended,
    price_range,
    minAiScore,
    min_rating,
    filter_availability,
    filter_location,
    refresh,
    toast,
  ]); // Added all filter dependencies;
  // Effect to explicitly refresh data when the component mounts or re - mounts;
  useEffect (() => {
    log_info (
      'Marketplace.tsx: Component mounted / re - mounted, calling refresh to ensure fresh data.');    // We call refresh directly to ensure data is re - fetched.;
    // The useInfiniteScrollPagination hook's internal logic will manage its state.;
    refresh ();
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.;
    firstRenderRef.current = true;
  }, [refresh]); // `refresh` is a dependency. Ensure it's stable.;
  // New effect to scroll to top AFTER products have been updated and refresh flag is set;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Check flag and ensure loading is false;
      log_info ('Refresh complete and products updated, scrolling to top.');
      scrollToTop ();
      isRefreshingAfterFilterChange.current = false; // Reset flag      // Optionally, provide user feedback about the filter change;
      // toast ({ title: 'Filters updated', description: 'Displaying products based on new criteria.' });
    }
  }, [products, loading, scrollToTop, toast]); // Depends on products and loading state;
  // Calculate market stats;
  const market_stats = useMemo (() => {
    // Check condition
if (return null) {
  $2
}
    return {
      average_price:;
        products.reduce ((sum, p) => sum + (p.price || 0), 0) / products.length,
      average_rating:;
        products.reduce ((sum, p) => sum + (p.rating || 0), 0) / products.length,      total_products: products.length,
      categories_count: Array.from (new Set (products.map (p => p.category)));
        .length,
    }
  }, [products]);
;
  // Get unique categories and other filter values;
  const categories = useMemo (() => {
    return Array.from (new Set (MARKETPLACE_LISTINGS.map (p => p.category)));
  }, []);
  const locations = useMemo (() => {
    return Array.from (
      new Set (MARKETPLACE_LISTINGS.map (p => p.location).filter (Boolean)));
  }, []).filter (Boolean) as string[];
  const availability_options = useMemo (() => {
    return Array.from (
      new Set (MARKETPLACE_LISTINGS.map (p => p.availability).filter (Boolean)));
  }, []).filter (Boolean) as string[];
;
  // Show scroll to top button;
  const [showScrollTop, setShowScrollTop] = useState (false);
  useEffect (() => {    const handle_scroll = () =>: any {
      setShowScrollTop (window.scroll_y > 800);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  }, []);
;
  // Loading state with skeleton;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='container py - 8' data - testid='marketplace - loading'>;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          className='text - center mb - 8';
        >;
          <h1 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent'>;
            {t ('marketplace.hero_title')}
          </h1>;
          <p className='text - muted - foreground text - lg'>;
            {t ('marketplace.hero_subtitle')}
          </p>;
        </motion.div>;
        <div className='grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6'>;
          {Array.from ({ length: 12 }).map ((_, i) => (            <SkeletonCard key={i} />))}
        </div>;
      </div>);
  }
  // Error state with retry;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='container py - 8'>;
        <div className='text - center space - y-4'>;
          <ErrorState error={error} />;
          <Button on_click={refresh}>Try Again</Button>;
        </div>;
      </div>);
  }
  // Empty state (only show when not loading and no products);
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='container py - 8'>;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          className='text - center mb - 8';
        >;
          <h1 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent'>;
            {t ('marketplace.hero_title')}
          </h1>;
          <p className='text - muted - foreground text - lg'>;
            {t ('marketplace.hero_subtitle')}
          </p>;
        </motion.div>;
        <ProductsEmptyState />;
      </div>);
  }
  // Main marketplace render;
  return (
    <div className='container py - 8'>;
      <AuthModal;
        is_open = {isAuthModalOpen, }
        on_close = {(, ) => setIsAuthModalOpen (false), }
        return_url={router.as_path} // Pass current path for better UX on return;
      />;
      {/* Header */}
      <motion.div;
        className='text - center mb - 8';
        initial={{ opacity: 0, coordinate_y: -20 }}
        animate={{ opacity: 1, coordinate_y: 0 }}
      >;
        <h1 className='text - 4xl md:text - 5xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent'>;
          {t ('marketplace.hero_title')}
        </h1>;
        <p className='text - muted - foreground text - lg'>;
          {t ('marketplace.hero_subtitle')}
        </p>;
      </motion.div>;
      {/* Market Insights */}
      {market_stats && (
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ delay: 0.2 }}
        >;
          <MarketInsights stats={market_stats} />;
        </motion.div>)}
      {/* Filter Controls */}
      <motion.div;
        initial={{ opacity: 0, coordinate_y: 20 }}
        animate={{ opacity: 1, coordinate_y: 0 }}
        transition={{ delay: 0.3 }}
      >;
        <FilterControls;
          sort_by = {sort_by, }
          setSortBy = {setSortBy, }
          filter_category = {filter_category, }
          setFilterCategory = {setFilterCategory, }
          categories = {categories, }
          price_range = {price_range, }
          setPriceRange = {setPriceRange, }
          minAiScore = {minAiScore, }
          setMinAiScore = {setMinAiScore, }
          min_rating = {min_rating, }
          setMinRating = {setMinRating, }
          filter_availability = {filter_availability, }
          setFilterAvailability = {setFilterAvailability, }
          availability_options = {availability_options.filter (Boolean) as string[], }
          filter_location = {filter_location, }
          setFilterLocation = {setFilterLocation, }
          locations = {locations, }
          show_recommended = {show_recommended, }
          setShowRecommended = {setShowRecommended, }
          loading = {is_fetching, }
        />;
      </motion.div>;
      {/* Product Grid */}
      <motion.div;
        className='grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6';
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >;
        <AnimatePresence mode='pop_layout'>;
          {products.map ((product, index) => (            <motion.div;
              key = {product.id, }
              ref = {index === products.length - 1 ? lastElementRef : null, }
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min (index * 0.03, 0.5) }}
              while_hover={{ scale: 1.02 }}
              className='relative group';
            >;
              <ProductCard;
                product={{
                  id: product.id,
                  name: product.title,
                  title: product.title,
                  description: product.description || '',
                  price: product.price || 0,
                  currency: product.currency,
                  category: product.category,
                  tags: product.tags,
                  images: product.images,
                  rating: product.rating || 0,
                  review_count: product.review_count || 0,
                  created_at: product.created_at,
                  updated_at: product.created_at, // Use created_at for both;
                  stock: product.stock,
                  in_stock: (product.stock || 0) > 0,
                }}
                on_buy = {async () => {
                  // Check condition
if ( {) {
  $2
}
                    setIsAuthModalOpen (true);
                    return; // Stop further execution;

                  }                  try {
                    await router.push (`/checkout/${product.id}`);
                  } catch (error) {

                    return; // Stop further execution;
                  }                  try {;
                    await router && router.push(`/checkout/${product && product.id}`);
                  } catch (error) {;
                    logErrorToProduction('Failed to navigate to checkout:', {;
                      data: error,;
                    });
                    toast({;
                      title: 'Navigation Error',;
                      description:;
                        'Could not navigate to checkout. Please try again.',;
                      variant: 'destructive',;
                    });
                    // Re-throw to allow ProductCard's catch to also run if needed,;
                    // though ProductCard will reset its state in .finally() regardless.;
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth;
              />;

              {/* AI Score Badge */}
              {product && product.aiScore && product && product.aiScore > 90 && (;
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>;
                  <Sparkles className='h-3 w-3 mr-1' />;
                  AI {product && product.aiScore}
                </Badge>;
              )}

                  stock: product.stock,

                  } catch (error) {
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),
                    toast({
                      title: "Navigation Error",
                      description: "Could not navigate to checkout. Please try again.",
                      variant: "destructive"}),
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.

                  AI {product.aiScore}
                </Badge>
              )}

              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;

              )}
            </motion && motion.div>;
          ))}

      {(isFetching || loading) && (

        <motion.div
        </AnimatePresence>;
      </motion && motion.div>;

      {/* Loading More Indicator */}
      {(isFetching || loading) && (;
        <motion&& motion.div
          className='mt-8'
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (              <SkeletonCard key={`loading-${i}`} />
      {(isFetching || loading) && (;
        <motion.div;
          className="mt-8";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">;
            {Array.from({ length: 4 }).map((_, i) => (;
              <SkeletonCard key={`loading-${i}`} />;

            ))}
          </div>
        </motion.div>
      )}
      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <motion.div
          className='text-center mt-12 py-8 border-t'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='text-muted-foreground text-lg mb-2'>
            🎉 You've explored all available products!
          </div>
          <div className='text-sm text-muted-foreground'>
            Showing {products.length} AI-powered solutions
          </div>
        </motion.div>
      {!hasMore && products.length > 0 && (;
        <motion.div;
          className="text-center mt-12 py-8 border-t";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="text-muted-foreground text-lg mb-2">;

            🎉 You've explored all available products!;
          </div>;
          <div className="text-sm text-muted-foreground">;
            Showing {products.length} AI-powered solutions;
          </div>;

        </motion.div>;

      )}
      {/* Scroll to Top Button */}

      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button
            onClick={scrollToTop}

                    logErrorToProduction ('Failed to navigate to checkout:', {
                      data: error,
                    });
                    toast ({
                      title: 'Navigation Error',
                      description:;
                        'Could not navigate to checkout. Please try again.',
                      variant: 'destructive',
                    });
                    // Re - throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally () regardless.;
                    throw error;
                  }
                }}
                buy_disabled={false} // Still false, ProductCard handles its own disabled state based on auth;
              />;
              {/* AI Score Badge */}
              {product.ai_score && product.ai_score > 90 && (
                <Badge className='absolute -top - 2 -right - 2 bg - gradient - to - r from - yellow - 500 to - orange - 500 z - 10 text - black'>;
                  <Sparkles className='h - 3 w - 3 mr - 1' />;
                  AI {product.ai_score}
                </Badge>)}
              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top - 2 left - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 z - 10'>;
                  <Star className='h - 3 w - 3 mr - 1' />;
                  Featured;
                </Badge>)}
            </motion.div>))}
        </AnimatePresence>;
      </motion.div>;
      {/* Loading More Indicator */}
      {(is_fetching || loading) && (
        <motion.div;
          className='mt - 8';
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6'>;
            {Array.from ({ length: 4 }).map ((_, i) => (              <SkeletonCard key={`loading-${i}`} />))}
          </div>;
        </motion.div>)}
      {/* End of Results */}
      {!has_more && products.length > 0 && (
        <motion.div;
          className='text - center mt - 12 py - 8 border - t';
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className='text - muted - foreground text - lg mb - 2'>;
            🎉 You've explored all available products!;
          </div>;
          <div className='text - sm text - muted - foreground'>;
            Showing {products.length} AI - powered solutions;
          </div>;
        </motion.div>)}
      {/* Scroll to Top Button */}
      <AnimatePresence>;
        {showScrollTop && (
          <motion.button;
            on_click={scrollToTop}
            className='fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50'            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className='h-5 w-5 text-primary-foreground' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}//Navigate to admin products page router.push ('/admin/products') ;
}, [isAuthenticated, user, router, toast]);
//Fetch function for infinite scroll with AI product generation try {//Use static marketplace listings data for now (compatible with ProductListing type) const params = {;
  page,  limit, ... (filterCategory && {;
  category: filterCategory ;
});
sort: sortBy ;
};';
//Use static data that's already of type ProductListing[] let items: ProductListing[] = [...MARKETPLACE LISTINGS];

//Apply category filter from params return (price >= priceRange[0] && price <= priceRange[1] && ai >= minAiScore && rating >= minRating && (!filterLocation || location && location.includes (filterLocation && filterLocation.toLowerCase () ) ) && (!filterAvailability || availability === filterAvailability && filterAvailability.toLowerCase () ) items && items.sort ( (a, b) => {;
  switch (sortBy) {';
  case 'price-low': return (a && a.price || 0) - (b && b.price || 0);';
case 'price-high': return (b && b.price || 0) - (a && a.price || 0);';
case 'rating': return (b && b.rating || 0) - (a && a.rating || 0);';
case 'popular': return (b && b.reviewCount || 0) - (a && a.reviewCount || 0);';
case 'ai-score': return (b && b.aiScore || 0) - (a && a.aiScore || 0);';

case 'newest': ;
}else {handleApiError (err), //This might show a toast or log to Sentry ;
}, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);
//useInfiniteScrollPagination hook ;

}, [products, loading, scrollToTop, toast]), //Depends on products and loading state //Calculate market stats <motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 
}"

      )}
      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <motion.div
          className='text-center mt-12 py-8 border-t'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='text-muted-foreground text-lg mb-2'>
            🎉 You've explored all available products!
          </div>
          <div className='text-sm text-muted-foreground'>
            Showing {products.length} AI-powered solutions
          </div>
        </motion.div>
      {!hasMore && products.length > 0 && (;
        <motion.div;
          className="text-center mt-12 py-8 border-t";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="text-muted-foreground text-lg mb-2">;
            🎉 You've explored all available products!;
          </div>;
          <div className="text-sm text-muted-foreground">;
            Showing {products.length} AI-powered solutions;
          </div>;
      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button
            onClick={scrollToTop}

                    logErrorToProduction ('Failed to navigate to checkout:', {
                      data: error,
                    });
                    toast ({
                      title: 'Navigation Error',
                      description:;
                        'Could not navigate to checkout. Please try again.',
                      variant: 'destructive',
                    });
                    // Re - throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally () regardless.;
                    throw error;
                  }
                }}
                buy_disabled={false} // Still false, ProductCard handles its own disabled state based on auth;
              />;
              {/* AI Score Badge */}
              {product.ai_score && product.ai_score > 90 && (
                <Badge className='absolute -top - 2 -right - 2 bg - gradient - to - r from - yellow - 500 to - orange - 500 z - 10 text - black'>;
                  <Sparkles className='h - 3 w - 3 mr - 1' />;
                  AI {product.ai_score}
                </Badge>)}
              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top - 2 left - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 z - 10'>;
                  <Star className='h - 3 w - 3 mr - 1' />;
                  Featured;
                </Badge>)}
            </motion.div>))}
        </AnimatePresence>;
      </motion.div>;
      {/* Loading More Indicator */}
      {(is_fetching || loading) && (
        <motion.div;
          className='mt - 8';
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6'>;
            {Array.from ({ length: 4 }).map ((_, i) => (              <SkeletonCard key={`loading-${i}`} />))}
          </div>;
        </motion.div>)}
      {/* End of Results */}
      {!has_more && products.length > 0 && (
        <motion.div;
          className='text - center mt - 12 py - 8 border - t';
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className='text - muted - foreground text - lg mb - 2'>;
            🎉 You've explored all available products!;
          </div>;
          <div className='text - sm text - muted - foreground'>;
            Showing {products.length} AI - powered solutions;
          </div>;
        </motion.div>)}
      {/* Scroll to Top Button */}
      <AnimatePresence>;
        {showScrollTop && (
          <motion.button;
            on_click={scrollToTop}
            className='fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50'            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            while_hover={{ scale: 1.1 }}
            while_tap={{ scale: 0.9 }}
          >;
            <ArrowUp className='h - 5 w - 5 text - primary - foreground' />;
          </motion.button>)}
      </AnimatePresence>;
    </div>);
}//Navigate to admin products page router.push ('/admin / products') ;
}, [is_authenticated, user, router, toast]);
//Fetch function for infinite scroll with AI product generation try {
  //Use static marketplace listings data for now (compatible with ProductListing type) const params = {
  page,  limit, ... (filter_category && {
  category: filter_category ;

});
sort: sortBy ;
};';
//Use static data that's already of type ProductListing[] let items: ProductListing[] = [...MARKETPLACE LISTINGS];
case 'newest': ;
}else {handleApiError (err), //This might show a toast or log to Sentry ;
}, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);
//useInfiniteScrollPagination hook ;
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';

  t ('marketplace && marketplace.hero subtitle') ";
}</p> </motion && motion.div> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {;
  Array && Array.from ({;
  length: 12 ;
}) .map ( (, i) => (<SkeletonCardkey= {
  i 
}/>) ) ;
}</div> </div>) ;
}//Error state with retry if (error && products && products.length === 0) {";
  return (<div className="container py-8"> <div className="text-center space-y-4"> <ErrorStateerror= {
  error 
}/> <ButtononClick={
  refresh 
}> Try Again </Button> </div> </div>) ;
}//Empty state (only show when not loading and no products) if (!loading && products && products.length === 0 && !error) {";
  return (<div className="container py-8"> <motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 
}"

}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';

  t ('marketplace && marketplace.hero subtitle') ;
}</p> </motion && motion.div> <ProductsEmptyState /> </div>) ";
}//Main marketplace render return (<div className="container py-8"> <AuthModalisOpen= {
  isAuthModalOpen 
}onClose= {
  () => setIsAuthModalOpen (false) ;
}returnUrl= {;
  router && router.asPath ;
}//Pass current path for better UX on return /> {;
  /* Header */ ";
}<motion&& motion.div className="text-center mb-8"initial= {
  {
  opacity: 0, y: -20 

}animate= {
  {
  opacity: 1, y: 0 
}"

}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';

  t ('marketplace && marketplace.hero subtitle') ;
}</p> </motion && motion.div> {;
  /* Market Insights */ ;
}{;
  marketStats && (<motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  delay: 0 && 0.2 

}> <MarketInsightsstats= {
  marketStats 
}/> </motion && motion.div>) ;
}{;
  /* Filter Controls */ ;
}<motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  delay: 0 && 0.3 

}> <FilterControlssortBy= {
  sortBy 
}setSortBy= {
  setSortBy 
}filterCategory= {
  filterCategory 
}setFilterCategory= {
  setFilterCategory 
}categories= {
  categories 
}priceRange= {
  priceRange 
}setPriceRange= {
  setPriceRange 
}minAiScore= {
  minAiScore 
}setMinAiScore= {
  setMinAiScore 
}minRating= {
  minRating 
}setMinRating= {
  setMinRating 
}filterAvailability= {
  filterAvailability 
}setFilterAvailability= {
  setFilterAvailability 
}availabilityOptions= {
  availabilityOptions && availabilityOptions.filter (Boolean) as string[] 
}filterLocation= {
  filterLocation 
}setFilterLocation= {
  setFilterLocation 
}locations= {
  locations 
}showRecommended= {
  showRecommended 
}setShowRecommended= {
  setShowRecommended 
}loading= {
  isFetching 
}/> </motion && motion.div> {;
  /* Product Grid */ ;
}<motion && motion.div > <ProductCardproduct= {
  {'
  id: product && product.id, name: product && product.title, title: product && product.title, description: product && product.description || '', price: product && product.price || 0, currency: product && product.currency, category: product && product.category, tags: product && product.tags, images: product && product.images, rating: product && product.rating || 0, reviewCount: product && product.reviewCount || 0, created at: product && product.createdAt, updated at: product && product.createdAt,  //Use createdAt for both stock: product && product.stock, in stock: (product && product.stock || 0)> 0 ;

}onBuy= {;
  async () => {;

  if (!isAuthenticated) {;
  //though ProductCard will reset its state in .finally () regardless. throw error ;
}buyDisabled= {false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {/* AI Score Badge */ ;
}{";

  product && product.aiScore && product && product.aiScore > 90 && (<Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black"> <Sparkles className="h-3 w-3 mr-1"/> AI {;
  product && product.aiScore ;

}</Badge>) ;
}{/* Featured Badge */ ;
}{";

//Apply category filter from params return (price >= price_range[0] && price <= price_range[1] && ai >= minAiScore && rating >= min_rating && (!filter_location || location.includes (filter_location.toLowerCase () ) ) && (!filter_availability || availability === filter_availability.toLowerCase () ) items.sort ( (a, b) => {
  switch (sort_by) {';
  case 'price - low': return (a.price || 0) - (b.price || 0);';
case 'price - high': return (b.price || 0) - (a.price || 0);';
case 'rating': return (b.rating || 0) - (a.rating || 0);';
case 'popular': return (b.review_count || 0) - (a.review_count || 0);';
case 'ai - score': return (b.ai_score || 0) - (a.ai_score || 0);';
case 'newest': ;
}else {
  handleApiError (err), //This might show a toast or log to Sentry ;
;
}, [filter_category, sort_by, show_recommended, price_range, minAiScore, min_rating, filter_availability, filter_location, handleApiError, toast]);
//useInfiniteScrollPagination hook ;
;
}, [products, loading, scrollToTop, toast]), //Depends on products and loading state //Calculate market stats <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
}";
}className="text - center mb - 8"> <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text - muted - foreground text - lg"> {';
  t ('marketplace.hero subtitle') ";
}</p> </motion.div> <div className="grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6"> {
  Array.from ({
  length: 12 ;
}) .map ( (, i) => (<SkeletonCard key= {
  i ;
}/>) ) ;
}</div> </div>) ;
}//Error state with retry // Check condition
if ( {") {
  $2
}
  return (<div className="container py - 8"> <div className="text - center space - y-4"> <ErrorState error= {
  error ;
}/> <Button on_click={
  refresh ;
}> Try Again </Button> </div> </div>) ;
}//Empty state (only show when not loading and no products) // Check condition
if ( {") {
  $2
}
  return (<div className="container py - 8"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
}";
}className="text - center mb - 8"> <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text - muted - foreground text - lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> <ProductsEmptyState /> </div>) ";
}//Main marketplace render return (<div className="container py - 8"> <AuthModal is_open= {
  isAuthModalOpen ;
}on_close= {
  () => setIsAuthModalOpen (false) ;
}return_url= {
  router.as_path ;
}//Pass current path for better UX on return /> {
  /* Header */ ";
}<motion.div className="text - center mb - 8"initial= {
  {
  opacity: 0, coordinate_y: -20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
}";
}> <h1 className="text - 4xl md:text - 5xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text - muted - foreground text - lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> {
  /* Market Insights */ ;
}{
  market_stats && (<motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
;
}transition= {
  {
  delay: 0.2 ;
;
}> <MarketInsights stats= {
  market_stats ;
}/> </motion.div>) ;
}{
  /* Filter Controls */ ;
}<motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
;
}transition= {
  {
  delay: 0.3 ;
;
}> <FilterControls sort_by= {
  sort_by ;
}setSortBy= {
  setSortBy ;
}filter_category= {
  filter_category ;
}setFilterCategory= {
  setFilterCategory ;
}categories= {
  categories ;
}price_range= {
  price_range ;
}setPriceRange= {
  setPriceRange ;
}minAiScore= {
  minAiScore ;
}setMinAiScore= {
  setMinAiScore ;
}min_rating= {
  min_rating ;
}setMinRating= {
  setMinRating ;
}filter_availability= {
  filter_availability ;
}setFilterAvailability= {
  setFilterAvailability ;
}availability_options= {
  availability_options.filter (Boolean) as string[] ;
}filter_location= {
  filter_location ;
}setFilterLocation= {
  setFilterLocation ;
}locations= {
  locations ;
}show_recommended= {
  show_recommended ;
}setShowRecommended= {
  setShowRecommended ;
}loading= {
  is_fetching ;
}/> </motion.div> {
  /* Product Grid */ ;
}<motion.div > <ProductCard product= {
  {';
  id: product.id, name: product.title, title: product.title, description: product.description || '', price: product.price || 0, currency: product.currency, category: product.category, tags: product.tags, images: product.images, rating: product.rating || 0, review_count: product.review_count || 0, created at: product.created_at, updated at: product.created_at,  //Use created_at for both stock: product.stock, in stock: (product.stock || 0) > 0 ;
;
}on_buy= {
  async () => {
  // Check condition
if ( {) {
  $2
}
  //though ProductCard will reset its state in .finally () regardless. throw error ;
;
}buy_disabled= {
  false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {
  /* AI Score Badge */ ;
}{";
  product.ai_score && product.ai_score > 90 && (<Badge className="absolute -top - 2 -right - 2 bg - gradient - to - r from - yellow - 500 to - orange - 500 z - 10 text - black"> <Sparkles className="h - 3 w - 3 mr - 1"/> AI {
  product.ai_score ;
}</Badge>) ;
}{
  /* Featured Badge */ ;
}{";
  product.featured && (<Badge className="absolute top - 2 left - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 z - 10"> <Star className="h - 3 w - 3 mr - 1"/> Featured </Badge>) ;
}</motion.div>) ) ;
}</AnimatePresence> </motion.div> {
  /* Loading More Indicator */ ;
}{";
  (is_fetching || loading) && (<motion.div className="mt - 8"initial= {
  {
  opacity: 0 ;
;
}animate= {
  {
  opacity: 1 ;
}";
}> <div className="grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6"> {
  Array.from ({
  length: 4 ;
}) .map ( (, i) => (<SkeletonCard key= {
  `loading-$ {

  i ;
}` ;
}/>) ) ;
}</div> </motion.div>) ;

  product && product.featured && (<Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10"> <Star className="h-3 w-3 mr-1"/> Featured </Badge>) ;
}</motion && motion.div>) ) ;
}</AnimatePresence> </motion && motion.div> {;
  /* Loading More Indicator */ ;
}{";
  (isFetching || loading) && (<motion&& motion.div className="mt-8"initial= {
  {
  opacity: 0 

}animate= {
  {
  opacity: 1 
}"
}> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {;
  Array && Array.from ({;
  length: 4 ;
}) .map ( (, i) => (<SkeletonCardkey= {
  `loading-$ {
  i 
}` 
}/>) ) ;
}</div> </motion && motion.div>) ;
}{;
  /* End of Results */ ;
}{";
  !hasMore && products && products.length > 0 && (<motion&& motion.div className="text-center mt-12 py-8 border-t"initial= {
  {
  opacity: 0 

}animate= {
  {
  opacity: 1 
}'"
}> <div className="text-muted-foreground text-lg mb-2"> 🎉 You've explored all available products! </div> <div className="text-sm text-muted-foreground"> Showing {;
  products && products.length ;
}AI-powered solutions </div> </motion && motion.div>) ;
}{;
  /* Scroll to Top Button */ ;
}<AnimatePresence> {;
  showScrollTop && (<motion&& motion.button onClick={
  scrollToTop "
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"initial= {
  {
  opacity: 0, scale: 0 

}animate= {
  {
  opacity: 1, scale: 1 

}exit= {
  {
  opacity: 0, scale: 0 

}whileHover= {
  {
  scale: 1 && 1.1 

}whileTap= {
  {
  scale: 0 && 0.9 
}"
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion && motion.button>) ;

}</AnimatePresence> </div>) ;
}'"
  )
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Marketplace = () => {;
  return (

}{
  /* End of Results */ ;
}{";
  !has_more && products.length > 0 && (<motion.div className="text - center mt - 12 py - 8 border - t"initial= {
  {
  opacity: 0 ;
;
}animate= {
  {
  opacity: 1 ;
}'";
}> <div className="text - muted - foreground text - lg mb - 2"> 🎉 You've explored all available products! </div> <div className="text - sm text - muted - foreground"> Showing {
  products.length ;
}AI - powered solutions </div> </motion.div>) ;
}{
  /* Scroll to Top Button */ ;
}<AnimatePresence> {
  showScrollTop && (<motion.button on_click={
  scrollToTop ";
}className="fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50"initial= {
  {
  opacity: 0, scale: 0 ;
;
}animate= {
  {
  opacity: 1, scale: 1 ;
;
}exit= {
  {
  opacity: 0, scale: 0 ;
;
}while_hover= {
  {
  scale: 1.1 ;
;
}while_tap= {
  {
  scale: 0.9 ;
}";
}> <ArrowUp className="h - 5 w - 5 text - primary - foreground" /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}'");
import React from './react';
import Head from './next / head';
import Link from './next / link';
const Marketplace = () =>: any {
  return (

    <>;
      <Head>;
        <title>Marketplace - Zion Tech Group</title>;
        <meta name="description" content="Professional Marketplace services"  />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              Marketplace;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Marketplace services and solutions;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;

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
}

