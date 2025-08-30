import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  TrendingUp, 
  Heart, 
  Truck, 
  Users, 
  Code, 
  FileText, 
  CheckCircle,
  Star,
  Zap,
  Globe,
  Rocket,
  Brain,
  Database,
  Lock,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2026 } from '../data/advancedMicroSaasServices2026';
import { REVOLUTIONARY_SERVICES_2031 } from '../data/revolutionaryServices2031';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [...ADVANCED_MICRO_SAAS_SERVICES_2026, ...REVOLUTIONARY_SERVICES_2031];
  
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Fintech': return <TrendingUp className="w-6 h-6" />;
      case 'Healthcare': return <Heart className="w-6 h-6" />;
      case 'Logistics': return <Truck className="w-6 h-6" />;
      case 'Customer Analytics': return <Users className="w-6 h-6" />;
      case 'DevOps': return <Code className="w-6 h-6" />;
      case 'Content Creation': return <FileText className="w-6 h-6" />;
      case 'Compliance': return <CheckCircle className="w-6 h-6" />;
      case 'Quantum Computing': return <Zap className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'AI Automation': return <Brain className="w-6 h-6" />;
      case 'Blockchain': return <Database className="w-6 h-6" />;
      case 'Sustainability': return <Globe className="w-6 h-6" />;
      case 'Education': return <Star className="w-6 h-6" />;
      case 'Financial Services': return <TrendingUp className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-600 bg-purple-100';
      case 'Cutting-edge': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Services Showcase 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our revolutionary micro SAAS, AI, and IT services that are transforming industries and driving innovation across the globe.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Middletown DE 19709
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'All Services' : category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium text-gray-500">
                      {service.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-blue-600">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Market Price: {service.marketPrice}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI & Delivery */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{service.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{service.estimatedDelivery}</div>
                    <div className="text-xs text-gray-600">Delivery</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Details
                  </button>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Sales
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals and stay ahead of the competition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Visit Website
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
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
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedService.description}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing & Market Info</h3>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {selectedService.currency}{selectedService.price.toLocaleString()}/month
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Market Price: {selectedService.marketPrice}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      ROI: {selectedService.roi}
                    </p>
                    <p className="text-sm text-gray-600">
                      Delivery: {selectedService.estimatedDelivery}
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  {selectedService.technicalSpecs && (
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-medium text-gray-700">Technology: </span>
                        <span className="text-sm text-gray-600">
                          {selectedService.technicalSpecs.technology.join(', ')}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Uptime: </span>
                        <span className="text-sm text-gray-600">
                          {selectedService.technicalSpecs.uptime}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">API Endpoints: </span>
                        <span className="text-sm text-gray-600">
                          {selectedService.technicalSpecs.apiEndpoints}
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {selectedService.contactInfo.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {selectedService.contactInfo.email}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedService.contactInfo.address}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.title}`}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200"
                >
                  Contact Sales
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium text-center hover:bg-gray-200 transition-colors duration-200"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;
