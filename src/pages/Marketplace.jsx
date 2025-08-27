import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🛍️' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'services', name: 'Services', icon: '🔧' },
    { id: 'software', name: 'Software', icon: '📱' },
    { id: 'consulting', name: 'Consulting', icon: '💼' }
  ];

  const sampleListings = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Platform',
      description: 'Advanced analytics and reporting platform with machine learning capabilities',
      category: 'Technology',
      price: 2999,
      currency: '$',
      rating: 4.8,
      reviewCount: 156,
      featured: true,
      tags: ['AI', 'Analytics', 'Business Intelligence']
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing services for complex problem solving',
      category: 'Technology',
      price: 15000,
      currency: '$',
      rating: 4.9,
      reviewCount: 89,
      featured: true,
      tags: ['Quantum', 'Computing', 'Research']
    },
    {
      id: 3,
      title: 'Blockchain Development Services',
      description: 'Comprehensive blockchain solutions for enterprise applications',
      category: 'Software',
      price: 7999,
      currency: '$',
      rating: 4.7,
      reviewCount: 234,
      featured: false,
      tags: ['Blockchain', 'Web3', 'DeFi']
    },
    {
      id: 4,
      title: 'IoT Edge Computing Suite',
      description: 'End-to-end IoT solutions with edge computing capabilities',
      category: 'Technology',
      price: 5999,
      currency: '$',
      rating: 4.6,
      reviewCount: 178,
      featured: false,
      tags: ['IoT', 'Edge Computing', 'Real-time']
    }
  ];

  const filteredListings = sampleListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           listing.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Marketplace
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions, services, and products from leading innovators
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, services, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{sampleListings.length}</div>
              <div className="text-zion-slate-light">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">4.8</div>
              <div className="text-zion-slate-light">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                    : 'border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="group bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                >
                  {/* Listing Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">${listing.price.toLocaleString()}</div>
                        <div className="text-sm text-zion-slate-light">per month</div>
                      </div>
                    </div>
                    
                    {listing.featured && (
                      <div className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-3">
                        Featured
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {listing.title}
                    </h3>
                    
                    <p className="text-zion-slate-light leading-relaxed mb-4">
                      {listing.description}
                    </p>
                  </div>

                  {/* Listing Details */}
                  <div className="space-y-4 mb-6">
                    {/* Category & Rating */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan font-medium">{listing.category}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-zion-yellow">⭐</span>
                        <span className="text-white">{listing.rating}</span>
                        <span className="text-zion-slate-light">({listing.reviewCount})</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {listing.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs text-zion-slate-light bg-zion-slate-dark/50 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <Link
                      to={`/marketplace/listing/${listing.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 text-sm"
                    >
                      View Details
                    </Link>
                    
                    <button className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 text-sm">
                      Contact Seller
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No listings found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to List Your Product?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join our marketplace and reach thousands of technology professionals and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              List Your Product
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
