import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Server, 
  ShoppingCart, 
  Shield, 
  BarChart3, 
  Cloud, 
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Target,
  Globe,
  Lock,
  Cpu,
  Heart,
  Atom,
  MessageCircle,
  BookOpen,
  Workflow,
  Network,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

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
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const ServicesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    {
      id: 'AI Solutions',
      name: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence services for business transformation',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Solutions').length
    },
    {
      id: 'IT Services',
      name: 'IT Services',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      description: 'Enterprise-grade IT infrastructure and digital transformation solutions',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').length
    },
    {
      id: 'Micro SaaS',
      name: 'Micro SaaS',
      icon: ShoppingCart,
      color: 'from-green-600 to-emerald-600',
      description: 'Scalable software-as-a-service solutions for specific business needs',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS').length
    },
    {
      id: 'Cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security solutions and threat protection systems',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length
    },
    {
      id: 'Emerging Tech',
      name: 'Emerging Tech',
      icon: Rocket,
      color: 'from-yellow-600 to-orange-600',
      description: 'Next-generation technologies including quantum computing and blockchain',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Tech').length
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES_2025 
    : INNOVATIVE_SERVICES_2025.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'IT Services': return Server;
      case 'Micro SaaS': return ShoppingCart;
      case 'Cybersecurity': return Shield;
      case 'Data Analytics': return BarChart3;
      case 'Cloud Services': return Cloud;
      case 'Emerging Tech': return Rocket;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'IT Services': return 'from-blue-600 to-cyan-600';
      case 'Micro SaaS': return 'from-green-600 to-emerald-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Data Analytics': return 'from-indigo-600 to-purple-600';
      case 'Cloud Services': return 'from-cyan-600 to-blue-600';
      case 'Emerging Tech': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and Micro SaaS services. Discover innovative solutions designed to transform your business and drive growth."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services Overview
              </span>
              <span className="block text-white">Complete Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover our comprehensive range of innovative technology services designed to 
              transform your business, enhance efficiency, and drive competitive advantage.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>{INNOVATIVE_SERVICES_2025.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Cutting-edge Technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id || selectedCategory === 'all'
                    ? 'border-cyan-500 bg-slate-800/80'
                    : 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50'
                }`}
              >
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">{category.count} Services</span>
                  {selectedCategory === category.id && (
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {selectedCategory === 'all' ? 'All Services' : `${selectedCategory} Services`}
          </h2>
          <p className="text-gray-400">
            {filteredServices.length} services available
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.subcategory}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-cyan-400">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
                    </div>
                  </div>

                  {/* Key Features Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 2).map((useCase, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                          {useCase}
                        </span>
                      ))}
                      {service.useCases.length > 2 && (
                        <span className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                          +{service.useCases.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Categories Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories Deep Dive</h2>
        
        <div className="space-y-12">
          {/* AI Solutions */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI Solutions</h3>
                <p className="text-gray-400">Transform your business with cutting-edge artificial intelligence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Solutions').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">IT Services</h3>
                <p className="text-gray-400">Enterprise-grade infrastructure and digital transformation</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SaaS */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Micro SaaS</h3>
                <p className="text-gray-400">Scalable software solutions for specific business needs</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emerging Tech */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Emerging Tech</h3>
                <p className="text-gray-400">Next-generation technologies for the future</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Tech').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-6">
            Let's discuss how our services can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-6 text-cyan-100">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;