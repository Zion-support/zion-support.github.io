<<<<<<< HEAD
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { useRouter } from 'next/router',
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',
import { generateITServices, getServicesMarketStats, getRecommendedServices } from '@/utils/servicesAutoFeedAlgorithm',
import { ProductListing } from '@/types/listings',
import { SkeletonCard } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import Spinner from '@/components/ui/spinner',
import { SERVICES } from '@/data/servicesData',
import { useCurrency } from '@/hooks/useCurrency',
=======
import Spinner from '@/components/ui/spinner';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Initial services from existing data
const INITIAL_SERVICES: ProductListing[] = SERVICES,

// Market insights component
<<<<<<< HEAD
const ServicesMarketInsights = ({ stats }: { stats: any }) => (
  <Card className=&quot;bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6&quot;>
    <CardContent className=&quot;p-6&quot;>
      <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-green-400&quot;>${(stats.averagePrice / 1000).toFixed(1)}k</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Price</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-blue-400&quot;>{stats.averageRating}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Rating</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-purple-400&quot;>{stats.totalServices}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Total Services</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-orange-400&quot;>{stats.availableServices}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Available Now</div>
        </div>
      </div>
      <div className=&quot;mt-4 text-center text-sm text-muted-foreground&quot;>
        Premium Services ({stats.premiumServices}) • AI Score Avg: {stats.averageAIScore}
=======
const _ServicesMarketInsights = (_{_stats}: {_stats: unknown}) => (
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">
    <CardContent className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">${_(stats.averagePrice / 1000).toFixed(1)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{_stats.averageRating}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{_stats.totalServices}</div>
          <div className="text-sm text-muted-foreground">Total Services</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{_stats.availableServices}</div>
          <div className="text-sm text-muted-foreground">Available Now</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Premium Services ({_stats.premiumServices}) • AI Score Avg: {_stats.averageAIScore}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </CardContent>
  </Card>
),

// Filter controls
<<<<<<< HEAD
const ServiceFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className=&quot;flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative&quot;>
    {loading && <Spinner className=&quot;absolute right-4 top-4 h-4 w-4 text-primary&quot; />}
    <div className=&quot;flex items-center gap-2&quot;>
      <Filter className=&quot;h-4 w-4 text-muted-foreground&quot; />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className=&quot;bg-background border border-border px-3 py-2 rounded&quot;>
=======
const _ServiceFilterControls = (_{_sortBy, _setSortBy, _filterCategory, _setFilterCategory, _categories, _showRecommended, _setShowRecommended, _loading}: unknown) => (_<div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {_loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={_filterCategory} onChange={_(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <option value="">All Categories</option>
        {_categories.map(_(cat: string) => <option key={cat} value={_cat}>{_cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
<<<<<<< HEAD
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded&quot;>
        <option value=&quot;newest&quot;>Newest First</option>
        <option value=&quot;price-low&quot;>Price: Low to High</option>
        <option value=&quot;price-high&quot;>Price: High to Low</option>
        <option value=&quot;rating&quot;>Highest Rated</option>
        <option value=&quot;ai-score&quot;>AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1&quot; />
      {showRecommended ? &quot;All Services&quot; : &quot;Recommended"}
=======
      <select value={_sortBy} onChange={_(_e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={_showRecommended ? "default" : "outline"} size="sm" onClick={_() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {_showRecommended ? "All Services" : "Recommended"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Button>
  </div>
),

// Service card
<<<<<<< HEAD
const ServiceCard = ({ service, onViewDetails }: { service: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency(),
=======
const _ServiceCard = (_{_service, _onViewDetails}: {_service: ProductListing; onViewDetails: () => void}) => {_const { formatPrice} = useCurrency();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{_service.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
<<<<<<< HEAD
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-muted-foreground&quot;>({service.reviewCount})</span>
            </div>
            {service.aiScore && service.aiScore > 85 && (
              <Badge variant=&quot;secondary" className="text-xs bg-purple-100 text-purple-700">
=======
              <span className="text-sm font-medium">{_service.rating}</span>
              <span className="text-xs text-muted-foreground">({_service.reviewCount})</span>
            </div>
            {_service.aiScore && service.aiScore > 85 && (
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                AI Score: {service.aiScore}
              </Badge>
            )}
          </div>
<<<<<<< HEAD
          <div className="flex items-center gap-2 mt-2&quot;>
            <Badge variant=&quot;secondary" className="text-xs">{service.author.name}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-green-600&quot;>{formatPrice(service.price ?? 0)}</div>
          <Badge variant={service.availability === &quot;Available&quot; ? &quot;default&quot; : &quot;outline"} className="text-xs">
            {service.availability}
=======
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{_service.author.name}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-green-600">{_formatPrice(service.price ?? 0)}</div>
          <Badge variant={_service.availability === "Available" ? "default" : "outline"} className="text-xs">
            {_service.availability}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{_service.description}</p>
      <div className="flex items-center justify-between">
<<<<<<< HEAD
        <span className="text-sm font-medium&quot;>{service.category}</span>
        <Button size=&quot;sm" onClick={onViewDetails}>
=======
        <span className="text-sm font-medium">{_service.category}</span>
        <Button size="sm" onClick={_onViewDetails}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <ShoppingCart className="h-4 w-4 mr-1" />
          Contact
        </Button>
      </div>
    </CardHeader>
  </Card>
)
},

// Loading grid
const _ServicesLoadingGrid = (_{_count = 8}: {_count?: number}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {_Array.from({ length: count}).map(_(_, _i) => <SkeletonCard key={_i} />)}
  </div>
),

// Main component
<<<<<<< HEAD
export default function ServicesPage() {
  const router = useRouter(),
  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),
  const [totalGenerated, setTotalGenerated] = useState(0),

  const fetchServices = useCallback(async (page: number, limit: number) => {
    await new Promise(resolve => setTimeout(resolve, 400)),
=======
export default function ServicesPage() {_const _router = useRouter();
  const [sortBy, _setSortBy] = useState('newest');
  const [filterCategory, _setFilterCategory] = useState('');
  const [showRecommended, _setShowRecommended] = useState(false);
  const [totalGenerated, _setTotalGenerated] = useState(0);

  const _fetchServices = useCallback(_async (page: number, _limit: number) => {
    await new Promise(resolve => setTimeout(resolve, _400));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    let allServices: ProductListing[] = [],
    
    if (page === 1) {
<<<<<<< HEAD
      allServices = [...INITIAL_SERVICES]
    }
    
    const startId = INITIAL_SERVICES.length + (page - 1) * limit + totalGenerated,
    const newServices = generateITServices(limit, startId),
    setTotalGenerated(prev => prev + newServices.length),
    allServices = [...allServices, ...newServices],
    
    let filteredServices = allServices,
    
    if (filterCategory) {
      filteredServices = filteredServices.filter(s => s.category === filterCategory)
    }
    
    if (showRecommended) {
      filteredServices = getRecommendedServices(filteredServices)
    }
=======
      allServices = [...INITIAL_SERVICES];}
    
    const _startId = INITIAL_SERVICES.length + (page - 1) * limit + totalGenerated;
    const _newServices = generateITServices(limit, startId);
    setTotalGenerated(prev => prev + newServices.length);
    allServices = [...allServices, ...newServices];
    
    let _filteredServices = allServices;
    
    if (filterCategory) {_filteredServices = filteredServices.filter(s => s.category === filterCategory);}
    
    if (showRecommended) {_filteredServices = getRecommendedServices(filteredServices);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    filteredServices.sort(_(a, _b) => {_switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0),
        case 'price-high':
          return (b.price || 0) - (a.price || 0),
        case 'rating':
          return (b.rating || 0) - (a.rating || 0),
        case 'ai-score':
<<<<<<< HEAD
          return (b.aiScore || 0) - (a.aiScore || 0),
        default: return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
      }
    }),
    
    const startIndex = (page - 1) * limit,
    const endIndex = startIndex + limit,
    const items = filteredServices.slice(startIndex, endIndex),
    
    return {
      items,
      hasMore: endIndex < filteredServices.length || page < 10,
      total: filteredServices.length
    }
  }, [sortBy, filterCategory, showRecommended, totalGenerated]),

  const {
    items: services,
    loading,
    error,
    hasMore,
    isFetching,
    lastElementRef,
    scrollToTop,
    refresh,
    total
  } = useInfiniteScrollPagination(fetchServices, 12),

  useEffect(() => {
    refresh(),
    setTotalGenerated(0)
  }, [sortBy, filterCategory, showRecommended]),

  const marketStats = useMemo(() => {
    if (services.length === 0) return null,
    return getServicesMarketStats(services)
  }, [services]),

  const categories = useMemo(() => {
    return Array.from(new Set(services.map(s => s.category).filter(Boolean)))
  }, [services]),

  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
=======
          return (b.aiScore || 0) - (a.aiScore || 0);
        default:
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();}
    });
    
    const _startIndex = (page - 1) * limit;
    const _endIndex = startIndex + limit;
    const _items = filteredServices.slice(startIndex, endIndex);
    
    return {_items, _hasMore: endIndex < filteredServices.length || page < 10, _total: filteredServices.length};
  }, [sortBy, filterCategory, showRecommended, totalGenerated]);

  const {_items: services, _loading, _error, _hasMore, _isFetching, _lastElementRef, _scrollToTop, _refresh, _total} = useInfiniteScrollPagination(fetchServices, 12);

  useEffect__(() => {_refresh();
    setTotalGenerated(0);}, [sortBy, filterCategory, showRecommended]);

  const _marketStats = useMemo__(() => {_if (services.length === 0) return null;
    return getServicesMarketStats(services);}, [services]);

  const _categories = useMemo__(() => {_return Array.from(new Set(services.map(s => s.category).filter(Boolean)));}, [services]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect__(() => {_const _handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);}, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (loading && services.length === 0) {_return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            IT & AI Services
          </h1>
          <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p>
        </motion.div>
        <ServicesLoadingGrid />
      </div>
    )
  }

  if (error) {_return (
      <div className="container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>
        <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p>
        <Button onClick={refresh}>Retry</Button>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={_{ opacity: 0, _y: -20}} animate={_{ opacity: 1, _y: 0}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          IT & AI Services
        </h1>
        <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p>
      </motion.div>

      {_marketStats && (
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.2}}>
          <ServicesMarketInsights stats={_marketStats} />
        </motion.div>
      )}

      <motion.div initial={_{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.3}}>
        <ServiceFilterControls
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

<<<<<<< HEAD
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode=&quot;popLayout">
          {services.map((item, index) => (
=======
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={_{ opacity: 0}} animate={_{ opacity: 1}} transition={_{ delay: 0.4}}>
        <AnimatePresence mode="popLayout">
          {_services.map(_(item, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              key={item.id} ref={_index === services.length - 1 ? lastElementRef : null}
              initial={_{ opacity: 0, _scale: 0.9}} animate={_{ opacity: 1, _scale: 1}} exit={_{ opacity: 0, _scale: 0.9}}
              transition={_{ delay: Math.min(index * 0.03, _0.5)}} whileHover={_{ scale: 1.02}}
            >
              <ServiceCard service={_item} onViewDetails={_() => router.push(`/services/${item.id}`)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {_(isFetching || loading) && (
        <motion.div className="mt-8" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <ServicesLoadingGrid count={_4} />
        </motion.div>
      )}

      {_!hasMore && services.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>
          <div className="text-sm text-muted-foreground">Showing {_services.length} IT & AI services</div>
        </motion.div>
      )}

      <AnimatePresence>
        {_showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={_{ opacity: 0, _scale: 0}} animate={_{ opacity: 1, _scale: 1}} exit={_{ opacity: 0, _scale: 0}}
            whileHover={_{ scale: 1.1}} whileTap={_{ scale: 0.9}}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
