import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Zap,
  Globe,
  Target,
  Building,
  BarChart3,
  Lock,
  Cloud,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Search
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';

const InnovativeNewServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Customer Service', name: 'AI & Customer Service', icon: Users, color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', icon: Network, color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Legal Technology', name: 'AI & Legal Technology', icon: Building, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Financial Technology', name: 'AI & Financial Technology', icon: BarChart3, color: 'from-emerald-500 to-teal-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Target, color: 'from-pink-500 to-rose-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-violet-500 to-purple-500' },
    { id: 'Quantum Technology', name: 'Quantum Technology', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Energy', name: 'AI & Energy', icon: Cloud, color: 'from-orange-500 to-red-500' }
  ];

  // Filter and sort services
  const filteredServices = INNOVATIVE_NEW_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  // Pagination
  const servicesPerPage = 9;
  const totalPages = Math.ceil(sortedServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  // Simulate loading for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, sortBy]);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
          </div>
          <p className="text-cyan-400 text-lg font-medium">Loading Innovative Services...</p>
          <p className="text-gray-400 text-sm mt-2">Discovering cutting-edge solutions</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
            Innovative New Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge micro SAAS solutions, IT services, and AI-powered platforms that transform businesses and drive innovation across industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-500/30">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Innovative</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/30">
              <Rocket className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Future-Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                    : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-gray-500 hover:bg-gray-700/50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentServices.map((service) => (
                  <div
                    key={service.id}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        <getCategoryIcon category={service.category} className="w-3 h-3 mr-1" />
                        {service.category.split('&')[0].trim()}
                      </div>
                    </div>

                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-cyan-400" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        ${service.price.toLocaleString()}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* AI Capabilities */}
                    {service.aiCapabilities && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">AI Capabilities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.aiCapabilities.slice(0, 3).map((capability, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                            >
                              {capability}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.estimatedDelivery}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {service.supportLevel}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                      <button className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-400">
                          Contact: <span className="text-cyan-400">{service.contactInfo.phone}</span>
                        </div>
                        <div className="text-gray-400">
                          Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      const isCurrent = page === currentPage;
                      const isNearCurrent = Math.abs(page - currentPage) <= 2;
                      
                      if (isCurrent || isNearCurrent || page === 1 || page === totalPages) {
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                              isCurrent
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                : 'bg-gray-800/50 border border-gray-600 text-gray-300 hover:bg-gray-700/50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (page === currentPage - 3 || page === currentPage + 3) {
                        return <span key={page} className="px-2 text-gray-500">...</span>;
                      }
                      return null;
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our innovative services are designed to give you a competitive edge in today's rapidly evolving digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeNewServices;