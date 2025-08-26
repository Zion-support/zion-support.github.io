import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  Server, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket, 
  Code, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  Search,
  Filter,
  Grid,
  List,
  TrendingUp,
  Award,
  Globe,
  Building
} from 'lucide-react';

const marketplaceCategories = [
  {
    id: 'products',
    name: 'Products',
    description: 'Cutting-edge technology products and solutions',
    icon: ShoppingCart,
    href: '/marketplace/products',
    color: 'from-zion-cyan to-zion-blue',
    count: '500+',
    featured: ['AI Software', 'Cybersecurity Tools', 'Cloud Solutions', 'IoT Devices']
  },
  {
    id: 'talent',
    name: 'Talent',
    description: 'Expert professionals and consultants',
    icon: Users,
    href: '/marketplace/talent',
    color: 'from-zion-purple to-zion-pink',
    count: '1000+',
    featured: ['AI Engineers', 'Cybersecurity Experts', 'Cloud Architects', 'Data Scientists']
  },
  {
    id: 'equipment',
    name: 'Equipment',
    description: 'High-tech hardware and infrastructure',
    icon: Server,
    href: '/marketplace/equipment',
    color: 'from-zion-green to-zion-blue',
    count: '200+',
    featured: ['Servers', 'Network Devices', 'Security Appliances', 'IoT Hardware']
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Professional IT and consulting services',
    icon: Zap,
    href: '/marketplace/services',
    color: 'from-zion-orange to-zion-red',
    count: '300+',
    featured: ['Consulting', 'Implementation', 'Support', 'Training']
  }
];

const featuredItems = [
  {
    id: 1,
    name: 'AI Business Intelligence Suite',
    category: 'Products',
    description: 'Advanced AI-powered analytics platform for business intelligence',
    price: '$2,999',
    rating: 4.9,
    reviews: 127,
    image: '/api/placeholder/300/200',
    vendor: 'Zion Tech Solutions',
    featured: true
  },
  {
    id: 2,
    name: 'Sarah Chen - AI Engineer',
    category: 'Talent',
    description: 'Senior AI engineer with 8+ years experience in machine learning',
    price: '$150/hr',
    rating: 4.8,
    reviews: 89,
    image: '/api/placeholder/300/200',
    vendor: 'Independent Consultant',
    featured: true
  },
  {
    id: 3,
    name: 'Enterprise Security Firewall',
    category: 'Equipment',
    description: 'Next-generation firewall with AI threat detection',
    price: '$5,499',
    rating: 4.7,
    reviews: 203,
    image: '/api/placeholder/300/200',
    vendor: 'CyberShield Pro',
    featured: true
  },
  {
    id: 4,
    name: 'Digital Transformation Consulting',
    category: 'Services',
    description: 'End-to-end digital transformation strategy and implementation',
    price: '$200/hr',
    rating: 4.9,
    reviews: 156,
    image: '/api/placeholder/300/200',
    vendor: 'TransformTech Consulting',
    featured: true
  }
];

const stats = [
  { label: 'Active Vendors', value: '500+', icon: Building },
  { label: 'Products Listed', value: '2,000+', icon: ShoppingCart },
  { label: 'Expert Talent', value: '1,500+', icon: Users },
  { label: 'Successful Deals', value: '10,000+', icon: Award }
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Zion Marketplace
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connect with innovators, talent, and cutting-edge technology worldwide.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, talent, equipment, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/marketplace/products"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Browse Products
              </Link>
              <Link
                to="/marketplace/talent"
                className="btn-neon px-8 py-4 text-lg"
              >
                Find Talent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Marketplace Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover everything you need to accelerate your technology journey in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketplaceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={category.href}>
                  <div className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 p-6 h-full hover:bg-zion-slate-dark/70">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {category.featured.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                      <span className="text-sm font-medium">Explore {category.name}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Items
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover top-rated products, talent, and services from our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                      <item.icon className="w-16 h-16 text-zion-cyan" />
                    </div>
                    {item.featured && (
                      <div className="absolute top-2 right-2 bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">{item.price}</div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white">{item.rating}</span>
                        <span className="text-xs text-zion-slate-light">({item.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-zion-slate-light mb-4">
                      by {item.vendor}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Marketplace?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or connect, our marketplace is the perfect place to grow your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/marketplace/sell"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Selling
              </Link>
              <Link
                to="/marketplace/buy"
                className="btn-neon px-8 py-4 text-lg"
              >
                Start Buying
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
