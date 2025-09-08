

import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react';

import { NextSeo } from '@/components/NextSeo';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';

import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { INITIAL_MARKETPLACE_PRODUCTS  } from '@/data/initialMarketplaceProducts';
import { useCurrency  } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';

      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableCount}</div>
          <div className="text-sm text-muted-foreground">Available</div>
        </div>
      </div>
    </CardContent>
  </Card>

)
// Filter controls
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading

}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />

      <select value={filterCategory} onChange={(e,) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">

      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />


        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Sparkles className="h-4 w-4 mr-1" />
      {showRecommended ? "All Products" : "Recommended"}


    </Button>;
  </div>;
),;

import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { useAuth } from '@/context/auth/AuthProvider';
import { toast } from '@/hooks/use-toast';

// Product card;
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing, onViewDetails: (,) => void, onAddToCart: () => void }) => {;
  const { formatPrice } = useCurrency(),;


  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{product.brand}</Badge>
            {product.aiScore && product.aiScore > 80 && (
              <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600">
                AI {product.aiScore}
              </Badge>
            )}


    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."


          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg">{t('marketplace.hero_subtitle')}</p>
        </motion.div>
        <MarketplaceLoadingGrid />
      </div>
      </>
    )
  }

  // Error state
  if (error && products.length === 0) {

    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."

          openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
        />;
      <div className="container py-8">;
        <div className="text-center space-y-4">;
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />;
          <h2 className="text-2xl font-bold">Unable to load marketplace</h2>;
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>;
          <div className="flex gap-2 justify-center">;
            <Button onClick={refresh} variant="outline">;
              <RefreshCw className="h-4 w-4 mr-2" />;
              Try Again;
            </Button>;
            <Button onClick={(,) => window && window.location.reload()}>;
    <CardContent className="pt - 0">;
      <div className="flex items - center gap - 4 mb - 3">;
        <div className="flex items - center gap - 1">;
          <Star className="h - 4 w - 4 text - yellow - 500 fill - current" />;
          <span className="text - sm font - medium">{product.rating?.to_fixed (1)}</span>;
          <span className="text - xs text - muted - foreground">({product.review_count} reviews)</span>;
        </div>;
      </div>;
      <p className="text - sm text - muted - foreground mb - 3 line - clamp - 2">{product.description}</p>;
      <div className="flex items - center justify - between gap - 2">;
        <Button;
          size="icon";
          variant="outline";
          on_click = {onAddToCart, }
          aria - label="Add to cart";
          data - testid="add - to - cart - listing - button";
        >;
          <ShoppingCart className="h - 4 w - 4" />;
        </Button>;
        <Button size="sm" variant="outline" className="flex - 1" on_click={onViewDetails}>;
          View Details;
        </Button>;
      </div>;
    </CardContent>;
  </Card>);
},
// Loading grid;
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }, ) =>: any (
  <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;
    {Array.from ({ length: count }).map ((_, i, ) => <SkeletonCard key={i} />)}
  </div>),
// Main component;
/**
 * MarketplacePageContent - Function description
 */
function MarketplacePageContent() {
  const router = use_router (),
  const { t } = use_translation (),
  const dispatch = use_dispatch < AppDispatch>(),
  const { is_authenticated } = use_auth (),
  const [sort_by, setSortBy] = useState ('newest'),
  const [filter_category, setFilterCategory] = useState (''),
  const [show_recommended, setShowRecommended] = useState (false),
  const fetch_products = useCallback (async (page: number, limit: number, ) => {
    // Simulate API delay;
    await new Promise (resolve => set_timeout (resolve, 300)),
    try {
      // Combine initial products with marketplace listings;
      const full_dataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],
      // Apply category filtering;
      let processed_dataset = full_dataset,
      // Check condition
if ( {) {
  $2
}
        processed_dataset = processed_dataset.filter (p => p.category === filter_category);
      }
      // Apply recommended filtering;
      // Check condition
if ( {) {
  $2
}
        processed_dataset = processed_dataset.filter (p => (p.rating || 0) >= 4.5 || (p.ai_score || 0) >= 85);
      }
      // Sort the processed dataset;
      processed_dataset.sort ((a, b, ) => {
        switch (sort_by) {
          case 'price - low':;
            return (a.price || 0) - (b.price || 0),
          case 'price - high':;
            return (b.price || 0) - (a.price || 0),
          case 'rating':;
            return (b.rating || 0) - (a.rating || 0),
          case 'popular':;
            return (b.review_count || 0) - (a.review_count || 0),
          case 'ai - score':;
            return (b.ai_score || 0) - (a.ai_score || 0),
          default: // 'newest';
            return new Date (b.created_at || '').get_time () - new Date (a.created_at || '').get_time ();
        }
      }),
      // Slice for pagination;
      const start_index = (page - 1) * limit,
      const end_index = start_index + limit,
      const items = processed_dataset.slice (start_index, end_index),
      return {
        items,
        has_more: end_index < processed_dataset.length,
        total: processed_dataset.length;
      }
    } catch (error) {
      logErrorToProduction ('Error in fetch_products:', { data: error }),
      throw new Error ('Failed to load marketplace data. Please try again.');
    }
  }, [sort_by, filter_category, show_recommended]),
  const {
    items: products,
    loading,
    error,
    has_more,
    total,
    is_fetching,
    lastElementRef,
    refresh,
    scrollToTop,
    load_more;
  } = useInfiniteScrollPagination (fetch_products, 12),
  // Refresh when filters change;
  useEffect ((, ) => {
    const timeout_id = set_timeout ((, ) => {
      refresh ();
    }, 100),
    return () => clear_timeout (timeout_id);
  }, [sort_by, filter_category, show_recommended, refresh]),
  const market_stats = useMemo ((, ) => {
    // Check condition
if (return null, ) {
  $2
}
    return {
      average_price: products.reduce ((sum, p, ) => sum + (p.price || 0), 0) / products.length,
      average_rating: products.reduce ((sum, p, ) => sum + (p.rating || 0), 0) / products.length,
      total_products: products.length,
      available_count: products.filter (p => p.availability === "Available").length;
    }
  }, [products]),
  const categories = useMemo ((, ) => {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"];
  }, []),
  const [showScrollTop, setShowScrollTop] = useState (false),
  useEffect ((, ) => {
    const handle_scroll = () =>: any setShowScrollTop (window.scroll_y > 800),
    window.addEventListener ('scroll', handle_scroll),
    return () => window.removeEventListener ('scroll', handle_scroll);
  }, []),
  // Loading state;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <NextSeo;
          title="Marketplace - Zion Tech Marketplace Solutions & Services";
          description="Visit our Zion Tech Marketplace to browse top - rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals.";
          open_graph={{ images: [{ url: 'https://app.ziontechgroup.com / og.png' }] }}
        />;
      <div className="container py - 8">;
        <motion.div initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} className="text - center mb - 8">;
          <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent">;
            {t ('marketplace.hero_title')}
          </h1>;
          <p className="text - muted - foreground text - lg">{t ('marketplace.hero_subtitle')}</p>;
        </motion.div>;
        <MarketplaceLoadingGrid />;
      </div>;
      </>);
  }
  // Error state;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <NextSeo;
          title="Marketplace - Zion Tech Marketplace Solutions & Services";
          description="Visit our Zion Tech Marketplace to browse top - rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals.";
          open_graph={{ images: [{ url: 'https://app.ziontechgroup.com / og.png' }] }}
        />;
      <div className="container py - 8">;
        <div className="text - center space - y-4">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - red - 500" />;
          <h2 className="text - 2xl font - bold">Unable to load marketplace</h2>;
          <p className="text - muted - foreground max - w-md mx - auto">{error}</p>;
          <div className="flex gap - 2 justify - center">;
            <Button on_click={refresh} variant="outline">;
              <RefreshCw className="h - 4 w - 4 mr - 2" />;
              Try Again;
            </Button>;
            <Button on_click={(, ) => window.location.reload ()}>;
              Refresh Page;
            </Button>;
          </div>;
        </div>;
      </div>;





      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
      />;
    <div className="container py-8">;
      <motion && motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>;
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
          {t('marketplace && marketplace.hero_title')}
        </h1>;
        <p className="text-muted-foreground text-lg">{t('marketplace && marketplace.hero_subtitle')}</p>;
      </motion && motion.div>;

      {marketStats && (;
        <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 && 0.2 }}>;
          <MarketplaceInsights stats={marketStats} />;
        </motion && motion.div>;
      )}

      <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 && 0.3 }}>;
        <MarketplaceFilterControls
          sortBy = {sortBy,}
          setSortBy = {setSortBy,}
          filterCategory = {filterCategory,}
          setFilterCategory = {setFilterCategory,}
          categories = {categories,}
          showRecommended = {showRecommended,}
          setShowRecommended = {setShowRecommended,}
          loading = {isFetching,}

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
          {products.map((item, index) => (
            <motion.div
              key={item.id} 
              ref={index === products.length - 1 ? lastElementRef : null}

              initial={{ opacity: 0, scale: 0.9 }} ;
              animate={{ opacity: 1, scale: 1 }} ;

                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }

                  router.push (`/marketplace / listing/${item.id}`);
                }}

        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MarketplaceLoadingGrid count={4} />
        </motion.div>
      )}


      {hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Products


        </AnimatePresence>;
      </motion && motion.div>;

      {(isFetching || loading) && products && products.length > 0 && (;
        <motion && motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <MarketplaceLoadingGrid count={4} />;
        </motion && motion.div>;

            </Button>


          )}
            </Button>          )}

          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {products.length} of {total} items
            </p>

      )}

      {hasMore && !loading && (;
        <div className="text-center mt-8">;
          {isFetching ? (;
            <Spinner className="mx-auto h-6 w-6" />;
          ) : (;
            <Button onClick={loadMore} variant="outline" size="lg">;
              Load More Products;
            </Button>          )}
          {total !== undefined && (;
            <p className="mt-2 text-sm text-muted-foreground">;
              Showing {products && products.length} of {total} items;
            </p>;
          )}
        </div>;
      )}


      {!hasMore && products && products.length > 0 && (;
        <motion && motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>;
          <div className="text-sm text-muted-foreground">Showing {products && products.length} marketplace items</div>;
        </motion && motion.div>;
      )}

      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button 


        )}
      </AnimatePresence>
    </div>
    </>
  )
}


