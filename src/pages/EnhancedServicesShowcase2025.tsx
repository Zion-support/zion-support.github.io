import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { enhancedInnovativeMicroSaasServices2025 } from '../data/enhancedInnovativeServices2025';

export default function EnhancedServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const categories = Array.from(new Set(enhancedInnovativeMicroSaasServices2025.map(service => service.category)));

  const filteredServices = enhancedInnovativeMicroSaasServices2025.filter(service =>
    (selectedCategory === 'all' || service.category === selectedCategory) &&
    (service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const toggleServiceExpansion = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Advanced AI & Machine Learning': Brain,
      'Emerging Technology Solutions': Rocket,
      'Industry-Specific AI Solutions': Target,
      'Enterprise Automation Services': Building,
      'Cybersecurity & Compliance': Shield,
      'Data & Analytics Services': BarChart3,
      'Cloud & DevOps Solutions': Cloud,
      'Digital Transformation Services': Zap
    };
    return iconMap[category] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Advanced AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Emerging Technology Solutions': 'from-blue-500 to-cyan-500',
      'Industry-Specific AI Solutions': 'from-green-500 to-emerald-500',
      'Enterprise Automation Services': 'from-orange-500 to-yellow-500',
      'Cybersecurity & Compliance': 'from-red-500 to-pink-500',
      'Data & Analytics Services': 'from-indigo-500 to-purple-500',
      'Cloud & DevOps Solutions': 'from-blue-500 to-indigo-500',
      'Digital Transformation Services': 'from-teal-500 to-green-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              2025 Enhanced
            </span> 
            <br />
            Innovative Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions powered by advanced AI, quantum computing, and emerging technologies. 
            Transform your business with intelligent automation, enhanced security, and data-driven insights.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Phone</span>
                <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Address</span>
                <span className="text-white text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Count and Stats */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                              <div className="text-3xl font-bold text-cyan-400">{enhancedInnovativeMicroSaasServices2025.length}</div>
              <div className="text-gray-400">Total Services</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">{categories.length}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => {
            const IconComponent = getCategoryIcon(service.category);
            const isExpanded = expandedService === service.id;
            
            return (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                                              <span className="text-cyan-400 font-semibold">
                          ${service.price.toLocaleString()}/{service.pricingModel}
                        </span>
                                              <span className="text-gray-400">
                          {service.setupTime}
                        </span>
                                              <span className={`px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300`}>
                          Standard
                        </span>
                    </div>
                  </div>
                </div>

                {/* Category and Tags */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">
                    <span className="text-cyan-400">{service.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Content */}
                <div className="space-y-4">
                  {/* Features Preview */}
                  <div>
                    <h4 className="text-white font-medium mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, featureIdx) => (
                        <div key={featureIdx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div>
                    <h4 className="text-white font-medium mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="w-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors py-2 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show More Details
                      </>
                    )}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-gray-700">
                      {/* Technology Stack */}
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <Code className="w-4 h-4 text-purple-400 mr-2" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Integration Capabilities */}
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <Network className="w-4 h-4 text-blue-400 mr-2" />
                          Integration Capabilities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.integrations.slice(0, 3).map((integration, intIdx) => (
                            <span
                              key={intIdx}
                              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
                            >
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Compliance Standards */}
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <Shield className="w-4 h-4 text-green-400 mr-2" />
                          Compliance Standards
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <Target className="w-4 h-4 text-orange-400 mr-2" />
                          Use Cases
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                            <div key={benefitIdx} className="text-sm text-gray-300 flex items-start">
                              <span className="text-orange-400 mr-2">•</span>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Price Comparison */}
                      <div className="bg-gray-700/30 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                          Market Price Comparison
                        </h4>
                        <div className="text-sm text-gray-300">
                          <div className="flex justify-between items-center mb-2">
                            <span>Our Price:</span>
                            <span className="text-green-400 font-semibold">
                              ${service.price.toLocaleString()}/{service.pricingModel}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Market Average:</span>
                            <span className="text-gray-400">{service.marketPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex space-x-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}