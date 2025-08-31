import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
import { Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Globe, 
  Zap, 
  Cpu, 
  Network, 
  Database, 
  Lock, 
  TrendingUp, 
  Users, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Rocket,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  Monitor,
  Truck,
  Car,
  Clipboard,
  Link,
  Microscope,
  X,
  Atom,
  Heart,
  Leaf,
  Gauge,
  CpuIcon,
  DatabaseIcon,
  NetworkIcon,
  SmartphoneIcon,
  BarChart3Icon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  WorkflowIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  TargetIcon,
  LightbulbIcon,
  BarChartIcon,
  PieChartIcon,
  LineChartIcon,
  ActivityIcon,
  FileTextIcon,
  MessageCircleIcon,
  CalendarIcon,
  SettingsIcon,
  MonitorIcon,
  TruckIcon,
  CarIcon,
  ClipboardIcon,
  LinkIcon,
  MicroscopeIcon,
  XIcon,
  AtomIcon,
  HeartIcon,
  LeafIcon
             } from 'lucide-react.ts';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2031              } from '../data/innovativeMicroSaasServices2031';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2031              } from '../data/specializedITInfrastructureServices2031';
import { SPECIALIZED_AI_SERVICES_2031              } from '../data/specializedAIServices2031';

interface ServiceContact {













  mobile: string;
  email: string;
  address: string;
  website: string;













}

const ComprehensiveServicesShowcase2031: React.FC = (): JSX.Element => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [priceRange, setPriceRange] = useState<any>([0, 10000]);
  const [innovationLevel, setInnovationLevel] = useState('all');

  // Combine all services
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2031,;
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2031,;
    ...SPECIALIZED_AI_SERVICES_2031;
  ];

  const categories = [
    { id: anyanyanyanyanyanyanyanyanyanyanyanyany'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s              => s.category === 'AI & Automation').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s              => s.category === 'AI & Analytics').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'📊' },
    { id: 'AI & Development', name: 'AI & Development', count: allServices.filter(s              => s.category === 'AI & Development').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'💻' },
    { id: 'AI & Finance', name: 'AI & Finance', count: allServices.filter(s              => s.category === 'AI & Finance').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'💰' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s              => s.category === 'AI & Logistics').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🚚' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s              => s.category === 'AI & Healthcare').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🏥' },
    { id: 'AI & Cybersecurity', name: 'AI & Cybersecurity', count: allServices.filter(s              => s.category === 'AI & Cybersecurity').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🛡️' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s              => s.category === 'AI & Marketing').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'📢' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s              => s.category === 'AI & Research').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🔬' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s              => s.category === 'AI & HR').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'👥' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s              => s.category === 'AI & Content').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'✍️' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s              => s.category === 'AI & Transportation').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🚗' },
    { id: 'AI & Quantum Computing', name: 'AI & Quantum Computing', count: allServices.filter(s              => s.category === 'AI & Quantum Computing').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'⚛️' },
    { id: 'AI & Robotics', name: 'AI & Robotics', count: allServices.filter(s              => s.category === 'AI & Robotics').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🤖' },
    { id: 'AI & Edge', name: 'AI & Edge', count: allServices.filter(s              => s.category === 'AI & Edge').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🌐' },
    { id: 'AI & Vision', name: 'AI & Vision', count: allServices.filter(s              => s.category === 'AI & Vision').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'👁️' },
    { id: 'AI & Language', name: 'AI & Language', count: allServices.filter(s              => s.category === 'AI & Language').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🗣️' },
    { id: 'AI Strategy', name: 'AI Strategy', count: allServices.filter(s              => s.category === 'AI Strategy').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🎯' },
    { id: 'AI Governance', name: 'AI Governance', count: allServices.filter(s              => s.category === 'AI Governance').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'⚖️' },
    { id: 'AI Talent', name: 'AI Talent', count: allServices.filter(s              => s.category === 'AI Talent').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🎓' },
    { id: 'AI R&D', name: 'AI R&D', count: allServices.filter(s              => s.category === 'AI R&D').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🔬' },
    { id: 'AI Operations', name: 'AI Operations', count: allServices.filter(s              => s.category === 'AI Operations').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'⚙️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s              => s.category === 'Cloud & DevOps').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'☁️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s              => s.category === 'Cybersecurity').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🔒' },
    { id: 'Data & Analytics', name: 'Data & Analytics', count: allServices.filter(s              => s.category === 'Data & Analytics').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'📈' },;
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s              => s.category === 'Edge Computing').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🌐' },;
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s              => s.category === 'Quantum Computing').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'⚛️' },;
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s              => s.category === 'Blockchain').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🔗' },;
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s              => s.category === 'Sustainability').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🌱' },;
    { id: 'Managed Services', name: 'Managed Services', count: allServices.filter(s              => s.category === 'Managed Services').length, icon: anyanyanyanyanyanyanyanyanyanyanyanyany'🔄' },;
    { id: 'Digital Transformation', name: 'Digital Transformation', count: allServices.filter(s              => s.category === 'Digital Transformation').length, icon: '🔄' };
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  ];

  // Combine all services
  const allServices = [
    ...allExpandedServices2028.microSaas.map(s => ({ ...s, type: 'micro-saas' })),
    ...allExpandedServices2028.itServices.map(s => ({ ...s, type: 'it-services' })),
    ...allExpandedServices2028.aiServices.map(s => ({ ...s, type: 'ai-services' })),
    ...allRevolutionaryServices2031.microSaas.map(s => ({ ...s, type: 'micro-saas' })),
    ...allRevolutionaryServices2031.itServices.map(s => ({ ...s, type: 'it-services' })),
    ...allRevolutionaryServices2031.aiServices.map(s => ({ ...s, type: 'ai-services' }))
  ];

  // Update category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = allServices.length;
      } else {
        cat.count = allServices.filter(s => s.type === cat.id).length;
      }
    });
  }, []);

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getInnovationColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (level) {;
      case 'Revolutionary':;
        return 'text-purple-400';
      case 'Advanced':
        return 'text-blue-400';
      case 'Innovative':
        return 'text-green-400';
      default:
        return 'text-gray-400';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {' '}2031
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge micro SAAS, IT services, and AI solutions 
              that are shaping the future of technology and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-300 mb-2" />
              <p className="text-blue-300 text-sm">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-300 mb-2" />
              <p className="text-purple-300 text-sm">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-green-300 mb-2" />
              <p className="text-green-300 text-sm">Address</p>
              <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category              => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name} ({category.count})
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="innovation">Innovation Level</option>
              <option value="roi">ROI</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                List
              </button>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </div>
          </div>

        {/* Services Grid */}
        <motion.div 
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.8,
  delay: 0.6 






}}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl mb-2">{getCategoryIcon(service.category)}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationColor(service.innovationLevel)} bg-white/10`}>
                  {service.innovationLevel}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                </span>
              </button>
            ))}
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
              initial = {
  { scale: 0.9,
  opacity: 0 






}}
              animate = {
  { scale: 1,
  opacity: 1 






}}
              exit = {
  { scale: 0.9,
  opacity: 0 






}}
              className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: anyanyanyanyanyanyanyanyanyanyanyanyanystring, idx: number)              => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase: anyanyanyanyanyanyanyanyanyanyanyanyanystring, idx: number)              => (
                        <span key={idx} className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-sm text-blue-300">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-2xl font-bold text-blue-400">
                          {selectedService.currency}{selectedService.price.toLocaleString()}/{selectedService.pricingModel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Delivery:</span>
                        <span className="text-white">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Support:</span>
                        <span className="text-white capitalize">{selectedService.supportLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience: anyanyanyanyanyanyanyanyanyanyanyanyanystring, idx: number)              => (
                        <span key={idx} className="px-3 py-1 bg-purple-600/20 border border-purple-400/30 rounded-full text-sm text-purple-300">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                    {selectedService.technicalSpecs && (
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-300 text-sm">Technology:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedService.technicalSpecs.technology.map((tech: anyanyanyanyanyanyanyanyanyanyanyanyanystring, idx: number)              => (
                              <span key={idx} className="px-2 py-1 bg-slate-600/50 rounded text-xs text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-300 text-sm">Uptime:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs.uptime}</span>
                        </div>
                        <div>
                          <span className="text-gray-300 text-sm">API Endpoints:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs.apiEndpoints}</span>
                        </div>
                      </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">
                      {service.pricing}
                    </span>
                    {service.marketPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {service.marketPrice}
                      </span>
                    )}
                  </div>
                  {service.roi && (
                    <p className="text-green-300 text-sm mt-1">
                      ROI: {service.roi}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.features.length > 4 && (
                    <p className="text-gray-400 text-xs mt-2">
                      +{service.features.length - 4} more features
                    </p>
                  )}
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <Target className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 5).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="mb-4 space-y-2 text-sm text-gray-400">
                  {service.setupTime && (
                    <div className="flex justify-between">
                      <span>Setup Time:</span>
                      <span className="text-white">{service.setupTime}</span>
                    </div>
                  )}
                  {service.freeTier && (
                    <div className="flex justify-between">
                      <span>Free Tier:</span>
                      <span className="text-green-400">Available</span>
                    </div>
                  )}
                  {service.trialPeriod && (
                    <div className="flex justify-between">
                      <span>Trial Period:</span>
                      <span className="text-white">{service.trialPeriod}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="flex gap-2">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://ziontechgroup.com"
                    className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're at the forefront of technological innovation, delivering cutting-edge solutions 
              that give your business a competitive advantage in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Leadership",
                description: "Pioneering the future with revolutionary AI, quantum computing, and blockchain solutions."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "World-class engineers, scientists, and business strategists with decades of experience."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC2, ISO27001, and GDPR compliant with military-grade security protocols."
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Consistent delivery of 200-1000% ROI for our clients across all industries."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group's revolutionary services. 
              Contact us today to discuss how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Icon components for categories
const Atom = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6"/>
    <path d="M3 12h6m6 0h6"/>
  </svg>
);

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3c5.5 2.5 5.5 10.5 0 13"/>
    <path d="M18 3c-5.5 2.5-5.5 10.5 0 13"/>
    <path d="M3 21l18-18"/>
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const Car = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 16H9m11 0h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1m-4 0H9m4 0V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/>
    <circle cx="6" cy="16" r="2"/>
    <circle cx="18" cy="16" r="2"/>
  </svg>
);

const Glasses = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="6" cy="12" r="4"/>
    <circle cx="18" cy="12" r="4"/>
    <path d="M10 12l4 0"/>
  </svg>
);

const Dna = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"/>
    <path d="M15 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2"/>
    <path d="M9 9h6"/>
    <path d="M9 15h6"/>
  </svg>
);

const Eye = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Bot = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
    <path d="M7 7h.01"/>
  </svg>
);

const Search = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

export default ComprehensiveServicesShowcase2031;