import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Users, 
  Code, 
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Heart,
  ShoppingCart,
  Eye,
  Clock,
  MapPin,
  DollarSign,
  TrendingUp,
  Award
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Categories', icon: Grid, count: 1250 },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 320 },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 180 },
  { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 250 },
  { id: 'iot', name: 'IoT & Edge', icon: Zap, count: 150 },
  { id: 'quantum', name: 'Quantum Computing', icon: Rocket, count: 80 },
  { id: 'talent', name: 'Tech Talent', icon: Users, count: 200 },
  { id: 'equipment', name: 'Equipment', icon: Code, count: 70 }
];

const featuredProducts = [
  {
    id: 1,
    name: 'AI-Powered Business Intelligence Platform',
    category: 'AI & Machine Learning',
    description: 'Enterprise-grade AI platform for predictive analytics and business intelligence.',
    price: '$15,000',
    rating: 4.9,
    reviews: 127,
    image: '/images/marketplace/ai-platform.jpg',
    vendor: 'Zion AI Solutions',
    location: 'San Francisco, CA',
    featured: true,
    tags: ['AI', 'Analytics', 'Enterprise', 'Cloud']
  },
  {
    id: 2,
    name: 'Quantum-Safe Encryption Suite',
    category: 'Cybersecurity',
    description: 'Next-generation encryption resistant to quantum computing attacks.',
    price: '$8,500',
    rating: 4.8,
    reviews: 89,
    image: '/images/marketplace/quantum-encryption.jpg',
    vendor: 'Quantum Security Labs',
    location: 'Boston, MA',
    featured: true,
    tags: ['Quantum', 'Security', 'Encryption', 'Future-proof']
  },
  {
    id: 3,
    name: 'Senior AI Engineer',
    category: 'Tech Talent',
    description: 'Experienced AI engineer specializing in deep learning and neural networks.',
    rate: '$150/hr',
    rating: 4.9,
    reviews: 45,
    image: '/images/marketplace/ai-engineer.jpg',
    vendor: 'AI Talent Hub',
    location: 'Remote',
    featured: true,
    tags: ['AI Engineer', 'Deep Learning', 'Python', 'Remote']
  },
  {
    id: 4,
    name: 'Edge Computing Infrastructure Kit',
    category: 'IoT & Edge',
    description: 'Complete edge computing solution for IoT deployments and real-time processing.',
    price: '$12,000',
    rating: 4.7,
    reviews: 156,
    image: '/images/marketplace/edge-kit.jpg',
    vendor: 'EdgeTech Systems',
    location: 'Austin, TX',
    featured: true,
    tags: ['Edge Computing', 'IoT', 'Real-time', 'Infrastructure']
  }
];

const recentListings = [
  {
    id: 5,
    name: 'Blockchain Development Services',
    category: 'Development',
    description: 'Custom blockchain solutions for enterprise applications.',
    price: 'From $5,000',
    vendor: 'BlockChain Pro',
    location: 'New York, NY',
    posted: '2 hours ago',
    tags: ['Blockchain', 'Development', 'Enterprise']
  },
  {
    id: 6,
    name: 'Cybersecurity Consultant',
    category: 'Tech Talent',
    description: 'Expert cybersecurity consultant with 10+ years experience.',
    rate: '$200/hr',
    vendor: 'CyberSec Expert',
    location: 'Washington, DC',
    posted: '4 hours ago',
    tags: ['Cybersecurity', 'Consulting', 'Expert']
  },
  {
    id: 7,
    name: 'Green IT Solutions Package',
    category: 'Sustainability',
    description: 'Comprehensive green IT solutions for eco-friendly businesses.',
    price: '$25,000',
    vendor: 'GreenTech Solutions',
    location: 'Seattle, WA',
    posted: '6 hours ago',
    tags: ['Green IT', 'Sustainability', 'Eco-friendly']
  },
  {
    id: 8,
    name: '5G Network Optimization Tools',
    category: 'Telecommunications',
    description: 'Advanced tools for 5G network optimization and monitoring.',
    price: '$18,500',
    vendor: '5G Tech Solutions',
    location: 'Dallas, TX',
    posted: '8 hours ago',
    tags: ['5G', 'Network', 'Optimization']
  }
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = featuredProducts.filter(product => 
    selectedCategory === 'all' || product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              High-Tech Marketplace
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              The world's premier marketplace for cutting-edge technology, AI solutions, 
              cybersecurity tools, and top tech talent. Connect with innovators worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products, services, or talent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Search
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-zion-cyan" />
                <span>1,250+ Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-zion-purple" />
                <span>Verified Vendors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-zion-blue" />
                <span>Global Network</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Browse Categories</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'text-zion-slate-light hover:text-zion-cyan'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'text-zion-slate-light hover:text-zion-cyan'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 text-center hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{category.name}</h3>
                <span className="text-xs text-zion-slate-light">{category.count} items</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products & Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the latest innovations and top-rated solutions from verified vendors worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {product.name.charAt(0)}
                  </div>
                  {product.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zion-cyan uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{product.rating}</span>
                      <span className="text-xs text-zion-slate-light">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-zion-cyan">
                      {product.price || product.rate}
                    </div>
                    <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{product.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">{product.vendor}</span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Listings Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recent Listings</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay updated with the latest products, services, and opportunities in the high-tech marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm font-medium text-zion-cyan uppercase tracking-wide">
                      {listing.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-1">{listing.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-zion-cyan">{listing.price || listing.rate}</div>
                    <div className="text-xs text-zion-slate-light flex items-center space-x-1 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{listing.posted}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4">{listing.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{listing.location}</span>
                  </div>
                  <span className="text-sm text-zion-slate-light">{listing.vendor}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn-neon px-4 py-2 text-sm">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Buy or Sell?</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses and professionals already using our marketplace 
              to discover innovative solutions and connect with top talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Start Selling
              </a>
              <a
                href="/marketplace/browse"
                className="btn-neon px-8 py-3 text-lg"
              >
                Browse Marketplace
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
