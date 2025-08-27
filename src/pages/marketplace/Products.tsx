import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Cpu, 
  Server, 
  Network, 
  Shield, 
  Cloud, 
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Clock,
  Target,
  Lightbulb,
  ShoppingCart,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Cpu,
    title: 'Hardware & Devices',
    description: 'High-performance computing devices and components',
    count: '150+ Products',
    color: 'from-zion-blue to-zion-cyan'
  },
  {
    icon: Server,
    title: 'Server Solutions',
    description: 'Enterprise-grade server hardware and accessories',
    count: '80+ Products',
    color: 'from-zion-purple to-zion-blue'
  },
  {
    icon: Network,
    title: 'Networking Equipment',
    description: 'Switches, routers, and network infrastructure',
    count: '120+ Products',
    color: 'from-zion-cyan to-zion-purple'
  },
  {
    icon: Shield,
    title: 'Security Products',
    description: 'Cybersecurity hardware and software solutions',
    count: '90+ Products',
    color: 'from-zion-blue to-zion-green'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure and management tools',
    count: '60+ Products',
    color: 'from-zion-purple to-zion-pink'
  },
  {
    icon: Zap,
    title: 'Performance Tools',
    description: 'Optimization and monitoring solutions',
    count: '75+ Products',
    color: 'from-zion-cyan to-zion-yellow'
  }
];

const featuredProducts = [
  {
    name: 'Enterprise Server Pro X1',
    category: 'Server Solutions',
    price: '$2,499',
    rating: 4.8,
    image: 'server-pro',
    features: ['64GB RAM', '2TB SSD', 'Intel Xeon', '24/7 Support']
  },
  {
    name: 'Network Security Gateway',
    category: 'Security Products',
    price: '$899',
    rating: 4.9,
    image: 'security-gateway',
    features: ['Firewall', 'VPN', 'Threat Detection', 'Real-time Monitoring']
  },
  {
    name: 'AI Development Kit',
    category: 'Hardware & Devices',
    price: '$1,299',
    rating: 4.7,
    image: 'ai-kit',
    features: ['GPU Accelerated', 'ML Libraries', 'Cloud Ready', 'Documentation']
  },
  {
    name: 'Cloud Management Suite',
    category: 'Cloud Solutions',
    price: '$599',
    rating: 4.6,
    image: 'cloud-suite',
    features: ['Multi-cloud', 'Automation', 'Analytics', 'API Access']
  }
];

const benefits = [
  'Verified quality from trusted manufacturers',
  'Competitive pricing and bulk discounts',
  'Expert technical support and consultation',
  'Fast shipping and flexible delivery options',
  'Warranty and return protection',
  'Custom configuration and integration services'
];

export default function Products() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan opacity-20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-blue/10 border border-zion-blue/20 rounded-full px-6 py-3 mb-8">
              <Package className="w-5 h-5 text-zion-blue" />
              <span className="text-zion-blue font-medium">Marketplace Products</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Premium
              <span className="text-gradient block">Technology Products</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Browse our curated selection of high-quality technology products, from hardware to software solutions. 
              Find the perfect tools to power your business and accelerate innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/marketplace"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Browse All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, categories, or brands..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-zion-blue/10 border border-zion-blue/20 rounded-lg text-zion-blue hover:bg-zion-blue/20 transition-all duration-300">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="p-3 bg-zion-blue/10 border border-zion-blue/20 rounded-lg text-zion-blue hover:bg-zion-blue/20 transition-all duration-300">
                  <Grid className="w-5 h-5" />
                </button>
                <button className="p-3 bg-zion-blue/10 border border-zion-blue/20 rounded-lg text-zion-blue hover:bg-zion-blue/20 transition-all duration-300">
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Product Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology products organized by category.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-8 hover:border-zion-blue/40 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">{category.description}</p>
                <div className="text-zion-cyan font-medium">{category.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our top-rated and most popular technology products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-2xl p-6 hover:border-zion-blue/40 transition-all duration-300 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 rounded-xl mb-4 flex items-center justify-center">
                  <Package className="w-16 h-16 text-zion-blue/50" />
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-2">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-zion-slate-light">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-zion-blue font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="space-y-1">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan text-white py-2 rounded-lg hover:from-zion-blue-dark hover:to-zion-cyan-dark transition-all duration-300 font-medium">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Shop with Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of shopping with Zion Tech Group's marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-zion-blue/20 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-zion-cyan flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Product?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Browse our extensive catalog and find the technology solutions that fit your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/marketplace"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Browse All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline px-8 py-4 text-lg font-semibold"
              >
                Get Expert Advice
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}