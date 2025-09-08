import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Phone,
  Mail,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Atom,
  Satellite,
  Dna,
  Leaf,
  Flame,
  Eye
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { INNOVATIVE_MICRO_SAAS_2025 } from '../data/innovativeMicroSaas2025';
import { SPECIALIZED_AI_SERVICES_2025 } from '../data/specializedAIServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology?: string[];
  integrations?: string[];
  compliance?: string[];
  roi?: string;
  competitors?: string[];
  innovationLevel?: string;
  marketTrend?: string;
  aiCapabilities?: string[];
  technologyReadiness?: string;
  futurePotential?: string;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices: Service[] = [
    ...COMPREHENSIVE_SERVICES,
    ...ENHANCED_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...INNOVATIVE_MICRO_SAAS_2025,
    ...SPECIALIZED_AI_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Sort services
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

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & machine learning':
      case 'ai platforms':
      case 'ai content creation':
      case 'ai healthcare':
      case 'ai finance':
      case 'ai environment':
      case 'ai legal':
      case 'ai creative':
        return Brain;
      case 'quantum technology':
      case 'quantum computing':
      case 'quantum enterprise':
        return Atom;
      case 'cybersecurity':
        return Shield;
      case 'cloud & infrastructure':
      case 'it infrastructure':
        return Cloud;
      case 'business operations':
      case 'business process automation':
        return Target;
      case 'space technology':
        return Satellite;
      case 'biotechnology':
        return Dna;
      case 'neuromorphic computing':
        return Cpu;
      case 'fusion energy':
        return Flame;
      case 'brain-computer interface':
        return Eye;
      default:
        return Lightbulb;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & machine learning':
      case 'ai platforms':
      case 'ai content creation':
      case 'ai healthcare':
      case 'ai finance':
      case 'ai environment':
      case 'ai legal':
      case 'ai creative':
        return 'from-purple-500 to-pink-500';
      case 'quantum technology':
      case 'quantum computing':
      case 'quantum enterprise':
        return 'from-blue-500 to-cyan-500';
      case 'cybersecurity':
        return 'from-red-500 to-pink-500';
      case 'cloud & infrastructure':
      case 'it infrastructure':
        return 'from-blue-500 to-indigo-500';
      case 'business operations':
      case 'business process automation':
        return 'from-green-500 to-emerald-500';
      case 'space technology':
        return 'from-indigo-500 to-purple-500';
      case 'biotechnology':
        return 'from-green-500 to-blue-500';
      case 'neuromorphic computing':
        return 'from-orange-500 to-red-500';
      case 'fusion energy':
        return 'from-yellow-500 to-orange-500';
      case 'brain-computer interface':
        return 'from-pink-500 to-purple-500';
      default:
        return 'from-gray-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of cutting-edge AI, IT, and micro SAAS services designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">Enterprise Grade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                <option value="category" className="bg-gray-800 text-white">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    {service.innovationLevel && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {service.innovationLevel}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Price and Delivery */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Delivery</div>
                      <div className="text-sm font-semibold">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-sm text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-blue-400">{service.marketPrice}</div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-400 cursor-pointer hover:underline">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Benefits</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI */}
                  {service.roi && (
                    <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>
                  )}

                  {/* Technology Stack */}
                  {service.technology && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Technology Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.slice(0, 4).map((tech, index) => (
                          <span key={index} className="bg-white/10 text-xs px-2 py-1 rounded-full border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable Details */}
                  <div className="border-t border-white/20 pt-4">
                    <button
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="w-full flex items-center justify-between text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-sm font-semibold">
                        {expandedService === service.id ? 'Hide Details' : 'View Details'}
                      </span>
                      {expandedService === service.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-4"
                      >
                        {/* Use Cases */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                          <div className="space-y-1">
                            {service.useCases.map((useCase, index) => (
                              <div key={index} className="text-sm text-gray-300">• {useCase}</div>
                            ))}
                          </div>
                        </div>

                        {/* Target Audience */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Target Audience</div>
                          <div className="space-y-1">
                            {service.targetAudience.map((audience, index) => (
                              <div key={index} className="text-sm text-gray-300">• {audience}</div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Tags</div>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, index) => (
                              <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* AI Capabilities */}
                        {service.aiCapabilities && (
                          <div>
                            <div className="text-sm text-gray-400 mb-2">AI Capabilities</div>
                            <div className="space-y-1">
                              {service.aiCapabilities.map((capability, index) => (
                                <div key={index} className="text-sm text-gray-300">• {capability}</div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technology Readiness */}
                        {service.technologyReadiness && (
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Technology Readiness</div>
                            <div className="text-sm font-semibold text-green-400">{service.technologyReadiness}</div>
                          </div>
                        )}

                        {/* Future Potential */}
                        {service.futurePotential && (
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Future Potential</div>
                            <div className="text-sm font-semibold text-purple-400">{service.futurePotential}</div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Visit Website
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our comprehensive suite of AI, IT, and micro SAAS services is designed to drive innovation, 
            increase efficiency, and provide competitive advantages. Contact us today to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-6 text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;