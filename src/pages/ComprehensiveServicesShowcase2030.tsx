import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Atom,
  Eye,
  Scale,
  Settings,
  BookOpen,
  X
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

export default function ComprehensiveServicesShowcase2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedService, setSelectedService] = useState(null);

  const getFilteredServices = () => {
    let services: unknown[] = [];
    
    switch (activeTab) {
      case 'microsaas':
        services = innovativeMicroSaasServices2030;
        break;
      case 'it':
        services = comprehensiveITServices2030;
        break;
      case 'ai':
        services = comprehensiveAIServices2030;
        break;
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getCategories = () => {
    let services: unknown[] = [];
    
    switch (activeTab) {
      case 'microsaas':
        services = innovativeMicroSaasServices2030;
        break;
      case 'it':
        services = comprehensiveITServices2030;
        break;
      case 'ai':
        services = comprehensiveAIServices2030;
        break;
    }

    const categories = [...new Set(services.map(service => service.category))];
    return categories;
  };

  const renderServiceCard = (service: unknown) => {
    if (activeTab === 'microsaas') {
      return (
        <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                {service.pricing}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-gray-900">${service.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">{service.pricingModel}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Market Price:</strong> {service.marketPrice}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>ROI:</strong> {service.roi}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.slice(0, 6).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 4).map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Target Audience:</h4>
              <div className="flex flex-wrap gap-2">
                {service.targetAudience.slice(0, 3).map((audience: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 5).map((tech: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span><strong>Setup Time:</strong> {service.setupTime}</span>
                <span><strong>Innovation Level:</strong> {service.innovationLevel}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span><strong>Market Size:</strong> {service.marketSize}</span>
                <span><strong>Growth Rate:</strong> {service.growthRate}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <strong>Contact:</strong><br />
                  <a href={`tel:${service.contactInfo.phone}`} className="text-blue-600 hover:underline">
                    {service.contactInfo.phone}
                  </a><br />
                  <a href={`mailto:${service.contactInfo.email}`} className="text-blue-600 hover:underline">
                    {service.contactInfo.email}
                  </a>
                </div>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'it') {
      return (
        <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-full">
                {service.category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-500">Hourly Rate</div>
                  <div className="text-xl font-bold text-gray-900">${service.hourlyRate}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Project Rate</div>
                  <div className="text-xl font-bold text-gray-900">${service.projectRate.toLocaleString()}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Market Price:</strong> {service.marketPrice}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>ROI:</strong> {service.roi}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.slice(0, 6).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 4).map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 5).map((tech: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <div>
                  <strong>Response Time:</strong> {service.responseTime}<br />
                  <strong>SLA:</strong> {service.sla}
                </div>
                <div>
                  <strong>Delivery Time:</strong> {service.deliveryTime}<br />
                  <strong>Support:</strong> {service.support}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <strong>Contact:</strong><br />
                  <a href={`tel:${service.contactInfo.phone}`} className="text-blue-600 hover:underline">
                    {service.contactInfo.phone}
                  </a><br />
                  <a href={`mailto:${service.contactInfo.email}`} className="text-blue-600 hover:underline">
                    {service.contactInfo.email}
                  </a>
                </div>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <div className="flex flex-col items-end">
                <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-2">
                  {service.category}
                </span>
                <div className="text-sm text-gray-600">
                  AI Score: <span className="font-bold text-purple-600">{service.aiScore}/100</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-gray-900">${service.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">{service.pricingModel}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Market Price:</strong> {service.marketPrice}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Accuracy:</strong> {service.accuracy}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>ROI:</strong> {service.roi}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">AI Models:</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {service.aiModels.slice(0, 4).map((model: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.slice(0, 6).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
              <div className="flex flex-wrap gap-2">
                {service.useCases.slice(0, 4).map((useCase: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-pink-100 text-pink-700 rounded-full">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 5).map((tech: string, index: number) => (
                  <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <div>
                  <strong>Setup Time:</strong> {service.setupTime}<br />
                  <strong>Innovation Level:</strong> {service.innovationLevel}
                </div>
                <div>
                  <strong>Market Size:</strong> {service.marketSize}<br />
                  <strong>Training Data:</strong> {service.trainingData}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <strong>Contact:</strong><br />
                  <a href={`tel:${service.contactInfo.phone}`} className="text-blue-600 hover:underline">
                    {service.contactInfo.phone}
                  </a><br />
                  <a href={`mailto:${service.contactInfo.email}`} className="text-blue-600 hover:underline">
                    {service.contactInfo.email}
                  </a>
                </div>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <SEO
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our complete portfolio of innovative AI-powered services, micro SAAS solutions, and cutting-edge technology services for 2030 and beyond."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive Services Showcase 2030
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our complete portfolio of innovative AI-powered services, micro SAAS solutions, 
              and cutting-edge technology services designed to transform your business in 2030 and beyond.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-gray-300">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center text-white">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

export default ComprehensiveServicesShowcase2030;>