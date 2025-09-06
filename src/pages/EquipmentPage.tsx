

import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from 'lucide-react'
import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { generateDatacenterEquipment, getEquipmentMarketStats, getRecommendedEquipment  } from '@/utils/equipmentAutoFeedAlgorithm';
import { ProductListing  } from '@/types/listings';
import { SkeletonCard  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { EquipmentErrorBoundary  } from '@/components/EquipmentErrorBoundary';
import { useCurrency  } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';
// Enhanced initial equipment with more variety
const INITIAL_EQUIPMENT: ProductListing[] = [
  {

// Equipment card
const EquipmentCard = ({ equipment, onViewDetails }: { equipment: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency(),
  return (

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
            <div className="text-xl font-bold text-blue-600">{formatPrice(equipment.price ?? 0)}</div>
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
  )
},

// Loading grid
const EquipmentLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
),

// Error fallback component
function EquipmentErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) {
  return (
    <div className="container py-8">
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
            <Button onClick={() => window.location.reload()} variant="default">
              Refresh Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
;
// Main component;
function EquipmentPageContent() {;
  const router = useRouter(),;
  const [sortBy, setSortBy] = useState('newest'),;
  const [filterCategory, setFilterCategory] = useState(''),;
  const [showRecommended, setShowRecommended] = useState(false),;
  // Generate a consistent seed based on current filters for deterministic data;
  const dataSeed = useMemo(() => {;
    return `equipment-${filterCategory}-${showRecommended}`;
  }, [filterCategory, showRecommended]),;
  const fetchEquipment = useCallback(async (page: number, limit: number) => {;
    // Simulate realistic API delay;
    await new Promise(resolve => setTimeout(resolve, 300)),;
    try {;
      // Generate consistent virtual dataset using the seed;
      const VIRTUAL_DATASET_SIZE = 150,;
      const baseVirtualEquipment = generateDatacenterEquipment(;
        VIRTUAL_DATASET_SIZE,;
        INITIAL_EQUIPMENT.length,;
        dataSeed;
      ),;
      let fullVirtualDataset: ProductListing[] = [;
        ...INITIAL_EQUIPMENT,;
        ...baseVirtualEquipment;
      ],;
      // Deduplicate by ID in case of overlaps;
      const dedupMap = new Map<string ProductListing>(),;
      for (const item of fullVirtualDataset) {;
        if (!dedupMap.has(item.id)) {;
          dedupMap.set(item.id, item);
        }
      }
      fullVirtualDataset = Array.from(dedupMap.values()),;
      // Apply category filtering;
      let processedDataset = fullVirtualDataset,;
      if (filterCategory) {;
        processedDataset = processedDataset.filter(e => e.category === filterCategory);
      }
;
      // Apply recommended filtering;
      if (showRecommended) {;
        processedDataset = getRecommendedEquipment(processedDataset);
      }
;
      // Sort the processed dataset;
      processedDataset.sort((a, b) => {;
        switch (sortBy) {;
          case 'price-low':;
            return (a.price || 0) - (b.price || 0),;
          case 'price-high':;
            return (b.price || 0) - (a.price || 0),;
          case 'rating':;
            return (b.rating || 0) - (a.rating || 0),;
          default: // 'newest';
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        }
      }),;
      // Slice for pagination;
      const startIndex = (page - 1) * limit,;
      const endIndex = startIndex + limit,;
      const items = processedDataset.slice(startIndex, endIndex),;
      return {;
        items,;
        hasMore: endIndex < processedDataset.length,;
        total: processedDataset.length;
      }
    } catch (error) {;
      logErrorToProduction('Error in fetchEquipment:', { data: error }),;
      throw new Error('Failed to load equipment data. Please try again.');
    }
  }, [sortBy, filterCategory, showRecommended, dataSeed]),

  const {
    items: equipment,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop,
    loadMore
  } = useInfiniteScrollPagination(fetchEquipment, 12),

  // Refresh when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refresh()
    }, 100), // Small delay to prevent rapid successive refreshes

    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh]),

  const marketStats = useMemo(() => {
    if (equipment.length === 0) return null,
    return getEquipmentMarketStats(equipment)
  }, [equipment]),

  const categories = useMemo(() => {
    // Use all possible categories, not just from current items
    return ["AI Hardware", "Servers & Compute", "Networking", "Storage Systems", "Power & Cooling"]
  }, []),

  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  // Loading state
  if (loading && equipment.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </div>
    )
  }
