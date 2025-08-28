import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Settings,
  PieChart,
  Workflow,
  Key,
  Monitor,
  AlertTriangle,
  ThumbsUp,
  Calendar,
  UserCheck,
  Globe2,
  Shield2,
  Zap2,
  Database2,
  Cog,
  Palette,
  Layers,
  GitBranch,
  Terminal,
  BookOpen,
  Video,
  Headphones,
  PenTool,
  Camera,
  Mic,
  FileCode,
  Search2,
  Users2,
  Building2,
  ChartBar,
  TrendingDown,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Download,
  Upload,
  Trash2,
  Edit3,
  Copy,
  Save,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Filter,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  MoreVertical,
  ExternalLink,
  Link,
  Unlink,
  Lock2,
  Unlock,
  EyeOff,
  Heart,
  HeartOff,
  ThumbsDown,
  MessageCircle,
  MessageSquare2,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  Info,
  HelpCircle,
  CheckSquare,
  Square,
  Circle,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  Settings2,
  Tool,
  Wrench,
  Scissors,
  Package,
  Gift,
  ShoppingBag,
  ShoppingCart2,
  CreditCard,
  Wallet,
  Receipt,
  Tag,
  Percent,
  Hash,
  AtSign,
  Hash2,
  Hash3,
  Hash4,
  Hash5,
  Hash6,
  Hash7,
  Hash8,
  Hash9,
  Hash10,
  Hash11,
  Hash12,
  Hash13,
  Hash14,
  Hash15,
  Hash16,
  Hash17,
  Hash18,
  Hash19,
  Hash20,
  Hash21,
  Hash22,
  Hash23,
  Hash24,
  Hash25,
  Hash26,
  Hash27,
  Hash28,
  Hash29,
  Hash30,
  Hash31,
  Hash32,
  Hash33,
  Hash34,
  Hash35,
  Hash36,
  Hash37,
  Hash38,
  Hash39,
  Hash40,
  Hash41,
  Hash42,
  Hash43,
  Hash44,
  Hash45,
  Hash46,
  Hash47,
  Hash48,
  Hash49,
  Hash50
} from 'lucide-react';
import { innovativeServices2029, serviceCategories, pricingTiers, Service } from '../data/innovativeServices2029';

const InnovativeServicesShowcase2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const filteredServices = innovativeServices2029.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cybersecurity': return Shield;
      case 'cloud': return Cloud;
      case 'data': return Database;
      case 'automation': return Workflow;
      default: return Sparkles;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'from-purple-500 to-pink-500';
      case 'cybersecurity': return 'from-red-500 to-orange-500';
      case 'cloud': return 'from-blue-500 to-cyan-500';
      case 'data': return 'from-green-500 to-emerald-500';
      case 'automation': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Revolutionary Services 2029
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Experience the future of technology with our cutting-edge AI, cybersecurity, and micro SAAS solutions. 
            Transform your business with intelligent automation and next-generation security.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => setShowPricingModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Pricing Plans
            </button>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-zion-slate-light rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center mb-4`}>
                  {React.createElement(getCategoryIcon(service.category), { className: 'w-8 h-8 text-white' })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-zion-slate-light bg-white/10 px-3 py-1 rounded-full">
                    {service.subcategory}
                  </span>
                  <span className="text-lg font-bold text-green-400">{service.pricing.monthly}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-zion-slate-light">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>Leading Solution</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Learn More <ArrowRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto"
          >
            Get in touch with our experts to discuss how our innovative services can drive your business forward. 
            We offer personalized consultations and custom solutions tailored to your needs.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a 
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
            >
              Visit Website
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedService.category)} flex items-center justify-center`}>
                  {React.createElement(getCategoryIcon(selectedService.category), { className: 'w-8 h-8 text-white' })}
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.name}</h2>
              <p className="text-gray-600 text-lg mb-6">{selectedService.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing & Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly:</span>
                        <span className="font-semibold text-green-600">{selectedService.pricing.monthly}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Yearly:</span>
                        <span className="font-semibold text-green-600">{selectedService.pricing.yearly}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Setup:</span>
                        <span className="font-semibold text-green-600">{selectedService.pricing.setup}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-gray-700">{selectedService.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-gray-700">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-blue-500 mr-2" />
                        <a 
                          href={selectedService.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Service Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a 
                  href={selectedService.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Pricing Plans</h2>
                <button 
                  onClick={() => setShowPricingModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(pricingTiers).map(([key, tier]) => (
                  <div key={key} className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{tier.price}</div>
                    <p className="text-gray-600 mb-6">{tier.bestFor}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Need a custom solution? Contact us for enterprise pricing.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Contact Sales
                  </a>
                  <a 
                    href="tel:+13024640950"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default InnovativeServicesShowcase2029;