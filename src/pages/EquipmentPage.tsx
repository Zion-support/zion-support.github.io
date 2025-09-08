import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { useEffect, useState } from "react";
import { generateRandomEquipment } from "@/utils/generateRandomEquipment";
import { EQUIPMENT_LISTINGS } from "@/data/equipmentListings";
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

<<<<<<< HEAD
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
  }

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
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {equipment.map((item, index) => (
            <motion.div
              key={item.id} 
              ref={index === equipment.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} 
              whileHover={{ scale: 1.02 }}><EquipmentCard
                equipment={item}
                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`equipment:${item.id}`, JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router.push(`/equipment/${item.id}`)
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && equipment.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <EquipmentLoadingGrid count={4} />
        </motion.div>
      )}

      {hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Equipment
            </Button>
          )}
          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {equipment.length} of {total} items
            </p>
          )}
        </div>
      )}

      {!hasMore && equipment.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🏭 You've explored all available equipment!</div>
          <div className="text-sm text-muted-foreground">Showing {equipment.length} datacenter equipment items</div>
        </motion.div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}><ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
// Main export with error boundary
export default function EquipmentPage() {
  const [listings, setListings] = useState<ProductListing[]>([
    ...EQUIPMENT_LISTINGS,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings((prev) => [...prev, generateRandomEquipment()]);
    }, 120000); // add new equipment every 2 minutes
    return () => clearInterval(interval);
  }, []);

  return (
      <DynamicListingPage
        title="Datacenter Equipment"
        description="Browse professional hardware for modern datacenter and network deployments."
        categorySlug="equipment"
        listings={listings}
        categoryFilters={EQUIPMENT_FILTERS}
        initialPrice={{ min: 400, max: 50000 }}
        detailBasePath="/equipment"
      />
  );
}
