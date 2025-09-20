import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search;
  Filter,
  Star,
  ArrowRight,
  ChevronDown,
  Brain,
  Cpu,
  Database,
  Network,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Code,
  Server,
  Chip,
  Globe,
  Zap,
  Lock,
  ShieldCheck;
  TrendingUp;
  CheckCircle;
  Clock;
  DollarSign;
  Target;
  Handshake;
  Lightbulb;
  Scale;
  Heart;
  Leaf;
  Eye;
  Atom;
  Building2;
  Car;
  Home;
  Factory;
  City;
  Phone;
  Mail;
  MapPin;
  ExternalLink;
  Award;
  TrendingDown;
  Users2;
  BarChart4;
  Zap2;
  Target2;
  Shield2;
  Rocket2;
  Brain2;
  Cpu2;
  Database2;
  Network2
} from "lucide-react";
import { SEO } from "../components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/innovativeMicroSaasServices2025";
const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedService, setSelectedService] = useState<any>(null)

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced categories with new services;
const categories = [
  {{ id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
  },
  {{ id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
  },
  {{ id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
  },
  {{ id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
  },
  {{ id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-violet' },
  },
  {{ id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
  },
  {{ id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
  },
  {{ id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
  },
  {{ id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
  },
  {{ id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
  },
  {{ id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀', color: 'from-zion-indigo to-zion-purple' },
  },
  {{ id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
  },
  {{ id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
  },
  {{ id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
  },
  ]
  const filteredServices = allServices.filter(service => {
  const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
})

  const sortedServices = [...filteredServices].sort((a, b) => {
  switch (sortBy) {
  case 'rating':;
        return b.rating - a.rating;
      case 'price':;
        return a.price - b.price;
      case 'reviews':;
        return b.reviews - a.reviews;
      case 'name':;
        return a.title.localeCompare(b.title)
      default: return 0
},
  })
  const const containerVariants = {
  = {
    hidden: {{ opacity: 0 },
  };
    visible: {
  opacity: 1,transition: {
  staggerChildren: 0.1
},
  },
  };
  const const itemVariants = {
  = {
    hidden: {{ y: 20, opacity: 0 },
  };
    visible: {
  y: 0,opacity: 1,transition: {
  duration: 0.5
},
  },
  };
  const getInnovationBadge = (level: string) => {
  const const badges = {
  = {
      'Basic': 'bg-gray-500 text-whiteIntermediate': 'bg-blue-500 text-whiteAdvanced': 'bg-purple-500 text-whiteRevolutionary': 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
};
    return badges[level as keyof typeof badges] || 'bg-gray-500 text-white'

  const getROIColor = (roi: string) => {
  const roiValue = parseInt(roi.split('-')[0])
    if (roiValue >= 800) return 'text-green-500';
    if (roiValue >= 500) return 'text-blue-500';
    if (roiValue >= 300) return 'text-yellow-500';
    return 'text-gray-500'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO ;
        title="Enhanced Services Showcase 2025 - Zion Tech Group";
        description="Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge AI solutions.";
      />
      ;
      {{/* Hero Section */},
  };
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 ;
            className="className="text-5xl md:text-7xl font-bold text-white mb-6";"
            initial={{ opacity: 0, y: 30 },
  };
            animate={{ opacity: 1, y: 0 },
  };
            transition={{ duration: 0.8 },
  };
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Enhanced Services Showcase 2025;
            </span>
          </motion.h1>
          <motion.p ;
            className="className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto";"
            initial={{ opacity: 0, y: 30 },
  };
            animate={{ opacity: 1, y: 0 },
  };
            transition={{ duration: 0.8, delay: 0.2 },
  };
          >
            Transform your business with our comprehensive portfolio of AI-powered micro SAAS services;
            cutting-edge IT solutions, and revolutionary technology services. ;
            Experience the future of business automation and intelligence.;
          </motion.p>
          ;
          {{/* Contact Information Banner */},
  };
          <motion.div ;
            className="className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/20";"
            initial={{ opacity: 0, y: 30 },
  };
            animate={{ opacity: 1, y: 0 },
  };
            transition={{ duration: 0.8, delay: 0.4 },
  };
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </motion.div>

          {{/* Key Statistics */},
  };
          <motion.div ;
            className="className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto";"
            initial={{ opacity: 0, y: 30 },
  };
            animate={{ opacity: 1, y: 0 },
  };
            transition={{ duration: 0.8, delay: 0.6 },
  };
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">{allServices.length}+</div>
              <div className="text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue">15+</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-green">500%+</div>
              <div className="text-gray-400">ROI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {{/* Services Grid */},
  };
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {{/* Filters and Search */},
  };
          <div className="mb-8 space-y-4">
            {{/* Search Bar */},
  };
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input;
                type="text";
                placeholder="Search services...";
                value={{searchTerm},
  };
                onChange={{(e) => setSearchTerm(e.target.value)},
  };
                className="className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";"
              />
            </div>

            {{/* Category Filters */},
  };
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
  <button;
                  key={{category.id},
  };
                  onClick={{onClick={() => setActiveCategory(category.id)},
  },
  };
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
  activeCategory === category.id;
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg';
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
}`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {{/* Sort and View Controls */},
  };
            <div className="flex justify-center items-center space-x-4">
              <select;
                value={{sortBy},
  };
                onChange={{(e) => setSortBy(e.target.value)},
  };
                className="className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan";"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>

              <div className="flex bg-white/10 rounded-lg p-1">
                <button;
                  onClick={{onClick={() => setViewMode('grid')},
  },
  };
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-gray-400'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button;
                  onClick={{onClick={() => setViewMode('list')},
  },
  };
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-gray-400'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {{/* Services Grid */},
  };
          <motion.div;
            variants={{containerVariants},
  };
            initial="hidden";
            animate="visible";
            className={{viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'},
  };
          >
            {sortedServices.map((service) => (
  <motion.div;
                key={{service.id},
  };
                variants={{itemVariants},
  };
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 cursor-pointer ${
  viewMode === 'list' ? 'flex items-center space-x-6' : ''
}`}
                onClick={{onClick={() => setSelectedService(service)},
  },
  };
              >
                {viewMode === 'grid' ? (
  // Grid View;
                  <div className="space-y-4">
                    {{/* Header */},
  };
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel)}`}>
                        {{service.innovationLevel},
  };
                      </div>
                    </div>

                    {{/* Category and Price */},
  };
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                        <div className="text-gray-400 text-sm">per month</div>
                      </div>
                    </div>

                    {{/* ROI */},
  };
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Expected ROI</span>
                        <span className={`font-bold ${getROIColor(service.roi)}`}>{service.roi}</span>
                      </div>
                    </div>

                    {{/* Features Preview */},
  };
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, index) => (
  <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                            {{feature},
  };
                          </span>
                        ))},
  {service.features.length > 3 && (
  <span className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                            +{service.features.length - 3} more;
                          </span>
                        )}
                      </div>
                    </div>

                    {{/* Contact Button */},
  };
                    <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-4 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
  // List View;
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel)}`}>
                          {{service.innovationLevel},
  };
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-white">${service.price.toLocaleString()}</div>
                          <div className="text-gray-400 text-sm">per month</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                      <span className={`font-bold ${getROIColor(service.roi)}`}>ROI: {service.roi}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {{/* Service Detail Modal */},
  };
      <AnimatePresence>
        {selectedService && (
  <motion.div;
            initial={{ opacity: 0 },
  };
            animate={{ opacity: 1 },
  };
            exit={{ opacity: 0 },
  };
            className="className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4";"
            onClick={{onClick={() => setSelectedService(null)},
  },
  };
          >
            <motion.div;
              initial={{ scale: 0.9, opacity: 0 },
  };
              animate={{ scale: 1, opacity: 1 },
  };
              exit={{ scale: 0.9, opacity: 0 },
  };
              className="className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";"
              onClick={{onClick={(e) => e.stopPropagation()},
  },
  };
            >
              <div className="p-8">
                {{/* Header */},
  };
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                  <button;
                    onClick={{onClick={() => setSelectedService(null)},
  },
  };
                    className="className="text-gray-400 hover:text-white text-2xl";"
                  >
                    ×;
                  </button>
                </div>

                {{/* Service Details */},
  };
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {{/* Left Column */},
  };
                  <div className="space-y-6">
                    {{/* Pricing */},
  };
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Pricing & ROI</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Monthly Price:</span>
                          <span className="text-2xl font-bold text-white">${selectedService.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expected ROI:</span>
                          <span className={`text-xl font-bold ${getROIColor(selectedService.roi)}`}>{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Delivery Time:</span>
                          <span className="text-white">{selectedService.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>

                    {{/* Features */},
  };
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.features.map((feature: string, index: number) => (
  <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-zion-cyan" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {{/* Right Column */},
  };
                  <div className="space-y-6">
                    {{/* Benefits */},
  };
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit: string, index: number) => (
  <div key={index} className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-zion-green" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {{/* Use Cases */},
  };
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.useCases.map((useCase: string, index: number) => (
  <div key={index} className="flex items-center space-x-2">
                            <Target className="w-5 h-5 text-zion-blue" />
                            <span className="text-gray-300">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {{/* Technical Specs */},
  };
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-400 text-sm">Technology Stack:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedService.technicalSpecs?.technology.map((tech: string, index: number) => (
  <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                                {{tech},
  };
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Uptime:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs?.uptime}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">API Endpoints:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs?.apiEndpoints}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {{/* Contact Information */},
  };
                <div className="mt-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Get Started Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white font-semibold">{selectedService.contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-semibold">{selectedService.contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-gray-400 text-sm">Website</p>
                        <a href={selectedService.contactInfo.website} className="text-white font-semibold hover:text-zion-cyan">
                          {{selectedService.contactInfo.website.replace('https://', '')},
  };
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm: flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </button>
                    <button className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Send Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

// Grid and List icons;
const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
)

const List = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
)

export default EnhancedServicesShowcase2025;
