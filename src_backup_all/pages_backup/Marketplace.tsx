import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';





import ProductCard from '@/components/ProductCard';

import { use_router } from 'next / router';
import { useApiErrorHandling } from '@/hooks / useApiErrorHandling';
import ProductCard from '@/components / ProductCard';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { AuthModal } from '@/components / auth / AuthModal';

import {


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
        value={min_rating}
        on_change={e => setMinRating (Number (e.target.value))}
        className='bg - background border border - border px - 2 py - 1 rounded'      >;

        <option value={0}>Any</option>;
        <option value={5}>5</option>;
        <option value={4}>4</option>;
        <option value={3}>3</option>;
        <option value={2}>2</option>;
        <option value={1}>1</option>;
      </select>;
    </div>;

    <div className="flex items-center gap-2">;
      <select;
        value={filterAvailability}
        onChange={(e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">Any Availability</option>

        {availabilityOptions.map(opt => (
          <option key={opt} value={opt as string}>{opt}</option>
        ))}
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <select
        value={filterLocation}
        onChange={e => setFilterLocation(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value=''>All Locations</option>



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

      </select>;
    </div>;


    <Button



export default function Marketplace() {
                  AI {product.aiScore}
                </Badge>
              )}

                  stock: product.stock,

                  in_stock: (product.stock || 0) > 0
                }}
                onBuy={async () => {;
                  if (!isAuthenticated) {;
                    setIsAuthModalOpen(true),;
                    return, // Stop further execution;
                  }
                  try {
                    await router.push(`/checkout/${product.id}`)

                  } catch (error) {
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),
                    toast({
                      title: "Navigation Error",
                      description: "Could not navigate to checkout. Please try again.",
                      variant: "destructive"}),
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.

                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth
              />

              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>
                  <Sparkles className='h-3 w-3 mr-1' />
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
            </motion && motion.div>;
          ))}




        <motion.div
        </AnimatePresence>;
      </motion && motion.div>;

      {/* Loading More Indicator */}
      {(isFetching || loading) && (;
        <motion&& motion.div
          className='mt-8'
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (              <SkeletonCard key={`loading-${i}`} />
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
          </div>
        </motion.div>
      )}
      {/* End of Results */}

      {!hasMore && products.length > 0 && (
        <motion.div
          className='text-center mt-12 py-8 border-t'
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
      {/* Scroll to Top Button */}

      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button
            onClick={scrollToTop}

            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50";
            initial={{ opacity: 0, scale: 0 }}

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

//Apply category filter from params return (price >= priceRange[0] && price <= priceRange[1] && ai >= minAiScore && rating >= minRating && (!filterLocation || location && location.includes (filterLocation && filterLocation.toLowerCase () ) ) && (!filterAvailability || availability === filterAvailability && filterAvailability.toLowerCase () ) items && items.sort ( (a, b) => {;
  switch (sortBy) {';
  case 'price-low': return (a && a.price || 0) - (b && b.price || 0);';
case 'price-high': return (b && b.price || 0) - (a && a.price || 0);';
case 'rating': return (b && b.rating || 0) - (a && a.rating || 0);';
case 'popular': return (b && b.reviewCount || 0) - (a && a.reviewCount || 0);';
case 'ai-score': return (b && b.aiScore || 0) - (a && a.aiScore || 0);';

case 'newest': ;
}else {handleApiError (err), //This might show a toast or log to Sentry ;
}, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);
//useInfiniteScrollPagination hook ;


}, [products, loading, scrollToTop, toast]), //Depends on products and loading state //Calculate market stats <motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 
}"

}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace && marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';

  t ('marketplace && marketplace.hero subtitle') ";
}</p> </motion && motion.div> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {;
  Array && Array.from ({;
  length: 12 ;
}) .map ( (, i) => (<SkeletonCardkey= {
  i 
}/>) ) ;
}</div> </div>) ;
}//Error state with retry if (error && products && products.length === 0) {";
  return (<div className="container py-8"> <div className="text-center space-y-4"> <ErrorStateerror= {
  error 
}/> <ButtononClick={
  refresh 
}> Try Again </Button> </div> </div>) ;
}//Empty state (only show when not loading and no products) if (!loading && products && products.length === 0 && !error) {";
  return (<div className="container py-8"> <motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 
}"

}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace && marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';

  t ('marketplace && marketplace.hero subtitle') ;
}</p> </motion && motion.div> <ProductsEmptyState /> </div>) ";
}//Main marketplace render return (<div className="container py-8"> <AuthModalisOpen= {
  isAuthModalOpen 
}onClose= {
  () => setIsAuthModalOpen (false) ;
}returnUrl= {;
  router && router.asPath ;
}//Pass current path for better UX on return /> {;
  /* Header */ ";
}<motion&& motion.div className="text-center mb-8"initial= {
  {
  opacity: 0, y: -20 

}animate= {
  {
  opacity: 1, y: 0 
}"

}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace && marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';

  t ('marketplace && marketplace.hero subtitle') ;
}</p> </motion && motion.div> {;
  /* Market Insights */ ;
}{;
  marketStats && (<motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  delay: 0 && 0.2 

}> <MarketInsightsstats= {
  marketStats 
}/> </motion && motion.div>) ;
}{;
  /* Filter Controls */ ;
}<motion&& motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  delay: 0 && 0.3 

}> <FilterControlssortBy= {
  sortBy 
}setSortBy= {
  setSortBy 
}filterCategory= {
  filterCategory 
}setFilterCategory= {
  setFilterCategory 
}categories= {
  categories 
}priceRange= {
  priceRange 
}setPriceRange= {
  setPriceRange 
}minAiScore= {
  minAiScore 
}setMinAiScore= {
  setMinAiScore 
}minRating= {
  minRating 
}setMinRating= {
  setMinRating 
}filterAvailability= {
  filterAvailability 
}setFilterAvailability= {
  setFilterAvailability 
}availabilityOptions= {
  availabilityOptions && availabilityOptions.filter (Boolean) as string[] 
}filterLocation= {
  filterLocation 
}setFilterLocation= {
  setFilterLocation 
}locations= {
  locations 
}showRecommended= {
  showRecommended 
}setShowRecommended= {
  setShowRecommended 
}loading= {
  isFetching 
}/> </motion && motion.div> {;
  /* Product Grid */ ;
}<motion && motion.div > <ProductCardproduct= {
  {'
  id: product && product.id, name: product && product.title, title: product && product.title, description: product && product.description || '', price: product && product.price || 0, currency: product && product.currency, category: product && product.category, tags: product && product.tags, images: product && product.images, rating: product && product.rating || 0, reviewCount: product && product.reviewCount || 0, created at: product && product.createdAt, updated at: product && product.createdAt,  //Use createdAt for both stock: product && product.stock, in stock: (product && product.stock || 0)> 0 ;

}onBuy= {;
  async () => {;

  if (!isAuthenticated) {;
  //though ProductCard will reset its state in .finally () regardless. throw error ;
}buyDisabled= {false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {/* AI Score Badge */ ;
}{";

  product && product.aiScore && product && product.aiScore > 90 && (<Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black"> <Sparkles className="h-3 w-3 mr-1"/> AI {;
  product && product.aiScore ;

}</Badge>) ;
}{/* Featured Badge */ ;
}{";

//Apply category filter from params return (price >= price_range[0] && price <= price_range[1] && ai >= minAiScore && rating >= min_rating && (!filter_location || location.includes (filter_location.toLowerCase () ) ) && (!filter_availability || availability === filter_availability.toLowerCase () ) items.sort ( (a, b) => {
  switch (sort_by) {';
  case 'price - low': return (a.price || 0) - (b.price || 0);';
case 'price - high': return (b.price || 0) - (a.price || 0);';
case 'rating': return (b.rating || 0) - (a.rating || 0);';
case 'popular': return (b.review_count || 0) - (a.review_count || 0);';
case 'ai - score': return (b.ai_score || 0) - (a.ai_score || 0);';
case 'newest': ;
}else {
  handleApiError (err), //This might show a toast or log to Sentry ;
;
}, [filter_category, sort_by, show_recommended, price_range, minAiScore, min_rating, filter_availability, filter_location, handleApiError, toast]);
//useInfiniteScrollPagination hook ;
;
}, [products, loading, scrollToTop, toast]), //Depends on products and loading state //Calculate market stats <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
}";
}className="text - center mb - 8"> <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text - muted - foreground text - lg"> {';
  t ('marketplace.hero subtitle') ";
}</p> </motion.div> <div className="grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6"> {
  Array.from ({
  length: 12 ;
}) .map ( (, i) => (<SkeletonCard key= {
  i ;
}/>) ) ;
}</div> </div>) ;
}//Error state with retry // Check condition
if ( {") {
  $2
}
  return (<div className="container py - 8"> <div className="text - center space - y-4"> <ErrorState error= {
  error ;
}/> <Button on_click={
  refresh ;
}> Try Again </Button> </div> </div>) ;
}//Empty state (only show when not loading and no products) // Check condition
if ( {") {
  $2
}
  return (<div className="container py - 8"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
}";
}className="text - center mb - 8"> <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text - muted - foreground text - lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> <ProductsEmptyState /> </div>) ";
}//Main marketplace render return (<div className="container py - 8"> <AuthModal is_open= {
  isAuthModalOpen ;
}on_close= {
  () => setIsAuthModalOpen (false) ;
}return_url= {
  router.as_path ;
}//Pass current path for better UX on return /> {
  /* Header */ ";
}<motion.div className="text - center mb - 8"initial= {
  {
  opacity: 0, coordinate_y: -20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
}";
}> <h1 className="text - 4xl md:text - 5xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text - muted - foreground text - lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> {
  /* Market Insights */ ;
}{
  market_stats && (<motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
;
}transition= {
  {
  delay: 0.2 ;
;
}> <MarketInsights stats= {
  market_stats ;
}/> </motion.div>) ;
}{
  /* Filter Controls */ ;
}<motion.div initial= {
  {
  opacity: 0, coordinate_y: 20 ;
;
}animate= {
  {
  opacity: 1, coordinate_y: 0 ;
;
}transition= {
  {
  delay: 0.3 ;
;
}> <FilterControls sort_by= {
  sort_by ;
}setSortBy= {
  setSortBy ;
}filter_category= {
  filter_category ;
}setFilterCategory= {
  setFilterCategory ;
}categories= {
  categories ;
}price_range= {
  price_range ;
}setPriceRange= {
  setPriceRange ;
}minAiScore= {
  minAiScore ;
}setMinAiScore= {
  setMinAiScore ;
}min_rating= {
  min_rating ;
}setMinRating= {
  setMinRating ;
}filter_availability= {
  filter_availability ;
}setFilterAvailability= {
  setFilterAvailability ;
}availability_options= {
  availability_options.filter (Boolean) as string[] ;
}filter_location= {
  filter_location ;
}setFilterLocation= {
  setFilterLocation ;
}locations= {
  locations ;
}show_recommended= {
  show_recommended ;
}setShowRecommended= {
  setShowRecommended ;
}loading= {
  is_fetching ;
}/> </motion.div> {
  /* Product Grid */ ;
}<motion.div > <ProductCard product= {
  {';
  id: product.id, name: product.title, title: product.title, description: product.description || '', price: product.price || 0, currency: product.currency, category: product.category, tags: product.tags, images: product.images, rating: product.rating || 0, review_count: product.review_count || 0, created at: product.created_at, updated at: product.created_at,  //Use created_at for both stock: product.stock, in stock: (product.stock || 0) > 0 ;
;
}on_buy= {
  async () => {
  // Check condition
if ( {) {
  $2
}
  //though ProductCard will reset its state in .finally () regardless. throw error ;
;
}buy_disabled= {
  false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {
  /* AI Score Badge */ ;
}{";
  product.ai_score && product.ai_score > 90 && (<Badge className="absolute -top - 2 -right - 2 bg - gradient - to - r from - yellow - 500 to - orange - 500 z - 10 text - black"> <Sparkles className="h - 3 w - 3 mr - 1"/> AI {
  product.ai_score ;
}</Badge>) ;
}{
  /* Featured Badge */ ;
}{";
  product.featured && (<Badge className="absolute top - 2 left - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 z - 10"> <Star className="h - 3 w - 3 mr - 1"/> Featured </Badge>) ;
}</motion.div>) ) ;
}</AnimatePresence> </motion.div> {
  /* Loading More Indicator */ ;
}{";
  (is_fetching || loading) && (<motion.div className="mt - 8"initial= {
  {
  opacity: 0 ;
;
}animate= {
  {
  opacity: 1 ;
}";
}> <div className="grid grid - cols - 1 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 gap - 6"> {
  Array.from ({
  length: 4 ;
}) .map ( (, i) => (<SkeletonCard key= {
  `loading-$ {

  i ;
}` ;
}/>) ) ;
}</div> </motion.div>) ;

  product && product.featured && (<Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10"> <Star className="h-3 w-3 mr-1"/> Featured </Badge>) ;
}</motion && motion.div>) ) ;
}</AnimatePresence> </motion && motion.div> {;
  /* Loading More Indicator */ ;
}{";
  (isFetching || loading) && (<motion&& motion.div className="mt-8"initial= {
  {
  opacity: 0 

}animate= {
  {
  opacity: 1 
}"
}> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {;
  Array && Array.from ({;
  length: 4 ;
}) .map ( (, i) => (<SkeletonCardkey= {
  `loading-$ {
  i 
}` 
}/>) ) ;
}</div> </motion && motion.div>) ;
}{;
  /* End of Results */ ;
}{";
  !hasMore && products && products.length > 0 && (<motion&& motion.div className="text-center mt-12 py-8 border-t"initial= {
  {
  opacity: 0 

}animate= {
  {
  opacity: 1 

}'"
}> <div className="text-muted-foreground text-lg mb-2"> 🎉 You've explored all available products! </div> <div className="text-sm text-muted-foreground"> Showing {;
  products && products.length ;
}AI-powered solutions </div> </motion && motion.div>) ;
}{;
  /* Scroll to Top Button */ ;
}<AnimatePresence> {;
  showScrollTop && (<motion&& motion.button onClick={
  scrollToTop "
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"initial= {
  {
  opacity: 0, scale: 0 

}animate= {
  {
  opacity: 1, scale: 1 

}exit= {
  {
  opacity: 0, scale: 0 

}whileHover= {
  {
  scale: 1 && 1.1 

}whileTap= {
  {
  scale: 0 && 0.9 
}"
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion && motion.button>) ;

}</AnimatePresence> </div>) ;

}'"
}> <div className="text-muted-foreground text-lg mb-2"> 🎉 You've explored all available products! </div> <div className="text-sm text-muted-foreground"> Showing {;
  products && products.length ;
}AI-powered solutions </div> </motion && motion.div>) ;
}{;
  /* Scroll to Top Button */ ;
}<AnimatePresence> {;
  showScrollTop && (<motion&& motion.button onClick={
  scrollToTop "
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"initial= {
  {
  opacity: 0, scale: 0 

}animate= {
  {
  opacity: 1, scale: 1 

}exit= {
  {
  opacity: 0, scale: 0 

}whileHover= {
  {
  scale: 1 && 1.1 

}whileTap= {
  {
  scale: 0 && 0.9 
}"
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion && motion.button>) ;

}</AnimatePresence> </div>) ;
}'";
  );
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Marketplace = () => {;
  return (

}{
  /* End of Results */ ;
}{";
  !has_more && products.length > 0 && (<motion.div className="text - center mt - 12 py - 8 border - t"initial= {
  {
  opacity: 0 ;
;
}animate= {
  {
  opacity: 1 ;
}'";

}> <div className="text - muted - foreground text - lg mb - 2"> 🎉 You've explored all available products! </div> <div className="text - sm text - muted - foreground"> Showing {

  products.length ;
}AI - powered solutions </div> </motion.div>) ;
}{
  /* Scroll to Top Button */ ;
}<AnimatePresence> {
  showScrollTop && (<motion.button on_click={
  scrollToTop ";
}className="fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50"initial= {
  {
  opacity: 0, scale: 0 ;
;
}animate= {
  {
  opacity: 1, scale: 1 ;
;
}exit= {
  {
  opacity: 0, scale: 0 ;
;
}while_hover= {
  {
  scale: 1.1 ;
;
}while_tap= {
  {
  scale: 0.9 ;
}";
}> <ArrowUp className="h - 5 w - 5 text - primary - foreground" /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}'");
import React from './react';
import Head from './next / head';
import Link from './next / link';
const Marketplace = () =>: any {
  return (
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



    </>);
}

            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50";
            initial={{ opacity: 0, scale: 0 }}

            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}





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




