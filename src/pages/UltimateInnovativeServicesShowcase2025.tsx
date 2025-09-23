import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Clock,
  Shield as ShieldIcon
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/ultimateInnovativeServices2025';

export default function UltimateInnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('innovation');

  const filteredServices = useMemo(() => {
    let filtered = ULTIMATE_INNOVATIVE_SERVICES_2025;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(service => service.subcategory === selectedSubcategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'innovation':
        filtered = [...filtered].sort((a, b) => {
          const innovationLevels = { 'Revolutionary': 4, 'Breakthrough': 3, 'Cutting-edge': 2, 'Advanced': 1, 'Emerging': 0 };
          return innovationLevels[b.innovationLevel as keyof typeof innovationLevels] - innovationLevels[a.innovationLevel as keyof typeof innovationLevels];
        });
        break;
      case 'roi':
        filtered = [...filtered].sort((a, b) => {
          const aROI = parseInt(a.roi.split('%')[0]);
          const bROI = parseInt(b.roi.split('%')[0]);
          return bROI - aROI;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSubcategory, searchTerm, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Brain className="w-6 h-6" />;
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />;
      case 'Blockchain': return <Network className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Smartphone className="w-6 h-6" />;
      case 'Metaverse & VR': return <Globe className="w-6 h-6" />;
      case 'Robotics & Automation': return <Rocket className="w-6 h-6" />;
      case 'Biotechnology': return <Database className="w-6 h-6" />;
      case 'Space Technology': return <Zap className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-red-500 bg-red-50 border-red-200';
      case 'Breakthrough': return 'text-purple-500 bg-purple-50 border-purple-200';
      case 'Cutting-edge': return 'text-blue-500 bg-blue-50 border-blue-200';
      case 'Advanced': return 'text-green-500 bg-green-50 border-green-200';
      case 'Emerging': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Ultimate Innovative Services 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most cutting-edge, revolutionary micro SAAS services that will transform your business and give you a competitive advantage in the future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              {SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Subcategory Filter */}
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Subcategories</option>
              {SERVICE_SUBCATEGORIES.map(subcategory => (
                <option key={subcategory} value={subcategory}>{subcategory}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="innovation">Sort by Innovation</option>
              <option value="roi">Sort by ROI</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    <span className="text-sm font-medium text-gray-500">{service.category}</span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getInnovationColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${service.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">/{service.pricingModel.split(' ')[0]}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Market Price</div>
                    <div className="text-sm font-semibold text-gray-700">{service.marketPrice}</div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-800">ROI: {service.roi}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technical Specs</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">API Endpoints:</span>
                        <span className="font-medium ml-1">{service.technicalSpecs.apiEndpoints}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Uptime:</span>
                        <span className="font-medium ml-1">{service.technicalSpecs.uptime}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">
              No services found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSearchTerm('');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss how these innovative services can revolutionize your operations and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-lg">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-lg">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Middletown, DE</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}