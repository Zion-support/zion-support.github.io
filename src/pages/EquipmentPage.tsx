<<<<<<< HEAD


import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',

=======
import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
>>>>>>> import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from 'lucide-react'
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from 'lucide-react'
>>>>>>> import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
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
<<<<<<< HEAD

=======
    id: "nvidia-a100-server";
    title: "NVIDIA A100 GPU Training Server";
    description: "High-performance AI training server with 8x A100 GPUs, designed for demanding machine learning workloads.",
    category: "AI Hardware";
    price: 85000;
    currency: "$";
    brand: "NVIDIA";
    specifications: ["8x A100 GPUs", "2TB HBM2e", "NVLink"],
    tags: ["AI", "Machine Learning", "GPU"],
    author: { name: "NVIDIA", id: "nvidia" },
    images: ["https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto;
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Equipment card
const EquipmentCard = ({ equipment, onViewDetails }: { equipment: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency(),
  return (
<<<<<<< HEAD

=======
    <EquipmentErrorBoundary>
      <EquipmentPageContent />
    </EquipmentErrorBoundary>
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
  // Loading state
=======
>>>>>>>   // Loading state
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======


}
// Main export with error boundary
export default function EquipmentPage() {
  return (
    <EquipmentErrorBoundary>
      <EquipmentPageContent />
    </EquipmentErrorBoundary>
  )
}
>>>>>>> 
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
