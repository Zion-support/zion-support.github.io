import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Building, Target, Cpu, Shield, 
  Check, Phone, Mail, MapPin,
  TrendingUp, Zap, Globe
} from 'lucide-react';

// Import our new service data
import { advancedBusinessIntelligenceServices2025 } from '../data/2025-advanced-business-intelligence-services';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices2025 } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

const ComprehensiveServicesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    ...advancedBusinessIntelligenceServices2025,
    ...advancedAIAutomationServices2025,
    ...innovative2025ITInfrastructureServices,
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025
  ];
// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (typeof service.price === 'string') return service.price;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  return service.keyFeatures || service.features || [];
};

// Helper function to get service setup time
const getServiceSetupTime = (service: any) => {
  if (service.setupTime) return service.setupTime;
  if (service.pricing?.setupTime) return service.pricing.setupTime;
  if (service.price?.setupTime) return service.price.setupTime;
  return 'N/A';
};

// Helper function to get service trial days
const getServiceTrialDays = (service: any) => {
  if (service.trialDays) return service.trialDays;
  if (service.pricing?.trialDays) return service.pricing.trialDays;
  if (service.price?.trialDays) return service.price.trialDays;
  return 'N/A';
};

// All services combined
const allServices = [
  ...advancedAIMLServices,
  ...advancedCybersecurityServices,
      ...advancedCloudDevOpsServices2025,
  ...industrySpecificSolutions,
  ...emergingTechnologyServices
];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className=&quot;w-5 h-5&quot; /> },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <TrendingUp className=&quot;w-5 h-5&quot; /> },
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className=&quot;w-5 h-5&quot; /> },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Building className=&quot;w-5 h-5&quot; /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className=&quot;w-5 h-5&quot; /> },
    { id: 'ai-services', name: 'AI Services', icon: <Cpu className=&quot;w-5 h-5&quot; /> }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics');
        if (activeTab === 'ai-automation') return service.category?.includes('AI Automation');
        if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure');
        if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS');
        if (activeTab === 'ai-services') return service.category?.includes('AI Services');
        return true;
      });

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100&quot;>
      <SEO 
        title=&quot;2025 Comprehensive Services Showcase - Zion Tech Group&quot;
        description=&quot;Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions.&quot;
        keywords={[&quot;micro SAAS&quot;, &quot;IT services&quot;, &quot;AI services&quot;, &quot;business intelligence&quot;, &quot;automation&quot;, &quot;cloud infrastructure&quot;]}
      />

      {/* Hero Section */}
      <section className=&quot;relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white&quot;>
        <div className=&quot;absolute inset-0 bg-black/20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center&quot;
          >
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              2025 Comprehensive Services Showcase
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100&quot;>
              Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 text-sm&quot;>
              <span className=&quot;bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30&quot;>
                {allServices.length}+ Services
              </span>
              <span className=&quot;bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30&quot;>
                AI-Powered Solutions
              </span>
              <span className=&quot;bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30&quot;>
                Enterprise Ready
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-4&quot;>
            <div className=&quot;text-center md:text-left&quot;>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Ready to Transform Your Business?</h3>
              <p className=&quot;text-blue-100&quot;>Get in touch with our experts today</p>
            </div>
            <div className=&quot;flex flex-col sm:flex-row items-center gap-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <span>+1 302 464 0950</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <Mail className=&quot;w-4 h-4&quot; />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <MapPin className=&quot;w-4 h-4&quot; />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className=&quot;py-12 bg-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-2&quot;>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;py-16 bg-gray-50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100&quot;
              >
                {/* Service Header */}
                <div className=&quot;p-6 border-b border-gray-100&quot;>
                  <div className=&quot;flex items-start justify-between mb-4&quot;>
                    <div className=&quot;flex-1&quot;>
                      <h3 className=&quot;text-xl font-bold text-gray-900 mb-2&quot;>
                        {service.name}
                      </h3>
                      <p className=&quot;text-gray-600 text-sm mb-3&quot;>
                        {service.tagline}
                      </p>
                      <div className=&quot;flex items-center gap-2 text-sm text-gray-500&quot;>
                        <span className=&quot;px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium&quot;>
                          {service.category}
                        </span>
                        <span className=&quot;px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium&quot;>
                          Micro SAAS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className=&quot;p-6&quot;>
                  <p className=&quot;text-gray-700 mb-4 line-clamp-3&quot;>
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-900 mb-2&quot;>Pricing</h4>
                    <div className=&quot;space-y-1&quot;>
                      <div className=&quot;flex justify-between text-sm&quot;>
                        <span className=&quot;text-gray-600&quot;>Starting at:</span>
                        <span className=&quot;font-semibold text-green-600&quot;>
                          {service.pricing ? service.pricing.starter : `${(service as any).price}${(service as any).period}`}
                        </span>
                      </div>
                      <div className=&quot;text-xs text-gray-500&quot;>
                        {(service as any).trialDays ? `${(service as any).trialDays} days free trial` : ''} • {(service as any).setupTime ? `${(service as any).setupTime} setup` : 'Custom setup'}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-900 mb-2&quot;>Key Features</h4>
                    <div className=&quot;grid grid-cols-2 gap-1&quot;>
                      {service.features?.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2 text-sm text-gray-600&quot;>
                          <Check className=&quot;w-3 h-3 text-green-500 flex-shrink-0&quot; />
                          <span className=&quot;truncate&quot;>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className=&quot;mb-4 text-sm&quot;>
                    <div className=&quot;flex justify-between mb-1&quot;>
                      <span className=&quot;text-gray-600&quot;>Market Size:</span>
                      <span className=&quot;font-semibold text-gray-900&quot;>{service.marketSize}</span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-600&quot;>Target Audience:</span>
                      <span className=&quot;font-semibold text-gray-900&quot;>{service.targetAudience}</span>
                    </div>
                  </div>



                  {/* CTA Button */}
                  <div className=&quot;flex flex-col gap-2&quot;>
                    <a
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                      className=&quot;w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2&quot;
                    >
                      <Mail className=&quot;w-4 h-4&quot; />
                      Get Started
                    </Link>
                    <a
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      className=&quot;w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2&quot;
                    >
                      <Phone className=&quot;w-4 h-4&quot; />
                      Call Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Display */}
          <AnimatePresence mode=&quot;wait&quot;>
            {viewMode === 'grid' ? (
              <motion.div 
                key=&quot;grid&quot;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100&quot;
                  >
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <span className=&quot;text-4xl&quot;>{service.icon}</span>
                        {service.popular && (
                          <span className=&quot;bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold&quot;>
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className=&quot;text-xl font-bold mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-blue-100 text-sm&quot;>{service.tagline}</p>
                      
                      {/* Price */}
                      <div className=&quot;mt-4&quot;>
                        <span className=&quot;text-2xl font-bold&quot;>
                          {getServicePricing(service)}
                        </span>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className=&quot;p-6&quot;>
                      <p className=&quot;text-gray-600 mb-4 line-clamp-3&quot;>{service.description}</p>
                      
                      {/* Price */}
                      <div className=&quot;mb-4&quot;>
                        <span className=&quot;text-3xl font-bold text-gray-900&quot;>
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                        </span>
                        <span className=&quot;text-gray-500&quot;>
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>
                      </div>

                      {/* Features */}
                      <div className=&quot;mb-6&quot;>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (
                            <li key={idx} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <Check className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category Badge */}
                      <div className=&quot;mb-4&quot;>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className=&quot;ml-1&quot;>{service.category}</span>
                        </span>
                      </div>

                      {/* Service Info */}
                      <div className=&quot;grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600&quot;>
                        <div>
                          <span className=&quot;font-medium&quot;>Setup:</span> {getServiceSetupTime(service)}
                        </div>
                        <div>
                          <span className=&quot;font-medium&quot;>Trial:</span> {getServiceTrialDays(service)} days
                        </div>
                      </div>

                      {/* ROI and Popularity */}
                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;text-sm&quot;>
                          <span className=&quot;text-gray-500&quot;>Expected ROI:</span>
                          <span className=&quot;text-green-600 font-semibold ml-1&quot;>
                            {service.roi.split(' ')[0]} ROI
                          </span>
                        </div>
                        {service.popular && (
                          <div className=&quot;flex items-center gap-1 text-yellow-600&quot;>
                            <Star className=&quot;w-4 h-4 fill-current&quot; />
                            <span className=&quot;text-sm font-medium&quot;>Popular</span>
                          </div>
                        </div>

                        {/* Price and Features */}
                        <div className=&quot;lg:w-1/3&quot;>
                          <div className=&quot;text-right mb-4&quot;>
                            <span className=&quot;text-3xl font-bold text-gray-900&quot;>
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            </span>
                            <span className=&quot;text-gray-500&quot;>
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>
                          
                          <div className=&quot;mb-4&quot;>
                            <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Features:</h4>
                            <ul className=&quot;space-y-1 text-sm text-gray-600&quot;>
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className=&quot;flex items-center&quot;>
                                  <Check className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Category and Action */}
                          <div className=&quot;flex flex-col items-end space-y-3&quot;>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className=&quot;ml-1&quot;>{service.category}</span>
                            </span>
                            
                            <a
                              href={service.link}
                              target=&quot;_blank&quot;
                              rel=&quot;noopener noreferrer&quot;
                              className=&quot;bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center&quot;
                            >
                              Learn More
                              <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-12&quot;>
              <div className=&quot;text-gray-400 mb-4&quot;>
                <Search className=&quot;w-16 h-16 mx-auto&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>No services found</h3>
              <p className=&quot;text-gray-600&quot;>Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Why Choose Zion Tech Group?
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=&quot;text-center p-6&quot;
            >
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <Brain className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>AI-Powered Innovation</h3>
              <p className=&quot;text-gray-600&quot;>
                Cutting-edge AI and machine learning solutions that deliver real business value
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=&quot;text-center p-6&quot;
            >
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <Shield className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Enterprise Security</h3>
              <p className=&quot;text-gray-600&quot;>
                Bank-grade security and compliance for mission-critical business applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-center p-6&quot;
            >
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <Globe className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Global Scale</h3>
              <p className=&quot;text-gray-600&quot;>
                Cloud-native solutions that scale globally with enterprise-grade reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-8 max-w-3xl mx-auto&quot;>
            Let's discuss how our innovative services can help you achieve your business goals
          </p>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-8&quot;>
            <div className=&quot;text-center&quot;>
              <Phone className=&quot;w-8 h-8 mx-auto mb-4 text-blue-300&quot; />
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Call Us</h3>
              <p className=&quot;text-blue-100&quot;>+1 302 464 0950</p>
            </div>
            <div className=&quot;text-center&quot;>
              <Mail className=&quot;w-8 h-8 mx-auto mb-4 text-blue-300&quot; />
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Email Us</h3>
              <p className=&quot;text-blue-100&quot;>kleber@ziontechgroup.com</p>
            </div>
            <div className=&quot;text-center&quot;>
              <MapPin className=&quot;w-8 h-8 mx-auto mb-4 text-blue-300&quot; />
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Visit Us</h3>
              <p className=&quot;text-blue-100&quot;>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <a
              href=&quot;mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation&quot;
              className=&quot;bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2&quot;
            >
              <Mail className=&quot;w-5 h-5&quot; />
              Start Consultation
            </Link>
            <a
              href=&quot;https://ziontechgroup.com&quot;
              className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2&quot;
            >
              <Globe className=&quot;w-5 h-5&quot; />
              Visit Website
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;