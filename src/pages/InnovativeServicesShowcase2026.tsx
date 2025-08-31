import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink
              } from 'lucide-react.ts';
import { INNOVATIVE_SERVICES               } from '../data/servicesData';
export default function InnovativeServicesShowcase2026(...args[]: any):  {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps & Infrastructure', name: 'DevOps & Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-rose-500 to-pink-500' },;
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', icon: Zap, color: 'from-amber-500 to-yellow-500' };
  ];
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch});
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {;
      case 'price':;
        return a.price - b.price;
      case 'innovation':
        return a.innovationLevel === 'Cutting-edge' ? -1 : 1;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
=======
import React, { useState, useMemo } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
  Globe,
  Shield,
  BarChart3,
=======
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  BarChart3Icon,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
             } from 'lucide-react.ts';
import { INNOVATIVE_SERVICES              } from '../data/servicesData';
export default function InnovativeServicesShowcase2026(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
=======
// Import our new service data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';
import { INNOVATIVE_IT_SERVICES_2026 } from '../data/innovativeITServices2026';
import { INNOVATIVE_AI_SERVICES_2026 } from '../data/innovativeAIServices2026';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = useMemo(() => {
    const microSaasServices = INNOVATIVE_MICRO_SAAS_SERVICES_2026.map(service => ({
      ...service,
      type: 'Micro SAAS',
      originalData: service
    }));
    
    const itServices = INNOVATIVE_IT_SERVICES_2026.map(service => ({
      ...service,
      type: 'IT Services',
      originalData: service
    }));
    
    const aiServices = INNOVATIVE_AI_SERVICES_2026.map(service => ({
      ...service,
      type: 'AI Services',
      originalData: service
    }));

    return [...microSaasServices, ...itServices, ...aiServices];
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.type === selectedCategory);
    }

    // Filter by pricing model
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'type':
        filtered.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, selectedCategory, selectedPricingModel, searchTerm, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', count: allServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'IT Services', name: 'IT Services', count: allServices.filter(s => s.type === 'IT Services').length },
    { id: 'AI Services', name: 'AI Services', count: allServices.filter(s => s.type === 'AI Services').length }
  ];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return b.innovationLevel === 'Revolutionary' ? 1 : -1;
        case 'roi':
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
        default:
          return 0;

    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (category) {;
      case 'AI & Automation':;
        return <Cpu className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Zap className="w-5 h-5" />;
      case 'Blockchain':
        return <Database className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'IoT':
        return <Globe className="w-5 h-5" />;
      case 'AI & Content':
        return <Cpu className="w-5 h-5" />;
      case 'DevOps':
        return <Database className="w-5 h-5" />;
      case 'Finance':
        return <TrendingUp className="w-5 h-5" />;
      case 'Sustainability':
        return <Leaf className="w-5 h-5" />;
      default:
        return 0}
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      };
    };
  };

  const getInnovationBadge = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const colors = {
  'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600',
      'Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600',;
  ;
  ;
  ;
  ;
  'Cutting-Edge': 'bg-gradient-to-r from-green-600 to-emerald-600';
    ;






};

    return (
      <span className = {`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>;
        {level};
      </span>;
    );
  };
=======
  const pricingModels = [
    { id: 'all', name: 'All Pricing Models' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'annual', name: 'Annual' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'category', label: 'Category' },
    { value: 'type', label: 'Type' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge AI, IT, and Micro SAAS services for 2026. Revolutionary solutions with real market data and competitive pricing." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, 2026, Zion Tech Group, innovative solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary AI, IT, and Micro SAAS solutions that are transforming industries and driving innovation across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Real Market Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-white mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-100 hover:text-white transition-colors text-lg"
              >
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-white mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-100 hover:text-white transition-colors text-lg"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-white mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-100 hover:text-white transition-colors text-lg"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="bg-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    Sort by {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              {/* Service Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  service.type === 'Micro SAAS' ? 'bg-green-500/20 text-green-400' :
                  service.type === 'IT Services' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {service.type}
                </span>
                <span className="text-slate-400 text-sm">{service.innovationLevel}</span>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-slate-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing and Benefits */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-white">
                    {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-slate-400 font-normal">/{service.pricingModel}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Market Price</div>
                    <div className="text-sm text-slate-300">{service.marketPrice}</div>
                  </div>
                </div>
                <div className="text-sm text-slate-400 mb-2">ROI: {service.roi}</div>
                <div className="text-sm text-slate-400">Delivery: {service.estimatedDelivery}</div>
              </div>

              {/* Contact Button */}
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Started
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-medium py-2 px-6 rounded-lg transition-all duration-300 text-center text-sm"
                >
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category               => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
=======
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search criteria or filters.</p>
          </div>
      {/* Services Grid */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index)              => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Our team of experts is ready to help you choose the right services and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 hover:bg-slate-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2 text-slate-300">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Home
                </a>
                <a href="https://ziontechgroup.com/services" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Services
                </a>
                <a href="https://ziontechgroup.com/about" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="https://ziontechgroup.com/contact" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
              <div className="space-y-2 text-slate-300">
                <span className="block">AI Services</span>
                <span className="block">IT Services</span>
                <span className="block">Micro SAAS</span>
                <span className="block">Cloud Solutions</span>
                <span className="block">Cybersecurity</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get Started</h3>
              <p className="text-slate-300 mb-4">
                Ready to transform your business with our innovative solutions?
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2026 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-1">
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
