import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';

import ProductCard from '@/components/ProductCard';
import { AuthModal } from '@/components/auth/AuthModal';
import {

  ArrowUp,
  Filter,
  SortAsc,
  Sparkles,
  TrendingUp,;
  Star;

} from 'lucide-react';
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
  loading: boolean
}> = ({



    <div className='flex items-center gap-2'>;

    <Button


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

        transition={{ delay: 0.3 }}
      >
        <FilterControls
          sortBy = {sortBy,}
          setSortBy = {setSortBy,}
          filterCategory = {filterCategory,}
          setFilterCategory = {setFilterCategory,}
          categories = {categories,}
          priceRange = {priceRange,}
          setPriceRange = {setPriceRange,}
          minAiScore = {minAiScore,}
          setMinAiScore = {setMinAiScore,}
          minRating = {minRating,}
          setMinRating = {setMinRating,}
          filterAvailability = {filterAvailability,}
          setFilterAvailability = {setFilterAvailability,}
          availabilityOptions = {availabilityOptions.filter(Boolean) as string[],}
          filterLocation = {filterLocation,}
          setFilterLocation = {setFilterLocation,}
          locations = {locations,}
          showRecommended = {showRecommended,}
          setShowRecommended = {setShowRecommended,}
          loading = {isFetching,}
        />
      </motion.div>

              className="relative group"

            >
              {product.aiScore && product.aiScore > 90 && (
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>
                  <Sparkles className='h-3 w-3 mr-1' />
                  in_stock: (product.stock || 0) > 0
                }}
                onBuy={async () => {;
                  if (!isAuthenticated) {;
                    setIsAuthModalOpen(true),;
                    return, // Stop further execution;
                  }
                  try {
                    await router.push(`/checkout/${product.id}`)
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
        <motion.div

    </>);
}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50";
            initial={{ opacity: 0, scale: 0 }}

            animate={{ opacity: 1, scale: 1 }}
          >;
;
