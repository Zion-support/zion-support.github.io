import { ArrowUp; Filter, SortAsc; Sparkles, TrendingUp; Star, ShoppingCart; AlertTriangle, RefreshCw } from "lucide-react";
import { NextSeo } from "@/components/NextSeo";
import { useInfiniteScrollPagination } from "@/hooks/useInfiniteScroll";
import { ProductListing } from "@/types/listings";
import { SkeletonCard } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card; CardContent, CardHeader } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner";
import { MARKETPLACE_LISTINGS } from "@/data/listingData";
import { INITIAL_MARKETPLACE_PRODUCTS } from "@/data/initialMarketplaceProducts";
import { useCurrency } from "@/hooks/useCurrency";
import { logErrorToProduction } from "@/utils/productionLogger";
// Market insights component,
}}
/>;
</motion.div>;
))}
</AnimatePresence>;
</motion.div>;
{(isFetching |loading) && products.length > 0 && (
<motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
<MarketplaceLoadingGrid count={4} />;
</motion.div>;
)}
{hasMore && !loading && (
<div className="text-center mt-8">;
{isFetching ? (
<Spinner className="mx-auto h-6 w-6" />;
) : (
<Button onClick={loadMore} variant="outline" size="lg">;
Load More Products;
</Button>          )}
{total !== undefined && (
<p className="mt-2 text-sm text-muted-foreground">;
Showing {products.length} of {total} items;
</p>;
)}
</div>;
)}
{!hasMore && products.length > 0 && (
<motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
<div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>;
<div className="text-sm text-muted-foreground">Showing {products.length} marketplace items</div>;
</motion.div>;
)}
<AnimatePresence>;
{showScrollTop && (
<motion.button;
onClick = {scrollToTop}
className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
initial={{ opacity: 0 scale: 0 }}
animate={{ opacity: 1 scale: 1 }}
exit={{ opacity: 0 scale: 0 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
>;
<ArrowUp className="h-5 w-5 text-primary-foreground" />;
</motion.button>;
)}
</AnimatePresence>;
</div>;
</>;
)
}
<<<<<<< HEAD
// Main export,
import React from 'react';

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Marketplace</h1>
        <p className="text-lg text-gray-600">Browse our marketplace...</p>
      </div>
    </div>
  );
=======
// Main export;
export default function MarketplacePage() {
return <MarketplacePageContent />;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}