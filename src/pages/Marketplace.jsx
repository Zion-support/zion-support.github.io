import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart,
  Heart,
  Eye
} from 'lucide-react';

export default function Marketplace() {
  const categories = [
    { name: 'AI & Machine Learning', count: 156, icon: '🤖' },
    { name: 'Cybersecurity', count: 89, icon: '🔒' },
    { name: 'Cloud Solutions', count: 234, icon: '☁️' },
    { name: 'Mobile Apps', count: 67, icon: '📱' },
    { name: 'Web Development', count: 123, icon: '🌐' },
    { name: 'Data Analytics', count: 78, icon: '📊' },
    { name: 'IoT Solutions', count: 45, icon: '🔌' },
    { name: 'Blockchain', count: 34, icon: '⛓️' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence Suite',
      description: 'Advanced analytics and reporting platform with machine learning capabilities',
      price: '$2,999',
      rating: 4.8,
      reviews: 127,
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Enterprise Cybersecurity Platform',
      description: 'Comprehensive security solution with threat detection and response',
      price: '$4,499',
      rating: 4.9,
      reviews: 89,
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Cloud Infrastructure Management',
      description: 'Scalable cloud solutions with automated deployment and monitoring',
      price: '$1,799',
      rating: 4.7,
      reviews: 203,
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Marketplace
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions, services, and products from leading innovators worldwide
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products, services, or solutions..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white text-zion-blue rounded-md font-medium hover:bg-white/90 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {category.name}
                </h3>
                <p className="text-zion-slate-light text-sm">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Grid className="w-5 h-5" />
              </button>
              <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-black/50 rounded-full text-white hover:bg-zion-cyan transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-black/50 rounded-full text-white hover:bg-zion-cyan transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{product.rating}</span>
                      <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">{product.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell Your Solutions?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators and entrepreneurs who are already selling their technology solutions on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Start Selling
              </button>
            </Link>
            <Link to="/how-it-works">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Learn How It Works
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
