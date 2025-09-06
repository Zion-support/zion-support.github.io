

const MarketplaceInsights = ({ stats }: { stats: any },) => (
const MarketplaceInsights = ({ stats }: { stats: any }) => (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableCount}</div>
          <div className="text-sm text-muted-foreground">Available</div>
        </div>
      </div>
    </CardContent>
  </Card>
)
// Filter controls
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
=======
}: any,) => (
}: any) => (

  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
// Market insights component;
const MarketplaceInsights = ({ stats }: { stats: any },) => (;
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">;
    <CardContent className="p-6">;
      <div className="flex items-center gap-2 mb-4">;
        <TrendingUp className="h-5 w-5 text-blue-400" />;
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>;
      </div>;
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">;
        <div className="text-center">;
          <div className="text-2xl font-bold text-blue-400">${Math && Math.round(stats && stats.averagePrice / 1000)}k</div>;
          <div className="text-sm text-muted-foreground">Avg Price</div>;
        </div>;
        <div className="text-center">;
          <div className="text-2xl font-bold text-green-400">{stats && stats.averageRating.toFixed(1)}</div>;
          <div className="text-sm text-muted-foreground">Avg Rating</div>;
        </div>;
        <div className="text-center">;
          <div className="text-2xl font-bold text-purple-400">{stats && stats.totalProducts}</div>;
          <div className="text-sm text-muted-foreground">Products</div>;
        </div>;
        <div className="text-center">;
          <div className="text-2xl font-bold text-orange-400">{stats && stats.availableCount}</div>;
          <div className="text-sm text-muted-foreground">Available</div>;
        </div>;
      </div>;
    </CardContent>;
  </Card>;
),;

// Filter controls;
const MarketplaceFilterControls = ({;
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading;
}: any,) => (;
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">;
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}

    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <option value="">All Categories</option>
        {categories.map((cat: string,) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />

          aria-label="Add to cart"
          data-testid="add-to-cart-listing-button"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}
// Loading grid
=======
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number },) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i,) => <SkeletonCard key={i} />)}
  </div>
)
// Main component
function MarketplacePageContent() {
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated } = useAuth()
  const [sortBy, setSortBy] = useState('newest')
  const [filterCategory, setFilterCategory] = useState('')
  const [showRecommended, setShowRecommended] = useState(false)
  const fetchProducts = useCallback(async (page: number, limit: number,) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS]
      // Apply category filtering
      let processedDataset = fullDataset
      if (filterCategory) {
        processedDataset = processedDataset.filter(p => p.category === filterCategory)
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>;
),;
// Main component;
function MarketplacePageContent() {;
  const router = useRouter(),;
  const { t } = useTranslation(),;
  const dispatch = useDispatch<AppDispatch>(),;
  const { isAuthenticated } = useAuth(),;
  const [sortBy, setSortBy] = useState('newest'),;
  const [filterCategory, setFilterCategory] = useState(''),;
  const [showRecommended, setShowRecommended] = useState(false),;
  const fetchProducts = useCallback(async (page: number, limit: number) => {;
    // Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 300)),;
    try {;
      // Combine initial products with marketplace listings;
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],;
      // Apply category filtering;
      let processedDataset = fullDataset,;
      if (filterCategory) {;
        processedDataset = processedDataset.filter(p => p.category === filterCategory);


      }
      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = processedDataset.filter(p => (p.rating |0) >= 4.5 |(p.aiScore |0) >= 85)
      }
      // Sort the processed dataset
      processedDataset.sort((a, b,) => {
        switch (sortBy) {
          case 'price-low':
            return (a.price |0) - (b.price |0)
          case 'price-high':
            return (b.price |0) - (a.price |0)
          case 'rating':
            return (b.rating |0) - (a.rating |0)
          case 'popular':
            return (b.reviewCount |0) - (a.reviewCount |0)
          case 'ai-score':
            return (b.aiScore |0) - (a.aiScore |0)
          default: // 'newest'
            return new Date(b.createdAt |'').getTime() - new Date(a.createdAt |'').getTime()
        }
      })
      // Slice for pagination
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const items = processedDataset.slice(startIndex, endIndex)
      return {
        items
        hasMore: endIndex < processedDataset.length
        total: processedDataset.length
      }
    } catch (error) {
      logErrorToProduction('Error in fetchProducts:', { data: error })
      throw new Error('Failed to load marketplace data. Please try again.')
    }
  }, [sortBy, filterCategory, showRecommended])
  }, [sortBy, filterCategory, showRecommended]),
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

  const {
    items: products
    loading
    error
    hasMore
    total
    isFetching
    lastElementRef
    refresh
    scrollToTop
    loadMore
  } = useInfiniteScrollPagination(fetchProducts, 12)
  // Refresh when filters change
  useEffect((,) => {
    const timeoutId = setTimeout((,) => {
      refresh()
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh])
  const marketStats = useMemo((,) => {
    if (products.length === 0) return null
    return {

      availableCount: products.filter(p => p.availability === "Available").length
    }
  }, [products])
  const categories = useMemo((,) => {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"]

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Loading state
  if (loading && products.length === 0) {

          data-testid="add-to-cart-listing-button">;
          <ShoppingCart className="h-4 w-4" />;
        </Button>;
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}>;
          View Details;
        </Button>;
      </div>;
    </CardContent>;
  </Card>;
  );
},;

// Loading grid;
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number },) => (;
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
    {Array && Array.from({ length: count }).map((_, i,) => <SkeletonCard key={i} />)}
  </div>;
),;

// Main component;
function MarketplacePageContent() {;
  const router = useRouter(),;
  const { t } = useTranslation(),;
  const dispatch = useDispatch<AppDispatch>(),;
  const { isAuthenticated } = useAuth(),;
  const [sortBy, setSortBy] = useState('newest'),;
  const [filterCategory, setFilterCategory] = useState(''),;
  const [showRecommended, setShowRecommended] = useState(false),;
  const fetchProducts = useCallback(async (page: number, limit: number,) => {;
    // Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 300)),;

    try {;
      // Combine initial products with marketplace listings;
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],;

      // Apply category filtering;
      let processedDataset = fullDataset,;
      if (filterCategory) {;
        processedDataset = processedDataset && processedDataset.filter(p => p && p.category === filterCategory);
      }

      // Apply recommended filtering;
      if (showRecommended) {;
        processedDataset = processedDataset && processedDataset.filter(p => (p && p.rating || 0) >= 4 && 4.5 || (p && p.aiScore || 0) >= 85);
      }

      // Sort the processed dataset;
      processedDataset && processedDataset.sort((a, b,) => {;
        switch (sortBy) {;
          case 'price-low':;
            return (a && a.price || 0) - (b && b.price || 0),;
          case 'price-high':;
            return (b && b.price || 0) - (a && a.price || 0),;
          case 'rating':;
            return (b && b.rating || 0) - (a && a.rating || 0),;
          case 'popular':;
            return (b && b.reviewCount || 0) - (a && a.reviewCount || 0),;
          case 'ai-score':;
            return (b && b.aiScore || 0) - (a && a.aiScore || 0),;
          default: // 'newest';
            return new Date(b && b.createdAt || '').getTime() - new Date(a && a.createdAt || '').getTime();
        }
      }),;

      // Slice for pagination;
      const startIndex = (page - 1) * limit,;
      const endIndex = startIndex + limit,;
      const items = processedDataset && processedDataset.slice(startIndex, endIndex),;

      return {;
        items,;
        hasMore: endIndex < processedDataset && processedDataset.length,;
        total: processedDataset && processedDataset.length;
      }
    } catch (error) {;
      logErrorToProduction('Error in fetchProducts:', { data: error }),;
      throw new Error('Failed to load marketplace data. Please try again.');
    }
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg">{t('marketplace.hero_subtitle')}</p>
        </motion.div>
        <MarketplaceLoadingGrid />
      </div>
      </>
    )
  }
  // Error state
  if (error && products.length === 0) {
    return (
      <>;
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
        />;
      <div className="container py-8">;
        <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">;
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            {t('marketplace && marketplace.hero_title')}
          </h1>;
          <p className="text-muted-foreground text-lg">{t('marketplace && marketplace.hero_subtitle')}</p>;
        </motion && motion.div>;
        <MarketplaceLoadingGrid />;
      </div>;
      </>;
    );
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        />
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {products.map((item, index,) => (
            <motion.div
              key = {item.id,}
              ref = {index === products.length - 1 ? lastElementRef : null,}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
      />;
    <div className="container py-8">;
      <motion && motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>;
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
          {t('marketplace && marketplace.hero_title')}
        </h1>;
        <p className="text-muted-foreground text-lg">{t('marketplace && marketplace.hero_subtitle')}</p>;
      </motion && motion.div>;

      {marketStats && (;
        <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 && 0.2 }}>;
          <MarketplaceInsights stats={marketStats} />;
        </motion && motion.div>;
      )}

      <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 && 0.3 }}>;
        <MarketplaceFilterControls
          sortBy = {sortBy,}
          setSortBy = {setSortBy,}
          filterCategory = {filterCategory,}
          setFilterCategory = {setFilterCategory,}
          categories = {categories,}
          showRecommended = {showRecommended,}
          setShowRecommended = {setShowRecommended,}
          loading = {isFetching,}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 

;
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>;
        <MarketplaceFilterControls;
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {products.map((item, index) => (
            <motion.div
              key={item.id} 
              ref={index === products.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} ;
              animate={{ opacity: 1, scale: 1 }} ;
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
            >
        />;
      </motion && motion.div>;

      <motion && motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 && 0.4 }}>;
        <AnimatePresence mode="popLayout">;
          {products && products.map((item, index,) => (;
            <motion&& motion.div
              key = {item && item.id,}
              ref = {index === products && products.length - 1 ? lastElementRef : null,}
              initial={{ opacity: 0, scale: 0 && 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0 && 0.9 }}
              transition={{ delay: Math && Math.min(index * 0 && 0.03, 0 && 0.5) }} 
              whileHover={{ scale: 1 && 1.02 }}>;
              <MarketplaceCard
                product = {item,}
                onViewDetails={() => {;
                  if (typeof window !== 'undefined') {;
                    try {;
                      sessionStorage && sessionStorage.setItem(`product:${item && item.id}`, JSON && JSON.stringify(item));
                    } catch {;
                      // ignore storage errors;
                    }
                  }
                  router && router.push(`/marketplace/listing/${item && item.id}`);
      </>);
  }
  return (
    <>;
      <NextSeo;
        title="Marketplace - Zion Tech Marketplace Solutions & Services";
        description="Visit our Zion Tech Marketplace to browse top - rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals.";
        open_graph={{ images: [{ url: 'https://app.ziontechgroup.com / og.png' }] }}
      />;
    <div className="container py - 8">;
      <motion.div className="text - center mb - 8" initial={{ opacity: 0, coordinate_y: -20 }} animate={{ opacity: 1, coordinate_y: 0 }}>;
        <h1 className="text - 4xl md:text - 5xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent">;
          {t ('marketplace.hero_title')}
        </h1>;
        <p className="text - muted - foreground text - lg">{t ('marketplace.hero_subtitle')}</p>;
      </motion.div>;
      {market_stats && (
        <motion.div initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} transition={{ delay: 0.2 }}>;
          <MarketplaceInsights stats={market_stats} />;
        </motion.div>)}
      <motion.div initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} transition={{ delay: 0.3 }}>;
        <MarketplaceFilterControls;
          sort_by = {sort_by, }
          setSortBy = {setSortBy, }
          filter_category = {filter_category, }
          setFilterCategory = {setFilterCategory, }
          categories = {categories, }
          show_recommended = {show_recommended, }
          setShowRecommended = {setShowRecommended, }
          loading = {is_fetching, }
        />;
      </motion.div>;
      <motion.div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>;
        <AnimatePresence mode="pop_layout">;
          {products.map ((item, index, ) => (
            <motion.div;
              key = {item.id, }
              ref = {index === products.length - 1 ? lastElementRef : null, }
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min (index * 0.03, 0.5) }}
              while_hover={{ scale: 1.02 }}
            >;
              <MarketplaceCard;
                product = {item, }
                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router.push (`/marketplace / listing/${item.id}`);
                }}

                }}
              />
            </motion.div>

          ))}
<<<<<<< HEAD
        </AnimatePresence>
      </motion.div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          )}
        </div>
      )}

      {hasMore && !loading && (;
        <div className="text-center mt-8">;
          {isFetching ? (;
            <Spinner className="mx-auto h-6 w-6" />;
          ) : (;
            <Button onClick={loadMore} variant="outline" size="lg">;
              Load More Products;
            </Button>          )}
          {total !== undefined && (;
            <p className="mt-2 text-sm text-muted-foreground">;
              Showing {products && products.length} of {total} items;
            </p>;
          )}
        </div>;
      )}


      {!hasMore && products && products.length > 0 && (;
        <motion && motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>;
          <div className="text-sm text-muted-foreground">Showing {products && products.length} marketplace items</div>;
        </motion && motion.div>;
      )}

      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button 

            onClick = {scrollToTop,}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}

            whileHover={{ scale: 1 && 1.1 }} 
            whileTap={{ scale: 0 && 0.9 }}>;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion && motion.button>;

        )}
      </AnimatePresence>
    </div>
    </>
  )
