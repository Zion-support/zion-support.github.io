import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Globe, 
  Cpu,
  Building2,
  ShoppingCart,
  Truck,
  GraduationCap,
  Scale,
  Home,
  Factory,
  Heart,
  DollarSign,
  Target,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Play,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { NEXT_GEN_INNOVATIVE_SERVICES } from '../data/nextGenInnovativeServices';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // Combine all services
  const allServices = [...COMPREHENSIVE_SERVICES, ...NEXT_GEN_INNOVATIVE_SERVICES];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-4 h-4" />, count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'AI & Financial Services', name: 'Financial', icon: <DollarSign className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Financial Services').length },
    { id: 'AI & Healthcare', name: 'Healthcare', icon: <Heart className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'AI & Supply Chain', name: 'Supply Chain', icon: <Truck className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Supply Chain').length },
    { id: 'AI & Energy', name: 'Energy', icon: <Zap className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Energy').length },
    { id: 'AI & Legal Tech', name: 'Legal Tech', icon: <Scale className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'AI & Real Estate', name: 'Real Estate', icon: <Home className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Real Estate').length },
    { id: 'AI & Education', name: 'Education', icon: <GraduationCap className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Education').length },
    { id: 'AI & Manufacturing', name: 'Manufacturing', icon: <Factory className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Manufacturing').length },
    { id: 'AI & Retail', name: 'Retail', icon: <ShoppingCart className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Retail').length },
    { id: 'AI & Transportation', name: 'Transportation', icon: <Truck className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Transportation').length },
    { id: 'AI & Human Resources', name: 'HR', icon: <Users className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Human Resources').length },
    { id: 'AI & Marketing', name: 'Marketing', icon: <Target className="w-4 h-4" />, count: allServices.filter(s => s.category === 'AI & Marketing').length },
    { id: 'Blockchain & Web3', name: 'Blockchain', icon: <Cpu className="w-4 h-4" />, count: allServices.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" />, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Internet of Things', name: 'IoT', icon: <Cpu className="w-4 h-4" />, count: allServices.filter(s => s.category === 'Internet of Things').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Financial Services': return <DollarSign className="w-6 h-6" />;
      case 'AI & Healthcare': return <Heart className="w-6 h-6" />;
      case 'AI & Supply Chain': return <Truck className="w-6 h-6" />;
      case 'AI & Energy': return <Zap className="w-6 h-6" />;
      case 'AI & Legal Tech': return <Scale className="w-6 h-6" />;
      case 'AI & Real Estate': return <Home className="w-6 h-6" />;
      case 'AI & Education': return <GraduationCap className="w-6 h-6" />;
      case 'AI & Manufacturing': return <Factory className="w-6 h-6" />;
      case 'AI & Retail': return <ShoppingCart className="w-6 h-6" />;
      case 'AI & Transportation': return <Truck className="w-6 h-6" />;
      case 'AI & Human Resources': return <Users className="w-6 h-6" />;
      case 'AI & Marketing': return <Target className="w-6 h-6" />;
      case 'AI & Machine Learning': return <Brain className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Cpu className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Internet of Things': return <Cpu className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  const totalValue = filteredServices.reduce((sum, service) => sum + service.price, 0);
  const avgPrice = filteredServices.length > 0 ? totalValue / filteredServices.length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive AI Services Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of AI-powered solutions across industries. 
              From healthcare to finance, manufacturing to retail - we have the expertise to transform your business.
            </p>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{allServices.length}</div>
                <div className="text-sm text-gray-600">Total Services</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">${avgPrice.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Avg. Price</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm text-gray-600">Price Range:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">${priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-600">${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
              <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredServices.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'list' ? (
                  // List View
                  <>
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Category</div>
                          <div className="font-semibold text-gray-900">{service.category}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Implementation</div>
                          <div className="font-semibold text-gray-900">{service.implementationTime || service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Support</div>
                          <div className="font-semibold text-gray-900 capitalize">{service.supportLevel}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Tags</div>
                          <div className="font-semibold text-gray-900">{service.tags.slice(0, 2).join(', ')}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 border-l border-gray-100 flex flex-col justify-center gap-3">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <BarChart3 className="w-4 h-4" />
                        Details
                      </button>
                      
                      <button
                        onClick={() => window.open(service.websiteUrl || 'https://ziontechgroup.com', '_blank')}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Website
                      </button>
                    </div>
                  </>
                ) : (
                  // Grid View
                  <>
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-600" />
                            Key Benefits
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">Implementation</div>
                            <div className="font-semibold text-gray-900">{service.implementationTime || service.estimatedDelivery}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Support</div>
                            <div className="font-semibold text-gray-900 capitalize">{service.supportLevel}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <BarChart3 className="w-4 h-4" />
                          View Details
                        </button>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => window.open(service.websiteUrl || 'https://ziontechgroup.com', '_blank')}
                            className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Website
                          </button>
                          {service.demoUrl && (
                            <button
                              onClick={() => window.open(service.demoUrl, '_blank')}
                              className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                              <Play className="w-4 h-4" />
                              Demo
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search, category filter, or price range.</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our AI experts are ready to help you implement these cutting-edge solutions. 
              Get in touch for a personalized consultation and custom implementation plan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">ziontechgroup.com</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=AI Services Consultation'}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center gap-2 mx-auto"
              >
                <Mail className="w-5 h-5" />
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h3>
                  <ul className="space-y-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">${selectedService.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Monthly</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{selectedService.marketSize || 'N/A'}</div>
                    <div className="text-sm text-gray-600">Market Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{selectedService.roi || 'N/A'}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{selectedService.implementationTime || selectedService.estimatedDelivery}</div>
                    <div className="text-sm text-gray-600">Implementation</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open(selectedService.websiteUrl || 'https://ziontechgroup.com', '_blank')}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Website
                </button>
                {selectedService.demoUrl && (
                  <button
                    onClick={() => window.open(selectedService.demoUrl, '_blank')}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    View Demo
                  </button>
                )}
                <button
                  onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.title}`}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ComprehensiveServicesShowcase;