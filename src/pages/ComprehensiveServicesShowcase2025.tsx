import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Zap, 
  Leaf, 
  Star, 
  Search, 
  Filter,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Globe,
  TrendingUp,
  Users,
  Award,
  Rocket
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_EXPANSION_2025, SERVICE_CATEGORIES, FEATURED_SERVICES } from '@/data/comprehensiveServicesExpansion2025';
import { Button } from '@/components/ui/button';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_SERVICES_EXPANSION_2025;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price filter
    if (priceFilter === 'Budget') {
      filtered = filtered.filter(service => service.price < 2000);
    } else if (priceFilter === 'Mid-range') {
      filtered = filtered.filter(service => service.price >= 2000 && service.price < 5000);
    } else if (priceFilter === 'Enterprise') {
      filtered = filtered.filter(service => service.price >= 5000);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, searchQuery, priceFilter, sortBy]);

  const categories = ['All', ...Object.keys(SERVICE_CATEGORIES)];
  const priceRanges = ['All', 'Budget', 'Mid-range', 'Enterprise'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & ML': <Brain className="w-5 h-5" />,
      'Cloud & Infrastructure': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'IoT & Smart Cities': <Cpu className="w-5 h-5" />,
      'Blockchain & Web3': <Zap className="w-5 h-5" />,
      'Healthcare & Biotechnology': <Leaf className="w-5 h-5" />,
      'Financial Technology': <DollarSign className="w-5 h-5" />,
      'Education & Learning': <Star className="w-5 h-5" />,
      'Manufacturing & Industry 4.0': <Rocket className="w-5 h-5" />,
      'Energy & Sustainability': <Leaf className="w-5 h-5" />
    };
    return iconMap[category] || <Star className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase
              <span className="block text-zion-cyan">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS, IT, and AI services designed to transform your business and drive innovation across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>500+ Services</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-purple/20 text-zion-purple px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>Industry Leading</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-blue/20 text-zion-blue px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5" />
                <span>Future Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate/50 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 rotate-90" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 appearance-none"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 rotate-90" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 appearance-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {selectedCategory === 'All' && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-zion-slate-light text-lg">
                Our most popular and innovative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_SERVICES.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-zion-slate/30 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {getCategoryIcon(service.category)}
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="text-zion-cyan font-bold text-xl">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-white">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-zion-slate-light text-lg">
              {filteredServices.length} services found
            </p>
          </motion.div>

          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-zion-slate-light text-xl mb-4">
                No services found matching your criteria
              </div>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setPriceFilter('All');
                  setSortBy('featured');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-zion-slate/30 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(service.category)}
                      <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                    </div>
                    {service.featured && (
                      <span className="px-2 py-1 bg-zion-cyan text-white text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-cyan font-bold text-xl">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.marketPrice && (
                        <div className="text-zion-slate-light text-sm line-through">
                          {service.currency}{service.marketPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-white group-hover:bg-zion-cyan/90 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-xl rounded-2xl p-12 border border-zion-cyan/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our experts to discuss how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 text-lg">
                Contact Sales
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
