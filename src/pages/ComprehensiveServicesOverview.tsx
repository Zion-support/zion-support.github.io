import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';

// Import service data
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/comprehensiveServices2025';
import { comprehensiveServices2025 } from '../data/comprehensiveServices2025';
import { innovativeMicroSaasServices2025 } from '../data/innovativeMicroSaasServices2025';
import { emergingTechServices2025 } from '../data/emergingTechServices2025';

const ComprehensiveServicesOverview = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu },
    { id: 'iot', name: 'IoT & Edge', icon: Network },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Lock },
    { id: 'enterprise', name: 'Enterprise IT', icon: Server },
    { id: 'mobile', name: 'Mobile & Web', icon: Code }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Pricing' },
    { id: 'freemium', name: 'Freemium' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'one-time', name: 'One-time' },
    { id: 'custom', name: 'Custom' }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handlePricingSelect = (pricingId: string) => {
    setSelectedPricing(pricingId);
  };

  const getAllServices = () => {
    let services = [];
    
    // Combine all service data
    if (enhancedMicroSaasServices2025) services.push(...enhancedMicroSaasServices2025);
    if (enhancedITServices2025) services.push(...enhancedITServices2025);
    if (enhancedAIServices2025) services.push(...enhancedAIServices2025);
    if (comprehensiveServices2025) services.push(...comprehensiveServices2025);
    if (innovativeMicroSaasServices2025) services.push(...innovativeMicroSaasServices2025);
    if (emergingTechServices2025) services.push(...emergingTechServices2025);

    return services;
  };

  const ALL_SERVICES = getAllServices();

  const filteredServices = () => {
    let services = ALL_SERVICES;

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => 
        service.category?.toLowerCase().includes(selectedCategory) ||
        service.tags?.some(tag => tag.toLowerCase().includes(selectedCategory))
      );
    }

    // Filter by pricing
    if (selectedPricing !== 'all') {
      services = services.filter(service => {
        if (selectedPricing === 'freemium') return service.pricing?.basic === 0;
        if (selectedPricing === 'monthly') return service.pricing?.basic > 0;
        if (selectedPricing === 'one-time') return service.pricing?.basic > 100;
        return true;
      });
    }

    // Filter by search term
    if (searchQuery) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return services.slice(0, 100); // Limit to first 100 services
  };

  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
    }
    return service.pricing?.basic || 0;
  };

  const getServiceCurrency = (service: any) => {
    if (typeof service.price === 'number') {
      return service.currency || '$';
    }
    return service.pricing?.currency || '$';
  };

  const getServicePricingModel = (service: any) => {
    if (typeof service.price === 'number') {
      return service.pricingModel || 'monthly';
    }
    return service.pricing?.pricingModel || 'monthly';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Complete Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Comprehensive Services Overview
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed">
              Discover our complete portfolio of AI-powered services, IT solutions, and innovative micro SAAS platforms designed to transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 text-zion-purple" />
                <span className="text-zion-purple text-sm font-medium">{ALL_SERVICES.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-zion-cyan" />
                <span className="text-zion-cyan text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-zion-blue" />
                <span className="text-zion-blue text-sm font-medium">Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-zion-cyan focus:outline-none transition-colors"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Category Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-gray-700 text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-zion-cyan focus:outline-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-gray-700 text-sm font-medium mb-2">Pricing Model</label>
                <select
                  value={selectedPricing}
                  onChange={(e) => handlePricingSelect(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-zion-cyan focus:outline-none"
                >
                  {pricingModels.map(model => (
                    <option key={model.id} value={model.id}>{model.name}</option>
                  ))}
                </select>
              </div>

              {/* Filter Toggle */}
              <div className="flex items-end">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>
            </div>

            {/* Additional Filters */}
            {showFilters && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Price Range</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-zion-cyan focus:outline-none"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-zion-cyan focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Support Level</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-zion-cyan focus:outline-none">
                      <option value="">All Levels</option>
                      <option value="basic">Basic</option>
                      <option value="premium">Premium</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Deployment Time</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-zion-cyan focus:outline-none">
                      <option value="">Any Time</option>
                      <option value="instant">Instant</option>
                      <option value="24h">24 Hours</option>
                      <option value="1week">1 Week</option>
                      <option value="1month">1 Month</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Services
            </h2>
            <p className="text-xl text-gray-600">
              Showing {filteredServices().length} of {ALL_SERVICES.length} total services
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices().map((service, index) => (
              <div
                key={service.id || index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-cyan rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-zion-blue transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500">{service.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.8/5</span>
                    </div>
                    <span className="text-2xl font-bold text-zion-blue">
                      ${getServicePrice(service)}/{getServicePricingModel(service)}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.id || service.name?.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-zion-blue hover:text-zion-blue-dark font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredServices().length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let our team of experts help you implement the right technology solutions 
            to drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview;