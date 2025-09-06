import ProductCard from '@/components/ProductCard';

import { use_router } from 'next / router';
import { useApiErrorHandling } from '@/hooks / useApiErrorHandling';
import ProductCard from '@/components / ProductCard';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { use_translation } from 'react - i18next';
import { motion, AnimatePresence } from 'framer-motion';
        {availabilityOptions.map(opt => (
          <option key={opt} value={opt as string}>{opt}</option>
        ))}
      </select>
    </div>



    <div className='flex items-center gap-2'>;
      <select

        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>
        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}

      </select>;
    </div>;

    <div className='flex items-center gap-2'>;

      <select
        value={filterLocation}
        onChange={e => setFilterLocation(e && e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >;
        <option value=''>All Locations</option>;
        {locations && locations.map(loc => (;
          <option key={loc} value={loc}>;
            {loc}
          </option>;
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
            </motion && motion.div>;
          ))}
        <motion.div
        </AnimatePresence>;
      </motion && motion.div>;

      {/* Loading More Indicator */}
            ))}
          </div>;
        </motion && motion.div>;
      )}
      {/* End of Results */}
          </div>;
          <div className="text-sm text-muted-foreground">;
            Showing {products.length} AI-powered solutions;
          </div>;
      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button
            onClick={scrollToTop}
});
sort: sort_by ;
}';
//Use static data that's already of type ProductListing[] let items: ProductListing[] = [...MARKETPLACE LISTINGS];
case 'newest': ;
}else {handleApiError (err), //This might show a toast or log to Sentry ;
}, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);
//useInfiniteScrollPagination hook ;
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace && marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace && marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace && marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
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
}'";
  );
import React from "react";
import Head from "next/head";
import Link from "next/link";
    <>;
      <Head>;
        <title > Marketplace - Zion Tech Group</title>;
        <meta name="description" content="Professional Marketplace services"  />;
      </Head>;
      <div className="min - h-screen bg - gray - 50">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 12">;
          <div className="text - center">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 8">;
              Marketplace;
            </h1>;
            <p className="text - xl text - gray - 600 mb - 12">;
              Professional Marketplace services and solutions;
            </p>;
            <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;
              <div className="bg - white p - 6 rounded - lg shadow - md">;
                <h2 className="text - 2xl font - semibold mb - 4">Our Services</h2>;
                <ul className="text - gray - 600 space - y-2">;
                  <li> Professional Solutions</li>;
                  <li> Expert Implementation</li>;
                  <li> 24 / 7 Support</li>;
                  <li> Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg - white p - 6 rounded - lg shadow - md">;
                <h2 className="text - 2xl font - semibold mb - 4">Why Choose Us</h2>;
                <ul className="text - gray - 600 space - y-2">;
                  <li> Industry Expertise</li>;
                  <li> Proven Results</li>;
                  <li> Scalable Solutions</li>;
                  <li> Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link href="/pricing/" className="bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover:bg - blue - 700 transition - colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg - gray - 600 text - white px - 6 py - 3 rounded - lg hover:bg - gray - 700 transition - colors">;
                Contact Us;
              </Link>;
            </div>;
;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
          >;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion.button>;
        )}
      </AnimatePresence>;
    </div>;
  );
}
