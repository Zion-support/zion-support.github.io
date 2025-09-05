<<<<<<< HEAD
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { useTranslation } from 'react-i18next',
import { motion, AnimatePresence } from 'framer-motion',
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react'
import { NextSeo } from '@/components/NextSeo',
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',
import { ProductListing } from '@/types/listings',
import { SkeletonCard } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { Card, CardContent, CardHeader } from '@/components/ui/card',
import Spinner from '@/components/ui/spinner',
import { MARKETPLACE_LISTINGS } from '@/data/listingData',
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts',
import { useCurrency } from '@/hooks/useCurrency',
import {logErrorToProduction} from '@/utils/productionLogger',
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
=======
import Spinner from '@/components/ui/spinner';


// Market insights component
const _MarketplaceInsights = (_{_stats}: {_stats: unknown}) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${_Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{_stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{_stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{_stats.availableCount}</div>
          <div className="text-sm text-muted-foreground">Available</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </CardContent>
  </Card>
),

// Filter controls
<<<<<<< HEAD
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: any) => (
  <div className=&quot;flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative&quot;>
    {loading && <Spinner className=&quot;absolute right-4 top-4 h-4 w-4 text-primary&quot; />}
    <div className=&quot;flex items-center gap-2&quot;>
      <Filter className=&quot;h-4 w-4 text-muted-foreground&quot; />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className=&quot;bg-background border border-border px-3 py-2 rounded&quot;>
=======
const _MarketplaceFilterControls = (_{_sortBy, _setSortBy, _filterCategory, _setFilterCategory, _categories, _showRecommended, _setShowRecommended, _loading}: unknown) => (_<div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
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
        <option value=&quot;popular&quot;>Most Popular</option>
        <option value=&quot;ai-score&quot;>AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Sparkles className="h-4 w-4 mr-1&quot; />
      {showRecommended ? &quot;All Products&quot; : &quot;Recommended"}
    </Button>
  </div>
),
=======
      <select value={_sortBy} onChange={_(_e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={_showRecommended ? "default" : "outline"} size="sm" onClick={_() => setShowRecommended(!showRecommended)}>
      <Sparkles className="h-4 w-4 mr-1" />
      {_showRecommended ? "All Products" : "Recommended"}
    </Button>
  </div>
);

import type {_AppDispatch} from '@/store';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

import { useDispatch } from 'react-redux',
import type { AppDispatch } from '@/store',
import { addItem } from '@/store/cartSlice',
import { useAuth } from '@/context/auth/AuthProvider',
import { toast } from '@/hooks/use-toast',
// Product card
<<<<<<< HEAD
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing, onViewDetails: () => void, onAddToCart: () => void }) => {
  const { formatPrice } = useCurrency(),
=======
const _MarketplaceCard = (_{_product, _onViewDetails, _onAddToCart}: {_product: ProductListing; onViewDetails: () => void; onAddToCart: () => void;}) => {_const { formatPrice} = useCurrency();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
<<<<<<< HEAD
          <h3 className="font-semibold text-lg truncate">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <div className="flex items-center gap-2 mt-2&quot;>
            <Badge variant=&quot;secondary" className="text-xs&quot;>{product.brand}</Badge>
            {product.aiScore && product.aiScore > 80 && (
              <Badge variant=&quot;default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600">
=======
          <h3 className="font-semibold text-lg truncate">{_product.title}</h3>
          <p className="text-sm text-muted-foreground">{_product.category}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{_product.brand}</Badge>
            {_product.aiScore && product.aiScore > 80 && (
              <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                AI {product.aiScore}
              </Badge>
            )}
          </div>
        </div>
        <div className="text-right">
<<<<<<< HEAD
          <div className="text-xl font-bold text-blue-600&quot;>{formatPrice(product.price ?? 0)}</div>
          <Badge variant={product.availability === &quot;Available&quot; ? &quot;default&quot; : &quot;outline"} className="text-xs">
            {product.availability}
=======
          <div className="text-xl font-bold text-blue-600">{_formatPrice(product.price ?? 0)}</div>
          <Badge variant={_product.availability === "Available" ? "default" : "outline"} className="text-xs">
            {_product.availability}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{_product.rating?.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({_product.reviewCount} reviews)</span>
        </div>
      </div>
<<<<<<< HEAD
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between gap-2&quot;>
        <Button
          size=&quot;icon&quot;
          variant=&quot;outline&quot;
          onClick={onAddToCart}
          aria-label=&quot;Add to cart&quot;
          data-testid=&quot;add-to-cart-listing-button"
=======
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{_product.description}</p>
      <div className="flex items-center justify-between gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={_onAddToCart}
          aria-label="Add to cart"
          data-testid="add-to-cart-listing-button"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <ShoppingCart className="h-4 w-4&quot; />
        </Button>
<<<<<<< HEAD
        <Button size=&quot;sm&quot; variant=&quot;outline" className="flex-1" onClick={onViewDetails}>
=======
        <Button size="sm" variant="outline" className="flex-1" onClick={_onViewDetails}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
  )
},

// Loading grid
<<<<<<< HEAD
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
=======
const _MarketplaceLoadingGrid = (_{_count = 8}: {_count?: number}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {_Array.from({ length: count}).map(_(_, _i) => <SkeletonCard key={_i} />)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  </div>
),

// Main component
<<<<<<< HEAD
function MarketplacePageContent() {
  const router = useRouter(),
  const { t } = useTranslation(),
  const dispatch = useDispatch<AppDispatch>(),
  const { isAuthenticated } = useAuth(),
  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),

  const fetchProducts = useCallback(async (page: number, limit: number) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300)),

    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],

      // Apply category filtering
      let processedDataset = fullDataset,
      if (filterCategory) {
        processedDataset = processedDataset.filter(p => p.category === filterCategory)
      }

      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = processedDataset.filter(p => (p.rating || 0) >= 4.5 || (p.aiScore || 0) >= 85)
      }
=======
function MarketplacePageContent() {_const _router = useRouter();
  const { t} = useTranslation();
  const _dispatch = useDispatch<AppDispatch>();
  const {_isAuthenticated} = useAuth();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);

  const _fetchProducts = useCallback(_async (page: number, _limit: number) => {_// Simulate API delay
    await new Promise(resolve => setTimeout(resolve, _300));

    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, _...MARKETPLACE_LISTINGS];

      // Apply category filtering
      let _processedDataset = fullDataset;
      if (filterCategory) {
        processedDataset = processedDataset.filter(p => p.category === filterCategory);}

      // Apply recommended filtering
      if (showRecommended) {_processedDataset = processedDataset.filter(p => (p.rating || 0) >= 4.5 || (p.aiScore || 0) >= 85);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Sort the processed dataset
      processedDataset.sort(_(a, _b) => {_switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0),
          case 'price-high':
            return (b.price || 0) - (a.price || 0),
          case 'rating':
            return (b.rating || 0) - (a.rating || 0),
          case 'popular':
            return (b.reviewCount || 0) - (a.reviewCount || 0),
          case 'ai-score':
            return (b.aiScore || 0) - (a.aiScore || 0),
          default: // 'newest'
<<<<<<< HEAD
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        }
      }),

      // Slice for pagination
      const startIndex = (page - 1) * limit,
      const endIndex = startIndex + limit,
      const items = processedDataset.slice(startIndex, endIndex),

      return {
        items,
        hasMore: endIndex < processedDataset.length,
        total: processedDataset.length
      }
    } catch (error) {
      logErrorToProduction('Error in fetchProducts:', { data: error }),
      throw new Error('Failed to load marketplace data. Please try again.')
=======
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();}
      });

      // Slice for pagination
      const _startIndex = (page - 1) * limit;
      const _endIndex = startIndex + limit;
      const _items = processedDataset.slice(startIndex, endIndex);

      return {_items, _hasMore: endIndex < processedDataset.length, _total: processedDataset.length};
    } catch (error) {_logErrorToProduction('Error in fetchProducts:', _{ data: error});
      throw new Error('Failed to load marketplace data. Please try again.');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [sortBy, filterCategory, showRecommended]),

<<<<<<< HEAD
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
  } = useInfiniteScrollPagination(fetchProducts, 12),

  // Refresh when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refresh()
    }, 100),
=======
  const {_items: products, _loading, _error, _hasMore, _total, _isFetching, _lastElementRef, _refresh, _scrollToTop, _loadMore} = useInfiniteScrollPagination(fetchProducts, 12);

  // Refresh when filters change
  useEffect__(() => {_const _timeoutId = setTimeout__(() => {
      refresh();}, 100);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh]),

<<<<<<< HEAD
  const marketStats = useMemo(() => {
    if (products.length === 0) return null,
    return {
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,
      totalProducts: products.length,
<<<<<<< HEAD
      availableCount: products.filter(p => p.availability === "Available").length
    }
  }, [products]),

  const categories = useMemo(() => {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"]
  }, []),
=======
      availableCount: products.filter(p => p.availability === &quot;Available&quot;).length
    };
  }, [products]);

  const categories = useMemo(() => {
    return [&quot;AI & Machine Learning&quot;, &quot;Cloud Services&quot;, &quot;Software Development&quot;, &quot;Professional Services&quot;, &quot;Hardware & Infrastructure&quot;];
  }, []);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
=======
  const _marketStats = useMemo__(() => {_if (products.length === 0) return null;
    return {
      averagePrice: products.reduce(_(sum, _p) => sum + (p.price || 0), _0) / products.length, _averageRating: products.reduce(_(sum, _p) => sum + (p.rating || 0), _0) / products.length, _totalProducts: products.length, _availableCount: products.filter(p => p.availability === "Available").length};
  }, [products]);

  const _categories = useMemo__(() => {_return ["AI & Machine Learning", _"Cloud Services", _"Software Development", _"Professional Services", _"Hardware & Infrastructure"];}, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect__(() => {_const _handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);}, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Loading state
  if (loading && products.length === 0) {_return (
      <>
        <NextSeo
<<<<<<< HEAD
          title=&quot;Marketplace - Zion Tech Marketplace Solutions & Services&quot;
          description=&quot;Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
=======
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, _service packages, _and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png'}] }}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      <div className="container py-8">
        <motion.div initial={_{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {_t('marketplace.hero_title')}
          </h1>
<<<<<<< HEAD
          <p className="text-muted-foreground text-lg&quot;>{t('marketplace.hero_subtitle')}</p>
=======
          <p className="text-muted-foreground text-lg">{_t('marketplace.hero_subtitle')}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </motion.div>
        <MarketplaceLoadingGrid />
      </div>
      </>
    )
  }

  // Error state
  if (error && products.length === 0) {_return (_<>
        <NextSeo
<<<<<<< HEAD
          title=&quot;Marketplace - Zion Tech Marketplace Solutions & Services&quot;
          description=&quot;Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
=======
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, _service packages, _and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png'}] }}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      <div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load marketplace</h2>
<<<<<<< HEAD
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
          <div className="flex gap-2 justify-center&quot;>
            <Button onClick={refresh} variant=&quot;outline">
              <RefreshCw className="h-4 w-4 mr-2&quot; />
=======
          <p className="text-muted-foreground max-w-md mx-auto">{_error}</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={_refresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Try Again
            </Button>
            <Button onClick={_() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
      <NextSeo
<<<<<<< HEAD
        title=&quot;Marketplace - Zion Tech Marketplace Solutions & Services&quot;
        description=&quot;Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
        openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
=======
        title="Marketplace - Zion Tech Marketplace Solutions & Services"
        description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
        openGraph={_{ images: [{ url: 'https://app.ziontechgroup.com/og.png'}] }}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={_{ opacity: 0, _y: -20}} animate={_{ opacity: 1, _y: 0}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {_t('marketplace.hero_title')}
        </h1>
        <p className="text-muted-foreground text-lg">{_t('marketplace.hero_subtitle')}</p>
      </motion.div>

      {_marketStats && (
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.2}}>
          <MarketplaceInsights stats={_marketStats} />
        </motion.div>
      )}

      <motion.div initial={_{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.3}}>
        <MarketplaceFilterControls
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
          {products.map((item, index) => (
=======
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={_{ opacity: 0}} animate={_{ opacity: 1}} transition={_{ delay: 0.4}}>
        <AnimatePresence mode="popLayout">
          {_products.map(_(item, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              key={item.id} 
              ref={_index === products.length - 1 ? lastElementRef : null}
              initial={_{ opacity: 0, _scale: 0.9}} 
              animate={_{ opacity: 1, _scale: 1}} 
              exit={_{ opacity: 0, _scale: 0.9}}
              transition={_{ delay: Math.min(index * 0.03, _0.5)}} 
              whileHover={_{ scale: 1.02}}
            >
              <MarketplaceCard
                product={_item}
                onViewDetails={_() => {
                  if (typeof window !== 'undefined') {
                    try {
<<<<<<< HEAD
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router.push(`/marketplace/listing/${item.id}`)
                }}
                onAddToCart={() => {
                  dispatch(addItem({ id: item.id, title: item.title, price: item.price ?? 0 })),
                  toast({
                    title: 'Added to cart',
                    description: `${item.title} has been added to your cart`,
                    action: {
                      label: 'View Cart',
                      onClick: () => router.push('/cart')}})
=======
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item));
                    } catch {_// ignore storage errors}
                  }
                  router.push(`/marketplace/listing/${_item.id}`);
                }}
                onAddToCart={_() => {
                  dispatch(addItem({ id: item.id, _title: item.title, _price: item.price ?? 0}));
                  toast(_{_title: 'Added to cart', _description: `${item.title} has been added to your cart`, _action: {_label: 'View Cart', _onClick: () => router.push('/cart')}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {_(isFetching || loading) && products.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <MarketplaceLoadingGrid count={_4} />
        </motion.div>
      )}

      {_hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6&quot; />
          ) : (
            <Button onClick={loadMore} variant=&quot;outline&quot; size=&quot;lg">
              Load More Products
            </Button>
          )}
          {_total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {products.length} of {_total} items
            </p>
          )}
        </div>
      )}

      {_!hasMore && products.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>
          <div className="text-sm text-muted-foreground">Showing {_products.length} marketplace items</div>
        </motion.div>
      )}

      <AnimatePresence>
        {_showScrollTop && (
          <motion.button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={_{ opacity: 0, _scale: 0}} 
            animate={_{ opacity: 1, _scale: 1}} 
            exit={_{ opacity: 0, _scale: 0}}
            whileHover={_{ scale: 1.1}} 
            whileTap={_{ scale: 0.9}}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  )
}

// Main export
<<<<<<< HEAD
export default function MarketplacePage() {
  return <MarketplacePageContent />
}
=======
export default function MarketplacePage() {_return <MarketplacePageContent />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
