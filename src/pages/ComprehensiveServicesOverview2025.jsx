import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Factory, 
  Heart, 
  ShoppingCart, 
  Building2, 
  GraduationCap, 
  Leaf, 
  Truck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  Star,
  Clock,
  Users,
  DollarSign,
  Target,
  CheckCircle
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025 } from '../data/2025-ultimate-innovative-services-expansion.js';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/2025-specialized-industry-solutions-ultimate.js';

const ComprehensiveServicesOverview2025 = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('overview');

  const allServices = [
    ...ULTIMATE_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025
  ];

  const categories = [
    {
      name: 'AI & Automation',
      icon: Brain,
      description: 'Advanced AI-powered solutions for business automation and intelligence',
      services: allServices.filter(s => s.category === 'AI & Automation' || s.tags.includes('AI')),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Quantum Computing',
      icon: Brain,
      description: 'Revolutionary quantum computing platforms and solutions',
      services: allServices.filter(s => s.category === 'Quantum Computing' || s.quantumReady),
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Military-grade security solutions and zero-trust platforms',
      services: allServices.filter(s => s.category === 'Cybersecurity' || s.cybersecurityLevel),
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'AI-powered trading platforms and financial solutions',
      services: allServices.filter(s => s.industry === 'Financial Services'),
      color: 'from-yellow-500 to-amber-500'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart factory automation and Industry 4.0 solutions',
      services: allServices.filter(s => s.industry === 'Manufacturing'),
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare analytics and medical imaging',
      services: allServices.filter(s => s.industry === 'Healthcare' || s.category === 'Healthcare AI'),
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = {
    totalServices: allServices.length,
    totalCategories: categories.length,
    averagePrice: Math.round(allServices.reduce((sum, s) => sum + s.price, 0) / allServices.length),
    averageROI: Math.round(allServices.reduce((sum, s) => {
      const roi = parseInt(s.roi.match(/\d+/)?.[0] || "0");
      return sum + roi;
    }, 0) / allServices.length),
    aiServices: allServices.filter(s => s.aiScore && s.aiScore > 80).length,
    quantumReady: allServices.filter(s => s.quantumReady).length,
    enterpriseServices: allServices.filter(s => s.supportLevel === 'enterprise' || s.supportLevel === 'dedicated').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Comprehensive
              </span>
              <br />
              <span className="text-white">Services Overview</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover our complete portfolio of cutting-edge micro SAAS services, 
              AI solutions, and industry-specific platforms designed to revolutionize 
              your business operations and drive unprecedented growth.
            </p>

            {/* Contact Banner */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-blue-500 font-semibold">Contact Us</p>
                    <p className="text-white text-lg">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-purple-600 font-semibold">Email</p>
                    <p className="text-white text-lg">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
              {stats.totalServices}
            </div>
            <div className="text-gray-300">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              {stats.totalCategories}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
              ${(stats.averagePrice / 1000).toFixed(1)}K
            </div>
            <div className="text-gray-300">Avg Investment</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              {stats.averageROI}%
            </div>
            <div className="text-gray-300">Avg ROI</div>
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Service Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zinc-800/50 border border-zinc-700/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.services.length} services
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-500 text-sm font-medium">
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="text-gray-400 text-sm">
                  From ${Math.min(...category.services.map(s => s.price)).toLocaleString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
=======
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        'all',
        'AI & Business Intelligence',
        'Cybersecurity & Quantum Computing',
        'DevOps & Infrastructure',
        'Blockchain & Supply Chain',
        'Healthcare & AI',
        'Quantum Computing & AI',
        'FinTech & AI',
        'IoT & Edge Computing',
        'Legal Tech & AI',
        'Marketing & AI',
        'Energy & Sustainability',
        'Logistics & Transportation'
    ];
    const filteredServices = allEnhancedServices.filter(service => selectedCategory === 'all' || service.category === selectedCategory);
    const getCategoryIcon = (category) => {
        const icons = {
            'AI & Business Intelligence': '🧠',
            'Cybersecurity & Quantum Computing': '🔒',
            'DevOps & Infrastructure': '⚙️',
            'Blockchain & Supply Chain': '⛓️',
            'Healthcare & AI': '🏥',
            'Quantum Computing & AI': '🔮',
            'FinTech & AI': '💰',
            'IoT & Edge Computing': '🌐',
            'Legal Tech & AI': '⚖️',
            'Marketing & AI': '📢',
            'Energy & Sustainability': '⚡',
            'Logistics & Transportation': '🚚'
        };
        return icons[category] || '🚀';
    };
    const getCategoryColor = (category) => {
        const colors = {
            'AI & Business Intelligence': 'from-blue-500 to-cyan-500',
            'Cybersecurity & Quantum Computing': 'from-red-500 to-pink-500',
            'DevOps & Infrastructure': 'from-green-500 to-emerald-500',
            'Blockchain & Supply Chain': 'from-purple-500 to-indigo-500',
            'Healthcare & AI': 'from-teal-500 to-cyan-500',
            'Quantum Computing & AI': 'from-violet-500 to-purple-500',
            'FinTech & AI': 'from-yellow-500 to-orange-500',
            'IoT & Edge Computing': 'from-indigo-500 to-blue-500',
            'Legal Tech & AI': 'from-gray-500 to-slate-500',
            'Marketing & AI': 'from-pink-500 to-rose-500',
            'Energy & Sustainability': 'from-green-500 to-teal-500',
            'Logistics & Transportation': 'from-orange-500 to-red-500'
        };
        return colors[category] || 'from-gray-500 to-slate-500';
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Overview 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI platforms. 
            Each service is designed with cutting-edge technology and proven methodologies to drive business transformation.
          </p>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/comprehensive-services-2025" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Landing Page
            </Link>
            <Link to="/enhanced-services-2025" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Services Showcase
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">Filter by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {categories.map(category => (<button key={category} onClick={() => setSelectedCategory(category)} className={`p-3 rounded-lg border transition-all duration-300 text-center ${selectedCategory === category
                ? 'bg-blue-500/20 border-blue-400 text-blue-400'
                : 'bg-white/10 border-white/20 hover:border-blue-400 hover:text-blue-400'}`}>
                  <div className="text-2xl mb-1">{getCategoryIcon(category)}</div>
                  <div className="text-xs">{category === 'all' ? 'All Categories' : category}</div>
                </button>))}
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (<div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105">
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{getCategoryIcon(service.category)}</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{service.price}</div>
                      <div className="text-xs text-gray-400">{service.period}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{service.rating}/5.0</div>
                      <div className="text-xs text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  {/* Technology Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 3).map((tech, index) => (<span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mb-4">
                    <div>
                      <span className="text-blue-400">Market:</span> {service.marketSize}
                    </div>
                    <div>
                      <span className="text-blue-400">Customers:</span> {service.customers.toLocaleString()}
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button onClick={() => setSelectedService(service.id)} className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      View Details
                    </button>
                    <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      Contact
                    </a>
                  </div>
                </div>
              </div>))}
          </div>
          {filteredServices.length === 0 && (<div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try selecting a different category or contact us for custom solutions.</p>
            </div>)}
        </div>
      </section>
      {/* Service Detail Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const service = allEnhancedServices.find(s => s.id === selectedService);
                if (!service)
                    return null;
                return (<>
                    {/* Modal Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{getCategoryIcon(service.category)}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{service.name}</h2>
                          <p className="text-blue-400">{service.category}</p>
                        </div>
                      </div>
                      <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white text-2xl">
                        ×
                      </button>
                    </div>
                    {/* Service Details */}
                    <div className="space-y-6">
                      {/* Overview */}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Overview</h3>
                        <p className="text-gray-300 mb-2">{service.tagline}</p>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Pricing</h4>
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Rating</h4>
                          <div className="text-2xl font-bold text-white">{service.rating}/5.0</div>
                          <div className="text-gray-400 text-sm">{service.reviews} reviews</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Market Size</h4>
                          <div className="text-2xl font-bold text-white">{service.marketSize}</div>
                          <div className="text-gray-400 text-sm">Total Addressable Market</div>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4 text-center">
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Uptime</h4>
                          <div className="text-2xl font-bold text-white">{service.uptime}</div>
                          <div className="text-gray-400 text-sm">Guaranteed Uptime</div>
                        </div>
                      </div>
                      {/* Features and Use Cases */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Features</h3>
                          <div className="space-y-2">
                            {service.features.map((feature, index) => (<div key={index} className="flex items-center text-gray-300">
                                <span className="text-green-400 mr-2">✓</span>
                                {feature}
                              </div>))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Use Cases</h3>
                          <div className="space-y-2">
                            {service.useCases.map((useCase, index) => (<div key={index} className="text-gray-300">
                                • {useCase}
                              </div>))}
                          </div>
                        </div>
                      </div>
                      {/* Technology and Integrations */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Technology Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technology.map((tech, index) => (<span key={index} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Integrations</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.integrations.slice(0, 8).map((integration, index) => (<span key={index} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                                {integration}
                              </span>))}
                          </div>
                        </div>
                      </div>
                      {/* Technical Specifications */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Technical Specs</h3>
                          <div className="space-y-2 text-sm text-gray-300">
                            <div><span className="text-blue-400">API Endpoints:</span> {service.apiEndpoints}</div>
                            <div><span className="text-blue-400">Uptime:</span> {service.uptime}</div>
                            <div><span className="text-blue-400">Setup Time:</span> {service.setupTime}</div>
                            <div><span className="text-blue-400">Trial Period:</span> {service.trialDays} days</div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-3">Security Features</h3>
                          <div className="space-y-2">
                            {service.securityFeatures.map((feature, index) => (<div key={index} className="flex items-center text-gray-300">
                                <span className="text-green-400 mr-2">🔒</span>
                                {feature}
                              </div>))}
                          </div>
                        </div>
                      </div>
                      {/* ROI and Benefits */}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-3">ROI & Benefits</h3>
                        <div className="bg-slate-700 rounded-lg p-4">
                          <p className="text-gray-300 mb-3">{service.roi}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-blue-400">Competitive Advantage:</span>
                              <p className="text-gray-300 mt-1">{service.competitiveAdvantage}</p>
                            </div>
                            <div>
                              <span className="text-blue-400">Target Audience:</span>
                              <p className="text-gray-300 mt-1">{service.targetAudience}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Compliance and Certifications */}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-3">Compliance & Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.compliance.map((cert, index) => (<span key={index} className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                              {cert}
                            </span>))}
                        </div>
                      </div>
                      {/* Contact and Next Steps */}
                      <div className="bg-slate-700 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-400 mb-4">Get Started</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Contact Information</h4>
                            <p className="text-gray-300">Phone: {service.contact.phone}</p>
                            <p className="text-gray-300">Email: {service.contact.email}</p>
                            <p className="text-gray-300">Address: {service.contact.address}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Next Steps</h4>
                            <div className="space-y-2">
                              <a href={service.website} target="_blank" rel="noopener noreferrer" className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300">
                                Visit Website
                              </a>
                              <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`} className="block bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300">
                                Request Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>);
            })()}
            </div>
          </div>
        </div>)}
      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Our Services?
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution 
            for your business needs. Get in touch today to start your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ultimate-services-2025"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg"
            >
              Explore All Services
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComprehensiveServicesOverview2025;
