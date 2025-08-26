import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Building, 
  Package, 
  Globe,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket
} from 'lucide-react';

const categories = [
  { id: 'products', name: 'Products', icon: Package, count: 156, color: 'from-zion-cyan to-zion-blue' },
  { id: 'services', name: 'Services', icon: Zap, count: 89, color: 'from-zion-purple to-zion-pink' },
  { id: 'talent', name: 'Talent', icon: Users, count: 234, color: 'from-zion-green to-zion-cyan' },
  { id: 'equipment', name: 'Equipment', icon: Building, count: 67, color: 'from-zion-orange to-zion-yellow' }
];

const featuredItems = [
  {
    id: 1,
    type: 'service',
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise-grade analytics solution with machine learning capabilities',
    price: '$2,500/month',
    rating: 4.9,
    reviews: 127,
    category: 'AI Solutions',
    image: '/images/marketplace/ai-analytics.jpg',
    vendor: 'Zion Tech Group',
    location: 'Global'
  },
  {
    id: 2,
    type: 'talent',
    title: 'Senior Full-Stack Developer',
    description: 'Expert React/Node.js developer with 8+ years experience',
    price: '$120/hour',
    rating: 4.8,
    reviews: 89,
    category: 'Development',
    image: '/images/marketplace/developer.jpg',
    vendor: 'Tech Talent Hub',
    location: 'Remote'
  },
  {
    id: 3,
    type: 'product',
    title: 'Quantum Computing Workstation',
    description: 'High-performance workstation optimized for quantum algorithms',
    price: '$15,000',
    rating: 4.7,
    reviews: 23,
    category: 'Hardware',
    image: '/images/marketplace/quantum-workstation.jpg',
    vendor: 'Quantum Systems Inc',
    location: 'United States'
  },
  {
    id: 4,
    type: 'equipment',
    title: 'IoT Sensor Network Kit',
    description: 'Complete IoT solution with 50 sensors and gateway',
    price: '$3,200',
    rating: 4.6,
    reviews: 45,
    category: 'IoT',
    image: '/images/marketplace/iot-kit.jpg',
    vendor: 'Smart Sensors Co',
    location: 'Germany'
  }
];

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = featuredItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Zion Marketplace
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
            <p className="text-lg text-zion-slate-light/80 max-w-3xl mx-auto">
              Connect with innovators, talent, and cutting-edge technology worldwide. 
              Find the perfect solution for your business needs.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products, services, talent, or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">546</div>
              <div className="text-zion-slate-light">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">89</div>
              <div className="text-zion-slate-light">Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">Free</div>
              <div className="text-zion-slate-light">No Commission</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Browse by Category
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive marketplace organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-zion-cyan/20`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{category.count}</div>
                  <p className="text-white/80">Items Available</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Featured Items
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our top-rated products, services, and talent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zion-slate-light/5 to-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6 flex items-center justify-center">
                    <Package className="w-16 h-16 text-zion-cyan/50" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      item.type === 'service' ? 'bg-zion-purple/20 text-zion-purple' :
                      item.type === 'talent' ? 'bg-zion-green/20 text-zion-green' :
                      item.type === 'product' ? 'bg-zion-cyan/20 text-zion-cyan' :
                      'bg-zion-orange/20 text-zion-orange'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} />
                      ))}
                    </div>
                    <span className="text-zion-slate-light text-sm">({item.reviews})</span>
                  </div>

                  {/* Vendor & Location */}
                  <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                    <span>{item.vendor}</span>
                    <span>{item.location}</span>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-zion-cyan mb-4">
                    {item.price}
                  </div>

                  {/* CTA */}
                  <Link 
                    to={`/marketplace/${item.type}/${item.id}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:gap-2 transition-all duration-300"
                  >
                    View Details
                    <Zap className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Zion Marketplace to find innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-cyan rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}