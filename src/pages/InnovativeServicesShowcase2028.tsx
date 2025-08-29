import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Award, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  BarChart3, 
  Calculator, 
  TrendingDown, 
  Crown, 
  Sparkles,
  Eye,
  Code,
  Database,
  Network,
  Smartphone,
  Palette,
  GraduationCap,
  Scale,
  Truck,
  Building2,
  Leaf
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from '../data/innovativeMicroSaasServices2028';
import { INNOVATIVE_IT_SERVICES_2028 } from '../data/innovativeITServices2028';
import { INNOVATIVE_AI_SERVICES_2028 } from '../data/innovativeAIServices2028';

const InnovativeServicesShowcase2028: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedServiceType, setSelectedServiceType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [innovationLevel, setInnovationLevel] = useState('All');

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2028.map(s => ({ ...s, type: 'Micro SaaS' })),
    ...INNOVATIVE_IT_SERVICES_2028.map(s => ({ ...s, type: 'IT Services' })),
    ...INNOVATIVE_AI_SERVICES_2028.map(s => ({ ...s, type: 'AI Services' }))
  ];

  const categories = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];
  const serviceTypes = ['All', 'Micro SaaS', 'IT Services', 'AI Services'];
  const innovationLevels = ['All', 'Basic', 'Advanced', 'Revolutionary'];

  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.tags?.some(t => t.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    // Filter by service type
    if (selectedServiceType !== 'All') {
      filtered = filtered.filter(s => s.type === selectedServiceType);
    }

    // Filter by price range
    if (priceRange !== 'All') {
      switch (priceRange) {
        case 'Under $2K':
          filtered = filtered.filter(s => s.price < 2000);
          break;
        case '$2K - $5K':
          filtered = filtered.filter(s => s.price >= 2000 && s.price < 5000);
          break;
        case '$5K - $10K':
          filtered = filtered.filter(s => s.price >= 5000 && s.price < 10000);
          break;
        case 'Over $10K':
          filtered = filtered.filter(s => s.price >= 10000);
          break;
      }
    }

    // Filter by innovation level
    if (innovationLevel !== 'All') {
      filtered = filtered.filter(s => s.innovationLevel === innovationLevel);
    }

    return filtered;
  }, [allServices, searchQuery, selectedCategory, selectedServiceType, priceRange, innovationLevel]);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Customer Experience':
      case 'AI & Finance':
      case 'AI & Operations':
      case 'AI & Human Resources':
      case 'AI & Legal':
      case 'AI & Marketing':
      case 'AI & Customer Success':
      case 'AI & Education':
      case 'AI & Content Creation':
      case 'AI & Healthcare':
        return Brain;
      case 'Cloud Computing':
      case 'Infrastructure':
        return Cloud;
      case 'Cybersecurity':
        return Shield;
      case 'Blockchain':
        return Lock;
      case 'IoT & Digital Twins':
        return Network;
      case 'Healthcare Tech':
        return Heart;
      case 'Sustainability':
        return Leaf;
      default:
        return Code;
    }
  };

  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'Micro SaaS':
        return 'from-blue-500 to-cyan-600';
      case 'IT Services':
        return 'from-purple-500 to-pink-600';
      case 'AI Services':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const stats = [
    { 
      label: 'Total Services', 
      value: allServices.length, 
      icon: Zap,
      description: 'Innovative solutions across all categories'
    },
    { 
      label: 'Micro SaaS', 
      value: INNOVATIVE_MICRO_SAAS_SERVICES_2028.length, 
      icon: Code,
      description: 'Ready-to-deploy software solutions'
    },
    { 
      label: 'IT Services', 
      value: INNOVATIVE_IT_SERVICES_2028.length, 
      icon: Cpu,
      description: 'Professional IT consulting & implementation'
    },
    { 
      label: 'AI Services', 
      value: INNOVATIVE_AI_SERVICES_2028.length, 
      icon: Brain,
      description: 'Cutting-edge artificial intelligence'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,000 - $5,000',
      description: 'Essential services for small businesses',
      features: ['Basic AI integration', 'Standard support', 'Core functionality'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Professional',
      price: '$5,000 - $10,000',
      description: 'Advanced solutions for growing companies',
      features: ['Advanced AI capabilities', 'Priority support', 'Custom integrations'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise',
      price: '$10,000+',
      description: 'Revolutionary solutions for large enterprises',
      features: ['Cutting-edge technology', '24/7 dedicated support', 'Full customization'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase 2028 - Zion Tech Group" 
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services designed for 2028 and beyond. Transform your business with cutting-edge technology solutions." 
        keywords="innovative services, micro SAAS, IT services, AI services, 2028, Zion Tech Group, technology solutions, digital transformation"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Services Showcase 2028
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              The Future of Technology Solutions
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Discover our comprehensive portfolio of revolutionary micro SAAS, IT infrastructure, and AI services 
            designed to transform your business and drive innovation in 2028 and beyond.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="tel:+13024640950"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-zion-cyan to-zion-blue p-6 rounded-lg">
                  <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-white font-semibold mb-2">{stat.label}</p>
                  <p className="text-zion-slate-light text-sm">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <a href="https://ziontechgroup.com" className="font-semibold hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing Structure</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect service tier for your business needs with our transparent pricing model
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${tier.color} p-8 rounded-lg text-white`}
              >
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <p className="text-lg mb-6 opacity-90">{tier.description}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+13024640950"
                  className="block w-full bg-white text-zion-blue py-3 px-6 rounded-lg font-semibold text-center hover:bg-zion-slate-light transition-colors"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {serviceTypes.map(type => (
                  <option key={type} value={type} className="bg-zion-blue-dark text-white">
                    {type}
                  </option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="All">All Prices</option>
                <option value="Under $2K">Under $2K</option>
                <option value="$2K - $5K">$2K - $5K</option>
                <option value="$5K - $10K">$5K - $10K</option>
                <option value="Over $10K">Over $10K</option>
              </select>
              
              <select
                value={innovationLevel}
                onChange={(e) => setInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-zion-blue-dark text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Discover {filteredServices.length} Innovative Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Each service is designed with cutting-edge technology and proven ROI to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${getServiceTypeColor(service.type)} p-6 rounded-lg text-white`}
              >
                <div className="flex items-start justify-between mb-4">
                  <getServiceIcon category={service.category} className="w-8 h-8" />
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">
                    {service.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm opacity-90 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">Market Price:</span>
                    <span className="font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">ROI:</span>
                    <span className="font-semibold text-green-300">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">Innovation:</span>
                    <span className="font-semibold">{service.innovationLevel}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white/20 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href="tel:+13024640950"
                    className="flex-1 bg-white text-zion-blue py-2 px-4 rounded text-center text-sm font-semibold hover:bg-zion-slate-light transition-colors"
                  >
                    <Phone className="w-4 h-4 inline mr-1" />
                    Call Now
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex-1 bg-transparent border border-white text-white py-2 px-4 rounded text-center text-sm font-semibold hover:bg-white hover:text-zion-blue transition-colors"
                  >
                    <Mail className="w-4 h-4 inline mr-1" />
                    Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join hundreds of businesses that have already revolutionized their operations with our innovative services. 
              Get started today and experience the future of technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+13024640950"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-slate-light transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-6 h-6" />
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Information */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;