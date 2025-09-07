import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Play,
  ChevronRight,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Filter,
  DollarSign,
  Clock,
  Scale,
  Monitor,
  Smartphone,
  Satellite,
  Leaf,
  Gamepad2,
  Bot,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { innovativeMicroSaasServices2032 } from '../data/innovativeMicroSaasServices2032';
import { comprehensiveITServices2032 } from '../data/comprehensiveITServices2032';
import { comprehensiveAIServices2032 } from '../data/comprehensiveAIServices2032';

export function ComprehensiveServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  // Combine all services
  const allServices = useMemo(() => {
    const microSaas = innovativeMicroSaasServices2032.map(service => ({
      ...service,
      type: 'Micro SaaS',
      typeIcon: Zap
    }));
    
    const itServices = comprehensiveITServices2032.map(service => ({
      ...service,
      type: 'IT Services',
      typeIcon: Cpu
    }));
    
    const aiServices = comprehensiveAIServices2032.map(service => ({
      ...service,
      type: 'AI Solutions',
      typeIcon: Brain
    }));
    
    return [...microSaas, ...itServices, ...aiServices];
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const price = parseInt(service.price.replace('$', '').replace(',', ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace('$', '').replace(',', ''));
          const priceB = parseInt(b.price.replace('$', '').replace(',', ''));
          return priceA - priceB;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [allServices, activeCategory, searchQuery, priceRange, sortBy]);

  const categories = [
    { name: 'all', label: 'All Services', icon: Globe, count: allServices.length },
    { name: 'Micro SaaS', label: 'Micro SaaS', icon: Zap, count: innovativeMicroSaasServices2032.length },
    { name: 'IT Services', label: 'IT Services', icon: Cpu, count: comprehensiveITServices2032.length },
    { name: 'AI Solutions', label: 'AI Solutions', icon: Brain, count: comprehensiveAIServices2032.length }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: any } = {
      'AI & ML': Brain,
      'Blockchain & Web3': Network,
      'Quantum Computing': Atom,
      'Cybersecurity': Shield,
      'Data Analytics': BarChart3,
      'IoT & Edge': Activity,
      'FinTech': DollarSign,
      'HealthTech': Heart,
      'GreenTech': Leaf,
      'SpaceTech': Satellite,
      'Metaverse': Gamepad2,
      'Autonomous Systems': Bot,
      'Infrastructure': Server,
      'Cloud & DevOps': Cloud,
      'Digital Transformation': Rocket,
      'Enterprise Solutions': Building,
      'Managed Services': Monitor,
      'Consulting': Briefcase,
      'Integration': Code,
      'Support & Maintenance': Settings,
      'Machine Learning': Brain,
      'Natural Language Processing': FileText,
      'Computer Vision': Eye,
      'Predictive Analytics': TrendingUp,
      'AI Automation': Zap,
      'AI Consulting': Users,
      'AI Infrastructure': Database,
      'AI Integration': Code,
      'AI Security': Lock,
      'AI Ethics': Shield,
      'Quantum AI': Atom,
      'Edge AI': Smartphone
    };
    return categoryMap[category] || Globe;
  };

  const getPriceColor = (price: string) => {
    const priceNum = parseInt(price.replace('$', '').replace(',', ''));
    if (priceNum < 1000) return 'text-green-400';
    if (priceNum < 5000) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Services Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our complete range of innovative technology solutions, from micro SAAS applications 
            to enterprise-grade IT services and cutting-edge AI solutions.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <div key={category.name} className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700">
              <category.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{category.count}</div>
              <div className="text-gray-300">{category.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <select
                value={`${priceRange[0]}-${priceRange[1]}`}
                onChange={(e) => {
                  const [min, max] = e.target.value.split('-').map(Number);
                  setPriceRange([min, max]);
                }}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="0-10000">All Prices</option>
                <option value="0-1000">Under $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-100000">$10,000+</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <getCategoryIcon(service.category) className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="p-2 bg-gray-700 rounded-lg">
                    <service.typeIcon className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-400 capitalize">
                    per {service.billing}
                  </div>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

              {/* Category and Type */}
              <div className="flex items-center space-x-4 mb-4 text-sm">
                <span className="text-cyan-400 font-medium">{service.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{service.type}</span>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Market Size and Competitive Advantage */}
              {service.marketSize && (
                <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Market Size:</div>
                  <div className="text-sm font-medium text-cyan-400">{service.marketSize}</div>
                </div>
              )}

              {/* CTA Button */}
              <Link
                to={service.href}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-center inline-flex items-center justify-center space-x-2"
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-12 border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your needs. 
            Get in touch today to start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-lg inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200 font-medium text-lg"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}