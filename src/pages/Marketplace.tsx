import React, { useState } from 'react';
import { motion   } from 'framer-motion';
import { SEO   } from '@/components/SEO';
import { Search, 
  Filter, 
  Star, 
  Users, 
  Server, 
  Wrench,
  Search,
  Filter,
  Star,
  Heart,
  Eye
  } from 'lucide-react';

const Marketplace: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = featuredProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category.toLowerCase() !== selectedCategory) {
      return false;
    }
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

const Marketplace: React.FC = () => {
  return (
    <div className='container py-8'>
      <AuthModal
        isOpen = {isAuthModalOpen,}
        onClose = {(,) => setIsAuthModalOpen(false),}
        returnUrl={router.asPath} // Pass current path for better UX on return
      />
      {/* Header */}
      <motion.div
        className='text-center mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          {t('marketplace.hero_title')}
        </h1>
        <p className='text-muted-foreground text-lg'>
          {t('marketplace.hero_subtitle')}
        </p>
      </motion.div>
      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}><MarketInsights stats={marketStats} />
        </motion.div>
      )}
      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FilterControls
          sortBy = {sortBy,}
          setSortBy = {setSortBy,}
          filterCategory = {filterCategory,}
          setFilterCategory = {setFilterCategory,}
          categories = {categories,}
          priceRange = {priceRange,}
          setPriceRange = {setPriceRange,}
          minAiScore = {minAiScore,}
          setMinAiScore = {setMinAiScore,}
          minRating = {minRating,}
          setMinRating = {setMinRating,}
          filterAvailability = {filterAvailability,}
          setFilterAvailability = {setFilterAvailability,}
          availabilityOptions = {availabilityOptions.filter(Boolean) as string[],}
          filterLocation = {filterLocation,}
          setFilterLocation = {setFilterLocation,}
          locations = {locations,}
          showRecommended = {showRecommended,}
          setShowRecommended = {setShowRecommended,}
          loading = {isFetching,}
        />
      </motion.div>
      {/* Product Grid */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode='popLayout'>
          {products.map((product, index) => (            <motion.div
              key = {product.id,}
              ref = {index === products.length - 1 ? lastElementRef : null,}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
              className='relative group'
            >
              <ProductCard
                product={{
                  id: product.id
                  name: product.title
                  title: product.title
                  description: product.description |''
                  price: product.price |0
                  currency: product.currency
                  category: product.category
                  tags: product.tags
                  images: product.images
                  rating: product.rating |0
                  reviewCount: product.reviewCount |0
                  created_at: product.createdAt
                  updated_at: product.createdAt, // Use createdAt for both
                  stock: product.stock
                  in_stock: (product.stock |0) > 0
                }}
                onBuy = {async () => {
                  if (!isAuthenticated) {
                    setIsAuthModalOpen(true);
                    return; // Stop further execution
                  }                  try {
                    await router.push(`/checkout/${product.id}`);
                  } catch (error) {
                    logErrorToProduction('Failed to navigate to checkout:', {
                      data: error
                    });
                    toast({
                      title: 'Navigation Error'
                      description:
                        'Could not navigate to checkout. Please try again.'
                      variant: 'destructive'
                    });
                    // Re-throw to allow ProductCard's catch to also run if needed
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
        <motion.div
          className='mt-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (              <SkeletonCard key={`loading-${i}`} />
            ))}
          </div>

          {/* No Results */}
          {sortedSolutions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No solutions found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View All Solutions
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-8">
              Can't find exactly what you're looking for? Our team of experts can create 
              a custom AI-powered solution tailored to your specific business needs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Marketplace coming soon. We're building a comprehensive technology marketplace.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
