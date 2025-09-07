import { useRouter } from 'next/router',;
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling',;
import ProductCard from '@/components/ProductCard',;
import { useState, useEffect, useCallback, useMemo, useRef } from 'react',;
import { useTranslation } from 'react-i18next',;
import { motion, AnimatePresence } from 'framer-motion',;
import { AuthModal } from '@/components/auth/AuthModal',;
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react';
import { SkeletonCard } from '@/components/ui/skeleton',;
import { ErrorState } from '@/components/jobs/applications/ErrorState',;
import { ProductsEmptyState } from '@/components/marketplace/EmptyState',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { Card, CardContent } from '@/components/ui/card',;
import Spinner from '@/components/ui/spinner',;
import { ProductListing } from '@/types/listings',;
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',;
import { useToast } from '@/hooks/use-toast',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { MARKETPLACE_LISTINGS } from '@/data/listingData',;
import { MAX_PRICE, MIN_PRICE } from '@/data/marketplaceData',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
/**;
 * Marketplace component props;
 */;
export interface MarketplaceProps {;
  // All props removed - component now fetches data independently;
}

// Market insights component
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice)}</div>
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
          <div className="text-2xl font-bold text-yellow-400">{stats.categoriesCount}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
      </div>
    </CardContent>
  </Card>
),

  loading
}) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <SortAsc className="h-4 w-4 text-muted-foreground" />;
      <select;
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">$</span>
      <input
        type="number"
        value={priceRange[0]}
        min={MIN_PRICE}
        max={priceRange[1]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
      <span>-</span>
      <input
        type="number"
        value={priceRange[1]}
        min={priceRange[0]}
        max={MAX_PRICE}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">AI ≥</span>
      <input
        type="number"
        value={minAiScore}
        min={0}
        max={100}
        onChange={(e) => setMinAiScore(Number(e.target.value))}
        className="w-16 bg-background border border-border px-2 py-1 rounded";
      />;
    </div>;
    <div className="flex items-center gap-2">;
      <span className="text-sm">Rating ≥</span>;
      <select;
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="bg-background border border-border px-2 py-1 rounded";
      >;
        <option value={0}>Any</option>;
        <option value={5}>5</option>;
        <option value={4}>4</option>;
        <option value={3}>3</option>;
        <option value={2}>2</option>;
        <option value={1}>1</option>;
      </select>;
    </div>;

        {availabilityOptions.map(opt => (
          <option key={opt} value={opt as string}>{opt}</option>
        ))}
      </select>
    </div>

        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>

        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>

    <Button

                  } catch (error) {
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),
                    toast({
                      title: "Navigation Error",
                      description: "Could not navigate to checkout. Please try again.",
                      variant: "destructive"}),
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.

                  AI {product.aiScore}
                </Badge>;
              )}
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;

              )}
            </motion.div>;
          ))}

        </AnimatePresence>;
      </motion.div>;
      {/* Loading More Indicator */}
      {(isFetching || loading) && (;
        <motion.div;
          className="mt-8";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">;
            {Array.from({ length: 4 }).map((_, i) => (;
              <SkeletonCard key={`loading-${i}`} />;
            ))}
          </div>;
        </motion.div>;
      )}
;
      {/* End of Results */}

      {!hasMore && products.length > 0 && (;
        <motion.div;
          className="text-center mt-12 py-8 border-t";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="text-muted-foreground text-lg mb-2">;
            🎉 You've explored all available products!;
          </div>;
          <div className="text-sm text-muted-foreground">;
            Showing {products.length} AI-powered solutions;
          </div>;
        </motion.div>;

      )}
;
      {/* Scroll to Top Button */}
      <AnimatePresence>;
        {showScrollTop && (;

          >;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion.button>;
        )}
      </AnimatePresence>;
    </div>;
  );
}
;