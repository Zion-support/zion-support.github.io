import Spinner from '@/components/ui/spinner';


// Enhanced initial equipment with more variety
const INITIAL_EQUIPMENT: ProductListing[] = [
  {_id: "nvidia-a100-server", _title: "NVIDIA A100 GPU Training Server", _description: "High-performance AI training server with 8x A100 GPUs, _designed for demanding machine learning workloads.", _category: "AI Hardware", _price: 85000, _currency: "$", _brand: "NVIDIA", _specifications: ["8x A100 GPUs", _"2TB HBM2e", _"NVLink"], _tags: ["AI", _"Machine Learning", _"GPU"], _author: { name: "NVIDIA", _id: "nvidia"},
    images: ["https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 27,
    location: "Santa Clara, CA",
    availability: "In Stock"
  },
  {_id: "dell-poweredge-r750", _title: "Dell PowerEdge R750 Server", _description: "2U rack server with dual Intel Xeon processors, _enterprise-grade performance for virtualization workloads.", _category: "Servers & Compute", _price: 12500, _currency: "$", _brand: "Dell", _specifications: ["2U Rack", _"Dual Xeon", _"128GB RAM", _"2TB SSD"], _tags: ["Server", _"Enterprise", _"Virtualization"], _author: { name: "Dell", _id: "dell"},
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 34,
    location: "Austin, TX",
    availability: "In Stock"
  },
  {_id: "cisco-nexus-9k", _title: "Cisco Nexus 9000 Switch", _description: "High-performance datacenter switch with 100GbE ports for modern cloud infrastructure.", _category: "Networking", _price: 18500, _currency: "$", _brand: "Cisco", _specifications: ["48x 100GbE", _"QSFP28", _"Line Rate"], _tags: ["Switch", _"100GbE", _"Datacenter"], _author: { name: "Cisco", _id: "cisco"},
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 19,
    location: "San Jose, CA",
    availability: "In Stock"
  },
  {_id: "hpe-proliant-dl380", _title: "HPE ProLiant DL380 Gen10", _description: "Versatile 2U server optimized for compute-intensive workloads.", _category: "Servers & Compute", _price: 14500, _currency: "$", _brand: "HPE", _specifications: ["2U Rack", _"Dual Xeon", _"256GB RAM", _"4TB SSD"], _tags: ["Server", _"Enterprise", _"Compute"], _author: { name: "HPE", _id: "hpe"},
    images: ["https://images.unsplash.com/photo-1555617981-dac388a08846?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:00:00.000Z",
    rating: 4.6,
    reviewCount: 21,
    location: "Houston, TX",
    availability: "In Stock"
  },
  {_id: "netapp-aff-a250", _title: "NetApp AFF A250 All-Flash Array", _description: "Enterprise all-flash storage system for demanding workloads.", _category: "Storage Systems", _price: 42000, _currency: "$", _brand: "NetApp", _specifications: ["24TB Flash", _"NVMe", _"Active-Active"], _tags: ["Storage", _"Flash", _"NVMe"], _author: { name: "NetApp", _id: "netapp"},
    images: ["https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:45:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    location: "Chicago, IL",
    availability: "2-3 Weeks"
  },
  {_id: "arista-7050x", _title: "Arista 7050X Series Switch", _description: "High-density 10/40GbE switch for modern datacenter networks.", _category: "Networking", _price: 23000, _currency: "$", _brand: "Arista", _specifications: ["48x10GbE", _"6x40GbE", _"Wire Speed"], _tags: ["Switch", _"10GbE", _"Datacenter"], _author: { name: "Arista", _id: "arista"},
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:10:00.000Z",
    rating: 4.5,
    reviewCount: 16,
    location: "Sunnyvale, CA",
    availability: "In Stock"
  }
];

// Market insights component
const _EquipmentMarketInsights = (_{_stats}: {_stats: unknown}) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Equipment Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${_Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{_stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{_stats.totalEquipment}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{_stats.inStockCount}</div>
          <div className="text-sm text-muted-foreground">In Stock</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const _EquipmentFilterControls = (_{_sortBy, _setSortBy, _filterCategory, _setFilterCategory, _categories, _showRecommended, _setShowRecommended, _loading}: unknown) => (_<div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {_loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={_filterCategory} onChange={_(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {_categories.map(_(cat: string) => <option key={cat} value={_cat}>{_cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={_sortBy} onChange={_(_e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
    <Button variant={_showRecommended ? "default" : "outline"} size="sm" onClick={_() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {_showRecommended ? "All Equipment" : "Recommended"}
    </Button>
  </div>
);

// Equipment card
const _EquipmentCard = (_{_equipment, _onViewDetails}: {_equipment: ProductListing; onViewDetails: () => void}) => {_const { formatPrice} = useCurrency();
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{_equipment.title}</h3>
            <p className="text-sm text-muted-foreground">{_equipment.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">{_equipment.brand}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">{_formatPrice(equipment.price ?? 0)}</div>
            <Badge variant={_equipment.availability === "In Stock" ? "default" : "outline"} className="text-xs">
              {_equipment.availability}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{_equipment.rating?.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({_equipment.reviewCount} reviews)</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{_equipment.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{_equipment.category}</span>
          <Button size="sm" onClick={_onViewDetails}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Loading grid
const _EquipmentLoadingGrid = (_{_count = 8}: {_count?: number}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {_Array.from({ length: count}).map(_(_, _i) => <SkeletonCard key={_i} />)}
  </div>
);

// Error fallback component
function EquipmentErrorFallback(_{_error, _resetErrorBoundary}: {_error: Error; resetErrorBoundary: () => void}) {_return (_<div className="container py-8">
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-8 text-center">
          <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 mb-4">
            We're having trouble loading the equipment listings. This might be a temporary issue.
          </p>
          <div className="flex gap-2 justify-center">
            <Button onClick={resetErrorBoundary} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={_() => window.location.reload()} variant="default">
              Refresh Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Main component
function EquipmentPageContent() {_const _router = useRouter();
  const [sortBy, _setSortBy] = useState('newest');
  const [filterCategory, _setFilterCategory] = useState('');
  const [showRecommended, _setShowRecommended] = useState(false);

  // Generate a consistent seed based on current filters for deterministic data
  const _dataSeed = useMemo__(() => {
    return `equipment-${filterCategory}-${_showRecommended}`;
  }, [filterCategory, showRecommended]);

  const _fetchEquipment = useCallback(_async (page: number, _limit: number) => {_// Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, _300));

    try {
      // Generate consistent virtual dataset using the seed
      const _VIRTUAL_DATASET_SIZE = 150;
      const _baseVirtualEquipment = generateDatacenterEquipment(
        VIRTUAL_DATASET_SIZE, _INITIAL_EQUIPMENT.length, _dataSeed
      );
      let fullVirtualDataset: ProductListing[] = [
        ...INITIAL_EQUIPMENT, _...baseVirtualEquipment
      ];

      // Deduplicate by ID in case of overlaps
      const _dedupMap = new Map<string, _ProductListing>();
      for (const item of fullVirtualDataset) {
        if (!dedupMap.has(item.id)) {
          dedupMap.set(item.id, _item);}
      }
      fullVirtualDataset = Array.from(dedupMap.values());

      // Apply category filtering
      let _processedDataset = fullVirtualDataset;
      if (filterCategory) {_processedDataset = processedDataset.filter(e => e.category === filterCategory);}

      // Apply recommended filtering
      if (showRecommended) {_processedDataset = getRecommendedEquipment(processedDataset);}

      // Sort the processed dataset
      processedDataset.sort(_(a, _b) => {_switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0);
          case 'price-high':
            return (b.price || 0) - (a.price || 0);
          case 'rating':
            return (b.rating || 0) - (a.rating || 0);
          default: // 'newest'
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();}
      });

      // Slice for pagination
      const _startIndex = (page - 1) * limit;
      const _endIndex = startIndex + limit;
      const _items = processedDataset.slice(startIndex, endIndex);

      return {_items, _hasMore: endIndex < processedDataset.length, _total: processedDataset.length};
    } catch (error) {_logErrorToProduction('Error in fetchEquipment:', _{ data: error});
      throw new Error('Failed to load equipment data. Please try again.');
    }
  }, [sortBy, filterCategory, showRecommended, dataSeed]);

  const {_items: equipment, _loading, _error, _hasMore, _total, _isFetching, _lastElementRef, _refresh, _scrollToTop, _loadMore} = useInfiniteScrollPagination(fetchEquipment, 12);

  // Refresh when filters change
  useEffect__(() => {_const _timeoutId = setTimeout__(() => {
      refresh();}, 100); // Small delay to prevent rapid successive refreshes

    return () => clearTimeout(timeoutId);
  }, [sortBy, filterCategory, showRecommended, refresh]);

  const _marketStats = useMemo__(() => {_if (equipment.length === 0) return null;
    return getEquipmentMarketStats(equipment);}, [equipment]);

  const _categories = useMemo__(() => {_// Use all possible categories, _not just from current items
    return ["AI Hardware", _"Servers & Compute", _"Networking", _"Storage Systems", _"Power & Cooling"];}, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect__(() => {_const _handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);}, []);

  // Loading state
  if (loading && equipment.length === 0) {_return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </div>
    );
  }

  // Error state
  if (error && equipment.length === 0) {_return (_<div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load equipment</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={_refresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={_() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={_{ opacity: 0, _y: -20}} animate={_{ opacity: 1, _y: 0}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Datacenter Equipment
        </h1>
        <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure and AI workloads</p>
      </motion.div>

      {_marketStats && (
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.2}}>
          <EquipmentMarketInsights stats={_marketStats} />
        </motion.div>
      )}

      <motion.div initial={_{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.3}}>
        <EquipmentFilterControls
          sortBy={_sortBy}
          setSortBy={_setSortBy}
          filterCategory={_filterCategory}
          setFilterCategory={_setFilterCategory}
          categories={_categories}
          showRecommended={_showRecommended}
          setShowRecommended={_setShowRecommended}
          loading={_isFetching}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={_{ opacity: 0}} animate={_{ opacity: 1}} transition={_{ delay: 0.4}}>
        <AnimatePresence mode="popLayout">
          {_equipment.map(_(item, _index) => (
            <motion.div
              key={item.id} 
              ref={_index === equipment.length - 1 ? lastElementRef : null}
              initial={_{ opacity: 0, _scale: 0.9}} 
              animate={_{ opacity: 1, _scale: 1}} 
              exit={_{ opacity: 0, _scale: 0.9}}
              transition={_{ delay: Math.min(index * 0.03, _0.5)}} 
              whileHover={_{ scale: 1.02}}
            >
              <EquipmentCard
                equipment={_item}
                onViewDetails={_() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`equipment:${item.id}`, JSON.stringify(item));
                    } catch {_// ignore storage errors}
                  }
                  router.push(`/equipment/${_item.id}`);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {_(isFetching || loading) && equipment.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <EquipmentLoadingGrid count={_4} />
        </motion.div>
      )}

      {_hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Equipment
            </Button>
          )}
          {_total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {equipment.length} of {_total} items
            </p>
          )}
        </div>
      )}

      {_!hasMore && equipment.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <div className="text-muted-foreground text-lg mb-2">🏭 You've explored all available equipment!</div>
          <div className="text-sm text-muted-foreground">Showing {_equipment.length} datacenter equipment items</div>
        </motion.div>
      )}

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

// Main export with error boundary
export default function EquipmentPage() {_return (
    <EquipmentErrorBoundary>
      <EquipmentPageContent />
    </EquipmentErrorBoundary>
  );}
