<<<<<<< HEAD
=======
<<<<<<<< HEAD:temp_broken_pages_all/Marketplace.tsx
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
import { useRouter } from "next/router";
import { useApiErrorHandling } from "@/hooks/useApiErrorHandling";
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/ui/spinner';
import { ProductListing } from "@/types/listings";
import { useInfiniteScrollPagination } from "@/hooks/useInfiniteScroll";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth/AuthProvider";
import { MARKETPLACE_LISTINGS } from "@/data/listingData";
import { MAX_PRICE, MIN_PRICE } from "@/data/marketplaceData";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
/**
 * Marketplace component props
 */
export interface MarketplaceProps {
  
  // All props removed - component now fetches data independently
}
// Market insights component}
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
                    // though ProductCard will reset its state in .finally() regardless.
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false ProductCard handles its own disabled state based on auth
              />
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>
                  <Sparkles className='h-3 w-3 mr-1' />
                  AI {product.aiScore}
                </Badge>
              )}
              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Loading More Indicator */}
      {(isFetching |loading) && (
        <motion.div className='mt-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_ i) => (              <SkeletonCard key={`loading-${i}`} />
            ))}
          </div>
        </motion.div>
      )}
      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <motion.div className='text-center mt-12 py-8 border-t'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='text-muted-foreground text-lg mb-2'>
            🎉 You've explored all available products!
          </div>
          <div className='text-sm text-muted-foreground'>
            Showing {products.length} AI-powered solutions
          </div>
        </motion.div>
      )}
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop}
            className='fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50'            initial={{ opacity: 0 scale: 0 }}
            animate={{ opacity: 1 scale: 1 }}
            exit={{ opacity: 0 scale: 0 }}
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
}, [isAuthenticated user router toast]);
//Fetch function for infinite scroll with AI product generation try {//Use static marketplace listings data for now (compatible with ProductListing type) const params = {;
  page  limit, ... (filterCategory && {;
  category: filterCategory ;
});
sort: sortBy ;
};';
//Use static data that's already of type ProductListing[] let items: ProductListing[] = [...MARKETPLACE LISTINGS];
//Apply category filter from params return (price >= priceRange[0] && price <= priceRange[1] && ai >= minAiScore && rating >= minRating && (!filterLocation |location.includes (filterLocation.toLowerCase () ) ) && (!filterAvailability |availability === filterAvailability.toLowerCase () ) items.sort ( (a b) => {switch (sortBy) {';
  case 'price-low': return (a.price |0) - (b.price |0);';
case 'price-high': return (b.price |0) - (a.price |0);';
case 'rating': return (b.rating |0) - (a.rating |0);';
case 'popular': return (b.reviewCount |0) - (a.reviewCount |0);';
case 'ai-score': return (b.aiScore |0) - (a.aiScore |0);';
case 'newest': ;
}else {handleApiError (err), //This might show a toast or log to Sentry ;
}, [filterCategory sortBy showRecommended priceRange minAiScore minRating filterAvailability filterLocation handleApiError toast]);
//useInfiniteScrollPagination hook ;
}, [products loading scrollToTop toast]), //Depends on products and loading state //Calculate market stats <motion.div initial= {{;
  opacity: 0 y: 20 ;
}animate= {{;
  opacity: 1 y: 0 ;
}";
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ";
}</p> </motion.div> <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {Array.from ({;
length: 12 ;
}) .map ( (, i) => (<SkeletonCard key= {i ;
}/>) ) ;
}</div> </div>) ;
}//Error state with retry if (error && products.length === 0) {";
  return (<div className="container py-8"> <div className="text-center space-y-4"> <ErrorState error= {error ;
}/> <Button onClick={refresh ;
}> Try Again </Button> </div> </div>) ;
}//Empty state (only show when not loading and no products) if (!loading && products.length === 0 && !error) {";
  return (<div className="container py-8"> <motion.div initial= {{;
  opacity: 0 y: 20 ;
}animate= {{;
  opacity: 1 y: 0 ;
}";
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> <ProductsEmptyState /> </div>) ";
}//Main marketplace render return (<div className="container py-8"> <AuthModal isOpen= {isAuthModalOpen ;
}onClose= {() => setIsAuthModalOpen (false) ;
}returnUrl= {router.asPath ;
}//Pass current path for better UX on return /> {/* Header */ ";
}<motion.div className="text-center mb-8"initial= {{;
  opacity: 0 y: -20 ;
}animate= {{;
  opacity: 1 y: 0 ;
}";
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> {/* Market Insights */ ;
}{marketStats && (<motion.div initial= {;
  {;
  opacity: 0 y: 20 ;
}animate= {{;
  opacity: 1 y: 0 ;
}transition= {{;
  delay: 0.2 ;
}> <MarketInsights stats= {marketStats ;
}/> </motion.div>) ;
}{/* Filter Controls */ ;
}<motion.div initial= {{;
  opacity: 0 y: 20 ;
}animate= {{;
  opacity: 1 y: 0 ;
}transition= {{;
  delay: 0.3 ;
}> <FilterControls sortBy= {sortBy ;
}setSortBy= {setSortBy ;
}filterCategory= {filterCategory ;
}setFilterCategory= {setFilterCategory ;
}categories= {categories ;
}priceRange= {priceRange ;
}setPriceRange= {setPriceRange ;
}minAiScore= {minAiScore ;
}setMinAiScore= {setMinAiScore ;
}minRating= {minRating ;
}setMinRating= {setMinRating ;
}filterAvailability= {filterAvailability ;
}setFilterAvailability= {setFilterAvailability ;
}availabilityOptions= {availabilityOptions.filter (Boolean) as string[] ;
}filterLocation= {filterLocation ;
}setFilterLocation= {setFilterLocation ;
}locations= {locations ;
}showRecommended= {showRecommended ;
}setShowRecommended= {setShowRecommended ;
}loading= {isFetching ;
}/> </motion.div> {/* Product Grid */ ;
}<motion.div > <ProductCard product= {{';
  id: product.id name: product.title title: product.title description: product.description |'', price: product.price |0 currency: product.currency category: product.category tags: product.tags images: product.images rating: product.rating |0 reviewCount: product.reviewCount |0 created at: product.createdAt updated at: product.createdAt,  //Use createdAt for both stock: product.stock in stock: (product.stock |0) > 0 ;
}onBuy= {async () => {;
  if (!isAuthenticated) {;
  //though ProductCard will reset its state in .finally () regardless. throw error ;
}buyDisabled= {false ;
}//Still false ProductCard handles its own disabled state based on auth /> {/* AI Score Badge */ ;
}{";
  product.aiScore && product.aiScore > 90 && (<Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black"> <Sparkles className="h-3 w-3 mr-1"/> AI {product.aiScore ;
}</Badge>) ;
}{/* Featured Badge */ ;
}{";
  product.featured && (<Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10"> <Star className="h-3 w-3 mr-1"/> Featured </Badge>) ;
}</motion.div>) ) ;
}</AnimatePresence> </motion.div> {/* Loading More Indicator */ ;
}{";
  (isFetching |loading) && (<motion.div className="mt-8"initial= {{;
  opacity: 0 ;
}animate= {{;
  opacity: 1 ;
}";
}> <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {Array.from ({;
length: 4 ;
}) .map ( (, i) => (<SkeletonCard key= {`loading-$ {;
  i ;
}` ;
}/>) ) ;
}</div> </motion.div>) ;
}{/* End of Results */ ;
}{";
  !hasMore && products.length > 0 && (<motion.div className="text-center mt-12 py-8 border-t"initial= {{;
  opacity: 0 ;
}animate= {{;
  opacity: 1 ;
}'";
}> <div className="text-muted-foreground text-lg mb-2"> 🎉 You've explored all available products! </div> <div className="text-sm text-muted-foreground"> Showing {products.length ;
}AI-powered solutions </div> </motion.div>) ;
}{/* Scroll to Top Button */ ;
}<AnimatePresence> {showScrollTop && (<motion.button onClick={;
  scrollToTop ";
}className="fixed bottom-8 right-8 p-3 bg-primary hover: bg-primary/90 rounded-full shadow-lg z-50"initial= {{;
opacity: 0 scale: 0 ;
}animate= {{;
  opacity: 1 scale: 1 ;
}exit= {{;
  opacity: 0 scale: 0 ;
}whileHover= {{;
  scale: 1.1 ;
}whileTap= {{;
  scale: 0.9 ;
}";
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}'"
  )
import React from "react";
import Head from "next/head";
import Link from "next/link";
<<<<<<< HEAD
const Marketplace: any = () => {return (;
<>;
<Head>;
<title>Marketplace - Zion Tech Group</title>;
<meta name="description" content="Professional Marketplace services"  />;
</Head>;
<div className="min-h-screen bg-gray-50">;
<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
<div className="text-center">;
<h1 className="text-4xl font-bold text-gray-900 mb-8">;
Marketplace;
</h1>;
<p className="text-xl text-gray-600 mb-12">;
Professional Marketplace services and solutions;
</p>;
<div className="grid md:grid-cols-2 gap-8 mb-12">;
<div className="bg-white p-6 rounded-lg shadow-md">;
<h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
<ul className="text-gray-600 space-y-2">;
<li>• Professional Solutions</li>;
<li>• Expert Implementation</li>;
<li>• 24/7 Support</li>;
<li>• Custom Development</li>;
</ul>;
</div>;
<div className="bg-white p-6 rounded-lg shadow-md">;
<h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
<ul className="text-gray-600 space-y-2">;
<li>• Industry Expertise</li>;
<li>• Proven Results</li>;
<li>• Scalable Solutions</li>;
<li>• Competitive Pricing</li>;
</ul>;
</div>;
<div className="flex flex-col sm:flex-row gap-4 justify-center">;
<Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
View Pricing;
</Link>;
<Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
Contact Us;
</Link>;
</div>;
</>;
<<<<<<< HEAD
=======
const Marketplace = () => {return (;
    <>;
      <Head>;
        <title>Marketplace - Zion Tech Group</title>;
        <meta name="description" content="Professional Marketplace services"  />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              Marketplace;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Marketplace services and solutions;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Marketplace() {
  return (
    <>
      <SEO
        title="Marketplace | Zion AI - AI Solutions Marketplace"
        description="Browse and discover AI solutions, tools, and services from leading providers in our marketplace."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <GradientHeading
              level="h1"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              AI Marketplace
            </GradientHeading>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover and access cutting-edge AI solutions, tools, and services from leading providers.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300">
                Our AI marketplace is currently under development. Stay tuned for exciting AI solutions and tools!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
  );
import React from 'react';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Marketplace</h1>
        <p className="text-lg text-gray-600">Browse our marketplace...</p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
);
}}}}}}}}}}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
=======
<<<<<<<< HEAD:temp_broken_pages_all/Marketplace.tsx
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
