import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
export function MarketplacePage() {};
  return null;
}
    { id: 'all', name: 'All Products', icon: Globe },;
    { id: 'ai', name: 'AI Solutions', icon: Brain },;
    { id: 'security', name: 'Security', icon: Shield },;
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },;
    { id: 'data', name: 'Data Analytics', icon: Database },;
    { id: 'development', name: 'Development Tools', icon: Code },;
    { id: 'automation', name: 'Automation', icon: Settings },;
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ];

  const marketplaceProducts = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];
;
  const filteredProducts = marketplaceProducts.filter(product => {};
});
;
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-16">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Technology Marketplace;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Discover, purchase, and deploy cutting-edge technology solutions from our curated marketplace. ;
              All products are enterprise-ready and backed by our support team.;
            </p>;

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
            </div>;




          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={product.id} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                {/* Product Image/Icon */}
                <div className="relative p-6 bg-gradient-to-br from-zion-blue-dark to-zion-slate-darker">;
                  <div className="text-6xl text-center mb-4">{product.image}</div>;

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">;
                    {};
                    )}
                    {};
                    )}
                  </div>;



                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">;
                    {product.title}
                  </h3>;

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">;
                    {product.description}
                  </p>;


import { NextSeo } from '@/components/NextSeo';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts';
import { useCurrency } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';


// Market insights component
const MarketplaceInsights = ({ stats }: { stats: any }) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
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
);

// Filter controls
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
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
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{product.brand}</Badge>
            {product.aiScore && product.aiScore > 80 && (
              <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600">
                AI {product.aiScore}
              </Badge>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-blue-600">{formatPrice(product.price ?? 0)}</div>
          <Badge variant={product.availability === "Available" ? "default" : "outline"} className="text-xs">
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
      <div className="flex items-center justify-between gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={onAddToCart}
          aria-label="Add to cart"
          data-testid="add-to-cart-listing-button"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
  );
};

// Loading grid
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      availableCount: products.filter(p => p.availability === "Available").length
    };
  }, [products]);

  const categories = useMemo(() => {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"];
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
    );
  }

  // Error state
  if (error && products.length === 0) {
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load marketplace</h2>
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
      </>
    );
  }

  return (
    <>
      <NextSeo
        title="Marketplace - Zion Tech Marketplace Solutions & Services"
        description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
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

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
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
                      onClick: () => router.push('/cart'),
                    },
                  });
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
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Ready</h3>;
              <p className="text-zion-slate-light">;
                All products are tested, secure, and ready for enterprise deployment with full compliance support.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Award className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>;
              <p className="text-zion-slate-light">;
                Every product is vetted by our technical team and comes with a satisfaction guarantee.;
              </p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Users className="w-8 h-8 text-zion-cyan" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>;
              <p className="text-zion-slate-light">;
                Get dedicated support from our technical experts to help you implement and optimize solutions.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Can't Find What You're Looking For?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Our team can help you find the perfect solution or create a custom solution tailored to your needs.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Contact Our Experts;
            </Link>;
            <div>Broken JSX</div>
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Request Custom Solution;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}

export default MarketplacePage;