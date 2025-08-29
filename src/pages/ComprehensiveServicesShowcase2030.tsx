import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Rocket,
  Target,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  COMPREHENSIVE_SERVICES_INDEX_2030, 
  SERVICE_CATEGORIES_2030, 
  SERVICE_STATISTICS_2030,
  zionContact,
  searchServices,
  filterServicesByCategory,
  filterServicesByType,
  getFeaturedServices,
  getTrendingServices
} from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesShowcase2030() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'Micro SAAS' | 'IT Infrastructure' | 'AI Services'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'innovation' | 'marketSize'>('innovation');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const [filteredServices, setFilteredServices] = useState(COMPREHENSIVE_SERVICES_INDEX_2030);
  const [featuredServices] = useState(getFeaturedServices());
  const [trendingServices] = useState(getTrendingServices());

  useEffect(() => {
    let services = COMPREHENSIVE_SERVICES_INDEX_2030;

    // Apply search filter
    if (searchTerm) {
      services = searchServices(searchTerm, services);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      services = filterServicesByCategory(selectedCategory, services);
    }

    // Apply type filter
    if (selectedType !== 'all') {
      services = filterServicesByType(selectedType, services);
    }

    // Apply sorting
    services = [...services].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          const aPrice = 'price' in a ? a.price : ('projectRate' in a ? a.projectRate : 0);
          const bPrice = 'price' in b ? b.price : ('projectRate' in b ? b.projectRate : 0);
          return aPrice - bPrice;
        case 'innovation':
          const levelOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Industry-leading': 1, 'Advanced': 0 };
          const aLevel = levelOrder[a.innovationLevel as keyof typeof levelOrder] || 0;
          const bLevel = levelOrder[b.innovationLevel as keyof typeof levelOrder] || 0;
          return bLevel - aLevel;
        case 'marketSize':
          const aMarket = parseFloat(a.marketSize.replace(/[^0-9.]/g, ''));
          const bMarket = parseFloat(b.marketSize.replace(/[^0-9.]/g, ''));
          return bMarket - aMarket;
        default:
          return 0;
      }
    });

    setFilteredServices(services);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedType, sortBy]);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Research': <Brain className="w-6 h-6" />,
      'AI & Healthcare': <Shield className="w-6 h-6" />,
      'AI & FinTech': <DollarSign className="w-6 h-6" />,
      'AI & Autonomous Systems': <Rocket className="w-6 h-6" />,
      'AI & Environmental Tech': <Globe className="w-6 h-6" />,
      'AI & Content Creation': <Target className="w-6 h-6" />,
      'AI & Cybersecurity': <Shield className="w-6 h-6" />,
      'AI & Operations': <Database className="w-6 h-6" />,
      'AI & Customer Experience': <Users className="w-6 h-6" />,
      'AI & Manufacturing': <Database className="w-6 h-6" />,
      'Blockchain & Web3': <Globe className="w-6 h-6" />,
      'AI & Development': <Code className="w-6 h-6" />,
      'AI & Content': <Target className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'AI & Green Tech': <Globe className="w-6 h-6" />,
      'AI & Legal Tech': <Shield className="w-6 h-6" />,
      'AI & Customer Support': <Users className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'Cybersecurity & Networking': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'Edge Computing & IoT': <Database className="w-6 h-6" />,
      'Data Center & Automation': <Database className="w-6 h-6" />,
      'Quantum Computing & Networking': <Zap className="w-6 h-6" />,
      'Sustainability & Green Tech': <Globe className="w-6 h-6" />,
      '5G & Telecommunications': <Globe className="w-6 h-6" />,
      'Hyperconvergence & Virtualization': <Database className="w-6 h-6" />,
      'Blockchain & Distributed Ledger': <Globe className="w-6 h-6" />,
    };
    return iconMap[category] || <Database className="w-6 h-6" />;
  };

  const getInnovationLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Revolutionary': 'from-purple-600 to-pink-600',
      'Cutting-edge': 'from-blue-600 to-cyan-600',
      'Industry-leading': 'from-green-600 to-emerald-600',
      'Advanced': 'from-orange-600 to-red-600'
    };
    return colorMap[level] || 'from-gray-600 to-slate-600';
  };

  const getServiceTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Micro SAAS': 'bg-blue-100 text-blue-800',
      'IT Infrastructure': 'bg-green-100 text-green-800',
      'AI Services': 'bg-purple-100 text-purple-800'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  const formatPrice = (service: any) => {
    if ('price' in service) {
      return `$${service.price.toLocaleString()}/month`;
    }
    if ('projectRate' in service) {
      return `$${service.projectRate.toLocaleString()}/project`;
    }
    if ('hourlyRate' in service) {
      return `$${service.hourlyRate}/hour`;
    }
    return 'Contact for pricing';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our complete portfolio of innovative micro SAAS, IT infrastructure, and AI services for 2030. Cutting-edge solutions with proven ROI and market-leading innovation."
        keywords="innovative services 2030, micro SAAS, IT infrastructure, AI services, Zion Tech Group, cutting-edge technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Comprehensive Services Showcase
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  2030
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative micro SAAS, IT infrastructure, and AI services. 
                Each solution is designed to deliver exceptional ROI, cutting-edge innovation, and transformative business outcomes.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">{SERVICE_STATISTICS_2030.totalServices}</div>
                  <div className="text-sm text-gray-600">Total Services</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600">{SERVICE_STATISTICS_2030.categories}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">{SERVICE_STATISTICS_2030.totalMarketSize}</div>
                  <div className="text-sm text-gray-600">Market Size</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">{SERVICE_STATISTICS_2030.averageROI}</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
              <p className="text-lg text-gray-600">Our most innovative and high-impact solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`p-6 bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      {getServiceIcon(service.category)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getServiceTypeColor(service.serviceType)}`}>
                        {service.serviceType}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-sm opacity-90">{service.category}</p>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{formatPrice(service)}</span>
                      <span className="text-sm text-gray-500">{service.innovationLevel}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Market: {service.marketSize}</span>
                      <span>Setup: {'setupTime' in service ? service.setupTime : 'Contact us'}</span>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Services</h2>
              <p className="text-lg text-gray-600">Services with the highest growth potential and market demand</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:border-blue-300 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Trending</span>
                    </div>
                    {getServiceIcon(service.category)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.category}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Growth Rate:</span>
                      <span className="font-medium text-green-600">{'growthRate' in service ? service.growthRate : 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Market Size:</span>
                      <span className="font-medium">{service.marketSize}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Explore Trend
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES_2030.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                {/* Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="Micro SAAS">Micro SAAS</option>
                  <option value="IT Infrastructure">IT Infrastructure</option>
                  <option value="AI Services">AI Services</option>
                </select>
                
                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="marketSize">Sort by Market Size</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Services</h2>
              <p className="text-lg text-gray-600">
                Showing {filteredServices.length} of {COMPREHENSIVE_SERVICES_INDEX_2030.length} services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className={`p-6 bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      {getServiceIcon(service.category)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getServiceTypeColor(service.serviceType)}`}>
                        {service.serviceType}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-sm opacity-90">{service.category}</p>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{formatPrice(service)}</span>
                        <span className="text-sm text-gray-500">{service.innovationLevel}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Market: {service.marketSize}</span>
                        <span>Setup: {'setupTime' in service ? service.setupTime : 'Contact us'}</span>
                      </div>
                      
                      {'roi' in service && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">ROI:</span>
                          <span className="font-medium text-green-600">{service.roi}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Learn More
                      </button>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
                          Contact Sales
                        </button>
                        <button className="flex-1 bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm">
                          Request Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg border ${
                        currentPage === page
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our innovative services can drive your success in 2030 and beyond.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>{zionContact.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>{zionContact.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span>{zionContact.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${zionContact.phone}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Call Now
              </a>
              <a
                href={`mailto:${zionContact.email}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper component for code icon
function Code({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}