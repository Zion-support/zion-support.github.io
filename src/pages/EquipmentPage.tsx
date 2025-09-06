import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
  // Error state
  if (error && equipment.length === 0) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load equipment</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={refresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
    )
  }, [sortBy, filterCategory, showRecommended, dataSeed]),;
  const {;
    items: equipment,;
    loading,;
    error,;
    hasMore,;
    total,;
    isFetching,;
    lastElementRef,;
    refresh,;
    scrollToTop,;
    loadMore;
  } = useInfiniteScrollPagination(fetchEquipment, 12),;
  // Refresh when filters change;
  useEffect(() => {;
    const timeoutId = setTimeout(() => {;
      refresh();
    }, 100), // Small delay to prevent rapid successive refreshes;
    return () => clearTimeout(timeoutId);
  }, [sortBy, filterCategory, showRecommended, refresh]),;
  const marketStats = useMemo(() => {;
    if (equipment.length === 0) return null,;
    return getEquipmentMarketStats(equipment);
  }, [equipment]),;
  const categories = useMemo(() => {;
    // Use all possible categories, not just from current items;
    return ["AI Hardware", "Servers & Compute", "Networking", "Storage Systems", "Power & Cooling"];
  }, []),;
  const [showScrollTop, setShowScrollTop] = useState(false),;
  useEffect(() => {;
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),;
    window.addEventListener('scroll', handleScroll),;
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Loading state;
  if (loading && equipment.length === 0) {;
    return (;
      <div className="container py-8">;
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">;
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            Datacenter Equipment;
          </h1>;
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>;
        </motion.div>;
        <EquipmentLoadingGrid />;
      </div>;
    );
  }
;
  // Error state;
  if (error && equipment.length === 0) {;
    return (;
      <div className="container py-8">;
        <div className="text-center space-y-4">;
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />;
          <h2 className="text-2xl font-bold">Unable to load equipment</h2>;
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>;
          <div className="flex gap-2 justify-center">;
            <Button onClick={refresh} variant="outline">;
              <RefreshCw className="h-4 w-4 mr-2" />;
              Try Again;
            </Button>;
            <Button onClick={() => window.location.reload()}>;
              Refresh Page;
            </Button>;
          </div>;
        </div>;
      </div>;
    );
  }
;
  return (;
    <div className="container py-8">;
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>;
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
          Datacenter Equipment;
        </h1>;
        <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure and AI workloads</p>;
      </motion.div>;
      {marketStats && (;
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>;
          <EquipmentMarketInsights stats={marketStats} />;
        </motion.div>;
      )}
;
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>;
        <EquipmentFilterControls;
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


// Main export with error boundary;
export default function EquipmentPage() {;



;
}
// Main export with error boundary;
export default /**
 * EquipmentPage - Function description
 */
function EquipmentPage() {
  return (
    <EquipmentErrorBoundary>;
      <EquipmentPageContent />;
    </EquipmentErrorBoundary>);
}
;
