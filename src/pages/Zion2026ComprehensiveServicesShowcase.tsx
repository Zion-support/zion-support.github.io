import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Eye,
  Download,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Gauge,
  ShieldCheck,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  Users as UsersIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  BookOpen as BookOpenIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Eye as EyeIcon,
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  Award as AwardIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Gauge as GaugeIcon,
  ShieldCheck as ShieldCheckIcon,
  X
} from 'lucide-react';
import { zion2026ComprehensiveServices, Zion2026ComprehensiveService } from '../data/zion2026ComprehensiveServices';

const Zion2026ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Zion2026ComprehensiveService | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'roi'>('name');

  const categories = ['All', ...Array.from(new Set(zion2026ComprehensiveServices.map(service => service.category)))];

  const filteredServices = zion2026ComprehensiveServices
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price.starter - b.price.starter;
        case 'rating':
          return b.rating - a.rating;
        case 'roi':
          return parseInt(b.roi.efficiencyGain.replace('%', '')) - parseInt(a.roi.efficiencyGain.replace('%', ''));
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Atom className="w-6 h-6" />;
      case 'Neuromorphic Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Synthetic Biology':
        return <Heart className="w-6 h-6" />;
      case 'Blockchain':
        return <Blockchain className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Internet of Things':
        return <Network className="w-6 h-6" />;
      case 'Metaverse':
        return <Globe className="w-6 h-6" />;
      case 'Robotics':
        return <Factory className="w-6 h-6" />;
      case 'Space Technology':
        return <Satellite className="w-6 h-6" />;
      default:
        return <Lightbulb className="w-6 h-6" />;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatROI = (roi: string) => {
    return roi.replace('%', '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Zion 2026 Comprehensive Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover the future of technology with our cutting-edge micro SAAS solutions. 
            From AI and quantum computing to space technology and synthetic biology.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>10 Revolutionary Services</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Star className="w-5 h-5" />
              <span>4.8+ Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <TrendingUp className="w-5 h-5" />
              <span>300%+ Average ROI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">Starting at</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{formatPrice(service.price.starter)}</div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>

                  {/* ROI */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-400">ROI</span>
                    </div>
                    <div className="text-lg font-semibold text-purple-400">{service.roi.efficiencyGain}</div>
                    <div className="text-xs text-gray-500">efficiency gain</div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-400">Key Features</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-blue-600/20 rounded text-xs text-blue-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredServices.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Schedule a Demo</span>
              </button>
              <button className="border border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl">
                      {getCategoryIcon(selectedService.category)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                      <p className="text-gray-400">{selectedService.category} • {selectedService.subcategory}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Service Content */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                    <p className="text-gray-300">{selectedService.description}</p>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Pricing Plans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <h4 className="font-semibold text-white mb-2">Starter</h4>
                        <div className="text-2xl font-bold text-green-400 mb-2">{formatPrice(selectedService.price.starter)}</div>
                        <div className="text-sm text-gray-400">per month</div>
                      </div>
                      <div className="bg-blue-600/20 rounded-xl p-4 text-center border border-blue-500/50">
                        <h4 className="font-semibold text-white mb-2">Professional</h4>
                        <div className="text-2xl font-bold text-blue-400 mb-2">{formatPrice(selectedService.price.professional)}</div>
                        <div className="text-sm text-gray-400">per month</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <h4 className="font-semibold text-white mb-2">Enterprise</h4>
                        <div className="text-2xl font-bold text-purple-400 mb-2">{formatPrice(selectedService.price.enterprise)}</div>
                        <div className="text-sm text-gray-400">per month</div>
                      </div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Return on Investment</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">{selectedService.roi.timeToValue}</div>
                        <div className="text-sm text-gray-400">Time to Value</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">{selectedService.roi.paybackPeriod}</div>
                        <div className="text-sm text-gray-400">Payback Period</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">{formatPrice(selectedService.roi.annualSavings)}</div>
                        <div className="text-sm text-gray-400">Annual Savings</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">{selectedService.roi.efficiencyGain}</div>
                        <div className="text-sm text-gray-400">Efficiency Gain</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{selectedService.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{selectedService.contactInfo.address}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>Request Quote</span>
                      </button>
                      <button className="border border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        <span>Watch Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Zion2026ComprehensiveServicesShowcase;