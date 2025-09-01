import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Brain, 
  Shield, 
  Rocket, 
  Globe, 
  Cpu, 
  Database,
  Lock,
  Code,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Heart,
  Zap,
  Target,
  Award,
  BarChart3,
  Settings,
  Smartphone,
  Cloud,
  Server,
  Network,
  Eye,
  Key,
  Satellite,
  Plane,
  Scale,
  Leaf,
  MessageCircle,
  Building,
  Truck,
  Factory,
  ShoppingCart,
  Car,
  Plane,
  Ship,
  Train,
  Wifi,
  Bluetooth,
  Radio,
  Monitor,
  Camera,
  Microphone,
  Speaker,
  Battery,
  Power,
  Lightbulb,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Umbrella,
  Compass,
  Navigation,
  Map,
  Location,
  Pin,
  Home,
  Office,
  Store,
  Hospital,
  School,
  Bank,
  Government,
  Military,
  Police,
  Fire,
  Ambulance,
  Rescue,
  Security,
  Privacy,
  Safety,
  Health,
  Fitness,
  Medical,
  Dental,
  Pharmacy,
  Laboratory,
  Research,
  Science,
  Technology,
  Innovation,
  Creativity,
  Design,
  Art,
  Music,
  Video,
  Photo,
  Document,
  File,
  Folder,
  Archive,
  Backup,
  Sync,
  Share,
  Download,
  Upload,
  Import,
  Export,
  Print,
  Scan,
  Fax,
  Copy,
  Paste,
  Cut,
  Undo,
  Redo,
  Save,
  Load,
  New,
  Open,
  Close,
  Exit,
  Enter,
  Login,
  Logout,
  Register,
  Signup,
  Profile,
  Account,
  Settings,
  Preferences,
  Configuration,
  Setup,
  Install,
  Uninstall,
  Update,
  Upgrade,
  Downgrade,
  Version,
  Release,
  Beta,
  Alpha,
  Stable,
  Development,
  Production,
  Testing,
  Debug,
  Error,
  Warning,
  Info,
  Success,
  Failure,
  Pass,
  Fail,
  Yes,
  No,
  True,
  False,
  On,
  Off,
  Enable,
  Disable,
  Activate,
  Deactivate,
  Start,
  Stop,
  Pause,
  Resume,
  Play,
  Record,
  Live,
  Stream,
  Broadcast,
  Publish,
  Subscribe,
  Follow,
  Like,
  Love,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Comment,
  Reply,
  Forward,
  Back,
  Next,
  Previous,
  First,
  Last,
  Top,
  Bottom,
  Left,
  Right,
  Up,
  Down,
  Center,
  Middle,
  Front,
  Behind,
  Inside,
  Outside,
  Above,
  Below,
  Near,
  Far,
  Close as CloseIcon,
  Distance,
  Time,
  Date,
  Calendar,
  Schedule,
  Reminder,
  Alarm,
  Timer,
  Stopwatch,
  Hourglass,
  Watch,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Schedule as ScheduleIcon,
  Reminder as ReminderIcon,
  Alarm as AlarmIcon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon,
  Watch as WatchIcon
} from 'lucide-react';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '@/data/revolutionaryMicroSaasServices2025';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '@/data/revolutionaryMicroSaasServices2025';

export default function RevolutionaryServicesShowcase2025() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Combine all services
  const allServices = [
    ...REVOLUTIONARY_MICRO_SAAS_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum-technology', name: 'Quantum Technology', icon: Rocket, color: 'from-zion-purple to-zion-blue' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-blue to-zion-cyan' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'space-technology', name: 'Space Technology', icon: Satellite, color: 'from-zion-blue to-zion-cyan' },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green' },
    { id: 'financial-technology', name: 'Financial Technology', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-zion-green to-zion-blue' },
    { id: 'legal-technology', name: 'Legal Technology', icon: Scale, color: 'from-zion-blue to-zion-purple' },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Drone, color: 'from-zion-blue to-zion-purple' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$1,000 - $5,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$5,000 - $10,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$10,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'innovation', name: 'Innovation Level' },
    { id: 'roi', name: 'ROI Potential' }
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {

    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price < 5000) ||
                        (selectedPriceRange === 'mid-range' && service.price >= 5000 && service.price < 10000) ||
                        (selectedPriceRange === 'enterprise' && service.price >= 10000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {

    switch (sortBy) {

      case 'price-low':
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

  const getCategoryIcon = (category: string) => {

    const categoryData = categories.find(cat => cat.id === category.toLowerCase().replace(' ', '-'));
    return categoryData ? categoryData.icon : Zap;
  };

  const getInnovationBadgeColor = (level: string) => {

    switch (level) {

      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      default:
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
    }
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent"
          >
            Revolutionary Services 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Discover the future of technology with our cutting-edge micro SAAS services. 
            From AI-powered autonomous systems to quantum computing solutions, 
            we're revolutionizing how businesses operate in the digital age.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <GlobeIcon className="h-5 w-5" />
              <span>ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate rounded-xl p-6 border border-zion-slate-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getInnovationBadgeColor(service.innovationLevel)}`}>
                      {getCategoryIcon(service.category.toLowerCase().replace(' ', '-')) && 
                        React.createElement(getCategoryIcon(service.category.toLowerCase().replace(' ', '-')), {

                          className: "h-6 w-6 text-white"
                        })
                      }
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationBadgeColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="space-y-4 mb-6">
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Starting Price:</span>
                    <span className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </span>
                  </div>

                  {/* Market Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Market Price:</span>
                    <span className="text-zion-slate-light">{service.marketPrice}</span>
                  </div>

                  {/* ROI */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">ROI Potential:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>

                  {/* Delivery */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Delivery:</span>
                    <span className="text-zion-slate-light">{service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <span className="text-xs text-zion-cyan">+{service.features.length - 4} more features</span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-xs text-zion-slate-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 3).map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-slate-dark text-xs text-zion-slate-light rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technicalSpecs.technology.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-slate-dark text-xs text-zion-slate-light rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Market Size */}
                {service.marketSize && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Market Size</h4>
                    <span className="text-xs text-zion-slate-light">{service.marketSize}</span>
                  </div>
                )}

                {/* Contact Information */}
                <div className="border-t border-zion-slate-light pt-4">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Get Started Today</h4>
                    <div className="space-y-2 text-xs text-zion-slate-light">
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <GlobeIcon className="h-4 w-4" />
                        <span>{service.contactInfo.website}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold text-center block hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                  >
                    Request Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-zion-slate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our revolutionary services are designed to give you a competitive edge in the digital age. 
            Contact us today to learn how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-zion-cyan text-zion-cyan py-4 px-8 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}