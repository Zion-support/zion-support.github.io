import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Package, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Code, 
  Target, 
  Star, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Lock,
  BarChart3,
  Settings,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Lightbulb,
  Rocket,
  Award
} from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'security', name: 'Security & Compliance', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart3 },
    { id: 'automation', name: 'Automation & Workflow', icon: Zap },
    { id: 'mobile', name: 'Mobile & Web', icon: Smartphone }
  ];

  const products = [
    {
      id: 'ai-business-manager',
      name: 'AI Business Manager',
      category: 'ai',
      description: 'Intelligent business process automation and decision-making platform',
      features: [
        'Predictive analytics',
        'Process optimization',
        'Intelligent reporting',
        'Real-time insights',
        'Custom workflows',
        'API integration'
      ],
      pricing: 'Starting from $2,500/month',
      rating: 4.9,
      reviews: 127,
      status: 'featured',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      demo: true,
      trial: true
    },
    {
      id: 'cybersecurity-suite',
      name: 'Enterprise Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive security solution for enterprise threat protection',
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Incident response',
        'Security analytics',
        '24/7 monitoring'
      ],
      pricing: 'Starting from $3,200/month',
      rating: 4.8,
      reviews: 89,
      status: 'popular',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      demo: true,
      trial: false
    },
    {
      id: 'cloud-optimizer',
      name: 'Cloud Cost Optimizer',
      category: 'cloud',
      description: 'AI-powered cloud infrastructure optimization and cost management',
      features: [
        'Cost analysis',
        'Resource optimization',
        'Automated scaling',
        'Performance monitoring',
        'Budget alerts',
        'Multi-cloud support'
      ],
      pricing: 'Starting from $800/month',
      rating: 4.7,
      reviews: 156,
      status: 'new',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      demo: true,
      trial: true
    },
    {
      id: 'data-intelligence-platform',
      name: 'Data Intelligence Platform',
      category: 'analytics',
      description: 'Advanced business intelligence and data analytics solution',
      features: [
        'Data visualization',
        'Real-time dashboards',
        'Predictive modeling',
        'Data integration',
        'Custom reports',
        'Mobile access'
      ],
      pricing: 'Starting from $1,800/month',
      rating: 4.6,
      reviews: 203,
      status: 'featured',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      demo: true,
      trial: true
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation Suite',
      category: 'automation',
      description: 'End-to-end business process automation and workflow management',
      features: [
        'Process mapping',
        'Automated workflows',
        'Approval systems',
        'Integration tools',
        'Performance tracking',
        'Custom forms'
      ],
      pricing: 'Starting from $1,200/month',
      rating: 4.5,
      reviews: 178,
      status: 'popular',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      demo: true,
      trial: true
    },
    {
      id: 'mobile-app-platform',
      name: 'Enterprise Mobile Platform',
      category: 'mobile',
      description: 'Cross-platform mobile application development and management',
      features: [
        'Cross-platform development',
        'Native performance',
        'Offline capabilities',
        'Push notifications',
        'Analytics dashboard',
        'Enterprise security'
      ],
      pricing: 'Starting from $1,500/month',
      rating: 4.4,
      reviews: 134,
      status: 'new',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-600',
      demo: true,
      trial: false
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      category: 'ai',
      description: 'Intelligent content creation and optimization platform',
      features: [
        'Content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice consistency',
        'Performance analytics',
        'Content calendar'
      ],
      pricing: 'Starting from $900/month',
      rating: 4.3,
      reviews: 267,
      status: 'featured',
      icon: Brain,
      color: 'from-pink-500 to-rose-600',
      demo: true,
      trial: true
    },
    {
      id: 'compliance-monitor',
      name: 'Compliance Monitor',
      category: 'security',
      description: 'Automated compliance monitoring and reporting system',
      features: [
        'Regulatory tracking',
        'Automated audits',
        'Risk assessment',
        'Document management',
        'Compliance reporting',
        'Alert system'
      ],
      pricing: 'Starting from $2,100/month',
      rating: 4.7,
      reviews: 95,
      status: 'popular',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      demo: true,
      trial: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const benefits = [
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert assistance'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Grow with your business needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Products - Zion Tech Group"
        description="Discover our comprehensive suite of enterprise software products designed to transform your business operations and drive growth."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of enterprise software products designed to 
              transform your business operations and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-2xl border border-slate-600/30 overflow-hidden hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Product Header */}
                    <div className={`bg-gradient-to-br ${product.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <product.icon className="w-6 h-6" />
                        </div>
                        {product.status === 'featured' && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                        {product.status === 'popular' && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-200 text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                        {product.status === 'new' && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-200 text-xs font-medium rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm opacity-90">{product.description}</p>
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {product.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">{product.pricing}</div>
                        <div className="text-sm text-gray-400">Enterprise pricing available</div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        {product.demo && (
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                            <Monitor className="w-4 h-4" />
                            Demo
                          </button>
                        )}
                        {product.trial && (
                          <button className="flex-1 bg-transparent border border-slate-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300 flex items-center justify-center gap-2">
                            <Rocket className="w-4 h-4" />
                            Start Trial
                          </button>
                        )}
                        <button className="bg-transparent border border-slate-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with enterprise-grade technology and designed for real-world business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our products, request demos, or start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/request-quote"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);