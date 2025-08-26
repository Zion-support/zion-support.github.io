import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Rocket,
  Atom,
  Dna,
  Eye,
  Microscope,
  Cpu,
  Network,
  Lock,
  Database,
  Cloud,
  Globe,
  Heart,
  Calculator,
  BarChart3,
  Target,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  BookOpen,
  Leaf,
  Scale,
  Home,
  Truck
} from 'lucide-react';
import { servicesCatalog } from '../data/servicesCatalog';
import { innovativeServices2027 } from '../data/innovativeServices2027';

export const ComprehensiveServicesOverview: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('name');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('comprehensive-services-overview');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Combine all services
  const allServices = [
    ...servicesCatalog.flatMap(category => 
      category.items.map(item => ({
        ...item,
        source: 'catalog',
        category: category.name,
        features: item.features || [],
        ctaLabel: item.ctaLabel || 'Get Started',
        href: item.href || '/contact'
      }))
    ),
    ...innovativeServices2027.map(service => ({
      ...service,
      source: 'innovative',
      category: service.category,
      features: service.features || [],
      ctaLabel: service.ctaLabel || 'Get Started',
      href: service.href || '/contact'
    }))
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const categories = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'category', label: 'Category' }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI Solutions': Brain,
      'Micro SaaS': Zap,
      'IT Services': Shield,
      'Cybersecurity': Shield,
      'Data & Analytics': BarChart3,
      'Cloud & DevOps': Cloud,
      'Quantum Computing': Atom,
      'Blockchain Solutions': Lock,
      'IoT & Edge Computing': Network,
      'FinTech Solutions': DollarSign,
      'HealthTech Solutions': Heart,
      'EdTech Solutions': BookOpen,
      'GreenTech Solutions': Leaf,
      'SpaceTech Solutions': Rocket,
      'Robotics & Automation': Cpu,
      'AR/VR Solutions': Eye,
      'Biotech Solutions': Dna,
      'LegalTech Solutions': Scale,
      'Real Estate Tech': Home,
      'Supply Chain Solutions': Truck,
      'AI & Consciousness': Brain,
      'Quantum AI': Atom,
      'Autonomous AI': Cpu,
      'Quantum Finance': TrendingUp,
      'Space Technology': Rocket,
      'Quantum Space': Rocket,
      'Biotechnology': Dna,
      'Quantum Medicine': Dna,
      'Quantum Security': Shield,
      'Nanotechnology': Microscope,
      'Neural Technology': Eye
    };
    return iconMap[category] || Target;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Solutions': 'from-purple-500 to-pink-500',
      'Micro SaaS': 'from-blue-500 to-cyan-500',
      'IT Services': 'from-green-500 to-emerald-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Data & Analytics': 'from-indigo-500 to-purple-500',
      'Cloud & DevOps': 'from-blue-500 to-indigo-500',
      'Quantum Computing': 'from-cyan-500 to-blue-500',
      'Blockchain Solutions': 'from-yellow-500 to-orange-500',
      'IoT & Edge Computing': 'from-green-500 to-teal-500',
      'FinTech Solutions': 'from-green-500 to-emerald-500',
      'HealthTech Solutions': 'from-red-500 to-pink-500',
      'EdTech Solutions': 'from-blue-500 to-indigo-500',
      'GreenTech Solutions': 'from-green-500 to-teal-500',
      'SpaceTech Solutions': 'from-purple-500 to-blue-500',
      'Robotics & Automation': 'from-gray-500 to-slate-500',
      'AR/VR Solutions': 'from-violet-500 to-purple-500',
      'Biotech Solutions': 'from-teal-500 to-blue-500',
      'LegalTech Solutions': 'from-orange-500 to-red-500',
      'Real Estate Tech': 'from-blue-500 to-cyan-500',
      'Supply Chain Solutions': 'from-indigo-500 to-purple-500',
      'AI & Consciousness': 'from-purple-500 to-pink-500',
      'Quantum AI': 'from-cyan-500 to-blue-500',
      'Autonomous AI': 'from-green-500 to-emerald-500',
      'Quantum Finance': 'from-yellow-500 to-orange-500',
      'Space Technology': 'from-purple-500 to-blue-500',
      'Quantum Space': 'from-cyan-500 to-blue-500',
      'Biotechnology': 'from-green-500 to-teal-500',
      'Quantum Medicine': 'from-teal-500 to-blue-500',
      'Quantum Security': 'from-red-500 to-pink-500',
      'Nanotechnology': 'from-gray-500 to-slate-500',
      'Neural Technology': 'from-violet-500 to-purple-500'
    };
    return colorMap[category] || 'from-zion-cyan to-zion-purple';
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div id="comprehensive-services-overview" className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full border border-zion-cyan/30 mb-6">
              <BarChart3 className="w-5 h-5 text-zion-cyan mr-2" />
              <span className="text-zion-cyan font-semibold">Complete Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Overview</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our complete portfolio of innovative technology services, from AI and quantum computing 
              to cybersecurity and emerging technologies. Find the perfect solution for your business needs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">{categories.length - 1}</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-zion-slate-dark text-white">
                    Sort by {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                      : 'bg-zion-slate-light/30 text-gray-400 hover:text-white hover:bg-zion-slate-light/50'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                      : 'bg-zion-slate-light/30 text-gray-400 hover:text-white hover:bg-zion-slate-light/50'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <span className="text-zion-cyan font-semibold">
                {filteredServices.length} services found
              </span>
              {searchQuery && (
                <span className="text-gray-400 ml-2">
                  for "{searchQuery}"
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="text-gray-400 ml-2">
                  in {selectedCategory}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={`${service.source}-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={viewMode === 'grid' ? 'group relative' : 'group'}
              >
                <div className={`bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-500 hover:scale-105 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/25 ${
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`}>
                  {/* Service Icon */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                      {getCategoryIcon(service.category) && React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`flex-1 ${viewMode === 'list' ? 'min-w-0' : ''}`}>
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-zion-cyan text-xs font-medium">{service.category}</span>
                      {service.source === 'innovative' && (
                        <span className="px-2 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs rounded-full">
                          <Star className="w-3 h-3 inline mr-1" />
                          Innovative 2027
                        </span>
                      )}
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                              +{service.features.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Pricing & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <Link
                        to={service.href}
                        className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 group"
                      >
                        {service.ctaLabel}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        {service.external && <ExternalLink className="w-4 h-4" />}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our expert team is ready to help you find the perfect solution for your business needs. 
                Get in touch for a personalized consultation and detailed recommendations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-zion-purple">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-center">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing-guide"
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Pricing Guide
                  <Calculator className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
