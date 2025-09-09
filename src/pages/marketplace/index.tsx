import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  Package, 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Database,
  Search,
  Filter,
  TrendingUp,
  Target,
  Award,
  Building,
  Code,
  Cpu,
  Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const marketplaceCategories = [
  {
    id: 'products',
    name: 'Products',
    description: 'High-quality technology products and equipment for your business needs.',
    icon: Package,
    href: '/marketplace/products',
    count: '500+',
    items: ['Hardware', 'Software', 'Equipment', 'Devices']
  },
  {
    id: 'talent',
    name: 'Talent',
    description: 'Expert professionals and consultants for your technology projects.',
    icon: Users,
    href: '/marketplace/talent',
    count: '200+',
    items: ['Developers', 'Consultants', 'Engineers', 'Designers']
  },
  {
    id: 'equipment',
    name: 'Equipment',
    description: 'Professional-grade technology equipment and infrastructure solutions.',
    icon: Cpu,
    href: '/marketplace/equipment',
    count: '300+',
    items: ['Servers', 'Networking', 'Storage', 'Security']
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Professional services and solutions from certified providers.',
    icon: Wrench,
    href: '/marketplace/services',
    count: '150+',
    items: ['Consulting', 'Implementation', 'Support', 'Training']
  }
];

const featuredItems = [
  {
    id: 'ai-platform',
    name: 'AI Business Intelligence Platform',
    category: 'Products',
    description: 'Enterprise-grade AI platform for business intelligence and analytics.',
    price: '$2,999/month',
    rating: 4.9,
    reviews: 127,
    image: '/images/marketplace/ai-platform.jpg'
  },
  {
    id: 'cybersecurity-expert',
    name: 'Senior Cybersecurity Consultant',
    category: 'Talent',
    description: 'Expert cybersecurity professional with 10+ years of experience.',
    price: '$150/hour',
    rating: 4.8,
    reviews: 89,
    image: '/images/marketplace/cybersecurity-expert.jpg'
  },
  {
    id: 'quantum-server',
    name: 'Quantum Computing Server',
    category: 'Equipment',
    description: 'High-performance quantum computing server for research and development.',
    price: '$45,000',
    rating: 4.7,
    reviews: 23,
    image: '/images/marketplace/quantum-server.jpg'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation Service',
    category: 'Services',
    description: 'Comprehensive digital transformation consulting and implementation.',
    price: '$15,000/project',
    rating: 4.9,
    reviews: 156,
    image: '/images/marketplace/digital-transformation.jpg'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Verified Quality',
    description: 'All products and services are verified for quality and authenticity.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access to a worldwide network of technology providers and experts.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround times for products and rapid service deployment.'
  },
  {
    icon: Heart,
    title: 'Customer Support',
    description: '24/7 customer support and satisfaction guarantee.'
  }
];

export default function MarketplaceIndex() {
  return (
    <>
      <SEO 
        title="Marketplace | Zion Tech Group"
        description="Discover high-quality technology products, talent, equipment, and services in our comprehensive marketplace. Connect with verified providers worldwide."
        canonical="https://ziontechgroup.com/marketplace"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Marketplace</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Discover high-quality technology products, talent, equipment, and services from verified providers worldwide. 
                Your one-stop destination for all technology needs.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, services, talent, or equipment..."
                    className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/marketplace/products" 
                  className="btn-neon px-8 py-3 text-lg"
                >
                  Browse Products
                </Link>
                <Link 
                  to="/marketplace/talent" 
                  className="btn-outline px-8 py-3 text-lg"
                >
                  Find Talent
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Marketplace Categories
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Explore our comprehensive marketplace organized by category to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketplaceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <span className="text-zion-cyan font-semibold">{category.count}</span>
                  </div>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={category.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Items
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Handpicked high-quality products, services, and talent from our marketplace.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-full h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg mb-4 flex items-center justify-center">
                    <Package className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs text-zion-cyan font-medium">{item.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-cyan font-semibold">{item.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white text-sm">{item.rating}</span>
                      <span className="text-zion-slate-light text-sm ml-1">({item.reviews})</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/marketplace/${item.category.toLowerCase()}/${item.id}`}
                    className="block w-full text-center py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Marketplace?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We provide a trusted platform that connects you with the best technology solutions and providers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Discover Amazing Technology Solutions?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses finding the perfect technology solutions in our marketplace.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/marketplace/products" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Shopping
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}