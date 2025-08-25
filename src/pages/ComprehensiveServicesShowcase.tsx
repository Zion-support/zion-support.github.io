import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  Factory, 
  Heart, 
  TrendingUp, 
  Building2,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

// Import all the new service data
import { advancedCybersecuritySolutions } from '../../data/2026-advanced-cybersecurity-solutions';
import { advancedAIAutomationServices } from '../../data/2026-advanced-ai-automation-services';
import { emergingTechnologyBreakthroughs } from '../../data/2026-emerging-technology-breakthroughs';
import { specializedIndustrySolutions } from '../../data/2026-specialized-industry-solutions-v2';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services
  const allServices: Service[] = [
    ...advancedCybersecuritySolutions,
    ...advancedAIAutomationServices,
    ...emergingTechnologyBreakthroughs,
    ...specializedIndustrySolutions
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: advancedCybersecuritySolutions.length },
    { id: 'ai-automation', name: 'AI Automation', icon: Brain, count: advancedAIAutomationServices.length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Zap, count: emergingTechnologyBreakthroughs.length },
    { id: 'industry', name: 'Industry Solutions', icon: Factory, count: specializedIndustrySolutions.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'cybersecurity' && advancedCybersecuritySolutions.includes(service as any)) ||
      (selectedCategory === 'ai-automation' && advancedAIAutomationServices.includes(service as any)) ||
      (selectedCategory === 'emerging-tech' && emergingTechnologyBreakthroughs.includes(service as any)) ||
      (selectedCategory === 'industry' && specializedIndustrySolutions.includes(service as any));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Revolutionary AI, Cybersecurity, and Emerging Technology Solutions
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI innovations that are transforming industries worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-blue-100">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-100">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-100">
                <MapPin className="w-5 h-5" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered services, cybersecurity solutions, and emerging technology breakthroughs 
            are designed to give your business a competitive edge in the digital age.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services, technologies, or use cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  {service.popular && (
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-blue-100 text-sm">{service.tagline}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                  <div className="text-gray-500">{service.period}</div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Information */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Market Size:</span>
                      <div className="font-semibold text-gray-900">{service.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Growth Rate:</span>
                      <div className="font-semibold text-green-600">{service.growthRate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Customers:</span>
                      <div className="font-semibold text-gray-900">{service.customers}+</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Rating:</span>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900 mr-1">{service.rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI and Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">ROI & Benefits</h4>
                  <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    {service.roi}
                  </p>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{service.technology.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Sales</span>
                  </a>
                </div>

                {/* Contact Information */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{service.contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 text-lg mb-4">
              No services found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
            </button>
          </motion.div>
        )}
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another technology company. We're pioneers in AI, cybersecurity, and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Innovation Leaders',
                description: 'First-to-market solutions with breakthrough technologies and patented innovations.'
              },
              {
                icon: Shield,
                title: 'Enterprise Grade',
                description: 'SOC 2 Type II certified, ISO 27001 compliant, and trusted by Fortune 500 companies.'
              },
              {
                icon: Zap,
                title: 'Proven ROI',
                description: 'Our clients see an average of 300% ROI and 60% cost reduction within 12 months.'
              },
              {
                icon: Globe,
                title: 'Global Support',
                description: '24/7 support, global deployment, and dedicated success managers for every client.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies already leveraging our revolutionary technology solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <Phone className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-blue-200">+1 302 464 0950</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Mail className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-blue-200">kleber@ziontechgroup.com</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <MapPin className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-blue-200">Middletown DE 19709</div>
              </div>
            </div>

            <div className="space-x-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Technology Solutions Inquiry"
                className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Search icon component
const Search: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default ComprehensiveServicesShowcase;