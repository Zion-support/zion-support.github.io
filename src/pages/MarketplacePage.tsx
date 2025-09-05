import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react'
import { NextSeo } from '@/components/NextSeo';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts';
import { useCurrency } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';


// Market insights component
const MarketplaceInsights = ({ stats }: { stats: any }) => (
  <Card className=&quot;bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6&quot;>
    <CardContent className=&quot;p-6&quot;>
      <div className=&quot;flex items-center gap-2 mb-4&quot;>
        <TrendingUp className=&quot;h-5 w-5 text-blue-400&quot; />
        <h3 className=&quot;text-lg font-semibold&quot;>Marketplace Insights</h3>
      </div>
      <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-blue-400&quot;>${Math.round(stats.averagePrice / 1000)}k</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Price</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-green-400&quot;>{stats.averageRating.toFixed(1)}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Rating</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-purple-400&quot;>{stats.totalProducts}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Products</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-orange-400&quot;>{stats.availableCount}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Available</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: any) => (
  <div className=&quot;flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative&quot;>
    {loading && <Spinner className=&quot;absolute right-4 top-4 h-4 w-4 text-primary&quot; />}
    <div className=&quot;flex items-center gap-2&quot;>
      <Filter className=&quot;h-4 w-4 text-muted-foreground&quot; />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className=&quot;bg-background border border-border px-3 py-2 rounded&quot;>
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded&quot;>
        <option value=&quot;newest&quot;>Newest First</option>
        <option value=&quot;price-low&quot;>Price: Low to High</option>
        <option value=&quot;price-high&quot;>Price: High to Low</option>
        <option value=&quot;rating&quot;>Highest Rated</option>
        <option value=&quot;popular&quot;>Most Popular</option>
        <option value=&quot;ai-score&quot;>AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Sparkles className="h-4 w-4 mr-1&quot; />
      {showRecommended ? &quot;All Products&quot; : &quot;Recommended"}
    </Button>
  </div>
);

import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { useAuth } from '@/context/auth/AuthProvider';
import { toast } from '@/hooks/use-toast';

// Product card
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing; onViewDetails: () => void; onAddToCart: () => void; }) => {
  const { formatPrice } = useCurrency();
  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <div className="flex items-center gap-2 mt-2&quot;>
            <Badge variant=&quot;secondary" className="text-xs&quot;>{product.brand}</Badge>
            {product.aiScore && product.aiScore > 80 && (
              <Badge variant=&quot;default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600">
                AI {product.aiScore}
              </Badge>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-blue-600&quot;>{formatPrice(product.price ?? 0)}</div>
          <Badge variant={product.availability === &quot;Available&quot; ? &quot;default&quot; : &quot;outline"} className="text-xs">
            {product.availability}
          </Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{product.rating?.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between gap-2&quot;>
        <Button
          size=&quot;icon&quot;
          variant=&quot;outline&quot;
          onClick={onAddToCart}
          aria-label=&quot;Add to cart&quot;
          data-testid=&quot;add-to-cart-listing-button"
        >
          <ShoppingCart className="h-4 w-4&quot; />
        </Button>
        <Button size=&quot;sm&quot; variant=&quot;outline" className="flex-1" onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
  );
};

// Loading grid
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Main component
function MarketplacePageContent() {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useAuth();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);

  const fetchProducts = useCallback(async (page: number, limit: number) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS];

      // Apply category filtering
      let processedDataset = fullDataset;
      if (filterCategory) {
        processedDataset = processedDataset.filter(p => p.category === filterCategory);
      }

      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = processedDataset.filter(p => (p.rating || 0) >= 4.5 || (p.aiScore || 0) >= 85);
      }

      // Sort the processed dataset
      processedDataset.sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0);
          case 'price-high':
            return (b.price || 0) - (a.price || 0);
          case 'rating':
            return (b.rating || 0) - (a.rating || 0);
          case 'popular':
            return (b.reviewCount || 0) - (a.reviewCount || 0);
          case 'ai-score':
            return (b.aiScore || 0) - (a.aiScore || 0);
          default: // 'newest'
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        }
      });

      // Slice for pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const items = processedDataset.slice(startIndex, endIndex);

      return {
        items,
        hasMore: endIndex < processedDataset.length,
        total: processedDataset.length
      };
    } catch (error) {
      logErrorToProduction('Error in fetchProducts:', { data: error });
      throw new Error('Failed to load marketplace data. Please try again.');
    }
  }, [sortBy, filterCategory, showRecommended]);

  const {
    items: products,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop,
    loadMore
  } = useInfiniteScrollPagination(fetchProducts, 12);

  // Refresh when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refresh();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [sortBy, filterCategory, showRecommended, refresh]);

  const marketStats = useMemo(() => {
    if (products.length === 0) return null;
    return {
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,
      totalProducts: products.length,
      availableCount: products.filter(p => p.availability === &quot;Available&quot;).length
    };
  }, [products]);

  const categories = useMemo(() => {
    return [&quot;AI & Machine Learning&quot;, &quot;Cloud Services&quot;, &quot;Software Development&quot;, &quot;Professional Services&quot;, &quot;Hardware & Infrastructure&quot;];
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state
  if (loading && products.length === 0) {
    return (
      <>
        <NextSeo
          title=&quot;Marketplace - Zion Tech Marketplace Solutions & Services&quot;
          description=&quot;Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('marketplace.hero_title')}
          </h1>
          <p className="text-muted-foreground text-lg&quot;>{t('marketplace.hero_subtitle')}</p>
        </motion.div>
        <MarketplaceLoadingGrid />
      </div>
      </>
    );
  }

  // Error state
  if (error && products.length === 0) {
    return (
      <>
        <NextSeo
          title=&quot;Marketplace - Zion Tech Marketplace Solutions & Services&quot;
          description=&quot;Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load marketplace</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
          <div className="flex gap-2 justify-center&quot;>
            <Button onClick={refresh} variant=&quot;outline">
              <RefreshCw className="h-4 w-4 mr-2&quot; />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <NextSeo
        title=&quot;Marketplace - Zion Tech Marketplace Solutions & Services&quot;
        description=&quot;Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
        openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
      />
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('marketplace.hero_title')}
        </h1>
        <p className="text-muted-foreground text-lg">{t('marketplace.hero_subtitle')}</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <MarketplaceInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <MarketplaceFilterControls
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

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode=&quot;popLayout">
          {products.map((item, index) => (
            <motion.div
              key={item.id} 
              ref={index === products.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} 
              whileHover={{ scale: 1.02 }}
            >
              <MarketplaceCard
                product={item}
                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item));
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router.push(`/marketplace/listing/${item.id}`);
                }}
                onAddToCart={() => {
                  dispatch(addItem({ id: item.id, title: item.title, price: item.price ?? 0 }));
                  toast({
                    title: 'Added to cart',
                    description: `${item.title} has been added to your cart`,
                    action: {
                      label: 'View Cart',
                      onClick: () => router.push('/cart')}});
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && products.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MarketplaceLoadingGrid count={4} />
        </motion.div>
      )}

      {hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6&quot; />
          ) : (
            <Button onClick={loadMore} variant=&quot;outline&quot; size=&quot;lg">
              Load More Products
            </Button>
          )}
          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {products.length} of {total} items
            </p>
          )}
        </div>
      )}

      {!hasMore && products.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>
          <div className="text-sm text-muted-foreground">Showing {products.length} marketplace items</div>
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
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

// Main export
export default function MarketplacePage() {
  return <MarketplacePageContent />;
}
