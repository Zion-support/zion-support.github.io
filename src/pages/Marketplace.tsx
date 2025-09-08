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
    <>
      <Helmet>
        <title>Marketplace - Zion Tech Group</title>
        <meta name="description" content="Browse and purchase technology solutions, services, and equipment from Zion Tech Group's comprehensive marketplace." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category   => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {sortedSolutions.map((solution, index)   => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Badge */}
                {solution.badge && (
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                    {solution.badge}
                  </div>
                )}

                {/* Image and Title */}
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{solution.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {solution.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        +{solution.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{solution.rating}</span>
                    <span className="text-gray-400">({solution.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{solution.users}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{solution.price}</div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                      <ShoppingCart className="w-4 h-4" />
                      Get Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
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
