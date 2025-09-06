import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
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
origin/cursor/automate-test-improve-and-merge-code-2533
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
// Market insights component
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className;
origin/cursor/automate-test-improve-and-merge-code-2533
                    // though ProductCard will reset its state in .finally() regardless.
                    throw error
                  try {;
                    await router.push(`/checkout/${product.id}`);
                  } catch (error) {;
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),;
                    toast({;
                      title: "Navigation Error",;
                      description: "Could not navigate to checkout. Please try again.",;
                      variant: "destructive"});
                    // Re-throw to allow ProductCard's catch to also run if needed;
                    // though ProductCard will reset its state in .finally() regardless.;
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth;
              />;
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (;
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">;
                  <Sparkles className="h-3 w-3 mr-1" />;
                  AI {product.aiScore}
                </Badge>
              )}
              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;




              )}
            </motion.div>
          ))}
        <motion.div
        </AnimatePresence>;
      </motion && motion.div>;

        </AnimatePresence>
      </motion.div>
      {/* Loading More Indicator */}



            ))}
          </div>;
        </motion && motion.div>;
      )}
      {/* End of Results */}
          </div>;
          <div className='text-sm text-muted-foreground'>;
            Showing {products && products.length} AI-powered solutions;
          </div>;
      )}
      {/* Scroll to Top Button */}

      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button
            onClick={scrollToTop}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className='h-5 w-5 text-primary-foreground' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}//Navigate to admin products page router.push ('/admin/products') ;
}, [isAuthenticated, user, router, toast]);
//Fetch function for infinite scroll with AI product generation try {//Use static marketplace listings data for now (compatible with ProductListing type) const params = {;
  page,  limit, ... (filterCategory && {;
  category: filterCategory ;
});
sort: sort_by ;
}';
//Use static data that's already of type ProductListing[] let items: ProductListing[] = [...MARKETPLACE LISTINGS];
case 'newest': ;
}else {handleApiError (err), //This might show a toast or log to Sentry ;
}, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);
//useInfiniteScrollPagination hook ;
  if (!isAuthenticated) {;
  //though ProductCard will reset its state in .finally () regardless. throw error ;
}buyDisabled= {false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {/* AI Score Badge */ ;
}{";
  i ;
}` ;
}/>) ) ;
}</div> </motion.div>) ;
}</AnimatePresence> </div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
