import import { useRouter,,, ,,  } from 'next/router';
import import { useState,,, useEffect,,, useCallback,,, useMemo,,, ,,  } from 'react';
import import { motion,,, AnimatePresence,,, ,,  } from 'framer-motion';
import { ArrowUp,,, Filter,,, SortAsc,,, Zap,,, TrendingUp,,, Star,,, ShoppingCart,,, MapPin,,, Package,,, AlertTriangle,,, RefreshCw,,  } from 'lucide-react'
import import { useInfiniteScrollPagination,,, ,,  } from '@/hooks/useInfiniteScroll';
import import { generateDatacenterEquipment,,, getEquipmentMarketStats,,, getRecommendedEquipment,,, ,,  } from '@/utils/equipmentAutoFeedAlgorithm';
import import { ProductListing,,, ,,  } from '@/types/listings';
import import { SkeletonCard,,, ,,  } from '@/components/ui/skeleton';
import import { Button,,, ,,  } from '@/components/ui/button';
import import { Badge,,, ,,  } from '@/components/ui/badge';
import import { Card,,, CardContent,,, CardHeader,,, CardTitle,,, ,,  } from '@/components/ui/card';
import import Spinner from '@/components/ui/spinner';
import import { EquipmentErrorBoundary,,, ,,  } from '@/components/EquipmentErrorBoundary';
import import { useCurrency,,, ,,  } from '@/hooks/useCurrency';
import import { logErrorToProduction } from '@/utils/productionLogger';
// Enhanced initial equipment with more variety,
const INITIAL_EQUIPMENT: ProductListing[] = [
  {
    id: ",
title: "
    description: "High-performance AI training server with 8x A100 GPUs designed for demanding machine learning workloads.",
    category: ",
price: 85000;
    currency: ",
brand: "
    specifications: ["8x A100 GPUs", "2TB HBM2e", "NVLink"],
    tags: ["AI", "Machine Learning", "GPU"],
    author: { name: "NVIDIA", id: "nvidia" },
    images: ["https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto;
  // Loading state,
if (loading && equipment.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0 y: 20 }} animate={{ opacity: 1 y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </div>
    )
  }

}
// Main export with error boundary,
export default function EquipmentPage() {
  return (
    <EquipmentErrorBoundary>
      <EquipmentPageContent />
    </EquipmentErrorBoundary>
  )
}