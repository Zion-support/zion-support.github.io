import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Globe, 
  Leaf, 
  DollarSign, 
  Eye, 
  Wifi, 
  Link, 
  Heart, 
  BarChart3,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Server,
  Satellite,
  Atom,
  CircuitBoard,
  Cloud,
  Lock,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Target,
  PieChart,
  Activity,
  ShieldCheck,
  Globe2,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  Settings,
  HelpCircle,
  Info,
  AlertCircle,
  Check,
  AlertTriangle,
  XCircle,
  Loader2,
  RefreshCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Volume,
  Mute,
  Unmute,
  Stop,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Shuffle,
  Repeat,
  Repeat1,
  SkipBackward,
  SkipForwardIcon,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  FastForwardCircle,
  RewindCircle,
  ShuffleIcon,
  RepeatIcon,
  Repeat1Icon,
  SkipBackwardIcon,
  SkipForwardIcon2,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  FastForwardSquare,
  RewindSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  SkipBackwardSquare,
  SkipForwardSquare2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ADVANCED_INNOVATIVE_SERVICES_2032 } from '../data/advancedInnovativeServices2032';

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'AI Solutions': Brain,
  'Cybersecurity': Shield,
  'Space Tech': Rocket,
  'Green Tech': Leaf,
  'FinTech & DeFi': DollarSign,
  'Metaverse & AR/VR': Eye,
  'IoT & Edge': Wifi,
  'Blockchain & Web3': Link,
  'BioTech & Health': Heart,
  'Data & Analytics': BarChart3,
  'Micro SaaS': Zap,
  'IT Services': Server,
  'Quantum Computing': Atom,
  'Digital Twin': CircuitBoard,
  'Edge AI': Cpu,
  'Sustainability': Globe,
  'Autonomous Systems': Smartphone
};

const categoryColors: Record<string, string> = {
  'AI Solutions': 'from-purple-600 to-pink-600',
  'Cybersecurity': 'from-red-600 to-orange-600',
  'Space Tech': 'from-blue-600 to-indigo-600',
  'Green Tech': 'from-green-600 to-emerald-600',
  'FinTech & DeFi': 'from-yellow-600 to-orange-600',
  'Metaverse & AR/VR': 'from-purple-600 to-violet-600',
  'IoT & Edge': 'from-cyan-600 to-blue-600',
  'Blockchain & Web3': 'from-orange-600 to-red-600',
  'BioTech & Health': 'from-pink-600 to-rose-600',
  'Data & Analytics': 'from-indigo-600 to-purple-600',
  'Micro SaaS': 'from-emerald-600 to-teal-600',
  'IT Services': 'from-gray-600 to-slate-600',
  'Quantum Computing': 'from-violet-600 to-purple-600',
  'Digital Twin': 'from-teal-600 to-cyan-600',
  'Edge AI': 'from-blue-600 to-cyan-600',
  'Sustainability': 'from-green-600 to-blue-600',
  'Autonomous Systems': 'from-slate-600 to-gray-600'
};

const categoryDescriptions: Record<string, string> = {
  'AI Solutions': 'Revolutionary artificial intelligence platforms that transform business operations and decision-making processes.',
  'Cybersecurity': 'Next-generation security solutions using neuromorphic computing and AI to protect against advanced threats.',
  'Space Tech': 'Cutting-edge space technology services for satellite management, orbital optimization, and space exploration.',
  'Green Tech': 'Sustainable technology solutions that help businesses reduce carbon footprints and achieve ESG goals.',
  'FinTech & DeFi': 'Advanced financial technology platforms combining quantum computing with AI for superior trading and risk management.',
  'Metaverse & AR/VR': 'Immersive digital experiences and virtual world creation using AI and advanced 3D technologies.',
  'IoT & Edge': 'Intelligent IoT ecosystems with autonomous device management and edge AI processing capabilities.',
  'Blockchain & Web3': 'Next-generation blockchain solutions with AI-powered governance and automated compliance.',
  'BioTech & Health': 'Revolutionary healthcare platforms combining genomics, AI, and precision medicine for personalized treatment.',
  'Data & Analytics': 'Quantum-powered analytics engines that process massive datasets and solve complex problems in seconds.',
  'Micro SaaS': 'Specialized software-as-a-service solutions designed for specific business needs and workflows.',
  'IT Services': 'Comprehensive IT infrastructure and consulting services for modern digital transformation.',
  'Quantum Computing': 'Quantum computing solutions that solve previously intractable problems across industries.',
  'Digital Twin': 'Digital twin technology for real-time monitoring and optimization of physical systems.',
  'Edge AI': 'Edge computing solutions with AI capabilities for real-time processing and decision-making.',
  'Sustainability': 'Technology solutions focused on environmental sustainability and green business practices.',
  'Autonomous Systems': 'Self-managing and self-optimizing systems that operate independently with minimal human intervention.'
};

export default function ComprehensiveServicesOverview2032() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const categories = Array.from(new Set(ADVANCED_INNOVATIVE_SERVICES_2032.map(service => service.category)));
  const filteredServices = selectedCategory === 'all' 
    ? ADVANCED_INNOVATIVE_SERVICES_2032 
    : ADVANCED_INNOVATIVE_SERVICES_2032.filter(service => service.category === selectedCategory);

  const totalMarketValue = ADVANCED_INNOVATIVE_SERVICES_2032.reduce((total, service) => {
    if (service.marketSize) {
      const value = parseFloat(service.marketSize.replace(/[^0-9.]/g, ''));
      return total + value;
    }
    return total;
  }, 0);

  const averageROI = ADVANCED_INNOVATIVE_SERVICES_2032.reduce((total, service) => {
    const roi = parseFloat(service.roi.replace(/[^0-9.]/g, ''));
    return total + roi;
  }, 0) / ADVANCED_INNOVATIVE_SERVICES_2032.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Overview 2032 | Zion Tech Group"
        description="Explore our complete portfolio of cutting-edge micro SAAS, IT, and AI services. From quantum computing to neuromorphic cybersecurity, discover solutions that will revolutionize your business."
        keywords="comprehensive services, AI solutions, quantum computing, cybersecurity, blockchain, metaverse, IoT, edge computing, healthcare technology, fintech, sustainability, space technology"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Services Overview 2032
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of revolutionary micro SAAS, IT, and AI services designed to transform your business 
              and position you at the forefront of technological innovation.
            </p>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{ADVANCED_INNOVATIVE_SERVICES_2032.length}+</div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">${totalMarketValue.toFixed(0)}B+</div>
                <div className="text-gray-300">Market Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{categories.length}</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{averageROI.toFixed(0)}%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="/advanced-innovative-services-2032" 
                className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Detailed View
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => {
              const categoryServices = ADVANCED_INNOVATIVE_SERVICES_2032.filter(service => service.category === category);
              const isExpanded = expandedCategories.has(category);
              const categoryIcon = categoryIcons[category];
              const categoryColor = categoryColors[category];
              const categoryDescription = categoryDescriptions[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
                >
                  {/* Category Header */}
                  <div 
                    className={`p-6 cursor-pointer hover:bg-white/5 transition-colors`}
                    onClick={() => toggleCategory(category)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categoryColor} flex items-center justify-center`}>
                          {React.createElement(categoryIcon || Zap, { className: 'w-8 h-8 text-white' })}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">{category}</h2>
                          <p className="text-gray-300 max-w-2xl">{categoryDescription}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{categoryServices.length}</div>
                          <div className="text-sm text-gray-400">Services</div>
                        </div>
                        <button className="p-2 rounded-lg hover:bg-white/20 transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-6 h-6 text-white" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Category Services */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/20"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {categoryServices.map((service, serviceIndex) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                            >
                              {/* Service Header */}
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-semibold text-white line-clamp-2">{service.title}</h3>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                                  service.innovationLevel === 'Breakthrough' ? 'bg-red-600 text-white' :
                                  service.innovationLevel === 'Revolutionary' ? 'bg-orange-600 text-white' :
                                  service.innovationLevel === 'Advanced' ? 'bg-blue-600 text-white' :
                                  'bg-green-600 text-white'
                                }`}>
                                  {service.innovationLevel}
                                </span>
                              </div>

                              {/* Service Description */}
                              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                              {/* Key Features */}
                              <div className="mb-4">
                                <h4 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Key Features</h4>
                                <div className="flex flex-wrap gap-1">
                                  {service.features.slice(0, 2).map((feature, idx) => (
                                    <span key={idx} className="inline-block bg-white/10 text-white text-xs px-2 py-1 rounded-full">
                                      {feature}
                                    </span>
                                  ))}
                                  {service.features.length > 2 && (
                                    <span className="inline-block bg-white/10 text-white text-xs px-2 py-1 rounded-full">
                                      +{service.features.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Pricing and ROI */}
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <div className="text-lg font-bold text-white">${service.price.toLocaleString()}</div>
                                  <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                                  <div className="text-xs text-gray-400">ROI</div>
                                </div>
                              </div>

                              {/* Market Info */}
                              <div className="mb-4 text-xs text-gray-400">
                                <div className="flex justify-between">
                                  <span>Market Size:</span>
                                  <span className="text-white">{service.marketSize}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Delivery:</span>
                                  <span className="text-white">{service.estimatedDelivery}</span>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <a
                                href="https://ziontechgroup.com/contact"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm group"
                              >
                                Get Started
                                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive portfolio of cutting-edge services is designed to address every aspect of your digital transformation journey. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Information */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300">
                <a href="/advanced-innovative-services-2032" className="block hover:text-white transition-colors">Detailed Services View</a>
                <a href="https://ziontechgroup.com/services" className="block hover:text-white transition-colors">All Services</a>
                <a href="https://ziontechgroup.com/about" className="block hover:text-white transition-colors">About Us</a>
                <a href="https://ziontechgroup.com/case-studies" className="block hover:text-white transition-colors">Case Studies</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cutting-edge Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}