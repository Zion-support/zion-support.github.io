import { useRouter  } from 'next/router';
import { useApiErrorHandling  } from '@/hooks/useApiErrorHandling';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect, useCallback, useMemo, useRef  } from 'react';
import { useTranslation  } from 'react-i18next';
import { motion, AnimatePresence  } from 'framer-motion';
import { AuthModal  } from '@/components/auth/AuthModal';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react'
import { SkeletonCard  } from '@/components/ui/skeleton';
import { ErrorState  } from '@/components/jobs/applications/ErrorState';
import { ProductsEmptyState  } from '@/components/marketplace/EmptyState';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { Card, CardContent  } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { ProductListing  } from '@/types/listings';
import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { useToast  } from '@/hooks/use-toast';
import { useAuth  } from '@/context/auth/AuthProvider';
import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { MAX_PRICE, MIN_PRICE  } from '@/data/marketplaceData';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
/**
 * Marketplace component props
 */
export interface MarketplaceProps {
  // All props removed - component now fetches data independently
}

// Market insights component
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className;
                    // though ProductCard will reset its state in .finally() regardless.
                    throw error
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth
              />
              
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI {product.aiScore}
                </Badge>
              )}
              
              {/* Featured Badge */}
              {product.featured && (
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading More Indicator */}
      {(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={`loading-${i}`} />
            ))}
          </div>
        </motion.div>
      )}

      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available products!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {products.length} AI-powered solutions
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
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
  )
}
