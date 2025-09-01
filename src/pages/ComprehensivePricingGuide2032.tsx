import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
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
  Briefcase,
  Building,
  Car,
  Factory,
  Plane,
  Ship,
  Train,
  Truck,
  Warehouse,
  Store,
  ShoppingCart,
  CreditCard,
  ChartLine,
  Award,
  Trophy,
  Crown,
  Diamond,
  Gem,
  Cloud,
  Filter,
  Download,
  Print,
  Share2,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Sunrise,
  Sunset,
  Moon,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Zap,
  Flame,
  Fire,
  Sparkles,
  Star,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Loop,
  Refresh,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Stop,
  Record,
  Mic,
  Video,
  Camera,
  Image,
  Film,
  Music,
  Headphones,
  Speaker,
  Volume,
  Mute,
  Unmute,
  Maximize,
  Minimize,
  Fullscreen,
  ExitFullscreen,
  Expand,
  Compress,
  Move,
  Drag,
  Hand,
  Pointer,
  MousePointer,
  MousePointer2,
  MousePointerClick,
  MousePointerClick2,
  MousePointerOff,
  MousePointerOff2,
  MousePointerQuestion,
  MousePointerQuestion2,
  MousePointerX,
  MousePointerX2,
  MousePointerCheck,
  MousePointerCheck2,
  MousePointerMinus,
  MousePointerMinus2,
  MousePointerPlus,
  MousePointerPlus2,
  MousePointerSearch,
  MousePointerSearch2,
  MousePointerText,
  MousePointerText2,
  MousePointerCode,
  MousePointerCode2,
  MousePointerEdit,
  MousePointerEdit2,
  MousePointerMove,
  MousePointerMove2
} from 'lucide-react';
import { INNOVATIVE_SERVICES } from '../data/servicesData';

export default function ComprehensivePricingGuide2032() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: INNOVATIVE_SERVICES.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('AI')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'DevOps', name: 'DevOps & Infrastructure', icon: Server, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('DevOps')).length },
    { id: 'Healthcare', name: 'Healthcare & AI', icon: Activity, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Healthcare')).length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: Cpu, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Edge')).length },
    { id: 'Legal Tech', name: 'Legal Tech & AI', icon: Scale, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Legal')).length },
    { id: 'Customer Success', name: 'Customer Success & AI', icon: Users, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Customer')).length },
    { id: 'FinTech', name: 'FinTech & AI', icon: Coins, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('FinTech')).length },
    { id: 'Supply Chain', name: 'Supply Chain & AI', icon: Truck, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'Content', name: 'Content & AI', icon: FileText, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Content')).length },
    { id: 'SEO', name: 'SEO & AI', icon: Search, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('SEO')).length },
    { id: 'IoT', name: 'IoT & AI', icon: Wifi, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('IoT')).length },
    { id: 'HR', name: 'HR & AI', icon: Users2, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('HR')).length },
    { id: 'Sales', name: 'Sales & AI', icon: Target, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Sales')).length },
    { id: 'Compliance', name: 'Compliance & AI', icon: ShieldCheck, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Compliance')).length },
    { id: 'Cloud', name: 'Cloud & FinOps', icon: Cloud, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Cloud')).length },
    { id: 'Manufacturing', name: 'Manufacturing & AI', icon: Factory, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Manufacturing')).length },
    { id: 'Space Tech', name: 'Space Tech & AI', icon: Satellite, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Space')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0 - $999)', range: '0-999' },
    { id: 'professional', name: 'Professional ($1,000 - $2,999)', range: '1000-2999' },
    { id: 'enterprise', name: 'Enterprise ($3,000 - $5,999)', range: '3000-5999' },
    { id: 'premium', name: 'Premium ($6,000+)', range: '6000+' }
  ];

  const sortOptions = [
    { id: 'price', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-desc', name: 'Price: High to Low', icon: DollarSign },
    { id: 'roi', name: 'ROI: High to Low', icon: TrendingUp },
    { id: 'innovation', name: 'Innovation Level', icon: Rocket },
    { id: 'delivery', name: 'Delivery Time', icon: Clock }
  ];

  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    let matchesPrice = true;
    if (priceRange === 'budget') matchesPrice = service.price <= 999;
    else if (priceRange === 'professional') matchesPrice = service.price >= 1000 && service.price <= 2999;
    else if (priceRange === 'enterprise') matchesPrice = service.price >= 3000 && service.price <= 5999;
    else if (priceRange === 'premium') matchesPrice = service.price >= 6000;
    
    return matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'roi':
        const aRoi = parseInt(a.roi.split('-')[0]);
        const bRoi = parseInt(b.roi.split('-')[0]);
        return bRoi - aRoi;
      case 'innovation':
        const innovationOrder = { 'Advanced': 1, 'Cutting-edge': 2, 'Revolutionary': 3 };
        return innovationOrder[a.innovationLevel] - innovationOrder[b.innovationLevel];
      case 'delivery':
        const aDelivery = parseInt(a.estimatedDelivery.split('-')[0]);
        const bDelivery = parseInt(b.estimatedDelivery.split('-')[0]);
        return aDelivery - bDelivery;
      default:
        return 0;
    }
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  const totalValue = INNOVATIVE_SERVICES.reduce((sum, service) => sum + service.price, 0);
  const averagePrice = Math.round(totalValue / INNOVATIVE_SERVICES.length);
  const maxROI = Math.max(...INNOVATIVE_SERVICES.map(s => parseInt(s.roi.split('-')[1] || s.roi.split('-')[0])));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Pricing Guide 2032 - Zion Tech Group</title>
        <meta name="description" content="Complete pricing guide for all Zion Tech Group's innovative AI-powered micro SAAS services, IT solutions, and technology platforms. Find the perfect solution for your budget and needs." />
        <meta name="keywords" content="pricing guide, AI services pricing, micro SAAS pricing, IT solutions cost, technology services pricing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2032" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Pricing Guide 2032</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete pricing transparency for all our innovative AI-powered services. Find the perfect solution that fits your budget and delivers maximum ROI.
            </p>
            
            {/* Pricing Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-400">{INNOVATIVE_SERVICES.length}+</div>
                <div className="text-gray-300">Services Available</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-400">${averagePrice.toLocaleString()}</div>
                <div className="text-gray-300">Average Price</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-400">{maxROI}%</div>
                <div className="text-gray-300">Max ROI</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-gray-300">Categories</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Pricing Guide 2032 Inquiry`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Download Full Guide
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Filter & Sort Services</h3>
            
            {/* Category Filters */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Service Categories</h4>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-white/20 text-white hover:border-cyan-500/50 hover:bg-cyan-500/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                    <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filters */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Price Range</h4>
              <div className="flex flex-wrap gap-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm ${
                      priceRange === range.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-white/20 text-white hover:border-cyan-500/50 hover:bg-cyan-500/10'
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h4 className="text-white font-semibold mb-3">Sort By</h4>
              <div className="flex flex-wrap gap-3">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`flex items-center px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm ${
                      sortBy === option.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-white/20 text-white hover:border-cyan-500/50 hover:bg-cyan-500/10'
                    }`}
                  >
                    <option.icon className="w-4 h-4 mr-2" />
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-400">
              Showing {filteredServices.length} of {INNOVATIVE_SERVICES.length} total services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      {service.innovationLevel}
                    </span>
                    <span className="text-2xl font-bold text-cyan-400">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-cyan-400 font-semibold">ROI</div>
                      <div className="text-white">{service.roi}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-cyan-400 font-semibold">Market Size</div>
                      <div className="text-white text-xs">{service.marketSize}</div>
                    </div>
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technical Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-cyan-400 font-semibold">API Endpoints</div>
                        <div className="text-white">{service.technicalSpecs.apiEndpoints}</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-cyan-400 font-semibold">Uptime</div>
                        <div className="text-white">{service.technicalSpecs.uptime}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact and CTA */}
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                  <div className="text-center text-xs text-gray-400">
                    Contact: {contactInfo.phone} | {contactInfo.email}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing Tiers Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Budget Tier",
                price: "$0 - $999",
                description: "Perfect for startups and small businesses",
                features: ["Essential features", "Standard support", "Basic integrations", "Community forum"],
                icon: Leaf,
                color: "from-green-500 to-emerald-600"
              },
              {
                name: "Professional Tier",
                price: "$1,000 - $2,999",
                description: "Ideal for growing businesses and teams",
                features: ["Advanced features", "Priority support", "Full integrations", "Email support"],
                icon: Briefcase,
                color: "from-blue-500 to-cyan-600"
              },
              {
                name: "Enterprise Tier",
                price: "$3,000 - $5,999",
                description: "Built for large organizations",
                features: ["Enterprise features", "24/7 support", "Custom integrations", "Dedicated manager"],
                icon: Building,
                color: "from-purple-500 to-pink-600"
              },
              {
                name: "Premium Tier",
                price: "$6,000+",
                description: "For mission-critical applications",
                features: ["Premium features", "White-glove support", "Custom development", "SLA guarantees"],
                icon: Crown,
                color: "from-yellow-500 to-orange-600"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${tier.color} rounded-full`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <ul className="text-left space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can create a tailored solution that perfectly fits your specific requirements and budget.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-300">{contactInfo.phone}</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-300">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-gray-300 text-sm">{contactInfo.address}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Custom Solution Inquiry`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive range of innovative services and start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Pricing Guide 2032`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Mail className="w-6 h-6 mr-2" />
                Email {contactInfo.email}
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit us at: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">{contactInfo.website}</a></p>
              <p className="mt-2">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}