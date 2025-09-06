import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { generateITServices, getServicesMarketStats, getRecommendedServices } from '@/utils/servicesAutoFeedAlgorithm';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { SERVICES } from '@/data/servicesData';
import { useCurrency } from '@/hooks/useCurrency';
// Initial services from existing data
const INITIAL_SERVICES: ProductListing[] = SERVICES,

// Market insights component
const ServicesMarketInsights = $2;
// Filter controls
const ServiceFilterControls = $2;
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className = $2;
// Service card
const ServiceCard = ({ service, onViewDetails }: { service: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency($2);
  return (
  <Card className = $2;
// Loading grid
const ServicesLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count}).map((_, i) => <SkeletonCard key = $2;
// Main component
export default function ServicesPage() {
  const router = useRouter($2);
  const [sortBy, setSortBy] = useState($2);
  const [filterCategory, setFilterCategory] = useState($2);
  const [showRecommended, setShowRecommended] = useState($2);
  const [totalGenerated, setTotalGenerated] = useState($2);
  const fetchServices = useCallback(async (page: number, limit: number) => {
    await new Promise(resolve => setTimeout(resolve, 400)),

    let allServices: ProductListing[] = [],
    
    if (page = $2;
    const newServices = generateITServices($2);
    setTotalGenerated($2);
    allServices = [...allServices, ...newServices],
    
    let filteredServices = $2;
    if (filterCategory) {
      filteredServices = filteredServices.filter(s => s.category === filterCategory)
    }
    
    if (showRecommended) {
      filteredServices = getRecommendedServices(filteredServices)
    }
    
    filteredServices.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0),
        case 'price-high':
          return (b.price || 0) - (a.price || 0),
        case 'rating':
          return (b.rating || 0) - (a.rating || 0),
        case 'ai-score':
          return (b.aiScore || 0) - (a.aiScore || 0),
        default: return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
      }
    }),
    
    const startIndex = $2;
    const endIndex = $2;
    const items = filteredServices.slice($2);
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
  } = useInfiniteScrollPagination($2);
  useEffect(() => {
    refresh($2);
    setTotalGenerated(0)
  }, [sortBy, filterCategory, showRecommended]),

  const marketStats = $2;
    return getServicesMarketStats(services)
  }, [services]),

  const categories = useMemo(() => {
    return Array.from(new Set(services.map(s => s.category).filter(Boolean)))
  }, [services]),

  const [showScrollTop, setShowScrollTop] = useState($2);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop($2);
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  if (loading && services.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 0}} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            IT & AI Services
          </h1>
          <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p>
        </motion.div>
        <ServicesLoadingGrid />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>
        <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p>
        <Button onClick={refresh}>Retry</Button>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          IT & AI Services
        </h1>
        <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 0}} transition={{ delay: 0.2 }}>
          <ServicesMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 0}} transition={{ delay: 0.3 }}>
        <ServiceFilterControls
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

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {services.map((item, index) => (
            <motion.div
              key={item.id} ref={index === services.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} whileHover={{ scale: 1.02 }}
            >
              <ServiceCard service={item} onViewDetails={() => router.push(`/services/${item.id}`)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && (
        <motion.div className="mt-8" initial={{ opacity: 0}} animate={{ opacity: 1}}>
          <ServicesLoadingGrid count={4} />
        </motion.div>
      )}

      {!hasMore && services.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0}} animate={{ opacity: 1}}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>
          <div className="text-sm text-muted-foreground">Showing {services.length} IT & AI services</div>
        </motion.div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0}} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0}}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
