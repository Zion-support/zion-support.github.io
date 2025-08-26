import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { useEffect, useState } from "react";
import { generateRandomEquipment } from "@/utils/generateRandomEquipment";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import Skeleton, { SkeletonCard } from "@/components/ui/skeleton"; // Import SkeletonCard
import { FilterSidebarSkeleton } from "@/components/skeletons/FilterSidebarSkeleton"; // Import FilterSidebarSkeleton
import { useDelayedError } from '@/hooks/useDelayedError';
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
import { safeStorage } from '@/utils/safeStorage';
import { captureException } from '@/utils/sentry';

// The EQUIPMENT_LISTINGS constant has been removed as it was commented out
// and the page primarily relies on API calls and dynamic data generation.
// This helps simplify the file and eliminate potential parsing issues.

const EQUIPMENT_FILTERS = [
  { label: "Servers", value: "Servers" },
  { label: "Networking", value: "Networking" },
  { label: "Power", value: "Power" },
  { label: "Cooling", value: "Cooling" },
  { label: "Storage", value: "Storage" },
  { label: "Security", value: "Security" },
  { label: "Management", value: "Management" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "AI", value: "AI" },
  { label: "Robotics", value: "Robotics" },
];

const EQUIPMENT_CACHE_KEY = 'equipmentCache';

export async function fetchEquipment(): Promise<ProductListing[]> {
  // Added a try-catch block for better error handling during API call
  try {
    const { data } = await apiClient.get('/equipment');
    if (typeof window !== 'undefined') {
      safeStorage.setItem(EQUIPMENT_CACHE_KEY, JSON.stringify(data));
    }
    return data;
  } catch (error: any) {
    captureException(error);
    console.error("Raw error object in fetchEquipment:", error);
    if (error.response) {
      console.error("Error response data in fetchEquipment:", error.response.data);
    }
    console.error("Failed to fetch equipment:", error);
    toast({
      title: error.message || 'Failed to fetch equipment',
      variant: 'destructive',
    });
    // Offline fallback from localStorage if available
    if (typeof window !== 'undefined') {
      const cached = safeStorage.getItem(EQUIPMENT_CACHE_KEY);
      if (cached) {
        try {
          return JSON.parse(cached) as ProductListing[];
        } catch (_) {
          // ignore parse errors and fall through to throw
        }
      }
    }
    // Propagate the error so react-query can handle it
    throw error;
  }
}

export default function EquipmentPage() {
  // Initialize with undefined or null to better distinguish between empty data and loading states
  const [equipment, setEquipment] = useState<ProductListing[] | undefined>(undefined);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    data: fetchedEquipment,
    error: equipmentError,
    isLoading: isLoadingEquipment,
    refetch: refetchEquipment
  } = useQuery<ProductListing[], Error>({
    queryKey: ['equipment'],
    queryFn: fetchEquipment,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10000),
    initialData: () => {
      if (typeof window === 'undefined') return undefined;
      const cached = safeStorage.getItem(EQUIPMENT_CACHE_KEY);
      return cached ? (JSON.parse(cached) as ProductListing[]) : undefined;
    },
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        safeStorage.setItem(EQUIPMENT_CACHE_KEY, JSON.stringify(data));
      }
    },
  });
  const delayedError = useDelayedError(equipmentError);

  useEffect(() => {
    if (fetchedEquipment) {
      setEquipment(fetchedEquipment);
    }
    // Added equipmentError to dependency array for useEffect,
    // so if an error occurs, we can potentially clear existing equipment or handle error state.
  }, [fetchedEquipment, equipmentError]);

  const {
    trigger: fetchRecommendations,
    isMutating: isFetchingRecommendations,
  } = useSWRMutation(
    "/api/equipment/recommendations",
    async ( // Added async here
      url: string,
      { arg }: { arg: { userId: string } }
    ): Promise<ProductListing[]> => { // Added return type
      const res = await fetch(`${url}?userId=${arg.userId}`); // Added await
      if (!res.ok) {
        // Enhanced error handling for failed recommendations fetch
        const errorData = await res.json().catch(() => ({ message: "Failed to fetch recommendations, and error response is not JSON."}));
        console.error("Raw error object in fetchRecommendations:", errorData);
        // The errorData is already logged, but this is to ensure it's captured before throwing.
        console.error("Recommendation fetch error:", errorData);
        throw new Error(errorData.message || "Failed to fetch recommendations");
      }
      return res.json();
    }
  );

  // Interval for adding random equipment
  // useEffect(() => {
  //   // Only set interval if equipment is already loaded/exists to prevent adding to undefined
  //   if (equipment && equipment.length > 0) {
  //     const interval = setInterval(() => {
  //       setEquipment((prev = []) => [...prev, generateRandomEquipment()]); // Ensure prev is an array
  //     }, 120000);
  //     return () => clearInterval(interval);
  //   }
  // }, [equipment]); // Added equipment to dependency array
  // Removed the random equipment generation interval to rely on API data.

  const handleRecommendations = async () => {
    if (!user) {
      navigate('/login?next=/equipment&reco=1');
      return;
    }
    try {
      // Ensure data is correctly typed or cast if necessary
      const data: ProductListing[] = await fetchRecommendations({ userId: user.id });
      setEquipment(data); // data should be ProductListing[]
      toast({ title: 'Showing personalized recommendations' });
    } catch (err: any) { // Typed error
      console.error("Error in handleRecommendations:", err);
      toast({ title: err.message || 'Failed to load recommendations', variant: 'destructive' });
    }
  };

  // Make sure handleRecommendations is memoized or stable if it's a dependency elsewhere, though not strictly required here.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('reco') === '1' && user) {
      handleRecommendations();
    }
    // Added handleRecommendations to dependency array, ensure it's stable (e.g. via useCallback if it were passed down)
    // For now, this is okay as it's defined in the same scope.
  }, [user, location.search, handleRecommendations]);

  // Updated loading condition to specifically check for equipment being undefined
  if (isLoadingEquipment && equipment === undefined) {
    return (
      <div data-testid="loading-state-equipment" className="container mx-auto p-4 space-y-4" aria-busy="true">
        {/* Skeleton for the top button (e.g., AI Recommendations) */}
        <div className="flex justify-end mb-6">
            <Skeleton className="h-10 w-48" /> {/* Removed specific bg color, base Skeleton handles it */}
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalEquipment}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.inStockCount}</div>
          <div className="text-sm text-muted-foreground">In Stock</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const EquipmentFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  priceRange,
  setPriceRange,
  filterBrand,
  setFilterBrand,
  brandOptions,
  filterAvailability,
  setFilterAvailability,
  availabilityOptions,
  minRating,
  setMinRating,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm">$</span>
      <input
        type="number"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
      <span>-</span>
      <input
        type="number"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
    </div>
    {brandOptions.length > 0 && (
      <div className="flex items-center gap-2">
        <select
          value={filterBrand}
          onChange={(e) => setFilterBrand(e.target.value)}
          className="bg-background border border-border px-3 py-2 rounded"
        >
          <option value="">All Brands</option>
          {brandOptions.map((b: string) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
    )}
    {availabilityOptions.length > 0 && (
      <div className="flex items-center gap-2">
        <select
          value={filterAvailability}
          onChange={(e) => setFilterAvailability(e.target.value)}
          className="bg-background border border-border px-3 py-2 rounded"
        >
          <option value="">Any Availability</option>
          {availabilityOptions.map((a: string) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
    )}
    <div className="flex items-center gap-2">
      <span className="text-sm">Rating ≥</span>
      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="bg-background border border-border px-2 py-1 rounded"
      >
        <option value={0}>Any</option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {showRecommended ? "All Equipment" : "Recommended"}
    </Button>
  </div>
);

// Equipment card
const EquipmentCard = ({ equipment, onViewDetails }: { equipment: ProductListing; onViewDetails: () => void }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{equipment.title}</h3>
          <p className="text-sm text-muted-foreground">{equipment.category}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{equipment.brand}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-blue-600">${equipment.price?.toLocaleString()}</div>
          <Badge variant={equipment.availability === "In Stock" ? "default" : "outline"} className="text-xs">
            {equipment.availability}
          </Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{equipment.rating?.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({equipment.reviewCount} reviews)</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{equipment.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{equipment.category}</span>
        <Button size="sm" onClick={onViewDetails}>
          <ShoppingCart className="h-4 w-4 mr-1" />
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
);

// Loading grid
const EquipmentLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Main component
export default function EquipmentPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);

  const fetchEquipment = useCallback(async (page: number, limit: number) => {
    await new Promise(resolve => setTimeout(resolve, 400));

    let allEquipment: ProductListing[] = [];
    
    if (page === 1) {
      allEquipment = [...INITIAL_EQUIPMENT];
    }
    
    const startId = INITIAL_EQUIPMENT.length + (page - 1) * limit + totalGenerated;
    const newEquipment = generateDatacenterEquipment(limit, startId);
    setTotalGenerated(prev => prev + newEquipment.length);
    
    allEquipment = [...allEquipment, ...newEquipment];
    
    let filteredEquipment = allEquipment;

    if (filterCategory) {
      filteredEquipment = filteredEquipment.filter(e => e.category === filterCategory);
    }

    if (filterBrand) {
      filteredEquipment = filteredEquipment.filter(e => e.brand === filterBrand);
    }

    if (filterAvailability) {
      filteredEquipment = filteredEquipment.filter(e => e.availability === filterAvailability);
    }

    filteredEquipment = filteredEquipment.filter(e => {
      const price = e.price || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (minRating > 0) {
      filteredEquipment = filteredEquipment.filter(e => (e.rating || 0) >= minRating);
    }

    if (showRecommended) {
      filteredEquipment = getRecommendedEquipment(filteredEquipment);
    }
    
    filteredEquipment.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      }
    });
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredEquipment.slice(startIndex, endIndex);
    
    return {
      items,
      hasMore: endIndex < filteredEquipment.length || page < 10,
      total: filteredEquipment.length
    };
  }, [sortBy, filterCategory, filterBrand, filterAvailability, priceRange, minRating, showRecommended, totalGenerated]);

  const {
    items: equipment,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop
  } = useInfiniteScrollPagination(fetchEquipment, 12);

  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterCategory, filterBrand, filterAvailability, priceRange, minRating, showRecommended]);

  const marketStats = useMemo(() => {
    if (equipment.length === 0) return null;
    return getEquipmentMarketStats(equipment);
  }, [equipment]);

  const categories = useMemo(() => {
    return Array.from(new Set(equipment.map(e => e.category).filter(Boolean)));
  }, [equipment]);

  const brandOptions = useMemo(() => {
    return Array.from(new Set(equipment.map(e => e.brand).filter(Boolean)));
  }, [equipment]);

  const availabilityOptions = useMemo(() => {
    return Array.from(new Set(equipment.map(e => e.availability).filter(Boolean)));
  }, [equipment]);

  useEffect(() => {
    if (equipment.length > 0 && priceRange[0] === 0 && priceRange[1] === 200000) {
      const prices = equipment.map(e => e.price || 0);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
    }
  }, [equipment]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Datacenter Equipment
        </h1>
        <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure and AI workloads</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <EquipmentMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <EquipmentFilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          filterBrand={filterBrand}
          setFilterBrand={setFilterBrand}
          brandOptions={brandOptions}
          filterAvailability={filterAvailability}
          setFilterAvailability={setFilterAvailability}
          availabilityOptions={availabilityOptions}
          minRating={minRating}
          setMinRating={setMinRating}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {equipment.map((item, index) => (
            <motion.div
              key={item.id} ref={index === equipment.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} whileHover={{ scale: 1.02 }}
            >
              <EquipmentCard equipment={item} onViewDetails={() => router.push(`/equipment/${item.id}`)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <EquipmentLoadingGrid count={4} />
        </motion.div>
      )}

      {!hasMore && equipment.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🏭 You've explored all available equipment!</div>
          <div className="text-sm text-muted-foreground">Showing {equipment.length} datacenter equipment items</div>
        </motion.div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
