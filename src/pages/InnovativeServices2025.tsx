import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Cpu, 
  Lock,
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Target,
  Award
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, InnovativeService } from '../data/innovativeServices2025';

const InnovativeServices2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<InnovativeService | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_SERVICES_2025.length },
    { id: 'AI Services', name: 'AI Services', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Services').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS').length },
    { id: 'IT Services', name: 'IT Services', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Services', name: 'Cloud Services', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cloud Services').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Data Analytics').length },
    { id: 'IoT', name: 'IoT', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IoT').length },
    { id: 'Blockchain', name: 'Blockchain', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Blockchain').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Quantum Computing').length }
  ];

  const innovationLevels = [
    { id: 'all', name: 'All Levels' },
    { id: 'cutting-edge', name: 'Cutting-Edge' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'standard', name: 'Standard' },
    { id: 'emerging', name: 'Emerging' }
  ];

  const filteredServices = useMemo(() => {
    return INNOVATIVE_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovationLevel;
    });
  }, [searchQuery, selectedCategory, selectedInnovationLevel]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return <Cpu className="w-5 h-5" />;
      case 'Micro SaaS': return <Zap className="w-5 h-5" />;
      case 'IT Services': return <Database className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud Services': return <Globe className="w-5 h-5" />;
      case 'Data Analytics': return <TrendingUp className="w-5 h-5" />;
      case 'IoT': return <Target className="w-5 h-5" />;
      case 'Blockchain': return <Lock className="w-5 h-5" />;
      case 'Quantum Computing': return <Award className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'cutting-edge': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard': return 'bg-green-100 text-green-800 border-green-200';
      case 'emerging': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-yellow-100 text-yellow-800';
      case 'coming-soon': return 'bg-blue-100 text-blue-800';
      case 'enterprise-only': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') {
      return `${currency}${price.toLocaleString()}/month`;
    } else if (model === 'yearly') {
      return `${currency}${price.toLocaleString()}/year`;
    } else if (model === 'project') {
      return `${currency}${price.toLocaleString()}/project`;
    } else if (model === 'per-user') {
      return `${currency}${price.toLocaleString()}/user`;
    } else if (model === 'pay-per-use') {
      return `${currency}${price.toLocaleString()}/use`;
    }
    return `${currency}${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative Technology Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover our cutting-edge portfolio of AI, Micro SaaS, IT, and emerging technology solutions 
              designed to transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="lg:w-48">
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {innovationLevels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium text-gray-600">{service.category}</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPrice(service.price, service.currency, service.pricingModel)}
                  </div>
                  <div className="text-sm text-gray-500">
                    ROI: {service.roi}
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.estimatedDelivery}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {service.supportLevel}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Learn More
                  </button>
                  <Link
                    to="/contact"
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {getCategoryIcon(selectedService.category)}
                    <span className="text-sm font-medium text-gray-600">{selectedService.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getInnovationLevelColor(selectedService.innovationLevel)}`}>
                      {selectedService.innovationLevel}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 mb-6">{selectedService.description}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {formatPrice(selectedService.price, selectedService.currency, selectedService.pricingModel)}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Market Price: {selectedService.marketPrice}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Expected ROI: {selectedService.roi}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                      <ul className="space-y-1">
                        {selectedService.useCases.map((useCase, index) => (
                          <li key={index} className="text-sm text-gray-600">• {useCase}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Target Audience</h4>
                      <ul className="space-y-1">
                        {selectedService.targetAudience.map((audience, index) => (
                          <li key={index} className="text-sm text-gray-600">• {audience}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery Timeline</h4>
                      <p className="text-sm text-gray-600">{selectedService.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/pricing"
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss how our innovative services can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices2025;